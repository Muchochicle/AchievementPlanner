import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/inside.js";

test("the INSIDE guide identifies itself correctly as INSIDE's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "inside-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "inside");

});

test("the INSIDE guide has all 3 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "A Linear Story",
            "Playing for 100%"
        ]
    );

});

test("the Overview states the verified 14-achievement, linear-unlock facts", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);
    assert.match(overview, /fixed sequence/);

});

test("every one of the 14 official INSIDE achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (src/data/games/inside.json).
    const officialAchievementNames = [
        "Murky Waters", "Field Research", "Wee Wee Wee", "Left Behind", "Obscure Foundations",
        "Friends in low places", "A Tableau", "Pack Mentality", "Respite", "Unfathomable",
        "Clockwork", "Room for Reflection", "Office Space", "The Last One"
    ];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("the guide is honest that nothing is missable and there's no separate collectible hunt", () => {

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    assert.match(fullText, /[Nn]othing (here )?is missable/);

});
