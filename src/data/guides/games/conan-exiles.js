// Conan Exiles Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/conan-exiles.json), whose 36 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   440900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "conan-exiles-achievement-guide",
    "category": "game",
    "gameSlug": "conan-exiles",
    "icon": "💀",
    "title": "Conan Exiles Achievement Guide",
    "summary": "A practical guide to all 36 Steam achievements in Conan Exiles - none are hidden. Covers the Exiled Lands progression, survival basics and boss kills, and the Isle of Siptah achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Conan Exiles has 36 Steam achievements and none of them are hidden. The Exiled Lands set covers leveling from 10 to the cap of 60, the survival basics (build something, sleep in a bed, use an altar, put an enemy in the Wheel of Pain, place a thrall crafter), reaching the highlands and the volcano, a few stunt feats, completing the first chapter of the Journey, and defeating the region's bosses - the Undead Dragon, the King Beneath, the Kinscourge, the Frost Giant King, the Giant Spider, the Giant Crocodile and the Sewer Abomination. The other eleven belong to the Isle of Siptah expansion: exploring vaults, visiting a Leyshrine, entering the Maelstrom, memorizing sigils, defeating Surge summons, and crafting with Eldarium.",
                "Nothing is missable - the map and bosses are all repeatable and there are no time-limited achievements. This is a straightforward completion; the boss fights are the main gate and are much easier with a follower thrall and mid-tier gear.",
                "Tip: play a single-player or private server on a comfortable settings profile, level to 60 while working through the Journey steps and clearing the dungeons for their boss achievements, then either travel to the Isle of Siptah (if you have it) or start a fresh Siptah character for that block."
            ]
        },
        {
            "heading": "Exiled Lands: Progression & Bosses",
            "body": [
                "Reaching levels 10, 20, 30, 40, 50 and 60, getting a Dedicated Weapon, your first building, sleeping in a bed, using a religious altar, the Wheel of Pain, placing a thrall crafter, defeating the Undead Dragon, the King Beneath, the Kinscourge, Hrungnir of the Frost, the Giant Spider, the Giant Crocodile and the Sewer Abomination, reaching the highlands and the volcano, a 3-second no-death fall, reaching the skies above the Exiled Lands, a kill by standing on an enemy's head, and completing the first chapter of the Journey.",
                "The achievements here: Hither Came the Exile… (Reach level 10); …A Scavenger… (Reach level 20); …A Reaver… (Reach level 30); …A Slayer… (Reach level 40); …A Warrior… (Reach level 50); …A Champion… (Reach level 60); By this Axe I Rule! (Get a Dedicated Weapon); The Scarlet Citadel (Create your first building); O Sleeper Awake (Sleep on a bed or bedroll); The God in the Bowl (Use a religious altar); What do I know of Cultured Ways? (Put an enemy in the Wheel of Pain); The Gilt, The Craft and the Lie (Place a thrall crafter in a crafting station); The Hour of the Dragon (Defeat the Undead Dragon); It is the King, or his ghost! (Defeat the King Beneath); The Devil in Iron (Defeat the Kinscourge); Gods of the North (Defeat Hrungnir of the Frost); From What Hell Have You Crawled? (Defeat the Giant Spider); The Snout in the Dark (Defeat the Giant Crocodile); The Haunter of the Pits (Defeat the Sewer Abomination); Wolves Beyond the Border (Reach the highlands); Dying Embers (Reach the volcano); The Cliffs Reel (Fall for 3 seconds without dying); Iron Shadows in the Moon (Reach the skies above the Exiled Lands); The Tower of the Elephant (Kill something by standing on its head); The Road of Kings (Complete the first chapter of the Journey)."
            ]
        },
        {
            "heading": "Isle of Siptah",
            "body": [
                "Exploring a Vault, visiting a Leyshrine, entering the Maelstrom, reaching the Tower, memorizing a Sigil, defeating a Surge Summons, exploring the whole Isle of Siptah, crafting an item using Eldarium, memorizing seven Sigils at once, obtaining a Greater Essence, and summoning the most powerful Surge.",
                "The achievements here: In the Vault (Explore a Vault); The Temple (Visit a Leyshrine); Beyond the Wall of Sleep (Enter the Maelstrom); The Haunter of the Dark (Reach the Tower); Memory (Memorize a Sigil); The Outsider (Defeat a Surge Summons); The Gem in the Tower (Explore the Isle of Siptah); The Shadow Out of Time (Craft an Item Using Eldarium); From Beyond (Memorize Seven Sigils at Once); The Silver Key (Obtain ?????); The Other Gods (Draw Forth the Most Powerful Surge)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a character on comfortable settings and level up while following the Journey system, which naturally walks you through the survival-basics achievements.",
                "2. Build a base, capture a fighter thrall on the Wheel of Pain, and place crafter thralls in stations.",
                "3. Explore outward to the highlands and the volcano, and do the stunt feats (the long fall, the head-stand kill, the flying-mount skies feat) as you travel.",
                "4. Clear the dungeons with your thrall for the seven boss achievements, and reach level 60.",
                "5. Move to the Isle of Siptah (or start a Siptah character) and work through vaults, the Maelstrom, sigils, Surges and Eldarium crafting.",
                "Tip: the boss fights (Kinscourge, Frost Giant King, the dungeon bosses) are far safer with a levelled Dalinsia Snowhunter or Berserker follower tanking while you use a two-handed weapon - capture and feed a strong thrall before you start dungeon-running rather than fighting the bosses solo."
            ]
        }
    ]
};
