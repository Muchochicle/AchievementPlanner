// Craft The World Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/craft-the-world.json), whose 94 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   248390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "craft-the-world-achievement-guide",
    "category": "game",
    "gameSlug": "craft-the-world",
    "icon": "⛏️",
    "title": "Craft The World Achievement Guide",
    "summary": "A practical guide to all 94 Steam achievements in Craft The World - none are hidden. Covers early survival and crafting milestones, campaign progression and endurance feats, exploration and multiplayer battles, and the game's bosses and endgame gear sets.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Craft The World has 94 Steam achievements and none are hidden. The list covers early dwarf-fortress survival (killing monsters, collecting resources, crafting your first item, surviving a monster wave), the four-level singleplayer campaign, long-haul endurance feats (100+ hours played, surviving a full level unscathed), a large multiplayer block covering PvP, co-op, and server-hosting achievements, and a late-game boss and gear-set block (the Kraken, the Sphinx, a ghost ship captain, the Goblin Chief, an alien base, and full armor sets).",
                "Nothing is missable - every kill count, crafted item, and campaign level stays a permanent save-file or account record, and multiplayer achievements accumulate across every session you play. The genuine long poles are the big time-investment achievements (100+ hours played, 12+ hour server uptime) and Total crafter (craft every recipe in the tech tree), which needs a genuinely complete playthrough rather than a focused rush.",
                "Tip: several achievements are tied to specific biome worlds and boss fights (the Kraken, the Sphinx, the Goblin Chief, the alien base) that only appear once you travel to their respective biomes - if you are hunting a specific boss achievement, check which biome or world it belongs to before searching for it in your home base."
            ]
        },
        {
            "heading": "Early Survival & Crafting",
            "body": [
                "The opening milestones: killing 10 Goblins, collecting 999 resources, collecting 100 bones, surviving a monster wave, crafting your first item, collecting 100 zombie brains, casting imps, killing 10 chickens, completing the first campaign level, studying 50+ creatures, giving beer to all dwarves, a 100%-comfort shelter, one dwarf killing 100 foes, improving every dwarf's skills, crafting 200 items at once, archers killing 100 foes, one dwarf traveling 1000 blocks, collecting 200 gold ore, converting 50 monsters into snails, and killing 10 giant skeletons.",
                "The achievements here: Goblinator (Kill 10 Goblins); Collector (Collect 999 resources); Get your own skeleton in the cupboard (Collect 100 bones); Survival (Survive in monsters wave); Long way begin (Craft 1st item); Bra-a-a-ins! (Collect 100 zombie's brains); Flying assistants (Cast imps); Chicken exterminator (Kill 10 chickens); Land holder (Complete 1st level of campaign); Naturalist (Study more than 50 creatures); Oktoberfest (Give beer to all dwarves); Palace (Build shelter with 100% comfort); Even alone is a warrior! (One dwarf killed 100 foes); Foreman (Improve all dwarf's skills); Megacrafter (Craft 200 items at a time); Who needs elves! (Archers killed 100 foes); Sinbad the pedestrian (One dwarf passed 1000 blocks); True dwarf! (Collect 200 gold ore); More snails! (Convert 50 monsters into snails); The worst that could happen (Kill 10 giant skeletons)."
            ]
        },
        {
            "heading": "Campaign & Endurance",
            "body": [
                "Campaign progression and long-haul feats: building a shelter inside a pyramid, completing the second campaign level, killing 50 Goblins, reaching hardcore level 12, building a 100-block railway, breaking a pyramid sarcophagus, reaching level 14, a level where every dwarf survives, killing 10 monsters in 2 seconds, crafting every tech-tree recipe, 100+ hours played, a giant mite killing a dwarf, breaking 10 pyramid blocks, completing the third campaign level, killing a giant worm, using Magic Explosion 10 times, cooking every dish, building 10 machine-tools at one level, reading 100 books, killing 100 monsters with spells, destroying 10 giant ant nests, extracting all minerals at one level, 5 simultaneous open monster portals, spending 200 gold coins, and completing the fourth campaign level.",
                "The achievements here: I am a pharaoh (Build shelter inside a pyramid); Winter master (Complete 2nd level of campaign); Total annihilation (Kill 50 Goblins); Hardcore man (Reach 12 level in hardcore mode); Railwayman (Build a railway 100 blocks long); Tomb rider (Break the pyramid's sarcophagi); Underground king (Reach 14 level); Invulnerable (All dwarves should survive at a level); Blood lust (Kill 10 monsters in 2 seconds); Total crafter (Craft all tech tree recipes); Long-playing (Above 100 hours in the game); Bad day (Giant mite killed a dwarf); Persistence (Break 10 pyramid's blocks); Sand master (Complete 3rd level of campaign); Worm hunter (Kill giant worm); Sapper (Use Magic Explosion spell 10 times); Gourmet (Cook all dishes); Manufacturer (Build 10 machine-tools for items crafting at one level); Bookworm (Read 100 books); God Hand (Kill 100 monsters with your spells); Disinsector (Destroy 10 nests of giant ants at one level); Professional Miner (Extract all minerals at one level); Armageddon (Reach for 5 simultaneously open monsters portals); Shopping (Spend 200 gold coins); Dungeon Keeper (Complete 4th level of campaign)."
            ]
        },
        {
            "heading": "Exploration & Multiplayer I",
            "body": [
                "Exploration and the first multiplayer block: traveling to any biome, reviving a dwarf from the soul keeper, freeing 20 yetis, playing and winning multiplayer and co-op battles, PvP wins, biome boost rooms, winning 50 biome battles, stealing 100 items in one battle, using 50 mercenaries in one battle, bringing back 1000 resources from a biome, creating and keeping a server online for 3 and then 12 hours, opening every technology in one survival session, maxing 5 dwarves' battle skills in multiplayer, 5 hours in Creative mode, a full server, and sharing resources with other players.",
                "The achievements here: Sliders (Travel to any biome); Reviver (Revive a dwarf from soul keeper); Liberator (Free 20 yetis from captivity); Multidwarf (Play 10 multiplayer battles); Get strong together (Win 10 cooperative multiplayer battles); Alpha Dwarf (Win 20 PvP multiplayer battles); Overboost (Grab at least a half boost rooms at the biome); Great Explorer (Win 50 battles at biomes); Thief (Steal at least 100 items during 1 battle at the biome); Mercenaries exploiter (Use at least 50 mercenaries during 1 battle at the biome); Burst of greed (Bring back from biome at least 1000 resources); Creator of the public world (Create multiplayer server); World Keeper (Keep server online during 3 hours); Great World Keeper (Keep server online during 12 hours); Military Researcher (Open all technologies during one session in survival mode); Hird of Dwarves (Level up one of the battle skills for 5 dwarves to maximum in multiplayer game); Free Builders (Play 5 hours in Creative mode); Overpopulation (Create server with maximum number of active players); Supplier (Share resources with other players); Major Supplier (Share 1000 resources with other players)."
            ]
        },
        {
            "heading": "Multiplayer II",
            "body": [
                "The rest of the multiplayer block: dying inside the Crookshanks, killing 10 banshees, losing a multiplayer battle, building a portal on your own server (and again at high difficulty), collecting the maximum resources for a multiplayer victory, inflicting maximum damage for victory, defending the dwarves' shelter for 3 and then 12 hours, and avoiding all damage to the main stockpile in a multiplayer game.",
                "The achievements here: You've been digested! (Your dwarf have died inside the Crookshanks); Don't even try to shout! (Kill 10 banshee); Epic defeat! (Lost multiplayer battle); Dwarfgineer (Build up portal at your own server); Military Engineer (Build up portal at your own server at high level of difficulty ); Collector (Collect maximum amount of resources for multiplayer victory); Major Defender (Inflict maximum amount of damage to monsters for victory); Fortress Defender (Help to defend dwarves’ shelter during 3 hours in multiplayer game); Castle Defender (Help to defend dwarves’ shelter during 12 hours in multiplayer game); Blameless (Avoid of damage main stockpile during multiplayer game)."
            ]
        },
        {
            "heading": "Bosses & Endgame",
            "body": [
                "The late-game boss fights and gear: defeating the Kraken, the Sphinx, and a ghost ship captain, healing a lycanthropy curse, defeating the Goblin Chief from a wyvern, raising and equipping a riding wyvern, destroying the alien base and shuttle, completing the Lonely Mountain, Heart of Evil, and Wonderwood worlds, equipping the Guardian of the Mountain set, forging the Great Ring, equipping a full alien armor set, restoring a broken item, destroying 10 alien bases, destroying 25 clouds of midges, killing 50 dark elves, and equipping a full elven wood armor set.",
                "The achievements here: Monster from the Depths (Defeat the Kraken in The Land of Dangerous Caves.); The Sphinx’s Riddle (Defeat the Sphinx in the Land of Dry Winds.); Two heads are better than none! (Defeat the captain of the ghost ship.); Defeat the animal within yourself (Heal a dwarf from the lycanthropy curse.); No one will help the green-skins! (Defeat the Goblin Chief from the back of a wyvern.); Those born to dig can also fly (Raise a riding wyvern and equip a dwarf with it.); The War of the Worlds (Destroy the alien base.); UFO (Destroy the alien shuttle.); Lonely Loner (Complete the world of Lonely Mountain.); Right to the Heart! (Complete the world of Heart of Evil.); Out of the Woods! (Complete the world of Wonderwood.); Guardian of the Mountain (Equip the dwarf in the full Guardian of the Mountain set.); Lord of the Rings (Forge the Great Ring.); Warrior of the Future (Equip the gnome with a full set of alien armor.); Made It! (Restore a broken item.); Galaxian (Destroy 10 alien bases.); Nasty Things (Destroy 25 clouds of midges.); Their Name is Legion! (Kill 50 dark elves.); The Power of the Forest (Equip the dwarf with a full set of elven wood armor.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a survival game and work through the early milestones: kill goblins and chickens, collect resources and bones, craft your first item, survive a monster wave, and complete your first campaign level.",
                "2. Push dwarf development and base-building: study creatures, build a 100%-comfort shelter, improve every dwarf's skills, and work toward the campaign's remaining levels (Winter, Sand, Dungeon Keeper).",
                "3. Chase the long-haul survival and crafting feats: 100+ hours played, one dwarf surviving 1000 blocks traveled, craft all tech-tree recipes, and a level where every dwarf survives.",
                "4. Play multiplayer regularly toward the PvP, co-op, and server-hosting achievements - win battles, share resources, host and keep a server online for hours at a time.",
                "5. Travel to the game's various biomes and worlds for the boss fights and gear sets: the Kraken, the Sphinx, the ghost ship captain, the Goblin Chief (from a wyvern), the alien base and UFO, and the Guardian of the Mountain, elven wood, and alien armor gear sets.",
                "Tip: Total crafter (craft every recipe) and the full gear-set achievements (Guardian of the Mountain, elven wood armor, alien armor) are best pursued together in one long-running save, since crafting recipes and gear pieces both accumulate naturally as you progress through every biome rather than needing a dedicated separate run."
            ]
        }
    ]
};
