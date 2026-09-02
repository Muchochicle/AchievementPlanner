import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/homeworld-3.js";

test("the Homeworld 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "homeworld-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "homeworld-3");

});

test("the Homeworld 3 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign","Fleet Command & Combat","War Games & Skirmish","Suggested Order"]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Homeworld 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Captain","Admiral","Navigator","Shall We Play a Game?","Chapel Perilous","Untouchable","Bug Swatter","Hostile Takeover","That Belongs in a Museum!","Big Game Hunter","The Great Cannon","The Unbound","Not Today, Singularity!","Destruct Sequence Alpha-One","If You’ll Be My Bodyguard","Stay in formation!","Grand Armada","We Are Away","A Helluva Ship","Into the Glacier","Ghosts Of The Desert","Nothing Short Of Miraculous","Warriors Of The Fringe","One Step Too Close","Open The Way","As They Have Hunted Us","The Sajuuk-Khar","The Time Of Prophecy","This War Is Over","A Dark Cloud Gathers","Prepare To Shipbreak","Fix-it Frigate","Kablammo","That Was One in a Million!","A Path Across the Galaxy"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
