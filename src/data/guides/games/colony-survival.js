// Colony Survival Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/colony-survival.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   366090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "colony-survival-achievement-guide",
    "category": "game",
    "gameSlug": "colony-survival",
    "icon": "🛡️",
    "title": "Colony Survival Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Colony Survival - none are hidden. Covers early colony founding and tech progression, recruiting specialist colonists and stocking advanced goods, prestige science and colony growth, and late-game production and threat milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Colony Survival has 50 Steam achievements and none are hidden. As a voxel colony-builder crossed with a nightly tower-defense wave, the list covers founding and growing your colony (from your first banner to 1,000 colonists), unlocking the tech tree from the Bronze Age onward, stockpiling increasingly advanced goods (Astrolabes, Rope, Sacred Chicken Meals, Books of Knowledge, Eyeglasses, Steel Tools, Machine Tools), recruiting specialist colonist professions, and pushing Prestige science, day-count survival, and 24-hour production/consumption milestones at the game's harder Threat Levels.",
                "Nothing is missable - every recruitment, stockpile, and production counter is a permanent save-file stat, and the day-count and Threat Level achievements simply accumulate as your colony survives longer. The genuine long poles are the 1,000-colonist and Prestige V achievements, both of which need a large, mature, well-defended colony rather than an early rush.",
                "Tip: the 24-hour consumption achievements (500 Copper Ingots, 1,500 Firewood, 1,000 Crossbow Bolts produced, 100 Candles, 50 Lead Ingots) all need a colony large enough to burn through that much of a resource in a single day - build the relevant production chain well ahead of time and let it run continuously rather than trying to stockpile and burn through it manually."
            ]
        },
        {
            "heading": "Early Colony Building",
            "body": [
                "Founding and growing your colony: placing your first banner, recruiting a Tinkerer and then 10 colonists, unlocking the Merchant's Hub, holding 100 then 101+ Colony Points, holding 10+ Sanctity Points, reaching 100 colonists, placing a Statistics Board and a Trapfixer, unlocking the Bronze Age, and stocking an Astrolabe, Rope, and a Sacred Chicken Meal.",
                "The achievements here: The Very First Step (Place a banner and start a colony); Craft Isn't Mine, It's For Colonists (Recruit a Tinkerer); A Small Tribe (Recruit 10 colonists); Rising Threat (Unlocked the Merchant's Hub); Horn of Plenty (Hold 100 Colony Points); Lockbox Time (Hold 101+ Colony Points); Divine Saviour (Hold 10+ Sanctity Points); A Small Village (Recruit 100 colonists); Big Data (Place a Statistics Board); It's a Trap! (Place a Trapfixer); The Bronze Age (Unlock the Bronze Age); Not All Those Who Wander Are Lost (Hold 1+ Astrolabe in the stockpile); How Hemp Is Meant To Be Used (Hold 1+ Rope in the stockpile); Settlers (Start an Outpost); Divine Deliciousness (Hold 1+ Sacred Chicken Meal in the stockpile)."
            ]
        },
        {
            "heading": "Tech & Recruitment",
            "body": [
                "Stocking a Book of Knowledge, placing a Glider Launcher, reaching Day 100, stocking Eyeglasses, recruiting a Chestmaker, holding 10 Elevator Shafts, stocking a Vial of Mineral Oil, recruiting a Printing Press Operator, reaching 500 colonists, recruiting a Handcannon Guard, stocking a Rope Trap and Luxury Garments, stocking a Launched Steel Glider and Steel Tools, and recruiting a Tabulating Machine Operator.",
                "The achievements here: Modern Texts (Hold 1+ Book of Knowledge in the stockpile); The Miracle of Flight (Place a Glider Launcher); Time Goes By (Reach Day 100); Modern Solutions (Hold 1+ Eyeglasses in the stockpile); Escalating Requirements (Recruit 1 Chestmaker); Ups and Downs (Hold 10 Elevator Shafts in the stockpile); Things Get Complex (Hold 1+ Vial of Mineral Oil in the stockpile); Exponential Data Increase (Recruit 1 Printing Press Operator); A Medium-Sized Town (Recruit 500 Colonists); Fire At Will (Recruit 1 Handcannon Guard); Freeze! (Hold 1 Rope Trap in the stockpile); Mix And Match (Hold 1 Luxury Garments in the stockpile); The Miracle of Explosions (Hold 1 Launched Steel Glider in the stockpile); Speed It Up (Hold 1 Steel Tools in the stockpile); Crunch Those Numbers (Recruit 1 Tabulating Machine Operator)."
            ]
        },
        {
            "heading": "Prestige & Growth",
            "body": [
                "Completing Prestige I and then Prestige V Science, reaching 1,000 colonists, building 4 Outposts, holding 10,000 Colony Points, reaching Day 250, reaching -50 and then +50 unemployed colonists, reaching Threat Level 500, and holding 5 Machine Tools.",
                "The achievements here: A King Among Lords (Complete Prestige I Science); An Emperor Among Kings (Complete Prestige V Science); The Most Important Goal (Recruit 1000 Colonists); A Network Of Towns (Build 4 Outposts); Money Money Money (Hold 10.000 Colony Points); Watch The Clock (Reach Day 250); Labor Shortage (Reach -50 Unemployed Colonists); Lazy Colonists (Reach 50 Unemployed Colonists); Tremendous Threat (Reach Threat Level 500); Fixing The Modern World (Hold 5 Machine Tools)."
            ]
        },
        {
            "heading": "Late-Game Production & Endgame",
            "body": [
                "Reaching 2,500 total meals, Threat Level 1,500, consuming 500 Copper Ingots and 1,500 Firewood in 24 hours, producing 1,000 Crossbow Bolts in 24 hours, consuming 100 Candles and 50 Lead Ingots in 24 hours, killing the strongest monster, maxing your Banner's Safe Zone Radius, and stocking a Tablet of Ancient Wisdom.",
                "The achievements here: You'll Never Go Hungry Again (Reach 2500 Total Meals); Danger Zone (Reach Threat Level 1500); The Cost Of Copper (Consume 500 Copper Ingots in 24 hours); The Fires of Industry (Consume 1500 Firewood in 24 hours); Amazing Arsenal (Produce 1000 Crossbow Bolts in 24 hours); Mystical Forces (Consume 100 Candles in 24 hours); More Dakka (Consume 50 Lead Ingots in 24 hours); Magnum Opus (Kill the strongest monster); Dibs (Upgrade Banner Safe Zone Radius to the maximum); Time For Wisdom (Hold 1+ Tablet of Ancient Wisdom in the stockpile)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Place your first banner and start a colony, recruiting your first Tinkerer and 10 colonists, then unlock the Merchant's Hub and start banking Colony Points.",
                "2. Push early tech and stockpiles: unlock the Bronze Age, place a Statistics Board and Trapfixer, and stock an Astrolabe, Rope, Sacred Chicken Meal, and Book of Knowledge.",
                "3. Grow toward 100, then 500, then 1,000 colonists, founding Outposts along the way (aiming for 4 for A Network Of Towns), and recruit the specialist professions (Chestmaker, Printing Press Operator, Handcannon Guard, Tabulating Machine Operator) as they unlock.",
                "4. Push Prestige science toward Prestige I and eventually Prestige V, and survive to Day 100 and then Day 250.",
                "5. Once your colony is large and well-defended, chase the harder late-game achievements: Threat Level 500 and 1,500, 2,500 total meals, the four 24-hour production/consumption milestones, killing the strongest monster, and maxing your Banner's Safe Zone Radius.",
                "Tip: Labor Shortage (-50 unemployed) and Lazy Colonists (+50 unemployed) are opposites and do not need separate colonies - just let your job assignments drift naturally as your colony grows and shrinks its workforce, and you will likely cross both thresholds at different points in a long playthrough."
            ]
        }
    ]
};
