import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/autonauts.js";

test("the Autonauts guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "autonauts-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "autonauts");

});

test("the Autonauts guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Production Milestones",
            "Evolution & Settlement Goals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Autonauts achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Mummy's Special Little Autonaut", "Autofruity", "Autoshroomy", "Automilky", "Autowoolly",
        "Autoeggy", "Autofishy", "Autotooly", "Autohoney", "Autospawny",
        "Autominey", "Autopotty", "Autodressy", "Autoexplory", "Autolumberjacky",
        "Autonoshy", "Autograiny", "Autotransporty", "Autostory", "Autobotty",
        "Real Autonaut", "Autocommunity", "Autoefficiency", "Autolunchy", "Autosmörgåsbordy",
        "Autobanquety",
    ];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
