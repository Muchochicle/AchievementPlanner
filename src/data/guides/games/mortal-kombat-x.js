// Mortal Kombat X Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mortal-kombat-x.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   307780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mortal-kombat-x-achievement-guide",
    "category": "game",
    "gameSlug": "mortal-kombat-x",
    "icon": "🩸",
    "title": "Mortal Kombat X Achievement Guide",
    "summary": "A practical guide to all 73 Steam achievements in Mortal Kombat X - none are hidden. Covers the Tower modes, Faction War, Story Mode and XP progression, the Fatality / Brutality / combo and per-character feats, and the Invasion, Klassic Tower and Kombat Pack character-specific challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mortal Kombat X has 73 Steam achievements and none of them are hidden. A large block is progression and modes: the Tower and Living Tower achievements, Faction War (reach level 50 in one, then all factions), completing Story Mode, personal XP levels (up to 65), and online basics including King of the Hill and Tower Battles. The middle covers combat feats - 10-hit combos, Fatalities and Brutalities with every character, every character's X-Ray, playing every character variation - and the Krypt, Test Your Might and Test Your Luck. The last block is character-specific challenges in the Invasion mode and the Klassic Tower (Leatherface, Alien, Triborg, Bo' Rai Cho).",
                "Nothing is missable - Towers, Story Mode chapters and modes all replay, and the counter-based achievements (100 Fatalities, 200 online matches) accumulate. The longest tasks are Tower God (50 Living Towers), the 200-online-match and 10-win-streak achievements, and doing a Fatality and 10-hit combo with all 30-plus characters.",
                "Tip: knock out the \"with every character\" achievements (Fatalities, 10-hit combos, X-Rays, variations) in Practice mode or against the easiest AI - they only check that you have done it once per character, so a methodical pass through the roster in a training setting is far faster than waiting for it to happen in real matches."
            ]
        },
        {
            "heading": "Story, Towers & Progression",
            "body": [
                "The Tower and Living Tower achievements, the Faction War (level 5, then 50, then all factions, joining every faction), Story Mode 50% and 100%, personal XP levels 10 and 65, the Krypt encounter, King of the Hill (Klassic, Survivor, Respect points), Tower Battles, Ranked win streaks, and the Practice/Tutorial basics.",
                "The achievements here: Tower Kompetitor (Complete a single Tower); Tower Warrior (Complete a Tower with every character); Tower Master (Complete 10 Living Towers); Tower God (Complete 50 Living Towers); Challenge Accepted (Win a single Tower Challenge); BUDDY!!! (Send a Tower Challenge to a friend); Pledge Yourself (Reach level 5 in any faction); Faction Champion (Reach level 50 in any faction); No Loyalty (Reach level 50 in all factions); Jump Ship (Become a member of every faction); Time Out (Win a match by time out); Keep it Secret (Find a secret fight in the Living Towers); Statistical Advantage (View Kombat Kard); Moving Up (Reach personal level 10 in XP); Elder God (Reach personal level 65 in XP); A New Beginning (Complete 50% of Story Mode); There is a Ruler (Complete 100% of Story Mode); Inner Strength (Win 1 complete online match); Return Kustomer (Play 100 complete online matches); Royalty (Win 5 complete Klassic King of the hill matches); Good to be King (Win 1 complete Klassic King of the hill match); Giving Respect (Give Respect points in a King of the hill match); Respected Fighter (Earn 1,000 Respect points); Terrifying Encounter (Confront a beast within the Krypt); I'm number 1 (Win 1 Tower Battle); Juggernaut (Win 5 Tower Battles); A Kontender (Complete 1 Tower Battle); Bill of Goods (Win 1 complete match in Survivor King of the Hill); Dropping Fools (Reach a 10 complete game win streak in Ranked 1v1 matches); Hit the Dojo (Enter Practice mode); Unstoppable (Play 200 complete online matches); That's How You Do It (Complete Tutorial)."
            ]
        },
        {
            "heading": "Combat, Fatalities & Character Feats",
            "body": [
                "The combat feats: a 10-hit combo with every character, a Fatality with every character (and 100 total), Brutalities (one, then 50), every character's X-Ray, a win with every character variation, the comeback and blood-spill feats, the Kotal Kahn and level-interaction gags, cosmetic equips (Background, Icon, Border), Test Your Luck and Test Your Might Towers, and the Kustom Kombat modifiers.",
                "The achievements here: Knockout (Perform a 10 hit combo with every character); FINISH HIM (Perform 1 Fatality in a match); Bloody Good Time (Perform a Fatality in a match with every character); Straight Power (Perform 100 Fatalities in matches); Brutal End (Perform 1 Brutality); Dark Future (Perform 50 Brutalities); Need a Doctor (Perform every character's X-Ray); Master (Win a single complete match with every character variation); Only a Real Master (Beat an opponent while they still have 90% health and you have 10% or less health remaining); Well Rounded (Play every character variation); It's a Gusher (Spill 1,000 pints of blood); Blanche Advantage (Hit someone with the old lady Level Interaction); Hara Kiri (Kill yourself with Kotal Kahn for 1 round and win the match); Back It Up (Equip a new Background image); Real Icon (Equip a new Icon); So Bored (Equip a new Border); Jumping Bean (Jump 30 times in 1 match); Trolling (Duck 30 times during Fatality sequence); All the Pieces (Equip a Background, Icon and Border set); Luck be a Lady (Play 7 complete Test Your Luck matches); The Kollector (Unlock 50 Kustom Kombat Modifiers); Disco (Create a sun ray with Kotal Kahn and perform a flip stance 5 times while in the ray); Almighty (Complete a Test Your Might Tower); Not Dead Yet (See all Test Your Might deaths)."
            ]
        },
        {
            "heading": "Invasion, Klassic Tower & Kombat Pack Feats",
            "body": [
                "The Invasion mode achievements (a Boss fight, 1,000 hits, an Invasion Tower and 1v1 win) and the Klassic Tower character-specific challenges - stage Fatalities and Brutalities with Leatherface, Triborg and Alien, the Bo' Rai Cho drinking and low-combo feats, the Robot Type wins, and completing the Klassic Tower with a Kombat Pack 2 character.",
                "The achievements here: Stay Back (Play an Invasion Boss fight); DIE WILL YOU (Deal 1,000 total hits during Invasion Boss fights); INVASION (Complete an Invasion Tower); Can't Stop This (Win an Invasion 1v1 fight); Where It All Started (Perform the Pit Stage Fatality with Leatherface in the Klassic Tower); The Kraken (Perform the Kove Stage Fatality with Triborg in the Klassic Tower); What Doesn't Kill You Makes You Still Alive (Perform a Stage Brutality with Alien in the Klassic Tower); Lands-Down (Don't perform a Kombo over 4 hits with Bo' Rai Cho and win a complete Online Ranked 1v1 match); Fox Finish (Win the match with your opponent stepping on Caltrops); Dance The Night Away (Flip Stance 10 times with a Kombat Pack 2 character during a Fatality sequence in an Online match); Throwback (Perform a Klassic Fatality in a Klassic skin); Getting Tipsy (Perform Bo' Rai Cho's Drinking special 10 times during a match in the Klassic Tower); Hug It Out (Throw 5 Face Huggers during a match with Alien in the Klassic Tower); The Grinder (Win a match after connecting all attacks from Leatherface's Berserker Stance in the Klassic Tower); Robots Rule (Win 5 complete matches with each Robot Type); Going The Distance (Complete the Klassic Tower with one of the Kombat Pack 2 characters); All I Do Is Win (Jump back and forth over your opponent 5 times during the Fatality sequence and perform a Fatality)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Story Mode to 100% for A New Beginning and There Is a Ruler.",
                "2. Do the roster feats in Practice or against easy AI: a Fatality, a 10-hit combo and an X-Ray with every character, and a win with every character variation.",
                "3. Join and level up the Factions - reach level 50 in one, then grind toward all five for No Loyalty - and clear the Tower modes and Test Your Might / Test Your Luck Towers.",
                "4. Play online for the King of the Hill, Tower Battle, Ranked win-streak and 200-match achievements.",
                "5. Do the Invasion mode achievements and the Klassic Tower character-specific challenges (the DLC guest characters and Bo' Rai Cho), which need those specific characters and stages.",
                "Tip: Tower God (50 Living Towers) is the biggest grind - do the shortest Living Tower variant available each time it refreshes, and stack it with the Faction War XP so both progress on the same runs."
            ]
        }
    ]
};
