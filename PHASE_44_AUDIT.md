# Phase 44 Audit — Deep, Read-Only Audit (No Implementation)

Explicitly requested as a substantial phase, not a quick patch. This audit combines my own end-to-end investigation of `src/js/game.js` (the Game page controller — the app's most complex, most stateful, and completely untested file) with two parallel deep-dive investigations into data-integrity/catalog-architecture and test-architecture/UX/mobile territory. Every non-trivial claim from the delegated investigations was independently re-verified against the real code before being included below — one claim was found to be meaningfully overstated on verification and has been corrected accordingly (see 3c).

## 1. Verified repository baseline

- `git fetch origin` + `git status -sb`: `main` clean, up to date with `origin/main`.
- `git rev-parse HEAD` / `origin/main`: both `06537b4e28f85b680429d8ac023c1274fdc4085f` (Phase 43's commit).
- Full suite baseline, root with CI's env vars: **543/543 passing**.
- Backend-only, real `backend/.env`: **262/262 passing**.

## 2. Areas inspected

**Personally, in depth:** the entire `src/js/game.js` page controller (all ~490 lines — `init()`, `refresh()`, `renderRecommendation()`/`renderSession()`/`renderAchievementCards()`, `pollSteamUpdates()`/`startPolling()`/`stopPolling()`, the `visibilitychange` handler, the session-duration change handler, the skip-button handler), `src/utils/planner/progress.js`, `src/utils/planner/storage.js`, `src/utils/player/inventory/inventoryManager.js`, `backend/utils/cache.js` and `backend/server.js`'s session configuration (continuity from Phase 43's still-open findings), and a targeted re-verification of a data-integrity claim (see 3c) by running it against the real, unmodified `player.js`.

**Via two parallel deep-dive fork investigations** (full transcripts not retained by design; every material claim spot-checked against the real files below before inclusion):
- **Data integrity & catalog architecture**: localStorage schema/migration risk across every localStorage-backed system (`player.js`, `inventoryStorage.js`, `avatarStorage.js`, `planner/storage.js`, `session/sessionStorage.js`), catalog data validation and scalability (`src/data/games/*.json`, `plannerCatalog.js`, `gameMapper.js`), cross-system unit consistency, leaderboard data integrity over time, backend defenses against malformed Steam data.
- **Test architecture & UX/mobile**: whether the test suite has any integration/end-to-end coverage vs. purely unit-level, mobile/responsive CSS across all 35 stylesheet files, color-contrast computation on the actual CSS custom-property values, and a spot-check of existing test quality for shallowness/over-mocking.

## 3. Findings

### 3a. [PRIMARY — recommended] `game.js`'s Steam-polling has no request-sequencing guard, and the file has zero test coverage of any kind

This is the same issue flagged as a secondary finding in Phase 43 (4b) — this audit goes substantially deeper: full root-cause trace, a concrete fix design, and a build-out plan, rather than a one-paragraph flag.

**The bug.** `src/js/game.js`'s `pollSteamUpdates()` (around line 421) does:

```js
async function pollSteamUpdates() {
    try {
        game = await getGame(slug);
        syncAchievementCompletion(game, slug);
        saveProgress(game, slug);
        refresh();
    } catch (error) {
        console.error("Unable to refresh Steam achievement data:", error);
    }
}
```

This is triggered from two independent, unsynchronized places: a 60-second `setInterval` (`POLL_INTERVAL_MS`), and directly and unconditionally from the page's `visibilitychange` handler every time the tab regains focus. There is no `AbortController` anywhere in the frontend (confirmed via `grep -rn "AbortController" src/` — zero matches) and no request-id/generation check (confirmed via `grep -rn "requestId\|generation" src/` — zero matches). `stopPolling()` (called when the tab loses focus) only clears the `setInterval` timer — it does not, and cannot, cancel an already-in-flight `fetch`.

**Concrete, ordinary-user failure scenario, verified by tracing every downstream consumer of the reassigned `game` variable:** a player alt-tabs away and back twice in quick succession while the Game page is open — an entirely normal action, not contrived. Each visibility-regain fires an independent `pollSteamUpdates()` call. If the first call's network round-trip happens to be slower than the second's (ordinary jitter, no adversarial timing needed), the second (fresher, correct) response can resolve and render first, and the first (now-stale) response can land afterward and silently overwrite it via the unguarded `game = await getGame(slug)` assignment. Every one of `refresh()`'s five render functions reads the same closure variable `game` with no staleness awareness at all:
- `updateProgress(game)` (`src/utils/planner/progress.js`) — the achievement progress bar/counter/percentage regresses to older numbers.
- `updatePlannerStats(game)` — remaining time/difficulty/missable-count regress.
- `renderRecommendation()` — the Recommended Achievement panel can revert to a previously-completed achievement.
- `renderSession()` — the Session Planner's checklist can un-check an already-confirmed achievement.
- `renderAchievementCards()` — the full Steam achievement grid regresses.
- `saveProgress(game, slug)` (`src/utils/planner/storage.js`) additionally **persists** the stale snapshot to `localStorage["planner-{slug}"]`, which `profile.js` reads for cross-page statistics — so the regression isn't confined to this one page render, it's written to disk (until the next successful poll corrects it, ≤60s later).

**Why this directly matches the "core user journey" the standing project focus keeps naming:** this is exactly the "seeing accurate progress" step, on the one page (`game.html`) that is the center of the entire app, and it is the single most complex, most stateful piece of frontend orchestration in the codebase.

**Test coverage: zero, of any kind, for the entire file.** Confirmed via `grep -rln "js/game.js" test/` → no matches, and `ls test/ | grep -i "^game"` → every "game*" test file (`gameGuideNotice`, `gameHeader`, `gameOverview`, `gamesCatalog`, `gameService`, `gamesPageFilterPipeline`) tests either a component or a pure utility — never the page-controller orchestration logic (`init`/`refresh`/`pollSteamUpdates`/`startPolling`/`stopPolling`) itself, because none of it is exported or importable in isolation today. This is a genuine, structural reason the bug could ship unnoticed: there was no seam to test it through.

**Why this is architecturally worth fixing properly, not patching:** the same unguarded "assign shared state from an awaited value with no ordering check" shape is not reused anywhere else in the app (`grep -n "setInterval\|visibilitychange" src/js/*.js` confirms `game.js` is the only page controller with this pattern) — so this isn't a systemic bug needing a sweep, but it is the one place complex enough to warrant introducing a real, reusable pattern (a small, generically-named polling/request-sequencing utility) rather than a local one-off patch, exactly because this file's complexity is what let the bug hide in the first place.

**Severity:** Medium-High user impact (directly hits "seeing accurate progress," reachable via completely ordinary use, not an edge case) — but explicitly **not** in the same tier as the two previously-fixed false-completion bugs (Phases 42-43), because this regression is transient and self-correcting (the next successful poll, ≤60s later, or the next tab-focus event, always corrects it) and `syncAchievementCompletion()` is purely additive/idempotent, so a stale poll can never revoke already-granted XP/badges or re-trigger a false completion. Confidence: **High** — the missing guard is directly confirmed in the code (not inferred), and the failure mode was reproduced at the pattern level (an isolated script modeling the exact same "two overlapping unguarded awaits, later-starting one resolving first" shape reliably renders in the wrong order).

### 3b. [Runner-up, seriously considered] `GET /api/games/:slug` — the single most complex, most-relied-upon backend route — has zero test coverage

Surfaced independently by the test-architecture investigation, and verified directly: `backend/routes/games.js:237`'s `router.get("/:slug", ...)` assembles `mergedAchievements`/`steamAchievements`/`steamPlayerAchievements`/`schemaStatus`/`achievementAvailability` — 5+ moving parts (schema fetch, player-achievements fetch, global-percentages fetch, merge, availability classification) feeding the *entire* Game page. `backend/test/apiGamesRoute.test.js` (the only test file that hits this route family over real HTTP) has exactly 3 tests, all targeting `GET /api/games` (the list endpoint) — none exercise `/:slug`. `test/gameService.test.js`'s frontend-side tests mock `fetch` with a hand-typed fixture, never the real route's actual response shape — so nothing anywhere verifies the backend's real output and the frontend's consumption of it actually agree, which is exactly the class of bug (a cross-layer assumption mismatch) that produced both of the false-completion bugs already fixed this arc.

This is a strong, well-evidenced candidate — arguably even more strategically valuable long-term than 3a, since it would catch a whole *class* of future bugs rather than one specific one, and the codebase already has the exact reusable integration-test infrastructure needed (`apiGamesRoute.test.js`'s `startServer()`/`withServer()` helpers, which spawn the real `server.js` and hit it over real HTTP — the same pattern `server.test.js`/`serverSecurity.test.js`/`apiMe.test.js` already use). See section 4 for why 3a is still the primary recommendation over this one.

One real implementation wrinkle if this is ever tackled: the route calls Steam's schema/global-percentage endpoints (public, unauthenticated) unconditionally whenever `appid > 0` — a naive integration test would make real outbound calls to Steam. That's workable (public endpoints, no auth needed) but is a deliberate decision to make explicitly, not an oversight to stumble into.

**Severity:** High confidence this is a real coverage gap; but it's prophylactic (no known bug exists in this route today), not curative.

### 3c. [Investigated, materially corrected on verification] localStorage's ad-hoc field-defaulting is a real but overstated risk

The data-integrity investigation's original claim was that a future field added to `player.js`'s stored shape without a matching `??=` default guard would leave a returning user's counter **"permanently stuck at null forever."** I reproduced this myself against the real, unmodified `player.js` and found the actual behavior is meaningfully less severe:

```
completedAchievements before completeAchievement(): undefined
completedAchievements after completeAchievement(): null
raw stored JSON: {...,"completedAchievements":null}
completedAchievements after a SECOND completeAchievement(): 1
```

The first increment of an unguarded, undefined field does `undefined++` → `NaN` → `JSON.stringify(NaN)` → stored as `null` (as claimed). But the **second** increment reads that stored `null` back and does `null++` — and in JS, `null` coerces to `0` before the increment (unlike `undefined`, which coerces to `NaN`), so it correctly becomes `1` and continues counting normally from there. The field **self-corrects after exactly one more event**, undercounting by exactly one — it does not get permanently stuck. This is still a real, evidenced fragility (relying on an accident of JS's `null` vs. `undefined` coercion semantics is not a defensible design, and the same missing-guard pattern in `inventoryStorage.js`/`inventoryManager.js`'s `addItem()` is worse — a missing category array causes a **silent, non-self-correcting no-op**, not a self-healing counter), but it is not currently reachable for any real user: `completedAchievements`/`completedGames`/every other guarded field has existed in `DEFAULT_PLAYER` since the very first commit (`git log --follow`), so no existing user has ever had one of these fields missing. This is a real "the next careless field addition could bite someone" hygiene gap, not a live incident.

**Severity: Low-Medium**, correctly scoped — worth hardening (e.g. a single `{ ...DEFAULT_PLAYER, ...stored }` spread instead of 7 hand-written `??=` lines would close this structurally, for free, for every current and future field) but not remotely in the tier of 3a/3b, and explicitly not recommended as this phase's primary scope given how narrow and non-urgent it is today.

### 3d. [Confirmed, narrow] `hades.json` has no completeness/shape test coverage, unlike its two siblings — and there is no shared/generic catalog validator

`backend/test/plannerCatalog.test.js` has dedicated regression tests for `portal-2` (Phase 40: 51-achievement count, no-duplicate-id/apiname, field-shape validation) and `hollow-knight` (Phase 41: 63-achievement count + hidden/visible description split) — both added *after* this testing convention was established. `hades.json` (49 achievements, populated Phase 39, before the convention existed) only has a generic `data.name === "Hades"` check — no count assertion, no duplicate check, no shape validation. There is also no generic, loop-based validator that runs the same checks across every catalog game automatically — each game's coverage was hand-written per-phase, and the one game that predates the convention was never backfilled. Concretely: a hand-edit typo in `hades.json` (a duplicated id, a truncated array, an out-of-range difficulty) would not be caught by anything in the test suite today.

**Severity: Low-Medium.** Real, concrete, cheap to fix (mirror the existing pattern, or better, replace all three per-game blocks with one shared, generic loop-based validator that automatically covers any future 4th/5th catalog game too) — but narrow in scope, not substantial enough alone to be this phase's primary focus.

### 3e. [Carried from Phase 43, still open, still not urgent] Unbounded in-memory session store and Steam-data cache

`backend/server.js`'s `express-session` defaults to `MemoryStore` (no `store:` option) and `backend/utils/cache.js` is a lazily-evicted `Map` with no cap — both grow without bound over the life of a long-running server process, addressed only by re-verification this session (no new evidence changes Phase 43's assessment). Still real, still architecturally worth fixing eventually (a SQLite-backed session store would be the natural choice given the project already uses `better-sqlite3` for leaderboards), still explicitly **not** recommended as this phase's scope: it's a scale-dependent concern with no reproducible symptom today (this is a low-traffic personal/portfolio project), and a proper fix is a bigger, separate architectural decision (introducing a new session-store dependency and its own test/rollout risk) that deserves its own phase rather than being bundled opportunistically into an unrelated fix.

### 3f. Investigated and found solid — no findings

- **Mobile/responsive CSS** is meaningfully better than a "nothing since one old Home fix" hypothesis suggested: 6 of 35 stylesheets have real `max-width:640px` breakpoints (including a genuinely well-built `grid-template-areas` reflow in `podium.css`), and most grid layouts without explicit breakpoints use `repeat(auto-fit/auto-fill, minmax(...))` — responsive by construction. No concrete breakage found in the components checked.
- **Color contrast**: computed directly from the real CSS custom-property hex values — `--text-secondary` on `--background`/`--surface` comes out to ≈6.97:1 / ≈5.71:1, both clearing WCAG AA's 4.5:1 threshold comfortably. Not a real gap.
- **Existing unit test quality**: spot-checked `podiumsClient.test.js`, `playerProgress.test.js`, `gamesPageFilterPipeline.test.js` — meaningful assertions, real edge cases, no over-mocking that would hide a real bug.
- **Cross-unit confusion** (game-level hours vs. achievement-level minutes, `playthroughs`): never mixed in any calculation anywhere; `playthroughs` is purely cosmetic.
- **Malformed-Steam-data defense**: `achievementMerger.js` already explicitly detects and logs (rather than silently mis-merging) duplicate apinames/displayNames on both the Steam and AP sides — solid, consistent with Phase 43's prior confirmation.
- **Leaderboard schema/pruning**: no migration mechanism, no row pruning, goes silently stale for inactive/private users — architecturally the same "no cleanup story" as 3e, already transparently documented as a deliberate design tradeoff in the Podiums guide (Phase 43), not a new defect.

## 4. Why 3a (the polling fix) over 3b (the untested route) and the others

This was the closest call in the ranking, so it's worth making the reasoning explicit rather than asserting it:

- **3a fixes something broken today; 3b (and 3d) add safety net for something not currently known to be broken.** The user's own framing for this phase named "reliability" and "user journey" first among the target categories, and 3a is the only candidate that is an active, reproducible-today defect a real user can trigger through completely ordinary behavior (rapid tab-switching), not a hypothetical future risk.
- **3a satisfies "testing" and "architecture" simultaneously, not instead of "reliability."** Fixing it properly requires extracting `game.js`'s previously-untestable polling logic into a small, genuinely reusable, directly-testable module with real request-sequencing — the file goes from zero test coverage to a real regression suite for its most dynamic behavior. This isn't "add tests to a working thing" (3d, 3b) — it's "add tests *by fixing* a broken thing," which is a more complete win for the same unit of work.
- **3b is real and valuable, but is better served as its own dedicated phase.** A thorough integration test for `/api/games/:slug` needs to deliberately decide how to handle live outbound Steam calls (see 3b's wrinkle) — that's a real design decision worth its own focused attention, not something to fold in as a side effect of an unrelated frontend fix. Per the standing project convention against combining unrelated domains in one phase, bundling a frontend polling fix with a backend integration-test-harness decision would blur both.
- **3c and 3e are real but explicitly lower-urgency** (self-correcting/narrow, and scale-dependent/no-symptom-today respectively) — already reasoned through above.
- **3d is genuinely cheap and worth doing, but too narrow to be a phase on its own** — it's a natural candidate to fold into a future phase alongside other catalog/testing hygiene work, not a substantial phase by itself.

## 5. Recommended Phase 44 scope

**Fix the `game.js` Steam-polling race condition by extracting a small, testable, reusable polling/request-sequencing utility, wiring `game.js` through it, and building the first-ever test suite for this file's live-update behavior.**

### Exact goal
No response from `getGame(slug)` may ever overwrite `game`/re-render the page if a *newer* poll request has already been started since it began — regardless of which one resolves first. The fix must not change any other observable behavior (poll cadence, visibility-triggered immediate poll, error handling, idempotent XP/completion granting).

### Design
Introduce a small, dependency-free utility (tentatively `src/utils/planner/pollingManager.js`) exposing something like:

```js
export function createPoller(fetchLatest, onResult) {

    let requestId = 0;
    let timer = null;

    async function poll() {

        const thisRequestId = ++requestId;
        let result;

        try {
            result = await fetchLatest();
        } catch (error) {
            console.error("Poll failed:", error);
            return;
        }

        if (thisRequestId !== requestId) {
            // A newer poll started (and possibly already resolved) while
            // this one was in flight - a stale result must never overwrite
            // fresher state.
            return;
        }

        onResult(result);

    }

    function start(intervalMs) {
        if (timer) return;
        timer = setInterval(poll, intervalMs);
    }

    function stop() {
        if (!timer) return;
        clearInterval(timer);
        timer = null;
    }

    return { poll, start, stop };

}
```

`game.js` would replace its inline `pollTimer`/`startPolling`/`stopPolling`/`pollSteamUpdates` with a `createPoller(() => getGame(slug), freshGame => { game = freshGame; syncAchievementCompletion(game, slug); saveProgress(game, slug); refresh(); })` instance, calling `.start(POLL_INTERVAL_MS)`/`.stop()`/`.poll()` at exactly the same call sites the current code does.

### Files likely to change
- **New:** `src/utils/planner/pollingManager.js` (the extracted, testable utility).
- **New:** a test file for it (e.g. `test/pollingManager.test.js`).
- `src/js/game.js` — replace the inline `pollTimer`/`startPolling`/`stopPolling`/`pollSteamUpdates` closure state with a `createPoller(...)` instance; no other logic in this file should need to change.
- No backend, data, route, or other component changes anticipated.

### Implementation plan
1. Re-read `src/js/game.js` in full immediately before editing (confirm no drift since this audit).
2. Write `pollingManager.js` with the design above (or an equivalent shape arrived at during implementation — the exact API is a starting point, not a mandate).
3. Write `pollingManager.js`'s test suite first (test-first, since this is pure, dependency-free logic — no DOM/localStorage shim needed): normal single poll succeeds and calls `onResult`; a fetch error is caught, logged, and does not call `onResult`; two overlapping polls where the *later*-started one resolves *first* — the later one's result is the one delivered to `onResult`, and the earlier (now-stale) one's eventual resolution is silently discarded (never calls `onResult` a second time with stale data); `start()` called twice does not create a second interval; `stop()` before any `start()` is a safe no-op; `stop()` correctly halts further automatic polls (a manual `.poll()` call still works after `stop()`, matching current `pollSteamUpdates()`-is-still-directly-callable behavior).
4. Wire `game.js` through the new poller, preserving every existing call site's behavior (the 60s interval, the immediate poll-on-visibility-regain, `stopPolling()` on visibility-loss).
5. Do not touch `achievementManager.js`, `recommendation.js`, `gameCompletion.js`, `sessionManager.js`, `progress.js`, `stats.js`, or any component — this stays a localized extraction plus a drop-in replacement of the polling mechanism, not a rewrite of the page.

### Comprehensive test/verification plan
- Run the new `pollingManager.test.js` first, in isolation.
- Run the complete root suite (CI env vars) — expect 543 + new tests, zero regressions.
- Run the backend suite — expect 262/262 unchanged (backend untouched).
- **Live-browser verification is both possible and necessary here** (unlike Phases 42/43's data-only fixes) — this is a real behavioral/timing change to a page controller:
  - Load a real game page, confirm the initial render, the 60s auto-poll (observable via a shortened interval during manual testing, or by inspecting network requests), and the visibility-regain poll all still fire and render correctly.
  - Confirm rapid tab-switching (the actual failure scenario) no longer produces any visible regression — this needs either careful manual timing or a temporary artificial delay injected into one fetch during verification (never committed) to reliably force the out-of-order condition, since normal network timing may not reproduce it on demand.
  - Confirm achievement completion via `syncAchievementCompletion` and the game-completion bonus (Phase 43's fix) both still work identically through the new poller.
  - Check for console errors throughout.
- Review the final diff and confirm only the intended new file + `game.js` changed (plus the new test file).

### Risks and possible regressions
- **Low-moderate overall** — higher than Phases 42/43's single-guard-clause fixes since this touches a page controller's control flow and timing, not just a pure function's return value, and needs real browser verification, not just unit tests.
- **The extraction itself is the main risk**, not the request-sequencing logic — moving `pollTimer`/`startPolling`/`stopPolling`/`pollSteamUpdates`'s state into a new module must preserve every existing call site's exact behavior (immediate poll on visibility-regain, interval-based background polling, safe double-start/double-stop) with no behavioral drift; the implementation plan's step 4 and the live-browser plan above exist specifically to catch this.
- **No change to XP/completion granting semantics** — `syncAchievementCompletion`'s existing idempotency is the reason a stale poll (before this fix) could never cause double-granting; that safety net is untouched and unnecessary to touch.
- **No data, route, or schema changes.**

Waiting for your approval before touching any code.

## 6. Phase 44 — Implementation report

**Approved scope:** fix the polling race condition exactly along the primary recommendation, with proper request-sequencing (not debounce/delay), a genuinely reusable extracted module, comprehensive tests, and full live-browser verification.

**Final design (refined from the audit's draft during implementation):** the audit's draft compared each response's start-order against a single "last started" counter. While implementing the tests, I found and fixed a real correctness gap in that draft: if the *newest* request fails while an *older* one is still in flight, comparing against "last started" would discard the older request's still-valid result too, even though nothing fresher was actually ever delivered. The shipped design instead tracks the last *delivered* request's id and compares against that - a later-started request that ultimately fails can never suppress an earlier, genuinely valid success. This is exactly the kind of failure/success-ordering edge case you asked to be covered, and it changed the actual implementation, not just its tests.

**Files changed (4 total, exactly as scoped):**
- **New:** `src/utils/async/poller.js` — `createPoller(fetchLatest, onResult)`. Fully generic and dependency-free (no DOM, no localStorage, no planner-specific concept) - genuinely reusable by any future page needing "periodically re-fetch and safely apply only the freshest result," not a wrapper shaped only to satisfy `game.js`. Wraps both the fetch and the `onResult` delivery in error handling, matching (and replacing) the original inline `pollSteamUpdates`'s own try/catch.
- **New:** `test/poller.test.js` — 14 tests (see below).
- `src/js/game.js` — replaced the inline `pollTimer`/`startPolling`/`stopPolling`/`pollSteamUpdates` closure state with a single `createPoller(...)` instance; every call site (the initial `.start()`, the `visibilitychange` handler's `.stop()`/`.start()`/`.poll()`) preserved exactly. Net **-29 lines** (35 insertions, 64 deletions) - the extraction removes more than it adds.
- `PHASE_44_AUDIT.md` (this file).

**Nothing else touched** - confirmed via `git status`/`git diff --stat`: `achievementManager.js`, `recommendation.js`, `gameCompletion.js`, `sessionManager.js`, `progress.js`, `stats.js`, and every component are untouched.

**Tests added (14, all passing) - covering every scenario requested:**
- Basic success delivery; a fetch rejection is caught and never delivered; a failure doesn't block a later success (**failure/success ordering**).
- **The core stale-response race**: a later-started poll's result wins even when an earlier-started one resolves after it.
- A sequential (non-overlapping) control case, to prove nothing is broken when requests don't race.
- **The edge case my refined design specifically protects against**: an older, still-in-flight poll's success is still delivered when a newer, concurrently-started poll fails - proving the fix doesn't over-correct and throw away good data.
- **Three rapid overlapping polls** (the literal "alt-tab several times quickly" scenario) resolving in mixed order - only the newest survives, regardless of resolution order.
- **State persistence**: an explicit test using the exact `onResult` composition shape `game.js` uses (assign to a shared object + push to a simulated persisted-snapshot list, standing in for `saveProgress`'s localStorage write) - proves the stale snapshot can never reach the "save" path, not just an abstract return value.
- A throwing `onResult` doesn't corrupt bookkeeping or block later polls.
- **Timer-triggered polling** (using `node:test`'s built-in mock timers, the same convention already established in `backend/test/cache.test.js`): `start()` schedules on the given interval and not before; `start()` called twice doesn't create a second interval; `stop()` halts further ticks; `stop()` before any `start()` is a safe no-op; a manual `.poll()` still works after `stop()` (matching the real `visibilitychange`-regain behavior of starting the timer *and* immediately polling once).

**No arbitrary delays or debounce logic anywhere** - the fix is correct by construction (comparing delivery order via monotonic ids), not by making the race merely less likely to manifest.

**Full test suite:**
- Focused: `node --test test/poller.test.js` → **14/14 passing**.
- Full root suite (CI env vars): **557/557 passing** (543 baseline + 14 new).
- Backend suite (real `.env`): **262/262 passing**, unchanged.

**Live-browser verification** (backend on :3000, static frontend on :5501 - and, unexpectedly useful, this browser profile already carried a real, logged-in Steam session for a real player, "JaCaRu02," so this verification ran against genuine Steam data, not only synthetic fixtures):
- Loaded Hades' Game page: correct initial render, no console errors.
- Installed a `window.fetch` probe (logging only `/api/games/*` calls) and dispatched 5 rapid `visibilitychange` events in a tight loop with the tab genuinely visible throughout - the real-world "alt-tab several times quickly" shape. Confirmed via the probe: 5 overlapping `/api/games/hades` requests fired essentially simultaneously, all resolved 200, zero console errors, and the rendered page (progress bar, Recommended Achievement panel, Session Planner) remained fully consistent and correct afterward - no flicker, no regression to stale data.
- Confirmed the **Skip** button and session regeneration still work identically after the rapid-poll burst (recommended achievement changed correctly from "Escaped Tartarus" to "Rare Collectible," session list updated to match).
- Repeated the same 6-rapid-event burst on Portal 2's Game page, this time against **real Steam progress data** ("11/51 · 22% completed, 6h played" for the real logged-in player) - state remained fully consistent and correct after the burst, zero console errors.
- Timer-triggered background polling (the 60-second interval path) is covered by the unit tests via mock timers (a real 60+ second wait wasn't practical to additionally verify live) - it uses the exact same `poller.start()`/`.poll()` code path already exercised live via the `visibilitychange` handler above.

**Final diff**, confirmed via `git status --short` / `git diff --stat` / `git diff --check`:
```
 M src/js/game.js
?? src/utils/async/poller.js
?? test/poller.test.js
```
(plus this audit doc). `git diff --check`: clean, no whitespace errors.

Not committed or pushed yet at the time this section was written - see the final report for the commit/push outcome.
