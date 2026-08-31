// Savage Lands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/savage-lands.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   307880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "savage-lands-achievement-guide",
    "category": "game",
    "gameSlug": "savage-lands",
    "icon": "🪓",
    "title": "Savage Lands Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Savage Lands - none are hidden. Covers the creature-kill counts, the survival tasks and building progression, and the crafting and multiplayer achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Savage Lands has 20 Steam achievements and none of them are hidden. Eight are creature-kill counts - first kill, 5 Deer / Wolves / Skeletons, 25 creatures, 3 Large Dire Wolves, 10 Undead Furies, 4 Forest Giants. Seven cover survival and building - complete all Day 1 tasks, build your first campfire, chop 10 trees, and build a Leanto, Wooden Shack, Forge and Town Hall. The rest are crafting (mine 25 items, craft your first weapon, a compass, the Wolfsbane Sword) and joining any server.",
                "Nothing is missable - every counter is cumulative and every structure and craft can be made on any playthrough.",
                "Tip: the only slow one is \"Guardian of the Isle\" (kill 4 Forest Giants) - they are tough late-game enemies, so build a Forge and craft good gear before hunting them."
            ]
        },
        {
            "heading": "Creature Kills",
            "body": [
                "First blood, killing 5 Deer, 5 Wolves and 5 Skeletons, 25 total creatures, 3 Large Dire Wolves, 10 Undead Furies, and 4 Forest Giants.",
                "The achievements here: First Blood (Kill 1 creature.); Oh Deer! (Kill 5 Deer.); Canine Conundrum (Kill 5 Wolves.); Brittle Bones (Kill 5 Skeletons.); Die Hard the Hunter (Kill 25 creatures.); Plagued by Wolves (Kill 3 Large Dire Wolves.); They Mostly Come at Night... Mostly. (Kill 10 Undead Furies.); Guardian of the Isle (Kill 4 Forest Giants.)."
            ]
        },
        {
            "heading": "Survival Tasks & Building",
            "body": [
                "Completing all Day 1 Tasks, building your first campfire, chopping 10 trees, and building a Leanto, a Wooden Shack, a Forge and a Town Hall.",
                "The achievements here: Task Master (Complete all Day 1 Tasks.); FIRE! (Build your first campfire.); Lumberjack That! (Chop down 10 trees.); The Basics (Build a Leanto.); 4 Walls and a Roof (Build a Wooden Shack.); Master Craftsman (Build a Forge.); Who Runs Barter Town? (Build a Town Hall.)."
            ]
        },
        {
            "heading": "Crafting & Multiplayer",
            "body": [
                "Mining 25 items from rocks, crafting your first weapon, a compass and the Wolfsbane Sword, and joining any Hostile or Friendly server.",
                "The achievements here: Prospector (Mine 25 items from any rock.); Clobbering Time (Craft your first weapon.); Which Way is North? (Craft a compass.); A Wolf's Bane (Craft Wolfsbane Sword.); Entering the Unknown (Join any Hostile or Friendly Server.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Complete the Day 1 tasks and build a campfire and a Leanto.",
                "2. Chop trees, mine rocks, and craft your first weapon and a compass.",
                "3. Build the progression structures - Wooden Shack, Forge, Town Hall.",
                "4. Grind the creature-kill counts (Deer, Wolves, Skeletons, Undead Furies) during normal survival.",
                "5. Craft the Wolfsbane Sword, gear up, and hunt 4 Forest Giants; join a server for \"Entering the Unknown\".",
                "Tip: the Wolfsbane Sword and a Forge-crafted armour set make the Dire Wolf, Undead Fury and Forest Giant kills far safer - do the building and crafting achievements before the harder kill counts."
            ]
        }
    ]
};
