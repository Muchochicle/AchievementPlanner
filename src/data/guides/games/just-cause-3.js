// Just Cause 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/just-cause-3.json), whose 66 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   225540 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "just-cause-3-achievement-guide",
    "category": "game",
    "gameSlug": "just-cause-3",
    "icon": "💥",
    "title": "Just Cause 3 Achievement Guide",
    "summary": "A practical guide to all 66 Steam achievements in Just Cause 3 (8 hidden). Covers Chaos and base destruction, the challenge Gears, the collectibles and exploration feats, province liberation and the hidden story missions, combat mastery and Encounters, and all three expansions.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Just Cause 3 has 66 Steam achievements and eight are hidden - all story-mission completions: 'Welcome Home' (Enjoy Your Homecoming), 'A Terrible Reaction' (What a Disaster), 'A Long and Dangerous Road' (The Power of Bavarium), 'The Great Escape' (These Mines are the Pits), 'Missile Cowboy' (F!#& YOU, MISSILE), 'Tangled Up In Blue' (Finally on the Offensive), 'The Shatterer of Worlds' (Mistakes and Triumphs), and the finale 'Son of Medici'. The rest are open: Chaos totals, weapon-free and vehicle-only base clears, the challenge Gears, the large collectible and exploration set (tombs, shrines, Di Ravello tapes, vintage parts, daredevil jumps, feats), province liberation, combat feats and Encounters, and the Sky Fortress, Mech Land Assault and Bavarium Sea Heist expansions.",
                "Nothing is missable - missions replay from the menu and every collectible and counter persists. 'Winner Takes All, Again' (100%) is the long pole: it needs every province liberated, every collectible, and a Gear in every base challenge.",
                "Tip: liberate provinces as you go - liberation unlocks Rebel Drop vehicles and weapons that make the challenge Gears and the weapon-free base clears far easier."
            ]
        },
        {
            "heading": "Chaos & Base Destruction",
            "body": [
                "The Chaos totals (1,000 / 100,000 / 1,000,000) and the two trick base clears - destroying every Chaos Object in a base without weapons, grenades or planted explosives, and without leaving your vehicle.",
                "The achievements here: (Just) Causin' Chaos (Get 1,000 Chaos.); Chaos is My Middle Name (Get 100,000 Chaos.); Chaos Millionaire (Get 1,000,000 Chaos.); ...Without Bullets! (Destroy every Chaos Object in a Military Base without weapons, grenades, or planted explosives.); This was Supposed to be a Western (Destroy all Chaos Objects in a Base without leaving your vehicle.)."
            ]
        },
        {
            "heading": "Challenges & Gears",
            "body": [
                "Beating another player's challenge score, and the Gear milestones - at least 3 Gears in a challenge, 5 Gears in a challenge, 3 Gears in one challenge of every type, and 5 Gears in every challenge.",
                "The achievements here: Bragging Rights (Beat another player's score in a Challenge.); Getting it in Gear (Earn at least 3 Gears in a Challenge.); You've Got Gear (Earn 5 Gears in a Challenge.); A Real Gear-Getter (Earn at least 3 Gears in one Challenge of every type.); All the Gears (Earn 5 Gears in every Challenge.)."
            ]
        },
        {
            "heading": "Collectibles & Exploration",
            "body": [
                "Rebel Drops for a land, air and sea vehicle, collecting every vehicle to Mario's garages, every Daredevil Jump, every Ancient Tomb, every Rebel Shrine, all Di Ravello tapes, every vintage weapon and vehicle part, every collectible on Medici, standing on the highest point of Medici, and performing every Feat - plus the two tether/booster kill feats.",
                "The achievements here: Earth, Wind and Sea (Unlock Rebel Drops for at least one land vehicle, one air vehicle, and one sea vehicle.); Caught 'Em All! (Collect every vehicle available by bringing them to Mario's Rebel Garages.); Consummate Daredevil (Launch a land vehicle off of every Daredevil Jump in Medici.); Tomb Raider (Pay your respects at every Ancient Tomb.); Remember the Fallen (Light a candle at every Rebel Shrine.); Diary of the Madman (Gather all of Di Ravello's tapes.); Old School Cool (Find every vintage weapon and vehicle part.); No Stone Unturned (Find every collectible strewn across Medici.); Top of the World (Stand on foot at the highest point of Medici.); Feat Fetish (Perform every Feat.); My Little Rocket Man (Tether an enemy to a launched gas cannister. Adeo, amico!)."
            ]
        },
        {
            "heading": "Liberation & Story",
            "body": [
                "Liberating 13 settlements, a province, and each of the three islands (Insula Fonte, Insula Dracon, Insula Striate), unlocking the whole Rebel Drop menu, disabling the FOW in Insula Fonte, the eight hidden story-mission completions, and 100%-ing the game.",
                "The achievements here: You're Outta Here! (Plant a Booster Explosive on an enemy soldier. Then send them flying.); Baker's Dozen (Liberate 13 settlements.); Vive le Revolution (Liberate a Province.); Hope Springs Eternal (Completely liberate Insula Fonte.); Taming the Dracon (Completely liberate Insula Dracon.); Heart of Stone (Completely liberate Insula Striate.); Unlocked and Fully Loaded (Unlock every weapon and vehicle available in the Rebel Drop menu.); Take That, You Pipeline Jerks (Disable the FOW in Insula Fonte.); Enjoy Your Homecoming (Complete the story mission 'Welcome Home'.); What a Disaster (Complete the story mission 'A Terrible Reaction'.); The Power of Bavarium (Complete the story mission 'A Long and Dangerous Road'.); These Mines are the Pits (Complete the story mission 'The Great Escape'.); F!#& YOU, MISSILE (Complete the story mission 'Missile Cowboy'.); Finally on the Offensive (Complete the story mission 'Tangled Up In Blue'.); Mistakes and Triumphs (Complete the story mission 'The Shatterer of Worlds'.); Winner Takes All, Again (100% Just Cause 3.)."
            ]
        },
        {
            "heading": "Combat Mastery & Encounters",
            "body": [
                "Clearing Heat 5 in a monastery, the challenge Call-Out feats, the Gear MOD milestones, the hidden finale mission, completing Encounters, unlocking Resupply Points and Heat-clearing Priests, the wingsuit water take-off, and evading 10 missiles with barrel rolls.",
                "The achievements here: Forgive Me, Father... (Take sanctuary in a monastery to clear Heat Level 5.); Can't Touch This (Call-Out another player in a Feat.); MOD Initiate (Unlock your first Gear MOD, and then activate it.); MOD Specialist (Unlock every Gear MOD in a single category.); MOD Tinkerer (Have every Gear MOD active for at least 1 minute each.); Son of Medici (Complete the final story mission, 'Son of Medici'.); Anything You Can Do... (Beat a score you were Called-Out on.); First Encounter (Complete an Encounter.); Supply and Demand (Unlock 10 Resupply Points by completing Encounters.); Three Holy Hideaways (Unlock 3 Heat-Clearing Priests by completing Encounters.); Like a Fish... in the Air! (Use the Bavarium Wingsuit to take off from water.); Look at the Sly Fox (Use the Barrel Roll to evade 10 incoming missiles.)."
            ]
        },
        {
            "heading": "Sky Fortress & Mech Land Assault",
            "body": [
                "The Sky Fortress expansion (finish the story arc, beat the 'Old Friend' boss, defeat one of each Drone, 1 Gear and 5 Gears in all its challenges) and the Mech Land Assault expansion (finish the story arc, its challenge Gears, hijack a Mech, liberate 3 Detention Camps, 30 Force Pulse vehicle kills).",
                "The achievements here: My Name is Eden (Beat the last mission of the Sky Fortress Expansion and complete the story arc.); Break a Leg! (Defeat the \"Old Friend\" (Boss at the end of \"Taking Control\").); Stock-Keeping (Defeat 1 of each Drone type.); Quite the Connoisseur (Earn at least 1 Gear in all Challenges of the Sky Fortress Expansion.); A True Master (Earn 5 Gears in all Challenges of the Sky Fortress Expansion.); In the Heart of Darkness (Beat the last mission of the Mech Land Assault Expansion and complete the story arc.); Certified eDEN Mech Operator (Earn at least 1 Gear in all Challenges of the Mech Land Assault Expansion.); eDEN Employee of the Year (Earn 5 Gears in all Challenges of the Mech Land Assault Expansion.); One Mech of a Ride (Hijack your first Mech.); Free Birds (Liberate 3 Detention Camps.); This Is Not A Fireball (Destroy 30 enemy vehicles using the Mech's Force Pulse.)."
            ]
        },
        {
            "heading": "Bavarium Sea Heist",
            "body": [
                "The Bavarium Sea Heist expansion - finish the story arc, the Rocket Boat helicopter and airborne-vehicle kills, getting the Rocket Boat ('The Loochador'), and the eDEN Spark helicopter and multi-enemy kills.",
                "The achievements here: One Last Score (Beat the last mission of the Bavarium Sea Heist expansion and complete the story arc.); Loochador Master (Defeat 5 enemy helicopters with the Rocket Boat.); The Flying Medician (Defeat 10 enemy vehicles while in the air with the Rocket Boat.); I Should Buy A Boat (Get the Rocket Boat, also known as \"The Loochador\".); Lightning Bolt! (Defeat 1 enemy helicopter using the eDEN Spark.); Staying Power (Defeat 10 enemies with the same eDEN Spark strike.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to the finale, 'Son of Medici', liberating provinces along the way.",
                "2. Sweep each island's collectibles (tombs, shrines, tapes, vintage parts, daredevil jumps) as you liberate it.",
                "3. Do the Feats, the tether/booster kill feats and the weapon-free / vehicle-only base clears.",
                "4. Grind the challenge Gears - aim for 5 Gears in every challenge for 'All the Gears'.",
                "5. Play the Sky Fortress, Mech Land Assault and Bavarium Sea Heist expansions and their challenge sets.",
                "Tip: the two trick base clears are easiest at a small base - for the weapon-free run, use only the grappling-hook tether and vehicles rammed into Chaos Objects."
            ]
        }
    ]
};
