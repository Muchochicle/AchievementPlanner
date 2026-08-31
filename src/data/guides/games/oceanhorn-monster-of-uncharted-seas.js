// Oceanhorn Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/oceanhorn-monster-of-uncharted-seas.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   339200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "oceanhorn-monster-of-uncharted-seas-achievement-guide",
    "category": "game",
    "gameSlug": "oceanhorn-monster-of-uncharted-seas",
    "icon": "🌊",
    "title": "Oceanhorn Achievement Guide",
    "summary": "A practical guide to all 63 Steam achievements in Oceanhorn - none are hidden. Covers the early adventure and combat achievements, the puzzle / feat / shop achievements, the Adventurer Level ranks, and the late-game and fishing achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Oceanhorn: Monster of Uncharted Seas has 63 Steam achievements and none are hidden. They cover the story and exploration (visiting all islands, the dungeons, Grand Core), a large combat block (three-kill sword blows, drowning enemies, killing with jars and burning arrows, 100 Direfolk), the collectibles (heart pieces, Bloodstones, Cursed Skulls, all seven fish types), the shop and spell goals, and the fourteen Adventurer Level rank-ups (Traveler through Archmage), which are earned by accumulating experience.",
                "The catalog marks it a single playthrough - the Adventurer Levels and 'Encyclopedia Monstrum' (defeat every monster type) accrue naturally over a completionist run, and nothing is missable in this Zelda-like adventure.",
                "Tip: fish at every dock you pass - the seven 'catch your first X' fish achievements are the easiest to overlook, and some fish only appear in specific waters you might not revisit."
            ]
        },
        {
            "heading": "Early Adventure & Combat",
            "body": [
                "Your first 25 coins, reading 10 signs, father's sword and shield, shipping an item, 15 Fire Spell melts, a 500 m swim, your first Piece of Heart, the Cepedes and Grand Core-entrance fights, Rusty's treasure, the Trencher Boots, all Bloodstones, drowning an enemy, the Legend rank, all islands, Encyclopedia Monstrum, 50 Spawn, 100 crates, 8 heart containers, a laser-beam kill, the Arcadian History, a three-kill sword blow, a crate-push kill, 50 skeletons, and 10 shield bounces.",
                "The achievements here: Pocket Money (Collect your first 25 coins); Smart Guy (Read at least 10 signs); Not Far from Tree (Get father's sword and shield); Frutti di Terra (Ship an item to another island); Fire Walk with Me (Melt objects 15 times using Fire Spell); Seasnake (Swim 500 meters); First Piece (Find your first Piece of Heart); Exterminator (Defeat the Cepedes of Abandoned Mines); Rusty's Treasure (Use your wits to reveal the hidden treasure); Tough as a Boot (Break a crate with Trencher Boots); Crimson Collector (Collect Bloodstones from all over the world); Down for Swimming (Drown an enemy by getting it into the water); Legend (Reach the highest Adventurer Level); Cosmopolitan (Visit all islands of Uncharted Seas); Encyclopedia Monstrum (Defeat every kind of monster in the game); Unspawn (Kill 50 Spawn); Blockbuster (Destroy 100 wooden crates); Vitality (Collect 8 heart containers); Blast'em! (Kill an enemy with a laser beam); Scholar (Study the Arcadian History); Champion from Below (Clear the entrance to Grand Core); Hat Trick (Kill three enemies with a single sword blow); Train Wreck (Kill an enemy by pushing a crate); Still Going (Smash 50 skeletons to pieces); Bouncer (Bounce an enemy with a shield 10 times)."
            ]
        },
        {
            "heading": "Puzzles, Feats & Shop",
            "body": [
                "A jar kill, freeing the Direfolk's prisoner, the first skill attack, 10 bomb-wall breaks, lifting the Forest Shrine curse, 100 object moves, protecting Tikarel, spending 2,000 coins, wielding all 5 spells, retiring 100 Direfolk, 10 combo attacks, collecting 1,000 coins, a burning-arrow kill, and the Honey Man mystery.",
                "The achievements here: Ceramic Killer (Kill an enemy with a jar); Making Friends (Release the Direfolk's prisoner); Secret Sword Art (Try the skill attack for the first time); Bomber Archeologist (Use bombs to break walls 10 times); Fabled Gardener (Lift the curse from the Forest Shrine); Hard Worker (Move crates and other objects 100 times); Town Sheriff (Protect the Peace in Tikarel); Hey, Big Spender! (Spend 2 000 coins in the shop); Wizard (Wield the power of all 5 spells); Old Enemy (Retire 100 Direfolk); Fast Blade (Perform 10 successful combo attacks); Sticky Finger (Collect 1000 coins); Shish Kebab (Kill an enemy with a burning arrow); Honey Man (Find out what happened to Honey Man)."
            ]
        },
        {
            "heading": "Adventurer Levels",
            "body": [
                "Reaching the Traveler, Wayfarer, Pilgrim, Rookie Adventurer, Adventurer, Pathfinder, Spellbinder, Explorer, Voyager, Vanguard, Centurion, Knight of Arcadia, Master and Archmage Adventurer Levels.",
                "The achievements here: Traveler (Reach 'Traveler' Adventurer Level); Wayfarer (Reach 'Wayfarer' Adventurer Level); Pilgrim (Reach 'Pilgrim' Adventurer Level); Rookie Adventurer (Reach 'Rookie Adventurer' Level); Adventurer (Reach the 'Adventurer' Level); Pathfinder (Reach 'Pathfinder' Adventurer Level); Spellbinder (Reach 'Spellbinder' Adventurer Level); Explorer (Reach 'Explorer' Adventurer Level); Voyager (Reach 'Voyager' Adventurer Level); Vanguard (Reach 'Vanguard' Adventurer Level); Centurion (Reach 'Centurion' Adventurer Level); Knight of Arcadia (Reach 'Knight of Arcadia'  Level); Master (Reach 'Master' Adventurer Level); Archmage (Reach 'Archmage' Adventurer Level)."
            ]
        },
        {
            "heading": "Late-Game & Fishing",
            "body": [
                "Collecting 10 Cursed Skulls, beating Creation No. 2, swimming to the Canals, and catching your first Sol Fish, Blue Fin, Fireback, Arcadian Pike, Goliath, Ghost Fish and Botfish.",
                "The achievements here: Witness (Collect 10 Cursed Skulls); Sleeping Giant (Beat the Creation No. 2); Secret Passage (Swim to Canals); Catch Sol Fish (Catch your first Sol Fish); Catch Blue Fin (Catch your first Blue Fin); Catch Fireback (Catch your first Fireback); Catch Arcadian Pike (Catch your first Arcadian Pike); Catch Goliath (Catch your first Goliath); Catch Ghost Fish (Catch your first Ghost Fish); Catch Botfish (Catch your first Botfish)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, visiting every island and clearing every dungeon.",
                "2. Fish at every dock for the seven fish achievements as you sail.",
                "3. Do the combat feats (three-kill sword blow, jar and burning-arrow kills, 100 Direfolk) as chances come up.",
                "4. Collect the heart pieces, Bloodstones and Cursed Skulls, and spend 2,000 coins in the shop.",
                "5. Keep earning experience for the fourteen Adventurer Level rank-ups and 'Legend'.",
                "Tip: 'Encyclopedia Monstrum' (defeat every monster type) is easy to miss one entry - check a bestiary list before the final area, as a couple of enemy types only appear on one island."
            ]
        }
    ]
};
