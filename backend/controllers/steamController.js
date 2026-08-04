import {
    buildSteamLoginUrl,
    validateSteamResponse
} from "../services/steamAuth.js";
import { getPlayerSummary } from "../services/steamApi.js";
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

    res.json({

        success: true,

        profile

    });

}

export async function profile(req, res) {

    res.json({

        success: true,

        message: "Steam profile endpoint"

    });

}