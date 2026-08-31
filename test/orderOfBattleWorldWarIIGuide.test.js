import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/order-of-battle-world-war-ii.js";

test("the Order of Battle: World War II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "order-of-battle-world-war-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "order-of-battle-world-war-ii");

});

test("the Order of Battle: World War II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Battlefield Feats",
            "Kill Medals (Bronze/Silver/Gold)",
            "Elite Units & Miscellany",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Order of Battle: World War II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hero of the Rising Sun", "Pax Americana", "Graduated for War", "Summa Cum Laude", "Taken by Force", "Imperial Trinity", " Tank Specialist", "Semper Fi", "Hoarder", "Tank Buster Bronze", "Tank Buster Silver", "Tank Buster Gold", "Grim Reaper Bronze", "Grim Reaper Silver", "Grim Reaper Gold", "Air Ace Bronze", "Air Ace Silver", "Air Ace Gold", "Naval Legend Bronze", "Naval Legend Silver", "Naval Legend Gold", "Elite infantry", "Elite Recon", "Elite Tank", "Elite Anti-Tank", "Elite Artillery", "Elite Anti-Air", "Elite Fighter", "Elite Tactical Bomber", "Elite Strategic Bomber", "Elite Destroyer", "Elite Cruiser", "Elite Battleship", "Elite Submarine", "Ghost Ship", "Order of the Rising Sun", "Purple Heart", "Architect of War"];

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
