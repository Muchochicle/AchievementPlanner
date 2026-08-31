import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/worms-ultimate-mayhem.js";

test("the Worms Ultimate Mayhem guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "worms-ultimate-mayhem-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "worms-ultimate-mayhem");

});

test("the Worms Ultimate Mayhem guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Tutorials & Ranked Matches",
            "Challenges, Kills & Completion",
            "Timed Challenges & New Maps",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Worms Ultimate Mayhem achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Slide into First", "Teacher's Pet", "Loves Company", "I am The Worminator", "If You Build It They Will Die", "Boom Shake The Worm", "Pimp My Worm", "Mr Popular", "Credit To The Nation", "Eggceptional", "Glide Like A Worm", "Cartographer", "Halfway House", "Grave Digger", "Ranked Up", "Loves a Challenge", "Wormicide", "Davey Jones", "Finger of Death", "Embrace The Darkness", "Billy No Mates", "Shop-a-holic", "Genghis Worm!", "Doing It Solo", "Fan of The Arts", "Total Ranker", "Challenge Accepted", "Nick of Time", "No Challenge At All", "Time For A Challenge", "Time Attacked", "Clock Watching", "Alexander The Worm", "Join Me Luke", "I Love New", "Dedicated Ranker", "Davey Jones 2", "Feel The Power of The Darkside"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
