import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-rising.js";

test("the Dead Rising guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-rising-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-rising");

});

test("the Dead Rising guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Zombies, Psychopaths & Survivors",
            "Weapons, Food & Photography",
            "Time, Stunts & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Dead Rising achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Zombie Hunter", "Zombie Killer", "Zombie Genocider", "Self Defense", "Peace Keeper", "Punisher", "Legendary Soldier", "Hella Copter", "Tour Guide", "Frank the Pimp", "Full Set", "Humanist", "Life Saver", "Saint", "Strike!", "Costume Party", "Raining Zombies", "Gourmet", "Item Smasher", "Bullet Point", "Perfect Gunner", "Photojournalist", "The Artiste", "Group Photo", "Portraiture", "Census Taker", "Psycho Photo", "Psycho Collector", "PP Collector", "Snuff Shot B", "Snuff Shot J", "Transmissionary", "Indoorsman", "Outdoorsman", "Freefall", "Marathon Runner", "Carjacker", "Stunt Driver", "Stunt Rider", "Zombie Road", "Karate Champ", "Sharp Dresser", "Clothes Horse", "Level Max", "Unbreakable", "Overtime Mode", "∞ Mode", "3 Day Survivor", "5 Day Survivor", "7 Day Survivor"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
