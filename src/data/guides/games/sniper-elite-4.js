// Sniper Elite 4 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sniper-elite-4.json), whose 85 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   312660 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PSNProfiles/
//   PlayStationTrophies, XboxAchievements, and the games' wikis), noted in
//   the Hidden Achievements section. Every other achievement's description
//   is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sniper-elite-4-achievement-guide",
    "category": "game",
    "gameSlug": "sniper-elite-4",
    "icon": "🎯",
    "title": "Sniper Elite 4 Achievement Guide",
    "summary": "A practical guide to all 85 Steam achievements in Sniper Elite 4 - 1 are hidden. Covers the eight-mission Italian campaign and the two Overwatch co-op maps, weapon mastery and kill milestones, the difficulty and no-manual-saves clears, the collectible hunts, and all three story DLC packs (Target Fuhrer and the three-part Deathstorm campaign).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sniper Elite 4 has 85 Steam achievements, only 1 of which is hidden. The bulk of the list is the eight-mission World War II campaign across Italy, the two co-op Overwatch maps, and a long tail of weapon-mastery, kill-count and collectible milestones (letters, stone eagles, sniper reports). A block of achievements is gated behind the higher difficulties - Marksman, Sniper Elite, Authentic, and Authentic Plus, the last two also having no-manual-saves variants - and three story DLC packs (Target Fuhrer and the three Deathstorm missions: Inception, Infiltration and Obliteration) each carry their own set.",
                "Nothing in the campaign is missable because you can replay any mission with all your unlocks and collectible progress carried over, but full completion is a big time investment: it needs at least one Authentic Plus no-manual-saves run of the whole campaign, every secondary objective and challenge, and full collectible sweeps. The single hidden achievement is a one-off trick shot at the very end of Mission 8.",
                "Tip: do your collectible, challenge and secondary-objective sweeps on the lowest difficulty first, using free mission replays, and save the high-difficulty runs for last when you know every map's layout, patrol routes and sniper positions by heart - Authentic Plus with no manual saves is far less punishing once the levels hold no surprises."
            ]
        },
        {
            "heading": "Campaign Missions & Overwatch",
            "body": [
                "Completing each of the eight main campaign missions across Italy, plus the two standalone Overwatch co-op maps that pair a sniper with a spotter.",
                "The achievements here: The end of the beginning (Complete Mission 1); We shall fight on the beaches (Complete Mission 2); No compromise is possible (Complete Mission 3); Set Europe ablaze! (Complete Mission 4); We shall not fail or falter (Complete Mission 5); Never, never, never give up (Complete Mission 6); Plans are nothing; planning is everything (Complete Mission 7); Success is not final (Complete Mission 8); Compounding Your Success (Complete Overwatch 1); Train, Set and Match (Complete Overwatch 2)."
            ]
        },
        {
            "heading": "Weapon Mastery & Kill Milestones",
            "body": [
                "Mastering weapons and racking up lifetime totals: pistol, secondary and rifle kill counts, mastering a single weapon, fully using Target Focus, total kill distance, trap kills, and completing half and then all of the campaign's secondary objectives.",
                "The achievements here: A Most Singular Expert (Master a single weapon); The Pistol Pro (100 Kills with a Pistol); The Secondary Specialist (250 Kills with a Secondary Weapon); Rockin' the Rifle (500 Kills with a Rifle); I See You! (Fully Target Focus 100 times); Everything by Halves (Complete 50% of all Secondary Objectives in the Main Campaign); Following Orders (Complete All Secondary Objectives in the Main Campaign); Keeping your Distance (Total kill distance of 100 Kilometres); Ambush King (Kill 100 enemies with traps)."
            ]
        },
        {
            "heading": "Difficulty Clears & Marksmanship Feats",
            "body": [
                "Completing the whole campaign on each difficulty tier - Cadet, Marksman, Sniper Elite, Authentic, and Authentic Plus (the last two also with no manual saves) - alongside precision trick shots: the every-organ killshot, a five-kill artillery strike, killing snipers before they spot you, and other signature feats.",
                "The achievements here: Are You Insane? (Complete the entire main campaign on Authentic Difficulty); The Real Deal (Complete the entire main campaign on Sniper Elite difficulty); The Masterful Marksman (Complete the entire main campaign on Marksman difficulty); Mission Possible (Complete the entire main campaign on Cadet difficulty); The Nutcracker - Sweet! (Incapacitate an enemy, then shoot them in the testicles); The Organ Grinder (Get at least one killshot on every organ); Dirty Tactics (Kill an enemy via a booby trap); Demolition Fan (Satchel Charge 25 manned vehicles/pillboxes/pantherturms); Fire and Brimstone (Kill 5 enemies with a single artillery strike); Sniper Interrupted (Kill 5 Snipers before they see you); You know you're REALLY insane, right? (Complete the entire main campaign on Authentic Plus difficulty); Better than the Best (Complete the entire main campaign on Authentic Plus difficulty with no manual saves.)."
            ]
        },
        {
            "heading": "Secondary Objectives, Collectibles & Ranks",
            "body": [
                "Clearing every OSS and Mother Hen secondary objective, all challenges in a mission, the ammo-type and environmental-kill feats, the medikit-free and rifle-only mission runs, full collectible sweeps (letters, stone eagles, sniper reports), reaching character ranks 5/25/50, the survival and multiplayer-mode milestones, and the last-second radio capture.",
                "The achievements here: Mother knows best (Complete all Mother Hen secondary Objectives in the main game); Weaver's Warrior (Complete all OSS Secondary Objectives in the Main Campaign); Challenge Accepted (Complete all challenges in a single mission); Variety is the Spice of Death (Get a kill with every weapon); Silent But Deadly (Kill 100 enemies with suppressed ammo); Still Ain't Got Time to Bleed (Complete a single player mission without using a Medikit or Bandage); On Yer Head, Son (Kill enemies with 3 different environmental drop kills); My Rifle is My Best Friend (Complete a main campaign mission with rifle kills only); The Collector (Collect all Last Letters, Letters From Home, and Letters To Home in the main game); Master-At-Arms (Fully master a rifle, secondary weapon and pistol); A Bird in the Hand... (Shoot all Stone eagles); Greatest Hits (Find all sniper reports); Dogface (Reach character rank 5); Jarhead (Reach character rank 25); Veteran (Reach character rank 50); Gotta Cap 'em All (Kill one of each infantry type); Survival of the Fittest (Complete all waves in a survival session); Competitive Nature (Complete at least one match in each mode); Channel Changer (Take control of the enemy held radio and capture it with just seconds remaining); The Best of the Best of the Best (Complete the entire main campaign on Authentic difficulty with no manual saves)."
            ]
        },
        {
            "heading": "DLC: Target Fuhrer",
            "body": [
                "The Target Fuhrer bonus mission: the many ways to assassinate the decoy Hitler (testicle shot, casserole, sea mine, torpedo rack, crushing eagle, submarine, explosives), plus the no-detection exfil, all optional objectives, all challenges, and simply completing the mission.",
                "The achievements here: Albert Hall (Target Führer - Kill Hitler with a testicle shot); Hot Pot (Target Führer - Kill Hitler with the casserole); Minesweeper (Target Führer - Blow up Hitler on VIP boat with a sea mine); STRIKE!! (Target Führer - Kill Hitler with a torpedo rack); The Eagle Has Landed (Target Führer - Crush Hitler with the Eagle at the ceremony); Total War (Target Führer - Complete all challenges); Down Periscope (Target Führer - Kill Hitler with the submarine); 0 Days Without Incident (Target Führer - Kill Hitler with any explosive item/trap); Silent but Violent (Target Führer - Kill Hitler and exfiltrate without being detected); Base Desires (Target Führer - Complete all Optional Objectives and destroy the base); Final Reckoning (Target Führer - Complete the Mission); Deja View to a Kill (Target Führer - Kill Hitler)."
            ]
        },
        {
            "heading": "DLC: Deathstorm (Inception, Infiltration, Obliteration)",
            "body": [
                "The three-part Deathstorm campaign - Part 1: Inception, Part 2: Infiltration and Part 3: Obliteration - covering each part's completion, all its challenges, and its scripted feats (silent torpedo launch, melee-only sniper takedowns, crane tank drop, the Reiner family, the science-extraction run, and the no-shots-fired escape).",
                "The achievements here: Shore Leave (Inception - Complete the mission); All Inclusive (Inception - Complete all the challenges); Karl Shot First (Inception - Get to the destroyer and launch the torpedo without being spotted); Save Keys to Open Doors (Inception - Unlock the train door using the keys found on the officers); Knife to a Gun Fight (Inception - Melee takedown all the snipers); Heads Up (Inception - Destroy the tank with a crane drop); King of the World (Inception - Dump Major Volker Grün's body into the water from the end of a boat); Cipher Elite (Infiltration - Complete the Mission); Full Marks (Infiltration - Complete all the Challenges); Faust of Fury (Infiltration - Kill the Valkyrie Squad reinforcements using only the Neunfaust); Debriefed (Infiltration - Multi-Kill the Officers during the tactical briefing in the auditorium); Fish-in-a-Barrel (Infiltration - Kill all enemies on the island with explosives); Read This! (Infiltration - Eye shot the book burning Officer); Untouchable (Infiltration - Complete the Mission without being shot by a Sniper); Storm Chaser (Obliteration - Complete the Mission); Atomic (Obliteration - Complete all the Challenges); Ghost Town (Obliteration - Kill everyone); I Love Science (Obliteration - Extract Wernicke, Hänel, and Kehrer in one playthrough); Saving Private Reiner (Obliteration - Don't kill any members of the Reiner family); Fingers off Triggers (Obliteration - From the bunker reach the extraction point without firing a shot); Overkill (Obliteration - Kill all enemy snipers with explosives)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "The one hidden achievement, The Path of Most Resistance, is a trick shot at the climax of Mission 8: rather than crippling the escaping plane while it is still on the runway, wait for it to take off and shoot it down in mid-air with a bolt-action rifle.",
                "The hidden achievements: The Path of Most Resistance (At the end of Mission 8 (Allagra Fortress), let the escaping aircraft take off, then shoot it down in flight with a bolt-action rifle instead of disabling it on the runway.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the eight-mission campaign on a comfortable difficulty (Cadet or Marksman), using free mission replays afterwards so nothing is truly missable.",
                "2. On replays, sweep each mission for its OSS, Mother Hen and other secondary objectives, all challenges, and every collectible (Last Letters, stone eagles, sniper reports), and pick up the weapon-mastery and kill-milestone achievements as your totals climb.",
                "3. Do the trick-shot feats deliberately - the every-organ killshot, the five-kill artillery strike, killing snipers before they see you, and the hidden mid-air plane kill at the end of Mission 8.",
                "4. Play the two Overwatch co-op maps and the three Deathstorm DLC missions, doing each one's challenges and scripted feats on the same visit.",
                "5. Do the Target Fuhrer mission and work through its assassination methods, then finish with the escalating difficulty clears, ending on an Authentic Plus run with no manual saves.",
                "Tip: character rank (for Dogface / Jarhead / Veteran) climbs across every mode including multiplayer and Deathstorm, so you will usually hit rank 50 through normal completion work - don't grind it separately until everything else is done."
            ]
        }
    ]
};
