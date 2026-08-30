import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sunless-sea.js";

test("the Sunless Sea guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sunless-sea-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sunless-sea");

});

test("the Sunless Sea guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Death & Endurance",
            "Curses, Legacy & Reputation",
            "Playstyle Challenges & Underwater Perils",
            "Port Discoveries",
            "Deep Zee & Endgame",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Sunless Sea achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Sink Beneath the Waves", "Sink Beneath the Waves. Again.", "Never Stop Sinking...", "HE SUN THE SUN THE SUN T", "Zee Fever",
        "Thou, All-Shaking Thunder", "Lose your Mind", "One Year at Zee", "Five Years at Zee", "Ten Years at Zee",
        "We're Gonna Need a Bigger Boat", "The Fall of the House", "Roaring Rise", "The Ascent of Man", "Sweet Sorrow",
        "Salt's Curse", "Stone's Curse", "Storm's Curse", "Open Your Ears", "Rules the Waves",
        "Old Unhappy Far-Off Things", "Come Closer", "Rival", "Pupil", "Shipmate",
        "Correspondent", "Salvager", "Sound Mind?", "I am the Captain of my Soul", "A Past Wreathed in Shadows",
        "Frightful, sheer, no-man-fathomed", "Death By Water", "Consider Phlebas", "Ofermod", "What lies beneath",
        "A buoyant escape", "No regrets", "Those are pearls that were his eyes", "Under the zee", "The beauty of the deep",
        "Thanks for all the fish", "Leviathan", "The Bell Tolls", "The dragon in the zee", "Rosewater sailor",
        "His bones in whispers", "Knife, Cup and Bone", "A current under zee", "Under pressure", "Depth charge",
        "A zee-change", "The Lady's Parlour", "Romans 6:9", "A Drownie devotee",
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
