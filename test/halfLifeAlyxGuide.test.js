import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/half-life-alyx.js";

test("the Half-Life: Alyx guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "half-life-alyx-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "half-life-alyx");

});

test("the Half-Life: Alyx guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & the Jeff Distillery",
            "Late Campaign & Training Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Half-Life: Alyx achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hit and Run", "Quaranta Giorni", "Mazel Tov", "Good Grub", "On a Roll", "Little Slugger", "Eye of the Geiger", "Mag-Snagger", "Sustenance", "Freshly Squeezed", "Zombie with a Shotgun", "Xen Garden", "Off the Rails", "Checking In", "Heart-Breaker Hotel", "Surface Tension", "Unbonded", "Cord-Cutter", "Blast From the Past", "Sound Strategy", "Flat Note", "Crustacean Frustration", "Hold Your Liquor", "Sea Level", "Triple Bypass", "High Water March", "Textbook Jinxing", "Point Extraction", "Consequences", "Dead Giveaway", "Smash and Grab", "Up in Arms", "Pro-Pain", "Indirect Approach", "Combine Harvester", "Xen Lootism", "Safe Trip", "Deadliest Catch", "Near-Jeff Experience", "Team Spirit", "Gnome Vault of My Own", "Gnome Alone"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
