// EA SPORTS FC 24 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ea-sports-fc-24.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2195250 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "ea-sports-fc-24-achievement-guide",
    "category": "game",
    "gameSlug": "ea-sports-fc-24",
    "icon": "⚽",
    "title": "EA SPORTS FC 24 Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in EA SPORTS FC 24 - volta & pro clubs, gameplay skills, ultimate team, player & manager career, kick off & women's football.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "EA SPORTS FC 24 has 40 Steam achievements and none are hidden. They span Volta and Pro Clubs, the new gameplay mechanics (Power Shots, Precision Passing, PlayStyles+), a large Ultimate Team block, Player and Manager Career, and a couple of Kick Off / Women's football goals.",
                "Nothing is missable, but several are grind- or live-service-gated: Ultimate Team milestones, UT Champions qualification, and the Career-mode long goals. Difficulty and match settings can be lowered freely for the pure gameplay achievements.",
                "Tip: knock out the gameplay-mechanic achievements (free kick, power shot, precision shot/pass) in an offline exhibition against the lowest difficulty, then work Ultimate Team and Career at your own pace."
            ]
        },
        {
            "heading": "Volta & Pro Clubs",
            "body": [
                "The Volta Football goals (90 OVR avatar, a Squads win with friends, 50 vanity items, a Volta Shop purchase, Season Level 7) and Pro Clubs (Playoff champion, a League promotion, Elite Division, first Clubs win, first Playoff win, an A grade in a Skill Game).",
                "The achievements here: Volta's best (Reach 90 OVR with your Avatar in Volta Football); Teamwork works (Win a Volta Squads match with 3 friends); Full Wardrobe (Unlock 50 different vanity items); Shop till you drop (Purchase an item in the Volta Shop using Volta Coins); On the way up (Reach Level 7 in a Season in Volta Football or Clubs); Campeones (Finish as the Champion of your Clubs Playoff table); We're Going Up (Earn a Clubs League Promotion with your Club); Top of the Pyramid (Reach Elite Division with your Club in a Clubs League Season); First of Many (Win your first Clubs League Match); Walk the Walk (Win your first Clubs Playoff Match); Make the Grade (Receive an A grade in a Clubs Skill Game)."
            ]
        },
        {
            "heading": "Gameplay Skills",
            "body": [
                "The mechanic achievements: a free-kick goal, a clean penalty shoot-out, a Power Shot goal, playing/winning with competitive settings on offline, 25 Precision Passes, a Precision Shooting goal, and a goal with an active PlayStyle+.",
                "The achievements here: Dead-ball specialist (Score a goal from a Free Kick); Intuition and Execution (Win a penalty shoot-out without missing); Power Shot (Score a goal using the power shot mechanic); Bring it on (Play/Win a match with the competitive settings turned on during any offline mode); Surgical Aim (Complete 25 Precision Passes); Bullseye (Score a goal using Precision Shooting); PlayStyles+ (Score a goal with an active PlayStyle+)."
            ]
        },
        {
            "heading": "Ultimate Team",
            "body": [
                "The Football Ultimate Team block: 10 Squad Building Challenges, a 33-Chemistry squad, a custom tactic, 10 Squad Battles clean sheets, a Moment, UT Champions Play-Off qualification, Division Rivals Milestone 3, 200 club appearances with a player, a mixed male/female league squad, an Evolution level and a full Evolution, and the last level of Seasonal Objectives.",
                "The achievements here: Squad Building Completionist (Complete 10 Squad Building Challenges in Football Ultimate Team); The Alchemist (Build a squad with 33 Chemistry Points in Football Ultimate Team. Excludes Concept Players and SBCs); Trust me, I'm a Manager (Create your own custom tactic in Football Ultimate Team); Defensive Masterclass (Keep 10 clean sheets in UT Squad Battles); One Moment Please! (Complete 1 Moment in Football Ultimate Team); Welcome to the Big Leagues! (Earn enough UT Champions Qualification Points to qualify for UT Champions Play-Offs); Seasoned Veteran (Reach Milestone 3 in a UT Division Rivals Season); Record Breaker (Reach 200 club appearances with a player in Football Ultimate Team); We're in the Game! (Play a match in UT with a squad that has players from both male and female leagues); Level Up! (Complete an Evolution level in UT and claim the upgrades); Graduation Day (Complete an Evolution and claim the upgrades in UT); End of the Line (Reach the last level of a Seasonal Objectives Progress during any Season of UT 24)."
            ]
        },
        {
            "heading": "Player & Manager Career",
            "body": [
                "The Career goals: a 75%+ dominant personality trait, following your agent's recommendation twice, winning the UEFA Women's Champions League, a face guard and tattoo in Player Career, Expert coaches in every department, a Tactical-View jump-in goal, the full pre-match routine (report, training, press conference), and winning the UEFA Champions League Final.",
                "The achievements here: Dazzling Personality (Develop a dominant personality trait of over 75%); Precious Advice (Follow your agent's team recommendation twice during the same Player Career); Winning in Style (Win the UEFA Women's Champions League Final); Fashion Icon (Equip a face guard and a tattoo from the avatar customization menu in Player Career Mode); Golden Generation (Hire an Expert level coach for each department in your club); An ace up your sleeve (While spectating a match in Tactical View in Manager Career, jump in and score a goal); Do Your Homework (Check a pre-match report, complete a training session and attend a press conference before a match); European Legend (Win the UEFA Champions League Final)."
            ]
        },
        {
            "heading": "Kick Off & Women's Football",
            "body": [
                "Playing 5 Head-to-Head matches with a friend in Kick Off, and playing a Women's International match.",
                "The achievements here: Best of Five (Play 5 H2H matches with a friend in Kick Off); Football is Everything (Play a Women's International football match)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play an offline exhibition on the lowest difficulty for the gameplay-mechanic achievements (free kick, power shot, precision shot/pass, PlayStyle+).",
                "2. Do the Career-mode achievements across a Player Career and a Manager Career save (the personality, coaching, routine and cup-final goals).",
                "3. Work Ultimate Team steadily: SBCs, Squad Battles, Evolutions, Rivals and the seasonal objectives.",
                "4. Play Volta and Pro Clubs for their blocks, and finish with the Kick Off and Women's football matches.",
                "Tip: Intuition and Execution (a perfect penalty shoot-out) is easiest against the AI on the lowest difficulty in Kick Off - aim into a corner every time and the keeper rarely reaches it."
            ]
        }
    ]
};
