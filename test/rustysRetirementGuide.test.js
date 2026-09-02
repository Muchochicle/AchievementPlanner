import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rustys-retirement.js";

test("the Rusty's Retirement guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rustys-retirement-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rustys-retirement");

});

test("the Rusty's Retirement guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Unlocks","Harvest & Coin Counters","Long-Run Goals","Suggested Order"]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official Rusty's Retirement achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This is nice!","This is not so nice.","A New Crop!","Green Thumb","Horticulturist","Crop Collector","Berry Collector","Woah, that's a big Pumpkin!","Woah, that's a big Tomato!","Woah, that's a big Cucumber!","Haiku's Helping Hand","Sonnet's Shopping Spree","Pinion's Counting Crops","Forbic's Bulbs and Butterflies","Echo's Uber Upgrades","Slate's Biodynamic Barn","Splunk's Planting Seeds","Play for 1hr","Play for 24hrs","Play for 48hrs","Buzzing!","Relocation Specialist","This is Something","A Nice Little Income","Earning Big Bucks","Millionaire","Multi-Millionaire","This is a Good Start","A Small Production Line","A Big Production Line","Industrial Revolution","Full-scale Mass Production","Let's Spruce this Place Up!","This Looks Nice","This is a Pretty Farm","Automatization","Maxed Water Bot","Maxed Harvest Bot","Maxed Biofuel Bot","Maxed Feeder Bot","Maxed Waste Bot","Maxed Fertilizer Bot","Maxed Berry Bot","Moo...","Oink!","Oh poop!","666","That's a Bit Excessive","Architect","Flower Swamp","Sandy Desert","Blossom Forest","Desert Oasis","That's a Lot of Water","That's a Lot of Crops","Snowy Fields","Get a pet","Have a few pets","Cluck, cluck!","Woah, that's a big White Pumpkin!","Woah, that's a big Zucchini!","Woah, that's a big Red Cabbage!","Reaper's Genetically Modified Organisms","Not-so-bad","Pretty good","Excellent!","Modifying crops","Nah, I don't like those","Modifying for efficiency","Bigger and better crops","Heavily modified crops"];

    assert.strictEqual(officialAchievementNames.length, 71, "sanity check on this test's own reference list");

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
