import { Issuer } from "openid-client";

let steamIssuer = null;

export async function getSteamIssuer() {

    if (steamIssuer) {

        return steamIssuer;

    }

    steamIssuer = await Issuer.discover(

        "https://steamcommunity.com/openid"

    );

    return steamIssuer;

}