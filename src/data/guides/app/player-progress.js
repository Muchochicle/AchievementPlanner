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
// avatars gated on completedAchievements only, streak badge tiers),
// src/utils/player/streak/streakManager.js (the daily-activity streak
// itself), and src/utils/player/sync/playerSync.js + backend
// services/playerProgressStore.js (server-side persistence, keyed by Steam
// ID). Updated when: avatars moved from a level/completedGames mix to
// achievements-only; streak-based badges were added; progress moved from
// localStorage-only to server-side per-account persistence (Phase 71); and
// the daily-activity streak stopped requiring a Profile visit.
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
                "This is AchievementPlanner's own progression - XP, level, title, badges, unlocked avatars and your daily streak. It's separate from Steam's own achievement data, and it has no effect on your Podiums leaderboard rankings: the Steam rankings there are computed entirely from real Steam data, independently of everything on this page.",
                "When you're signed in with Steam, this progress is saved on our server, tied to your Steam account - so it survives clearing your browser data, and it follows you to a different browser or device. If you use the site signed out, progress is kept only in that browser until you sign in, at which point it's carried up to your account. You can wipe your stored progression data at any time from Settings on your Profile page."
            ]
        },

        {
            heading: "Earning XP",
            body: [
                "You earn 50 XP the moment Steam confirms you've unlocked an achievement that's part of a game's curated planner (each achievement counts once), and a 300 XP bonus the moment you 100%-complete that game's whole curated list.",
                "Using the site while signed in also keeps your XP in sync with your entire Steam library, not just the games you've opened here - so achievements and 100%-completions earned anywhere on Steam still count, even for a game you've never opened in AchievementPlanner. This catch-up runs quietly in the background on any page, and can only ever add XP, never take it away."
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
                "AchievementPlanner awards the \"Perfectionist\" badge for one specific milestone: the first game you 100%-complete. It's a one-time marker of that first full clear - the same milestone that grants the 300 XP completion bonus above - and it doesn't track how many games you go on to complete after it.",
                "It also tracks a daily activity streak: using AchievementPlanner on consecutive days grows it, and reaching 3, 7, or 30 days in a row earns the Committed, Dedicated, and Unstoppable badges. Any page counts while you're signed in - you don't have to open a particular page for the day to register. Once earned, a badge is yours to keep even if you later miss a day and the streak resets."
            ]
        },

        {
            heading: "Where To See It",
            body: [
                "Your current title, badges, and unlocked avatars all appear on your Profile page, where you can also equip any avatar you've unlocked. Settings on that same page lets you delete your stored progression data."
            ]
        }

    ]

};
