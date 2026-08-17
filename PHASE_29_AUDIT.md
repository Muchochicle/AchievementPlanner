# Phase 29 — Pre-Implementation Audit & Proposal

**Status: READ-ONLY. No application source code was modified to produce this document. Nothing has been staged, committed, or pushed.**

This document is the complete audit performed after Phase 28 was manually committed and pushed, before any Phase 29 work begins. Phase 28 is treated as closed and was not reopened or re-touched in any way while producing this audit.

---

## 1. Repository / HEAD status verified

- **Working tree:** clean — `git status` reported nothing to commit.
- **HEAD commit:** `65ec97654a176a691ec00cec965329ed07793efd`
- **HEAD message:** "Phase 28: harden data integrity and improve app UX"
- **HEAD date:** 2026-08-17 17:39:00 +0200
- **Branch:** `main`, up to date with `origin/main` — confirmed no commits ahead or behind in either direction (`git log origin/main..HEAD` and `git log HEAD..origin/main` both empty).
- `git show --stat HEAD` was compared against the file list I implemented and reported for Phase 28 — they match exactly. Nothing was altered, added, or removed during the manual commit/push beyond what I originally implemented.

## 2. Method

Before proposing anything, I re-read the current repository directly rather than trusting the Phase 26/27/28 reports at face value, per the instruction not to assume those reports are still perfectly accurate. Concretely, this session:

- Re-read `index.html` and `src/js/app.js` in full to re-verify the homepage hero/Popular-Games state.
- Re-read `src/components/nav-links/nav-links.js` and `src/components/navbar/navbar.css` to re-verify the active-nav-state work and the hardcoded on-primary text color.
- Re-read `src/components/player-widget/player-widget.css` to re-verify the duplicate progress-bar claim.
- Re-read `src/components/achievement-filters/achievement-filters.css` and `src/components/steam-achievement-card/steam-achievement-card.css` for the other two on-primary color instances.
- Grepped the entire repo for `.planner-btn` to re-confirm it still has no base styling anywhere.
- Read `backend/controllers/steamController.js`, `backend/services/steamAuth.js`, `backend/services/steamApi.js`, and `backend/utils/cache.js` in full — these had never been read in any prior phase's audit in this conversation.
- Read `README.md` in full.
- Ran a plain directory listing of `src/components/` (rather than only content-matching globs) and cross-checked it against every directory name that had ever appeared in a prior phase's audit output, which surfaced five previously-unseen, completely empty component directories (detailed below).
- Checked git history/tracking status of those five directories.

## 3. Re-verification of the three items Phase 28 flagged as "not automatically approved"

None of these were blindly re-implemented. Each was independently re-checked against the current file contents.

### 3.1 "Popular Games" shows the entire catalog, unsorted, with no real popularity signal

**Confirmed still true, unchanged since Phase 28.**

`src/js/app.js`:
```js
container.innerHTML = games
    .map(game => createCatalogCard(game))
    .join("");
```
There is no `.slice()`, no sort, no curation of any kind — every game returned by `getGamesIndex()` (147 in this environment) is rendered under the `<h2>Popular Games</h2>` heading in `index.html`. No field anywhere in the data model (frontend or backend) represents actual popularity (no view counts, no player counts, no ranking). The heading's implication of curation is not backed by any real signal.

**Classification: product/content decision, not a bug.** I have not implemented anything here. See section 6 for the options that would require your approval.

### 3.2 Divergent "text on primary background" colors

**Confirmed still present in exactly the same three places identified in the Phase 28 report:**

| File | Selector | Value |
|---|---|---|
| `src/components/navbar/navbar.css` | `.steam-login-btn` | `color:#0b1220;` |
| `src/components/achievement-filters/achievement-filters.css` | `.filter-btn.active` | `color:#fff;` |
| `src/components/steam-achievement-card/steam-achievement-card.css` | `.steam-achievement-badge--unlocked` | `color:#fff;` |

All three set text color against a `background:var(--primary)` (or equivalent) element, but arrive at two different hardcoded values for the same visual purpose. No shared token exists for "the correct text color to put on a primary-colored surface."

### 3.3 `player-widget.css`'s own progress-bar variant

