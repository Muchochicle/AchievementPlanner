# Phase 30 — Pre-Implementation Audit & Proposal

**Status: READ-ONLY. No application source code was modified to produce this document. Nothing has been staged, committed, or pushed. This is the only file created for this task.**

Phase 29 is treated as closed and was not reopened, reverted, or re-touched in any way while producing this audit.

---

## 1. Repository / HEAD status

Verified directly, freshly, this session:

- **Working tree:** clean — `git status` reports "nothing to commit, working tree clean."
- **Current HEAD:** `a7ff6fba16a8c1545d06e16e01195e978a932b7e` (matches the `a7ff6fb` short hash you reported).
- **Branch:** `main`.
- **Sync with origin:** confirmed synchronized — `git log origin/main..HEAD` and `git log HEAD..origin/main` are both empty (no commits ahead or behind in either direction).
- **Recent history:**
  ```
  a7ff6fb Phase 29: add shared primary-action button styling
  65ec976 Phase 28: harden data integrity and improve app UX
  5e8f29d feat: expand profile and player experience
  dd64272 feat: redesign profile page
  ```
- **Phase 29 commit presence and contents verified** via `git show --stat a7ff6fb`:
  ```
  PHASE_29_AUDIT.md                                  | 223 +++++++++++++++++++++
  Phase_29_Implementation_Report.md                  | 121 +++++++++++
  src/components/achievement-filters/achievement-filters.css    |   2 +-
  src/components/catalog-card/catalog-card.css       |   3 +++
  src/components/navbar/navbar.css                   |   2 +-
  src/components/steam-achievement-card/steam-achievement-card.css |   2 +-
  src/components/ui/buttons.css                      |  51 +++++
  src/css/style.css                                  |   1 +
  src/css/variables.css                               |   1 +
  9 files changed, 403 insertions(+), 3 deletions(-)
  ```
  This matches the Phase 29 implementation report exactly — the same six CSS/token files plus the new `ui/buttons.css`, plus both Phase 29 report documents (which were committed directly this time, unlike Phase 27/28's reports which were gitignored). **No discrepancy found.**
- **No uncommitted Phase 29 implementation remains** — confirmed by the clean working tree above; every file the Phase 29 report claimed to have created/modified is present in the commit and nowhere else (no stray uncommitted duplicates).
- **`PHASE_30_AUDIT.md` did not exist prior to this document** — confirmed via a direct existence check before writing. This is a fresh document, not an update to a stale one.

## 2. Audit methodology

This audit does not rely on any prior phase report's claims without independent re-verification against the actual files at HEAD `a7ff6fb`. Concretely, this session:

- Re-read `index.html`, `games.html`, `game.html`, `profile.html` in full.
- Re-read `src/js/app.js`, `src/js/games.js`, `src/js/game.js`, `src/js/profile.js`, `src/js/layout.js` in full (all already familiar from prior phases in this conversation, but re-confirmed against current HEAD, not memory).
- Freshly grepped the entire `src/` tree for hardcoded hex colors, confirming the current post-Phase-29 landscape (see section 5).
- Freshly grepped for `openid-client` usage across the backend source (excluding `node_modules`) after noticing it listed in `backend/package.json`.
- Read `backend/server.js`, `backend/package.json` in full for the first time with a security/config lens this session.
- Freshly grepped for `createGamesSidebar(` usage across the entire repository and confirmed `games-sidebar.css` is not present in `style.css`'s import list — this is a **new finding**, not previously reported in any prior phase.
- Freshly grepped for the `<button>×</button>` filter-chip markup in `games.js` and confirmed it carries no accessible name.
- Re-verified, with fresh commands (not memory), the state of every item previously flagged as debt or a defect: Popular Games curation, Guides/Roadmap/About nav links, the five (now four) empty scaffold directories, `player-widget.css`'s progress-bar variant, `README.md`'s stale color value, and the previously-fixed `.planner-btn`/on-primary-token items.
- Checked `.gitignore` directly for stale entries.
- Checked for a `.env.example` file and confirmed none exists.

## 3. Current architecture overview

Confirmed unchanged in shape since the last full architecture read (Phase 27/28), re-verified at current HEAD:

- **Frontend:** vanilla ES modules, no framework, no build step. Four HTML entry pages (`index.html`, `games.html`, `game.html`, `profile.html`), each loading one `src/js/*.js` entry script that dynamically builds the page via template-literal-returning component functions from `src/components/*/`.
- **CSS:** aggregated via a single `@import` chain in `src/css/style.css`, sourced from `reset.css` + `variables.css` (design tokens) + one stylesheet per component. No CSS scoping — global class names, meaning cross-component class reuse is a real, deliberate, and already well-documented pattern (`.progress-bar`/`.progress-fill`, `.achievement-empty`, and now `.btn-primary`/`.planner-btn` from Phase 29).
- **Persistence:** `localStorage`, all reads now routed through the shared `safeParseJSON` guard (Phase 28) for the player/inventory/session/planner-progress keys.
- **Steam integration:** OpenID 2.0 login flow (`backend/services/steamAuth.js`, hand-rolled, not using the declared `openid-client` dependency — see section 6), Steam Web API calls with caching and timeouts (`backend/services/steamApi.js`, `backend/utils/cache.js`), session-cookie-based auth (`express-session`).
- **Planner/achievement system:** Steam is the sole source of truth for achievement completion (`isEntryCompleted()` in `completion.js`); no manual/local fallback exists anywhere. `mergeAchievements()` (backend) reconciles the local planner catalog with Steam's schema and the player's unlock state.
- **XP/level system:** derived purely from `player.totalXP` via `levelSystem.js`/`titleSystem.js`, recomputed on every `getPlayer()` call.
- **Profile system:** hero (identity/avatar/XP), stats grid, badges, avatar picker, and a "Your Games" completed/in-progress section — all built across Phases 26-27, re-verified unchanged this session.
- **Navigation:** a single shared `navbar.js`/`nav-links.js` pair, loaded via `layout.js#loadNavbar()` on every page; "Games" gets an active-state class (Phase 28); `Guides`/`Roadmap`/`About` remain unimplemented placeholders.
- **Backend:** Express 5, three route modules (`steam.js`, `api.js`, `games.js`), a controller/services/utils layered structure for the Steam integration, an in-memory TTL cache, and a local JSON-file-backed planner catalog (`backend/utils/plannerCatalog.js` reads `src/data/games/*.json`).

## 4. Phase 29 verification

Already covered in detail in section 1. Summary: **Phase 29 is fully, correctly, and exclusively present in commit `a7ff6fb`.** Every file it claims to have touched is touched, nothing else was touched, and the working tree carries zero leftover uncommitted changes from it. No action needed; Phase 29 is not reopened by this audit.

## 5. Previously known findings re-evaluated

All re-checked fresh against current HEAD, not cited from memory:

| Finding | Status at HEAD `a7ff6fb` |
|---|---|
| `.planner-btn` had no base styling | **Resolved by Phase 29.** Confirmed: `ui/buttons.css` now styles it (`background:var(--primary); color:var(--on-primary);` and full padding/radius/hover/focus treatment), included directly in the shared `.btn-primary, .planner-btn` rule. |
| Divergent on-primary text colors (`#0b1220`/`#fff`/`#fff` across three files) | **Resolved by Phase 29.** All three now use `var(--on-primary)`. Fresh repo-wide grep for hex colors in `src/components/**/*.css` now returns only 2 matches total (down from 5) — see next two rows. |
| `navbar.css`'s hardcoded `background:#1b2435` | **Still present, unchanged.** Re-assessed again: this is the navbar's own surface shade, distinct from `--surface`, appearing on every page. Still judged a deliberate visual-layering choice, not a defect — no token exists for it and introducing one would be a cosmetic call, not a fix. |
| `player-widget.css`'s own progress-bar variant + `#6fd3ff` gradient stop | **Still present, unchanged.** Re-assessed again: legitimate compact-widget context (6px bar, two-color gradient), not a defect. |
| "Popular Games" shows the full 147-game catalog, unsorted | **Still present, unchanged.** `src/js/app.js` was not touched by Phase 29; still `games.map(game => createCatalogCard(game)).join("")` with no curation. Still a product/content decision, not a bug. |
| `Guides`/`Roadmap`/`About` nav links are dead-end `href="#"` | **Still present, unchanged.** `nav-links.js` was not touched by Phase 29. Still a product decision. |
| `README.md`'s primary color (`#3EA6FF`) doesn't match `--primary` (`#38BDF8`) | **Still present, unchanged.** Trivial documentation drift. |
| Five empty, git-untracked scaffold directories | **Now four.** `src/components/ui/` is no longer empty — it now contains `buttons.css` (Phase 29). `achievement-card/`, `guide-card/`, `layout/`, `planner-summary/` remain empty and untracked, exactly as before. |
| `.gitignore` entries for old phase report filenames | **New observation this session, but a very old artifact.** `.gitignore` still lists `PHASE_27_REPORT.md` and `PHASE_28_REPORT.md`, both of which no longer exist on disk (neither was committed; Phase 29's reports were committed directly instead, without gitignore entries). Two harmless stale lines. |

## 6. New findings

Not present in any prior phase report in this conversation. Each is backed by a specific command/grep result, reproduced below.

### 6.1 `src/components/games-sidebar/` is entirely dead code

- `createGamesSidebar` is exported from `src/components/games-sidebar/games-sidebar.js` (a "Filters" sidebar with Difficulty/Completion Time checkboxes — an apparent earlier iteration of the filtering UI).
- Repo-wide grep for `createGamesSidebar(` (the call form) returns **zero results anywhere in the repository** — only the export-site definition matches a broader `createGamesSidebar|games-sidebar` search.
- `src/components/games-sidebar/games-sidebar.css` is **not present anywhere in `src/css/style.css`'s import list** — confirmed by direct grep.
- The real, actually-wired filtering UI on `games.html` comes from `src/components/catalog-filters/catalog-filters.js` (`createCatalogFilters`), which **is** imported into `games.js` and **is** styled via `catalog-filters.css`, which **is** imported into `style.css`.

**Conclusion:** `games-sidebar.js` and `games-sidebar.css` are a complete, self-contained, superseded component with zero live references of any kind (no JS call site, no CSS import, no HTML reference). This is more substantial dead code than the previously-found empty stub files — it's a fully-written but entirely unreachable component.

### 6.2 Filter-chip "remove" buttons have no accessible name

In `src/js/games.js`'s `renderFilterChips()` function, each active-filter chip is built as:
```js
chip.innerHTML = `
    <span>${filter.parentElement.textContent.trim()}</span>
    <button>×</button>
`;
```
This `<button>` (used to remove one active filter on `games.html`) has no `aria-label`, no `title`, and its only content is the literal `×` glyph. Screen readers may announce this ambiguously or not usefully (e.g., as "multiplication sign button" or simply "button" depending on the reader/browser), giving no indication of what the button does or which filter it would remove. This is a genuine, concrete accessibility gap in an interactive, frequently-reachable control (it appears whenever any filter is active on the games catalog page).

### 6.3 Backend: `openid-client` dependency is declared but never used

`backend/package.json` lists `"openid-client": "^6.8.4"` as a dependency (also present in `package-lock.json`). A repo-wide grep for `openid-client` across all backend `.js` source files (excluding `node_modules`) returns **zero usages**. The actual Steam OpenID 2.0 login flow is hand-implemented in `backend/services/steamAuth.js` using raw `fetch()` calls to `steamcommunity.com/openid/login` directly — it does not use this library at all. This is an unused dependency with no functional impact but a real, verifiable piece of dependency-surface debt.

### 6.4 Backend: session secret is hardcoded in source

`backend/server.js`:
```js
app.use(session({
    secret: "achievementplanner",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: "lax", secure: false }
}));
```
The `express-session` signing secret is a hardcoded, committed-to-version-control plaintext string, rather than being read from `process.env` (the app already uses `dotenv` and reads `process.env.PORT`, `process.env.STEAM_API_KEY`, `process.env.STEAM_RETURN_URL`, and `process.env.STEAM_REALM` elsewhere, so the pattern for env-based config is already established and simply wasn't applied here). This is a standard security-hygiene issue: anyone with read access to the repository (which is public on GitHub per your own workflow) can see the exact string used to sign session cookies. In this app's current dev-only, localhost-only, no-real-user-data context the practical exploitability is low, but it is still a genuine, fixable defect worth naming precisely rather than glossing over.

### 6.5 No `.env.example` exists

Confirmed via direct file check: no `.env.example` (or similar template) exists anywhere in the repository, despite the backend requiring at least `STEAM_API_KEY`, `STEAM_RETURN_URL`, `STEAM_REALM`, and optionally `PORT` to function. A future contributor (or you, on a fresh machine) would have to read `backend/services/steamAuth.js` and `backend/services/steamApi.js` source code to discover which environment variables are required. This is a minor but real onboarding/documentation gap.

### 6.6 Items checked and found clean (no new issues)

For transparency, the following areas from your checklist were specifically investigated and **found to have no new issues**, so they are not listed as findings:
- **Duplicate event listeners:** every re-render path that rebinds a handler (`profile.js`'s avatar-picker `refresh()`, the games/catalog card click delegation) uses direct property assignment (`.onclick =`, not `.addEventListener`), which is idempotent by construction — confirmed no accumulation risk anywhere new.
- **z-index usage:** only two declarations exist in the entire codebase (`navbar.css` and `search.css`, both `1000`), both intentional and non-conflicting (fixed navbar vs. a below-the-fold hero search dropdown) — not a "z-index chaos" problem.
- **Hardcoded colors:** a fresh full-tree grep found exactly 2 remaining instances (both previously assessed, both judged legitimate — section 5), down from 5 before Phase 29.

A genuine race condition was also considered: `game.js`'s `pollSteamUpdates()` (fired every 60 seconds via `setInterval`) does not guard against an overlapping in-flight call if a previous poll's `fetch` is unusually slow — two overlapping polls could theoretically resolve out of order and the later-arriving-but-earlier-fired response could momentarily overwrite fresher state. This is real but very low-severity (requires two 60-second-spaced Steam API calls to overlap and complete out of order) and is documented here as **harmless technical debt**, not proposed for Phase 30 — fixing it well would need an in-flight guard flag, which is a small but genuinely separate piece of work from anything else in this audit.

## 7. Findings classification

### Confirmed defects
1. **`src/components/games-sidebar/` is fully dead code** (section 6.1) — zero call sites, zero CSS import, superseded by `catalog-filters.js`.
2. **Filter-chip remove buttons have no accessible name** (section 6.2) — a real, reachable accessibility gap on `games.html`.
3. **Backend session secret hardcoded in source** (section 6.4) — a genuine security-hygiene defect, low practical severity in the current dev-only context but real.

### Worthwhile improvements
- Remove the unused `openid-client` dependency (section 6.3).
- Add a `.env.example` documenting required environment variables (section 6.5).
- Fix `README.md`'s stale primary-color value (unchanged from Phase 28/29 audits).

### Harmless technical debt
- Two stale `.gitignore` entries (`PHASE_27_REPORT.md`, `PHASE_28_REPORT.md`) pointing to nonexistent files.
- Four empty, git-untracked scaffold directories (`achievement-card/`, `guide-card/`, `layout/`, `planner-summary/`).
- `player-widget.css`'s own compact progress-bar variant.
- `navbar.css`'s hardcoded background shade and `player-widget.css`'s gradient stop color.
- The theoretical, very-low-severity polling race condition in `game.js` (section 6.6).
- Root-level `arbol.txt`, `docs/`, `frontend/` (pre-existing, non-application-code).

### Product decisions (not defects, require your input)
- "Popular Games" curation strategy on `index.html`.
- Whether `Guides`/`Roadmap`/`About` should become real pages or have their nav links removed.

### Intentionally deferred (carried forward from prior audits, still valid, not part of any proposed Phase 30 scope below)
- Both product decisions above.
- All "harmless technical debt" items above.
- The backend security/dependency findings (6.3, 6.4, 6.5) are **not bundled into the recommended Phase 30 scope below** — see section 8 for why, and section 15 for how you might want to sequence them instead.

## 8. Recommended Phase 30

**Recommended scope: Dead Code Removal & Filter Accessibility Fix.**

This is deliberately narrow. Of everything found in this audit, three items — the dead `games-sidebar` component, the filter-chip accessible-name gap, and the README color fix — share a single coherent theme (frontend cleanup: remove what's unreachable, fix what's genuinely broken for accessibility, correct what's factually wrong in documentation), touch entirely non-overlapping, low-traffic files, carry effectively zero behavioral risk, and require no product judgment calls. They are the kind of small, high-confidence, fully-verified changes Phase 29 also consisted of.

**Why the backend findings (6.3–6.5) are excluded from this recommendation, not merely postponed silently:** they belong to a different domain (backend security/dependency configuration, not frontend UI) and a different risk category (touching `express-session` configuration, however minor the specific change, sits closer to authentication infrastructure than a CSS button or a doc typo). Bundling them here would violate your own stated preference against mixing unrelated work in one phase. They are real, and I'd recommend a dedicated, narrowly-scoped future phase for them — see section 15 — but they should not be Phase 30.

## 9. Exact proposed changes

### 9.1 Delete `src/components/games-sidebar/games-sidebar.js` and `src/components/games-sidebar/games-sidebar.css`
- **Why necessary:** the component is fully unreachable — no call site, no CSS import, confirmed by two independent greps (section 6.1).
- **What problem it solves:** removes dead weight from the codebase that could otherwise mislead a future developer into thinking it's an active alternative to `catalog-filters.js`, or into modifying it under the false assumption it affects any live page.
- **Why it belongs in Phase 30:** it's a zero-risk, fully-verified deletion in the same "cleanup" spirit as prior phases' dead-code removals (Phase 27's `player-profile.css`, Phase 28's `index.js`/`footer.js`/`inventory/`/`steam-widget/`).
- **Why it should not be bundled with unrelated work:** it stands entirely alone — no other file references it, so it cannot be entangled with anything else.
- **Expected risk:** none. Deleting a file with zero inbound references cannot change any page's behavior.
- **Exact files involved:** `src/components/games-sidebar/games-sidebar.js` (delete), `src/components/games-sidebar/games-sidebar.css` (delete).
- **How it will be validated:** repo-wide grep after deletion to confirm no dangling references were missed; load `games.html` and confirm the real filter UI (`catalog-filters.js`-driven) still works identically; check console for any import errors.

### 9.2 Add an accessible name to the filter-chip remove button
- **Why necessary:** the button currently has no accessible name beyond an ambiguous glyph (section 6.2).
- **What problem it solves:** a real, concrete accessibility gap — a screen-reader user encountering an active filter chip on `games.html` currently cannot reliably tell what the button does.
- **Why it belongs in Phase 30:** it's a one-line, fully-isolated fix (add `aria-label="Remove filter"` or similar to the existing `<button>` in `games.js`'s `renderFilterChips()`), in the same "fix a concrete, verified defect" spirit as the rest of this phase.
- **Why it should not be bundled with unrelated work:** it's a single-attribute change to one specific button in one specific function; nothing else needs to change alongside it.
- **Expected risk:** none — adding an `aria-label` does not change visible layout, styling, or click behavior.
- **Exact files involved:** `src/js/games.js` (the `renderFilterChips()` function).
- **How it will be validated:** apply at least one filter on `games.html`, inspect the resulting chip's accessible name via the DOM (`button.getAttribute('aria-label')` or equivalent), confirm the "×" still visually renders and the click-to-remove behavior is unchanged.

### 9.3 Correct `README.md`'s stated primary color
- **Why necessary:** the documented value (`#3EA6FF`) doesn't match the actual token in `variables.css` (`--primary: #38BDF8`) — confirmed unchanged across three phase audits now.
- **What problem it solves:** documentation drift that could mislead anyone trying to match the app's branding from the README alone.
- **Why it belongs in Phase 30:** trivial, zero-risk, and in the same "correct what's verifiably wrong" spirit as the other two changes.
- **Why it should not be bundled with unrelated work:** it's a one-line text edit in a documentation file with no code dependency on anything else in this phase.
- **Expected risk:** none — non-code, non-runtime file.
- **Exact files involved:** `README.md`.
- **How it will be validated:** visual diff confirmation that only the color value changed; no application behavior to test since this file isn't loaded by the app.

## 10. Files likely affected

- `src/components/games-sidebar/games-sidebar.js` (deleted)
- `src/components/games-sidebar/games-sidebar.css` (deleted)
- `src/js/games.js` (one function, `renderFilterChips()`, gains one attribute on one button)
- `README.md` (one value corrected)

## 11. Files explicitly out of scope

- `backend/server.js`, `backend/package.json`, `backend/package-lock.json` — the session-secret and unused-dependency findings (6.3, 6.4) are deliberately not part of this phase; see section 8/15.
- `.env` / `.env.example` — not created in this phase; see section 15.
- `index.html`, `src/js/app.js` — the Popular Games curation question is a product decision, not touched.
- `src/components/nav-links/nav-links.js` — the Guides/Roadmap/About question is a product decision, not touched.
- `.gitignore` — the two stale phase-report entries are harmless and not touched (removing them has zero functional benefit and isn't worth a diff line in this phase).
- The four empty scaffold directories (`achievement-card/`, `guide-card/`, `layout/`, `planner-summary/`) — untouched; they are empty and cost nothing.
- `player-widget.css`, `navbar.css`'s background color, any other CSS not listed in section 9 — untouched.
- Any planner, Steam, XP/level, achievement-completion, avatar, or profile business logic — none of it is implicated by any finding in this audit.

## 12. Validation plan

1. Repo-wide grep for `games-sidebar` and `createGamesSidebar` after deletion — confirm zero remaining references anywhere (including `style.css`'s import list, which already has none).
2. Load `games.html`: confirm the catalog renders, the real filter panel (`catalog-filters.js`) still opens/works, search still works, sort still works — full functional parity with pre-change behavior.
3. Apply at least one genre/difficulty/time/extras filter on `games.html`, confirm an active-filter chip appears with the corrected accessible name, and confirm clicking its "×" still removes that filter correctly.
4. Confirm no console errors on `games.html`, `game.html` (any slug), `profile.html`, and `index.html` after the deletion (in case any page unexpectedly referenced the removed files — not expected, but worth confirming directly rather than assuming).
5. Confirm no network 404s for the removed CSS/JS files on any page (expected: none, since nothing ever requested them, but validated directly rather than assumed).
6. Visual diff of the `README.md` change (no functional test applicable).
7. `git diff --check`, `git diff --stat`, `git status --short` at the end, as with every prior phase.
8. No planner/Steam/XP/achievement/avatar regression testing is required beyond the basic "pages still load with no console errors" pass in step 4, since nothing in this phase's scope touches that logic.

## 13. Risks and trade-offs

**Very low risk overall.** Two of the three changes are deletions of code with zero inbound references (as close to risk-free as a code change can be) and a documentation text fix; the third is a single accessibility attribute added to one button with no behavioral side effects. The only meaningful "risk" is the small chance that `createGamesSidebar`/`games-sidebar.css` has some non-obvious reference this audit's greps missed (e.g., a dynamically-constructed import string) — considered unlikely given the codebase's consistent static-import conventions observed throughout every prior phase, but will be explicitly re-verified as the first validation step before any deletion is finalized.

## 14. Product decisions requiring approval

None are required for the recommended Phase 30 scope itself — all three proposed changes are verified defects/corrections, not judgment calls. However, two pre-existing, still-open product decisions remain outside this phase and continue to require your input whenever you're ready to address them (not part of this phase's approval):
- Popular Games curation strategy.
- Whether Guides/Roadmap/About should be built or have their nav links removed.

## 15. Final recommendation

**Yes, Phase 30 should proceed**, scoped exactly as described in sections 8–10: delete the dead `games-sidebar` component, add an accessible name to the filter-chip remove button, and correct the README's stale color value. All three are independently verified, zero-risk, and require no further investigation before implementation.

**What you need to approve before implementation begins:**
1. The three specific changes listed in section 9, as scoped.
2. Confirmation that the backend findings (unused `openid-client` dependency, hardcoded session secret, missing `.env.example`) should be **deferred to a separate, dedicated future phase** rather than folded into Phase 30 — I recommend this separation, but it's your call to make explicitly.

**Product decisions you may want to make (not blocking Phase 30, no urgency):**
- Popular Games curation direction, if/when you want to address it.
- Guides/Roadmap/About: build real pages, or remove the dead-end links.

I have not implemented anything. Waiting for your review and approval before any code changes begin.
