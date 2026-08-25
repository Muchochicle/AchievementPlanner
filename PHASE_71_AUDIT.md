# Phase 71 — Product Inventory, Roadmap, and Implementation Report

**Starting with this phase, the project's priority changes.** Per the user's explicit instruction, Phases 71+ stop treating audits/robustness/defensive-coding/small-bug-fixing as the main objective. The new objective: each phase ships one major, coherent, production-ready product feature (frontend + backend + data, tested, verified, integrated) that visibly moves the application toward a publishable MVP. Security/robustness/code-quality remain important but secondary, except where they'd block a safe public launch.

## 1. Verified baseline

- `HEAD` = `origin/main` = `e35276dfdbe6071fd876339e0cfb6c20c3fc05b6` (`docs: record Phase 70's own commit hash in PHASE_70_AUDIT.md`). Confirmed via `git rev-parse HEAD origin/main` (identical).
- Root test suite: 769/769 passing at baseline. Backend suite: 359/359 passing at baseline (subset of root).
- `git status --short` at baseline: the same 24 pre-existing unstaged phase-report deletions (`PHASE_32-34/40-58_AUDIT.md`, `Phase_33/34_Implementation_Report.md`) — the user's own intentional cleanup, left completely untouched throughout this phase.

## 2. Product inventory (new baseline for the MVP push)

Produced by direct investigation of the codebase (pages, backend routes/controllers, DB schema, frontend component tree, auth, data files) — not a code-quality audit.

**✅ Completed and usable**
- Steam OpenID login (`backend/routes/steam.js`, `steamController.js`), session-gated `/api/me` / `/api/profile`
- Games catalog browse/search/detail (`games.html`, `game.html`), merges owned Steam library with curated local planners
- Session planner + achievement recommendation engine (`src/utils/planner/**`) — real logic
- Player leveling/XP/titles/badges system (`src/utils/player/**`)
- Server-side leaderboards (SQLite via `backend/services/leaderboardDb.js`/`leaderboardStore.js`), genuinely persistent, cross-user, driving `podiums.html`
- Profile stats aggregation (`profileStatsController.js`) with graceful partial/unavailable handling
- Guides system (9 app guides + 1 game guide)
- Security/ops baseline (helmet, CORS allowlist, rate limiting, graceful shutdown, process error handlers, a11y skip links/landmarks) — mature after 70 phases

**🚧 Blocking publication (identified this phase)**
- **Core player progress (XP/level/badges/claimed achievements & games, equipped avatar, inventory) was localStorage-only** — never touched the backend at all, despite Steam login working and the leaderboard subsystem already proving the app knows how to persist per-`steamId` server-side. A user's actual planner progress vanished on a cache clear or device change. **This is the feature this phase implements.**
- Games catalog has only 3 real curated titles (`hades.json`, `portal-2.json`, `hollow-knight.json`) plus a debug fixture — reads as a demo, not a product.
- No production deploy path (no Dockerfile/build script/hosting doc) — README only covers local dev.

**🟡 Partially implemented**
- Only 1 of 3 catalog games (Hades) has a written guide article.
- `/api/games/popular` has no caching layer beyond the schema-level Steam-data TTL — latency-fragile at real traffic.

**🔴 Not implemented**
- No way to add/manage catalog games without hand-authoring JSON + redeploying (no admin flow/CMS).
- No account-data page (view/export/delete synced progress).

**Estimated completeness toward a publishable MVP: ~55–60% before this phase.** Engineering foundation (auth, security, leaderboard persistence, planner logic, a11y, tests) is unusually solid; the gap is squarely product completeness — progress didn't survive a browser change, and the catalog is a 3-game demo.

## 3. Roadmap toward first publishable MVP (proposed, for future phases)

1. **Phase 71 (this phase): server-side player-progress persistence** — closes the single most damaging "not a real product" gap.
2. Expand the games catalog beyond 3 titles — biggest visible "is this real" signal to a new visitor.
3. Production deploy config (Dockerfile / build script / hosting doc) — currently no path to actually publish this online at all.
4. Guide coverage for every catalog game (not just Hades).
5. Account-data page (view/export/delete synced progress) — becomes relevant once progress is server-persisted (this phase).
6. Caching/hardening on `/api/games/popular` for real traffic.

## 4. Phase 71 feature implemented: server-side player-progress persistence

**Why this one first:** identified as the single highest-impact gap — it's the one change that converts "Steam login exists" from cosmetic into functionally meaningful, mirroring the persistence pattern the leaderboard subsystem already proved out.

