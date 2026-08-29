// Middle-earth: Shadow of Mordor Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shadow-of-mordor.json), whose 74 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   241930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 11 hidden achievements ship
//   no Steam description; their conditions here are curatorial (story
//   markers kept spoiler-light in the God of War house style), and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "shadow-of-mordor-achievement-guide",
    "category": "game",
    "gameSlug": "shadow-of-mordor",
    "icon": "🗡️",
    "title": "Middle-earth: Shadow of Mordor Achievement Guide",
    "summary": "A practical guide to all 74 Steam achievements in Middle-earth: Shadow of Mordor - progression, weapons & collectibles, uruk manipulation & combat feats, beasts, dlc challenges & endgame, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Middle-earth: Shadow of Mordor has 74 Steam achievements, 11 of them hidden (all main-campaign story markers). The rest are the open-world checklist: collectibles, the weapon Legend Mission chains, the Survivalist and Hunting Challenges, a large block of Nemesis-system feats, and the Lord of the Hunt and The Bright Lord DLC content.",
                "Nothing is missable - collectibles, challenges and Nemesis feats can all be done freely after the story. The commitment is 100% Artifacts and Ithildin, all three weapon Legend chains, and the branding/riot feats, which want a good grasp of the Nemesis system.",
                "Tip: follow the story markers for the 11 hidden achievements, then clear the map: 100% collectibles, every Legend Mission, and the Nemesis feats (branding, riots, power struggles). Play the two DLCs last."
            ]
        },
        {
            "heading": "Progression, Weapons & Collectibles",
            "body": [
                "The early-game spread: the Artifact and Ithildin collectible tiers, activating the Forge Towers, the Bow / Dagger / Sword Legend Mission chains for Azkar, Acharn and Urfael, the Rune-slot unlocks, the Survivalist and Hunting Challenges, the Outcast Rescue and Vendetta missions, and the branding and combat basics (Strike From Above, poisoning a feast, branding a Captain in combat).",
                "The achievements here: Paths of the Dead (Collect 25% of the Artifacts.); Crowned with Living Light (Collect 50% of the Ithildin.); Stinking Rebels (Brand 5 Bodyguards of a Warchief, turning them against him in combat.); The Maker's Bow (Complete all Azkâr Legend Missions.); Legend of the Maker (Complete a Bow Mission and begin growing the legend of Azkâr.); The Last Shadow (Complete all Acharn Legend Missions.); Legend of Shadow (Complete a Dagger Mission and begin growing the legend of Acharn.); Height of Despair (Use Strike From Above while at least 60 feet above your target.); You Will Obey (Make an uruk yours.); Black Celebration (Poison a Captain at his own Feast.); Memories of Eregion (Activate all Forge Towers.); The Spirit of Mordor (Start a Riot by commanding a Warchief to attack another Warchief.); Scout of the Morannon (Successfully complete a Survivalist Challenge.); Thrill of the Hunt (Successfully complete 4 Hunting Challenges.); The White Rider (Liberate 30 slaves in 180 seconds while riding a caragor.); Divide and Conquer (Eliminate the bodyguards of two Warchiefs, then draw them out and kill them.); A New Master (Brand a Captain while in combat.); Bearer of the Shining Lamp (Collect 100% of the Ithildin.); Ranger of Ithilien (Complete all Survivalist Challenges.); Master of the Wilds (Complete all Hunting Challenges.); The Free Folk (Complete an Outcast Rescue Mission.); Liberator (Complete all Outcast Rescue Missions.); Repaid in Blood (Complete a Vendetta Mission.); Shadows of the Ancient Past (Collect 100% of the Artifacts and listen to their memories.); No Power in Numbers (Help a Captain survive a Recruitment Power Struggle, and then kill him and all his new recruits.); Fire of Justice (Complete all Urfael Legend Missions.); Legend of Vengeance (Complete a Sword Mission and begin growing the legend of Urfael.)."
            ]
        },
        {
            "heading": "Uruk Manipulation & Combat Feats",
            "body": [
                "The Nemesis-system feats: starting riots, power struggles and recruitment struggles, helping an uruk rise then killing him, killing all five Warchiefs before replacements appear, the Morgai Fly and caragor tricks, the detonate and execution feats, branding all five Warchiefs, and acquiring a level 25 Rune.",
                "The achievements here: Rise and Fall (After an uruk kills you to become a Captain, help him become a Warchief, then kill him.); Burning Vengeance (Perform an Execution on a flaming Berserker.); And it Burns, Burns, Burns (Use the Detonate ability to burn 50 uruks.); Unleashed (Free 5 caragors from cages.); Fly you fools! (Make 20 uruks flee by dropping Morgai Fly nests.); Jaws of Death (Attract caragors with bait 5 times.); Iron of Death (Issue a Death Threat, and then successfully kill the target.); A Graug's Heel (Capitalize on a Warchief's Fear.); Power Vacuum (Kill all 5 Warchiefs before any uruk take their place.); Strike True (Unlock 2 Bow Rune slots.); Paid in Blood (Unlock 4 Dagger Rune slots.); The Cold Light (Unlock 3 Sword Rune slots.); Lord and Master (Brand all 5 Warchiefs.); A Mighty Doom (Acquire a level 25 Rune.); A Short Introduction (Begin a new hunt with Torvin.)."
            ]
        },
        {
            "heading": "Beasts, DLC Challenges & Endgame",
            "body": [
                "The Lord of the Hunt content (Torvin's hunts, the Beastmaster Warchiefs, the caragath / wretched graug / ghul feats, the Test of the Wild) and The Bright Lord finale content (Shadow Branding, Wraith Flash Dominate counts, all One Ring missions, rebuilding every Forge Tower in Udun, the Test of the Ring, and challenging the Dark Lord in the Scouring of Mordor).",
                "The achievements here: The Most Dangerous Game (Defeat all the Beastmaster Warchiefs.); Jaws of Shadow (Complete 25 Caragath Stealth Kills.); Wretched Retch (Use a Wretched Graug's Projectile Vomit on an Uruk Captain or Warchief.); Ghûls Gone Wild (Kill a Graug by dispatching your Ghûls on him.); Rattle the Hive (Bait 10 Ghûl mounds.); O Mother, Where Art Thou? (Have 20 Branded Ghûls at one time.); I Had To Put Him Down (Kill a Caragath with an Execution.); The Flames Make It Go Faster (Activate the Blazing Steed.); Nom Nom Nom! (Eat a captain with a Wretched Graug.); Hot Flashes (Catch a Ghûl Matron on fire during the Lord of the Hunt campaign.); The Collector (Have a dominated Caragath, Wretched Graug and Spitter Ghûl simultaneously.); The Hunt is my Mistress (Complete all objectives in the Test of the Wild.); The Scouring of Mordor (Challenge the Dark Lord in Mordor.); Burning Shadow (Shadow Brand 20 Uruks.); Dominion (Wraith Flash Dominate 50 Uruks.); Battle Forged (Maximize the power of the Ring by completing all of the One Ring missions.); From Shadow to Shadow (Stealth Brand a Captain.); The Silver Fist (Brand 20 Uruks in 60 seconds.); Eregion Reforged (Build all the Forge Towers in Udun.); Beyond Epic (Get a Level 30 Rune in Test of the Ring.); Lord of the Ring (Complete all objectives in the Test of The Ring.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - all are story markers or one-off feats:",
                "The achievements here: Gorthaur the Cruel (Reach a story marker in the main campaign (story achievement, no plot detail).); The Bright Master (Reach a story marker in the main campaign (a Wraith flashback vision).); Beyond Hope (Reach a story marker in Lithariel's questline.); To Rule them All (Reach a story marker in the main campaign (story achievement, no plot detail).); Ratbag the Great and Powerful (Reach a story marker in Ratbag's questline.); The White Wizard (Reach a story marker in the main campaign (story achievement, no plot detail).); The Hand is Severed (Complete the final story mission.); For My Brother (Complete a story hunt mission.); The Hammer Falls (Complete the Udun region storyline.); The Tower Crumbles (Reach a story marker in the main campaign (story achievement, no plot detail).); Betrayed (Reach a story marker in the main campaign (story achievement, no plot detail).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story for the 11 hidden achievements, unlocking abilities and Rune slots along the way.",
                "2. Sweep the map: 100% Artifacts and Ithildin, all Forge Towers, and the three weapon Legend Mission chains.",
                "3. Work the Nemesis feats deliberately - riots, power struggles, branding all five Warchiefs, killing all five before replacements - and the Survivalist and Hunting Challenges.",
                "4. Play Lord of the Hunt (Torvin, the beasts, the Test of the Wild) and The Bright Lord (One Ring missions, Test of the Ring, Scouring of Mordor).",
                "Tip: Power Vacuum (kill all five Warchiefs before any uruk takes their place) is the trickiest Nemesis feat - weaken every Warchief first, then execute them in quick succession before the game promotes replacements between kills."
            ]
        }
    ]
};