**Confirmed still present, unchanged:**
```css
.player-widget-bar{
    width:100%;
    height:6px;
    background:rgba(255,255,255,.08);
    border-radius:999px;
    overflow:hidden;
}
.player-widget-fill{
    height:100%;
    background:linear-gradient(90deg, var(--primary), #6fd3ff);
    border-radius:999px;
}
```
This is distinct from the shared `.progress-bar`/`.progress-fill` classes (from `progress.css`) that `game-header.js`, `profile-header.js`, and `session-planner.js` all now reuse. Re-assessed with fresh eyes this session: I still judge this a **legitimate contextual difference** (a compact 6px bar purpose-built for the small navbar widget, with its own two-color gradient) rather than a defect. Not proposed for change.

## 4. New finding not present in any prior phase report

While producing a plain `ls src/components` (rather than only content-matching globs, which is what every previous audit in this conversation had used), the directory listing returned **35 directories** — five of which had never appeared in any prior audit output in this conversation:

- `src/components/achievement-card/`
- `src/components/guide-card/`
- `src/components/layout/`
- `src/components/planner-summary/`
- `src/components/ui/`

**All five are completely empty** — zero files, at any depth. This is exactly why no prior file-content-matching glob (`**/*.js`, `**/*.css`, etc.) ever surfaced them: there was nothing inside to match.

Because they are empty, **git does not track them at all** — they do not appear in `git status`, in any commit, or in `git log`. They exist purely on the local filesystem. This means there is nothing to "clean up" via a commit; they cost nothing and require no git action.

Their names are informative context for the Phase 29 proposal below:

- **`guide-card/`** (empty) — combined with the nav's already-dead-end "Guides" link (`nav-links.js`, `href="#"`) and the real `hasGuide` boolean already returned per-game by the backend (`backend/utils/gameMapper.js`: `hasGuide: planner?.hasGuide ?? false`), this strongly suggests a Guides feature was once planned and partially scaffolded, then abandoned before any card component was actually written.
- **`ui/`** (empty) — suggests a shared component-primitives location (buttons, etc.) was anticipated at some point but never populated. This is directly relevant to the `.planner-btn` finding below: it explains *why* no shared button system exists to give that element real styling.
- **`achievement-card/`**, **`layout/`**, **`planner-summary/`** — no corresponding dead nav link, data field, or other signal points to what these were specifically for. Likely earlier-stage scaffolding from the same abandoned planning pass as the two above.

**Classification: harmless technical debt / historical scaffolding.** No git action is possible or needed. Documented here as context because `ui/` directly motivates the Phase 29 proposal below.

## 5. Backend re-check (first full read this conversation)

`backend/controllers/steamController.js`, `backend/services/steamAuth.js`, `backend/services/steamApi.js`, and `backend/utils/cache.js` had been read at the route level in Phase 28 (`backend/routes/steam.js` was read) but their implementations had never been read in full in this conversation. Read in full this session:

- **`steamController.js`** — `login()` builds and redirects to the Steam OpenID URL; `callback()` validates the OpenID response, extracts the Steam ID, fetches the player summary, and stores a minimal session object (`steamid`, `personaname`, `avatarfull`, `profileurl`). Clean, no defects found.
- **`steamAuth.js`** — `buildSteamLoginUrl()` and `validateSteamResponse()` implement standard OpenID 2.0 checkid_setup / check_authentication flow against `steamcommunity.com`. No defects found.
- **`steamApi.js`** — `steamFetch()` wraps every Steam API call with an 8-second `AbortController` timeout and consistent error messages. `getPlayerSummary`, `getOwnedGames`, `getSchemaForGame`, `getGlobalAchievementPercentages`, and `getPlayerAchievements` are all backed by a shared in-memory TTL cache (`cache.js`) with sensible per-endpoint TTLs (5 minutes for volatile player data, 24 hours for static schema/global-percentage data). `getSchemaForGame`, `getGlobalAchievementPercentages`, and `getPlayerAchievements` each deliberately catch and degrade to an empty array for the "private profile / no stats for this game" cases Steam's API reports as errors — each with an explanatory comment confirming this is intentional graceful degradation, not an oversight.
- **`cache.js`** — a minimal `Map`-based TTL cache (`getCached`/`setCached`), correctly expires entries on read.

**No defects found anywhere in this layer.** This is solid, deliberately-defensive code and required no further action.

## 6. `README.md`

