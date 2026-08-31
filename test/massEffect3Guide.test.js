import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mass-effect-3.js";

test("the Mass Effect 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mass-effect-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mass-effect-3");

});

test("the Mass Effect 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Progression & Combat Feats",
            "Multiplayer & N7 Missions",
            "DLC: From Ashes, Leviathan, Omega & Citadel",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Mass Effect 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Driven", "Bringer of War", "Mobilizer", "World Shaker", "Pathfinder", "Tunnel Rat", "Party Crasher", "Hard Target", "Saboteur", "Arbiter", "Last Witness", "Executioner", "Well Connected", "Fact Finder", "Liberator", "Problem Solver", "Patriot", "Legend", "Shopaholic", "Master and Commander", "Lost and Found", "Long Service Medal", "Insanity", "A Personal Touch", "Paramour", "Combined Arms", "Focused", "Recruit", "Soldier", "Veteran", "Bruiser", "Untouchable", "Defender", "Overload Specialist", "Sky High", "Pyromaniac", "Eye of the Hurricane", "Mail Slot", "Hijacker", "Giant Killer", "Enlisted", "Tour of Duty", "Always Prepared", "Tourist", "Explorer", "Gunsmith", "Almost There", "Peak Condition", "Battle Scarred", "Unwavering", "Freedom Fighter", "Prothean Expert", "No Stone Unturned", "Under Pressure", "Conspiracy Theorist", "Family Matters", "Savior", "Talon", "Meticulous", "Priority Target", "High Society", "Team Player", "Last Resort", "Perfect Host", "King of the Castle", "Technical Issues", "Simulated Hero", "The One and Only"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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
