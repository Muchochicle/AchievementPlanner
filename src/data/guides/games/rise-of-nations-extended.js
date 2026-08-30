// Rise of Nations: Extended Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rise-of-nations-extended.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   287450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rise-of-nations-extended-achievement-guide",
    "category": "game",
    "gameSlug": "rise-of-nations-extended",
    "icon": "🗿",
    "title": "Rise of Nations: Extended Edition Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Rise of Nations: Extended Edition - none are hidden. Covers the victory-condition, difficulty and campaign achievements, and the win-count and lifetime-grind achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rise of Nations: Extended Edition has 38 Steam achievements and none of them are hidden. About half are one-time feats - win by each victory condition (Assassin, Peaceful Tech Race, Territory, Wonder, and others), beat the AI on Tougher and Toughest, finish a multiplayer game, capture a city, and complete each of the game's campaigns (World Map, Alexander, Napoleon, New World, Cold War). The rest are win counts (10 / 25 / 50 / 100 games) and lifetime grinds - collect 1,000,000 resources, kill 50,000 units, build 10,000 buildings, train 1,000,000 infantry and 1,000,000 cavalry.",
                "Nothing is missable - every mode and campaign is replayable and the lifetime counters only accumulate. The completion's long poles are Field Marshal (100 games won) and the seven-figure training and resource grinds, which realistically finish only after dozens of games or long Armageddon-style matches.",
                "Tip: play the campaigns for those achievements, then grind wins against easy AI on a large map with high resources - a slow, army-spam game feeds the 1,000,000-infantry, 1,000,000-cavalry, 10,000-building and 1,000,000-resource counters all at once."
            ]
        },
        {
            "heading": "Victory Conditions, Difficulty & Campaigns",
            "body": [
                "Winning by Assassin, Peaceful Tech Race, Sudden Death Knockout, Musical Chairs, Territory and Wonder, winning on a Big Huge Map, beating Tougher and Toughest AI, finishing a multiplayer game, sending resources to an ally, capturing a city, an Armageddon finish, a high skill score, completing the World Map, Alexander, Napoleon, New World and Cold War campaigns, and the Soviet and USA Espionage completions.",
                "The achievements here: Assassin (Win Assassin); Science Nerd (Win Peaceful Tech Race); Knockout (Knockout in Sudden Death); Good Ear (Win Musical Chairs); Territory (Win Territory); Wonder (Win Wonder); Big Huge (Win on a Big Huge Map); Student Of War (Beat Tougher); Master Of War (Beat Toughest); Ambassador (Finish a multiplayer game); Generous (Send resources to an ally); Conqueror (Capture a city); Armageddon (Finish a game in Armageddon); Skilled (Get a high score on any skill); Supreme (Complete the World Map Campaign); Footsteps (Complete the Alexander the Great Campaign); Napoleon (Complete the Napoleon Campaign); New World (Complete the New World Campaign); Thawed (Complete the Cold War Campaign); KGB Spymaster (Complete Espionage as the Soviets); CIA Spymaster (Complete Espionage as the USA)."
            ]
        },
        {
            "heading": "Progression & Lifetime Grinds",
            "body": [
                "Winning 10 / 25 / 50 / 100 games, researching 4 final techs in a game, controlling 250 rare resources, 5,000 resources from ruins, 1,000,000 resources collected, 50,000 units killed, 10,000 buildings built, 1,000,000 infantry and 1,000,000 cavalry trained, 50,000 artillery, 25,000 naval and 10,000 air units, 10,000 buildings destroyed, and 100,000 units lost.",
                "The achievements here: Colonel (Win 10 games); Brigadier (Win 25 games); General (Win 50 games); Field Marshal (Win 100 games); Genius (Research 4 finals in game); Marco Polo (Gain control of 250 rare resources); Archaeologist (Collect 5,000 resources from ruins); Economical Guru (Collect 1,000,000 resources); Tactical (Kill 50,000 units); Grand Architect (Build 10,000 buildings); Mass Infantry (Train 1,000,000 infantry units); Mass Cavalry (Train 1,000,000 cavalry units); Artillery (Train 50,000 artillery units); Naval (Train 25,000 naval units); Air (Train 10,000 air units); Decon (Destroy 10,000 buildings); Sacrificer (Lose 100,000 units)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all five campaigns (World Map, Alexander, Napoleon, New World, Cold War) and both Espionage sides for those achievements.",
                "2. Do the victory-condition achievements by setting up Quick Battles with the relevant win condition enabled.",
                "3. Beat the AI on Tougher and Toughest, and finish one multiplayer game.",
                "4. Grind wins against easy AI toward Field Marshal (100 wins).",
                "5. During that grind, play long army-spam games on large high-resource maps to feed the seven-figure training, resource, building and kill counters.",
                "Tip: the 1,000,000-infantry and 1,000,000-cavalry counters are the biggest grind - on a huge map with unlimited resources, queue infantry and cavalry endlessly from many barracks and stables in the background while you win normally; the units do not need to survive, just be trained."
            ]
        }
    ]
};
