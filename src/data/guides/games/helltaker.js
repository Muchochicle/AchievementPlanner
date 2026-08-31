// Helltaker Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/helltaker.json), whose 10 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1289310 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "helltaker-achievement-guide",
    "category": "game",
    "gameSlug": "helltaker",
    "icon": "😈",
    "title": "Helltaker Achievement Guide",
    "summary": "A practical guide to all 10 Steam achievements in Helltaker (2 hidden). Covers the story endings and levels, and the Examtaker bonus chapter. Two achievements ('Puzzletaker' and 'Battletaker') are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Helltaker has 10 Steam achievements and two are Steam-hidden (both in the bonus Examtaker chapter). Eight are the base game: three ending-style achievements (romance a demon, 'find some peace', 'abandon your quest'), and five progress markers through the ten sokoban levels ('Survive the audience', 'Reach the gate', 'Face your sins', 'Disregard the key', 'Make the steps'). The two hidden ones are completing the Examtaker quiz chapter and its boss without using Skip Puzzle.",
                "The catalog marks it difficulty 3. The base game is a short, gentle puzzle game; the difficulty is entirely in the Examtaker chapter, whose quiz phases and boss fight must be beaten legitimately for the hidden achievements.",
                "Tip: play the ten base levels (most base achievements come naturally), then do the Examtaker chapter from Chapter Select without ever pressing Skip Puzzle."
            ]
        },
        {
            "heading": "Story Endings & Levels",
            "body": [
                "Romancing a demon ('Doomtaker'), 'find some peace' ('Lifetaker'), 'abandon your quest' ('Heaventaker'), and the level markers 'Queentaker', 'Gatetaker', 'Sintaker', 'Pathtaker' and 'Abysstaker'.",
                "The achievements here: Doomtaker (Romance a demon); Lifetaker (Find some peace); Heaventaker (Abandon your quest); Queentaker (Survive the audience); Gatetaker (Reach the gate); Sintaker (Face your sins); Pathtaker (Disregard the key); Abysstaker (Make the steps)."
            ]
        },
        {
            "heading": "Examtaker Bonus Chapter",
            "body": [
                "The two Steam-hidden achievements: completing every Examtaker quiz phase without skipping ('Puzzletaker') and beating the Examtaker boss without skipping ('Battletaker').",
                "The achievements here: Puzzletaker (In the bonus Examtaker chapter (Chapter Select -> EX), complete every quiz phase without using 'Skip Puzzle'.); Battletaker (Complete the Examtaker boss fight (High Prophet Azazel) without skipping.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the ten base sokoban levels - 'Queentaker' through 'Abysstaker' unlock as you progress.",
                "2. Reach the demon at the end and choose the romance option ('Doomtaker'); the other two ending achievements come from the alternative choices.",
                "3. From Chapter Select, play the Examtaker chapter.",
                "4. Answer every quiz phase yourself - never use 'Skip Puzzle' - for 'Puzzletaker'.",
                "5. Beat the Examtaker boss legitimately for 'Battletaker'.",
                "Tip: using god mode or skipping any Examtaker phase permanently locks 'Puzzletaker' and 'Battletaker' for that attempt - restart the chapter clean if you skip by accident."
            ]
        }
    ]
};
