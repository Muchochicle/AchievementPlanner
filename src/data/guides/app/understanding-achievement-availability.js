// Content derived directly from
// src/utils/planner/achievement/availability.js (classifyAchievementAvailability
// / ACHIEVEMENT_AVAILABILITY_LABELS) - the single shared source of these 3
// states and their exact display text, imported by both the backend and
// catalog-card.js/game.js. Rewritten in Phase 37 to add an actionable
// "what to do" note per state.
export const GUIDE = {

    slug: "understanding-achievement-availability",
    category: "app",
    icon: "🏆",
    title: "Understanding Achievement Availability",
    summary: "Why some games show \"No Steam achievements\" and others show \"Planner not available yet\" - and what the difference means.",

    relatedSlugs: ["getting-started", "achievement-completion-and-tracking"],

    sections: [

        {
            heading: "Three Different States",
            body: [
                "\"No Steam achievements\" - Steam itself confirms this game has zero achievements. There's nothing missing on AchievementPlanner's side; the game simply doesn't have any to track. There's nothing to do here - this is a permanent fact about the game, not a temporary gap.",
                "\"Steam achievement data unavailable\" - AchievementPlanner couldn't get a reliable answer from Steam right now, either because the achievement schema request failed or because your personal unlock data couldn't be read. This is temporary: reload the page in a minute or two, and if it's still showing this after several tries, it's worth checking whether Steam itself is having an outage.",
                "\"Planner not available yet\" - Steam confirms the game does have achievements, but AchievementPlanner doesn't have a curated planner for it yet. You can still browse the raw Steam achievement list on the game's page and see which ones you've already unlocked - you're just missing the Session Planner and Recommended Achievement features that curated games get."
            ]
        },

        {
            heading: "Why This Distinction Matters",
            body: [
                "A temporary Steam hiccup must never look identical to \"this game genuinely has no achievements\" - collapsing those two into one generic \"unavailable\" message would make a real, permanent fact (zero achievements) indistinguishable from a fixable, temporary one (a failed request).",
                "AchievementPlanner keeps them separate everywhere this status is shown, so what you see always reflects what Steam actually reported, not a guess."
            ]
        },

        {
            heading: "Where You'll See It",
            body: [
                "On the Games page, a game's catalog card shows the relevant label whenever it doesn't have a curated planner.",
                "On a game's own page, the same classification decides whether you see the full planner experience, a plain Steam achievement list, or one of the two \"unavailable\"/\"no achievements\" messages."
            ]
        }

    ]

};
