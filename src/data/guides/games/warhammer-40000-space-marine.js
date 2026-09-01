// Warhammer 40,000: Space Marine Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/warhammer-40000-space-marine.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   55150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "warhammer-40000-space-marine-achievement-guide",
    "category": "game",
    "gameSlug": "warhammer-40000-space-marine",
    "icon": "⚔",
    "title": "Warhammer 40,000: Space Marine Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Warhammer 40,000: Space Marine (9 hidden). Covers the single-player campaign story beats, the whole-game and Part 1 Hard-difficulty clears, the large combat-volume and skill kill counts, the weapon-restriction chapter runs, the Servo Skull collectibles, the multiplayer level and challenge grind, and the Exterminatus and Chaos Invasion DLC modes. Nine of the achievements are hidden - the campaign progress markers and the Chaos Space Marine kill count - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Warhammer 40,000: Space Marine has 60 Steam achievements and 9 are hidden. The hidden ones are the campaign progress markers - reaching the crashed Rok, reuniting with your squad, destroying the Orbital Gun, retrieving the Power Source, firing the Psychic Scourge, killing Warboss Grimskull, destroying the Orbital Spire with the Invictus, and killing Daemon Prince Nemeroth - plus 'Die, Heretics' for killing 50 Chaos Space Marines. Everything visible is combat-volume kill counts (100, 2500, 500 melee, 500 ranged, 250 exotic), skill kills (headshots, charges, ground pounds, executions, Fury), the two Hard-difficulty clears, four weapon-restriction chapter runs, the Servo Skull collectibles, a large multiplayer grind (character levels to 40, every class and race, weapon and armor challenges, 40,000 total kills), and the Exterminatus and Chaos Invasion DLC modes.",
                "The catalog marks it difficulty 4. 'None Can Stand Before You' (whole game on Hard) and 'The Emperor Protects' (Part 1 on Hard in one session with no deaths or restarts) are the campaign challenge; 'True Son of the Emperor' (40,000 kills across all modes) and the level-40 multiplayer grind are the long haul, and the Chaos Invasion co-op achievements need other players.",
                "Tip: do the four weapon-restriction chapter runs ('Master of Sword and Gun', 'Burn Them All', etc.) on your Hard playthrough using chapter select - each one only needs a single chapter, so pick a short one and they stack with everything else you are already killing."
            ]
        },
        {
            "heading": "Campaign & Combat Volume",
            "body": [
                "The kill-count milestones (100 and 2500 enemies, 500 melee, 500 ranged, 250 exotic, 50 Chaos Space Marines, 25 Ork Nobs, 10 'Ard Boyz, 75 executions), reaching the crashed Rok, headshot counts, charge and ground-pound kills, ranged and melee Fury feats, the whole-game and Part 1 Hard clears, and winning 10 Nob struggles.",
                "The achievements here: The Might of the Righteous (Kill 100 enemies.); Success is Measured in Blood (Kill 500 enemies using Melee weapons.); Angel of Death (Kill 500 enemies using Ranged weapons.); Visible, Violent Death (Kill 2500 enemies.); Firepower (Kill 250 enemies using Exotic weapons.); The Bigger They Are... (Kill 25 Ork Nobs.); Not So Tough (Kill 10 'Ard Boyz.); Die, Heretics (Kill 50 Chaos Space Marines.); Glorious Slaughter (Kill 75 enemies using Executions.); Into the Breach (Fight your way to the crashed Ork Rok (Chapter 2). Story-related, unmissable.); Put Them Down (Get 100 Headshots.); Master of the Clean Kill (Get 250 Headshots.); Shock & Awe (Kill 150 enemies using the Charge attack.); Death from Above (Kill 25 enemies with Ground Pound.); The Emperor's Marksman (Kill 10 enemies in a row in a single Ranged Fury activation.); Feel My Wrath (Kill 250 enemies using Melee Fury attacks.); The Emperor Protects (Complete Part 1 of the game on Hard difficulty in a single session without dying or restarting.); None Can Stand Before You (Complete the entire game on Hard difficulty.); Nob Down (Win 10 struggles against the Ork Nob.)."
            ]
        },
        {
            "heading": "Restrictions, Story Beats & Collectibles",
            "body": [
                "Ten armor challenges, the multi-kill feats (frag grenade, Stalker-Pattern bolter, Vengeance Launcher chain), the four weapon-restriction chapter runs, the campaign story markers (reunite with your squad, the Orbital Gun, the Power Source, the Psychic Scourge, Warboss Grimskull, the Orbital Spire, Daemon Prince Nemeroth), and the Servo Skull collections.",
                "The achievements here: Armored in Glory (Complete 10 armor challenges.); Blast Radius (Multi-kill -- 5 enemies with 1 Frag grenade.); Precision Killer (Multi-kill -- 2 enemies with 1 Stalker-Pattern bolter shot.); Chain of Death (Multi-kill -- Detonate a chain of 5 consecutive Vengeance Launcher rounds, killing 10 enemies.); Master of Sword and Gun (Complete a Chapter of the single-player campaign using only the Bolt Pistol and Chainsword.); Burn Them All (Complete a Chapter of the single-player campaign using only Plasma weapons.); Brute Force...Unleashed   (Complete a Chapter of the single-player game using only the Vengeance Launcher and Power Axe.); Finesse and Fury (Complete a Chapter of the single-player game using only Stalker-Pattern Bolter and Chainsword.); Command Squad (Reunite with your Space Marine brothers (Chapter 2). Story-related, unmissable.); Silence the Cannon (Destroy the Orbital Gun (Chapter 3). Story-related, unmissable.); You Must Carry It (Retrieve the Power Source (Chapter 6). Story-related, unmissable.); We Take Our Chances (Fire the Psychic Scourge (Chapter 11). Story-related, unmissable.); But I Am Finished With You (Kill Warboss Grimskull once and for all. Story-related, unmissable.); Hammer of the Imperium (Use the Invictus Titan to destroy the Orbital Spire. Story-related, unmissable.); Here, At the End of All Things (Kill Daemon Prince Nemeroth, the final boss. Story-related, unmissable.); Lexicanum (Collect 10 Servo Skulls.); Librarian of Macragge (Collect all Servo Skulls.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "Multiplayer character levels 10 / 20 / 30 / 40, playing as both races and every class (and 10 games with each), weapon and armor challenges, Seize Ground defence kills, an Annihilation 10:1 K/D game, fully customizing a Space Marine and a Chaos Marine, 50 mid-air kills, and 40,000 total kills across all modes.",
                "The achievements here: Battle Brother (Get a Multiplayer character to Lvl 10.); Veteran (Get a Multiplayer character to Lvl 20.); Captain (Get a Multiplayer character to Lvl 30.); Chapter Master (Get a Multiplayer character to Lvl 40.); Warrior of Darkness and Light (Play 10 Multiplayer games as Space Marine and 10 Multiplayer games as Chaos Marine.); Shapeshifter (Play each class in Multiplayer.); Jack of All Trades (Play 10 Multiplayer games using each class.); Master of Arms (Complete 5 weapon challenges.); Keeper of the Armory (Complete all the weapon challenges.); Defender (Kill 25 opponents who are capturing your Control Point in Seize Ground.); Devastation! (Have 10 times more kills than deaths in a single game of Annihilation.); Master Crafted (Fully customize a Space Marine and a Chaos Space Marine character.); Down to Earth (Kill 50 Assault Marines/Raptors in mid-air.); True Son of the Emperor (Kill 40,000 enemies in the game (all game modes combined).)."
            ]
        },
        {
            "heading": "Exterminatus & Chaos Invasion",
            "body": [
                "The Chaos Invasion DLC: completing Arenas 1-3, the full mission, the bonus wave, a no-lives Arena, three challenges in one Arena, a 270,000+ team score, a public co-op game, and the Exterminatus 'Sector Cleared' for a Kalkys Facility Escape or Hab Center Assault.",
                "The achievements here: Death to the False Emperor (Complete Chaos Invasion Arena 1.); Blood for the Blood God (Complete Chaos Invasion Arena 2.); Skulls for the Skull Throne (Complete Chaos Invasion Arena 3.); Let the Galaxy Burn (Complete the Chaos Invasion mission.); Let the Heavens Bleed (Defeat the Chaos Invasion bonus wave.); Frugal Spenders (Complete a Chaos Invasion Arena without your team using any lives.); Kill, for the Sake of Killing (Complete 3 challenges in one Chaos Invasion Arena.); Glory to the Dark Gods! (Achieve a team score of higher than 270,000 in the Chaos Invasion mission.); Heretic (Complete a public Co-op game in the Chaos Invasion mission.); Sector Cleared (Successfully complete a Space Marine Exterminatus Arena (Kalkys Facility Escape or Hab Center Assault).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Hard for 'None Can Stand Before You', taking 'The Emperor Protects' (Part 1, no deaths/restarts) on the same run.",
                "2. Use chapter select for the four weapon-restriction runs and the Servo Skull collectibles.",
                "3. Grind the combat-volume and skill kill counts across campaign replays and Exterminatus.",
                "4. Play multiplayer to level 40, covering every class and race and the weapon/armor challenges along the way.",
                "5. Do the Chaos Invasion and Exterminatus DLC modes, ideally in co-op for the public-game achievements.",
                "Tip: 'True Son of the Emperor' (40,000 kills across all modes) is the true long-haul goal - it accumulates from campaign, Exterminatus and multiplayer combined, so just keep playing whatever mode you enjoy and it will finish itself."
            ]
        }
    ]
};
