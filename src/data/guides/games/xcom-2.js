// XCOM 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/xcom-2.json), whose 88 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   268500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "xcom-2-achievement-guide",
    "category": "game",
    "gameSlug": "xcom-2",
    "icon": "👽",
    "title": "XCOM 2 Achievement Guide",
    "summary": "A practical guide to all 88 Steam achievements in XCOM 2 (10 hidden). Covers the campaign and its hidden story-objective beats, the tactical and strategic feats, the challenge-run achievements, and the Alien Hunters, Shen's Last Gift, War of the Chosen and Tactical Legacy Pack add-ons.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "XCOM 2 has 88 Steam achievements and ten are hidden - all tied to story objectives: building Resistance Comms (Rebel Radio) and the Shadow Chamber (Codebreaker), the golden-path recoveries (Blacksite Data, Codex Brain, Psi Gate), the Avatar Autopsy (A Line Crossed), killing an Avatar (A God Falls), recovering the Forge Item (A Better Human Being), creating the Commander's Avatar for the final mission (A Final Stand), and completing the Alien Hunters DLC mission 'The Nest' (A Forbidden Experiment). The rest are open: the difficulty-tier campaign clears, tactical feats, a set of hard challenge-run achievements (beat the game without losing a soldier, by a date, using only conventional gear, in Legend Ironman), and the four add-ons.",
                "The catalog marks it roughly three playthroughs and difficulty 4 - 'Immortal Commander' (beat Legend) and 'Valhalla' (beat Commander+ Ironman) alone push several long, high-difficulty runs, and the no-loss / date-limited clears stack more. Nothing is missable: golden-path objectives always come around, and cumulative counters ('Pile 'Em Up', 'Shadow Broker') span games.",
                "Tip: plan the campaign runs so each covers several achievements at once - a Legend Ironman run without losing a soldier and finishing before the date limit can bank four or five of the hardest achievements together."
            ]
        },
        {
            "heading": "Campaign & Story",
            "body": [
                "Overthrowing the aliens on each difficulty (any / Commander / Legend), the Proving Grounds and region-contact beats, the tactical tutorial, the ten hidden golden-path objectives (Resistance Comms, Shadow Chamber, Blacksite Data, Codex Brain, Psi Gate, Avatar Autopsy, killing an Avatar), upgrading a facility, the Black Market sale, and completing a Rumor.",
                "The achievements here: Earth Avenged (Overthrow the aliens at any difficulty level); Defender of Humanity (Overthrow the aliens on Commander difficulty); Immortal Commander (Overthrow the aliens on Legend difficulty); Tinker (Build an experimental item in the Proving Grounds); Rise of the Resistance (Make contact with a region); First Blood (Complete the tactical tutorial); Rebel Radio (Story: build Resistance Comms.); Codebreaker (Story: build the Shadow Chamber.); Room to Grow (Upgrade a facility); Shadow Broker (Sell goods worth 1000 supplies to the Black Market (Can span multiple games)); Rumor Hunter (Complete a Rumor); A Horrible Truth (Story: recover the Blacksite Data.); A Grim Key (Story: recover a Codex Brain.); A Dark Doorway (Story: recover the Psi Gate.); A Line Crossed (Story: complete the Avatar Autopsy research.); A God Falls (Story: kill an Avatar.)."
            ]
        },
        {
            "heading": "Tactical Feats",
            "body": [
                "Same-turn Sectopod and ambush kills, hacking a Sectopod, a running-timer evac, weapon upgrades, the Berserker melee / Viper / Sectoid / hacked-turret kills, filling the Avenger, sabotaging a facility, fall and vehicle-explosion kills, and 500 alien kills across games.",
                "The achievements here: Meat Over Metal (Kill a Sectopod on the same turn you encounter it); Like Clockwork (Complete a successful ambush); Mechlord (Hack and take control of a Sectopod); Nick of Time (Evacuate a soldier whose bleed-out timer is still running); Locked and Loaded (Upgrade a weapon); Excalibur (Completely upgrade a beam weapon with superior grade weapon upgrades); David and Goliath (Kill a Berserker in melee combat); Breathing Room (Kill a Viper who is strangling a squadmate); Come Back To Me (Kill a Sectoid who is currently mind controlling a squadmate); Stop Hitting Yourself (Kill an enemy with a hacked turret); Shen's Legacy (Build a facility in every Avenger slot); Bring It Down (Sabotage an alien facility); Have a Nice Trip (Cause an enemy to fall to its death); Car Wrecked (Cause an enemy to die in a vehicle explosion); Exquisite Timing (Beat the game on Commander+ difficulty by July 1st (July 15th for War of the Chosen)); Who Needs Tygan? (Beat the final mission using only conventional gear); The Few and the Proud (Beat the game on Commander+ difficulty without buying a Squad Size upgrade); The Untouchables (Beat the game on Commander+ without losing a soldier); Pile 'Em Up (Kill 500 aliens. (does not have to be in same game))."
            ]
        },
        {
            "heading": "Strategy & Challenge Runs",
            "body": [
                "A multiplayer win, the date-limited clear, the conventional-gear final mission, the no-Squad-Size and no-soldier-lost Commander+ clears, same-class squad and low-casualty Retaliation wins, tier-two hacks, every heavy weapon, radio relays on every continent, all continent bonuses, a Rookies-only mission, the Skulljack feats, the two hidden story beats (Forge Item, Commander's Avatar), a PCS upgrade, a triple-kill turn, and the Legend Ironman clear.",
                "The achievements here: The Most Dangerous Game (Win a multiplayer match.); Overpowered (Beat a mission on Commander+ with a squad composed entirely of soldiers of the same class (but not Rookie)); Heroes of the Resistance (Beat a Retaliation mission with no more than 3 civilian deaths); Cyberlord (Earn a second tier hack reward); Heavy Metal (Kill an enemy with every heavy weapon in the game (Doesn't have to be in the same game)); The Sun Never Sets (Build a radio relay on every continent); Global Resistance (Get all of the continent bonuses available in a single campaign); Beginner's Luck (Beat a mission in June or later using only Rookies); Brutal Collection (Skulljack each different type of ADVENT soldier (does not have to be in same game)); With Extreme Prejudice (Skulljack an ADVENT Officer); A Better Human Being (Story: recover the Forge Item.); A Final Stand (Story: create the Commander's Avatar and begin the final mission, Operation Leviathan.); Harder, Better, Faster, Stronger (Apply a PCS upgrade to a soldier); Now Am I Become Death (Kill 3 enemies in a single turn, with a single soldier, without explosives); Valhalla (Beat the game on Commander+ difficulty in Ironman mode)."
            ]
        },
        {
            "heading": "Alien Hunters",
            "body": [
                "The Alien Hunters add-on - completing 'The Nest', killing the Viper / Berserker / Archon Rulers and all Rulers in one game, buying the final Hunter Weapons, and the ruler-armour ability feats.",
                "The achievements here: A Forbidden Experiment (Complete the Alien Hunters add-on narrative mission - investigate the Abandoned Research Facility ('The Nest').); Viper Vanquisher (Kill the Viper Ruler); Berserker Breaker (Kill the Berserker Ruler); Archon Annihilator (Kill the Archon Ruler); Kingslayer (Kill all alien rulers in a single game); Deadly Arsenal (Purchase all of the final tier Hunter Weapons); Now I Am The Master (Use all ruler armor abilities in a single mission); Enemy Adopted (Use a ruler armor ability against an alien ruler); Regicide (Kill an alien ruler the first time you encounter it); Not Throwing Away My Shot (Kill an alien ruler while it attempts to escape)."
            ]
        },
        {
            "heading": "Shen's Last Gift",
            "body": [
                "The Shen's Last Gift add-on - beating the Lost Towers mission and the SPARK feats (promote a SPARK to Champion, three SPARKs in a squad, a SPARK killing an Avatar or a robot, a SPARK surviving on low health, fully outfitting one, the Overdrive triple-hit, building one, and killing a primed Derelict MEC).",
                "The achievements here: A Torch Passed (Beat the Lost Towers mission); Our New Overlords (Promote a SPARK unit to Champion rank); Rise of the Robots (Complete a mission with three or more SPARK units in the squad); Matter Over Mind (Defeat an Avatar with a SPARK unit); Running on Fumes (A SPARK unit survives a mission it started with less than half health); Bells and Whistles (Outfit a SPARK unit with the highest tier weaponry and armor); Always be Shooting (Hit three shots on a single turn with a SPARK unit after using its Overdrive ability); Axles to Axles, Bolts to Bolts (Defeat a robotic enemy with a SPARK unit); Just Like Dad Used To Make (Build a SPARK unit); Make ‘em go Boom (Kill an enemy primed Derelict MEC before it can self-destruct)."
            ]
        },
        {
            "heading": "War of the Chosen & Tactical Legacy Pack",
            "body": [
                "The War of the Chosen expansion (the Lost and Abandoned mission, defeating a Chosen, the Lost / Reaper / Templar / Skirmisher feats, a level-3 bond, an all-Tired mission, High influence with all factions, rescuing a captured soldier) and the Tactical Legacy Pack (the four gold-medal legacy operations, a random one, a Skirmish mission, a Local Challenge, and a campaign with Legacy content).",
                "The achievements here: A New Alliance (Complete the Lost and Abandoned mission); A Rival Silenced (Permanently defeat one of the Chosen); Zombies in a Barrel (Get 15 Headshots against Lost in a single turn); Born in the Darkness (Get four kills from Shadow mode with a Reaper in a single mission); Circle of Psi (Raise a Templar to maximum Focus level, spend it all, and reach the max again in a single mission); Can't Stop the Fighting (Perform three offensive actions against the same target with a Skirmisher in a single turn); It Takes Two (Form a level 3 bond between two soldiers); Weary Warriors (Complete a mission with all Tired soldiers and no casualties); Fully Operational Resistance (Raise XCOM's influence with all three factions to High in a single game); No One Left Behind (Rescue a soldier who was captured by the Chosen); Deja Vu All Over Again (Complete the 'Blast From the Past' legacy operation with a gold medal); Bug Fisherman (Complete the 'It Came From the Sea' legacy operation with a gold medal); Fully Operational Battlestation (Complete the 'Avenger Assemble' legacy operation with a gold medal); The Gang's All Here (Complete 'The Lazarus Project' legacy operation with a gold medal); Campaign Microcosm (Complete a random legacy operation); Honorary Level Designer (Complete a Skirmish Mission); Playing For Score (Complete a Local Challenge); There's A Future In The Past (Complete a single player campaign with Tactical Legacy Pack content)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a first campaign on Veteran to learn the golden path - this unlocks all ten hidden story objectives and 'Earth Avenged'.",
                "2. Mop up the tactical feats (Sectopod, Berserker, Viper, fall and explosion kills) across that run and the next.",
                "3. Do a Commander run aimed at the stacked challenge achievements - no soldier lost, before the date limit, no Squad Size upgrade.",
                "4. Play the Alien Hunters and Shen's Last Gift add-ons and their feats.",
                "5. Do a Legend Ironman run for 'Immortal Commander' and 'Valhalla', then the War of the Chosen and Tactical Legacy Pack content.",
                "Tip: 'The Untouchables' (no soldier lost) is far easier with Alien Hunters content off or on a lower difficulty - overwatch traps, Mimic Beacons and never dashing into the fog do most of the work."
            ]
        }
    ]
};
