// PAYDAY: The Heist Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/payday-the-heist.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   24240 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "payday-the-heist-achievement-guide",
    "category": "game",
    "gameSlug": "payday-the-heist",
    "icon": "🎭",
    "title": "PAYDAY: The Heist Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in PAYDAY: The Heist - none are hidden. Covers the base heist challenges, the skill-tree and progression feats, the OVERKILL 145+ difficulty clears and level milestones, and the Counterfeit, Undercover and No Mercy DLC heists.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "PAYDAY: The Heist has 56 Steam achievements and none of them are hidden. Almost all are heist-specific challenges - beat a specific heist on a specific difficulty under a self-imposed restriction (no downs, no kills, within a time limit, disabling all cameras, taking all the loot). Most descriptions note that the challenge must be done on a heist played from the start, not joined mid-game. A handful are progression feats (level up in each skill tree under a condition), and the endgame block is reaching level 145, the OVERKILL 145+ clears of every heist, and the \"golden\" and \"presidential\" achievements. Six more come from the Counterfeit, Undercover and No Mercy DLC heists.",
                "Nothing is missable - every heist and difficulty is replayable and the challenges have unlimited attempts. This is a hard completion because the OVERKILL 145+ clears and several no-death / no-kill challenges are genuinely demanding four-player co-op tasks.",
                "Tip: nearly every challenge needs a coordinated four-player crew that has played the heist from the start - find a dedicated group rather than pubbing, and run the restricted-condition challenges deliberately one heist at a time."
            ]
        },
        {
            "heading": "Core Heist Challenges (Part 1)",
            "body": [
                "The early heist challenges - hostage trades, the Bulldozer and Heavy SWAT feats, custody and last-alive clears, and the Slaughterhouse, Green Bridge, First World Bank, Panic Room and Diamond Heist restriction challenges.",
                "The achievements here: Diplomatic (Perform a hostage trade.); Cheney? (Defeat a Bulldozer with a shotgun.); Intimidating (Get a Heavy SWAT to give up.); Left for dead (Finish a heist in custody while all your team mates are alive. (4 teammates).); Blood in, blood out (Trade all the butchers in SLAUGHTERHOUSE. To complete this challenge, you will have to have played the heist from the start.); A bridge too far! (Complete the GREEN BRIDGE on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start.); Dodge this! (Beat a heist on normal difficulty or above, having killed a Bulldozer without taking damage from any Bulldozer. To complete this challenge, you will have to have played the heist from the start.); But how? (Get the armored car to drop without shooting at it in SLAUGHTERHOUSE. To complete this challenge, you will have to have played the heist from the start.); Last man standing (Beat a heist after having been the only one alive. (4 teammates).); Windowlicker (Defeat a law enforcer planting C4 in FIRST WORLD BANK on hard difficulty or above. To complete this challenge, you will have to have played the heist from the start.); Civil disobedience (Defeat 100 law enforcers in a single heist.); Are there more than two? (Find ten money bundles in PANIC ROOM.); You can run but you can't hide (In PANIC ROOM, take the key from Chavez within the first 45 seconds of starting the mission. To complete this challenge, you will have to have played the heist from the start.); Shinobi (Bypassing all 3 consoles before raising the alarm, beat DIAMOND HEIST on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start.); Are those the blue ones? (Steal all the sapphires in DIAMOND HEIST on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start.); Gold digger (Beat SLAUGHTERHOUSE within 15 minutes, taking all the gold. To complete this challenge, you will have to have played the heist from the start.); Stand together (Beat HEAT STREET on normal difficulty or above without anyone getting downed. To complete this challenge, you will have to have played the heist from the start.); Quick draw (In PANIC ROOM, kill all armed thugs in and around the apartment building within 60 seconds of you and your crew drawing your weapons. To complete this challenge, you will have to have played the heist from the start.)."
            ]
        },
        {
            "heading": "Core Heist Challenges (Part 2) & Progression",
            "body": [
                "More heist challenges - Diamond Heist trip-mine and callback feats, one billion dollars, the Heat Street accuracy clear, the all-heists-no-trade run, the Noob Lube crew challenge, and the skill-tree level-up feats (Assault, Sharpshooter, Support), shout-outs and the Christmas present.",
                "The achievements here: No photos (Destroy all the cameras in FIRST WORLD BANK within 10 seconds of drawing your weapons. To complete this challenge, you will have to have played the heist from the start.); Hot lava (Don't let any law enforcers reach the graffiti on the center of the roof in PANIC ROOM from the SECURE THE ROOF objective until the ESCAPE objective on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start.); Federal crime (Defeat 25 FBI agents in a row.); One shot, one kill - repeat (Get 30 kills using 30 shots, using only the M308 Rifle.); Bomb man (In DIAMOND HEIST, defeat all twelve Patrol Guards using only trip mines. To complete this challenge, you will have to have played the heist from the start.); Are you ready yet? (In DIAMOND HEIST, get Bain to come back for you at least 7 times on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start.); PAYDAY (Aquire one billion dollars in total cash. One. BILLION. Dollars.); Easy street (Beat HEAT STREET on OVERKILL difficulty, with your group accuracy being at 60% or higher. To complete this challenge, everyone in your crew will have to have played the heist from the start.); I pushed the button and lived! (In DIAMOND HEIST, get the big diamond and escape on OVERKILL difficulty with you and all your team mates alive. To complete this challenge, you will have to have played the heist from the start.); Noob herder (Beat any heist on OVERKILL difficulty with three other players who are all using the Noob Lube perk. To complete this challenge, you will have to have played the heist from the start.); Don't lose face (Beat all heists on OVERKILL difficulty without anyone getting traded from custody. To complete this challenge, you will have to have played the heist from the start.); Eagle eyes (Point out a special enemy using the \"shout out\" command.); I ain't afraid no more (Gain a level in the Assault tree during an assault.); Crack-bang (Gain a level in the Sharpshooter tree with your last kill being a Sniper.); Lay on hands (Gain a level in the Support tree while reviving a teammate.); Darkness (On GREEN BRIDGE, destroy all the lights in the main scaffolding tower. To complete this challenge, you will have to have played the heist from the start.); Last Christmas (In multiplayer, find a Christmas present in any heist.)."
            ]
        },
        {
            "heading": "OVERKILL 145+ & Level Milestones",
            "body": [
                "Reaching level 145 for the presidential masks, the \"golden\" all-heists OVERKILL 145+ clear, and the individual OVERKILL 145+ clears of First World Bank, Heat Street, Green Bridge, Panic Room, Slaughterhouse and Diamond Heist.",
                "The achievements here: You are GOLDEN! OVERKILL salutes you! (Beat all heists on OVERKILL 145+ difficulty and show them all you are on top! Completing this will make you golden!); Four more years (Reach level 145. This gives you the presidential masks for further campaigning.); Bank on me (Beat FIRST WORLD BANK on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.); Hills Street Blues (Beat HEAT STREET on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.); Beat the shield (Beat GREEN BRIDGE on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.); Brush with death (Beat PANIC ROOM on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.); Lots of pigs, but no pigs (Beat SLAUGHTERHOUSE on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.); Bad code (Beat DIAMOND HEIST on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start.)."
            ]
        },
        {
            "heading": "DLC Heists: Counterfeit, Undercover & No Mercy",
            "body": [
                "The Counterfeit (no-hostage-loss, all-C4-defused, pacifist), Undercover (GL40-only, 20 planks) and No Mercy (no-alarm, correct wire, all doors sawed, fast power) challenges, their OVERKILL 145+ clears, and the OVERDRILL secret.",
                "The achievements here: Crowd control (Beat COUNTERFEIT without letting any hostage escape or die. To complete this challenge, you will have to have played the heist from the start.); Quick hands (On COUNTERFEIT, manage to defuse all C4 charges.); Pacifist (Beat COUNTERFEIT on hard difficulty or above without killing any law enforcers or civilians. To complete this challenge, everyone in your crew will have to have played the heist from the start.); Blow-out (Beat UNDERCOVER with everyone in the crew only using the GL40. To complete this challenge, everyone in your crew will have to have played the heist from the start. Using melee does not count towards this challenge!); The Saviour (On UNDERCOVER, place 20 planks by yourself on windows, vents or fences.); Detective Gadget (Beat any heist using the STRYK Pistol, AK Rifle, GL40 Grenade Launcher, Toolkit upgrade, Sentry Gun equipment and Big Game Hunters crew bonus. To complete this challenge, you will have to have played the heist from the start.); Under Pressure (Complete COUNTERFEIT on OVERKILL 145+ difficulty.); In for a dime, in for a dollar (Complete UNDERCOVER on OVERKILL 145+ difficulty.); Don't panic (Complete NO MERCY on hard or OVERKILL without any civilian raising the alarm. To complete this challenge, you will have to have played the heist from the start.); ...or was it the blue one? (In NO MERCY, cut the correct wire opening the ICU door security system. To complete this challenge, you will have to have played the heist from the start.); That's the wrong door, again! (Complete NO MERCY on OVERKILL difficulty, having sawed open all three ICU security doors. To complete this challenge, you will have to have played the heist from the start.); Afraid of the dark (Beat NO MERCY on hard or above, getting the power back up within 5 seconds of it being shut down. To complete this challenge, you will have to have played the heist from the start.); OVERDRILL ( Solve the PAYDAY SECRET on any difficulty with any mask and gain access to the OVERVAULT. To complete this challenge, you will have to have played the heist from the start.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Build a regular four-player crew - most achievements require everyone to have played the heist from the start.",
                "2. Work through the base heist challenges one heist at a time, doing the restricted-condition runs deliberately.",
                "3. Level all three skill trees, catching the level-up-during-X feats as they come.",
                "4. Grind to level 145, then do the individual OVERKILL 145+ heist clears and finally the \"golden\" all-heists clear.",
                "5. Run the Counterfeit, Undercover and No Mercy DLC challenges and, if your crew is up for it, the OVERDRILL secret.",
                "Tip: the no-kill \"Pacifist\" and no-down challenges are easiest with everyone running a stealth-and-melee loadout and one player designated to handle any forced engagements while the others stay hidden."
            ]
        }
    ]
};
