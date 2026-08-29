// RAGE 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rage-2.json), whose 64 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   548570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 8 hidden achievements ship no Steam description; their conditions here are curatorial, cross-checked against the game's wiki plus community 100% guides, and kept spoiler-light.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "rage-2-achievement-guide",
    "category": "game",
    "gameSlug": "rage-2",
    "icon": "☢️",
    "title": "RAGE 2 Achievement Guide",
    "summary": "A practical guide to all 64 Steam achievements in RAGE 2 - weapons & abilities, vehicles & driving, world & exploration, rise of the ghosts (dlc), terrormania (dlc), hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "RAGE 2 has 64 Steam achievements, 8 of them hidden (the eight main story missions). The rest are weapon and Nanotrite-ability feats, vehicle and driving challenges, the open-world activities (Arks, EcoPods, Trade Coalition settlements), three difficulty clears, and a full block for each of the two DLCs (Rise of the Ghosts, TerrorMania).",
                "Nothing is missable and the main story is short. The commitment is the two hard-difficulty clears (Ultra Nightmare, Ironman) and grinding the big kill counters (1,337 Goons, 200 Rocket Launcher ruptures, 128 vehicles in the Phoenix).",
                "Tip: play the story on Nightmare in Ironman mode to cover three difficulty achievements at once (if you are confident), then free-roam for the ability/weapon/vehicle feats and the world activities before doing the two DLCs."
            ]
        },
        {
            "heading": "Weapons & Abilities",
            "body": [
                "The combat feats: the Assault Rifle no-reload and rate-of-fire ones, a Shotgun Slug airborne hit, a Hyper-Cannon double, 200 Rocket Launcher ruptures, an Overdrive 10x multiplier, 10 Dash Strike kicks, 50 Slam crushes, a post-Defibrillation triple, 100 Wingstick headshots, a Turret Drone explosion kill, 7 Crusher kills, a grenade reflect, 1,337 Goon kills, a cloaked Shrouded kill, and an enemy-of-my-enemy kill.",
                "The achievements here: Efficiency (Use the Assault Rifle to kill 5 enemies in a row without reloading); Unloaded (Shoot 70 bullets within 16 seconds using the Assault Rifle); Skeet Shooting (Hit an airborne enemy with the Shotgun's Slug Shot); Hyper-Express (Kill 2 enemies with the same shot using the Hyper-Cannon); Postmodern Picasso (Rupture a total of 200 enemies using the Rocket Launcher); Overly driven (Reach an Overdrive multiplier of 10); THIS IS RAGE (Use Dash Strike kick to kill 10 enemies); Come on and Slam! (Crush 50 enemies using Slam); Pseudo Post-Mortem (Kill 3 enemies within 10 seconds after restoring all health with the Defibrillation); Off With Their Heads (Headshot a total of 100 enemies using the Wingstick); Explosive Ending (Kill an enemy with a Turret Drone explosion); The Bigger They Are... (Kill 7 Abadon Mutant Crushers); Hot Potato (Reflect an enemy's grenade); Goon De-leet (Kill 1337 Goons); Peek-a-boo (Kill a cloaked Shrouded enemy); The Enemy Of My Enemy (Kill an enemy that is trying to kill an enemy)."
            ]
        },
        {
            "heading": "Vehicles & Driving",
            "body": [
                "The driving feats: 13 zipline kills, 128 vehicles destroyed in the Phoenix, a Convoy Leader takedown, a Crusher killed with the Phoenix, 10 seconds at the Raptor's top speed, 9,000 m driven, a 100 m jump, a sub-3:03 Torn Plains Race, 19 bikers knocked off with the Phoenix's Dodge, a Dumper Truck scoop, and a Goon-tank kill.",
                "The achievements here: Zipper (Kill 13 enemies while riding ziplines); Bytesize Takedown (Destroy 128 Vehicles while driving the Phoenix); Gonevoy (Take down 1 Convoy Leader); Crushed (Kill an Abadon Mutant Crusher with the Phoenix); On The Limit (Maintain top speed for 10 seconds with the Raptor); Over 9000 (Drive over 9000 meters); Hangtime (Jump over 100 meters with a ground vehicle); Acid House (Complete the Torn Plains Race under 3:03); Off Balance (Knock 19 bikers off their bikes with the Phoenix's \"Dodge\"); Dozing (Scoop up an enemy with the Dumper Truck); Goon Fire (Blow up a Goon with the Goon tank \"Booma\")."
            ]
        },
        {
            "heading": "World & Exploration",
            "body": [
                "The open-world goals: 5 Arks completed, 17 Balloons popped, 30 Spy Drones destroyed, visiting the Dune Sea / Broken Tract / Wetlands / Wilds EcoPods, visiting every Trade Coalition settlement, and the three difficulty clears (Nightmare, Ultra Nightmare, Ironman).",
                "The achievements here: A Noah Lot (Complete 5 Arks); Can't Stop Pop (Pop 17 Balloons); Mata Hari Manners (Destroy 30 Spy Drones); The Bowels of a Rust Giant (Venture inside the Dune Sea EcoPod); Forlorn Watcher (Travel to the summit of the Broken Tract EcoPod); Sunken Hope (Visit the Wetlands EcoPod); Reaching out to the Past (Traverse the bridge to the EcoPod in the Wilds); Wasteland Vagabond (Visit every Trade Coalition settlement); Nightmare (Complete the game on Nightmare Difficulty); I am Death Incarnate! (Complete the game on Ultra Nightmare Difficulty); Heavy Boots (Complete the game in Ironman Mode)."
            ]
        },
        {
            "heading": "Rise of the Ghosts (DLC)",
            "body": [
                "The first DLC: the missions Captive, Within the Walls, Slaughter to the Lamb and Means to an End, the Overgrown City EcoPod, the Recondite and Bendring Ark locations, the Reclaim & Rebuild Project, all Air Drops in Overgrown City, and all Ghost Sanctuaries.",
                "The achievements here: Captive (Complete mission: Captive); Within the Walls (Complete mission: Within the Walls); Slaughter to the Lamb (Complete mission: Slaughter to the Lamb); Means to an End (Complete mission: Means to an End); EcoLocation (Visit the Overgrown City EcoPod); Recondite (Complete the Recondite Ark location); Ringbender (Complete the Bendring Ark location); Friend of Ford (Complete the Reclaim & Rebuild Project); Air Drop Down (Activate all Air Drops in Overgrown City); Questionable Sanctity (Complete all Ghost Sanctuaries in Overgrown City)."
            ]
        },
        {
            "heading": "TerrorMania (DLC)",
            "body": [
                "The second DLC: the five Bonetowers (Hellspring, Sensus, Veritas, Tristitia, Furorem), returning the NECRODISC (TerrorMania), and killing 100 Skeletons and 25 airborne Skeletons with the Sword of Transitus.",
                "The achievements here: Hellspring Bonetower (Complete Bonetower: Hellspring); Sensus Bonetower (Complete Bonetower: Sensus); Veritas Bonetower (Complete Bonetower: Veritas); Tristitia Bonetower (Complete Bonetower: Tristitia); Furorem Bonetower (Complete Bonetower: Furorem); TerrorMania (Return the NECRODISC and stop the Skeletal Army); Striking Skulls (Kill 100 Skeletons with the Sword Transitus); Flying Skulls (Kill 25 airborne Skeletons with the Sword of Transitus)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Eight achievements are hidden - one per main story mission:",
                "The achievements here: The Ranger (Complete the main story mission \"The Ranger\".); Blackout (Complete the main story mission \"Blackout\".); The Signal (Complete the main story mission \"The Signal\".); Wasteland Celebrity (Complete the main story mission \"Wasteland Celebrity\".); Beneath the Surface (Complete the main story mission \"Beneath the Surface\".); Ground Control (Complete the main story mission \"Ground Control\".); Double Cross (Complete the main story mission \"Double Cross\".); Project Dagger (Complete the main story mission \"Project Dagger\" (the finale).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the eight-mission main story (on Nightmare / Ironman if you want those clears in the same run).",
                "2. Free-roam for the ability, weapon and vehicle feats and the world activities (Arks, EcoPods, Balloons, Spy Drones, Trade Coalition).",
                "3. Grind the big kill counters (1,337 Goons, 200 ruptures, 128 Phoenix kills) alongside everything else.",
                "4. Play Rise of the Ghosts and TerrorMania for their mission and location blocks.",
                "Tip: I am Death Incarnate! (Ultra Nightmare) has no in-run checkpointing for the achievement - a single run start to finish - so do it after you know the game well, and consider stacking Ironman on the same attempt only if you are very confident."
            ]
        }
    ]
};
