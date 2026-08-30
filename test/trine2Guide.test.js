import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trine-2.js";

test("the Trine 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trine-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trine-2");

});

test("the Trine 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Campaign: Levels & Trick Feats",
            "Main Campaign: Collectibles & Challenges",
            "Goblin Menace Expansion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 97-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /97 Steam achievements/);

});

test("every one of the 97 official Trine 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Surfboard Master", "I Didn't Do It", "Flying Solo", "A Floral Feast", "Icebreaker", "Hammer Havoc", "Dirty Tactics", "Bouncy Bouncy", "A Hail of Arrows", "High Rise", "Cirque de Zoya", "This Wasn't the Plan", "Trine 2 hard", "I want more!", "Into the Story", "Wild in Wilderness", "Mudproof Hero", "March Through the Marsh", "Treehouse Adventure", "No More Lizard Soup", "Hostile Gardening", "Funs with Fungi", "Shrooms and Glooms", "Pearl Diver", "Sinister Plumbing", "Hot and Cold", "Through Dangers Untold", "The Story Begins Collector", "Forlorn Wilderness Collector", "Mudwater Dale Collector", "Mosslight Marsh Collector", "Petrified Tree Collector", "Shadowed Halls Collector", "Hushing Grove Collector", "Mushroom Caves Collector", "Mushroom Murk Collector", "Searock Castle Collector", "Eldritch Passages Collector", "Icewarden Keep Collector", "Secrets of Forlorn Wilderness", "Secrets of Mudwater Dale", "Secrets of Mosslight Marsh", "Secrets of Petrified Tree", "Secrets of Shadowed Halls", "Secrets of Hushing Grove", "Secrets of Mushroom Caves", "Secrets of Mushroom Murk", "Secrets of Searock Castle", "Secrets of Eldritch Passages", "Secrets of Icewarden Keep", "Rosabel's Secrets", "Sharp-Eyed", "Master Collector", "Lost and Found", "Snowman", "Challenge is My Middle Name", "Walk in the Park", "O Solo Mio", "Like a Shadow", "Alone and Mighty", "Trine Kaput?", "Catch This!", "All Too Easy!", "The Leaning Tower of Pontius", "No Time to Change Clothes", "Sunstroke", "Indigestion", "Grand Theft Aviation", "I'm Walking in the Air", "Happy Reunion", "The Heroes Return Collector", "Deadly Dustland Collector", "Belly of the Beast Collector", "Brackenridge Rise Collector", "Cloudy Isles Collector", "The Treasurer", "Sharpeyed II (Goblin Menace Expansion)", "Goblin Menace Collector", "Trine 2 Hard II (Goblin Menace Expansion)", "Wicked Collection", "Grand Collector", "Cannonball Rebound", "Mutually Assured Destruction", "Pontius Baseball", "Rise to the Challenge", "Trine Kaput For Good?", "Easy as Pie", "Play Catch", "Rafting", "Pontius Transportation Company", "This is Trine!", "Off You Go", "Secrets of the Heroes Return", "Secrets of Deadly Dustland", "Secrets of Belly of the Beast", "Secrets of Brackenridge Rise", "Secrets of Cloudy Isles"];

    assert.strictEqual(officialAchievementNames.length, 97, "sanity check on this test's own reference list");

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
