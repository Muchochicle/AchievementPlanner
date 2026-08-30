import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/exapunks.js";

test("the EXAPUNKS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "exapunks-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "exapunks");

});

test("the EXAPUNKS guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Minigames",
            "Secret Achievements & The Bonus Campaign",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official EXAPUNKS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["EXAPUNK", "АГИТАТОР", "РЕВОЛЮЦИОНЕР", "ГЕРОЙ_НАРОДА", "ゲーマー", "熟練ゲーマー", "究極のゲーマー", "PIZZA_PARTY", "DISC_READ_ERROR", "HOME_RUN", "TONER_LOW", "KLEPTOMANCER", "BLACKOUT", "RITE_OF_PASSAGE", "DRIVING_TEST", "š  Ñ|  ö/ ~  öB  è[  å‡  ÑE  È‚ t   7Ò"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

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
