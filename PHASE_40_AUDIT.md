# Phase 40 Audit — Proposal Only (no implementation yet)

## 1. Repo state verified

- `git status`: clean, nothing staged/unstaged/untracked.
- `main` is up to date with `origin/main` (fetched and confirmed, no divergence).
- HEAD: `18bf2ff feat(hades): populate curated achievement data for the Session Planner`.
- Full test suite baseline: **525/525 passing** when run from repo root with the same env vars CI (`.github/workflows/ci.yml`) sets (`STEAM_API_KEY`, `STEAM_RETURN_URL`, `STEAM_REALM`, `SESSION_SECRET`).
  - Note: running `npm test` from root **without** those env vars in the shell fails 6 backend tests (server-boot/env-var tests) because `node --test` auto-discovers `backend/test/**` too and those tests spawn the real `server.js`, which refuses to boot without its required env vars. This is expected/by-design (documented in `ci.yml`'s comments and `backend/.env.example`), not a regression — confirmed by re-running with the placeholder values CI uses and getting a clean 525/525.
  - Backend-only run (`cd backend && npm test`) is 253/253 green using the real `backend/.env`.

## 2. Areas inspected

Games catalog/listing, Guides (App Guides + Game Guides), the achievement catalog data files, Session Planner, Recommended Achievement, and Profile/stat functionality were all read directly from current source (not from prior phase reports).

**Guides**: already internally consistent. `src/data/guides/index.js` and `game-guide-notice.js` explicitly and correctly handle the 3-state "no guide declared / guide planned / real guide" case (this was fixed in an earlier phase per the code's own comments referencing `PHASE_36_AUDIT.md`). Only Hades has a real Game Guide; Hollow Knight and Portal 2 correctly show an honest "coming soon" notice. No action needed here.

**Profile/stat functionality**: recently and thoroughly reworked (`cac58b4`, `d118954` — live Steam-data stats, Recently Played, dead localStorage stack removed). Well covered by tests (`profileStatsClient.test.js`, `profileHeader.test.js`, `profileBadges.test.js`, etc.). No obvious gaps found on inspection.

**Games catalog data — the finding.** `src/data/games/` holds the catalog's 3 real games plus 1 internal debug fixture:

| File | Real Steam achievement count (approx., per public Steam data) | Curated (`achievements[]`) count in repo |
|---|---|---|
| `hades.json` | 49 | **49** (fully curated — Phase 39's work) |
| `portal-2.json` | ~51 | **3** |
| `hollow-knight.json` | ~63 | **0** |
| `debug-game.json` (internal fixture, not a real catalog game) | n/a | 10 |

All three real games declare `"hasGuide": true` and, more importantly, all three are reported to the frontend with `hasPlanner: true` (`backend/utils/gameMapper.js:55,118` — `hasPlanner` is computed purely from "does a catalog JSON file exist for this slug", **not** from whether its `achievements[]` array actually has content). That means the catalog card (`catalog-card.js`) shows Hollow Knight and Portal 2 with the exact same "fully planned" presentation (difficulty stars, completion-time estimate) as Hades — there is no visual signal that their planner data is a stub.

Concretely, this breaks the two flagship features the catalog-card implicitly promises:

- **Hollow Knight** (0 curated achievements): `getRecommendedAchievement()` (`src/utils/planner/recommendation/recommendation.js:18`) and the session planner both hit their `!game.achievements?.length` guard and degrade to the existing, honest "Curated achievements aren't available for this game yet" empty state (`recommended-achievement.js:5-31`). Not broken, but the feature is simply absent for this game despite the catalog implying otherwise.
- **Portal 2** (3 curated achievements out of ~51 real ones): this is worse than absent — it's **actively misleading**. Once a player completes those 3 curated achievements, `getRecommendedAchievement()` returns `null` (line 44) and the UI renders "🎉 Congratulations! All achievements completed — You've reached 100% completion" (`recommended-achievement.js:35-61`), even though Steam still shows ~48 remaining achievements for that game. This is a false claim shown to the user, not just a missing feature.

This is a data-completeness gap, not an architecture or logic bug — the merge/matching logic (`backend/utils/achievementMerger.js`) already degrades gracefully by design: it matches curated entries to the live Steam schema by `apiname` first, falls back to name-matching, and explicitly reports (rather than crashes on) an `apiname-not-found` anomaly. So extending the curated data is low-risk to existing logic; the risk is entirely in the *accuracy* of the new data itself (see Risks below).

## 3. Other things looked at, not proposed for this phase

- `TODO`/`FIXME`/"coming soon"/"placeholder" grep across `src` and `backend`: every hit found is an already-intentional, already-handled UI state (verified above), not dead work.
- No other test file, route, or component referencing Hollow Knight/Portal 2 assumes a specific achievement count, so populating more curated data won't require touching any test — see Tests plan below for what *should* be added.
- Did not expand into Games-page filter/search behavior, Podiums, or Steam auth — all inspected briefly via existing tests/recent commits and show no comparable gap.

## 4. Revision — sourcing standard rejected, re-verified against live Steam data

The initial version of this proposal below relied on approximate achievement counts and would have sourced achievement content from model/training knowledge. That was correctly rejected: achievement catalog data is production data and must meet the same sourcing bar as `hades.json`, which is itself Steam-sourced (verified below), not hand-written.

**Method used to re-verify (read-only, no production files touched):** called the exact same endpoint `backend/services/steamApi.js`'s `getSchemaForGame()` calls (`ISteamUserStats/GetSchemaForGame/v2`), using the project's own `backend/.env` `STEAM_API_KEY`, for Portal 2 (appid 620), Hollow Knight (appid 367520), and — as a sourcing-methodology check — Hades (appid 1145360) again. Results saved to scratch files outside the repo (`.../scratchpad/620-schema.json`, `367520-schema.json`, `1145360-schema.json`), nothing written to the working tree.

**Confirmed `hades.json` was itself built this way**: every one of its 49 curated entries' `apiname`/`name`/`description` matches the live Steam schema's `name`/`displayName`/`description` byte-for-byte (spot-checked all 6 of the first entries programmatically, and the live count is exactly 49, matching the curated file). So "exactly as done for Hades" now has a verified, reproducible definition: `apiname` = Steam's `name`, `name` = Steam's `displayName`, `description` = Steam's `description`, copied verbatim; `id`, `difficulty`, `missable`, `estimatedTime` are curatorial fields not present in Steam's schema at all.

**Live, verified totals (as of this audit):**

| Game | Live Steam achievement count | Hidden achievements (no public `description`) |
|---|---|---|
| Portal 2 (appid 620) | **51** | **0** |
| Hollow Knight (appid 367520) | **63** | **24** |

Portal 2's 51 total matches the audit's earlier approximate estimate exactly. Hollow Knight's 63 also matches the estimate, but with a real complication: **24 of its 63 achievements are Steam-hidden**, and Steam's `GetSchemaForGame` endpoint — confirmed by inspecting the live response — omits `description` entirely for hidden entries (it still returns `apiname`/`name`/icons, just not the description, which is standard Steam behavior, not a bug in our code or an API failure). This means Hollow Knight cannot be curated to the same completeness as Portal 2 purely from this endpoint; 24 entries will need an explicit, separate decision on how to represent a missing description (e.g. omit the field, or a clearly-labeled curatorial placeholder like "Hidden achievement — description not public"), which is a real content/product decision, not something to default silently.

### Recommendation: split into two phases

Given that gap, splitting as you suggested is the right call:

- **Phase 40 (this phase): Portal 2 only.** Clean data — all 51 achievements have public names/descriptions, zero hidden entries, zero ambiguity. Directly fixes the false "100% completion" claim, which is the concrete, actively-misleading bug found in the original audit.
- **Phase 41 (separate, not approved yet): Hollow Knight.** Needs its own explicit decision on the 24 hidden-achievement descriptions before implementation, plus your review of that specific tradeoff — proposing it as its own phase rather than bundling an unresolved content-policy question into Phase 40.

## 4b. Discovered logic defect (informational — not in scope unless you approve it)

Per your instruction to leave merger/planner/route/UI logic untouched *unless the audit finds an actual defect that data alone can't solve* — one was found, and it's worth flagging even though populating Portal 2's data to 51/51 resolves its *current* concrete symptom:

`getRecommendedAchievement()` (`src/utils/planner/recommendation/recommendation.js:18-46`) declares "all achievements completed" (renders the "🎉 100% completion" message) purely by checking whether every entry in the **curated** `game.achievements` list is complete — it never cross-checks against `game.mergedAchievements.steamOnlyCount`, which `achievementMerger.js` already computes and which is nonzero whenever Steam's live schema has achievements outside the curated set. Meanwhile, `steam-achievement-list.js` on the same game page independently computes and displays the real "X/Y unlocked" count from the full merged list (confirmed correct by its own tests). So today, the *same page* can show two disagreeing completion signals if curated data is ever incomplete: an accurate "38/51 unlocked" list alongside a false "you've hit 100%" recommendation panel.

Populating Portal 2's curated set to exactly 51/51 (matching the live total right now) makes this specific instance correct today, but the underlying check has no live cross-check — if Steam ever adds achievements to a game whose curated set stays static (DLC, a future update), this exact false-100% bug would silently reappear with no code change on our side. Two options, your call, not assumed into scope:

- **Option A (recommended, small, in-scope under your exception clause):** add a one-line guard in `getRecommendedAchievement()` — don't return the "all complete" `null` state when `game.mergedAchievements?.steamOnlyCount > 0`, i.e. Steam confirms there are achievements outside the curated set. This is a genuine bug fix, not a redesign, and it's the only way to make the "100%" claim actually future-proof rather than accidentally-correct-today.
- **Option B (defer):** leave `recommendation.js` untouched this phase, rely solely on Portal 2's data now being complete (51/51), and revisit this as a dedicated small hardening phase later if you'd rather keep Phase 40 to pure data + data-shape tests.

## 5. Phase 40 Proposal (revised)

### Problem / gap
Portal 2 has only 3 of its 51 real Steam achievements curated. Once a player completes those 3, `getRecommendedAchievement()` returns `null` and the UI shows "🎉 100% completion" — a false claim, since ~48 real achievements remain. (Hollow Knight has the same class of problem but is out of scope for this phase — see section 4, split rationale.)

### Why this is the highest-value next step
- It's the app's core feature (achievement planning), not a peripheral one — Guides, Profile, and Podiums are all already in reasonable shape per this audit.
- It fixes an actively misleading claim, not just an absence of content.
- It's a natural continuation of the most recent commit (`18bf2ff`, Hades curation), now using a verified, reproducible sourcing method instead of an assumed one.
- Portal 2's data is clean (0 hidden achievements, full public descriptions for all 51), so this phase has no open content-policy question blocking it, unlike Hollow Knight.
- It's purely additive data (one JSON file) — no changes to merge logic, routes, or components are required for the core fix, keeping blast radius small (see 4b for the one optional exception).

### Exact goal
Populate `src/data/games/portal-2.json`'s `achievements[]` with all **51** achievements, `apiname`/`name`/`description` copied verbatim from the live Steam schema (`ISteamUserStats/GetSchemaForGame/v2`, appid 620), plus curatorial `id`/`difficulty`/`missable`/`estimatedTime` for each — matching `hades.json`'s exact shape and the sourcing method verified in section 4.

### Files likely to change
- `src/data/games/portal-2.json` (rewrite `achievements[]`: 3 → 51 entries)
- A new or extended test file asserting the curated data's completeness/shape (see Tests plan)
- `src/utils/planner/recommendation/recommendation.js` — **only** if you approve Option A in section 4b; otherwise untouched
- No route, merger, or catalog-card changes in either case

### Implementation plan
1. Re-fetch the live Portal 2 schema via `getSchemaForGame(620)` (same function `backend/routes/games.js` already calls) at implementation time, so the data reflects whatever Steam reports at that moment rather than this audit's cached snapshot.
2. For each of the 51 entries, set `apiname` = Steam's `name`, `name` = Steam's `displayName`, `description` = Steam's `description`, copied verbatim (no rewriting/paraphrasing).
3. Assign the curatorial fields per entry: `id` (sequential 1–51), `difficulty` (1–5), `missable`, `estimatedTime` (minutes) — using the same judgment scale evidently used for Hades (story-progress vs. skill-check vs. easily-missed/co-op-only), clearly labeled as curatorial judgment, not Steam fact, for your review.
4. Replace `achievements: []`'s current 3-entry stub with the full 51-entry list; leave every other top-level field (`id`, `steamAppId`, `name`, `image`, `difficulty`, `completionTime`, `missable`, `playthroughs`, `hasGuide`, `genres`) untouched.
5. Verify all 51 `apiname` values exactly match the live schema's `name` field (programmatic diff against a freshly re-fetched schema, not eyeballing) to avoid silent `apiname-not-found` mismatches in `achievementMerger.js`.

### Tests / verification plan
- **Data-completeness test (new, addresses your requirement directly):** assert `portal-2.json`'s `achievements.length === 51`, no duplicate `id`, no duplicate `apiname`, and every entry has non-empty `apiname`/`name`/`description`. This is a static guard against the file ever silently regressing to a partial set again.
- **Steam-field-vs-curatorial-field separation test:** assert every `apiname` in the curated file exists in a live-fetched (or a committed fixture snapshot of the) Portal 2 schema, keeping the "Steam-sourced" fields provably traceable to Steam rather than hand-typed.
- **Behavioral regression test on `recommendation.js`:** using the existing `makeGame()` test helper pattern in `test/recommendation.test.js`, add a case with a `mergedAchievements.steamOnlyCount > 0` fixture (curated set exhausted, but Steam reports more achievements) — if Option A (4b) is approved, this test asserts the "100%" `null` state is correctly withheld; if deferred, this test documents the known limitation instead of silently passing.
- Run the full suite (root, with the CI env vars) before and after — expect 525/525 plus the new tests, no regressions.
- Manually exercise: load Portal 2's Game page, confirm the Session Planner and Recommended Achievement render real entries across difficulty tiers (not the empty state), confirm the catalog card still renders correctly, and — with a Steam-logged-in session if available — confirm real achievements merge/match correctly (`achievementMerger.js` matched vs `apiname-not-found`) rather than assuming success from data alone.
- Confirm Hollow Knight, Hades, Guides, and Profile are all unaffected (no changes there).

### Risks / scope concerns
- **Data staleness between audit and implementation**: this audit's 51-count is live as of today; if Steam is re-fetched at implementation time and returns a different count (e.g. a future DLC achievement), the goal count and this document should be treated as needing a quick re-check, not blindly trusted from this proposal.
- **Curatorial judgment (difficulty/estimatedTime/missable) is inherently subjective** — flagged per-entry as curatorial, not Steam fact, and should get your spot-check same as any user-facing content, same bar as Hades presumably got.
- **Scope discipline**: stays confined to `portal-2.json` plus tests. `achievementMerger.js`, routes, and catalog-card logic are untouched under any scenario; `recommendation.js` changes only with your explicit approval of Option A in 4b.
- **Hollow Knight is explicitly out of scope** for Phase 40 — proposed as Phase 41 once its hidden-achievement-description handling is decided.

## 6. Phase 40 — Implementation report

**Approved scope:** Portal 2 only, `recommendation.js`/planner/merger/UI logic untouched (no genuine bug was found that data alone couldn't fix), data-completeness + consumption tests, full suite, live-browser check, regression check on Hades/Hollow Knight.

**Sourcing:** re-fetched the live Portal 2 schema at implementation time (`ISteamUserStats/GetSchemaForGame/v2`, appid 620, using `backend/.env`'s real `STEAM_API_KEY`) — confirmed 51 achievements, 0 hidden, matching this audit's earlier count exactly. A script cross-checked every curated entry's `apiname` 1:1 against that live response before writing the file (all 51 matched, no duplicates, no missing/extra apinames) — see `id`/`apiname`/`name`/`description` in `src/data/games/portal-2.json`, all copied verbatim from Steam. `difficulty`/`missable`/`estimatedTime` are curatorial judgment, clearly separated in the same object shape `hades.json` already uses.

**Files changed:**
- `src/data/games/portal-2.json` — `achievements[]` rewritten from the old 3-entry stub to the full, live-verified 51-entry list. All other top-level fields (`id`, `steamAppId`, `name`, `image`, `difficulty`, `completionTime`, `missable`, `playthroughs`, `hasGuide`, `genres`) left untouched.
- `backend/test/plannerCatalog.test.js` — 4 new tests appended: `getPlannerData('portal-2')` returns exactly 51 achievements (the direct regression guard against a partial set ever being silently reintroduced), no duplicate `id`/`apiname`, every achievement has well-formed Steam-sourced and curatorial fields, and `getPlannerDataByAppId(620)` resolves to `portal-2` with the same complete set.

**Files explicitly NOT changed:** `hades.json`, `hollow-knight.json`, `debug-game.json`, `achievementMerger.js`, `recommendation.js`, `sessionPlanner.js`, any route, any component/UI file — confirmed via `git status`/`git diff --stat` showing only the two files above touched.

**Tests:**
- `cd backend && npm test`: 257/257 passing (253 baseline + 4 new).
- `npm test` from root with CI's env vars: 529/529 passing (525 baseline + 4 new).

**Live-browser verification (Portal 2, `game.html?slug=portal-2`, backend on :3000 + static frontend on :5501):**
- Header now reads "Achievements 0 / 51 · 0% completed" (was showing the 3-entry stub before this phase).
- Recommended Next Achievement shows a real entry ("Wake Up Call — Survive the manual override — Difficulty 1/5, 5 min — Very easy achievement / Cannot be missed / Quick to complete") — not the old false "100% completion" state and not the "no curated data" empty state.
- Today's Session (Session Planner) populated with real curated achievements ("Wake Up Call", "You Monster", …), matching estimatedTime/difficulty.
- The full merged Steam achievement list further down the page renders all 51 achievements with real global-unlock percentages pulled live from Steam (e.g. "White Out — 38.3% of players", "Overclocker — 4% of players") — confirming every curated `apiname` correctly matched the live schema (a wrong apiname would have shown that entry with no global percent / as unmatched).
- No console errors observed.

**Regression check:**
- Hades (`slug=hades`): unaffected — still "0 / 49 · 0% completed", Game Guide link intact.
- Hollow Knight (`slug=hollow-knight`): unaffected — still shows the true live Steam total via the header ("0 / 63", sourced from the merged/Steam-schema count, not curated data — pre-existing behavior, confirmed unrelated to this change since `hollow-knight.json` was never touched), guide correctly shows "hasn't been published yet".

**Local-environment note (not a regression):** one earlier live-browser check briefly hit a false redirect (`game.html?slug=...` → `/`) caused by a stale test static-file server (`serve`)'s cached 301 response, resolved by switching the local static server and clearing the cached redirect — purely a manual-testing artifact of this session, unrelated to the app itself and left no trace in the app or its config.

**What could not be tested:** merge behavior against a real, authenticated Steam session (login requires real user credentials, not available in this environment) — verified instead via the live global-achievement-percent data appearing correctly for all 51 entries, which only happens on a correct `apiname` match.

**Final `git status --short`:**
```
 M backend/test/plannerCatalog.test.js
 M src/data/games/portal-2.json
?? PHASE_40_AUDIT.md
```

Not committed or pushed — waiting for your review and approval.