Read in full. Contains a "Primary color: `#3EA6FF`" statement that **does not match** the actual CSS token in use (`src/css/variables.css`: `--primary: #38BDF8`). This is a stale/inconsistent documentation value, not a code defect — the file is also unmaintained-looking (heading order is reversed: "## Branding" appears before the top-level "# AchievementPlanner" heading). Noted as trivial documentation debt; not proposed as a phase on its own.

## 7. `.planner-btn` re-confirmation

Repo-wide grep for `.planner-btn` this session, confirming the Phase 28 finding is still accurate:

```
src\components\catalog-card\catalog-card.css:109:.planner-btn{
src\js\games.js:186:            event.target.closest(".planner-btn");
```

The only CSS for `.planner-btn` anywhere in the repository is:
```css
.planner-btn{
    margin-top:auto;
    width:100%;
}
```
No `color`, `background`, `border`, or `padding` is defined anywhere for this class. It falls back to the browser's raw default `<button>` appearance — inside an otherwise fully dark-themed, custom-styled card — on both `games.html` (via `catalog-card.js`, used since the app's early phases) and `profile.html`'s "Your Games" section (added in Phase 27, also via `createCatalogCard`). This is visibly inconsistent with every other interactive element in the app, all of which are explicitly styled.

## 8. Classification of all findings

### Confirmed defect
- **`.planner-btn` has zero intentional styling anywhere in the repository.** This is not a stylistic preference gap — every other button/control in the app is deliberately styled, and this one clearly is not, by omission. Visible on two pages (`games.html`, `profile.html`).

### Worthwhile improvement
- Introduce one small, genuinely reusable primary-action button treatment that (a) fixes `.planner-btn`, and (b) simultaneously resolves the three-way divergent on-primary text color (section 3.2), using the already-present but empty `src/components/ui/` directory as its natural home rather than inventing a new location or a larger component system.

### Technical debt (documented, no action proposed this phase)
- `player-widget.css`'s own compact progress-bar variant (section 3.3) — legitimate contextual difference, not touched.
- Placeholder `Guides` / `Roadmap` / `About` nav links (`nav-links.js`, all `href="#"`) — building real destination pages is a substantially larger undertaking than anything else in this audit and is not proposed here.
- `README.md`'s stale primary-color value (section 6) — trivial, not worth a phase on its own.
- Five empty, git-untracked scaffold directories (section 4) — harmless, nothing to commit, documented for context only.
- Root-level `arbol.txt` (a stray Windows `tree`-command output dump), plus the pre-existing `docs/` and `frontend/` directories — noted in earlier phase audits, non-code, out of scope for an application-code cleanup pass.

### Product decisions requiring your approval
These are explicitly **not** defaulted into the Phase 29 proposal below and will not be touched without separate, explicit approval:
- Whether and how to curate "Popular Games" (section 3.1) — options include: cap the count with a "View all games" link to `games.html`; rename the heading to something that doesn't imply a popularity ranking that doesn't exist; sort by some existing real field (e.g. difficulty or alphabetical) while keeping the full list; or leave as-is.
- Whether the dead-end "Guides" nav link, the real `hasGuide` data field, and the empty `guide-card/` scaffold together represent a feature you actually want built — or whether the honest fix is simply to remove the nav link, since a permanently dead-end link is arguably worse UX than no link at all.

---

## 9. Proposed Phase 29

**Phase number:** 29

**Title:** Shared Primary-Action Button & On-Primary Color Consistency

**Objective:** Fix the confirmed `.planner-btn` unstyled-button defect and eliminate the three-way divergent "text on primary background" color, by introducing one small, genuinely reusable button treatment — populating the already-anticipated (but currently empty) `src/components/ui/` slot, rather than inventing new architecture or a larger design-system layer.

**Audit findings driving this phase:** sections 3.2, 4, and 7 above — `.planner-btn` has no base styling anywhere in the repository; `#0b1220` / `#fff` / `#fff` diverge for the same visual purpose across three unrelated components; an empty `ui/` folder already exists in the repository as the evident, previously-intended home for exactly this kind of shared primitive, so this phase completes existing (abandoned) scaffolding rather than adding a new architectural concept.

### Proposed changes

