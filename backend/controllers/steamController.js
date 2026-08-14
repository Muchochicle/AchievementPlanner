import {
    buildSteamLoginUrl,
    validateSteamResponse
} from "../services/steamAuth.js";

import {
    getPlayerSummary,
    getOwnedGames
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

export async function profile(req, res) {

    if (!req.session.user) {

        return res.status(401).json({

            success: false,

            message: "Not logged in"

        });

    }

    const profile = await getPlayerSummary(

        req.session.user.steamid

    );

    const games = await getOwnedGames(

        req.session.user.steamid

    );

    res.json({

        success: true,

        profile,

        gameCount: games.game_count,

        games: games.games

    });

}