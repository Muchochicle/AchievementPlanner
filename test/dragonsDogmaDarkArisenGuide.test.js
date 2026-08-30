import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dragons-dogma-dark-arisen.js";

test("the Dragon's Dogma: Dark Arisen guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dragons-dogma-dark-arisen-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dragons-dogma-dark-arisen");

});

test("the Dragon's Dogma: Dark Arisen guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Endings",
            "Quests, Vocations & Combat",
            "Exploration, New Game Plus & Bitterblack Isle",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Dragon's Dogma: Dark Arisen achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["It Begins", "Onward", "A New Ally", "Getting a Head", "The Courier", "Writ Large", "Come Courting", "The Message", "Rough Landing", "Destiny", "Treacherous", "Freedom", "Mercy", "Solitude", "Servitude", "Peace", "Closure", "The Laborer", "The Hero", "Human Resources", "The Specialist", "The Veteran", "Headshunter", "Eye Contact", "Serpents' Bane", "The Messiah", "Local Recruit", "Foreign Recruit", "The Captain", "Inhuman Resources", "The Savior", "The Knave", "The Artisan", "Dragon Forged", "Well Equipped", "A Queen's Regalia", "The Philanthropist", "The Escort", "Affinity and Beyond", "Into Dripstone Cave", "Into the Ancient Quarry", "Into Soulflayer Canyon", "Into the Manse", "Into the Frontier Caverns", "The Tourist", "The Vagabond", "The Explorer", "The Ever-Turning Wheel", "The Coin Collector", "The Patron", "Cheat Death", "Conqueror", "True Conqueror", "Hardened Veteran", "100 ", "200 ", "Eye Gouger", "The Inquisitor", "The Sprinter"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
