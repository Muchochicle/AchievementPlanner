import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-unity.js";

test("the Assassin's Creed Unity guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-unity-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-unity");

});

test("the Assassin's Creed Unity guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Memory Sequences",
            "Paris: Collectibles, Progression & Co-op",
            "Combat, Parkour & Café Théâtre Feats",
            "Dead Kings DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Assassin's Creed Unity achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Long Time Ago", "Youth In Versailles", "Rebirth", "First Blood", "La Cour des Miracles", "The Root Of Evil", "Secret Meeting", "Mystery Solved", "Bloody Trail", "Road To Starvation", "Love And Duty", "Down But Not Out", "Curtain Call", "No Man's Land", "Needs More Data", "Thawed", "Blade In The Crowd", "I Want It All", "Networking", "An Old Internet Meme", "Falling From The Sky", "From the Past", "The Baguette Boyband", "Know-It-All", "Gentleman Cambrioleur", "Curiosity", "Visited Once", "Business and Pleasure", "And Stay Down!", "Panoramic View", "Help Me!", "Hand of Justice", "Ransacking Versailles", "Accurate Prediction", "Tricolore", "Don't Need It", "Patron of the Arts", "Share the Wealth", "Safe and Secure", "Room With A View", "Poked!", "Chopped!", "Master Architect", "Guillotined", "Never Say Die", "Merciful Killer", "Choreography", "The Bells! The Bells!", "Must've Left it Open", "I Got Skills", "Hydrogen Bonded", "Piece of Eden", "Defender of Franciade", "Liberator", "Fraternité!", "Reign of Terror", "Freedom Fighter"];

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
