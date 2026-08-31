// Patrick's Parabox Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/patricks-parabox.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1260520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "patricks-parabox-achievement-guide",
    "category": "game",
    "gameSlug": "patricks-parabox",
    "icon": "📦",
    "title": "Patrick's Parabox Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Patrick's Parabox (5 hidden). Covers the mechanic discoveries and the side-puzzle sets and completion. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Patrick's Parabox has 22 Steam achievements and five are Steam-hidden (each tied to reaching a specific mechanic-introduction puzzle: Clone 1, Flip 3, Clone 6, Player 18, Wall 1). The open seventeen are mechanic discoveries ('Recurse', 'Cycle', 'Infinity', 'Epsilon', 'Paradox paradox'), solving a red challenge puzzle and a blue side puzzle, completing each named side-puzzle set (Even, Oblong, Friend, One), reaching the end, the appendix area, and the completion goals (all puzzles in 4 areas, 200 puzzles, and 'Perfect Parabox' for every puzzle).",
                "The catalog marks it difficulty 4. The main puzzle path is doable; 'Perfect Parabox' (every puzzle including the hard red challenge puzzles) is a serious commitment.",
                "Tip: play through the whole game, then go back for every side and challenge puzzle toward 200 solved and 'Perfect Parabox'."
            ]
        },
        {
            "heading": "Mechanics & Discoveries",
            "body": [
                "Experiencing recursion, using the hub area select, solving a red challenge and a blue side puzzle, the Steam-hidden mechanic puzzles (Clone 1, Flip 3, Clone 6, Player 18, Wall 1), causing a cycle, and causing a paradox, another paradox and a chain of paradoxes.",
                "The achievements here: Recurse (Experience recursion); Level select select (Use the area select in the hub); Challenge puzzle (Solve a red challenge puzzle); Side puzzle (Solve a blue side puzzle); Double (Reach the puzzle 'Clone 1' - the first puzzle in the box-cloning area.); Inverse (Reach the puzzle 'Flip 3' in the flip-mechanic area.); Push against yourself (Reach the puzzle 'Clone 6' in the box-cloning area.); Cycle (Cause a cycle); Oh dear (Reach the puzzle 'Player 18'.); Solid (Reach the puzzle 'Wall 1' - the first puzzle in the solid-box area.); Infinity (Cause a paradox); Epsilon (Cause another paradox); Paradox paradox (Cause a chain of paradoxes)."
            ]
        },
        {
            "heading": "Side Puzzle Sets & Completion",
            "body": [
                "Solving the Even, Oblong, Friend and One side-puzzle sets, reaching the end ('Bottom of the rabbit hole'), solving all non-challenge appendix puzzles, all puzzles in 4 different areas, 200 puzzles, and every puzzle ('Perfect Parabox').",
                "The achievements here: Even (Solve the Even side puzzles); Oblong (Solve the Oblong side puzzles); Friend (Solve the Friend side puzzles); One (Solve the One side puzzles); Bottom of the rabbit hole (Reach the end); Alternate universes (Solve all non-challenge puzzles in the appendix area); Tidy (Solve all puzzles in 4 different areas); 200 solved (Solve 200 puzzles); Perfect Parabox (Solve all puzzles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main puzzle path - the mechanic-discovery achievements and the hidden 'reach puzzle X' achievements unlock as you go.",
                "2. Deliberately cause the paradox chain ('Infinity', 'Epsilon', 'Paradox paradox') if it hasn't happened naturally.",
                "3. Solve every side-puzzle set (Even, Oblong, Friend, One) and the appendix area.",
                "4. Go back for every red challenge puzzle toward 200 solved.",
                "5. 'Perfect Parabox' unlocks once every puzzle in the game is solved.",
                "Tip: the red challenge puzzles are much harder than the main path - leave them for last and use a walkthrough for the ones that stump you; the achievement doesn't care how you solved them."
            ]
        }
    ]
};
