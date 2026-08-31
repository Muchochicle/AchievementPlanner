import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ultimate-general-civil-war.js";

test("the Ultimate General: Civil War guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ultimate-general-civil-war-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ultimate-general-civil-war");

});

test("the Ultimate General: Civil War guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Medals",
            "Historical Battles: Antietam - Gettysburg",
            "Historical Battles: Malvern Hill - Stones River",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Ultimate General: Civil War achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Southern Cross of Honor", "The Roll of Honor Medal", "The Distinguished Service Medal", "The Meritorious Service Medal", "The Confederate Officer Star", "The Homeland Defense Cross", "The War Service Medal", "The Medal of Honor", "The Distinguished Service Cross", "The Meritorious Service Cross", "The Defense Superior Service Medal", "The Union Officer Medal", "The Union Protector Star", "The War Service Medal", "The Civil War Campaign Medal", "Confederate hero in Battle of Antietam", "Union hero in Battle of Antietam", " Confederate hero in Battle of Bull Run", "Union hero in Battle of Bull Run", "Confederate hero in Battle of Chancellorsville", "Union hero in Battle of Chancellorsville", "Confederate hero in Battle of Chickamauga", "Union hero in Battle of Chickamauga", "Confederate hero in Battle of Cold Harbor", "Union hero in Battle of  Cold Harbor", "Confederate hero in Battle of Fredericksburg", "Union hero in Battle of Fredericksburg", "Confederate hero in Battle of Gaines' Mill", "Union hero in Battle of Gaines' Mill", "Confederate hero in Battle of Gettysburg", "Union hero in Battle of Gettysburg", "Confederate hero in Battle of Malvern Hill", "Union hero in Battle of Malvern Hill", "Confederate hero in Battle of 2nd Manassas", "Union hero in Battle of 2nd Manassas", " Confederate hero in Battle of Shiloh", "Union hero in Battle of Shiloh", "Confederate hero in Battle of Stones River", " Union hero in Battle of Stones River"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
