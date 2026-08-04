import { getSteamIssuer } from "./client.js";

export async function initializeSteam() {

    const issuer = await getSteamIssuer();

    console.log(

        "Steam issuer loaded:",

        issuer.issuer

    );

}