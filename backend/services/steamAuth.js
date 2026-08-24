const STEAM_OPENID_URL = "https://steamcommunity.com/openid/login";

// Matches steamApi.js's own REQUEST_TIMEOUT_MS for its Steam Web API calls -
// this fetch had no timeout at all (Finding 21, PHASE_53_AUDIT.md): a hung/
// slow response from Steam's OpenID endpoint left the /auth/steam/return
// request (and its underlying connection) open indefinitely, since Node's
// built-in fetch has no default timeout of its own.
const VERIFY_TIMEOUT_MS = 8000;

export function buildSteamLoginUrl(state) {

    const returnTo = new URL(process.env.STEAM_RETURN_URL);

    returnTo.searchParams.set("state", state);

    const params = new URLSearchParams({

        "openid.ns": "http://specs.openid.net/auth/2.0",

        "openid.mode": "checkid_setup",

        "openid.return_to": returnTo.toString(),

        "openid.realm": process.env.STEAM_REALM,

        "openid.identity":
            "http://specs.openid.net/auth/2.0/identifier_select",

        "openid.claimed_id":
            "http://specs.openid.net/auth/2.0/identifier_select"

    });

    return `${STEAM_OPENID_URL}?${params.toString()}`;

}
export async function validateSteamResponse(query) {

    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {

        params.append(key, value);

    });

    params.set("openid.mode", "check_authentication");

    const controller = new AbortController();

    const timeout = setTimeout(
        () => controller.abort(),
        VERIFY_TIMEOUT_MS
    );

    let response;

    try {

        response = await fetch(

            "https://steamcommunity.com/openid/login",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/x-www-form-urlencoded"

                },

                body: params,

                signal: controller.signal

            }

        );

    } finally {

        clearTimeout(timeout);

    }

    const text = await response.text();

    return text.includes("is_valid:true");

}