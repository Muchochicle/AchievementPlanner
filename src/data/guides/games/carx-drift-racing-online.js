// CarX Drift Racing Online Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/carx-drift-racing-online.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   635260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "carx-drift-racing-online-achievement-guide",
    "category": "game",
    "gameSlug": "carx-drift-racing-online",
    "icon": "🚗",
    "title": "CarX Drift Racing Online Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in CarX Drift Racing Online - none are hidden. Covers the tutorials and account-level progression, the multiplayer race-win milestones, and the per-event and per-car Drift Point challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "CarX Drift Racing Online has 36 Steam achievements and none of them are hidden. They cover the tutorials, account-level milestones (level 15, 25, max), multiplayer race wins (25 / 150 / 1000, plus beating five friends), and a large block of Drift Point challenges - earning a target DP score in each of the game's events (Fast Entry, Fast Transition, Awesome Angle, Drawn-out Drift, Pure Drift, Backward, Clipping Zone, Clipping Point) and on specific tracks and cars (1,000,000 on Castle Road, 500,000 on a Voodoo or Hornet GT), plus buying body kits and winning Castle Road duels and competitions.",
                "Nothing is missable - every counter is cumulative and every event and track stays available. The longest is \"Wolf Amid Sheep\" (win 1000 multiplayer races); the DP challenges are skill-gated but retryable.",
                "Tip: tune a dedicated high-angle drift build and learn one long, technical track - most of the per-event DP targets are reachable in a single clean run once your car and line are dialled in."
            ]
        },
        {
            "heading": "Tutorials & Progression",
            "body": [
                "The game's tutorials, account-level milestones (level 15, 25 and max), and the early progression achievements.",
                "The achievements here: Newcomer (Drive 1500 kilometers); Pilgrim (Drive 2500 kilometers); Traveler (Drive 4000 kilometers); #Drift4life (Drift 150 km); ...Drifting? No, Never Heard of It (Drift 300 km); DP-Man (Earn 25,000 drift points); On the Path to Glory (Earn 50,000 drift points); Master of Drift (Earn 75,000 drift points); DriftKing (Earn 100,000 drift points); Prizewinner (Earn a bronze cup in single-player); Half a Step to Victory (Earn a silver cup in single-player); Gold (Earn a gold cup in single-player); #Winner (Earn a gold cup 50 times in single-player); #OnwardToVictory (Get a gold cup on each track in single-player); Pioneer (Reach level 10); On the Rise (Reach level 15); No Limits (Reach level 25); Champion (Reach the maximum level in the game)."
            ]
        },
        {
            "heading": "Multiplayer & Drift Events",
            "body": [
                "Winning 25 / 150 / 1000 multiplayer races and beating five friends, the per-event Drift Point targets (Fast Entry, Fast Transition, Awesome Angle, Drawn-out Drift, Pure Drift, Backward, Clipping Zone, Clipping Point), buying body kits, and the Castle Road / Voodoo / Hornet GT DP and duel challenges.",
                "The achievements here: Eat Dust Gringo (Win 25 multiplayer races); Did You See That? (Win 150 multiplayer races); Nothing Personal (Beat 5 friends in multiplayer races); Wolf Amid Sheep (Win 1000 multiplayer races); Entry Master (Earn 150000 DP in the Fast Entry event); Transition Master (Earn 150000 DP in the Fast Transition event); Awesome angle (Earn 200000 DP in the Awesome angle event); Drawn-out Drift (Earn 500000 DP in the Drawn-out Drift event); Masterful Race (Earn 350000 DP in the Pure Drift event); Backward (Earn 500000 DP in the Backward event); Clipping Zone Master (Earn 650000 DP in the Clipping Zone event); Clipping Point Master (Earn 650000 DP in the Clipping Point event); Stylish drift (Buy any body kit on 5 different cars); Winter Drift (Earn 1,000,000 Drift Points on Castle Road); And the weather is not an obstacle... (Win in 5 duels at Castle Road); Voodoo (Earn 500,000 Drift Points on a Voodoo); Drift guardian (Earn 500,000 Drift Points on a Hornet GT); Quantity and quality (Win in any 20 competition at Castle Road)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do all the tutorials and play enough to climb to account level 15, then 25.",
                "2. Build a high-angle drift car and learn one long technical track.",
                "3. Grind each event's Drift Point target one at a time - retry until you get a clean full run.",
                "4. Do the Castle Road, Voodoo and Hornet GT specific DP and duel challenges.",
                "5. Keep playing multiplayer toward 1000 race wins and max account level.",
                "Tip: the big single-run DP targets (500,000-1,000,000) reward long, unbroken drift chains - pick the longest track, keep the throttle modulated to hold angle through every corner, and do not straighten out between sections."
            ]
        }
    ]
};
