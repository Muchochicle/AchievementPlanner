import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dishonored-death-of-the-outsider.js";

test("the Dishonored: Death of the Outsider guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dishonored-death-of-the-outsider-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dishonored-death-of-the-outsider");

});

test("the Dishonored: Death of the Outsider guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Missions & Endings","Objectives & Power Feats","Challenge Runs & Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Dishonored: Death of the Outsider achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Uncaged","Two Turns","Twin-bladed Knife","Gnosis","Dead Eye","Final Release","Deicide","Golden Locks","Nightingale","Public Shaming","Big-time Player","Obsessive Safe-cracker","The Perfect Crime","Party Crasher","The Face of the Abbey","Voices","Harder than Stone","Final Nudge","Hooked","Mightier than the Sword","Clever Planning","Salute!","Rat Whisperer","Shadow","Agent of Mercy","Good Old Times","Side Effects","Occupational Hazard","Mercenary Work","Art Aficionado"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
