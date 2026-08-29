// SnowRunner Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/snowrunner.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1465360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "snowrunner-achievement-guide",
    "category": "game",
    "gameSlug": "snowrunner",
    "icon": "🚚",
    "title": "SnowRunner Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in SnowRunner - none are hidden. driving & recovery feats, cargo, regions & vehicles, exploration & 100% completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SnowRunner has 37 Steam achievements and none are hidden. A block of them are one-off driving feats (a crane lift, a winch pull, driving with broken wheels), and the rest are the big completion goals - every contract, every task and contest, every vehicle owned, and the per-region upgrade and exploration hunts across all maps and DLC.",
                "Nothing is missable and everything persists across your save. The commitment is enormous: Model Collector (every vehicle), Workaholic (every contract) and the all-tasks-and-contests achievement require finishing essentially all of the game and its DLC regions.",
                "Tip: play the game region by region, and while you are in a map, clear its contracts, tasks, contests, watchtowers, garages and hidden upgrades before moving on. The one-off feats (pumpkins, crane lift, water driving) can be done any time."
            ]
        },
        {
            "heading": "Driving & Recovery Feats",
            "body": [
                "The one-off driving achievements: activating every tutorial hint, smashing 500 pumpkins, a telescopic-crane lift, 1 km in water, visiting every logging area, 2,000 damage points repaired, a 6 m winch pull, a 4-unit manual load, and a 1 km drive with all wheels broken.",
                "The achievements here: Yeah, you can drive! (All main tutorial hints have been activated at least once); Once a Farmer always a Farmer (Smash 500 pumpkins); Goliath (Use a telescopic crane to raise a special objective semi-trailer at least 5 meters above the ground); The Blue Hall (Drive 1km in the water); Where are the logs? (Visit every logging area in the game at least once); Play Your Way (Fix 2000 damage points); Deer Hunt (Find all upgrades in Michigan); Moose Hunt (Find all upgrades in Alaska); Bear Hunt (Find all upgrades in Taymyr); Eat, Sleep, Drill, Repeat (Deliver all 3 Oil Rigs to their destination points in Alaska); Get over here (Pull yourself with a winch for at least 6 meters); Through blood & sweat (Manually load at least 4 standard cargo units in your truck one after another and pack them ); Broken Horse (Drive 1 km with all wheels broken)."
            ]
        },
        {
            "heading": "Cargo, Regions & Vehicles",
            "body": [
                "The delivery and vehicle goals: delivering every cargo type, the Michigan/Alaska/Taymyr upgrade hunts and the Lenin statues, 10 recoveries, the broken-engine crane pull, a 2x-value upgrade spend, owning the Azov 42-20 Antarctic, the ZiKZ and Pacific P12 delivery counts, 100,000 currency, and owning every American vehicle.",
                "The achievements here: Simply Delivered (Deliver every type of cargo in the game at least once); Workers Unite (Find both Lenin statues in Taymyr); Tread Softly (Recover your vehicle 10 times or more); Problem Solved (Pull a vehicle with a broken engine out of the water with a crane); Untouchable (Complete any 10 tasks or contests without taking any damage); Gallo-24 (Buy enough upgrades to hit twice the price of the base vehicle you bought them for); 18 Wheels is Not Enough (Own a Azov 42-20 Antarctic); What's a mile? (Use ZiKZ 5368 to deliver at least 10 cargoes in Michigan or Alaska); Western Wind (Use Pacific P12 to deliver at least 10 cargoes in Taymyr); Uncle Scrooge (Earn 100000 currency); \"Stars and Stripes\" (Own every american vehicle in the game); The Duel (Driving a red-coloured scout vehicle, collide with any truck and take less damage than that truck)."
            ]
        },
        {
            "heading": "Exploration & 100% Completion",
            "body": [
                "The exploration and completion achievements: a single-tank cross-region drive, repairing all Alaska pipes, every watchtower and garage explored, a no-lift gateway-to-gateway drive, the TUZ 420 in Alaska, a cross-map broken-engine tow, every contract completed, owning every vehicle, every task and contest done, and 1,000 km driven.",
                "The achievements here: Fuel Economy (Travel through every region on a single tank of fuel); Victory Parade (Own every russian vehicle in the game); Dreams Come True (Repair all the pipes in Alaska); \"All Along the Watchtower\" (Explore all watchtowers in the game); All Starts From a Garage (Explore all garages in the game); Pedal to the Metal (Travel from one gateway to another on one map without releasing the accelerator); Bering Strait (Own a TUZ 420 \"Tatarin\" and have it stationed in any garage in Alaska); Convoy (Transport a winched vehicle with a broken engine from one map to another and put it into a garage); Workaholic (Complete every contract in the game); Model Collector (Own every vehicle in the game); Ain't no rest for the...trucker? (Complete every task and contest in the game); The Black Shuck (Drive through 1000 km)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the maps region by region, fully clearing each one's contracts, tasks, contests, watchtowers, garages and hidden upgrades.",
                "2. Do the one-off driving feats as opportunities come up (pumpkins near Halloween events, the crane lift, the broken-wheel drive, 1 km in water).",
                "3. Buy toward the vehicle-collection achievements (every American, every Russian, every vehicle) and the delivery-count ones with the named trucks.",
                "4. Finish with the global completions - every contract (Workaholic), every task and contest, 1,000 km driven.",
                "Tip: Fuel Economy (cross every region on one tank) and the no-lift gateway drives are much easier in a light, efficient scout with a fuel-tank upgrade - plan the route in advance and avoid deep mud."
            ]
        }
    ]
};
