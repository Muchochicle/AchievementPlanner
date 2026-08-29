import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/peglin.js";

test("the Peglin guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "peglin-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "peglin");

});

test("the Peglin guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses & Combat Feats",
            "Cruciball, Relics & Boss Challenges",
            "Advanced Boss Feats & Secrets",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Peglin achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Holey Moley", "End Of The Slime", "All In All", "Siege No More", "First Come, First Served",
        "Sticks And Stones", "I Said Punny, Not Puny", "Don't Make Us Say It", "Math Is My Passion", "Spring Cleaning",
        "Walking On Pegshells", "It Was Not Your Time", "Red Slime Green Slime", "Wood you kindly?", "Won't Get Ruined Again",
        "Sapper Sweeper", "The Treasurer Doesn't Measure Up", "Poison IV", "Ballwark in a China Shop", "Slime After Slime",
        "Some Assembly Required", "Critical Thinking", "A Full Sweep", "Where's my membership card?!", "Multiballer",
        "Cruciball Courier", "Cruciball Captain", "Cruciball Commander", "New Leshy on Life", "In a Prickle",
        "Eggstravaganza", "Masterpieces In Pieces", "Cruciball Conqueror", "Enthralled", "You did it?",
        "Fragile Delivery", "At the End of the Rainbow", "All for One", "One for All", "Scholorb",
        "Is this a card game?", "Heartburn", "Art Connoisseur", "Not a Dull Wall at All", "Surprised the Ruins",
        "Minion to Winion", "Master Burglar", "From Whence You Came", "Taste the Painbow", "All Eye On You",
        "Phase Breaker", "Egg On Your Face",
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
