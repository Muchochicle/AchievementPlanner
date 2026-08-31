import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sins-of-a-solar-empire-rebellion.js";

test("the Sins of a Solar Empire: Rebellion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sins-of-a-solar-empire-rebellion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sins-of-a-solar-empire-rebellion");

});

test("the Sins of a Solar Empire: Rebellion guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Victory Conditions & Challenge Wins",
            "Research & Fleet Diversification",
            "Exploration, Diplomacy & Economy",
            "Combat & Destruction",
            "Black Market, Custom Galaxies & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Sins of a Solar Empire: Rebellion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ensign", "Acolyte", "Initiate", "Master of Any Domain", "Plug Puller", "Toaster Roaster", "Comp Stomper", "Actually HAL, I can do that.", "Fear of Icebergs", "No Exhaust Port Found", "Best Defense is a Good Offense", "Go Big or Go Home", "TEC Military Researcher", "Advent Hostility Researcher", "Vasari Warfare Researcher", "TEC Civilian Researcher", "Advent Harmony Researcher", "Vasari Empire Researcher", "Archaeologist", "TEC Fleet Diversification", "Advent Fleet Diversification", "Vasari Fleet Diversification", "Capital Ship Captain", "Squadron Leader", "Capital Ship Armada", "Ship Swarm", "Outstanding Resume", "Star Explorer", "Escape From Max", "Money Lender", "Metal Lender", "Crystal Lender", "Road to Peace", "Pacifist", "Mutual Trader", "Planet Visionary", "Ship Visionary", "Family Planning", "Tax Collector", "Export Maven", "Metal Miner", "Crystal Miner", "Refining Magnate", "Pop Idol", "Expert Bombardier", "Frigate Killer", "Capital Ship Assassin", "Wrecking Crew", "Pilot's Bane", "Pirate Exterminator", "Anti-Globalization", "Dead Canaries", "Union Buster", "Pirate Baron", "Space Ponies!", "Colonizer", "Metal Speculator", "Metal Merchant", "Crystal Speculator", "Crystal Merchant", "Resource Opportunist", "He's no good to me dead!", "World Builder", "Equal Opportunity", "Drill Baby Drill", "Vacation Getaway", "Destroyer of Worlds", "Intrepid Explorer"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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
