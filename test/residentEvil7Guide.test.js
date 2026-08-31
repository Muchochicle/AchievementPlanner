import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-7.js";

test("the Resident Evil 7 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-7-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-7");

});

test("the Resident Evil 7 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story, Endings & Difficulty",
            "Mechanics & Combat Feats",
            "Collectibles & Challenge Runs",
            "Banned Footage DLC (Vol. 1 & 2)",
            "End of Zoe & Not a Hero DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Resident Evil 7 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["She's Alive", "Welcome to the Family, Son", "You Ain't Gettin' Away", "The Grave Will Out the Truth", "You Better Start Running", "Into the Depths", "End of the Night", "Just A Memory Now", "Playing it Safe", "The Nightmare's Finally Over", "Who's Your Daddy Now?", "Behind Closed Doors", "Arms in the Air", "A-ha!", "Master of Unlocking", "Nice Try", "Open Your Eyes", "In the Bag", "Things Got Personal", "Slash Slash, Slashity Slash!", "Back Off, Mrs. B!", "Duck If You Love Life", "Less is More", "Fly Swatter", "That's a Spicy Meat-a-ball", "1st Place at the Science Fair", "Can't Catch Me", "Out Before Dessert", "Be Kind, Please Rewind", "Pelicans in Your Pocket", "Mad Pelicans", "The Devil Is in the Details", "He's Here, There, Everywhere!", "Mr. Nowhere", "Just Get Me Outta Here", "Resource Manager", "Walk it Off", "Dead by Dawn?", "Sleepless in Dulvey", "Like Mama Used to Make", "Ratcatcher", "Ethan Never Dies", "Eye in the Sky", "Card Shark", "You Gotta Know When To Hold 'Em", "Butterfly Effect", "One Instinct: Survival", "Don't Keep the Man Waiting", "Miracle Chef", "Best Birthday Ever", "Promise Kept", "King of the Swamp", "The Only Guns You Need", "Fastest Man in the Swamp", "Queensberry Rules", "Swamp Warfare", "Mission Accomplished", "You're the Hero Now"];

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
