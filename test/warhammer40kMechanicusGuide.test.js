import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-40k-mechanicus.js";

test("the Warhammer 40,000: Mechanicus guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-40k-mechanicus-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-40k-mechanicus");

});

test("the Warhammer 40,000: Mechanicus guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Cohort, Units, Awakening & Szaregon",
            "Choices, Difficulty & Challenge Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Warhammer 40,000: Mechanicus achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This is only the beginning", "Watch them crumble", "Celestial Cartography Catastrophe", "Fleshy Disposal", "Vivisected Vizier", "Architect Abortion", "Knowledge is power", "One with the Machine", "Half a cog", "No aid from the Omnissiah", "Competent Cohort", "Cohortus Maximus", "Power Ranger", "Galvanic Rifle", "Taser Goad", "Radium Ready", "Battle Servitor", "Legio Cybernetica", "Ding Dong Szaregon's Gone", "Impatient destruction", "Sterile Perfection", "Mother of Xenarites", "False God", "Hard", "Impossible", "Melee Machine", "AoE-phobia", "Zero to Hero", "No Omnissian Guidance", "Not the Men-of-Iron", "Perma-live", "Purge the Heretek", "Sensory overload", "Transonic Blur"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
