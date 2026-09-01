import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/blasphemous-2.js";

test("the Blasphemous 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "blasphemous-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "blasphemous-2");

});

test("the Blasphemous 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Bosses & Endings",
            "Weapons, Collectibles & Growth",
            "Free DLC Updates",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Blasphemous 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Penitent Two", "A Thousand Years Later", "Blood and Dust", "Blood and Gold", "Blood and Iron", "The Sharpest Tool in the Shed", "The Last Ascension", "The Sea dies on the Shore", "Forged in Fire", "Fermosa Fembra", "The Wait is Over", "A Heart of Gold", "Canvas of Light and Time", "Second Psalm", "Acta, Non Verba", "Full Devotion", "Weight of Penance", "Second Pilgrimage", "Acquired Taste", "Soledad", "Still Among Us", "No Cherub Left Behind", "Empty Handed", "Hide and Seek", "The Work of a Master", "House of Grief and Hatred", "A Leap of Faith", "Twisted is the Path of the Miracle", "The Punished One", "The Veteran One", "The Anointed One", "The Merciless One", "Nobody Expects the Spanish Inquisition!", "Ultima Ratio", "A Sharp Rendezvous", "Flawless Penance", "Blessed Incense", "Storm of Death", "Edge of Orison", "Warrior of the Silent Sorrow", "Welcome Back!", "Happy New Year!", "Two Old Ones Eating Soup", "The Finest Craftmanship", "This is Blasphemy", "Martyrdom", "In Repose", "Prisoner of the Holy Return", "At the Mercy of the Grievous Miracle", "Post-Mortem", "Dedicated Explorer", "Consummate Collector", "Mind Your Head", "Cruel Compassion", "Legacy of the Twisted One", "Atonement of Sins", "Embrujo of the Flames", "Chorus of the Servants", "Omnis Facies Poenitentiae", "Unbreakable Bond"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
