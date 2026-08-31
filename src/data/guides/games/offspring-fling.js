// Offspring Fling! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/offspring-fling.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   211360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "offspring-fling-achievement-guide",
    "category": "game",
    "gameSlug": "offspring-fling",
    "icon": "🐾",
    "title": "Offspring Fling! Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Offspring Fling! - none are hidden. Covers the level and flower progression, the three Crowns of Motherhood, and the parry and full-clear feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Offspring Fling! has 10 Steam achievements and none of them are hidden. Two are progression (clear a level, defeat the Dinobaus boss). Three are flower totals - 100 standard blue, 100 golden, 100 rainbow. Three are the escalating \"Crown of Motherhood\" achievements for meeting the normal, supreme and ultimate mastery tests (fast times and full flower collection). The last two are a Full Parry feat and \"All Clear\" for uncovering the game's final secret.",
                "Nothing is missable - every level is replayable and the flower and time targets can be re-attempted freely.",
                "Tip: the golden and rainbow flowers require beating a level's par time and collecting everything in one run - the three Crowns are essentially \"do this on every level at increasing standards\", so a guide for the optimal routes saves a lot of trial and error."
            ]
        },
        {
            "heading": "Progression & Flowers",
            "body": [
                "Clearing a level, defeating the Dinobaus boss, and earning 100 standard blue, 100 golden and 100 rainbow flowers.",
                "The achievements here: Starting an Adventure! (Clear a level.  That's it!); Dinobaus Defeated (Take down that darn Dinobaus before he chows down.); Flower Champion (Earn 100 standard blue flowers.); Golden Champion (Earn 100 illustrious golden flowers.); Rainbow Champion (Earn 100 supremely awesome rainbow flowers.)."
            ]
        },
        {
            "heading": "Crowns & Mastery",
            "body": [
                "The Crown of Motherhood, the Crown of Supreme Motherhood and the Crown of ULTIMATE Motherhood, the Full Parry feat, and \"All Clear\" for uncovering the final secret.",
                "The achievements here: Crown of Motherhood (Prove yourself to be an excellent mother!); Crown of Supreme Motherhood (Your motherly skills must surpass the toughest tests!); Crown of ULTIMATE Motherhood (Become the absolute paragon of motherly love!); Full Parry (The beast unleashed!); All Clear (Uncover the very last secret of Offspring Fling!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the levels for \"Starting an Adventure!\" and defeat the Dinobaus boss.",
                "2. Collect blue flowers to 100 on any runs.",
                "3. Learn the par-time routes and collect golden flowers (par time) and then rainbow flowers (par time + full collection) to 100 each.",
                "4. Meet the normal, supreme and ultimate mastery standards across every level for the three Crowns.",
                "5. Do a Full Parry and find the final secret for \"All Clear\".",
                "Tip: the rainbow flowers are the hardest - they need a clean, fast run with every collectible, so practise each level's route before going for the rainbow."
            ]
        }
    ]
};
