// Ultra Street Fighter IV Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ultra-street-fighter-4.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   45760 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ultra-street-fighter-4-achievement-guide",
    "category": "game",
    "gameSlug": "ultra-street-fighter-4",
    "icon": "🥊",
    "title": "Ultra Street Fighter IV Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Ultra Street Fighter IV - none are hidden. Covers the cosmetic and combo-count unlocks, Arcade and Trial mode clears, the online Ranked, Multiplayer and Team Battle grinds, and the per-character continue-free Arcade clears and Ultra-specific feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ultra Street Fighter IV has 67 Steam achievements and none of them are hidden. The names and descriptions are written as in-character quips, but each states a real requirement. The list covers cosmetic completion (all Colors, Personal Actions, Titles, Icons), combo counters (100 Special Moves, EX Moves, Super Combos, Ultra Combos, Focus Attacks), Arcade and Trial mode goals (clear on Medium, on Hardest, no continues, clear all Trials), the two bonus stages, and a large online block - Ranked win streaks and rank-ups, Multiplayer Battle wins and match totals, Team and Endless Battle feats, and lobby creation.",
                "Nothing is missable - every mode is replayable and all counters are cumulative. The longest are \"This is Madness!\" (300 Multiplayer Battle matches), \"Sunspotter\" (365 Super or Ultra Combo finishes) and the set of continue-free Hardest Arcade clears with specific characters.",
                "Tip: the online match-count achievements (\"Worldly Warrior\", \"This is Madness!\") count played matches, not just wins - Endless Battle lobbies are the fastest way to rack them up, win or lose."
            ]
        },
        {
            "heading": "Unlocks & Combo Feats",
            "body": [
                "The completion and combo-counter achievements - collecting all Colors, Personal Actions, Titles and Icons, landing 100 Special / EX / Super / Ultra / Focus moves, 50 Super and Ultra Combo finishes, 365 combined finishes and 30 Perfects.",
                "The achievements here: Overachiever (Attain all the Achievements! The path of the warrior demands this from those who walk on it!); Fashion Plate (Even a top rate fighter needs to coordinate properly! You gotta get all of the Colors first!); Dan the Man (Mastery of the Saikyo arts requires mastery of the Personal Action! Collect 'em all, punk!); Entitled (A Title does not tell all of a man, sir, but if I were to see one Title, I'd want them all...); Iconoclast (Oh my gosh, those Icons are so adorable! I gotta find Don-chan and catch 'em all!); Special Movement (Do a Special Move 100 times! If you're a true student of the Rindo-kan dojo, it's your duty!); EXtra! EXtra! (Battle requires courage! Train by using your EX Gauge to successfully land 100 EX Moves!); Super, Man! (To battle is to win a fight with overwhelming strength! Show me you can do 100 Super Combos!); Ultra, Man! (If yer gonna fight, give it your all, pal. Performing 100 Ultra Combos oughta do it, eh?); It Takes Focus (Your mission, should you wish to join Delta Red, is to connect with 100 Focus Attacks! ); Superior Super (Trust your instincts and winning will come easy. Let's begin with 50 Super Combo finishes!); Ultimate Ultra (Candy always says you gotta win with style, so go out there and perform 50 Ultra Combo finishes!); Sunspotter (Amigo, perform 365 Super or Ultra Combo finishes against your opponents! The dawn is coming!); Absolute Perfection (Lauren's waiting, so how about you finish your fights quickly and get 30 Perfects. Sound good?)."
            ]
        },
        {
            "heading": "Arcade & Trial Mode",
            "body": [
                "Clearing Arcade Mode on Medium and with all characters, without a continue, on Hardest (and beating Gouken), every Rival Battle, fast rounds, plus clearing 10 Trials, one character's full Trial set and all Trial challenges, and the two bonus stages.",
                "The achievements here: Clear Headed (Hey! Got time to kill? Try to clear Arcade Mode on Medium or higher! That's all you gotta do!); All Clear (To get strong takes lots of fighting! Clear Arcade Mode on Medium or higher with all characters!); Herculean Effort (Can you finish Arcade Mode on Medium or higher without using a continue? Show me you can!); Hard Times (To escape death is to beat the strongest of the strong. Finish Arcade Mode on Hardest, kid!); Long Time No See (Do you wish for defeat? If so, complete Arcade Mode on Hardest difficulty and beat Gouken!); Rival Schooled (See your future by clearing every Rival Battle on Medium or higher with every character.); Speed Freak (Finish each round in Arcade Mode on Medium or higher in 20 seconds or less. Too easy.); Good Start (All of nature must withstand a trial. You must clear 10 trials in Trial mode to succeed.); Trail of Trials (There is no shortcut in the art of Yoga. Aim to clear any character's Trial mode!); Trial Athlete (I shall assimilate all and be all-powerful! Clear all Trial challenges, and so can you!); Oh! My Car! (Hee hee, destruction is so much fun! Score 80,000 points or more in the Car Crusher bonus stage!); Barrel of Laughs (No need for barrels without oil! Score 110,000 points or more in the Barrel Buster bonus stage!)."
            ]
        },
        {
            "heading": "Online: Ranked, Multiplayer & Team Battle",
            "body": [
                "The online grind - first Ranked win, 3 / 5 / 10-win Ranked streaks, rank-ups to C Rank with one and all characters, 10 / 30 / 100 Multiplayer Battle wins, 50 / 100 / 300 matches played, Team and Endless Battle wins and lobbies, replays watched and Arcade Fight Requests.",
                "The achievements here: It Begins (The fight starts here! Set your Title and Icon, and begin fighting on Multiplayer Battle!); First Timer (I'll never forget my first time for Ryu's sake! Win one Ranked Match! Gotta aim for the top!); Threepeat (You think being this good is easy? Let's see you win 3 Ranked Matches in a row, champ!); Fivepeat (This is your real power, child? Show me it's not luck by winning 5 Ranked Matches in a row!); Tenpeat (Don't hold back your true potential! Win 10 Ranked Matches in a row!); Moving On Up (Ya need to do anything to reach the top of the food chain! Let's see a Rank Up via Ranked Match!); Now You C Me... (I wrestle only the strong! You shall rank up to C Rank if you wanna face me, comrade!); From C to Shining C (You think you're good, don't you? Prove it by ranking up all characters to C Rank!); Road to Victory (You wanna get that fight money? You're gonna have to win 10 Multiplayer Battle matches first, sucka!); Battle Master (Only winners can attain such beauty. Win 30 Multiplayer Battle matches and I may share my beauty secrets.); Legendary Fighter (I shall make you the right hand of Shadaloo if you can win 100 Multiplayer Battle matches!); Worldly Warrior (Let's do this, amigo! Fight 50 Multiplayer Battle matches, because that's the only way to become strong!); Bring it on! (No comrade, this will not do! We must become stronger, for our fans! Fight 100 Multiplayer Battle matches!); This is Madness! (Fighting is fun, huh? Well then, let's aim for 300 Multiplayer Battle matches fought, OK buddy?); Team Player (A 1-on-1 fight is fun, but it's more fun with friends! Try fighting in a Team Battle!); Team Mate (Win 1 Team Battle match, and you will learn that teamwork can help you become stronger!); Teamworker (A pro can win with any team. Win 10 Team Battles but don't forget, you have to win too!); Keep on Truckin' (If you want to focus on nothing but the fight, entering an Endless Battle is for you!); Three For The Road (In the pursuit of strength, one must have a goal! In Endless Battle win 3 matches in a row.); Endless Ten (Throw away your fears and focus on the fight! Win 10 fights in a row in Endless Battle!); Replayer (Watch 30 Replays via the Replay Channel! Isn't it fun watching people go at it tooth and nail!?); Endless Lobbyist (It's only natural for warriors to seek fights! Create 30 Endless Battle lobbies!); Team Lobbyist (Hey mon, battlin' is fun, no? Go out and create 30 Team Battle lobbies and enjoy the rhythm!); Quarter Up (Fight 30 opponents via Arcade Fight Request. It'd be easy with the right bait, he he.)."
            ]
        },
        {
            "heading": "Character Arcade Clears & Ultra Feats",
            "body": [
                "Continue-free Hardest Arcade clears (Evil Ryu, Oni) and continue-free Medium clears with Yun, Yang, Rolento, Elena, Poison, Hugo and Decapre, plus the Ultra-specific feats - both Ultras in one Ranked Match, a 4-player Team Battle win, a Ranked win with an Ultra-added character, and beating your SFIV self on Hardest.",
                "The achievements here: The Awakening (As if you could ever defeat Evil Ryu in Arcade Mode on the hardest difficulty.  See for yourself!); Birth of the Oni (To surpass the power of Oni, you must defeat him in Arcade Mode on the hardest setting.); Just Enough! (Dude, just clear Arcade Mode on Medium or higher without using a continue with Yun!  Piece of cake!); Up to Snuff (Clear Arcade Mode on Medium or higher without using a continue with Yang. It's simple!); Overwhelming Power (If you seek power, clear Arcade Mode on Medium or higher without using a continue with Evil Ryu.); Transcendent (Ascend beyond oneself by clearing Arcade Mode on Medium or higher without using a continue with Oni.); Prep Time (You need study materials to make your battle plan. Follow one player in the Leaderboards.); New Threads (Use a new Title and Icon, and fight in one Multiplayer Battle match. Right on!); For the Utopia! (Assert leadership and clear Arcade Mode on Medium or higher without using a continue with Rolento.); The world is my stage (Dance with everyone! Clear Arcade Mode on Medium or higher without using a continue with Elena!); Toxic Beauty (No more mocking! Clear Arcade Mode on Medium or higher without using a continue with Poison.); Giant Attack (Reach the league's top and clear Arcade Mode on Medium or higher without using a continue with Hugo.); A dish best served cold (Follow your anger by clearing Arcade Mode on Medium or higher without using a continue with Decapre.); Double Feature (Initiative is everything! Surprise the enemy by using both Ultra Combos in a single Ranked Match!); All For One (Strength in numbers! Gather a team of four and defeat another in any Team Battle!); Ultra Effective (New adventures await! Win a Ranked Match with a character added in Ultra Street Fighter IV!); Good old times (A strong fighter has no fear of change! Defeat your Street Fighter IV self on the Hardest difficulty!)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Arcade Mode with every character for the clear achievements, working up to continue-free and Hardest runs.",
                "2. Grind the combo counters (Special, EX, Super, Ultra, Focus) in Training or during Arcade runs - they add up fast.",
                "3. Clear the Trial mode goals and the two bonus stages.",
                "4. Move online: Ranked streaks and rank-ups, then the Multiplayer Battle win and match-count totals in Endless Battle lobbies.",
                "5. Mop up the per-character continue-free Arcade clears and the Ultra-specific feats.",
                "Tip: the continue-free Medium Arcade clears with Yun, Yang, Rolento, Elena, Poison, Hugo and Decapre are much easier if you drop the difficulty to the lowest Medium setting and pick a strong anti-air; the achievement only checks difficulty and no-continue, not speed or score."
            ]
        }
    ]
};
