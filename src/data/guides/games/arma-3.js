// Arma 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/arma-3.json), whose 123 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   107410 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 17 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "arma-3-achievement-guide",
    "category": "game",
    "gameSlug": "arma-3",
    "icon": "🪖",
    "title": "Arma 3 Achievement Guide",
    "summary": "A practical guide to all 123 Steam achievements in Arma 3 (17 hidden). The 17 hidden achievements are the East Wind campaign markers and its two epilogues, the Apex Protocol and Altis Requiem markers, the Old Man scenario outcomes, and the Art of War Showcase secrets. Sourced from PlayStationTrophies-style community guides, Exophase and the Armed Assault Wiki.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Arma 3 has 123 Steam achievements, 17 of them hidden. Arma 3 is Bohemia Interactive's large-scale military sandbox. The visible achievements cover the Bootcamp campaign, the Showcases and Faction Showcases, Firing Drills and Time Trials, the Karts, VR training, helicopter courses, the Zeus and Eden Editor tools, Steam Workshop, and a long tail of DLC scenario roles across Karts, Helicopters, Marksmen, Apex, Jets, Laws of War, Tac-Ops, Tanks, Contact, Art of War and the anniversary content.",
                "The 17 hidden achievements are the main East Wind campaign markers (surviving Stratis, gaining the FIA's trust, the loyalty choice, and the two mutually-exclusive epilogues), the Apex Protocol co-op markers (Firestarter, Fast Extract, Warlock Down), the Altis Requiem good ending (No Requiem), the four Old Man scenario outcomes plus killing Keystone, and the Art of War Showcase secrets (Picture Perfect, Dead Letter, Renaissance Man).",
                "The catalog marks it difficulty 4, missable:true and recommends 2 playthroughs. The two campaign epilogues are mutually exclusive, the Old Man scenario has four different counteragent recipients, and Fast Extract has a time limit."
            ]
        },
        {
            "heading": "The East Wind & Bootcamp Campaigns",
            "body": [
                "The five Steam-hidden East Wind campaign markers (Stratis, the FIA, the loyalty choice, and the two epilogues) plus the Bootcamp campaign - completing it, dying in it, the Zeus training stages, and the combat training.",
                "The achievements here: Tactical Withdrawal (Survive the AAF attack and escape Stratis (complete 'Tipping Point' in the East Wind campaign)); Guerilla Warfare (Gain the trust of the FIA and prepare the way for a NATO invasion (complete 'Beyond Recognition')); Question of Loyalty (Choose your side in the final hour of the invasion (complete 'Paradise Found')); Peacekeeper (Complete the campaign epilogue where NATO accepts the AAF's capitulation); Every Man for Himself (Complete the campaign epilogue where you escape Altis on your own); This is War (Started your first Arma 3 scenario - welcome!); First Deployment (Completed the Bootcamp campaign. Get ready for your next deployment!); K.I.A. (Died in any Bootcamp campaign scenario. If you see the flash, it's already too late ..); Drill Instructor (Guided your recruits through all Bootcamp Zeus training stages); Ready for Duty (Passed all Bootcamp Zeus training stages as a recruit); Star Recruit (Completed the bootcamp combat training stage without hurting yourself or others)."
            ]
        },
        {
            "heading": "Apex Protocol, Contact & Old Man",
            "body": [
                "The Apex Protocol co-op campaign (Better With Friends / Lone Wolf, its missions and the three Steam-hidden markers), the Tanoa terrain and Viper/ADR-97 gear, the Contact campaign's Oreokastro missions, and the Old Man open-world scenario with its four Steam-hidden counteragent outcomes.",
                "The achievements here: Firestarter (Destroy all Syndikat stashes in the Apex Protocol mission '03 Firestarter'); Fast Extract (Complete the Apex Protocol mission '05 Extraction' (rescuing Nikos) in under 20 minutes); Warlock Down (Cripple Syndikat's chain of command in the Apex Protocol campaign); Better With Friends (Completed each mission of the Apex Protocol campaign with the help of your teammates); Lone Wolf (Completed each mission of the Apex Protocol campaign alone); The Bigger Picture (Completed each mission of the Apex Protocol campaign chronologically); None The Wiser (Completed the 04 Heart of Darkness campaign mission without alerting the enemy); Welcome to Tanoa (Visited the crown jewel terrain of Arma 3 Apex for the first time); Transport Service (Loaded or unloaded 5 vehicles into any suitable transport vehicle); With Mark of the Serpent (Tried out Viper Special Purpose Suit); Changing the Balance (Modified your difficulty options and saved the custom settings); Mr. Anderson (Equipped any variant of the ADR-97 submachine gun); Bomberman (Destroyed a ground target with a bomb in Showcase Fighter Jets); Deadstick Landing (Landed your damaged aircraft for repairs in Showcase Fighter Jets); Get Arrested (Successfully completed your first carrier landing); Armed and Dangerous (Customized any compatible vehicle's dynamic loadout in Eden Editor); Punch Out (Safely ejected from any compatible jet using an ejection seat); Remnants of War (Cleared all explosives from Oreokastro and completed the Remnants of War campaign); Memories of Oreokastro (Recalled all memories in Oreokastro during the Remnants of War campaign); Humanitarian (Faced with difficult decisions in the Remnants of War campaign, you went for the more humane options); Explosive Treasure (Found and triggered all hidden training mines in the IDAP faction Showcase); Dome Free (Destroy CSAT's biogenetic weapons laboratory in the Old Man scenario); Devil's Due (Complete the Old Man scenario, giving the counteragent to the insurgents); Status Quo (Complete the Old Man scenario, giving the counteragent to Keystone); Man of the People (Complete the Old Man scenario, giving the counteragent to Dr. Drabek); Respectfully, Sir (Kill Keystone in the Old Man scenario)."
            ]
        },
        {
            "heading": "Laws of War, Tac-Ops, Tanks & Art of War DLC",
            "body": [
                "The Laws of War missions (Beyond Hope, Stepping Stone, Steel Pegasus), the Tac-Ops medevac operations, the Tanks DLC (No Requiem's good ending, tank-crew time and skill feats), the anniversary content, and the Art of War Gallery and its three Steam-hidden Showcase secrets.",
                "The achievements here: Different Perspective (Completed each role of the Beyond Hope operation); Forward Observer (Destroyed all APCs defending Orino by artillery strike in the Beyond Hope operation); Beyond Hope (Completed the Beyond Hope operation); Changing Places (Completed each role of the Stepping Stone operation); Stepping Stone (Completed the Stepping Stone operation); Seasoned Warfighter (Completed one mission of the Stepping Stone operation without dying); Steel Pegasus (Completed the Steel Pegasus operation); Savior (Rescued both pilot and medic in the LZ Nowhere mission of the Steel Pegasus operation); Lifeline (Transported all injured soldiers to the LZ Blazer in the Breaking Through mission of the Steel Pegasus operation); No Requiem (Finish the three Altis Requiem operations with minimal civilian casualties for the good ending); From Within (Spent 3 hours inside an armored vehicle); Easy Money (Destroyed more tanks than Zulu in Showcase Tank Destroyers); Steel Sniper (Hit a moving enemy tank with an APFSDS round at a distance of at least 3500 meters); Commander (Spent 3 hours as a tank commander); Size Doesn't Matter (Spent 3 hours in the Nyx tankette); In It Together (Spent 24 hours in any tank with a full human crew in multiplayer); Loyalist (Played Arma 3 for 200 hours); This is War 2.00 (Played Arma 3 after its 2.00 platform update); Lost and Found (Found and marked the 5 famous lost works of art by Dutch masters in Showcase Cultural Property); Picture Perfect (Complete Showcase: Cultural Property without the hostage being killed or taking any casualties (Art of War)); Dressed to Impress (Tried on the new Parade Uniform or Formal Suit); Art and Soul (Visited the Lars Blanken Gallery in Amsterdam); Connoisseur (Inspected 20 labels in the Lars Blanken Gallery in Showcase Art of War); Dead Letter (Complete a hidden objective in the Art of War Showcase content); Still Life (Published a composition to Steam Workshop); Renaissance Man (Steal the binoculars and spot an unexpected surveillance agent in Showcase: Art of War)."
            ]
        },
        {
            "heading": "Showcases, Firing Drills & Time Trials",
            "body": [
                "Trying and completing all Showcases and Faction Showcases, the Firing Drills and Time Trials (bronze and gold medals, clean runs, bonus targets), the Karts and Marksmen firing challenges, and the Laws of War / Tanks time trials.",
                "The achievements here: Start Your Engines (Finished any official Time Trial); Aspiring Kart Racer (Earned the bronze medal in all official Karts Time Trials); Formula Kart (Earned the gold medal in all official Karts Time Trials); Clean Race (Finished any official Karts Time Trial without damage); Speed Demon (Finished any official Karts Time Trial with an average speed of 85 kmph or more); Competitive Shooter (Finished any official Firing Drill); Aspiring Sharpshooter (Earned the bronze medal in all official Firing Drills); Firing Drills Champion (Earned the gold medal in all official Firing Drills); Clean Drill (Finished any official Firing Drill without penalties (competitive rules)); Bonus Targets (Hit every bonus target in any official Firing Drill with bonus targets); Showtime (Tried any 5 official showcases); Meet and Greet (Visited all official Faction Showcases to check out their weapons and vehicles on display); Showcasing (Completed all official Showcases); Virtual Shooter (Completed all official VR Weapon Handling courses); Bad Omens (Discovered the secret room in Showcase Firing From Vehicles); Dodge This (Completed Showcase Marksmen without injury); Hacker (Downloaded Intel 5 times in official End Game multiplayer); Carrier (Became the Carrier in official End Game multiplayer for the first time); Hip Shooter (Finished any official Marksmen Firing Drill without resting or deploying your weapon (competitive rules)); Conservative Sharpshooter (Finished any official Firing Drill by hitting all targets and spending no more than a single round per target); Rock Stable (Deployed any weapon for the first time); Marksmen Weapon Master (Tried all 7 Marksmen DLC weapons); Collateral Damage (Completed the 3 VR simulations in Showcase Laws of War without any civilian collateral damage); Aspiring Aid Supplier (Earned the bronze medal in all official IDAP Time Trials); Fast Aid (Earned the gold medal in all official IDAP Time Trials); Tank Rally (Earned the bronze medal in all official Tanks Time Trials); Hammer Time (Earned the gold medal in all official Tanks Time Trials); Fortress of Fun (Cleared the CoF: Gray Firing Drill in under 2:00)."
            ]
        },
        {
            "heading": "Zeus, Eden Editor & Workshop",
            "body": [
                "The Zeus game-master achievements (placing objectives and objects, reacting to pings), the Eden Editor tutorials and scenario tools, publishing and subscribing on Steam Workshop, and the main-menu easter eggs.",
                "The achievements here: Hero's Journey (Placed any objective for players as Zeus); Deity for a Day (Played as Zeus for a total of 24 hours); Godly Creations (Placed a total of 200 objects as Zeus across all scenarios); Worshiper (Pinged your Zeus); Merciful God (Reacted to 5 player pings as a Zeus by using the control shortcut); Scapegoat (Killed by a player while remotely controlling a unit as Zeus); Contributor (Published a scenario to Steam Workshop); Subscriber (Subscribed to a scenario on Steam Workshop); Perfectionist (Updated an existing Steam Workshop scenario to a newer version); Relentless Creator (Spent over 100 hours creating and testing in the scenario editor); Model Student (Completed all Eden Editor tutorials); Puppeteer (Played a scenario as a non-player character in the Eden Editor); Dressing Doll (Configured a character loadout using the Arsenal in the Eden Editor); New Dimension (Imported a 2D scenario into the Eden Editor); Game Plan (Drew at least one line on the map); Arma Invaders (Won the main menu mini-game during a special event); Mod Lover (Started Arma 3 with at least 10 mods loaded - thanks to all modders for their splendid work!); Arma'd (Got Arma'd into the air while inside a ground vehicle)."
            ]
        },
        {
            "heading": "Helicopters & VR Training",
            "body": [
                "The VR simulation and training courses, the VR Arsenal garage and target range, and the Helicopters DLC courses (advanced pilot, low flight, medevac, air transport, the stunt medals).",
                "The achievements here: Virtual Reality (Booted up the VR simulation for the first time); Virtual Command (Completed all official VR commanding courses); Real Virtuality (Completed all official VR training courses); Lock and Load (Saved a custom load-out in VR Arsenal); Virtual Pilot (Completed all official VR helicopter courses); Advanced Virtual Pilot (Completed all official VR helicopter courses while using the Advanced Flight Model); Virtual NOE Flight (Completed the Low Flight stage in the advanced VR helicopter course under 40 seconds); Aspiring Stunt Pilot (Earned the bronze medal in all official Helicopter Time Trials); Golden Rotorhead (Earned the gold medal in all official Helicopter Time Trials); Nap of the Earth (Flew under an average of 22 meters AGL in any official Helicopters Time Trial); Dust-Off (Completed 10 medevac tasks in official Support multiplayer); Airbridge (Transported 10 groups of soldiers into battle without being killed in official Support multiplayer); Virtual Vehicle Inspection (Visited the Garage in VR Arsenal for the first time); Mass Virtual Destruction (Disabled all target vehicles in VR Arsenal at the same time)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the East Wind campaign for the hidden markers, and do the Bootcamp campaign for its own set.",
                "2. Save before the campaign's final mission so you can get both mutually-exclusive epilogues (Peacekeeper and Every Man for Himself) from one save.",
                "3. Work through the Showcases, Firing Drills, Time Trials, VR training and helicopter courses for their large batch of medals.",
                "4. Play the DLC campaigns and scenarios - Apex Protocol (co-op), Laws of War, Tac-Ops, Tanks (both No Requiem and the good ending), Contact, and the Old Man open-world scenario.",
                "5. Do the Old Man scenario multiple times for its four different counteragent outcomes and killing Keystone, and finish the Art of War Showcase secrets and Gallery achievements.",
                "Tip: the Old Man scenario is a long open-world campaign in its own right - once you know the map, later runs for the alternate counteragent recipients go much faster by beelining the endgame."
            ]
        }
    ]
};
