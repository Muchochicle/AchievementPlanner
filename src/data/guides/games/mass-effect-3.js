// Mass Effect 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mass-effect-3.json), whose 68 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mass-effect-3-achievement-guide",
    "category": "game",
    "gameSlug": "mass-effect-3",
    "icon": "🌌",
    "title": "Mass Effect 3 Achievement Guide",
    "summary": "A practical guide to all 68 Steam achievements in Mass Effect 3 - none are hidden. Covers the campaign missions, the progression and combat-feat achievements, the multiplayer / N7 mission goals, and the From Ashes, Leviathan, Omega and Citadel DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mass Effect 3 has 68 Steam achievements and none of them are hidden. Nineteen are campaign story markers (spoiler-light, from \"Driven\" to \"Legend\"). A block covers progression and combat feats - kill counts (250 / 1,000 / 5,000, 100 melee), power feats (50 biotic combos or tech bursts, evolve a power to rank 6, 100 Overloads / lifts / burns), the Insanity clear, weapon modding, a romance, and the Galaxy at War asset goals. Ten cover multiplayer or the equivalent N7 single-player missions (matches, maps, levels, Gold / Insanity clears). The last eighteen are the DLC - From Ashes, Leviathan, Omega and Citadel - each with its own mission markers and feats.",
                "The catalog marks it as roughly two playthroughs (the \"Long Service Medal\" achievement literally asks for two completions or one with an ME2 import) and nothing is missable: missions replay and every counter is cumulative, though \"Insanity\" requires a no-difficulty-change run after Earth.",
                "Tip: the multiplayer achievements all have an N7-mission single-player equivalent, so you can complete everything solo - but co-op multiplayer is faster for the map, level and Gold-clear goals if you have a group."
            ]
        },
        {
            "heading": "Campaign Missions",
            "body": [
                "The campaign story markers, spoiler-light - returning to duty, chasing an assassin, the dreadnought, the orbital strike, the political stand-off, the final assault, and \"Legend\" for completing the game.",
                "The achievements here: Driven (Return to active duty.); Bringer of War (Chase down an assassin.); Mobilizer (Bring a veteran officer aboard.); World Shaker (Destroy an Atlas dropped from orbit.); Pathfinder (Explore a lost city.); Tunnel Rat (Survive the swarm.); Party Crasher (Sabotage a dreadnought.); Hard Target (Call down an orbital strike.); Saboteur (Disable a group of fighter squadrons.); Arbiter (Win a political stand-off.); Last Witness (Extract ancient technology.); Executioner (Defeat an old adversary.); Well Connected (Send a warning across the galaxy.); Fact Finder (Discover an enemy's monstrous origin.); Liberator (Stop a Cerberus kidnapping.); Problem Solver (Evacuate a scientific facility.); Patriot (Make the final assault.); Legend (Mission accomplished.); Shopaholic (Visit a store in the single-player campaign.)."
            ]
        },
        {
            "heading": "Progression & Combat Feats",
            "body": [
                "The store visit, Galaxy at War assets, 10 probes, the two-completion medal, the Insanity clear, weapon modding, a romance, 50 biotic combos / tech bursts, a rank-6 power, the 250 / 1,000 / 5,000 and 100-melee kill counts, the Reaper escape, full readiness, and the Overload / lift / fire / brute / guardian / Atlas / harvester feats.",
                "The achievements here: Master and Commander (Deliver most of the Galaxy at War assets to the final conflict.); Lost and Found (Dispatch 10 probes to retrieve people or resources in Reaper territory.); Long Service Medal (Complete Mass Effect 3 twice, or once with a Mass Effect 2 import.); Insanity (Finish the game on Insanity without changing difficulty after leaving Earth.); A Personal Touch (Modify a weapon.); Paramour (Establish or rekindle a romantic relationship.); Combined Arms (Perform any combination of 50 biotic combos or tech bursts.); Focused (Evolve any of your powers to rank 6.); Recruit (Kill 250 enemies.); Soldier (Kill 1,000 enemies.); Veteran (Kill 5,000 enemies.); Bruiser (Kill 100 enemies with melee attacks.); Untouchable (Escape a Reaper in the galaxy map.); Defender (Attain the highest level of readiness in each theater of war.); Overload Specialist (Overload the shields of 100 enemies.); Sky High (Lift 100 enemies off the ground with powers.); Pyromaniac (Set 100 enemies on fire with powers.); Eye of the Hurricane (Kill a brute while it's charging you.); Mail Slot (Kill 10 guardians with headshots from the front while their shields are raised.); Hijacker (Hijack an Atlas mech.); Giant Killer (Defeat a harvester.)."
            ]
        },
        {
            "heading": "Multiplayer & N7 Missions",
            "body": [
                "Starting or customizing a character, finishing all maps or all N7 missions, two non-customizable armours, 1 / 3 matches or 2 / 5 N7 missions, a level-10 weapon, multiplayer levels 15 / 20 (or single-player 50 / 60), a Galaxy at War promotion, and all maps on Gold or all missions on Insanity.",
                "The achievements here: Enlisted (Start a character in multiplayer or customize a character in single-player.); Tour of Duty (Finish all multiplayer maps or all N7 missions in single-player.); Always Prepared (Obtain two non-customizable suits of armor.); Tourist (Complete one multiplayer match or two N7 missions.); Explorer (Complete three multiplayer matches or five N7 missions.); Gunsmith (Upgrade any weapon to level 10.); Almost There (Reach level 15 in multiplayer or level 50 in single-player.); Peak Condition (Reach level 20 in multiplayer or level 60 in single-player.); Battle Scarred (Promote a multiplayer character to the Galaxy at War or import an ME3 character.); Unwavering (Finish all multiplayer maps on Gold or all single-player missions on Insanity.)."
            ]
        },
        {
            "heading": "DLC: From Ashes, Leviathan, Omega & Citadel",
            "body": [
                "The From Ashes (Eden Prime intel, the Prothean Empire), Leviathan (the conspiracy, the ancient secret, pinpointing an objective), Omega (rescue a civilian, free Omega, the Talon leader, the Command Center missions) and Citadel (the plot, going undercover, the stronghold, the scheme, the party, the arcade, the combat simulator) achievements.",
                "The achievements here: Freedom Fighter (Find all required intel to help Eden Prime's colonists.); Prothean Expert (Learn more about the Prothean Empire.); No Stone Unturned (Investigate a sinister conspiracy.); Under Pressure (Uncover an ancient secret.); Conspiracy Theorist (Use clues to pinpoint the exact location of an objective.); Family Matters (Rescue a civilian from Reaper forces.); Savior (Free Omega from Cerberus Occupation.); Talon (Find the Talon leader.); Meticulous (Complete all the Command Center side-missions on Omega.); Priority Target (Discover a plot against you.); High Society (Go undercover to follow a lead.); Team Player (Infiltrate an enemy stronghold with your crew.); Last Resort (Stop an out-of-control scheme before it's too late.); Perfect Host (Throw a party for your friends.); King of the Castle (Win a prize at one of the arcade games.); Technical Issues (Investigate a strange occurrence in the combat simulator.); Simulated Hero (Score 9999 points in the combat simulator on Normal, Hardcore, or Insanity.); The One and Only (Defeat a group of Spectre-level opponents on Normal, Hardcore, or Insanity.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign for the story markers, modding a weapon and establishing a romance along the way.",
                "2. Let the kill counts and power feats (Overloads, lifts, fires, biotic combos) accrue across that run.",
                "3. Play the four DLC packs - From Ashes, Leviathan, Omega and Citadel - for their mission markers and feats.",
                "4. Do the multiplayer / N7 mission goals - solo via N7 missions, or co-op for the faster map and Gold clears.",
                "5. Do a second completion (or an ME2 import run) for \"Long Service Medal\", and an Insanity run for the difficulty achievement.",
                "Tip: run \"Insanity\" as its own dedicated playthrough - the achievement voids if you lower the difficulty after leaving Earth, so do not gamble it on a first run."
            ]
        }
    ]
};
