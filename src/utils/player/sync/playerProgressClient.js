import { ENV } from "../../../env.js";
import { fetchWithTimeout } from "../../http/fetchWithTimeout.js";

const API_URL = `${ENV.API_BASE_URL}/api/player/progress`;

// Same {status: "ready"|"error", ...} shape as podiumsClient.js/
// profileStatsClient.js - callers treat "error" as "couldn't reach the
// server this time", not a hard failure (see playerSync.js, which just
// keeps using local state until the next successful sync).
export async function fetchPlayerProgress() {

    let response;

    try {

        response = await fetchWithTimeout(API_URL, { credentials: "include" });

    } catch (error) {

        return { status: "error", error };

    }

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {

        return {

            status: "error",
            error: new Error(data?.message ?? `Unable to load player progress (status ${response.status})`)

        };

    }

    return { status: "ready", state: data.state, updatedAt: data.updatedAt };

}

export async function savePlayerProgressRemote(state) {

    let response;

    try {

        response = await fetchWithTimeout(API_URL, {

            method: "PUT",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state })

        });

    } catch (error) {

        return { status: "error", error };

    }

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {

        return {

            status: "error",
            error: new Error(data?.message ?? `Unable to save player progress (status ${response.status})`)

        };

    }

    return { status: "ready", updatedAt: data.updatedAt };

}
