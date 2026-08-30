// Alien: Isolation Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/alien-isolation.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   214490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PlayStationTrophies,
//   XboxAchievements, and the games' wikis), noted in the Hidden
//   Achievements section. Every other achievement's description is Steam's
//   own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "alien-isolation-achievement-guide",
    "category": "game",
    "gameSlug": "alien-isolation",
    "icon": "👽",
    "title": "Alien: Isolation Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Alien: Isolation - 7 are hidden. Covers Amanda Ripley's 18-mission campaign and the two difficulty clears, the weapon-use and combat feats, the Alien encounters, stealth and hacking milestones, the ID-tag / Nostromo-log / archive-log collectibles, and the seven hidden achievements (story markers plus the game's toughest challenge runs).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Alien: Isolation has 50 Steam achievements, 7 of which are hidden. Most of the visible list unlocks naturally: completing each mission of Amanda Ripley's story aboard Sevastopol station, using each weapon at least once, and hitting modest milestones for hacking, crafting, the motion tracker and the collectible sets (ID tags, Nostromo logs, archive logs). The 7 hidden achievements are three late-game story-mission markers (The Descent, The Message, Transmission), turning off the beacon, and the game's three hardest challenges - dying to the Alien 100 times, surviving the first big Alien mission untouched, and completing the entire game without a single death.",
                "The two genuinely hard, non-missable-but-demanding achievements are Survivor (finish on the hardest difficulty) and One Shot (finish the whole game without dying). One Shot is the headline challenge of the list - it can be done on the easiest difficulty and mission-by-mission via chapter select on some versions, but it still demands patience and Alien-behaviour knowledge across a long game.",
                "Tip: leave One Shot and Survivor for a dedicated final run once you already know every mission's layout, save-point positions and Alien patrol logic from your first playthrough - attempting a no-death run blind is how most people lose hours to a single unlucky encounter."
            ]
        },
        {
            "heading": "Story Missions & Completion",
            "body": [
                "Completing each mission of the campaign (the achievement text numbers them slightly differently from the in-game mission list, but there is one per story mission through to the eighteenth), plus finishing the game on any difficulty and on the hardest difficulty setting.",
                "The achievements here: Awake (Complete the first mission); Welcome to Sevastopol (Complete the second mission); A Hunt Begins (Complete the third mission); You Shouldn't Be There. (Complete the fourth mission); How Do You Feel? (Complete the fifth mission); Caught in the Trap (Complete the sixth mission); An Outpost of Progress (Complete the seventh mission); Bait (Complete the tenth mission); Hazard Containment (Complete the eleventh mission); A Synthetic Solution (Complete the twelfth mission); Consultation (Complete the thirteenth mission); Survivor (Complete the game on the hardest difficulty setting); Ripley, Signing Off (Complete the game on any difficulty setting); Free the Torrens (Complete the seventeenth mission); End of the Hunt (Complete the eighteenth mission)."
            ]
        },
        {
            "heading": "Weapons & Combat",
            "body": [
                "Using each weapon at least once (stun baton, flamethrower, shotgun, revolver, bolt gun), killing 10 humans and an Android, a melee-only Android kill, escaping android combat unscathed, causing the Alien to retreat with a molotov or the flamethrower, a non-lethal knockdown, and escaping Comms without being attacked by an android.",
                "The achievements here: Shock to the System (Use the stun baton); Light 'em Up (Use the flamethrower); Just out of Reach (Contact your team and escape Comms without being attacked by an android); Use With Caution… (Use the shotgun); Every Bullet Counts (Use the revolver); Self Defense (Kill 10 humans); Not a Scratch (Escape from android combat without taking damage); Retreat From Fire (Cause the Alien to retreat using a molotov); Back Off (Cause the Alien to retreat by using the flamethrower); Stunned (Knock down a human or stun an android with a non-lethal attack); Fault Detected (Kill an Android); This Should Work (Use the bolt gun); My Turn Now (Kill an android using only the maintenance jack)."
            ]
        },
        {
            "heading": "Encounters, Stealth & Systems",
            "body": [
                "First encountering the Alien on Sevastopol, using the vent system 20 times, detecting 30 targets with the motion tracker, constructing an item and then one of every craftable item, a no-human-kills full playthrough, navigating Reactor Maintenance without dying, and the hacking, minigame and rewire-point milestones.",
                "The achievements here: A Perfect Organism (Encounter the Alien in Sevastopol for the first time); She's in the Vents... (Use the vent system 20 times); I Admire its Purity (Detect 30 targets with the motion tracker); Build to Survive (Construct an item); Mercy or Prudence? (Complete the game without killing any humans); Mind Your Step (Navigate Reactor Maintenance without dying); Seegson Security Bypass (Perform 10 successful hacks); Seegson Systems Expert (Complete 10 minigames successfully); Power Games (Access 10 different rewire points); A True Engineer (Construct one of each craftable item)."
            ]
        },
        {
            "heading": "Collectibles",
            "body": [
                "The three collectible sets: ID tags (one, then all), Nostromo logs (10 in the main campaign), and archive logs (one, then all 100 - 'Voices of Sevastopol').",
                "The achievements here: The Missing (Collect an ID tag); The Taken (Collect all ID tags); Archivist (Collect 10 Nostromo logs in the main campaign); A Record of Disaster (Collect an archive log); Voices of Sevastopol (Collect 100 archive logs)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Three of the hidden achievements (Throwing the Switch, The Message, Transmission) are simply completion markers for three late-game story missions and unlock as you play. Not the First is a single scripted action (turning off the beacon). The other three are the list's hardest challenges: 100 Times Too Many (be killed by the Alien 100 times), Hide. Run. Survive. (survive the first major Alien mission without being killed), and One Shot (complete the whole game without dying).",
                "The hidden achievements: 100 Times Too Many (Be killed by the Alien 100 times over the course of your playthrough(s).); Throwing the Switch (Complete Mission 13, 'The Descent'.); The Message (Complete Mission 14, 'The Message'.); Hide. Run. Survive. (Complete Mission 5, 'The Quarantine' - your first sustained encounter with the Alien - without being killed by it.); Not the First (Turn off the emergency beacon.); Transmission (Complete Mission 15, 'Transmission'.); One Shot (Complete the entire game from start to finish without dying once.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through once on Novice or Hard difficulty, completing every mission and using each weapon at least once as you find it.",
                "2. On that run, work on the milestone achievements - 20 vent uses, 30 motion-tracker detections, 10 hacks / minigames / rewire points, crafting one of every item - and pick up ID tags, Nostromo logs and archive logs as you pass them.",
                "3. Do the two behaviour-based feats when the opportunity is natural: cause the Alien to retreat with fire, and escape Comms without an android attack.",
                "4. On a second playthrough, go for the no-human-kills run (Mercy or Prudence?) and clean up any missed collectibles, especially the full 100 archive logs.",
                "5. Save Survivor (hardest difficulty) and One Shot (no deaths) for a final, deliberate run once you know every mission cold - and grind 100 Times Too Many separately by letting the Alien kill you in an early area if it has not happened naturally.",
                "Tip: for One Shot, play extremely conservatively - stay in lockers and vents far longer than feels necessary, never sprint near the Alien, and keep a mental map of the nearest save point so a bad encounter costs you progress rather than the whole run."
            ]
        }
    ]
};
