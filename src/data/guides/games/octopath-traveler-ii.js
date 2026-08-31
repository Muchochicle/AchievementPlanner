// OCTOPATH TRAVELER II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/octopath-traveler-ii.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1971650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "octopath-traveler-ii-achievement-guide",
    "category": "game",
    "gameSlug": "octopath-traveler-ii",
    "icon": "🗺️",
    "title": "OCTOPATH TRAVELER II Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in OCTOPATH TRAVELER II (9 hidden). Covers the battle and journey basics, the eight traveler stories and Crossed Paths, and the endgame and completion achievements. Nine achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "OCTOPATH TRAVELER II has 33 Steam achievements and nine are Steam-hidden - the four Crossed Path stories, the secret final chapter ('Dawn Breaks'), the netherworldly superboss ('Gate to the Netherworld'), all music records, and the townspeople feats (four following you, 100 knocked out). The open twenty-four are battle firsts (first break, max boost, first skill, 9,999 damage), sailing to a new land, gathering all eight travelers, completing each of the eight travelers' stories, all secondary jobs and EX and divine skills, every map location, all side stories, all battle-tested gear, and 100 townspeople scouted for information.",
                "The catalog marks it difficulty 4 and a long single run. Completing all eight stories plus the secret final chapter and the Galdera-style superboss is the bulk of it; the job/skill/map/side-story completion is thorough but not hard.",
                "Tip: finish all eight traveler stories and every Crossed Path, then unlock the secret final chapter, clear it, and take on the superboss last."
            ]
        },
        {
            "heading": "Battle & Journey Basics",
            "body": [
                "'A Story All Your Own' (100%), your first enemy break, acting at max boost, learning your first skill, embarking on the journey, riding the ferry to a new land, and gathering all eight travelers.",
                "The achievements here: A Story All Your Own (Unlocked all achievements.); First Break (Broke an enemy for the first time in battle.); Max Boost (Acted at maximum boost for the first time.); A New Skill (Learned a skill for the first time.); The Journey Begins (Embarked on a journey.); Setting Sail (Rode the ferry to a new land.); Eight Travelers (Gathered all eight travelers.)."
            ]
        },
        {
            "heading": "Traveler Stories & Crossed Paths",
            "body": [
                "Completing Osvald's, Castti's, Throné's, Ochette's, Partitio's, Agnea's, Temenos's and Hikari's stories, learning a job's divine skill, the four Steam-hidden Crossed Path stories (Agnea/Hikari, Temenos/Throné, Castti/Ochette, Osvald/Partitio), and the Steam-hidden secret final chapter ('Dawn Breaks').",
                "The achievements here: An Answer, a Journey (Completed Osvald's story.); Eir's Apothecaries (Completed Castti's story.); The Collar Removed (Completed Throné's story.); Protector of the Island (Completed Ochette's story.); The Road to Prosperity (Completed Partitio's story.); Agnea the Star (Completed Agnea's story.); The Truth Lies in the Flame (Completed Temenos's story.); Clear Skies (Completed Hikari's story.); Master of Your Craft (Learned a job's divine skill.); By the Light of the Heart (Complete Agnea and Hikari's Crossed Path story.); The Detective and His Assistant (Complete Temenos and Throné's Crossed Path story.); A Peaceful Little Forest (Complete Castti and Ochette's Crossed Path story.); Mysteries of the Night Sky (Complete Osvald and Partitio's Crossed Path story.); Dawn Breaks (Reach the secret final chapter and return dawn to the world.)."
            ]
        },
        {
            "heading": "Endgame & Completion",
            "body": [
                "Approaching the end of your journey, all EX skills, all secondary jobs, every map location, 9,999 damage, the Steam-hidden superboss ('Gate to the Netherworld'), all side stories, the Steam-hidden 'Record Collector', all battle-tested gear, information from 100 townspeople, and the Steam-hidden 'Octopath Traveler...?' (4 followers) and '100 Out Cold'.",
                "The achievements here: Octopath Traveler (Approached the end of your journey.); EX Skill Master (Learned all EX skills.); Job Master (Learned all secondary jobs.); Master of Solistia (Traveled to every location on the map.); Hard Hitter (Dealt 9,999 or more damage.); Gate to the Netherworld (Defeat the netherworldly superboss at the end of the secret final chapter.); Worth the Detour (Finished all side stories.); Record Collector (Obtain every music record.); Battle-Tested Gear (Obtained all battle-tested equipment.); Informed Adventurer (Gleaned information from 100 townspeople.); Octopath Traveler...? (Have four townspeople following you at once (via the Guide / Entreat path actions).); 100 Out Cold (Soothe or knock 100 townspeople unconscious (via the Bribe / Challenge path actions).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Recruit all eight travelers early, then work through every traveler's four-chapter story.",
                "2. Do all four Crossed Path stories (they unlock once both travelers in a pair have progressed).",
                "3. Unlock all secondary jobs, learn every EX and divine skill, and visit every map location.",
                "4. Finish all side stories and collect all music records and battle-tested gear.",
                "5. Meet the conditions for the secret final chapter, clear it ('Dawn Breaks'), then beat the netherworldly superboss ('Gate to the Netherworld').",
                "6. Use path actions throughout to reach '100 Out Cold' and 'Octopath Traveler...?' (4 townspeople following you at once).",
                "Tip: the townspeople feats ('100 Out Cold', 4 followers, 100 info) come naturally if you use path actions on every NPC you pass while questing - grinding them at the end is much slower."
            ]
        }
    ]
};
