import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fallout-shelter.js";

test("the Fallout Shelter guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fallout-shelter-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fallout-shelter");

});

test("the Fallout Shelter guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Building & Economy",
            "Legendary Collection & Vault Life",
            "Quests & Crafting",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Fallout Shelter achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hard Work is Happy Work", "Vault-Tec Architect", "Vault-Tec Engineer", "Mattress Stuffer", "A Vault For My Vault", "Better Settler", "Higher and Higher", "Overseer", "Home Sweet Home", "Armed and Dangerous", "Fashion Statement", "Blast From The Past", "Get Off My Lawn", "Overachieve Much?", "Atom Splitter", "Dine and Dash", "Project Purity", "Prepared For The Future", "A Better Future, Underground", "Smooth Talker", "You're Fired!", "Wasteland Wanderer", "Urban Ranger", "Survivalist", "Legend of the Wastes", "Paint ‘n Elbow Grease", "Decorator", "Interior Designer", "Enemy of the Wastes", "Big Pharma", "Scraptastic", "Weaponsmith", "Fashionista", "More than Handy", "A Little off the Top"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
