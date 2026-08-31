// Killer is Dead Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/killer-is-dead.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   261110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "killer-is-dead-achievement-guide",
    "category": "game",
    "gameSlug": "killer-is-dead",
    "icon": "🌙",
    "title": "Killer is Dead Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Killer is Dead - none are hidden. Covers the twelve story episodes, the combat and upgrade feats, the Gigolo, challenge and sub-mission goals, and the difficulty clears and completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Killer is Dead has 48 Steam achievements and none of them are hidden. Twelve are story-episode completions. The rest are feats: 100 Head Shot kills, Burst Rush and air-finisher kills, maxing BLOOD and HEALTH upgrades, $100 million in cash, the Ulti-mondo costume, all female costumes, making each of the beauties (Natalia, Koharu, Scarlett) your prisoner, maxing all skills and sub-weapons, unlocking and clearing the challenge missions in blocks, clearing sub-missions, AAA executioner ranks on 12 / 24 / 44 missions, 20 beauty rewards, and the Normal / Hard / Very Hard difficulty clears plus \"Perfect Job\" (all missions).",
                "The catalog marks it as roughly two playthroughs - the difficulty clears stack downward but Very Hard plus the AAA-rank and challenge grind is cleaner across two - and nothing is missable, since episodes and missions replay with cumulative upgrades.",
                "Tip: the Gigolo (beauty) missions are separate from the main story - do them alongside episodes to unlock the challenge missions and earn the gifts and rewards that feed \"Happiest Man on Earth\" and the three \"prisoner\" achievements."
            ]
        },
        {
            "heading": "Story Episodes",
            "body": [
                "Completing each of the twelve story episodes, from \"Kidnapper Executed\" (Episode 1) to \"Moon King\" (Episode 12).",
                "The achievements here: Toast to Forerunner (Completed Episode 2.); Kidnapper Executed (Completed Episode 1.); Alice in Dead Land (Completed Episode 3.); 9 to 1 on Goliath (Completed Episode 4.); Had a Bad Dream (Completed Episode 5.); No More Spoils (Completed Episode 6.); Scratch One Samurai (Completed Episode 7.); In Your Dreams (Completed Episode 8.); Brought Down to Size (Completed Episode 9.); The Skinny Controller (Completed Episode 10.); Won't Play With You (Completed Episode 11.); Moon King (Completed Episode 12.)."
            ]
        },
        {
            "heading": "Combat & Upgrades",
            "body": [
                "100 Head Shot kills, Burst Rush and air-finisher kills, an enemy-attack kill, maxing BLOOD and HEALTH, $100 million in cash, the Ulti-mondo costume, all female costumes, the Natalia and Koharu prisoner feats, and maxing all Attack/Special skills and sub-weapons.",
                "The achievements here: Bryan-Approved Sniper (Killed 100 enemies using the \"Head Shot.\"); Brilliant Shoulder Throw (Killed an enemy using the \"Burst Rush.\"); Float Like a Gadfly (Sliced an enemy upward and finished it in the air.); Suck Like a Leech (Killed an enemy using the \"Burst Rush.\"); Feeling So High (Sliced an enemy upward and finished it in the air.); Have You Got Clean Hands? (Killed an enemy with an enemy attack.); Sexy Man Whose Blood is Dripping (Increased BLOOD to maximum upgrade level.); Ultimate Physical Beauty (Increased HEALTH to maximum upgrade level.); Cash Enough For Love (Have a total of $100 million in cash. ); Passport to Infinity (Changed costume to Ulti-mondo.); Mondo's Girls Collection (Collected all female costumes.); Passionate Girl (Made Natalia your prisoner in body and soul.); Geisha Girl (Made Koharu your prisoner in body and soul.); Right-Hand Man (Increased all Attack and Special skills.); Left-Hand Man (Increased all sub-weapons to maximum upgrade level.)."
            ]
        },
        {
            "heading": "Challenges, Sub-Missions & Gigolo Mode",
            "body": [
                "Unlocking and clearing the challenge missions in blocks of 6, 12 and all, clearing 3 / 6 / all sub-missions, AAA executioner ranks on 12 / 24 / 44 missions, and 20 rewards from the beauties.",
                "The achievements here: Scarlett Chaser (Unlocked 6 challenge missions.); Scarlett Stalker (Unlocked 12 challenge missions.); Scarlett-Approved Stalker (Unlocked all challenge missions.); Gigolo Begins (Cleared 6 challenge missions.); Gigolo Side Story (Cleared 12 challenge missions.); Gigolo Mastership (Cleared all challenge missions.); Office's Affairs (Cleared 3 sub-missions.); Office Workers (Cleared 6 sub-missions.); Assassins Never Say Die (Cleared all sub-missions.); The Criminal is Dead (Ranked AAA executioner on 12 missions.); The Maniac is Dead (Ranked AAA executioner on 24 missions.); The Mass Murderer is Dead (Ranked AAA executioner on 44 missions.); Happiest Man on Earth (Received 20 rewards from the beauties.)."
            ]
        },
        {
            "heading": "Difficulty & Completion",
            "body": [
                "Clearing all episodes on Normal, Hard and Very Hard, clearing all missions, being revived by Mika 20 times, giving 50 presents, the Scarlett prisoner feat, and the all-achievements \"Perfect Killer\".",
                "The achievements here: Killer at the Gate of Dawn (Cleared all episodes on Normal Mode.); Obscured by the Moonlight (Cleared all episodes on Hard Mode.); Darksider of the Moon (Cleared all episodes on Very Hard Mode.); Perfect Job (Cleared all missions.); Reliable Friends (Got revived by Mika 20 times.); Gift Collector (Gave a present 50 times or more.); Lucky Girl (Made Scarlett your prisoner in body and soul.); Perfect Killer (All achievements completed)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the twelve story episodes on Normal for the episode completions and \"Killer at the Gate of Dawn\".",
                "2. Do the Gigolo (beauty) missions alongside, unlocking challenge missions and earning gifts and rewards.",
                "3. Grind the combat feats and max all skills, sub-weapons, BLOOD and HEALTH.",
                "4. Clear the challenge and sub-missions in full, and push AAA executioner ranks toward 44 missions.",
                "5. Replay episodes on Hard and Very Hard for the difficulty clears and \"Perfect Job\".",
                "Tip: AAA executioner rank rewards a fast, combo-heavy, no-damage clear - once your Attack skills are maxed, re-run the shorter episodes with an upgraded Musselback sub-weapon to farm the rank counts."
            ]
        }
    ]
};
