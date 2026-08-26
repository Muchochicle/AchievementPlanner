# Phase 76 — Real Roadmap & About Pages (Closing the Nav's "Soon" Placeholders)

Continuing the Phase 71+ priority, reinforced by the user after Phase 75: move fast toward a genuinely finished public MVP, prioritizing visible unfinished areas over minor bug-hunting, and not repeating already-done deploy prep (Railway/GitHub Pages, Phase 75).

## 1. Verified baseline

- `HEAD` = `origin/main` = `0698f4a` (`docs: record Phase 75's own commit hash in PHASE_75_AUDIT.md`).
- Full test suite (`npm test` from repo root, recurses into `backend/test/`): 861/861 passing at baseline.
- `git status --short` at baseline: the same 24 pre-existing unstaged phase-report deletions, untouched.

## 2. Fresh product inventory

Read every top-level page (index.html, game.html, games.html, guide.html, guides.html, podiums.html, profile.html) and the primary flows (catalog → game detail → session plan → progress/podiums → guides), and re-ran the "coming soon"/TODO/placeholder grep across `src/` and `backend/` fresh rather than trusting Phase 73's sweep.

Findings:
- Almost everything flagged by the grep is an honest, correctly-scoped empty state (achievement icon placeholders, search input placeholder text, a `Loading leaderboard...` message) - not a real gap. One is dead code: `src/js/guides.js:33`'s "Game-specific achievement guides are coming soon" branch is unreachable now that `GAME_GUIDES` has 5 entries (`GAME_GUIDES.length` is truthy, so that ternary's other branch always wins) - noted, not touched (removing genuinely dead but harmless code wasn't the highest-impact finding, and touching it risks nothing but also fixes nothing visible).
- **The standout, highest-visibility finding:** `src/components/nav-links/nav-links.js` (pre-phase, lines 41-49) hardcoded two permanently-disabled nav items - `<span class="nav-link-disabled" aria-disabled="true">Roadmap <span class="nav-link-soon">Soon</span></span>` and the same for `About`. This renders in the primary navigation on **every single page of the site** - the single most-repeated "this looks unfinished" signal on the whole product, worse than any one-off placeholder because it's structurally permanent (there's no code path that ever makes it real) and visible before a visitor does anything at all.
- Secondary, smaller finding surfaced while writing the About page's "Your Steam Data" section: `src/data/guides/app/steam-login-and-your-data.js`'s own header comment (verified current, Phase 37) states there is no logout route or logout UI anywhere in the app. Confirmed still true (`backend/routes/steam.js` has no logout route; grepped the whole frontend/backend for "logout" - nothing). Real, but scoped to a different subsystem (session/account UI, not navigation) - not implemented this phase, added as an honest "Planned" roadmap item instead (see §3) rather than scope-creeping into an account-management feature mid-phase.
- Checked `profile.html`/`podiums.html`/`games.html` structurally - all fully wired to real data, no stub markers found beyond the two already covered by Phases 73/74. Checked for a 404/error page - none exists, but every internal link in this app is generated from real catalog/guide data (no user-typed URLs to mistype), so this is a much lower-visibility gap than the nav; not pursued this phase.

**Highest-impact target chosen:** ship real Roadmap and About pages, closing both "Soon" placeholders. This is a product-scope decision within this phase's delegated authority - both items were comparably scoped and tightly related (same nav change, same new-static-page pattern), so no need to stop and ask which to build.

## 3. Feature implemented: Roadmap and About pages

- **`about.html`** (new) - what AchievementPlanner is, how it works (browse → log in → track progress → climb Podiums), a Steam-data privacy summary that links to the existing `guide.html?slug=steam-login-and-your-data` guide instead of duplicating it, and a "Not affiliated with Valve" disclaimer (the app displays Steam game names/achievement data/artwork, so this is a real, not decorative, disclaimer). Reuses the existing `.guide-content`/`.guide-content-section` CSS classes verbatim for visual consistency with the Guides section - no new CSS needed for this page.
- **`roadmap.html`** (new) - two sections: "What's Next" (4 items: live public deployment, a log out button, more catalog games, community-suggested games/deeper Steam sync as "Considering") and "Recently Shipped" (3 highlights: server-side progress, persistent sessions, complete game guides). Every item is a real, currently-true gap or a real, already-shipped feature pulled from this project's own phase-audit history and current source - not invented marketing copy (see `src/data/roadmap.js`'s own header comment for the "keep this in sync or don't ship it" rule going forward).
- **`src/data/roadmap.js`** (new) - the roadmap's data, separated from rendering, matching `src/data/guides/`'s existing convention.
- **`src/components/roadmap-item/roadmap-item.js` + `.css`** (new) - one reusable card component (Planned/Considering/Shipped status badge + title + body), matching `guide-card.js`'s "smallest clean architecture, parameterized entirely by its own data object" convention. Escapes all user-facing text via the existing `escapeHtml` utility.
- **`src/js/roadmap.js` / `src/js/about.js`** (new) - both are the same lightweight `loadNavbar()` + `document.title` pattern `guides.js` already established for static, non-fetching pages.
- **`src/components/nav-links/nav-links.js`** (modified) - the two disabled `<span>` placeholders replaced with real `<a href="roadmap.html">`/`<a href="about.html">` links, following the exact same active-state/`aria-current` pattern already used for Games/Podiums/Guides.
- **Dead-CSS cleanup** (direct consequence of the above, not scope creep): `.nav-link-disabled`/`.nav-link-soon` in `navbar.css` had no remaining callers once the placeholders were removed - deleted. `game-guide-notice.css`'s comment referencing `.nav-link-soon` as shared visual language updated to stop citing a class that no longer exists.
- **`src/css/style.css`** - one new `@import` line for `roadmap-item.css`, matching the existing per-component import convention.

