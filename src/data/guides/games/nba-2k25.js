// NBA 2K25 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nba-2k25.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2878980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nba-2k25-achievement-guide",
    "category": "game",
    "gameSlug": "nba-2k25",
    "icon": "🏀",
    "title": "NBA 2K25 Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in NBA 2K25 - none are hidden. None of the 46 achievements are hidden - every description is Steam's own text. Covers MyNBA/Dynasty, The W (WNBA), MyTEAM and its arcade sub-modes, and the ERAs and All-Time historic teams.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "NBA 2K25 has 46 Steam achievements and none of them are hidden. NBA 2K25 is the annual basketball simulation from Visual Concepts. None of its 46 achievements are hidden. The list spans the MyNBA and Dynasty modes, The W (the WNBA career), MyTEAM card collecting and its arcade sub-modes (Triple Threat, Showdown, King of the Court), and the ERAs and All-Time historic teams.",
                "A large slice is the MyTEAM grind - Auction House trades, a 100,000-point balance, Holo players, and the Triple Threat Park and Showdown streaks - alongside the historic-team unlocks (all 30 All-Time teams, all ERAs teams, and a win with each).",
                "The catalog marks it difficulty 3 and single-playthrough. Several achievements need online modes (The W Online, Showdown, King of the Court, the Park), and the dynasty and GOAT-list achievements are long MyNBA commitments."
            ]
        },
        {
            "heading": "MyNBA & Dynasty",
            "body": [
                "The MyNBA career and franchise achievements - the Heart of a Dynasty flashback, GOAT skills and list, game goals, back-to-back and three-peat championships, the Dynasty List, and reaching the GOAT league.",
                "The achievements here: Origin Story (Get 12 stars in the Heart of a Dynasty flashbacks); Making Mends (Retain the player that you made unhappy when you became a starter); Full Potential (Reach Hall of Fame on a GOAT Skill); Goal Setter (Complete a 1st or 2nd Half Game Goal with 3 stars); Dynasty Gold (Earn two Gold Dynasty badges); The G.O.A.T. (Reach the Overall #1 spot on the GOAT List); Back-to-Back (Win 2 straight NBA Championships with the same team); Three-peat (Win 3 straight NBA Championships with the same team); A Dynasty Begins (Make the Dynasty List); The Ultimate Dynasty (Reach #1 on the Dynasty List); Baaaaaaah! (Reach the GOAT league in 3 different seasons)."
            ]
        },
        {
            "heading": "The W (WNBA)",
            "body": [
                "The WNBA career mode - a game win, an online win, progression tier 10, and tier 10 in all pillars.",
                "The achievements here: It's All About the W (Win a WNBA game in The W); Watch Me Work (Win a game in The W Online); She Got Game (Reach Progression tier 10 in The W); Bet On Woman (Reach tier 10 in all pillars in The W)."
            ]
        },
        {
            "heading": "MyTEAM",
            "body": [
                "The card-collecting mode - Breakout warps, mode completions, Holo players, opening billboard packs, the 100,000-point balance, 100 exhibitions, and the Auction House.",
                "The achievements here: Come With Me… (Activate and enter a warp in any type of Breakout game); Tycoon (Complete a Full, Triple Threat, and Clutch Time run in Breakout); Showing Off (Open any pack on the billboard in Triple Threat Park); Holo (Use a Holo Player in Triple Threat Park); Ultimate POWAH! (Apply a Diamond Shoe with a Gold Takeover to any player); World Tour (Complete 100 Exhibitions); 100K Club (Have a MyTEAM Point balance of 100,000); Going Once...Going Twice... (Win an Auction and collect your card); SOLD! (Sell any player card in the Auction House)."
            ]
        },
        {
            "heading": "Streetball, Showdown & Park",
            "body": [
                "The Streetball courts (The Dunes, The Sideline, The Temple, the co-op challenge), Showdown and Triple Threat streaks, King of the Court, and the on-court feats (a win, 10 threes, all five starters in double digits).",
                "The achievements here: The Dunes (Defeat all bosses in Streetball at The Dunes); The Sideline (Defeat all bosses in Streetball at The Sideline); The Temple (Defeat all bosses in Streetball at The Temple); Streetball Co-Op (Finish the Streetball Co-op Challenge); It's a Season Thing (Win a Seasonal Signature Challenge); Top of the World (Make it to the highest level in Showdown); Streaker (Earn a Win Streak in Showdown); Qualified (Qualify for King of the Court); 5 in a Row (Earn a win streak in Triple Threat Park); Crown Me (Win a game of King of the Court); Winning (Win a game); Keep Your Distance (Make 10 three-point shots in any one game); Spreading The Love (Finish a game in which all 5 starters score double-digit points)."
            ]
        },
        {
            "heading": "All-Time & ERAs Teams",
            "body": [
                "Unlocking the ERAs teams, all 15 and then all 30 All-Time teams, and winning a game with every All-Time, ERAs and regular NBA team.",
                "The achievements here: Trash Talker (Successfully complete a Trash Talk quest); Jersey Swap (Complete a Jersey Swap challenge with an extra kicker); Team Chemistry (Max out your Team Chemistry meter in either NBA, Online, or Streetball); Time Traveler (Unlock all ERAs teams); Big Timer (Unlock all 15 All-Time teams); All-Timer (Unlock all 30 All-Time teams); Timeless (Win a game with every All-Time team); Well-Traveled (Win a game with every regular NBA team); Old-School Pro (Win a game with every ERAs team)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start a MyNBA save and play toward the dynasty, GOAT and championship achievements - these are the longest single commitment in the list.",
                "2. Play The W career mode to progression tier 10 and tier 10 in all pillars, and grab the online win.",
                "3. Grind MyTEAM: complete the mode challenges, build a 100,000-point balance, use a Holo player, and do the Auction House buy and sell.",
                "4. Play the Streetball courts and the arcade sub-modes (Triple Threat Park, Showdown, King of the Court) for their streak and win achievements.",
                "5. Unlock every All-Time and ERAs team and win a game with each, plus a win with every regular NBA team.",
                "Tip: the 'win a game with every team' achievements (All-Time, ERAs, regular NBA) only need a win, not a full season - play quick games on the lowest difficulty with heavy sliders in your favor to blitz through them."
            ]
        }
    ]
};
