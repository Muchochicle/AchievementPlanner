import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/enlisted.js";

test("the Enlisted guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "enlisted-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "enlisted");

});

test("the Enlisted guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Class & Weapon Feats","Kill Totals & Streaks","Ranks, Research & Battlepass","Battle Performance","Suggested Order"]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Enlisted achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Trooper","First Blood","Wild division","Cannon master","Chief in the sky","Alles Kaput","Battle hero","The Paratrooper","God of War","The Berserk","Chief of Mining","Trap Master","Genius Engineer","Master of Defense","Master of Offense","Marshall's baton","General's epaulets","The Invader","The Trickster","The Supplier","The Winner","Bad Doctor","Officer Academy graduate","Excellent combat training","Knowledge is Power","The Desperado","The Armor-piercer","The Hunter","The Eagle Eye","The Technician","Sergeant school graduate","Welcome to Battlepass","Step towards progress","Close combat","Burning armor","Research II","Natural born leader","Quick draw","Assaulter","Research III","Gunner","Engineer","Research IV","Grenadier","Radioman","Research V","Mortarman","Flametrooper","First Victory","Sniper elite","Wipeout","Destroyer","Veteran","Specialist","Conqueror","Best of the best","Special forces","Professional","General","Medal of honor"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
