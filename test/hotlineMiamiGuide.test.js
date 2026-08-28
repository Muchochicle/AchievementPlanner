import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hotline-miami.js";

test("the Hotline Miami guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hotline-miami-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hotline-miami");

});

test("the Hotline Miami guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combos & Rank",
            "Kill Feats & Counts",
            "Weapon & Mask Collections",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Hotline Miami achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Combo Beginner", "Combo Intermediate", "Combo Pro", "Combo Master", "Combo King",
        "The End?", "That's It?", "This Is It", "Aced It", "Get A Life",
        "1989", "Dog Lover", "Let In Some Air", "Nigel Lowrie", "Two Birds With One Stone",
        "Plain Luck", "Playing Pool", "Domino Effect", "Zoo Keeper", "Sounds of Animals Fighting",
        "I Got New Friends", "Guns For Show", "Knife For Pros", "Pitcher", "Always On Top",
        "These Are My Guns", "Karma", "Achievement Whore", "Smell Something Burning", "Batman",
        "Sewer Alligator", "Cat Fight", "60 To Car", "Eye For Details", "The Boss"
    ];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
