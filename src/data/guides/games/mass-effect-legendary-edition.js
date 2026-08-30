// Mass Effect Legendary Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mass-effect-legendary-edition.json), whose 127 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1328670 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mass-effect-legendary-edition-achievement-guide",
    "category": "game",
    "gameSlug": "mass-effect-legendary-edition",
    "icon": "🚀",
    "title": "Mass Effect Legendary Edition Achievement Guide",
    "summary": "A practical guide to all 127 Steam achievements in Mass Effect Legendary Edition - none are hidden. Covers the three campaigns plus the cross-game Legendary Edition feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mass Effect Legendary Edition has 127 Steam achievements and none are hidden. The list is effectively three separate games stacked together: the ME1 mission and power grinds, the ME2 recruit-and-loyalty run into the suicide mission, the ME3 campaign, and a small cross-game set that only completes across a full trilogy character.",
                "A handful are missable inside a single playthrough - ME2 loyalty and the \"keep everyone alive\" suicide-mission run, and the romance flags - but everything can be earned by playing all three games once each with the same Shepard. The long poles are the three Insanity clears and the trilogy-wide kill counts.",
                "Tip: play the whole trilogy on one imported character. Do ME1 on Insanity first (it is the easiest of the three on that difficulty), keep that Shepard through ME2 and ME3, and you collect Long Service Medal, the Paramour tier, the Insanity tier and most of the kill-count feats along the way."
            ]
        },
        {
            "heading": "Mass Effect 1",
            "body": [
                "Everything tagged \"ME1\": the seven story-mission medals (Eden Prime through Ilos), the biotic and tech power-use grinds (25 uses each), the medi-gel and squadmate-mission counts, the exploration \"land on uncharted worlds\" tiers, and one-off flags for becoming a Spectre, recruiting Liara, and the Bring Down the Sky mission.",
                "The achievements here: Medal of Honor (ME1: Complete the game on any difficulty); Medal of Heroism (ME1: Complete Feros); Distinguished Service Medal (ME1: Complete Eden Prime); Council Legion of Merit (ME1: Complete Virmire); Honorarium of Corporate Service (ME1: Complete Noveria); Lift Mastery (ME1: Use biotic Lift 25 times); Throw Mastery (ME1: Use biotic Throw 25 times); Warp Mastery (ME1: Use biotic Warp 25 times); Singularity Mastery (ME1: Use biotic Singularity 25 times); Barrier Mastery (ME1: Use biotic Barrier 25 times); Stasis Mastery (ME1: Use biotic Stasis 25 times.); Damping Specialist (ME1: Use Damping Field 25 times); AI Hacking Specialist (ME1: Use AI Hacking 25 times); Electronics Specialist (ME1: Use Shield Overload 25 times); Sabotage Specialist (ME1: Use Sabotage 25 times); First Aid Specialist (ME1: Use medi-gel 50 times); Neural Shock Specialist (ME1: Use Neural Shock 25 times); Meritorious Service Medal (ME1: Complete Ilos); Archivist (ME1: Find all primary Alien: Council Races, Extinct Races and Non-Council Races codex entries); Completionist (ME1: Complete the majority of the game); Medal of Exploration I (ME1: Land on an uncharted world); Medal of Exploration II (ME1: Land on 4 uncharted worlds); Medal of Exploration III (ME1: Land on 8 uncharted worlds); Soldier Ally (ME1: Complete 5 missions with the Alliance soldier squad member); Sentinel Ally (ME1: Complete 5 missions with the Alliance sentinel squad member); Krogan Ally (ME1: Complete 5 missions with the krogan squad member); Turian Ally (ME1: Complete 5 missions with the turian squad member); Quarian Ally (ME1: Complete 5 missions with the quarian squad member); Asari Ally (ME1: Complete 5 missions with the asari squad member); Principled (ME1: Accumulate 75% of total possible Paragon or Renegade points); Spectre Inductee (ME1: Become a Spectre); Charismatic (ME1: Use Charm or Intimidate to resolve an impossible situation in the game.); Search and Rescue (ME1: Locate Dr. T'soni in the Artemis Tau cluster); Colonial Savior (ME1: Complete the Bring Down the Sky mission.)."
            ]
        },
        {
            "heading": "Mass Effect 2: Recruitment & Loyalty",
            "body": [
                "The ME2 campaign spine: the story-mission flags from returning to duty through the Omega 4 Relay, every \"successfully recruit\" achievement for the squad, and every matching loyalty-mission achievement. Do all the loyalty missions before the relay or you lose the No One Left Behind run.",
                "The achievements here: Mission Accomplished (ME2: Save humanity throughout the galaxy from certain annihilation); Missing in Action (ME2: Save your crew from an overwhelming attack); Very Elusive (ME2: Return to active duty); Colony Defense (ME2: Defend a human colony from attack); Ghost Ship (ME2: Complete the investigation of a derelict alien vessel); Suicide Mission (ME2: Use the Omega 4 Relay); Against All Odds (ME2: Survive suicide mission); No One Left Behind (ME2: Keep your team alive through the suicide mission); Friend or Foe (ME2: Obtain geth technology); The Archangel (ME2: Successfully recruit Archangel); The Assassin (ME2: Successfully recruit the Assassin); The Convict (ME2: Successfully recruit the biotic Convict); The Justicar (ME2: Successfully recruit the Justicar); The Krogan (ME2: Successfully recruit the krogan); The Professor (ME2: Successfully recruit the Professor); The Quarian (ME2: Successfully recruit the quarian); A House Divided (ME2: Hack a geth collective); Battlemaster (ME2: Gain the loyalty of the krogan); Cat's in the Cradle (ME2: Gain the loyalty of the Assassin); Catharsis (ME2: Gain the loyalty of the biotic Convict); Doppelganger (ME2: Help the Justicar resolve her mission); Fade Away (ME2: Gain the loyalty of Archangel); Ghost of the Father (ME2: Gain the loyalty of the Cerberus Operative); The Cure (ME2: Gain the loyalty of the Professor); The Prodigal (ME2: Gain the loyalty of the Cerberus Officer); Treason (ME2: Gain the loyalty of the quarian)."
            ]
        },
        {
            "heading": "Mass Effect 2: Combat & Exploration",
            "body": [
                "The ME2 skill and side-content feats: thresher-maw and Shadow Broker kills, the power specialists (incinerate/overload/warp 25 enemies), 30 headshots, biotic combos, full weapon and power upgrades, the research and codex flags, and the Overlord DLC VI shutdown.",
                "The achievements here: Big Game Hunter (ME2: Thresher Maw defeated); Head Hunter (ME2: Perform 30 headshot kills with any weapon on humanoid targets); Incineration Specialist (ME2: Incinerate the armor of 25 enemies); Merciless (ME2: Make 20 enemies scream as they fall or are set on fire); Overload Specialist (ME2: Disrupt the shields of 25 enemies); Tactician (ME2: Hit 20 different targets with multiple biotic powers to combine the effects); Warp Specialist (ME2: Warp the barriers of 25 enemies); Agent (ME2: Complete 5 missions discovered by scanning unexplored worlds); Galactic Explorer (ME2: Visit 100% of the planets in an unexplored cluster); Operative (ME2: Complete a mission discovered by scanning an unexplored world); Scientist (ME2: Complete any research project in the Normandy's laboratory); Weapon Specialist (ME2: Fully upgrade a weapon); Scholar (ME2: Unlock 15 new Mass Effect 2 codex entries); Power Full (ME2: Evolve any power); Revenge! (ME2: Gain the loyalty of the mercenary); Broke, Blind, and Bedlam (ME2: Gain the loyalty of the thief); Digital Exorcist (ME2: Successfully shut down the rogue VI in Project Overlord); Heart of Darkness (ME2: Confront the Shadow Broker)."
            ]
        },
        {
            "heading": "Mass Effect 3",
            "body": [
                "Everything tagged \"ME3\": the campaign flags from returning to duty through the final assault and Legend, the war-asset and probe feats, the power/weapon upgrade grinds (evolve to rank 6, upgrade to level 10), and the enemy-type kills (brute mid-charge, harvester, Atlas hijack, guardian headshots).",
                "The achievements here: Driven (ME3: Return to active duty.); Bringer of War (ME3: Chase down an assassin.); Mobilizer (ME3: Bring a veteran officer aboard.); World Shaker (ME3: Destroy an Atlas dropped from orbit.); Pathfinder (ME3: Explore a lost city.); Tunnel Rat (ME3: Survive the swarm.); Party Crasher (ME3: Sabotage a dreadnought.); Hard Target (ME3: Call down an orbital strike.); Saboteur (ME3: Disable a group of fighter squadrons.); Arbiter (ME3: Win a political stand-off.); Last Witness (ME3: Extract ancient technology.); Executioner (ME3: Defeat an old adversary.); Well Connected (ME3: Send a warning across the galaxy.); Fact Finder (ME3: Discover an enemy's monstrous origin.); Liberator (ME3: Stop a Cerberus kidnapping.); Problem Solver (ME3: Evacuate a scientific facility.); Patriot (ME3: Make the final assault.); Legend (ME3: Mission accomplished.); Shopaholic (ME3: Visit a store in the single-player campaign.); Master and Commander (ME3: Deliver most of the Galaxy at War assets to the final conflict.); Lost and Found (ME3: Dispatch 10 probes to retrieve people or resources in Reaper territory.); A Personal Touch (ME3: Modify a weapon.); Combined Arms (ME3: Perform any combination of 50 biotic combos or tech bursts.); Focused (ME3: Evolve any of your powers to rank 6.); Untouchable (ME3: Escape a Reaper in the galaxy map.); Shield Breaker (ME3: Overload the shields of 100 enemies.); Sky High (ME3: Lift 100 enemies off the ground with powers.); Pyromaniac (ME3: Set 100 enemies on fire with powers.); Eye of the Hurricane (ME3: Kill a brute while it's charging you.); Mail Slot (ME3: Kill 10 guardians with headshots from the front while their shields are raised.); Hijacker (ME3: Hijack an Atlas mech.); Giant Killer (ME3: Defeat a harvester.); Always Prepared (ME3: Obtain two non-customizable suits of armor.); Gunsmith (ME3: Upgrade any weapon to level 10.); Under Pressure (ME3: Uncover an ancient secret.); Savior (ME3: Free Omega from Cerberus Occupation.); Last Resort (ME3: Stop an out-of-control scheme before it's too late.); The One and Only (ME3: Defeat a group of Spectre-level opponents on Normal, Hardcore, or Insanity.)."
            ]
        },
        {
            "heading": "Legendary Edition Cross-Game",
            "body": [
                "The trilogy-wide set that only the Legendary Edition tracks: the three Insanity tiers, the three Paramour tiers, finishing all three games with one character, and the shared kill-count ladder (250 / 1,000 / 2,000 enemies, plus 100 melee kills).",
                "The achievements here: Insanity I (Complete Mass Effect 1, 2 or 3 on Insanity without changing difficulty); Insanity II (Complete two games in Mass Effect Legendary Edition on Insanity without changing difficulty); Insanity III (Complete all three games in Mass Effect Legendary Edition on Insanity without changing difficulty); Paramour I (Establish a romantic relationship in Mass Effect 1, 2 or 3); Paramour II (Establish or rekindle a romantic relationship in two games in Mass Effect Legendary Edition); Paramour III (Establish or rekindle a romantic relationship in all three games in Mass Effect Legendary Edition); Long Service Medal (Finish Mass Effect 1, 2 and 3 with the same character); Recruit (Kill 250 enemies in Mass Effect 1, 2 or 3); Soldier (Kill 1,000 enemies in Mass Effect 1, 2 or 3); Veteran (Kill 2,000 enemies in Mass Effect 1, 2 or 3); Bruiser (Kill 100 enemies with melee attacks in Mass Effect 1, 2 or 3)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Mass Effect 1 to completion - clear every main mission (Feros, Eden Prime, Virmire, Noveria, Ilos), grind the biotic/tech power uses and the squadmate-mission counts as you go, and finish on Insanity.",
                "2. Import into Mass Effect 2: recruit every squadmate, complete every loyalty mission, then run the Omega 4 Relay keeping the whole team alive.",
                "3. Work the ME2 combat and exploration feats (headshots, power specialists, 100% cluster scans) before or after the finale.",
                "4. Import into Mass Effect 3, play the campaign to the final assault, and mop up the power/weapon-upgrade and enemy-type feats.",
                "5. Finish the cross-game set: same character through all three, romance in all three, Insanity in all three.",
                "Tip: the trilogy kill-count achievements (Recruit, Soldier, Veteran) and Bruiser stack across all three games, so do not worry about \"farming\" them - a normal three-game playthrough clears them."
            ]
        }
    ]
};
