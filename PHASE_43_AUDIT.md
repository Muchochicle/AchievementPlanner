# Phase 43 Audit — Deep, Read-Only Audit (No Implementation)

This audit was explicitly requested to be substantial, not a quick pass. It combines my own end-to-end trace of the core user journey (Games → Game → Achievements/Recommended → Session Planner → completion → Profile progress) with a parallel deep-dive investigation into frontend/test-coverage territory, plus my own separate deep dive into backend architecture (server startup, Steam OAuth, the full Podiums/leaderboard subsystem, caching, concurrency). The primary finding below was reproduced twice, independently, against the real, unmodified production code: once by the parallel investigation, and a second time by me afterward, re-running an equivalent fixture from scratch and independently confirming every supporting claim (the exact vulnerable code, `player.js`'s one-way ledger semantics, `unlockBadge`'s sole call site, the veteran-avatar threshold, the Profile page's contradicting "100%" text, and the zero-`steamOnlyCount`-coverage claim) by reading each file directly rather than trusting the description alone.

My own direct investigation additionally surfaced one real finding - a transient stale-state race condition in `game.js`'s Steam-polling mechanism - folded in as finding 4b. It's real (the missing guard is confirmed directly in the code) and worth fixing, but is lower severity than the primary finding (self-correcting, no permanent data mutation, and reproduced only at the pattern level rather than end-to-end) and does not change the recommended Phase 43 scope.

## 1. Verified repository baseline

- `git fetch origin` + `git status -sb`: `main` clean, up to date with `origin/main`.
- `git rev-parse HEAD` / `origin/main`: both `a809816f02b91cb0c6282c447db0e5d106c6badf` (Phase 42's commit).
- Full suite baseline, root with CI's env vars: **541/541 passing**.
- Backend-only, real `backend/.env`: **262/262 passing**.
- Recent history (most recent first): `a809816` (Phase 42, false-100%-completion fix), `74b3f5b` (Phase 41, Hollow Knight data), `e4f635c` (Phase 40, Portal 2 data), `18bf2ff` (Hades data), `2f292ed` (Games-page focus-visible), `c5b0f38` (Guides section) — matches what Phase 42's audit already reconstructed from `git log`/`git show`.

## 2. Areas inspected

Personally, in depth: the entire completion/XP/badge/level pipeline (`achievementManager.js`, `gameCompletion.js`, `player.js`, `playerProgress.js`, `avatarUnlocks.js`, `levelSystem.js`), the Profile page's two parallel stats systems (`profile-stats.js`, `profile-badges.js`, `profile-games.js`) and their actual data sources, `gameService.js`'s frontend fetch/error-handling layer, `availability.js`'s shared classification logic, `session-planner.js`'s own completion-adjacent claims, and targeted `git log`/`git show`/`git blame`-style history digging on `gameCompletion.js` specifically (including reading the full diff of the commit that last touched its completion logic).

Directly, by me, file-by-file (a second parallel fork I attempted for this territory didn't start - the environment only allowed one concurrent fork - so this was done as ordinary sequential investigation, not delegated): `server.js` startup/session config, `steamAuth.js`/`steamController.js` OAuth flow, the entire Podiums/leaderboard subsystem (`leaderboardDb.js`, `leaderboardStore.js`, `leaderboardSnapshot.js`, `podiumController.js`, `routes/podiums.js`), `profileStats.js`/`gameAchievementSummary.js` aggregation, `cache.js`, `concurrencyLimiter.js`, `sendServerError.js`, every route in `routes/api.js`/`routes/steam.js`/`routes/games.js`, and backend test coverage - plus the `game.js` polling trace that surfaced finding 4b.

Via one parallel deep-dive fork investigation (full transcript not retained in this context by design - findings synthesized below and independently spot-checked against the real files):
- **Frontend/UX/tests**: page controllers (`profile.js`, `podiums.js`, `games.js`, `guides.js`, `guide.js`, `app.js`), profile stats/badges/games components' actual data sources, `podium.js` rendering edge cases, the XP/level/title/avatar-unlock system, a broader accessibility sweep (selects, inputs, avatar-picker, heading hierarchy), a test-coverage gap analysis across `src/`, and a dead-code/tech-debt sweep.

## 3. The primary finding — investigated, reproduced, and confirmed

### `checkGameCompletion()` can permanently grant a false "Perfectionist" badge, 300 XP, and count toward the "veteran" avatar unlock — the same false-completion bug already fixed once this arc, in a second file

**File:** `src/utils/planner/game/gameCompletion.js:22-72`

```js
export function checkGameCompletion(game) {

    if (hasClaimedGame(game.slug)) {
        return false;
    }

    const merged = game.mergedAchievements;

    const completed =
        game.achievements.length > 0 &&
        game.achievements.every(achievement => {
            const entry = findMergedEntry(game, achievement.id);
            return entry ? isEntryCompleted(merged, entry) : false;
        });

    if (!completed) {
        return false;
    }

    claimGame(game.slug);
    completeGame();
    addXP(300);
    unlockBadge("Perfectionist");

    return true;

}
```

This determines "the game is 100% complete" purely by checking whether every entry in the **curated** achievement list (`game.achievements`) is Steam-confirmed. It never reads `game.mergedAchievements.steamOnlyCount` — the exact same count `backend/utils/achievementMerger.js` already computes on every merge, and the exact same field `recommendation.js` was fixed in Phase 42 to check for precisely this reason.

**Why this is not a duplicate/hypothetical retread of the Phase 42 fix** - it's a distinct file with a materially worse failure mode:

1. **Phase 42's bug produced misleading UI text.** This bug **permanently mutates player state**: `claimGame(game.slug)` is a one-way ledger (`hasClaimedGame` guards the top of the function), so once it fires, it can never be re-evaluated — not even after the underlying data is later corrected. A player who triggers this falsely keeps the badge/XP forever; a player who *should* get it later (once truly 100%) never gets the moment they earned, because the ledger already marked the game "claimed."
2. **It cascades through nearly the entire client-side gamification layer**, confirmed by tracing every downstream consumer: `addXP(300)` changes `totalXP` → recalculates `level`/`title` (`levelSystem.js`) shown in the navbar `player-widget` and Profile header; `unlockBadge("Perfectionist")` is the **only badge in the entire app** (`grep -rn "unlockBadge("` returns exactly one call site plus its own definition) - it is not one of many, it is the whole badge system; `completeGame()` increments `completedGames`, which feeds `checkPlayerUnlocks()`'s `player.completedGames >= 5` threshold for the "veteran" avatar (`playerProgress.js:47-56`), so a false completion can also falsely nudge a player toward - or directly trigger - a permanent avatar unlock.
3. **It is directly, visibly contradicted by a separate, correct computation already shipping on the exact same page.** `backend/utils/gameAchievementSummary.js` (used by `profileStats.js` for the Profile page's "⭐ 100%" stat card and "Completed" games section - see `src/components/profile-games/profile-games.js`'s own comment: "sourced from live Steam data, the same full-library scan behind the Profile '100%' stat") correctly computes completion from `getMergedAchievementStats()` over the **full merged list** (curated + Steam-only), not the curated subset alone. In a triggered-bug scenario, a real user's Profile page would simultaneously show: the correct "100%"/"Completed" stat card and sub-line (`src/components/profile-stats/profile-stats.js:167-170`) correctly *excluding* the falsely-flagged game, alongside a "🏅 Perfectionist" badge (`profile-badges.js`, which literally says "100%-complete a game to earn your first badge") for that same game - a direct, same-page, self-contradicting claim, not an abstract data-purity concern.
4. **The fix pattern for this exact class of bug already exists twice in this codebase** - once correctly, from the start, in `gameAchievementSummary.js` (backend), and once retrofitted in Phase 42 (`recommendation.js`). This is the third and (confirmed via `grep -rn "game.achievements\.every\|game.achievements\.length" src --include="*.js" | grep -v test`) **last remaining instance** of the naive, curated-only version of this check anywhere in production code.
5. **This function was not simply overlooked from day one - it was deliberately revisited for correctness once already, after `steamOnlyCount` already existed, and still missed this.** `git log --oneline --all` on `gameCompletion.js` shows: it was created in `8026570` ("feat(rpg): complete player progression and XP system"), *before* `869b3fc` ("feat: add read-only Steam-AP achievement merge by name") introduced `steamOnlyCount`. But `42e2f91` ("refactor: make Steam authoritative for achievement completion") - which came *after* `steamOnlyCount` already existed - explicitly rewrote this exact function's completion check (from a fragile DOM-checkbox read to the current `mergedAchievements`-based one, `git show 42e2f91` confirms this file was touched directly) and still didn't add the cross-check. This is genuine evidence the gap is a subtle, easy-to-miss one (worth the audit process existing), not negligence - but it also means simply "trusting this file is fine because it looks Steam-authoritative already" is exactly the trap a future reviewer could fall into again.
6. **Plausible historical exposure, not purely a future risk.** `src/data/games/portal-2.json` and `hollow-knight.json` have existed in the catalog since near the start of the project (`git log --diff-filter=A -- src/data/games/portal-2.json` → `5fe5e58`, one of the very first commits), long before Phase 40/41 populated their full curated data - Portal 2 spent most of the project's history at a 3-achievement curated stub, Hollow Knight at zero. The Podiums leaderboard (added later, `5d819f2`) already has at least one real indexed player on Portal 2's leaderboard (observed directly during Phase 40's live-browser verification: "JaCaRu02, 6 hrs"). **I cannot confirm whether any real player actually triggered this bug** - badge/XP/completion state lives only in each player's own browser localStorage and is never sent to the server, so there is no way to check from here - but the timeline makes it a real possibility, not a purely theoretical future concern, which raises this above a "will only matter someday" severity.

### Reproduced against the real, unmodified production code (not simulated/described)

A standalone script (kept in the session's scratch directory, outside the repo, not committed) imported the actual `checkGameCompletion` and `player.js` modules unmodified and ran this fixture - a game with 3 curated achievements, all genuinely Steam-confirmed, but `mergedAchievements.steamOnlyCount: 48` (Portal 2's real pre-Phase-40 shape):

```
checkGameCompletion() returned: true
player.completedGames: 1
player.totalXP: 300
player.badges: [ 'Perfectionist' ]
hasClaimedGame (permanent ledger) now blocks any future re-check: true
```

Confirmed: the bug is real, reproducible, and exactly as analyzed above - not a hypothetical concern.

### Test coverage: zero

`test/achievementCompletion.test.js` (the only test file covering `checkGameCompletion`) has 6 tests for this function, none of which ever set `steamOnlyCount` on the `mergedAchievements` fixture (`makeGame()`'s shape there is `{playerDataAvailable, achievements}` with no `steamOnlyCount` field at all - confirmed by direct read). `grep -rn "steamOnlyCount" test/` finds zero matches anywhere in the frontend test suite outside `recommendation.test.js`/`recommendedAchievement.test.js` (Phase 42's own additions). This directly matches the audit's "missing test coverage around important production behavior" category.

## 4. Other findings, ranked

Everything below was investigated to a real, evidenced conclusion (not left as vague suspicion), but none rise to the primary finding's combination of severity (permanent, cascading, cross-page-contradicting state mutation) × confidence (reproduced) × likelihood (plausible historical exposure, not just future risk) × low fix cost.

### 4a. [MEDIUM-HIGH, architectural] Two unbounded in-memory stores with no active eviction: session store and the Steam-data cache

`backend/server.js` configures `express-session` with no `store:` option, defaulting to the built-in `MemoryStore` - whose own documentation states it "is purposely not designed for a production environment" and "will leak memory under most conditions." A server comment claims `maxAge` lets the store "actually prune expired sessions instead of growing without limit," which is not accurate for `MemoryStore`'s real behavior (it only stops *accepting* expired sessions client-side; it doesn't sweep the server-side map). `backend/utils/cache.js` has the same lazy-eviction-only pattern for Steam schema/player/profile-stats caches, keyed per steamId/appid with no cap. At current hobby-project scale this is a non-issue; it becomes a real problem the moment traffic grows into a long-running production deployment - memory grows without bound until a restart or OOM, with nothing surfacing it beforehand. Matches the audit's "architectural issues that could become expensive later" category precisely. Not covered by any test (hard to unit-test memory growth) - appropriately so, this isn't really a unit-testable class of issue.

### 4b. [MEDIUM, found independently] `game.js`'s Steam-polling has no request-sequencing guard - a late, stale response can transiently overwrite fresher achievement/session/recommendation state

**Files:** `src/js/game.js:421-490` (`pollSteamUpdates()`, `startPolling()`/`stopPolling()`, the `visibilitychange` handler), `src/utils/planner/storage.js` (`saveProgress()`, the localStorage write this race can transiently corrupt).

`pollSteamUpdates()` does `game = await getGame(slug); syncAchievementCompletion(game, slug); saveProgress(game, slug); refresh();` - a plain, uncancellable `fetch()` with no `AbortController` and no request-id/sequence check (confirmed: `grep -rn "AbortController" src/` returns zero matches anywhere in the frontend). It's triggered from three places with no mutual exclusion: a 60s `setInterval` (`POLL_INTERVAL_MS`), and - critically - directly and unconditionally from the page's `visibilitychange` handler every time the tab regains focus (`:485`), while `stopPolling()` on losing focus only clears the *timer*, never cancels an already-in-flight fetch.

**Concrete, ordinary-user reproduction:** a player alt-tabs to check something and back twice in quick succession while the Game page is open (a completely normal action, not contrived). Each `visibilitychange`-to-visible transition fires an independent `pollSteamUpdates()` call. If the first call happens to be slower than the second (ordinary network jitter, no adversarial input needed), the second (fresher, correct) response can render first, and the first (now-stale) response can land afterward and silently overwrite it - regressing the displayed achievement-unlock state, the Recommended Achievement panel, the Session Planner, and the progress bar/counter (`updateProgress()` in `planner/progress.js`) back to older data, and re-writing `localStorage["planner-{slug}"]` (read by `profile.js`) with the stale snapshot via the same unconditional overwrite in `saveProgress()`.

**Reproduced at the pattern level, not by executing the real function directly** - `pollSteamUpdates` is an unexported closure inside `game.js`'s `init()`, so it cannot be imported and called in isolation the way `checkGameCompletion` was for the primary finding. A minimal script modeling the exact same shape (two overlapping `await`s with no sequencing, later-starting call resolving first, unconditional last-write-wins into a shared variable) reproduces the general race: the render order comes out `unlocked -> locked`. This confirms the *pattern* is a real hazard given the confirmed absence of any guard in the real code (no `AbortController`, no request-id/generation check - both verified directly by reading `game.js` and `grep`ing for `AbortController` across `src/`), but - unlike the primary finding, which was reproduced by running the actual unmodified `checkGameCompletion` - this one has not been demonstrated end-to-end against the real `game.js` in a live browser. Treat the underlying hazard as confirmed (the missing guard is a fact, not a guess) and the specific "alt-tab twice quickly" failure scenario as plausible-and-structurally-supported rather than independently observed in the running app.

**Why this is real but lower severity than the primary finding:** `syncAchievementCompletion()` (`achievementManager.js`) is purely additive/idempotent - it only *grants* XP for achievements the given snapshot shows completed, never revokes anything - so a stale poll cannot undo already-granted XP/badges. The regression is confined to what's rendered/cached until the next successful poll (≤60s later) or the next tab-focus event corrects it. No test file references `pollSteamUpdates`/`POLL_INTERVAL_MS`/`startPolling` at all (it's an unexported closure inside `init()`, not currently unit-testable in isolation) - a real, evidenced test-coverage gap, but expected given the architecture, not negligence.

**Not proposed as this phase's scope** - genuinely a different domain (Steam-polling/state-freshness vs. the primary finding's completion-logic bug), and per the standing project convention against combining unrelated domains in one phase. Worth its own scoped phase: likely fix shape is a monotonically-increasing request counter/generation id, checked before committing a poll's result to `game`/the DOM (the standard fix for this exact class of race), plus extracting `pollSteamUpdates` into an exported, directly-testable function as part of that fix.

### 4c. [MEDIUM] A Steam API hiccup right after a successful login shows the user a raw JSON error page

`backend/controllers/steamController.js`'s OAuth callback wraps the whole flow (including the `getPlayerSummary()` call made *after* Steam auth already succeeded) in one try/catch that funnels any failure into a generic `sendServerError` → a bare JSON 500 response. Every other failure in this same flow correctly returns structured JSON (fine for an XHR caller), but this specific endpoint is hit via a **top-level browser navigation** (Steam redirects the browser here directly), not a fetch call - so a transient Steam API hiccup at exactly the wrong moment (right after successful login) shows the user raw `{"success":false,...}` JSON with no link back into the app, rather than a redirect to the frontend with a recoverable error state. Real, reproducible failure mode (any transient upstream blip at that specific moment), moderate impact (hits the single worst moment for a bad impression - first login), fully recoverable by the user manually re-navigating.

### 4d. [LOW] Minor multi-tab race window in the XP/completion ledger (informational, not independently proposed)

`player.js`'s `claimAchievement()`/`addXP()`/`completeAchievement()` etc. are each an independent, synchronous localStorage read-modify-write with no cross-tab lock. Two tabs open on the same game, both polling every 60s, could in principle both read "not yet claimed" for the same newly-confirmed achievement before either writes back, double-granting 50 XP once. Narrow (requires two tabs open simultaneously on the same game with a poll-tick timing collision), low impact (a few extra XP, not a permanent badge/game-completion mutation like the primary finding), and would require either a `storage` event listener or a cross-tab lock to fix properly - noted for completeness, not proposed as a Phase 43 scope item on its own.

### 4e. [LOW] Dead code / stale documentation, no functional impact

- `GET /api/profile` (`backend/routes/api.js`) is fully implemented and tested but never called by any frontend code (`/api/profile/stats`, a different richer endpoint, is what's actually used) - maintained test debt and unused attack surface for zero current product value.
- `backend/services/leaderboardDb.js`'s own header comment says it's "currently unused by the rest of the app" - false today; `podiumController.js`/`leaderboardStore.js` both depend on it as the live backing store for all of Podiums. Simply never updated after a later phase wired it up.
- Leaderboard indexing only happens when a user visits their Profile page (not on login alone) - already deliberately designed and transparently documented in the Podiums & Leaderboards guide, not a gap.
- The per-game podium backend route accepts any Steam appid a user owns and is indexed for, not just the 3 catalog games - read-only, no extra PII exposure (persona name/avatar are already public via Steam), just a broader surface than the product currently links to. Confirms, as a positive side effect, that removing a game from the catalog wouldn't corrupt leaderboard data (indexing is keyed by raw appid, decoupled from the catalog JSON).

### 4f. What was checked and found solid (no findings)

- Steam OAuth/session-fixation defenses (state/nonce, session regeneration, server-side `check_authentication`) - well-hardened, consistent with prior security-focused commits.
- Leaderboard SQL layer - fully parameterized, no injection surface, proper transactions, careful "never fabricate missing data as zero" handling throughout.
- `profileStats.js` aggregation - correct concurrency-limited fan-out, in-flight de-duplication, sensible cache TTLs.
- `.env.example` vs actual required vars - no drift.
- `availability.js`'s shared frontend/backend classification logic - single source of truth, correctly used both sides, no drift risk.
- `session-planner.js`'s own "Session completed X%" claim - correctly scoped to the session's own planned subset, never claims game-wide completion; not a sibling of the primary bug.
- `levelSystem.js`'s XP/level math - consistent, no off-by-one at level boundaries.
- Backend test coverage - every backend module reviewed has a corresponding test file; no glaring "important module, zero tests" gap found backend-side (the coverage gap is specifically the `steamOnlyCount` scenario, frontend-side, covered in the primary finding).

## 5. Severity/priority ranking

| # | Finding | User impact | Confidence | Likelihood | Fix risk | Priority |
|---|---|---|---|---|---|---|
| 1 | `checkGameCompletion()` false-completion bug | High - permanent, cascading state mutation, directly self-contradicting on the same page | Very High - reproduced against real code | Medium - plausible historical exposure, not just future risk | Very Low - one-line guard, proven pattern from Phase 42 | **Highest** |
| 2 | Unbounded session/cache memory growth | Medium (future) - none today, real at scale | High | Low today, rises with real traffic growth | Medium - needs a real session-store decision, not a one-liner | Medium (defer - not urgent, needs its own scoping) |
| 3 | Stale Steam-poll response can transiently overwrite fresh achievement/session/progress state (4b, found independently) | Medium - directly hits "seeing accurate progress," but self-correcting within ≤60s, no permanent data mutation | High for the underlying hazard (missing guard confirmed by direct code read); pattern-level, not end-to-end, reproduction | Medium-High - ordinary rapid tab-switching, not an edge case | Medium - needs a request-sequencing guard + extracting `pollSteamUpdates` to be testable | Medium (defer - real, but a different domain from the primary fix; worth its own phase) |
| 4 | Raw JSON error on post-login Steam hiccup (4c) | Low-Medium - narrow window, fully recoverable | High | Low (requires a transient failure at one specific moment) | Low-Medium | Low-Medium |
| 5 | Multi-tab XP race (4d) | Very Low | Medium | Very Low | Medium (needs real cross-tab coordination) | Low |
| 6 | Dead `/api/profile` route + stale comment (4e) | None (no bug) | High | N/A | Very Low | Low (cleanup-only) |

## 6. Alternatives considered for Phase 43 scope

- **Fix the stale-poll-response race (4b) instead**: a strong secondary candidate - real, and directly in the "seeing accurate progress" part of the core journey - but rejected for *this* phase specifically because its consequences are transient/self-correcting, while the primary finding's are permanent and unrecoverable once triggered; its reproduction is also pattern-level rather than end-to-end (see 4b), and a proper fix needs `pollSteamUpdates` extracted into a testable unit first, making it a slightly larger, separate piece of work than the primary fix's one-line guard.
- **Fix the memory/session-store issue (4a) instead**: rejected for *this* phase - it's real but not urgent (no user-visible symptom today, no reproduction possible in this environment), and a proper fix (a persistent session store) is a bigger, separate architectural decision deserving its own scoped phase rather than being bundled opportunistically.
- **Fix the OAuth error-handling gap (4c) instead**: a reasonable secondary candidate, but lower severity/likelihood than the primary finding, and touches Steam-integration/session code the user's own standing instructions flag for extra scrutiny - better as its own tightly-scoped phase than combined with an unrelated planner-logic fix.
- **Bundle the primary fix with 4c or 4e cleanup in one phase**: rejected per the standing project convention against combining unrelated domains in one phase (planner/XP logic vs. Steam-auth-error-handling vs. dead-route deletion are three different domains) - each deserves its own focused review.
- **Do nothing / defer a third time**: rejected - this is a proven, reproduced bug with a permanent, unrecoverable consequence once triggered, in the literal last remaining instance of a bug class already fixed twice elsewhere in this codebase. Leaving it live risks exactly what already may have happened once (a real player's Profile permanently showing an unearned badge, unfixable even after the fix ships, since the ledger blocks re-evaluation).

## 7. Recommended Phase 43 scope

**Fix `checkGameCompletion()`'s false-completion bug**, mirroring the exact pattern already proven correct in Phase 42's `recommendation.js` fix.

### Exact goal
`checkGameCompletion(game)` must not grant the completion bonus (300 XP + "Perfectionist" badge + `completedGames`/`claimGame` ledger entry) unless `game.mergedAchievements?.steamOnlyCount` is `0` (or absent, matching the existing optional-chaining-default convention), in addition to every curated achievement already being Steam-confirmed.

### Files likely to change
- `src/utils/planner/game/gameCompletion.js` - add the `steamOnlyCount === 0` condition to the existing `completed` boolean (one added line + a `const steamOnlyCount = merged?.steamOnlyCount ?? 0;` binding), mirroring `recommendation.js`'s Phase 42 change.
- `test/achievementCompletion.test.js` - extend `makeGame()` with an optional `steamOnlyCount` param (same backward-compatible pattern Phase 42 used in `test/recommendation.test.js`); add regression tests.
- No other file needs to change - the data (`mergedAchievements.steamOnlyCount`) is already computed backend-side and already reaches this function today via the same `game` object `syncAchievementCompletion(game, slug)` already receives from `getGame(slug)`.

### Should the "curated complete but Steam has more" case get its own UI feedback, like Phase 42's `recommended-achievement.js` did?
Worth deciding explicitly rather than assuming: `checkGameCompletion` has no UI component of its own (it silently withholds a badge you'd only notice the absence of) - unlike `recommendation.js`, there's no existing "you're all done" message this function currently produces that would need a companion honest variant. My recommendation: **no new UI needed** for this phase - simply withholding the false badge/XP/ledger-entry is the correct, sufficient fix; the Recommended Achievement panel (already fixed in Phase 42) is what actually tells the player "you've completed the curated set, Steam has N more" - `checkGameCompletion` doesn't need to duplicate that messaging. Flagging this as a decision point in case you'd prefer otherwise (e.g. a distinct "so close!" toast), not assuming it into scope.

### Implementation plan
1. Read `src/utils/planner/game/gameCompletion.js` and `test/achievementCompletion.test.js` fully (already done during this audit, re-confirm no drift at implementation time).
2. Add `const steamOnlyCount = merged?.steamOnlyCount ?? 0;` and fold `steamOnlyCount === 0` into the existing `completed` boolean, keeping every other line unchanged (same minimal-diff approach as Phase 42).
3. Extend `test/achievementCompletion.test.js`'s `makeGame()` helper with an optional `{ steamOnlyCount }` param, backward-compatible (defaults to `undefined`, preserving every existing test's behavior unchanged).
4. Add regression tests: normal partial/full/empty/idempotent cases unaffected (existing tests, re-verified not just assumed); true completion with `steamOnlyCount: 0` explicit; true completion with `steamOnlyCount` missing entirely (edge case); curated-exhausted-but-`steamOnlyCount > 0` withholds the bonus entirely (the core regression test, mirroring this audit's own reproduction fixture).
5. Do not touch `achievementManager.js`, `recommendation.js`, `player.js`, or any UI component - this is a single, small, surgical logic fix in one function, exactly matching the user's standing instruction to keep such fixes minimal and localized.

### Comprehensive test/verification plan
- Run the new/updated focused tests first, in isolation (`node --test test/achievementCompletion.test.js`).
- Run the complete root suite (`npm test` from root, with CI's env vars) - expect 541 + new tests, zero regressions.
- Run the backend suite - expect 262/262 unchanged (backend untouched).
- Re-run this audit's own reproduction script (or an equivalent inline check) against the *fixed* code with the identical fixture (3/51-shape, `steamOnlyCount: 48`) and confirm `checkGameCompletion()` now returns `false` and grants nothing.
- Confirm, with the same or an adjacent fixture, that a genuinely complete game (`steamOnlyCount: 0`, every curated achievement confirmed) still correctly returns `true` and grants the bonus exactly once - no regression to the real, current, legitimate path any of the 3 real catalog games would take today.
- Live-browser check is not meaningfully possible for this one (like Phase 42's `curatedComplete` state, none of the 3 real games can currently exercise `steamOnlyCount > 0`) - reproduce via a synthetic fixture/script exercising the real modules directly, as already done for this audit, rather than a full browser session.
- Regression-check: confirm Hades/Portal 2/Hollow Knight's existing (correct, `steamOnlyCount: 0`) completion path is unaffected - i.e. a player who genuinely 100%-completes one of the 3 real games today would still get the badge/XP exactly as before.
- Check for console errors is not applicable here (no UI/DOM change) - covered instead by the full test suite and the reproduction script.
- Review the final diff and confirm only the intended 2 files changed (`gameCompletion.js` + its test file), matching the same discipline as Phase 42's commit.

### Risks and possible regressions
- **Very low overall** - this is the same fix shape already proven safe in Phase 42, applied to a structurally identical function.
- **Edge case worth naming (not a blocker):** if a curated achievement's `apiname` has a typo/mismatch (a pre-existing, unrelated data-quality risk already discussed in Phase 40/41's audits - `achievementMerger.js` reports but doesn't crash on an `apiname-not-found` anomaly), that mismatched Steam achievement would count toward `steamOnlyCount` even though the player likely did complete everything the curated data intended - this fix would then correctly-but-conservatively withhold the badge until the underlying data typo is fixed, rather than falsely granting it. This is a *safer* failure direction than today's behavior (withholding a badge is recoverable once the data's fixed and the player's ledger hasn't been falsely marked "claimed" yet; falsely granting one, as today's code does, is not recoverable at all) - noted for completeness, not a reason to hold this fix.
- **No data, route, or schema changes** - `steamOnlyCount` already flows through the exact same `game` object this function already receives.
- **No UI changes** proposed (see the decision point above) - if you'd prefer a companion UI state after all, that would be the one thing to scope explicitly before implementation, not assumed.

Waiting for your approval before touching any code.

## 8. Phase 43 — Implementation report

**Approved scope:** fix `checkGameCompletion()`'s false-completion bug exactly as proposed - no UI changes, no other files touched.

**Files changed (2 total, exactly as scoped):**
- `src/utils/planner/game/gameCompletion.js` - added `const steamOnlyCount = merged?.steamOnlyCount ?? 0;` and folded `steamOnlyCount === 0` into the existing `completed` boolean. Every other line unchanged.
- `test/achievementCompletion.test.js` - extended `makeGame(slug, entries, options)` with a backward-compatible optional `{ steamOnlyCount }` param (defaults to `undefined`, preserving every pre-existing test's behavior); the existing "awards the bonus" test got an explicit sanity assertion that it doesn't set `steamOnlyCount` (the "missing entirely" edge case); added 2 new tests: explicit `steamOnlyCount: 0` (real-games-today behavior) and `steamOnlyCount: 48` (the core regression, mirroring the audit's own reproduction fixture, including asserting `hasClaimedGame(...)` stays `false` so the game remains re-checkable later).

Confirmed via `git diff --stat`: nothing else touched - `achievementManager.js`, `recommendation.js`, `player.js`, and every UI component are untouched.

**Tests:**
- Focused tests run first, in isolation: `node --test test/achievementCompletion.test.js` → **10/10 passing** (8 original + 2 new).
- Full root suite (CI env vars): **543/543 passing** (541 baseline + 2 new).
- Backend suite (real `.env`): **262/262 passing**, unchanged (backend untouched).

**Reproduction re-verified against the fixed code:**
- Re-ran this audit's own bug-reproduction script (3 curated achievements, all confirmed, `steamOnlyCount: 48`) against the fixed code: `checkGameCompletion()` now returns `false`, grants 0 XP, unlocks no badge, and - critically - `hasClaimedGame()` stays `false`, so the game is **not** permanently locked out of ever being properly credited once the data or Steam catches up.
- Re-ran the control fixture (`steamOnlyCount: 0`, genuinely complete): still correctly returns `true`, grants exactly 300 XP, and unlocks "Perfectionist" - the real, legitimate path for all 3 current catalog games is unaffected.

**Diff review:** `git status`/`git diff --stat`/`git diff --check` all confirm exactly the 2 intended files changed, no whitespace errors, no stray edits.

**Final `git status --short`:**
```
 M src/utils/planner/game/gameCompletion.js
 M test/achievementCompletion.test.js
?? PHASE_43_AUDIT.md
```

Not committed or pushed - waiting for your review and approval.
