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
