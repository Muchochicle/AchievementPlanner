// Content derived directly from src/utils/player/player.js (addXP amounts
// via their callers, STORAGE_KEY), src/utils/planner/achievement/
// achievementManager.js (+50 XP per Steam-confirmed curated achievement),
// src/utils/planner/game/gameCompletion.js (+300 XP and the "Perfectionist"
// badge on 100% game completion), src/utils/player/level/levelSystem.js
// (the level^2*100 XP curve), src/utils/player/titles/titleSystem.js
// (title thresholds), src/data/player/avatars.js (each avatar's
// requiredAchievements threshold and display name, including which one is
// unlocked by default), src/utils/player/playerProgress.js
// (checkPlayerUnlocks/checkBadgeUnlocks/reconcileProgressFromProfileStats -
// avatars gated on completedAchievements only, streak badge tiers), and
// src/utils/player/streak/streakManager.js (the daily-activity streak
// itself). Updated when avatars moved from a level/completedGames mix to
// achievements-only, and streak-based badges were added.
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
                "You earn 50 XP the moment Steam confirms you've unlocked an achievement that's part of a game's curated planner (each achievement counts once), and a 300 XP bonus the moment you 100%-complete that game's whole curated list.",
                "Visiting your Profile page also brings your XP in sync with your entire Steam library, not just the games you've opened here - so achievements and 100%-completions earned anywhere on Steam still count, even for a game you've never opened in AchievementPlanner."
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
                "Every other avatar is earned purely by completing achievements - never by your level, and never by how many games you've finished. Recruit unlocks at 100 completed achievements, Pathfinder at 250, Veteran at 500, Elite at 1,000, and Legend at 2,000.",
                "These thresholds count the same total shown on your Profile's Achievements card - your entire Steam-confirmed achievement history, not just what you've unlocked inside AchievementPlanner."
            ]
        },

        {
            heading: "Badges",
            body: [
                "AchievementPlanner awards the \"Perfectionist\" badge the first time you 100%-complete any game - the same milestone that grants the 300 XP completion bonus above.",
                "It also tracks a daily activity streak: visiting your Profile on consecutive days grows it, and reaching 3, 7, or 30 days in a row earns the Committed, Dedicated, and Unstoppable badges. Once earned, a badge is yours to keep even if you later miss a day and the streak resets."
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
