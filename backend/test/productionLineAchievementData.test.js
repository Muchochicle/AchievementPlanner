import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/production-line.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 591370 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("production-line");

test("getPlannerData('production-line') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for production-line");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every Production Line achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every Production Line achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 32 Production Line achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Spender", "You've got to speculate to accumulate. Go ahead and speculate like a philosophy graduate, but don't lose track of logic and reason completely!"],
        ["Bumper Output", "Good work, the production line is ticking over nicely and factory output is racing ahead but don’t take your eyes off the road ahead."],
        ["Customer Awareness: it’s all about the brand", "Our brand is a fuel-injected mix of reputation, vision and our journey. Make sure customers are along for the ride and maintain a brand awareness of over 75% for 10 straight hours."],
        ["Efficiency Awareness", "Good work, you have achieved the Efficiency Awareness Award and your business is gearing up for greatness. Don’t let poor efficiency stall further progress."],
        ["Efficient Layout", "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency'-Bill Gates. It's time to tighten that production line layout."],
        ["Experienced Manager", "You’ve got to put in the hours to get ahead. 'The only source of knowledge is experience'-Albert Einstein."],
        ["Full Throttle Revenue", "Bravo, your business revenue stream was fast and furious for a while. A truly turbo-boosted performance."],
        ["High Octane Output", "Production line performance has shown an impressive acceleration in output. Buckle up, it’s full speed ahead for the business."],
        ["High-End cars: Executive order", "High octane executives love their plush cars. Produce and sell 500 cars from the expensive range in a single game."],
        ["High-Octane Efficiency", "Fantastic job! Hyperdrive engaged. A dazzling, well-oiled performance. You understand that efficiency is one of the drivers of profit."],
        ["Industry Veteran", "In this ever-evolving industry, there is no such thing as 'enough' experience"],
        ["Innovator", "The zoo of the new – produce an irresistible model packed with novel features, let it purr, kick ass, or glide then let it run free!"],
        ["Job Creator", "Recruit as if human labour is going out of fashion! You've got the robots but employees are the oil that keeps the lines running and the profits rolling in"],
        ["Local production: Keeping it in-house", "Extend the web of production. Source just-in-time components from just in-house production just in case those suppliers let you down. Produce 500 local components in a single hour."],
        ["Luxury Range: Sophistication sells", "There is an old saying, ‘Luxury is the mother of innovation’ or something like that. Sell over $10 million worth of cars from the luxury range priced over $70k."],
        ["Mainstream Production", "Good work, your fifth hundred car has rolled off the production line. Are your management skills agile enough to rev your business up even further?"],
        ["Marketing: Let’s go mad!", "Mad men and women of the marketing division, help get our fantastic products in pole position ready to race out of the showroom. Spend over $5 million on marketing in a single game."],
        ["Mass Production", "Congratulations, you have achieved the landmark production of one thousand cars and are well on the road to competing in the mass market. It’s business in the fast lane from now on. Can you keep up?"],
        ["Middle of the Road Output", "Well done, you are steering your company in the right direction by keeping an eye on the clock. Keep rolling out those cars."],
        ["Millionized revenue", "A proud day for the car factory, you have taken one million dollars in revenue. Keep firing on all cylinders."],
        ["Min Spec", "Keep it simple, keep it clean, keep it affordable, keep it rolling off the production line! 'Simplicity is the ultimate in sophistication'-Leonardo di Vinci (long before cars were invented, obviously)."],
        ["Off-Grid", "Unplugged production. Keep the lines running from the power within. Let's go off-grid!"],
        ["Power Trip", "'Electric power is everywhere present in unlimited quantities and can drive the world's machinery without the need of coal, oil, gas'-Nikola Tesla. Self-sufficiency is a thing of beauty. Build a power plant and start feeding the robotic army. They're hungry!"],
        ["Premium Car Production", "Your top-quality innovation and investment strategy has paid off and caught the attention of some discerning customers. A sound reputation means the road ahead could be paved with success."],
        ["Production: scale it up", "From blue-print to juggernaut. Rev up, design and build a factory from scratch and produce 6,000 cars in a single game."],
        ["Rapid Assembly: We’re on a deadline", "Does your production line have traction? Get a grip and produce 500 cars in a single 10 hour shift."],
        ["Research Addict", "'Bring the future into the present so that you can do something about it now'-Alan Lakein. If you're not researching tomorrow's tech today, your business may be here today, gone tomorrow. Keep ahead of the competition"],
        ["Revenue Overdrive", "Congratulations on smashing the ten million dollar revenue barrier. You have shown great drive and determination. Is now a good time to remind you that revenue is not the same as profit?"],
        ["Robot Army", "If the factory doesn't look like an alien dreadnought mothership maybe you need a few more robots but remember, idle robots are the devil's work."],
        ["Start-up Production", "Well done, you have a functional production line and your start-up business has produced its first century run of vehicles! Do you have the drive to take production all the way?"],
        ["Wide Product Range", "All our customers are individuals, they want choice and they want it now. Can you deliver?"],
        ["Zero Emissions: And breathe…", "Be a champion of clean air and produce a battery of 500 electric cars in a single game.  "],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
