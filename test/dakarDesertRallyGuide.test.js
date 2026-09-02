import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dakar-desert-rally.js";

test("the Dakar Desert Rally guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dakar-desert-rally-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dakar-desert-rally");

});

test("the Dakar Desert Rally guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Rallies & Events","Stage Feats & Game Modes","Distance & Vehicle Firsts","Vehicle Collections & Sponsors","Suggested Order"]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Dakar Desert Rally achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Going Places","First of Many","Careful","Clean Driving","RED SEA Winner","DESERT WINGS Winner","TRAIN ODYSSEY Winner","XTREME Winner","AL WAJH Winner","NEOM Winner","AL ULA Winner","TABUK Winner","NEOM 2021 Winner","YANBU Winner","How Legends are born","Legendary","Hat Trick","Born to be wild","Highway Star","Desert Plains","Space Truckin'","We all stand together","Hard Driver","First Bike","First Car","First Quad","First Truck","First SxS","V-TEC’ed","Austrian Endurance","Cutting Edge","Zero to Hero","Marseillaise","South Bound","Shinning Star","Made in France","Invincible","French Collector","Dune Buggy Aficionado","For the Motherland","Connoisseur","Bremens House","Full of Energy","Stuntman","Deja Vu","Desert Wings","Monster Claw","Sheikhen Not Stirred","Desert Autobahn","Forever Speedy","The Navigator","Dakar Competitor","Dakar Legend","Professional Winner","Simulation Winner"];

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
