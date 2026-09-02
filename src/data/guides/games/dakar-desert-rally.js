// Dakar Desert Rally Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dakar-desert-rally.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1839940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dakar-desert-rally-achievement-guide",
    "category": "game",
    "gameSlug": "dakar-desert-rally",
    "icon": "🏜️",
    "title": "Dakar Desert Rally Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Dakar Desert Rally - none are hidden. None of the 55 achievements are hidden - every description is Steam's own text. Covers rally and event wins, stage feats, the three game modes, per-class and total distance milestones, and the vehicle-collection sets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dakar Desert Rally has 55 Steam achievements and none of them are hidden. Dakar Desert Rally is an off-road racing sim covering the real Dakar Rally across five vehicle classes (bike, car, quad, truck, SxS). None of its 55 achievements are hidden. The list covers the rally and event wins, stage feats, the three game modes (Arcade, Professional, Simulation), per-class and total distance milestones, and the large vehicle-collection sets.",
                "The bulk of the list is collection - getting all vehicles from each manufacturer (Honda, KTM, Husqvarna, Toyota, Kamaz, Peugeot and more) and the Red Bull and Monster Energy sponsor sets - plus the 6,000km-per-class and 10,000km-total distance grinds.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable; the distance and collection achievements just take time, and the Simulation-mode wins are the main skill test."
            ]
        },
        {
            "heading": "Rallies & Events",
            "body": [
                "Winning every stage in each of the fictional rallies (Red Sea, Desert Wings, Train Odyssey, Xtreme) and the real 2020-2021 Dakar rallies (Al Wajh, NEOM, Al Ula, Tabuk, Yanbu), plus the multi-event and Paulo challenges.",
                "The achievements here: RED SEA Winner (Finish 1st in every stage in RED SEA RALLY); DESERT WINGS Winner (Finish 1st in every stage in DESERT WINGS RALLY); TRAIN ODYSSEY Winner (Finish 1st in every stage in TRAIN ODYSSEY RALLY); XTREME Winner (Finish 1st in every stage in XTREME RALLY); AL WAJH Winner (Finish 1st in every stage in DAKAR AL WAJH 2020); NEOM Winner (Finish 1st in every stage in DAKAR NEOM 2020); AL ULA Winner (Finish 1st in every stage in DAKAR AL ULA 2020); TABUK Winner (Finish 1st in every stage in DAKAR TABUK 2021); NEOM 2021 Winner (Finish 1st in every stage in DAKAR NEOM 2021); YANBU Winner (Finish 1st in every stage in DAKAR YANBU 2021); Full of Energy (Finish Xtreme, Desert Wings and Train Odyssey Events in First Place (Sport and Professional)); Forever Speedy (Finish first in all 2020 events playing as Paulo Gonçalves (Sport, Professional, and Simulation)); Professional Winner (Finish all stages in 1st place in Professional Game Mode); Simulation Winner (Finish all stages in 1st place in Simulation Game Mode)."
            ]
        },
        {
            "heading": "Stage Feats & Game Modes",
            "body": [
                "Qualifying, first-place and crash-free stage finishes, a no-damage event, a hat-trick of stage wins, the Simulation-mode stage feats, the navigator challenge, and finishing events in Professional and Simulation modes.",
                "The achievements here: Going Places (Finish your first stage and get qualified); First of Many (Finish a stage in first place); Careful (Finish a stage in 1st place without crashing); Clean Driving (Complete an event without taking damage); How Legends are born (Finish a stage in Simulation Game Mode); Legendary (Finish a stage in first place in Simulation Game Mode); Hat Trick (Win three consecutive stages); Stuntman (Jump for more than 3 seconds in any bike); Deja Vu (Drift for more than 5 seconds with any vehicle); Desert Autobahn (Reach 200km/h in any vehicle while driving on sand); The Navigator (Complete an entire simulation event without ever missing a waypoint); Dakar Competitor (Finish an event in Professional Game Mode); Dakar Legend (Finish an event in Simulation Game Mode)."
            ]
        },
        {
            "heading": "Distance & Vehicle Firsts",
            "body": [
                "The 6,000km distance milestones for each of the five classes (bike, car, quad, truck, SxS), 10,000km total, and getting your first vehicle of each class.",
                "The achievements here: Born to be wild (Drive for 6000Km with a Bike); Highway Star (Drive for 6000Km with a Car); Desert Plains (Drive for 6000Km with a Quad); Space Truckin' (Drive for 6000Km with a Truck); We all stand together (Drive for 6000Km with a SxS); Hard Driver (Drive for 10.000Km); First Bike (Get your first Bike); First Car (Get your first Car); First Quad (Get your first Quad); First Truck (Get your first Truck); First SxS (Get your first SxS)."
            ]
        },
        {
            "heading": "Vehicle Collections & Sponsors",
            "body": [
                "Collecting every vehicle from each manufacturer (Honda, KTM, Husqvarna, Hero, Sherco, Can-Am, Polaris, Toyota, Kamaz, Peugeot and more) and the Red Bull and Monster Energy sponsor sets, plus a big-spender milestone.",
                "The achievements here: V-TEC’ed (Get all Honda Bikes in the game); Austrian Endurance (Get all KTM Bikes in the game); Cutting Edge (Get all Husqvarna Bikes in the game); Zero to Hero (Get all Hero Bikes in the game); Marseillaise (Get all Sherco Bikes in the game); South Bound (Get all Can-Am vehicles in the game); Shinning Star (Get all Polaris vehicles in the game); Made in France (Get all PH-Sport Zephyr SxSs in the game); Invincible (Get all Toyota Hilux in the game); French Collector (Get all Sodicars BV2 vehicles in the game); Dune Buggy Aficionado (Get all MD Optimus Evo 3s in the game); For the Motherland (Get all Kamaz in the game); Connoisseur (Get all Peugeot 3008 DKR cars in the game); Bremens House (Get all Bogward cars in the game); Desert Wings (Get all vehicles sponsored by Red Bull); Monster Claw (Get all vehicles sponsored by Monster Energy); Sheikhen Not Stirred (Spending more than 100,000 DP buying vehicles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through every rally and event in Arcade mode, winning each stage for the rally-winner achievements.",
                "2. Do the stage feats as you go - a crash-free win, a no-damage event, a hat-trick of stage wins, a 200km/h dune run.",
                "3. Step up to Professional and then Simulation mode for their event finishes and win achievements and the navigator challenge.",
                "4. Buy vehicles steadily to complete each manufacturer collection and the Red Bull and Monster Energy sponsor sets.",
                "5. Keep playing to accumulate 6,000km in each vehicle class and 10,000km total - the last achievements to fall.",
                "Tip: switch your active vehicle class every few events so the five 6,000km-per-class milestones progress together rather than leaving one class thousands of kilometres behind at the end."
            ]
        }
    ]
};
