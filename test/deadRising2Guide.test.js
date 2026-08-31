import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-rising-2.js";

test("the Dead Rising 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-rising-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-rising-2");

});

test("the Dead Rising 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Zombie & Psychopath Kills",
            "Combo Weapons, Levels & Clothing",
            "Story, Food & Co-op",
            "Spending, Terror Is Reality & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Dead Rising 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Zombie Slaughter", "Zombie Destruction", "Z-Genocider 2: Genocide Harder", "Zombie Genocide Master", "Vigilante Justice", "Judge, Jury and Executioner", "Zombie Fu", "Wrong Kind of \"Chopper\"", "He Hasn't Covered Wars...", "Head Trauma", "Death From Afar", "Explosive Temper", "Slaughter - S = Laughter!", "Come on! Follow Me!", "Saving the Day", "Hero of Fortune City", "Needs More Chainsaw", "Duct Tape FTW", "Apprentice Rising", "Professional Rising", "Fashion Aficionado", "Chuck Greene: Cross-Dresser?", "Clean Record", "Bartender", "Look at All That Juice!", "Finally Full", "Having a Gas", "Father of the Month", "Father of the Year", "Justice Served ", "Better With a Friend", "Don't You Die on Me!", "Big Spender", "Window Shopper", "Masquerade", "Improper Behavior", "TK's Favorite", "Rising Star", "Win Big!", "Custom Finish", "Curiously Inventive", "Life Saver", "Tough Guy", "Half Deck", "Full Deck", "Data Miner", "Smashy", "Stick 'em up", "The Skill to Survive", "Tape It or DIE!"];

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
