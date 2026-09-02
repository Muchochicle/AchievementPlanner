import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/aliens-dark-descent.js";

test("the Aliens: Dark Descent guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "aliens-dark-descent-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "aliens-dark-descent");

});

test("the Aliens: Dark Descent guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign Missions","Difficulty & Progression","Combat & Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Aliens: Dark Descent achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This Is Hayes, Pioneer Station, Signing Off","Something Lurks Under The Hills","First Steps Into Madness","Harper's Hell","Making a Stand","Where It All Begun","Living Nightmare","The Darwin Era Was Here","Deep Into Insanity","The Passenger","The Spire","Excavating The Truth","Abysmal Horrors","The More The Merrier","This Went Smoothly","Fair And Square","This Ain't No Picnic","Perfect Organism","Regicide","Cleaning Lethe, One Nest At A Time","Come on, You Wanna Live Forever?","El Riesgo Siempre Vive","Bandage Lover","The Cable Guy","Frontliner","Hardened In The Heat Of Battle","Heavy Steps","Stuff Of Nightmares","Flawless Victory","Archivist","Colonial Barrels","Damn Dude, You Gotta Lose Some Weight!","Omelette Du Fromage","Recouped Investment","Use The Bumper, That's What It's For","This Was No Papercut","Keep 'Em Coming","Snatched Out","The True Experience","The Shrink Hates Me","Call Me Snake","Perfect Enhancements","One For Every Occasion","People Person","Chalk It Up To Experience"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
