// Shotgun Cop Man Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shotgun-cop-man.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2966850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "shotgun-cop-man-achievement-guide",
    "category": "game",
    "gameSlug": "shotgun-cop-man",
    "icon": "👮",
    "title": "Shotgun Cop Man Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Shotgun Cop Man - none are hidden. Covers all 8 Worlds, their No Damage/Kill All/Speedrun challenge sets, and a handful of trick-shot and completion achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Shotgun Cop Man has 21 Steam achievements and none are hidden. Eight are for beating each of the game's 8 Worlds, and six more are for completing one and then all of the No Damage, Kill All and Speedrun challenges across every level. The rest are trick-shot and completion achievements - throwing an enemy at another enemy, staying airborne, blowing 100 enemies to pieces, beating a boss without getting hit, finishing the game, and checking out the Level Editor.",
                "The catalog marks it difficulty 4. Shotgun Cop Man is a precision shotgun-jump platformer in the vein of a Celeste/Super Meat Boy hybrid, so beating every World's No Damage and Speedrun challenges is a genuine test of execution, not a time sink.",
                "Tip: clear each World's Kill All and Speedrun challenges on your first pass, then come back for No Damage runs once you know the level layouts by heart."
            ]
        },
        {
            "heading": "Challenge Runs & Trick Shots",
            "body": [
                "Finishing a level without getting hit, completing one and then all No Damage, Kill All and Speedrun challenges, completing all challenges for all levels, throwing an enemy at another enemy, staying airborne for most of a level, blowing 100 enemies to pieces, and beating a boss without getting hit.",
                "The achievements here: No Damage (Finish a level without getting hit); Kill All (Complete one \"Kill All\" challenge.); Speedrun (Complete one \"Speedrun\" challenge.); Not a scratch (Complete all \"No Damage\" challenges.); Hello, anybody there? (Complete all \"Kill All\" challenges.); *Blinks* (Complete all \"Speedrun\" challenges.); Total Champ (Complete all challenges for all levels.); Have you met my friend? (Throw an enemy at another enemy.); Airborne (Spend less than 5 seconds on the ground in a level.); Rest in Pieces (Blow 100 enemies to pieces.); Who's the Boss now? (Beat a boss without getting hit.)."
            ]
        },
        {
            "heading": "Worlds & Completion",
            "body": [
                "Beating Worlds 1 through 8, finishing the game, and checking out the Level Editor.",
                "The achievements here: World 1 (Beat World 1.); World 2 (Beat World 2.); World 3 (Beat World 3.); World 4 (Beat World 4.); World 5 (Beat World 5.); World 6 (Beat World 6.); World 7 (Beat World 7.); World 8 (Beat World 8.); Justice is Served (Beat the game.); The Creator (Check out the Level Editor.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through each World's levels, clearing the Kill All and Speedrun challenges as you go.",
                "2. Beat all 8 Worlds and finish the game for Justice is Served.",
                "3. Go back through and clear every level's No Damage challenge once you know the layouts.",
                "4. Pick up the trick-shot achievements along the way - throwing an enemy at another enemy, staying airborne, blowing up 100 enemies, and a no-hit boss kill.",
                "5. Check out the Level Editor for the final achievement.",
                "Tip: this is a precision platformer - don't force No Damage runs on your first pass through a level, come back once you've learned its layout."
            ]
        }
    ]
};
