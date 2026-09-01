import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/god-of-war-ragnarok.js";

test("the God of War Ragnarök guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "god-of-war-ragnarok-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "god-of-war-ragnarok");

});

test("the God of War Ragnarök guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Bosses & Collections",
            "Favors & Post-Game",
            "Odin, the Kings & Valhalla DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official God of War Ragnarök achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Bear and the Wolf", "The Florist", "The Librarian", "The Curator", "How it Started", "Spit Shine", "Spartan Ways", "Full Belly", "Knock off the Rust", "A Grizzly Encounter", "Blood Debt", "Backyard Brawl", "Root of the Problem", "The Cauldron", "Off the Leash", "Comeuppance", "Better Together", "Phalanx", "Collector", "Dragon Slayer", "How it's Going", "Funeral for a Friend", "Rebel Leader", "New Friends", "Full Gufa", "Making Amends", "It Was a Good Day", "Invasive Species ", "Besties", "Rightful Place", "Pure of Hart", "Trials by Fire", "Ready for Commitment", "Ragnarök", "Grave Mistake", "The True Queen", "God of Hope", "Invitation Accepted", "Dark Odyssey", "Blood, Sweat, and Týr", "Scry Me a River", "Wayfarer", "No Kratos, No Scry", "Fight at the Forum", "Easy Come, Easy Go", "Understood the Assignment", "Style Points", "You Again?"];

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
