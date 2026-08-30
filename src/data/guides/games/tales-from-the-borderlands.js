// Tales from the Borderlands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tales-from-the-borderlands.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   330830 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tales-from-the-borderlands-achievement-guide",
    "category": "game",
    "gameSlug": "tales-from-the-borderlands",
    "icon": "🤖",
    "title": "Tales from the Borderlands Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Tales from the Borderlands - none are hidden. Covers the chapter- and episode-completion achievements across all five episodes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tales from the Borderlands has 35 Steam achievements and none of them are hidden. Every one is a progress achievement - complete each chapter of each of the five episodes (six chapters per episode), and complete each episode. There are no choice-locked, collectible or difficulty achievements at all.",
                "Nothing is missable and nothing branches for achievement purposes - your choices change the story and some scenes, but every achievement unlocks simply by playing through to the end of each chapter. A single blind playthrough earns all 35.",
                "Tip: just play the whole season once at your own pace - there is nothing to collect, optimise or replay, so make the choices you want and the achievements arrive on their own."
            ]
        },
        {
            "heading": "Episodes 1-2: Zer0 Sum & Atlas Mugged",
            "body": [
                "Completing all six chapters of Episode 1 and Episode 2, and completing each episode (Devil on Your Shoulder and Miracle of Atlas Engineering).",
                "The achievements here: Welcome to Pandora, Kiddos (Completed Chapter 1 of Episode 1); My Turn To Speak (Completed Chapter 2 of Episode 1); Partners In Crime (Completed Chapter 3 of Episode 1); Not Alone in the Dark (Completed Chapter 4 of Episode 1); 2 Fast 2 Fiona (Completed Chapter 5 of Episode 1); Blood Money (Completed Chapter 6 of Episode 1); Devil on Your Shoulder (Completed Episode 1); Deal With A Ghost (Completed Chapter 1 of Episode 2); Till Death Do Us Part (Completed Chapter 2 of Episode 2); A Plan Came Together (Completed Chapter 3 of Episode 2); Funeral Crashers (Completed Chapter 4 of Episode 2); Classic Reflexes (Completed Chapter 5 of Episode 2); Bro or Bot (Completed Chapter 6 of Episode 2); Miracle of Atlas Engineering (Completed Episode 2)."
            ]
        },
        {
            "heading": "Episodes 3-4: Catch a Ride & Escape Plan Bravo",
            "body": [
                "Completing all six chapters of Episode 3 and Episode 4, and completing each episode (Angry Eyes and …There You Are).",
                "The achievements here: Don't Make Me Wait (Completed Chapter 1 of Episode 3); Temptation (Completed Chapter 2 of Episode 3); Point Of No Return (Completed Chapter 3 of Episode 3); So Many Bandits, So Little Time (Completed Chapter 4 of Episode 3); Rupture (Completed Chapter 5 of Episode 3); Maneater (Completed Chapter 6 of Episode 3); Angry Eyes (Completed Episode 3); Ain't Got Time To Bleed (Completed Chapter 1 of Episode 4); Alive And Not Afraid (Completed Chapter 2 of Episode 4); Ain't My First Rodeo (Completed Chapter 3 of Episode 4); It's Not The Years, It's The Mileage (Completed Chapter 4 of Episode 4); Light This Candle (Completed Chapter 5 of Episode 4); No Matter Where You Go… (Completed Chapter 6 of Episode 4); …There You Are (Completed Episode 4)."
            ]
        },
        {
            "heading": "Episode 5: The Vault of the Traveler",
            "body": [
                "Completing all six chapters of Episode 5 and completing the episode (Tales Twice Told).",
                "The achievements here: A Maze Of Twisty Passages, All Alike (Completed Chapter 1 of Episode 5); Unforseen Consequences (Completed Chapter 2 of Episode 5); Give And Take (Mostly Take) (Completed Chapter 3 of Episode 5); Definition Of Insanity (Completed Chapter 4 of Episode 5); Time's A Wastin' (Completed Chapter 5 of Episode 5); What's It Worth? (Completed Chapter 6 of Episode 5); Tales Twice Told (Completed Episode 5)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Episode 1 through to the end - every chapter completion and the episode completion unlock as you go.",
                "2. Continue straight through Episodes 2, 3, 4 and 5 the same way.",
                "3. There is nothing else to do - no collectibles, choices or difficulty achievements exist.",
                "4. If a chapter-completion achievement somehow does not unlock, replay that chapter from the episode/chapter select menu.",
                "5. Make whatever story choices you like; they do not affect the achievement list.",
                "Tip: play with the autosave alone and do not copy save files between slots or machines - that is the only thing that has been known to skip a chapter-completion achievement in Telltale's Season titles."
            ]
        }
    ]
};
