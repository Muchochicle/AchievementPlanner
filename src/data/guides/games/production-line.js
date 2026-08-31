// Production Line Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/production-line.json), whose 32 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   591370 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "production-line-achievement-guide",
    "category": "game",
    "gameSlug": "production-line",
    "icon": "🚗",
    "title": "Production Line Achievement Guide",
    "summary": "A practical guide to all 32 Steam achievements in Production Line - none are hidden. Covers the output, efficiency and revenue awards, and the factory-setup and single-game challenge achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Production Line has 32 Steam achievements and none are hidden. About a dozen are output, efficiency and revenue awards (100 / 500 / 1,000 cars produced, $1M and $10M revenue, efficiency and rate awards), and the rest are factory-setup goals (going off-grid, a robot army, an efficient layout, a min-spec car, an innovative car, a wide product range, research and marketing) plus single-game production challenges (500 electric cars, 500 expensive cars, 500 cars in a 10-hour shift, and 'Production: scale it up' for 6,000 cars in one game).",
                "The catalog marks it difficulty 3. The award achievements come with normal play; the single-game challenges (especially 6,000 cars) need a well-optimised factory built for volume.",
                "Tip: play one long optimised save for the production and revenue milestones, then do the '500 in a single game' and 6,000-car challenges on a factory designed around each goal."
            ]
        },
        {
            "heading": "Output, Efficiency & Revenue Awards",
            "body": [
                "The output and efficiency awards, 100 / 500 / 1,000 cars produced, $1M and $10M revenue, premium car production, the rate and 'Full Throttle Revenue' awards, and 'Power Trip'.",
                "The achievements here: High Octane Output (Production line performance has shown an impressive acceleration in output. Buckle up, it’s full speed ahead for the business.); High-Octane Efficiency (Fantastic job! Hyperdrive engaged. A dazzling, well-oiled performance. You understand that efficiency is one of the drivers of profit.); Efficiency Awareness (Good work, you have achieved the Efficiency Awareness Award and your business is gearing up for greatness. Don’t let poor efficiency stall further progress.); Bumper Output (Good work, the production line is ticking over nicely and factory output is racing ahead but don’t take your eyes off the road ahead.); Mainstream Production (Good work, your fifth hundred car has rolled off the production line. Are your management skills agile enough to rev your business up even further?); Mass Production (Congratulations, you have achieved the landmark production of one thousand cars and are well on the road to competing in the mass market. It’s business in the fast lane from now on. Can you keep up?); Start-up Production (Well done, you have a functional production line and your start-up business has produced its first century run of vehicles! Do you have the drive to take production all the way?); Millionized revenue (A proud day for the car factory, you have taken one million dollars in revenue. Keep firing on all cylinders.); Premium Car Production (Your top-quality innovation and investment strategy has paid off and caught the attention of some discerning customers. A sound reputation means the road ahead could be paved with success.); Full Throttle Revenue (Bravo, your business revenue stream was fast and furious for a while. A truly turbo-boosted performance.); Middle of the Road Output (Well done, you are steering your company in the right direction by keeping an eye on the clock. Keep rolling out those cars.); Revenue Overdrive (Congratulations on smashing the ten million dollar revenue barrier. You have shown great drive and determination. Is now a good time to remind you that revenue is not the same as profit?); Power Trip ('Electric power is everywhere present in unlimited quantities and can drive the world's machinery without the need of coal, oil, gas'-Nikola Tesla. Self-sufficiency is a thing of beauty. Build a power plant and start feeding the robotic army. They're hungry!)."
            ]
        },
        {
            "heading": "Factory Setup & Single-Game Challenges",
            "body": [
                "Going off-grid, recruiting many employees ('Job Creator') and robots ('Robot Army'), an efficient layout, an innovative car, a min-spec car, the experience awards, a wide product range, big spending, research addiction, luxury and marketing, and the single-game challenges: 500 electric cars, local (in-house) production, 500 cars in a 10-hour shift, 500 expensive cars, customer awareness, and 6,000 cars from a scratch-built factory.",
                "The achievements here: Off-Grid (Unplugged production. Keep the lines running from the power within. Let's go off-grid!); Job Creator (Recruit as if human labour is going out of fashion! You've got the robots but employees are the oil that keeps the lines running and the profits rolling in); Robot Army (If the factory doesn't look like an alien dreadnought mothership maybe you need a few more robots but remember, idle robots are the devil's work.); Efficient Layout (The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency'-Bill Gates. It's time to tighten that production line layout.); Innovator (The zoo of the new – produce an irresistible model packed with novel features, let it purr, kick ass, or glide then let it run free!); Min Spec (Keep it simple, keep it clean, keep it affordable, keep it rolling off the production line! 'Simplicity is the ultimate in sophistication'-Leonardo di Vinci (long before cars were invented, obviously).); Experienced Manager (You’ve got to put in the hours to get ahead. 'The only source of knowledge is experience'-Albert Einstein.); Industry Veteran (In this ever-evolving industry, there is no such thing as 'enough' experience); Wide Product Range (All our customers are individuals, they want choice and they want it now. Can you deliver?); Big Spender (You've got to speculate to accumulate. Go ahead and speculate like a philosophy graduate, but don't lose track of logic and reason completely!); Research Addict ('Bring the future into the present so that you can do something about it now'-Alan Lakein. If you're not researching tomorrow's tech today, your business may be here today, gone tomorrow. Keep ahead of the competition); Luxury Range: Sophistication sells (There is an old saying, ‘Luxury is the mother of innovation’ or something like that. Sell over $10 million worth of cars from the luxury range priced over $70k.); Marketing: Let’s go mad! (Mad men and women of the marketing division, help get our fantastic products in pole position ready to race out of the showroom. Spend over $5 million on marketing in a single game.); Zero Emissions: And breathe… (Be a champion of clean air and produce a battery of 500 electric cars in a single game.  ); Local production: Keeping it in-house (Extend the web of production. Source just-in-time components from just in-house production just in case those suppliers let you down. Produce 500 local components in a single hour.); Rapid Assembly: We’re on a deadline (Does your production line have traction? Get a grip and produce 500 cars in a single 10 hour shift.); High-End cars: Executive order (High octane executives love their plush cars. Produce and sell 500 cars from the expensive range in a single game.); Customer Awareness: it’s all about the brand (Our brand is a fuel-injected mix of reputation, vision and our journey. Make sure customers are along for the ride and maintain a brand awareness of over 75% for 10 straight hours.); Production: scale it up (From blue-print to juggernaut. Rev up, design and build a factory from scratch and produce 6,000 cars in a single game.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play one long optimised save - the output, efficiency and revenue awards come as you scale up.",
                "2. Do the setup achievements on that save: go off-grid, build a robot-heavy line, keep an efficient layout, research broadly, run marketing.",
                "3. Design a factory around electric cars for '500 electric in one game', and one around the expensive range for '500 expensive'.",
                "4. Build a high-throughput line and push 6,000 cars in a single game for 'Production: scale it up'.",
                "Tip: 'Off-Grid' needs enough on-site power generation to run the whole factory with no grid connection - build it out before you disconnect, or the line stalls."
            ]
        }
    ]
};
