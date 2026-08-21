// Content derived directly from backend/utils/achievementMerger.js
// (mergeAchievements - curated planner achievements are matched to
// Steam's own achievement schema by internal id/apiname, or by normalized
// display name as a fallback; Steam-only achievements outside the
// curated planner still appear in the merged list), src/utils/planner/
// achievement/completion.js (isEntryCompleted - Steam player-unlock data
// is the only source of "completed", never a manual toggle), src/js/
// game.js (POLL_INTERVAL_MS = 60s, the visibilitychange listener that
// re-polls immediately when you switch back to the tab), and src/utils/
// planner/achievement/achievementManager.js (syncAchievementCompletion -
// the claimAchievement ledger that makes XP-granting idempotent across
// repeated polls/reloads). New in Phase 37.
export const GUIDE = {

    slug: "achievement-completion-and-tracking",
    category: "app",
    icon: "✅",
    title: "Achievement Completion & Tracking",
    summary: "How AchievementPlanner knows an achievement is done, why it isn't instant, and what happens if you unlock something outside the app.",

    relatedSlugs: ["understanding-achievement-availability", "session-planner-and-recommendations", "player-progress"],

    sections: [

        {
            heading: "Steam Is the Only Source of Truth",
            body: [
                "There is no manual \"mark as complete\" control anywhere in AchievementPlanner. An achievement only ever shows as completed once Steam itself confirms you unlocked it - never from a checkbox, never from local guesswork."
            ]
        },

        {
            heading: "Why It Isn't Instant",
            body: [
                "A game page re-checks Steam automatically once every 60 seconds while it's open, and immediately again whenever you switch back to that browser tab after being away. So if you unlock an achievement in-game, it can take up to a minute to appear checked in AchievementPlanner - it's not missed, it just hasn't polled yet.",
                "You don't need to keep the page open or watching while you play. Come back to it afterward and it will have caught up."
            ]
        },

        {
            heading: "Unlocking an Achievement Outside AchievementPlanner",
            body: [
                "Since Steam is the only source of truth, it doesn't matter where or how you unlocked something - through AchievementPlanner's Session Planner, playing with the app closed entirely, or even months before you ever used this app. The next time a game page checks Steam, that achievement will show as completed."
            ]
        },

        {
            heading: "Curated Achievements vs. Every Steam Achievement",
            body: [
                "A game's achievement list on AchievementPlanner shows every achievement Steam reports for that game - not just the ones in its curated planner. Achievements outside the curated planner still track your Steam completion status normally, they just don't factor into the Session Planner or the Recommended Achievement pick, since AchievementPlanner doesn't have difficulty/time/missable data for them."
            ]
        }

    ]

};
