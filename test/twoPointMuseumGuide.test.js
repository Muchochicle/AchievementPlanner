import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/two-point-museum.js";

test("the Two Point Museum guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "two-point-museum-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "two-point-museum");

});

test("the Two Point Museum guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Museums & Expeditions",
            "Staff, Exhibits & Curator Progress",
            "Secrets & DLC Content",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Two Point Museum achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rising Star", "Two Point Museum", "Marine Life Museum", "Supernatural Museum", "Space Museum", "Science Museum", "Mint Condition", "Map Reader", "Nomenclature", "Built on Sand(box)", "Exhibition Expert", "Comprehensive Curator", "Qualified Opinion", "Made Them Yourself", "Uncommon Knowledge", "Perked Up", "Mega Museum", "High-Class Curator", "Skill & Bones", "Plant Food", "Fully Customised Contraption", "Directly to Jail", "Tour de Force", "Silverbottom Reunion", "Fancily Dressed Five", "Healing Holiday", "Product Placement", "Fishes (Plural)", "The Anomalonians", "Ex-plorer", "Absolutely Buzzing", "Prehistory Mystery", "Thaw & Order", "Byte at the Museum", "Everything for Everyone", "Raining Dragons", "The Natural", "Scorched Earth", "Secret Museum", "Wildlife Museum", "Monster Menagerie", "Fauna's Favourite", "Sorry for the litter…", "Farflung Fixer", "Art Museum", "Please Don’t Touch!", "Frame It 'Til You Make It", "Glass Case of Emotion", "Model Employee"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
