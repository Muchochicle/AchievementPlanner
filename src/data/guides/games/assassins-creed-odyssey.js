// Assassin's Creed Odyssey Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-odyssey.json), whose 93 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   812140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 31 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-odyssey-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-odyssey",
    "icon": "🛡️",
    "title": "Assassin's Creed Odyssey Achievement Guide",
    "summary": "A practical guide to all 93 Steam achievements in Assassin's Creed Odyssey (31 hidden). The hidden set is the 10 episode markers, 15 base-game questline/milestone completions (Spear Tier 6, all Cultists, the four mythical creatures, the major questlines, Atlantis), and six DLC story markers (Legacy of the First Blade x3, The Fate of Atlantis x3). Sourced from PowerPyx and PlayStationTrophies.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Odyssey has 93 Steam achievements, 31 of them hidden. Odyssey moves the series to Peloponnesian-War Greece with a full dialogue and choice system. The visible achievements cover ship upgrades and the Adrestia's legendary crew, engraving and legendary gear, the Arena and the mercenary ladder, reaching level 50, naval combat, land conquest battles, bounty boards and island quests, and a large set of DLC feats.",
                "The 31 hidden achievements are the 10 main-story episode markers (the Battle of 300 through Episode 9 and the Epilogue), 15 base-game milestones and questline completions (upgrade the Spear to Tier 6, defeat every Cultist of Kosmos, the four mythical creatures - Medusa, the Minotaur, the Cyclops, the Sphinx - the Daughters of Artemis, Markos, Hippokrates, Xenia and Olympic questlines, discover Atlantis), and six DLC story markers - three from Legacy of the First Blade and three from The Fate of Atlantis.",
                "The catalog marks it difficulty 3 and single-playthrough: choices affect the story's ending and some side quests, but no achievement is permanently locked out by a choice, and the world stays fully open after the credits for the DLC."
            ]
        },
        {
            "heading": "Main Story: The Nine Episodes",
            "body": [
                "The 10 Steam-hidden story markers - the Battle of 300 tutorial plus one per episode through the Epilogue. Described spoiler-free.",
                "The achievements here: This is Sparta! (Complete the Battle of 300 opening); An Odyssey in the Making (Complete Episode 1); Past Mistakes (Complete Episode 2); Evil Unearthed (Complete Episode 3); The Bright Minds (Complete Episode 4); From the Ashes (Complete Episode 5); Democracy Falls (Complete Episode 6); Legend in the Making (Complete Episode 7); Taking Back Athens (Complete Episode 8); Odyssey's End (Complete Episode 9 and the Epilogue)."
            ]
        },
        {
            "heading": "Legendary Gear, Ship & Arena",
            "body": [
                "Engraving and legendary equipment, the Adrestia's upgrades and legendary lieutenants, the Arena championship and the mercenary ladder, and the Spear of Leonidas upgrade (Steam-hidden).",
                "The achievements here: Child of Poseidon (Complete all underwater location objectives); Make It Your Own (Engrave your first item); You Work for Me Now (Recruit and assign a Legendary NPC for your ship); Shiny! (Acquire and equip your first Legendary item); I am Legend (Equip 1 Legendary melee weapon and 5 Legendary armor pieces); Are You Not Entertained? (Become Champion of the Arena); Demigod (Reach Level 50); Godly Power (Acquire a Tier 3 active Ability); Legacy Restored (Upgrade the Spear of Leonidas to Tier 6); Top of the Food Chain (Become the first Mercenary); Lord of the Seas (Upgrade the Adrestia to Legendary Status); The Argonauts (Fully crew the Adrestia with Legendary Lieutenants); Scourge of the Aegean (Sink your first Epic Ship); Blood Sport (Defeat a Mercenary in the Arena); Harder, Better, Faster, Stronger (Upgrade the Adrestia for the first time); Fashion's Creed (Equip a Legendary Armor set); Aphrodite's Embrace (Spend the night with another character); Ramming Speed (Cleave a ship in half); I Have the Power (Perform an Overpower Attack with every weapon type); The Midas Touch (Engrave a Legendary Item with a Legendary Effect)."
            ]
        },
        {
            "heading": "Cultists, Mythical Monsters & Questlines",
            "body": [
                "The Cult of Kosmos hunt, the four mythical creatures (Medusa, the Minotaur, the Cyclops, the Sphinx), the major side questlines (Daughters of Artemis, Markos, Hippokrates, Xenia, Olympics), and discovering Atlantis - almost all Steam-hidden.",
                "The achievements here: The Cult Unmasked (Defeat every Cultist of Kosmos); Stink Eye (Recover the Cyclops's eye from a goat on Kephallonia); Hermes's Homie (Unveil all sub-regions of Greece); In Perseus's Image (Defeat Medusa); A-maze-ing Victory! (Defeat the Minotaur); Eye on the Prize (Defeat the Cyclops); Riddle Me This (Outwit the Sphinx); Master of the Hunt (Complete the Daughters of Artemis questline (hunt all the legendary animals)); Everybody Benefits (Complete Markos's questline); Trust Me, I'm a Doctor (Complete the Hippokrates questline); A Pirate's Life for Me (Complete Xenia's treasure-hunt questline); Going For Gold (Complete the Olympic questline in Elis); One Head Down… (Defeat a full branch of the Cult of Kosmos family tree); Birthright (Discover Atlantis and speak with Pythagoras)."
            ]
        },
        {
            "heading": "Exploration, Conquest & Combat",
            "body": [
                "Sub-region discovery, land conquest battles, bounty boards, island quests, raising and clearing your own bounty, overpower attacks, and the all-women-crew ship cleave (Steam-hidden).",
                "The achievements here: War Master (Kill the Leader of any Region with Low Resources, other than Megaris); Misthios in Training (Complete 20 Bounties, War Contracts, or Naval Quests from Message Boards); Island Hopper (Complete 20 Quests on Pephka, Obsidian and Abantis islands); Infamous (Raise your Bounty to the maximum level); Hero for Hire (Win your first on land conquest battle in any region (excluding Megaris in Hero's Journey)); Wrath of the Amazons (Cleave a ship in half while sailing with an all-women crew)."
            ]
        },
        {
            "heading": "Legacy of the First Blade DLC",
            "body": [
                "Three-episode story arc that ties Kassandra or Alexios's line to the first hidden blade. Its three episode finales are Steam-hidden.",
                "The achievements here: The Show Must Go On (Complete The Show Must Go On); Lightning Rod (Defeat Steropes the Lightning Bringer); Divine Intervention (Complete Divine Intervention); Volcanic Sunscreen (Defeat Arges, the Bright One); The Image of Faith (Complete The Image of Faith); The Daughters of Lalaia (Complete The Daughters of Lalaia); The Start of a Legacy (Discover the truth about Darius's past (Legacy of the First Blade, Episode 1: Hunted)); Breaking the Limit (Land a Rush Assassinate that chains 4 times with the Blade of the Lion); Predator and Prey (Kill all the Ancients in the Order of the Hunters in Makedonia); A Poet's Legacy (Complete A Poet's Legacy); A Brother's Seduction (Complete A Brother's Seduction); Blood of Leonidas (Continue the bloodline (Legacy of the First Blade, Episode 2: Shadow Heritage)); Stormculler (Kill all of the Ancients in the Order of the Storm in Achaia); A Friend Worth Dying For (Complete A Friend Worth Dying For); The Heir of Memories (Complete The Heir of Memories); Seeing Red (Kill 10 enemies using the Fury of the Bloodline Ability); Bittersweet Beginnings (Secure your bloodline (Legacy of the First Blade, Episode 3: Bloodline)); Surgical Sniper (Heal by getting 10 headshot kills while you have the Golden Harbinger equipped)."
            ]
        },
        {
            "heading": "The Fate of Atlantis DLC",
            "body": [
                "Three-episode mythological arc through Elysium, the Underworld and Atlantis. Its three episode finales are Steam-hidden.",
                "The achievements here: Lone Lion (Kill the Makedonian Lion); Without a trace (Kill 10 enemies using the Death Veil ability); Rain of Arrows (Kill 10 enemies using the Rapid Fire ability); Fire on Water (Set 10 enemy ships on fire); Parry to Carry (Heal by parrying 10 times with the Judgment of the Lion); Kingmaker (Acquire the Sword of Kings); For Love of Persia (Kill all the Ancients in the Order of Dominion in Messenia); One Really, Really Bad Day (Complete One Really, Really Bad Day); Every Story Has an Ending (Complete Every Story Has an Ending); No More Rulers (Kill all Overseers in Elysium); In the Face of the Gods (Remember who you are (The Fate of Atlantis, Episode 1: Fields of Elysium)); Blasphemer (Destroy all of the Marble Maiden Tributes); Gathering Strength (Collect all the Keeper's Insights in Episode 1); The Conqueror (Win the conquest of Elysium with freed humans from the 3 main regions); Old Flames Burn Brighter (Complete Old Flames Burn Brighter); Bad Dog! (Defeat Cerberos); Guardian of the Underworld (Close all Tartaros Rifts); The One (Defeat all of the Fallen); Gathering More Strength (Collect all the Keeper's Insights in Episode 2); A True Ruler (Dethrone the king (The Fate of Atlantis, Episode 2: Torment of Hades)); Your Own Medicine (Kill 10 Isu Soldiers with the Blessing of Kronos enhancement); Isu Bloodline (Completely fill the Knowledge Sequence); Hephaistos's Apprentice (Forge the 3 Legendary Weapons); Gathering Full Strength (Collect all the Keeper's Insights in Episode 3); 1 Versus 100 (Defeat the Hekatonchires (The Fate of Atlantis, Episode 3: Judgment of Atlantis))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story through the Epilogue for the 10 hidden episode markers, making dialogue choices freely - none block an achievement.",
                "2. Alongside the story, chip away at the Cult of Kosmos: every branch you clear counts toward One Head Down, and finishing all of them is The Cult Unmasked.",
                "3. Take on the four mythical creatures and the major questlines (Daughters of Artemis, Markos, Hippokrates, Xenia, the Olympics) once you out-level their regions.",
                "4. Fully upgrade the Adrestia and crew it with legendary lieutenants, run the Arena and mercenary ladder, and reach level 50.",
                "5. Play Legacy of the First Blade and then The Fate of Atlantis, each a three-episode arc with a hidden finale marker.",
                "Tip: the Spear of Leonidas Tier 6 upgrade needs Ancient Tablets from tombs and Ainigmata Ostraka - grab them as you explore rather than backtracking, since it is one of the slower base-game trophies otherwise."
            ]
        }
    ]
};
