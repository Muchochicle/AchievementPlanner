import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/colony-survival.js";

test("the Colony Survival guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "colony-survival-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "colony-survival");

});

test("the Colony Survival guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Colony Building",
            "Tech & Recruitment",
            "Prestige & Growth",
            "Late-Game Production & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Colony Survival achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Very First Step", "Craft Isn't Mine, It's For Colonists", "A Small Tribe", "Rising Threat", "Horn of Plenty",
        "Lockbox Time", "Divine Saviour", "A Small Village", "Big Data", "It's a Trap!",
        "The Bronze Age", "Not All Those Who Wander Are Lost", "How Hemp Is Meant To Be Used", "Settlers", "Divine Deliciousness",
        "Modern Texts", "The Miracle of Flight", "Time Goes By", "Modern Solutions", "Escalating Requirements",
        "Ups and Downs", "Things Get Complex", "Exponential Data Increase", "A Medium-Sized Town", "Fire At Will",
        "Freeze!", "Mix And Match", "The Miracle of Explosions", "Speed It Up", "Crunch Those Numbers",
        "A King Among Lords", "An Emperor Among Kings", "The Most Important Goal", "A Network Of Towns", "Money Money Money",
        "Watch The Clock", "Labor Shortage", "Lazy Colonists", "Tremendous Threat", "Fixing The Modern World",
        "You'll Never Go Hungry Again", "Danger Zone", "The Cost Of Copper", "The Fires of Industry", "Amazing Arsenal",
        "Mystical Forces", "More Dakka", "Magnum Opus", "Dibs", "Time For Wisdom",
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
