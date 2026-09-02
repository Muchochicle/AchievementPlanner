// Crysis 3 Remastered Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/crysis-3-remastered.json), whose 37 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2096610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 12 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "crysis-3-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "crysis-3-remastered",
    "icon": "🏹",
    "title": "Crysis 3 Remastered Achievement Guide",
    "summary": "A practical guide to all 37 Steam achievements in Crysis 3 Remastered (12 hidden). The 12 hidden achievements are the Predator Bow and stealth combat challenges plus easter eggs (the donut surf, the deer, the Skyrim arrow). Sourced from XboxAchievements and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Crysis 3 Remastered has 37 Steam achievements, 12 of them hidden. The remaster of Crysis 3, set in the overgrown Liberty Dome with Prophet and his signature Predator Bow. The visible achievements are the seven mission markers, the Veteran and Supersoldier difficulty clears, the gear and Nanosuit-module mastery (all weapon attachments, all modules maxed, every arrow type, hacking challenges, alien weapons), and hacked-sentry and supercharge kills.",
                "The 12 hidden achievements are combat challenges and easter eggs: killing a deer with an explosive arrow, disabling the Nanosuit Jammer, a Predator Bow helicopter kill, surfing a donut down the river for 20 seconds, 5 Buggy roadkills, killing all Pingers, an environmental double-kill, 20 undetected stealth kills, a stealth Ceph Stalker kill, 10 undetected thrown-object kills, pinning 10 enemies to walls with arrows, and an arrow-to-the-leg Skyrim reference.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. Several challenges are tied to a single mission, and Supersoldier is a hard difficulty clear."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "The tutorial and seven mission markers ('Post-Human' through 'Gods and Monsters'), the any-difficulty clear, and the Veteran and Supersoldier clears (3 of 7 levels and the whole campaign).",
                "The achievements here: Staying Sharp (Complete Tutorial); Welcome to the Jungle! (Complete Post-Human); A Flawless Getaway (Complete Welcome to the Jungle); Off the Grid (Complete The Root of All Evil); Turning the Tide (Complete Safeties Off); Brink of Apocalypse (Complete Red Star Rising); Belly of the Beast (Complete Only Human); The True Measure of a Hero (Complete Gods and Monsters); Nanosuit Veteran (Complete 3 of 7 levels on Veteran difficulty); Halfway to Hell (Complete 3 of 7 levels on Supersoldier difficulty); World Saver (Finish the campaign in any difficulty); Bring it On (Complete the campaign on Veteran difficulty); Professional Superhero (Complete the campaign on Supersoldier difficulty)."
            ]
        },
        {
            "heading": "Gear & Nanosuit Mastery",
            "body": [
                "Saving a module package, unlocking all weapon attachments, maxing all Nanosuit modules, 10 kills with every arrow type, 25 Maximum Strength melee kills, retrieving 10 arrows, 20 hacking challenges, using all alien weapon types, 25 supercharged kills, hacked-sentry kills, and a 10-kill supercharge boost.",
                "The achievements here: Perk Of The Job (Save a Nanosuit module package); Geared-up (Unlock all weapon attachments); Suited-up (Upgrade all Nanosuit modules to Maximum level); Be a Pro, use a Bow! (Kill 10 enemies with every arrow type); Maximum Strength (Kill 25 enemies using only the Nanosuit's enhanced powers instead of guns); Hunter-Gatherer (Retrieve 10 arrows from pinned enemies); The Gibson (Complete 20 hacking challenges); I'll Have That! (Rip off and use all alien weapon types); Taste Of Your Own Medicine (Kill 25 enemies while supercharged); Breaking the Lore (Retrieve all CELL Intel); Inside Job (Kill 10 enemies using hacked sentry guns); Post-Human Warrior (Kill 10 enemies in a single Supercharge boost)."
            ]
        },
        {
            "heading": "Secrets & Combat Challenges",
            "body": [
                "The 12 Steam-hidden challenges and easter eggs - the deer, the Nanosuit Jammer, the Predator Bow helicopter kill, the 20-second donut surf, the 5 Buggy roadkills, killing all Pingers, the environmental double-kill, 20 undetected stealth kills, the Ceph Stalker stealth kill, 10 undetected thrown-object kills, pinning 10 enemies with arrows, and the Skyrim arrow.",
                "The achievements here: Bang For The Buck (Kill a deer using an explosive arrow); Can You Hear Me Now (Disable the Nanosuit Jammer in the mission 'Welcome to the Jungle'); Who Needs Rockets? (Take out an attack helicopter with the Predator Bow in the mission 'Post-Human'); White Rider (Surf a donut down the river for 20 seconds in the mission 'The Root of All Evil'); Roadkill (Crush 5 enemies with the Buggy in the mission 'Red Star Rising'); Ping Pong! (Kill all the Pingers in the mission 'Only Human'); Arrow to the Knee! (Kill an enemy with an arrow to the leg - a Skyrim reference); Improviser (Kill two enemies in one strike using the environment); Nanosuit Ninja (Perform 20 stealth kills without alerting nearby enemies); Stick Around (Pin 10 enemies to walls with Predator Bow arrows); Clever Girl! (Stealth-kill a Ceph Stalker); Poltergeist (Kill 10 enemies with thrown objects without being detected)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Normal with the Predator Bow as your main weapon, doing the mission-specific challenges as you reach them (the Jammer in Welcome to the Jungle, the donut surf in The Root of All Evil, the Buggy roadkills in Red Star Rising, the Pingers in Only Human).",
                "2. Stay stealthed - the 20 undetected stealth kills, 10 undetected thrown-object kills, the Ceph Stalker kill and pinning 10 enemies with arrows all come naturally on a bow-and-stealth run.",
                "3. Grab the deer explosive-arrow kill and the Skyrim arrow-to-the-leg early.",
                "4. Work the gear-mastery achievements (all attachments, all modules maxed, every arrow type, hacking challenges) across your playthroughs.",
                "5. Replay on Veteran and then Supersoldier for the difficulty clears.",
                "Tip: retrieve your arrows from pinned enemies constantly - it keeps you stocked for the stealth-kill and pin achievements and counts toward Hunter-Gatherer at the same time."
            ]
        }
    ]
};