1. Add one new design token to `src/css/variables.css` (e.g. `--on-primary`) capturing the correct text color for content sitting on a `--primary`-colored background.
2. Add one new stylesheet under `src/components/ui/` (e.g. `src/components/ui/buttons.css`) defining a single reusable primary-button class.
3. Apply the new token/class to:
   - `.planner-btn` (`src/components/catalog-card/catalog-card.css`) — giving it real styling for the first time.
   - `.steam-login-btn` (`src/components/navbar/navbar.css`).
   - `.filter-btn.active` (`src/components/achievement-filters/achievement-filters.css`).
   - `.steam-achievement-badge--unlocked` (`src/components/steam-achievement-card/steam-achievement-card.css`).
   
   Each of these four gets its hardcoded on-primary color replaced by the one shared token; `.planner-btn` additionally gains the new reusable button class for its background/border/padding.
4. Import the new stylesheet in `src/css/style.css`'s existing `@import` list.

### Files likely affected

- `src/css/variables.css` (new token)
- `src/css/style.css` (new import line)
- `src/components/ui/buttons.css` (new file)
- `src/components/catalog-card/catalog-card.css` (`.planner-btn` styled)
- `src/components/navbar/navbar.css` (`.steam-login-btn` color swapped to token)
- `src/components/achievement-filters/achievement-filters.css` (`.filter-btn.active` color swapped to token)
- `src/components/steam-achievement-card/steam-achievement-card.css` (`.steam-achievement-badge--unlocked` color swapped to token)

### Files explicitly out of scope

- `src/components/player-widget/player-widget.css` (its own progress-bar variant — deliberately left alone, section 3.3).
- `index.html` / `src/js/app.js` (the "Popular Games" curation question — a product decision, section 3.1/6, not part of this phase).
- `src/components/nav-links/nav-links.js` (the Guides/Roadmap/About placeholder-link question — a product decision, section 6, not part of this phase).
- Any JS business logic, any planner/achievement/Steam/XP/avatar code, any other component's visual design.
- The four other empty scaffold directories (`achievement-card/`, `guide-card/`, `layout/`, `planner-summary/`) — untouched; only `ui/` receives a new file.
- `README.md`'s stale primary-color documentation value.

### Validation plan

- Visual check of `games.html`'s and `profile.html`'s catalog-card grids — confirm `.planner-btn` now renders with intentional, theme-consistent styling instead of the browser default, on both pages.
- Visual check of `game.html`'s achievement filter buttons (`.filter-btn.active` state) for continued correct contrast/legibility.
- Visual check of the navbar's Steam login button in the logged-out state, on at least one page.
- Visual check of an unlocked achievement card's badge (`.steam-achievement-badge--unlocked`) on a game page with at least one completed achievement.
- Desktop width plus one narrow width (e.g. ~380px, using the same DOM-measurement / forced-CSS validation technique established in Phases 26-28, since the browser automation tool available in this environment does not actually resize the tab's rendered viewport) to confirm no overflow from the new button styling.
- Console and network error checks on every touched page.
- `git diff --check`, `git diff --stat`, `git status` at the end.
- No planner/Steam/XP/achievement-completion/avatar business logic is touched by this phase, so no functional regression testing of those systems is required beyond a basic "pages still load" pass.

### Risks / trade-offs

**Very low risk overall.** This is purely additive CSS (one new token, one new small stylesheet) plus swapping four literal color values for a token carrying the same visual intent — no JavaScript logic, no data flow, no localStorage, no API calls are touched. The only real judgment call is the exact shade chosen for `--on-primary`: I would default to the existing dark navy (`#0b1220`, currently used on the largest/most prominent of the three elements, the Steam login button) rather than white, but this is a minor, easily-reversible visual decision you may want to weigh in on directly rather than have me default.

### Decisions that require your approval before any implementation begins

1. **Approve or reject Phase 29 as scoped above.**
2. **Confirm the `--on-primary` color choice** — dark navy `#0b1220` (my default recommendation, matching the Steam login button) versus white (`#fff`, matching the other two current instances), or a different value of your choosing.
3. **Separately (not part of Phase 29):** whether you want the "Popular Games" curation question and/or the Guides-nav-link question queued as a future phase, and if so, your preference among the options listed in section 8's "Product decisions requiring your approval." Neither will be touched without a separate, explicit go-ahead.

---

*This document is a full export of the audit and proposal produced in conversation prior to this file being written. No implementation was performed; no files other than this one were created or modified.*
