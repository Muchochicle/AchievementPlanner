// NBA 2K23 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nba-2k23.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1919590 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nba-2k23-achievement-guide",
    "category": "game",
    "gameSlug": "nba-2k23",
    "icon": "🏀",
    "title": "NBA 2K23 Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in NBA 2K23 (3 hidden). Covers the MyCAREER on-court milestones and the college-championship Flashback, the Jordan Challenge and exhibition wins, and the MyTEAM card and mode goals including the two Unlimited grand prizes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NBA 2K23 has 50 Steam achievements and three are hidden (the college-championship Flashback and the two MyTEAM Unlimited grand prizes). The rest are open: MyCAREER single-game stat lines (10 and 30 points, three-pointers, double- and triple-doubles, blocks, steals, green releases, free throws), MyCAREER progression (create a jump shot, the barber shop, 1 million fans, Mini-Basketball, the Daily Prize, the quest NPCs), the Jordan Challenge (15 and 45 stars), the exhibition-mode wins (NBA Today, Play Now Online, All-Star, Quick Play, WNBA), and a large MyTEAM block (Diamond Shoe cards, grading, the Draft, Clutch Time, co-op, a player-locked game, four 4-point shots, Level 40).",
                "Nothing is missable - every mode stays available and each stat-line achievement can be retried in any game. The longest are \"Follow Me On...\" (1 million MyCAREER fans), the 45-star Jordan Challenge, and the two MyTEAM Unlimited grand prizes.",
                "Tip: lower the difficulty and lengthen the quarters for the MyCAREER stat-line achievements - a triple-double, 10 three-pointers or 5 blocks in one game is far easier against weak AI, and none of these care about the result."
            ]
        },
        {
            "heading": "MyCAREER: On-Court & Progression",
            "body": [
                "The MyCAREER single-game stat lines (10 and 30 points, three-pointers, green releases, double- and triple-doubles, assists, rebounds, blocks, steals, free throws, halftime lead, low turnovers), the progression goals (barber shop, full practice, create a jump shot, 1 million fans, equip a vehicle, Mini-Basketball, the Daily Prize, the quest NPCs), the Leadership badge, and the hidden college-championship Flashback.",
                "The achievements here: Not Too Shabby (Score 10 points in a MyCAREER NBA game); Clutch (Score 30 points in a MyCAREER NBA game); Let Doc Do His Thing (Change your look in the Barber Shop); Tre' Bomber (Make 5 three-pointers in a MyCAREER NBA game); Wet From Three (Make 10 three-pointers in a MyCAREER NBA game); What's For Dinner (Complete a full practice in the Team Practice Facility); Go Ahead And Jump (Create a jump shot in MyCAREER); Follow Me On... (Get 1 million fans in MyCAREER); Social Distancer (Equip a vehicle in MyCAREER); Popping Off (Play a game of Mini-Basketball); Finding Treasure (Pick up the Daily Prize); Money Talks (Talk to ship owner Tomas); Rival Pride (Talk to rival Sam); Double Trouble (Record a double-double in a MyCAREER NBA game); All Rise (Record a triple-double in a MyCAREER NBA game); Green Light (Make 1 green release shot in a MyCAREER NBA game); Best Friends Forever (Get 3 assists in a MyCAREER NBA game); Board Man Gets Paid (Get 5 defensive rebounds in a MyCAREER NBA game); Block Party (Get 5 blocks in a MyCAREER NBA game); Second Chance (Get 5 offensive rebounds in a MyCAREER NBA game); Five Finger Discount (Get 3 steals in a MyCAREER NBA game); It's Free Real Estate (Make 10 free throws in a MyCAREER NBA game); Timing Is Everything (Make 10 green release shots in a MyCAREER NBA game); No Contest (Take a 20 point lead into halftime in a MyCAREER NBA game); Squeaky Clean (Turn the ball over 10 fewer times than your opponent in a MyCAREER game); Badge Collector (Earn a Leadership badge by participating in MyCAREER Flashback games); Top Of The World (Win a college championship in the MyCAREER Flashback games.)."
            ]
        },
        {
            "heading": "Jordan Challenge, Play Now, MyGM & MyLEAGUE",
            "body": [
                "Earning 15 and 45 stars in the JORDAN CHALLENGE, the all-round stat feats, a big single-quarter run, playing a MyGM game and making a trade, reaching the playoffs and winning a championship in MyLEAGUE, and the exhibition-mode wins (NBA Today, Play Now Online, All-Star, Quick Play, WNBA).",
                "The achievements here: Legend In The Making (Earn 15 stars in the JORDAN CHALLENGE); Yes, Your Airness (Earn 45 stars in the JORDAN CHALLENGE); Dirty Work (Get more rebounds, blocks, and assists than your opponent); Turning Point (Outscore your opponent by 10 points in a single quarter); Omnipotent (Play a game in MyGM); Bartering Up (Make a trade in MyGM); In It To Win It (Go to the playoffs in MyLEAGUE); MyCHAMPION! (Win a championship in MyLEAGUE); You're A Star (Win an NBA TODAY game); On My Way (Win a PLAY NOW ONLINE game); All-Star (Win an NBA All-Star game); Superstar (Win a QUICK PLAY game); She's Got Game (Win a PLAY WNBA game)."
            ]
        },
        {
            "heading": "MyTEAM",
            "body": [
                "The MyTEAM goals - a Diamond Shoe card, grading a card, a Diamond-or-better Draft pick, a Clutch Time win, the hidden Unlimited League and Prestige grand prizes, a Triple Threat Online: Co-Op game, a player-locked game, four 4-point shots, and Level 40 in a Season.",
                "The achievements here: New With Tags (In MyTEAM, apply a Diamond Shoe Card to any Player Card); Slabbed (Grade any MyTEAM Player Card); Lottery Redux (Draft a Diamond or better player in MyTEAM Draft); At The Buzzer! (Win a Clutch Time game in MyTEAM); Threepio! (Earn the Grand Prize in MyTEAM Unlimited League.); Déjà Vu (Earn the Grand Prize in MyTEAM Unlimited Prestige.); Play With Me (In MyTEAM, play a game of Triple Threat Online: Co-Op); Locked In! (In MyTEAM, complete a game in a player locked position (minimum 12 minutes)); 4 For 4 (In MyTEAM, make 4 4-point shots in a single game); Level Up (Make it to Level 40 in a single MyTEAM Season)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play MyCAREER on a low difficulty with long quarters and knock out the single-game stat lines one or two per game.",
                "2. Do the MyCAREER progression achievements (barber shop, jump shot, practice, Mini-Basketball, quest NPCs, 1 million fans) as you play.",
                "3. Win the college championship in the Flashback games for \"Top Of The World\".",
                "4. Play the Jordan Challenge to 45 stars and the exhibition modes for the Play Now / NBA Today / All-Star / WNBA wins.",
                "5. Grind MyTEAM last - grading, the Draft, Clutch Time, co-op, a player-locked game, Level 40, and the two Unlimited grand prizes.",
                "Tip: the two hidden MyTEAM Unlimited grand prizes require going 12-0 in an Unlimited run (League or Prestige) - build a strong squad and pick your matchups; they are the biggest single time sink in the list."
            ]
        }
    ]
};
