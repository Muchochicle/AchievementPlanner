// Turbo Overkill Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/turbo-overkill.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1328350 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "turbo-overkill-achievement-guide",
    "category": "game",
    "gameSlug": "turbo-overkill",
    "icon": "🔥",
    "title": "Turbo Overkill Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Turbo Overkill (6 hidden). Covers all 3 episodes' level completions, difficulty-tier full clears, weapon/augment collection, and a long list of level-specific secrets and trick kills. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Turbo Overkill has 67 Steam achievements and 6 are hidden. About a third are level completions across the game's 3 episodes plus the hidden episode-completion and full-game-completion achievements. The rest are difficulty-tier full clears (Virgin Blood through Murder Machine), collection goals (all Tech-Chips and Cassette Tapes, 100% kills every level, all weapons and upgrades, all augments), combat-trick achievements (specific multi-kills with the Waster, Ion Blaster, Launcher and plasma gun, Turbo-Time kills, killing a Rammer with its own Mace), and a large set of level-specific secrets and joke achievements (getting eaten by a shark or a worm, destroying arcade cabinets and haunted machines, no-hit boss and level clears, and more).",
                "The catalog marks it difficulty 3. This is a fast, over-the-top boomer shooter; the difficulty-tier full clears (especially Murder Machine) and the no-hit/no-reload challenge runs are the real skill tests, while most of the joke achievements just want you to notice and interact with the right thing.",
                "Tip: the hidden achievements are almost all just episode and full-game completions, so they'll come naturally as you play through the story."
            ]
        },
        {
            "heading": "Episode 1",
            "body": [
                "Completing Syn, Emergence, Battle Alley, Open Season, Dead Plaza, Ascension, Rooftops and Artifact-Zero, and the hidden Episode 1 completion achievement.",
                "The achievements here: First Blood (Complete Syn); Point Break (Complete Emergence); Hard Boiled (Complete Battle Alley); Police Story (Complete Open Season); Predator (Complete Dead Plaza); I AM THE LAW (Complete Ascension); The Need for Speed (Complete Rooftops); Runaway Train (Complete Artifact-Zero); I Will Have My Vengeance (Complete Episode 1.)."
            ]
        },
        {
            "heading": "Episode 2",
            "body": [
                "Completing Paradise Lost, Toxin Refinery, Teratek Factory, Outskirts, Exodus, The Wastes, Pressure Point and Napalm Blitz, and the hidden Episode 2 completion achievement.",
                "The achievements here: No Way Home (Complete Paradise Lost); The Wild Bunch (Complete Toxin Refinery); Malfunction. Need Input (Complete Teratek Factory); Commando (Complete Outskirts); Fury Road (Complete Exodus); Lethal Weapons (Complete The Wastes); Consider That A Divorce (Complete Pressure Point); Yippee-Ki-Yay (Complete Napalm Blitz); Army of Darkness (Complete Episode 2.)."
            ]
        },
        {
            "heading": "Episode 3 & Game Completion",
            "body": [
                "Completing Refactor, Scrapyard, Infestation, Night Ride, Sunset Synthetica and Terminal Eclipse, the hidden Vector-4, Teratek Showdown and Final Purge completions, completing Episode 3, and the hidden achievement for finishing the whole game.",
                "The achievements here: We Can Rebuild Him (Complete Refactor); No Time To Die (Complete Scrapyard); I'll Be Back (Complete Infestation); Silent Running (Complete Night Ride); Always Bet On Black (Complete Sunset Synthetica); A New Hope (Complete Terminal Eclipse); Metropolis (Complete Vector-4.); The Good, the Bad and the Ugly (Complete Teratek Showdown.); Endgame (Complete Final Purge.); Hasta La Vista, Baby (Complete Episode 3); Total Recall (Finish Turbo Overkill.)."
            ]
        },
        {
            "heading": "Difficulty Tiers & Collection",
            "body": [
                "Finishing every level on each difficulty tier from Virgin Blood up to Murder Machine, finding all Tech-Chips and Cassette Tapes, 100% kills on every level, defeating the Bounty Hunters and The Monstrosity, 100,000 Zhen, all weapons and upgrades on one save, and all augments on one save.",
                "The achievements here: Can I Play, Daddy? (Finish every level on Virgin Blood or higher); You Look Like A Good Joe (Finish every level on Regular Joe or higher); Taking Out The Trash (Finish every level on Street Cleaner or higher); Ultra Violence (Finish every level on Serve Me Pain or higher); Overkilled (Finish every level on Murder Machine); Keen Hunter (Find all Tech-Chips and Cassette Tapes); Kill 'Em All (Get 100% kills on every level); You're A Disease And I'm The Cure (Defeat the Bounty Hunters); Event Horizon (Defeat The Monstrosity); Fat Wads (Have over 100,000 Zhen in your current account); Groovy (Get all weapons and upgrades on a single save slot); Fully Evolved (Acquire all augments on a single save slot)."
            ]
        },
        {
            "heading": "Combat Tricks",
            "body": [
                "An 8-enemy Waster explosive kill, going beyond wave 20 and then wave 40 in Endless mode, 30 seconds off the ground, a 15-enemy Ion Blaster beam kill, killing a Rammer with its own Mace, a 5-enemy plasma-gun rocket catch, a 10-enemy Launcher rocket kill, and a 25-enemy Turbo-Time kill streak.",
                "The achievements here: Paradise Pile-up (Kill up to 8 enemies with 1 Waster explosive shot); Endless Pro 1 (Get beyond wave 20 on Endless on default settings); Endless Pro 2 (Get beyond wave 40 on Endless on default settings); Free Your Mind (Stay off the ground for 30 seconds or more); Ion Furious (Kill 15 or more enemies with 1 Ion Blaster beam); Mace Windon't (Kill a Rammer with their own Mace); Pink Mist (Fire a rocket, grab it with the plasma gun, and kill 5 or more enemies with it); Rocket Man (Kill 10 or more enemies with 1 Launcher rocket); Dodge This (Kill up to 25 enemies while in Turbo-Time)."
            ]
        },
        {
            "heading": "Level Secrets & Joke Kills",
            "body": [
                "Killing Jazz with toxic slime, a fast Artifact-Zero kill, finishing Exodus without firing your hoverbike's minigun or lasers, getting taunted by Maw at a secret terminal, a no-hit car section in Infestation, killing all Dopefish in Open Season, a no-death Wastes clear, getting eaten by Jimmy the worm, a no-hit Maw fight, a fast no-death Ripper kill, getting denied entry to the No Chainsaws club, getting eaten by a shark, a chainsaws-only Night Ride finale, a fast Vector-4 clear, destroying the haunted machine and an arcade cabinet, and a Chainsaw-leg-only skate arena clear.",
                "The achievements here: Buddy, I Think You're Slime (Kill Jazz with toxic slime); Better Things To Do (Kill Artifact-Zero in less than a minute); Pacifist, Minus Chainsaws (Finish Exodus without firing your hoverbikes minigun or lasers); Chenis (Get taunted by Maw at the secret splice terminal in Terminal Eclipse); Don't Scratch My Ride (Finish Infestation without taking a hit while driving the car); That's Dope (Kill all Dopefish in Open Season); Run The Gauntlet (Finish The Wastes on Serve Me Pain or higher without dying or reloading); Jimmy Eat You (Get eaten by Jimmy the worm in Outskirts); No Maw (Defeat Maw on Napalm Blitz without taking a single hit or reloading); Rip and Tear (Defeat Ripper in under 5 minutes without dying or reloading); Overqualified (Get denied entry to the No Chainsaws club in Battle Alley); RoboShark (Get eaten by a shark in Emergence); Skill Issue (Kill Maw and his minions in the final arena of Night Ride with chainsaws only); Gotta Go Fast (Complete Vector-4 in under 12 minutes); No More Splicing (Destroy the haunted machine on Sunset Synthetica); No More Games (Destroy the arcade cabinet in Scrapyard); Halfpipe (Kill all enemies in the skate arena in Syn by only using your Chainsaw leg)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all 3 episodes' levels in order - the hidden episode-completion achievements and Total Recall (finishing the game) unlock naturally along the way.",
                "2. Collect Tech-Chips and Cassette Tapes, get 100% kills per level, and unlock every weapon, upgrade and augment on one save slot.",
                "3. Try the combat-trick achievements as they come up - big multi-kills with the Waster, Ion Blaster, Launcher and plasma gun, and Turbo-Time kill chains.",
                "4. Once you know the levels well, replay for the level-specific secrets and joke achievements (sharks, worms, arcade cabinets, no-hit boss fights).",
                "5. Finish every level at each difficulty tier, working up to a full Murder Machine clear.",
                "Tip: the level-specific secret achievements are scattered across nearly every level - a dedicated collectibles/secrets guide pass after your first clear is the fastest way to mop them up."
            ]
        }
    ]
};
