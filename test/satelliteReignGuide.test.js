import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/satellite-reign.js";

test("the Satellite Reign guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "satellite-reign-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "satellite-reign");

});

test("the Satellite Reign guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Stealth Feats",
            "Progression & Bosses",
            "ATM Syphons & Data Terminals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Satellite Reign achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Blood", "Fish in a Barrel", "No Big Brother: Tutorial", "No Big Brother: Downtown", "No Big Brother: Industrial", "No Big Brother: Grid", "No Big Brother: CBD", "No Big Brother: Dracogenics", "Science, bitch!", "No More Lives", "Infinite Lives", "5 Stealth Kills in a row", "10 Stealth Kills in a row", "15 Stealth Kills in a row", "Industrial Pacifist", "Downtown Pacifist", "CBD Pacifist", "Grid Pacifist", "Dracogenics Pacifist", "100 Kills By Hijacked", "Cold War", "Holy War", "10 Kills One Explosion", "Invisible Death", "I know Kung Fu", "Fire the CEO", "Enter The Grid", "Enter the Industrial area", "Enter Dracogenics", "Enter the CBD", "Master of Coin", "Easy Money: Downtown", "Easy Money: Grid", "Easy Money: Industrial", "Easy Money: CBD", "Key Logger", "Script Kiddie: Downtown", "Script Kiddie: Grid", "Script Kiddie: Industrial", "Script Kiddie: CBD"];

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
