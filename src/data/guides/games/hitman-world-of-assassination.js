// HITMAN World of Assassination Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/hitman-world-of-assassination.json), whose 83
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1659040 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). 71 of
//   83 ship a real, official Steam description, quoted verbatim below.
// - The 12 hidden achievements ship no Steam description; they are all
//   HITMAN 3 set-piece feats. Their conditions here are curatorial,
//   cross-checked against PowerPyx, XboxAchievements/TrueAchievements and
//   the Hitman Wiki, and kept spoiler-light (map name and the type of
//   method, not a full walkthrough).
export const GUIDE = {
    "slug": "hitman-world-of-assassination-achievement-guide",
    "category": "game",
    "gameSlug": "hitman-world-of-assassination",
    "icon": "🕴️",
    "title": "HITMAN World of Assassination Achievement Guide",
    "summary": "A practical guide to all 83 Steam achievements in HITMAN World of Assassination - the prologue and general achievements, the HITMAN 3 location achievements (mission completions, Mastery Level 20, all Mission Stories, plus 12 hidden set-piece feats), the Special Assignments and bonus missions, and the HITMAN 1 and HITMAN 2 location achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "HITMAN World of Assassination has 83 Steam achievements, 12 of them hidden. The visible list is systematic: per location there is a \"complete the mission\", a \"reveal all undiscovered areas\", a \"complete all Mission Stories\" and a \"reach Mastery Level 20\". The hidden 12 are all HITMAN 3 set-piece feats - kill the targets by three specific methods, or a location's secret.",
                "Nothing is missable - every mission and challenge replays freely on any difficulty - but Mastery Level 20 for every HITMAN 1/2/3 location is a large grind, and the Silent Assassin and 1,000,000-point achievements need clean, planned runs.",
                "Tip: for the 12 hidden HITMAN 3 achievements, look up the three required methods per target and do them across one or two runs of that mission - the game tracks them cumulatively per mission, so you do not need all three in a single playthrough."
            ]
        },
        {
            "heading": "Prologue & General",
            "body": [
                "The tutorial and cross-game achievements: the Freeform Training and Final Test completions, a Mission Story and a Silent Assassin run of The Final Test, the Contract Creation tutorial, Escalation and Featured/Contract achievements, and the cross-game feats (three kill types, an unspotted assassination, 15 Shortcuts, 10 Playstyles).",
                "The achievements here: The Result of Previous Training (Complete Freeform Training in the Prologue.); Cleared for Field Duty (Complete The Final Test in the Prologue.); Seizing the Opportunity (Complete any Mission Story in The Final Test.); The Creative Assassin (Complete the Contract Creation Tutorial.); Silent Assassin (Complete The Final Test unspotted. Kill only Jasper Knight, ensuring his body is not found.); Training Escalated (Complete Level 5 of an Escalation Contract set in the ICA Facility.); Top of the Class (Beat the highest leaderboard score on a Contract.); A New Profile (Complete a Featured Contract.); Tools of the Trade (Assassinate Targets with Ballistic, Accident and Explosion Kills.); Unseen Assassin (Assassinate a Target without getting spotted.); Shortcut Killer (Find and unlock 15 Shortcuts.); Stylish Assassin (Get 10 different Playstyles.)."
            ]
        },
        {
            "heading": "HITMAN 3 Locations",
            "body": [
                "The six HITMAN 3 locations - Dubai, Dartmoor, Berlin, Chongqing, Mendoza and the Carpathian Mountains train - with their mission-completion, reveal-all-areas, all-Mission-Stories and Mastery achievements, plus the 12 hidden set-piece feats (Treacherous Architecture, Keep Your Eyes Peeled, Upstairs, Downstairs, Family Feud, Partied Out, Bird Art, Future Shock, Console Cowboy, Ripe for the Picking, Evil Wine Club, Bullet Train, Count Down From 47).",
                "The achievements here: Death From Above (Complete On Top Of The World.); Dune Raider (Reveal all undiscovered areas in Dubai.); Treacherous Architecture (Dubai (On Top of the World): eliminate the targets using the building's set-piece hazards - the oil-rig model, a fall over a railing, and both while airborne.); Keep Your Eyes Peeled (Dubai: make a target slip and fall while he is escaping in a skydiving suit.); Rise Up (Complete all Mission Stories in On Top Of The World.); Stair Master (Reach Dubai Mastery Level 20.); Master of the Household (Complete Death In The Family.); No Stone Unturned (Reveal all undiscovered areas in Dartmoor.); Upstairs, Downstairs (Dartmoor (Death in the Family): eliminate the target three specific ways - in her private room, with a shot from the roof, and put to rest.); Family Feud (Dartmoor: help Emma Carlisle eliminate Alexa Carlisle (a Mission Story).); Full House (Complete all Mission Stories in Death In The Family.); The Great Outdoors (Reach Dartmoor Mastery Level 20.); Death of the Party (Complete Apex Predator.); Followed the Trails (Reveal all undiscovered areas in Berlin.); Partied Out (Berlin (Apex Predator): eliminate the ICA agents via three set-piece methods - a rifle accident, a crane, and the club lighting rig.); Bird Art (Berlin: photograph the Yellow Bird graffiti.); Last Call (Become the club owner, and have a sit down with the ICA.); Warehouse Veteran (Reach Berlin Mastery Level 20.); NEXUS-47 (Complete End Of An Era.); Surveillance Master (Reveal all undiscovered areas in Chongqing.); Future Shock (Chongqing (End of an Era): eliminate the targets three ways - in the relaxation chair, by electrocution, and both with a single bullet.); Console Cowboy (Chongqing: use Imogen Royce's terminal in the server room to fry the data core.); Icebreaker (Complete all Mission Stories in End Of An Era.); Hack the Planet (Reach Chongqing Mastery Level 20.); The Last Tango (Complete The Farewell.); Master the Terroir (Reveal all undiscovered areas in Mendoza.); Ripe for the Picking (Mendoza (The Farewell): eliminate the targets three ways - the grape crusher, poisoned wine, and both with gas.); Evil Wine Club (Mendoza: attend the secret Providence meeting in the cellar.); Rich Harvest (Complete all Mission Stories in The Farewell.); Vineyard Virtuoso (Reach Mendoza Mastery Level 20.); Nightmare Fuel (Complete Untouchable.); Bullet Train (Carpathian Mountains (Untouchable): take out a guard each with a silenced pistol, a shotgun and an SMG.); Count Down From 47 (Carpathian Mountains: at the finale, use the serum on yourself instead of on the Constant.); Train Surfing (Complete all Untouchable Challenges.); Last Stop (Reach Carpathian Mountains Mastery Level 5.)."
            ]
        },
        {
            "heading": "Special Assignments & Bonus Missions",
            "body": [
                "The bonus-mission achievements: The Pen and the Sword and Crime and Punishment (completion, Silent Assassin, 1,000,000 points, all Challenges).",
                "The achievements here: Seven Figures (Get a score above 1,000,000 points on The Pen and the Sword.); Hawkeye (Complete The Pen and the Sword as Silent Assassin.); Pure Poetry (Complete all The Pen and the Sword Challenges.); Break the Bank (Complete Golden Handshake.); Top of the Heap (Reach New York Mastery Level 20.); In a League of Their Own (Get a score above 1,000,000 points on Crime and Punishment.); Never Knew What Hit Them (Complete Crime and Punishment as Silent Assassin.); Capital Punishment (Complete all Crime and Punishment Challenges.)."
            ]
        },
        {
            "heading": "HITMAN 2 Locations",
            "body": [
                "The HITMAN 2 location achievements - New York, Haven Island, Hawke's Bay, Miami, Santa Fortuna, Mumbai, Whittleton Creek and the Isle of Sgail - mission completions and Mastery levels, plus the Silent Sniper feat.",
                "The achievements here: Island and Chill (Complete The Last Resort.); Null and Void (Reach Haven Island Mastery Level 20.); Infiltrator (Complete Nightcall.); Local Knowledge (Reach Hawke's Bay Mastery Level 5.); Damage Control (Complete The Finish Line.); Miami Wise (Reach Miami Mastery Level 20.); Tactical Strike (Complete Three-Headed Serpent.); Dark Tourist (Reach Santa Fortuna Mastery Level 20.); Pirate Hunter (Complete Chasing a Ghost.); Keys to the City (Reach Mumbai Mastery Level 20.); Long Shot (Complete Another Life.); Pillar of the Community (Reach Whittleton Creek Mastery Level 20.); This is Maintenance (Complete The Ark Society.); Honorary Member (Reach Isle of Sgàil Mastery Level 20.)."
            ]
        },
        {
            "heading": "HITMAN 1 Locations",
            "body": [
                "The HITMAN 1 location achievements - Paris, Sapienza, Marrakesh, Bangkok, Colorado and Hokkaido - mission completions and Mastery Level 20, plus the Perfectionist Suit Only / Silent Assassin challenge.",
                "The achievements here: Silent Sniper (Complete The Last Yardbird as Silent Assassin.); When No One Else Dares (Complete The Showstopper.); City of Light (Reach Paris Mastery Level 20.); Die By the Sword (Complete World of Tomorrow.); Amalfi Pearl (Reach Sapienza Mastery Level 20.); Too Big to Fail (Complete A Gilded Cage.); Ancient Marrakesh (Reach Marrakesh Mastery Level 20.); Perfectionist (Complete Suit Only and Silent Assassin Challenges on The Icon, A House Built on Sand or Landslide.); Shining Bright (Complete Club 27.); One Night in Bangkok (Reach Bangkok Mastery Level 20.); Guerrilla Warfare (Complete Freedom Fighters.); Mission Complete (Reach Colorado Mastery Level 20.); A Long Time Coming (Complete Situs Inversus.); Sayōnara (Reach Hokkaido Mastery Level 20.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the prologue and general achievements first - the training missions, the Contract and Escalation tutorials, and the cross-game kill-type / playstyle feats.",
                "2. Play each HITMAN 3 location: complete the mission, reveal all areas, do all Mission Stories, and look up and perform that location's hidden set-piece feat across one or two runs.",
                "3. Do the Special Assignment bonus missions (The Pen and the Sword, Crime and Punishment) for completion, Silent Assassin, the million-point score and all Challenges.",
                "4. Grind Mastery Level 20 for every HITMAN 1 and HITMAN 2 location - replay each mission a few times, varying your approach.",
                "5. Finish with Perfectionist and any Silent Assassin / score achievements you still need, on the missions you know best.",
                "Tip: revealing all undiscovered areas (Dune Raider, No Stone Unturned and friends) just needs you to walk the whole map once with the map screen open - do it on a first, non-lethal exploration run of each location."
            ]
        }
    ]
};
