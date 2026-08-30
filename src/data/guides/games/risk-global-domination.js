// RISK: Global Domination Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/risk-global-domination.json), whose 55 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1128810 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "risk-global-domination-achievement-guide",
    "category": "game",
    "gameSlug": "risk-global-domination",
    "icon": "🌍",
    "title": "RISK: Global Domination Achievement Guide",
    "summary": "A practical guide to all 55 Steam achievements in RISK: Global Domination - none are hidden. Covers combat and conquest milestones, loss counters and special map clears, victory and multiplayer social achievements, and playtime and quirky feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "RISK: Global Domination has 55 Steam achievements and none are hidden. As the official digital adaptation of the board game, the list covers combat volume (troops drafted, enemies defeated, territory-card sets turned in), conquest and defense streaks within a single turn, a handful of loss-themed achievements (RISK famously punishes bad luck), victory counts across singleplayer and \"Play Online\" multiplayer, social features (alliances, friends, attack requests), and a long tail of quirky feats (dice-roll luck, emoji use, avatars, app-store interactions).",
                "Nothing is missable - every counter is a permanent account stat that keeps climbing across every game you play, win or lose. The long poles are the big multiplayer win counts (100 online wins) and troop-count milestones (10,000 troops drafted and 10,000 defeated), both of which need a genuinely large number of completed games.",
                "Tip: the loss-themed achievements (Unlucky Streak, Slippery Slope, Anti-Victor, Fourth time's a Charm, Better Luck Next Time) are all real, trackable achievements, not jokes - if you are playing a lot of RISK anyway, do not be discouraged by a bad run of games, since even your losses are quietly clearing part of the list."
            ]
        },
        {
            "heading": "Combat & Conquest",
            "body": [
                "The core combat-volume block: turning in 10/50/100 Territory card sets, defeating 25/50 players and 100 computer or human players specifically, drafting 250/1,000/10,000 troops, defeating 1,000/5,000/10,000 enemy troops, conquering 5/10/15 territories in a single turn, and defending 5/10/15 attacks in a row.",
                "The achievements here: Card Collector (Turn in 10 sets of Territory cards); Card Connoisseur (Turn in 50 sets of Territory cards); Full Deck (Turn in 100 sets of Territory cards); Rising Star (Defeat 25 computer or human players); Unquenchable Thirst for Glory (Defeat 50 computer or human players); System Error (Defeat 100 computer players); Cower Puny Humans (Defeat 100 human players); Corps Creator (Draft 250 troops); Battalion Builder (Draft 1,000 troops); Army Assembler (Draft 10,000 troops); 1K Down (Defeat 1,000 enemy troops); The Big 5-0-0-0 (Defeat 5,000 enemy troops); Take No Prisoners (Defeat 10,000 enemy troops); Short Holiday (Conquer 5 territories in a single turn); Long Vacation (Conquer 10 territories in a single turn); World Tour (Conquer 15 territories in a single turn); Shields Up (Defend 5 attacks in a row); Stonewall (Defend 10 attacks in a row); Impenetrable (Defend 15 attacks in a row)."
            ]
        },
        {
            "heading": "Losses & Special Maps",
            "body": [
                "The loss-themed achievements - being eliminated before your first turn, losing 3/10/50 games, and losing 3 in a row - plus the two special-map clears: 5 expert AIs in one Classic World Domination Map game, and 5 expert computer players in one French Revolution map game.",
                "The achievements here: Better Luck Next Time (Be eliminated before your first turn); Unlucky Streak (Lose 3 games ); Slippery Slope (Lose 10 games); Anti-Victor (Lose 50 games); Fourth time's a Charm (Lose 3 games in a row); The World is Yours (Defeat 5 expert AIs in a single game of Classic World Domination Map); Magnifique (Defeat 5 expert computer players in a single game of the French Revolution map)."
            ]
        },
        {
            "heading": "Wins & Multiplayer",
            "body": [
                "Victory counts and social features: 200 total victories, \"Play Online\" wins at 1/25/50/100, singleplayer wins at 1/25/50/100, forming your 1st/25th/50th alliance, agreeing to 10 attack requests, making a global friend, breaking 5 alliances, and playing an online multiplayer game.",
                "The achievements here: Veteran (Achieve 200 victories); World Debut (Win 1 \"Play Online\" multiplayer game); Global Gamer (Win 25 \"Play Online\" multiplayer games); Planetary Player (Win 50 \"Play Online\" multiplayer games); International Champion (Win 100 \"Play Online\" multiplayer games); Solo Effort (Win 1 single player game); Make It On Your Own (Win 25 single player games); Army Of One (Win 50 single player games); Lone Wolf (Win 100 single player games); Friendship (Form 1st alliance); Peacemaker (Form 25 alliances); Socialite (Form 50 alliances); Wanna Rumble? (Agree to 10 \"let's attack\" requests); Pen Pal (Make one new global multiplayer friend); No Strings Attached (Break 5 alliances); Making Connections (Play an online multiplayer game)."
            ]
        },
        {
            "heading": "Playtime & Quirky Feats",
            "body": [
                "General playtime and personality achievements: 100 total RISK games, a 15+ turn marathon match, playing the same map 10 times, claiming 50 cards from defeated players, holding 9 Territory cards at once, using 10 emojis, rolling four sixes or four ones in a row, playing 5 games with different avatars, clicking privacy links, using most help tooltips, starting a game with Automatch, and making an in-app purchase.",
                "The achievements here: Fanatic (Play 100 RISK games); Long Engagement (Compete in a game that lasts 15 turns or more); Familiar Ground (Play the same map 10 times); Spoils of War (Claim 50 cards from defeated players); Land Baron (Hold 9 Territory cards at once); Smiley Face (Express yourself through 10 Emojis); Loaded Dice (Roll 4 sixes in a row); All Four One, One For All (Roll 4 ones in a row); The Chameleon (Play 5 games with different avatars); Private Eyes (Click on privacy links); Well Educated (Tap on most of the help tooltips); Matchmaker (Start a game using Automatch); Cashed Up (Make an in-app purchase)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a steady mix of singleplayer and online multiplayer games, turning in Territory card sets and drafting troops as you go, to build up the combat-volume achievements naturally.",
                "2. Push for big single-turn plays - conquering 5, then 10, then 15 territories in one turn - and defending 5, 10, and 15 attacks in a row when you get a strong defensive position.",
                "3. Clear the special-map achievements: defeat 5 expert AIs in a single Classic World Domination Map game, and 5 expert computer players in a single French Revolution map game.",
                "4. Build your social graph: form alliances, make a global multiplayer friend, agree to \"let's attack\" requests, and occasionally break an alliance.",
                "5. Round out the volume and quirky achievements over your normal play: 100 total games, a 15+ turn marathon match, the same map played 10 times, emoji use, avatars, dice-roll luck (four sixes or four ones in a row), and the app-interaction achievements (Automatch, privacy links, help tooltips, an in-app purchase).",
                "Tip: Loaded Dice and All Four One, One For All (four sixes or four ones in a row) are pure luck - do not go out of your way to force them, just keep an eye on your roll history during normal play and they will eventually happen on their own."
            ]
        }
    ]
};
