// Task 6: single source of truth for the "Support Achievement Planner"
// destination.
//
// There is NO real donation account wired up yet, and this file must not
// invent one. When a real external donation page exists (PayPal.me, Ko-fi,
// GitHub Sponsors, Buy Me a Coffee, ...), set:
//
//   SUPPORT_URL      -> the full https:// link to that page
//   SUPPORT_PLATFORM -> a short human name for it ("PayPal", "Ko-fi", ...)
//
// and the support section on the Podiums page switches from an honest
// "not set up yet" state to a real outbound link automatically. Nothing
// else needs to change.
//
// This is a plain public URL - the kind of thing that is safe to ship in
// frontend code. It is NOT a bank account, an API key, or any credential;
// donations are handled entirely on the external platform, never by this
// site.
export const SUPPORT_URL = "";

export const SUPPORT_PLATFORM = "";

export function hasSupportDestination() {

    return typeof SUPPORT_URL === "string" && /^https:\/\/\S+$/.test(SUPPORT_URL.trim());

}
