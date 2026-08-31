// Order of Battle: World War II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/order-of-battle-world-war-ii.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   312450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "order-of-battle-world-war-ii-achievement-guide",
    "category": "game",
    "gameSlug": "order-of-battle-world-war-ii",
    "icon": "🎖",
    "title": "Order of Battle: World War II Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Order of Battle: World War II - none are hidden. Covers the campaign completions and battlefield feats, the Bronze/Silver/Gold single-unit kill medals, the elite-unit experience-star achievements for every class, and the scenario-editor and miscellany goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Order of Battle: World War II has 38 Steam achievements and none of them are hidden. Four are campaign completions (Japanese, US, tutorial, and a no-losses tutorial on Difficulty III+). A block of feats covers accumulating specific core units with kills, a 1000-Resource-Point reserve, and an advance-move capture. The Bronze/Silver/Gold kill medals ask a single unit to destroy 5 / 10 / 15 tanks, infantry, aircraft or ships in one campaign game. The elite achievements want 5 experience stars on a unit of every class (infantry, recon, tank, anti-tank, artillery, anti-air, fighter, tactical bomber, strategic bomber, destroyer, cruiser, battleship, submarine). The rest are the Banzai Charge, Purple Heart, Ghost Ship and scenario-editor achievements.",
                "Nothing is missable - campaigns and scenarios replay freely and every counter is per-campaign-game or cumulative. The Difficulty III+ requirement on several achievements is the main constraint.",
                "Tip: play a long campaign game on Difficulty III, keep your best units alive and feed them kills, and re-buy replacements rather than fresh units - the elite-star and kill-medal achievements all reward a small core of veteran units, not a big fresh army."
            ]
        },
        {
            "heading": "Campaigns & Battlefield Feats",
            "body": [
                "Completing the Japanese, US and tutorial campaigns, the no-losses tutorial on Difficulty III+, an advance-move Victory Point capture, the Yamato / tank / Marine core-count feats, and a 1000-Resource-Point reserve.",
                "The achievements here: Hero of the Rising Sun (Complete the Japanese campaign.); Pax Americana (Complete the US campaign.); Graduated for War (Complete the tutorial campaign.); Summa Cum Laude (Complete the tutorial campaign without losing any unit. Difficulty level III or higher.); Taken by Force (Capture a Victory Point with an advance move.); Imperial Trinity (Accumulate 3 Yamato class battleships during a campaign game, each with at least 2 kills. Difficulty level III or higher.);  Tank Specialist ( Accumulate 8 tank class units during a campaign game, each with at least 2 kills. Difficulty level III or higher.); Semper Fi (Accumulate 5 US Marines during a campaign game, each with at least 2 kills. Difficulty level III or higher.); Hoarder (Accumulate a reserve of 1000 Resource Points in a campaign game.)."
            ]
        },
        {
            "heading": "Kill Medals (Bronze/Silver/Gold)",
            "body": [
                "A single unit destroying 5 / 10 / 15 of each target type in one campaign game - tanks (Tank Buster), infantry (Grim Reaper), aircraft (Air Ace) and ships (Naval Legend).",
                "The achievements here: Tank Buster Bronze (Destroy 5 tanks with a single unit in a campaign game.); Tank Buster Silver (Destroy 10 tanks with a single unit in a campaign game.); Tank Buster Gold (Destroy 15 tanks with a single unit in a campaign game.); Grim Reaper Bronze (Destroy 5 infantry units with a single unit in a campaign game.); Grim Reaper Silver (Destroy 10 infantry units with a single unit in a campaign game.); Grim Reaper Gold (Destroy 15 infantry units with a single unit in a campaign game.); Air Ace Bronze (Destroy 5 aircraft with a single unit in a campaign game.); Air Ace Silver (Destroy 10 aircraft with a single unit in a campaign game.); Air Ace Gold (Destroy 15 aircraft with a single unit in a campaign game.); Naval Legend Bronze (Destroy 5 ships with a single unit in a campaign game.); Naval Legend Silver (Destroy 10 ships with a single unit in a campaign game.); Naval Legend Gold (Destroy 15 ships with a single unit in a campaign game.)."
            ]
        },
        {
            "heading": "Elite Units & Miscellany",
            "body": [
                "Gaining 5 experience stars on a unit of every class - infantry, recon, tank, anti-tank, artillery, anti-air, fighter, tactical bomber, strategic bomber, destroyer, cruiser, battleship, submarine - plus the Ghost Ship reform feat, a Banzai Charge kill, a 100-damage Purple Heart, and launching a custom scenario in the editor.",
                "The achievements here: Elite infantry (Gain 5 experience stars on an Infantry class unit during a campaign game); Elite Recon (Gain 5 experience stars on a Reconaissance class unit during a campaign game); Elite Tank (Gain 5 experience stars on a Tank class unit during a campaign game); Elite Anti-Tank (Gain 5 experience stars on an Anit-Tank class unit during a campaign game); Elite Artillery (Gain 5 experience stars on an Artillery class unit during a campaign game); Elite Anti-Air (Gain 5 experience stars on an Anti-Air class unit during a campaign game); Elite Fighter (Gain 5 experience stars on a Fighter class unit during a campaign game); Elite Tactical Bomber (Gain 5 experience stars on a Tactical Bomber class unit during a campaign game); Elite Strategic Bomber (Gain 5 experience stars on a Strategic Bomber class unit during a campaign game); Elite Destroyer (Gain 5 experience stars on a Destroyer class unit during a campaign game); Elite Cruiser (Gain 5 experience stars on a Cruiser class unit during a campaign game); Elite Battleship (Gain 5 experience stars on a Battleship class unit during a campaign game); Elite Submarine (Gain 5 experience stars on a Submarine class unit during a campaign game); Ghost Ship (Reform a single naval unit 5 times during a campaign game.); Order of the Rising Sun (Use the Banzai Charge ability to destroy an enemy unit, dealing at least 5 points of damage.); Purple Heart (Accumulate over 100 points of damage taken on a single land unit during a campaign game.); Architect of War (Using the scenario editor, launch a custom scenario with as least 2 units for each player.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the tutorial campaign (also do the no-losses run on Difficulty III+), then the US and Japanese campaigns.",
                "2. In a long campaign game on Difficulty III, nurse one strong unit of each ground and air type to 5 experience stars.",
                "3. Feed a single powerful unit kills of each target type for the Bronze/Silver/Gold medals.",
                "4. Do a naval-heavy campaign game for the ship elite stars, the Ghost Ship reform and Naval Legend medals.",
                "5. Use the scenario editor to launch a small custom scenario for \"Architect of War\".",
                "Tip: the Gold kill medals (15 kills with one unit) are far easier for aircraft and artillery, which can rack up kills without taking losses - park a maxed fighter or howitzer in a target-rich late-campaign mission."
            ]
        }
    ]
};
