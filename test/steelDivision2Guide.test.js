import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/steel-division-2.js";

test("the Steel Division 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "steel-division-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "steel-division-2");

});

test("the Steel Division 2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game Campaigns & Scenarios",
            "DLC Campaigns & Scenarios",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Steel Division 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Not a step back!", "Breakthrough!", "Bobruisker", "Trapping the fascists!", "Berezina, fateful waters ...", "Same place, different enemy ...", "Death of an Army Group", "Red Triumph", "Engagez-vous, rengagez-vous ...", "Bobr, Berezina, Niemen...", "Last train for glory", "Cat Hunt", "Vorwärts!", "Hurrah!", "A New Hoppe", "Order No. 227", "Desperate assault", "Desperate resistance", "Highway to Hell", "Stairway to Heaven", "Conqueror", "Wingman", "Teammate", "Companiable", "Party Animal", "Captain", "Colonel", "General", "Marshal", "Peacemaker", "Rookie", "Battle-Hardened", "Veteran", "With a little help from my friends…", "Polish Marshal", "Warsaw has fallen", "Berlingowcy", "River of Blood", "Cossack", "Hussar", "Back to Brest", "The Great Escape", "Bonecrusher", "Memento Mori", "Red Finland", "Free Finland", "Crossroad of Destiny", "Hanging by a thread", "Remember Leningrad", "Finland won the peace", "Killing Blow", "Black Sunday", "Red Fortress", "White Castle", "Annexation Complete", "Immortal Transylvania", "Repression", "Insurgent"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
