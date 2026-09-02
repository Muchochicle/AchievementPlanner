import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nova-lands.js";

test("the Nova Lands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nova-lands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nova-lands");

});

test("the Nova Lands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Production","Beasts & Exploration","Progression & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Nova Lands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Industrial Progress","From Sticks to Computers","A Fancy Calculator","Hyper Math","Industrial Life","We Steel Need More","Will of Steel","The First Beast: Moschillar","The Second Beast: Drameleon","The Third Beast: Tunasa","Curious Explorer","The Automation Starts","Anthill","Special Knowledge","You Look Amazing","Knowledge Archive","A big step for mankind","Home Owner","Catch’Em All","Hanging Out With The Aliens","So Shiny","I Found The Developers","Comfy Flight","Targets Found"];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
