// Gears Tactics Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gears-tactics.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1184050 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gears-tactics-achievement-guide",
    "category": "game",
    "gameSlug": "gears-tactics",
    "icon": "⚙️",
    "title": "Gears Tactics Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Gears Tactics (6 hidden). The 6 hidden achievements are spoiler-free campaign story-mission markers (mostly Ukkon boss encounters). Sourced from XboxAchievements and the Gears of War Wiki.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Gears Tactics has 61 Steam achievements, 6 of them hidden. Gears Tactics is a turn-based tactics prequel to the Gears of War series. The visible achievements are the campaign Act completions (on each difficulty), the enormous kill totals (10,000 Grubs), the Veteran and no-loss mission challenges, the four side-mission types, weapon and skill upgrades, a long list of single-turn combat set-pieces, and the free Jacked game mode.",
                "The 6 hidden achievements are story-mission markers - each unlocks on a key campaign beat (mostly boss encounters against Ukkon), and their descriptions are held back as spoilers. They are described here spoiler-free.",
                "The catalog marks it difficulty 4 and recommends 2 playthroughs: Savior of Vasgar (all Acts on Insane) and Immortal Legion (the campaign on Insane) are the hardest asks, and the Jacked mode is a separate campaign layer."
            ]
        },
        {
            "heading": "Campaign & Story",
            "body": [
                "The three Campaign Act completions on each difficulty (any, Experienced, Insane), the six Steam-hidden story-mission markers, and the special campaign clears (Ironman, no-unit-loss, damage-from-one-source, Insane-with-restrictions).",
                "The achievements here: World on Fire (Story progress marker - unlocks on a key campaign encounter, described spoiler-free); Hell of a shot (Story progress marker - unlocks on a key campaign encounter, described spoiler-free); The bigger they are, the harder they fall (Story progress marker - unlocks on a key campaign boss encounter, described spoiler-free); Maybe too much spine... (Story progress marker - unlocks on a key campaign encounter, described spoiler-free); Broken hand, broken heart (Story progress marker - unlocks on a key late-campaign encounter, described spoiler-free); Dead men tell no tales (Story progress marker - unlocks on the final campaign encounter, described spoiler-free); Champion of Vasgar (Complete all Campaign Acts (any difficulty)); Hero of Vasgar (Complete all Campaign Acts on Experienced or Insane difficulty); Savior of Vasgar (Complete all Campaign Acts on Insane difficulty); I am Ironman (Complete the Campaign on any difficulty with Ironman mode enabled); The path of the righteous man (Complete a mission without any of your units dying or being downed); High Noon (Complete a mission by only dealing damage with Snub Pistols); Ain't no one like me, 'cept me! (Complete a mission on Insane difficulty with a single soldier); Immortal Legion (Complete the campaign on Insane difficulty without a single unit dying)."
            ]
        },
        {
            "heading": "Kills & Combat Feats",
            "body": [
                "The kill totals (10 / 1,000 / 10,000 enemies), Ticker explosion kills, chainsaw executions, and the many single-turn set-pieces - Overwatch multi-kills, Torque Bow and boomshot kills, Emergence Hole closes, Breach chains, and the rest.",
                "The achievements here: Grubslayer (Kill 10 enemies); Grubslaughter (Kill 1000 enemies); Grubpocalypse (Kill 10000 enemies); Tick Tick Tick... (Kill an enemy with a Ticker explosion); Boom! (Kill 100 enemies with Ticker explosions); Tactics! (Perform a chainsaw execution); I never miss (Hit a target with 10% or less chance to hit); Happy Killmore (Close an Emergence Hole by kicking a Ticker into it); I've got your 'BOOM' right here! (Kill a Boomer with a boomshot); BOGO (Kill an enemy, AND an enemy behind it, with a single burst of bullets); Trick Shot (Get 4 kills with a single Torque Bow shot); Demolition Expert (Close an Emergence Hole before any enemies have emerged); Check out the big brain on Brett! (Kill 5 enemies with a single Overwatch action); Piñata (Kill a single unit that has taken damage from each Gear on the mission); Snafu (Heal an enemy unit with a Stim Grenade); Aw man, I shot Marvin in the face (Down a Gear with friendly fire); Oh I'm sorry did I break your concentration? (Interrupt an enemy Overwatch with a Disabling Shot from the Snub Pistol); Backdoor Man (Kill 6 targets with a single Rampage, after coming out of Cloak); Three Count (Hit with 3 Explosive Shots while having maximum Anchored bonus in a single turn); Great vengeance and furious anger... (In one turn, Breach 3 enemies; kill one of each with Precision Shot, Reckless Shot and Double Shot)."
            ]
        },
        {
            "heading": "Skills, Side Missions & Loadout",
            "body": [
                "The Veteran-mission challenges, the four side-mission types (Sabotage, Scavenger Run, Control, Rescue), Legendary weapon and Supreme mod upgrades, and the individual skill-combo feats.",
                "The achievements here: I could do this all day (Complete 20 Veteran Missions); God-like (Complete 20 missions without any of your units dying or being downed); Immortal (Complete 100 missions without any of your units dying or being downed); Smash! (Complete a Sabotage side mission); Fortuna Audaces Sequitur (Complete a Scavenger Run side mission); Everyone stay cool, this is a robbery! (Complete a Control side mission); Stronger Together (Complete a Rescue side mission); We’re in the endgame now (Complete a Veteran side mission); Legen (wait for it)… (Upgrade one primary weapon with all Legendary mods); …dary! (Upgrade each Hero's primary weapon with all Legendary mods); We should have shotguns for this... (Complete a Veteran Mission with all Scout units); Trouble in Paradise (Empower a Teamworked unit and gain 3 AP from their kills); Midnight Hour (Gain AP from the Avenger skill, then use a Rage shot to kill the unit that caused your AP gain); Up Up Down Down (Use Alpha and Omega twice each in the same turn); The Big Ending (Revive a Scout with Stim ability and then use that Scout to kill at least 5 enemies with Rampage); Untouchable (Win a Veteran Mission without taking a point of damage (Jacked game mode only)); Suit Up! (Equip at least one weapon with all Supreme Weapon Mods (Jacked game mode only))."
            ]
        },
        {
            "heading": "Jacked Game Mode",
            "body": [
                "The free Jacked game-mode layer - using Jack to rescue tortured soldiers, hijacking enemies, the Brumak no-damage fight, and the Jacked-specific squad and stealth feats.",
                "The achievements here: Zed's dead, baby. (Kill one or more of each Deviant enemy (Jacked game mode only)); For he is truly his brother's keeper... (Use Jack to rescue both soldiers from torture pods on a Rescue mission (Jacked game mode only)); Number 5 is alive! (Complete a mission with Jack (Jacked game mode only)); One For All! (Have four squad members with the Jacked status effect at the same time (Jacked game mode only)); Jack and the Beanstalk (Defeat the Brumak in Act 1 Chapter 6 without Jack taking damage (Jacked game mode only)); All For One! (Apply three or more stacks of Wingman on a single ally (Jacked game mode only)); You can't see me! (Gain a Supply with a Hidden Jack and no other allies in the Supply Point (Jacked game mode only)); I've done the whole mind control thing... (Use Jack to HiJack each non-boss enemy at least once (Jacked game mode only)); Seriously Jacked (Earn all \"Jacked game mode\" achievements)."
            ]
        },
        {
            "heading": "Completion",
            "body": [
                "The catch-all that requires several of the hardest achievements (Grubpocalypse, Immortal Legion, I Could Do This All Day, Suit Up).",
                "The achievements here: Seriously Tactical (Earn Grubpocalypse, Immortal Legion, I Could Do This All Day and Boom!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign once on Experienced, banking the story markers and the four side-mission types, and using varied skills so the combat set-pieces tick over.",
                "2. Keep upgrading a Hero's primary weapon toward a Legendary set, and try the Ironman and no-unit-loss modifiers when you feel confident.",
                "3. Play the Jacked game mode for its own campaign layer and Jack-focused achievements.",
                "4. Do a full Insane run for Savior of Vasgar and Immortal Legion - the hardest content in the game.",
                "5. Mop up the remaining single-turn set-pieces (BOGO, Trick Shot, the Breach chains) with save-scumming from mission start.",
                "Tip: most of the fiddly one-turn feats (4 kills with a Torque Bow shot, 5 Overwatch kills) are far easier to set up in the early Veteran missions where you can quit and retry the whole mission cheaply."
            ]
        }
    ]
};
