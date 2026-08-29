import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wolfenstein-2.js";

test("the Wolfenstein II: The New Colossus guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wolfenstein-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wolfenstein-2");

});

test("the Wolfenstein II: The New Colossus guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Collectibles, Upgrades & Difficulty",
            "Skills, Feats & Districts",
            "The Freedom Chronicles (DLC)",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Wolfenstein II: The New Colossus achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Déjà Vu", "Carrying the Torch", "Enemy Within", "Amazing Grace", "It's Fricking Space Aliens!",
        "R.I.P.", "All the Gains!", "Sermons and Moonshine", "Venus", "The Ausmerzer",
        "Starting a Collection", "Toy Collector", "Audiophile", "Golden Boy", "Terror-Billy",
        "Meet the Cast", "Art Aficionado", "Tinkerer", "Specialist", "Gun Nut",
        "Revolution", "Bring 'em on!", "Do or die!", "Call me Terror-Billy!", "I am death incarnate!",
        "Mein leben", "Max a Perk", "Max all perks", "Bull Rush", "Snakebite",
        "The Sky is the Limit", "Kick It", "They did Nazi that Coming", "Hard Headed", "I'm Machine Enough",
        "Coming Back for More", "Across the Board", "Complete Package", "Plus Package", "Make a Point",
        "First Loser", "Crippled but Able", "Hail Mary", "Sightseeing", "Puzzler",
        "Retro", "Taste of Your own Medicine", "Ghost", "Keep Playing", "Sidetracked",
        "First Down", "Down at the Half", "Touchdown", "Read the Defense", "Signing Bonus",
        "First Team Soldier", "All-Pro Warrior", "Laboratory Expert", "Nightmare Expert", "Venusian Expert",
        "Back in the Field", "Cut! Cut! Cut!", "Dunked", "Investigation Complete", "California Gold",
        "Expert Spy", "Ultimate Spy", "Sacramento Medalist", "Hollywood Medalist", "Lunar Medalist",
        "Homecoming", "Ticket Punched", "Hero's Journey", "Intel Acquired", "Stipend Gained",
        "Army Vet", "Super Soldier", "Alaskan Expert", "Kodiak Expert", "Sub Expert",
    ];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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
