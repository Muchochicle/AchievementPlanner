import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/robocraft.js";

test("the Robocraft guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "robocraft-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "robocraft");

});

test("the Robocraft guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapons & Modules",
            "Ranks & Movement Types",
            "CRF, Campaign & Mortars",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Robocraft achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Shredder!!!", "I Got This", "I've got tone!", "Hugs!", "Points of Light", "Magnetic Personality", "Burn Therapy", "Bring the Pain", "Fly Swatter", "Shield Wall", "Disappearing Act", "Lights Out!", "Energize!", "Power Up!", "Open Window", "Protonium Miner", "Party Animal", "Sneaky, Sneaky", "Surgeon General", "Bronze Rank", "Silver Rank", "Gold Rank", "Diamond Rank", "Protonium Rank", "Doctor", "Get to the Choppa!", "Walk this Way", "Scuttle Time!", "Fly the Friendly Skies", "Keep on Truckin'", "Armored Cavalry", "Such a Fan!", "Skeeter Beater", "Sweep the Knee!", "Burn it with Fire!", "Wing Clipper", "Flat Tire", "Tank Killer", "Hitting the Fan", "Hurt Locker", "Power Shopper", "Mr. Popularity", "Lob it!"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
