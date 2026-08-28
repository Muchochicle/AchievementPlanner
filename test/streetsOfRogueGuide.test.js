import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/streets-of-rogue.js";

test("the Streets of Rogue guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "streets-of-rogue-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "streets-of-rogue");

});

test("the Streets of Rogue guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Districts & Story Progress",
            "Unlockable Playable Characters",
            "Big Quests & Special Encounters",
            "Chaos & Creative Kills",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Streets of Rogue achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/streets-of-rogue.json). Streets of Rogue
    // has no Steam-hidden achievements at all.
    const officialAchievementNames = [
        "Adapting to City Life", "Savior of the Slums", "Industrial Idol", "Industrial", "Didn't Skip the Tutorial",
        "Gangster (Blahd)", "Comedian", "Investment Banker", "Shopkeeper", "Assassin",
        "Jock", "Bartender", "Cop", "Gorilla", "Scientist",
        "Shapeshifter", "Vampire", "Werewolf", "Wrestler", "Park President",
        "Park", "Cannibal", "Slavemaster", "Zombie", "Downtown Diva",
        "Downtown", "Uptown", "Uptown Upper-Cruster", "You Rule", "Legal Takeover",
        "Hostile Takeover", "Peaceful Takeover", "The Bad Ending", "Quest Conqueror", "Firefighter",
        "Terminator", "True Believer", "Fast Food", "Creature Feature", "Flat Earther",
        "Creative Genius", "Fountain of Life", "Potent Mix", "Slaver Enslaver", "The Best Around",
        "Massacrist", "Safe Travels", "Ironic Killer", "Murderous Mixologist", "Shocker",
        "Mobster", "Robot"
    ];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
