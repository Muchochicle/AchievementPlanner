import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/little-nightmares-3.js";

test("the Little Nightmares III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "little-nightmares-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "little-nightmares-3");

});

test("the Little Nightmares III guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Chapters",
            "Collectibles & Interactions",
            "Upcoming DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Little Nightmares III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Mastery of The Spiral", "Child's Play", "Unsupervised", "Showstoppers", "Spiral Out", "Low-Spirited", "From Nowhere, With Love", "Special Connection", "Toybox", "Candy Shop", "Token Gestures", "Filed Away", "Loose Threads", "Hello?", "Guiding Hands", "Spanner in the Works", "Bullseye", "Peekaboo", "The Windy City", "Birdbrained", "Capital Punishment", "Home Sweet Nome", "Stay Tuned", "Light or Flight", "Another One in the Bag", "Unsavory Delicacies", "Omnipresence", "Delivery Feed", "Aim Low (and Alone)", "Illuminating Experiences", "Institutionalized", "Hand-Eye Coordination", "Exit Stage Fright", "Picture Perfect", "Just the Ticket", "Puppet Master", "Clean Up Your Act", "Shadow Puppets", "DLC0201", "DLC0202", "DLC0203", "DLC0204", "DLC0205", "DLC0206"];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
