import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/front-mission-1st-remake.js";

test("the FRONT MISSION 1st: Remake guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "front-mission-1st-remake-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "front-mission-1st-remake");

});

test("the FRONT MISSION 1st: Remake guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaigns","Wanzers & Combat","Mission Objectives","Suggested Order"]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official FRONT MISSION 1st: Remake achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["RECRUITER","SHOULDER TO SHOULDER","I HAVE MY OWN SYSTEM","OUTSTANDING CAPTAIN","ACE PILOT","THE BEST MATERIAL","VETERAN","KABUUM!","BUBBLEGUM CRISIS","TILL THE VERY END...","FOR WHAT WE BELIEVE IN","WHEN THE WAR BEGAN","HOT-BLOODED","ONE AGAINST ALL","HELL YEA","OUTDAMAGED","BORDER DEFENDER","MAD LECTER","NEW SCARS","CASStOWAYS","IMPOSSIBLE SPARRING","WHATEVER THE COMMAND MAY BE","DEFENSIVE FORMATION","HEROES DON'T DIE","I'M STRONGER THAN YOU","SAKATA'S SHAREHOLDER","HERO LEAGUE","SAFE RETURN","THE COLLECTOR"];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
