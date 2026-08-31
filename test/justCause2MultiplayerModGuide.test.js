import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/just-cause-2-multiplayer-mod.js";

test("the Just Cause 2: Multiplayer Mod guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "just-cause-2-multiplayer-mod-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "just-cause-2-multiplayer-mod");

});

test("the Just Cause 2: Multiplayer Mod guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Playtime & Social",
            "Combat",
            "Exploration & Stunts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Just Cause 2: Multiplayer Mod achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Incendiary Sightseer", "Indiscreet Infiltrator", "Wilful Wanderer", "Chaos Immigrant", "Mile High Club", "Sky Cause", "Socialite", "Firestarter", "I Want To Break Free", "Mom, Get The Camera", "Only Human", "Hell on Wheels", "Oil for Blood", "Power Surge", "Stranded", "Careful Down There", "Taxi Service", "Stuntshooter", "Welcome to Panau", "Cartographer"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
