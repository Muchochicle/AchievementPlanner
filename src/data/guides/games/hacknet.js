// Hacknet Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hacknet.json), whose 11 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   365450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "hacknet-achievement-guide",
    "category": "game",
    "gameSlug": "hacknet",
    "icon": "💻",
    "title": "Hacknet Achievement Guide",
    "summary": "A practical guide to all 11 Steam achievements in Hacknet - none are hidden. Covers the story and progression achievements, and the secret and one-off feat achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Hacknet has 11 Steam achievements and none are hidden. Six follow the story - a fast tutorial, a rude response, completing Bit's final request, being granted CSEC and Entropy accounts, and the final PointClicker upgrade. The other five are secrets and feats: an absurd number of PointClicker points, running Clock.exe and ThemeSwitcher, disconnecting from a traced system with under half a second to spare, and mastering the /el secret community path.",
                "The catalog marks it missable and a single playthrough - the CSEC and Entropy account branches and the /el secret path can lock out if you progress past them, so a guide is worth having. The game is short.",
                "Tip: get the CSEC and Entropy account achievements before the story forces you down one route, and start idling PointClicker early so 'You better not have clicked for those...' finishes by the credits."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "Completing the tutorial quickly, giving a rude response, completing Bit's final request, being granted a CSEC and an Entropy account, and purchasing the final PointClicker upgrade.",
                "The achievements here: Quickdraw (Complete the tutorial earlier than normal); Rude (That's just impolite); Hacknet (Complete Bit's final request); CSEC (Be granted an account within CSEC); Entropy (Be granted an account within Entropy); PointClicker (Purchase the final PointClicker upgrade)."
            ]
        },
        {
            "heading": "Secrets & Feats",
            "body": [
                "Accumulating an absurd number of PointClicker points, running Clock.exe and ThemeSwitcher, disconnecting from a traced system with under half a second to spare, and mastering the /el secret community path.",
                "The achievements here: You better not have clicked for those... (Have a truly absurd number of pointclicker points); TRUE ULTIMATE POWER (Run Clock.exe); Makeover! (Run ThemeSwitcher); To the Wire (Disconnect from a traced system with less than half a second to spare); /el Sec Champion (Master of /el's friendly community)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial quickly for 'Quickdraw', and give a rude response early.",
                "2. Get the CSEC and Entropy account achievements before the story locks a route.",
                "3. Start the PointClicker idle game and let it run in the background toward both PointClicker achievements.",
                "4. Follow a guide for the /el secret community path for '/el Sec Champion'.",
                "5. Finish Bit's final request, and run Clock.exe and ThemeSwitcher.",
                "Tip: 'To the Wire' (disconnect with under half a second left on a trace) is easiest on a system you've already mapped - queue the disconnect command and fire it the instant the trace bar fills."
            ]
        }
    ]
};
