import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mini-metro.js";

test("the Mini Metro guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mini-metro-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mini-metro");

});

test("the Mini Metro guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Cities: Delivery & Challenges",
            "Daily Challenge & Expansion Cities I",
            "Expansion Cities II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Mini Metro achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Oyster", "Navigo", "MetroCard", "Monatskarten", "Octopus", "イコカ", "Подорожник", "OPUS", "Bilhete Único", "ركاب", "Hop", "Thames Tunnel", "City of Lines", "Square Times", "The Grey Lokomotive", "Hong Kong Eights", "Ten weeks in Osaka", "Neva the Great", "Green and orange and yellow and blue", "São Paulo Grand Prix", "The City of Six Carriages", "Second Harbor Crossing", "myki", "Hook Turn", "Day trip", "Commuter", "Clipper", "Don't Have a Cow, Man", "T-money", "Seoul Train", "交通一卡通", "Shanglow? Shanghai!", "SmarTrip", "Money Train", "Istanbulkart", "Marmaray", "स्मार्टकार्ड", "Elaborate Dance Number", "SL Access", "Centralen", "EZ-Link", "Circle Line", "Earl Grey", "Mustard and Sauerkraut", "Baguette Tradition", "羊城通", "City of Rams", "T-Mobilitat", "This perfect dream", "Bip!", "Mapu chuco", "Lagos Connect", "Mainland to Island", "Ventra", "106 miles", "宜居畅通卡", "Fog City", "Elektra", "From Buda to Pest and back again", "የአዲስ አበባ ቀላል ባቡር", "Bean there done that", "金陵通", "Zijin Shan", "ATTO", "It's about the journey", "CharlieCard", "Four ways to Fenway", "WKM", "Warsaw Tourist", "Navegante", "Lisbon Tourist", "Pasmo", "Tokyo Tourist"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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
