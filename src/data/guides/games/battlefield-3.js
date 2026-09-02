// Battlefield 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-3.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238820 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-3-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-3",
    "icon": "💥",
    "title": "Battlefield 3 Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Battlefield 3 (1 hidden). The one hidden achievement is 'Grinding the Crack' - fall off Ziba Tower (Close Quarters expansion). The rest are multiplayer weapon-mastery, vehicle, ribbon and MVP achievements. Sourced from XboxAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield 3 has 34 Steam achievements, 1 of them hidden. The Steam release of Battlefield 3 carries only its multiplayer and co-op achievement set (the original campaign achievements are not on this list). It covers vehicle kills across every class, the weapon-mastery challenges (10 kills with each of the ten CQ weapons, each of the ten Back to Karkand weapons, each Gun Master weapon), the ribbon and efficiency collections, ranked-match MVP placements, Scavenger and Gun Master rounds, and a couple of map easter eggs.",
                "The single hidden achievement is 'Grinding the Crack' - fall off the edge of the map on Ziba Tower (Close Quarters expansion).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable, but the weapon-mastery achievements (Gunslinger, Show of Force, Complete Warrior, Deadly Tools) are long grinds and several need the Back to Karkand or Close Quarters content."
            ]
        },
        {
            "heading": "Multiplayer Core & Vehicles",
            "body": [
                "Tank Superiority, MVP placements (1st, 2nd, 3rd) in ranked matches, vehicle kills across every class (Tank destroyers, third-tour vehicles, the Quad bike, the skid loader, air vehicles), the Gunship (a kill and destroying it), Conquest Domination and CTF, and transporting a flag carrier by air.",
                "The achievements here: Like a Boss (Got a kill with the skid loader); Superiority (Won one round of Tank Superiority); Most Valuable Player (MVP in a ranked match); Destroyer (Got 10 kills each with Tank destroyers and Mobile Artilleries); Home made javelin (Destroyed an enemy vehicle using the xbow); Its no sidecar (Got a kill from the passenger position on a motorcycle); Vehicle Warfare (Received all 3 vehicle warfare ribbons); Third Tour (Got a kill with each of the following vehicles: the BTR-90, DPV and F-35); Offroad (Got one kill with the Quad bike); Dropship (Destroyed the Gunship); Dominator (Won a round in Conquest Domination); Death from above (Got one kill with the Gunship); Heavy Lifter (Killed an enemy after successfully paradropping a vehicle); AAs revenge (Destroyed an air vehicle using the AA jeeps); Capture The Flag (Captured one flag while playing CTF); Transport Pilot (Transported a flag carrier in an air vehicle in CTF)."
            ]
        },
        {
            "heading": "Weapons, Ribbons & Secrets",
            "body": [
                "The weapon-mastery challenges (10 kills with each of the ten CQ, Back to Karkand and Gun Master weapons, and the Carbine/Deadly Tools / Complete Warrior no-death chains), all ribbons and efficiency awards, unlocking every crossbow part, the Scavenger 50-weapon pickup, rank 45, and the two easter eggs (the secret reptile, the Oman hotel pool, and Grinding the Crack).",
                "The achievements here: Gunslinger (Got 10 kills with each of the ten Back to Karkand weapons); Decorated (Received one of each ribbon in the game); Bite your finger (Found the secret reptile); M.I.A (Took your first enemy Dog Tag); Pocket full of death (Without dying, got a kill with xbow, primary weapon, and hand grenade); Man of Calibre (Completed a round of Gun Master); It's better than nothing! (3rd MVP in a ranked match); Complete Warrior (Got a kill with the following weapons in a single life: Assault Rifle, Jet, Tank); Support Efficiency (Received all 4 support efficiency ribbons); Grinding the Crack (Fall off the edge of the map on the Ziba Tower map (Close Quarters expansion)); Handyman (Unlocked all xbow parts); Extreme Hoarder (Picked up 50 weapons in Scavenger mode); Colonel (Rank 45 achieved!); Jaws (Took a swim in the Oman Hotel swimming pool); Show of Force (Got 10 kills with all ten CQ weapons); Infantry Efficiency (Received all 4 weapon efficiency ribbons); Deadly tools (Without dying, got a kill with a Carbine, Pistol and Rocket Launcher); 1st Loser (2nd MVP in a ranked match)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play multiplayer regularly, working the vehicle-kill achievements across every vehicle class as you get the chance to use them.",
                "2. Grind the weapon-mastery achievements deliberately - 10 kills with each of the ten CQ weapons, then the Back to Karkand and Gun Master sets.",
                "3. Collect all the ribbons and the infantry/support/vehicle efficiency awards during normal play.",
                "4. Do the no-death weapon chains (Complete Warrior, Deadly Tools, Pocket Full of Death) on a quiet server or with a cooperative squad.",
                "5. Pick up the easter eggs - the secret reptile, the Oman hotel pool swim, and falling off Ziba Tower.",
                "Tip: the Gun Master and Scavenger game modes give the fastest progress toward Man of Calibre, Extreme Hoarder and several weapon achievements at once - play those rather than only Conquest."
            ]
        }
    ]
};
