import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/islets.js";

test("the Islets guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "islets-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "islets");

});

test("the Islets guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Bosses","Progression & World","Upgrades & Boss Rush","Suggested Order"]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Islets achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Root of Evil","Something's fishy...","Tour Trouble","9 Lives and 8 Knives","Ticking Timebomb","Coming to Grips","A Sky Tail","Grave Danger","Tulip Tussle","A Swampy Situation","Stone Cold Witch","Exterminator","Robot Rampage","Boney Battle","Burning Bridges","Behind the Mask","Back to Life","Turning a New Leaf","An Old Friend","The Mystery Beyond","Keeping Up with Friends","Pins in the Map","Shrine Bright","All Mapped Out","Strengthened Sword","Sharper Arrows","Feeling Stronger","Can't Touch This","A Better Bucket","Top of the Line","A Little Stronger","Pretty Tough!","Halfway There","Fully Equipped","All in a Row","Make it out Alive","The Toughest Warrior","Paying Your Dues","Getting Thirsty","Loving the Rain","X Marks the Spot","Strongest Sword","Sharpest Arrows","The Pits"];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
