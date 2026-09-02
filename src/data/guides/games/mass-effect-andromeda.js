// Mass Effect: Andromeda Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mass-effect-andromeda.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mass-effect-andromeda-achievement-guide",
    "category": "game",
    "gameSlug": "mass-effect-andromeda",
    "icon": "🌌",
    "title": "Mass Effect: Andromeda Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in Mass Effect: Andromeda - none are hidden. None of the 55 achievements are hidden - every description is Steam's own text. Covers the main story beats, combat and power feats, exploration and crafting and planetary viability, and the strike-team / APEX multiplayer layer.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mass Effect: Andromeda has 55 Steam achievements and none of them are hidden. Mass Effect: Andromeda sends Ryder to a new galaxy as the Pathfinder for humanity's arks. None of its 55 achievements are hidden. The list covers the main story beats (activating Meridian, rebooting the Pathfinder, freeing the salarian ark, establishing outposts, uniting the Nexus factions), a broad set of combat and power feats, exploration and crafting and planetary viability, and the strike-team / APEX multiplayer layer.",
                "The story achievements are all clearly named for their objective (Mission Accomplished for Meridian, Liberation for the salarian ark, Foothold for an outpost) rather than being hidden, so the whole list can be planned in advance.",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable - the galaxy stays open after the story - but Unwavering (an Insanity clear) and the 100%-viability and all-profiles achievements are long commitments, and a few need the multiplayer or strike-team system."
            ]
        },
        {
            "heading": "The Andromeda Story",
            "body": [
                "The main-quest beats - becoming the Pathfinder, gaining the Tempest, activating the first Remnant vault and Meridian, freeing the salarian and asari arks, establishing outposts, meeting the angara, allying with an outlaw faction, and uniting the Nexus against a common threat - plus the major companion loyalty missions.",
                "The achievements here: Mission Accomplished (Activate Meridian); Activation (Activate the Remnant city); Family Connections (Reboot the Pathfinder); Liberation (Free the salarian ark); Foothold (Establish an outpost); Exaltation (Destroy the exaltation facility or save the angaran prisoners); First Steps (Meet the angara on Aya); Alliance (Ally with an outlaw faction); Pathfinder (Become the new Pathfinder); Initiated (Gain access to the Tempest); World-Shaper (Activate the first Remnant vault); Buccaneer (Recover the krogan colony ship); Building Bridges (Stop the Roekaar leader); United (Unite the outposts against a common threat); Helping Hand (Help Vetra's sister); Signal Tracking (Find the source of the strange signal Peebee discovers); Role Model (Rescue the asari ark); First Contact (Land on an alien planet)."
            ]
        },
        {
            "heading": "Combat & Powers",
            "body": [
                "The combat feats - 2,000 kills, power combos, hovering and melee and construct kills, primed-target detonations, weak-point hits, revivals, frozen-enemy shatters, thrown-enemy and Concussive Shot tricks, and the Vanguard cloak-charge and Nomad hang-time gags.",
                "The achievements here: Fireworks (Perform 100 power combos); Terminator (Kill 2000 enemies); Death from Above (Kill 100 enemies while hovering. (Single-Player)); Close Combat Specialist (Kill 100 enemies with melee attacks); With Our Powers Combined (Detonate 10 targets that were primed by a teammate. (Single-Player)); Pinpoint Shot (Hit 250 enemy weak points while using a scope. (Single-Player)); Medic! (Perform 25 revivals on teammates); Mastermind (Using constructs, kill 100 enemies); Icebreaker (Shatter a frozen enemy with a jump melee attack. (Single-Player)); Fastball (Hit an enemy with a thrown enemy 25 times. (Single-Player)); Rough Landing (Detonate a trip mine with a thrown enemy. (Single-Player)); Friendly Fire (Direct your Remnant VI to attack each type of Remnant enemy. (Single-Player)); Trapshooter (Hit 25 floating enemies with Concussive Shot, Lance, or Incinerate. (Single-Player)); Sucker Punch (Use a melee attack to hit 25 floating enemies. (Single-Player)); Pyrotechnics Expert (Light three enemies on fire with one continuous Flamethrower attack. (Single-Player)); Vanguard Surprise (While cloaked, hit an enemy with a Charge attack. (Single-Player))."
            ]
        },
        {
            "heading": "Exploration, Crafting & Progression",
            "body": [
                "The 30m jump, completing three romances, levels 25 and 40, Rank 5 and 6 weapons and profiles, evolving powers, all-100%-viability planets and terraforming, crafting with augments, scanning 100 objects, and the Remnant puzzle streak.",
                "The achievements here: Long-Distance Jump (Travel at least 30m in a single jump. (Single-Player)); Matchmaker (Complete romances with three different characters across all playthroughs); Hang Time (Keep the Nomad airborne for 35 seconds); Full Roster (In single-player mode, recruit all six squadmates); Peak Condition (Reach Level 40 in single-player mode or Level 20 in multiplayer mode); Kitted Out (Kill a foe with a Rank 5 weapon in a single-player game or equip a Rank 10 weapon in multiplayer); High Performance (Unlock Rank 6 for each single-player profile type, or obtain a Level 6 multiplayer bonus stat); Full Power (Evolve one tech, one combat, and one biotic power to Rank 6. (Single-Player)); Almost There (Reach Level 25 in single player mode or Level 15 in multiplayer mode); Jack Of All Trades (Equip three different profile types); All Clear (Increase all discovered planets to 100% viability); Terraformer (Increase a discovered planet to 100% viability); Craftsmanship (Craft armor or a gun with 3 augments); Data Mining (Scan 100 different objects); Cryptographer (Complete 20 Remnant puzzles in a single playthrough)."
            ]
        },
        {
            "heading": "APEX Multiplayer & Strike Teams",
            "body": [
                "The multiplayer tutorial, an Insanity single-player clear, combined strike-team missions, the multiplayer/strike-team level, and creating strike teams or earning assists.",
                "The achievements here: Unwavering (Complete an \"Insanity\" single-player game, or 5 \"Gold\" multiplayer extractions from any firebase); Veteran (Successfully complete a combined 25 strike team missions or APEX multiplayer mode extractions); APEX (Complete the multiplayer mode tutorial mission); Explorer (Complete a combined five strike team missions or APEX extractions in multiplayer mode); Teamwork (Create six strike teams or earn 25 assist medals in multiplayer mode); Top Talent (Promote a strike team to Level 20)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story, letting the named story achievements unlock as you clear each objective (Meridian, the arks, the outposts, uniting the Nexus).",
                "2. Do all six companion loyalty missions and complete three romances across your playthrough.",
                "3. Raise planetary viability to 100% on every discovered world and finish the Remnant puzzle and scanning achievements while exploring.",
                "4. Grind the combat feats - most come naturally by level 40, but the power-combo and trick kills are worth deliberately setting up.",
                "5. Do a few APEX multiplayer or strike-team missions for that batch, and an Insanity clear if you want everything.",
                "Tip: pick a versatile profile (or the Explorer profile) and swap between tech, combat and biotic powers as you play - Jack Of All Trades, Full Power and the profile-rank achievements all want breadth, not a single specialization."
            ]
        }
    ]
};
