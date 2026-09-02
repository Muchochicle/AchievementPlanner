// Among Us Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/among-us.json), whose 33 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   945360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / TrueSteamAchievements) and is a curatorial summary. Every
//   non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "among-us-achievement-guide",
    "category": "game",
    "gameSlug": "among-us",
    "icon": "🧪",
    "title": "Among Us Achievement Guide",
    "summary": "A practical guide to all 33 Steam achievements in Among Us (8 hidden). 8 of the 33 are hidden - researched from community achievement guides, since Steam ships them with no description.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Among Us has 33 Steam achievements, 8 of them hidden. The kill and task tracks are tiered totals - 1/5/50/150 lifetime kills and 10/100/500 lifetime tasks. Four map-specific achievements ask for 3 wins each on Skeld, MIRA, Polus and The Airship. The core win-condition achievements cover winning as crew by completing every task, winning as Impostor by sabotage or by killing everyone or by vote, and surviving as crew to the end.",
                "The 8 hidden achievements are SCOURGE (150 lifetime kills), TASKMASTER (500 lifetime tasks), NEVER SUSPECT A THING (win a 2-Impostor game with both Impostors surviving to the end), IMPOSSIBLE TASK (complete the card-swipe task on the first try), WATCH ME SCAN (get killed by the Impostor during your own medbay scan), CREWPOSTOR (fix a sabotage that you yourself called as Impostor), H U N G E R (get 3 kills before a single meeting is called), and CIRCUMVENTER (win a game as Impostor without ever using a vent). The remaining achievements cover Hide n Seek Mode's own win/kill/task tracks.",
                "The catalog marks it difficulty 3 - most of it is casual multiplayer play, but a handful of the hidden achievements (CIRCUMVENTER, H U N G E R, NEVER SUSPECT A THING) require a specific, uncooperative round rather than just playing normally."
            ]
        },
        {
            "heading": "Kills & Tasks",
            "body": [
                "Tiered lifetime kill totals (1/5/50, and the hidden 150) and lifetime task totals (10/100, and the hidden 500).",
                "The achievements here: A TASTE FOR IT (Get your first kill); KILLER (Get 5 total kills); ASSASSIN (Get 50 total kills); SCOURGE (Get 150 total kills.); INTERN (Complete 10 total tasks); MANAGER (Complete 100 total tasks); TASKMASTER (Complete 500 total tasks.)."
            ]
        },
        {
            "heading": "Map Wins",
            "body": [
                "Winning 3 games each on Skeld, MIRA HQ, Polus and The Airship.",
                "The achievements here: A SHIP ADRIFT (Win 3 games on Skeld); CORPORATE LOCKDOWN (Win 3 games on MIRA); UNEARTHED (Win 3 games on Polus); TOPPAT CREWMATES (Win 3 games on The Airship)."
            ]
        },
        {
            "heading": "Win Conditions & Impostor Feats",
            "body": [
                "Winning as crew by completing every task, as Impostor by sabotage, by killing every crewmate, or by vote, surviving as crew to the end, a lights-sabotage kill, and voting only for the real Impostor as crew, plus the hidden two-Impostor survival win, first-try card swipe, medbay-scan death, self-sabotage fix, 3-kills-before-a-meeting feat, and a vent-free Impostor win.",
                "The achievements here: NEVER SUSPECT A THING (Win a 2-Impostor game with both Impostors alive at the end.); A WELL-OILED MACHINE (Win a game by completing all tasks as a crewmate); SABOTEUR (Win a game by sabotaging a critical system as Impostor.); SLASHER (Win a game by killing all crewmates as Impostor.); SURVIVOR (Survive and win a game as a crewmate); SMOOTH TALKER (Win a game by vote as Impostor); IMPOSSIBLE TASK (Complete the card-swipe task on your first try.); LIGHTS OUT (Get a kill during a lights sabotage); WATCH ME SCAN (Get killed by the Impostor during your own medbay scan.); CREWPOSTOR (Fix a sabotage that you yourself called as Impostor.); H U N G E R (Get 3 kills before a single meeting is called.); SHERLOCK (Win a game as crew with your only votes being for the Impostor); CIRCUMVENTER (Win a game as Impostor without using a vent.)."
            ]
        },
        {
            "heading": "Hide n Seek Mode",
            "body": [
                "Hide n Seek Mode's own tracks - surviving as crew, an Impostor sweep of every hider, completing all your tasks, a disguised kill, blocking a kill as guardian angel, and tiered hider-win and seeker-kill totals.",
                "The achievements here: HIDDEN TALENT (Survive a Game as Crew in Hide n Seek Mode); NO ESCAPE (Kill all hiders as impostor in Hide n Seek Mode); PERFORM UNDER PRESSURE (Do all your tasks in Hide n Seek Mode); TRUST NO ONE (Kill Someone while disguised as them); I CAN BE YOUR ANGLE (Block a kill as a guardian angel); YOU CAN'T RUN (10 wins as a hider in Hide n Seek Mode); BUT YOU CAN HIDE (50 wins as a hider in Hide n Seek Mode); YOU CAN RUN (100 kills as a seeker in Hide n Seek Mode); BUT YOU CAN'T HIDE (200 kills as a seeker in Hide n Seek Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play casual public or private games, banking the kill and task totals and the 4 map-specific wins naturally.",
                "2. Go for the straightforward win-condition achievements (all-tasks win, sabotage win, vote win, survive-to-the-end) across a normal string of games.",
                "3. Play a private lobby with friends for the harder hidden feats that need cooperation or a specific setup - a vent-free Impostor win, 3 kills before the first meeting, or a coordinated 2-Impostor survival win.",
                "4. Clear Hide n Seek Mode's own achievement track in a few dedicated rounds of that mode.",
                "Tip: 'CIRCUMVENTER' (a vent-free Impostor win) is easiest on a small map like MIRA HQ with a cooperative group - agree in advance not to call it out if you're seen near a body, so a slower, vent-free kill pattern doesn't get you voted out."
            ]
        }
    ]
};
