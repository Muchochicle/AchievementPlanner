import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/millennia.js";

test("the Millennia guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "millennia-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "millennia");

});

test("the Millennia guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Ages of the Timeline","Victories","Systems & Set Pieces","The Glitch Chain","Suggested Order"]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Millennia achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Age of Heroes","Age of Monuments","Age of Discovery","Age of Alchemy","Age of Aether","Age of Utopia","Age of Ecology","Age of Blood","Age of Plague","Age of Intolerance","Age of Heresy","Age of Old Ones","Age of Ignorance","Age of Dystopia","Age of Visitors","Age of Conquest","Age of Harmony","Age of Generals","Age of Departure","Age of Archangels","Age of Transcendence","Out of Time","Time To Die","Hard Time","Fast Times","Better Luck Next Time","Mainline Timeline","Seeds of Faith","O.G.","Dr. Livingstone, I Presume?","Customizer","Glitch #1","Glitch #2","Glitch #3","Glitch #4","Glitch #5","Glitch #6","True Ending","Age of the Singularity","Petting Zoo","Abundance","Network Coverage","Age of Atom","Age of Wasteland","Age of Wasteland (Victory)","Undeterred","Doomsday Machine","Give Peace A Chance","I Am Become Death"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
