// Chrono Trigger Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chrono-trigger.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   613830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chrono-trigger-achievement-guide",
    "category": "game",
    "gameSlug": "chrono-trigger",
    "icon": "⏳",
    "title": "Chrono Trigger Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in Chrono Trigger - none are hidden. Covers the thirteen story-milestone achievements across the whole game.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "CHRONO TRIGGER has 13 Steam achievements and none of them are hidden. Every one is a story-milestone achievement, unlocked by reaching a specific point in the plot - from the Millennial Fair through the various time periods to the ending. There are no collectible, difficulty, ending-specific or grind achievements.",
                "Nothing is missable - the achievements track main-story progress, which is linear enough that a single playthrough to the standard ending earns all 13. The multiple endings and New Game Plus are not required for any of them.",
                "Tip: just play the game through once to the ending - the achievements pop as you pass each story beat, and there is nothing to optimise, collect or replay."
            ]
        },
        {
            "heading": "The First Half: 1000 AD to Prehistory",
            "body": [
                "The early story milestones - Beyond Time, Reunion, The Dream Project, The Successor of Guardia, Good Night, The Legendary Hero, The Unknown Past and People of the Times.",
                "The achievements here: Beyond Time (Beyond Time); Reunion (Reunion); The Dream Project (The Dream Project); The Successor of Guardia (The Successor of Guardia); Good Night (Good Night); The Legendary Hero (The Legendary Hero); The Unknown Past (The Unknown Past); People of the Times (People of the Times)."
            ]
        },
        {
            "heading": "The Second Half: The Magic Kingdom to the Epilogue",
            "body": [
                "The later story milestones - The Oath, Dino Age, What the Prophet Seeks, Memory Lane and Dream's Epilogue.",
                "The achievements here: The Oath (The Oath); Dino Age (Dino Age); What the Prophet Seeks (What the Prophet Seeks); Memory Lane (Memory Lane); Dream's Epilogue (Dream's Epilogue)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story at your own pace.",
                "2. Each achievement unlocks automatically as you reach its story beat - no side content is needed.",
                "3. You do not need any particular ending; the standard route through the story covers all 13.",
                "4. New Game Plus and the alternate endings are optional and unrelated to achievements.",
                "5. If one somehow does not unlock, continuing the story a little further will trigger it.",
                "Tip: because every achievement is just story progress, this is one of the most relaxed completions on Steam - play it for the game, not the list."
            ]
        }
    ]
};
