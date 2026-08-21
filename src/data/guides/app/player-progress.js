// Content derived directly from src/utils/player/player.js (addXP amounts
// via their callers, STORAGE_KEY), src/utils/planner/achievement/
// achievementManager.js (+50 XP per Steam-confirmed curated achievement),
// src/utils/planner/game/gameCompletion.js (+300 XP and the "Perfectionist"
// badge on 100% game completion), src/utils/player/level/levelSystem.js
// (the level^2*100 XP curve), src/utils/player/titles/titleSystem.js
// (title thresholds), src/utils/player/playerProgress.js (avatar unlock
// thresholds), and src/data/player/avatars.js (avatar id -> display name,
// including which one is unlocked by default). Rewritten in Phase 37 to
// add the default-avatar fact, the localStorage-loss caveat, and a full
// unlock list - folding in the "more detail" request rather than a
// separate guide.
export const GUIDE = {

    slug: "player-progress",
    category: "app",
    icon: "⭐",
    title: "Player Progress — XP, Levels, Badges and Avatars",
    summary: "AchievementPlanner's own XP/level system in full detail - separate from Steam and from the Podiums leaderboards.",

    relatedSlugs: ["podiums-and-leaderboards", "session-planner-and-recommendations", "profile-and-statistics"],

    sections: [

        {
            heading: "A Separate System From Steam",
            body: [
                "This progress system lives only in your browser's local storage. It isn't tied to your Steam account, doesn't sync across devices or browsers, and has no effect on your Podiums leaderboard rankings - those are computed entirely from real Steam data, independently of everything on this page.",
                "Because it's stored locally, clearing your browser's site data (or simply opening AchievementPlanner in a different browser or device) resets it back to zero. There's no server-side backup of this progress."
            ]
        },

        {
            heading: "Earning XP",
            body: [
                "You earn 50 XP the moment Steam confirms you've unlocked an achievement that's part of a game's curated planner (each achievement counts once).",
                "Completing every planner achievement in a game grants a 300 XP bonus, on top of what you already earned unlocking them individually."
            ]
        },

        {
            heading: "Levels & Titles",
            body: [
                "Each level requires more XP than the last - the amount needed to reach level N is N × N × 100 XP, so the climb accelerates the higher you go.",
                "Your title changes with your level: Rookie Hunter below level 10, Achievement Seeker from level 10, Veteran Hunter from level 20, Master Hunter from level 30, and Legendary Hunter from level 50."
            ]
        },

        {
            heading: "Avatars - The Full List",
            body: [
                "Anonymous is unlocked from the very start - it's what every new player has equipped by default, before earning anything.",
                "Recruit unlocks at level 5, and Pathfinder at level 10 - both purely level-based.",
                "Veteran unlocks once you've 100%-completed 5 games (a game only counts once it's fully done, not partway through).",
                "Elite unlocks at 100 total achievements unlocked, and Legend at 500 - both counted from the same curated-achievement total that earns you XP, not from Steam's own achievement counters."
            ]
        },

        {
            heading: "Badges",
            body: [
                "AchievementPlanner currently awards one badge, \"Perfectionist\", the first time you 100%-complete any game with a curated planner - the same milestone that grants the 300 XP completion bonus above."
            ]
        },

        {
            heading: "Where To See It",
            body: [
                "Your current title, badges, and unlocked avatars all appear on your Profile page, where you can also equip any avatar you've unlocked."
            ]
        }

    ]

};
