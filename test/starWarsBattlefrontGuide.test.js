import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-battlefront.js";

test("the STAR WARS Battlefront (2015) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-battlefront-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-battlefront");

});

test("the STAR WARS Battlefront (2015) guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Multiplayer: Modes & Core Feats",
            "Progression, Collectibles & Missions",
            "Rank Milestones & Expansions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official STAR WARS Battlefront (2015) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A New Hope", "in a galaxy far, far away....", "Never tell me the odds!", "I suggest a new strategy", "Shoot first", "Great shot, kid!", "A cunning warrior", "Don't underestimate the Force", "Crush them with one swift stroke…", "That got him!", "Hold the line!", "Stay on target", "What's the cargo?", "Playing the objective", "The Force is strong with this one", "I've been waiting for you", "\"Gonk? Gonk!\"", "The power of the Force", "When 900 years old you reach...", "Collector", "Tell Jabba that I've got his money", "Distinguished", "Determined", "Don't get cocky", "A tremor in the Force", "Together we can rule the galaxy", "Your journey has only started", "Master", "On the ball", "Precision shot", "Scrap collector", "All right, I'll give it a try", "Safety ain't the point of a joyride", "Best star-pilot in the galaxy", "New Recruit", "Impressive. Most impressive.", "Off to a good start", "Survivor", "Ackbar's Elite", "Do... or do not. There is no try", "Judge me by my size, do you?", "Not bad for a little furball", "Walker defender", "A good blaster at your side", "This is a new day, a new beginning", "Patience you must have", "Greed can be a very powerful ally", "No such thing as luck", "Do we take prisoners?", "City in the Clouds", "You have your moments", "When surrounded by war...", "I’ll take that bet", "That's no moon", "Stop that Droid", "Support the troops", "Stay in attack formation", "Alternative solution", "Onwards!", "What will you become?", "The circle is now complete", "I never doubted you!", "Disturbed tranquility"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