**Design:** one JSON blob per `steam_id` (player XP/level/badges/claimed achievements & games, equipped avatar, inventory) stored server-side, deliberately not normalized into columns — the shape belongs to the frontend and already evolves independently. Pull-on-load / push-on-change, last-write-wins (server authoritative on every load after the first; the very first sync for an account seeds the server from whatever's already in that browser instead of discarding it).

### Backend
- **`backend/services/leaderboardDb.js`** — added `player_progress` table (`steam_id` PK, `state` TEXT, `updated_at` TEXT). No FK to `users` — a visitor can accumulate progress before ever visiting the Profile page (the only thing that populates a `users` row today).
- **`backend/services/playerProgressStore.js`** (new) — `getPlayerProgress`/`savePlayerProgress`, mirrors `leaderboardStore.js`'s plain get/set-a-row shape. Corrupted stored JSON degrades to `null` instead of throwing.
- **`backend/controllers/playerProgressController.js`** (new) — `getProgress`/`putProgress` + injectable `WithDeps` variants (matches `profileStatsController.js`'s established convention). 401 when not logged in; 400 on a non-object state payload; 413 above a 200KB serialized-state ceiling (generous — real payloads are a few KB).
- **`backend/routes/player.js`** (new) — `GET`/`PUT /api/player/progress`, mounted at `/api/player` (under the existing `/api` rate limiter).
- **`backend/server.js`** — added `express.json({ limit: "256kb" })` (previously no JSON body parsing existed anywhere in the app — every prior route was GET-only) and mounted the new router.

### Frontend
- **`src/utils/player/sync/syncBus.js`** (new) — a tiny pub/sub so `player.js`/`inventoryStorage.js`/`avatarStorage.js` can announce "state changed" without importing the sync orchestrator directly (avoids an import cycle: the orchestrator needs to import *them* to collect state for a push).
- **`src/utils/player/sync/playerProgressClient.js`** (new) — HTTP client (`fetchPlayerProgress`/`savePlayerProgressRemote`), mirrors `podiumsClient.js`'s `{status: "ready"|"error"}` shape and `fetchWithTimeout`/`credentials: "include"` conventions.
- **`src/utils/player/sync/playerSync.js`** (new) — `syncPlayerProgressOnLoad(session)` (pull once per page load; applies server state if present, else seeds the server from local state) and a syncBus subscription that pushes the full current state on every subsequent save while logged in. Guards against pushing state immediately back after pulling it (`applyingRemote` flag) to avoid a redundant round-trip on every logged-in page load.
- **`src/utils/player/player.js`, `inventory/inventoryStorage.js`, `avatar/avatarStorage.js`** — each now emits via `syncBus` on save (and `avatarStorage.js`'s `resetEquippedAvatar` too, so a dev-tool reset also syncs).
- **`src/js/layout.js`** — `loadNavbar()` now awaits `syncPlayerProgressOnLoad(session)` before its final navbar render, so the player-widget paints with synced server progress on first render rather than briefly showing stale local state. No-op and zero extra requests for a logged-out visitor. This is the single hook point already shared by all 7 pages (`app.js`/`games.js`/`game.js`/`guides.js`/`guide.js`/`podiums.js`/`profile.js`), so every page gets sync automatically with no per-page changes needed.

**Accepted tradeoff (documented in code):** sync is last-writer-wins, not merged. A visitor who plays anonymously on one device, then logs in on a second device that already has server progress, will have the first device's unsynced local play overwritten. Accepted for this first version given today NO progress survives a device change at all — strictly a net improvement. Session-planner selections (`src/utils/planner/session/sessionStorage.js`) were deliberately left out of scope — that's transient per-session UI state, not the "progress" the product-inventory pass flagged as damaging to lose.

## 5. Regression tests — 41 new, 5 modified

- **`backend/test/leaderboardDb.test.js`** (modified: 2 table-list assertions updated for the new table; +3 new): `player_progress` NOT NULL constraints, no-FK-dependency insert, upsert-on-conflict behavior.
- **`backend/test/playerProgressStore.test.js`** (new, 6 tests): null-for-unknown-steamId, round-trip, upsert-not-duplicate, `updated_at` advances, per-steamId isolation, corrupted-JSON degrades to null.
- **`backend/test/playerProgressController.test.js`** (new, 9 tests): 401s, null-state for a new account, 400 on non-object payloads (null/array/string/number) and missing `state`, 413 oversized, round-trip via the real store, cross-steamId isolation, 500 on an unexpected store error.
- **`test/playerProgressClient.test.js`** (new, 5 tests): GET/PUT request shape (URL, credentials, JSON body), success/error-status mapping, network-rejection handling.
- **`test/playerSync.test.js`** (new, 11 tests): logged-out no-op, never-throws-on-fetch-rejection, seed-push when no server row exists, apply-without-redundant-push when a server row exists, every subsequent `addXP`/`saveInventory`/`saveEquippedAvatar` call pushes while synced, no push while logged out.
- **`test/layout.test.js`** (modified: fetch stub now routes by URL so `/api/me` vs `/api/player/progress` calls are counted separately, preserving every pre-existing assertion's original meaning; +2 new tests): seed-push on first sync, apply-server-state-without-push-back on a normal sync.

## 6. Test results

- Focused new/changed suites: **41/41 passing** (`leaderboardDb`, `playerProgressStore`, `playerProgressController`, `playerProgressClient`, `playerSync`, `layout`).
- Full backend suite (`node --test`, from `backend/`): passing, +15 over baseline (359 → 374).
- Full root suite (`node --test`, from repo root): **800/800 passing** (769 baseline + 31 net new — the delta reflects 4 new test files plus modifications to 2 existing ones).

## 7. Live verification

- Started the real, unmodified-apart-from-this-phase `backend/server.js` (port 3000) and a static frontend server (port 5501, matching `CORS_ORIGIN`).
- `curl` confirmed `GET`/`PUT /api/player/progress` both correctly return `401 {"success":false,"message":"Not logged in"}` for an unauthenticated request — including confirming `express.json()` successfully parses the PUT body before the auth check runs (no parse error).
- Loaded `index.html`, `profile.html`, and `game.html` in a real browser (logged out): zero console errors, all new modules (`playerSync.js`, `syncBus.js`, `playerProgressClient.js`) resolve and load correctly (200/304), and — confirming the design — **no** `/api/player/progress` request fires for a logged-out visitor (only the pre-existing `/api/me` call), so this feature adds zero overhead to anonymous browsing. `profile.html` renders its existing logged-out state (`Not connected to Steam`, Level 1, Rookie Hunter) unchanged.
- **Not practical to live-verify the actual authenticated pull/push round-trip in-browser** — that requires a real completed Steam OpenID login, which isn't available in this environment. This path is instead covered by the 9 controller tests (real SQLite round-trips via injected in-memory DBs) and the 11 `playerSync` tests (real fetch-stubbed pull/push/seed logic), plus direct code review of the two integration points (`layout.js`'s `loadNavbar`, the three storage modules' `syncBus` emits).
- Cleaned up: both dev servers stopped, no leftover `backend/data/*.db` file committed (already gitignored).

## 8. Diff review

`git status` after implementation: **4 modified production files** (`backend/server.js`, `backend/services/leaderboardDb.js`, `src/js/layout.js`, plus the three storage modules count as 3 — see below), **4 new production files** (`playerProgressStore.js`, `playerProgressController.js`, `routes/player.js`, and the 3 new `src/utils/player/sync/*.js` files), **2 modified test files**, **4 new test files**, this audit document — plus the same 24 pre-existing unstaged phase-report deletions, confirmed unchanged and left untouched. Every changed file is one this phase intended to touch; no unrelated logic leaked in (verified via `git diff --stat`).

## 9. Commit / push

Committed and pushed to `origin/main` as part of this phase's normal workflow (no separate approval gate, per standing project convention). Commit: `2c90155` — `feat: Phase 71 - persist player progress server-side, keyed by Steam ID`.

## 10. Phase-end report (per the user's new reporting requirement)

- **Major functionality completed:** Server-side persistence of player progress (XP/level/badges/claimed achievements & games, equipped avatar, inventory), synced automatically on every page load and on every state change while logged in. Previously 100% localStorage-only and lost on any cache clear or device change.
- **Product completeness: ~55–60% before this phase → ~60–65% after.** (Estimate — the underlying feature gap closed is high-impact but the games-catalog-size and deploy-path gaps identified in §2 are still the next largest blockers to a real public MVP.)
- **Major pieces still missing before publication:** (1) games catalog is still only 3 titles, (2) no production deploy path (Dockerfile/build/hosting doc), (3) guide coverage incomplete (2 of 3 catalog games have no guide), (4) no account-data view/export/delete page now that real user data is server-persisted.
- **Recommended next highest-impact phase:** expand the games catalog beyond 3 titles, or stand up a production deploy path — both are prerequisites for the site to read as a real, launchable product rather than a tech demo; recommend the user weigh in on which to prioritize first since it's a product-direction call, not a technical one.
