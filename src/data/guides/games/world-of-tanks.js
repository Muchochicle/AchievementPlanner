// World of Tanks Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/world-of-tanks.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1407200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "world-of-tanks-achievement-guide",
    "category": "game",
    "gameSlug": "world-of-tanks",
    "icon": "🛡️",
    "title": "World of Tanks Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in World of Tanks - none are hidden. None of the 60 achievements are hidden - every description is Steam's own text. Covers the tutorial and tech-tree grind (tiers V-XI), Personal Missions, and cumulative Random Battle credit / XP / damage / kill / spotting totals plus the battle-award set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "World of Tanks has 60 Steam achievements and none of them are hidden. World of Tanks is Wargaming's free-to-play team-based tank combat game. None of its 60 Steam achievements are hidden. The list is a long-haul grind: the Tank Academy tutorial and the opening Tiger Hunter storyline, researching a vehicle at every tier from V up to XI, the Personal Missions, and cumulative Random Battle totals for credits, experience, damage, kills, spotting and blocked damage.",
                "The rest of the list is the battle-award and Mastery-badge achievements - earning Ace Tanker badges, the Top Gun, Steel Wall and Bruiser awards, David-and-Goliath kills, ramming kills, and the various 'twice as much as your tier' damage, spotting and blocking feats.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable; almost everything is a large cumulative Random Battle total that fills in over dozens of hours of play."
            ]
        },
        {
            "heading": "Onboarding & Tech Tree",
            "body": [
                "The Tank Academy missions, the opening Tiger Hunter storyline, a first Random Battle, and researching and buying a vehicle at each tier from V through XI.",
                "The achievements here: Tyger Tyger, burning bright (Complete the opening Tiger Hunter stories); ...And That's How You Do It (Complete all Tank Academy missions); Trial by Fire (Fight in a Random Battle); According to Plan (Research and purchase a Tier V vehicle); On the Road to Perfection (Research and purchase a Tier VI vehicle); We're Gonna Need Bigger Guns! (Research and purchase a Tier VII vehicle); Works Like a Dream (Research and purchase a Tier VIII vehicle); Nine Out of Ten (Research and purchase a Tier IX vehicle); Top Shelf (Research and purchase a Tier X vehicle); Above and Beyond (Research and purchase a Tier XI vehicle)."
            ]
        },
        {
            "heading": "Personal Missions & Progression",
            "body": [
                "The Personal Mission achievements (one, a set, a whole operation) and the cumulative credit, experience and Free Experience milestones from Random Battles.",
                "The achievements here: Earning Your Stripes (Complete one Personal Mission); On the Right Track (Complete all Personal Missions in a set); Smooth Operation (Complete all Personal Missions in the same operation); Pocket Money (Earn 1,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)); Toss a Coin (Earn 5,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)); King Midas (Earn 15,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)); Quick Learner (Earn 10,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)); Battle-Hardened (Earn 50,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)); Experience Is the Best Teacher (Earn 100,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)); Save It for Later (Earn a total of 1,000 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance)); An All-Purpose Resource (Earn a total of 2,500 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance)); Knowledge Is Power! (Earn a total of 5,000 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance))."
            ]
        },
        {
            "heading": "Damage, Support & Defense",
            "body": [
                "Cumulative damage caused, damage enabled through spotting, damage blocked by armor, stun time on enemies, armor-penetrating hits, and the 'twice as much as your tier' damage, spotting and blocking feats.",
                "The achievements here: Heavy-Duty (Block a total of 15,000 HP of damage in Random Battles when fighting in heavy tanks); Sweet Spot (Enable your allies to cause 15,000 HP of damage to vehicles spotted by you in Random Battles when fighting in light tanks); A Real Stunner (Stun enemy vehicles for a total of 500 seconds in Random Battles when fighting in SPGs. Potential stun duration is counted); Finding a Happy Medium (Cause a total of 25,000 HP of damage to enemy vehicles in Random Battles when playing in medium tanks); Hunter (Cause a total of 25,000 HP of damage to enemy vehicles in Random Battles when playing in tank destroyers); A Tough Nut to Crack (Cause, receive, and block a total of 3,000 HP of damage in one Random Battle when playing in a heavy tank); Far-Reaching Support (Enable your allies to cause 500 HP of damage in one Random Battle by stunning or immobilizing enemy vehicles when playing in an SPG); Small but Smart (Cause and/or enable your allies to cause at least 2,000 HP of damage in one Random Battle when playing in a light tank); Tank Hunter (Cause 1,500 HP of damage and destroy two enemy vehicles in one Random Battle when playing in a tank destroyer); Masterclass (Cause 2,000 HP of damage to enemy vehicles in one Random Battle when playing in a medium tank); Penetration! (Score a total of 1,000 armor-penetrating hits on enemy vehicles in Random Battles); Main Gun (Cause damage that equals at least 25% of the total HP of enemy vehicles in a Random Battle); All Your Base (Earn a total of 1,000 base defence or capture points in Random Battles. Points for resetting base capture and/or successfully capturing the enemy base are counted); I Am Invincible! (Block twice as much damage as the number of hit points of your vehicle in one Random Battle); I Shall Be Your Eyes (Enable your allies to cause twice as much damage as the number of hit points of your own vehicle to enemy vehicles spotted by you in one Random Battle); Left Click to Shoot (Cause twice as much damage as the number of hit points of your vehicle in one Random Battle)."
            ]
        },
        {
            "heading": "Kills, Mastery & Battle Awards",
            "body": [
                "The 50 / 250 / 500 kill totals, Mastery and Ace Tanker badges, distance covered, David-and-Goliath and ramming kills, consumable use, last-man-standing, and the named battle awards (Bruiser, Top Gun, Steel Wall, Decorated War Hero, and more).",
                "The achievements here: It Ain't Much, but It's Honest Work (Destroy 50 enemy vehicles in Random Battles); Nothing Personal (Destroy 250 enemy vehicles in Random Battles); This Is Just the Beginning (Destroy 500 enemy vehicles in Random Battles); Not Great, Not Terrible (Receive the Mastery Badge Class I or higher); Acing It (Receive the Ace Tanker Mastery Badge); Three Cheers (Receive three Ace Tanker Mastery Badges); High Five (Receive five Ace Tanker Mastery Badges); On the March (Cover a total distance of 500,000 meters in Random Battles); David and Goliath (Destroy an enemy vehicle two tiers higher than yours in a Random Battle); Boy Scout (Use a type of consumables at least three times in a Random Battle. Repair Kits, First Aid Kits, and Fire Extinguishers of the same type are counted); Last Man Standing (Be the last player on your team to be destroyed by the enemy); Dodge This (Destroy at least one enemy vehicle by ramming in a Random Battle); Precise Hit (Earn the Bruiser award); A Whole New Level (Earn the Top Gun award); Is That Adamantium? (Earn the Steel Wall award); One-Two Punch (Destroy two enemy vehicles using different types of shells in a Random Battle); You Can't See Me (Destroy two Tier IV–X enemy light tanks in a Random Battle); Superiority Distance (Destroy an enemy vehicle in a Random Battle while remaining unspotted); End of the Line (Destroy the tracks of 100 different enemy vehicles in Random Battles); Top League (Win and be the top player on your team by experience earned in a Random Battle five times while playing in Tier X vehicles); Decorated War Hero (Earn 10 awards in the Battle Heroes category); Found You! (Spot 100 enemy vehicles in Random Battles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the Tank Academy missions and the Tiger Hunter storyline, then start grinding a tech-tree line from Tier V upward.",
                "2. Play Random Battles steadily - the credit, experience, damage, kill and spotting totals all accumulate together.",
                "3. Work the Personal Missions in the background; completing a full set and operation is worth several achievements.",
                "4. Research and buy one vehicle at each tier up to XI as you progress a line (or a few lines).",
                "5. Chase the battle awards and Ace Tanker badges - these come naturally in tanks you know well.",
                "Tip: pick one nation's medium or heavy line and stick with it - spreading credits and free XP thin across many lines slows every one of the tier-milestone achievements."
            ]
        }
    ]
};
