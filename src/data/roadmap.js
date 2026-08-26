// Public roadmap content (Phase 76). Every "planned"/"considering" item
// here is a real, currently-true gap pulled directly from this project's
// own phase-audit reports (PHASE_72/73/74/75_AUDIT.md's "what's still
// missing before publication" sections) rather than invented marketing
// copy - if an item ships, move it into SHIPPED and delete it from
// PLANNED/CONSIDERING in the same change, so this page never drifts out of
// sync with what the app actually does.
//
// status is one of "planned" | "considering" | "shipped" - see
// roadmap-item.js for how each renders.
export const ROADMAP_ITEMS = [

    {
        status: "planned",
        title: "Live public deployment",
        body: "AchievementPlanner is fully prepared to deploy (Railway for the backend, GitHub Pages for the frontend, both documented in the project's README) - going live at a real public URL is next."
    },
    {
        status: "planned",
        title: "A log out button",
        body: "Your Steam login currently just expires on its own after 24 hours - there's no way to end a session early. A real log out control is planned, mainly for anyone signed in on a shared or public computer."
    },
    {
        status: "planned",
        title: "More games in the catalog",
        body: "Every game currently in AchievementPlanner has a complete, Steam-verified achievement list and a full written guide. Growing that catalog beyond the current lineup is ongoing."
    },
    {
        status: "considering",
        title: "Community-suggested games",
        body: "A self-serve way for players to request or contribute a game to the catalog, instead of every title being hand-curated one at a time."
    },
    {
        status: "considering",
        title: "Deeper Steam library sync",
        body: "Using more of what your connected Steam account already knows - playtime trends, recently played games - to make session recommendations even more relevant."
    }

];

export const SHIPPED_HIGHLIGHTS = [

    {
        title: "Server-side player progress",
        body: "XP, level, badges, claimed achievements, and your avatar now live on the server, tied to your Steam account - not just in this browser's local storage."
    },
    {
        title: "Persistent login sessions",
        body: "Logging in with Steam now survives a server restart - you stay logged in through routine maintenance and redeploys, not just until the process happens to restart."
    },
    {
        title: "Written achievement guides for every game",
        body: "Every game in the catalog has a complete, practical, achievement-by-achievement guide - not just a raw achievement list."
    }

];
