import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/immortals-of-aveum.js";

test("the Immortals of Aveum guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "immortals-of-aveum-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "immortals-of-aveum");

});

test("the Immortals of Aveum guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story","Difficulty & Conversations","Gear & Combat Mastery","Exploration & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Immortals of Aveum achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Unforeseen","Battlefields Have Memories","Maybe Engage a Little","No More Names","Initiate","Thrada-Kul","Gravity-Challenged Rocks","All the Major Food Groups","Beggars Would Ride","Control is an Illusion","The Means to Save It","Resilience to Sin","A Familiar Nest","Geas Aristeya","A Perfect Cycle","Recruit","Lights Army","Grand Magnus","Socialite","Family Business","Diplomat","Petite Bourgeoisie","Witch-Taker","Out of Time","Scholar","Armsman","Kitted Out","Best Dressed","Armaments Azure","Armaments Gules","Armaments Vert","Periapt Cerulean","Periapt Alizarin","Periapt Viridian","Enlisted","Soldier","Veteran","Master of Ultramarine","Master of Carmine","Master of Malachite","Shroudfane Explorer","Shroudfane Surveyor","Tip of the Spear","Treasure Hunter","Fowl Play","Backtracker","Good Boy"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
