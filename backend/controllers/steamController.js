import crypto from "crypto";

import {
    buildSteamLoginUrl,
    validateSteamResponse
} from "../services/steamAuth.js";

import {
    getPlayerSummary
} from "../services/steamApi.js";

import { sendServerError } from "../utils/sendServerError.js";

export async function login(req, res) {

    try {

        const state = crypto.randomBytes(32).toString("hex");

        req.session.oauthState = state;

        const url = buildSteamLoginUrl(state);

        res.redirect(url);

    } catch (error) {

        sendServerError(res, error, "GET /auth/steam/login");

    }

}

// Real Express entry point (routes/steam.js) - always exactly 2 params, for
// the same reason getProfileStats in profileStatsController.js is: Express
// calls every route handler as (req, res, next), so a declared 3rd
// parameter would silently receive `next` instead of a test double.
// callbackWithDeps below is the injectable version tests call directly.
export async function callback(req, res) {

    return callbackWithDeps(req, res, defaultDeps);

}

const defaultDeps = {

    validateSteamResponse,
    getPlayerSummary

};

// Regenerating the session ID here - after Steam's response is verified,
// but before the authenticated user is written into the session - is the
// standard defense against session fixation: whatever session ID existed
// before login (the one that only ever held a short-lived oauthState) is
// discarded, so an attacker who somehow fixed that earlier ID in a
// victim's browser never gains a privileged session once the victim logs
// in. express-session's regenerate() is callback-based, so it's wrapped in
// a Promise to fit this async function.
function regenerateSession(req) {

    return new Promise((resolve, reject) => {

        req.session.regenerate(error => {

            if (error) {

                reject(error);

            } else {

                resolve();

            }

        });

    });

}

export async function callbackWithDeps(req, res, deps) {

    const { validateSteamResponse, getPlayerSummary } = deps;

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

        await regenerateSession(req);

        req.session.user = {

            steamid: profile.steamid,

            personaname: profile.personaname,

            avatarfull: profile.avatarfull,

            profileurl: profile.profileurl

        };

        const frontendUrl = (process.env.FRONTEND_URL ?? "http://localhost:5500").replace(/\/+$/, "");

        res.redirect(`${frontendUrl}/index.html`);

    } catch (error) {

        sendServerError(res, error, "GET /auth/steam/return");

    }

}
