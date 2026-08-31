import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dungeons-3.js";

test("the Dungeons 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dungeons-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dungeons-3");

});

test("the Dungeons 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions 1-5",
            "Campaign Missions 6-10",
            "Campaign Missions 11-15",
            "Campaign Missions 16-20",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Dungeons 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Shadow strikes", "Death and destruction!", "Shadow hunter", "Twistram is devastated", "The Evilest Evil", "No one has to die today!", "The Gehenna Stones", "The Stones’ Power", "The White Knight", "The Swamplanders from the swamplands", "Braiiiiins!", "Night of the Living Dead (on Speed)", "Rusty Steel", "The One-Huge-Army-Building Evil", "Hands off the Dungeonheart!", "The last burger", "MASS-O-BOT", "Then let them eat cake!", "A trip on sea, what fun it can be", "Master of Traps", "Ignore The Level Designer’s Plan", "Damned good", "Factory farming", "A little something extra", "Stock Market Crash", "Spawner Killer", "Storm And Stress", "Not-So-Overproud", "We don’t have time!", "Hearts are trump", "For a handfull of Catapults", "Flat as a pancake", "I love the smell of Catapult fire!", "Ogre Solo!", "Thirst quencher", "Can’t stand to see an Ogre bleed", "Tide Master", "Lifeguard", "Please, no interruptions!", "Destroy the thing", "Lifesaver", "Chorus of damnation", "Difficult family relationships", "This is fun, I’m going to keep doing this!", "Hearts of Iron", "Angel of Fire", "Prepare the grave", "Not a scratch", "Where there is Light, there is Shadow", "I need a hero!", "Prison Break", "At the foot of Mount Destiny", "Use the terrain", "Discoverer", "The Force disturbed", "Can’t stand the sight of Dark Elf blood", "Sacrifices!", "The Victorious Evil", "The Benevolent Evil", "Band of Brothers"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
