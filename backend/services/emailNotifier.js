// Task 10 (Contact Us) - real email notification for a submitted contact
// message. Sits AFTER contactStore.saveContactMessage in the controller:
// the message is already durably in SQLite by the time this runs, so a
// notification failure here can never lose the message - it only changes
// what the response tells the user ("received - we'll get back to you" vs
// "received and saved, but our email alert didn't go through").
//
// Provider: Resend (https://resend.com), called over its plain HTTPS REST
// API - no SDK, no SMTP credentials, matching how the rest of this backend
// talks to third parties (native fetch, e.g. services/steamApi.js). Chosen
// because a brand-new account can send from the shared `onboarding@resend.dev`
// address to *its own signup email* with zero domain verification, which is
// exactly this use case (Achievement Planner notifying its own support
// inbox). A verified domain is only needed later, to send from a branded
// From address or to arbitrary recipients.
//
// Configuration (all read from the environment, never hard-coded, never
// shipped to the frontend):
//
//   RESEND_API_KEY     required to enable notifications. Absent  ->
//                      this module is a no-op that reports "skipped"
//                      (the message is still stored; nothing is lost).
//   CONTACT_EMAIL_TO   where the notification is sent. Defaults to the
//                      real support address below.
//   CONTACT_EMAIL_FROM the From header. Defaults to Resend's shared
//                      no-domain-needed sender. Must be an address Resend
//                      will accept for this account (see module comment).
//
// This function NEVER throws and NEVER rejects - it always resolves to one
// of three shapes so the controller can branch without its own try/catch:
//
//   { status: "sent",    id }         provider accepted the message
//   { status: "skipped", reason }     notifications not configured
//   { status: "failed",  error }      provider rejected / was unreachable

export const DEFAULT_CONTACT_TO = "supportachievementplanner@gmail.com";
export const DEFAULT_CONTACT_FROM = "Achievement Planner <onboarding@resend.dev>";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Generous - a contact notification is a tiny payload, but the provider
// could be slow. Long enough not to trip on a normal slow response, short
// enough that a hung provider can't hold the user's Send request open.
const REQUEST_TIMEOUT_MS = 10_000;

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

}

// Both a text/plain and a minimal text/html body: some inbox clients hide
// plain text, and a bare wall of text is easy to misread. Every field the
// brief asks for is here - reason, name (if given), user email (if given),
// message, reference id, timestamp - plus the steamId when the sender was
// logged in, which helps triage a real account issue.
function buildBodies(fields) {

    const {
        id,
        createdAt,
        reason,
        name,
        replyEmail,
        message,
        steamId
    } = fields;

    const lines = [
        `New Achievement Planner contact message (ref #${id})`,
        "",
        `Reason:     ${reason}`,
        `Name:       ${name || "(not provided)"}`,
        `Reply-to:   ${replyEmail || "(not provided - cannot reply directly)"}`,
        `Steam ID:   ${steamId || "(not logged in)"}`,
        `Submitted:  ${createdAt}`,
        "",
        "Message:",
        message
    ];

    const text = lines.join("\n");

    const html = `
        <h2 style="margin:0 0 12px">New contact message <span style="color:#888">(ref #${escapeHtml(id)})</span></h2>
        <table style="border-collapse:collapse;font:14px/1.5 system-ui,sans-serif">
            <tr><td style="padding:2px 12px 2px 0;color:#888">Reason</td><td>${escapeHtml(reason)}</td></tr>
            <tr><td style="padding:2px 12px 2px 0;color:#888">Name</td><td>${escapeHtml(name || "(not provided)")}</td></tr>
            <tr><td style="padding:2px 12px 2px 0;color:#888">Reply-to</td><td>${replyEmail ? `<a href="mailto:${escapeHtml(replyEmail)}">${escapeHtml(replyEmail)}</a>` : "(not provided - cannot reply directly)"}</td></tr>
            <tr><td style="padding:2px 12px 2px 0;color:#888">Steam ID</td><td>${escapeHtml(steamId || "(not logged in)")}</td></tr>
            <tr><td style="padding:2px 12px 2px 0;color:#888">Submitted</td><td>${escapeHtml(createdAt)}</td></tr>
        </table>
        <p style="margin:16px 0 4px;color:#888">Message:</p>
        <pre style="white-space:pre-wrap;font:14px/1.5 system-ui,sans-serif;margin:0">${escapeHtml(message)}</pre>
    `.trim();

    return { text, html };

}

