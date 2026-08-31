// Crysis Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crysis-remastered.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1715130 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 12 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crysis-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "crysis-remastered",
    "icon": "🏙️",
    "title": "Crysis Remastered Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in Crysis Remastered (12 hidden). Covers the campaign missions, the difficulty and secondary-objective achievements, and the combat feats and secrets. Twelve achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crysis Remastered has 40 Steam achievements and twelve are Steam-hidden (the Nanosuit feats and vehicle-destruction achievements). The open twenty-eight are the seventeen mission-progress markers, the three Delta-difficulty act clears, completing the game on any difficulty and on Hard/Delta, the secondary-objective counts (4, 8, all), 200 and 400 kills, a fully modded weapon, and using every weapon attachment.",
                "The catalog marks it difficulty 5. The Delta-difficulty full clear is famously punishing, 'Perfect, Soldier!' wants every secondary objective, and the hidden Nanosuit feats (5 undetected kills, 20 grab kills, a 200 m sniper kill) need deliberate play.",
                "Tip: play through once on Normal for the story and most hidden feats, do a Hard run, then a Delta run act by act."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "The mission-progress markers from discovering the Lusca's Call's fate through securing victory in the Battle of Lingshan, including the Steam-hidden 'One Careful Owner' (finish 'Onslaught' in the tank you started it with).",
                "The achievements here: A Little Trouble Parking (Discover the fate of the Lusca's Call); Easy Darlin' (Rescue the hostage); You Knew, Didn't You? (Regroup with Prophet upriver); Very Strange Readings (Infiltrate the excavation site); Livin' Up To Your Name (Board the VTOL for extraction); Pro-Aircraft (Destroy all AA guns around the harbor); Enjoy The Fireworks (Destroy the cruiser); Empty Platform (Secure the train station); You're On Your Own (Proceed to the mining complex); One Careful Owner (Reach the end of the mission 'Onslaught' in the same tank you started it with.); Going Underground (Enter the mines); It's On Like General Kyong (Defeat General Kyong); I'm Coming Home (Escape the mysterious structure under the mountain); Expedition Team (Escort Prophet to safety); I'm A Marine, Son! (Help the marines evacuate); Strickland Would Be Proud (Defeat the flight deck invader); Close Encounter (Secure victory in the Battle of Lingshan)."
            ]
        },
        {
            "heading": "Difficulty & Objectives",
            "body": [
                "Completing Delta Act I, II and III, the game on any difficulty and on Hard or Delta, 4, 8 and all secondary objectives, and the Steam-hidden 'No Fly Zone' (5 helicopters) and 'Tank Buster' (5 tanks).",
                "The achievements here: Delta: Act I (Complete 'Contact', 'Recovery' and 'Relic' on Delta difficulty); Delta: Act II (Complete 'Assault', 'Onslaught' and 'Awakening' on Delta difficulty); Delta: Act III (Complete 'Core', 'Paradise Lost', 'Exodus', 'Ascension' and 'Reckoning' on Delta difficulty); Crysis Controlled (Complete the game on any difficulty); Cool In A Crysis (Complete the game on Hard or Delta difficulty); Following Orders (Complete 4 Secondary Objectives); Without Question (Complete 8 Secondary Objectives); Perfect, Soldier! (Complete all Secondary Objectives); No Fly Zone (Destroy 5 helicopters.); Tank Buster (Destroy 5 enemy tanks.)."
            ]
        },
        {
            "heading": "Combat Feats & Secrets",
            "body": [
                "A fully modded (5-point) weapon, 200 and 400 kills, using every weapon attachment, and the Steam-hidden feats: a 200 m kill, a kill with all 9 weapons, 20 grab kills, a 3 km speed-sprint, 5 undetected kills in a row, a Strength Punch kill on a Nano-Suit soldier, picking up an animal, 30 binocular tags, and 10 thrown-object kills.",
                "The achievements here: This Is My Rifle (Customize a weapon to use all 5 modification points); Special Forces (Kill 200 enemies); Team Raptor (Kill 400 enemies); Long Distance Relationship (Kill an enemy from 200 metres away.); Weapons Master (Get a kill with all 9 weapons.); Something For Every Occasion (Use all weapon attachments); Choke Hold (Kill 20 enemies with a grab.); Marathon Man (Speed-sprint a total of 3 km.); Nano Ninja (Perform 5 consecutive kills without being spotted by an enemy.); Knock-off Knockout (Kill a Nano-Suit soldier with a Strength Punch.); Zoology (Pick up an animal.); Keen Observer (Tag 30 enemies with the binoculars.); Catch This! (Kill 10 enemies by throwing an object at them.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through on Normal for the story markers and most of the hidden combat feats.",
                "2. Do the vehicle-destruction (5 helicopters, 5 tanks) and 'One Careful Owner' on that run.",
                "3. Deliberately do the Nanosuit feats: 5 undetected kills in a row, 20 grab kills, a 200 m sniper kill, 10 thrown-object kills, 30 binocular tags, and picking up an animal.",
                "4. Do a Hard run for 'Cool In A Crysis'.",
                "5. Do a Delta run act by act for 'Delta: Act I/II/III', collecting every secondary objective for 'Perfect, Soldier!'.",
                "Tip: 'Nano Ninja' (5 undetected kills in a row) is easiest with the cloak - kill one enemy, recloak while it recharges, and pick off the next before the alarm spreads."
            ]
        }
    ]
};
