import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/muse-dash.js";

test("the Muse Dash guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "muse-dash-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "muse-dash");

});

test("the Muse Dash guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Clears, Grades & Combos",
            "Collections & Themed Songs",
            "Hidden Skill Checks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Muse Dash achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Muse Dash", "The First Time", "The Strongest among the Weak", "Tower of Strength", "You’ve Conquered It!", "S", "NewType", "Full Combo!!", "Full Combo Master", "300 Combo!", "You Have a Great", "Melee Fight", "Accurate Positioning", "Walk on the Tip of a Blade", "Stream of Consciousness", "Love Actually", "Blue Notes Hunter", "Playing along Both Lines", "Is the Order a Lovely Girl? ~ I started from scratch and did everything I could to become a Muse master with 14 lovely girls. However, when I looked forward to a happy life in this exotic world, I was suddenly thrown into a \"scene of carnage\" of gears and hanging hammers. There must be something wrong with my Lovely Girl Monogatari~ For these girls’ bright future, I must successfully play Lv.12 songs!", "Musemon Master", "Illustration Collection", "Have a Try?", "Sancheck", "Uh-oh, a Rear-end Collision…", "APP Logo Found!", "I don't care about Christmas though", "Trick or treat?", "Conquering the Newbie Zone", "Inner World", "Give Up Treatment", "GENTLEMAN", "Is That OK? ", "You Peak at It", "One More Needed", "Hands of God", "Tutorial", "Mujinku", "Muse Master", "THE MUSEM@STER"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
