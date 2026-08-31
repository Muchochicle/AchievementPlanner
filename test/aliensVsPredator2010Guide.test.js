import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/aliens-vs-predator-2010.js";

test("the Aliens vs. Predator (2010) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "aliens-vs-predator-2010-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "aliens-vs-predator-2010");

});

test("the Aliens vs. Predator (2010) guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign: Marine, Alien & Predator",
            "Difficulty & Collectibles",
            "Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Aliens vs. Predator (2010) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Not Bad for A Human", "Game Over, Man!", "Club Hopper", "Exit Strategy", "You Have My Sympathies", "Regicide", "I Will Never Leave You...", "...That's A Promise", "One Big Bug", "Get to The Chopper!", "Come to Mama", "Breaking Quarantine", "Grunt Hunt", "Under Pressure", "Grim Reaper", "Alien vs Predator", "It Uses The Jungle", "Fallen Comrade", "Matter of Honor", "Eyes of The Demon", "World of Hurt", "Breaking and Entering", "Reclaimer", "Extinction Agenda", "Stay Frosty", "I Admire its Purity", "It Ain't No Man", "I LOVE the Corps!", "Magnificent, Isn't It?", "One Ugly Mother", "Harsh Language", "Quite A Specimen", "Fortune and Glory", "Scatter Shot", "I Like to Keep This Handy", "Spin Doctor", "Let's Rock!", "Elite Sniper", "Stick Around", "Gunslinger", "Welcome to The War", "Killer Instinct", "Serial Killer", "Very Tough Hombre", "Persecution Complex", "The Six Pack", "Ain't Got Time to Bleed", "The Uninfected", "Welcome to The Party", "Real Nasty Habit"];

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
