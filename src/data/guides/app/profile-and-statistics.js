// Content derived directly from src/components/profile-stats/profile-stats.js
// (the 5 stat cards, renderProfileStatsState's exact status messages),
// backend/utils/profileStats.js (reduceProfileStats - what "Games" counts,
// the gamesWithAchievements/gamesWithPlayerDataUnavailable/
// gamesWithTransientErrors distinction behind the "Steam didn't report
// achievement data for N of your X games" message, and the 5-minute
// server-side cache), and src/components/profile-games/profile-games.js
// (the Completed / Recently Played sections, and that a game can appear
// in both) - new in Phase 37.
export const GUIDE = {

    slug: "profile-and-statistics",
    category: "app",
    icon: "📊",
    title: "Profile & Statistics",
    summary: "What each number on your Profile page actually measures, and what to do when some of it looks incomplete.",

    relatedSlugs: ["getting-started", "podiums-and-leaderboards", "achievement-completion-and-tracking"],

    sections: [

        {
            heading: "The Five Stat Cards",
            body: [
                "Achievements is the total number of curated planner achievements Steam has confirmed you've unlocked, added up across every owned game that has one.",
                "Games is your actual Steam library size - every game you own, not just the ones you've played or that have any achievements at all. The line underneath it breaks that number down further: how many you've played, and how many report having Steam achievements in the first place. How many you've 100%-completed isn't repeated there - that lives on its own dedicated 100% card, described next.",
                "100% is how many of your owned games you've fully completed (every one of their Steam achievements unlocked) - the one place on this page that stat is shown.",
                "Total XP and Avatars build on that same Steam-confirmed achievement/completion data, but the XP curve, levels, and which avatars you've unlocked are all tracked by AchievementPlanner itself, not Steam - see the Player Progress guide for exactly what earns XP and unlocks each avatar."
            ]
        },

        {
            heading: "When the Numbers Look Incomplete",
            body: [
                "If Steam couldn't answer for some of your games (a private profile setting, or a temporary fetch failure), you'll see a message like \"Steam didn't report achievement data for 3 of your 120 games - achievement/completion stats above may be incomplete.\" This is deliberate honesty, not a bug: those games are excluded from your counts entirely rather than being silently counted as zero, so the numbers you do see stay accurate for the games Steam actually answered for.",
                "Your Profile stats are cached for 5 minutes after a successful load, so reloading the page right after visiting won't immediately reflect a change you just made in-game - give it a few minutes, or come back later."
            ]
        },

        {
            heading: "Your Games: Completed & Recently Played",
            body: [
                "Completed lists every owned game you've 100%-finished. Recently Played lists your most recently active games by Steam's own last-played timestamp, with a \"View all\" link to the full Games page.",
                "A game can legitimately appear in both sections at once - being fully completed doesn't stop it from also being something you've played recently."
            ]
        },

        {
            heading: "If You're Not Logged In",
            body: [
                "Every stat card shows a dash and a \"Log in with Steam to see your achievement stats\" message - Profile has nothing to show without a Steam session, since every number on it is either pulled live from Steam or, for XP/avatars, tied to this browser's own local progress."
            ]
        }

    ]

};
