// Game of Thrones (Telltale) Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/game-of-thrones-telltale.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   330840 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "game-of-thrones-telltale-achievement-guide",
    "category": "game",
    "gameSlug": "game-of-thrones-telltale",
    "icon": "👑",
    "title": "Game of Thrones (Telltale) Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Game of Thrones (Telltale) - none are hidden. Covers the chapter- and episode-completion achievements across all six episodes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Game of Thrones - A Telltale Games Series has 48 Steam achievements and none of them are hidden. Every one is a progress achievement - complete each of the seven chapters of each of the six episodes, and complete each episode (which grant the ascending titles Squire, Knight, Master of Arms, Castellan, Grand Maester, Sentinel). There are no choice-locked, collectible or difficulty achievements.",
                "Nothing is missable and nothing branches for achievement purposes - your choices change which House Forrester members live or die and how scenes play out, but every achievement unlocks by finishing each chapter. A single blind playthrough earns all 48.",
                "Tip: play the whole six-episode season once at your own pace - there is nothing to optimise or replay, so make the choices you want and the achievements arrive on their own."
            ]
        },
        {
            "heading": "Episodes 1-2: Iron From Ice & The Lost Lords",
            "body": [
                "Completing all seven chapters of Episode 1 and Episode 2 and each episode (Squire and Knight).",
                "The achievements here: Through the Night (Complete Chapter 1 of Episode 1); Justice or Mercy? (Complete Chapter 2 of Episode 1); A Long Road Ahead (Complete Chapter 3 of Episode 1); Defiance or Diplomacy? (Complete Chapter 4 of Episode 1); A Lord's Judgement (Complete Chapter 5 of Episode 1); A Lord's Depute (Complete Chapter 6 of Episode 1); A Lord's Reception (Complete Chapter 7 of Episode 1); Squire (Complete Episode 1); A Ransom's Reward (Complete Chapter 1 of Episode 2); Fight for Life (Complete Chapter 2 of Episode 2); Unfamiliar Faces (Complete Chapter 3 of Episode 2); Strength of Mind (Complete Chapter 4 of Episode 2); The Pressures of Family (Complete Chapter 5 of Episode 2); Love and Hostility (Complete Chapter 6 of Episode 2); Initiation Completed (Complete Chapter 7 of Episode 2); Knight (Complete Episode 2)."
            ]
        },
        {
            "heading": "Episodes 3-4: The Sword in the Darkness & Sons of Winter",
            "body": [
                "Completing all seven chapters of Episode 3 and Episode 4 and each episode (Master of Arms and Castellan).",
                "The achievements here: Storied Sights (Complete Chapter 1 of Episode 3); Brothers (Complete Chapter 2 of Episode 3); Garrisons (Complete Chapter 3 of Episode 3); Rendezvous (Complete Chapter 4 of Episode 3); Relief for the Parched (Complete Chapter 5 of Episode 3); Intentions Known (Complete Chapter 6 of Episode 3); Your Grace (Complete Chapter 7 of Episode 3); Master of Arms (Complete Episode 3); The Old, the True, the Brave (Complete Chapter 1 of Episode 4); None so Wise (Complete Chapter 2 of Episode 4); Pride and Purpose (Complete Chapter 3 of Episode 4); Honed and Ready (Complete Chapter 4 of Episode 4); Ever Vigilant (Complete Chapter 5 of Episode 4); Righteous in Wrath (Complete Chapter 6 of Episode 4); The Sun of Winter (Complete Chapter 7 of Episode 4); Castellan (Complete Episode 4.)."
            ]
        },
        {
            "heading": "Episodes 5-6: A Nest of Vipers & The Ice Dragon",
            "body": [
                "Completing all seven chapters of Episode 5 and Episode 6 and each episode (Grand Maester and Sentinel).",
                "The achievements here: Set Down Our Deeds (Complete Chapter 1 of Episode 5); Here We Stand (Complete Chapter 2 of Episode 5); We Light the Way (Complete Chapter 3 of Episode 5); We Do Not Sow (Complete Chapter 4 of Episode 5); As High as Honor (Complete Chapter 5 of Episode 5); Unbowed, Unbent, Unbroken (Complete Chapter 6 of Episode 5); Family, Duty, Honor (Complete Chapter 7 of Episode 5); Grand Maester (Complete Episode 5); Ours is the Fury (Complete Chapter 1 of Episode 6); Our Blades are Sharp (Complete Chapter 2 of Episode 6); Growing Strong (Complete Chapter 3 of Episode 6); Hear Me Roar! (Complete Chapter 4 of Episode 6); Fire and Blood (Complete Chapter 5 of Episode 6); Winter is Coming (Complete Chapter 6 of Episode 6); Iron from Ice (Complete Chapter 7 of Episode 6); Sentinel (Complete Episode 6)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Episode 1 through to the end - every chapter completion and the episode completion (Squire) unlock as you go.",
                "2. Continue straight through Episodes 2 to 6 the same way, collecting the ascending title achievements.",
                "3. There is nothing else to do - no collectibles, choices or difficulty achievements exist.",
                "4. If a chapter-completion achievement somehow does not unlock, replay that chapter from the episode/chapter select menu.",
                "5. Make whatever story choices you like; they do not affect the achievement list.",
                "Tip: rely on the autosave and do not copy save files between slots or machines - that is the only thing known to skip a chapter-completion achievement in Telltale's series."
            ]
        }
    ]
};
