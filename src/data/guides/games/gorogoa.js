// Gorogoa Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gorogoa.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   557600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gorogoa-achievement-guide",
    "category": "game",
    "gameSlug": "gorogoa",
    "icon": "🖼️",
    "title": "Gorogoa Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Gorogoa (5 hidden). Covers the chapter and completion achievements, and the challenge-run achievements. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Gorogoa has 11 Steam achievements and five are Steam-hidden. Six are open: completing each of the five chapters ('First Fruit' through 'Fifth Fruit') and finishing the game ('Devotion'). The hidden five are the 'right wrong' clock-tower time, completing the falling-rock puzzle first try, finishing in under 500 moves ('Dexterity'), finishing in under 30 minutes ('But Why?'), and completing the original 2012 demo ('Old is New').",
                "The catalog marks it difficulty 3 - the game itself is short and gentle, but 'Dexterity' and 'But Why?' need a practised run with the solutions memorised, and 'First Try' is a single-attempt puzzle.",
                "Tip: play once blind for the chapter achievements and the 'right wrong' clock, then do a memorised speed/low-move run for 'Dexterity' and 'But Why?'."
            ]
        },
        {
            "heading": "Chapters & Completion",
            "body": [
                "Completing Chapters One through Five ('First Fruit' to 'Fifth Fruit'), the Steam-hidden 'right wrong' clock-tower time and first-try falling-rock puzzle, and finishing the game ('Devotion').",
                "The achievements here: First Fruit (Complete Chapter One.); Second Fruit (Complete Chapter Two.); Third Fruit (Complete Chapter Three.); Fourth Fruit (Complete Chapter Four.); Fifth Fruit (Complete Chapter Five.); Right Wrong (Set the clock tower to the specific 'right wrong' time.); First Try (Complete the falling-rock puzzle on your first try.); Devotion (Finish the game.)."
            ]
        },
        {
            "heading": "Challenge Runs",
            "body": [
                "The three Steam-hidden challenge achievements: finishing in under 500 moves ('Dexterity'), finishing in under 30 minutes ('But Why?'), and completing the original 2012 demo ('Old is New').",
                "The achievements here: Dexterity (Complete the game in under 500 moves.); But Why? (Complete the game in under 30 minutes.); Old is New (Complete the original 2012 Gorogoa demo (available from the extras menu).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all five chapters blind for the chapter achievements and 'Devotion'.",
                "2. Get the 'right wrong' clock-tower time when you reach that puzzle, and be careful to solve the falling-rock puzzle on your first attempt ('First Try').",
                "3. Do the original 2012 demo from the extras menu ('Old is New').",
                "4. Do a memorised run for 'Dexterity' (under 500 moves) and 'But Why?' (under 30 minutes) - both can be earned in one careful, fast playthrough.",
                "Tip: 'First Try' is the only truly missable one - look up the falling-rock solution before you reach it so you don't fail the attempt."
            ]
        }
    ]
};
