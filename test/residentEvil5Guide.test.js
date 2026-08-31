import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-5.js";

test("the Resident Evil 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-5");

});

test("the Resident Evil 5 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Chapters & Difficulty Clears",
            "Collectibles & Completion",
            "Co-op & Combat Feats",
            "The Mercenaries & Versus",
            "DLC: Lost in Nightmares & Desperate Escape",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Resident Evil 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Completed Chapter 1 - 1", "Completed Chapter 1 - 2", "Completed Chapter 2 - 1", "Completed Chapter 2 - 2", "Completed Chapter 2 - 3", "Completed Chapter 3 - 1", "Completed Chapter 3 - 2", "Completed Chapter 3 - 3", "Completed Chapter 4 - 1", "Completed Chapter 4 - 2", "Completed Chapter 5 - 1", "Completed Chapter 5 - 2", "Completed Chapter 5 - 3", "Completed Chapter 6 - 1", "Completed Chapter 6 - 2", "Completed Chapter 6 - 3", "Recruit", "Soldier", "Veteran", "War Hero", "Egg Hunt", "All Dressed Up", "Stockpile", "Take It to the Max", "They Belong in a Museum", "Badge of Honor", "They're ACTION Figures!", "A Friend in Need", "Lifeguard", "Exploding Heads", "A Cut Above", "Cattle Prod", "Crowd Control", "Bull's-eye", "Get Physical", "The Works", "Lead Aspirin", "Fireworks", "Be the Knife", "Meat Shower", "Go into the Light", "Ride the Lightning", "Stop, Drop, & Roll", "Baptism by Fire", "Masters of Removing", "Bad Blood", "Drive By", "Egg on Your Face", "Heart Stopper", "Who Do You Trust?", "Army of One", "Eye of the Tiger", "The Team That Slays Together...", "We Will Survive", "Keep the Good Times Rolling", "It Takes Two to Tango", "It's All About the Points", "There's no \"I\" in Team", "Let's Get This Party Started!", "Bringing the Pain", "Must've Got Lost", "It's Just a Bad Dream!", "Night Terrors", "Kung Fu Fighting", "Wish Upon a Star", "Getaway", "The Great Escape", "Run the Gauntlet", "Way of the Warrior", "Shoot the Messenger"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
