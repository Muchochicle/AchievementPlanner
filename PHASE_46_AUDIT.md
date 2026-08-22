# Phase 46 Audit (read-only)

## 1. Verified repository baseline

- `git status`: clean working tree, no untracked files.
- Local `HEAD` = `origin/main` = `bbf8530ed15a753646f8a41f2e5035468881f32d` (confirmed via `git fetch origin main` immediately before writing this document).
- Root test suite: **575/575 passing** (`node --test`, run from repo root).
- Backend test suite: **280/280 passing** (`node --test`, run from `backend/`).
- Live re-verification of catalog data: re-fetched live Steam schemas for Hades (1145360), Portal 2 (620), and Hollow Knight (367520) using the real `STEAM_API_KEY` in `backend/.env`. Zero drift against the curated JSON in `src/data/games/`: 49/49, 51/51, 63/63 apinames match exactly, 0 missing, 0 extra in any of the three. The Phase 40/41-established catalog remains fully accurate and the Phase 42/43 `steamOnlyCount` guards remain correctly dormant (no game currently has any Steam-only achievements to expose the bug class they guard against).

## 2. Areas investigated

Two parallel fork investigations were run alongside my own direct reading, and **every claim from both forks that mattered to this audit was independently re-verified by me against the current source** before being included below (per the standing instruction not to trust delegated agents at face value):

- **Fork A — Games listing page deep dive**: `gameMapper.js` slug derivation, `buildGamesList()`/`attachAchievementAvailability()` in `routes/games.js`, `/popular`'s player-count fan-out vs. `mapWithConcurrency`'s bounded fan-out, `selectPopularGames`, frontend `src/js/games.js`.
- **Fork B — Player progression system deep dive**: navbar/player-widget live-update behavior, `levelSystem.js`/`titleSystem.js` boundary correctness, `avatar-picker.js` vs. `playerProgress.js` unlock-requirement duplication, localStorage-failure propagation through the XP/badge-granting chain (`player.js`, `game.js`, `poller.js`).
- **My own direct reading** (independent of both forks): `concurrencyLimiter.js`, `popularGames.js`, `routes/games.js` in full, `gameMapper.js` in full, `src/js/games.js`, `src/js/game.js` (init/refresh/poller wiring, outer try/catch, lines 96-489), `src/utils/player/player.js` in full, `src/utils/async/poller.js` in full, `src/js/layout.js` in full, `src/components/player-widget/player-widget.js` in full, plus a live re-fetch of all three catalog games' Steam schemas.

Every finding below marked "independently verified" was confirmed by me reading the actual current file/line, not merely accepted from a fork's report.

## 3. Findings, ranked by severity × reachability

### Finding 1 (HIGH severity, HIGH reachability, independently verified) — The player-widget HUD never live-updates; XP/level/badge/avatar changes are invisible until the user reloads or navigates away

**Traced mechanism** (confirmed by direct reading of `src/js/layout.js`, `src/js/game.js`, `src/components/player-widget/player-widget.js`):

- `loadNavbar()` (`layout.js:13`) renders `#navbar` (which contains the player-widget) exactly twice — once optimistically logged-out, once with the resolved session — and is called **exactly once**, from `game.js:102` inside `init()`. Grepping `src/js/game.js` for `loadNavbar` confirms only that one call site.
- `refresh()` (`game.js:333-347`) updates `#progress-container`, planner stats, the recommendation card, the session panel, and achievement cards — it never touches `#navbar` or calls `createPlayerWidget`/`loadNavbar` again.
- The Phase-44 poller's `onResult` callback (`game.js:292-304`) calls `syncAchievementCompletion(game, slug)` (which is what actually grants XP/badges/levels via `player.js`), then `saveProgress`, then `refresh()` — none of which re-renders the player-widget either.
- `createPlayerWidget(session)` (`player-widget.js:27`) is a pure function of `getPlayer()` (which reads fresh from localStorage) and `session` — it is trivially re-callable at any time with no side effects, confirming a clean re-render is architecturally straightforward.
- No toast/notification system exists anywhere in the app: grepping `src/components`, `src/js`, `src/utils` for `toast|notification|Notification` returns zero matches (independently re-confirmed).

