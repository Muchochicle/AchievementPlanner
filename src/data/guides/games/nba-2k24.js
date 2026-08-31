// NBA 2K24 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nba-2k24.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2338770 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nba-2k24-achievement-guide",
    "category": "game",
    "gameSlug": "nba-2k24",
    "icon": "🏀",
    "title": "NBA 2K24 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in NBA 2K24 - none are hidden. Covers the MyCAREER on-court milestones and the Virtual Rivals questlines, Mamba Moments, MyGM and MyLEAGUE, the Play Now / NBA Today / WNBA wins, and the MyTEAM card and mode goals.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NBA 2K24 has 50 Steam achievements and none of them are hidden. The list is built around MyCAREER (single-game stat lines - 10 and 30 points, a double-double, a triple-double, 5 blocks, 3 steals, green releases - plus 1 million fans and the Daily Prize), the Virtual Rivals mode (a full set of questline completions and quirky team-specific challenges), the franchise modes (MyGM, MyLEAGUE playoffs and a championship), the Play Now / NBA Today / WNBA win achievements, and a large MyTEAM block (Diamond Shoe cards, Salary Cap wins, mini-games, collections, a 73-point Domination blowout).",
                "Nothing is missable - every mode stays available and each stat-line achievement can be retried in any MyCAREER game. The longest are \"Follow Me On...\" (1 million MyCAREER fans), the full Virtual Rivals clear, and the MyTEAM collection and Holo-lineup goals, all of which are grind rather than difficulty.",
                "Tip: turn the difficulty down and the quarter length up for the MyCAREER stat-line achievements - a triple-double, 5 three-pointers or 5 blocks in one game is far easier against Rookie AI with 10-12 minute quarters, and none of these achievements care about the result or difficulty."
            ]
        },
        {
            "heading": "MyCAREER: On-Court Milestones",
            "body": [
                "The MyCAREER achievements for single-game stat lines and early progression - scoring 10 and 30 points, making three-pointers and green releases, double- and triple-doubles, assists, rebounds, blocks and steals, plus creating a jump shot, equipping a vehicle, the Daily Prize and 1 million fans.",
                "The achievements here: Not Too Shabby (Score 10 points in a MyCAREER NBA game); Clutch (Score 30 points in a MyCAREER NBA game); Tre' Bomber (Make 5 three-pointers in a MyCAREER NBA game); Go Ahead And Jump (Create a jump shot in MyCAREER); Social Distancer (Equip a vehicle in MyCAREER); Make A Wish (Pick up the Daily Prize); Follow Me On... (Get 1 million fans in MyCAREER); Double Trouble (Record a double-double in a MyCAREER NBA game); All Rise (Record a triple-double in a MyCAREER NBA game); Green Light (Make 1 green release shot in a MyCAREER NBA game); Best Friends Forever (Get 3 assists in a MyCAREER NBA game); Board Man Gets Paid (Get 5 defensive rebounds in a MyCAREER NBA game); Block Party (Get 5 blocks in a MyCAREER NBA game); Five Finger Discount (Get 3 steals in a MyCAREER NBA game); Timing Is Everything (Make 10 green release shots in a MyCAREER NBA game)."
            ]
        },
        {
            "heading": "MyCAREER: Virtual Rivals",
            "body": [
                "The Virtual Rivals mode - completing the tutorial, every divisional and named questline (Tomas, Janitor, Roger Roger, Siegbert, Merry Misfit), defeating every team, and the quirky team-specific challenges against the '88-89 Pistons, '13-14 Clippers and the Three PG13s.",
                "The achievements here: Virtual Rivals Completionist (Defeat every Virtual Rivals team); Everybody Makes The First Jump (Complete the Virtual Rivals tutorial); Tour Of The NBA (Complete all divisional Virtual Rivals questlines); NBA Historian (Complete Tomás’s Virtual Rivals questline); They’re On To You (Complete Janitor’s Virtual Rivals questline); Yelling At Clouds (Complete Roger Roger’s Virtual Rivals questline); Must Go Faster! (Complete Siegbert’s Virtual Rivals questline); Common Dominator (Complete Merry Misfit’s Virtual Rivals questline); Repping Humans Over AI (Score every point for your team while winning a Virtual Rivals match); A Taste Of Their Own Medicine (Commit 5 fouls while defeating the ‘88-'89 Detroit Pistons Virtual Rivals team); Anything You Can Do (Assist or finish 5 alley-oops while defeating the ‘13-'14 Los Angeles Clippers Virtual Rivals team); Theater Hopping (Get 3 steals while defeating the Three PG13s Virtual Rivals team)."
            ]
        },
        {
            "heading": "Mamba Moments, MyGM & MyLEAGUE",
            "body": [
                "Earning 12 and 21 stars in Mamba Moments, playing a MyGM game and making a MyGM trade, and reaching the playoffs and winning a championship in MyLEAGUE.",
                "The achievements here: Mini Mamba (Earn 12 stars in Mamba Moments); Full Mamba (Earn 21 stars in Mamba Moments); Omnipotent (Play a game in MyGM); Bartering Up (Make a trade in MyGM); In It To Win It (Go to the playoffs in MyLEAGUE); MyCHAMPION! (Win a championship in MyLEAGUE)."
            ]
        },
        {
            "heading": "Play Now, NBA Today & WNBA",
            "body": [
                "The exhibition-mode wins - a 90-point team game in a WNBA Season, winning an NBA Today game, a Play Now Online game, an NBA All-Star game, a Quick Play game and a Play WNBA game.",
                "The achievements here: Scoreboard Queens (Score 90 points as a team in a WNBA Season game); You're A Star (Win an NBA TODAY game); On My Way (Win a PLAY NOW ONLINE game); All-Star (Win an NBA All-Star game); Superstar (Win a QUICK PLAY game); She's Got Game (Win a PLAY WNBA game)."
            ]
        },
        {
            "heading": "MyTEAM",
            "body": [
                "The MyTEAM card-collection and mode goals - Diamond Shoe cards, regrading a card, a Salary Cap win, earning a prize from every mini-game, the Player Market, Shattered Prize puzzles, an all-Holo 13-man lineup, a 73-point Domination win, badge-and-shoe upgrades and completing a Collection.",
                "The achievements here: New With Tags (In MyTEAM, apply a Diamond Shoe Card to any Player Card); Got'em (In MyTEAM, create a Diamond Shoe in the MT Show Lab); Second Opinion (Regrade an already graded MyTEAM card a second time); Cap Space (Win a game in Salary Cap mode in MyTEAM); True Gamer (Earn a Prize from each mini game in MyTEAM); Direct To You (Buy a Card from the Player Market in MyTEAM); Jigsaw (Complete a Shattered Prize in MyTEAM); Super Shiny (Play a MyTEAM game where your complete 13-man lineup is all Holo Cards); Thunderstruck (Beat a Team in Domination by 73 points in MyTEAM); Enhanced (Add or improve a Badge and apply a Shoe Card to the same Graded Player in MyTEAM); Collector (Complete any Collection in MyTEAM)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play MyCAREER on a low difficulty with long quarters and knock out the single-game stat-line achievements one or two per game.",
                "2. Let the MyCAREER progression achievements (create a jump shot, equip a vehicle, Daily Prize, 1 million fans) accrue as you play.",
                "3. Work through Virtual Rivals - tutorial, every questline, every team, and the three team-specific challenge achievements.",
                "4. Play the exhibition modes for the Play Now / NBA Today / All-Star / WNBA wins and the Mamba Moments stars.",
                "5. Grind MyTEAM last: mini-games, Salary Cap, Player Market, puzzles, an all-Holo lineup, a 73-point Domination win and a completed Collection.",
                "Tip: the '88-89 Pistons \"5 fouls\" and '13-14 Clippers \"5 alley-oops\" Virtual Rivals challenges are much easier if you set out to do them deliberately on a fresh attempt rather than hoping they happen during a normal win."
            ]
        }
    ]
};
