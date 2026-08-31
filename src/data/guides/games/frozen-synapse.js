// Frozen Synapse Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/frozen-synapse.json), whose 16 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   98200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "frozen-synapse-achievement-guide",
    "category": "game",
    "gameSlug": "frozen-synapse",
    "icon": "🧊",
    "title": "Frozen Synapse Achievement Guide",
    "summary": "A practical guide to all 16 Steam achievements in Frozen Synapse - none are hidden. Covers the tutorial and single-player campaign, the level milestones, and the multiplayer game-mode wins and extras.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Frozen Synapse has 16 Steam achievements and none of them are hidden. Seven come from single player: finish the tutorial, complete the campaign, lose your first mission, lose a unit to a rocket, blow up the \"4th wall\", ignore an enemy, and reach Level 10. The other nine are multiplayer and progression: win a game of each mode (Extermination, Charge, Disputed, Hostage), defeat the AI 'Bin', lose your first multiplayer game, reach level 100, change the map generation settings, and the \"machine gun\" Christmas skirmish win.",
                "Nothing is missable - the campaign replays, level is cumulative, and every multiplayer mode is always available. The longest by far is \"SO MANY LEVELINGS!!\" (reach level 100).",
                "Tip: the four mode-win achievements can all be earned against the AI in single skirmishes - you do not need human opponents for them, only for the level-100 grind if you want it fast."
            ]
        },
        {
            "heading": "Single Player & Campaign",
            "body": [
                "Blowing up the 4th wall with a rocket, reaching Level 10, ignoring an enemy, completing the Single Player Campaign, finishing the tutorial, losing your first single-player mission, and losing a unit to a rocket.",
                "The achievements here: Breaking the 4th Wall (Blow up the 4th wall in a level with a rocket launcher.); The 10th Circle (Get to Level 10.); True Focus Means Ignoring That Which is Irrelevant (Ignore an enemy.); Old Stancher (Complete the Single Player Campaign.); Master of Clicking on Stuff (Finish the tutorial.); If at First You Don't Succeed, You Have Failed (Lose your first single-player mission.); Die in a Fire (Lose a unit to a rocket.)."
            ]
        },
        {
            "heading": "Multiplayer & Extras",
            "body": [
                "Defeating 'Bin' in multiplayer, winning a game of Extermination, Charge, Disputed and Hostage, reaching level 100, losing your first multiplayer game, changing the map generation settings, and the machine-gunner-only Instant Skirmish win.",
                "The achievements here: He Has a Better Beard Than You, Though (Defeat 'Bin' in multiplayer.); Exterminator! (Win a game of Extermination.); Charger! (Win a game of Charge.); Disput....er! (Win a game of Disputed.); Hostage Situationalist! (Win a game of Hostage.); SO MANY LEVELINGS!! (Get to level 100.); The Lament of the Noob (Lose your first multiplayer game.); Tinkerings (Change the map generation settings.); Now I Have A Machine Gun. Ho Ho Ho. (Play an Instant Skirmish and win with only your machine gunner left alive.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the tutorial and play the single-player campaign to completion, picking up the 4th-wall, ignore-an-enemy and rocket-loss feats along the way.",
                "2. Reach Level 10 during the campaign.",
                "3. Play single skirmishes against the AI to win a game of Extermination, Charge, Disputed and Hostage, and to defeat 'Bin'.",
                "4. Do the map-generation-settings and machine-gunner-win extras.",
                "5. Keep playing (multiplayer is fastest) toward level 100.",
                "Tip: the machine-gunner win just needs an Instant Skirmish where your MG unit is the last one standing on your side - pick a small map and play defensively behind cover."
            ]
        }
    ]
};