**User impact**: this is not an edge case — it fires on every normal session where the game page is left open across a poll interval (the exact scenario Phase 44 was built to handle correctly for the *data* layer). A player can earn a level-up, a new title, a badge ("Perfectionist", etc.), or unlock a new avatar while browsing the Game page, and see literally nothing change anywhere on screen. The entire visible reward loop the gamification system (`levelSystem.js`, `titleSystem.js`, `avatarUnlocks.js`, badges) is built around is silently defeated for as long as the tab stays open. This directly undercuts the value of Phase 44's own race-condition fix: the underlying data is now correctly, safely refreshed — but the one piece of state most meant to *feel* rewarding (the HUD) never reflects it.
- Zero test coverage exists for this: grepping `test/` for `player-widget|playerWidget|createPlayerWidget|loadNavbar` finds only one unrelated comment (`test/steamSession.test.js:9`).

**Ruled out as already addressed**: Phase 44's scope was explicitly the polling *race condition* (stale-response ordering), not UI feedback surfaces. Nothing in Phases 40-45 touches navbar refresh.

### Finding 2 (MEDIUM severity, LOW reachability, independently verified) — Asymmetric fragility to a localStorage write failure in the XP/badge-granting chain

**Traced mechanism** (confirmed by direct reading of `src/utils/player/player.js:107-117`, `src/js/game.js:140-489`, `src/utils/async/poller.js:54-68`):

