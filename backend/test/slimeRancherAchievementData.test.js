import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/slime-rancher.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 433340 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 57 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("slime-rancher");

test("getPlannerData('slime-rancher') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for slime-rancher");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Slime Rancher achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Slime Rancher achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 57 officially-described Slime Rancher achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Quick Newbuck", "Earn 5,000 newbucks in a single day"],
        ["Ball Pit", "Jump into a corral containing at least 40 slimes"],
        ["Bea the Builder", "Fabricate 35 Slime Science gadgets"],
        ["Best of the Worst", "Place a tarr on the #1 Slime Stage"],
        ["Boop!", "Let a tabby slime headbutt you right on the nose"],
        ["Buck Buck Bagu-", "Feed 100 chickens to slimes on the Ranch"],
        ["Burstin' at the Seams", "Put at least 50 units into each slot of a fully upgraded silo"],
        ["Carousel", "Incinerate an elder chicken"],
        ["Catch!", "Shoot food into an airborne slime's mouth"],
        ["Color Me Impressed", "Use chroma packs to change the color of the ranch house, tech, and vacpack"],
        ["Controlling the Chaos", "Constrain more than 15 slimes in your vac stream at once while on the range"],
        ["Diversification", "Have at least 10 types of largos on the Ranch"],
        ["Doors Like These", "Discover where Hobson's journey ended, and started once again."],
        ["Fireworks", "Shoot a boom slime largo into the air that explodes before landing"],
        ["Fortunate", "Earn over 5,000 newbucks"],
        ["Free Rangin'", "Collect 50 plorts on the Range in a single day"],
        ["Fruit Cocktail", "Have 3 different fruit trees on the Ranch at the same time"],
        ["Fully Loaded", "Have a maximally upgraded corral, coop, and silo on the Ranch"],
        ["Hasty Exchange", "Fulfill a Range Exchange request between Noon and 2 PM"],
        ["Hat Trick", "Obtain at least 3 gold plorts from a single gold slime"],
        ["Into the Past", "Discover the Ancient Ruins"],
        ["Jelly Belly Burst", "Burst a gordo slime"],
        ["Mine, All Mine", "Discovered the Quarry"],
        ["Mint in Box", "Purchase at least 10 different types of slime toys"],
        ["Never Stop Creating", "Fabricate 100 Slime Science gadgets"],
        ["Not My Morning", "Be knocked out before 10 AM"],
        ["Omnivorous", "Feed pink slimes on the Ranch 10 different types of food"],
        ["On the Other Side", "Discovered the Moss Blanket"],
        ["Once Bitten, Twice... Bitten", "Hold onto a tarr for 15 seconds"],
        ["One Person at a Time", "Join the 7Zee Rewards Club"],
        ["Onward... to SCIENCE!", "Fabricate your first Slime Science gadget"],
        ["Open Says Me", "Open a slime gate"],
        ["Plort Authority", "Sell 1,000 plorts at the Plort Market"],
        ["Plort Peddler", "Sell 100 plorts at the Plort Market"],
        ["Plort Powerhouse", "Sell 2,500 plorts at the Plort Market"],
        ["Plort Tycoon", "Sell 5,000 plorts at the Plort Market"],
        ["Pool Party", "Fill a pond on the Ranch with at least 5 different types of slimes"],
        ["Pro Style", "Complete the Slimepedia"],
        ["Renewal", "Start bringing life back to the Glass Desert"],
        ["Risky Business", "Have at least 3 different types of largos in the same corral"],
        ["Rush Challenger", "Reach at least 10,000 newbucks in Rush Mode"],
        ["Rush Champion", "Reach at least 35,000 newbucks in Rush Mode"],
        ["Rush Plortmaster", "Reach at least 75,000 newbucks in Rush Mode"],
        ["Salad Bar", "Have 3 different veggie gardens on the Ranch at the same time"],
        ["She's on Fire!", "Score 50 points in a single game of slimeball"],
        ["Six Pack", "Have at least 6 different types of slimes in the same corral"],
        ["Smoke, Fire, and Mirrors", "Discovered the Glass Desert"],
        ["Tasty!", "Feed 50 slimes on the Ranch their favorite food"],
        ["That Only Works in Comic Books", "Stand inside a rad aura for at least 15 seconds"],
        ["The Adventure Continues!", "Complete Adventure Mode and set out for what's next."],
        ["The Hunter Has Become... The Other Thing", "Snare a Hunter Gordo"],
        ["Transplorter", "Sell 500 plorts at the Plort Market"],
        ["Up All Night", "Stay awake from 6 AM to 6 AM the next day"],
        ["Upper Crust", "Earn over 100,000 newbucks"],
        ["Well-Off Rancher", "Earn over 25,000 newbucks"],
        ["While You Were Away", "Return to the Ranch after more than 24 hours"],
        ["You... Monster!", "Send an adorable chick to a fiery end, the same place you're now destined to go"],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
