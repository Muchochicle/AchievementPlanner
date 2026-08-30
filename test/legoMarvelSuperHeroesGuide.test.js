import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lego-marvel-super-heroes.js";

test("the LEGO Marvel Super Heroes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lego-marvel-super-heroes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lego-marvel-super-heroes");

});

test("the LEGO Marvel Super Heroes guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Levels",
            "Character Collections & 100%",
            "Character-Specific Feats & Deep Cuts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official LEGO Marvel Super Heroes achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sand Central Station", "Times Square Off", "Exploratory Laboratory", "Rock up at the Lock up", "Rebooted, Resuited", "Red Head Detention", "Bifrosty Reception", "Juggernauts and Crosses", "Doctor in the House", "That Sinking Feeling", "Taking Liberties", "Rapturous Rise", "Magnetic Personality", "A Doom with a View", "The Good, the Bad and the Hungry", "Falling... with Style", "Don't I Know You?", "Stan-tastic", "Road Rage", "It's Clobberin' Time!", "I'm Always Angry!", "Billionaire Philanthropist", "This Is fantastic!", "You Win a No-Prize!", "Avengers Assembled", "Sinister Six", "To Me, My X-Men", "Brotherhood", "I Am Iron Man", "Stan's Soapbox", "Post-Credit Party", "The Toast of Croydon", "Puny God", "Welcome to Level 7", "It's Me Time!", "Bad Luck?", "Zoo Believer", "Guardians of the Galaxy", "Fastball Special", "Menace of Magneto", "Alter Ego", "Can't Hurt Me Bub", "Cosplay", "Ultimate True Believer", "Really?"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
