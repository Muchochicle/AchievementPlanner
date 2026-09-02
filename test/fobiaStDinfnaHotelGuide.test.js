import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fobia-st-dinfna-hotel.js";

test("the Fobia - St. Dinfna Hotel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fobia-st-dinfna-hotel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fobia-st-dinfna-hotel");

});

test("the Fobia - St. Dinfna Hotel guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Progression & Bosses","Exploration & Puzzles","Habits & Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Fobia - St. Dinfna Hotel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Starter","Detached","Improvisation","Cautious","Accumulator","Pulsatrix","Nicthophobia","Executioner","Pianist","Arachnophobia","Violator","Check-out","Boy Scout","Miner","Natural born journalist","Articulated","Holy Grail","Bug awareness","Anderson","Grandmaster","Armed and dangerous","Adventurer","Mechanic","Jonisvaldo","Collector","Killer","VIP Client","Invincible"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
