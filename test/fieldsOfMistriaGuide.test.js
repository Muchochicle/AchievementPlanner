import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fields-of-mistria.js";

test("the Fields of Mistria guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fields-of-mistria-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fields-of-mistria");

});

test("the Fields of Mistria guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Town & Buildings",
            "Farming, Skills & Collections",
            "Relationships & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official Fields of Mistria achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Welcome to Mistria", "Don’t You Love That Sense of Achievement?", "Becoming a Familiar Face", "Bridge Builder", "Market Regular",
        "Novice Farmer", "On That Grind", "Summit Scaler", "For the General Good", "A Bridge For Terithia",
        "Novice Rancher", "Barnyard Bounty", "Horse-Hearted", "Inn Good Company", "Refined ",
        "Good Marketing", "Fine Grained", "Hold Your A Plaza", "Ringing Ovation", "Opened The Water Seal",
        "Opened The Earth Seal", "Opened The Fire Seal", "Opened The Ruins Seal", "Used The Magic Key", "Opened The Final Seal",
        "Love Is In The Air", "New Pet Owner", "Patron Of The Arts", "Acquaintance", "Friend",
        "Good Friend", "Best Friend", "Romantic", "True Love", "I do! ",
        "Parent", "Time Flies", "New Friend", "Perk Procurer", "Master Rancher",
        "The Found Woods", "Stone Star Rank", "Copper Star Rank", "Ruby Star Rank", "Iron Star Rank",
        "Sapphire Star Rank", "Silver Star Rank", "Emerald Star Rank", "Gold Star Rank", "Diamond Star Rank",
        "Mistril Star Rank", "First Place", "Gifted", "Happy Birthday", "Master Chef",
        "Master Woodcrafter", "Master Blacksmith", "Entomologist", "Fish Fanatic", "Hero",
        "Master Farmer", "Bread Winner", "Essential Essence", "Jack Of All Trades", "Go To Sleep Already",
        "From a House to a Home", "Thoughtful Gifter", "Close Call", "Celebrated Curator ",
    ];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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
