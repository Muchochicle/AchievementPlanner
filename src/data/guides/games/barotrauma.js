// Barotrauma Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/barotrauma.json), whose 76 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   602960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 3 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "barotrauma-achievement-guide",
    "category": "game",
    "gameSlug": "barotrauma",
    "icon": "🌊",
    "title": "Barotrauma Achievement Guide",
    "summary": "A practical guide to all 76 Steam achievements in Barotrauma - creatures & combat, crew roles & rounds, survival & depth, exploration & travel, missions, special hires & meta, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Barotrauma has 76 Steam achievements, 3 of them hidden. They cover the creatures of Europa and combat feats, completing a round as each crew role, survival and deep-diving milestones, exploration and travel, the full range of mission types, the campaign special hires, and a few meta/story achievements.",
                "Nothing is missable, but this is a very long list that assumes a full campaign (or many rounds) and a crew - the role achievements, the special hires, and mission-type coverage all want you to actually play the campaign through with others.",
                "Tip: play a full campaign with a regular crew, rotating roles so everyone gets the six role achievements, and take a wide spread of mission types. Grind the creature-kill and travel counters as you go, and do the permadeath achievements on a dedicated ironman run."
            ]
        },
        {
            "heading": "Creatures & Combat",
            "body": [
                "The kills: a Moloch, Hammerhead, Endworm, clown, Charybdis, latcher, giant spineling and crawler Broodmother, a morbusine poison kill, a nuclear-explosive kill, a plasma-cutter/welder/wrench kill, 100 creatures (Xenocide), Ascension (symbiotic harmony), and destroying an alien terminal with alien curio.",
                "The achievements here: Killed a Moloch (Take down a Moloch.); Stop the Hammertime (Kill a Hammerhead.); The Bigger They Are, the Harder They Fall (Kill an Endworm.); No Fun Allowed (Kill a clown.); Poisoner (Kill something with morbusine.); I Am Become Death (Kill something with nuclear explosives.); Whatever Works (Kill something with a plasma cutter, welding tool or a wrench.); Xenocide (Kill 100 creatures.); The Abyss Gazes Back (Kill a Charybdis.); The King of Cling (Kill a latcher.); Spinal Tapped (Kill a giant spineling.); Kill It Before It Lays Eggs! (Kill a crawler Broodmother.); Ascension (Become a perfect example of symbiotic harmony.); Ancient Novelty (Destroy an alien terminal using alien curio.)."
            ]
        },
        {
            "heading": "Crew Roles & Rounds",
            "body": [
                "Completing a round as Captain, Security Officer, Electrical Engineer, Mechanic, Medical Doctor and Assistant, plus Last Man Standing, The Lone Sailor, a 50 km/h submarine, and a no-casualty no-damage round.",
                "The achievements here: Last Man Standing (Complete a round alone after everyone else in the crew has perished.); The Lone Sailor (Complete a round alone from start to finish.); Gotta Go Fast (Accelerate a submarine to over 50 km/h.); Smooth Sailing (Complete a round without any casualties or damage to the submarine.); Here I Recognize No Superiors (Complete a round as a Captain.); I am the Law (Complete a round as a Security Officer.); Ever Increasing in Speed and Power (Complete a round as an Electrical Engineer.); Truth in Simplicity (Complete a round as a Mechanic.); According to Ability and Judgment (Complete a round as a Medical Doctor.); Do What You Love (Complete a round as an Assistant.)."
            ]
        },
        {
            "heading": "Survival & Depth",
            "body": [
                "The survival feats: a CPR revive from critical, repairing a broken device, recovering from opiate addiction, surviving crush depth, completing a round after a reactor meltdown, curing a husk infection, descending below 5,000 m, facing a complete disaster (max intensity), venturing 500 m from the sub, the Cold Caverns permadeath run, losing a character permanently, and a permadeath/ironman multiplayer campaign.",
                "The achievements here: Don't You Die on Me! (Heal someone back from a critical state by performing CPR.); As Good As New (Repair a broken device.); Getting Clean (Recover from an opiate addiction.); A Gaze into the Abyss (Take the submarine down to crush depth and survive.); Nuclear Blast Survivor (Complete a round after a nuclear meltdown.); I Am the Cure (Cure a husk infection.); Where No Man Has Gone Before (Descend below 5000 meters.); This is Fine. (Face a complete and utter disaster.); Extravehicular Activity (Venture 500 meters away from the sub.); Get Out Alive (Get through the entirety of the Cold Caverns without losing your character in permadeath mode); The Abyss Beckons (Lose a character permanently.); Europa's Finest (Complete a campaign on permadeath or ironman mode in multiplayer.)."
            ]
        },
        {
            "heading": "Exploration & Travel",
            "body": [
                "Discovering the Cold Caverns, Europan Ridge, Hydrothermal Wastes, Aphotic Plateau and Great Sea, travelling over 10 km and 100 km, spending 24 hours in the submarine editor, and finishing the campaign.",
                "The achievements here: The Cold Caverns (Discover the Cold Caverns.); The Europan Ridge (Discover the Europan Ridge.); The Hydrothermal Wastes (Discover the Hydrothermal Wastes.); The Aphotic Plateau (Discover the Aphotic Plateau); The Great Sea (Discover the Great Sea.); Novice Seafarer (Travel over 10 kilometers.); Experienced Seafarer (Travel over 100 kilometers.); Naval Architect (Spend 24 hours in the submarine editor in total.); The End is the Beginning (Finish the campaign.)."
            ]
        },
        {
            "heading": "Missions",
            "body": [
                "Completing one of every mission type: artifact, PvP submarine-vs-submarine (both sides), a traitor objective and stopping a traitor, cargo, wreck salvage, escort, scan/clear alien ruin, beacon repair, rescue hostages, assassinate bandit leader, destroy bandit/monster outpost, destroy monster nest, mining, PvE submarine-vs-submarine (both sides), and a King of the Hull PvP win.",
                "The achievements here: Xenoarchaeologist (Complete an artifact mission.); For the Coalition (Defeat the Separatists in a PvP submarine-vs-submarine mission.); Viva la Revolution (Defeat the Coalition crew in a PvP submarine-vs-submarine mission.); Insurgency (Successfully complete a traitor objective.); Not On My Watch (Take down a traitor before they manage to complete their objective.); Freighter (Complete a cargo mission.); Underwater Coffin (Complete a wreck salvage mission.); Safety Not Guaranteed (Complete an escort mission.); Ruin Raider (Complete a \"scan alien ruin\" mission.); Aggressive Archaeology (Complete a \"clear alien ruin\" mission.); A Light in the Darkness (Restore a run-down beacon station.); Knight in Rusty Armor (Complete a \"rescue hostages\" mission.); Bounty Hunter (Complete an \"assassinate bandit leader\" mission.); Unwanted Guests (Complete a \"destroy bandit outpost\" mission.); Pest Control (Complete a \"destroy monster-infested outpost\" mission.); Don't Count Them Before They Hatch (Complete a \"destroy monster nest\" mission.); Amateur Geologist (Complete a mining mission.); Fight the Power (Defeat a Coalition submarine in a PvE submarine-vs-submarine mission.); Resistance is Futile (Defeat a Separatist submarine in a PvE submarine-vs-submarine mission.); King of the Hull (Win a PvP King of the Hull mission)."
            ]
        },
        {
            "heading": "Special Hires & Meta",
            "body": [
                "Obtaining a full clown costume, the Path of the Bike Horn (Grandest of Jesters), and hiring each of the six campaign special crew members (two Coalition, two Separatist, a Husk Cult leader, a senior clown).",
                "The achievements here: Praise the Honkmother (Obtain a full clown costume.); The Grandest of Jesters (Learn to laugh at the Grand Joke of the Universe.); Top Brass (Reinforce your crew with an eminent Coalition leader.); The Cream of the Crop (Employ the skills of a celebrity chef to your crew.); Force for the Forceless (Bolster your crew by hiring a steadfast Separatist leader.); Some Men Just Want to Watch the World Burn (Enlist the services of an elusive explosives expert.); Heralds of the Tide (Allow an enigmatic religious leader to assist your crew.); The Teacher of Nothing (Accept the offer of a senior humorist to join your crew.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Three achievements are hidden - two rare-creature kills and a human-kill counter:",
                "The achievements here: Genocide (Kill 100 humans (fastest by repeatedly completing bandit-outpost missions).); Hide And Seek (Kill a Cave Mantis (found only in caves - mineral missions are the easiest way to find one).); What Smirks Below (Kill a psycho clown on a beacon station.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full campaign with a regular crew, rotating roles so everyone gets Captain / Security / Engineer / Mechanic / Doctor / Assistant.",
                "2. Take a wide spread of mission types over the campaign to cover the Missions block, and hire every special crew member as they become available.",
                "3. Grind the creature-kill and travel counters (Xenocide, the named beasts, 100 km) alongside normal play.",
                "4. Do the permadeath achievements (Get Out Alive, Europa's Finest) on a dedicated ironman run, and hunt the hidden creatures - a Cave Mantis on a mineral mission, a beacon-station psycho clown.",
                "Tip: Genocide (100 human kills) is fastest farmed in multiplayer on the mission tab - repeatedly run \"destroy bandit outpost\" missions, which are packed with human targets."
            ]
        }
    ]
};
