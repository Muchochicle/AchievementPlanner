import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crawl.js";

test("the Crawl guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crawl-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crawl");

});

test("the Crawl guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Combat Milestones",
            "Challenges, Deities & Boss Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Crawl achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Taste For Revenge", "A Death Feud", "A Vengeance Insatiable", "The Butcher", "Unstoppable Force", "Vermin's Scourge", "Dragon's Bane", "The Lonely Miser", "The Wealthy Merchant", "The Gilded Baron", "The Novice Scholar", "The Acclaimed Collector", "The Renowned Antiquarian", "Lloyd and Goliath", "Goliath and Goliath", "Adequately Equipped", "Manic Greed", "The Gamekeeper", "The Beastmaster", "The Demontamer", "Stone Awoken", "Burrowing Terror", "Reanimator", "Pickpocket", "A Duel of Archers", "Glub Blasphemed", "S'hrim Denied", "Qaahl Forgotten", "Gor Disavowed", "Gholoth Shunned", "Brain Haemorrhage", "Brute Force Alone", "The Tentacle Severed", "The Beast Beheaded", "The Stone Shattered", "A Bloody Conquest", "True Escape", "The Sickly Champion", "A Piercing Bolt", "Altered Altered Beast", "A Healthy Victory", "Unceasing Lethargy", "Unfettered Strength", "Theatrical", "Infinite Horror"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
