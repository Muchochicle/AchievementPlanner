// Assassin's Creed Unity Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-unity.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   289650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-unity-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-unity",
    "icon": "🇫🇷",
    "title": "Assassin's Creed Unity Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in Assassin's Creed Unity - none are hidden. Covers the story memory sequences, the Paris collectibles and progression, the combat, parkour and Café Théâtre feats, the co-op and Heist missions, and the Dead Kings DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed Unity has 57 Steam achievements and none of them are hidden. The story is the prologue plus twelve memory sequences and the Rift missions. The bulk of the rest is Revolutionary Paris: synchronize all viewpoints, open every chest, collect all Cockades, 100% Versailles, solve Murder Mysteries and Nostradamus Enigmas, renovate the Café Théâtre and Social Clubs, and hit the assassination, money and crowd-event totals. A dozen are co-op and Heist mission achievements, and seven come from the Dead Kings DLC set in Franciade.",
                "Nothing is missable - every sequence, collectible and co-op mission can be replayed after the credits, and all counters are cumulative.",
                "Tip: the co-op and Heist achievements (\"Visited Once\", \"Share the Wealth\", sync kills, revives) are best knocked out in a single evening with a group or with matchmaking - solo they are slow and some are far harder."
            ]
        },
        {
            "heading": "Story: Memory Sequences",
            "body": [
                "Completing the Prologue, each of the twelve memory sequences, and all Rift missions.",
                "The achievements here: A Long Time Ago (Complete the Prologue.); Youth In Versailles (Complete Memory Sequence 1.); Rebirth (Complete Memory Sequence 2.); First Blood (Complete Memory Sequence 3.); La Cour des Miracles (Complete Memory Sequence 4.); The Root Of Evil (Complete Memory Sequence 5.); Secret Meeting (Complete Memory Sequence 6.); Mystery Solved (Complete Memory Sequence 7.); Bloody Trail (Complete Memory Sequence 8.); Road To Starvation (Complete Memory Sequence 9.); Love And Duty (Complete Memory Sequence 10.); Down But Not Out (Complete Memory Sequence 11.); Curtain Call (Complete Memory Sequence 12.); No Man's Land (Complete all Rift missions.)."
            ]
        },
        {
            "heading": "Paris: Collectibles, Progression & Co-op",
            "body": [
                "The open-world goals - data bonuses, freeing trapped Assassins, 100 assassinations, mission challenges, Social Clubs, air assassinations, the Medieval Armor, co-op missions, training missions, chests, 50,000 livres, viewpoints, crowd events, a Murder Mystery, 100% Versailles, a Nostradamus Enigma and all Cockades.",
                "The achievements here: Needs More Data (Earn 3 Data Bonuses); Thawed (Free a total of 10 trapped Assassins.); Blade In The Crowd (Assassinate 100 enemies.); I Want It All (Complete all Single Player mission challenges.); Networking (Renovate your first Social Club.); An Old Internet Meme (Renovate all the Social Clubs and complete all the Social Club missions.); Falling From The Sky (Perform 10 air assassinations.); From the Past (Unlock the Medieval Armor in the Café Théâtre.); The Baguette Boyband (Complete a Co-op mission.); Know-It-All (Complete all training missions.); Gentleman Cambrioleur (Lockpick 20 chests.); Curiosity (Open every chest in the game.); Visited Once (Complete all Co-op and Heist missions at least once.); Business and Pleasure (Earn a total of 50,000 livres.); And Stay Down! (Perform a ground execution.); Panoramic View (Synchronize all Viewpoints.); Help Me! (Complete 10 Crowd Events.); Hand of Justice (Solve a Murder Mystery.); Ransacking Versailles (Earn 100% completion of Versailles.); Accurate Prediction (Complete a Nostradamus Enigma.); Tricolore (Collect all Cockades); Don't Need It (Drop 20 Money Pouches in the streets.); Patron of the Arts (Watch a play in the Café Théâtre.); Share the Wealth (Get all the rewards in a Co-op mission.)."
            ]
        },
        {
            "heading": "Combat, Parkour & Café Théâtre Feats",
            "body": [
                "The one-off feats - Social Club district clears, Arno's balcony view, long- and heavy-weapon kill counts, all Café Théâtre renovations, a counterweight kill, co-op revives, non-lethal and sync co-op kills, sabotaging alarm bells, lockpicking doors and unlocking all Skills.",
                "The achievements here: Safe and Secure (Perform all Social Club missions in a district.); Room With A View (Enjoy the view of Paris from Arno's balcony.); Poked! (Kill 20 enemies with a Long Weapon.); Chopped! (Kill 20 enemies with a heavy weapon.); Master Architect (Complete all the renovations of the Café Théâtre.); Guillotined (Kill an enemy with a lift counterweight.); Never Say Die (Revive a partner in Co-op.); Merciful Killer (Perform 10 non-lethal takedowns in a Co-op mission.); Choreography (Perform 10 Co-op sync kills.); The Bells! The Bells! (Sabotage 5 alarm bells.); Must've Left it Open (Lockpick 5 doors.); I Got Skills (Unlock all Skills.)."
            ]
        },
        {
            "heading": "Dead Kings DLC",
            "body": [
                "The Dead Kings expansion - 100% synchronization, Memory Sequence 13, Suger's Legacy and the Eagle of Suger, freeing every outpost in Franciade, the Heist and co-op mission, a Guillotine Gun multi-kill and 15 Raider leaders.",
                "The achievements here: Hydrogen Bonded (Achieve 100% synchronization in Dead Kings.); Piece of Eden (Complete Memory Sequence 13.); Defender of Franciade (Complete Suger's Legacy and recover the Eagle of Suger.); Liberator (Free every outpost in Franciade.); Fraternité! (Complete the Heist and the Co-op mission in Dead Kings at least once.); Reign of Terror (Kill 5 enemies at the same time with a Guillotine Gun.); Freedom Fighter (Kill 15 Raider leaders.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Prologue and twelve memory sequences, plus the Rift missions, for the story achievements.",
                "2. Sweep Paris for viewpoints, chests, Cockades, Murder Mysteries, Nostradamus Enigmas and 100% Versailles.",
                "3. Renovate the Café Théâtre and Social Clubs and knock out the combat and parkour feats.",
                "4. Run the co-op and Heist missions with a group for the multiplayer-style achievements.",
                "5. Finish with the Dead Kings DLC - Franciade outposts, the Heist, and 100% synchronization.",
                "Tip: buy the Café Théâtre renovations early - they generate the livres that trivialise \"Business and Pleasure\" and the gear you need for the combat feats."
            ]
        }
    ]
};
