// Demolition Inc. Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/demolition-inc.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   98600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "demolition-inc-achievement-guide",
    "category": "game",
    "gameSlug": "demolition-inc",
    "icon": "💥",
    "title": "Demolition Inc. Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Demolition Inc. - none are hidden. Covers the destruction milestones (grilled cows, bulldozed buildings, wrecked cars, driving and drifting, city clears), the Level and Weapon Pack DLC, and the Steam Workshop achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Demolition Inc. has 37 Steam achievements and none of them are hidden. The base game is a set of escalating destruction milestones - grill 10 / 30 / 100 cows, bulldoze 10 / 30 / 100 buildings, wreck 20 / 100 / 500 cars, drive and drift for 10 / 20 / 60 seconds, jump 400 / 500 / 600 metres, level a city (and with all stars, and every city). Eleven come from the Level and Weapon Pack DLC (Asteroid Hails, Car Swarm, Car Magnet earnings, the Back to Work campaign). Two are the Steam Workshop achievements - publish your own level, and download and complete a published one.",
                "Nothing is missable - every counter is cumulative across missions and the campaign is replayable.",
                "Tip: the cumulative counts (100 cows, 100 buildings, 500 cars) accrue across every mission, so just play the campaign to completion and they mostly fill themselves in."
            ]
        },
        {
            "heading": "Destruction Milestones",
            "body": [
                "The base-game milestones - starting and finishing missions, grilling 10 / 30 / 100 cows, bulldozing 10 / 30 / 100 buildings, wrecking 20 / 100 / 500 cars, driving and drifting for 10 / 20 / 60 seconds, jumping 400 / 500 / 600 metres, and levelling a city, a city with all stars, and every city.",
                "The achievements here: Freshman (Just started the game.); First Things First (You managed to finish your first mission.); Sophomore (Second thing done!); Barbeque (You grilled 10 cows.); Chef (You grilled 30 cows.); Bulldozer (You bulldozed 10 buildings.); Cosmic Bulldozer (You destroyed 30 buildings.); Gourmet (You grilled 100 cows.); Galactic Bulldozer (You destroyed 100 buildings.); Earth Crusher (You levelled every city with all stars.); Car Collector I (Wrecked 20 cars.); Car Collector II (Wrecked 100 cars.); Car Collector III (Wrecked 500 cars.); Amateur Driver (You drove a car for 10s.); Professional Driver (You drove a car for 20s.); Expert Driver (You drove a car for 60s.); Oily wheels (You drifted with a car 10s.); Slider (You drifted with a car 30s.); Drift King (You drifted with a car 60s.); City Eater (You levelled a city.); City Muncher (You levelled a city with all stars.); City Dominator (You levelled every city.); Car Jump I (You jumped 400m.); Car Jump II (You jumped 500m.); Car Jump III (You jumped 600m.)."
            ]
        },
        {
            "heading": "DLC: Level & Weapon Pack",
            "body": [
                "The Level and Weapon Pack achievements - 10 Asteroid Hails, the Car Swarm 5 / 10 / 15-second feats, the Car Magnet 50,000 / 500,000 / 1,500,000-dollar feats, and completing the Back to Work campaign (all cities, all stars, one city).",
                "The achievements here: Rainmaker (Started 10 Asteroid Hails (Level and Weapon Pack)); Squad Leader I (Drove 3 cars with Car Swarm for 5s. (Level and Weapon Pack)); Squad Leader II (Drove 3 cars with Car Swarm for 10s. (Level and Weapon Pack)); Squad Leader III (Drove 3 cars with Car Swarm for 15s. (Level and Weapon Pack)); Magnetism I (Earned 50,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)); Magnetism II (Earned 500,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)); Magnetism III (Earned 1,500,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)); Back to Work - Complete (Completed all cities in the Back to Work campaign (Level and Weapon Pack)); Back to Work - All Stars (Got all stars in the Back to Work campaign (Level and Weapon Pack)); Back to Work - One City (Destroyed a city in the Back to Work campaign (Level and Weapon Pack))."
            ]
        },
        {
            "heading": "Steam Workshop",
            "body": [
                "Creating and publishing your own level to the Steam Workshop, and downloading and completing a published Workshop level.",
                "The achievements here: Construction, Inc. (You created and published your own level to the Steam Workshop); Downloading, Inc. (You downloaded and completed a published Steam Workshop level)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign to completion - the cow, building and car milestones fill in as you go.",
                "2. Grind the driving, drifting and car-jump feats on any open mission.",
                "3. Level every city, aiming for all stars.",
                "4. Play the Level and Weapon Pack DLC - the Asteroid Hail, Car Swarm and Car Magnet feats and the Back to Work campaign.",
                "5. Publish a simple level to the Steam Workshop and complete someone else's for the two Workshop achievements.",
                "Tip: \"Earth Crusher\" (every city with all stars) is the last box - do a focused replay of each city aiming for the all-stars destruction target rather than just finishing."
            ]
        }
    ]
};
