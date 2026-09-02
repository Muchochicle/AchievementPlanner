import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/far-cry-new-dawn.js";

test("the Far Cry New Dawn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "far-cry-new-dawn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "far-cry-new-dawn");

});

test("the Far Cry New Dawn guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story","Prosperity & Collectibles","Expeditions & Combat Feats","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Far Cry New Dawn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Meaning of Prosperity","Prospering","Return to Eden","Problem Solver","The End of Eden","A Graceful Return","Coming Up With the Goods","Wiki-Bean-ia in Business","The Ryeunion","Expeditious Retreat","Honorary Scout","Yoink","Forager","Reduce, Reuse, Recycle","Home is Where the Part Is","Sidecar Sidekick","White Gold","Finders Keepers","Safekeeping","Closed for Applications","How's it Look, Doc?","Kill or Be Killed","Paladin’s Secret","Before","Audiophile","My Little Fortress","Master Skinner","Hit the Road","Pure Ninja","All Your Bases","Weaponsmith","You're a Catch","Save Your Bacon","Poof!","It's Super Effective!","Have Buddy, Will Travel","Bring a Knife to a Gun Fight","Captain's Courageous","Good Job, Cap","Stack 'em Up","Fly, You Fools!","Buzzkill","Legend Has It","Tip o' the Hat","Anger Management","Hey Father, Watch This","Perk-olate","Archery Expert","Get to the Point","Springboard"];

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
