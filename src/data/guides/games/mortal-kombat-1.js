// Mortal Kombat 1 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mortal-kombat-1.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1971870 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "mortal-kombat-1-achievement-guide",
    "category": "game",
    "gameSlug": "mortal-kombat-1",
    "icon": "🐉",
    "title": "Mortal Kombat 1 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Mortal Kombat 1 - none are hidden. story & tutorials, combat counters, towers & kombat league, kameo & talismans, invasions, misc & completion.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mortal Kombat 1 has 50 Steam achievements and none are hidden. They span the Story mode and tutorials, cumulative combat counters, the Towers and Kombat League, the Kameo and Talisman systems, and a large block for the Invasions mode.",
                "Nothing is missable and nearly everything is offline-friendly. Invasions is the biggest chunk - reaching level 20, beating the mini/major/final bosses, and the exploration goals (keys, obstructions, secret fights, ambushes, survival).",
                "Tip: push through Story Mode and the tutorials first, then commit to an Invasions season - it feeds the level, boss, key, obstruction and encounter achievements all at once, plus the koin and Konsumable counters."
            ]
        },
        {
            "heading": "Story & Tutorials",
            "body": [
                "The Basic Tutorial, an hour in Practice, 50% and 100% of Story Mode Part 1, completing Chapter 15 twice, and the Cage Mansion tutorial.",
                "The achievements here: Become A Ninja In No Time (Komplete The Basic Tutorial); Eye Of The TaiGore (Spend A Total Of 1 Hour In Practice); A New Timeline (Komplete 50% Of Story Mode Part 1); What Just Happened?? (Komplete 100% Of Story Mode Part 1); Who Was That??? (Komplete Chapter 15 Twice); It Has Begun!!! (Komplete Cage Mansion Tutorial)."
            ]
        },
        {
            "heading": "Combat Counters",
            "body": [
                "The cumulative combat goals: 10,000 damage dealt, 5,000 pints of blood, 20 different Fatalities, 10 different Brutalities, 10 different Kameo Fatalities, 10 different Kameo characters used, 10 Konsumables used, and a clean online taunt.",
                "The achievements here: Titan (Deal 10,000 Damage To Opponents); Beaten And Broken (Spill 5,000 Pints Of Blood); Deadly Assassin (Perform 20 Different Fatalities); Karnage (Perform 10 Different Brutalities); Annihilation (Perform 10 Different Kameo Fatalities); Making Friends Is Easy (Use 10 Different Kameo Characters); There Is No Knowledge That Is Not Power (Use 10 Konsumables); Total Disrespect (Perform A Taunt Without Being Interrupted During An Online Match)."
            ]
        },
        {
            "heading": "Towers & Kombat League",
            "body": [
                "5 Kombat League sets, a Klassic Tower with 5 different characters, dethroning a King, a 5,000,000 total score in Towers of Time, 10 Tower endings, and spending 10,000 Seasonal Kredits.",
                "The achievements here: Kontender (Play 5 Kombat League Sets); Puppet Master (Komplete A Klassic Tower With 5 Different Characters); King Slayer (Dethrone A King); High Score, Is That Good? (Obtain A Total Score Of 5,000,000 In Towers Of Time); Happy Endings (Unlock 10 Tower Endings); Big Spender (Spend 10,000 Seasonal Kredits)."
            ]
        },
        {
            "heading": "Kameo & Talismans",
            "body": [
                "Completing Mastery with 1 and 5 Kameo characters, trading for an item at an Outworld and an Earthrealm shop, and the Talisman goals (use one, use one 10 times, recharge one, forge one).",
                "The achievements here: Buddy System (Komplete Mastery With 1 Kameo Character); Rollin' With My Krew (Komplete Mastery With 5 Kameo Characters); Where's Blanche (Trade For An Item From An Outworld Shop); Take And Deny (Trade For An Item From An Earthrealm Shop); Ultimate Power (Use A Talisman); Talis-Mania (Use A Talisman 10 Times); Running On Empty (Recharge A Talisman); So Krafty (Forge A Talisman)."
            ]
        },
        {
            "heading": "Invasions",
            "body": [
                "The Invasions mode: 10,000 koins on the Shrine, 5 Test Your Might encounters, 5 and 25 unique encounters, reaching Invasions level 5, 10 and 20, defeating a Mini Boss, a Major Boss and a season's Final Boss, using a Key, a Survival encounter, clearing an obstruction, unlocking a secret fight, and surviving an ambush.",
                "The achievements here: Give A Koin (Spend 10,000 Koins On The Shrine); Test Your Might (Komplete 5 Unique Test Your Might Encounters); So I Just Kill Stuff?? (Komplete 5 Unique Encounters); Adventure Time (Komplete 25 Unique Encounters); Feeling Stronger (Reach Invasions Level 5); Unstoppable (Reach Invasions Level 10); Juggernaut (Reach Invasions Level 20); Not So Big Now, Are You?? (Defeat A Mini Boss In Invasions); Who Da Boss?? (Defeat A Major Boss In Invasions); Vanquished (Defeat The Final Boss Of An Invasions Season); ABACABB (Use A Key); Made It Out Alive (Komplete A Survival Encounter); Make Way, I'm Koming Through (Klear An Obstruction In Invasions); Found You (Unlock A Secret Fight); Stop Hiding (Survive An Ambush)."
            ]
        },
        {
            "heading": "Misc & Completion",
            "body": [
                "Equipping a Relic and 3 different Relics, completing a Titan Battle, 3 Daily Quests, a Weekly Quest, watching the Kredits, and changing your Kombat Kard player module.",
                "The achievements here: Always Accessorize (Equip A Relic); Kollector (Equip 3 Different Relics); The Mighty Have Fallen (Komplete A Titan Battle); Quest Master (Komplete 3 Daily Quests); Working Overtime (Komplete A Weekly Quest); Thank You For Being A Fan!!! (Watch The Kredits); Witness Me!!! (Change Your Kombat Kard Player Module)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorials and play Story Mode Part 1 to 100%, then complete Chapter 15 a second time for Who Was That???.",
                "2. Commit to an Invasions season - it covers the whole Invasions block plus the Shrine koins, Konsumables, Test Your Might and encounter counts.",
                "3. Work the Kameo and Talisman systems (Mastery, shop trades, forge/recharge) and grab the Relic and Titan Battle achievements.",
                "4. Grind Towers of Time and Kombat League for the score, endings, Seasonal Kredits and blood/Fatality/Brutality counters.",
                "Tip: the per-Fatality/Brutality/Kameo-Fatality counts (20 / 10 / 10 different) want variety, not volume - keep an input list open and cycle characters and Kameos in a single Practice or Towers session."
            ]
        }
    ]
};
