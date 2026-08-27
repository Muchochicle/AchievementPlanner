import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/moonlighter.js";

test("the Moonlighter guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "moonlighter-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "moonlighter");

});

test("the Moonlighter guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Four Bosses",
            "Crafting & Trick Weapons",
            "Running the Shop",
            "Dungeon Exploration & the Wanderer Dungeon",
            "Grinding & Shop-Floor Quirks",
            "Everything Else",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Moonlighter achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/moonlighter.json).
    const officialAchievementNames = [
        "Overthrow the king!", "Prune the plant!", "Behead the snake!", "Unplug the energy!", "Perfect Golem King",
        "Perfect Carnivurous Mutae", "Perfect Naja", "Perfect Energy Flux", "Archeologist", "Weaponmaster",
        "Balanced Warrior", "Heavy Warrior", "Berserk Warrior", "Piercing Warrior", "Distant Warrior",
        "Janitor", "Scribe", "Savage!", "Careful Merchant", "Hero or Merchant?",
        "Saver", "Saver+", "Saver++", "Greedy", "First Investment",
        "Expansion", "Luxury", "Emporium", "Rynoka's Major!", "100%",
        "There is no avarice without penalty", "Going for supplies...", "Wasteful Merchant", "Golem Apasionate", "Forest Apasionate",
        "Desert Apasionate", "Tech Apasionate", "It takes a thief to catch a thief", "Decorative Mind", "Horde Mode",
        "No Secrets", "Slime Protection Service", "Does it grow on the trees?!?1", "Really?!?", "Healthcare System",
        "Rage against the Golems", "Rage against the Forest", "Rage against the Desert", "Rage against the Machinery", "Special Place",
        "Exterminator", "Distracted Merchant", "Evil Merchant", "Good Merchant", "Naive Merchant",
        "Scammer", "Gotta go fast!", "Inter-Dimensional Blacksmith", "Greed is Over", "A Bigger Family",
        "Second Floor", "Fourth Floor", "Sixth Floor", "Eight Floor", "Improve Yourself",
        "Strange Weapon", "Trick Weapon Collector"
    ];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
