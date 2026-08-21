// Content derived directly from backend/controllers/steamController.js
// (the OpenID login/callback flow, session regeneration, and the exact
// 4 fields written to req.session.user: steamid, personaname, avatarfull,
// profileurl), backend/server.js (SESSION_MAX_AGE_MS - 24h session
// cookie), backend/services/leaderboardStore.js / leaderboardDb.js (what's
// persisted beyond the session: an aggregate stats snapshot per steam_id,
// written only when you visit Profile - see the Podiums guide),
// backend/utils/cache.js and steamApi.js's own per-endpoint TTL comments
// (achievement schema data cached ~24h server-side). Also verified there
// is no logout route or logout UI anywhere in this app (checked
// backend/routes/steam.js and grepped the whole frontend/backend for
// "logout") - not describing a feature that doesn't exist. New in
// Phase 37.
export const GUIDE = {

    slug: "steam-login-and-your-data",
    category: "app",
    icon: "🔐",
    title: "Steam Login & Your Data",
    summary: "Exactly what happens when you log in with Steam, and what AchievementPlanner does and doesn't store about you.",

    relatedSlugs: ["getting-started", "podiums-and-leaderboards"],

    sections: [

        {
            heading: "How the Login Actually Works",
            body: [
                "Clicking \"Log in with Steam\" sends you to Steam's own login page (Steam OpenID) - AchievementPlanner never sees, asks for, or stores your Steam password. Steam redirects you back once you've approved the login, and AchievementPlanner verifies that response is genuinely from Steam before trusting it."
            ]
        },

        {
            heading: "What's Stored In Your Session",
            body: [
                "Once logged in, your session holds exactly four things about you: your Steam ID, your persona (display) name, your avatar image URL, and your Steam profile URL. Nothing else about your Steam account is kept in the session."
            ]
        },

        {
            heading: "What's Read Live vs. What's Persisted",
            body: [
                "Most of what you see - your owned games, playtime, and achievement progress - is fetched fresh from Steam on each page that needs it, not stored permanently. Some of it is cached briefly on the server purely for speed (achievement schema data for roughly a day, your Profile stats for 5 minutes), but that cache exists only to avoid repeat Steam API calls, not as a permanent record.",
                "The one thing that is actually saved is a small aggregate snapshot - your games owned/played, total playtime, achievements unlocked, and 100%-completed count - tied to your Steam ID, in AchievementPlanner's own database. This only happens when you visit your Profile page, and it's exactly what powers the Podiums leaderboards (see that guide for details)."
            ]
        },

        {
            heading: "Session Length",
            body: [
                "You stay logged in for 24 hours. There's no logout button in AchievementPlanner right now - your session simply expires after that window, or you can clear this site's cookies in your browser to end it immediately yourself."
            ]
        }

    ]

};
