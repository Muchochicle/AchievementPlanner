import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battleborn.js";

test("the Battleborn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battleborn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battleborn");

});

test("the Battleborn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Difficulty",
            "Gear, Matchmaking & Lore Challenges",
            "Story Ops & More Lore Challenges",
            "DLC Lore & Story Operations",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Battleborn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Battleborn", "No Rest for the Wicked", "Solus War Hardcore Hero", "Solus War Hero Advanced", "Tour of Duty", "Commander and Collector", "First Among Heroes", "A Tyrant Undone", "Perfectionist", "The Ol' One-Two", "Behold My Death Lasers and Despair", "Solus Sentinel", "Gotta Punch 'em All", "Decked Out", "Grow Forth and Conquer", "Dressed for Success", "When You Roll Up With the Squad Like", "The Blossom's Fury", "Brotherhood of the Mikes", "Keeper of the Blades", "Acres and Eras", "It's My Only Name, Chief", "Rise of the Valkyrie", "Champion of the Pits", "Love and Fire, Death and Kisses", "Elegance in Engineering", "Flyboy", "The Bears and the Beers", "Priestess of the Sustaining Mother", "Hate Furnace at Maximum! :) ", "Me 'n' My Monster", "The Wraith of Bliss", "Civil Ice", "Anarchy Rules", "The Once and Future Champ", "Anxious, Angry, and Adorable", "The Captain", "Lost Little Eldrid", "The Spymistress", "The Curmudgeon", "The Mike Who Lived", "Shock the Trooper", "Mister Wolf's Wild Ride", "Desperate Measurements", "Remnants of Codex", "Traps and Treasure", "A Booming Business", "Divide by Zero Hour", "Sir Hon. Lord Baron Oscar Mike Jr IV, Esq.", "Titanium Dandy", "The Bluemother Smiles", "Twice-Made Sneaker", "Sergeant Demobird", "It Was A Dark And Stormy Night", "Berg Rush", "Collect All 5!", "Magnum Gun Loud", "Tooth, Nail, and Minigun", "Mountains of Madness", "Duty is Only Skin Deep"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
