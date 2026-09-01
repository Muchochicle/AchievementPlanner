// Megabonk Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/megabonk.json), whose 139 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   3405340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "megabonk-achievement-guide",
    "category": "game",
    "gameSlug": "megabonk",
    "icon": "🔨",
    "title": "Megabonk Achievement Guide",
    "summary": "A practical guide to all 139 Steam achievements in Megabonk (1 hidden). Covers the item, tome, weapon and character unlocks that drop from playing (kill counts, tome levels, stage-tier clears, quest totals), the boss and swarm challenges, the map secrets, the Graveyard content, and the large set of hat cosmetics. One achievement is hidden - 'Wallhugger', for avoiding fall damage 10 times by hugging walls - and its condition is confirmed from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Megabonk has 139 Steam achievements and 1 is hidden. The hidden one is 'Wallhugger' - avoid fall damage 10 times by hugging a wall as you fall. Every other achievement is an unlock: items and tomes from levelling each tome or hitting a kill count, characters from clearing Forest and Desert stage tiers, more slots and utilities from completing quests (20 up to 55), and a long tail of hat cosmetics from very specific feats - a gold star (Rank 100) on every character, 300,000 kills on Forest in one run, defeating a boss as a named character in a named way, and buying dozens of items from each rarity of Shady Guy.",
                "The catalog marks it difficulty 4. Most of it accrues from playing a lot across all characters, but the completion tail is demanding - 'Crown' (Rank 100 on every character), the 100,000 and 300,000-kills-in-one-run Top Hats, and character-locked boss challenges like killing a boss in under one second as CL4NK. Expect a long grind across every character and stage.",
                "Tip: chase quest completions early - a big block of achievements (extra tome and weapon slots, Banish, Refresh, Skip, Toggler) is gated purely on quest totals from 20 to 55, and quests complete just from normal play."
            ]
        },
        {
            "heading": "Early Unlocks & Tome Levels",
            "body": [
                "Item unlocks that drop from levelling tomes (Cooldown, Agility, XP, Regen, Attraction) and from kill counts and heals, surviving the Final Swarm for 60s / 2 / 6 minutes, breaking pots, buying chests, reaching 40% Difficulty, and quick miniboss and Stage Boss kills.",
                "The achievements here: Battery (Upgrade Cooldown Tome to Level 5); Boss Buster (Defeat a Stage Boss in under 30 seconds); Cactus (Kill 100 cactus enemies with Thorns damage); Cursed Doll (Die 10 times); Forbidden Juice (Crit 100 times); Brass Knuckles (Kill 5 000 enemies with the Sword); Bob (Dead) (Survive the Final Swarm for 2 minues); Anvil (Complete 3 Challenges); Ghost (Survive the Final Swarm for 60s); Ice Crystal (Kill 50 enemies with the Frostwalker); Key (Purchase 25 chests); Skuleg (Obtain 40% Difficulty); Tactical Glasses (Defeat a Miniboss in 25s); Turbo Socks (Upgrade Agility Tome to Level 5); Demonic Blade (Heal for 350 HP using Lifesteal); Demonic Blood (Increase Max HP with Blood Magic 400 times); Echo Shard (Upgrade XP Tome to Level 8); Golden Sneakers (Break 150 pots); Idle Juice (Kill 500 enemies while standing still); Kevin (Obtain 3 Leeching Crystal in a run); Leeching Crystal (Upgrade Regen Tome to Level 8); Poison Gloves (Use a Microwave to duplicate Moldy Cheese 3 times in a row); Cursed Gloves (Get the Cursed Tome to level 10); Demonic Soul (Reach Level 30 as Calcium); Eagle Claw (Kill 10 000 enemies as Birdo); Gamer Goggles (Defeat a Stage Boss with less than 10% HP left); Gas Mask (Kill 5 000 enemies using amog); Grandma's Secret Tonic (Kill 3 000 enemies using the Sniper Rifle); Shattered Knowledge (Upgrade Attraction Tome to Level 8); Cannon (Kill 5 000 enemies using Rockets); Toxic Barrel (Kill 2 000 enemies using Poison damage); Turbo Skates (Upgrade both Cooldown and Agility Tome to level 5 in a run)."
            ]
        },
        {
            "heading": "Damage Types, Characters & Stages",
            "body": [
                "Damage-type kill counts (Fire, Lightning, Poison, Thorns, amog, Rockets), character-specific unlocks (Vlad, Calcium, Birdo), Forest and Desert stage-tier completions, no-damage and low-HP Stage Boss challenges, and the character unlocks (Calcium, Sir Chadwell, CL4NK, Dicehead, Monke, Ninja, Ogre, Robinette, Spaceman, Tony McZoom, Vlad).",
                "The achievements here: Bloody Cleaver (Reach Level 50 as Vlad); Chonkplate (Get Max HP to 500); Dragonfire (Kill 4 000 enemies using Fire damage); Energy Core (Defeat the Final Boss 2 times); Holy Book (Kill a first Stage Boss without taking any damage that run); Joe's Dagger (Kill 10 000 enemies using the Dexecutioner); Lightning Orb (Kill 3 000 enemies using Lightning damage); Soul Harvester (Survive the Final Swarm for 6 minutes); Speedboi (Complete a stage with at least 2 Boss Curse activated); Sucky Magnet (Complete every single Charge Shrine on the map); Amog (Poison 50 000 enemies with Moldy Cheese); Athena (Get the Thorns Tome to level 9); Bandit (Find and defeat Bandit in the Desert); Birdo (Kill 100 enemies using the Tornado weapon while carried by a tornado on Desert ); Bush (Find and defeat Bush in the Forest); Calcium (Kill 1 000 Skeletons); Sir Chadwell (Complete Forest Tier 3); CL4NK (Complete Forest Tier 1); Dicehead (Complete 100 quests); Megachad (Get the Damage Tome to Level 7); Monke (Find and release Monke in the Forest); Ninja (Complete Desert Tier 1); Noelle (Use a Microwave to duplicate Ice Crystal 3 times in a row); Ogre (Kill 15 000 Goblins); Robinette (Complete Forest Tier 2); Spaceman (Complete 6 challenges); Tony McZoom (Complete 2 challenges); Vlad (Complete Desert Tier 2)."
            ]
        },
        {
            "heading": "Tomes, Weapons & Shrines",
            "body": [
                "The Tome unlocks (Armor, Attraction, Blood, Chaos, Cursed, Duration, Luck, Quantity, Thorns, XP), the weapon unlocks (Aegis, Axe, Bananarang, Black Hole, Dexecutioner, Dice, Frostwalker, Hero Sword, Katana, Mines, Revolver, Shotgun, Sniper, Tornado, Wireless Daggers), and the Charge Shrine challenges.",
                "The achievements here: Armor Tome (Kill 5 000 enemies as Sir Oofie); Attraction Tome (Use Shrine of Succ 8 times); Blood Tome (Kill 12 500 enemies); Chaos Tome (Charge every Charge Shrine on a Tier 3 run across all 3 stages without leaving the charge zone); Cursed Tome (Beat the Stage Boss in under 5 minutes); Duration Tome (Upgrade Axe to level 10); Luck Tome (0.01% chance to drop when killing an enemy); Quantity Tome (Fire 5 000 projectiles); Thorns Tome (Block 250 attacks with Aegis); XP Tome (Break 20 pots in a single run); Aegis (Block 500 damage with Armor as Sir Oofie); Aura (Don't take any damage for 2 minutes); Axe (Kill 2 000 enemies using the Sword); Bananarang (Find the hidden Banana); Black Hole (Get Knockback Tome to Level 10); Blood Magic (Get the Bloody Tome to Level 12); Corrupted Sword (Get Cursed Tome to Level 20 in under 10 minutes); Dexecutioner (Kill 12 500 enemies using the sword); Dice (Get Luck Tome to Level 12); Dragon's Breath (Kill 1 000 Wisps as Fox on Desert); Frostwalker (Freeze 1 000 enemies with the Ice Cube); Hero Sword (Defeat a Stage Boss without picking up any items, powerups or using shrines.); Katana (5% chance to find upon breaking a Tumbleweed on Desert Stage 1); Mines (Kill 7 500 enemies using Rockets); Poison Flask (Kill Scorpionussy on Desert 3 times); Revolver (Kill 7 500 enemies); Shotgun (5% chance to find upon breaking a Tumbleweed on Desert Stage 2); Rockets (Kill 15 000 enemies as CL4NK); Sniper (Get Precision Tome to Level 10); Space Noodle (Complete Desert Tier 2 as Tony McZoom); Tornado (Charge a total of 5 Charge Shrines during Sandstorms on Desert); Wireless Dagger (Get the Lightning Staff to Level 15)."
            ]
        },
        {
            "heading": "Quests, Slots & Hidden",
            "body": [
                "The quest-total unlocks (Banish at 40, Refresh at 20, Skip at 30, extra Tome and Weapon Slots at 25/35/45/55), Toggler for 40 bought unlocks, the Forest boombox hunt, the CL4NK Desert teleport, Quin's Mask, and the hidden 'Wallhugger' (avoid fall damage 10 times by hugging walls).",
                "The achievements here: Banish (Complete 40 quests); Boombox (Find and activate all the boomboxes on Forest); Desert (Teleport to the 2nd stage on Forest Tier 2 as CL4NK); Refresh (Complete 20 quests); Skip (Complete 30 quests); Toggler (Buy 40 unlocks); Tome Slots (Complete 35 quests); Weapon Slots (Complete 25 quests); Weapon Slots 2 (Complete 45 quests); Tome Slots 2 (Complete 55 quests); Quin's Mask (Defeat a Stage Boss as Athena, landing the killing blow with Aegis); Wallhugger (Avoid fall damage 10 times (across any number of runs) by hugging a wall as you fall.)."
            ]
        },
        {
            "heading": "Challenges & the Graveyard",
            "body": [
                "Completing 5 / 10 / 20 / 30 Challenges, and the Graveyard content - killing Big Bob and Spooky Steve, the Old Mask, breaking every pumpkin as Roberto, Bob's Light, the secret crypt room (Snek), and clearing every chest and pot in the first crypt (Pot, stainless steel).",
                "The achievements here: Challenges1 (Complete 5 Challenges); Challenges2 (Complete 10 Challenges); Challenges3 (Complete 20 Challenges); Challenges4 (Complete 30 Challenges); Graveyard (As Calcium on Desert Tier 2, summon and defeat the undead boss); Scythe (Kill Big Bob on Graveyard); Roberto (Kill Spooky Steve); Old Mask (Find on Graveyard); Pumpkin (As Roberto, break every pumpkin on Graveyard); Bob's Light (Kill Big Bob on Graveyard using damage from charging a lamp as the finishing blow); Snek (Discover in the secret room in the crypt on Graveyard); Pot (stainless steel) (Open every chest and pot in the first crypt on Graveyard)."
            ]
        },
        {
            "heading": "Hats & Cosmetics",
            "body": [
                "The hat unlocks - Wizard's Hat, Santa Hat, Cheesy Hat, Clown, Crown (a gold star on every character), the three Frogs, Headset, Kevin Hat, Magic Hat, Iron Helm, Microwave, Pilot Helm, Head Pot, the four Shady Hats, Sheriff's Hat, Sunglasses, Top Hat (100,000 kills on Forest in a run) and Looooong Top Hat (300,000).",
                "The achievements here: Wizard's Hat (As Vlad, use Pot (stainless steel) to upgrade any weapon above its max level of 40); Santa Hat (Open the present hidden on Forest); Cheesy Hat (As Amog, defeat a Tier 3 final boss with 8 Moldy Cheese and 1 Snek in your inventory); Clown (As Athena, kill 500 enemies using Quin's Mask); Crown (Get a gold star on every character (Rank 100)); Green Frog (Find the frogs on Forest Stage 1); Blue Frog (Find the frogs on Forest Stage 2); Red Frog (Find the frogs on Forest Stage 3); Headset (As Ninja, complete Desert Stage 1 with at least 2 Boss Curse shrines activated); Kevin Hat (Get punched by Kevin 100,000 times); Magic hat (As Fox, get Firestaff, Lightning Staff & Blood Magic to level 40); Iron Helm (As Sir Oofie, defeat the final boss of Forest 3 using Sword, Hero Sword, Corrupted Sword and Scythe); Microwave (Blow up 50 microwaves); Pilot Helm (As Birdo, kill 1000 enemies using Mines while flying in the air); Head Pot (As Roberto, obtain 4x Pot (stainless steel) in a single run); Shady Hat (black) (Buy 100 items from a Common Shady Guy); Shady Hat (blue) (Buy 80 items from a Rare Shady Guy); Shady Hat (pink) (Buy 60 items from an Epic Shady Guy); Shady Hat (gold) (Buy 50 items from a Legendary Shady Guy); Sheriff's Hat (As CL4NK, kill any boss or miniboss in under 1 second); Sunglasses (As Calcium, finish the final boss fight on Graveyard in under 60 seconds); Top Hat (Get 100,000 kills on Forest in a single run); Looooong Top Hat (Get 300,000 kills on Forest in a single run)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a variety of characters and stages, letting the kill-count, tome-level and stage-tier unlocks accrue.",
                "2. Push quest completions to 55 for the slot and utility unlocks.",
                "3. Do the Charge Shrine and Challenge milestones, and the Graveyard content.",
                "4. Work the character-locked boss and hat feats one character at a time.",
                "5. Grind toward 'Crown' (Rank 100 on every character) and the 300,000-kills Top Hat.",
                "Tip: 'Wallhugger' is easy to force - on any stage with a ledge, run off it while pressed into a wall so you slide down instead of falling, and repeat 10 times."
            ]
        }
    ]
};