## 4. Regression tests — 4 new/modified files (net +17 tests)

- **`test/roadmapItem.test.js`** (new, 5 tests) - text rendering, all 3 status labels, unknown-status fallback, the status-specific modifier class, HTML-escaping (title and body).
- **`test/roadmapData.test.js`** (new, 2 tests) - `ROADMAP_ITEMS` is non-empty with only `planned`/`considering` statuses (never `shipped` - that's applied by `roadmap.js` at render time, not stored), `SHIPPED_HIGHLIGHTS` is non-empty and deliberately carries no `status` field of its own.
- **`test/navLinks.test.js`** (modified) - replaced the old "Roadmap/About always render disabled" test (no longer true) with 3 new tests: Roadmap active-state, About active-state, and a direct assertion that neither disabled-placeholder class nor markup survives.
- **`test/pageTitle.test.js`** / **`test/skipLink.test.js`** (modified) - both hardcode the site's full page list for their respective a11y/title-consistency checks; added `roadmap.html`/`about.html` to both so the new pages get the exact same enforced guarantees (skip-link-first, focusable `<main>`, consistent title-suffix convention) as every other page, not a weaker standard.

## 5. Test results

Full root suite (`npm test`, recurses into backend): **878/878 passing** (861 baseline + 17 net new - 7 new test files' worth of assertions, offset by 1 replaced test in `navLinks.test.js` becoming 3).

## 6. Live verification

- Started the real, unmodified `backend/server.js` (port 3000) and a minimal zero-rewrite static file server for the frontend (port 5501, a small inline Node script - avoids the `serve`/`http-server` query-string-rewriting artifact Phases 72/73 already documented, not relevant here anyway since these are query-string-free URLs).
- `roadmap.html`: confirmed via screenshot both "What's Next" (4 cards, correct Planned/Considering badges) and "Recently Shipped" (3 cards, Shipped badge in the accent color) render correctly; "Roadmap" shows active/highlighted in the nav.
- `about.html`: confirmed via screenshot all 4 sections render correctly; clicked the "Steam Login & Your Data guide" link and confirmed it navigates to the real, existing `guide.html?slug=steam-login-and-your-data` page (which itself shows "Guides" correctly active in the nav, confirming the cross-link is genuine, not a dead href).
- `index.html`: confirmed the navbar now shows real "Roadmap" and "About" links (no "Soon" badges) - this is the highest-visibility part of the change, and it's live on the homepage, not just the two new pages themselves.
- Zero console errors on any of the three pages (checked via `read_console_messages`, `onlyErrors: true`).
- **Not live-tested:** an actual logged-in session's view of these pages (both are identical for logged-in/logged-out visitors by design - no session-dependent content) - not a gap, just not applicable. Docker/Railway deployment itself - unchanged from Phase 74/75's stated limitation (Docker unavailable in this environment).
- Cleaned up: both dev servers killed, browser tab closed.

## 7. Diff review

`git status --short` after implementation: 8 new files (`about.html`, `roadmap.html`, `src/data/roadmap.js`, `src/components/roadmap-item/roadmap-item.js`, `src/components/roadmap-item/roadmap-item.css`, `src/js/about.js`, `src/js/roadmap.js`, plus this audit doc), 2 new test files, 7 modified files (`src/components/nav-links/nav-links.js`, `src/components/navbar/navbar.css`, `src/components/game-guide-notice/game-guide-notice.css`, `src/css/style.css`, `test/navLinks.test.js`, `test/pageTitle.test.js`, `test/skipLink.test.js`) - plus the same 24 pre-existing unstaged phase-report deletions, unchanged and untouched. No backend code, no unrelated frontend subsystem (planner/Steam/XP/podiums/catalog/localStorage) touched.

## 8. Commit / push

Committed and pushed to `origin/main`.

## 9. Phase-end report

- **Major functionality/section completed:** the site's primary navigation - present on every page - no longer advertises two permanently-unbuildable "Soon" placeholders. Roadmap and About are both real, complete, live-verified pages with genuine content (not stubs): an honest public roadmap sourced from this project's own real history/gaps, and an About page explaining the product, how it works, and its Steam-data/affiliation posture.
- **Product completeness: ~75-80% before this phase → ~80-85% after.** This closes the single most-repeated "looks unfinished" signal in the product (visible on literally every page load, not just one feature's detail view), which is disproportionately high-impact for its implementation size.
- **What a user can now do that they couldn't before:** click "Roadmap" or "About" in the nav and land on a real, useful page instead of a dead disabled label - including a first-time visitor deciding whether to trust/use the product (About) and an existing user checking whether something they want is already planned (Roadmap), including full transparency that logout is a known, planned gap rather than an accidental oversight.
- **What's still missing before publication:** no actual live deployment yet (Phase 74/75 made this possible, not done - unchanged). No logout button (newly surfaced this phase, now honestly listed on the Roadmap itself rather than hidden). No admin/self-serve catalog-authoring path (unchanged, flagged since Phase 72). No 404/error page for a mistyped URL (low-visibility, since every in-app link is generated, not user-typed - lowest priority of the four).
- **Next highest-impact phase:** a real logout control (small, self-contained, closes a genuine session-management gap the app has openly lacked since Phase 37) - or, if the user has by then completed the Railway/GitHub Pages deployment from Phase 75, a live round-trip validation phase (real Steam login → redeploy → confirm session/progress survived) would be the strongest remaining proof point before calling this publication-ready.
