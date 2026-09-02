import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/roots-of-pacha.js";

test("the Roots of Pacha guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "roots-of-pacha-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "roots-of-pacha");

});

test("the Roots of Pacha guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Ideas & Collections","Village Life","Caves, Pyramid & Endgame","Suggested Order"]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Roots of Pacha achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The First Spark","A Bonfire","Light The Way","Make Frer Proud","Make Inza Proud","Make Tetih Proud","Make Igrork Proud","Make Ada Proud","Make The Clan Proud","Green Thumb","Green Hand","Green Arm","Animal Friend","Animal Hangout","Animal Herd","A Rare Friend","Legend Of The Land","A Person Of Note","A Passing Tale","Stories Will Be Told","A Legend Of Old","A Friend Indeed","Besties For Life","Social Butterfly","Talk Of The Town","Start The Party","Party Animal","Your Place In The World","Your Bigger Place In The World","Your Big Place In The World","A Glyptodon Gathering","A Wise Flight","Playing With Platforms","Crushing Riddles","Totem Rite Of Passage","Ancestral Guides","Uncover The Mysteries","Navigate The Unknown","Investigate The Meaning","Think A Little Deeper","Explore The Lessons","Generations","Fur Friend","Delightful Dish","Chef Of The Ages","Culinary Innovator","Lasting Food","Meals Until Next Season","Great Ideas","Best In Show","Howling Good Time","An Ancient Bond","House Guest","It's a bug","Bugged out","QA","Pro gamer","Performer","Future flora","Future fauna","Seal of approval","Threads tied"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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
