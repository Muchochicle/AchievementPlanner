import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/aliens-fireteam-elite.js";

test("the Aliens: Fireteam Elite guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "aliens-fireteam-elite-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "aliens-fireteam-elite");

});

test("the Aliens: Fireteam Elite guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns & Difficulty",
            "Progression & Cosmetics",
            "Combat Feats & Mission Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Aliens: Fireteam Elite achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Priority One", "Giants in the Earth", "The Gift of Fire", "The Only Way to be Sure", "Didn't Break a Sweat", "A Stand Up Fight", "My Kind of Crazy", "Expeditionary Service Ribbon", "LV-895 Service Ribbon", "LV-895 Campaign Medal", "Reticulum Theater Medal", "CMISRS Asset", "Keen Eye", "Confidence Course", "Overwhelming Confidence", "Specialist", "Kitted Out", "A Personal Friend of Mine", "All My Personal Friends", "Fully Rigged", "Glorified Toasters", "Anti-Mutation Station", "It's a Bug Hunt", "Those Things Were Huge", "Burn 'Em Out", "High Voltage", "Nukes, Knives, AND Sharp Sticks", "State of the Art Firepower", "Ready for Anything", "Express Yourself", "It's a Cover, Not a Hat", "Art Gallery", "It's Camouflage on Some Planet", "Fashion Team", "Red Makes It Shoot Faster", "Tower Defense", "I Think They Like Me", "Supportive Squad", "Trigger Discipline", "Got All I Need", "Improvised Explosives", "Suturing Expert", "Promise of a Flower", "CMISRS Resource", "Pod Popper", "I Can't Lie About Your Chances"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
