// War Thunder Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/war-thunder.json), whose 91 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   236390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group by the steam_trophy_* apiname family: in-battle
//   awards and trick feats, the mode/rank/kill counters, the
//   time-played and vehicle-type wins, and the nation collections and
//   Ace set.
export const GUIDE = {
    "slug": "war-thunder-achievement-guide",
    "category": "game",
    "gameSlug": "war-thunder",
    "icon": "✈️",
    "title": "War Thunder Achievement Guide",
    "summary": "A practical guide to all 91 Steam achievements in War Thunder - none are hidden. The in-battle combat awards and repeat feats, the battle-mode / rank / lifetime kill counters, the time-played and vehicle-type win milestones, and the large nation-collection and per-nation Ace set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "War Thunder has 91 Steam achievements and none are hidden. Nearly all are lifetime cumulative counters - win 100 battles at each rank, spend 1,000 hours in battle, order 50 vehicles of each nation, destroy 100 players with each nation's vehicles - so nothing is missable; you play until each fills.",
                "This is a very long completion. Legend (1,000 hours in battle) and Collector (own 2,000 vehicles) alone represent thousands of hours and a huge amount of research grind or spending, and the per-nation \"order 50\" and \"100 kills\" sets require playing every tech tree.",
                "Difficulty and estimatedTime here are curatorial; realistically this is a years-of-casual-play list rather than something to target.",
                "Tip: pick two nations you enjoy and push their tech trees to rank 6+ first - that naturally covers Rank 1 through Rank 9, the vehicle-type win achievements (Falcon, Tiger, Shark and friends), and a couple of the nation collections, while the award and mode counters tick up the whole time."
            ]
        },
        {
            "heading": "Combat Awards & Repeat Feats",
            "body": [
                "The in-battle material: earning specific medals a set number of times (Hero of the sky, Wing Breaker, Thunderer, Shadow Strike and similar), and one-off trick shots and combos - sniper kills, kills while dead or on fire, ramming ships, artillery and guided-weapon strikes, and the nuclear-bomb achievements.",
                "The achievements here: Air-to-Air (Get 'Hero of the sky' 10 times); Ground-to-Air (Get 'Wing Breaker' 10 times); Air-to-Ground (Get 'Thunderer' 10 times); Ground-to-Ground (Get 'Heavy Metal Hero' 10 times); Ultimate (Get 'Mission Maker' 10 times); Ninja (Get 'Shadow Strike' 100 times); At one blow (Destroy 5 targets within 1 second); Guide (Get 'Intelligence' 10 times); Knowledge is Power (Get 'According to Intelligence' 10 times); Nemesis (Get 'Avenger' 5 times); Revenge-Seeker (Get 'Eye for an Eye' 5 times); Firestarter (Destroy 30 players' vehicles by setting them afire); Accurate Fire (Get 'Triple Strike'); Sniper (Destroy 5 players' vehicles at the distance of 1.5 kms or more); Vengeful Spirit (Destroy a player's vehicle while being dead); Element of Surprise (Capture an enemy strategic point with hostile team players in direct vision); Cold-Blooded (Destroy 2 players' vehicles while your vehicle's on fire); King of the Hill (Destroy in one battle 5 players' vehicles while standing on the strategic point captured by your team); Dead Weight (Destroy a player's vehicle which is tied to other player's vehicle by a cable); Street Brawler (Destroy 2 players' vehicles within 30 seconds from a distance of 10 meters or less); Weapon of Heroes (Destroy 10 enemy ships by ramming them); Size Doesn’t Matter (Destroy 3 destroyers in a boat without losing your vehicle); Raining Lead (Destroy 10 players’ vehicles with artillery strikes); Destroyer (Deal 10000 damage while controlling an aircraft or a naval vessel); First dozen (Destroy 12 players’ vehicles while controlling an aircraft); Just a Scratch (Get the 'Adamant' award 5 times); High-precision strike (Destroy 1 player vehicle with a guided bomb at a distance of 20 km or more); Doomsday! (Make a nuclear strike and end the mission with a victory); Peaceful atom (Shoot down a nuclear weapon carrier); Fire Arrows (Destroy 1000 player vehicles with guided missiles); Invincible (Get the 'Professional' reward 100 times)."
            ]
        },
        {
            "heading": "Battle Modes, Ranks & Kill Counts",
            "body": [
                "The mode counters: destroy N players in Arcade, Realistic and Simulator battles; win 100 battles at each vehicle rank (Rank 1 through Rank 9); plus carrier landings, chest openings, booster use and the single-missions counter.",
                "The achievements here: Kraken (Sink 5 aircraft carriers); Hooked (Land on an aircraft carrier); Treasure Hunter (Open 10 chests); But... how?! (Shoot down a plane with tank cannon in simulator mode); Speed up! (Activate 10 boosters); Arcade 1000 (Destroy 1000 players' vehicles in arcade battles); Realistic 500 (Destroy 500 players' vehicles in realistic battles); True 100 (Destroy 100 players' vehicles in simulator battles); Rank 1 (Win 100 battles using vehicles of rank 1); Rank 2 (Win 100 battles using vehicles of rank 2); Rank 3 (Win 100 battles using vehicles of rank 3); Rank 4 (Win 100 battles using vehicles of rank 4); Rank 5 (Win 100 battles using vehicles of rank 5); True and Fable (Win 50 single missions); Rank 6 (Win 100 battles using vehicles of rank 6); First-class (Play 3 battles, taking first place in any team); Rank 7 (Win 100 battles using vehicles of rank 7); Rank 8 (Win 100 battles using vehicles of rank 8); Rank 9 (Win 100 battles using vehicles of rank 9)."
            ]
        },
        {
            "heading": "Time Played & Vehicle-Type Wins",
            "body": [
                "The time-in-battle ladder (Cadet at 10 hours up to Legend at 1,000) and one \"win 50 battles\" achievement for each vehicle type - aircraft, helicopters, ground vehicles, coastal fleet and bluewater fleet.",
                "The achievements here: Cadet (Spend 10 hours in battle); Graduate (Spend 100 hours in battle); Warrior (Spend 250 hours in battle); Veteran (Spend 500 hours in battle); Legend (Spend 1000 hours in battle); Falcon (Win 50 battles using aircraft); Hornet (Win 50 battles using helicopters); Tiger (Win 50 battles using ground vehicles); Piranha (Win 50 battles using сoastal fleet); Shark (Win 50 battles using bluewater fleet)."
            ]
        },
        {
            "heading": "Nation Collections & Aces",
            "body": [
                "The largest block: \"order 50 vehicles\" for each nation with a full tech tree, and a matching \"destroy 100 players while using that nation's vehicles\" Ace achievement for every nation in the game (including the small sub-trees like Hungary, Finland, South Africa, Thailand and Switzerland), plus Fully Modified, Family Album and Collector.",
                "The achievements here: Japanese Collection (Order 50 Japanese vehicles); US Collection (Order 50 US vehicles); Soviet Collection (Order 50 Soviet vehicles); British Collection (Order 50 British vehicles); German Collection (Order 50 German vehicles); Fully Modified (Purchase 50 modifications); French Collection (Order 50 French vehicles); Italian Collection (Order 50 Italian vehicles); Chinese Collection (Order 50 Chinese vehicles); Swedish Collection (Order 50 Swedish vehicles); Israeli Collection (Order 50 Israeli vehicles); American Ace (Destroy 100 player vehicles while using US vehicles); German Ace (Destroy 100 player vehicles while using German vehicles); Soviet Ace (Destroy 100 player vehicles while using Soviet vehicles); British Ace (Destroy 100 player vehicles while using British vehicles); Japanese Ace (Destroy 100 player vehicles while using Japanese vehicles); Chinese Ace (Destroy 100 player vehicles while using Chinese vehicles); French Ace (Destroy 100 player vehicles while using French vehicles); Italian Ace (Destroy 100 player vehicles while using Italian vehicles); Swedish Ace (Destroy 100 player vehicles while using Swedish vehicles); Israeli Ace (Destroy 100 player vehicles while using Israeli vehicles); Hungarian Ace (Destroy 100 player vehicles while using Hungarian vehicles); Finnish Ace (Destroy 100 player vehicles while using Finnish vehicles); South African Ace (Destroy 100 player vehicles while using South African vehicles); Australian Ace (Destroy 100 player vehicles while using Australian vehicles); Dutch Ace (Destroy 100 player vehicles while using Dutch vehicles); Belgian Ace (Destroy 100 player vehicles while using Belgian vehicles); Family Album (Get 100 player icons); Collector (Get 2000 vehicles); Thai Ace (Destroy 100 player vehicles while using Thai vehicles); Swiss Ace (Destroy 100 player vehicles while using Swiss vehicles)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Just play. The award, mode and kill counters (the medals, Arcade 1000, the rank wins) accumulate from normal battles with no special effort.",
                "2. Commit to grinding two or three nations' tech trees fully - this clears their collections (US Collection, Soviet Collection and so on), their Ace achievements (American Ace, German Ace, ...), the rank-win ladder and the vehicle-type wins together.",
                "3. Do the one-off trick achievements (At one blow, Vengeful Spirit, Dead Weight, Doomsday!, Peaceful atom, High-precision strike) deliberately when you have the right vehicle and a cooperative match.",
                "4. Everything else is just time: Cadet through Legend, Collector, and the remaining nation Aces will trickle in over hundreds of hours.",
                "Tip: the nuclear achievements (Doomsday!, Peaceful atom) need a match that reaches the nuclear-strike stage - bring a bomber or strike aircraft with the required payload and be near the top of the score at match end so you are offered the strike."
            ]
        }
    ]
};
