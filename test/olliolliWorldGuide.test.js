import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/olliolli-world.js";

test("the OlliOlli World guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "olliolli-world-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "olliolli-world");

});

test("the OlliOlli World guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Career","Challenges & Masteries","Trick Feats","DLC Packs","Suggested Order"]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official OlliOlli World achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Done-shine Valley","Over-brook","Burnt-out-rock","Sketch-bye-d","Bossed Vulgas","Challenge 10","Challenge 50","Challenge 100","Master","Masterier","Masteriest","Over the Bolts","Too Grindy","They Last Twice As Long","Hold It (I Like the Way You Tweak It)","Switch Up","Better Late Than Never","Are You Dizzy?","Anti-Grabity","Side Hustle","Every Trick in the Book","Pro-motion","Known Round Here","Opt In Drop In","More Than a Tourist","Primo","So That's How You Do It","Nail the Landing","Hundreds Club","Spot Finder","I Think That's Everything","First Try","Sunshine Valley Hero","Cloverbrook Hero","Burntrock Hero","Sketchside Hero","Los Vulgas Hero","Sunshine Raddy","Cloverrad","Burntrad","Radside","Rad Vulgas","The Whole V.O.I.D.","Creature Collector","The Hyped One","Flattery","Ride the Beams","Going Up","Sky High","Treasure Hunter","Radlantis Rivals Champion","Discovery of a Lifetime","Wind Walker","Blown Away"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
