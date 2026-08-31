// Circuit Superstars Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/circuit-superstars.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1097130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "circuit-superstars-achievement-guide",
    "category": "game",
    "gameSlug": "circuit-superstars",
    "icon": "🏎️",
    "title": "Circuit Superstars Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Circuit Superstars - none are hidden. Covers the win and pole-position tiers, the championship cup wins, and the total-distance milestones. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Circuit Superstars has 33 Steam achievements and none are hidden. Sixteen are win and pole-position tiers - online wins (1/10/25), any-mode wins (10/50/100), online poles (1/10/25), any-mode poles (10/50/100), plus first race / qualifier / win / pole. Thirteen are winning each of the twelve championship cups on any difficulty (Superlights, Super Truck, 80s and 60s GP, Euro Truck, GT Supercup, Rallycross, Muscle Car, Formula GP, Piccino, Prototype, 50s GT), and 'Look at this Trophy!' for a top-3 finish. Four are total distance driven (2015 KM, 5000 KM, 10,000 KM, 50,000 KM).",
                "The catalog marks it difficulty 3. Winning every cup is a solid time investment and the online wins need active multiplayer, but nothing is especially hard; the 50,000 KM total is the longest single grind.",
                "Tip: play through every championship cup in Career (that covers most win/pole tiers and the distance), then farm online wins in lobbies."
            ]
        },
        {
            "heading": "Wins & Pole Positions",
            "body": [
                "Online wins (1, 10, 25), any-mode wins (10, 50, 100), online pole positions (1, 10, 25), any-mode pole positions (10, 50, 100), and your first race, first qualifier, first win and first pole.",
                "The achievements here: Mysterious Challenger (Win a race in Online Multiplayer.); Career Driver (Win 10 races in Online Multiplayer.); Worldwide Superstar (Win 25 races in Online Multiplayer.); Promising Amateur (Win 10 races in any mode.); A True Pro (Win 50 races in any mode.); Circuit Superstar (Win 100 races in any mode.); First Time Leader (Get Pole Position for 1 Online race.); Seasoned Leader (Get Pole Position for 10 Online races.); Leader of the Pack (Get Pole Position for 25 Online races.); Paving the Way (Get Pole Position for 10 races in any game mode.); Fast like Lightning  (Get Pole Position for 50 races in any game mode.); Speed Superstar (Get Pole Position for 100 races in any game mode.); The Journey Begins (Complete your first race in any game mode.); The Learner's Path (Finish a Qualifier in any game mode. ); Make Donuts for the Fans (Win a race in any game mode.); Feel The Thrill (Score a Pole Position in any game mode. )."
            ]
        },
        {
            "heading": "Championship Cups",
            "body": [
                "A top-3 finish ('Look at this Trophy!') and winning the Superlights, Super Truck, 80s GP Legends, Euro Truck Meeting, GT Supercup, Rallycross World Series, Muscle Car Legends, 60s GP Revival, Formula GP World Series, Piccino, Prototype World Series and 50s GT Memorial cups on any difficulty.",
                "The achievements here: Look at this Trophy! (Finish on 1st, 2nd or 3rd in any game mode.); Featherweight Champion (Win the Superlights Trophy Cup on any difficulty.); Iron Racer (Win the Super Truck Challenge Cup on any difficulty.); Power and Glory (Win the 80s GP Legends Cup on any difficulty.); Heavyweight Champion (Win the Euro Truck Meeting Cup on any difficulty.); Boxer Legend (Win the GT Supercup Cup on any difficulty.); Mercurial Racer (Win the Rallycross World Series Cup on any difficulty.); Captain Oversteer (Win the Muscle Car Legends Cup on any difficulty.); Sideways Legend (Win the 60s GP Revival Cup on any difficulty.); World Champion (Win the Formula GP World Series Cup on any difficulty.); Adorable Champion (Win the Piccino Cup on any difficulty.); Endurance Legend (Win the Prototype World Series Cup on any difficulty.); Timeless Champion (Win the 50s GT Memorial Trophy on any difficulty.)."
            ]
        },
        {
            "heading": "Distance Driven",
            "body": [
                "Driving a total of 2015 KM, 5000 KM, 10,000 KM and 50,000 KM.",
                "The achievements here: From Mexico to Vancouver (Drive a total of 5000 KM.); 2015 KM (Drive a total of 2015 KM.); Go the Distance (Drive a total of 10,000 KM.); Petrolhead (Drive a total of 50,000 KM.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through every championship cup in Career on any difficulty for the twelve cup achievements.",
                "2. That run also covers 'Promising Amateur' / 'A True Pro' / 'Circuit Superstar' (win counts) and the any-mode pole tiers.",
                "3. Play online lobbies for the 1/10/25 online win and pole achievements.",
                "4. Keep racing for the distance totals - 50,000 KM is by far the longest.",
                "Tip: the any-mode win and pole counters include Career, Single Race and Time Trial, so grind them on short races against easy AI rather than in long online events."
            ]
        }
    ]
};
