// The Wolf Among Us Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-wolf-among-us.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   250320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-wolf-among-us-achievement-guide",
    "category": "game",
    "gameSlug": "the-wolf-among-us",
    "icon": "🐺",
    "title": "The Wolf Among Us Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in The Wolf Among Us - none are hidden. Covers the chapter- and episode-completion achievements across all five episodes, plus the per-episode Book of Fables achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Wolf Among Us has 35 Steam achievements and none of them are hidden. Each episode contributes seven: complete each of its five chapters, complete the episode, and unlock all of its Book of Fables entries. Nothing is tied to choices or difficulty.",
                "The chapter and episode achievements are pure progress and cannot be missed. The Book of Fables achievements need you to examine the fantasy characters and objects you encounter - most fill in naturally, but a few entries require actively inspecting something in a scene before moving on.",
                "Tip: play through once, examining people and objects when the game lets you; if a \"[rank] Librarian\" achievement does not pop at an episode's end, replay that episode from the menu with a Book of Fables checklist and inspect whatever you skipped."
            ]
        },
        {
            "heading": "Episodes 1-2: Faith & Smoke and Mirrors",
            "body": [
                "Completing all five chapters of Episode 1 and Episode 2, completing each episode (\"Faith\" and \"Smoke and Mirrors\"), and unlocking all Book of Fables entries in each (Novice and Apprentice Librarian).",
                "The achievements here: Welcome to Fabletown (Completed Chapter 1 of Episode 1.); Wolf in Sheriff's Clothing (Completed Chapter 2 of Episode 1.); The Long Goodbye (Completed Chapter 3 of Episode 1.); The Frog or the Prince? (Completed Chapter 4 of Episode 1.); Panic in the Parlours (Completed Chapter 5 of Episode 1.); A Light Snowfall (Completed Episode 1: \"Faith\"); Novice Librarian (Unlocked all Book of Fables entries in Episode 1.); Right to an Attorney (Completed Chapter 1 of Episode 2.); Breaking Point (Completed Chapter 2 of Episode 2.); Sisters (Completed Chapter 3 of Episode 2.); Made Them Cry (Completed Chapter 4 of Episode 2.); Can I Get a Fresh Set of Towels? (Completed Chapter 5 of Episode 2.); No Respect for the Dead (Completed Episode 2: \"Smoke and Mirrors\"); Apprentice Librarian (Unlocked all Book of Fables entries in Episode 2.)."
            ]
        },
        {
            "heading": "Episodes 3-4: A Crooked Mile & In Sheep’s Clothing",
            "body": [
                "Completing all five chapters of Episode 3 and Episode 4, completing each episode (\"A Crooked Mile\" and \"In Sheep's Clothing\"), and unlocking all Book of Fables entries in each (Journeyman and Master Librarian).",
                "The achievements here: Promising Leads (Completed Chapter 1 of Episode 3.); Belly Full of Stones (Completed Chapter 2 of Episode 3.); What Big Eyes You Have (Completed Chapter 3 of Episode 3.); Huff and Puff (Completed Chapter 4 of Episode 3.); Severe Case of Lycanthropy (Completed Chapter 5 of Episode 3.); The Enchanted Land of New York City (Completed Episode 3: \"A Crooked Mile\");  Journeyman Librarian (Unlocked all Book of Fables entries in Episode 3.); Once Upon a Time (Completed Chapter 1 of Episode 4.); There Was a Wolf (Completed Chapter 2 of Episode 4.); Who Ruled The Land (Completed Chapter 3 of Episode 4.); He Was Much Feared (Completed Chapter 4 of Episode 4.); But Soon He Mended His Evil Ways (Completed Chapter 5 of Episode 4.); And All Were Happy (Completed Episode 4: \"In Sheep's Clothing\"); Master Librarian (Unlocked all Book of Fables entries in Episode 4.)."
            ]
        },
        {
            "heading": "Episode 5: Cry Wolf",
            "body": [
                "Completing all five chapters of Episode 5, completing the episode (\"Cry Wolf\"), and unlocking all its Book of Fables entries (Grand Master Librarian).",
                "The achievements here: Beginning of the End (Completed Chapter 1 of Episode 5.); This House of Straw (Completed Chapter 2 of Episode 5.); A Silver Bullet (Completed Chapter 3 of Episode 5.); My Last Cigarette (Completed Chapter 4 of Episode 5.); The North Wind Blows (Completed Chapter 5 of Episode 5.); Happily Ever After (Completed Episode 5: \"Cry Wolf\"); Grand Master Librarian (Unlocked all Book of Fables entries in Episode 5.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all five episodes through once, making the choices you want.",
                "2. Whenever the game highlights a person or object as examinable, inspect it - this fills the Book of Fables.",
                "3. Watch for the \"[rank] Librarian\" achievement at the end of each episode.",
                "4. If one does not unlock, replay that episode from the menu with a Book of Fables entry list and inspect the missing subjects.",
                "5. The chapter and episode completions cannot be missed - they unlock as you play.",
                "Tip: the missable Book of Fables entries are usually optional environmental objects during quiet exploration segments, not the main characters - slow down in the crime-scene and apartment scenes and click everything before you trigger the next dialogue."
            ]
        }
    ]
};
