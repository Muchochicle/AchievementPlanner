import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/haiku-the-robot.js";

test("the Haiku, the Robot guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "haiku-the-robot-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "haiku-the-robot");

});

test("the Haiku, the Robot guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Upgrades & Shops",
            "World & NPCs",
            "Bosses, Secrets & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Haiku, the Robot achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Quatern's Project Initiated", "Quatern's Project In Progress", "Quatern's Project Complete", "Capsule Fragments", "Well-Oiled Machine", "Computer Chip", "Enhanced System", "Upgrades, People - Upgrades", "No More Mischief", "Sold out!", "Bomb-tastic!", "Scavenger!", "For Safekeeping", "Two Minutes To Midnight", "Trainspotter", "Mundooooo", "The Last Of Humankind", "In Too Deep", "Balancing Act", "Brave Little Toaster", "Family", "Literate", "Poetic Justice", "The Graveyard Shift", "Finely Tuned", "Save The Children", "That Wasn't Nice", "Trepid Explorer", "Beep - Bop", "Two Points!", "Evolution", "Another Adventure", "Electron", "Proton", "Neutron", "Symptom", "Balanced", "Origins", "No Manual Repairs", "Completionist"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
