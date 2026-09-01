// Timberborn Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/timberborn.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1062090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "timberborn-achievement-guide",
    "category": "game",
    "gameSlug": "timberborn",
    "icon": "🦫",
    "title": "Timberborn Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in Timberborn (10 hidden). Covers both factions' wonders, the survival and population milestones, the tree-planting and well-being ladders, a set of engineering mastery challenges, and the faction-specific Master Builder goals. Ten of the achievements are hidden - a run of 'misfortune' easter eggs - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Timberborn has 59 Steam achievements and 10 are hidden. The hidden ten are all 'misfortune' gags: a beaver born or a bot built after the colony goes extinct, exploding a beaver with dynamite, a beaver dying while hungry, thirsty, injured and contaminated at once, two badtides in a row, a Folktails beaver stung by a bee, an Iron Teeth newborn injured the same day it is born, flooding a building, demolishing and instantly rebuilding, and trying to place dynamite at the very bottom of the map. Everything visible is constructive: launching each faction's wonder, surviving 5 / 10 / 20 / 50 cycles, populations of 100 / 250 / 500, planting 1,000 / 5,000 / 10,000 trees, the average-well-being ladder from 4 up to the maximum, and a set of engineering challenges (power generation by a single method, single-day production targets, gravity batteries, zipline and tubeway networks).",
                "The catalog marks it difficulty 3. Nothing is hard to execute; the length comes from the long survival runs (50 cycles), the 10,000-tree total, and the faction-specific challenges that need dedicated Folktails and Iron Teeth playthroughs. The hidden gags are mostly quick to set up deliberately with a throwaway save.",
                "Tip: keep one long-running 'megacity' save going for the 50-cycle, 500-population and 10,000-tree milestones while doing the faction challenges on separate shorter maps - stacking everything onto one save just makes it fragile."
            ]
        },
        {
            "heading": "Wonders & Engineering Challenges",
            "body": [
                "Maximum average well-being at 100+ population, capping every badwater source, launching each faction's wonder (and three at once, and one before cycle 15), the single-method power challenges (water wheels, power wheels, wind turbines), single-day food and plank targets, gravity batteries, a 24-hour work week, the build-height limit, every Refinery recipe, 200 Hedges, 200 dynamite in a day, a 1 km zipline network, a large tubeway network, and stacked Hydroponic Gardens.",
                "The achievements here: Smile, everybeaver! (Have the maximum possible average well-being with a beaver population of at least 100.); No More Leaks (Cap all badwater sources on the map using the dedicated buildings.); So Long, and Thanks for the Coffee! (Build and launch the wonder as Iron Teeth.); Ninety-nine Balloons and Counting (Build and launch the wonder as Folktails.); Unnecessary Expenses (As Iron Teeth, reach a beaver population of 200 without building any housing.); Overachiever (Launch three wonders at the same time.); Rush B-eaver! (Build a wonder before cycle 15 ends.); Mastered the Flow (Generate 10,000 hp using only water wheels in a single power network.); Sweet Teeth (As Folktails, have 1,000 Maple Pastries and no other food at the end of a day.); Plankster (As Iron Teeth, produce 500 Planks in a single day.); Power Around the Clock (Store at least 655,321 hph worth of power using Gravity Batteries.); Enough to Power a Car Battery (Generate 2,000 hp using only power wheels in a single power network.); Endless Crunch (Have a 24-hour work time for 7 days in a row.); Sky Is the Limit (Build a structure at the highest allowed height.); Refined Refinement (As Folktails, have working Refineries producing each available recipe.); Windy Day (As Folktails, generate 10,000 hp using only wind turbines in a single power network. ); Hedge Fund (As Folktails, build 200 Hedges on one map.); I Am Become Deaf (Explode 200 dynamite in a single day.); Shaka Bra! (As Folktails, have a zipline network with a combined length of 1 kilometer.); Tube City (As Iron Teeth, have at least 10 Tubeway Stations and 1,000 Tubeways.); Hanging Gardens (As Iron Teeth, build 8 Hydroponic Gardens stacked upon each other.)."
            ]
        },
        {
            "heading": "Growth & Survival Milestones",
            "body": [
                "Planting 1,000 / 5,000 / 10,000 trees in one playthrough, reaching populations of 100 / 250 / 500 beavers, and surviving 5 / 10 / 20 / 50 cycles on one map.",
                "The achievements here: Beaver-made Thicket (Plant 1,000 trees during a single playthrough.); Beaver-made Forest (Plant 5,000 trees during a single playthrough.); Beaver-made Wilderness (Plant 10,000 trees during a single playthrough.); One Big Family (Reach a population of 100 beavers.); One Big Colony (Reach a population of 250 beavers.); One Big... Horde? (Reach a population of 500 beavers.); Survivor (Survive 5 cycles on one map.); Survival 101 (Survive 10 cycles on one map.); Wasteland Expert (Survive 20 cycles on one map.); Legendary Pioneer (Survive 50 cycles on one map.)."
            ]
        },
        {
            "heading": "Misfortunes (Hidden)",
            "body": [
                "The ten easter-egg achievements: a beaver born or a bot built after extinction, exploding a unit with dynamite, the 'Quadfecta of Misery' death, back-to-back badtides, a bee sting, an injured newborn, flooding a building, demolish-and-rebuild, and placing dynamite at the bottom of the map.",
                "The achievements here: Castor Posthumus (As Iron Teeth, have a beaver born after the beaver population has dropped to 0 (bots keep the colony alive).); Time of the Bots (Build a bot after all beavers have gone extinct.); Oops! (Have a beaver (or bot) on the same tile as a stick of dynamite when it detonates.); Quadfecta of Misery (Have a beaver die while affected by injury, contamination, hunger and thirst all at once.); Not Again! (Experience two badtides in a row (a badtide immediately followed by another).); Not the Bees! (As Folktails, have a beaver be stung by a bee.); Desert of the Real (As Iron Teeth, have a beaver born from an Advanced Breeding Pod and get injured on the same day.); Wet Floor (Flood a building with water.); It Happens. (Demolish a building and place an identical one in its spot right afterwards.); Rock Bottom (Attempt to place dynamite at the lowest level of the map.)."
            ]
        },
        {
            "heading": "Factions, Well-being & Basics",
            "body": [
                "Curing a contaminated beaver, unlocking the Iron Teeth, the average-well-being ladder from 4 to the maximum, building a bot, covering one badwater source, both faction Master Builder goals, building a Dam and a Campfire, and surviving your first badtide and drought.",
                "The achievements here: We Have the Technology (Cure a contaminated beaver.); Iron Teeth at the Ready (Unlock the Iron Teeth faction.); That's... Acceptable (Reach average well-being of 4.); That's... Okay (Reach average well-being of 10.); That's... Nice (Reach average well-being of 20.); That's... Good (Reach average well-being of 30.); That's... Awesome (Reach average well-being of 40.); That's... Amazing (Reach average well-being of 50.); That's... Incredible (Reach average well-being of 60.); That's... Paradise! (Reach max average well-being.); Created in Beaver’s Image (Build a bot.); Fixed a Leak (Cover a badwater source on the map using one of the dedicated buildings.); Folktails Master Builder (Build one of every building and structure available to Folktails.); Iron Teeth Master Builder (Build one of every building and structure available to Iron Teeth.); It's an Instinct (Build a Dam.); Crackling with Ideas (Build a Campfire.); Not Bad! (Survive your first badtide.); Smell of Water in the Morning (Survive your first drought.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a long Folktails run: launch the wonder, do the wind-turbine and zipline challenges, plant trees, climb the well-being ladder.",
                "2. Play a long Iron Teeth run: the wonder, the no-housing 200-population feat, the tubeway and hydroponic challenges, the Master Builder goal.",
                "3. Keep one save going for the big milestones - 50 cycles, 500 population, 10,000 trees.",
                "4. Do the remaining engineering challenges (power methods, single-day targets, gravity batteries, three wonders at once).",
                "5. On a throwaway save, set up the ten hidden 'misfortune' gags deliberately.",
                "Tip: for 'Castor Posthumus' and 'Time of the Bots', back up your save first, wipe the population fastest with dynamite, keep bots running the breeding pod, and let a new beaver be born."
            ]
        }
    ]
};
