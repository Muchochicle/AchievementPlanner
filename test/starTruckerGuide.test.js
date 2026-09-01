import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-trucker.js";

test("the Star Trucker guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-trucker-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-trucker");

});

test("the Star Trucker guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Rank, Income & Corporations",
            "Mileage, First Steps & Side Jobs",
            "Job Types, Certs & Exploration",
            "Secrets & Upgrades",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Star Trucker achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Space Duster", "Hyper Hauler", "Master Mover", "Novice Hauler", "Expert Hauler", "Master Hauler", "Transit Trader", "Moon Merchant", "Space Hustler", "No Sleep Till Vexmont", "Cream of the Crop", "Playing Corporation Games", "Watching Lights Blink Below", "Money On My Mind", "Riding With Lady Luck", "Playing Among the Stars", "Over and Over", "Mile-stone", "Mile-ologist", "Mile-ificent", "Weld Done", "First Haul", "Lock and Dock", "Wheeler Dealer", "Ghost Busted", "Bear Necessities", "Twin Triumphs", "Boldly Went", "Money Runner", "Wiggle Wagoneer", "Heavy Hauler", "Star Trekker", "Cargo Cowboy", "Skills to Pay Bills", "Fully Certified", "Hot Patch", "Spark Central", "Outer Wilds", "Station Hopper", "Warp Jockey", "Cosmic Cartographer", "Human Popsicle", "Rogue Trader", "Violation Virtuoso", "My Favourite", "Max Power", "Void Walker", "Eyes on the Road", "Cone Connoisseur"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
