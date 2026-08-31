// BattleBlock Theater Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battleblock-theater.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   238460 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battleblock-theater-achievement-guide",
    "category": "game",
    "gameSlug": "battleblock-theater",
    "icon": "🐈",
    "title": "BattleBlock Theater Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in BattleBlock Theater (4 hidden). Covers the story and finale achievements, the arena and Gift Shop achievements, and the combat and community achievements. Four achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "BattleBlock Theater has 30 Steam achievements and four are hidden - 'Secret Finder' (trigger a hidden secret stage by touching a hidden marble in a level), 'Traitor' (kill your co-op partner 50 times), 'Consolation Prize' (die an enormous number of times) and 'Prison Food' (get eaten by one of the raccoon-like 'Feed' creatures for the first time). The rest are open: the story-grade achievements (a letter grade in every level in Solo, Co-op, Insane Solo and Insane Co-op), the encores and finales, 10 Golden Hats, the arena wins, and the Gift Shop completion (all prisoners freed, all weapons unlocked).",
                "The catalog marks it difficulty 4 and roughly two playthroughs - 'Insane Solo Star' and 'Insane Coop Star' (a letter grade in every level on Insane) are demanding, and 'The Professional' (100 arena wins) and 'Consolation Prize' are long grinds. Nothing is missable: levels and arena modes replay.",
                "Tip: do the Normal Solo run first for 'Solo Star' and the Golden Hats, then an Insane run - the Insane grades are the same levels with faster ball movement and less room for error."
            ]
        },
        {
            "heading": "Story & Finales",
            "body": [
                "Completing the opening sequence, the first four finales, an A++ in 10 levels, a letter grade in every level in Normal Solo, Normal Co-op, Insane Solo and Insane Co-op Story Mode, completing all Encores, collecting 10 Golden Hats, and a letter grade in all eight finales.",
                "The achievements here: Cast Member (Complete the story's opening sequence in any mode.); Seasoned Performer (Complete the first four finales in any mode.); Virtuoso (Get an A++ in 10 levels.); Solo Star (Get a letter grade in every level (except Encores) in Normal Solo Story Mode.); Coop Star (Get a letter grade in every level (except Encores) in Normal Co-op Story Mode.); Insane Solo Star (Get a letter grade  in every level (except Encores) in insane solo story mode.); Insane Coop Star (Get a letter grade in every level (except Encores) in insane co-op story mode.); Crowd Pleaser (Complete all the Encores in any mode.); Secret Hat Hunter (Collect 10 Golden Hats.); Hats Off (Get a letter grade in all eight finales in any mode.)."
            ]
        },
        {
            "heading": "Arena & Gift Shop",
            "body": [
                "100 arena wins, a win in one arena match of every mode, the hidden 'Secret Finder' secret stage, freeing a prisoner, getting a new weapon, freeing 50 prisoners in the Gift Shop, collecting all prisoners of one head shape, freeing every prisoner, unlocking every weapon, and making a trade.",
                "The achievements here: The Professional (Be on the winning team in 100 arena matches.); All Around Joe (Be on the winning team in one arena match of every mode.); Secret Finder (Trigger a hidden secret stage - touch a hidden marble/gem in a level and the screen goes black with strange music, awarding bonus gems for everyone.); Nail File Cake (Free a fellow prisoner.); Black Marketeer (Get yourself a cool new weapon.); Jail Breaker (Free 50 prisoners in the Gift Shop.); Social Butterfly (Collect all the prisoners of one head shape.); Freedom Hero (Free all the prisoners in the Gift Shop by unlocking or trading.); Armed and Dangerous (Collect all the weapons in the Gift Shop by unlocking or trading.); First Time Trader (Make a trade with someone.)."
            ]
        },
        {
            "heading": "Combat & Community",
            "body": [
                "Completing an encore level in Story Mode, the hidden 'Traitor' co-op kills, 100 kills, playing online with the Behemoth or a 'Chicken Toucher', using every melee move and every weapon successfully, the hidden 'Consolation Prize' and 'Prison Food' feats, completing 10 user-created levels in a Featured Story playlist, and hosting a game of user-created levels.",
                "The achievements here: Take A Bow (Complete an encore level in Story Mode.); Traitor (Kill your co-op partner 50 times.); Deadly Performer (Get 100 kills.); Chicken Toucher (Play with the Behemoth or someone with this achievement in an online game.); Melee Master (Successfully use every melee attack move.); Weapons Master (Use each weapon successfully.); Consolation Prize (Die an enormous number of times across your playthrough.); Prison Food (Get eaten for the first time by one of the raccoon-like 'Feed' creatures.); Theater Critic (Complete 10 user-created levels in a single Featured Story playlist.); Theater Manager (Download and host a game of user-created levels.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Normal Solo Story Mode for a letter grade in every level and the 10 Golden Hats.",
                "2. Do the encores and finales, and get an A++ in 10 levels.",
                "3. Play an Insane Solo run (and a Co-op run) for the Insane Star achievements.",
                "4. Grind the Gift Shop - free every prisoner and unlock every weapon through play and trading.",
                "5. Play arena for 100 wins, and do the hidden feats (Secret Finder, Traitor, Prison Food) along the way.",
                "Tip: 'Consolation Prize' comes on its own if you're doing the Insane grades - the deaths pile up fast; there's no need to farm it deliberately."
            ]
        }
    ]
};
