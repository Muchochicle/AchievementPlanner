import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/horizon-zero-dawn-remastered.js";

test("the Horizon Zero Dawn Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "horizon-zero-dawn-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "horizon-zero-dawn-remastered");

});

test("the Horizon Zero Dawn Remastered guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Combat & Skills","Machine Hunter","World Activities","Collectibles & the Shield-Weaver","Main Story","Side Questlines","The Frozen Wilds & New Game+","100% Completion","Suggested Order"]
    );

});

test("the Overview states the verified 79-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /79 Steam achievements/);

});

test("every one of the 79 official Horizon Zero Dawn Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["All Achievements Obtained","Stealth killed 10 machines","3 Strikes From Above","Tore off 10 components","10 Vulnerable machine kills","Tore off 5 heavy weapons","7 types of machine overridden","Headshot 30 human enemies","Downed 23 Grazer dummies","First Modification","All Acquisition machines killed","All Recon machines killed","All Combat machines killed","All Transport machines killed","Reached level 10","Reached level 25","Reached level 40","Reached level 50","All Skills learned","First Tallneck Overridden","First Bandit Camp cleared","First Core Overridden","All Suns at one Ground","Blazing Suns at one Ground","First Corrupted Zone cleared","All Tallnecks Overridden","Cleared all the Bandit Camps","All Cores Overridden","All Suns at all Grounds","Blazing Suns at all Grounds","All Corrupted Zones cleared","All machines catalogued","First Vantage found","First Metal Flower found","First Banuk Figure found","First Ancient Vessel found","All Vantages found","All Metal Flowers found","All Banuk Figures found","All Ancient Vessels found","Got the Shield-Weaver outfit","Followed Rost's teachings","Defeated the Sawtooth","Triumphed in the Proving","Fought back the corruption","Learned of the ancient past","Crashed the Eclipse network","Discovered the truth","Broke the siege of All-Mother","Recovered a powerful weapon","All allies joined","Ended the war machine threat","Victorious with the War-Chief","Saved Meridian from its foe","Aided the defectors","Hunted Redmaw with Talanah","New Game+ Completed","Ultra Hard Completed","Took the Shaman's Path","Won the Werak Challenge","Completed the Second Expedition","Conquered the Mountain","Drained the Flood","Won Ikrie's Challenge","Fully Improved Weapons","All Quests completed","All Activities completed","First Spear Modification","5 Dismount Strikes","5 Machine Types Repaired","Killed 15 Scorchers","Killed 10 Frostclaws","Killed 6 Fireclaws","All Control Towers disabled","All Pigments found","All Animal Figurines found","First Bluegleam Trade","All Frozen Wilds Skills","Reached Level 60"];

    assert.strictEqual(officialAchievementNames.length, 79, "sanity check on this test's own reference list");

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
