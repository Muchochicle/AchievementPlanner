// KAISERPUNK Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kaiserpunk.json), whose 51 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2012190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kaiserpunk-achievement-guide",
    "category": "game",
    "gameSlug": "kaiserpunk",
    "icon": "⚙",
    "title": "KAISERPUNK Achievement Guide",
    "summary": "A practical guide to all 51 Steam achievements in KAISERPUNK (2 hidden). Covers the tutorial, the city-growth and production milestones, the trade, war and diplomacy goals, the per-starting-region world-conquest challenges, and the economy and infrastructure buildings. Two of the achievements are hidden - conquering a region with no tanks and a no-fleet tutorial conquest - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "KAISERPUNK has 51 Steam achievements and 2 are hidden. The hidden two are 'Impetuous' (conquer the West Balkans region without using any Tank units) and 'Land Bridge' (in tutorial chapter 3, conquer Asia Minor without loading troops onto a fleet - go overland around the Black Sea). Everything visible is the city-builder-meets-grand-strategy loop: the four tutorial steps, populations of 1,000 to 20,000, producing 1,000,000 wheat / wood / luxuries, winning a game and conquering all regions, the war challenges (Blitzkrieg, Never-ending War, a full 8-unit army), diplomacy (an alliance, an opposite-stance alliance), the per-starting-region conquest challenges (Central Europe to Asia, South America to both Americas, Africa to Europe), and the infrastructure milestones (a skyscraper, a radio station, 500 housing units, maxing the city center).",
                "The catalog marks it difficulty 4. Just winning a game is a real hurdle in this hybrid, and several achievements are full self-imposed-restriction campaigns ('Impetuous' - no tanks, 'Blitzkrieg' - a home region in one in-game month, the four cross-continent conquest runs from specific starts). 'Five-Star Governor' needs every other achievement, so plan several long games.",
                "Tip: pick your starting region deliberately for each conquest achievement - 'Braving The Winter', 'Al Norte' and 'How Tables Have Turned' each specify a start, so you cannot earn them all on one campaign."
            ]
        },
        {
            "heading": "Tutorial & City Growth",
            "body": [
                "The four tutorial steps, the hidden 'Impetuous' (conquer the West Balkans with no tanks), populations of 1,000 / 5,000 / 10,000 / 20,000, a direct resource transport link, fire events (one building, then 50), building 25 bridges, and producing 1,000,000 wheat and wood.",
                "The achievements here: Graduation (Finish the tutorial); Mastering The Basics (Finish the first tutorial episode); The Navigator (Finish the second tutorial episode); The Closing Play (Finish the third tutorial episode); Impetuous (Conquer the West Balkans region without using any Tank units (lean on Artillery and Bombers instead).); Village (Reach a population of 1000 residents in your city); Town (Reach a population of 5000 residents in your city); City (Reach a population of 10000 residents in your city); Megalopolis (Reach a population of 20000 residents in your city); Production Line (Establish a direct resource transport link between two buildings); Play With Matches (Have a fire event destroy a single building); Fire It Up! (Have 50 buildings destroyed by fire); Over Troubled Waters (Build 25 bridges); Farm Boy (Produce 1,000,000 Wheat); Lumberjack (Produce 1,000,000 Wood); Valued Customer (Trade 100 times in a single playthrough)."
            ]
        },
        {
            "heading": "Trade, War & Diplomacy",
            "body": [
                "Trading 100 times, winning a game, conquering all regions, fully extracting a resource, the 100-across-the-board 'Utopia', the war challenges (Never-ending War, Blitzkrieg, a full 8-unit army), deploying a fleet and an air squadron, poor supply, a rebellion, losing a game, destroying an army, choosing a social pillar, the British-Isles conquest challenge, an alliance and an opposite-stance alliance, and 'Five-Star Governor' for every achievement.",
                "The achievements here: Victor! (Win a game); Master Of The World (Conquer all regions); Exploitation (Completely extract a natural resource); Utopia (Have Needs, Safety, Education and Morale for all citizen classes in your city at 100); Never-ending War (Be at war continuously for longer than 1 in-game year); Blitzkrieg (From the moment you declare war on enemy faction, conquer its home region in 1 in-game month); Attention! (Fill all 8 unit slots in a single army); Gaining Sea Legs (Deploy your first fleet); Growing Wings (Deploy your first air squadron); Eating Boots And Belts (Army supply reaches \"poor\" status); Independence! (Region stability reaches 0 and rebels against you); Downfall (Lose a game); Annihilation (Destroy an enemy army); Alignment (Choose your first social pillar); Again? (Starting in the British Isles region, conquer Deccan, Australia and South Africa); A Friend! (Secure an alliance with a faction); Convincing (Secure an alliance with a faction that has an opposite political stance); Five-Star Governor (Complete all achievements)."
            ]
        },
        {
            "heading": "Conquest Challenges & Economy",
            "body": [
                "The starting-region world-conquest challenges (Central Europe to Asia, South America to both Americas, Africa to Europe), destroying an empire, a popular rebellion, the market/tradeport/airport combo, 100,000,000 in cash, 5 naval battles, a skyscraper, a radio station, 1,000,000 luxuries, 10 ranches, maxing the city center, 500 housing units, changing your flag, and the hidden 'Land Bridge' (no-fleet Asia Minor in the tutorial).",
                "The achievements here: Braving The Winter (Starting in Central Europe, conquer the whole of Asia); Al Norte (Starting in South America, conquer both North and South America); How Tables Have Turned (Starting in Africa, conquer all of Europe); Ruins Of A Nation (Destroy an empire); Dereliction Of Duty (Have your people rebel against your rule); Business Conglomerate (Have a market, a tradeport and an airport at the same time); Lord Of War (Successfully conclude a military deal with another faction); Rockefeller (Reach 100,000,000 in Cash); Sea Wolf (Win 5 naval battles); To The Skies (Build your first skyscraper); Kaiserpunk FM (Build a Radio station); Life Of Leisure (Produce 1,000,000 of any luxuries); Animal Farm (Build 10 Ranches); White House (Upgrade your city center to the maximum level); Real Estate Agent (Build 500 housing units of any kind); Flagged (Change your flag design during a session); Land Bridge (In tutorial chapter 3, conquer Asia Minor without ever loading troops onto a fleet - advance overland around the Black Sea (or through the Balkans by warring your ally).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the tutorial, and on chapter 3 take Asia Minor overland for 'Land Bridge'.",
                "2. Play a long campaign to a win, folding in the city-growth, production and infrastructure milestones.",
                "3. Do a no-tank West Balkans conquest for 'Impetuous', and a one-month home-region blitz for 'Blitzkrieg'.",
                "4. Run the three cross-continent conquest challenges from their specified starting regions.",
                "5. Mop up the diplomacy, economy and one-off achievements, then 'Five-Star Governor' completes with the last one.",
                "Tip: 'Utopia' (Needs, Safety, Education and Morale at 100 for every citizen class at once) is the hardest city goal - build a small, rich, over-serviced city rather than a sprawling one, since every class has to hit 100 simultaneously."
            ]
        }
    ]
};
