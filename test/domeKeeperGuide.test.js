import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dome-keeper.js";

test("the Dome Keeper guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dome-keeper-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dome-keeper");

});

test("the Dome Keeper guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Worlds, Domes & Keepers",
            "Relic Hunt",
            "Battle Abilities",
            "Gadgets & Mining",
            "Prestige & Endless",
            "The Assessor",
            "Other Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Dome Keeper achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dome-keeper.json).
    const officialAchievementNames = [
        "Gifts from the past", "Shield Completed", "Land of the orbs", "Land of the behemoth", "Land of the stalks",
        "Land of the Spores", "Stick them with the pointy end", "Hoarder", "Doping", "Quick Finish",
        "Compounding interest", "My name shall be known", "A keeper of status", "Bringing home the big bucks", "Close Call",
        "Deep and Greedy", "Precisely when I meant to", "Half Marathon", "Shopping Bag Conundrum", "We're gonna need a bigger lift",
        "Thorough", "I came prepared", "The deep end", "The regular", "Bite sized",
        "Take your time", "Ready for Battle", "Earth shattering", "The third eye", "Waterworld",
        "Transmogrification", "Repellent completed", "Orchard completed", "My good mule", "Veteran Keeper",
        "Learning Opportunity", "Rich in Fiber", "My Savior", "Find a Friend", "The Need for Speed",
        "Solitaire Pong", "Perfect Placement", "Master of Gravity", "Bulky Goods", "Great-Great-Grandspheres",
        "Hat Trick", "Full Clip"
    ];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
