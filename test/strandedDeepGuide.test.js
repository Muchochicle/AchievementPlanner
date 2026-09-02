import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stranded-deep.js";

test("the Stranded Deep guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stranded-deep-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stranded-deep");

});

test("the Stranded Deep guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Survival & Crafting","Bosses & Escape","Suggested Order"]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Stranded Deep achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Horrific Pacific","Backpacker","Back To The Stone Age","Look What I Have Created!","Knife Skills","Crabby Patty","Fishing Season Is Open!","Island Hopper","Day 10","Hermit","Vegetarian","Hunter Of The High Seas","New Threads","Fish Are Friends","The Seas Harvest","Moving Up","Green Thumb","Horticulturalist","Another Day, Another Shore","Working With My Hands","Unchained Melody","Day 20","Powah!","Nomad","Da Vinci","Call Me Ahab","Columbus","Lean, Mean, Crafting Machine","Industrial Fashion","Archaeologist","Special Package","Gotta Craft 'Em All!","Day 50","Day 100","Out Of The Frying Pan","Magnets","This Sparks Joy"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
