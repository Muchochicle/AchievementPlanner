// Ravenswatch Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ravenswatch.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2071280 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ravenswatch-achievement-guide",
    "category": "game",
    "gameSlug": "ravenswatch",
    "icon": "🐦",
    "title": "Ravenswatch Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Ravenswatch (6 hidden). Covers leveling and ability milestones, unlocking every hero's Memoirs, chapter and quest progression, and general run-based challenges. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ravenswatch has 45 Steam achievements and 6 are hidden. About a third are unlocking all Memoirs for each of the game's fairy-tale heroes - Scarlet, the Pied Piper, Beowulf, the Snow Queen, Aladdin, Melusine, Geppetto, Sun Wukong, Carmilla, Juliet, Romeo, and Merlin. The rest are run-based milestones - leveling up, selecting Ultimate abilities and Final Talents, reaching Chapters 2 and 3, multiplayer victories, quest and Grimoire completions, boss kills (Stingy Jack), and various single-run collection thresholds (keys, feathers, magical objects, Refugees, healing fountains), plus six hidden achievements for the two Epilogue chapters, 9 Legendary talents in one run, reviving 3 Heroes at once, and two no-reroll/no-feather Baba Yaga kills.",
                "The catalog marks it difficulty 3. Ravenswatch is a co-op-friendly bullet-heaven roguelite; most achievements come from playing runs across different heroes, but the two Baba Yaga achievements (no Raven Feathers, and Merlin with no Stars of Fate rerolls) are genuine challenge runs.",
                "Tip: the two Epilogue achievements are late-game story milestones - reach them by pushing your run further rather than farming side content once you're geared up."
            ]
        },
        {
            "heading": "Basics, Chapters & Memoirs",
            "body": [
                "Leveling up, selecting an Ultimate ability and a Final Talent, reaching Chapters 2 and 3, the two hidden Epilogue chapters, and unlocking all Memoirs for Scarlet, the Pied Piper, Beowulf, the Snow Queen, Aladdin, Melusine, Geppetto, Sun Wukong and Carmilla.",
                "The achievements here: Once upon a time  (Level up a Hero during a game ); Secret Technique  (Select an Ultimate ability during a game ); Fulfillment  (Select a Final Talent during a game ); Chapter 2  (Reach Chapter 2 ); Chapter 3  (Reach Chapter 3 ); The House of Nightmares  (Reach Epilogue - Part 1.); The Ogress's Lair  (Reach Epilogue - Part 2.); A Diary of Days  (Unlock all Memoirs of Scarlet ); Tale of Frightful Fife  (Unlock all Memoirs of the Pied Piper ); The Curse of a Drake's Mother  (Unlock all Memoirs of Beowulf ); The Annals of the Reign of Queen Nyss  (Unlock all Memoirs of the Snow Queen ); The Thief Who Married a Princess  (Unlock all Memoirs of Aladdin ); A Mermaid's Lullaby  (Unlock all Memoirs of Melusine ); A Memoir of Dire Mirth  (Unlock all Memoirs of Geppetto ); The Epic Tragic Tale of Immortal Demise  (Unlock all Memoirs of Sun Wukong ); Letters to Laura - Diary of a Dhampire  (Unlock all Memoirs of Carmilla )."
            ]
        },
        {
            "heading": "Single-Run Challenges",
            "body": [
                "A multiplayer victory, 5 challenges on Darkness difficulty or more, the Three Little Pigs quests, 3 quests and 4 Grimoires in one run, 3 Nightmare tumors, 3 wishes at one Wishing Well, 3 optional bosses, 6 Healing fountains, 3 feathers from the Altar of Heroes, 20 magical objects equipped, the hidden Legendary Hero and Savior of the Day achievements, the hidden no-feather Baba Yaga kill, 5 keys, 6 Refugee interactions, and 6 Sacrificial Idols.",
                "The achievements here: The Ravenswatch Oath  (Achieve Victory in multiplayer ); Master of Challenges  (Complete 5 challenges in Darkness difficulty or more ); The Three Little Pigs  (Complete all three Swyne brothers quests ); No one left behind  (Complete 3 quests in a single run ); The Thirst for Knowledge  (Complete 4 or more Grimoires in a single run ); The Cleansing of Reverie  (Complete 3 or more Nightmare tumors in a single run ); Three Wishes  (Wish for 3 Magical Objects at a single Wishing Well ); Giant Slayer  (Defeat 3 optional bosses in a single run ); A Reinvigorating Journey  (Use 6 or more Healing fountains in a single run ); Mercy of the Ravens  (Buy 3 feathers from Altar of Heroes in a single run ); Loot Hoarder  (Have 20 or more magical objects equiped during a single run ); Legendary Hero  (Have 9 Legendary talents in a single run.); Savior of the Day  (Revive 3 Heroes at the same time.); All is well that ends well  (Defeat Baba Yaga without using any Raven Feather.); Open sesame!  (Collect 5 or more keys in a single run ); Socialization  (Interact with 6 or more Refugees in a single run ); The Thirst for Power  (Use 6 or more Sacrificial Idols in a single run)."
            ]
        },
        {
            "heading": "Romeo & Juliet, Merlin & Endgame",
            "body": [
                "Unlocking Romeo and Juliet's Memoirs and a multiplayer victory with them together, 400 Dreamshards from a Leprechaun's Cauldron, completing a chapter in full overtime, a victory with 9 Hourglass magical objects, Merlin's Memoirs, the full Object Compendium, the hidden Predestined Fate achievement, defeating Stingy Jack, 4 Magical Mirror duplications, and discovering every Melody.",
                "The achievements here: A Tale of Woe (Unlock all Memoirs of Juliet); Thy Letters to Thine Self (Unlock all Memoirs of Romeo); The Cursed Lovers (Achieve Victory in Multiplayer with Romeo or Juliet (together)); The Leprechaun Treasure (Get 400 Dreamshards or more from a Leprechaun's Cauldron); Overpowered Nightmare (Complete a chapter using the full overtime); A Swift Victory (Achieve victory with 9 Magical Objects or more collected from the Hourglass of Dreams); The Curse of Merlin Farseer (Unlock all Memoirs of Merlin); Object Compendium  (Discover all Magical Objects and their collection effects ); Predestined Fate  (As Merlin, defeat Baba Yaga without using any Stars of Fate (rerolls) during the run.); Jack O'Lantern (Defeat Stingy Jack); Intense Shimmers (Duplicate 4 objects using the Magical Mirror in a single run); Symphony of Reverie (Discover all the Melodies)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Level up heroes, select Ultimate abilities and Final Talents, and push through Chapters 2 and 3 toward the hidden Epilogue chapters.",
                "2. Unlock Memoirs for each hero as you play them - Scarlet, the Pied Piper, Beowulf, the Snow Queen, Aladdin, Melusine, Geppetto, Sun Wukong, Carmilla, Juliet, Romeo and Merlin.",
                "3. Chase the single-run thresholds (quests, Grimoires, tumors, wishes, minibosses, fountains, feathers, keys, magical objects) as they come up naturally.",
                "4. Try a multiplayer victory, and one specifically as Romeo or Juliet together.",
                "5. Once you're comfortable with Baba Yaga, go for the hidden no-Raven-Feather kill, then the harder Merlin no-reroll kill for Predestined Fate.",
                "Tip: the two Epilogue achievements and 9 Legendary talents in one run reward pushing a strong run further rather than restarting - keep going once a run is going well instead of banking an early win."
            ]
        }
    ]
};
