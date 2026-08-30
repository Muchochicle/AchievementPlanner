// Heroes of Hammerwatch Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/heroes-of-hammerwatch.json), whose 114 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   677120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "heroes-of-hammerwatch-achievement-guide",
    "category": "game",
    "gameSlug": "heroes-of-hammerwatch",
    "icon": "🏰",
    "title": "Heroes of Hammerwatch Achievement Guide",
    "summary": "A practical guide to all 114 Steam achievements in Heroes of Hammerwatch - none are hidden. Covers the Forsaken Tower bosses and class unlocks, the level 20/40/60 class mastery, the huge kill and gold grinds, the town and NG+ progression, and all three expansions (Pyramid of Prophecy, Moon Temple, and the Mercenary mode).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Heroes of Hammerwatch has 114 Steam achievements and none of them are hidden. The base game covers the Forsaken Tower bosses, unlocking the extra classes, reaching level 20 with each class, the huge lifetime grinds (100,000 Undead killed, 1,000,000 gold found), fully upgrading the town, and beating the Tower up to NG+++++. The two expansions - Pyramid of Prophecy and Moon Temple - each add their own bosses, an area, and NG+ completions, plus the town statues and the Mercenary mode (a separate hardcore character with its own rank ladder).",
                "Nothing is missable - the Tower and expansion dungeons are endlessly repeatable, class levels and the kill and gold counters persist on your town profile, and NG+ tiers stack. Full completion is a long roguelite grind: the level 60 (Grandmaster) achievements for every class and the NG+++++ boss clears are the bulk of it.",
                "Tip: the lifetime kill counts (75,000 Aberrations, 100,000 Undead, etc.) and gold total accumulate across every run on your profile - so they will finish on their own while you grind class levels and NG+ clears; don't farm them separately, and instead focus your deliberate effort on the per-class level 60 and the NG+++++ boss achievements."
            ]
        },
        {
            "heading": "Bosses, Classes & Grinds",
            "body": [
                "Beating the Forsaken Tower and its bosses (Stone Guardian, Warden, Three Councilors, Watcher, Thundersnow), unlocking the Priest, Thief and Wizard, reaching level 20 with each class, the lifetime kill counts by enemy type, finding 1,000,000 gold and 1,000 ore, fully upgrading the town, finding 50 secrets, and the combo, fountain, prison, monolith and Imp achievements.",
                "The achievements here: Forsaken Tower (Beat the Forsaken Tower.); Stone Guardian (Defeat the Stone Guardian.); Warden (Defeat the Warden.); The Three Councilors (Defeat the Three Councilors.); Watcher (Defeat the Watcher.); Thundersnow (Defeat Thundersnow.); Chapter of Light (Unlock the Priest.); The Old Drunkard (Unlock the Thief.); The Pointy Hat (Unlock the Wizard.); Expert Paladin (Reach level 20 with a Paladin.); Expert Priest (Reach level 20 with a Priest.); Expert Ranger (Reach level 20 with a Ranger.); Expert Sorcerer (Reach level 20 with a Sorcerer.); Expert Thief (Reach level 20 with a Thief.); Expert Warlock (Reach level 20 with a Warlock.); Expert Wizard (Reach level 20 with a Wizard.); Exorcist (Kill 75,000 Aberrations.); Beast Slayer (Kill 50,000 Beasts.); Demolisher (Kill 10,000 Constructs.); Sanctifier (Kill 100,000 Undead.); Gold Digger (Find 1,000,000 gold.); Miner (Find 1,000 ore.); The Outlook Restored (Fully upgrade the Town.); Hidden Treasures (Find 50 secrets.); Combo Sphere (Unlock Combo.); Combo Killer (Chain a combo of 500 kills.); Good Fortune (Spend 5000 gold on positive favor.); Jailbreak (Unlock the prison cells.); Mysterious Monolith (Use a monolith.); Unexpected Gifts (Receive a reward from the Imp.)."
            ]
        },
        {
            "heading": "Mastery, NG+ & Pyramid of Prophecy",
            "body": [
                "Reaching level 40 with each class, beating the Forsaken Tower in NG+ through NG+++++, the Magic Anvil crafting and attunement feats, the Tavern drinks, and the Pyramid of Prophecy expansion - its bosses (Vampire Lord, Giant Crustworm, Queen Iris, Nerys), the Gladiator class, the Arena, the desert navigation feat, the sarcophagus, and the eight town statues.",
                "The achievements here: Master Paladin (Reach level 40 with a Paladin.); Master Priest (Reach level 40 with a Priest.); Master Ranger (Reach level 40 with a Ranger.); Master Sorcerer (Reach level 40 with a Sorcerer.); Master Thief (Reach level 40 with a Thief.); Master Warlock (Reach level 40 with a Warlock.); Master Wizard (Reach level 40 with a Wizard.); Forsaken Tower NG+ (Beat the Forsaken Tower in NG+.); Forsaken Tower NG++ (Beat the Forsaken Tower in NG++.); Forsaken Tower NG+++ (Beat the Forsaken Tower in NG+++.); Forsaken Tower NG++++ (Beat the Forsaken Tower in NG++++.); Forsaken Tower NG+++++ (Beat the Forsaken Tower in NG+++++.); Magic Anvil (Find the Magic Anvil.); Craftsmanship (Craft 10 items at the Magic Anvil.); Attunement (Attune 10 items at the Magic Anvil.); A Drinking Game (Consume 10 drinks at the Tavern.); Vampire Lord (Defeat the Vampire Lord.); Pyramid of Prophecy (Beat the Pyramid of Prophecy.); Giant Crustworm (Defeat the Giant Crustworm.); Queen Iris (Defeat Queen Iris.); Nerys (Defeat Nerys.); Gladiator (Unlock the Gladiator.); Arena Champion (Reach rank 10 in the Arena.); Desert Navigation (Reach the Pyramid without encountering a great threat.); Cursed Relics (Loot a sarcophagus.); Ancient Legends (Construct 3 statues.); Ewran (Construct the statue of Ewran.); Wylmir (Construct the statue of Wylmir.); Phalarath (Construct the statue of Phalarath.); Bolgarth (Construct the statue of Bolgarth.); Calis (Construct the statue of Calis.); Cedric (Construct the statue of Cedric.); Ozreth (Construct the statue of Ozreth.); Kyra (Construct the statue of Kyra.)."
            ]
        },
        {
            "heading": "Grandmaster, Moon Temple & Mercenaries",
            "body": [
                "Baltzar's Book of Monsters, reaching level 60 (Grandmaster) with every class, beating the Pyramid of Prophecy in NG+ through NG+++++, the constellation puzzle, companions, the Magic Furnace, Blood Altar and item-gambling feats, the Witch Hunter class, and the Moon Temple expansion - its bosses (Elder Wisp, Krilith's Wolf, Agents), its NG+ through NG+++++ clears, the Mercenary-mode clears and rank ladder (Private to General), the Legacy Shop, and the Lunar Shield feat.",
                "The achievements here: Book of Monsters (Find Baltzar's Book of Monsters.); Expert Gladiator (Reach level 20 with a Gladiator.); Master Gladiator (Reach level 40 with a Gladiator.); Grandmaster Gladiator (Reach level 60 with a Gladiator.); Grandmaster Paladin (Reach level 60 with a Paladin.); Grandmaster Priest (Reach level 60 with a Priest.); Grandmaster Ranger (Reach level 60 with a Ranger.); Grandmaster Sorcerer (Reach level 60 with a Sorcerer.); Grandmaster Thief (Reach level 60 with a Thief.); Grandmaster Warlock (Reach level 60 with a Warlock.); Grandmaster Wizard (Reach level 60 with a Wizard.); Pyramid of Prophecy NG+ (Beat the Pyramid of Prophecy in NG+.); Pyramid of Prophecy NG++ (Beat the Pyramid of Prophecy in NG++.); Pyramid of Prophecy NG+++ (Beat the Pyramid of Prophecy in NG+++.); Pyramid of Prophecy NG++++ (Beat the Pyramid of Prophecy in NG++++.); Pyramid of Prophecy NG+++++ (Beat the Pyramid of Prophecy in NG+++++.); Celestial Signs (Solve the constellation puzzle.); Daran (Construct the statue of Daran.); Friends For Life (Acquire a companion.); Valuable Companion (Have your companion collect 1,000,000 gold.); Magic Furnace (Craft an item using the Magic Furnace.); Blood Altar (Use a Blood Altar.); Exsanguination (Obtain 10 Blood Rites at the same time.); Item Gambling (Try your luck at item gambling.); Legendary Winnings (Win a legendary item by gambling.); Expert Witch Hunter (Reach level 20 with a Witch Hunter.); Master Witch Hunter (Reach level 40 with a Witch Hunter.); Grandmaster Witch Hunter (Reach level 60 with a Witch Hunter.); Elder Wisp (Defeat the Elder Wisp.); Krilith's Wolf (Defeat Krilith's Wolf); Agents (Defeat the Agents.); Moon Temple (Beat the Moon Temple.); Moon Temple NG+ (Beat the Moon Temple in NG+.); Moon Temple NG++ (Beat the Moon Temple in NG++.); Moon Temple NG+++ (Beat the Moon Temple in NG+++.); Moon Temple NG++++ (Beat the Moon Temple in NG++++.); Moon Temple NG+++++ (Beat the Moon Temple in NG+++++.); Forsaken Tower Mercenary (Beat the Forsaken Tower with a mercenary.); Pyramid of Prophecy Mercenary (Beat the Pyramid of Prophecy with a mercenary.); Moon Temple Mercenary (Beat the Moon Temple with a mercenary.); Private (Recruit a mercenary private.); Corporal (Reach Corporal rank with a mercenary.); Sergeant (Reach Sergeant rank with a mercenary.); Lieutenant (Reach Lieutenant rank with a mercenary.); Captain (Reach Captain rank with a mercenary.); Major (Reach Major rank with a mercenary.); Colonel (Reach Colonel rank with a mercenary.); General (Reach General rank with a mercenary.); Legacy Shop (Purchase something at the Legacy Shop.); Lunar Shield (Block ten damage instances with your Lunar Shield.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base game: beat the Forsaken Tower, unlock the extra classes, and fully upgrade the town over your first several runs.",
                "2. Grind class levels - level 20, then 40, then 60 - with each class, doing the boss and NG+ clears at whatever tier your character can handle.",
                "3. Do the one-off feats (secrets, combo, monolith, prison, Magic Anvil crafting, the Arena, the constellation puzzle) on runs where you have the spare time.",
                "4. Play the Pyramid of Prophecy and Moon Temple expansions: beat their bosses, clear them through NG+++++, and construct all the town statues.",
                "5. Do the Mercenary mode last - recruit a mercenary, climb the rank ladder to General, and beat all three dungeons with a mercenary.",
                "Tip: NG+ tiers add flat difficulty but also flat stats and gold, so the fastest route to the NG+++++ clears is to over-level one strong class (a Ranger or Wizard) in town upgrades and Magic Anvil gear, then push it up one NG+ tier per run rather than trying to jump tiers."
            ]
        }
    ]
};
