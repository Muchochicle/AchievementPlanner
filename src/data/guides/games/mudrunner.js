// MudRunner Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mudrunner.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   675010 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mudrunner-achievement-guide",
    "category": "game",
    "gameSlug": "mudrunner",
    "icon": "🚚",
    "title": "MudRunner Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in MudRunner - none are hidden. Covers the per-map Hardcore completions, watchpoint exploration and garage unlocks, the long list of driving and delivery feats, and the named Challenge bonus-objective completions including the DLC challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "MudRunner has 62 Steam achievements and none of them are hidden. A third of them are per-map: completing each of the seven main maps in Hardcore mode, reaching all watchpoints, and unlocking all garages. The rest are driving and delivery feats - winching feats, submerged-engine escapes, no-navigation and single-vehicle level completions, lumber mill deliveries by log type, distance milestones (100km travelled), and a batch of quirky ones (squelch 50 mushrooms, reach the top of two mountains on Island). The last block is completing all bonus objectives in each named Challenge map, including the DLC challenges.",
                "Nothing is missable - maps and challenges replay freely, and the distance and squelch counters accumulate across all your play. The main effort is the Hardcore-mode map completions (no map, no winch help, permanent damage) and the many finicky delivery feats that require specific self-imposed restrictions.",
                "Tip: do the restriction feats (Blind Navigation, Forester, My Only Love, I Have All I Need) on the smallest, driest map you can - MudRunner's difficulty is almost entirely about the mud, so a short route on easy terrain lets you focus on the restriction rather than fighting to move at all."
            ]
        },
        {
            "heading": "Maps: Hardcore, Watchpoints & Garages",
            "body": [
                "The per-map achievements: completing Seashore, The Bog, Crossing, Island, Deluge and Downhill in Hardcore mode, and reaching every watchpoint and unlocking every garage on each map.",
                "The achievements here: Seashore (Complete the \"Seashore\" in Hardcore mode); Explore Seashore (Reach all Watchpoints in the \"Seashore\"); Seashore Settler (Unlock all Garages in the \"Seashore\"); Explore Downhill (Reach all Watchpoints in the \"Downhill\"); Downhill Settler (Unlock all Garages in the \"Downhill\"); The Bog (Complete \"The Bog\" in Hardcore mode); Explore The Bog (Reach all Watchpoints in \"The Bog\"); The Bog Settler (Unlock all Garages in \"The Bog\"); Crossing (Complete the \"Crossing\" in Hardcore mode); Explore Crossing (Reach all Watchpoints in the \"Crossing\"); Crossing Settler (Unlock all Garages in the \"Crossing\"); Island (Complete the \"Island\" in Hardcore mode); Explore Island (Reach all Watchpoints in the \"Island\"); Island Settler (Unlock all Garages in the \"Island\"); Deluge (Complete the \"Deluge\" in Hardcore mode); Explore Deluge (Reach all Watchpoints in the \"Deluge\"); Deluge Settler (Unlock all Garages in the \"Deluge\"); Downhill (Complete the \"Downhill\" in Hardcore mode)."
            ]
        },
        {
            "heading": "Driving & Delivery Feats",
            "body": [
                "The self-imposed and skill feats: the parking-brake and Pull-winch distances, a roof roll, a 500-damage impact, burning fuel without releasing the accelerator, winching a vehicle out of water, the no-watchpoints / no-map / single-vehicle / no-addon-change level completions, the lumber-mill deliveries by log type and by truck model, repairing and refuelling other players' trucks, the submerged-engine escape, the twin-truck caravan, and carrying a Type A vehicle in your trunk.",
                "The achievements here: Sisyphus (Drive with the parking brake engaged for 200 meters in total); David (Use winch in Pull mode to tow another vehicle for 50 meters in total); Stunt Driver (Make a quick 360 degree roll over the roof); Student Driver (Receive 500 or more damage points from a single impact); Eco-friendly (Burn 100 litres of fuel without releasing accelerator); Fisherman (Winch a disabled vehicle out of the water with another vehicle); Blind Navigation (Finish a level without reaching any Watchpoints in Single Player mode); Master Logger (If capsized while delivering load, pick and pack scattered logs back); Size Does Matter (Fill a particular Lumber Mill by delivering Long Logs only); Size Doesn't Matter (Fill a particular Lumber Mill by delivering Short Logs only); Old Still Good (Fill a particular Lumber Mill by using Type B-130 only); Trophy-raid (Reach all Watchpoints on any level with the Type A-3151 vehicle); Mechanic (Repair other player trucks for 1000 points in total); Forester (Finish a level without using the Navigation map in Single Player mode); Diver (Drive through water so that your vehicle is submerged and then escape without the engine stalling); Unstoppable (Load up a truck and drive to an Lumber Mill without releasing accelerator); Caravan (Load up two trucks and winch them together to reach Lumber Mill simultaneously); My Only Love (Finish a level using only one vehicle in Single Player mode); Carrier (Load up Type A vehicle in the trunk of your truck and drive it for 200 meters in total); Rescue Mission (More than 150 meters away from any Garage, tow a fully damaged truck to a Garage); Drive Carefully (Deliver the load without receiving any damage and switching to other trucks); I Have All I Need (Finish a level without changing any vehicle addons in Single Player mode)."
            ]
        },
        {
            "heading": "Feats, Challenges & DLC",
            "body": [
                "The remaining feats (the Downhill flower meadows, 100km travelled, the Island mountains, squelching 50 mushrooms and 50 pumpkins, knocking down 100 trees, 40km/h loaded, the American Wilds shoreline drive) and completing all bonus objectives in each named Challenge - Repair & Refuel, Climb a Hill, The Rig, Cross a River, Visit Grandma, Delivery Mission, Night Safari, Crane Operator, The Expedition, and the DLC challenges Crane Operator II and Freight-Ex.",
                "The achievements here: Anthropologist (Find and visit 2 fluorescent flower meadows in the \"Downhill\" at night in one game); Fuel Tanker (Fill up other player's trucks with 1000 litres of fuel in total); Driver (Travel 100 kilometers); Climber (Reach the top of any 2 of 3 mountains in the \"Island\" in one game); Mushroomer (Squelch 50 mushrooms in total); Farmer (Squelch 50 pumpkins in total); Cooperation (Pass 5 log ownerships to other players); World Cruise (Get in Type A-968m and drive 400 meters or more away); Repair & Refuel (Complete all bonus objectives in the challenge \"Repair & Refuel\"); Climb a Hill (Complete all bonus objectives in the challenge \"Climb a hill\"); The Rig (Complete all bonus objectives in the challenge \"The Rig\"); Cross a River (Complete all bonus objectives in the challenge \"Cross a River\"); Visit Grandma (Complete all bonus objectives in the challenge \"Visit Grandma\"); Delivery Mission (Complete all bonus objectives in the challenge \"Delivery Mission\"); Night Safari (Complete all bonus objectives in the challenge \"Night Safari\"); Crane Operator (Complete all bonus objectives in the challenge \"Crane Operator\"); The Expedition (Complete all bonus objective in challenge \"The Expedition\"); Lumberjack (Knock down 100 trees it total); Speed Racer (Reach speed of 40 km/h with a loaded truck); Beautiful Tan (Travel 10 kilometers along the shorelines of American Wilds); Crane Operator II (Complete all bonus objectives in the challenge \"Crane Operator II\"); Freight-Ex (Complete all bonus objectives in the challenge \"Freight-Ex\")."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play each main map normally first, reaching every watchpoint and unlocking every garage as you explore.",
                "2. Do the self-imposed restriction feats on a small, dry map: no navigation, no map, single vehicle, no addon changes.",
                "3. Work through the delivery feats - the log-type and truck-model lumber-mill fills, the caravan, the trunk carry, the no-damage delivery, and the winch feats.",
                "4. Do the quirky counters (100km travelled, 100 trees, 50 mushrooms, 50 pumpkins, the mountains, the flower meadows) during normal play.",
                "5. Complete each named Challenge with all its bonus objectives, including the DLC ones, and finally do the Hardcore-mode completion of each map.",
                "Tip: for the Hardcore map completions, use the all-wheel-drive and differential-lock on constantly, keep a fuel truck and a second truck with a winch as support, and plan a route between garages so a stuck or damaged truck is never more than a recovery away."
            ]
        }
    ]
};
