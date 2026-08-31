// DiscStorm Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/discstorm.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   330670 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "discstorm-achievement-guide",
    "category": "game",
    "gameSlug": "discstorm",
    "icon": "🥏",
    "title": "DiscStorm Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in DiscStorm - none are hidden. Covers the single-player campaign levels and ranks, the multiplayer and game-mode achievements, and the challenge feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DiscStorm has 30 Steam achievements and none are hidden. Twelve are the single-player campaign - completing each of the ten themed levels (Jungle Temple, Robot Factory, Haunted Mansion, Space Platform, Pirate Ship, Abandoned Mine, Volcano Lair, Enchanted Forest, Museum Heist) plus A Rank on 5 and on all levels. Eleven cover multiplayer and its modes (trying multiplayer, Deathdisc trick shots, Survival, Timebomb, Regicide, the minecart, playtime unlocks), and seven are specific challenge feats (beating the Ninja Master with deflects only, a 4-target trick shot, stunning an alien, stunning a player through a bookcase).",
                "The catalog marks it difficulty 3 and a short run. The campaign is quick; the A Rank on every level and a few of the trick-shot feats are the only real skill checks, and a couple need a second player.",
                "Tip: clear the campaign, replay levels for A Rank, and do the multiplayer-mode achievements against a friend or bots."
            ]
        },
        {
            "heading": "Single Player Campaign",
            "body": [
                "Completing the Tutorial Dojo, Jungle Temple, Robot Factory, Haunted Mansion, Space Platform, Pirate Ship, Abandoned Mine, Volcano Lair, Enchanted Forest and Museum Heist in single player, and achieving A Rank on any 5 levels and on all levels.",
                "The achievements here: Training Montage (Complete the Tutorial Dojo in single player); Going Golem Gone (Complete the Jungle Temple in single player); Eye see what you did there (Complete the Robot Factory in single player); I ain't afraid of no ghost (Complete the Haunted Mansion in single player); Where no disc has gone before (Complete the Space Platform in single player); You must be a Ninja (Complete the Pirate Ship in single player); Dug too deep (Complete the Abandoned Mine in single player); Too hot to handle (Complete the Volcano Lair in single player); Crashed the Teddy Bear's Picnic (Complete the Enchanted Forest in single player); Didn't even have to spend the night (Complete the Museum Heist in single player); 4.0 Average (Achieve A Rank on any 5 levels in single player); The A Team (Achieve A Rank on all levels in single player)."
            ]
        },
        {
            "heading": "Multiplayer & Modes",
            "body": [
                "Trying multiplayer, the 'most walrus-like' play, a self-kill and a perfect Deathdisc shot, a no-hit Tutorial Dojo run, the playtime and match-count unlocks, a 4-target trick shot, a skilful Deflect hit, a minecart win, a full-health Survival win, and a last-second Timebomb move.",
                "The achievements here: Plays well with others (Try DiscStorm in multiplayer); Long in the tooth (Play multiplayer in the most walrus-like way you can); Dances with death (What's the stupidest thing you could do with a Deathdisc?); One in a million kid (Play multiplayer, get the Deathdisc first, then pull off the perfect shot); Student becomes the master (Demonstrate complete mastery of the Tutorial Dojo); Marathon Man (The longer you play, the more you unlock!); Trick shot (Legends speak of a Discmaster who could hit 4 target dummies in a single shot...); I think you dropped this (Awarded for skilful use of Deflect); WEEEEEEEEEEEEEEEEEEE! (Win from inside the minecart); I will survive (Dominate in multiplayer Survival); In the nick of time (In Timebomb, make your move at the last possible second)."
            ]
        },
        {
            "heading": "Challenge Feats",
            "body": [
                "Beating the Ninja Master using only deflected discs, holding the crown from the start in Regicide, a no-rhino-deaths Robot Factory run, stunning an alien, a three-bomb Lava Lord kill, stunning a player through a bookcase, and the match-count unlock.",
                "The achievements here: Return to sender (Defeat the Ninja Master without using any of your own discs); Dictatorship (Grab the crown first, and hold on for dear life!); Save the Rhinos (Good guys don't throw discs at rhino bots); Close Encounters (Set phasers to Stun); Two is enough thank you (Deal with the Lava Lord, fast); You're out of here! (Stun a player through a bookcase); Doing the Rounds! (The longer you play, the more you unlock!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through all ten campaign levels in single player.",
                "2. Replay levels for A Rank on 5, then on all of them.",
                "3. Do the no-hit Tutorial Dojo and deflect-only Ninja Master challenges.",
                "4. Play multiplayer (with a friend or bots) for the mode achievements: Survival, Timebomb, Regicide, minecart, Deathdisc shots.",
                "5. Mop up the stun and trick-shot feats (alien stun, bookcase stun, 4-target shot).",
                "Tip: the mode-specific multiplayer achievements are all doable in a private match against bots, so you don't need a full lobby - just set up each mode once."
            ]
        }
    ]
};
