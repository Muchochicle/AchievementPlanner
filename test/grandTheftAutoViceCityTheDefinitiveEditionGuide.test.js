import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grand-theft-auto-vice-city-the-definitive-edition.js";

test("the Grand Theft Auto: Vice City - The Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grand-theft-auto-vice-city-the-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grand-theft-auto-vice-city-the-definitive-edition");

});

test("the Grand Theft Auto: Vice City - The Definitive Edition guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Missions & Secret Objectives","Side Activities & Stunts","Property, Rank & Completion","Suggested Order"]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Grand Theft Auto: Vice City - The Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Born in the 80’s","Running Rampant","Iron-y","Not my First Time","One is Better Than Two","Point A to Point B","High Quality H2O","Pie Guy","Bull in a China Shop","Vice City Mogul","Salutations My Little Friend","Catch Me if You Can","Somebody Call the Wambulance?","Greasy Palms","Just Like the Real Thing","Keepie-Uppy Okie Dokie","Gun for Hire","I'm Famous!","Don't Need Roads","Daredevil","Legal Counsel","Life of the Party","South American Connection","Big Heat from Little Havana","Chauffeur","Tommy Two-Wheels","Grand Theft Auto","Bloodstained Hands","Take the Cannoli","Mischief Managed","Chopper’d Up","City Sleuth","Done it All","Kingpin"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
