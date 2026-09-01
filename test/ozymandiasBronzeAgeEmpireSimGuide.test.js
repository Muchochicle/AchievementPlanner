import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ozymandias-bronze-age-empire-sim.js";

test("the Ozymandias: Bronze Age Empire Sim guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ozymandias-bronze-age-empire-sim-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ozymandias-bronze-age-empire-sim");

});

test("the Ozymandias: Bronze Age Empire Sim guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mediterranean & Near East",
            "Greece & Fertile Crescent",
            "Indus, China, Asia & Ganges Plain",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Ozymandias: Bronze Age Empire Sim achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Britons on Mediterranean", "Celts on Mediterranean", "Gauls on Mediterranean", "Carthaginians on Mediterranean", "Mycenaeans on Mediterranean", "Cimmerians on Mediterranean", "Scythians on Mediterranean", "Hittites on Mediterranean", "Egyptians on Mediterranean", "Babylonians on Mediterranean", "Mycenaeans on Near East", "Egyptians on Near East", "Hittites on Near East", "Canaanites on Near East", "Mitanni on Near East", "Babylonians on Near East", "Assyrians on Near East", "Elamites on Near East", "Pylos on Greece", "Sparta on Greece", "Mycenaeans on Greece", "Iolcos on Greece", "Orchomenos on Greece", "Thebes on Greece", "Athens on Greece", "Babylonians on Fertile Crescent", "Elamites on Fertile Crescent", "Assyrians on Fertile Crescent", "Hittites on Fertile Crescent", "Canaanites on Fertile Crescent", "Harappans on Indus Valley", "Mohenjo-Dara on Indus Valley", "Dholavira on Indus Valley", "Zhou on China", "Jin on China", "Chu on China", "Song on China", "Qi on China", "Wu on China", "Oxus on Asia", "Harappans on Asia", "Kuru on Asia", "Zhou on Asia", "Ban Chiang on Asia", "Gojoseon on Asia", "Dong Son on Asia", "Huns on Asia", "Polynesians on Asia", "Kuru on Ganges Plain", "Pancala on Ganges Plain", "Kosala on Ganges Plain", "Videha on Ganges Plain"];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
