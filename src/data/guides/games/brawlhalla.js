// Brawlhalla Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/brawlhalla.json), whose 65 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   291550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "brawlhalla-achievement-guide",
    "category": "game",
    "gameSlug": "brawlhalla",
    "icon": "⚔️",
    "title": "Brawlhalla Achievement Guide",
    "summary": "A practical guide to all 65 Steam achievements in Brawlhalla - none are hidden. Covers the gold, account-level and per-weapon-Legend progression, the matchmaking queue, KO and win milestones, and the advanced combat feats and later challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Brawlhalla has 65 Steam achievements and none of them are hidden. A big block is progression: total gold earned (25k / 50k / 100k), account levels (10 up to 50), and reaching level 10 with a Legend of each weapon type (Hammer, Sword, Blasters, Rocket Lance, and the rest, including the newer Cannon, Orb, Greatsword, Chakram and Battle Boots). The middle covers matchmaking - playing each queue, KO counts (25 / 500 / 1,000), win counts (10 / 100 / 250), and multi-Legend levelling. The last third is advanced combat feats (thrown-item KOs, gravity-cancel KOs, no-loss Ranked wins, Horde mode wave 26, forged-item purchases, rematch feats, signature-attack multi-hits).",
                "Nothing is missable - Brawlhalla is a persistent free-to-play game and every counter accumulates across your account. The longest achievements are the deep progression ones (level 25 with Legends using 8 different weapons, level 5 with 50 Legends) and the win counts (250 matchmaking wins).",
                "Tip: level 25 with Legends across 8 weapons (Brawling 25/8) and level 5 with 50 Legends (Jack of All Trades) push you toward every other progression achievement along the way - so pick a rotating cast that covers all weapon types rather than maining one Legend, and the gold, account-level and per-weapon achievements come for free."
            ]
        },
        {
            "heading": "Progression: Gold, Levels & Weapon Legends",
            "body": [
                "The lifetime gold tiers (25,000 / 50,000 / 100,000), account levels 10 / 20 / 30 / 40, and reaching level 10 with a Legend of each of the original weapon types - Grapple Hammer, Sword, Blasters, Rocket Lance, Spear, Katars, Axe, Bow, Gauntlets and Scythe.",
                "The achievements here: Cash Money (Earn a total of 25,000 Gold.); Deep Pockets (Earn a total of 50,000 Gold.); The Midas Touch (Earn a total of 100,000 Gold. ); Just One More Game! (Reach account level 10.); The Big 2-0 (Reach account level 20.); Time Flies When You're Having Fun (Reach account level 30.); Feels Like the First Time (Reach account level 40. ); It's Hammer Time (Reach level 10 with a Grapple Hammer Legend.); Cutting Edge (Reach level 10 with a Sword Legend. ); Pew Pew Pew (Reach level 10 with a Blasters Legend.); Sir Lances-a-lot (Reach level 10 with a Rocket Lance Legend. ); Getting to the Point (Reach level 10 with a Spear Legend.); It Slices, It Dices (Reach level 10 with a Katars Legend.); Not an Axe-ident (Reach level 10 with an Axe Legend.); Making Your Foes Quiver (Reach level 10 with a Bow Legend.); Knuckle Sandwich (Reach level 10 with a Gauntlets Legend.); Gardening with a Black Thumb (Reach level 10 with a Scythe Legend.)."
            ]
        },
        {
            "heading": "Matchmaking & Win Milestones",
            "body": [
                "Playing each matchmaking queue (a game, then 30; Free-for-All, Ranked 1v1, Friendly and Ranked 2v2, Brawl of the Week), the KO counts (25 / 500 / 1,000), the win counts (10 / 100 / 250), reaching level 5 with 2 Legends and level 10 with 5 and 10 Legends, and 10 Double KOs.",
                "The achievements here: Welcome to Brawlhalla! (Play a matchmaking game. ); Matchmaker, Make Me a Match (Play 30 matchmaking games.); Four's a Party (Play 3 games in the Free-for-All matchmaking queue.); Calm Before the Storm (Play 3 games in the Ranked 1v1 matchmaking queue.); Our Powers Combined (Play 3 games in the Friendly 2v2 matchmaking queue.); Til KO Do Us Part (Play 3 games in the Ranked 2v2 matchmaking queue.); Let's Do This Again Next Week (Play 3 games in the Brawl of the Week matchmaking queue.); See Ya (KO 25 opponents in matchmaking games.); Home Run King (KO 500 opponents in matchmaking games.); I Believe You Can Fly (KO 1,000 opponents in matchmaking games.); Just Getting Started (Win 10 matchmaking games.); Witness Me! (Win 100 matchmaking games.); All I Do Is Win (Win 250 matchmaking games.); Practice Makes Perfect (Reach level 5 with 2 Legends.); They Grow Up So Fast (Reach level 10 with 5 Legends.); Putting in Work (Reach level 10 with 10 Legends.); Twice as Nice ( Get 10 Double KOs in matchmaking games.)."
            ]
        },
        {
            "heading": "Combat Feats & Advanced Challenges",
            "body": [
                "The advanced feats: thrown-item and dash-jump-ground-pound KOs, no-loss Ranked wins, the gravity-cancel light and heavy KO feats, the \"Say: GG!\" and last-stock comeback feats, the later weapon Legends (Cannon, Orb, Greatsword, Chakram, Battle Boots), Horde mode wave 26, the Skyforged and Goldforged purchases, the rematch and best-of-3-series feats, the Bouncy Bomb and Spike Ball multi-hits, the six-signature and triple-KO feats, and the deep progression achievements (level 40 with one Legend, level 25 with 3 Legends, level 5 with 50 Legends, level 25 across 8 weapons).",
                "The achievements here: Go Long! (KO an opponent with a thrown item 30 times in matchmaking games.); Can't Touch This (Win a Ranked 1v1 game without losing any lives 3 times.); The Surpri-saac Newton (KO an opponent with a Gravity-Canceled Heavy Attack 10 times in matchmaking games. ); Kill Them with Kindness (Press the \"Say: GG!\" button after 66 different matchmaking games.); And the Crowd Goes Wild! (Win a Ranked 1v1 game with red damage on your last stock 5 times (Tie Breaker wins do not count).); Cannon Fodder (Reach level 10 with a Cannon Legend); Launched into Orb-it (Reach level 10 with an Orb Legend); Big Hunk of Metal (Reach level 10 with a Greatsword Legend); Now I Can Use Black in Strikeout (Reach level 25 with 3 Legends); Jack of All Trades (Reach level 5 with 50 Legends); Falling with Style (KO 10 opponents with Slide-Charged Signature Attacks in matchmaking games); BOMBHALLA!! (Hit multiple opponents with a single Bouncy Bomb in a matchmaking game); Carry the Team ( Get 6 KOs in a single Ranked 2v2 or Friendly 2v2 game); Wall Cleaner (KO 25 opponents by dash-jumping into a Ground Pound Attack in matchmaking games); To Hell and Back (Reach Wave 26 in Horde mode with Damage set to 100% or lower); Check Out My Fresh Kicks (Reach level 10 with a Battle Boots Legend.); Dribbling off Your Face (Hit opponents with the same Spike Ball 4 times in a matchmaking game.); High Stakes Hot Potato (Catch 15 Bouncy Bombs in a row in Catch Bombs Training without frame-stepping.); Hit for the Cycle (Hit opponents with all 6 of a Legend's Signature Attacks in 10 different matchmaking games.); You're Telling Me the Sky Forged This? (Buy a Skyforged item from the store.); I'd Rather Be SHINAYYY (Buy a Goldforged item from the store. ); Established Main (Reach level 40 with a Legend.); Halfway There! Right!? (Reach account level 50.); The Split Difference (Reach level 10 with a Chakram Legend.); Sandbagger (Lose a Ranked 1v1 match, opt into a rematch, change Legend, and win the rematch.); Download Complete (Win 10 best-of-3 series in matchmaking. ); Lighter than Air (KO 50 opponents with Gravity-Canceled Light Attacks.); No Spam Zone (KO 10 opponents in Ranked 1v1 matches using only Light Attacks.); Thrice as Nice (Get 5 Triple KOs.); Sweep ALL the Legs (Hit 3 opponents with a single Signature Attack 10 times. ); Brawling 25/8 (Reach level 25 with Legends using 8 different Weapons. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a variety of Legends covering every weapon type, taking each to level 10 for the per-weapon achievements, and play a few games in every matchmaking queue.",
                "2. Grind matchmaking normally - the gold, account-level, KO-count and win-count achievements all tick up as you play.",
                "3. Do the one-off combat feats deliberately: thrown-item KOs, gravity-cancel KOs, the no-loss Ranked wins, the \"Say: GG!\" 66 games, and the signature and bomb multi-hits.",
                "4. Do the mode-specific achievements - Horde mode to wave 26, and buy a Skyforged and a Goldforged item once you have the gold.",
                "5. Finish with the deep grinds: level 25 with 3 Legends, level 40 with one Legend, level 5 with 50 Legends, and level 25 with Legends across 8 different weapons.",
                "Tip: the gravity-cancel and slide-charge signature KO achievements need specific tech - practise gravity-cancelling (jump then fast-fall into an attack) and slide-charging (dash then hold the attack) in the Training room until they are automatic, then the KO counts fill quickly in real matches."
            ]
        }
    ]
};
