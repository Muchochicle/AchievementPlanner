// NINJA GAIDEN 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ninja-gaiden-4.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2627260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 24 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary, except for a small number of
//   just-released DLC achievements explicitly flagged as unconfirmed where
//   no guide has published real unlock text yet. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ninja-gaiden-4-achievement-guide",
    "category": "game",
    "gameSlug": "ninja-gaiden-4",
    "icon": "🗡️",
    "title": "NINJA GAIDEN 4 Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in NINJA GAIDEN 4 (24 hidden). 24 of the 53 are hidden. 16 are researched from PowerPyx's trophy guide (story beats, weapon mastery and trial milestones); the last 8 come from The Two Masters DLC, released too recently for community guides to have published confirmed unlock criteria - flagged honestly here rather than guessed at.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NINJA GAIDEN 4 has 53 Steam achievements, 24 of them hidden. The visible track covers Obliterations, Bloodbath Kills and Slaughters, Bloodraven Form, Master Ninja-difficulty and no-death chapter clears, weapon-specific combat feats with all 4 weapon types (Takeminakata, Yatousen, Magatsuhi, Kage-Hiruko), learning every weapon and combat skill, completing every Mission and Purgatory trial, and collecting every Gourdy.",
                "16 of the hidden achievements are Yakumo and Ryu Hayabusa's story beats and unlockable traversal gear - the 3 Raven Gear tools, defeating the Kitsune Courtesan/Kurobo/Cetus to break each of the 3 seals, reviving the Dark Dragon at Seori's cost, starting Ryu's own story, reaching the final battle, holding your own against Ryu, purifying the Dark Dragon to end the game, maxing health on both protagonists, unlocking the Dark Dragon Blade via Boss Trial #13, defeating Oniwaka in Mission #29, learning all 12 Dark Dragon Blade skills, and completing every Boss/Combat/Purgatory Trial.",
                "The last 8 hidden achievements were added by The Two Masters DLC (a Ryu Hayabusa/Yakumo story expansion with new weapons and an Abyssal Road challenge mode), which released too recently for any community guide to have published confirmed unlock text - they're listed here by name only, honestly flagged as unconfirmed rather than guessed at. The catalog marks it difficulty 4 and recommends 2 playthroughs given the separate Yakumo and Ryu Hayabusa story paths plus Master Ninja difficulty."
            ]
        },
        {
            "heading": "Completion & Core Combat",
            "body": [
                "The full-completion achievement, plus performing an Obliteration, entering Bloodraven Form, and performing a Bloodbath Kill and a Bloodbath Slaughter.",
                "The achievements here: True Ninja (Acquire all achievements); The Art of Obliteration (Perform an Obliteration); Bloodraven Form (Enter Bloodraven Form); The Art of the Bloodbath Kill (Perform a Bloodbath Kill); The Art of the Bloodbath Slaughter (Perform a Bloodbath Slaughter)."
            ]
        },
        {
            "heading": "Raven Gear & Story Seals",
            "body": [
                "The 3 hidden Raven Gear traversal tools (Caddis Wire, Dragonfly Glider, Pond Strider), and 8 hidden story beats - defeating the Kitsune Courtesan, Kurobo and Cetus to break the game's 3 seals, reviving the Dark Dragon at Seori's cost, starting Ryu Hayabusa's own story, reaching the final battle carrying Seori and Kureha's wishes, holding your own against Ryu, and purifying the Dark Dragon to save the world.",
                "The achievements here: Raven Gear: Caddis Wire (Use the Caddis Wire traversal tool.); Raven Gear: Dragonfly Glider (Use the Dragonfly Glider traversal tool.); Raven Gear: Pond Strider (Use the Pond Strider traversal tool.); Oh, Foxy Lady (Defeat the Kitsune Courtesan and break the first seal.); It's a Dog! It's a Plane! It's... (Defeat Kurobo and break the second seal.); Smile, You Son of a... (Defeat Cetus and break the third seal.); Priestess of the Dark Dragon (Revive the Dark Dragon in exchange for Seori's life.); Return of the Super Ninja (Start Ryu Hayabusa's story.); The Priestess's Wish (Reach the final battle carrying Seori and Kureha's wishes.); Bloodsoaked Fate (Hold your own against Ryu Hayabusa.); A New Master Ninja (Purify the Dark Dragon and save the world.)."
            ]
        },
        {
            "heading": "Difficulty, Fortitude & Weapon Mastery",
            "body": [
                "A Master Ninja-difficulty clear, the hidden Ninja Fortitude (max health on both Yakumo and Ryu), using each of the 4 weapon types (Takeminakata, Yatousen, Magatsuhi, Kage-Hiruko) for a signature feat, and the hidden Wielder of Darkness (Boss Trial #13 unlocks the Dark Dragon Blade) and Consumed by Corruption (defeat Oniwaka in Mission #29).",
                "The achievements here: Way of the Master Ninja (Complete the game on MASTER NINJA difficulty); Ninja Fortitude (Reach maximum health with both Yakumo (20 items) and Ryu (3 items).); Master of the Blade (Use Takeminakata to attack 5 or more enemies at once); Master of the Drill (Use Yatousen to inflict massive damage in a short time); Master of the Hammer (Use Magatsuhi to Bloodbath Kill 5 or more enemies in a short time); Master of the Toolbox (Use Kage-Hiruko to defeat an enemy launched in the air); Wielder of Darkness (Complete Boss Trial #13 to unlock the Dark Dragon Blade.); Consumed by Corruption (Complete Mission #29 to defeat Oniwaka in his final encounter.)."
            ]
        },
        {
            "heading": "Missions, Combat Feats & Chapter Challenges",
            "body": [
                "Completing 20 Missions, banking 100,000 NinjaCoin, collecting 30 items, a 3-enemy Ultimate Technique chain, a 2000-point combo, 4 hazard-free chapter clears with Auto Movement off, and learning every skill for each of the 4 weapon types.",
                "The achievements here: Ninja Business (Complete 20 Missions); NinjaCoin Miner (Obtain 100,000 NinjaCoin); Need, not Greed (Obtain 30 items); Way of the Dragon (Defeat 3 enemies in a row with an Ultimate Technique); Combo Master (Achieve a 2000-point combo); The Grind Never Stops (Clear Chapter 02 without falling once (Auto Movement must be turned OFF)); Free as a Bird (Clear Chapter 06 without hitting any obstacles (Auto Movement must be turned OFF)); Surf Ninja (Clear Chapter 10 without hitting any obstacles (Auto Movement must be turned OFF)); Laser's Edge (Clear Chapter 12 without being hit by a laser (Auto Movement must be turned OFF)); Master of Takeminakata (Learn all Takeminakata Weapon Skills); Master of Yatousen (Learn all Yatousen Weapon Skills); Master of Magatsuhi (Learn all Magatsuhi Weapon Skills); Master of Kage-Hiruko (Learn all Kage-Hiruko Weapon Skills)."
            ]
        },
        {
            "heading": "Full Mastery & Completion",
            "body": [
                "The hidden Master of the Dark Dragon Blade (learn all 12 of its skills), learning every Combat Skill, Obliterating every enemy, collecting every Gourdy, completing every Mission and Purgatory trial, and clearing any chapter without dying.",
                "The achievements here: Master of the Dark Dragon Blade (Learn all 12 Dark Dragon Blade weapon skills.); Master of Combat (Learn all Combat Skills); The One Who Obliterates (Obliterate every enemy); Critter Collector (Collect every Gourdy); Work Horse (Complete all Missions); Annihilator (Complete all Purgatory trials); Shadow Incarnate (Complete any chapter without dying (excluding Chapters 00 and 14))."
            ]
        },
        {
            "heading": "The Two Masters DLC",
            "body": [
                "The hidden Challenger of Challenges (complete all Boss, Combat and Purgatory Trials), and 8 more hidden achievements added by The Two Masters DLC story expansion - too recently released for confirmed unlock text to exist yet in any community guide.",
                "The achievements here: Challenger of Challenges (Complete all 14 Boss Trials, 18 Combat Trials, and 18 Purgatory Trials.); The Pursuit of Duty (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); A Life Dedicated to Duty (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); The Two Masters (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); Way of the New Master Ninja (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); Scornful Mother of the Damned (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); More Machine than Fiend (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); Ultimate Challenge (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.); Conqueror of the Abyss (Added by The Two Masters DLC. This achievement released too recently for any community guide to have published confirmed unlock criteria.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Yakumo's story first, picking up the Raven Gear, the 3 seal-breaking boss fights, and reaching the Dark Dragon revival.",
                "2. Play through Ryu Hayabusa's story for its own hidden beats, up through the true ending.",
                "3. Work on weapon mastery (all 4 weapon types' skills, the Dark Dragon Blade) and complete every Mission and Trial category.",
                "4. Take on Master Ninja difficulty and the no-death chapter clears once you're comfortable with the combat.",
                "5. If you own The Two Masters DLC, its 8 achievements will need to be discovered through play, since no confirmed unlock text exists yet.",
                "Tip: several chapter-challenge achievements (no falling, no obstacle hits, no laser hits) explicitly require Auto Movement turned OFF - check that setting before attempting them, since it silently invalidates the run otherwise."
            ]
        }
    ]
};
