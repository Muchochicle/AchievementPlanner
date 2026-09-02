import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crab-champions.js";

test("the Crab Champions guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crab-champions-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crab-champions");

});

test("the Crab Champions guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Wins & Feats","Weapon Mastery (part 1)","Ranks, Minigames & Challenge Runs","Weapon Mastery (part 2)","Suggested Order"]
    );

});

test("the Overview states the verified 109-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /109 Steam achievements/);

});

test("every one of the 109 official Crab Champions achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Crab Champion I","Crab Champion II","Crab Champion III","Skilled","Pro","Master","Looper","Flawless","Frugal","Millionaire","Unstoppable","Slice And Dice","Speedrun I","Speedrun II","Speedrun III","Tank","Maxed Out","Solid Gold","Greedy","Playing With Power","Recycler","Big Spender","Roller","Vandal","Flex I","Flex II","Flex III","Ultra Damage","EZ","Marathon","Auto Rifle Master I","Auto Rifle Master II","Dual Shotgun Master I","Dual Shotgun Master II","Dual Pistol Master I","Dual Pistol Master II","Auto Shotgun Master I","Auto Shotgun Master II","Burst Pistol Master I","Burst Pistol Master II","Sniper Master I","Sniper Master II","Crossbow Master I","Crossbow Master II","Orb Launcher Master I","Orb Launcher Master II","Rocket Launcher Master I","Rocket Launcher Master II","Minigun Master I","Minigun Master II"," Blade Launcher Master I"," Blade Launcher Master II","Cluster Launcher Master I","Cluster Launcher Master II","Gunslinger","Crab Legend","Challenger I","Challenger II","Challenger III","Flamethrower Master I","Flamethrower Master II","Arcane Wand Master I","Arcane Wand Master II","Laser Cannons Master I","Laser Cannons Master II","Seagle Master I","Seagle Master II","Arcade Champion","Holdout Champion","Silver","Gold","Sapphire","Emerald","Ruby","Diamond","Marksman Rifle Master I","Marksman Rifle Master II","Ice Staff Master I","Ice Staff Master II","Grenade Master I","Grenade Master II","Grappling Hook Master I","Grappling Hook Master II","Black Hole Master I","Black Hole Master II","Laser Beam Master I","Laser Beam Master II","Ice Blast Master I","Ice Blast Master II","Electro Globe Master I","Electro Globe Master II","Claw Master I","Claw Master II","Dagger Master I","Dagger Master II","Hammer Master I","Hammer Master II","Pickaxe Master I","Pickaxe Master II","Ultra Chaos Champion","Lightning Scepter Master I","Lightning Scepter Master II","Air Strike Master I","Air Strike Master II","Katana Master I","Katana Master II","Poison Cannon Master I","Poison Cannon Master II","Prismatic"];

    assert.strictEqual(officialAchievementNames.length, 109, "sanity check on this test's own reference list");

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
