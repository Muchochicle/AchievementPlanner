import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/postal-4-no-regerts.js";

test("the POSTAL 4: No Regerts guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "postal-4-no-regerts-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "postal-4-no-regerts");

});

test("the POSTAL 4: No Regerts guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Errand Gags","Sandbox Humour","Collectibles & Challenge Runs","Suggested Order"]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official POSTAL 4: No Regerts achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I Wanna Dance With Somebody","No Way Trailer Home","We still ain't got no budget!","One Side, Gramps","Breezy, not sleezy","Holocaust: Part Trois","4 can play that game!","Look ma, I'm a HOBO!","And remember, respect is everything!","Mean Kitty","Lynched","Lame of Thrones","Yippee Ki-Yay","Scooter Tutor","Highscore, what does that mean?","Dude Vinci Code","One of Uwe's Best","Still playing with dolls! ","Roadhouse","Passion of the Christ 2: Crucify This","Don't forget to wash your hands!","PISSASSO","Can we fix it? No we can't!"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
