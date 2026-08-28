import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tomb-raider-2013.js";

test("the Tomb Raider (2013) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tomb-raider-2013-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tomb-raider-2013");

});

test("the Tomb Raider (2013) guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Collectibles",
            "Progression & Upgrades",
            "Combat Feats",
            "Tombs, Challenges & Completion",
            "Hidden Achievements",
            "Multiplayer",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Tomb Raider (2013) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Bookworm ", "Historian ", "Relic Hunter ", "Archaeologist ", "Looking for Trouble ",
        "Bag Full O' Cache ", "No Stone Left Unturned ", "Scrounger ", "Picky ", "Clever Girl ",
        "Lethal ", "Now We're Getting Serious ", "The Professional ", "Big Game Hunter ", "Tastes Like Chicken! ",
        "Feather Duster ", "Sharp Shooter ", "Predator ", "Equalizer ", "Widowmaker ",
        "Gunslinger ", "Epic Fumble ", "Get Over Here! ", "Opportunist ", "Down and Dirty ",
        "Deadeye ", "Former Adventurer ", "One Smart Cookie ", "Intellectually Superior ", "Unfinished Business ",
        "Inconceivable! ", "A Survivor Is Born ", "Boom Goes the Dynamite ", "Crab Cakes ", "Chatterbox ",
        "Adventurer ", "Artilleryman ", "Down Boy! ", "Entrapment ", "Escapist ",
        "Good Samaritan ", "I'm all that! ", "Sole Survivor ", "Lights Out ", "Master Blaster ",
        "Monkey Around ", "Narcissistic ", "On My Way Up ", "Shopaholic ", "True Commitment "
    ];

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
