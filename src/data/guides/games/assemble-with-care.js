// Assemble with Care Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assemble-with-care.json), whose 14 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1202900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assemble-with-care-achievement-guide",
    "category": "game",
    "gameSlug": "assemble-with-care",
    "icon": "🔧",
    "title": "Assemble with Care Achievement Guide",
    "summary": "A practical guide to all 14 Steam achievements in Assemble with Care - none are hidden. Covers completing all 12 levels plus the epilogue and a final level in this short repair-puzzle story. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assemble with Care has 14 Steam achievements and none are hidden. Every achievement is completing one of the game's story levels, from arriving in Bellariva through the epilogue, as you take apart and repair a series of objects for the town's residents.",
                "The catalog marks it difficulty 1. This is a short, relaxing narrative puzzle game about fixing things and human connection; every achievement unlocks just by progressing through the story.",
                "Tip: take your time exploring each object's mechanism - there's no time pressure and no way to fail a repair."
            ]
        },
        {
            "heading": "Early Levels",
            "body": [
                "Welcome to Bellariva, Goodnight My Darling, Statue of Limitations, Call Me, Life Through a Lens, Everything is Illuminated, and Game Over.",
                "The achievements here: Welcome to Bellariva (Complete Level 1); Goodnight, My Darling (Complete Level 2); Statue of Limitations (Complete Level 3); Call Me (Complete Level 4); Life Through a Lens (Complete Level 5); Everything is Illuminated (Complete Level 6); Game Over (Complete Level 7)."
            ]
        },
        {
            "heading": "Later Levels & Epilogue",
            "body": [
                "A Fix in Time, Slide Away, Hello Master Chef, Turning the Tables, Thank You for the Music, One Last Thing, and the Epilogue's Coffee Break.",
                "The achievements here: A Fix in Time (Complete Level 8); Slide Away (Complete Level 9); Hello, Master Chef (Complete Level 10); Turning the Tables (Complete Level 11); Thank You for the Music (Complete Level 12); Only a Phonecall Away (One Last Thing); Coffee Break (Complete Epilogue)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Assemble with Care's 12 levels in order, taking apart and repairing each object.",
                "2. Continue into the 'One Last Thing' level and the Epilogue to finish the story.",
                "Tip: this is a short, one-sitting narrative game - a single relaxed playthrough covers every achievement."
            ]
        }
    ]
};
