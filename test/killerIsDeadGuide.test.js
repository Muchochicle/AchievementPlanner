import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/killer-is-dead.js";

test("the Killer is Dead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "killer-is-dead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "killer-is-dead");

});

test("the Killer is Dead guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Episodes",
            "Combat & Upgrades",
            "Challenges, Sub-Missions & Gigolo Mode",
            "Difficulty & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Killer is Dead achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Toast to Forerunner", "Kidnapper Executed", "Alice in Dead Land", "9 to 1 on Goliath", "Had a Bad Dream", "No More Spoils", "Scratch One Samurai", "In Your Dreams", "Brought Down to Size", "The Skinny Controller", "Won't Play With You", "Moon King", "Bryan-Approved Sniper", "Brilliant Shoulder Throw", "Float Like a Gadfly", "Suck Like a Leech", "Feeling So High", "Have You Got Clean Hands?", "Sexy Man Whose Blood is Dripping", "Ultimate Physical Beauty", "Cash Enough For Love", "Passport to Infinity", "Mondo's Girls Collection", "Passionate Girl", "Geisha Girl", "Right-Hand Man", "Left-Hand Man", "Scarlett Chaser", "Scarlett Stalker", "Scarlett-Approved Stalker", "Gigolo Begins", "Gigolo Side Story", "Gigolo Mastership", "Office's Affairs", "Office Workers", "Assassins Never Say Die", "The Criminal is Dead", "The Maniac is Dead", "The Mass Murderer is Dead", "Happiest Man on Earth", "Killer at the Gate of Dawn", "Obscured by the Moonlight", "Darksider of the Moon", "Perfect Job", "Reliable Friends", "Gift Collector", "Lucky Girl", "Perfect Killer"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
