import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/get-in-the-car-loser.js";

test("the Get In The Car, Loser! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "get-in-the-car-loser-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "get-in-the-car-loser");

});

test("the Get In The Car, Loser! guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Apps & Completion",
            "Combat Grinds & Devil Clock",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Get In The Car, Loser! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["On The Road", "Worthy Of Her Grace", "Done With That Guy", "What Never Was", "MACHINE DEVIL RETIRE B****", "Extra Arms", "Sideloading Super User", "Lore Fiend", "Multiversal Librarian", "Local Hero", "Devil Clock Accelerationist", "The Unfairest Of Them All", "Thousand Year Cycle", "Champion Of Bad Civilization", "3 2 1 Let's Jam!", "Fate (8HR EXTENDED)", "Exploit Damage Princess", "Exploit Damage Queen", "She's A 10", "Pearly Revolving Door", "AH AH AH! DROPPED THAT S***!", "Cast In The Name Of God", "Borrow Checking Compiler", "From Downtown", "Keep Honking -- I'm Building Meter", "Emily + Jo Forever", "Elegy for an Edgelord", "Thus Always To Gatekeepers"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
