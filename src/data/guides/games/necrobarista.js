// Necrobarista Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/necrobarista.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   725270 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "necrobarista-achievement-guide",
    "category": "game",
    "gameSlug": "necrobarista",
    "icon": "☕",
    "title": "Necrobarista Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Necrobarista - none are hidden. Covers each of the story's episodes, from the Prologue through the Epilogue at the Terminal cafe. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Necrobarista has 11 Steam achievements and none are hidden. Every achievement is finishing one of the story's episodes, following the ghosts, magic and coffee of the Terminal cafe from the Prologue through Welcome to the Terminal, Visitation, Rise and Shine, End of the Line, Rainy Moods, Ritual, Ghost, Our Usual Haunts and Double Shot Long Black, to the Epilogue.",
                "The catalog marks it difficulty 1. Necrobarista is a short visual novel with striking anime-style presentation; every achievement unlocks just by playing through the story to its end.",
                "Tip: just follow the story at your own pace - all 11 achievements come from normal progression through the episodes."
            ]
        },
        {
            "heading": "Early Episodes",
            "body": [
                "The Prologue, Welcome to the Terminal, Visitation, Rise and Shine, End of the Line, and Rainy Moods.",
                "The achievements here: Prologue (Welcome to the Terminal); Welcome to the Terminal (Gambling for time is a dangerous business); Visitation (...Is it possible to die twice?); Rise and Shine (You shouldn’t waste your last hours on Earth sleeping); End of the Line (But even semi-immortals need their sleep); Rainy Moods (Distracting you was absolutely part of the plan)."
            ]
        },
        {
            "heading": "Later Episodes & Epilogue",
            "body": [
                "Ritual, Ghost, Our Usual Haunts, Double Shot Long Black, and the Epilogue.",
                "The achievements here: Ritual (What do you even call this sort of magic?); Ghost (You should've seen this coming); Our Usual Haunts (If I explained it to you, your head would explode too); Double Shot Long Black (Maddy maintained her calm); Epilogue (...)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Necrobarista's story from the Prologue onward.",
                "2. Continue episode by episode through to the Epilogue - each one unlocks its own achievement.",
                "Tip: this is a short, linear visual novel - a single playthrough covers every achievement."
            ]
        }
    ]
};
