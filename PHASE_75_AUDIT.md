# Phase 75 — Railway + GitHub Pages Deploy Prep

Continuing the Phase 71+ priority: move meaningfully closer to a real public launch. Phase 74 closed the last code-level blocker (session persistence). This phase prepares the repo for the user's chosen concrete deploy target (Railway for the backend) rather than staying purely hypothetical/generic - the user answered a direct question this phase asking which hosting platform to prepare for.

## 1. Verified baseline

- `HEAD` = `origin/main` = `2b46575` (`docs: record Phase 74's own commit hash in PHASE_74_AUDIT.md`).
- Full test suite (`npm test` from repo root, recurses into `backend/test/` - see PHASE_74_AUDIT.md §7 for why this is the correct single total): 861/861 passing at baseline.
- `git status --short` at baseline: the same 24 pre-existing unstaged phase-report deletions, untouched.

## 2. Scope for this phase

Deliberately **not** a code-blocker hunt (Phase 74 already did that) - this phase is: prepare exact, concrete deploy configuration/documentation for the specific host the user chose (Railway), and a free static host for the frontend (GitHub Pages, chosen for zero cost/zero new signup complexity beyond the user's existing GitHub account). No account was created, no real secret was touched, and no actual deployment was performed - creating accounts, providing STEAM_API_KEY/SESSION_SECRET, and clicking "Generate Domain" are all steps that belong to the user, not this phase.

## 3. Changes made

- **`backend/railway.toml`** (new) - pins Railway's builder explicitly to `DOCKERFILE` pointing at the existing `backend/Dockerfile` (so Railway doesn't try Nixpacks auto-detection instead), plus a `healthcheckPath = "/"` (the existing `GET /` route already returns a dependency-free 200, confirmed in Phase 74) and an `ON_FAILURE` restart policy. Applies once the user sets the Railway service's Root Directory to `backend` in its dashboard - config-as-code can't create the service itself, only configure it once created.
- **`src/env.js`** - replaced the previously-implicit "any production hostname → `\"\"`" behavior with a named `PRODUCTION_API_BASE_URL` constant, defaulting to `""` (unchanged behavior for a same-origin deployment) but now a single, clearly-commented line to edit for a split-origin deployment (Railway backend + GitHub Pages frontend, on two different domains, is exactly this case - the previous auto-detect logic alone would have silently sent every frontend API call back to the GitHub Pages origin itself, which has no backend). This is a real correctness improvement, not just a rename: Phase 73's README already documented "one manual edit" for split-origin but pointed at editing the auto-detect function's return value directly; this makes that edit a single named constant instead, harder to get wrong.
- **`README.md`** - new "Recommended: Railway (backend) + GitHub Pages (frontend)" walkthrough under "Deploying to Production": concrete numbered steps for both services, including the exact volume mount path (`/app/data`, derived from the Dockerfile's `WORKDIR /app` plus `leaderboardDb.js`'s existing `DEFAULT_DB_PATH` resolution - verified by reading both files, not guessed), which env vars depend on which step's output (e.g. `STEAM_RETURN_URL`/`STEAM_REALM` need the Railway domain first; `CORS_ORIGIN`/`FRONTEND_URL` need the GitHub Pages URL first), and a note that Steam's own API key registration page also has a domain field that should point at the Railway domain. Also updated the pre-existing same-origin/split-origin paragraph to name `PRODUCTION_API_BASE_URL` instead of the vaguer previous phrasing.

## 4. Test results

Full root suite (`npm test`, recurses into backend): **861/861 passing, unchanged from baseline** - this phase touched no runtime logic (`PRODUCTION_API_BASE_URL` defaults to the exact same `""` the old code always returned for a non-local hostname; `test/env.test.js`'s three existing scenarios - no window, local dev, and a generic production hostname - all still pass unmodified, since none of them set a non-empty `PRODUCTION_API_BASE_URL`).

## 5. Verification

- **Live-verified:** re-ran the full suite after every edit (above). Confirmed by direct file read that `Dockerfile`'s `WORKDIR /app` + `leaderboardDb.js`'s `path.join(__dirname, "..", "data", ...)` (where `__dirname` is `/app/services` inside the built image) resolves to `/app/data` - the exact path documented as the Railway volume mount target, not guessed.
- **Not testable in this environment, stated plainly:** the actual Railway deployment itself (needs a real Railway account/GitHub connection - the user's own step), whether `railway.toml`'s schema is accepted exactly as written (Railway's CLI isn't available here to run a local config validation), and GitHub Pages serving the repo correctly at a live URL (also needs the user's own GitHub Pages setting enabled). The instructions were written directly from this repo's own verified file structure (Dockerfile, .env.example, leaderboardDb.js's path resolution, steamController.js's FRONTEND_URL usage) rather than assumed, which is the strongest verification practical without a real account.

## 6. Diff review

`git status --short` after implementation: 1 new file (`backend/railway.toml`), 2 modified files (`README.md`, `src/env.js`), this audit document - plus the same 24 pre-existing unstaged phase-report deletions, unchanged and untouched. No backend runtime code, tests, or any other subsystem touched.

## 7. Commit / push

Committed and pushed to `origin/main`.

## 8. Phase-end report

- **Major functionality/section completed:** the repo now has concrete, host-specific deploy configuration and a step-by-step walkthrough for the user's chosen stack (Railway backend + GitHub Pages frontend), not just generic Docker instructions. `PRODUCTION_API_BASE_URL` also closes a real gap the generic instructions left open: without it, a split-origin deployment exactly like this one would have silently broken (frontend calling its own origin instead of the backend) unless the deployer independently discovered they needed to hand-edit a function's return value.
- **Product completeness / deploy-readiness:** unchanged from Phase 74's ~85-90% estimate on the "can this be deployed and survive being deployed" axis - this phase is deploy *documentation/config* for a specific host, not a new code-level capability. The remaining gap on that axis is exclusively "has anyone actually deployed it," which is inherently outside what an autonomous phase can complete on its own.
- **What's different for the user now:** a direct, numbered path from "empty Railway/GitHub Pages accounts" to "live app," with every env var traced to exactly where its value comes from and why, instead of needing to reverse-engineer the relationship between `STEAM_RETURN_URL`, `CORS_ORIGIN`, `FRONTEND_URL`, and `PRODUCTION_API_BASE_URL` from the more generic Phase 73 documentation alone.
- **What's still missing before publication:** the deployment itself - creating the Railway/GitHub accounts (or using existing ones), setting real secrets, and clicking through the steps above. No admin/self-serve catalog-authoring path (unchanged, flagged since Phase 72/73/74).
- **Next highest-impact phase:** the user actually performing the deployment steps above (not something a phase can do unilaterally - it needs their credentials/account), after which the single highest-value follow-up phase would be validating the full live round-trip: real Steam login on the deployed URL, then a Railway redeploy, confirming the user is still logged in and their progress/leaderboard rank survived - the strongest possible proof Phase 74's persistence work holds up outside a controlled local test.
