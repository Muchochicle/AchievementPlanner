import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chasm.js";

test("the Chasm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chasm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chasm");

});

test("the Chasm guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses",
            "Completion & Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Chasm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Warrior", "Monster Slayer", "Wendigo", "Bone Worm", "Titan", "King Trell", "Shaman", "Ulak", "Big Spender", "Bookworm", "Superhero", "Crate Buster", "Socialite", "Good Samaritan", "Explorer", "Zoologist", "Prizefighter", "Guildean Knight", "Mere Mortal", "Gladiator"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
