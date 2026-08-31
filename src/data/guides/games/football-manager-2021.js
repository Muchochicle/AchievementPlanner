// Football Manager 2021 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/football-manager-2021.json), whose 98 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1263850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "football-manager-2021-achievement-guide",
    "category": "game",
    "gameSlug": "football-manager-2021",
    "icon": "📋",
    "title": "Football Manager 2021 Achievement Guide",
    "summary": "A practical guide to all 98 Steam achievements in Football Manager 2021 - none are hidden. Covers the match and player awards, the managerial milestones and club records, the unbeaten and title-winning streaks, the Dynamics and squad-management goals, and the career-earnings and Fantasy Draft achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Football Manager 2021 has 98 Steam achievements and none of them are hidden. They range from quick early wins (score a hat-trick, win a Manager of the Month award, win promotion, sign and sell a player) to long-haul career goals (win 20 cup competitions, stay at one club for 20 seasons, 100 million in career earnings, become the greatest manager of all-time). A large block covers streaks and records (unbeaten runs, consecutive clean sheets, scoring streaks, an Invincible season), another covers Dynamics and squad management (managerial support, dressing-room atmosphere, retraining a player, delegating staff), and a big chunk is online Fantasy Draft.",
                "Nothing is missable - a single long save can accumulate almost every achievement, and the streak and record achievements simply require the right run of form at any point. The Fantasy Draft achievements need online play but no specific timing.",
                "Tip: start at a strong club in a weaker league for the fastest access to the streak, title and Invincible achievements, then use a long-term save at that club (or one you take over) to grind the 10- and 20-season loyalty and career-earnings goals."
            ]
        },
        {
            "heading": "Match & Player Awards",
            "body": [
                "The early match and player-recognition achievements - hat-tricks, comebacks, promotion, a domestic cup, team-of-the-week and team-of-the-year selections, top scorers, and individual World Cup and World Player awards.",
                "The achievements here: Hat-trick (Your player scored a hat-trick in a competitive match); Top Of The Class (You won a manager of the month award); You're Up! (Guide your team to promotion in a domestic league); Cup Glory! (You won a top domestic cup); Team Performance (Five of your players were named in a team of the week); International Superstar (One of your players was selected in the World Cup Best XI); Parked The Bus (Your team didn't concede a goal in 5 consecutive competitive games); Comeback King! (You won a competitive match after being 2 or more goals down at half-time); Star Man (One of your players was selected in the Team Of The Year); Goal Machine (Your player was the top league goalscorer over an entire season); Unstoppable Force (Your team scored the most league goals over an entire season); Iron Curtain (Your team conceded the least league goals over an entire season); Scoring Streak (Your team scored in 10 consecutive competitive matches); Unbeatable! (Your team was unbeaten in 10 consecutive competitive matches); Parked The Tank (Your team didn't concede a goal in 10 consecutive competitive matches); National Service (You were offered a job in senior international management); The Boss (You won the Manager Of The Year award); Best In Europe (Your player won a European Player award); Golden Boot (Your player was the top scorer at a World Cup); Best In The World (Your player won the World Player Of The Year award)."
            ]
        },
        {
            "heading": "Managerial Milestones & Club Records",
            "body": [
                "The manager-career goals - win streaks, domestic doubles, consecutive titles, 20 cup wins, Manager of the Year and of the Month totals, an international continental title, the World Cup, board confidence, transfer records and disciplinary actions.",
                "The achievements here: You're On Fire (You won 10 consecutive competitive matches); Do The Double (You won a nation's top league and cup competitions in the same season); Domination (You have won 3 consecutive top division league titles); Part Of The Furniture (You have stayed at one club for 10 seasons); Trophy Hoarder (You have won 20 cup competitions); Best In The Business (You have won the Manager Of The Month award 10 times); Freedom Of The Country (You have won an international continental competition); On Top Of The World (You have won the World Cup); Legend (You have won the Manager Of The Year award 5 times); Invincible! (Your team played the entire season without losing a league game); First Victory (You guided your team to victory in a competitive fixture); Value For Money (Congratulations! You have played Football Manager for 30 seasons); Club Legend (You have stayed at one club for 20 seasons); The Greatest (You have become the greatest manager of all-time!); World Renowned (You have made it into the worldwide hall of fame); Headhunted (You were offered a job by a larger team than you were managing); He's Sold! (You sold a player to another team); Thumping (Your team won a competitive match by at least 5 goals); Going Places (Your board decide to build a new stadium); Overachiever! (Your team was chosen as the league overachieving team); Record Signing (You broke your club's record transfer fee spent on a player); Record Sale (You broke your club's record transfer fee received for a player); Full Faith (You have gained 90% overall board confidence); Shrewd Spender (You have gained 90% board confidence in controlling the club's wage bill); Beating Expectations (You have gained 90% board confidence in overall competitions); We Trust You (You gained the trust of the board to select a feeder team); I'm The Boss! (You fined one of your clubs players); He's Signed! (You signed a player for your team)."
            ]
        },
        {
            "heading": "Streaks, Titles & Continental Glory",
            "body": [
                "The clean-sheet, scoring and unbeaten streaks up to 30 matches, goal-of-the-month and goal-of-the-season awards, 50-million transfers, Team of the Year selections, 10 and 20 Manager of the Year awards, a childhood-club offer and a bottom-to-top promotion.",
                "The achievements here: Clean Sheet (You played a competitive match without conceding a goal); What A Goal! (Your player collected a goal of the month award); Superb Strike (Your player collected a goal of the season award); Splashing The Cash (You bought a player for £50 million or more); Cash To Burn (You sold a player for £50 million or more); Outstanding Defence (Your team didn't concede a goal in 20 consecutive competitive matches); Tremendous Trio (3 of your players were selected in the Team Of The Year); Fantastic Five (5 of your players were selected in the Team Of The Year); Attack! (Your team scored a goal in 20 consecutive competitive matches); Irresistible Force (Your team scored a goal in 30 consecutive competitive matches); On A Roll (Your team hasn't lost in 20 matches); Top Form (Your team hasn't lost in 30 matches); Immovable Object (Your team hasn't conceded a goal in 30 consecutive competitive matches); Icon (You have received 10 Manager Of The Year awards); Immortality (You have received 20 Manager Of The Year awards); Childhood Dream (Get offered the chance to manage your favourite team); National Hero (You have won promotion from the bottom to the top division in a nation)."
            ]
        },
        {
            "heading": "Dynamics, Staff & Squad Management",
            "body": [
                "The Network Game, in-game store, Fantasy Draft intro, Dynamics (managerial support, dressing-room atmosphere, match cohesion), position retraining, injury-crisis wins, scouting assignments and full staff delegation.",
                "The achievements here: Head-to-Head (You have won a match against another person on a Network Game); Invitational (You invited a friend to a Network Game); Window Shopping (You visited the in-game store); Living the Dream (You have played against an AI team in Fantasy Draft Mode); Beat your Mates  (You won a Fantasy Draft competition); Armchair Expert (You have watched match goals/highlights on the pop up viewer); Perfect Host (You hosted a Fantasy Draft game and remained unbeaten); Total Support (Your players have total Managerial Support for you in Dynamics); Superb Dressing Room Atmosphere (You have superb Dressing Room Atmosphere in Dynamics); He's a Natural (Retrain a player to becoming natural into a new position); Impervious (Win a competitive match with over 10 players out injured); Clean Bill of Health (No injuries for 2 months); Rushed signing (Sign a player recommended by your scouting team from a short term focus assignment); Eyes and Ears (Assign a scout to watch a particular match); Mr Delegator (Delegate all staff responsibilities to another member of staff)."
            ]
        },
        {
            "heading": "Career Earnings & Fantasy Draft",
            "body": [
                "Career earnings from 1 million to 100 million, the online Fantasy Draft achievements (100 and 200 match points, 25 knockout cups, 25 draft-match wins, shoestring budgets, win streaks), worldwide scouting knowledge, set-piece routines, a saved match plan and the Club World Cup.",
                "The achievements here: Millionaire's Club (Career earnings over 1 Million); Money, Money, Money (Career earnings over 10 Million); The Rich Get Richer (Career earnings over 100 Million); One more draft (Continue a Fantasy Draft competition over into the next season); Beat all the AI Managers (Beat all of the AI Managers in Fantasy Draft mode); 100 club (Play 100 matches online in Fantasy Draft); Knockout King (Win 25 knockout cups online in Fantasy Draft); Shoestring Budget (Complete a Fantasy Draft competition on a shoestring budget); 200 Club (Earn 200 match points in Fantasy Draft online); Draft Dominator (Win 25 draft matches online); Draft Rivalry (Win 10 competitive matches against another player online); Draft Value (Beat four players in the draft spending the least online); Excellent Match Cohesion (Reach excellent match cohesion in Dynamics); Online Streak (Win all matches in a Fantasy Draft tournament); Scout's Honour (Attain extensive worldwide scouting knowledge); Set Piece Specialist (Save individual free kick routines for all 16 possible combinations.); There Is Always Plan B (Using a pre-saved match plan during a match); Win the Club World Cup (Win the Club World Cup)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Take a strong club in a mid-tier league and chase the early awards and streak achievements (hat-tricks, comebacks, unbeaten runs, an Invincible season).",
                "2. Win domestic doubles, consecutive titles and cups to build toward the 20-cup and Manager of the Year totals.",
                "3. Win an international continental competition and the World Cup with a national side.",
                "4. Settle into a long-term save for the 10- and 20-season loyalty achievements and the 100-million career-earnings goal.",
                "5. Play online Fantasy Draft sessions for the draft achievements - 100 and 200 match points, 25 knockout and draft-match wins, and the shoestring/streak goals.",
                "Tip: many streak achievements (20 and 30 games unbeaten, 30 consecutive clean sheets) come naturally at a dominant club - pick one that is already the best in its league and they arrive within a season or two."
            ]
        }
    ]
};
