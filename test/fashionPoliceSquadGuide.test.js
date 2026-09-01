import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fashion-police-squad.js";

test("the Fashion Police Squad guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fashion-police-squad-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fashion-police-squad");

});

test("the Fashion Police Squad guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Collectibles, Weapons & Gags",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Fashion Police Squad achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Huge Boss", "BULL’S EYE!", "You’re a Winner Baby!", "Where The Fog Rises", "Tens Tens Tens Across The Board", "Challenge Accepted.", "Gotta Catch ‘Em All!", "Congratulations on Your Promotion!", "D.R.I.P. Mode Activated", "Drink and Thrive", "Potayto, Potahto", "Funk NFTs", "Toilet Is You", "Hole in One", "Drive to Succeed", "Butting heads", "L’Art", "A Game by Mopeful Games", "Justice Has Been Served", "Dominating!", "Slap Some Fashion Sense Into Them", "Seasoned Slapper", "Top Rated", "4d3d3d3 Engaged", "Everything Turned out Well in the End"];

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
