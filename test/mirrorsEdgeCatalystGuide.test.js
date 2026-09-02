import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mirrors-edge-catalyst.js";

test("the Mirror's Edge Catalyst guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mirrors-edge-catalyst-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mirrors-edge-catalyst");

});

test("the Mirror's Edge Catalyst guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Missions","Side Missions & Districts","Movement & Upgrades","Combat, Deliveries & Hacking","Collectibles & Community","Suggested Order"]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Mirror's Edge Catalyst achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Reunion","Learn to Fly","In his bad books","Time for a Frenzied Rumble","Devastation","Payback","Never forgotten","The enemy of my enemy","This. Is. Glass.","Smash & grab","Vengeful Strike","Little girl found","Into the light","Shattered Dreams","Hacker Time","Blood is thicker than everything","Knowledge is power","Downtown Girl","I refuse to sink","Building Blocks","Viewfinder","Running Errands","Learn to walk","Run free","With Bells On","Praise the Run","Easy Runner","Veteran Runner","Tenacious Traceur","Seb's Salute","Georges' Garrison","Belle of the Ball","Danger Zone","Hey, it's-a-me again!","Elegant Flight","Undetected Surge","Roof Runner","Peak Performer","Express delivery","Fighting the system","Five Finger Discount","I Saw You On The Battlefield","P.I. Connors","Story Teller","Full Exposure","User Generated Finisher","You can't keep me down","Spooky","Law-abiding citizen"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
