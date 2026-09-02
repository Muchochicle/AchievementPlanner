import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/atom-rpg-trudograd.js";

test("the ATOM RPG Trudograd guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "atom-rpg-trudograd-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "atom-rpg-trudograd");

});

test("the ATOM RPG Trudograd guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Arrival & Story","Choices & Feats","Suggested Order"]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official ATOM RPG Trudograd achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fresh Prince of Trudograd","An Old Friend","Mysterious Knife","Atomic Soda","Power of Simplicity","Baby Eater","Goose Sacrifice","Holy Mountain","Human Antidote","Viva La Revolution","Freelance Police","Lot 49","Memoirs of a Nibbler","KGB Bunker","Shadow over Trudograd","Death of the Author","Sick Freak","Escalation of Conflict","Sixth Sense","Second Thought","Terrorist","Walking Fortress","Fight Club","Incompetence","Rising Star","Albino Bloodsucker","Bronzovka","Admiral","Goodbye ATOM","Household","Commando","The Great and Powerful"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
