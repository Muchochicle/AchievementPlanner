// EVERSPACE 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/everspace-2.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1128920 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 12 hidden achievement(s) ship no official description from
//   Steam; their requirements below are curatorial, researched from public
//   community guides.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "everspace-2-achievement-guide",
    "category": "game",
    "gameSlug": "everspace-2",
    "icon": "🚀",
    "title": "EVERSPACE 2 Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in EVERSPACE 2 - 12 are hidden. Covers ship, loadout, and combat-technique milestones, 100% completion goals, and the main story plus both DLC campaigns' hidden story beats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EVERSPACE 2 has 58 Steam achievements, and 12 are hidden. The visible list covers ship and gear progression (buying new ships, equipping legendary and Ascendant items, mastering devices), combat-technique feats tied to specific weapons and abilities (the Sentinel's Static Overload, the Thermo Gun, High-Pressure boost mode, the Fusion Hook, Sticky Turrets), and 100%-completion goals (all Location Challenges, all side missions, all challenge collections, all racing tracks at platinum). The 12 hidden achievements are all story beats - 6 from the main campaign, 4 from the Titans DLC, and 2 from the Wrath of the Ancients DLC.",
                "Nothing is missable - every ship, gear, and completion achievement stays available across your playthrough, and the story-tied hidden achievements unlock naturally as you progress through the main campaign and each DLC's content. The genuine long poles are the full 100%-completion achievements (No Asteroid Unturned, Sidetracked, That's All You Got?), which need you to specifically finish every side activity in the game rather than just the main story.",
                "Tip: several combat-technique achievements (Static Overload hitting 5 enemies, a Thermo Gun kill through an obstacle, a High-Pressure triple kill) are much easier to set up deliberately in a lower-difficulty encounter with grouped enemies than to stumble into during a hard fight - if you are struggling with one, revisit an early, easy location and engineer the situation on purpose."
            ]
        },
        {
            "heading": "Ship & Gear Progression",
            "body": [
                "Reviving your old hideout, reaching max renown, buying a new ship, equipping a legendary item, completing a master challenge, destroying 1,000 Outlaw and 100 Elite units, mastering a device, the Sentinel's Static Overload hitting 5 enemies, a Thermo Gun obstacle kill, a High-Pressure triple kill, maxing two attributes at once, completing a Rift, buying a Tier 4 ship, changing all three ship modules, 25 Location Challenges, 10 Jobs, and all Catalyst Blueprints.",
                "The achievements here: A New Home (Revive an old hideout.); What A Legend! (Reach the highest level of renown.); A New Ride (Buy a new ship.); My Precious! (Equip a legendary item.); Challenge Accepted (Complete a master challenge.); Against All Outlaws (Destroy 1000 Outlaw units.); Elite Eliminator (Destroy 100 Elite units.); Device Master (Master a device.); Unlimited Power (Have the Sentinel's ULT \"Static Overload\" span electricity arcs to at least 5 enemies.); Bend it like Roslin (Use a Thermo Gun to destroy an enemy that is behind an obstacle.); Under Pressure (Use the Energized Boost's High-Pressure mode to destroy 3 enemies in one go.); Maxed Out (Have two attributes maxed out at the same time using Mainframe Expansions); Rift Runner (Complete a Rift); Top Tier (Buy a Tier 4 ship); Spaceship of Theseus (Change the front, rear and wings of a ship.); Been There, Done That (Complete 25 Location Challenges); Work For Hire (Complete 10 Jobs); The Catalyst Catalog (Find all Catalyst Blueprints)."
            ]
        },
        {
            "heading": "100% Completion & Advanced Combat",
            "body": [
                "Finding all devices, fully upgrading all Companion Perks, 100%-completing all locations, finishing all side missions, completing all challenge collections, a Lunacy-500-or-higher Rift clear, a Magnetic Repulsor EMP-smash kill, platinum rank on every race, a 5,000-credit commodity sale, a 10-second Fusion Hook tether, blocking two Sniper Drone shots with the Front Shield Generator, a Sticky Turret kill, mining 2,000 resources, and visiting a final resting place.",
                "The achievements here: Gotta Find 'Em All (Find all devices); Perky Personnel (Fully upgrade all Companion Perks); No Asteroid Unturned (Complete all locations 100%); Sidetracked (Finish all side missions); That's All You Got? (Complete all challenge collections); Legendary Lunatic (Complete a Rift at Lunacy 500 or higher); Stasis Smash (Use the Magnetic Repulsor to smash an EMP'ed enemy to death.); Ludicrous Speed! (Finish all racing tracks with platinum rank.); Credits Where Credits Are Due (Earn at least 5000 credits by selling one stack of commodities.); Spin Me Right 'Round (Keep the Fusion Hook tethered for 10 seconds during a single activation.); I Don't Like Bullies (Use the Front Shield Generator to block two Sniper Drone shots in a single activation.); Tower Defense (Use a Sticky Turret to destroy an enemy.); Rock And Stone! (Mine 2000 resources); Press F To Pay Respects (Visit a final resting place.)."
            ]
        },
        {
            "heading": "Titans DLC",
            "body": [
                "Exploding a panzer bomb inside a Leviathan, protecting your wingman from the Dreadnought, guiding 10+ missiles into the Dreadnought's launcher with a decoy, breaking 20 Leviathan Pearls, killing a Cloudgrazer with its own fire, and obtaining a Pearl below 20% agitation.",
                "The achievements here: Internal Combustion (Explode one of XR’s panzer bombs inside a Leviathan.); I Got You Fam (Protect your wingman from getting immobilized while fending off the Dreadnought.); Stop Hitting Yourself (Use one decoy to guide at least 10 missiles into the Dreadnought's launcher system.); The World Is Your Oyster (Break 20 Leviathan Pearls.); A Taste Of Their Own Medicine (Kill a Cloudgrazer with a weapon similar to the creature’s fiery breath.); Didn't Hurt A Bit (Obtain a Leviathan Pearl while agitation is below 20%.)."
            ]
        },
        {
            "heading": "Wrath of the Ancients DLC",
            "body": [
                "Obtaining the Tactical Artillery Beam and the Entropy Anchor devices, buying the Wraith, running 3 Tactical Artillery Beams at once, parking the Golden Ace in Ceto, upgrading an item at an Ancient Altar, owning a rank 8 Ascendant item, and unlocking the full Ascendancy set bonus.",
                "The achievements here: That Belongs In A Museum (Obtain the Tactical Artillery Beam device.); Backup Plan (Obtain the Entropy Anchor device.); Bean There, Done That (Buy the Wraith.); Beam There, Done That (Have 3 Tactical Artillery Beams active at the same time.); Home Is Where The Ace Is (Park the Golden Ace in Ceto.); Altar Boy (Upgrade an item at an Ancient Altar.); Power Fantasy? Power Reality! (Own a rank 8 equipment item of Ascendant rarity.); Now We Can Finally Play The Game! (Unlock the full set bonus of the Ascendancy item set.)."
            ]
        },
        {
            "heading": "Hidden Story Achievements",
            "body": [
                "All 12 of EVERSPACE 2's hidden achievements are story beats across the main campaign and both DLCs, sourced from community guides (TrueAchievements, the Everspace Fandom wiki, Steam Community):",
                "In Good Company: A main-story beat: find a HIVE unit.",
                "I Heart Horags: A main-story beat: take in Elek.",
                "A Friend In Need: A main-story beat: save Tareen from the G&B Elite Squad.",
                "Still In One Piece: A main-story beat: survive an Ancient Rift.",
                "No Place Like Home: A main-story beat: escape the Khione System.",
                "There Can Be Only One: The main campaign's finale: prevent a new war from breaking out.",
                "It's A Sabotage: In the Titans DLC: destroy the first of the Dreadnought's two interstellar drives.",
                "Stop! Hammer Time!: In the Titans DLC: disrupt the Dreadnought auction.",
                "Inner Space: In the Titans DLC: get swallowed by a Leviathan creature.",
                "Catch Of The Day: In the Titans DLC: break open your first Leviathan Pearl, found at the end of a Leviathan's digestive tract after being swallowed (see Inner Space) and brought to Dr. Kapadia at BRI BioPlant.",
                "Gone Kayaking: In the Wrath of the Ancients DLC: give a friend a second chance.",
                "Ancient History: In the Wrath of the Ancients DLC: avert another crisis."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story campaign, letting the six hidden story-beat achievements unlock naturally as you find the HIVE, take in Elek, save Tareen, survive an Ancient Rift, escape Khione, and complete the story.",
                "2. Along the way, buy new ships (working toward a Tier 4 ship), equip a legendary item, and complete a master challenge and a Rift.",
                "3. Push completion goals: 25 Location Challenges, 10 Jobs, all Catalyst Blueprints, all devices, all Companion Perks, and eventually 100% on every location and every side mission.",
                "4. Work through the combat-technique achievements as you unlock the relevant devices and weapons: Static Overload, the Thermo Gun, High-Pressure boost, Mainframe Expansion attribute maxing, the Magnetic Repulsor, the Fusion Hook, the Front Shield Generator, Sticky Turrets, and mining 2,000 resources.",
                "5. If you own the Titans DLC, work through its story (destroying the Dreadnought's drive, disrupting its auction, getting swallowed by a Leviathan, and opening your first Pearl) alongside its combat achievements (the panzer bomb, protecting your wingman, decoy missiles, breaking 20 Pearls, the Cloudgrazer kill, a low-agitation Pearl).",
                "6. If you own the Wrath of the Ancients DLC, complete its two hidden story missions and work through its device, ship, and gear achievements (the Tactical Artillery Beam, the Entropy Anchor, the Wraith, the Golden Ace, Ancient Altar upgrades, Ascendant-rarity gear, and the full Ascendancy set bonus).",
                "Tip: Legendary Lunatic (complete a Rift at Lunacy 500+) and the platinum-rank racing achievement are both meant for a fully-built, high-level ship - do not attempt either until your build and gear are well past the story's minimum requirements."
            ]
        }
    ]
};
