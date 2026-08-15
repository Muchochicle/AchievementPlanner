import {
    buildSteamLoginUrl,
    validateSteamResponse
} from "../services/steamAuth.js";

import {
    getPlayerSummary
} from "../services/steamApi.js";

export async function login(req, res) {

    const url = buildSteamLoginUrl();

    res.redirect(url);

}

export async function callback(req, res) {

    const valid = await validateSteamResponse(req.query);

    if (!valid) {

        return res.status(401).json({

            success: false,

            message: "Steam authentication failed"

        });

    }

    const steamId =

        req.query["openid.claimed_id"]

            .split("/")

            .pop();

    const profile = await getPlayerSummary(steamId);

    req.session.user = {

        steamid: profile.steamid,

        personaname: profile.personaname,

        avatarfull: profile.avatarfull,

        profileurl: profile.profileurl

    };

    res.redirect("http://localhost:5500/index.html");

}