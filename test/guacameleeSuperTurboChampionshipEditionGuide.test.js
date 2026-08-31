import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/guacamelee-super-turbo-championship-edition.js";

test("the Guacamelee! Super Turbo Championship Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "guacamelee-super-turbo-championship-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "guacamelee-super-turbo-championship-edition");

});

test("the Guacamelee! Super Turbo Championship Edition guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Combat, Completion & Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Guacamelee! Super Turbo Championship Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Viva La Resurrección", "That's one big Gato Frito", "X'tabay-Bye", "Snuffed Out", "Licking his Wounds", "Power Within", "I swat you", "Flawless", "Nooks and Crannies", "Combo Nerd", "Pollo Power", "Last Straw", "\"Next-gen!!\"", "Do or Do Not", "No Encore!", "Cock of the Walk", "Main Event", "That was INTENSE", "Lore Master", "I Have The Power", "Got to catch them all", "Poncho'd Out", "Heavyweight", "The Never Ending Combo", "That was Hard Mode?", "Who put these here???", "El Savior", "World Champion", "The Devil wears Revenge!", "Boom-Shack-Calaca"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
