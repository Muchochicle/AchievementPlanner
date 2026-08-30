import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/conan-exiles.js";

test("the Conan Exiles guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "conan-exiles-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "conan-exiles");

});

test("the Conan Exiles guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Exiled Lands: Progression & Bosses",
            "Isle of Siptah",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Conan Exiles achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hither Came the Exile…", "…A Scavenger…", "…A Reaver…", "…A Slayer…", "…A Warrior…", "…A Champion…", "By this Axe I Rule!", "The Scarlet Citadel", "O Sleeper Awake", "The God in the Bowl", "What do I know of Cultured Ways?", "The Gilt, The Craft and the Lie", "The Hour of the Dragon", "It is the King, or his ghost!", "The Devil in Iron", "Gods of the North", "From What Hell Have You Crawled?", "The Snout in the Dark", "The Haunter of the Pits", "Wolves Beyond the Border", "Dying Embers", "The Cliffs Reel", "Iron Shadows in the Moon", "The Tower of the Elephant", "The Road of Kings", "In the Vault", "The Temple", "Beyond the Wall of Sleep", "The Haunter of the Dark", "Memory", "The Outsider", "The Gem in the Tower", "The Shadow Out of Time", "From Beyond", "The Silver Key", "The Other Gods"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
