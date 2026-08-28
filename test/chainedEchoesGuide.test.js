import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chained-echoes.js";

test("the Chained Echoes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chained-echoes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chained-echoes");

});

test("the Chained Echoes guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress",
            "The Reward Board",
            "Class Emblems & Skill Mastery",
            "Sky Armor Mastery",
            "Collection & Completion Lists",
            "Combat Milestones",
            "World Secrets & Oddities",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Chained Echoes achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/chained-echoes.json). Chained Echoes has no
    // Steam-hidden achievements at all.
    const officialAchievementNames = [
        "The Beginning", "Act Racer", "Next Steps", "Bad Memories", "True King",
        "Sky Champion", "Hitchcock was Right", "God King", "One of Us", "A Blade Runner",
        "Bargain Hunter", "Reward Starter", "Reward Addict", "Reward Junkie", "Reward Mixer",
        "Reward Dealer", "Reward Cartel Boss", "Walking Killing Machine", "Ahoy ye Heartie", "Endangered Species",
        "Side Tracker", "Walking Library", "Infleeencer", "Death to My Enemies", "Winning Streak",
        "Brutal Battler", "Praying", "Son of a Preacher Man", "Preacher Man", "Oh Crab!",
        "The Platypus’ Mind", "Uncanny Expertise", "Customer is King", "Skill Share", "Class Master",
        "Master of One", "Jack of All Trades"
    ];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
