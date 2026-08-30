import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cyber-shadow.js";

test("the Cyber Shadow guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cyber-shadow-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cyber-shadow");

});

test("the Cyber Shadow guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Boss Challenges",
            "Abilities & Secrets",
            "Completion Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Cyber Shadow achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Pacifist", "Smashing", "Fight with honor", "Long distance", "Wouldn't hurt a fly", "Not a scratch", "Focused effort", "Boring", "Blade's plenty", "Live forever", "Dry socks", "Floor is lava", "Ping pong", "Show off", "Fast track", "Don't touch the paint", "Attacking aggressively", "This is my boat", "Pogo master", "Eye for an eye", "Lonely robot", "Tools of the trade", "Gadgetmaster", "Airtime", "No you", "Super ninja", "Saving the clan", "Rise to the challenge", "Strike them down", "Monkey around", "Forged will", "Deflect evil", "Sudden movements", "Overpowered", "Born ready", "Maximum power", "A thousand souls", "Returned to ethos", "Fast as lightning", "100%"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
