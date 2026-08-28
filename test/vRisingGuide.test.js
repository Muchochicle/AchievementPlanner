import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/v-rising.js";

test("the V Rising guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "v-rising-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "v-rising");

});

test("the V Rising guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Vampire Basics & Your Castle",
            "Exploring Vardoran",
            "Servants, Merchants & Vampire Powers",
            "V Bloods, the Story Acts & Dracula",
            "Brutal Difficulty",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official V Rising achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        " Symphony of the Night", "Larger Pockets!", "Exquisite Blood", "A Whole New World", "A Fox in the Hen House",
        "Footsteps in the Snow", "Godless Intrusion", "Forbidden Footsteps", "Don't Drink the Water", "March of the Machines",
        "The Forgotten Reaches", "A First Taste", "Gone Fishing", "Your Number One Fan", "Blood Donor",
        "Upon a Pale Horse", "Vampire Rising", "The Allure of Coin", "A Vampire with a Hobby", "Ultimate Power",
        "First of Many", "Lord of the Land", "Master of Disguise", "It's a Tight Squeeze", "Oh No!",
        "Work Smart, Not Hard", "A Weapon From a More Civilized Age", "Riftslayer", "Dressed to Impress", "To the Skies",
        "A Creature of Many Forms", "Instant Gratification", "Every Corner of the World", "Completed Act 1", "Completed Act 2",
        "Completed Act 3", "Completed Act 4", "Collector of Forgotten Lore I", "Collector of Forgotten Lore II", "Collector of Forgotten Lore III",
        "A Perfect Test Subject", "An Eye for Quality", "Slayer of the Immortal King", "Master of All", "Completed Act 1 on Brutal Difficulty",
        "Completed Act 2 on Brutal Difficulty", "Completed Act 3 on Brutal Difficulty", "Completed Act 4 on Brutal Difficulty", "Brutal Slayer of the Immortal King"
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
