import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-escapists-2.js";

test("the The Escapists 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-escapists-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-escapists-2");

});

test("the The Escapists 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Stats & General Play",
            "Prison & Transport Escapes",
            "Antics & Multiplayer",
            "DLC Prisons & Quests",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official The Escapists 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ripped on the Inside", "Criminal Mastermind", "The Olympian", "Statistician", "Bad Intentions", "Bad Intentions Part 2", "Dr. Love", "Artful Dodger", "The Great Escape", "Artisan", "I've Got A Cunning Plan", "I'm The Daddy", "The Mobile Escapist", "Online Enforcer", "Drying Out", "Holiday Blues", "One Pixellated Step...", "Escaping Is My Forte", "A Camp Departure", "Chilled Out", "Music Maestro", "To Me, To You", "Tell Me What's Your Favour", "Good Intentions", "Riot Act", "Open Prison", "Crook Of All Trades", "Man's Worst Friend", "Man's Best Friend", "Are You Lonesome Tonight?", "The Cake Is A Lie?", "Pour Us A Brew Will Yer, Love?", "I Am Your Father...", "All Mod Cons", "Soap On A Rope", "Call Of Snooty", "Naked Lunch", "The Naked Chef", "Keep It Clean!", "I want to Believe", "Scared Stiff", "A Grave Affair", "Monster Mash ", "Coffin Dodger", "Almost Haunted", "I ain’t afraid of no Ghost ", "Are You Not Entertained?!", "It’s A Long Shot", "Wind Up Merchant", "Clowning Around", "It’s An Illusion, Not A Trick", "Stage Fright", "Oh What A Knight!", "‘Tis But A Scratch", "Siege The Day ", "Yo Dawg, I heard you like Exhibits", "To Antiquity And Beyond", "Royal Flush"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
