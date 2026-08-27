import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-messenger.js";

test("the The Messenger guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-messenger-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-messenger");

});

test("the The Messenger guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Shop & Upgrades",
            "Exploration & Collectibles",
            "Combat & Movement Tricks",
            "Dedicated Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official The Messenger achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/the-messenger.json).
    const officialAchievementNames = [
        "Nothing To Fear", "Enter The Ninja", "Dungeon Brawler", "Deposit At The River Bank", "My Bad!",
        "I Quill Survive", "Leg Day", "Glacial Peaked", "Did The Thing", "Sweet 16!",
        "Was That A Dragon?", "More Like 'Dumb In General'", "Man's Best Fred", "Hear Today, Gone Tomorrow", "Tumble Hijinx",
        "The Lava Is Floor", "Not With THAT Altitude", "More like EleMENTAL Skylands", "Well, That Was Unsightly", "Sun And Moon",
        "It Sounds Better On Vinyl", "I'm Your Biggest Phan", "The Fake Ending Was Better", "Losing Weight, Gaining Ground", "Be Lootful And Multiply",
        "Walking On Air", "I Swear It's My First Time", "Challenge Expected", "Wheelin' And Sealin'", "Started From The Bottom",
        "I've Been Around", "Eye Of The Shareholder", "Fine, I Won't Open It", "Bait Taken", "You Said This Was A Platformer",
        "Hope This Phelps", "One Hit Wonder", "Welco Metot Henex Tlevel", "No Argument Here", "How Ninja Is That?",
        "Rocked Opus", "Voodoo Told'em", "Now THAT'S a finale!", "Star Messenger", "Betcha can't buy just one",
        "Thanks I hate it", "Sunk Cost", "All in"
    ];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
