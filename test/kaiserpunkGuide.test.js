import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kaiserpunk.js";

test("the KAISERPUNK guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kaiserpunk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kaiserpunk");

});

test("the KAISERPUNK guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorial & City Growth",
            "Trade, War & Diplomacy",
            "Conquest Challenges & Economy",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official KAISERPUNK achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Graduation", "Mastering The Basics", "The Navigator", "The Closing Play", "Impetuous", "Village", "Town", "City", "Megalopolis", "Production Line", "Play With Matches", "Fire It Up!", "Over Troubled Waters", "Farm Boy", "Lumberjack", "Valued Customer", "Victor!", "Master Of The World", "Exploitation", "Utopia", "Never-ending War", "Blitzkrieg", "Attention!", "Gaining Sea Legs", "Growing Wings", "Eating Boots And Belts", "Independence!", "Downfall", "Annihilation", "Alignment", "Again?", "A Friend!", "Convincing", "Five-Star Governor", "Braving The Winter", "Al Norte", "How Tables Have Turned", "Ruins Of A Nation", "Dereliction Of Duty", "Business Conglomerate", "Lord Of War", "Rockefeller", "Sea Wolf", "To The Skies", "Kaiserpunk FM", "Life Of Leisure", "Animal Farm", "White House", "Real Estate Agent", "Flagged", "Land Bridge"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
