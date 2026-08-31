// Battlefield V Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-5.json), whose 21 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238810 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-5-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-5",
    "icon": "✈",
    "title": "Battlefield V Achievement Guide",
    "summary": "A practical guide to all 21 Steam achievements in Battlefield V - none are hidden. Covers the three War Stories on every difficulty, the individual War Story completions, the multiplayer round feats, and the class and player score milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield V has 21 Steam achievements and none of them are hidden. Six come from the single-player War Stories: completing Under No Flag, Nordlys and Tirailleur individually, and completing all three on Medium, Hard and Hardcore. The other fifteen are multiplayer: single-round feats (10 secondary-weapon kills, 10 kills, 30 kills, 10 Frontlines flag captures, 5 stationary-weapon air kills, 5 roadkills, 5 suppressions, 2 squad-leader reinforcements, 10 fortifications built, 3 squad spawns on you, 10 squad revives) and score milestones (100,000 as each of the four classes, 150,000 and 500,000 as a player), plus playing Conquest on every launch map.",
                "Nothing is missable - the War Stories can be replayed at any difficulty and every multiplayer counter is cumulative or per-round with unlimited attempts. The longest is \"Elite\" (500,000 total player score).",
                "Tip: play the three War Stories once on Hardcore and you clear all three difficulty achievements plus the three individual completions in a single pass - the lower difficulties do not need a separate run."
            ]
        },
        {
            "heading": "War Stories (Campaign)",
            "body": [
                "Completing Under No Flag, Nordlys and Tirailleur individually, and completing all three on Medium, Hard and Hardcore difficulty.",
                "The achievements here: Storyteller (Complete the War Stories Under No Flag, Nordlys & Tirailleur on Medium ); Veteran (Complete the War Stories Under No Flag, Nordlys & Tirailleur on Hard ); Sins of the Fathers (Complete the War Stories Under No Flag, Nordlys & Tirailleur on Hardcore ); Lovely (Complete Under No Flag War Story); Store fuglar fanga ingi flugor (Complete Nordlys War Story); Ou La Mort (Complete Tirailleur War Story)."
            ]
        },
        {
            "heading": "Multiplayer Feats & Class Score",
            "body": [
                "The multiplayer achievements - single-round kill, flag, air, roadkill, suppression, reinforcement, fortification, squad-spawn and squad-revive feats, playing Conquest on every launch map, and the class and player score milestones (100,000 per class, 150,000 and 500,000 as a player).",
                "The achievements here: Off-hand (In Multiplayer, kill 10 enemies with secondary weapons in a round ); Enemy Attrition (In Multiplayer, get 10 kills in a round); Hoist the Flag (In Multiplayer, capture 10 flags in Frontlines); Globetrotter (Play a round of Conquest on each of the launch maps); Death from Above (In Multiplayer, destroy 5 manned stationary weapons with a Airplane); Fender Bender (In Multiplayer, roadkill 5 enemies); Grim Reaper (In Multiplayer, kill 30 enemies ); Call ’em in! (In Multiplayer, as a squad leader call in 2 reinforcements in a round); Combat Engineer (In Multiplayer, build 10 fortifications in a round); Heads Down (In Multiplayer, fully suppress 5 enemies); Jack of All Trades (Earn 100,000 score as an Assault, Medic, Support and Recon); Eager Beaver (Earn 150,000 score as a Player); Elite (Earn 500,000 score as a Player); Last Man Standing (In Multiplayer, have 3 squad members spawn on you); Not On My Watch (In Multiplayer, perform 10 squad revives)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the three War Stories on Hardcore - this earns all six campaign achievements at once.",
                "2. Move to multiplayer and knock out the single-round feats (10/30 kills, flag captures, roadkills, suppressions, fortifications) as the situations come up.",
                "3. Play a round of Conquest on each launch map for \"Globetrotter\".",
                "4. Spread your play across all four classes to reach 100,000 score with each.",
                "5. Keep playing toward 150,000 and finally 500,000 total player score.",
                "Tip: Frontlines and Breakthrough are the fastest modes for the flag-capture, fortification and squad-play achievements because the action stays concentrated on a single objective."
            ]
        }
    ]
};
