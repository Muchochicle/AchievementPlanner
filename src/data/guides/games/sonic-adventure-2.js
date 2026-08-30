// Sonic Adventure 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sonic-adventure-2.json), whose 15 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   213610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sonic-adventure-2-achievement-guide",
    "category": "game",
    "gameSlug": "sonic-adventure-2",
    "icon": "🦔",
    "title": "Sonic Adventure 2 Achievement Guide",
    "summary": "A practical guide to all 15 Steam achievements in Sonic Adventure 2 - none are hidden. Covers the Story Mode, boss, kart and emblem achievements and the Chao and full-completion achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sonic Adventure 2 has 15 Steam achievements and none of them are hidden. They cover the Hero and Dark story routes and the Last story, a full set of A-Ranks (win an A-Rank in every stage), Boss Attack Mode, the expert kart race, the Chao system (name and raise a Chao, raise a Hero and a Dark Chao, win Chao Karate at Super Level), and the emblem grind - unlock 90 emblems and then all 180.",
                "Nothing is missable - stages and modes are all replayable and emblems accumulate on one save. This is a demanding completion: A-Ranking every stage (You Are The Legend) requires near-perfect runs of missions across all six gameplay styles, and Emblem Mania (all 180 emblems) means A-Ranking every mission of every stage plus the Chao races and Kart modes.",
                "Tip: A-Ranking a stage means hitting the mission's score/time/ring threshold - use a video guide for the optimal route of each stage's Mission 1, since the same route usually also A-Ranks the harder missions once you know it."
            ]
        },
        {
            "heading": "Story Mode & Emblems",
            "body": [
                "Clearing stage 1, naming your first Chao, raising all five properties of one Chao to level 10, clearing the Hero and Dark routes and the Last story, Boss Attack Mode, five A-Ranks in one stage, raising a Hero and a Dark Chao, winning the expert kart race, unlocking 90 emblems, and an A-Rank in every stage (You Are The Legend).",
                "The achievements here: Hello World (Clear stage 1 on either side in story mode.); Chao! (Name your Chao for the first time.); Chao Raiser (Raise all 5 properties of any one Chao up to level 10.); HERO! (Clear HERO side in story mode.); DARK! (Clear DARK side in story mode.); Boss Attack (Clear all 3 modes in Boss Attack Mode.); Mission Complete (Win all A RANKs (5 A RANKs) in any one stage in story mode.); Heaven or Hell (Raise a HERO Chao and a DARK Chao with your hero and dark characters respectively.); Beyond Good And Evil (Clear LAST part in story mode.); Speedy Racer (Win NO.1 in expert level in kart race.); Emblem Collector (Unlock 90 emblems.); You Are The Legend (Win A RANK in all stages in Story Mode.)."
            ]
        },
        {
            "heading": "Chao & Full Completion",
            "body": [
                "Playing all Level 4 stages in Action Race, Treasure Hunter and Shooting Battle Chao races, beating Chao Karate at Super Level, and unlocking all 180 emblems (Emblem Mania).",
                "The achievements here: Level 4! (Play all level 4 stages in Action Race, Treasure Hunter and Shooting Battle.); Karate Master (Beat all your enemies in Super Level in Chao Karate 1P mode.); Emblem Mania (Unlock all 180 emblems.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Hero and Dark stories, then the Last story, for those three achievements and Boss Attack.",
                "2. Start a Chao and raise it - name it, get all five stats to level 10, and raise a Hero and a Dark Chao with the appropriate characters.",
                "3. Win the expert kart race and beat Chao Karate at Super Level.",
                "4. Work through A-Ranks: get five in one stage, then A-Rank every stage's Mission 1 for You Are The Legend.",
                "5. Grind toward all 180 emblems - A-Rank every mission of every stage, plus the Chao races' Level 4 stages, for Emblem Mania.",
                "Tip: the Chao races (Level 4 stages) need a strong, well-fed Chao - raise one dedicated racing Chao on Chao Fruit and the right animals early, since a weak Chao simply cannot finish the Level 4 courses."
            ]
        }
    ]
};
