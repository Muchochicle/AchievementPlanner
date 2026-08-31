import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/aven-colony.js";

test("the Aven Colony guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "aven-colony-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "aven-colony");

});

test("the Aven Colony guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ranks & Campaign Missions",
            "Building & Colony Milestones",
            "Artifacts, Expeditions & Oddities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Aven Colony achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This is Madness!", "Chancellor!", "Commander!", "High Commander!", "President!", "Vanaar Champion", "Sandy Gulch Champion", "Azara Champion", "Hyla's Champion", "Tenari Champion", "Arido Champion", "Kelori Champion", "Valley of Death Champion", "Eden's Champion", "The Upper Grade", "Farm Life", "Solar Tycoon", "Sorry, We Don't Serve Miners", "Blasted!", "Fire Sale", "Ellis Island", "Jack of All Trades", "Dark and Stormy Night", "I'm Losing My Mine", "Consumerism", "A Thousand", "Sol Survivor", "Megalopolis", "Park Ranger", "Sugar Tooth", "Booster Shot", "Kid in an Elevator", "United", "Cleansed", "Empowered", "Shielded", "Early Bird", "All is Revealed", "Rescuer", "Expedition Tycoon", "Lewis & Clark", "Heisenberg", "Rigged Elections", "You Have Been Warned", "Zombies!", "The Great Depression", "Speed Runner", "Arctic Expansion"];

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
