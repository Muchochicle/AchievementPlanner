// Craftopia Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/craftopia.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1307550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "craftopia-achievement-guide",
    "category": "game",
    "gameSlug": "craftopia",
    "icon": "🪓",
    "title": "Craftopia Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Craftopia (1 hidden). The one hidden achievement is the all-achievements completion. Everything else - the boss and dungeon clears, the exploration and Wedge Tower repairs, and the crafting, automation, taming and level grinds - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Craftopia has 50 Steam achievements, 1 of them hidden. It is a sprawling survival-crafting sandbox that mixes farming, hunting, automation and hack-and-slash across biome-hopping islands. The visible achievements cover the boss kills (King Mono, Ancient Golem, Fleur, Dragon, Griffon, Bone Dragon, the Lv 255 Anubis fights), clearing every Ruin and Old Garden dungeon and the Grinding Dungeon 100 times, the exploration feats (reach Anubis's floating island, the tallest and deepest points), repairing every Wedge Tower, the automation and crafting milestones (a 200-connection pipeline, the War Tank, the Prototype Rocket, refinement level 100, 300 enchantment types, 100,000,000 G), the taming goals (Dragon, Anubis, Camille, pet level 50), and player level 50, plus the Boss Rush Dungeon floors 10 and 100.",
                "The 1 hidden achievement, 'Craftopia', is the all-achievements completion.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable - it is one persistent world - but the Lv 255 Anubis and Boss Rush floor 100 are a serious power grind."
            ]
        },
        {
            "heading": "Bosses & Dungeons",
            "body": [
                "The named boss kills (King Mono through Bone Dragon and the two Lv 255 Anubis fights), clearing every Ruin and Old Garden dungeon, the Grinding Dungeon 100 times, and the Boss Rush Dungeon floors 10 and 100.",
                "The achievements here: The Return of the King (Defeat King Mono.); Forehead Flicking (Defeat Ancient Golem.); Herbicide (Defeat Fleur.); Getting Bored of Slaying Dragons… (Defeat Dragon.); Gryps Conflict (Defeat Griffon of Golden Sky.); Calcium Deficiency (Defeat Bone Dragon.); Enter the Dungeon (Clear Ruin of Beginning.); Death After Death (Clear Old Garden of Undead.); Who's the Hunter Now? (Clear Ruin of Hunters.); Maneuver Kill (Clear Old Garden of Storms.); Noble Bullfrog (Clear Labyrinth of Torrent.); Skillful Executioner (Clear Old Garden of Massacre.); Chill Down the Spine (Clear Ruin of Everfrost.); Over the Dungeon (Clear Grinding Dungeon of Difficulty Hell 100 or more times.); Breaker of the Divine Scales (Defeat Lv 255 Anubis, Harbinger of Divine Punishment.); Shadow That Defies Judgment (Defeat Lv 255 Judging God <<Anubis>>.)."
            ]
        },
        {
            "heading": "Exploration & Wedge Towers",
            "body": [
                "Reaching Anubis's floating island, the tallest and deepest points of the world, and repairing every Wedge Tower across the biomes.",
                "The achievements here: How Many Miles to the Summit? (Reach Anubis's floating island.); Beanstalk (Reach the highest point of the big tree in Archipelago.); Ground Zero (Reach the deepest point of the large hole in Valley.); The Highest Peak (Reach the highest point of the pinnacle floating on top of the Sherbert Iceberg.); Power of Tower (Repair Wedge Tower in Geezah Plateau.); Is It Higher Than a Windmill? (Repair Wedge Tower in Millewind Hill.); Right Spot to Find a Prey (Repair Wedge Tower in Yarden Meadow's Mountain.); How Much Is It Worth...?…？ (Repair Wedge Tower in Yarden Meadow's Ruin.); Landscape Protection (Repair Wedge Tower in Owatatsu Archipelago.); Height Difference (Repair Wedge Tower in Brigandine Valley.); Still Lower Than Mountains (Repair Wedge Tower in Sherbert Iceberg.)."
            ]
        },
        {
            "heading": "Crafting, Automation & Taming",
            "body": [
                "The War Tank and Prototype Rocket, the 200-connection pipeline, the Artificial Monolith, breeding and livestock, refinement level 100, 10,000 Stored Energies, 300 enchantment types, a Tier 5 skill, 100,000,000 G, catching the Kraken, Adamantite, taming Dragon / Anubis / Camille, pet level 50, player level 50, and the all-achievements completion.",
                "The achievements here: Craft of Tanks (Craft War Tank.); The sky's the limit... (Launch Prototype Rocket.); Pipeline is Lifeline (Build a continuous pipeline with 200 or more connections.); 1：4：9 (Craft Artificial Monolith.); Blasphemy Against Life (Produce 100 or more lives at Breeding Facility.); Coal Miner (Mine from Bedrock with Excavator.); Put Food on the Table (Put Livestock Farm in operation.); Disassembler (Reach Refinement Level 100 or higher.); 1000 Practice Swings (Obtain 10000 Stored Energies.); Enchanter (Collect 300 or more kind of Enchantments.); Specialist (Learn Tier 5 Skill.); Millionaire (Obtain 100,000,000 G.); You'll Know Squid or Octopus If You Grill (Catch Kraken.); This Mineral Used to Be Legendary (Obtain Adamantite.); Dragontamer (Tame Dragon as a pet.); Blasphemy Against the God (Tame Anubis as a pet.); Non-Humanitarian (Tame Camille as a pet.); Breeder (Reach Pet Level 50 or higher.); Veteran (Reach Player Level 50 or higher.); Professional Jack of all Trades (Complete 40 or more quests.); Conqueror of the Gate of Trials (Reach Floor 10 of the Boss Rush Dungeon.); Beyond a Hundred Deaths (Reach Floor 100 of the Boss Rush Dungeon.); Craftopia (Unlock every other achievement in the game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Progress through the story islands, clearing each Ruin and Old Garden dungeon and killing each named boss as you unlock the biomes.",
                "2. Repair every Wedge Tower and reach the world's tallest and deepest points and Anubis's floating island.",
                "3. Build out automation: a 200-connection pipeline, the War Tank, the Prototype Rocket, a breeding/livestock operation, and grind refinement and Stored Energy.",
                "4. Push power: player and pet level 50, Tier 5 skills, 300 enchantment types, tame Dragon then Anubis, and bank 100,000,000 G.",
                "5. Beat the Lv 255 Anubis fights and Boss Rush floor 100, then the 'Craftopia' all-achievements completion.",
                "Tip: automation is the whole game - a strong furnace/assembler/duplicator chain trivialises the enchantment, refinement, energy and money grinds at once, so invest in factory infrastructure early rather than hand-crafting toward each milestone."
            ]
        }
    ]
};
