# Phase 29 Implementation Report — Shared Primary-Action Button & On-Primary Color Consistency

**Status: Implementation complete. Nothing has been staged, committed, or pushed — see confirmation at the bottom of this file.**

This document reports on the Phase 29 work that has already been implemented and validated, per the scope approved after `PHASE_29_AUDIT.md`. It is a separate document from that audit/proposal file — this one covers what was actually *built*, not what was proposed.

---

## 1. Audit/implementation summary

Phase 29 was implemented exactly within the approved scope: a CSS-only fix giving `.planner-btn` real styling for the first time, and unifying three divergent "text on primary background" colors behind one new design token (`--on-primary`). No JavaScript, HTML markup, business logic, planner/Steam/XP/avatar logic, or localStorage/API behavior was touched. The Popular Games curation question and the Guides/Roadmap/About nav placeholders were left untouched, exactly as instructed.

## 2. Exact files modified

- **`src/css/variables.css`** — added `--on-primary: #0b1220;` alongside the existing `--primary`/`--primary-hover` tokens.
- **`src/css/style.css`** — added `@import "../components/ui/buttons.css";` to the existing import list (placed right after `variables.css`).
- **`src/components/catalog-card/catalog-card.css`** — added an explanatory comment above the existing `.planner-btn` rule, documenting that its color/background/padding now come from the shared `ui/buttons.css` treatment. The rule itself (`margin-top:auto; width:100%;`) was left unchanged — it remains purely the card-specific layout concern.
- **`src/components/navbar/navbar.css`** — `.steam-login-btn`'s `color:#0b1220` replaced with `color:var(--on-primary)`.
- **`src/components/achievement-filters/achievement-filters.css`** — `.filter-btn.active`'s `color:#fff` replaced with `color:var(--on-primary)`.
- **`src/components/steam-achievement-card/steam-achievement-card.css`** — `.steam-achievement-badge--unlocked`'s `color:#fff` replaced with `color:var(--on-primary)`.

## 3. Exact files created

- **`src/components/ui/buttons.css`** — new file. Defines `.btn-primary` and includes `.planner-btn` directly in the same rule block, so `.planner-btn` receives full visual styling (background, padding, border-radius, hover, focus-visible) without any markup or JavaScript change. The visual language deliberately mirrors the pre-existing `.steam-login-btn` (same `padding:12px 22px`, `border-radius:14px`, `font-weight:700`, hover `filter:brightness(1.08)` + `translateY(-1px)`, `focus-visible` outline using `var(--primary)`) rather than introducing a new design language.

## 4. Exact changes implemented

1. New token `--on-primary: #0b1220` added to `variables.css`.
2. New stylesheet `ui/buttons.css` created and imported into `style.css`.
3. `.planner-btn` now styled (via inclusion in the shared `.btn-primary` rule in `buttons.css`) — background `var(--primary)`, text `var(--on-primary)`, padding, radius, hover, and focus-visible states, for the first time since the component existed.
4. Three pre-existing hardcoded on-primary colors (`#0b1220` in `navbar.css`, `#fff` in `achievement-filters.css`, `#fff` in `steam-achievement-card.css`) replaced with the single shared `var(--on-primary)` token.

## 5. Design-token decision — confirmed

**`--on-primary: #0b1220`** was used, exactly as you specified — the existing dark navy value already in use by `.steam-login-btn`, now the single shared source for this value across all four locations (`.planner-btn`, `.steam-login-btn`, `.filter-btn.active`, `.steam-achievement-badge--unlocked`).

## 6. Validation performed and results

### `games.html`
Loaded and screenshotted. "View Planner" buttons across the catalog-card grid rendered as a cyan (`#38BDF8`) background with dark-navy (`#0b1220`) text — visually consistent with the rest of the theme, replacing the previous raw browser-default button appearance. No console errors.

