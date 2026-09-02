// MARVEL Cosmic Invasion Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/marvel-cosmic-invasion.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2753970 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides) and is a curatorial summary, except for a small number of
//   unreleased DLC placeholder slots explicitly flagged as such. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "marvel-cosmic-invasion-achievement-guide",
    "category": "game",
    "gameSlug": "marvel-cosmic-invasion",
    "icon": "🌟",
    "title": "MARVEL Cosmic Invasion Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in MARVEL Cosmic Invasion (10 hidden). 10 of the 35 are hidden - 6 are boss rescue/defeat markers decodable directly from their own name, and 4 are genuine secrets researched from a Steam Community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "MARVEL Cosmic Invasion has 35 Steam achievements, 10 of them hidden. The visible track covers a signature combat feat for most of the roster (Captain America's shield deflects, Phyla-Vell's teleport strikes, Cosmic Ghost Rider's blaster kills, Silver Surfer's tackles, Nova's photon blasts, Beta Ray Bill's Stormbreaker, Rocket's grenades, Phoenix's Fire Dash, Venom's smashing grab, She-Hulk's throws, Storm's electric absorption, Black Panther's parries, Wolverine's combo hits, Iron Man's Electro-Charge, and Spider-Man's swinging kick), plus Matrix rewards, Ultimate Team level, maxing a hero, Team Assists, Stage Challenges, a 200-hit combo, and completing the game solo or in local/online multiplayer.",
                "6 of the hidden achievements are boss rescue/defeat markers, decodable directly from their own apiname: rescuing Phoenix from her Dark Phoenix corruption, rescuing Venom, rescuing the mind-controlled Phyla-Vell, defeating Thanos, rescuing the Silver Surfer, and defeating Annihilus. The other 4 are genuine secrets: finding all hidden Cosmic Cubes in every stage, defeating a hero while playing as that same hero, using a Wolverine-and-Storm Team Assist specifically on Dark Phoenix, and triggering a complete 4-player Team Special Attack together.",
                "The catalog marks it difficulty 2 - this is a short, replayable arcade beat-'em-up, and the harder achievements (the 4-player Special Attack, some hero-specific combat tallies) are easier with a full co-op group than solo."
            ]
        },
        {
            "heading": "Story & Boss Rescues",
            "body": [
                "Completing the Prologue, and the 6 hidden boss-encounter achievements: rescuing Phoenix from her Dark Phoenix corruption, rescuing Venom, rescuing the mind-controlled Phyla-Vell, defeating Thanos, rescuing the Silver Surfer, and defeating Annihilus.",
                "The achievements here: The Battle Begins! (Complete the Prologue); Dark Phoenix No More! (Rescue Phoenix from her Dark Phoenix corruption.); Clearing out Cobwebs! (Rescue Venom.); Mindcontrol Meltdown! (Rescue the mind-controlled Phyla-Vell.); Mad Titan Thwarted! (Defeat Thanos.); Cosmic Rescue! (Rescue the Silver Surfer.); Bug Repelled! (Defeat Annihilus.)."
            ]
        },
        {
            "heading": "Hero Combat Feats",
            "body": [
                "Unlocking all Matrix rewards, reaching max Ultimate Team level, maxing a hero's level, and a signature combat feat for most of the roster - Captain America's shield deflects, Phyla-Vell's teleport strikes, Cosmic Ghost Rider's blaster kills, Silver Surfer's tackles, Nova's photon blasts, Beta Ray Bill's Stormbreaker, Rocket's grenades, Phoenix's Fire Dash, Venom's smashing grab, She-Hulk's throws, Storm's electric absorption, Black Panther's parries, Wolverine's combo hits, Iron Man's Electro-Charge, Spider-Man's swinging kick, Team Assists, every Stage Challenge, a 200-hit combo, and completing the game with every character.",
                "The achievements here: Matrix Maven! (Unlock all rewards from the Matrix); Ultimate Alliance! (Reached Ultimate Team Level); Maxed out Superhero! (Maxed out a Superhero's Level); Mighty Shield! (Deflect 50 projectiles with Captain America's shield); Quantum Strike! (Perform 50 successful teleport strikes as Phyla-Vell); Cosmic Ghost Blaster! (Defeat 50 enemies using Cosmic Ghost Rider's blasters); Board Bash! (Knock down 3 enemies affected by cosmic damage with a single Silver Surfer tackle); Full of Photons! (Defeat 50 enemies with Nova's photon blasts); Hammer Time! (Defeat 50 enemies with Beta Ray Bill's Stormbreaker); Fuzzy Grenadier! (Defeat 50 enemies with Rocket's grenades); Phoenix Flame! (Defeat 15 enemies with Phoenix's Fire Dash and Air Attack); Ground Pound! (Knock down 3 enemies while using Venom's smashing grab on another adversary); Knock'em down! (Hit 4 enemies while throwing a single opponent with She-Hulk); Perfect Storm! (Absorbed 10 electric attacks and dealt it back to an enemy as Storm); Panther Parry! (Perform 50 kinetic parries as Black Panther); Adamantium Fury! (Perform 100 hits combo as Wolverine); Electric Trap! (Trap 50 enemies with Iron Man's Electro-Charge attack); Swinging Spider! (Knock down 5 enemies in a single swinging kick with Spider-Man); Mighty Marvel Team-Up! (Perform 50 successful Team Assist); Galactic Challenger! (Complete all Stage Challenges); Hits Parade! (Perform a 200 Hits combo); Roll Call! (Complete the game with all characters)."
            ]
        },
        {
            "heading": "Secrets",
            "body": [
                "The 4 hidden secrets: finding every Cosmic Cube hidden in each stage, defeating a hero while playing as that same hero, a Wolverine-and-Storm Team Assist on Dark Phoenix specifically, and a complete 4-player Team Special Attack triggered together.",
                "The achievements here: Cosmic Cubist! (Find every Cosmic Cube hidden within each stage.); Variant Fighter! (Defeat a hero while playing as that same hero.); Mutants United! (Perform a Wolverine-and-Storm Team Assist on Dark Phoenix.); Special Attack Assemble! (Trigger a complete Team Special Attack together with 3 other players.)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "Completing a stage and then the full game in local or online multiplayer.",
                "The achievements here: Teamwork Tussle! (Complete a stage in Multiplayer (local or online)); Superhero Squad! (Complete the game in Multiplayer (local or online))."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story solo first, banking each hero's signature combat feat and the boss rescue/defeat achievements.",
                "2. Explore each stage thoroughly for its hidden Cosmic Cube before moving on.",
                "3. Grab 'Variant Fighter' opportunistically whenever you're playing as a hero who also appears as a boss (Venom, Phyla-Vell, Phoenix, Silver Surfer).",
                "4. Gather a full 4-player group for 'Special Attack Assemble' and the Wolverine/Storm 'Mutants United' combo on Dark Phoenix.",
                "5. Finish the game with every character, and clear it once in local or online multiplayer.",
                "Tip: for 'Special Attack Assemble', agree as a group to hold down the super-attack button and release together on a signal, rather than trying to time 4 independent button presses."
            ]
        }
    ]
};
