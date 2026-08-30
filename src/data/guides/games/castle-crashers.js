// Castle Crashers Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/castle-crashers.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   204360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "castle-crashers-achievement-guide",
    "category": "game",
    "gameSlug": "castle-crashers",
    "icon": "🏰",
    "title": "Castle Crashers Achievement Guide",
    "summary": "A practical guide to all 12 Steam achievements in Castle Crashers - none are hidden. Covers the story and skill-challenge achievements and the online and co-op achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Castle Crashers has 12 Steam achievements and none of them are hidden. Eight are single-player or local skill challenges - beat an end boss without magic, complete the game, defeat a boss while playing one of his minions, the no-hit Abandoned Mill deer ride, a pacifist run of the early areas, a maximum-power catapult fling, and collecting all animal orbs. The remaining four need other players: collect all four princesses' kisses in a multiplayer game, win 40 Arena online matches, survive to 2:30 in Back Off Barbarian, and resuscitate every fallen comrade in a 4-player game.",
                "Nothing is missable - levels can be replayed freely from the map. The completion is short; Arena Master (40 online Arena wins) is the only real grind and the multiplayer achievements need a second player (local or online).",
                "Tip: do the eight solo/local achievements on one playthrough with a controller, then bring in a friend (or a second controller) for the four multiplayer ones - Back Off Barbarian and the 4-player Medic feat can both be done with two local players."
            ]
        },
        {
            "heading": "Story & Skill Challenges",
            "body": [
                "Defeating an end boss without magic, collecting all four princesses' kisses in a multiplayer game, completing the game with any character, defeating a boss as one of his own minions, the no-obstacle Abandoned Mill deer ride, a pacifist run of the Home Castle to Barbarian Boss areas, a maximum-power catapult knight fling, and collecting all the animal orbs.",
                "The achievements here: Melee Is Best (Defeat any end boss without using any magic.); Kay Eye Ess Ess (Collect all 4 princesses' kisses in a multiplayer game.); Traditional (Complete the game using any character.); The Traitor (Defeat any boss by playing one of his own minions.); Deer Trainer (Navigate the Abandoned Mill without hitting any obstacles.); Conscientious Objector (Complete the Home Castle through Barbarian Boss areas without attacking any foes.); Maximum Firepower (Using a catapult, fling a knight with maximum power.); Animal Handler (Collect all the animal orbs.)."
            ]
        },
        {
            "heading": "Online & Co-op",
            "body": [
                "Winning 40 Arena online matches, surviving until 2:30 in a Back Off Barbarian match, finding and digging up ten buried items, and resuscitating each of your fallen comrades at least once in a 4-player game.",
                "The achievements here: Arena Master (Win 40 Arena Online Matches.); The Final Countdown (Survive until 2:30 in a Back Off Barbarian match.); Treasure Hunter (Find and dig up ten buried items.); Medic! (In a 4 player game, resuscitate each of your fallen comrades at least once.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the story once with any character for Traditional, and do the pacifist run (Conscientious Objector) either on that run or a fresh one.",
                "2. Do the level-specific skill challenges via replay: the no-magic boss kill, The Traitor, the Abandoned Mill deer ride, and the maximum-power catapult fling.",
                "3. Collect all animal orbs across the campaign and dig up ten buried items for Treasure Hunter.",
                "4. With a second player (local or online), get all four princess kisses in one game and do the 4-player Medic resuscitation feat.",
                "5. Grind Arena online matches to 40 wins and do a Back Off Barbarian match to 2:30.",
                "Tip: for The Traitor, the easiest target is an early boss whose minions you can recruit as a playable character from the store or by leveling - come back to that boss fight with the minion character and simply beat him with it."
            ]
        }
    ]
};
