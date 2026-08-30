import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/muck.js";

test("the Muck guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "muck-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "muck");

});

test("the Muck guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty, Speed & No-Damage Runs",
            "Kills & Collection Milestones",
            "Survival Feats & Deaths",
            "Rock-Only Runs & the Chief",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Muck achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Easy Peasy", "Learning the ropes", "Hardcore gamer", "A gamer move", "Speedrunner",
        "What the muck", "Set sail", "Untouchable", "Dream Team", "The bois",
        "Sweat and tears", "Muckinator", "Muckinator 2", "Muckinator 3", "Muckinator 4",
        "Underdog", "Bullseye", "That's not very milk of you, sir", "David vs Goliath", "Gronk",
        "Guardian", "Fearless", "Death Wish", "Goblin Slayer", "Big Mistake",
        "Pain and suffering", "This is fine", "Muck off", "Muck this game", "You're not a fish",
        "Treasure Hunter", "Architect", "Illegal work", "Go outside", "The Black Swordsman",
        "Milkman", "You're a fish", "Team player", "The red plumber man lied", "Salty",
        "Leg day", "I am Inevitable", "Phoon", "Oh you don't know what Karlson is?", "Caveman",
        "Muck", "Chief", "Irresistible", "Public Enemy",
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
