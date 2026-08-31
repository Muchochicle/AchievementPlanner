// Shadow Warrior 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shadow-warrior-2.json), whose 64 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   324800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "shadow-warrior-2-achievement-guide",
    "category": "game",
    "gameSlug": "shadow-warrior-2",
    "icon": "🗡️",
    "title": "Shadow Warrior 2 Achievement Guide",
    "summary": "A practical guide to all 64 Steam achievements in Shadow Warrior 2 (5 hidden). Covers the difficulty, level and kill-count achievements, the money, upgrade and crafting achievements, the special-kill achievements, and the champion boss fights and Trials. Five achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Shadow Warrior 2 has 64 Steam achievements and five are Steam-hidden (four optional bosses and killing 10 secret Bunny Lords). The rest are open: the four difficulty clears up to Insane, character levels (10/25/50), kill counts (100/500/2500), secrets (5/15/50), money and Orbs of Masamune totals, upgrade collection and crafting, eight special-kill counters (frozen shatters, acid explosions, weakspot kills, Vanish kills), and a long list of named champion mini-bosses defeated in specific story and side missions, plus the two 'Way of the Wang' Trials.",
                "The catalog marks it difficulty 3 and about two runs. Most is cumulative and comes with playing plus a bit of grinding; the Insane clear, 2500 kills, 10,000 Orbs and hunting every named champion are the long tail.",
                "Tip: play the campaign on a lower difficulty for the champions, secrets and cumulative counts, then a focused Insane run, and use Free-roam to mop up any missed bosses."
            ]
        },
        {
            "heading": "Difficulty, Levels & Kill Counts",
            "body": [
                "'I'm a Collector Myself' (100%), completing the game on Tiny Grasshopper, I Have No Fear, Who Wants Wang and No Pain No Gain difficulty, the four Steam-hidden bosses (Corrupted and Devouring Kamiko, Zilla Mechanoid, Ancient Goddess Ameonna), character levels 10/25/50, 100/500/2500 kills, and 5/15/50 secrets.",
                "The achievements here: I'm a Collector Myself (Unlock all achievements); Casual Wang (Complete the game on Tiny Grasshopper difficulty); Normal Wang (Complete the game on I Have No Fear difficulty); Hard Wang (Complete the game on Who Wants Wang difficulty); Insane Wang (Complete the game on No Pain No Gain difficulty); King of the Dragon Mountain (Defeat Corrupted Kamiko. If you missed the fight on the story path, replay that mission in Free-roam.); King of Mount Akuma (Defeat Devouring Kamiko. Available via Free-roam on its mission if skipped.); Unfinished Business (Defeat Zilla Mechanoid, the final boss.); Goddess Slayer (Defeat the Ancient Goddess Ameonna.); Sempai (Develop any character to level 10); Sensei (Develop any character to level 25); Grandmaster (Develop any character to level 50); Junior Hitman (Kill 100 enemies); Executioner (Kill 500 enemies); Call me Wang, Lo Wang (Kill 2500 enemies); Shiny! (Find 5 secrets); My Precious (Find 15 secrets); Ancient Chinese Secrets (Find 50 secrets)."
            ]
        },
        {
            "heading": "Money, Upgrades & Crafting",
            "body": [
                "Collecting 1,000,000 and 10,000,000 zillyen, 500 upgrades, 200 unique upgrades, 100 legendary upgrades, crafting 100 upgrades, and crafting 30 legendary upgrades.",
                "The achievements here: That's a Lot of Coins (Collect 1000000 zillyen); Financial Security (Collect 10000000 zillyen); Ready for Action (Collect 500 upgrades); Unique Collection (Collect 200 unique upgrades); Legendary Collection (Collect 100 legendary upgrades); Handyman (Craft 100 upgrades); Legendary Handyman (Craft 30 legendary upgrades)."
            ]
        },
        {
            "heading": "Special Kills",
            "body": [
                "200 Special Attack kills, 100 Grip of Darkness kills, 100 frozen-enemy shatters, 100 acid corpse explosions, 200 enemies set on fire, 200 electrocutions, 100 weakspot kills, and 50 Vanish kills.",
                "The achievements here: Trickster (Perform 200 Special Attack kills); Wang the Impaler (Perform 100 kills when enemy's grasped by Grip of Darkness); Tiny Little Pieces (Shatter 100 frozen enemies); Toxic Blast (Perform 100 acid corpse explosions); Living Torch (Set 200 enemies on fire); Short Circuit (Electrocute 200 enemies); Bullseye (Perform 100 weakspot kills); Mr. Kosugi (Perform 50 Vanish kills)."
            ]
        },
        {
            "heading": "Champion Boss Fights & Trials",
            "body": [
                "Defeating every named champion mini-boss across the story and side missions (Lieutenant Akimbo, The Sharpest Spike, The Chef, Frozen Widow, Gun Fury, Lord Destroyer, TL-Devourer, Resistor ZL-260 and the rest), the Steam-hidden 'I Think I Saw a Wabbit' (10 Bunny Lords), the Way of the Wang Trials (any one, then all), and collecting 100 / 1000 / 10,000 Orbs of Masamune.",
                "The achievements here: Lieutenant Akimbo (Defeat Lieutenant Akimbo in story mission: My Hero); The Sharpest Spike (Defeat The Sharpest Spike in story mission: Hot Blooded); Vicious Sentinel (Defeat Vicious Sentinel in side mission: Chi-ters); The Chef (Defeat The Chef in side mission: The Cookery); Frozen Widow (Defeat Frozen Widow in side mission: Ninja'd Scrolls - Part 1); The Guard (Defeat The Guard in side mission: Ninja'd Scrolls - Part 2); Unit-64 Commodore (Defeat Unit-64 Commodore in side mission: Ninja'd Scrolls - Part 3); ST-RC1 Titan (Defeat ST-RC1 Titan in story mission: Zilla Attack); Gun Fury (Defeat Gun Fury in side mission: Demon Trafficking); Transistor ZL-260 (Defeat Transistor ZL-260 in story mission: Industrial Espionage); Alpha R-XIII (Defeat Alpha R-XIII in side mission: Monster Tea Party); Shady Rascal (Defeat Shady Rascal in side mission: Flirty Fishing - Part 2); Queen of D.O.L.L.s (Defeat Queen of D.O.L.L.s in side mission: Flirty Fishing - Part 3); Old Fart (Defeat Old Fart in side mission: Flirty Fishing - Part 1); Apprentice of Musashi (Defeat Apprentice of Musashi in story mission: Ancestral Ties); Magmator of the Devil Mountain (Defeat Magmator of the Devil Mountain in story mission: Body Shaking); Lord Destroyer (Defeat Lord Destroyer in story mission: All in the Family); Eradicator (Defeat Eradicator in side mission: Stop the Propaganda); Colonel Fasthand (Defeat Colonel Fasthand in side mission: Heisenberg - Part 2); The Toxitor (Defeat The Toxitor in story mission: Stop the Ooze); Captain Lo-Gan (Defeat Captain Lo-Gan in side mission: One More Thing); The Highest Priest (Defeat The Highest Priest in side mission: Heisenberg - Part 1); The Lord of War (Defeat The Lord of War in side mission: Heisenberg - Part 3); TL-Devourer (Defeat TL-Devourer in story mission: Corporate Shill); Resistor ZL-260 (Defeat Resistor ZL-260 in story mission: Violent Takeover); I Think I Saw a Wabbit (Kill 10 Bunny Lords - rare secret enemies that occasionally appear in levels.); Student of The Way of the Wang (Complete any trial of The Way of the Wang); Master of The Way of the Wang (Complete Trials of Infusion, Embedding, Purification and Trial of the Ancient God); Orb Collector (Collect 100 Orbs of Masamune); Experienced Orb Collector (Collect 1000 Orbs of Masamune); The Way of Masamune (Collect 10000 Orbs of Masamune)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on a lower difficulty, doing every side mission so you fight all the named champions.",
                "2. Hunt secrets as you go for the 5/15/50 counts.",
                "3. Grind the special-kill counters and the money / upgrade / Orb totals during that run and any farming afterwards.",
                "4. Do a dedicated No Pain No Gain (Insane) run for that clear.",
                "5. Use Free-roam to fight the four hidden bosses and the Way of the Wang Trials, and keep an eye out for Bunny Lords for 'I Think I Saw a Wabbit'.",
                "Tip: the Orbs of Masamune and zillyen totals are the slowest - equip loot-boosting gear and replay a short high-density mission on Free-roam once everything else is done."
            ]
        }
    ]
};
