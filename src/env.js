// Single frontend runtime-configuration source for the backend origin.
// Not a secret - safe to commit. For a same-origin production deployment,
// set API_BASE_URL to "" so requests resolve as relative URLs against the
// page's own origin instead of an absolute one.
function stripTrailingSlashes(url) {

    return url.replace(/\/+$/, "");

}

// Auto-detects dev vs. production instead of hard-defaulting to
// localhost:3000 for every visitor (Phase 73) - shipping the old hardcoded
// value would have every real production visitor's browser try to call
// their own machine's localhost:3000, which never exists, breaking the
// entire app outright the moment this was ever deployed anywhere. Node
// (this file's own test suite, and every module that transitively imports
// it under `node --test`) has no `window`, so that path keeps exactly
// today's dev-default value - zero behavior change for tests or local
// development served from localhost/127.0.0.1. Any other real hostname
// (an actual production deployment) resolves to "", i.e. same-origin
// relative requests - see the file-level comment above for why that's the
// documented production convention, and README.md's Setup & Development
// section for how to override this for a split-origin deployment instead.
function detectApiBaseUrl() {

    if (typeof window === "undefined") {

        return "http://localhost:3000";

    }

    const { hostname } = window.location;
    const isLocalDevelopment = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "";

    return isLocalDevelopment ? "http://localhost:3000" : "";

}

export const ENV = {
    API_BASE_URL: stripTrailingSlashes(detectApiBaseUrl())
};
