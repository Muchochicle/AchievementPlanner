import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dishonored.js";

test("the Dishonored guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dishonored-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dishonored");

});

test("the Dishonored guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Stealth & Chaos Runs",
            "Combat & Power Feats",
            "Collectibles & Upgrades",
            "Story Missions",
            "Hidden Achievements",
            "Dunwall City Trials (DLC)",
            "The Knife of Dunwall (DLC)",
            "The Brigmore Witches (DLC)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Dishonored achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Thief", "Versatile", "Ghost", "Shadow", "Mostly Flesh and Steel",
        "Wall of Sparks", "Rogue", "Specter", "Faceless", "Manipulator",
        "Razor Rain", "Surgical", "Clean Hands", "Harm's Way", "Inhabitant",
        "Hornets' Nest", "Speed of Darkness", "Tempest", "Merchant of Disorder", "Art Dealer",
        "Occultist", "The Escapist", "Cleaner", "Dishonored", "Excommunication",
        "Child Care", "Capturing Genius and Madness", "Regicide", "Political Suicide", "This Is Mine",
        "Resolution", "Dunwall in Chaos", "Just Dark Enough", "Vanished", "Gentleman Caller",
        "Street Conspiracy", "The Art of the Steal", "An Unfortunate Accident", "Well Mannered", "King of the World",
        "Bodyguard", "Mercy is the Mark", "Lights Out", "Long Live the Empress", "Poetic Justice",
        "Food Chain", "Alive Without Breath", "Creepy Crawly", "Back Home", "Big Boy",
        "Mrs Pilsen's Remorse", "Void Star", "By My Hand Alone", "Assassin Vs. Machine", "Rare Collector",
        "Long Way Down", "Headhunter", "Daredevil", "Natural Talent", "Time Management",
        "Just Business ", "Missing Pieces", "Well Connected", "No Regrets", "Redemptive Path",
        "Whisper Ways", "Cleaner Hands", "Rats and Ashes", "Message from the Empress", "Stone Cold Heart",
        "Parting Shot", "Breakout", "Gangs of Dunwall", "Deal Maker", "All Come To Ruin",
        "Changed Ways", "Silence is Golden", "Cleanest Hands", "Enough Coin to Disappear", "Wall of Flesh"
    ];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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
