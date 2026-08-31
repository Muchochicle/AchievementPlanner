// Bus Simulator 18 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bus-simulator-18.json), whose 28 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   515180 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bus-simulator-18-achievement-guide",
    "category": "game",
    "gameSlug": "bus-simulator-18",
    "icon": "🚌",
    "title": "Bus Simulator 18 Achievement Guide",
    "summary": "A practical guide to all 28 Steam achievements in Bus Simulator 18 - none are hidden. Covers the unlocks and progression achievements, and the route-network and DLC achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bus Simulator 18 has 28 Steam achievements and none are hidden. Fourteen are unlocks and progression (the Central Bus Station, all areas, all bus stops, owning every bus, a perfect route, first and all missions, levels 10 and 25, and five hidden collectibles), and fourteen are route-network and DLC goals (connecting 50 / 75 / 100% of stops, leveling a stop, 1,000 passengers personally transported, a big-earning journey, 3 drivers hired, 12 buses owned, the 'Happily Married' easter egg, and the Kerststadt / Airport / Sonnstein DLC areas and missions).",
                "The catalog marks it difficulty 2. It is a steady, low-pressure list - drive routes, connect stops, level up, and pick up the collectibles and DLC content.",
                "Tip: work the campaign, connecting stops and unlocking areas, and drive routes yourself (rather than delegating) for the 1,000-passenger achievement."
            ]
        },
        {
            "heading": "Unlocks & Progression",
            "body": [
                "Accessing the Central Bus Station, unlocking all areas and all bus stops, owning every bus, a perfect route, your first and all missions, reaching level 10 and 25, and finding the five collectibles.",
                "The achievements here: Interconnected (Gain access to the Central Bus Station.); Lucky 7 (Unlock all areas.); Wherever I Please (Unlock all bus stops.); Gotta Catch 'Em All (Own each bus.); High Five (Drive a perfect route.); Baby Steps (Finish your first mission.); Key to the City (Finish all missions.); They grow up so fast (Reach level 10.); Feeling Old Yet? (Reach level 25.); Collectible One (Find a collectible.); Collectible Two (Find a collectible.); Collectible Three (Find a collectible.); Collectible Four (Find a collectible.); Collectible Five (Find a collectible.)."
            ]
        },
        {
            "heading": "Route Network & DLC",
            "body": [
                "Connecting 50 / 75 / 100% of bus stops to your network, leveling a stop, personally transporting 1,000 passengers, a high-earning journey, hiring 3 drivers, owning 12 buses, the 'Happily Married' couple, unlocking Kerststadt, the Airport and Sonnstein, all Map Extension missions, and level 25 with the Airport stop.",
                "The achievements here: Half-full (Connect 50% of all bus stops to your route network.); Almost... (Connect 75% of all bus stops to your route network.); All mine! (Connect all bus stops to your route network.); 1 Up (Level up a bus stop.); Kilo (Personally transport a total number of 1000 passengers.); Ka-ching! (Earn a lot of money with a single journey!); Three's a crowd (Hire 3 drivers.); Dirty Dozen (Own 12 buses.); Happily Married (Find the happily married couple.); Business Expansion (Unlock Kerststadt.); The Dream of Flight (Unlock the Airport.); Praise the Sun (Unlock Sonnstein.); Another Job Well Done (Finish all Official Map Extension Missions.); Frequent Flier (Reach level 25 with the Airport stop.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, unlocking areas and stops and finishing missions.",
                "2. Connect your route network up to 100% of stops.",
                "3. Drive routes yourself for the 1,000-passenger achievement (don't just delegate to hired drivers).",
                "4. Own every bus and 12 buses at once, hire 3 drivers, and level a bus stop.",
                "5. Play the Kerststadt, Airport and Sonnstein DLC areas and their missions.",
                "Tip: the five 'collectible' achievements are hidden pickups around the map - use a collectibles map to grab all five in one drive."
            ]
        }
    ]
};
