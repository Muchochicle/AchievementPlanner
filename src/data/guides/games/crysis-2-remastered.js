// Crysis 2 Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crysis-2-remastered.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2096600 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crysis-2-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "crysis-2-remastered",
    "icon": "🏙️",
    "title": "Crysis 2 Remastered Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in Crysis 2 Remastered (8 hidden). The 8 hidden achievements are the discoverable secrets (the Souvenirs, the two-in-one bullet, the donut kill, the sinkhole toss, the no-Marine-losses run, the library books, the undetected re-route, the speed cameras). Sourced from XboxAchievements and the Crysis Wiki.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crysis 2 Remastered has 35 Steam achievements, 8 of them hidden. The remaster of the 2011 Nanosuit shooter set in an alien-invaded New York. The visible achievements are the campaign mission markers, the Veteran and Post-Human Warrior difficulty clears (6, 12 and all levels), and a set of combat feats - stealth kills, throwing objects, grab-and-throw kills, the Microwave cannon, grenade multi-kills, headshot chains, and slide kills.",
                "The 8 hidden achievements are the discoverable secrets: finding all 18 New York Souvenirs, killing two enemies with a single bullet, a CELL kill with the giant donut in 'Second Chance', throwing an alien down the sinkhole in 'Dark Heart', keeping all Marines alive in 'Semper Fi or Die', scanning all of Richard Morgan's books in the Public Library, a fully-undetected power re-route in 'Eye of the Storm', and 10 speed-camera flashes across the game.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. Several secrets are one-shot mission moments, and Post-Human Warrior is a hard difficulty clear."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "The mission-completion markers from 'In at the Deep End' to Central Park, the any-difficulty clear, and the Veteran and Post-Human Warrior clears (6 levels, 12 levels, and the whole campaign).",
                "The achievements here: Can it run Crysis? (Complete In at the Deep End); Foreign Contaminant (Escape the Battery Park evacuation center); More than Human (Assimilate alien tissue at the crash site); False Prophet (Find Nathan Gould); Internal Affairs (Infiltrate the CELL facility at Wall Street); Into the Abyss (Infiltrate the alien hive); Once a Marine, Always a Marine (Assist the Marines in Madison Square); Hung Out to Dry (Reach the Hargreave-Rasch building); Fire Walker (Assist the evacuation at Bryant Park); Dark Night of the Soul (Defend Central Station); Crossroads of the World (Complete the evacuation at Times Square); Theseus at Last (Locate Jacob Hargreave); Home Stretch (Reach Central Park); Start Spreading the News (Finish the single player campaign on any difficulty); City That Never Sleeps (Complete 6 levels on Veteran difficulty); Evolution (Complete 12 levels on Veteran difficulty); Heart of Darkness (Complete 6 levels on Post-Human Warrior difficulty); Medal of Honor (Complete 12 levels on Post-Human Warrior difficulty); Men of Destiny (Complete the single player campaign on Veteran difficulty); Post-Human Warrior (Complete the single player campaign on Post-Human Warrior)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "Stealth kills, object-throw and grab-and-throw kills, the Microwave cannon, a 3-enemy grenade kill, a 4-headshot chain, 5 slide kills, and the two-enemies-one-bullet secret.",
                "The achievements here: Close Encounters (Stealth kill 25 enemies); Fastball (Kill 10 enemies by throwing an object at them); Death Grip (Kill 10 enemies with grab and throw); Popcorn (Kill 20 enemies with the Microwave cannon); Two Heads Are Better Than One (Kill two enemies with a single bullet); Blast Radius (Kill at least 3 enemies with a single grenade); Headhunter (Kill 4 enemies in a row with headshots); Death Slide (Kill 5 enemies while sliding)."
            ]
        },
        {
            "heading": "Secrets & Collectibles",
            "body": [
                "The remaining Steam-hidden secrets - all 18 New York Souvenirs, the donut kill, the sinkhole alien toss, the no-Marine-losses run, the Public Library books, the undetected 'Eye of the Storm' re-route, and 10 speed-camera flashes.",
                "The achievements here: The Tourist (Find all 18 New York Souvenirs); Food for thought (Kill a CELL operator with the giant donut in the mission 'Second Chance' (drop it on an enemy next to a car)); Hole in One (Throw an alien down the sinkhole in the mission 'Dark Heart'); Band of Brothers (Keep all Marines alive during the rescue in the mission 'Semper Fi or Die'); Literary Agent (Scan all of Richard Morgan's books in the New York Public Library); Stealth Assassin (Re-route the power in the mission 'Eye of the Storm' without being detected); Speeding Ticket (Trigger 10 different speed cameras by sprinting past them across the campaign)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal, using a guide for all 18 New York Souvenirs and doing the one-shot secrets as you reach their missions (the donut in Second Chance, the sinkhole in Dark Heart, the no-losses Semper Fi or Die, the library books, the undetected Eye of the Storm re-route).",
                "2. Sprint past every speed camera you see - you need 10 different ones across the game.",
                "3. Grab the combat feats (grab-and-throw, Microwave cannon, slide kills, the 4-headshot chain, two-in-one bullet) during that run.",
                "4. Replay levels on Veteran for the 6- and 12-level and full-campaign Veteran clears.",
                "5. Do a Post-Human Warrior run for Heart of Darkness, Medal of Honor and Post-Human Warrior.",
                "Tip: play the first run heavily stealth-focused - it makes the undetected re-route, the no-Marine-losses mission and the difficulty clears far more forgiving, and the combat feats can be mopped up on the harder replays."
            ]
        }
    ]
};
