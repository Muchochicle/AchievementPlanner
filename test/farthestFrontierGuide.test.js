import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farthest-frontier.js";

test("the Farthest Frontier guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farthest-frontier-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farthest-frontier");

});

test("the Farthest Frontier guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Town Center, Shelters & Population",
            "Civic Buildings & Milestones",
            "Raiders, Scholars & Defense",
            "Relics & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Farthest Frontier achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Philosopher", "Barren Land", "Bearly Tried", "Black Death", "Academia", "Dig Greedily and Deeply", "Guild Dues", "Era of Civility", "Monumental Era of Civility", "Golden Age", "Monumental Golden Age", "Age of Heroes", "Monumental Age of Heroes", "Ward", "Neighborhood", "Locality", "Sheltering", "Extreme Living", "Renovation", "Moving Up", "Gentrification", "Generational Wealth", "Founding a Settlement", "Establishing a Foothold", "Heart of the Frontier", "Master of the Frontier", "Piety", "Curator of the Arts", "Market Forces", "Death Rites", "Mourn the Dead", "Honor the Dead", "Conscientious Diet", "Cry Wolf", "Beautification", "Elite Squad", "The First Winter", "The First Winter Vanquished", "Barely a Scratch", "Finish Them!", "Playing the Market", "Stocks Only Go Up", "My Happy Place", "Not on My Watch", "Raider Threat", "Raider Invasion", "Vanquished Raider Horde", "Raider Menace", "Vanquished Raider Menace", "Raider Incursion", "Vanquished Raider Scourge", "Intellectual Scholar", "Distinguished Scholar", "Scholar", "Most Dangerous Game", "Highlanders", "There can only be 500", "Town", "City", "Metropolis", "Jewel in the Desert", "Standing Army", "Militia", "Garrison", "The Collector", "True Devotion", "Faith through Sacrifice", "Faith through Conquest", "Faith through Harmony", "Forbidden Flesh", "Rainy Day Fund", "Legendary Hoard", "Vengeful Survivor", "Vengeful Vanquisher"];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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
