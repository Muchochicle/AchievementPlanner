# Production image for the AchievementPlanner backend (Phase 73). Builds
# from this backend/ directory as its context - see the root README.md's
# "Deploying to Production" section for the full build/run instructions and
# for how the frontend is deployed alongside this (as static files, not
# part of this image).
FROM node:22-alpine

WORKDIR /app

# Copied and installed before the rest of the source so Docker's layer
# cache can skip the npm install step on a rebuild that only changed
# application code, not dependencies.
COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

# Matches this app's own PORT env var default (server.js) - informational
# for tooling that reads EXPOSE; the actual listen port is still whatever
# PORT resolves to at runtime.
EXPOSE 3000

# server.js itself already refuses to start without STEAM_API_KEY,
# STEAM_RETURN_URL, STEAM_REALM, and SESSION_SECRET - these must be
# supplied as real environment variables at container run time (e.g.
# `docker run --env-file .env ...`), never baked into this image.
CMD ["node", "server.js"]
