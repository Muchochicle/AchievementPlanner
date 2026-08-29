// They Are Billions Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/they-are-billions.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   644930 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "they-are-billions-achievement-guide",
    "category": "game",
    "gameSlug": "they-are-billions",
    "icon": "🧟",
    "title": "They Are Billions Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in They Are Billions - none are hidden. kill & population milestones, survival & campaign wins, challenge runs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "They Are Billions has 34 Steam achievements and none are hidden. They break into cumulative milestones (infected killed, colony population), Survival and campaign wins at each difficulty, and a set of self-imposed Survival challenge runs (no walls, one unit type only, no casualties, no pause).",
                "Nothing is missable and the kill and population counters are account-wide. The real difficulty is the Brutal Survival win and the challenge runs, which need a strong grasp of defensive layouts and economy.",
                "Tip: the infected-kill counter runs to 100 million, so it fills purely with playtime - focus your effort on getting one clean Survival win at each difficulty, then attempt the challenge-run achievements on a smaller/easier map."
            ]
        },
        {
            "heading": "Kill & Population Milestones",
            "body": [
                "The cumulative counters: infected killed from 10,000 up to 100 million, and building a colony with 1,000 / 2,000 / 5,000 / 10,000 colonists.",
                "The achievements here: Infected Killer Level 1 (10.000 infected killed!); Infected Killer Level 2 (50.000 infected killed!); Infected Killer Level 3 (100.000 infected killed!); Infected Killer Level 4 (500.000 infected killed!); Infected Killer Level 5 (1 Million infected killed!); Infected Killer Level 6 (2 Millions infected killed!); Infected Killer Level 7 (5 Millions infected killed!); Infected Killer Level 8 (10 Millions infected killed!); Infected Killer Level 9 (50 Millions infected killed!); Infected Killer Level 10 (100 Millions infected killed!); Colony Mayor Level 1 (Build a colony with 1.000 colonists.); Colony Mayor Level 2 (Build a colony with 2.000 colonists.); Colony Mayor Level 3 (Build a colony with 5.000 colonists.); Colony Mayor Level 4 (Build a colony with 10.000 colonists.)."
            ]
        },
        {
            "heading": "Survival & Campaign Wins",
            "body": [
                "Winning a Survival game on Easy, Accesible, Challenging and Brutal, killing one / two / three Infected Giants on the same map, and winning The New Empire Campaign at 10,000 / 25,000 / 40,000 / 70,000 victory points.",
                "The achievements here: Survivor Level 1 (Win a Survival game on Easy mode.); Survivor Level 2 (Win a Survival game on Accesible mode.); Survivor Level 3 (Win a Survival game on Challenging mode.); Survivor Level 4 (Win a Survival game on Brutal mode.); Giant Slayer Level 1 (Kill an Infected Giant.); Giant Slayer Level 2 (Kill two Infected Giant on the same map.); Giant Slayer Level 3 (Kill three Infected Giant on the same map.); For Quintus! Level 1 (Win The New Empire Campaign with a score of 10.000 victory points.); For Quintus! Level 2 (Win The New Empire Campaign with a score of 25.000 victory points.); For Quintus! Level 3 (Win The New Empire Campaign with a score of 40.000 victory points.); For Quintus! Level 4 (Win The New Empire Campaign with a score of 70.000 victory points.)."
            ]
        },
        {
            "heading": "Challenge Runs",
            "body": [
                "The self-imposed Survival wins: all six Wonders built, no walls/gates/towers, an army of only Soldiers / Rangers / Snipers, no Attack Towers at 200% score, no new units trained, without pausing, and with no casualties.",
                "The achievements here: The Most Wonderful Colony (Build the six wonders in your colony.); Open Mind (Win a Survival game (Score Factor >= 100%) without using walls, gates and towers.); Soldier Wrath (Win a Survival game (Score Factor >= 100%) with just Soldiers in your army. No Attack Towers allowed.); Ranger Revenge (Win a Survival game (Score Factor >= 100%) with just Rangers in your army. No Attack Towers allowed.); Sniper Slaughter (Win a Survival game (Score Factor >= 100%) with just Snipers in your army. No Attack Towers allowed.); No Towers Needed (Win a Survival game (Score Factor >= 200%) without using Attack Towers like Ballista or Executor.); Peaceful (Win a Survival game (Score Factor >= 100%) with no new units trained.); Unstoppable  (Win a Survival game (Score Factor >= 100%) without pausing the game.); Best General (Win a Survival game (Score Factor >= 100%) with no casualties. No Attack Towers allowed.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Learn the game by winning Survival on Easy, then Accesible and Challenging - the population and Giant-kill achievements come along the way.",
                "2. Grind toward a Brutal Survival win with a solid wall-and-tower defence and a strong economy.",
                "3. Do the New Empire Campaign, aiming for the 70,000-point tier on your best run.",
                "4. Attempt the challenge runs on a small, easy map: the single-unit-type ones and No Towers Needed are the hardest.",
                "Tip: Best General (no casualties) and the single-unit-type wins are easiest on a low difficulty with a compact, heavily-walled base - you are trading the challenge of the run for total control of every engagement."
            ]
        }
    ]
};
