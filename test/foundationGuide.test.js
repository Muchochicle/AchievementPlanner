import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/foundation.js";

test("the Foundation guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "foundation-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "foundation");

});

test("the Foundation guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Village Foundations",
            "Economy, Trade & Taxes",
            "Military & Monastic Aspirations",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Foundation achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Your First Church", "Expansion", "Bathing in Gold", "A Growing Village!", "A Thriving City!", "Ye Noble Black Prince!", "Sound the Trumpets!", "A Legend is Born", "A Fief Too Far", "Feudal Overlord", "Civitas Maxima", "Hammer Time!", "Room for One More?", "Spices of Life", "Hanseatic Spirit", "Merchant Prince", "King Midas", "Just this once... I promise!", "Calling a Ban", "Serf and Turf", "The Gabelle Gambit", "The Exchequer's Haul", "The Boar's Head Feast", "Happy as a Lark", "The Big Cheese of Cheddar Palace", "Teloneum", "One of the People", "The Burgomaster", "Marching On!", "Veni, Vidi, Vici", "Montjoie! Saint Denis!", "Against All Odds", "Honi soit qui mal y pense!", "Fit for a King", "Salt Fish and Pottage", "Centuria", "Iron and Oak", "Steel and Stone", "The Way of Saint James", "Ora et Labora", "Via Commercii, Via Dei", "Divine Architecture", "First Growth", "Prior of Plenty", "Abbey of Abundance"];

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
