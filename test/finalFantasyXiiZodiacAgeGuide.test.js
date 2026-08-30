import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-xii-zodiac-age.js";

test("the FINAL FANTASY XII: The Zodiac Age guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-xii-zodiac-age-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-xii-zodiac-age");

});

test("the FINAL FANTASY XII: The Zodiac Age guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Grinds, Mastery & Completion",
            "Elite Marks, Espers & Story",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official FINAL FANTASY XII: The Zodiac Age achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Champion of Ivalice", "Assault Striker", "Spellslinger", "Premier Prestidigitator", "Master Thief", "Blood Dancer", "The Unrelenting", "Wayfarer", "Plunderer", "Record Breaker", "Spendthrift", "Privateer", "Exemplar", "Conqueror", "Scrivener", "Runeweaver", "Jack-of-All-Trades", "Collector", "Cartographer", "Mist Walker", "Eagle Eye", "Wyrmslayer", "Sharpshooter", "Freshmaker", "Master Swordsman", "Lord of the Kings", "Hunter Extraordinaire", "Radiant Savior", "Fell Angel", "Zodiac Knight", "High Summoner", "For the Homeland", "Galbana Bloom", "A Traitor Redeemed", "Fated Meeting", "The Mist Seethes", "Visions of the Dreamer", "Reins of History", "Wings of My Own", "Judge Magister", "Imperator"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