### `profile.html`
Loaded with a temporary synthetic `planner-portal-2` localStorage entry (removed immediately after the check) to force a real card into the "Your Games → Completed" section, since no completed game existed in the live session's data at validation time. The rendered "View Planner" button matched `games.html`'s styling exactly. No console errors. The synthetic localStorage entry was removed after validation; no persistent test data was left behind (and the real `planner-portal-2` value is self-healing on next visit to that game page regardless, since it's fully re-derived from Steam-authoritative state).

### Achievement filter validation (`game.html?slug=portal-2`)
Tested against real, live Steam-authoritative data (11/51 achievements unlocked on this account). Both the default "All" filter state and after clicking "Completed" were screenshot-confirmed: dark-navy text on cyan background, fully legible in both states.

### Steam login button validation
The active browser session is genuinely Steam-authenticated, so a real logged-out page render wasn't naturally available. The logged-out state was produced by re-invoking `createNavbar({logged:false})` directly via a dynamic module import in-page, and its computed styles were read programmatically: `background-color: rgb(56, 189, 248)`, `color: rgb(11, 18, 32)` — an exact match for `--primary` / `--on-primary`. A follow-up screenshot-crop attempt missed the element due to page scroll position at capture time, so **this check is backed by the computed-style read, not a screenshot** — stated plainly rather than overclaiming visual confirmation.

### Unlocked achievement badge validation
Confirmed via computed style on a real unlocked Portal 2 achievement card: `background-color: rgb(56, 189, 248)`, `color: rgb(11, 18, 32)`, badge text "Unlocked · 1/7/2024". This check was also not separately screenshotted; it rests on the computed-style read.

### Responsive / narrow-width validation (~380px)
The `resize_window` browser automation tool was confirmed (again, consistent with every prior phase in this project) to not actually resize this tab's rendered viewport in this sandbox environment. Validation was instead performed by forcibly setting `document.body.style.maxWidth = '380px'` on `games.html` and measuring `getBoundingClientRect()` on every `.planner-btn` and `.catalog-card` element against the body's right edge, plus a supporting screenshot at that forced width. Result: **zero elements overflowed** (`overflowingCount: 0`), and the screenshot showed the button rendering correctly, full-width within its card, fully legible.

### No horizontal overflow
Confirmed as part of the narrow-width check above.

## 7. Console/network results

- **Console:** no application-originated errors observed on any page checked during validation (`games.html`, `profile.html`, `game.html?slug=portal-2`, `game.html?slug=hades`, `game.html?slug=debug-game`). `game.html?slug=hollow-knight` was visited during the earlier read-only audit phase but was not re-checked after this implementation, and is not claimed as validated post-implementation.
- **Network:** re-checked on `game.html?slug=hades` after implementation — all 31 CSS requests the page loads, including the new `src/components/ui/buttons.css`, returned HTTP 200. No other page's network log was re-captured after implementation.

## 8. Regression results

No planner, Steam, XP/level, achievement-completion, or avatar logic was modified by this phase, and none of the changes were of a kind that could plausibly affect that logic (pure CSS token/selector changes only). `games.html`, `profile.html`, and `game.html` for `portal-2`, `hades`, and `debug-game` all loaded and functioned correctly during validation, with real Steam-authoritative data displaying correctly (e.g., Portal 2's genuine 11/51 unlocked-achievement state). `hollow-knight` was not re-verified after this specific implementation (only during the earlier audit pass).

## 9. Exact `git status --short`

```
 M src/components/achievement-filters/achievement-filters.css
 M src/components/catalog-card/catalog-card.css
 M src/components/navbar/navbar.css
 M src/components/steam-achievement-card/steam-achievement-card.css
 M src/css/style.css
 M src/css/variables.css
?? PHASE_29_AUDIT.md
?? src/components/ui/
```

(`PHASE_29_AUDIT.md` is the separate pre-implementation audit/proposal document, not part of this implementation's file set. `src/components/ui/` is untracked because it is a newly created directory containing the new `buttons.css` file.)

## 10. Exact `git diff --stat`

```
 src/components/achievement-filters/achievement-filters.css       | 2 +-
 src/components/catalog-card/catalog-card.css                     | 3 +++
 src/components/navbar/navbar.css                                 | 2 +-
 src/components/steam-achievement-card/steam-achievement-card.css | 2 +-
 src/css/style.css                                                | 1 +
 src/css/variables.css                                            | 1 +
 6 files changed, 8 insertions(+), 3 deletions(-)
```

(Git also printed one benign `warning: ... LF will be replaced by CRLF ...` for `steam-achievement-card.css` — expected `autocrlf` behavior for a file with pre-existing LF line endings, not an error.)

## 11. Exact `git diff --check`

No output beyond the same benign LF/CRLF warning above. Exit code `0` — no whitespace errors reported.

## 12. Confirmation: nothing staged, committed, or pushed

Confirmed. `git add`, `git commit`, and `git push` were not run at any point during this phase's implementation, validation, or this report's generation. All six modified files remain unstaged (`git status --short` shows ` M`, not `M ` or `A `), and the new `src/components/ui/` directory remains untracked (`??`). You retain full manual control over staging and committing this work.

## 13. Remaining technical debt

Unchanged from the Phase 29 audit — this implementation introduced no new debt:
- `player-widget.css`'s own compact 6px progress-bar variant (`.player-widget-bar`/`.player-widget-fill`) — a deliberate contextual difference, not touched.
- Placeholder `Guides` / `Roadmap` / `About` navigation links (`nav-links.js`, all `href="#"`).
- The "Popular Games" section on `index.html` still renders the full, unsorted 147-game catalog with no real popularity signal.
- `README.md`'s stated primary color (`#3EA6FF`) still doesn't match the actual CSS token (`--primary: #38BDF8`).
- Five empty, git-untracked scaffold directories remain: `achievement-card/`, `guide-card/`, `layout/`, `planner-summary/` (the fifth, `ui/`, is no longer empty — it now contains `buttons.css`).

## 14. Recommended next phase

As previously scoped in the Phase 29 audit, two product decisions remain open and were deliberately not implemented in this phase, pending your explicit direction:
1. Whether and how to curate the homepage "Popular Games" section (cap + "View all" link, honest re-labeling, real-field sorting, or leave as-is).
2. Whether the dead-end "Guides" nav link, the real `hasGuide` data field, and the now-slightly-less-empty `ui/` scaffold area represent a feature worth building, or whether the honest fix is simply removing the nav link.

No new technical findings emerged during this implementation beyond what was already documented in `PHASE_29_AUDIT.md`.
