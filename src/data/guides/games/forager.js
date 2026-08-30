// Forager Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/forager.json), whose 103 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   751780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "forager-achievement-guide",
    "category": "game",
    "gameSlug": "forager",
    "icon": "🪓",
    "title": "Forager Achievement Guide",
    "summary": "A practical guide to all 103 Steam achievements in Forager - none are hidden. Covers the dungeon and galaxy-puzzle completions and combat feats, the gathering, building and hoarding grind milestones, and the museum bundles, collector feats, Void levels and nuclear-tier endgame.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Forager has 103 Steam achievements and none of them are hidden. They cover the whole game: completing the four dungeons and the four Galaxy puzzles, a run of combat and skill feats (a no-damage dungeon, a 3-enemy sword slash, a lethal-attack dodge), enormous grind milestones (5,000 items in your inventory, a million coins, 10,000 items crafted, 100 fish caught), completing every museum bundle, learning every skill, buying every land, the collector feats (every tool, seal, artifact and accessory), reaching Void level 30, defeating the three kings, and the nuclear-tier endgame (a billion and then a trillion coins, 100 nuclear structures).",
                "Nothing is missable - the world is persistent and every counter accumulates in a single save. The completion is medium-length and mostly relaxed; the long tails are Trillionaire (a trillion coins), Void Master (Void level 30) and Production Master (100 nuclear structures).",
                "Tip: automation is the whole endgame - once you unlock Droids, mining rods, banks and the nuclear structures, a well-laid-out island runs itself, so build a compact automated coin-and-resource factory and let it idle while you sleep or do other things to reach the trillion-coin and 100-nuclear-structure milestones."
            ]
        },
        {
            "heading": "Dungeons, Puzzles & Combat Feats",
            "body": [
                "The early feats: mining the giant crystal, one of each gem, 10 max health, completing the four dungeons (Ancient Tomb, Skull Maze, Crystal Cave, Fire Temple) and the four Galaxy puzzles, a no-damage dungeon, a blood ritual, the combat feats (single-arrow kill, 3-enemy sword slash, killing a magic deer, all giant beets, the ice wizard challenge), and the droid, bomb, gem-eating and death-count feats.",
                "The achievements here: Tycoon (Own 10 lands and 5,000 coins); Miner (Mine the giant crystal); Royal (Gather royal steel or royal clothing); Gemologist (Have one of each gem in your inventory); Tough (Have 10 max health); Tomb Raider (Complete the Ancient Tomb); Pathfinder (Complete the Skull Maze); Ice Breaker (Complete the Crystal Cave); Demon Hunter (Complete the Fire Temple); Ancient Astronomer (Solve the Ancient Galaxy puzzle); Skull Astronomer (Solve the Skull Galaxy puzzle); Frozen Astronomer (Solve the Frozen Galaxy puzzle); Fire Astronomer (Solve the Fire Galaxy puzzle); Unscarred (Complete a dungeon without taking damage); Occult (Perform a challenging blood ritual); Jester (Fail miserably at a trivia minigame); Sharpshooter (Kill an enemy with a single arrow shot); Swordmaster (Kill 3 enemies or more with a single sword slash); Winner (Win the jackpot at a slot machine); Greedy (Kill a magic deer); Monster (Kill all giant beets); Duelist (Win the ice wizard challenge); Rainbuddy (Use a bottled rainbow); Robotic (Activate a droid); Bomberman (Have 3 bombs active at once); Spelunker (Dig up an archaeology item); Gourmand (Eat a gem); Hopeless (Die 10 times)."
            ]
        },
        {
            "heading": "Grind Milestones & Collection",
            "body": [
                "The grind milestones: building 20 / 200 structures, 100 kills, the 100-jelly / 100-poop / 50-fish / 1,000-item / 5,000-item hoards, watering and planting 100 seeds, 100,000 and 1,000,000 coins, 500 furnace items and 2,000 coins crafted, 20 big treasure chests, 50 items dug, 10,000 items crafted, opening a skull chest, building on every water tile, finding 3 and every secret room, the arrow / dodge / gravestone / critter feats, talking to every NPC, every NPC quest, and helping each of the NPCs (Druid, Princess, Wizard, Goblin, Fairy Queen, Engineer, Ghost, Old Man, Fox).",
                "The achievements here: Addicted (Play the game for 3 hours); Mason (Build 20 structures); Expansionist (Own 5 lands); Destroyer (Kill 100 enemies); Jealous (Have 100 jelly in your inventory); Disgusting (Have 100 poop in your inventory); Angler (Catch 50 fish); Hoarder (Have 1,000 items in your inventory); Big Hoarder (Have 5,000 items in your inventory); Irrigator (Water 100 seeds); Harvester (Plant 100 seeds); Wealthy (Have 100,000 coins); Millonaire (Have 1,000,000 coins); Smelter (Craft 500 furnace items); Mint (Craft 2,000 coins); Treasure Hunter (Open 20 big treasure chests); Digger (Dig up 50 items); Artisan (Craft 10,000 items); Constructor (Build 200 structures); Champion (Open a skull chest); Waterproof (Build on top of every water tile); Secret Finder (Find 3 secret rooms); Enlightened (Find every secret room); Marksman (Shoot 100 arrows); Acrobat (Dodge 10 attacks); Daredevil (Dodge a lethal attack); Pillager (Destroy 100 gravestones); Bug Catcher (Bottle 100 critters); Extrovert (Talk to every NPC); Diligent (Complete every NPC quest); Druid Helper (Help the Druid); Princess Helper (Help the Princess); Wizard Helper (Help the Wizard); Goblin Helper (Help the Goblin); Fairy Helper (Help the Fairy Queen); Engineer Helper (Help the Engineer); Ghost Helper (Help the Ghost); Old People Helper (Help the Old Man); Fox Helper (Help the Fox)."
            ]
        },
        {
            "heading": "Museum Bundles, Mastery & Endgame",
            "body": [
                "Completing each museum bundle (Foraging, Mining, Building, Farming, Cooking, Alchemy, Trapping, Archaeology) and every bundle, learning every skill, buying every land, the collector feats (every tool, accessory, seal and artifact), Completionist, the Void levels (5 / 10 / 20 / 30), lighting all Skull Maze torches, Void and Cosmic gear, a sigil, defeating the Slime King, Skeleton King and Dark Beet, a million coins via banks, upgrading all rods, a billion and a trillion coins, the Toxic Guardian, and the nuclear-tier endgame (Nuclear item, nuclear-powered structure, 100 nuclear structures).",
                "The achievements here: Master Forager (Complete the museum Foraging bundle); Master Miner (Complete the museum Mining bundle); Master Builder (Complete the museum Building bundle); Master Farmer (Complete the museum Farming bundle); Master Chef (Complete the museum Cooking bundle); Master Alchemist (Complete the museum Alchemy bundle); Master Trapper (Complete the museum Trapping bundle); Master Archaeologist (Complete the museum Archaeology bundle); Curator (Complete every museum bundle); Skillful (Learn every skill); Imperialist (Buy every land); Treasure Master (Open all big treasure chests); Tool Collector (Collect every tool and weapon); Accessory Collector (Collect every accessory); Seal Collector (Collect every seal); Artifact Collector (Collect every artifact); Completionist (Achieve every other feat); Void Scout (Reach Void level 5); Void Explorer (Reach Void level 10); Void Champion (Reach Void level 20); Void Master (Reach Void level 30); Illuminator (Light all torches in the Skull Maze); Other Worldly (Get a Void gear item); Galactic (Get a Cosmic gear item); Summoner (Obtain a sigil); Slime Regicide (Defeat the Slime King); Bone Regicide (Defeat the Skeleton King); Not A Monster (Defeat the Dark Beet); Coin Collector (Make 1 million coins using banks); Unlimited Power (Upgrade all rods); Billionaire (Have 1,000,000,000 coins); Trillionaire (Have 1,000,000,000,000 coins); Toxic Vanquisher (Defeat the Toxic Guardian); Radioactive (Obtain a Nuclear tier item); Mad Scientist (Upgrade a structure to use nuclear power); Production Master (Own 100 nuclear structures at once)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore and expand across the four biomes, completing the four dungeons and Galaxy puzzles and doing the combat and skill feats as you go.",
                "2. Learn every skill and buy every land as your economy grows, and complete each museum bundle by donating the required items.",
                "3. Set up automation - Droids, mining rods, banks - and let the grind milestones (10,000 items crafted, item hoards, coin totals) accumulate.",
                "4. Do the collector feats (every tool, accessory, seal, artifact), help every NPC, and defeat the three kings and the Toxic Guardian.",
                "5. Push the Void to level 30, unlock the nuclear tier, build toward 100 nuclear structures, and idle the automated economy up to a trillion coins for the final achievements.",
                "Tip: the Void levels and the endgame coin totals are much faster if you funnel everything into banks and the highest-tier mints - a ring of banks around a coin factory compounds interest, and the trillion-coin milestone becomes an overnight idle rather than an active grind."
            ]
        }
    ]
};
