import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/from-the-depths.js";

test("the From the Depths guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "from-the-depths-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "from-the-depths");

});

test("the From the Depths guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Quest for Neter: Faction Strongholds",
            "Combat, Design & Campaign Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official From the Depths achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fast Learner!", "DWG Easy", "DWG Medium", "DWG Hard", "DWG Godly", "OW Easy", "OW Medium", "OW Hard", "OW Godly", "WF Easy", "WF Medium", "WF Hard", "WF Godly", "TG Easy", "TG Medium", "TG Hard", "TG Godly", "LH Easy", "LH Medium", "LH Hard", "LH Godly", "SS Easy", "SS Medium", "SS Hard", "SS Godly", "GT Easy", "GT Medium", "GT Hard", "GT Godly", "SD Easy", "SD Medium", "SD Hard", "SD Godly", "Speed demon", "Wing clipper", "An explosive combination", "Peak performance", "What missiles?", "Espionage", "Battle master", "The bigger they are...", "... the harder they fall", "Worm hole addict", "The assassin", "Eyrie survivors' club", "The lord taketh...", "...and the lord gifteth away", "Heavy weapons", "Alpha strike", "Hey, I glow in the dark", "Petty squabbles", "Et tu, Brute?", "Planetary defence force"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
