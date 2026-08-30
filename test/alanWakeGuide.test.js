import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/alan-wake.js";

test("the Alan Wake guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "alan-wake-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "alan-wake");

});

test("the Alan Wake guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress & Difficulty",
            "Combat & Encounter Feats",
            "Collectibles, The Signal & The Writer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Alan Wake achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Follow the Light", "Nordic Walking", "Bright Falls' Finest", "Boob Tube", "Under a Thin Layer of Skin", "Park Ranger", "Heavy Metal", "Iron Horse", "Wheels Within Wheels", "Medical Opinions", "Child of the Elder God", "Perchance to Dream", "Drink 'Em Both Up", "Gatekeeper", "The Lady of the Light", "Tornado Wrangler", "Departure", "Hardboiled Writer", "Alan, Wake Up", "If It Flies, It Burns", "They're Heeeeeere!", "The Six-Gun Scribe", "Taken Season", "It's Not Just a Typewriter Brand", "What Light Through Yonder Window", "Thunder and Lightning", "Collateral Carnage", "Come One, Come All", "Sound and Fury", "Two For the Price of One", "Back! Back, I Say!", "Float Like a Butterfly", "Missed by a Mile", "Energized!", "Let There Be Light", "Carny", "Meet the Deadline", "An Idyllic Small Town", "Gunless Wonder", "Right of Way", "Finders Keepers", "Every Nook and Cranny", "Paging Mr. Wake", "Picking Up After Yourself", "Collector's Edition", "Damn Good Cup of Coffee", "Hypercaffeinated", "KBF-FM", "Couch Potato", "Bright Falls Aficionado", "A Friend in Need", "A Friend Indeed", "Fast and Furious", "Words Will Never Harm You", "Run-On Sentence", "License Revoked", "Tick Tock", "Cardboard Companions", "Ding!", "Kill Your Darlings", "Go Gentle Into That Good Light", "No Punctuation", "Iron Will", "Whirlwind", "Licensed Properties", "Creative Space", "Heartbreaker"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
