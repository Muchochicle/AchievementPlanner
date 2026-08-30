import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tropico-6.js";

test("the Tropico 6 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tropico-6-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tropico-6");

});

test("the Tropico 6 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Sandbox & Cross-Game Challenges",
            "Wonders & Political Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Tropico 6 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Beginning of a Servantship", "Shackadelic", "Of Seals And Men", "Number 18", "The Legend of Langostino",
        "The Dreamer of Dreams", "Go Sovereigns!", "Caribbean Comrade", "Firestarter", "For Science!",
        "Happy Ending?", "Apocalypso", "Computer Says \"No\"", "Beware The Betman", "Viva Tropico!",
        "Been there, Done That", "Terraformer", "Promising Endeavors", "My Ways", "Just One...More...Term...",
        "From Knight to Little Duck", "Teamplayer", "Make Tropico Great Again!", "Survivor", "Watch The World Burn",
        "Un-Lonely Island", "Don't Panic!", "One Does Not Simply Stage A Coup", "Double Trouble", "French Connection",
        "Curse of the Mummy", "Fairy Tale Come True", "Trade Is My Trait", "The Time For Wonders", "Narcissist",
        "The Governator", "Sublime Subliminal Supreme", "Chain Gang", "I Owe You Nothing", "We Don't Have Time For That",
    ];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
