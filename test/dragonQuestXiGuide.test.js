import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragon-quest-xi.js";

test("the Dragon Quest XI S guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragon-quest-xi-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragon-quest-xi");

});

test("the Dragon Quest XI S guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Combat, Crafting & Character Mastery",
            "Casino, Quests & Postgame Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Dragon Quest XI S achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Living Legend", "Coming of Age", "Adventure Awaits!", "A Close Call", "The Power of the Luminary", "Terra Incognita", "Yggdrasil's Chosen", "Out-Stand-In", "New Horizons", "Undisputed Champion of Erdrea", "Wild Blue Yonder", "Dark Art", "Sea-Crossed Lovers", "Ice-Breaker", "The World Tree", "Light of Hope", "A Spark Still Shines", "Best of the Bastion", "A Disciple Worthy of the Name", "Soldier of Smile", "Bigger Fish to Fry", "Knight of the Living Dread", "Beating the House", "Sibling Revivalry", "The Loveliest Catch", "Hot Spring Hero", "Ready as We'll Ever Be", "Saviour of All Erdrea", "A Momentous Decision", "The Final Fight", "Master of the Skies", "Echoes of an Elusive Age", "Beast Blaster", "Mount Olympian", "Peppy-Go-Lucky", "Expert Itemologist", "Dedicated Follower of Fashion", "Chef de Classe de Médailles", "Forging Ahead", "If At First You Don't Succeed", "Big Hitter", "Swordsmith of Light", "Next-Level Luminary", "Master Thief", "Flawless Sorceress", "Virtuoso Healer", "Megastar", "Venerable Elder", "Undisputed Champion", "Knight Exemplar", "Casino Connoisseur", "Puff-Puff Buff", "Quest to Impress", "Ultimate Enlightenment", "Magic Moments", "Saviour of the Tockles' Scriptures", "Worrywart"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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
