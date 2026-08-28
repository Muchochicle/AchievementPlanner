import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cyberpunk-2077.js";

test("the Cyberpunk 2077 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cyberpunk-2077-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cyberpunk-2077");

});

test("the Cyberpunk 2077 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Endings",
            "District Completion",
            "Companion Questlines",
            "Combat & Build Feats",
            "Exploration & Reputation",
            "Phantom Liberty Story",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Cyberpunk 2077 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/cyberpunk-2077.json).
    const officialAchievementNames = [
        "The Fool", "The Lovers", "The Hermit", "The Wheel of Fortune", "The High Priestess",
        "The World", "The Devil", "The Star", "The Sun", "Temperance",
        "To Protect and Serve", "To Bad Decisions!", "Judy vs Night City", "Life of the Road", "Bushido and Chill",
        "Breathtaking", "It's Elementary", "I Am The Law", "Greetings from Pacifica!", "The Wasteland",
        "Little Tokyo", "Mean Streets", "The Jungle", "City Lights", "Full Body Conversion",
        "Gun Fu", "Christmas Tree Attack", "Ten out of Ten", "Gunslinger", "Two Heads, One Bullet",
        "Rough Landing", "Stanislavski's Method", "Autojock", "Master Crafter", "Daemon In The Shell",
        "The Quick and the Dead", "Must Be Rats", "V for Vendetta", "True Soldier", "True Warrior",
        "Right Back At Ya", "The Wandering Fool", "Frequent Flyer", "Legend of The Afterlife", "King of Cups",
        "King of Pentacles", "King of Wands", "King of Swords", "The Tower", "Spin Doctor",
        "All the President's Men", "Dirty Deeds", "Judgement Day", "Easy Come, Easy Go", "Arachnophobia",
        "Relic Ruler", "The APB is Not Enough"
    ];

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
