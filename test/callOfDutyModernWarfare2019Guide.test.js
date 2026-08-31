import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/call-of-duty-modern-warfare-2019.js";

test("the Call of Duty: Modern Warfare (2019) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "call-of-duty-modern-warfare-2019-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "call-of-duty-modern-warfare-2019");

});

test("the Call of Duty: Modern Warfare (2019) guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Progression & Feats",
            "Mission Challenges & Special Ops",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Call of Duty: Modern Warfare (2019) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Press [BOOM] to Defuse", "Ashes to Ashes", "Hang Time", "Long Way Down", "Wild Fire", "Good Effect on Target", "Out of the Fire", "Tea Time", "Nothing but Net", "Trigger Discipline", "Play Dead", "Companion Block", "Wall Hax", "Golden Path", "Love from Above", "Pit Stop", "Driver's Ed", "Two Birds", "Tunnel Rat", "Dodged a Bullet", "Got Something on Your Face", "Hot Swap", "Lights Out", "We Own the Night", "Warheads on Foreheads", "Circus Tour", "Liberation"];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
