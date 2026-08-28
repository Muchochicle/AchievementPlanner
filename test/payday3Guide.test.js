import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/payday-3.js";

test("the PAYDAY 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "payday-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "payday-3");

});

test("the PAYDAY 3 guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "General & Loadout",
            "Road Rage",
            "Under the Surphaze",
            "No Rest for the Wicked",
            "99 Boxes",
            "Gold & Sharke",
            "Dirty Ice",
            "Rock the Cradle",
            "Touch the Sky",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official PAYDAY 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "No One Cared Who I Was...", "Guns Don't Kill People...", "Danger, High Voltage", "Unlimited Power", "Kitted Out",
        "Arts and Crafts", "Traffic Control", "Crowd Control", "True Connoisseur", "Art Critic",
        "Color Me Surprised", "Just... One... More...", "Tech Mogul", "No Stone Unturned", "Closing the Account",
        "The Hard Way", "Cleanin' It Out", "Smash and Grab", "Party Crasher", "Afterparty",
        "Spec Ops", "Insurance Policy"
    ];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
