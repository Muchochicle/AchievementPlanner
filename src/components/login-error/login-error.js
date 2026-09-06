import { ENV } from "../../env.js";

const STEAM_LOGIN_URL = `${ENV.API_BASE_URL}/auth/steam/login`;

// The URL marker the backend adds when the Steam OpenID flow fails (see
// backend/controllers/steamController.js's redirectToLoginFailed).
const LOGIN_FAILED_PARAM = "login";
const LOGIN_FAILED_VALUE = "failed";

// Steam login is a full-page navigation to the backend, which redirects to
// Steam and back. Before this, any backend/Steam failure on that round
// trip left the user staring at a raw JSON 401/500 on the backend origin,
// with no navigation back into the app. The backend now bounces failures
// to index.html?login=failed instead, and this renders a real error state
// there: a plain-language message, a one-click retry straight back into
// the login flow, and a dismiss that also strips the marker from the URL
// so a reload or shared link doesn't resurface the error.
export function createLoginError() {

    return `

        <div class="login-error" role="alert">

            <div class="login-error-body">

                <strong>We couldn't sign you in with Steam.</strong>

                <p>The sign-in didn't finish. This is usually temporary — please try again, or keep browsing without signing in.</p>

            </div>

            <div class="login-error-actions">

                <a class="login-error-retry" href="${STEAM_LOGIN_URL}">Try again</a>

                <button type="button" class="login-error-dismiss">Dismiss</button>

            </div>

        </div>

    `;

}

// True when the current page URL carries the backend's login-failure
// marker. `search` is injectable so this is testable without a real
// location; the default guards against a non-browser context.
export function isLoginFailureUrl(search) {

    const value = typeof search === "string"
        ? search
        : (typeof window !== "undefined" ? window.location.search : "");

    return new URLSearchParams(value).get(LOGIN_FAILED_PARAM) === LOGIN_FAILED_VALUE;

}

// Strip ?login=failed from the address bar (keeping any other params) so
// the error doesn't reappear on reload or when the link is shared. The
// retry link still points straight at the login endpoint regardless.
function stripLoginParamFromUrl() {

    try {

        const url = new URL(window.location.href);

        url.searchParams.delete(LOGIN_FAILED_PARAM);

        window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);

    } catch {

        // No history API / opaque origin - harmless to skip; the banner
        // still works, it just isn't removed from the URL.

    }

}

// Mount the banner as the first child of `container` when the failure
// marker is present, wire its Dismiss button, move focus to it, and clean
// the URL. Returns whether it mounted. A no-op (returns false) when the
// marker is absent or there's no container.
export function mountLoginError(container) {

    if (!container || !isLoginFailureUrl()) {

        return false;

    }

    container.insertAdjacentHTML("afterbegin", createLoginError());

    const banner = container.querySelector(".login-error");

    banner
        ?.querySelector(".login-error-dismiss")
        ?.addEventListener("click", () => {

            banner.remove();

        });

    stripLoginParamFromUrl();

    // Land keyboard / screen-reader focus on the alert.
    if (banner) {

        banner.setAttribute("tabindex", "-1");
        banner.focus?.();

    }

    return true;

}
