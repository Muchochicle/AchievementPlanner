// Dorfromantik's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dorfromantik.json), whose 85 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1455840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - all 85 ship a real,
//   official Steam description, quoted directly below. Dorfromantik has
//   no Steam-hidden achievements at all.
// - The list is almost entirely numbered milestone families (roman
//   numerals I through VII). Rather than one line per achievement, the
//   sections below describe each family's requirement once and then name
//   every tier in it in full, grouped by whether the target is a
//   lifetime total, a single connected group's size, an unbroken
//   placement streak, or a score. This mirrors the achievements' own
//   structure and is read directly from their official descriptions.
export const GUIDE = {

    slug: "dorfromantik-achievement-guide",
    category: "game",
    gameSlug: "dorfromantik",
    icon: "🏘️",
    title: "Dorfromantik Achievement Guide",
    summary: "A practical guide to all 85 Steam achievements in Dorfromantik - the lifetime-total milestone families, the single-group size families, the placement-streak families, and the score families - and the order they naturally fall in.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Dorfromantik has 85 Steam achievements and none are hidden. It is a calm, no-fail tile-laying game, so nothing here is missable and nothing tests reflexes - the achievements are milestones you accumulate by playing.",
                "Almost the entire list is numbered families (I, II, III, and so on). The requirement is the same within a family; only the target number goes up. The sections below group those families by what kind of target they track: a lifetime running total, the size of one connected group in a single session, an unbroken placement streak, or a score.",
                "Tip: play the standard endless mode and simply keep going. Long sessions feed the streak families, the single-group size families, and the score families all at once, while your lifetime totals tick up in the background. Very few of these need a dedicated attempt."
            ]
        },

        {
            heading: "One-Off & Placement Achievements",
            body: [
                "First Steps is a one-time unlock for finishing the tutorial, which also grants a new tile.",
                "Planner I, Planner II, Planner III, Planner IV, Planner V, and Planner VI reward scoring 2, 3, 4, 5, 6, and 7 perfect placements at once - a single tile that completes multiple adjacent groups or fully surrounds itself with matching edges.",
                "Analyst I, Analyst II, Analyst III, Analyst IV, Analyst V, and Analyst VI reward collecting 120, 220, 330, 440, 550, and 660 points from one tile placement, which comes from closing a large group with that tile."
            ]
        },

        {
            heading: "Cumulative Milestone Families",
            body: [
                "These track a lifetime running total across every session, so they finish on their own as long as you keep playing.",
                "Landscaper I, Landscaper II, Landscaper III, Landscaper IV, Landscaper V, and Landscaper VI are for placing 100, 250, 500, 1000, 1500, and 2000 tiles in total. Perfectionist I, Perfectionist II, Perfectionist III, Perfectionist IV, and Perfectionist V are for 25, 50, 150, 250, and 500 perfect placements in total.",
                "Quest Master I, Quest Master II, Quest Master III, Quest Master IV, Quest Master V, and Quest Master VI are for completing 25, 50, 100, 250, 400, and 600 quests in total. Explorer I, Explorer II, Explorer III, and Explorer IV are for connecting 3, 10, 25, and 50 preplaced tiles in total.",
                "Self-Sufficiency I, Self-Sufficiency II, and Self-Sufficiency III are for closing 5, 20, and 50 field groups that each hold at least 10 fields. True Fan I, True Fan II, True Fan III, and True Fan IV are for finishing 5, 10, 25, and 50 sessions with a score of at least 5000."
            ]
        },

        {
            heading: "Single-Group Size Families",
            body: [
                "These want one connected group - built within a single session - to reach a given size. Bigger maps and careful routing make them easier.",
                "Engineer I, Engineer II, Engineer III, and Engineer IV want a train route with at least 10, 25, 50, and 75 train tracks. Ocean I, Ocean II, Ocean III, and Ocean IV want a water body with at least 15, 30, 60, and 100 water segments.",
                "Farmer I, Farmer II, Farmer III, and Farmer IV want a field group with at least 25, 50, 100, and 150 fields. Villager I, Villager II, Villager III, and Villager IV want a village with at least 50, 100, 150, and 250 houses.",
                "Green Thumb I, Green Thumb II, Green Thumb III, Green Thumb IV, and Green Thumb V want a forest with at least 250, 500, 750, 1000, and 1500 trees - the largest single-group targets in the game, and the main reason to keep one very long session running."
            ]
        },

        {
            heading: "Streak Families",
            body: [
                "These count consecutive tile placements under a restriction; a single slip resets the count, so they reward a slow, deliberate pace.",
                "Puzzler I, Puzzler II, Puzzler III, Puzzler IV, Puzzler V, Puzzler VI, and Puzzler VII are for placing 25, 50, 75, 100, 150, 200, and 250 consecutive tiles without ever connecting two incompatible edges.",
                "Heavy Weight I, Heavy Weight II, Heavy Weight III, Heavy Weight IV, Heavy Weight V, Heavy Weight VI, and Heavy Weight VII are for placing 25, 50, 75, 100, 150, 200, and 250 consecutive tiles without rotating a single one - drop each tile exactly as it is drawn."
            ]
        },

        {
            heading: "Score Families",
            body: [
                "Champion I, Champion II, Champion III, Champion IV, and Champion V are for reaching a single-session highscore of 2500, 10000, 15000, 20000, and 30000 points.",
                "Overachiever I, Overachiever II, Overachiever III, and Overachiever IV are for collecting 10000, 25000, 50000, and 100000 points in total across all sessions - another background counter that fills in while you chase everything else."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Finish the tutorial for First Steps, then just play endless sessions. Keep each session going as long as you sensibly can rather than restarting after a mistake.",
                "In your long sessions, deliberately grow one forest as large as possible for the Green Thumb tiers, and keep half an eye on your biggest village, water body, field group, and train route for the Villager, Ocean, Farmer, and Engineer tiers.",
                "When you want a specific push, slow right down for a clean run to build the Puzzler and Heavy Weight streaks, and look for multi-group tiles to bank the Planner and Analyst placement achievements.",
                "Everything else - Landscaper, Perfectionist, Quest Master, Explorer, Self-Sufficiency, True Fan, Champion, and Overachiever - is a running total or highscore that arrives on its own over enough sessions, with the final tiers (Landscaper VI, Quest Master VI, Overachiever IV) being the last to land."
            ]
        }

    ]

};
