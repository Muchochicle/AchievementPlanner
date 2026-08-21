// Content derived directly from
// src/utils/planner/recommendation/recommendation.js (scoring rules and
// reason text), src/utils/planner/recommendation/skipped.js (in-memory,
// per-page-load skip list - see clearSkippedAchievements() called from
// game.js's init()), src/utils/planner/session/sessionStorage.js
// (VALID_DURATIONS/DEFAULT_DURATION), src/components/session-planner/
// session-planner.js, src/js/game.js's POLL_INTERVAL_MS, and
// src/utils/planner/achievement/completion.js (isEntryCompleted - Steam-
// only completion). Rewritten in Phase 37 to add a worked scoring example,
// the skip-resets-per-visit fact, and a concrete end-to-end workflow -
// folding in the "planner workflow" topic rather than a separate guide,
// since a dedicated workflow guide would mostly restate this one.
export const GUIDE = {

    slug: "session-planner-and-recommendations",
    category: "app",
    icon: "🎯",
    title: "Using the Session Planner & Recommendations",
    summary: "How AchievementPlanner recommends what to play next, helps you plan a single sitting, and what a typical session actually looks like.",

    relatedSlugs: ["understanding-achievement-availability", "player-progress", "achievement-completion-and-tracking"],

    sections: [

        {
            heading: "Availability",
            body: [
                "The Session Planner and Recommended Achievement only appear on games that have curated planner data. A game marked \"Planner not available yet\" (see the Achievement Availability guide) doesn't have this - you'll still see its plain Steam achievement list."
            ]
        },

        {
            heading: "Recommended Next Achievement",
            body: [
                "AchievementPlanner picks one achievement you haven't completed or skipped, scored by three factors: +3 points if it's easy (difficulty 3 or lower), +2 points if it's not missable, and +2 points if it's quick (15 minutes or less). The highest-scoring achievement wins.",
                "Worked example: an achievement with difficulty 2, not missable, and a 10-minute estimate scores 3 + 2 + 2 = 7, and all three reasons show up next to it. A second achievement with difficulty 5, not missable, and a 20-minute estimate only scores 0 + 2 + 0 = 2 - just \"Cannot be missed\". The first one gets recommended.",
                "The reasons shown next to the pick are exactly the criteria that pick actually met - never a generic list, so if you only see \"Cannot be missed\", that's genuinely the only box it ticked.",
                "Use the Skip button to remove an achievement from consideration and get the next best recommendation. Skipping only lasts for this visit to the page - it's not saved anywhere, so reloading the page (or coming back later) brings every skipped achievement back into consideration. Once every achievement is completed, you'll see a completion message instead."
            ]
        },

        {
            heading: "Session Duration",
            body: [
                "Choose a target session length - 30, 45, 60, or 90 minutes (45 by default) - and \"Today's Session\" is built from achievements estimated to fit that time budget."
            ]
        },

        {
            heading: "Today's Session",
            body: [
                "Each planned achievement shows its difficulty and estimated time, with a checkmark once Steam confirms you've unlocked it. A progress bar and a running total (minutes planned vs. your target) track the whole session at a glance."
            ]
        },

        {
            heading: "How Completion Is Tracked",
            body: [
                "There's no manual \"mark complete\" button anywhere in AchievementPlanner. Steam is the only source of truth for whether an achievement is done - the game page automatically re-checks with Steam once a minute while it's open (and immediately again when you switch back to the tab), so a checkmark appears on its own once Steam reports the unlock. See the \"Achievement Completion & Tracking\" guide for the full mechanics."
            ]
        },

        {
            heading: "Putting It Together: A Typical Session",
            body: [
                "Open a game with a curated planner, pick a session length that matches how long you're actually about to play, and check the Recommended Achievement card - that's your starting point.",
                "Play the game normally toward that achievement (or work through \"Today's Session\" if you'd rather tackle several at once). You don't need to keep the AchievementPlanner tab open or watch it while you play - just come back to it afterward.",
                "When you return, the achievements you actually unlocked on Steam show up checked automatically, the progress bar updates, and Recommended Achievement re-picks based on what's left. Repeat for your next session."
            ]
        }

    ]

};
