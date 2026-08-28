// PAYDAY 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/payday-3.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1272080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
//   This is the launch achievement set; later content updates may add
//   more.
// - Sections group by heist: the general/loadout achievements, then the
//   two challenge achievements for each of the eight launch heists.
export const GUIDE = {
    "slug": "payday-3-achievement-guide",
    "category": "game",
    "gameSlug": "payday-3",
    "icon": "🎭",
    "title": "PAYDAY 3 Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in PAYDAY 3 (launch set) - none are hidden. The general and loadout achievements, and the two heist-specific challenge achievements for each of the eight launch heists: Road Rage, Under the Surphaze, No Rest for the Wicked, 99 Boxes, Gold & Sharke, Dirty Ice, Rock the Cradle and Touch the Sky.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "PAYDAY 3 has 22 Steam achievements in this set and none are hidden. Six are general (put on the mask, customise a mask, unlock all mods for a primary, have the three core buffs active, a turret-kill and a Zapper-battery challenge); the other sixteen are two challenge achievements per launch heist, most requiring a higher difficulty and a specific restriction (stealth, no kills, maximum payout, a speed run).",
                "Nothing is missable - every heist can be replayed on any difficulty - but the heist challenges are demanding: several need Very Hard or Overkill, full stealth, or a flawless run with no mistakes.",
                "Tip: do the general achievements in normal play, then learn each heist's loud and stealth routes from a guide and dedicate a run to each challenge - most are \"do the heist perfectly under condition X\", which is far more reliable with a coordinated team and a plan than improvised."
            ]
        },
        {
            "heading": "General & Loadout",
            "body": [
                "The non-heist achievements: putting on the mask, customising a mask, unlocking all mods for a primary weapon, having EDGE, GRIT and RUSH active at once, 50 turret kills on Hard+, and the Zapper battery-pack stun.",
                "The achievements here: No One Cared Who I Was... (Until I put on the mask.); Guns Don't Kill People... (Complete a heist after getting at least 50 turret kills on Hard or above.); Danger, High Voltage (Stun 4 law enforcers by destroying a Zapper's battery pack on Hard or above.); Unlimited Power (Have the EDGE, GRIT and RUSH buffs active at the same time.); Kitted Out (Unlock all mods to a primary weapon.); Arts and Crafts (Customize a mask.)."
            ]
        },
        {
            "heading": "Road Rage",
            "body": [
                "The Road Rage challenges: complete it without the truck stopping until the end on Overkill, and complete it without a single civilian fleeing, dying or being traded on Hard+.",
                "The achievements here: Traffic Control (Complete Road Rage without the truck having stopped until the end on Overkill.); Crowd Control (Complete Road Rage without letting a single civilian flee, die or be traded on Hard or above.)."
            ]
        },
        {
            "heading": "Under the Surphaze",
            "body": [
                "Steal the Shanda Latrell painting on Very Hard+, and complete the heist having stolen all art from the 7 exhibitions on Very Hard+.",
                "The achievements here: True Connoisseur (Steal the painting by Shanda Latrell in Under the Surphaze on Very Hard or above.); Art Critic (Complete Under The Surphaze having stolen all art from the 7 exhibitions on Very Hard or above.)."
            ]
        },
        {
            "heading": "No Rest for the Wicked",
            "body": [
                "Complete it without a dye pack exploding on Very Hard+, and complete it having opened all deposit boxes.",
                "The achievements here: Color Me Surprised (Complete No Rest For The Wicked without letting a dye pack explode on Very Hard or above.); Just... One... More... (Complete No Rest For The Wicked having opened all deposit boxes.)."
            ]
        },
        {
            "heading": "99 Boxes",
            "body": [
                "Secure both hi-tech devices at maximum value on Very Hard+, and complete the heist with the maximum bag payout on Hard+.",
                "The achievements here: Tech Mogul (On 99 Boxes secure both hi-tech devices at their maximum value on Very Hard or above.); No Stone Unturned (Complete 99 Boxes having secured the maximum amount of bags on Hard or above.)."
            ]
        },
        {
            "heading": "Gold & Sharke",
            "body": [
                "Empty the vault and secure all the loot on Hard+, and complete the heist in stealth without using the HR computer.",
                "The achievements here: Closing the Account (On Gold and Sharke empty the vault of its valuables and secure all the loot on Hard or above.); The Hard Way (Complete Gold and Sharke in stealth without accessing the HR computer.)."
            ]
        },
        {
            "heading": "Dirty Ice",
            "body": [
                "Complete it having secured all cleaned-jewelry bags on Overkill, and complete it within 120 seconds of spawning.",
                "The achievements here: Cleanin' It Out (Complete Dirty Ice having secured all cleaned jewelry bags on Overkill.); Smash and Grab (Complete Dirty Ice within 120 seconds of spawning.)."
            ]
        },
        {
            "heading": "Rock the Cradle",
            "body": [
                "Reach the VIP area in stealth without the invitation on Hard+, and complete the heist after surviving 4 full assaults on Very Hard+.",
                "The achievements here: Party Crasher (Complete Rock The Cradle without having the VIP invitation in stealth on Hard or above.); Afterparty (Complete Rock The Cradle after surviving 4 full assaults on Very Hard or above.)."
            ]
        },
        {
            "heading": "Touch the Sky",
            "body": [
                "Complete it in stealth without killing a single guard on Overkill, and complete it with 4 active human shields on Hard+.",
                "The achievements here: Spec Ops (Complete Touch The Sky in stealth without killing a single guard on Overkill.); Insurance Policy (Complete Touch The Sky with 4 active human shields on Hard or above.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the six general achievements during ordinary progression - No One Cared Who I Was..., Arts and Crafts, Kitted Out, Unlimited Power, Guns Don't Kill People... and Danger, High Voltage.",
                "2. Learn each heist's stealth and loud routes, then do the max-payout / all-loot challenges on the lowest allowed difficulty (No Stone Unturned, Closing the Account, Cleanin' It Out, Just... One... More..., Tech Mogul, Art Critic).",
                "3. Do the stealth-restriction challenges with a coordinated team (The Hard Way, Party Crasher, Spec Ops).",
                "4. Do the flawless / speed / assault-survival challenges last (Traffic Control, Crowd Control, Color Me Surprised, Smash and Grab, Afterparty, Insurance Policy) - these are the hardest and want a clean run.",
                "Tip: Smash and Grab (Dirty Ice in under 120 seconds) needs a pre-planned all-in loud rush - agree the exact route and roles before starting, since 120 seconds leaves no room to improvise."
            ]
        }
    ]
};
