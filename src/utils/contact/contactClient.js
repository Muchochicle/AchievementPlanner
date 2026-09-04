import { ENV } from "../../env.js";
import { fetchWithTimeout } from "../http/fetchWithTimeout.js";

const API_URL = `${ENV.API_BASE_URL}/api/contact`;

// Task 10 (Contact Us): submits a contact message to the real backend
// endpoint (backend/controllers/contactController.js), which persists it
// and confirms receipt. Same {status: ...} result-object shape as
// podiumsClient.js / playerProgressClient.js - the caller (src/js/
// profile.js) branches on it and NEVER throws:
//
//   { status: "ok", id, canReply,       -> genuinely received & stored.
//     notificationStatus, notified }       notificationStatus is
//                                          "sent" | "skipped" | "failed" -
//                                          whether the support inbox was
//                                          actually emailed (see
//                                          backend/services/emailNotifier.js).
//                                          The caller shows a fully
//                                          confident confirmation only on
//                                          "sent"; otherwise it says the
//                                          message is saved but the alert
//                                          didn't go out.
//   { status: "invalid", message }      -> server rejected the input
//                                          (e.g. bad email) - show inline
//   { status: "error", error }          -> couldn't reach/there was a
//                                          server fault - caller falls
//                                          back to the mailto: link
//
// credentials: "include" so a logged-in submission is attributed to the
// session's steamId server-side (never sent in the body).
export async function submitContactMessage({ reason, message, email, name }) {

    let response;

    try {

        response = await fetchWithTimeout(API_URL, {

            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reason, message, email, name })

        });

    } catch (error) {

        return { status: "error", error };

    }

    const data = await response.json().catch(() => null);

    if (response.status === 400 && data?.message) {

        return { status: "invalid", message: data.message };

    }

    if (!response.ok || !data?.success) {

        return {

            status: "error",
            error: new Error(data?.message ?? `Unable to send message (status ${response.status})`)

        };

    }

    return {

        status: "ok",
        id: data.id,
        canReply: Boolean(data.canReply),

        // Older backend builds don't send this; treat its absence as "no
        // notification was attempted" rather than implying one succeeded.
        notificationStatus: data.notificationStatus ?? "skipped",
        notified: Boolean(data.notified)

    };

}
