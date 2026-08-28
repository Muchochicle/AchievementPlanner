// Ghostrunner Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ghostrunner.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1139900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 43 of 45 ship a real,
//   official Steam description, quoted verbatim below (a few carry a
//   trailing/leading space, preserved byte-for-byte).
// - The 2 hidden achievements ship no Steam description; they are
//   Project_Hel DLC bosses (Bakunin, the Golem). Their conditions here
//   are curatorial, cross-checked against community achievement guides.
export const GUIDE = {
    "slug": "ghostrunner-achievement-guide",
    "category": "game",
    "gameSlug": "ghostrunner",
    "icon": "🥷",
    "title": "Ghostrunner Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Ghostrunner - the story and boss markers, the combat and movement feats, the collectible and completion achievements, the Project_Hel DLC and no-restriction level challenges, and the 2 hidden boss achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ghostrunner has 45 Steam achievements, 2 of them hidden (both Project_Hel DLC bosses). The base game is a short, hard first-person parkour-slasher; most achievements are combat feats (kill N a certain way, a no-death streak) plus collectibles and the story bosses. Level-restriction achievements (complete a level without dying, or without a specific ability) are added by later updates and the DLC.",
                "Nothing is missable - every level is replayable from the menu, and collectibles and feats can be redone - but More Than Human (23 kills in a row without dying) and the no-death / no-ability level clears are genuinely difficult, and GR Project Complete requires every other achievement.",
                "Tip: play the campaign for the story and easy combat feats, then use level select to grind the tricky ones - each level is short, so restarting for a clean no-death run or a specific kill setup is cheap. Do the collectibles with a guide."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "The campaign markers and bosses: defeating the Keymaster, Hel, Tom and the Bakunin fight, saving Sector Five, unlocking your full potential, and reaching the top of the Tower.",
                "The achievements here: Artificial Selection (Defeat the Keymaster); Back To Hell (Defeat Hel); Out Of Order (Decomission Tom); Perfection (Unlock your full potential!); Running Out Of Breath (Save the residents of Sector Five ); Finish Line (Complete your climb up the Tower); Just A Man (Defeat Bakunin in less than 3 minutes)."
            ]
        },
        {
            "heading": "Combat & Movement Feats",
            "body": [
                "The bulk of the list: ability and weapon kill combos (Blink, Tempest, Surge, Overlord, the sword, reflected projectiles), the Beacon Shield and Slugger feats, blocking and reflecting, a 23-kill no-death streak, 1,000 total kills, a 42km run, and the movement chains (dash/wallrun/slide/gap-jammer in one second).",
                "The achievements here: Can't Run Can't Hide (Kill 5 enemies with your special abilities, while they are protected by a Beacon Shield ); Dead In The Air (Kill 3 Sluggers using Blink, while they are in the air); Hit Me If You Can (Block Warden's attack 5 times in a row); Homerunner (Kill an enemy with a projectile reflected by Tempest); I Call It Luck (Block 5 projectiles in a row using your sword); Improvise Adapt Overrun (Kill a sniper without getting near him); Longrunner (Run 42 kilometers); More Than Human (Kill 23 enemies in a row without dying); Control Freak (Force enemies to kill 4 of their allies using Overlord); Preemptive Strike (Kill a Splitter before it manages to split itself); Running Wild (Use dash, wallrun, slide and gap jammer within 1 second); Strike (Kill 3 enemies at once with a falling Drone); Sword Runner (Kill 5 enemies within 10 seconds using just your sword); Sword To A Gunfight (Kill 30 enemies with projectiles reflected using your sword (Reflect module required)); Triple A (Kill 3 enemies with a single use of Blink); Unstoppable Force (Kill 3 enemies with a single use of Tempest); Upgrades Not Mandatory (Kill 10 enemies in a row without using Sensory Boost); Wallrunner (Kill 74 enemies right after jumping off a wall); Wave Of Mutilation (Kill 3 enemies with a single use of Surge); Where Are My Keys (Kill 1000 enemies); Why Not Both (Use 2 different special abilities within 10 seconds); R Is For Running (Complete a level without dying)."
            ]
        },
        {
            "heading": "Collectibles & Completion",
            "body": [
                "Collecting all audiologs, story items, sword skins and every collectible, filling every GR-SCP slot, and GR Project Complete (all other achievements).",
                "The achievements here: About Adam (Collect all audiologs); Fine Addition (Complete your sword collection); GR Project Complete (Obtain all the other achievements); Junkrunner (Collect every single collectible item in the game); One Man's Trash (Collect all story items); Push It To The Limit (Fill up GR-SCP so that there are no empty slots left)."
            ]
        },
        {
            "heading": "Project_Hel DLC & No-Restriction Levels",
            "body": [
                "The Project_Hel DLC and update achievements: the Hel-specific Surge feat, and the no-restriction level clears (a level without upgrades, without Surge, filling the Rage Bar by deflecting, staying Enraged, and \"No Other Choice\" with no kills).",
                "The achievements here: Everyone Needs A Hobby (Find all the collectibles on Hel levels); Obedient Machine (Complete \"No Other Choice\" without killing any enemies (excluding Beacons)); One Of Those Days (Stay Enraged for 20 seconds); Strafing Run ( Playing as Hel, kill 3 enemies with Surge during one jump); Legacy Drivers (Complete \"My Friend\" without using any upgrades); Up Close And Personal (Complete \"Down Below\" without using Surge on the enemies); Sticks And Stones (Fill up your Rage Bar just by deflecting projectiles (Deflect: Absorb upgrade required)); A Grade (Complete \"Another Awakening\" without dying)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Two achievements are hidden and ship no Steam description - both are Project_Hel DLC bosses:",
                "The achievements here: Where He Stood (Project_Hel DLC: defeat Commander Bakunin.); Scrapped (Project_Hel DLC: defeat the Golem.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign to the top of the Tower (Finish Line) for the story markers and the easy combat feats.",
                "2. Level-select the harder combat feats: More Than Human (23 no-death kills), Wallrunner (74), Where Are My Keys (1,000 total) and the ability-combo achievements.",
                "3. Collect all audiologs, story items, sword skins and collectibles with a guide, and fill the GR-SCP grid.",
                "4. Do the no-restriction level clears (R Is For Running, Legacy Drivers, Up Close And Personal, A Grade, Obedient Machine) - each is one short level restarted until clean.",
                "5. Play Project_Hel for its achievements including the two hidden bosses (Where He Stood, Scrapped), then GR Project Complete pops for the last one.",
                "Tip: the no-death level clears are much easier once you have all upgrades - do Legacy Drivers (\"My Friend\" with no upgrades) and A Grade / R Is For Running on the levels you have practised most, not in campaign order."
            ]
        }
    ]
};
