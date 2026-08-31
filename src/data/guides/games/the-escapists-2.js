// The Escapists 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-escapists-2.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   641990 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-escapists-2-achievement-guide",
    "category": "game",
    "gameSlug": "the-escapists-2",
    "icon": "🚨",
    "title": "The Escapists 2 Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in The Escapists 2 - none are hidden. Covers the stats and general-play achievements, the base-game prison escapes, the antics and multiplayer achievements, and the DLC prisons and quests. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Escapists 2 has 58 Steam achievements and none are hidden. Twelve are stats and general play (maxing each statistic, knocking out inmates and guards, crafting, 'The Great Escape' for all Classic prisons), eight are the base-game prison and transport escapes plus two online wins, nineteen are antics and multiplayer moments (attacking a guard with a cake, escaping on Snooty the Dolphin, tagging 200 spots, cooking naked), and nineteen cover the four DLC prisons (Wicked Ward, Big Top Breakout, Dungeons and Duct Tape, Area 17) and their quests.",
                "The catalog marks it difficulty 3 and many sessions. Nothing is especially hard, but escaping every prison by a unique method, plus all the DLC content and the online-versus wins, is a long grind.",
                "Tip: play each prison until you escape it (that covers most of the escape achievements), and pick up the antics achievements opportunistically while you scheme."
            ]
        },
        {
            "heading": "Stats & General Play",
            "body": [
                "Maxing Strength, Intellect and Fitness (and all three), knocking out 100 inmates and 50 guards, being carried off by a medic, crafting an item and 50 unique items, escaping all Classic prisons ('The Great Escape'), 7 unique Classic escapes, and knocking out every inmate in one prison.",
                "The achievements here: Ripped on the Inside (Max out the Strength statistic.); Criminal Mastermind (Max out the Intellect statistic.); The Olympian (Max out the Fitness statistic.); Statistician (Max out all 3 character statistics.); Bad Intentions (Knock out 100 inmates.); Bad Intentions Part 2 (Knock out 50 guards.); Dr. Love (Get whisked away by a hunky medic.); Artful Dodger (Craft an item.); The Great Escape (Escape all Classic prisons.); Artisan (Craft 50 unique items.); I've Got A Cunning Plan (Perform 7 unique escapes across the Classic prisons.); I'm The Daddy (Knock out every inmate at least once in a single prison.)."
            ]
        },
        {
            "heading": "Prison & Transport Escapes",
            "body": [
                "Escaping all 3 base-game transport prisons, winning 10 Online Versus games, and escaping H.M.P Offshore, Centre Perks 2.0, the U.S.S Anomaly, Rattlesnake Springs, the K.A.P.O.W Camp and Fort Tundra.",
                "The achievements here: The Mobile Escapist (Escape from all 3 of the base game transport prisons); Online Enforcer (Win 10 Online Versus Games.); Drying Out (Escape the H.M.P Offshore prison.); Holiday Blues (Escape the Centre Perks 2.0 prison.); One Pixellated Step... (Escape the U.S.S Anomaly prison.); Escaping Is My Forte (Escape the Rattlesnake Springs prison.); A Camp Departure (Escape the K.A.P.O.W Camp prison.); Chilled Out (Escape the Fort Tundra prison.)."
            ]
        },
        {
            "heading": "Antics & Multiplayer",
            "body": [
                "Playing instruments for an hour, entering multiplayer-only areas, 100 favours, 3 days without Guard Heat, online Versus and Classic games, every job's quota, dog maulings and dog friendship, 3 days each in solitary and the showers, cake attacks, gifting tea, energy-sword duels, custom characters, escaping on Snooty the Dolphin, attending dinner and cooking naked, and tagging 200 spots.",
                "The achievements here: Music Maestro (Play on the instruments for 1 hour of in-game time.); To Me, To You (Enter a multiplayer only area.); Tell Me What's Your Favour (Complete 100 favours.); Good Intentions (Go 3 consecutive days without raising your Guard Heat above 0 in a single session.); Riot Act (Play a Versus Game Online.); Open Prison (Play a Classic Game Online.); Crook Of All Trades (Complete the quota once for each of the jobs over multiple prisons/sessions.); Man's Worst Friend (Get mauled by a guard dog.); Man's Best Friend (Gain a high enough opinion from a dog.); Are You Lonesome Tonight? (Spend 3 days total time in solitary over multiple prisons/sessions.); The Cake Is A Lie? (Attack a guard with a cake.); Pour Us A Brew Will Yer, Love? (Make a cup of tea and gift it to another inmate or guard.); I Am Your Father... (Fight another player in the U.S.S Anomaly, when you are both armed with energy swords.); All Mod Cons (Use a customised character in-game.); Soap On A Rope (Spend 3 days total time in the showers over multiple prisons/sessions.); Call Of Snooty (Escape H.M.P. Offshore on Snooty the Dolphin.); Naked Lunch (Attend dinner whilst being naked.); The Naked Chef (Complete a quota of the Kitchen job whilst being naked.); Keep It Clean! (Tag 200 places throughout any prison.)."
            ]
        },
        {
            "heading": "DLC Prisons & Quests",
            "body": [
                "Escaping Area 17, and the Wicked Ward, Big Top Breakout and Dungeons and Duct Tape DLC prisons - each with its unique single-player and multiplayer escapes, themed quests, and small extras like using the Royal throne.",
                "The achievements here: I want to Believe (Escape the Area 17 prison.); Scared Stiff (Escape Wicked Ward by any means.); A Grave Affair (Complete the unique single player escape.); Monster Mash  (Complete the unique multiplayer escape.); Coffin Dodger (Complete the ‘What it does in the shadows…’ quest.); Almost Haunted (Complete the ‘Bump in the night’ quest.); I ain’t afraid of no Ghost  (Witness the ghost perform an otherworldly feat…); Are You Not Entertained?! (Escape Big Top Breakout by any means.); It’s A Long Shot (Complete the unique single player escape.); Wind Up Merchant (Complete the unique multiplayer escape.); Clowning Around (Complete the ‘No Laughing Matter’ quest.); It’s An Illusion, Not A Trick (Complete the ‘Smoke and Mirrors’ Quest.); Stage Fright (Avoid going to the Show Time routine for 3 days in a row.); Oh What A Knight! (Escape Dungeons and Duct Tape by any means.); ‘Tis But A Scratch (Complete the unique single player escape.); Siege The Day  (Complete the unique multiplayer escape.); Yo Dawg, I heard you like Exhibits (Complete the ‘It Belongs In A Museum’ quest.); To Antiquity And Beyond (Complete the ‘Eternally Grateful’ Quest.); Royal Flush (Use the Royal throne.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the Classic prisons one at a time until each is escaped ('The Great Escape', the per-prison achievements, '7 unique escapes').",
                "2. Do the three transport prisons ('The Mobile Escapist').",
                "3. Max your three stats and craft your way to 'Artisan'.",
                "4. Mop up the antics achievements (cake attack, tea gift, naked dinner, 200 tags, dog friendship).",
                "5. Play the four DLC prisons for their escapes and quests.",
                "6. Do the online-versus and online-classic achievements with a friend or in matchmaking.",
                "Tip: 'Good Intentions' (3 days at 0 Guard Heat) is easiest early in a fresh prison before you've drawn any attention - do it first, then start tunnelling."
            ]
        }
    ]
};
