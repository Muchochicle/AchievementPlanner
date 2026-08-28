import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/slime-rancher.js";

test("the Slime Rancher guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "slime-rancher-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "slime-rancher");

});

test("the Slime Rancher guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ranching & Economy",
            "Slime Care & Feeding",
            "Exploration & Story",
            "Stunts & Challenges",
            "Slime Science & Rush Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Slime Rancher achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Plort Peddler", "Transplorter", "Plort Authority", "Plort Powerhouse", "Plort Tycoon",
        "Buck Buck Bagu-", "Fruit Cocktail", "Salad Bar", "Fortunate", "Well-Off Rancher",
        "Upper Crust", "A Quick Newbuck", "Up All Night", "Not My Morning", "While You Were Away",
        "Catch!", "Omnivorous", "Tasty!", "Mine, All Mine", "On the Other Side",
        "Smoke, Fire, and Mirrors", "Jelly Belly Burst", "Open Says Me", "Carousel", "You... Monster!",
        "Burstin' at the Seams", "Fully Loaded", "Hasty Exchange", "Free Rangin'", "Hat Trick",
        "That Only Works in Comic Books", "Once Bitten, Twice... Bitten", "Boop!", "Fireworks", "Controlling the Chaos",
        "Six Pack", "Risky Business", "Pool Party", "Diversification", "Ball Pit",
        "Rush Challenger", "Rush Champion", "Rush Plortmaster", "Into the Past", "Onward... to SCIENCE!",
        "Bea the Builder", "Never Stop Creating", "Best of the Worst", "She's on Fire!", "One Person at a Time",
        "Color Me Impressed", "Mint in Box", "The Hunter Has Become... The Other Thing", "Renewal", "Pro Style",
        "Doors Like These", "The Adventure Continues!"
    ];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
