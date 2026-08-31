// The Banner Saga Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-banner-saga.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   237990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-banner-saga-achievement-guide",
    "category": "game",
    "gameSlug": "the-banner-saga",
    "icon": "🚩",
    "title": "The Banner Saga Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in The Banner Saga - none are hidden. Covers the per-class kill achievements, visiting every godstone, and the completion challenges - difficulty clears, no-loss and no-hunger runs, the Alette pacifist path, and the timed and item-collection goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Banner Saga has 39 Steam achievements and none of them are hidden. Eighteen are per-class kills - defeat an enemy with each unit class (Raidmaster, Backbiter, Bowmaster, Shieldmaster, Provoker, Warhawk, Hunter, Spearmaster, Mender, Grudgewielder and more). Nine are for visiting each of the game's godstones. The remaining twelve are completion challenges: clear the game on Normal and Hard, a no-lost-battle run, a no-hunger run, a no-low-morale run, the Alette-never-harms-anyone path, reaching Boersgard in 120 days, acquiring five rank-5 items, the diplomat and warmonger choices, keeping Egil alive, and a Training Tent battle with six rank-5 units.",
                "The catalog marks it as roughly two playthroughs - the per-class kills and godstones fit one relaxed run, but the Hard / no-loss / no-hunger / pacifist challenges pull against each other and are cleaner across two - and nothing is missable given save reloads and chapter structure.",
                "Tip: keep a checklist of the unit classes as you recruit them and make a point of landing the killing blow with each new class the first time you field it - back-tracking for a specific class kill later is tedious."
            ]
        },
        {
            "heading": "Class Kills (Part 1)",
            "body": [
                "Defeating an enemy with each of the earlier unit classes - Raidmaster, Backbiter, Thrasher, Bowmaster, Siege Archer, Skystriker, Strongarm, Shieldmaster, Provoker, Warhawk, Warmaster, Warleader, Hunter, Warden, Spearmaster, Eagle Eye and Mender.",
                "The achievements here: Raidmaster (Defeat an enemy with a Raidmaster.); Backbiter (Defeat an enemy with a Backbiter.); Thrasher (Defeat an enemy with a Thrasher.); Bowmaster (Defeat an enemy with a Bowmaster.); Siege Archer (Defeat an enemy with a Siege Archer.); Skystriker (Defeat an enemy with a Skystriker.); Strongarm (Defeat an enemy with a Strongarm.); Shieldmaster (Defeat an enemy with a Shieldmaster.); Provoker (Defeat an enemy with a Provoker.); Warhawk (Defeat an enemy with a Warhawk.); Warmaster (Defeat an enemy with a Warmaster.); Warleader (Defeat an enemy with a Warleader.); Hunter (Defeat an enemy with a Hunter.); Warden (Defeat an enemy with a Warden.); Spearmaster (Defeat an enemy with a Spearmaster.); Eagle Eye (Defeat an enemy with an Eagle Eye.); Mender (Defeat an enemy with a Mender.)."
            ]
        },
        {
            "heading": "Godstones",
            "body": [
                "Visiting each of the nine godstones - Denglr, Hadrborg, Hridvaldyr, Marek, Radormyr, Bjorulf, Dundr, Ingrid and Stravhs.",
                "The achievements here: Godstone Denglr (Visit the godstone Denglr.); Godstone Hadrborg (Visit the godstone Hadrborg.); Godstone Hridvaldyr (Visit the godstone Hridvaldyr.); Godstone Marek (Visit the godstone Marek.); Godstone Radormyr (Visit the godstone Radormyr.); Godstone Bjorulf (Visit the godstone Bjorulf.); Godstone Dundr (Visit the godstone Dundr.); Godstone Ingrid (Visit the godstone Ingrid.); Godstone Stravhs (Visit the godstone Stravhs.)."
            ]
        },
        {
            "heading": "Completion Challenges & Grudgewielder",
            "body": [
                "The Normal and Hard clears, the no-lost-battle Challenge, the no-hunger Quartermaster run, the no-low-morale High Spirits run, the Alette pacifist path, the 120-day Forced March, five rank-5 items, the diplomat and warmonger choices, keeping Egil alive, the Grudgewielder class kill, and the six-rank-5-unit Training Tent battle on Hard.",
                "The achievements here: Normal Difficulty (Complete the game on Normal difficulty.); Hard Difficulty (Complete the game on Hard difficulty.); Challenge (Complete the game on Hard difficulty level without losing a single battle.); Quartermaster (Complete the game without letting anyone in your caravan die to hunger.); High Spirits (Complete the game without ever getting low morale.); Innocent (Alette doesn't want to harm humans or varl...don't make her.); Forced March (Reach Boersgard in 120 days.); Treasure Hunter (Acquire 5 rank 5 items.); Diplomat (Get permission to destroy a varl landmark.); Warmonger (Fight 40 battles in a single playthrough.); Beat the Odds (Whew...Egil made it the whole way!); Grudgewielder (Defeat an enemy with a Grudgewielder.); Master Tactician (Win a battle on Hard difficulty in the camp Training Tent using 6 rank 5 units.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a relaxed Normal run, fielding every unit class at least once and landing a kill with each.",
                "2. On that run, visit every godstone you pass and pick up the diplomat / warmonger choices and rank-5 items.",
                "3. Do a Hard-difficulty run aiming for no lost battles.",
                "4. Do a focused run for the mutually-tricky challenges - no hunger, no low morale, the Alette pacifist path, and the 120-day Forced March.",
                "5. Set up the Training Tent battle with six rank-5 units on Hard for \"Master Tactician\".",
                "Tip: the no-hunger \"Quartermaster\" run just means buying supplies at every market and not over-recruiting - keep your caravan small and your renown spent on food, not items."
            ]
        }
    ]
};