- `savePlayer()` (`player.js:107`) calls `localStorage.setItem` with **no try/catch**, and none of `addXP`/`completeAchievement`/`completeGame`/`unlockBadge`/`claimAchievement`/`claimGame` wrap it either.
- **Initial page load**: `syncAchievementCompletion(game, slug)` (`game.js:256`) — which can reach `savePlayer()` — runs inside the outer `try` starting at `game.js:140`. Its `catch` (`game.js:465-489`) replaces the entire `#game-content` with a generic "Something went wrong" page. A synchronous `setItem` throw (Safari private-browsing `SecurityError`, or `QuotaExceededError`) at this point discards an already-successfully-fetched, fully renderable game page over what is functionally a non-critical XP-grant failure.
- **Poller-triggered updates**: the same call (`game.js:296`, inside the poller's `onResult`) is protected by `poller.js:54-68`'s own try/catch, which logs `"Poller's onResult callback failed:"` and swallows the error to protect the poller's bookkeeping. But `saveProgress`/`refresh()` (`game.js:298-300`) run *after* the throwing line in the same callback, so they're skipped too — the achievement list/progress bar/recommendation silently stop updating on every subsequent poll for as long as the failure persists, with only a console error as any trace.

**Assessment**: real and traced, but requires an actual localStorage exception to trigger (quota exceeded or private-browsing storage restriction) — narrow likelihood in normal usage, unlike Finding 1 which requires no special precondition at all. Confirmed not a duplicate of any prior phase's work.

### Finding 3 (MEDIUM severity, LOW reachability, independently verified — my own finding, reproduced) — Steam-game slug collisions are unhandled, silently hiding one of the two colliding games

**Traced mechanism** (confirmed by direct reading of `backend/utils/gameMapper.js:3-73`, `backend/routes/games.js:118-152`, `backend/utils/gameDetail.js:60`, `src/js/games.js:192,204`):

- `mapSteamGame()`'s slug derivation (`gameMapper.js:12-17`) lowercases the game name and collapses every non-alphanumeric run to a single hyphen, with **no collision handling anywhere downstream**.
- `buildGamesList()` (`routes/games.js:121-152`) maps every owned Steam game through this with `.filter(Boolean)` only — no de-duplication by slug.
- **Reproduced directly** (not merely inferred) by calling the real `mapSteamGame()` with two distinct, plausible owned-game entries:
  ```
  { appid: 100001, name: "Call of Duty: Modern Warfare" }  → slug: call-of-duty-modern-warfare
  { appid: 100002, name: "Call of Duty® Modern Warfare®" } → slug: call-of-duty-modern-warfare
  COLLISION: true
  ```
- Downstream consequences, traced through the real code:
  - The games list response (`GET /api/games` and `/popular`) would contain two distinct game objects sharing one `slug`.
  - `src/js/games.js:192,204` builds every card's/button's navigation link purely from `slug` (`game.html?slug=${...}`) — both cards link to the identical URL.
  - `getGameDetail()`'s owned-game lookup (`gameDetail.js:60`, `games.find(game => game.slug === slug)`) returns only the **first** match — the second game becomes permanently, silently unreachable via the UI. No error, no indication anything is missing.

**Assessment**: real, mechanically demonstrated bug in the core Games → Game journey, not a false positive. Likelihood is Steam-library-dependent (requires two owned games whose sanitized names collide — plausible for demo/full-game pairs, regional re-releases, or trademark-symbol variants, but not triggered by any of this app's own 3 catalog games or a typical small library). Lower reachability than Finding 1, which requires no special library composition at all.

### Finding 4 (LOW severity, ruled out as a bug / test-coverage gap only) — Unlimited `Promise.all` fan-out in `/popular` vs. bounded `mapWithConcurrency` in `attachAchievementAvailability`

**Independently verified**: `routes/games.js:56` uses `mapWithConcurrency(needsCheck, 8, ...)` for the achievement-availability fan-out, while `routes/games.js:192-206`'s `/popular` handler fans out via a raw, unbounded `Promise.all` over every game with a valid `appid`. Confirmed this is architecturally inconsistent, but **not currently a live bug**: the app's catalog has only 3 games, so the real fan-out width today is at most 3 concurrent `getCurrentPlayerCount` calls. Ruled out as a Phase 46 target — no reproducible user-facing failure, purely a latent scaling inconsistency that would only matter if the catalog grew substantially. Worth a one-line note for a future catalog-scale phase, not now.

### Finding 5 (informational, ruled out as a bug) — `avatar-picker.js`'s displayed unlock requirements are a manually-synced duplicate of `playerProgress.js`'s real thresholds

Independently re-verified via Fork B: currently matches exactly (rookie/explorer = Lv5/Lv10, veteran = 5 games, master/legend = 100/500 achievements) against `checkPlayerUnlocks()`. A future-maintenance risk only (a future threshold change in one file without the other would silently desync the picker's display text from actual unlock behavior) — not a present bug, not proposed as a finding to act on now.

### Finding 6 (informational, ruled out) — `levelSystem.js`/`titleSystem.js` boundary logic

Re-verified directly: the XP curve and title-threshold checks have no gap or overlap for any level ≥ 1. No issue found.

### Test-coverage gaps noted, not proposed as the primary target

- `GET /api/games/popular` has zero dedicated route-level test coverage (unlike `/` and `/:slug`, both covered in `apiGamesRoute.test.js`).
- `src/js/games.js` (frontend rendering/navigation) has no test coverage.
- The player-widget/navbar has no test coverage at all (see Finding 1).

These are real gaps but, per the user's explicit instruction to prioritize genuine bugs over coverage-for-its-own-sake, they are noted rather than proposed as the standalone target — the recommended scope below closes the most important one (player-widget) as part of fixing Finding 1, not as a bolt-on.

## 4. False positives / hypotheses investigated and ruled out

- **`/popular`'s player-count fan-out shares Phase 45's "wasted call" bug pattern** — ruled out. Phase 45's bug was a call whose result was *provably always discarded* (global percentages fetched for an empty achievement list). `/popular`'s fan-out feeds `selectPopularGames`' ranking directly — fetching every candidate's count is architecturally necessary to rank by value, not wasteful. Confirmed independently before Fork A's report arrived, and Fork A's conclusion agreed.
- **`attachAchievementAvailability`'s bounded concurrency (limit 8) has a partial-failure bug** — ruled out. Read `concurrencyLimiter.js` in full: it is a correct `Promise.allSettled`-shaped worker pool; no partial-failure poisoning.
- **`selectPopularGames` has a ranking/filtering defect** — ruled out. Read in full: correct, already well-tested (`backend/test/popularGames.test.js`).
- **Unbounded `/popular` fan-out is a live scaling bug today** — investigated and downgraded to Finding 4 (informational), since the catalog currently has only 3 games.

## 5. Recommended Phase 46 target

**Fix Finding 1: make the player-widget HUD live-update whenever XP, level, title, badges, or avatar-unlock state changes during an open session.**

**Why this beats the alternatives:**

| Finding | Reachability | Trigger precondition | Core-loop impact |
|---|---|---|---|
| **1 — HUD never live-updates** | Every session with the game page left open across a poll | None — always reachable | Defeats the entire visible reward loop |
| 2 — localStorage-failure asymmetry | Rare | Requires an actual `setItem` exception (quota/private-browsing) | Severe when triggered, but rare |
| 3 — slug collision | Steam-library-dependent | Requires two owned games whose names collide after sanitization | Severe when triggered, but library-dependent |
| 4 — unbounded fan-out | Not currently reachable | Would need a much larger catalog | None today |

Finding 1 is the only candidate that is unconditionally reachable — it requires no rare precondition, no unusual Steam library, no storage failure. Every player who leaves the Game page open through even one poll cycle after earning XP experiences it. It also directly follows on from Phase 44's own work: that phase made the underlying data layer race-safe, but this phase closes the gap where the *user-visible reward signal* built on top of that data was never wired up at all. Findings 2 and 3 are real and independently confirmed, but both are lower-frequency edge cases better suited to a smaller, standalone future phase; bundling either into this one would blur Phase 46's scope discipline.

### Exact implementation plan

1. **`src/components/player-widget/player-widget.js`**: no change needed — `createPlayerWidget(session)` is already a pure, freely re-callable function of `getPlayer()` + `session`.
2. **`src/js/layout.js`**: export a small `refreshPlayerWidget(session)` helper (or expose the already-resolved `session` from `loadNavbar()`'s return value, which `game.js` already captures) that re-renders `#navbar`'s player-widget markup in place via `createPlayerWidget(session)`, re-attaching the click listener. Keep this minimal — it should not re-run the session fetch, only re-render from the already-known session.
3. **`src/js/game.js`**: call this refresh function in the two places where player state can change:
   - After `syncAchievementCompletion(game, slug)` on initial load (`game.js:256`), once `sessionPromise` has resolved.
   - After `syncAchievementCompletion(game, slug)` inside the poller's `onResult` callback (`game.js:296`).
4. Keep the refresh idempotent/harmless when nothing changed (re-rendering from unchanged `getPlayer()` state is a no-op visually) — no new state-diffing logic needed, matching this app's existing "idempotent by construction" convention (`syncAchievementCompletion` already works this way).
5. Do not touch `poller.js`, `player.js`, or any localStorage/XP logic — this phase is scoped strictly to making the existing, correct state visible, not to changing how or when it's computed.

### Test strategy

- Unit test for the new `refreshPlayerWidget`/navbar-refresh helper: given a session and a mocked `getPlayer()` result, asserts the rendered `#navbar` markup reflects the current level/XP/title/avatar, and that the click-to-profile listener is still attached after a second refresh call.
- `game.js`-level test (extending the existing test harness used for Phase 44's poller wiring, with DOM stubs) verifying that after `syncAchievementCompletion` runs (both on initial load and via a poller-triggered `onResult`), the player-widget re-render is actually invoked — using a fake/injectable player-state change (e.g. a stubbed `getPlayer()` returning a higher level after a poll) and asserting the rendered widget's level/XP text updates without a page reload.
- Regression check: confirm `refresh()`'s existing behavior (achievement cards/progress/recommendation/session) is unaffected — no changes to that function itself.
- Full root suite + backend suite run before and after, to confirm no regressions elsewhere.

### Live verification plan

1. Start the dev backend and frontend.
2. Log in with a real Steam session on a game with room to earn XP (e.g. an achievement not yet claimed).
3. Trigger a completion (either via the existing dev-reset/dev-complete tooling already used in prior phases, or by waiting for a real poll cycle against a Steam achievement newly unlocked).
4. Confirm the player-widget in the navbar updates its level/XP/title/avatar **without a page reload**, both when the change originates from initial load and from a poller-triggered update.
5. Confirm no console errors during this flow, and confirm the achievement list/progress bar/recommendation/session (Phase 44's existing refresh targets) still update correctly alongside the widget.

### Risks and regression considerations

- Must not re-fetch the session (`getSteamSession()`) on every refresh — only re-render from the already-known session, to avoid adding redundant `/api/me` calls on every poll tick (the exact kind of redundant-call regression Phase 45 fixed elsewhere).
- Must remain safe if `#navbar`/`#player-widget` isn't present in the DOM for any reason (mirroring `loadNavbar()`'s existing `if (!navbar) return` guard).
- Must not introduce a new dependency from `player-widget.js`/`layout.js` back into `game.js`-specific concepts — the refresh helper should stay generic (session + player state in, re-rendered markup out), consistent with this app's existing separation of concerns.
- Findings 2 and 3 remain open, documented here for a future phase; no code changes for them are made in Phase 46.

## 6. Explicit stop (audit phase)

No production code was modified during the audit itself; the implementation below followed after explicit approval.

## 7. Implementation report (Phase 46, approved and completed)

### What changed

Exactly the scope approved — Finding 1 only. Findings 2-4 remain untouched, documented above as future work.

- **`src/js/layout.js`**: extracted a private `renderNavbar(navbar, session)` helper (the exact `navbar.innerHTML = createNavbar(session)` + click-listener-reattachment sequence that `loadNavbar()` already performed twice) and reused it from both existing render points inside `loadNavbar()`. Added a new exported `refreshPlayerWidget(session)` that calls the same helper, but only when `#navbar` exists and `session.logged` is true (a no-op otherwise). It performs no session fetch of its own — it only re-renders from whatever session object the caller already has.
- **`src/js/game.js`**: imported `refreshPlayerWidget` alongside the existing `loadNavbar` import, and called `refreshPlayerWidget(session)` in the two places `syncAchievementCompletion` runs — once right after it on initial load (`init()`, using the `session` already destructured from `Promise.all([gamePromise, sessionPromise])`), and once inside the Phase-44 poller's `onResult` callback (using the same closed-over `session` variable, no new fetch). No changes to `poller.js`, `player.js`, `refresh()`, or any localStorage/XP logic — this phase only makes existing, already-correct player state visible without a reload.

No second polling system was introduced: the widget refresh piggybacks entirely on the existing initial-load call and the existing Phase-44 poller cycle: it is a synchronous re-render call added inline to code that already runs, not a new timer, fetch, or subscription.

### Tests added

New file `test/layout.test.js` (8 tests, all passing), covering:

1. `loadNavbar` still renders the logged-out state first, then the resolved session, and returns it (regression check for the extracted-helper refactor).
2. `loadNavbar`'s click listener on the resolved widget still navigates to `profile.html` (regression check).
3. `loadNavbar` still returns `{ logged: false }` immediately and never calls `fetch` when `#navbar` is absent (regression check for the early-return branch, preserved verbatim through the refactor).
4. `refreshPlayerWidget` re-renders the widget from the latest player state with **no extra session fetch** (asserts `fetch` call count stays at 1 from the earlier `loadNavbar()` call) — directly enforces the "no redundant requests" requirement.
5. `refreshPlayerWidget` reflects each successive player-state change across three repeated calls (simulating repeated poll cycles: 50 XP -> 110 XP total (level up) -> 610 XP total (level up again)), asserting the exact level/XP text each time.
6. `refreshPlayerWidget`'s click listener still works correctly after multiple re-renders — proves the listener is properly reattached each time rather than lost or duplicated (asserts exactly one navigation per one click after two prior refreshes).
7. `refreshPlayerWidget` is a no-op for a logged-out session — asserts `#navbar`'s content is byte-identical before/after and the widget markup never appears.
8. `refreshPlayerWidget` does not throw when `#navbar` is absent from the page.

The DOM stub (`globalThis.document`) models the one real-DOM behavior these tests depend on: assigning `innerHTML` destroys the previous `#player-widget` node, so a fresh element (and a fresh listener) must be created on every render — matching this project's existing "smallest shim that does the job" convention (`test/app.test.js`, `test/player.test.js`).

### Verification performed

- `node --test test/layout.test.js`: 8/8 passing in isolation.
- Full root suite: **583/583 passing** (575 previous baseline + 8 new tests, 0 regressions).
- Full backend suite: **280/280 passing**, unaffected (no backend files touched).
- `test/poller.test.js` re-run in isolation: all **14/14** still passing unmodified, confirming the Phase 44 polling/race-condition behavior (`poller.js`, untouched by this phase) is intact.
- `git diff --check`: clean (only the repo's standard CRLF-normalization notice, not a real whitespace error).
- Full diff reviewed line-by-line: confirmed no unrelated changes, no duplicated polling logic, no stray whitespace, and that `layout.js`'s pre-existing no-trailing-newline convention was preserved rather than altered.
- **Live-browser verification**, performed against the real dev backend (already running on port 3000) and the project's static frontend server on port 5501 (matching `CORS_ORIGIN`), navigating to the real Hades game page (`/game?slug=hades`):
  - Confirmed the navbar showed the logged-out "Log in with Steam" button and no player-widget on initial load (no real Steam session existed in this browser), and that the page's real data (achievement count, difficulty, etc.) rendered correctly with no console errors.
  - Since performing a real Steam OAuth login was out of scope for this session (entering third-party credentials is a prohibited action), verification of `refreshPlayerWidget` itself was done by dynamically importing the real, already-deployed `src/js/layout.js` and `src/utils/player/player.js` modules directly in the live page (via the browser's own JS console, no page reload) and calling them with a synthetic logged-in session object — this exercises the exact same production code path (`refreshPlayerWidget(session)` -> `renderNavbar` -> `createNavbar`/`createPlayerWidget` -> real `getPlayer()` reading real `localStorage`) that a genuine Steam session change would trigger; only the source of the `session` object is synthetic, not the code path.
  - Confirmed, with real DOM inspection and a screenshot: before any refresh call, `#navbar` had no player-widget; after `refreshPlayerWidget({logged:true, user:{personaname:"LiveVerifyUser"}})`, the real `#navbar` DOM updated in place to show the widget at "Lv. 1, 0/100 XP" with **no page reload**.
  - Confirmed three successive real `addXP()` calls through the actual `player.js` module (bringing the real player from level 1 to level 3), each followed by `refreshPlayerWidget`, updated the visible level/XP text correctly each time (Lv.1 0/100 -> Lv.2 50/400 -> Lv.3 150/900), all in the same already-loaded page.
  - Clicked the real, live player-widget after two prior re-renders and confirmed it navigated to `/profile`, and that the Profile page's own stats independently agreed with the same state (Level 3, 150/900 XP, 650 Total XP) - confirming the widget's click behavior survives repeated re-renders and that state is consistent across pages.
  - Checked the browser console throughout: no errors or exceptions at any point.
  - Reset the real player state back to a clean, fresh baseline (`resetPlayer()`) at the end of the session so no test data was left behind in the actual browser profile.

### Issues discovered during implementation

None. The implementation matched the audit's plan exactly; no unexpected coupling, no additional bugs surfaced in `layout.js`, `game.js`, `player-widget.js`, or `navbar.js` while wiring this in. Findings 2 (localStorage-failure asymmetry), 3 (slug collision), and 4 (unbounded `/popular` fan-out) remain open and untouched, exactly as scoped.

## 8. Explicit stop

Phase 46 is fully implemented, tested, and live-verified. Do not start Phase 47 automatically.
