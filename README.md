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

**Persisting data across restarts (important):** the backend stores everything it needs to survive a restart - the Podiums leaderboard, player progress, and (since Phase 74) logged-in sessions - in one SQLite file at `backend/data/achievementplanner.db` (path overridable via `DATABASE_PATH`, see `backend/.env.example`). A container's own filesystem is thrown away on every redeploy unless that path is mounted as a persistent volume:
```
docker run -p 3000:3000 --env-file .env -v achievementplanner-data:/app/data achievementplanner-backend
```
Without `-v`, the app still runs correctly, but every visitor is logged out and every saved player/leaderboard row is lost on the next redeploy - the container starts from a fresh, empty database each time. `backend/data/` is excluded from the Docker build itself (`.dockerignore`), so a local dev database is never baked into the image.

**Frontend** (repo root): still plain static files, deployable as-is to any static host (the same Node host behind a reverse proxy, or a separate static host like Netlify/Vercel/GitHub Pages/S3+CloudFront) - no build step.

**Same-origin vs. split-origin** - `src/env.js` (`ENV.API_BASE_URL`) decides how the frontend finds the backend, and its default now auto-detects rather than always pointing at `localhost:3000` (a pre-Phase-73 bug that would have broken the app for every real visitor):
- Serving frontend and backend from the same origin (e.g. a reverse proxy that routes `/api`, `/auth` to the backend and everything else to the static files) needs **no change** - `ENV.API_BASE_URL` resolves to `""` (relative requests) automatically for any hostname other than `localhost`/`127.0.0.1`, and `CORS_ORIGIN` becomes unnecessary since there's no cross-origin call to allow.
- Serving them from two different hosts (e.g. frontend on a static host, backend on its own domain) needs one manual edit: set `ENV.API_BASE_URL` in `src/env.js` to the backend's real origin, and set the backend's `CORS_ORIGIN` env var to the frontend's real origin (see `backend/.env.example`).
