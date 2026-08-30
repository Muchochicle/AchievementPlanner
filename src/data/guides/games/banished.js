// Banished Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/banished.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   242920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "banished-achievement-guide",
    "category": "game",
    "gameSlug": "banished",
    "icon": "🏘️",
    "title": "Banished Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Banished - none are hidden. Covers population milestones, specialized single-town challenge runs, trade and resource production, and long-term legacy goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Banished has 36 Steam achievements and none are hidden. They split into raw population milestones (300/600/900 citizens), a set of deliberately restrictive single-town challenge runs (no schools, no trading post, no farms, a harsh small mountain map), production and resource achievements (trading volume, logging, quarrying, smelting, farming variety, livestock counts), and long-term legacy goals that need a town to survive many decades (Tenure: 500 population after 200 years).",
                "Nothing is missable within a town, but several achievements are deliberately incompatible with each other in a single settlement - you cannot get both Uneducated (300 citizens with no schools) and Educated (a fully-schooled 200-adult population) in the same town, since one requires never building schools and the other requires them. Plan a handful of separate towns, each built around a different achievement or cluster of achievements, rather than trying to complete the whole list in one save.",
                "Tip: many of the resource-count achievements (Lumberjack, Stonework, Smelter) track production over a 100-year period rather than a stockpile, so start those industries early and let them run continuously in the background rather than trying to hit the number with a late-game production spike."
            ]
        },
        {
            "heading": "Population Milestones",
            "body": [
                "The core population ladder: reaching 300, 600, and 900 citizens in a single town.",
                "The achievements here: Settlement (Reach a population of 300 citizens.); Village (Reach a population of 600 citizens.); Town (Reach a population of 900 citizens.)."
            ]
        },
        {
            "heading": "Specialized Playstyles",
            "body": [
                "A run of deliberately specific or restrictive town builds: a fully-educated population, a 300-citizen town with no schools, every profession staffed for 5 years, a small harsh-climate mountain settlement, 400 graves, steel-tool and warm-coat equipped populations, a trading-post-free town, and a farm-and-orchard-free town.",
                "The achievements here: Educated (Have a fully educated population with 200 adults for 4 years.); Uneducated (Reach a population of 300 citizens without building schools.); Jack of all Trades (Build a town of over 200 people that has someone working in every profession for at least 5 years.); Mountain Men (Using a harsh climate and a small mountainous map, maintain a population of 50 people for 20 years.); Tombstone (Fill graveyards with at least 400 graves.); Blacksmith (Equip a population of over 200 adults with steel tools for 4 years.); Stylish (Cloth a population of over 200 with warm coats for 4 years.); Isolationist (Reach 300 citizens without building a trading post.); One with Nature (Reach 400 citizens without building crops fields, orchards, or pastures.)."
            ]
        },
        {
            "heading": "Trade & Resources",
            "body": [
                "Trading 50,000 then 100,000 units of goods, stocking a trading post with ale/tools/coats, 20 wells, acquiring a full spread of livestock and crop/orchard seed types, 60 cattle/75 sheep/180 chickens, 8 plant and 8 orchard types harvested in one year, and maintaining large mining and quarrying workforces for 3 years.",
                "The achievements here: Trader (Use trading posts to trade 50,000 units of goods in a single town.); Master Trader (Use trading posts to trade 100,000 units of goods in a single town.); Exports (Stock the trading post with at least 500 ale, 300 steel tools, and 200 warm coats.); Firefighter (Build 20 wells in a single town.); Farmer (Acquire 3 livestock types, 8 crop seed types, and 8 orchard seed types.); Livestock (Build a town that contains 60 cattle, 75 sheep, and 180 chickens.); Food Variety (Grow and harvest 8 different plants and 8 different orchard tree types in a single year.); Miner (Maintain 2 mines with 30 workers each for 3 years.); Mason (Maintain 2 quarries with 30 workers each for 3 years.); Foodie (In a single year, produce at least 2000 food each from hunters, gatherers, fisherman, pastures, fields, and orchards.)."
            ]
        },
        {
            "heading": "Production & Infrastructure",
            "body": [
                "Long-run production totals - 50,000 logs, 10,000 stone, and 10,000 iron over 100 years - plus 2000 paved road tiles, a 50-unit bridge, accepting 200 nomads, and maintaining high happiness and health for 10 years in a 100+ citizen town.",
                "The achievements here: Lumberjack (Produce 50,000 logs within a 100 year period.); Stonework (Produce 10,000 stone within a 100 year period.); Smelter (Produce 10,000 iron within a 100 year period.); Highwaymen (Build a town with 2000 stone paved road tiles.); Golden Gate (Build a bridge that is at least 50 units long.); Immigrants (Allow 200 nomads into a single town.); Smiles all Around (Maintain high happiness for 10 years in a town with at least 100 citizens.); Healthy (Maintain high health for 10 years in a town with at least 100 citizens.)."
            ]
        },
        {
            "heading": "Building & Legacy",
            "body": [
                "100 stone houses, simultaneously stockpiling a full spread of resources, building at least one of every structure, a specific large public-building roster (Master Builder), and the two long-haul population-over-time goals: 300 people after 100 years, and 500 people after 200 years.",
                "The achievements here: Built from Stone (Build a town with 100 stone houses.); Ready for Anything (Simultaneously store 2000 fuel, 2000 wood, 500 stone, 500 iron, 200 tools, 200 coats, and 30000 food.); Builder (Build a town that has at least one of every possible structure.); Master Builder (Build a town with 3 churches, 5 boarding houses, 4 markets, 5 hospitals, 2 trading posts, 6 taverns, and a town hall.); Established (Build a town that has a population of 300 after 100 years.); Tenure (Build a town that has a population of 500 after 200 years.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a standard town and grow it toward 300, then 600, then 900 population for Settlement, Village, and Town, picking up general production achievements (Farmer, Livestock, Food Variety, Lumberjack, Stonework, Smelter, Builder, Master Builder) along the way.",
                "2. In that same town, work toward the long-haul infrastructure and trade goals: Trader and Master Trader (goods traded), Exports (a full trading-post stock), Highwaymen (2000 paved road tiles), Golden Gate (a 50-unit bridge), Immigrants (200 nomads accepted), and the eventual Established/Tenure population-over-time goals.",
                "3. Start a second town built around education and happiness - Educated (a fully-schooled population), Smiles all Around, Healthy, and Jack of all Trades (every profession staffed).",
                "4. Start a third, deliberately restrictive town for the mutually-exclusive challenge achievements: Uneducated (no schools), Isolationist (no trading post), One with Nature (no farms/orchards/pastures), and Mountain Men (a small, harsh mountain map).",
                "5. Pick off the remaining resource and building-count achievements (Tombstone, Blacksmith, Stylish, Firefighter, Miner, Mason, Foodie, Built from Stone, Ready for Anything) as your towns naturally grow.",
                "Tip: Mountain Men (50 people for 20 years on a harsh, small mountainous map) is easiest as its own dedicated save from the start - trying to retrofit an existing large town onto a small, harsh map is not possible, so pick the right map type before you begin that particular run."
            ]
        }
    ]
};
