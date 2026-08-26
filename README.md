## Branding

AchievementPlanner uses its own visual identity.

Main icon:
Hexagon with a checkmark.

Primary font:
Inter.

Primary color:
#38BDF8
# AchievementPlanner
Steam achievement planner application

## Setup & Development

Requires Node.js >=22.5.0.

**Backend** (`backend/`):
```
cd backend
npm install
cp .env.example .env   # fill in STEAM_API_KEY, SESSION_SECRET, etc. - see .env.example for the full list and defaults
npm run dev             # nodemon, auto-restarts on change
# or: npm start
```
The backend listens on port 3000 by default (`PORT` in `.env`).

**Frontend** (repo root, `src/`, `*.html`):
Plain static HTML/JS (no build step, no dev server script). Serve the repo root with any static file server on port 5500 to match the backend's default `CORS_ORIGIN`/`FRONTEND_URL` - e.g. the VS Code "Live Server" extension, or `npx serve -l 5500`. To point the frontend at a different backend origin, edit `src/env.js` (`ENV.API_BASE_URL`).

**Tests:**
```
npm test
```
Run from the repo root to execute the full suite (frontend `test/` + backend `backend/test/`), matching CI (`.github/workflows/ci.yml`). Run `npm test` inside `backend/` to run only the backend suite.

## Deploying to Production

**Backend** (`backend/`): a `Dockerfile` is included - build and run it with real production environment variables (never bake secrets into the image):
```
cd backend
docker build -t achievementplanner-backend .
docker run -p 3000:3000 --env-file .env achievementplanner-backend
```
Any Node ≥22.5.0 host works too (`npm ci --omit=dev && npm start`) - the Dockerfile is a convenience, not a requirement. Either way, set real values for `STEAM_API_KEY`, `STEAM_RETURN_URL`, `STEAM_REALM`, and `SESSION_SECRET` (the server refuses to start without them - see `backend/.env.example`), and `COOKIE_SECURE=true` once served over HTTPS.

### Recommended: Railway (backend) + GitHub Pages (frontend)

A split-origin deployment using two free-tier-friendly hosts, using the artifacts already in this repo (`backend/Dockerfile`, `backend/railway.toml`):

**1. Backend on Railway:**
1. [railway.app](https://railway.app) → New Project → "Deploy from GitHub repo" → select this repo.
2. Service Settings → Source → **Root Directory** = `backend`. Railway then reads `backend/railway.toml`, which points it at the existing `Dockerfile` (builder is pinned explicitly, so Railway won't try to auto-detect via Nixpacks instead).
3. Settings → **Volumes** → New Volume → mount path `/app/data` (this is where `backend/data/achievementplanner.db` resolves to inside the container - see `Dockerfile`'s `WORKDIR /app`). Skipping this means every redeploy silently logs everyone out and wipes the leaderboard/progress data, same as running the Dockerfile without `-v` locally.
4. Settings → Variables → set `STEAM_API_KEY`, `SESSION_SECRET` (see `backend/.env.example` for how to generate one), `COOKIE_SECURE=true`, `TRUST_PROXY=true` (Railway terminates TLS in front of your service, so this is required, not optional, for `COOKIE_SECURE` to actually work).
5. Settings → Networking → **Generate Domain** to get a public URL, e.g. `achievementplanner-backend-production.up.railway.app`. Now set the two variables that depend on it: `STEAM_RETURN_URL=https://<that-domain>/auth/steam/return` and `STEAM_REALM=https://<that-domain>`.
6. You'll come back to set `CORS_ORIGIN` and `FRONTEND_URL` once step 2 below gives you the frontend's real URL.

**2. Frontend on GitHub Pages:**
1. Repo → Settings → Pages → Deploy from a branch → `main` → `/ (root)`. No build step needed - the repo root is already plain static HTML/JS.
2. Your frontend URL will be `https://<your-github-username>.github.io/<repo-name>` (a project page, i.e. under a repo-name subpath - not a bare `https://<username>.github.io`).
3. Edit `src/env.js`'s `PRODUCTION_API_BASE_URL` constant to the Railway domain from step 1.5 (e.g. `"https://achievementplanner-backend-production.up.railway.app"`, no trailing slash), commit, and push - GitHub Pages redeploys automatically on push to `main`.
4. Back in Railway: set `CORS_ORIGIN` and `FRONTEND_URL` to the exact GitHub Pages URL from step 2 above (`CORS_ORIGIN` needs only the origin, e.g. `https://<username>.github.io`; `FRONTEND_URL` needs the full path including the repo-name subpath, since that's where the app actually lives, e.g. `https://<username>.github.io/<repo-name>`).
5. Steam's [API key registration page](https://steamcommunity.com/dev/apikey) also asks for a domain - point it at the Railway domain from step 1.5 (the domain that actually calls Steam's API), and update it there if that domain ever changes.

Any static host works in place of GitHub Pages (Netlify, Vercel, S3+CloudFront) - the only two things that change per-host are where you paste the resulting URL (steps 3-4 above) and whether that host needs a build step (none of them do for this repo).

**Persisting data across restarts (important):** the backend stores everything it needs to survive a restart - the Podiums leaderboard, player progress, and (since Phase 74) logged-in sessions - in one SQLite file at `backend/data/achievementplanner.db` (path overridable via `DATABASE_PATH`, see `backend/.env.example`). A container's own filesystem is thrown away on every redeploy unless that path is mounted as a persistent volume:
```
docker run -p 3000:3000 --env-file .env -v achievementplanner-data:/app/data achievementplanner-backend
```
Without `-v`, the app still runs correctly, but every visitor is logged out and every saved player/leaderboard row is lost on the next redeploy - the container starts from a fresh, empty database each time. `backend/data/` is excluded from the Docker build itself (`.dockerignore`), so a local dev database is never baked into the image.

**Frontend** (repo root): still plain static files, deployable as-is to any static host (the same Node host behind a reverse proxy, or a separate static host like Netlify/Vercel/GitHub Pages/S3+CloudFront) - no build step.

**Same-origin vs. split-origin** - `src/env.js` (`ENV.API_BASE_URL`) decides how the frontend finds the backend, and its default now auto-detects rather than always pointing at `localhost:3000` (a pre-Phase-73 bug that would have broken the app for every real visitor):
- Serving frontend and backend from the same origin (e.g. a reverse proxy that routes `/api`, `/auth` to the backend and everything else to the static files) needs **no change** - `ENV.API_BASE_URL` resolves to `""` (relative requests) automatically for any hostname other than `localhost`/`127.0.0.1`, and `CORS_ORIGIN` becomes unnecessary since there's no cross-origin call to allow.
- Serving them from two different hosts (e.g. frontend on a static host, backend on its own domain - this is what the Railway + GitHub Pages walkthrough above does) needs one manual edit: set `PRODUCTION_API_BASE_URL` in `src/env.js` to the backend's real origin, and set the backend's `CORS_ORIGIN` env var to the frontend's real origin (see `backend/.env.example`).
