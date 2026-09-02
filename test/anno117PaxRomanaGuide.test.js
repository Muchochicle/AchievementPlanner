import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/anno-117-pax-romana.js";

test("the Anno 117: Pax Romana guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "anno-117-pax-romana-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "anno-117-pax-romana");

});

test("the Anno 117: Pax Romana guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Economy",
            "Military, Diplomacy & Religion",
            "Population, Exploration & Quests",
            "The Volcanic Island & Hippodrome",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Anno 117: Pax Romana achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ab Initio Anno", "Experto Crede", "Terra Nova", "Orbis Non Sufficit", "A Toe In The Caldarium", "Pecunia Non Olet", "Aqueduct Vitae", "Haec Ornamenta Mea", "Trade Union", "De Novo", "Scientia Potestas Est", "One... More... Chain...", "Pro Gloria", "City Watched", "Anno Horribilis", "Full House", "Travelling Sails Problem", "Ultima Ratio", "Delenda Est", "Ex Amicitia Pax", "Bend or Break", "Interpretatio Celtica", "Libertine Liberty", "Cura Annonae", "Hic Svnt Dracones", "Romani Ite Domum", "Tuatha Deorum", "Outstanding In The Field", "Ex Gratia", "A Brother's Betrayal", "Life Support", "Questing Beast", "Lily Buy-in", "Un-Scathached", "Reunionatrix", "The First Mile", "Alea Iacta Est", "From Sea To Sea", "Starfall", "Heavier Than A Feather", "Fuelling The Flame", "Devoted to Devotion", "Polygnostic", "Monopantheist", "Morituri Te Salutant", "Not Built In A Day", "Quid Pro Quo", "Si Vis Pacem", "Patrician Tastes", "Trails in the Sea", "Hot Spot", "Is that... snow?", "Of Rage and Redemption", "Save the Trees", "Collector Craze", "Natural Philosophy", "Sybilline Studies", "Burning Devotion", "Pompeii", "Circus Magnificus", "To The Victor...", "...The Spoils", "Per Ardua Ad Alta", "Invictus", "Look To Your Laurels", "Fast and Furibundus", "Everyone Wins", "Bread and Games"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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
