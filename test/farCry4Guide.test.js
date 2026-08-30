import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-4.js";

test("the Far Cry 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-4");

});

test("the Far Cry 4 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Kyrat Liberation",
            "Side Activities & Progression",
            "Combat Feats",
            "Arena, Multiplayer & Valley of the Yetis DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Far Cry 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Kyrat", "One Down", "Overdose", "Two Down", "Hat-Trick", "The King Is Dead", "Deliver Us From Evil", "All Clear", "Tread Lightly", "End Transmission", "Display Of Fortitude", "Well-Rounded", "Trigger-Man", "No One Left Behind", "Gearhead", "Defender", "Robin Hood", "Hand Of Justice", "Brother In Arms", "Defuser", "Changing Lanes", "Fixer-Upper", "Exorcist", "Rewriting History", "Caretaker Of Memory", "Right Tributes", "The Rarest Game", "Well Read", "Quick Learner", "Fully Loaded", "Tricked Out", "Dr. Feelgood", "Make It Rain", "Custom-Fitted", "Tusker", "Quad Kill", "Misdirection", "Shutterbug", "Reign Of Death", "From A Distance", "Two Birds", "The Sky Is Falling", "Flame On!", "Drive-By", "The Good Fight", "Like A Bird", "Roadkill", "The People's Champ", "Renaissance Man", "Community Surprise", "Home Sweet Home", "Night Survivor", "Builder", "Master Builder", "Awakened!", "Spiritual Hunter", "Master of the Awakened"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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
