const STEAM_OPENID_URL = "https://steamcommunity.com/openid/login";

export function buildSteamLoginUrl() {

    const params = new URLSearchParams({

        "openid.ns": "http://specs.openid.net/auth/2.0",

        "openid.mode": "checkid_setup",

        "openid.return_to": process.env.STEAM_RETURN_URL,

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

    const response = await fetch(

        "https://steamcommunity.com/openid/login",

        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded"

            },

            body: params

        }

    );

    const text = await response.text();

    return text.includes("is_valid:true");

}