import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/returnal.js";

test("the Returnal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "returnal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "returnal");

});

test("the Returnal guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Biomes, Bosses & the Three Acts",
            "Collectibles, Upgrades & Houses",
            "Ascension: Tower of Sisyphus & the Hospital",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Returnal achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Atropian Survival", "Past the Ruins", "Ascending the Mountain", "Through the Forgotten City", "Echoes of the Past", "Frozen in Time", "Submerged in Memories", "A Shadow in the Fog", "Ascension", "Trial by Judgement", "Silence the Song", "Inner Darkness", "Failed Escape", "Last Drive", "White Shadow", "Second Chance", "Cryptic Messages", "Cryptic Translations", "Surgical Precision", "Adapting to Circumstance", "In-Field Training", "Hardened Shell", "Risk Assessment", "Adrenaline Spike", "Irreversibly Contaminated", "Eternal Return", "Alternate Fates", "Welcome Home", "Sins of the Mother", "Visions of the Past", "Helios", "Eternal Ascent", "The Watcher", "Eyes Closed", "Destroyer", "Broken, Restored, Empty", "Empty Embrace", "Find Release"];

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
