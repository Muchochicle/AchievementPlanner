import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/serious-sam-hd-tse.js";

test("the Serious Sam HD: TSE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "serious-sam-hd-tse-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "serious-sam-hd-tse");

});

test("the Serious Sam HD: TSE guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single-player, Episodes & Weapons",
            "Deathmatch & Frag Feats",
            "Beast Hunt, CTF & Modes",
            "Survival & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Serious Sam HD: TSE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Beginner", "Game Master", "Serious Sam", "Serious Run", "Matador", "Look, it's a secret", "Cathedral King", "Sam I am", "Co-op Beginner", "Coin-op Co-op", "Deathmatch Beginner", "Deathmatch Master", "Rocket Jumper", "Burn Baby, Burn", "South America Master", "Persia Master", "Medieval Master", "Top Secret", "Bird Hunter", "Space Marine", "Bone Crusher", "Rocket Man", "Balls of Steel", "Braveheart", "Look Ma, I won!", "Deathmatch Champion", "Deathmatch Veteran", "Deathmatch Duelist", "Untouchable", "Fragger", "Crazy Fragger", "Serious Fragger", "1337 Fragger", "Desperate Fragger", "Butcher", "Swordsman", "Backstabber", "Diverse Fragger", "Deathmatch Marathon", "Deathmatch Marathon Winner", "Grudge", "Nemesis", "Frag Combo", "Royal Frag Combo", "Coin-op Life Saver", "Coin-op Gold Rush", "Beast Hunt Beginner", "Beast Hunt Master", "Team Beast Hunt Beginner", "Team Beast Hunt Master", "Capture The Flag Beginner", "Capture The Flag Master", "Flag Thief", "Instant Kill Beginner", "Instant Kill Master", "Instant Kill Pro", "Last Man Standing Beginner", "Last Man Standing Master", "Last Team Standing Beginner", "My Burden Beginner", "My Burden Master", "Heavy Weight Champion", "Team Deathmatch Beginner", "Team Deathmatch Master", "Survival Beginner", "Survival Master", "Cooperative Survival Beginner", "Cooperative Survival Master", "Last Team Standing Master", "Treasure Diving"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
