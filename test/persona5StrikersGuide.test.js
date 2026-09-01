import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/persona-5-strikers.js";

test("the Persona 5 Strikers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "persona-5-strikers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "persona-5-strikers");

});

test("the Persona 5 Strikers guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Road Trip: Jails & Story",
            "Combat, Bonds & Master Arts",
            "Requests, Cooking & Activities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Persona 5 Strikers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["True Phantom Thief", "Cage of Lust Closed", "Cage of Vanity Conquered", "Cage of Gluttony Torched", "Cage of Desolation Condemned", "Cage of Wrath Collapsed", "Cage of Arrogance Cracked", "Humanity's Companion", "Walk Your Own Path", "Back in Business", "Farewell to the Past", "A Newfound Heart", "It's Showtime!", "Seeker of Power", "Unshakeable Teamwork", "Know Your Enemy", "Phantom Striker", "All That Glitters", "Death Defied", "Mask Connoisseur", "Best Friend", "Eternal Bonds", "Eye for Talent", "Knife in the Dark", "Best of the Best", "What are Friends For?", "Who Dares Wins", "The Most Daring of All", "Ultimate Trump Card", "Jolly Roger", "Gentleman Thief", "Flame Dancer", "Peerless Blade", "Fist of Justice", "Sophisticated Lady", "Technological Marvel", "Repentant Fang", "Master Thieves", "A Helping Hand", "Those Who Heed the Call", "Item Sweeper", "Short Order Cook", "Master Chef", "Impulse Buyer", "A Little Memento", "Treasure Hunter", "No Looking Back"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
