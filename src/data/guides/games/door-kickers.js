// Door Kickers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/door-kickers.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   248610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "door-kickers-achievement-guide",
    "category": "game",
    "gameSlug": "door-kickers",
    "icon": "🚪",
    "title": "Door Kickers Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Door Kickers (1 hidden). Covers the career milestones, the campaign / leveling / medal achievements, and the early achievements and class unlocks. One achievement is hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Door Kickers has 43 Steam achievements and one is hidden - 'The Daimaju', a joke achievement earned by having your whole squad wiped out within about two seconds of a mission starting. The rest are open: cumulative career counters (150 missions, 1,000 kills, 400 doors), one, two and three stars on every single mission, 30 of each hard medal (Perfect Plan, One Man Army, No Pause), the campaign completions and Iron Man clear, maxing squad and trooper levels, and the class unlocks.",
                "The catalog marks it difficulty 4 - 'Textbook Material' (three stars on every single mission), the 30-medal achievements and an Iron Man campaign are all demanding, and the medals require perfect, fast, no-pause runs. Nothing is missable: missions and campaigns replay freely.",
                "Tip: chase the three hard medals (Perfect Plan, One Man Army, No Pause) on the shortest missions first - a one-room mission with a single entry point can score all three at once and there are 30 of each to collect."
            ]
        },
        {
            "heading": "Career Milestones",
            "body": [
                "Completing 150 missions, 1,000 kills, 100 arrests, breaching 400 doors, firing 10,000 rounds, walking 10,000 metres, one / two / three stars on every single mission, 30 Perfect Plan / One Man Army / No Pause medals, and a sub-1-second bomb defuse.",
                "The achievements here: Just one more (Complete 150 missions.); Manhunt (Kill 1000 enemies.); Hands in the air (Arrest 100 enemies.); Door Kicker (Breach 400 doors.); All hell breaks loose (Fire a total of 10000 rounds.); Keep Walking (Walk total 10000 meters.); Special Weapons and Tactics (Get one star in every Single Mission.); Elite Task Force (Get two stars in every Single Mission.); Textbook Material (Get three stars in all Single Missions.); Strategist (Get 30 Perfect Plan Medals.); Lone Wolf (Get 30 One Man Army Medals.); Quick Thinker (Get 30 No Pause Medals.); Total Luck (Defuse a bomb with less than 1 second left.)."
            ]
        },
        {
            "heading": "Campaigns, Leveling & Feats",
            "body": [
                "Fully completing the 'A Hard Day's Work', 'Drug Bust', 'The Cell', 'Terror at Sea' and 'Suits and Ski-Masks' campaigns, an Iron Man campaign win, maxing squad and trooper levels, a full max-level squad, all equipment unlocked, a no-kill 6-arrest mission, the hidden 'Daimaju' feat, 100 bomb defuses, a 5-enemy flashbang, a no-move shield triple-kill, 10 kills in 5 seconds, and the 13-star and 50-star totals.",
                "The achievements here: Community Server (Fully complete campaign \"A Hard Day's Work\"); Drug Buster (Fully complete campaign \"Drug Bust\"); Cell Crusher (Fully complete campaign \"The Cell\"); Hardcore (Win a campaign in Iron Man Mode.); We know it all (Level-up your squad to maximum level.); I've seen it all (Level-up a trooper to maximum level.); We've seen it all (Have a squad of fully leveled up troopers.); We unlocked it all (Unlock all equipment / weapons.); Lifesavers (Complete a mission arresting 6 or more bad guys and without killing any.); The Daimaju (Have your entire squad (at least 4 troopers) killed within about two seconds of a mission starting - use a plan that leaves lightly-armoured officers exposed to enemy fire on unpause.); Counter Terrorists Win (Defuse 100 bombs.); Blind as a bat (Hit 5 enemies with the same Flashbang.); Hunker down! (Have a shield unit kill three enemies without moving.); Swift and Deadly (Kill 10 bad guys within 5 seconds, without letting them fire a shot.); Shipboarder (Fully complete campaign \"Terror at Sea\"); Against the Odds (Fully complete campaign \"Suits and Ski-Masks\"); Enough for a Spark (Get 13 stars)."
            ]
        },
        {
            "heading": "Early Achievements & Class Unlocks",
            "body": [
                "Completing 10 missions, saving your first hostage, defusing your first bomb, your first handcuff, your first Perfect Plan / One Man Army / No Pause medal, unlocking the Assaulter, Breacher and Shield classes and all playable classes, and getting a 3-star result as an improved result on a mission.",
                "The achievements here: Enough for a Union (Get 50 stars); I'm getting good (Complete 10 missions); Every life matters (Save your first hostage); First time is easy (Defuse your first bomb); Lucky guy (Handcuff your first bad guy); They can do it (Get your first Perfect Plan Medal); He can do it (Or maybe its a She that can do it. All are welcome in the Team. Just get your first One Man Army Medal); I'm doing it (Get your first No Pause Medal); Now I have a machinegun (Unlock the Assaulter class); No door too strong (Unlock the Breacher class); Better be Adamantium (Unlock the Shield Class); All around capability (Unlock all playable classes); Persistence is key (Get a 3 star result as an \"improved result\" on a mission)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all the campaigns, then fully complete each ('A Hard Day's Work', 'Drug Bust', 'The Cell', 'Terror at Sea', 'Suits and Ski-Masks').",
                "2. Grind the three hard medals (Perfect Plan, One Man Army, No Pause) to 30 each on short missions.",
                "3. Work every single mission up to three stars for 'Textbook Material'.",
                "4. Do an Iron Man campaign win and max out squad and trooper levels.",
                "5. Do the joke 'Daimaju' feat and the one-off combat achievements (flashbang, shield triple-kill, 10 kills in 5 seconds).",
                "Tip: 'The Daimaju' is easiest on a mission that starts your squad already in the room - stack four lightly-armoured troopers with their backs to the enemies and unpause."
            ]
        }
    ]
};
