import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/serious-sam-4.js";

test("the Serious Sam 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "serious-sam-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "serious-sam-4");

});

test("the Serious Sam 4 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Combat Feats & Progress",
            "Side Missions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Serious Sam 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Regression", "Ecclesiastical Extraction", "Roman Holiday", "Volcano Antagonizer", "Hot Hot Hot", "All Roads Lead To Rome", "Are You Not Entertained?", "La Nonna é Mobile", "Holy Driver", "Harvest Noon", "See Carcassonne And Die", "The Informant?", "Class Reunion", "The Last Human", "Oil's Well That Ends Well", "From Earth With Love", "Serious Sam", "Get Serious", "Oh, Shut Up", "Bullseye", "Tear 'n' Rip", "Max Pain", "Atomic Wedgie", "Heads Up!", "Pow Pow!", "Megabarf", "Spinal Tap", "All Kleer", "Enemy of My Enemy", "Say Hello To My Mini Friend", "Harvest Festival", "No Surrender", "Spread the Joy", "This Seems Safe", "Veni Vidi Witchy", "Quadruple the Gun", "Dismemberfest", "The Spirit of Roma", "Cultist Stimulator", "For the Cause", "That Belongs In A Museum", "That Burning Sensation", "Hard Science Fiction", "Signature Move", "You Have Been Wormed", "Where's That Girl", "Mushroom Surprise", "Southern Gentleman", "Fulbert le Fou", "Serious Art", "The French Achievement", "Classic Hero Stuff", "Quality Time", "Brass Lantern"];

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
