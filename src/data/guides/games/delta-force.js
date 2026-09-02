// Delta Force Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/delta-force.json), whose 53 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2507950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 17 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) or, for main-story markers, deliberately kept spoiler-free per
//   this catalog's convention for narrative games. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "delta-force-achievement-guide",
    "category": "game",
    "gameSlug": "delta-force",
    "icon": "🛩️",
    "title": "Delta Force Achievement Guide",
    "summary": "A practical guide to all 53 Steam achievements in Delta Force (17 hidden). 17 of the 53 are hidden - 8 are Operations item-extraction achievements and 9 are Warfare combat tallies, all researched from Steam Community hidden-achievement guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Delta Force has 53 Steam achievements, 17 of them hidden. The level-progression track covers reaching max and Lv.30 Operations level and max and Lv.25 Warfare level. Operations mode contributes killing enemy operators, decoding a MandelBrick, killing the named bosses Reis/Saeed/Desmoulins 5 times each, maxing the Black Site Stash, and a first Warfare win. The bulk of the visible list is Warfare mode tallies - 500 vehicles destroyed, 5,000 allies rescued, 10,000 kills, marathon and half-marathon distances moved, 1,000 headshots, 500 revenge kills, and a matched pair of Operations/Warfare damage-dealt achievements for all 9 playable Operators.",
                "8 of the hidden achievements are Operations extraction achievements, one per named high-value item: the Heart of Africa, a Battle Tank Model, a Medical Ventilator, a Top Secret Server, Reinforced Carbon Fiberboard, a Portable Military Radar, a MandelBrick Supercomputing Unit, and a Robot Cleaner. The other 9 are Warfare combat tallies within a single match: 3+ vehicles destroyed, 75+ allies rescued, 120+ kills, 1,000+ repair score, a 400m+ sniper kill, 4,000+ Guided Missile score, 25 headshots, 40 Ammo Crate resupplies, and 30 pistol kills.",
                "The catalog marks it difficulty 3 - most achievements are cumulative totals across normal play, but the single-match Warfare tallies and the specific item extractions need a deliberately good run rather than just time invested."
            ]
        },
        {
            "heading": "Level Progression",
            "body": [
                "Reaching max Operations level and Operations Lv.30, and max Warfare level and Warfare Lv.25.",
                "The achievements here: Top Agent (Reach max Operations level.); Veteran Operator (Reach Operations Lv.30.); Field Marshal  (Reach max Warfare level.); Field Vanguard (Reach Warfare Lv.25.)."
            ]
        },
        {
            "heading": "Operations: Item Extractions",
            "body": [
                "8 hidden achievements, one per named high-value Operations extraction item: the Heart of Africa, a Battle Tank Model, a Medical Ventilator, a Top Secret Server, Reinforced Carbon Fiberboard, a Portable Military Radar, a MandelBrick Supercomputing Unit, and a Robot Cleaner.",
                "The achievements here: Everlasting Heart (Extract with 1 Heart of Africa from Operations.); Military Enthusiast (Extract with 1 Battle Tank Model from Operations.); Mechanical Cardio (Extract with 1 Medical Ventilator from Operations.); Physical Hacker (Extract with 1 Top Secret Server from Operations.); Next-Gen Material (Extract with 1 Reinforced Carbon Fiberboard from Operations.); Precise Detection (Extract with 1 Portable Military Radar from Operations.); Multi-Core Processing (Extract with 1 MandelBrick Supercomputing Unit from Operations.); Cleaner Bot (Extract with 1 Robot Cleaner from Operations.)."
            ]
        },
        {
            "heading": "Operations: Combat & Progress",
            "body": [
                "Killing 8 enemy operators in a match, decoding a MandelBrick, killing the named bosses Reis, Saeed and Desmoulins 5 times each, maxing the Black Site Stash, and winning your first Warfare match.",
                "The achievements here: My Turf (Kill 8 enemy operators in an Operations match.); Brickyard Supervisor (Decode 1 MandelBrick in Operations.); Hotel Ownership Transfer Notice (Kill Reis 5 times in Operations.); Ghost in the Halls (Kill Saeed 5 times in Operations.); On the Scope (Kill Desmoulins 5 times in Operations.); Ultimate Stash (Upgrade the Black Site Stash to max level in Operations.); First Victory (Win 1 Warfare match.)."
            ]
        },
        {
            "heading": "Warfare: Single-Match Tallies",
            "body": [
                "9 hidden single-match Warfare feats: destroying 3+ vehicles, rescuing 75+ allies, 120+ kills, 1,000+ repair score, a 400m+ sniper kill, 4,000+ Guided Missile score, 25 headshots, 40 Ammo Crate resupplies, and 30 pistol kills.",
                "The achievements here: Tank Terminator (Destroy more than 3 vehicles in a single Warfare match.); Rescue More! (Rescue more than 75 allies in a single Warfare match.); Killing Machine (Kill more than 120 enemies in a single Warfare match.); Welding Warlord (Score more than 1,000 from repairing in a single Warfare match.); Ace Sniper (Kill an enemy from beyond 400m in Warfare.); Nuclear Strike (Score more than 4,000 using a Guided Missile in a single Warfare match.); Headshot Expert (Make 25 headshot kills in a single Warfare match.); Endless Barrage (Resupply squadmates 40 times via Ammo Crate in a single Warfare match.); Pistol Cleaner (Kill 30 enemies using a pistol in a single Warfare match.)."
            ]
        },
        {
            "heading": "Warfare: Lifetime Totals",
            "body": [
                "500 vehicles destroyed, 5,000 allies rescued, 10,000 enemies killed, marathon and half-marathon distances moved, 1,000 headshot kills, and 500 revenge kills, all as lifetime Warfare totals.",
                "The achievements here: Heavy Barrage (Destroy 500 vehicles in Warfare.); Battlefield Angel (Rescue 5,000 allies in Warfare.); The Butcher (Kill 10,000 enemies in Warfare.); Field Marathon (Move 42.195km in Warfare.); Field Half-Marathon (Move 21.97km in Warfare.); Bone Collector (Make 1,000 headshot kills in Warfare.); An Eye for an Eye (Revenge 500 times in Warfare.)."
            ]
        },
        {
            "heading": "Operator Damage Milestones",
            "body": [
                "A matched pair of damage-dealt achievements (100,000 in Operations, 200,000 in Warfare) for each of the 9 playable Operators: D-wolf, Vyron, Stinger, Toxik, Shepherd, Uluru, Luna, Hackclaw and Sineva.",
                "The achievements here: D-wolf - Operations (Deal 100,000 damage as D-wolf in Operations.); D-wolf - Warfare (Deal 200,000 damage as D-wolf in Warfare.); Vyron - Operations (Deal 100,000 damage as Vyron in Operations.); Vyron - Warfare (Deal 200,000 damage as Vyron in Warfare.); Stinger - Operations (Deal 100,000 damage as Stinger in Operations.); Stinger - Warfare (Deal 200,000 damage as Stinger in Warfare.); Toxik - Operations (Deal 100,000 damage as Toxik in Operations.); Toxik - Warfare (Deal 200,000 damage as Toxik in Warfare.); Shepherd - Operations (Deal 100,000 damage as Shepherd in Operations.); Shepherd - Warfare (Deal 200,000 damage as Shepherd in Warfare.); Uluru - Operations (Deal 100,000 damage as Uluru in Operations.); Uluru - Warfare (Deal 200,000 damage as Uluru in Warfare.); Luna - Operations (Deal 100,000 damage as Luna in Operations.); Luna - Warfare (Deal 200,000 damage as Luna in Warfare.); Hackclaw - Operations (Deal 100,000 damage as Hackclaw in Operations.); Hackclaw - Warfare (Deal 200,000 damage as Hackclaw in Warfare.); Sineva - Operations (Deal 100,000 damage as Sineva in Operations.); Sineva - Warfare (Deal 200,000 damage as Sineva in Warfare.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Operations for the level-progression and named-boss achievements, keeping an eye out for the 8 extraction items as you loot.",
                "2. Play Warfare for its own level progression and first-win achievement.",
                "3. Chase the 9 single-match Warfare tallies deliberately in matches where your team has the advantage - most need a genuinely strong round, not just accumulated play.",
                "4. Let the lifetime Warfare totals and Operator damage milestones build up naturally across your normal matches.",
                "Tip: the Operator damage-milestone achievements are per-Operator, not shared - rotate through all 9 Operators over time if you want every one, rather than maining a single Operator and leaving the rest incomplete."
            ]
        }
    ]
};
