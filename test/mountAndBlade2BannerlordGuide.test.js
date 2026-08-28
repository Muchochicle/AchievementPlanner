import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mount-and-blade-2-bannerlord.js";

test("the Mount & Blade II: Bannerlord guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mount-and-blade-2-bannerlord-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mount-and-blade-2-bannerlord");

});

test("the Mount & Blade II: Bannerlord guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Kingdom",
            "Family & Clan",
            "Economy & Settlements",
            "Single-Player Battle Feats",
            "Tournaments & Villainy",
            "Multiplayer",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Mount & Blade II: Bannerlord achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Against all odds", "Apple of my eye", "Bannerlord", "Best served cold", "Butcher of Calradia",
        "Butterlord", "Catch", "Crowdfunded", "Crackshot", "Crush your enemies",
        "Duelist", "Dynasty", "Entrepreneur", "Explorer", "Fat Cat",
        "Freedom!", "God of the Arena", "Great Granny", "Headhunter", "Heartbreaker",
        "Horde breaker", "I can do it", "I spit on your grave", "Jack of All Trades", "King Solomon",
        "Kingslayer", "Know your enemy", "Lance-a-lot", "Landlord", "Lawbringer",
        "Lawmaker", "Long live the Empire!", "Mastery", "Minor Clan", "Mounted Archery",
        "My way", "Real Estate ", "Roadkill", "Slice n dice", "Strike!",
        "Supreme Emperor", "Swordbearer", "The king is pleased", "This Is Our Land", "This is Sparta!",
        "Trained", "Undercover", "Veni vidi vici", "What have the Romans ever done for us?", "Ride it like you stole it"
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
