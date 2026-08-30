import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rise-of-nations-extended.js";

test("the Rise of Nations: Extended Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rise-of-nations-extended-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rise-of-nations-extended");

});

test("the Rise of Nations: Extended Edition guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Victory Conditions, Difficulty & Campaigns",
            "Progression & Lifetime Grinds",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Rise of Nations: Extended Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Assassin", "Science Nerd", "Knockout", "Good Ear", "Territory", "Wonder", "Big Huge", "Student Of War", "Master Of War", "Ambassador", "Generous", "Conqueror", "Armageddon", "Skilled", "Supreme", "Footsteps", "Napoleon", "New World", "Thawed", "KGB Spymaster", "CIA Spymaster", "Colonel", "Brigadier", "General", "Field Marshal", "Genius", "Marco Polo", "Archaeologist", "Economical Guru", "Tactical", "Grand Architect", "Mass Infantry", "Mass Cavalry", "Artillery", "Naval", "Air", "Decon", "Sacrificer"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
