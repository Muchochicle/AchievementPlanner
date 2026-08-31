import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/code-vein.js";

test("the CODE VEIN guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "code-vein-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "code-vein");

});

test("the CODE VEIN guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progress, Collection & Combat",
            "Boss Battles",
            "Companion Memories & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official CODE VEIN achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Revenant Preeminent", "Gift Gatherer", "Determiner of Fate", "Mender of Minds", "Deep Trailblazer", "Miasma Manager", "Together Until Oblivion", "Proven Devotion", "Exalted Reputation", "Burning Spirit", "A Weapon for Every Season", "Revenant Requisites", "Weaver of Wills", "Gifted", "Ultimate Armament", "Unbreakable Veil", "Io's Memories", "Building Trust", "Queen's Knight", "Queen's Knight Reborn", "Oliver Collins", "Insatiable Despot", "Butterfly of Delirium", "Invading Executioner", "Successor of the Ribcage", "Successor of the Breath", "Gilded Hunter", "Successor of the Claw", "Successor of the Throat", "Blade Bearer and Cannoneer", "Juzo Mido", "Skull King", "Louis's Memories", "Yakumo's Memories", "Murasame's Memories", "Coco's Memories", "Davis's Memories", "Mia's Memories", "Drink Deep", "Heirs", "To Eternity", "Dweller in the Dark", "Resonant Power"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
