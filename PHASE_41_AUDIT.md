# Phase 41 Audit — Proposal Only (no implementation yet)

## 1. Repo state verified

- `git fetch origin` + `git status -sb`: `main` clean, up to date with `origin/main`.
- HEAD: `e4f635c feat(portal-2): populate curated achievement data for the Session Planner` (Phase 40, pushed and confirmed).
- Full suite baseline (root, with CI's env vars): **529/529 passing**, matching the state left at the end of Phase 40.

## 2. Sourcing, re-verified live (read-only, no production files touched)

Re-fetched the live Hollow Knight schema at audit time via the exact same call `backend/services/steamApi.js`'s `getSchemaForGame()` makes (`ISteamUserStats/GetSchemaForGame/v2`, appid 367520), using the project's own `backend/.env` `STEAM_API_KEY`. Also fetched `GetGlobalAchievementPercentagesForApp` for the same appid. Saved to scratch files outside the repo, nothing written to the working tree.

**Confirmed:** 63 total achievements, matching this and the Phase 40 audit's earlier count exactly. **24 of the 63 (38%) are Steam-hidden** (`hidden: 1`). For every one of those 24, Steam's schema response omits `description` entirely — confirmed by inspecting the raw response, not inferred. `apiname` and `displayName` (Steam's real, non-generic name) **are** still present for hidden entries; only `description` is withheld. This is standard, expected Steam behavior for spoiler-protected achievements, not a bug or an incomplete fetch on our side.

The 24 hidden achievements, by name, are almost entirely major story beats, bosses, and endgame content: the game's four different endings (`ENDING_A`/`B`/`C`/`ENDINGD`), several late-game/superboss fights (`NIGHTMARE_GRIMM`, `WHITE_DEFENDER`, `GREY_PRINCE`, the four `PANTHEON` trials), and a few narrative-choice achievements (`NAILSMITH_KILL` vs `NAILSMITH_SPARE`, `ZOTE`). This is a plot-heavy Metroidvania, so these aren't incidental — Steam is deliberately protecting real spoilers here, not just being cute about a collectible.

## 3. The core question you asked about: how should hidden-achievement descriptions be represented?

**This is a genuine sourcing constraint, not a decision I can resolve by fetching harder.** There is no live Steam endpoint that will return these 24 descriptions — the official schema API withholds them by design, for every caller, always. Options, in order of how closely each fits the sourcing bar you set for Phase 40:

- **Option A — reuse the app's own existing "hidden" convention (recommended).** `src/components/steam-achievement-card/steam-achievement-card.js:28-30` already has this exact fallback, already shipped, for the Steam-schema side of any achievement: `steam.description ? steam.description : (steam.hidden ? "Hidden achievement" : "No description available.")`. Phase 41 would set the **curated** `description` field to the same literal string, `"Hidden achievement"`, for these 24 entries only (all other fields — `apiname`, `name`, `id`, `difficulty`, `missable`, `estimatedTime` — populated normally). This is not fabricated Steam data and not invented game lore; it's a UI-level fact ("Steam hasn't revealed this yet") the app already asserts elsewhere, now made consistent between the Steam-view card and the curated view (Recommended Achievement, Session Planner) that currently has no such fallback at all and would otherwise print the literal word "undefined" if the field were left unset (see 3a below).
- **Option B — leave `description` as an empty string.** Passes every current test/render path safely (no "undefined"/"null" text), but reads like a blank/broken field rather than an intentional state, and is less informative than Option A.
- **Option C — a more specific curatorial note per achievement** (e.g. "Hidden — an ending achievement", "Hidden — a Pantheon trial reward") without stating the real content. More informative than A, but this starts to edge toward curatorial judgment about *what kind* of spoiler it is, which needs the same scrutiny as any user-facing content, and there's more surface area for me to get subtly wrong or spoiler-adjacent than a flat, honest "hidden" label.
- **Rejected — writing the real description from training knowledge.** This is exactly the sourcing standard you rejected for Phase 40. Steam not publishing these descriptions at all makes this categorically worse than the Portal 2 case (where the data existed and I simply hadn't fetched it) — here there is no live source to fetch from, so any real description would necessarily come from memory/an external non-Steam source, which you've already ruled out for this catalog.

### 3a. A related bug this surfaces (informational, not proposed for auto-inclusion)

`src/components/recommended-achievement/recommended-achievement.js:83` renders `escapeHtml(achievement.description)` directly from the **curated** object with no fallback at all (unlike `steam-achievement-card.js`'s existing guard). `escapeHtml` does `String(value)`, so a `null`/`undefined`/missing `description` would literally render the text **"null"** or **"undefined"** to the user — this is exactly why Option A (always populate a real string, even if it's the fallback label) is the safe choice; Option B (empty string) also avoids this without touching any code. This isn't something Phase 41 needs to fix in `recommended-achievement.js` — populating a real string for every entry (Option A) sidesteps it entirely through data alone, consistent with your Phase 40 instruction to avoid logic changes unless the data can't solve it.

## 4. Other things checked, not proposed for this phase

- `getPlannerData("hollow-knight")` / `getPlannerDataByAppId(367520)` — same read path Phase 40 added coverage for on Portal 2; Phase 41 would mirror those same tests for Hollow Knight.
- No existing test asserts a specific achievement count or content for `hollow-knight.json`, so nothing needs updating beyond what Phase 41 adds.
- Missable: the game's top-level `"missable": true` (already set, unrelated to this phase) reflects real missable content (e.g. `NEGLECT` — a binary story choice; the `STEELSOUL`/`STEELSOUL_COMPLETION` permadeath-mode achievements effectively require a dedicated separate run). Ordinary per-achievement curatorial judgment, same as Portal 2 — not a sourcing question, just flagged so it's not a surprise in the diff.
- Re-confirmed (as in Phase 40) that `achievementMerger.js` matches by `apiname` first, falls back to name, and reports rather than crashes on a mismatch — so, as before, the main risk is data accuracy/completeness, not merge-logic breakage.

## 5. Phase 41 Proposal

### Problem / gap
`src/data/games/hollow-knight.json` has 0 of its 63 real Steam achievements curated (`achievements: []`), so the Session Planner and Recommended Achievement are entirely inert for this game — it degrades to the honest "no curated data yet" empty state, but the feature is simply absent for the third of the three-game catalog with 0% coverage.

### Why this is the right next step
Direct continuation of Phase 40's pattern (Hades → Portal 2 → Hollow Knight), closing out full curated-data coverage for the entire catalog. Same low blast radius: purely additive data in one JSON file plus tests, no merge/planner/UI logic changes anticipated (per your Phase 40 instruction, unless a genuine bug is found — none was; see 3a for why the existing description-fallback gap doesn't need a code fix here).

### Exact goal
Populate `src/data/games/hollow-knight.json`'s `achievements[]` with all **63** achievements. `apiname`/`name` copied verbatim from the live Steam schema for all 63 (present for hidden entries too). `description` copied verbatim from Steam for the 39 visible entries; set to the literal fallback string `"Hidden achievement"` (Option A above) for the 24 hidden entries, pending your sign-off on that choice. `id`/`difficulty`/`missable`/`estimatedTime` curated per-entry as with Hades/Portal 2.

### Files likely to change (once approved)
- `src/data/games/hollow-knight.json` (rewrite `achievements[]`: 0 → 63 entries)
- `backend/test/plannerCatalog.test.js` (extend with Hollow-Knight-specific tests, mirroring the 4 added for Portal 2 in Phase 40)
- No route, merger, or UI component changes anticipated

### Implementation plan (once approved)
1. Re-fetch the live Hollow Knight schema at implementation time (not reuse this audit's cached snapshot), same as Phase 40's approach for Portal 2.
2. For each of the 63 entries: `apiname` = Steam's `name`, `name` = Steam's `displayName` (both present regardless of hidden status), `description` = Steam's `description` for the 39 visible entries, or the approved hidden-achievement fallback for the 24 hidden ones.
3. Assign curatorial `id` (sequential), `difficulty` (1-5), `missable`, `estimatedTime` per entry, using the same judgment scale as Hades/Portal 2, clearly curatorial and flagged for your review.
4. Programmatically verify all 63 `apiname` values match the live schema 1:1 (no duplicates, no missing/extra) before writing the file — same validation script pattern used for Portal 2.
5. Leave every other top-level field untouched.

### Tests / verification plan (once approved)
- Data-completeness test: `getPlannerData("hollow-knight").achievements.length === 63`, no duplicate `id`/`apiname`.
- Field-shape test: every entry has non-empty `apiname`/`name`, valid `difficulty`/`estimatedTime`/`missable` types — and specifically, every entry has a non-empty `description` (this is the test that would catch a regression back to an unhandled hidden achievement rendering "undefined"/"null" in the UI).
- A dedicated test asserting the 24 known-hidden `apiname`s get exactly the approved fallback string, and the 39 visible ones don't.
- `getPlannerDataByAppId(367520)` resolves to `hollow-knight` with the same complete set.
- Full suite (root, CI env vars) before/after — expect 529 + new tests, no regressions.
- Live-browser check on Hollow Knight's Game page: Session Planner and Recommended Achievement render real entries; spot-check that a hidden achievement's card shows "Hidden achievement" (or whatever's approved) rather than blank/undefined text, in both the curated view and the existing Steam-view card.
- Regression-check Hades and Portal 2 unaffected.

### Risks / scope concerns
- **The hidden-description decision (section 3) needs your explicit sign-off before implementation** — that's the one open question blocking this phase, per your instruction.
- Data staleness between this audit and implementation: re-fetch live at implementation time, same as Phase 40.
- Curatorial fields (difficulty/missable/estimatedTime) are subjective judgment, flagged for your review, same bar as Hades/Portal 2.
- Scope stays confined to `hollow-knight.json` + tests; no logic changes proposed (see 3a for why none are needed).

Waiting for your approval on Option A (or an alternative) for the 24 hidden-achievement descriptions, and on the overall scope above, before any implementation begins.

## 6. Phase 41 — Implementation report

**Approved scope:** Hollow Knight only, Option A for the 24 hidden descriptions, data-completeness + hidden/visible-split tests, full suite, live-browser verification, regression check on Hades/Portal 2.

**Sourcing:** re-fetched the live Hollow Knight schema at implementation time (appid 367520, real `STEAM_API_KEY`) — confirmed 63 achievements, 24 hidden, matching the audit exactly. A validation script cross-checked every curated entry's `apiname` 1:1 against that live response (all 63 matched, no duplicates, no missing/extra), and separately asserted the fallback description was applied to exactly the 24 live-confirmed hidden apinames and none of the other 39 — both checks passed before the file was written.

**Files changed:**
- `src/data/games/hollow-knight.json` — `achievements[]` rewritten from `[]` to the full 63-entry list. `apiname`/`name` copied verbatim from Steam for all 63; `description` copied verbatim from Steam for the 39 visible entries, set to the literal string `"Hidden achievement"` (Option A) for the 24 hidden ones. `difficulty`/`missable`/`estimatedTime` curated per-entry. All other top-level fields untouched.
- `backend/test/plannerCatalog.test.js` — 5 new tests mirroring Portal 2's Phase 40 coverage, plus one specific to this phase: asserts the achievement set with the "Hidden achievement" description is *exactly* the 24 known-hidden apinames (no more, no fewer) and that none of the other 39 carry it.
- `test/sessionManager.test.js` + `src/utils/planner/sessionManager.js` — **a genuine bug found during live-browser verification, not planned in the audit** (see below). Fixed via the exception clause you granted ("unless implementation reveals a genuine issue that cannot be solved through the curated data itself").

**The bug found:** live-testing Hollow Knight's page (with this Chrome profile's pre-existing localStorage, which had `session-hollow-knight: "[]"` persisted from before this game had any curated data — the same thing would happen to any real visitor who loaded the page while Hollow Knight had 0 achievements) showed "0 achievements planned" in the Session Planner despite the new 63-achievement data being fully correct and despite Recommended Achievement correctly showing "Charmed". Root cause: `sessionManager.js`'s `getSession()` had `if (stored) { …use it… }` — and `stored` is an array, so a previously-persisted **empty array** (`[]`, which `saveSession()` legitimately writes the first time a game with no curated achievements is visited, same as `recommendation.js`'s existing `game.achievements?.length` empty-state guard) was treated as "a valid session already exists," and the code never fell through to regenerate from the now-real achievement list. No amount of correct catalog data could fix this — it's a client-side staleness bug, independent of which game or how much curated data exists.

**The fix:** one-line change, `if (stored)` → `if (stored && stored.length > 0)`. Falling through to `createSession()` when the stored session is empty is always safe: if a game's achievements are genuinely all completed, regeneration reproduces the same `[]` result, so no currently-correct behavior changes. Added two tests to `test/sessionManager.test.js`: one reproducing the exact stale-then-populated scenario (asserts a real session is now generated), one asserting a genuinely-empty game still correctly returns `[]` (not broken into an error or an infinite-regeneration issue).

**Files explicitly NOT changed:** `hades.json`, `portal-2.json`, `debug-game.json`, `achievementMerger.js`, `recommendation.js`, `sessionPlanner.js`, any route, any UI component beyond the one-line `sessionManager.js` fix above.

**Tests:**
- `cd backend && npm test`: 262/262 passing (257 baseline + 5 new).
- `npm test` from root with CI's env vars: 536/536 passing (529 baseline + 5 catalog tests + 2 sessionManager tests).

**Live-browser verification (Hollow Knight, `game.html?slug=hollow-knight`):**
- Header: "Achievements 0 / 63 · 0% completed" (was inert/empty before this phase).
- Recommended Next Achievement: "Charmed — Acquire your first Charm — Difficulty 1/5, 10 min".
- Today's Session, after the sessionManager fix and clearing the stale localStorage key: "3 achievements planned" — Charmed (10 min), Neglect (10 min), Purity (15 min) = 35/45 min, matching the curated data exactly.
- The full merged Steam achievement list renders all 63 with real global-unlock percentages. Spot-checked multiple hidden achievements (Purity, Happy Couple, Witness, Passing of the Age, Memory, Grand Performance, Ritual, Banishment, Mortality, Void, The Hollow Knight, Sealed Siblings): each shows its real Steam display name with a real global-unlock percentage (confirming correct apiname matching) and the description "Hidden achievement" — exactly the approved Option A behavior, not a blank/null/undefined render.
- Visible achievements (e.g. Neglect, Solace) show their real Steam descriptions as expected.
- No console errors observed.

**Regression check:**
- Hades (`slug=hades`): unaffected — still "0 / 49 · 0% completed", Game Guide link intact.
- Portal 2 (`slug=portal-2`): unaffected — still "0 / 51 · 0% completed".
- Neither file was touched; the sessionManager fix was also verified not to change behavior for either (both still generate/persist sessions normally, since neither has ever had a stale-empty stored session in this environment).

**What could not be tested:** merge behavior against a real, authenticated Steam session (no live login available here) — as with Phase 40, substituted by confirming all 63 entries (including hidden ones) pulled correct live global-unlock percentages, which only happens on a correct apiname match.

**Final `git status --short`:**
```
 M backend/test/plannerCatalog.test.js
 M src/data/games/hollow-knight.json
 M src/utils/planner/sessionManager.js
 M test/sessionManager.test.js
?? PHASE_41_AUDIT.md
```

Committed and pushed to `origin/main` (see commit hash in the repo log).
