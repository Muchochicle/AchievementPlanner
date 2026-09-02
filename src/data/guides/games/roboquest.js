// Roboquest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/roboquest.json), whose 86 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   692890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "roboquest-achievement-guide",
    "category": "game",
    "gameSlug": "roboquest",
    "icon": "🤖",
    "title": "Roboquest Achievement Guide",
    "summary": "A practical guide to all 86 Steam achievements in Roboquest (9 hidden). The hidden achievements are the three act completions, a boss self-destruct trick, the Superbot class and its feats, and two secret pickups. Everything else - class unlocks and clears, the counter grinds (damage, kills, powercells, wrenches, logs), the difficulty and rank-S clears, and Endless Mode - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Roboquest has 86 Steam achievements, 9 of them hidden. It is a fast roguelite FPS where a Guardian robot fights through procedural zones to the Moon. The visible achievements cover unlocking and clearing the game with each class (Guardian, Commando, Ranger, Elementalist, Recon, Engineer), the counter grinds (damage dealt, enemies destroyed, powercells, wrenches, Data-Logs, gadgets), the Basecamp upgrades and Compendium museum, the difficulty ladder up to Guardian 4 with rank S, and Endless Mode.",
                "The 9 hidden achievements are the three act-completion markers, triggering boss Billy Boom's self-destruct, unlocking the Superbot class and its clear and Hero Landing, and finding the secret Sword and rebooting the butler Alfred Beauregard. They are described here by requirement.",
                "The catalog marks it difficulty 3 and single-playthrough - though as a roguelite it takes many runs, and the Guardian 4 rank-S clear is the hardest single achievement. Nothing is missable; every run contributes to the counters."
            ]
        },
        {
            "heading": "Runs & Progression",
            "body": [
                "Act completions, boss takedowns, the Basecamp upgrades, the Compendium museum, the Commando class, and the Armor cap.",
                "The achievements here: Haven 8 (Complete Act 1 of a run.); Taking it Back! (Complete Act 2 of a run.); Moonwalker (Complete Act 3 of a run (reach the Moon).); Iron Maiden (Reach the maximum Armor bonus.); Home Sweet Home (Craft all Basecamp upgrades.); Oopsie... (Trigger the boss Billy Boom's self-destruct - stand close to him, or damage the switch on his back once his health is low, to fill his charge meter.); Boss Punisher (Bronze) (Take down 5 Bosses.); Boss Punisher (Gold) (Take down 15 Bosses.); Boss Punisher (Silver) (Take down 10 Bosses.); Meet my Brobot (Join a Brobot's game.); Field Mechanic (Reboot your Brobot.); Party Bus (Jump with the Hoverbus in the Loading Screen.); It's Gonna be a Looong Journey (Get knocked out in the Canyons.); Booyakasha (Finish the game as the Commando.); Special Delivery (Take down at least 3 different enemies with a single Rocket.); Commando (Unlock the Commando.); Gotta Catch' Em All (Complete the Museum.)."
            ]
        },
        {
            "heading": "Combat Milestones",
            "body": [
                "The crystal, damage, enemy-kill and gadget counters, the bomb defuse, and the Engineer class and first full clears.",
                "The achievements here: Crystal Claimer (Bronze) (Claim 1 Power Crystal.); Crystal Claimer (Gold) (Claim 6 Power Crystals.); Crystal Claimer (Silver) (Claim 3 Power Crystals.); Damage Dealer (Bronze) (Deal 10,000 damage.); Damage Dealer (Gold) (Deal 1,000,000 damage.); Damage Dealer (Silver) (Deal 500,000 damage.); Just in Time (Defuse the bomb within the last second.); Robo-Regulator (Bronze) (Take down 500 enemies.); Robo-Regulator (Gold) (Take down 10,000 enemies.); Robo-Regulator (Silver) (Take down 5,000 enemies.); Science Above All! (Finish the game as the Engineer.); For the Swarm! (Have at least 5 friends deployed at once as the Engineer.); Engineer (Unlock the Engineer.); Waaaaarp Zone! (Find and travel through the Portal.); Reboot (Finish the game.); Best Buddy Forever (Finish the game with Buddybot equipped.); Hardened Guardian (Finish the game on Guardian 4 difficulty.); Ultimate Guardian (Finish the game on Guardian 4 difficulty with rank S average.)."
            ]
        },
        {
            "heading": "Classes & Loot",
            "body": [
                "Multiplayer and rank-S clears, gadget unlocks, the Guardian feats, headbonks, the legendary-weapon and Data-Log milestones, the Corrupted level, and finding Buddybot.",
                "The achievements here: The Power of Friendship (Finish the game with a Brobot.); Perfect Run (Finish the game with rank S average.); Inspector Gadget (Bronze) (Unlock 1 Gadget.); Inspector Gadget (Gold) (Unlock 11 Gadgets.); Inspector Gadget (Silver) (Unlock 5 Gadgets.); Ammo Belt (Reach +75% bonus Ammo in a run as the Guardian.); The Last Bastion (Finish the game as the Guardian.); Whack-A-Mole (Take down Diggy Mole using the Bonk Hammer.); Mamma Mia (Perform 5 Headbonks in a row without landing.); Bazaar Best Friend (Have at least 15 Items equipped at once during a run.); Confrérie du Croissant (Change the game language to French.); Pimp my Buddy (Upgrade Buddybot to a Fantastic weapon.); Legen... wait for it... dary! (Equip a Fantastic weapon.); Nest of Corruption (Discover a Corrupted level.); Log Collector (Bronze) (Retrieve 1 Data-Log.); Log Collector (Gold) (Retrieve 51 Data-Logs.); Log Collector (Silver) (Retrieve 20 Data-Logs.); My Little Buddy (Find and pick up Buddybot.)."
            ]
        },
        {
            "heading": "More Classes & Gathering",
            "body": [
                "The Shovel pickup, the Elementalist, Recon and Ranger classes and their feats, the max-level and move-speed caps, the powercell-spending and gathering counters, the Excavation Site lever, and Wallstreet Slim.",
                "The achievements here: Shovel Knight (Find and pick up The Shovel.); Elementary (Finish the game as the Elementalist.); Final Flash (Deal more than 1,000 damage with a single Comet.); Elementalist (Unlock the Elementalist.); Muscle +4000 (Reach level 15 in a run.); Faster Than Light (Reach the maximum Movement Speed bonus.); Energy Wallet (Spend at least 40 Powercells in a single run.); Powercell Gatherer (Bronze) (Gather 50 Powercells.); Powercell Gatherer (Gold) (Gather 2,000 Powercells.); Powercell Gatherer (Silver) (Gather 1,000 Powercells.); What's That Lever For? (Activate the lever in the Excavation Site.); Fast and Furious (Finish the game as the Recon.); Sushi Master (Take down at least 3 different enemies in a single Dagger hit.); Recon (Unlock the Recon.); The Long Hunt (Finish the game as the Ranger.); Bot Skewer (Deal more than 1,000 damage with a single Javelin.); Ranger (Unlock the Ranger.); Spare Some Change? (Give Powercells to Wallstreet Slim.)."
            ]
        },
        {
            "heading": "Feats, Secrets & Endless",
            "body": [
                "A no-damage boss, the Wonka Bar gamble, the wrench-gathering counter, the hidden Superbot class and its feats, the secret Sword, rebooting Alfred, and the Endless Mode set.",
                "The achievements here: Easy Peasy (Take down a boss without taking damage.); Master Gambler (Win the Wonka Bar gamble.); Wrench Picker (Bronze) (Gather 50 Wrenches.); Wrench Picker (Gold) (Gather 500 Wrenches.); Wrench Picker (Silver) (Gather 250 Wrenches.); Superbot (Unlock the Superbot class.); Revenge (Finish the game as the Superbot.); Hero Landing (Perform a Hero Landing as the Superbot.); Captain Mc Slice (Find and pick up the Sword.); Butlers Never Die (Reboot the wrecked butler robot, Alfred Beauregard, at the Basecamp.); Portal Online! (Repair the Endless Mode portal.); Endless Journey (Get knocked out in the Endless Mode.); Evolution (Have 6 Singularities active simultaneously.); BOOSTER! (Gain a Booster.); Overperked (Have 5 Perks active at once.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play runs and let the counters (damage, kills, powercells, wrenches, Data-Logs) tick up naturally; spend wrenches on Basecamp upgrades between runs.",
                "2. Unlock every class and get a full clear with each - Commando, Engineer, Elementalist, Recon, Ranger, then the hidden Superbot.",
                "3. Grab the class-specific feats (multi-kills, big single hits, Hero Landing) and the secret pickups (Shovel, Sword, Buddybot) when they appear as loot.",
                "4. Reboot Alfred at the Basecamp, trigger Billy Boom's self-destruct, and clear a boss without taking damage.",
                "5. Climb the difficulty ladder to Guardian 4, then chase the rank-S and Guardian 4 rank-S clears, and finish the Endless Mode set.",
                "Tip: the rank-S clears reward speed and no-damage play, not raw power - learn to skip optional rooms, keep your combo/style meter up, and prioritise movement upgrades; a fast clean Guardian 1 run scores higher than a slow thorough Guardian 4 one."
            ]
        }
    ]
};
