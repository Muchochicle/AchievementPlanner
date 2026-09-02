import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mass-effect-andromeda.js";

test("the Mass Effect: Andromeda guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mass-effect-andromeda-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mass-effect-andromeda");

});

test("the Mass Effect: Andromeda guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Andromeda Story","Combat & Powers","Exploration, Crafting & Progression","APEX Multiplayer & Strike Teams","Suggested Order"]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Mass Effect: Andromeda achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fireworks","Terminator","Death from Above","Close Combat Specialist","With Our Powers Combined","Pinpoint Shot","Medic!","Mastermind","Icebreaker","Fastball","Rough Landing","Friendly Fire","Trapshooter","Sucker Punch","Pyrotechnics Expert","Long-Distance Jump","Matchmaker","Vanguard Surprise","Hang Time","Unwavering","Veteran","APEX","Explorer","Mission Accomplished","Activation","Family Connections","Liberation","Foothold","Exaltation","First Steps","Alliance","Pathfinder","Initiated","World-Shaper","Buccaneer","Building Bridges","United","Helping Hand","Signal Tracking","Role Model","Full Roster","First Contact","Peak Condition","Kitted Out","High Performance","Full Power","Almost There","Teamwork","Top Talent","Jack Of All Trades","All Clear","Terraformer","Craftsmanship","Data Mining","Cryptographer"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
