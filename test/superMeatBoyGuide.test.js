import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/super-meat-boy.js";

test("the Super Meat Boy guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "super-meat-boy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "super-meat-boy");

});

test("the Super Meat Boy guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Worlds, Iron Man Runs & Warps",
            "Cotton Alley, Characters & Glitch Levels",
            "Dark World Iron Man, Par Times & Super Meat World",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Super Meat Boy achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Wood Boy ", "Needle Boy ", "Salt Boy ", "Brimstone Boy ", "Maggot Boy ", "Dead Boy ", "Girl Boy ", "Nostalgia ", "Living In the Past ", "Old School ", "Retro Rampage ", "The End ", "The Real End ", "Golden God ", "Suffragette ", "Seneca Falls ", "I Have Crabs! ", "Metal Head ", "I Smell something Fishy... ", "Accidental Arsonist  ", "MS PAINT RULZ! ", "Vx6 ", "The Commander ", "The Bootlicker ", "The Jump man ", "The Fly guy ", "The Kid ", "N#7*<1!23 ", "&*>?1$ ", "(=+66&1$ ", "^**5%_=+12 ", "*|-0&&", "N&8^2^%$1`` ", "Well look at you!", "Squirrel Boy", "Blood Clot Boy", "Missile Boy", "Demon Boy", "Zombie Boy", "Dr.Fetus Boy", "Impossible Boy", "Medium Well", "Rare", "Medium", "Well Done", "Medium Rare", "The Kids Xmas!", "The Golden Gift!"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
