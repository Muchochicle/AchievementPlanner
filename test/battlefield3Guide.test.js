import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battlefield-3.js";

test("the Battlefield 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battlefield-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battlefield-3");

});

test("the Battlefield 3 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Multiplayer Core & Vehicles","Weapons, Ribbons & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Battlefield 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Like a Boss","Superiority","Most Valuable Player","Destroyer","Gunslinger","Decorated","Home made javelin","Its no sidecar","Vehicle Warfare","Bite your finger","M.I.A","Pocket full of death","Third Tour","Man of Calibre","It's better than nothing!","Offroad","Dropship","Complete Warrior","Support Efficiency","Grinding the Crack","Handyman","Extreme Hoarder","Colonel","Jaws","Dominator","Show of Force","Death from above","Infantry Efficiency","Heavy Lifter","Deadly tools","AAs revenge","Capture The Flag","1st Loser","Transport Pilot"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
