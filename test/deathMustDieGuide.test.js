import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/death-must-die.js";

test("the Death Must Die guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "death-must-die-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "death-must-die");

});

test("the Death Must Die guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Class Unlocks: Avoron, Merris, Nixi, Kront & Skadi",
            "General Trophies & More Class Unlocks",
            "Leaf the Druid",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Death Must Die achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Sign of The Hero", "What Have You Done To My Pets?", "The Hourglass of Time", "Vampire Slayer", "Bastion of Knowledge", "The Sign of Fire", "No Backtalk", "Training a Dragon", "What Sorcery is This?", "Start a Party!", "The Sign of The Assassin", "Deadly Precision", "Grasshopper", "Pocket Change", "Blessed By Fate", "The Sign of The Tornado", "Shieldbreaker", "Arms Still Strong", "Scrap Metal", "Rocks to the Face", "The Sign of The Quest", "The Apprentice", "Jack of All Trades", "Pest Control", "Nothing But A Scratch!", "A Thousand Bones", "Jelly", "Ghost Matter", "The Summoner", "Obsidian", "A Black Heart", "A Stake For A Vampire", "By the Holy Light!", "Pilgrim", "There Is No Fork", "Electrifying Presence", "Nocturnal", "Toxic!", "I Warned You!", "Legend vs Legend", "Good Boys", "I Can Do This!", "The Sign Of Excellence", "Saving The Day", "Bruised Ego", "Killer Queen", "Well Travelled", "Showoff", "I Just Need One Arrow", "Enter The Darkmoor", "Out Of Wishes", "The Lady Bows Her Head", "Bearly a Scratch", "Catnip", "Satiated", "Cut The Traitors", "No Handouts", "Face Yourself", "Breaking The Rules "];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
