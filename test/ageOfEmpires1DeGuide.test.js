import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-empires-1-de.js";

test("the Age of Empires: Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-empires-1-de-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-empires-1-de");

});

test("the Age of Empires: Definitive Edition guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Completions",
            "Build & Train Feats",
            "Combat & Conversion",
            "Resources, Tech & Victory Conditions",
            "Challenge Wins",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Age of Empires: Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Roma Victrix", "Veni, Vidi, Vici", "Imperial Peace", "The Elephant In The Rome", "Punic Attack",
        "Hittite Baby One More Time", "Pharaoh", "Smoking Ziggurats", "Epic", "Big In Japan",
        "Homes?", "Towers of Babel", "Rise And Wall", "Not that I'm keeping count…", "Hun, is that you?",
        "Heracles", "Artemis", "Parthian Shot", "21st Century", "Axe To Grind",
        "Cute Cats", "The Choson Ones", "Dancing Chariots", "Minoan Compies", "Scytheseeing",
        "Syntagma", "Wololo", "Eye of Horus", "Losing Your Religion", "Atlas",
        "Feet on the ground", "Eye in the sky", "Assassin", "Perseus", "Coinage",
        "Quarry", "WoodStock", "Pepperoni Pizza", "Marvelous", "Archimedes",
        "Pegasus", "State Of The Artifact", "Ruin Them All", "Res Publica"
    ];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
