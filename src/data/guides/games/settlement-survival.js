// Settlement Survival Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/settlement-survival.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1509510 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "settlement-survival-achievement-guide",
    "category": "game",
    "gameSlug": "settlement-survival",
    "icon": "🏘",
    "title": "Settlement Survival Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in Settlement Survival - none are hidden. Covers the standard-mode milestones, the production and population achievements, the economy / buildings / roads achievements, and the endgame and reputation achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Settlement Survival has 51 Steam achievements and none are hidden. Almost every one requires Standard mode (they are explicitly unreachable in Sandbox), and many are long 'maintain X for 10 years' or large-total conditions - population over 100 for 10 years, City Happiness over 60% for 10 years, 500 tools used, 200 graduates, 1,000,000 coins, 40 kinds of buildings, all technologies, and going through every disaster type.",
                "The catalog marks it difficulty 4 - the decade-long stability requirements, the full tech and blueprint unlocks, 'Integrated Development' (tech level 100 before Year 30) and the all-disasters achievement make this a long, careful Standard-mode game (or a few). Nothing is missable within a run: a stable settlement will accrue almost everything over time.",
                "Tip: play one long, stable Standard-mode settlement on a resource-rich map - most achievements are just 'survive and keep growing', so the priority is never letting happiness, food or heating collapse."
            ]
        },
        {
            "heading": "Standard-Mode Milestones",
            "body": [
                "Harvesting three crops in a year, population over 100 for 10 years, a no-plague-death outbreak, City Happiness over 60% for 10 years, no cold deaths for 10 years, 500 tools used, a Lv 3 technology, 200 graduates, cleaning the whole map, importing two animal types, no buildings destroyed for 10 years, luxury housing, first-year infrastructure, a 50-grid road, a Town Hall, and surviving a snowstorm with no deaths.",
                "The achievements here: Agriculture Tycoon (Harvest three kinds of crops in a year (Unreachable on Sandbox Mode).); Prosperity (Keep the population over 100 for more than 10 year (Unreachable on Sandbox Mode).); Treatment of plague (No settlers die from the plague during an outbreak (Unreachable on Sandbox Mode).); Happiness Maintainer (Keep your City Happiness over 60% for more than 10 years (Unreachable on Sandbox Mode).); Against the Cold (No settler is frozen to death for more than 10 years (Unreachable on Sandbox Mode).); Skilled Workers (Use up more than 500 tools in one game (Unreachable on Sandbox Mode).); Advanced Technology (Unlock a Lv 3 technology on standard mode.); Civilized Land (More than 200 students graduate in one game (Unreachable on Sandbox Mode).); Thorough Cleaning (Clean up all the stones and ore on the map (Unreachable on Sandbox Mode).); Animal Imports (Purchase more than two kinds of animals (Unreachable on Sandbox Mode).); Builder (No buildings are destroyed in 10 years (Unreachable on Sandbox Mode).); Cozy Houses (All citizens live in Luxury House or Garden Villa with over 100 population (Unreachable on Sandbox Mode).); Infrastructure (Build a Tailor, Smithy and Chopping House in the first year (Unreachable on Sandbox Mode).); Clear Road (Build a road longer than 50 grids in one game (Unreachable on Sandbox Mode).); City Center (Build a Town Hall (Unreachable on Sandbox Mode).); Snowstorm (Go through a snowstorm without anyone frozen to death (Unreachable on Sandbox Mode).)."
            ]
        },
        {
            "heading": "Production & Population",
            "body": [
                "10,000 simple food in a year, all seed types, accepting immigrants 5 times, low stress for 5 years, curing 500 patients, health over 100% for 5 years, 1,000 alcohol, happiness over 100% for 5 years, 20 years without Domestic Fuel, 100 Custom Gowns in a year, 200 adults with steel tools and 200 with handcarts, a proficiency level of 3, all technologies, 1,000 books used, and 100% education for 10 years.",
                "The achievements here: Tasty Food (Produce more than 10,000 simple food in a year (Unreachable on Sandbox Mode).); Seeds Collector (Obtain all kinds of seeds in one game (Unreachable on Sandbox Mode).); A Welcoming Settlement (Accept immigrants for 5 times (Unreachable on Sandbox Mode).); Carefree Life (Keep the overall stress less than 20 for more than 5 years with over 500 population (Unreachable on Sandbox Mode).); Saving Lives (Cure more than 500 patients (Unreachable on Sandbox Mode).); Robust Settlers (Keep citizens' health over 100% for more than 5 years (Unreachable on Sandbox Mode).); Hard-Drinking (Consume more than 1000 alcohol (Unreachable on Sandbox Mode).); Happiness (Keep citizens' happiness over 100% for more than 5 years (Unreachable on Sandbox Mode).); Efficient Heating (Do not use Domestic Fuel for more than 20 years (Unreachable on Sandbox Mode).); Luxury Clothes (Produce 100 Custom Gown in a year (Unreachable on Sandbox Mode).); Efficient Tools (Have 200 adults with steel tools (Unreachable on Sandbox Mode).); Handcart (Have 200 adults with handcarts (Unreachable on Sandbox Mode).); Practice Makes Perfect (Any proficiency level reaches 3 (Unreachable on Sandbox Mode).); Technology Town (Unlock all technologies on standard mode.); Well-Read (Use 1000 books (Unreachable on Sandbox Mode).); Knowledge is Infinite (Keep the educated rate at 100% for more than 10 years with over 300 population (Unreachable on Sandbox Mode).)."
            ]
        },
        {
            "heading": "Economy, Buildings & Roads",
            "body": [
                "A Deep Mine and Deep Quarry, 10,000 jade and gold sand, ordering goods 10 times, 1,000,000 coins, 40 building kinds, all blueprints, 50 remodeled houses, the Great Castle, all water-powered buildings, 10 fully-staffed processing buildings, 2,000 grids of road, all road/bridge/tunnel types, reappointing an Administrator, the Great Temple, all Goof-off Hero debuffs, and going through every disaster type.",
                "The achievements here: Mineral-Rich (Build a Deep Mine and a Deep Quarry (Unreachable on Sandbox Mode).); Treasure Resources (Produce 10,000 jade and gold sand (Unreachable on Sandbox Mode).); Keep Ordering (Order goods for more than 10 times in one game (Unreachable on Sandbox Mode).); Developed Economy (Get 1,000,000 coins (Unreachable on Sandbox Mode).); Architect (Build more than 40 kinds of buildings (Unreachable on Sandbox Mode).); Building Expert (Unlock all blueprints (Unreachable on Sandbox Mode).); House Remodel (Have 50 remodeled houses that can not be destroyed (Unreachable on Sandbox Mode).); Great Castle (All citizens live in the Great Castle (Unreachable on Sandbox Mode).); Waterpower (Build all kinds of water-powered buildings (Unreachable on Sandbox Mode).); Full Load (Have at least 10 processing buildings and no vacant positions in all processing buildings (Unreachable on Sandbox Mode).); Road Planning (Have more than 2000 grids of roads (Unreachable on Sandbox Mode).); Urban Construction (Build all kinds of roads, bridges and tunnel in one game (Unreachable on Sandbox Mode).); Administrator (Reappoint a Administrator once (Unreachable on Sandbox Mode).); The Sacrifice (Build the Great Temple (Unreachable on Sandbox Mode).); Goof-off Hero (Trigger all the debuffs of Goof-off Hero (Unreachable on Sandbox Mode).); Weather-Beaten (Went through all the disasters (fire, snowstorm, tornado, drought, animal plague, great harvest, sandstorm, flood and earthquake) once (Unreachable on Sandbox Mode).)."
            ]
        },
        {
            "heading": "Endgame & Reputation",
            "body": [
                "Reaching technology level 100 before Year 30, all four named characters at Reputation Lv.5 in Standard Mode, and any faction at Reputation Lv.5 in Standard Mode.",
                "The achievements here: Integrated Development (Technology level reaches 100 before Year 30 (Unreachable on Sandbox Mode).); World-Renowned (Miao, Lorenzo, Rania and Carlo all reached Reputation Lv.5 in Standard Mode.); Business Mind (Any faction reached Reputation Lv.5 in Standard Mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a long Standard-mode game on a resource-rich map and stabilise food, heating and happiness early.",
                "2. Build out the tech tree and blueprints, and the key buildings (Town Hall, Great Temple, Great Castle, water-powered set).",
                "3. Keep the decade-long conditions running - population 100+, happiness 60%+, no cold or plague deaths, 100% education.",
                "4. Grow the economy to 1,000,000 coins and the large production totals (10,000 food, 1,000 books, 500 tools).",
                "5. Let the settlement run through every disaster type and push tech level 100 before Year 30.",
                "Tip: because nearly everything needs Standard mode, don't be tempted into Sandbox for a 'quick' one - the counters and multi-year timers only tick there."
            ]
        }
    ]
};
