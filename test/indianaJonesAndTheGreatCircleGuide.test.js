import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/indiana-jones-and-the-great-circle.js";

test("the Indiana Jones and the Great Circle guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "indiana-jones-and-the-great-circle-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "indiana-jones-and-the-great-circle");

});

test("the Indiana Jones and the Great Circle guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Missions","Mysteries, Puzzles & Collectibles","Adventure Books & Combat Tricks","Fieldwork","Rome, Snacks & The Order of Giants DLC","Suggested Order"]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Indiana Jones and the Great Circle achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Golden Idol","The Break-In","The Stolen Cat Mummy","The Idol of Ra","A Harsh Climb","Into the Fire","The Blessed Pearl","Atonements","Tuned In","Repatriation","Ecco!","Bookworm","Literary Bug","Bookman","Path of Junia","When in Rome","It Belongs in a Museum!","Secrets in the Sand","Gear Head","Beneath the Surface","Tour de Force","Shadows out of Time","Field Survey","Archivist","The Right Note","Pest Control","Apple of Discord","A Little Tumble","Your Own Medicine","Offensive Defense","A Slippery Customer","The Mad Priest","A Savage Discovery","A Nun in Trouble","Secret of the Queen Mother","Sanctuary of the Guardians","Savage Predicament","The Kid Who Vanished","A Study in Fear","Lost in the Past","Little Horn","Bread is Life","Celestial Delight","Filling in the Blanks","Shutterbug","Locked Doors Hide Secrets","Out of the Vatican","The Order of Giants","Chronicler","Roman Scholar","Symbol of Initiation","The Seven Grades","Books of Power","Depths of the City","Pet the Cat"];

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
