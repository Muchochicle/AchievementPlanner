// Single frontend runtime-configuration source for the backend origin.
// Not a secret - safe to commit. `ENV.API_BASE_URL` itself is computed
// below (dev/production auto-detected) - for a split-origin production
// deployment, edit `PRODUCTION_API_BASE_URL` below, not this export.
function stripTrailingSlashes(url) {

    return url.replace(/\/+$/, "");

}

// Split-origin deployment only (frontend and backend on two different
// hosts - e.g. a GitHub Pages frontend + a Railway backend): set this to
// the backend's real origin, no trailing slash, e.g.
// "https://achievementplanner-backend-production.up.railway.app". Leave ""
// for a same-origin deployment (frontend and backend served from the same
// host, e.g. via a reverse proxy) - see README.md's "Deploying to
// Production" section for both cases and exact Railway steps.
const PRODUCTION_API_BASE_URL = "https://achievementplanner-production.up.railway.app";

// Auto-detects dev vs. production instead of hard-defaulting to
// localhost:3000 for every visitor (Phase 73) - shipping the old hardcoded
// value would have every real production visitor's browser try to call
// their own machine's localhost:3000, which never exists, breaking the
// entire app outright the moment this was ever deployed anywhere. Node
// (this file's own test suite, and every module that transitively imports
// it under `node --test`) has no `window`, so that path keeps exactly
// today's dev-default value - zero behavior change for tests or local
// development served from localhost/127.0.0.1. Any other real hostname
// (an actual production deployment) resolves to PRODUCTION_API_BASE_URL
// above - "" (same-origin) unless edited for a split-origin deployment.
function detectApiBaseUrl() {

    if (typeof window === "undefined") {

        return "http://localhost:3000";

    }

    const { hostname } = window.location;
    const isLocalDevelopment = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "";

    return isLocalDevelopment ? "http://localhost:3000" : PRODUCTION_API_BASE_URL;

}

export const ENV = {
    API_BASE_URL: stripTrailingSlashes(detectApiBaseUrl())
};
