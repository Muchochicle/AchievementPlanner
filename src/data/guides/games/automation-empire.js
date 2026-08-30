// Automation Empire Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/automation-empire.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1112790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "automation-empire-achievement-guide",
    "category": "game",
    "gameSlug": "automation-empire",
    "icon": "🏭",
    "title": "Automation Empire Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Automation Empire - none are hidden. Covers completing every scenario without easy mode, and earning every scenario's medallion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Automation Empire has 28 Steam achievements and none are hidden. The entire list is two parallel 14-step ladders across the game's 14 scenarios: one tier for completing each successive scenario without Easy mode enabled, and a second tier for earning each successive scenario's medallion (the game's in-scenario performance-bonus objective) without Easy mode.",
                "Nothing is missable - both ladders are cumulative counts that only go up as you clear more scenarios and medallions, and any scenario can be replayed to pick up a medallion you missed on your first clear. The two ladders do not need to be earned together in the same playthrough of a scenario, so a first pass focused purely on completion and a later cleanup pass for medallions both count.",
                "Tip: play scenarios in order and do not skip Easy mode \"to save time\" - since every tier of both ladders explicitly requires non-Easy difficulty, an Easy-mode clear does not advance either achievement track at all, so it is faster overall to just play at normal difficulty from the start."
            ]
        },
        {
            "heading": "Scenario Completions",
            "body": [
                "Completing 1 through 14 scenarios without Easy mode, finishing with Ultimate Automation Master for clearing all 14.",
                "The achievements here: Automation Master 1 (Complete 1 scenario without easy mode); Automation Master 2 (Complete 2 scenarios without easy mode); Automation Master 3 (Complete 3 scenarios without easy mode); Automation Master 4 (Complete 4 scenarios without easy mode); Automation Master 5 (Complete 5 scenarios without easy mode); Automation Master 6 (Complete 6 scenarios without easy mode); Automation Master 7 (Complete 7 scenarios without easy mode); Automation Master 8 (Complete 8 scenarios without easy mode); Automation Master 9 (Complete 9 scenarios without easy mode); Automation Master 10 (Complete 10 scenarios without easy mode); Automation Master 11 (Complete 11 scenarios without easy mode); Automation Master 12 (Complete 12 scenarios without easy mode); Automation Master 13 (Complete 13 scenarios without easy mode); Ultimate Automation Master (Complete 14 scenarios without easy mode)."
            ]
        },
        {
            "heading": "Medallions",
            "body": [
                "Earning 1 through 14 medallions without Easy mode, finishing with Ultimate Medallion Master for earning all 14.",
                "The achievements here: Medallion 1 (Earn 1 medallion without easy mode); Medallion 2 (Earn 2 medallions without easy mode); Medallion 3 (Earn 3 medallions without easy mode); Medallion 4 (Earn 4 medallions without easy mode); Medallion 5 (Earn 5 medallions without easy mode); Medallion 6 (Earn 6 medallions without easy mode); Medallion 7 (Earn 7 medallions without easy mode); Medallion 8 (Earn 8 medallions without easy mode); Medallion 9 (Earn 9 medallions without easy mode); Medallion 10 (Earn 10 medallions without easy mode); Medallion 11 (Earn 11 medallions without easy mode); Medallion 12 (Earn 12 medallions without easy mode); Medallion 13 (Earn 13 medallions without easy mode); Ultimate Medallion Master (Earn 14 medallions without easy mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the 14 scenarios in order on normal (non-Easy) difficulty, clearing each one to advance the Automation Master ladder.",
                "2. On a first pass or a cleanup replay, aim for each scenario's medallion objective specifically to advance the Medallion ladder.",
                "3. Continue through all 14 scenarios for both ladders, finishing with Ultimate Automation Master (all 14 scenarios cleared) and Ultimate Medallion Master (all 14 medallions earned).",
                "Tip: if a scenario's medallion condition is demanding, clear the scenario normally first to unlock the next one, then come back and replay it once you understand the scenario's layout and constraints well enough to optimize for the medallion."
            ]
        }
    ]
};
