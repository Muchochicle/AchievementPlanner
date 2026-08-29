import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dinkum.js";

test("the Dinkum guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dinkum-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dinkum");

});

test("the Dinkum guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Milestones",
            "Exploration & NPCs",
            "Feats & Community Challenges",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Dinkum achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "New Home", "Fully Licenced", "Filthy Dinkin' Rich", "Snag Sizzle", "Dodgy Bloke",
        "Bush Ranger", "Island Getaway", "Deep Miner", "Undergrove Explorer", "Cooked, Mate",
        "Buffed Up", "Jolly Swag Pack", "Succulent Meals", "Pedia Completer", "On Ya Noggin'",
        "Crafting Master", "Thanks, mate.", "Chucking a Sickie", "Whats wrong, skip?", "Oops, Nevermind!",
        "Big Heart", "Island Life Expert", "Risky Behaviour", "Must… Keep… Moving…", "Creative Thinker",
    ];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
