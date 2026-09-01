// The Final Station Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-final-station.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   435530 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-final-station-achievement-guide",
    "category": "game",
    "gameSlug": "the-final-station",
    "icon": "🚆",
    "title": "The Final Station Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in The Final Station (13 hidden). Covers delivering passengers to each act's station, the combat and no-resource challenge feats, and a set of per-passenger 'story' achievements for keeping each named companion alive to the epilogue. Thirteen of the achievements are hidden - the passenger stories, the lone-survivor run, and the horse - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Final Station has 23 Steam achievements and 13 are hidden. Eleven are per-passenger 'story' achievements: keep a specific named companion (Harry, Jesse, Bill, Brandon, Matthew, Bob, Charles, Marc, the Old Friend, the Soldier, Thomas) alive on your train all the way to the game's epilogue, and you hear their story and earn their achievement. The twelfth, 'Sociopath', is the opposite - reach the epilogue with no passengers surviving. The thirteenth, 'But why?', is for shooting the horse. Everything visible is act-completion (deliver all passengers to each act's station) and combat feats (throw kills, exploding-enemy chains, barrel kills, no-bullet and no-medkit runs).",
                "The catalog marks it difficulty 3. Passengers can die from hunger, illness or wounds on the train, and each named companion appears only at a specific point, so the eleven passenger achievements are spread across the run and effectively need multiple playthroughs (or careful management) to get them all. The game is short, so several replays are quick.",
                "Tip: keep the medkit and food dispensers on the train stocked and check on passengers between stations - a companion who reaches the epilogue alive gives their story achievement, so on a 'save everyone' run you can pick up several passenger achievements at once."
            ]
        },
        {
            "heading": "Acts & Combat Feats",
            "body": [
                "Delivering all passengers to Emergency Station A-45, Ristol, the L-abs Bunker and Metropole, shooting a bird, ten thrown-object kills, a no-medkit Metro Station run, a three-enemy exploding-enemy chain, a no-bullet corrupted-station run, and a four-enemy exploding-barrel kill.",
                "The achievements here: Station A-45 (Take 3 passengers to Emergency Station A-45); City of The Factories (Take 6 passengers to Ristol); The L-abs Bunker (Take 6 passengers to the L-abs Bunker); Following Orders (Take 6 passengers to Metropole); Yes You Can (Shoot a bird); Push Back (Kill 10 enemies by throwing objects at them); Home Safe (Get through the Metro Station without using a medkit); Side Effects (Destroy 3 other enemies by shooting an exploding enemy); Know When To Run (Get through any corrupted station without firing a bullet); Collateral Damager (Take out 4 enemies with one exploding barrel)."
            ]
        },
        {
            "heading": "Passenger Stories & Secrets",
            "body": [
                "Keeping each named companion (Harry, Jesse, Bill, Brandon, Matthew, Bob, Charles, Marc, the Old Friend, the Soldier, Thomas) alive to the epilogue, reaching the epilogue with no passengers alive ('Sociopath'), and shooting the horse ('But why?').",
                "The achievements here: Harry's story (Reach the game's epilogue with Harry alive as your passenger.); Jesse's story (Reach the game's epilogue with Jesse alive as your passenger.); Bill's story (Reach the game's epilogue with Bill alive as your passenger.); Brandon's story (Reach the game's epilogue with Brandon alive as your passenger.); Matthew's story (Reach the game's epilogue with Matthew alive as your passenger.); Bob's story (Reach the game's epilogue with Bob alive as your passenger.); Charles's story (Reach the game's epilogue with Charles alive as your passenger.); Marc's story (Reach the game's epilogue with Marc alive as your passenger.); Old friend's story (Reach the game's epilogue with the Old Friend alive as your passenger.); Soldier's story (Reach the game's epilogue with the Soldier alive as your passenger.); Thomas's story (Reach the game's epilogue with Thomas alive as your passenger.); Sociopath (Reach the game's epilogue with no passengers surviving.); But why? (Shoot the horse.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story, delivering all passengers to each act's station (Emergency Station A-45, Ristol, the L-abs Bunker, Metropole).",
                "2. Pick up the combat feats as they come up - thrown-object kills, exploding-enemy chains, the barrel kill, and the no-bullet and no-medkit runs.",
                "3. Do a 'save everyone' run, keeping every companion fed, healed and alive to the epilogue for as many passenger-story achievements as possible.",
                "4. Replay as needed for the passenger achievements you missed (each named companion appears at a fixed point).",
                "5. Do a run where you let all passengers die for 'Sociopath', and shoot the horse for 'But why?'.",
                "Tip: passengers on the train need food and a medkit periodically or they weaken and die before the epilogue - a companion has to arrive alive for their story achievement, so tend to them every leg of the journey."
            ]
        }
    ]
};
