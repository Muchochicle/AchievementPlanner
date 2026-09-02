import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tales-of-arise.js";

test("the Tales of ARISE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tales-of-arise-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tales-of-arise");

});

test("the Tales of ARISE guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story","Bonds & Sub-Quests","Craft, Combat & Progression","Lords & Endgame","Beyond the Dawn DLC","Suggested Order"]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Tales of ARISE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Emissary of Liberation","Vanquishers of Darkness","Comrades in Freedom","Retired Avenger","Liberator of Dahna","Invasion Averted","The Truth","Destined Liberator","Wall Smasher","Intertwining Hearts","An Honest Mage","Role Model","A Modest Dream","Drink 'til You Drop","Owl Homecoming","Rebellious Spark","Problem Solver","Skilled Angler","Godly Angler","Speedy Chef","Globetrotting Foodie","Arms Stockpiler","Jeweler","What's in a Name?","Myriad Monikers","Hundred-Hit Smackdown","One-Hit Wonder","Diligent Counterattacker","High Roller","Peak Strength","Encyclopedia Zeuglica","Unrelenting Blaze","Night Blossom","Quaking Continent","Billowing Cyclone","Raging Current","Big Game Hunter","Otherworldly Survivor","Putting the Past in its Place","Elite Vanguard","Dilettante","Curious Hobbyist","Novice Rancher","Veteran Rancher","Owl Spotter","Owl Scouter","Ceaseless Chatterbox","The First Seal","Resolution","True Freedom","The Second Seal","Departure","Arms Master","Unparalleled Problem Solver","Individual Growth","Always on Her Mind","Hero of the Summit","Elite Vanguard, Again"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
