import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ratchet-and-clank-rift-apart.js";

test("the Ratchet & Clank: Rift Apart guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ratchet-and-clank-rift-apart-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ratchet-and-clank-rift-apart");

});

test("the Ratchet & Clank: Rift Apart guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Across the Dimensions",
            "Arsenal, Armour & Collectibles",
            "Combat Techniques & Curios",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Ratchet & Clank: Rift Apart achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Masters of the Multiverse", "Rift Apart", "Hide 'N Seekerpede", "Victory!", "Can't Stop Me", "Hey Lombax DJ", "This Crystal Is My Things", "Don't You Walk Away From Me", "It's Loose!", "Emotional Support Robot", "Rated Aaarrr!", "Return to Sender", "No Bones About It", "I'm the Warden Now", "2 Fuzz 2 Nefarious", "More Than Lint", "Sartorial Steel", "Does This Make My Tail Look Big?", "Shiny!", "Nooks and Crannies", "Quantum Mechanic", "They Blow Up So Fast", "There's Even a Cupholder", "Full Rack", "Fully Stacked", "Glitch, Uh, Finds a Way", "Shifty Character", "BOING!", "Max Relax", "Lombax and Chill", "Alert the Sponsors", "Icebreaker", "No Need for Multiball", "Return Policy", "Hole Puncher", "Life of the Party", "Extreme Gardening", "It's So Fluffy!", "UnBEARably Awesome", "Extinction Event", "Just Stay Down", "Must Go Faster", "Planning Some Destruction", "Aim to Misbehave", "Feeding Friendsy", "Sweet, Sweet Victory", "Might've Broken Something"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
