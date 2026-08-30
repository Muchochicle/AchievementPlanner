// 7 Billion Humans Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/7-billion-humans.json), whose 19 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   792100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "7-billion-humans-achievement-guide",
    "category": "game",
    "gameSlug": "7-billion-humans",
    "icon": "👥",
    "title": "7 Billion Humans Achievement Guide",
    "summary": "A practical guide to all 19 Steam achievements in 7 Billion Humans - none are hidden. Covers career-story milestones and optimization challenges, the game's slapstick \"Worker's Comp\" death achievements, and completing every level.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "7 Billion Humans has 19 Steam achievements and none are hidden. As Human Resource Machine's spiritual sequel (now with parallel, multi-worker programming), the list covers five story cutscene milestones, listening to every worker's thoughts in a level, the same joke over-engineering achievements as its predecessor (using 4x the required commands or seconds), a non-robust-solution Glorious Failure, five slapstick \"Worker's Comp\" achievements for specific ways a worker can die on the job, and the Green/Blue/Orange/Red path Optimization Awards.",
                "Nothing is missable - every level stays replayable, and the Worker's Comp achievements in particular are easy to trigger deliberately by just walking a worker into a hazard on purpose. The genuine long pole is the four-color Optimization Award set, since Red in particular is usually the game's hardest optimization path.",
                "Tip: the Worker's Comp achievements (crushed, shredded, exploded, fell into an infinite pit, killed by a killbot) are all meant to be triggered on purpose - pick an early, simple level with the relevant hazard and deliberately walk a worker into it rather than waiting for an accident during normal play."
            ]
        },
        {
            "heading": "Career Milestones & Challenges",
            "body": [
                "The five story cutscene milestones, listening to all worker thoughts in a level, the two over-engineering achievements (4x the required commands or seconds), and a Solution Not Robust failure.",
                "The achievements here: Career Milestone 1 (Finish the You're Hired! cutscene.); Career Milestone 2 (Finish the Intro to Morale Officers cutscene.); Career Milestone 3 (Finish the Fitness Program cutscene.); Career Milestone 4 (Finish the Morning Petroleum cutscene.); Career Milestone 5 (Finish the Mom and Dad of Invention cutscene.); Social Engineer (Listen to all worker thoughts in a level.); King of Verbosity (Solve any puzzle with at least 4x the number of commands required by the size challenge.); Queen of Inefficiency (Solve any puzzle with at least 4x the number of seconds required by the speed challenge.); Glorious Failure: Solution Not Robust (Your solution fails more than 50% of the time.)."
            ]
        },
        {
            "heading": "Worker's Comp Mishaps",
            "body": [
                "The five slapstick workplace-death achievements: crushed by an appliance, shredded by a shredder, an explosive death, falling into an infinite pit, and shredded by a killbot.",
                "The achievements here: Worker's Comp: Crushing It (A worker is a crushed by an appliance.); Worker's Comp: Shredding It (A worker is shredded by a shredder.); Worker's Comp: Explosive Failure (A worker exploded.); Worker's Comp: Trust Exercise (A worker fell into an infinite pit.); Worker's Comp: Shrieking Steel Blades (A worker is shredded by a killbot.)."
            ]
        },
        {
            "heading": "Optimization & Completion",
            "body": [
                "The Green, Blue, Orange, and Red path Optimization Awards, and completing every level in the game.",
                "The achievements here: Green Optimization Award (Green path fully optimized.); Blue Optimization Award (Blue path fully optimized.); Orange Optimization Award (Orange path fully optimized); Red Optimization Award (Red path fully optimized.); Excellent Instruction Follower (All levels complete. Congratulations.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, watching every cutscene for the five Career Milestones and listening to all worker thoughts in a level for Social Engineer.",
                "2. On an easy level with the right hazard, deliberately trigger each Worker's Comp death: crushed by an appliance, shredded by a shredder, exploded, fell into an infinite pit, and shredded by a killbot.",
                "3. Try the over-engineering achievements on levels you find easy: 4x the required commands (King of Verbosity) and 4x the required seconds (Queen of Inefficiency), plus a Solution Not Robust failure (a solution that fails more than half the time).",
                "4. Go back through completed levels and chase the Green, Blue, Orange, and Red Optimization Awards.",
                "5. Finish every level for Excellent Instruction Follower.",
                "Tip: unlike Human Resource Machine's single-worker programs, 7 Billion Humans' parallel multi-worker puzzles make the Worker's Comp deaths even easier to set up deliberately - just route one spare worker into the hazard while the rest of your program continues normally."
            ]
        }
    ]
};
