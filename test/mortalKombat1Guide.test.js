import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mortal-kombat-1.js";

test("the Mortal Kombat 1 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mortal-kombat-1-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mortal-kombat-1");

});

test("the Mortal Kombat 1 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Tutorials",
            "Combat Counters",
            "Towers & Kombat League",
            "Kameo & Talismans",
            "Invasions",
            "Misc & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Mortal Kombat 1 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Become A Ninja In No Time", "Eye Of The TaiGore", "A New Timeline", "What Just Happened??", "Who Was That???",
        "Titan", "Beaten And Broken", "It Has Begun!!!", "Kontender", "Deadly Assassin",
        "Karnage", "Annihilation", "Making Friends Is Easy", "Puppet Master", "Give A Koin",
        "Test Your Might", "So I Just Kill Stuff??", "Adventure Time", "King Slayer", "Buddy System",
        "Rollin' With My Krew", "Where's Blanche", "Take And Deny", "Ultimate Power", "Talis-Mania",
        "Running On Empty", "So Krafty", "Feeling Stronger", "Unstoppable", "Juggernaut",
        "Not So Big Now, Are You??", "Who Da Boss??", "Vanquished", "Always Accessorize", "Kollector",
        "The Mighty Have Fallen", "ABACABB", "Made It Out Alive", "Make Way, I'm Koming Through", "Found You",
        "Stop Hiding", "Quest Master", "Working Overtime", "High Score, Is That Good?", "There Is No Knowledge That Is Not Power",
        "Happy Endings", "Big Spender", "Total Disrespect", "Thank You For Being A Fan!!!", "Witness Me!!!",
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