// The real entry point used by the controller - always exactly one
// argument. The injectable version below is what tests call, so the
// provider request shape and every outcome branch can be checked without a
// network call or a real API key.
export function sendContactNotification(fields) {

    return sendContactNotificationWithDeps(fields, {
        fetch: globalThis.fetch,
        env: process.env
    });

}

// Whether contact-email notifications are wired up on this deployment.
// Only ever reports the boolean - never the key's value. Used by the
// startup log below and available to tests.
export function emailNotifierStatus(env = process.env) {

    return {
        configured: Boolean(env.RESEND_API_KEY?.trim()),
        to: env.CONTACT_EMAIL_TO?.trim() || DEFAULT_CONTACT_TO,
        from: env.CONTACT_EMAIL_FROM?.trim() || DEFAULT_CONTACT_FROM
    };

}

// Called once from server.js at boot so the Railway logs make it
// immediately obvious whether RESEND_API_KEY actually reached THIS
// service (a common misconfiguration is setting it on the wrong service /
// environment). Prints the destination + from address, never the key.
export function logEmailNotifierStatus(env = process.env) {

    const { configured, to, from } = emailNotifierStatus(env);

    if (configured) {

        console.log(`[emailNotifier] contact notifications ENABLED - from "${from}" to "${to}"`);

    } else {

        console.log("[emailNotifier] contact notifications DISABLED - RESEND_API_KEY not set (messages are still stored; API reports notificationStatus:\"skipped\")");

    }

}

export async function sendContactNotificationWithDeps(fields, deps) {

    const { fetch, env } = deps;

    const apiKey = env.RESEND_API_KEY?.trim();

    if (!apiKey) {

        // Not an error - a deployment can legitimately run without
        // notifications wired up yet. The controller turns this into an
        // honest "received and saved" response.
        return { status: "skipped", reason: "not-configured" };

    }

    const to = env.CONTACT_EMAIL_TO?.trim() || DEFAULT_CONTACT_TO;
    const from = env.CONTACT_EMAIL_FROM?.trim() || DEFAULT_CONTACT_FROM;

    const { text, html } = buildBodies(fields);

    const subjectName = fields.name ? ` from ${fields.name}` : "";

    const payload = {
        from,
        to: [to],
        subject: `[Contact] ${fields.reason}${subjectName} (ref #${fields.id})`,
        text,
        html
    };

    // When the sender gave an email, set Reply-To so hitting "Reply" in the
    // support inbox goes straight to them - no copy-paste from the body.
    if (fields.replyEmail) {

        payload.reply_to = fields.replyEmail;

    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    let response;

    try {

        response = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });

    } catch (error) {

        // Network failure, DNS, or the 10s abort above. Message is already
        // stored; report the failure so the response can say so.
        console.error("[emailNotifier] request to email provider failed:", error.message);

        return { status: "failed", error };

    } finally {

        clearTimeout(timeout);

    }

    const body = await response.json().catch(() => null);

    if (!response.ok) {

        // Provider rejected it - unverified sender/domain, bad/rotated key,
        // rate limit, malformed payload, provider outage. The provider's
        // own message (when present) is the single most useful thing in
        // the logs for fixing a misconfiguration.
        const providerMessage = body?.message || body?.error?.message || `HTTP ${response.status}`;

        console.error(`[emailNotifier] email provider returned ${response.status}: ${providerMessage}`);

        return { status: "failed", error: new Error(providerMessage) };

    }

    const providerId = body?.id ?? null;

    console.log(`[emailNotifier] notification for contact ref #${fields.id} accepted by provider (id ${providerId ?? "unknown"})`);

    return { status: "sent", id: providerId };

}
