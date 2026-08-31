// Roguebook Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/roguebook.json), whose 61 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1076200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "roguebook-achievement-guide",
    "category": "game",
    "gameSlug": "roguebook",
    "icon": "📖",
    "title": "Roguebook Achievement Guide",
    "summary": "A practical guide to all 61 Steam achievements in Roguebook - none are hidden. Covers the hero card collections, the map-exploration and progression counters, the chapters, bosses and Epilogue achievements, and the combat feats, Fugoro cards and tournaments. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Roguebook has 61 Steam achievements and none are hidden. Fifteen are hero card collections (unlock 5, unlock all and play every card for Sharra, Sorocco, Seifer, Aurora and the Fugoro DLC hero), a large block is exploration counters that accumulate across all runs (10 / 100 / 1000 Magic Vaults, 10 / 100 / 500 Gem stones, 10 / 100 / 500 map treasures, 10 / 100 / 500 Sky Towers, 10,000 tiles revealed), and the rest are chapters and bosses (all three chapters, every boss, the Avatars of Mist and Greed, Twins Chaos), the Epilogue difficulty ladder (levels 1, 10 and max), winning with every hero pair, and combat and tournament feats.",
                "The catalog marks it difficulty 4 and many runs. The Epilogue-max win, 'Adventuring Party' (win with every hero pair) and the 1000-Vault counter are the long tail; the card collections fill in as you unlock the shop.",
                "Tip: play runs at rising Epilogue levels, rotating hero pairs, and let the exploration counters accumulate - only the highest tiers (1000 Vaults, 500 treasures) need dedicated grinding."
            ]
        },
        {
            "heading": "Hero Card Collections",
            "body": [
                "Unlocking 5 cards, unlocking all cards and playing every card for Sharra, Sorocco, Seifer and Aurora.",
                "The achievements here: Studying the Blade (Unlock 5 Sharra cards.); Sharra Completionist (Unlock all Sharra cards.); Sharra Mastery (Play every Sharra card at least once.); Bulking up (Unlock 5 Sorocco cards.); Sorocco Completionist (Unlock all Sorocco cards.); Sorocco Mastery (Play every Sorocco card at least once.); Cutting Through (Unlock 5 Seifer cards.); Seifer Completionist (Unlock all Seifer cards.); Seifer Mastery (Play every Seifer card at least once.); Slowly but Steady (Unlock 5 Aurora cards.); Aurora Completionist (Unlock all Aurora cards.); Aurora Mastery (Play every Aurora card at least once.)."
            ]
        },
        {
            "heading": "Map Exploration & Progression",
            "body": [
                "Party level 2 and max, at least one rank of every embellishment, entering 10 / 100 / 1000 Magic Vaults, opening 10 / 100 / 500 Gem stones, collecting 10 / 100 / 500 map treasures, visiting 10 / 100 / 500 Sky Towers, recovering treasure from Fugoro 10 times, revealing 10,000 tiles, using every ink, and defeating 10 Golden Faeries.",
                "The achievements here: Level Up (Reach Party level 2.); The Full Experience (Reach Maximum Party level.); Major Embellishment (Purchase at least 1 Rank of every embellishment); Vault Discovery (Enter 10 Magic Vaults.); Vault Explorer (Enter 100 Magic Vaults.); Archivist (Enter 1000 Magic Vaults.); Prospector (Open 10 Gem stones); Miner (Open 100 Gem stones); Excavator (Open 500 Gem stones); Archaeologist (Collect 10 Treasures from the map.); Expert Archaeologist (Collect 100 Treasures from the map.); Master Archaeologist (Collect 500 Treasures from the map.); Climbing High (Visit 10 Sky Towers.); New Horizons (Visit 100 Sky Towers.); I can see my house from here (Visit 500 Sky Towers.); Come back here, Frog. (Recover your treasure from Fugoro 10 times.); Happy Little Tiles (Reveal 10,000 tiles.); Ink Mastery (Use every type of ink at least once.); Golden Pinatas (Defeat 10 Golden Faeries.)."
            ]
        },
        {
            "heading": "Chapters, Bosses & Epilogue",
            "body": [
                "Completing Chapters 1, 2 and 3, every boss in Chapters 1 and 2, the Avatar of Mist and Avatar of Greed, visiting every story event, unlocking Seifer and Aurora, and completing runs at Epilogue level 1, 10 and max.",
                "The achievements here: The Forest of Erianor (Complete Chapter 1.); Conquering the Forest (Defeat every boss in Chapter 1.); The Oversky (Complete Chapter 2.); Conquering the Oversky (Defeat every boss in Chapter 2.); The Ruins of Heartforge (Complete Chapter 3.); Avatar of Mist (Defeat the Avatar of Mist.); Avatar of Greed (Defeat the Avatar of Greed.); Neverending Story (Visit every original story event at least once.); Unmask the Maniac (Unlock Seifer); Ancient One (Unlock Aurora); New Game + (Complete an Epilogue challenge.); Roguebook Expert (Complete a run at Epilogue level 10.); Roguebook Mastery (Complete a run at max Epilogue level.)."
            ]
        },
        {
            "heading": "Combat Feats, Fugoro Cards & Tournaments",
            "body": [
                "1000 Dagger damage, 1000 Sorocco AoE damage, 1000 Seifer Rage, 50 Teapot uses, a run finished with 1000 gold, 100,000 gold earned, winning with every hero pair, reaching the end of a Gem Mine, defeating Twins Chaos, the three Story tournament achievements, the Fugoro DLC card collection, playing 100 coins, and marking 100 enemies.",
                "The achievements here: Forbidden Frisbees (Deal 1000 damage with Daggers.); Fire Breath (Have Sorocco deal 1000 area of effect damage.); Carnage (Gain 1000 Rage.); Tea Party (Actively use Aurora's Teapot 50 times.); Greed (Complete a run with 1000 gold remaining.); Blessed Coin (Earn over 100,000 gold.); Adventuring Party (Defeat the Roguebook with every pair of heroes); Master the Mine (Reach the end of a Gem Mine.); Twins Chaos (Defeat the Twins Chaos); Contender (Participate in a Story tournament.); Finalist (Complete a Story tournament.); Champion (Finish in the top 50% of a Story tournament.); Just Borrowing (Unlock 5 Fugoro cards.); Fugoro Completionist (Unlock all Fugoro cards.); Fugoro Mastery (Play every Fugoro card at least once.); Numismatist (Play 100 coins.); You Are Known (Mark 100 enemies.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play early runs to unlock the shop and start filling the card collections for each hero.",
                "2. Explore thoroughly every run - Vaults, Gem stones, Sky Towers and treasures all count across runs.",
                "3. Beat all three chapters and every boss, and see every story event.",
                "4. Climb the Epilogue difficulty ladder to max, rotating hero pairs toward 'Adventuring Party'.",
                "5. Do the combat-feat achievements (1000 Dagger/AoE/Rage damage, 50 Teapot uses) on runs built around each hero.",
                "Tip: 'Adventuring Party' (win with every hero pair) is the biggest commitment - keep a checklist of which pairs you've won with and deliberately pick unwon combinations."
            ]
        }
    ]
};
