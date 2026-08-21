// Content derived directly from src/utils/podiums/podiumCategories.js
// (GLOBAL_PODIUM_CATEGORIES / GAME_PODIUM_CATEGORY), backend/services/
// leaderboardStore.js (getUserGameRank/getUserGlobalRank - competition
// ranking via "COUNT WHERE value > yours" + 1, so ties share a rank and
// the next distinct value skips accordingly; qualifyingUsersClause - only
// users with real, successfully-fetched data count toward a leaderboard
// or its total size), backend/controllers/podiumController.js (toPublicRow
// - steam_id never shipped to the frontend), src/components/podium/
// podium.js (the exact "Top 10 of N ranked players" / "You haven't been
// ranked here yet - visit your Profile page to get indexed" UI copy), and
// backend/controllers/profileStatsController.js (indexProfileSnapshotSafely
// - confirmed this runs on every real GET /api/profile/stats request, i.e.
// every Profile page load - login alone does not trigger it). Rewritten in
// Phase 37 to fold in ranking-calculation detail rather than a separate
// guide.
export const GUIDE = {

    slug: "podiums-and-leaderboards",
    category: "app",
    icon: "🏅",
    title: "Podiums & Leaderboards",
    summary: "How AchievementPlanner's global and per-game rankings are calculated, and how to appear on them.",

    relatedSlugs: ["getting-started", "player-progress", "profile-and-statistics"],

    sections: [

        {
            heading: "Five Global Categories",
            body: [
                "The Podiums page ranks every AchievementPlanner player across five Steam-derived categories: Most Games Owned, Most Hours Played, Most Achievements Unlocked, Most Games Completed 100%, and Most Games Played.",
                "Every ranking is built from real Steam data - none of it comes from AchievementPlanner's own separate XP/level system (see the Player Progress guide, which is not connected to Podiums at all)."
            ]
        },

        {
            heading: "Per-Game Podium",
            body: [
                "Each game's own page also shows an hours-played leaderboard for that specific game, ranking everyone who owns it on Steam."
            ]
        },

        {
            heading: "How Rankings Are Calculated",
            body: [
                "Every leaderboard is a straightforward highest-value-first ranking within its category. Ties share a rank - if two players are tied for 2nd place, both show as 2nd, and the next distinct value is ranked 4th, not 3rd.",
                "Only players whose Steam data was actually retrieved successfully count toward a leaderboard - if your library or achievement data is private, or AchievementPlanner simply hasn't fetched it yet, you're excluded from that leaderboard's ranking and from its \"Top 10 of N ranked players\" total, rather than being shown with a fabricated zero."
            ]
        },

        {
            heading: "How You Get Ranked",
            body: [
                "Logging in with Steam by itself does not put you on any leaderboard. You get indexed the moment you visit your Profile page - that single visit is what refreshes every one of your five global stats and your per-game playtime rows.",
                "If you've never visited your Profile page, every Podiums card will show \"You haven't been ranked here yet - visit your Profile page to get indexed\" for you specifically, even while other players' rankings are visible."
            ]
        },

        {
            heading: "Your Rank",
            body: [
                "Each leaderboard shows its Top 10, plus your own current rank even if you're outside it. If you are in the visible Top 10, your row is highlighted."
            ]
        },

        {
            heading: "Privacy",
            body: [
                "Leaderboard rows never expose your Steam ID to other visitors - only your persona name, avatar, and ranked value. You can view every leaderboard without logging in; you just won't have a personal rank shown until you do."
            ]
        }

    ]

};
