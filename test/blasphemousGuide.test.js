import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/blasphemous.js";

test("the Blasphemous guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "blasphemous-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "blasphemous");

});

test("the Blasphemous guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Bosses",
            "Collectibles & Character Growth",
            "Secret Bosses, Quests & Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Blasphemous achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Long Path Ahead", "No Mercy", "Look Her In The Eye", "Danse Macabre", "The Brother", "The Bejeweled Saint", "Blind Innocence", "Ashes to Ashes", "Duel of Faith", "Summa Blasphemia", "The Path of the Believer", "The Path of the Unworthy", "The Bull and the Moon", "Last Words", "Detestatio Sacrorum", "Unwavering Devotion", "Skin and Bones", "Mysteria Lucis", "Warden of the Ossuary", "Heartbreaker", "Cvstodia's Pilgrim", "Six Stinging Pains", "Baptism of Faith", "Mea Culpa", "The Fountain of Life", "Engracia", "Inquisition", "Power Unleashed", "The Desire of the Corrupted", "True Shrine", "Dying Breath", "Rebirth", "Ultreia Et Suseia", "In the name of the High Wills", "Mediterranean Diet", "Flea Market", "Warm and Soft", "The Sister", "Bestiary", "Blood and Tears", "The Number of the Beasts", "Crossing Souls", "Requiem Aeternam", "Bronze Medal", "Witness of The Miracle"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
