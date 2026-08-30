// Car Mechanic Simulator 2021 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/car-mechanic-simulator-2021.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1190000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "car-mechanic-simulator-2021-achievement-guide",
    "category": "game",
    "gameSlug": "car-mechanic-simulator-2021",
    "icon": "🔧",
    "title": "Car Mechanic Simulator 2021 Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Car Mechanic Simulator 2021 - none are hidden. Covers the repair and workshop skill milestones (tires, body panels, parts, bolts, painting, engine swaps), the buying/selling and exploration achievements (junkyard, barn, auctions, car salon, test track), and the career progression (all skills, all missions, levels 5/20/50).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Car Mechanic Simulator 2021 has 46 Steam achievements and none of them are hidden. They are all grind and progression milestones from running your career-mode garage: balancing tires, fixing body panels and car parts, unscrewing 10,000 bolts, painting cars, swapping engines, finishing orders (1, then 100), renovating and selling cars, and the buying/exploration side (junkyard cars, barn finds, auctions, the car salon, the test track and path test). The rest are career progression: unlocking all garage expansions, all skills, finishing all special missions, and reaching character levels 5, 20 and 50.",
                "Nothing is missable - career mode has no fail state and every counter accumulates across your whole save. This is a long but relaxed completion; the biggest single grinds are 10,000 bolts unscrewed, reaching level 50, and buying 30 cars each from the junkyard and barns.",
                "Tip: take every order you can and do full teardowns even when the job only needs one part - unscrewing every bolt on a car counts toward Wrench Master (10,000 bolts) and gives extra experience toward level 50, so thorough disassembly is the fastest route to the two longest achievements at once."
            ]
        },
        {
            "heading": "Repair & Workshop Skills",
            "body": [
                "The core garage grind: balancing 5 and 50 tires, visiting a junkyard, fixing 50 and 150 body parts and car parts, unlocking all garage expansions, finishing 1 and 100 orders, an engine swap, painting 5 and 60 cars, unscrewing 10,000 bolts, finishing orders with experience and money bonuses, renovating and selling 1 and 50 cars, and pouring old oil on the floor.",
                "The achievements here: Vulcanizer (Balance 5 tires); Professional vulcanizer (Balance 50 tires); Welcome to the world of junk (Visit a junkyard); Smash! Bash! (Fix 50 body parts); Sculptor (Fix 150 body parts); Handyman (Fix 50 car parts); Regenerator (Fix 150 car parts); Like a boss (Unlock all garage expansions); Job done! (Finish 1 order); Hard worker (Finish 100 orders); New heart (Swap engine); Amateur Painter (Paint 5 cars); Artist (Paint 60 cars); Wrench Master (Unscrew 10 000 bolts); Life lesson (Finish order with experience bonus); Good tip (Finish order with money bonus); Car flipper (Renovate and sell 1 car); Trader (Renovate and sell 50 cars); Slippery floor (Pour old oil on the floor)."
            ]
        },
        {
            "heading": "Buying, Selling & Exploration",
            "body": [
                "The acquisition side: buying from the car salon, buying 1 and 30 cars from the junkyard and from barns, earning 5,000 and 50,000 CR selling cars, visiting a barn once and 30 times, the test track and path test (once and 25 times), buying 100 and 3,000 parts from the main shop, buying 5 and 25 cars from auctions, unlocking 10 parking alleys, a sub-1:50 time-attack lap, visiting the salon, and selling 1,000 parts from inventory.",
                "The achievements here: Rich guy (Buy new car in car salon); Piece of junk (Buy 1 car from junkyard); Scavenger (Buy 30 cars from junkyard); Hidden Trasure (Buy 1 car from barn); Barn finder (Buy 30 cars from barn); Little Steps (Earn 5000 CR on sell cars); Great roll (Earn 50 000 CR on sell cars); First time at countryside (Visit Barn first time); Explorer (Visit Barn 30 times); Road tested (Finish test track); Path full of stops (Finish path test first time); Great habit (Finish path test 25 times); New and shiny (Buy 100 parts from main shop); Reasonable and responsible (Buy 3000 parts from main shop); Blind shot (Buy 5 cars from auctions); Gambler (Buy 25 cars from auctions); Parking boy (Unlock 10 parking alleys); Racer boy (Finish lap with time under 1:50); I like new shiny stuff (Visit Salon); So many unneeded parts (Sell 1000 parts from inventory)."
            ]
        },
        {
            "heading": "Career Progression",
            "body": [
                "The long-term goals: unlocking all skills, earning 500 and 2,000 scrap parts, finishing all the special missions, and reaching character levels 5, 20 and 50.",
                "The achievements here: Well trained (Unlock all skills); I like scraps (Earn 500 scrap parts); Scraps are my obsession (Earn 2000 scrap parts); Time for holidays (Finish all the special missions); I think i can fix it (Reach level 5); I saw many things (Reach level 20); The Mechanic (Reach level 50)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play career mode and take a steady stream of orders, doing full teardowns on every car to build bolts unscrewed and experience quickly.",
                "2. Unlock garage expansions and skills as your money and level allow, and use the profits to buy cars from the junkyard, barns, auctions and the salon toward those achievement counts.",
                "3. Renovate and flip cars for the sell-earnings and renovate-and-sell achievements, and do the test track, path test and a sub-1:50 time-attack lap.",
                "4. Work through all the special missions for Time for holidays.",
                "5. Keep grinding orders and teardowns toward 10,000 bolts, level 50, and 2,000 scrap parts, which will be the last achievements standing.",
                "Tip: barn and auction cars are the cheapest way to hit the buy-count achievements - snap up the low-value lots even if you do not plan to restore them, then scrap them for parts, which also feeds the scrap-parts achievements."
            ]
        }
    ]
};
