// EA SPORTS FC 25 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ea-sports-fc-25.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2669320 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ea-sports-fc-25-achievement-guide",
    "category": "game",
    "gameSlug": "ea-sports-fc-25",
    "icon": "⚽",
    "title": "EA SPORTS FC 25 Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in EA SPORTS FC 25 - none are hidden. Covers Player and Manager Career, Clubs and the Rush 5v5 mode, the on-pitch skill and tactics feats, Football Ultimate Team, and Kick Off and the Season Pass.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EA SPORTS FC 25 has 39 Steam achievements and none of them are hidden. They spread across the game's modes: Career (win a continental trophy with an Icon, win the Champions League, develop a player to a Role ++), Clubs and the new Rush 5v5 mode (promotions, playoff wins, skill-game grades), a set of on-pitch feats (score a free kick, a power shot, a Precision Shooting goal, win a penalty shoot-out without missing), Football Ultimate Team (Squad Building Challenges, chemistry, Evolutions, Squad Battles clean sheets, Champions qualification), and a few miscellaneous goals (Kick Off matches with a friend, a Women's International match, finishing a Season Pass).",
                "Nothing is missable - FC 25 is a live service game and every achievement can be worked toward across as many matches and seasons as you like. The longest are the Ultimate Team goals (200 club appearances with one player, 10 clean sheets in Squad Battles, Champions Play-Off qualification), which are time rather than skill gated.",
                "Tip: many of the fiddly one-off feats (power shot goal, Precision Shooting goal, free-kick goal, penalty shoot-out) are easiest to farm in an offline Kick Off match on the lowest difficulty against a friend or a weak CPU side, where you can retry freely without affecting any mode's record."
            ]
        },
        {
            "heading": "Player & Manager Career",
            "body": [
                "The Career mode achievements - winning a continental trophy with an Icon, Player of the Year or the Ballon d'Or via an Origin Story, the Champions League, player development to a Role ++, a full Role ++ starting XI, a 5v5 Youth Tournament and youth recruitment.",
                "The achievements here: Silverware Legacy (Win any continental club competition trophy in Player Career using an Icon); From Origins to Legacy (Win Player of the Year or Ballon d'Or in Player Career using one of the 4 predefined Origin Stories); European Glory (Win the UEFA Champions League or the UEFA Women's Champions League in Player or Manager Career); Perfect Fit (Get a player to a Player Role ++ through the use of development plans); Tactical Sync (Field a starting XI with all the players having a Player Role ++); Rising Talent (Win a 5v5 Youth Tournament); Scouting Network (Recruit a youth player to your Academy)."
            ]
        },
        {
            "heading": "Clubs & Rush",
            "body": [
                "The Clubs and Rush 5v5 achievements - winning your first Clubs League and Playoff matches, league promotion, reaching Elite Division, a Clubs Skill Game A grade, spending Clubs Coins, and playing and ranking up in Rush.",
                "The achievements here: Campeones (Finish as the Champion of your Clubs Playoff table); We're Going Up (Earn a Clubs League Promotion with your Club); Top of the Pyramid (Reach Elite Division with your Club in a Clubs League Season); First of Many (Win your first Clubs League Match); Walk the Walk (Win your first Clubs Playoff Match); Make the Grade (Receive an A grade in a Clubs Skill Game); Shop till you drop (Purchase an item from the Clubs Store using Clubs Coins); That's One (Play your first Rush Match in Clubs); Gold Rush (Improve your Rush Rank in Clubs); For the Club (Play Rush with a full squad of Clubmates)."
            ]
        },
        {
            "heading": "On-Pitch Skills & Tactics",
            "body": [
                "The gameplay feats - scoring from a free kick, a power shot, Precision Shooting and with an active PlayStyle+, winning a penalty shoot-out without missing, completing 25 Precision Passes, winning with competitive settings on, and creating a custom Tactic.",
                "The achievements here: Dead-ball specialist (Score a goal from a Free Kick); Intuition and Execution (Win a penalty shoot-out without missing); Power Shot (Score a goal using the power shot mechanic); Bring it on (Play and win a match with the competitive settings turned on during any offline mode); Surgical Aim (Complete 25 Precision Passes); Bullseye (Score a goal using Precision Shooting); PlayStyles+ (Score a goal with an active PlayStyle+); Tactical Mastermind (Create, customize and name your own Tactic)."
            ]
        },
        {
            "heading": "Football Ultimate Team",
            "body": [
                "The Ultimate Team achievements - 10 Squad Building Challenges, a mixed male/female squad, 33 Chemistry Points, a custom tactic, 10 Squad Battles clean sheets, an Evolution, Champions Play-Off qualification, 200 club appearances, 10 Rush matches and applying a manager's Tactical Preset.",
                "The achievements here: Squad Building Composer (Complete 10 Squad Building Challenges in Football Ultimate Team); Equal Footing (Play a match in UT with a squad that has players from both male and female leagues); Chemistry Degree (Build a squad with 33 Chemistry Points in Football Ultimate Team. Excludes Concept Players and SBCs); Tactically Savvy (Create your own custom tactic in Football Ultimate Team); You Shall Not Score! (Keep 10 clean sheets in UT Squad Battles); Final Form (Complete an Evolution and claim the upgrades in UT); Play-Off Passport (Earn enough UT Champions Qualification Points to qualify for UT Champions Play-Offs); The Myth, the Legend! (Reach 200 club appearances with a player in Football Ultimate Team); Social Kickabout (Play 10 matches of Rush in Football Ultimate Team); In the Gaffer We Trust (Apply the Tactical Preset from any manager in Football Ultimate Team)."
            ]
        },
        {
            "heading": "Kick Off & Season Pass",
            "body": [
                "The remaining goals - winning a UEFA Champions League Final, playing 5 H2H Kick Off matches with a friend, playing a Women's International match, and fully completing a Season Pass.",
                "The achievements here: European Legend (Win the UEFA Champions League Final); Best of Five (Play 5 H2H matches with a friend in Kick Off); Football is Everything (Play a Women's International football match); One season, wonderful! (Fully complete and unlock all levels in a Season Pass)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Farm the one-off gameplay feats (free kick, power shot, Precision Shooting, penalty shoot-out, PlayStyle+ goal, 25 Precision Passes) in offline Kick Off matches where retries are free.",
                "2. Play a Career save - Player or Manager - long enough for the trophy, development and Origin Story achievements.",
                "3. Work through Clubs and Rush: first match and playoff wins, a promotion, Elite Division, a skill-game A grade, and Rush rank-up.",
                "4. Grind the Ultimate Team list: SBCs, chemistry, a custom tactic, Evolutions, Squad Battles clean sheets, Rush matches and Champions qualification.",
                "5. Mop up the miscellaneous achievements - a Champions League Final win, 5 Kick Off H2H matches with a friend, a Women's International match and a completed Season Pass.",
                "Tip: the Ultimate Team achievements that ask for cumulative totals (200 appearances, 10 clean sheets, 10 SBCs) are best treated as background progress - keep one evolving squad and they complete over a few weeks of normal play."
            ]
        }
    ]
};
