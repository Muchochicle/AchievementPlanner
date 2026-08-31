import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/naruto-shippuden-ultimate-ninja-storm-4.js";

test("the Naruto Shippuden: Ultimate Ninja STORM 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "naruto-shippuden-ultimate-ninja-storm-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "naruto-shippuden-ultimate-ninja-storm-4");

});

test("the Naruto Shippuden: Ultimate Ninja STORM 4 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode: Chapters & S-Rank Battles (Part 1)",
            "Story Mode: S-Rank Battles (Part 2) & Adventure",
            "Survival, Challenge League & Battle Techniques",
            "Road to Boruto: Boruto's Tale",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Naruto Shippuden: Ultimate Ninja STORM 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Chain of Battles", "Differing Paths", "A Never-ending Threat", "Sealing the Violent Goddess", "Bonds Rebound", "To the Bitter End", "Identity Revealed", "Team Minato's Struggle", "An Unstoppable Duo", "Awakening in the Darkness", "Surpassing One's Master", "Conqueror of a Violent Battle", "Orochimaru Surpassed", "The Showdown's Victor", "The Taka Flies", "A Puppet with Ten Tails", "The Three-Way Deadlock Unleashed", "A Lightning Blade Pierces a Friend", "Standing up to the Threat", "Agony and the Future", "Reaching the Light", "A Fist Toward Great Evil", "The Ultimate Combo", "The Burning Roar of a Hot-Blooded Beast", "Incredible Skill, Inherited", "Beyond the Cycle of Reincarnation", "Madara, Pulverized", "Farewell, Obito", "Surpassing a Goddess", "The Last Man Standing", "Trail of the Gale Expert", "Trail of the Gale Master", "30 Wins in Ultimate Survival!", "Beginner Ability Cap Survival Complete!", "Intermediate Ability Cap Survival Complete!", "Advanced Ability Cap Survival Complete!", "Yeah! Beginner Challenge League Beaten!", "Wow! Intermediate Challenge League Beaten!", "Excellent! Advanced Challenge League Beaten!", "Personal Strength, Released", "Dancing to the Same Beat", "Attacking is the Greatest Defense", "Masterful Timing", "Forbidden Power Released", "Full Power Teamwork!", "Personal Strengths, Maxed Out", "Unscathed", "Perfect Win", "The Possibilities of the Next Strike", "Perfect Storm Master", "Boruto's Tale Expert", "Boruto's Tale Master", "Boruto's Tale - All S Ranks"];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
