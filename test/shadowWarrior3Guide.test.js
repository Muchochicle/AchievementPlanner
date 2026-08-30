import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shadow-warrior-3.js";

test("the Shadow Warrior 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shadow-warrior-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shadow-warrior-3");

});

test("the Shadow Warrior 3 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Upgrades & Combat Feats",
            "Gore Tools",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Shadow Warrior 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Samurai", "The end of the world", "Let me in! LET ME IN!", "Down the raccoon hole", "Damn, that's a big dam", "Lo Wang, first of his name", "I don't have friends, I got egg", "Big-Laser-Gun-10000", "Lookin for that special someone", "Ski pass", "Inside out", "Dragon Slayer", "Shiny! What does it do?", "Coaching is overrated", "I'm something of a gunsmith myself", "Master Smith would be proud", "Awake Your Inner Wang", "Surgeon", "Executioner", "Show me what you're made of", "Acupuncture", "Cool guys don't look at explosions", "Gore Master", "Don't come closer", "Set the world on fire", "Baddies go 'BZZZZZ'", "-273 Kelvin", "It's dangerous out there", "Caution! Watch Your Head.", "A Cold Day in Hell", "Stop! Hammertime!", "Disco Inferno", "Anyone Has a Corkscrew?", "Eye See You!", "New Year Has Come Early", "Your Sword is Mine!", "What You're Cooking Here?", "Size Does Matter."];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
