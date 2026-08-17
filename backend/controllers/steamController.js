import crypto from "crypto";

import {
    buildSteamLoginUrl,
    validateSteamResponse
} from "../services/steamAuth.js";

import {
    getPlayerSummary
} from "../services/steamApi.js";

export async function login(req, res) {

    try {

        const state = crypto.randomBytes(32).toString("hex");

        req.session.oauthState = state;

        const url = buildSteamLoginUrl(state);

        res.redirect(url);

    } catch (error) {

        console.error("Steam login error:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}

export async function callback(req, res) {

    try {

        const expectedState = req.session.oauthState;

        const receivedState = req.query.state;

        if (

            !expectedState ||

            !receivedState ||

            receivedState !== expectedState

        ) {

            return res.status(401).json({

                success: false,

                message: "Steam authentication failed"

            });

        }

        // One-time use: cleared as soon as it's been checked, before any
        // further async work, so this exact nonce can never authenticate
        // a second callback.
        delete req.session.oauthState;

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

    } catch (error) {

        console.error("Steam callback error:", error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}
