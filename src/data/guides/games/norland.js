// Norland Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/norland.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1857090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "norland-achievement-guide",
    "category": "game",
    "gameSlug": "norland",
    "icon": "👑",
    "title": "Norland Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in Norland - none are hidden. None of the achievements are hidden. Covers the two victory conditions, the growth and trade milestones, a set of political and religious challenge states (all-loyalist, all-fanatic, all-bastard cities), and darkly comic one-offs like a Henry VIII run and executing 25 innocents.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Norland has 25 Steam achievements and none are hidden. Two are victories - becoming Emperor of Norland, and doing it as a single king ('Lone Genius'). The rest are milestones (population 100, 500 gold/day from trade, surviving 50 days, winning 10 battles, all 4 cultures in your family, 1,000 Rutabagas), challenge states that must hold from day 20 (a fully nectar-addicted, fully loyalist, fully fanatic, or fully bastard city), and one-offs - killing a bishop, a king dying on a hunt, a blind lord winning a duel, a solo king clearing a bandit camp, surviving a smallpox epidemic or a wolf pack, executing 25 innocents, and a Henry VIII run (marry 6 wives, kill 2).",
                "The catalog marks it difficulty 4. Norland is an unforgiving colony sim - just reaching the Emperor victory is a real achievement, and 'Lone Genius' (win with only one playable king ever) is much harder. The day-20 'entire city is X' states need deliberate social engineering, and several one-offs (the blind duel, the solo bandit-camp clear) ask you to win fights at a disadvantage.",
                "Tip: plan one committed run at the Emperor victory and fold in as many milestones as you can (trade income, population, 10 battles won, all 4 cultures) - the challenge states and dark one-offs are better done on separate throwaway saves."
            ]
        },
        {
            "heading": "Victory & Growth",
            "body": [
                "Becoming Emperor of Norland, creating your own kingdom or City Alliance, defeating the Unholy Horde, reaching population 100, 500 gold/day from trade, surviving 50 days, winning 10 battles, having lords of all 4 cultures, and collecting 1,000 Rutabagas.",
                "The achievements here: Emperor (Win the game by becoming the Emperor of Norland.); Head of State (Create your own kingdom or City Alliance.); Horde Hammer (Defeat the Unholy Horde.); Big City (Reach a population of 100 people.); Trader (Earn 500 gold in a day from trade contracts.); Long-liver (Survive for 50 days.); Winner (Win 10 battles.); Commonwealth of Cultures (Your noble family must have lords of all 4 cultures.); RUTABAGA! (Collect 1000 Rutabagas.)."
            ]
        },
        {
            "heading": "Rulers, Faith & Chaos",
            "body": [
                "Killing a bishop, a king dying on a hunt, an entire city of nectar addicts / loyalists / fanatics from day 20, a lone king destroying a bandit camp, a blind lord winning a duel, a lord reaching level 20 in three skills, and an all-bastard noble family from day 20.",
                "The achievements here: Dead Bishop (Kill a bishop, for God's sake!); Unlucky Hunter (The king died while hunting.); Nectar Paradise (Starting from day 20, all your peasants in the city are nectar addicts.); Long Live the King (Starting from day 20, all your peasants in the city are loyalists.); In the Name of Sophia (Starting from day 20, all your peasants in the city are fanatics.); Lone Hero (Destroy a forest bandit camp with a single king.); Blind Fury (A blind lord must win a duel.); Great Lord (A lord must reach level 20 in three skills.); Family of Bastards (Starting from day 20, all lords must be bastards.)."
            ]
        },
        {
            "heading": "Trials & Scholarship",
            "body": [
                "Surviving a smallpox epidemic, executing 25 innocent characters, a Henry VIII run (6 wives, kill 2), becoming Emperor with only one king, a lord reading 10 level-3 books, collecting 50 different books, and surviving a wolf pack attack.",
                "The achievements here: Survivor with Scars (Survive a smallpox epidemic.); Cruel Tyrant (Execute 25 innocent characters.); Henry VIII (The king must marry 6 wives and kill 2 of them.); Lone Genius (Become an emperor while playing only as one king.); Great Scholar (A lord must read 10 level 3 books.); Big Library (Collect 50 different books.); Wolf Hammer (Survive a wolf pack attack.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full campaign aiming for the Emperor victory, keeping trade, population, battles and cultures in mind.",
                "2. On that run also grab 'Head of State', 'Horde Hammer', 'Long-liver' and the book-collecting achievements.",
                "3. Do a dedicated 'Lone Genius' attempt - win as Emperor while only ever having one playable king.",
                "4. Use throwaway saves for the day-20 challenge states (all loyalist / fanatic / nectar / bastard).",
                "5. Mop up the dark one-offs (Henry VIII, 25 executions, the blind duel, the solo bandit camp, the epidemics).",
                "Tip: the day-20 'entire city' achievements are checked continuously from day 20, so pause often and convert or expel the last few hold-outs - a single unconverted peasant blocks the whole achievement."
            ]
        }
    ]
};
