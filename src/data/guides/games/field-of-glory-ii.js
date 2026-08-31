// Field of Glory II Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/field-of-glory-ii.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   660160 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "field-of-glory-ii-achievement-guide",
    "category": "game",
    "gameSlug": "field-of-glory-ii",
    "icon": "🛡️",
    "title": "Field of Glory II Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Field of Glory II - none are hidden. Covers the battles, difficulty and campaign achievements, and the multiplayer and tactical-feat achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Field of Glory II has 20 Steam achievements and none are hidden. Ten cover battles and campaigns - a first win, wins on Emperor and Deity difficulty, wins with and against Romans on Legate+, wins with a cavalry, pike or Slave Revolt army, and winning a campaign and a 15-battle campaign. The other ten are multiplayer (create a challenge, finish a losing game without conceding, win a game) and tactical feats (a flank charge that auto-drops cohesion, rallying a routing unit, killing the enemy C-in-C, routing elephants by shooting, an artillery cohesion drop, and the 'snake eyes' / 'double six' luck achievements).",
                "The catalog marks it difficulty 3. The Deity-difficulty win and the two RNG-dependent luck achievements ('Unlucky', 'Lucky') are the only awkward ones; the rest come with normal play.",
                "Tip: play the campaigns and skirmishes doing the army-type and tactical-feat achievements as they come up, and grind Deity difficulty on a favourable matchup."
            ]
        },
        {
            "heading": "Battles, Difficulty & Campaigns",
            "body": [
                "A first battle win, wins on Emperor and Deity difficulty, a win with Romans and against Romans on Legate+, a win with a cavalry army, a pike army and a Slave Revolt army, and winning a campaign and a 15-battle campaign.",
                "The achievements here: Battle Winner (You won your first battle!); Emperor (Won a battle on Emperor difficulty); Deity (Won a battle on Deity difficulty ); Legate (Won a battle with Romans on at least Legate difficulty); Freedom Fighter (Won a battle against Romans on at least Legate difficulty); Horse Lord (Won a battle with a cavalry army on at least Legate difficulty); Strategos (Won a battle with a pike army on at least Legate difficulty); Spartacus (Won a battle with a Slave Revolt army against Romans); Campaigner (Won a campaign); Epic Campaigner (Won a 15 battle campaign)."
            ]
        },
        {
            "heading": "Multiplayer & Tactical Feats",
            "body": [
                "Creating a Multiplayer challenge, finishing a losing Multiplayer game without conceding, a Multiplayer win, a flank charge that auto-drops cohesion, rallying a routing unit with a general, killing the enemy C-in-C, routing elephants by shooting, an artillery-fire cohesion drop, and the 'snake eyes' ('Unlucky') and 'double six' ('Lucky') roll achievements.",
                "The achievements here: Challenger (Created a Multiplayer challenge); Good Loser (Fought a losing Multiplayer battle to completion without conceding); Victor (Won a Multiplayer battle); Flanker (Made an enemy unit autodrop cohesion from a flank charge); Hero (Rallied a routing unit with a general); Nemesis (Killed an enemy C-in-C); Elephant Bane (Routed enemy elephants by shooting); Artillerist (Made a unit drop cohesion from artillery fire); Unlucky (Suffered a double cohesion drop which could only occur on a roll of snake eyes); Lucky (Passed a cohesion test when only double six would have passed)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaigns, winning one and a 15-battle one.",
                "2. Do the army-type wins on Legate+ (cavalry, pike, Slave Revolt vs Romans, Romans, and against Romans).",
                "3. Do the tactical feats in battle: a flank auto-drop, a general rally, a C-in-C kill, shooting elephants into a rout, an artillery cohesion drop.",
                "4. Play a Multiplayer game: create a challenge, win one, and finish a losing one without conceding.",
                "5. Win a battle on Deity difficulty (pick a strong army against a weak one).",
                "Tip: 'Unlucky' and 'Lucky' are pure RNG (a double-1 or double-6 cohesion roll) - they usually happen naturally over enough battles, so leave them to chance rather than chasing them."
            ]
        }
    ]
};
