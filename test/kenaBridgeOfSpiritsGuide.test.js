import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kena-bridge-of-spirits.js";

test("the Kena: Bridge of Spirits guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kena-bridge-of-spirits-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kena-bridge-of-spirits");

});

test("the Kena: Bridge of Spirits guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Abilities & Discovery","Spirits' Relics","Boss Fights","Combat Challenges","Collectibles & Completion","Suggested Order"]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official Kena: Bridge of Spirits achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hunter in the Forest","Harness Your Power","Crossing Over","Found a Friend","Haikyo","Into the Woods","The Open Range","The Lonely Path","Taro's Fear","Taro's Regret","Taro's Love","Adira's Love","Adira's Fear","Adira's Regret","Toshi's Love","Toshi's Fear","Toshi's Regret","Spirit Guide","A Heavy Hammer","A Leader Walks Alone","Restore Balance","Piercing Blow","Weigh Them Down","Quick Draw","Bow Master","Sharpshooter","Between the Eyes","Return to Sender","Triple Threat","Rot Commander","Triple Tap","No Stone Unturned","Hat Collector","Curse Collector","Skillful Spirit Guide","Good as New","Restoration Master","Zen Master","The Last Stop","Say Cheese","Master Spirit Guide"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
