// Warhammer 40,000: Mechanicus Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-40k-mechanicus.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   673880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "warhammer-40k-mechanicus-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-40k-mechanicus",
    "icon": "⚙",
    "title": "Warhammer 40,000: Mechanicus Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Warhammer 40,000: Mechanicus (3 hidden). Covers the story and boss achievements, the cohort / unit / awakening milestones, and the ending choices, difficulty tiers and challenge-run achievements. Three achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Mechanicus has 34 Steam achievements and three are hidden - 'Sensory overload' (unlock the Sicarian Infiltrator), 'Transonic Blur' (unlock the Sicarian Ruststalker), both mission-reward units, and 'Purge the Heretek' (finish the game with the Heretek DLC content enabled). The rest are open: surviving the first mission, defeating each Necron lord and the final boss Szaregon, unlocking the Discipline trees, the cohort-size and unit-unlock milestones, the two ending choices (side with Videx or Scaevola), and a set of difficulty and challenge-run clears (Hard, Very Hard, Melee Only, no AoE weapons, 0 starting Blackstone, 0 Canticles, Ironman, Permadeath).",
                "The catalog marks it roughly three playthroughs and difficulty 4 - the challenge-run modifiers (Ironman, Permadeath, 0 Blackstone, Melee Only) do not stack and each needs its own run, and the two ending choices are mutually exclusive.",
                "Tip: stack compatible modifiers on a single run - a Very Hard, Ironman, Permadeath, 0-Canticles game with the Heretek content on can bank six or seven of the hardest achievements at once."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Surviving the first mission, defeating the five Necron lords (Agrolekh, Ekropis, Ubjao, Mhelob, Neftusk), and unlocking one and two full Discipline trees on a Tech-Priest.",
                "The achievements here: This is only the beginning (Survive the first mission); Watch them crumble (Defeat Agrolekh); Celestial Cartography Catastrophe (Defeat Ekropis); Fleshy Disposal (Defeat Ubjao); Vivisected Vizier (Defeat Mhelob); Architect Abortion (Defeat Neftusk); Knowledge is power (Have a Tech-Priest unlock a full Discipline tree); One with the Machine (Have a Tech-Priest unlock two full Discipline trees)."
            ]
        },
        {
            "heading": "Cohort, Units, Awakening & Szaregon",
            "body": [
                "Reaching 50% on the awakening gauge, completing a mission with no Canticles, a four- and six-Tech-Priest cohort, unlocking the Skitarii Ranger / Ranger Alpha / Vanguard / Vanguard Alpha, the Kataphron Breacher, the Kastelan Robot, and defeating Szaregon (and defeating him before the final countdown).",
                "The achievements here: Half a cog (Reach 50% in the awakening gauge); No aid from the Omnissiah (Complete a mission without using any Canticles); Competent Cohort (Reach a four Tech-Priest cohort); Cohortus Maximus (Reach a six Tech-Priest cohort); Power Ranger (Unlock Skitarii Ranger Alpha); Galvanic Rifle (Unlock Skitarii Ranger); Taser Goad (Unlock Skitarii Vanguard Alpha); Radium Ready (Unlock Skitarii Vanguard); Battle Servitor (Unlock Kataphron Breacher); Legio Cybernetica (Unlock Kastelan Robot); Ding Dong Szaregon's Gone (Defeat Szaregon); Impatient destruction (Defeat Szaregon before the final countdown)."
            ]
        },
        {
            "heading": "Choices, Difficulty & Challenge Runs",
            "body": [
                "Siding with Videx or with Scaevola, finding the hidden 'False God' moment, the Hard and Very Hard clears, the Melee Only and no-AoE-weapon runs, starting with 0 Blackstone, 0 Canticles, the Ironman and Permadeath clears, and the three hidden achievements - finishing with the Heretek content enabled, and unlocking the Sicarian Infiltrator and Ruststalker.",
                "The achievements here: Sterile Perfection (Side with Videx); Mother of Xenarites (Side with Scaevola); False God (Find and unlock a hidden moment); Hard (Complete the game in hard mode); Impossible (Complete the game in Very Hard mode); Melee Machine (Complete the game with the setting \"Melee Only\" selected at the start of a game); AoE-phobia (Complete the game with the setting \"AoE weapon\" disabled at the start of a game); Zero to Hero (Complete the game after starting with 0 Blackstone); No Omnissian Guidance (Complete the game with the setting \"Canticle number\" equals 0 at the start of a game); Not the Men-of-Iron (Complete the game with the \"Ironman\" mode activated); Perma-live (Complete the game with the \"Permadeath\" mode activated); Purge the Heretek (Complete the game with the Heretek DLC content enabled (turn it on in Additional Settings when starting a new game).); Sensory overload (Unlock the Sicarian Infiltrator - it can be earned as a mission reward from any mission.); Transonic Blur (Unlock the Sicarian Ruststalker - it can be earned as a mission reward from any mission.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first game on Normal to learn the systems, defeat all five Necron lords and Szaregon.",
                "2. On that or a second run, side with Videx once and Scaevola once for both ending achievements.",
                "3. Unlock every Skitarii, Kataphron and Kastelan unit, and the Sicarian Infiltrator and Ruststalker mission rewards.",
                "4. Do a stacked challenge run - Very Hard + Ironman + Permadeath + 0 Canticles + Heretek content on - to bank most of the hard achievements together.",
                "5. Clean up any remaining modifier runs (Melee Only, no AoE, 0 Blackstone).",
                "Tip: the '0 Blackstone' and 'Melee Only' runs are easiest with a heavily melee-focused cohort and the awakening kept low - rush the story rather than exploring, since every extra mission raises the Necron threat."
            ]
        }
    ]
};
