import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mini-motorways.js";

test("the Mini Motorways guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mini-motorways-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mini-motorways");

});

test("the Mini Motorways guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Core Milestones",
            "Upgrades & Feats",
            "City Trip Counts",
            "Expert Mode & Endless",
            "Later Cities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 165-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /165 Steam achievements/);

});

test("every one of the 165 official Mini Motorways achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Driver's License", "Los Angeles Tourist", "Beijing Tourist", "Dar Es Salaam Tourist", "Manila Tourist", "Moscow Tourist", "Munich Tourist", "Rio de Janeiro Tourist", "Tokyo Tourist", "Zurich Tourist", "Daily Commute", "Weekly Commute", "Zurich Commuter", "Dubai Commuter", "Mexico City Commuter", "Rio de Janeiro Commuter", "Manila Commuter", "Munich Commuter", "Moscow Commuter", "Dar es Salaam Commuter", "Tokyo Commuter", "Beijing Commuter", "Los Angeles Commuter", "Mass Transit", "Wood Riddance", "The Roundabout Way", "Going in Circles", "A Ton of Tunnels", "Tunnel Vision", "Bridge the Gap", "Let's Build Bridges", "Boogie Lights", "I See the Lights", "Many, Many Motorways", "Fifty Rich", "Road-incarnation", "The Long Way Home", "Highway to Hell", "A Tile a Minute", "Seven is a Place on Earth", "Vanish Into Pin Air", "Mom's Spaghetti", "Back At It", "One of Everything", "The Dark Side of the Road", "Troll Town", "Try, Try Again", "Go The Extra Mile", "Rapid Transit", "Hitting All the Lights", "A Bridge to Everywhere", "Tunnel Through", "Roundabout City", "Los Angeles Driver", "Beijing Driver", "Tokyo Driver", "Dar es Salaam Driver", "Moscow Driver", "Munich Driver", "Zurich Driver", "Manila Driver", "Rio de Janeiro Driver", "Mexico City Driver", "Dubai Driver", "Mexico City Tourist", "Dubai Tourist", "So Four, So Good", "Wellington Tourist", "Wellington Commuter", "Wellington Driver", "Beijing Challenger", "Dar es Salaam Challenger", "Dubai Challenger", "Los Angeles Challenger", "Manila Challenger", "Mexico City Challenger", "Moscow Challenger", "Munich Challenger", "Rio de Janeiro Challenger", "Tokyo Challenger", "Wellington Challenger", "Zurich Challenger", "Warsaw Tourist", "Warsaw Commuter", "Warsaw Driver", "Warsaw Challenger", "Chiang Mai Tourist", "Chiang Mai Commuter", "Chiang Mai Driver", "Chiang Mai Challenger", "Lisbon Tourist", "Lisbon Commuter", "Lisbon Driver", "Lisbon Challenger", "Beijing Expert", "Chiang Mai Expert", "Dar es Salaam Expert", "Dubai Expert", "Lisbon Expert", "Los Angeles Expert", "Manila Expert", "Mexico City Expert", "Moscow Expert", "Munich Expert", "Rio de Janeiro Expert", "Tokyo Expert", "Warsaw Expert", "Wellington Expert", "Zurich Expert", "Are We There Yet?", "Busan Tourist", "Busan Commuter", "Busan Driver", "Busan Challenger", "Busan Expert", "London Tourist", "London Commuter", "London Driver", "London Challenger", "London Expert", "Mumbai Tourist", "Mumbai Commuter", "Mumbai Driver", "Mumbai Challenger", "Mumbai Expert", "New York City Tourist", "New York City Commuter", "New York City Driver", "New York City Challenger", "New York City Expert", "Reykjavík Tourist", "Reykjavík Commuter", "Reykjavík Driver", "Reykjavík Challenger", "Reykjavík Expert", "Vancouver Tourist", "Vancouver Commuter", "Vancouver Driver", "Vancouver Challenger.", "Vancouver Expert", "Cairns Challenger.", "Cairns Expert", "Cairns Tourist", "Cairns Commuter", "Cairns Driver", "Copenhagen Challenger", "Copenhagen Expert", "Copenhagen Tourist", "Copenhagen Commuter", "Copenhagen Driver", "Hong Kong Tourist", "Hong Kong Expert", "Hong Kong Challenger", "Hong Kong Commuter", "Hong Kong Driver", "Cape Town Tourist", "Cape Town Expert", "Cape Town Challenger", "Cape Town Commuter", "Cape Town Driver", "Istanbul Tourist", "Istanbul Expert", "Istanbul Challenger", "Istanbul Commuter", "Istanbul Driver"];

    assert.strictEqual(officialAchievementNames.length, 165, "sanity check on this test's own reference list");

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
