// Single frontend runtime-configuration source for the backend origin.
// Not a secret - safe to commit. For a same-origin production deployment,
// set API_BASE_URL to "" so requests resolve as relative URLs against the
// page's own origin instead of an absolute one.
function stripTrailingSlashes(url) {

    return url.replace(/\/+$/, "");

}

export const ENV = {
    API_BASE_URL: stripTrailingSlashes("http://localhost:3000")
};
