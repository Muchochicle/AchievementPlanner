import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/days-gone.js";

test("the Days Gone guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "days-gone-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "days-gone");

});

test("the Days Gone guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Side Storylines & Riding",
            "Survival Skills, Camps & Collectibles",
            "Survival Mode, Challenges & New Game+",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Days Gone achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One Percenter", "Just a Flesh Wound", "Special Delivery", "The Ends and the Means", "Lost and Found", "Brothers in Arm", "Take Back Your Name", "Riding NOMAD", "Hold on Tight", "It's Getting Cold Outside", "Morior Invictus", "I've Been Waiting for This", "Days Done", "Ambush Camp Hunter", "Infestation Exterminator", "Marauder Camp Hunter", "World's End", "One Down", "Farewell Drift", "This is a Knife", "Ghost of Farewell", "Old Reliable", "Variety is the Spice of Life", "Farewell Original", "First Time Buyer", "Burnout Apocalypse", "The Art of Bike Repair", "You've Got Red on You", "Lend Me Your Ears", "Finders Keepers", "Wannabe Fortune Hunter", "The Broken Roadshow", "Surviving isn't Living", "Better Living through Chemistry", "Performance Enhanced", "Best Friends Forever", "Best Friends Forever (For Life)", "Make it Rain", "Welcome to the Party, Pal", "Kitchen Courier", "Don't Stop Me Now", "I'm Out of Control", "There's No Stopping Me", "Mr. Fahrenheit", "Go Kick Rocks", "D.I.Y. Oregonian", "Surviving is Living", "Days Gone in 60 Seconds", "Participation Award", "Second (the) Best", "Golden Boy", "I Make This Look Good", "Worthy", "Gold Team Rules", "You Done Good, Kid", "Dolla Dolla Bills, Y'all", "Lost & Damned", "Gotta Patch 'Em All", "One More Ride", "2 Days 2 Done", "Logan's Shadow", "More Freakers, More Problems", "I'm On Top of the World", "Freakshow", "Survivor", "Dead Don’t Ride", "Sarah's Gift"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
