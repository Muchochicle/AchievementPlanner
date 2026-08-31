// Zeno Clash Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/zeno-clash.json), whose 22 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   22200 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "zeno-clash-achievement-guide",
    "category": "game",
    "gameSlug": "zeno-clash",
    "icon": "👊",
    "title": "Zeno Clash Achievement Guide",
    "summary": "A practical guide to all 22 Steam achievements in Zeno Clash - none are hidden. Covers the combat feats, the completion and secret achievements, and the Tower and Pit challenge achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Zeno Clash has 22 Steam achievements and none are hidden. Eight are combat feats (throwing an enemy into another, 50 deflect kicks, a no-hit heavy-enemy fight, bringing the Hunter to 1 HP in melee, a no-unnecessary-weapons run, learning all advanced techniques, 30 torch fireball catches, igniting all pyres), six are completion and secret achievements (finishing the game, the Malstrum's Mansion code, the animal-cruelty and easter-egg feats, the boat target practice, annoying the man behind the door), and eight are the Tower Challenges (1 through 5) and Pit Challenges (-1 through -3).",
                "The catalog marks it difficulty 3 and roughly two playthroughs - the no-weapons 'Street Fighter' run and the harder Tower/Pit challenges want a second, practised pass. Nothing is missable: the story and challenge modes replay.",
                "Tip: do a first run collecting the story secrets (easter egg, door man, Malstrum code), then a 'Street Fighter' no-weapons run, then grind the Tower and Pit challenges."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "Throwing an enemy into another, landing 50 deflect kicks, a no-hit heavy-enemy fight, bringing the Hunter to 1 HP in melee, the no-unnecessary-weapons run, learning all advanced combat techniques, catching 30 fireballs with the torch, and igniting all pyres.",
                "The achievements here: Body Launcher  (Throw an enemy into another. ); Untouchable  (Land 50 deflect kicks. ); Heavy Brawler  (Defeat a heavy enemy without getting hit. ); Almost Number One  (Bring the Hunter down to 1 healthpoint in melee combat. ); Street Fighter  (Beat the game without using weapons unless it is absolutely necessary. ); Metamoq's pupil  (Learn all advanced combat techniques. ); Flame Master  (Capture 30 fireballs with the torch. ); Light the Path  (Ignite all pyres. )."
            ]
        },
        {
            "heading": "Completion & Secrets",
            "body": [
                "Completing the game, inputting the Malstrum's Mansion secret code, killing 50% of the harmless animals, finding the secret easter egg, shooting 21 Mucalosaurus Worshippers from the boat, and annoying the man behind the door.",
                "The achievements here: Zenozoik Adventurer  (Complete the game. ); Monocrome Adventurer  (Input the Malstrum's Mansion secret code. ); Animal Cruelty  (Kill 50% of the harmless animals in the game. ); Easter Egg  (Find the secret easter egg. ); Target Practice  (Shoot 21 Mucalosaurus Worshippers from the boat. ); Door Hater  (Annoy the man behind the door. )."
            ]
        },
        {
            "heading": "Tower & Pit Challenges",
            "body": [
                "Completing Tower Challenge 1 through 5 and Pit Challenge -1 through -3.",
                "The achievements here: Tower Champion 1  (Complete Tower Challenge Number 1. ); Tower Champion 2  (Complete Tower Challenge Number 2. ); Tower Champion 3  (Complete Tower Challenge Number 3. ); Tower Champion 4  (Complete Tower Challenge Number 4. ); Tower Champion 5  (Complete Tower Challenge Number 5. ); Tower Champion -1  (Complete Tower Challenge Number -1. ); Tower Champion -2  (Complete Tower Challenge Number -2.); Tower Champion -3  (Complete Tower Challenge Number -3. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story once, collecting the secrets (easter egg, door man, Malstrum's Mansion code).",
                "2. Do the boat target practice and the harmless-animals feat during that run.",
                "3. Do a 'Street Fighter' run using weapons only when absolutely necessary.",
                "4. Grind the combat feats (50 deflect kicks, no-hit heavy fight, 30 fireball catches).",
                "5. Clear the Tower Challenges (1-5) and Pit Challenges (-1 to -3).",
                "Tip: 'Untouchable' (50 deflect kicks) is easiest on crowds of basic enemies - bait a punch, time the kick, and repeat; it's cumulative across the whole game."
            ]
        }
    ]
};
