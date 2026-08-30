import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tales-from-the-borderlands.js";

test("the Tales from the Borderlands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tales-from-the-borderlands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tales-from-the-borderlands");

});

test("the Tales from the Borderlands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: Zer0 Sum & Atlas Mugged",
            "Episodes 3-4: Catch a Ride & Escape Plan Bravo",
            "Episode 5: The Vault of the Traveler",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Tales from the Borderlands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Pandora, Kiddos", "My Turn To Speak", "Partners In Crime", "Not Alone in the Dark", "2 Fast 2 Fiona", "Blood Money", "Devil on Your Shoulder", "Deal With A Ghost", "Till Death Do Us Part", "A Plan Came Together", "Funeral Crashers", "Classic Reflexes", "Bro or Bot", "Miracle of Atlas Engineering", "Don't Make Me Wait", "Temptation", "Point Of No Return", "So Many Bandits, So Little Time", "Rupture", "Maneater", "Angry Eyes", "Ain't Got Time To Bleed", "Alive And Not Afraid", "Ain't My First Rodeo", "It's Not The Years, It's The Mileage", "Light This Candle", "No Matter Where You Go…", "…There You Are", "A Maze Of Twisty Passages, All Alike", "Unforseen Consequences", "Give And Take (Mostly Take)", "Definition Of Insanity", "Time's A Wastin'", "What's It Worth?", "Tales Twice Told"];

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
