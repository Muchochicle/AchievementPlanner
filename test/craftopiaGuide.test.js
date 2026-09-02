import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/craftopia.js";

test("the Craftopia guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "craftopia-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "craftopia");

});

test("the Craftopia guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Bosses & Dungeons","Exploration & Wedge Towers","Crafting, Automation & Taming","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Craftopia achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Return of the King","Forehead Flicking","Herbicide","Getting Bored of Slaying Dragons…","Gryps Conflict","Calcium Deficiency","Enter the Dungeon","Death After Death","Who's the Hunter Now?","Maneuver Kill","Noble Bullfrog","Skillful Executioner","Chill Down the Spine","Over the Dungeon","How Many Miles to the Summit?","Beanstalk","Ground Zero","The Highest Peak","Power of Tower","Is It Higher Than a Windmill?","Right Spot to Find a Prey","How Much Is It Worth...?…？","Landscape Protection","Height Difference","Still Lower Than Mountains","Craft of Tanks","The sky's the limit...","Pipeline is Lifeline","1：4：9","Blasphemy Against Life","Coal Miner","Put Food on the Table","Disassembler","1000 Practice Swings","Enchanter","Specialist","Millionaire","You'll Know Squid or Octopus If You Grill","This Mineral Used to Be Legendary","Dragontamer","Blasphemy Against the God","Non-Humanitarian","Breeder","Veteran","Professional Jack of all Trades","Breaker of the Divine Scales","Shadow That Defies Judgment","Conqueror of the Gate of Trials","Beyond a Hundred Deaths","Craftopia"];

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
