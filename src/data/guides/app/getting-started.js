// Content derived directly from the current implementation (README.md,
// src/js/app.js, src/components/navbar/navbar.js, backend/server.js's
// SESSION_MAX_AGE_MS, backend/utils/gameMapper.js's owned/catalog-only
// split, src/components/catalog-card/catalog-card.js). Rewritten in
// Phase 37 to add the Home page's own search bar and a concrete example
// flow - nothing here describes functionality that doesn't exist.
export const GUIDE = {

    slug: "getting-started",
    category: "app",
    icon: "🚀",
    title: "Getting Started",
    summary: "What AchievementPlanner does, how to log in with Steam, and how to find your first game.",

    relatedSlugs: ["understanding-achievement-availability", "steam-login-and-your-data"],

    sections: [

        {
            heading: "What AchievementPlanner Does",
            body: [
                "AchievementPlanner is a Steam achievement planning tool. It pulls your real, live achievement and playtime data from Steam, helps you plan what to play next, and shows how you stack up against other AchievementPlanner players on the Podiums leaderboards.",
                "Nothing is guessed or simulated - achievement completion, playtime, and library data all come straight from Steam's own API."
            ]
        },

        {
            heading: "Logging In With Steam",
            body: [
                "Click \"Log in with Steam\" in the navbar. You'll be sent to Steam's own login page (Steam OpenID) and returned to AchievementPlanner already signed in - your Steam password is never seen or handled by this app.",
                "Your session stays signed in for 24 hours, after which you'll need to log in again. See the \"Steam Login & Your Data\" guide for exactly what AchievementPlanner stores about you."
            ]
        },

        {
            heading: "Two Ways to Search",
            body: [
                "The Home page has its own quick search bar right in the hero section - type a few letters of a game's name and matching results appear instantly, letting you jump straight to a game page without visiting the full catalog.",
                "The Games page has the full browsing experience: the same search box plus filters and sorting. Use Home's search when you already know what you're looking for, and the Games page when you want to browse."
            ]
        },

        {
            heading: "Owned Games vs. Catalog-Only Games",
            body: [
                "Once you're logged in, the Games page shows your real Steam library alongside any AchievementPlanner catalog game you don't personally own.",
                "A game you don't own is still visible - marked with a \"Not owned\" badge and shown dimmed - so you can browse its planner, but there's no personal completion or playtime to track for it until you own it on Steam."
            ]
        },

        {
            heading: "A Concrete First Visit",
            body: [
                "A typical first session looks like this: log in with Steam, type a game's name into the Home page search (or open the Games page and use a filter, like Difficulty: Easy, to find something manageable), click its card, and see what AchievementPlanner has for it.",
                "What you land on next depends entirely on what data exists for that game - see \"What You'll See on a Game Page\" below, and the \"Understanding Achievement Availability\" guide for the full breakdown."
            ]
        },

        {
            heading: "What You'll See on a Game Page",
            body: [
                "What renders depends on what AchievementPlanner actually knows about that game: a full curated planner (Session Planner, Recommended Achievement, achievement list) for games with planner data, a plain Steam achievement list for games Steam reports achievements for but AchievementPlanner doesn't have a planner for yet, or an honest \"no achievements\" / \"data unavailable\" message.",
                "See the \"Understanding Achievement Availability\" guide for exactly what each of those states means, and \"Using the Session Planner & Recommendations\" for what the full planner experience actually offers."
            ]
        }

    ]

};
