import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mudrunner.js";

test("the MudRunner guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mudrunner-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mudrunner");

});

test("the MudRunner guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Maps: Hardcore, Watchpoints & Garages",
            "Driving & Delivery Feats",
            "Feats, Challenges & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official MudRunner achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Seashore", "Explore Seashore", "Seashore Settler", "Explore Downhill", "Downhill Settler", "The Bog", "Explore The Bog", "The Bog Settler", "Crossing", "Explore Crossing", "Crossing Settler", "Island", "Explore Island", "Island Settler", "Deluge", "Explore Deluge", "Deluge Settler", "Downhill", "Sisyphus", "David", "Stunt Driver", "Student Driver", "Eco-friendly", "Fisherman", "Blind Navigation", "Master Logger", "Size Does Matter", "Size Doesn't Matter", "Old Still Good", "Trophy-raid", "Mechanic", "Forester", "Diver", "Unstoppable", "Caravan", "My Only Love", "Carrier", "Rescue Mission", "Drive Carefully", "I Have All I Need", "Anthropologist", "Fuel Tanker", "Driver", "Climber", "Mushroomer", "Farmer", "Cooperation", "World Cruise", "Repair & Refuel", "Climb a Hill", "The Rig", "Cross a River", "Visit Grandma", "Delivery Mission", "Night Safari", "Crane Operator", "The Expedition", "Lumberjack", "Speed Racer", "Beautiful Tan", "Crane Operator II", "Freight-Ex"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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
