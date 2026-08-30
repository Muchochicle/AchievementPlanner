import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rayman-legends.js";

test("the Rayman Legends guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rayman-legends-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rayman-legends");

});

test("the Rayman Legends guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "World & Painting Completion",
            "Cups & Back to Origins",
            "Combat & Level-Specific Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Rayman Legends achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Barbara's Free!", "Rock that castle!", "Orchestrate this!", "Mad world!", "Splash!", "Dragon Rider!", "Journey to the moon", "World Tour!", "Princess savior!", "Teensies' friend", "Teensies' hero", "The chosen one", "Lucky!", "Scratch me!", "We could be heroes", "Sooo rich!", "They're so cute!", "I just love them!", "Master of the locks", "Invaders!", "That was fast!", "Perfect!", "Swiped clean!", "Bronze Addict", "Silver Addict", "Gold Addict", "Diamond Addict", "Nostalgia", "Old school", "Turnip combo", "Strike!", "Gardener", "This ain't a platform!", "Axe skater", "Bad joke", "Shoot them up!", "Let him do the job", "Bouncing Island", "Watch out!", "Splinter Ray", "Rubber Ducks", "Just kick it!"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
