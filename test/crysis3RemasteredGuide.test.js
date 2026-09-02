import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crysis-3-remastered.js";

test("the Crysis 3 Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crysis-3-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crysis-3-remastered");

});

test("the Crysis 3 Remastered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign & Difficulty","Gear & Nanosuit Mastery","Secrets & Combat Challenges","Suggested Order"]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Crysis 3 Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Staying Sharp","Welcome to the Jungle!","A Flawless Getaway","Off the Grid","Turning the Tide","Brink of Apocalypse","Belly of the Beast","The True Measure of a Hero","Nanosuit Veteran","Halfway to Hell","World Saver","Bring it On","Professional Superhero","Perk Of The Job","Geared-up","Suited-up","Be a Pro, use a Bow!","Maximum Strength","Hunter-Gatherer","The Gibson","I'll Have That!","Taste Of Your Own Medicine","Breaking the Lore","Bang For The Buck","Can You Hear Me Now","Who Needs Rockets?","White Rider","Roadkill","Ping Pong!","Inside Job","Post-Human Warrior","Arrow to the Knee!","Improviser","Nanosuit Ninja","Stick Around","Clever Girl!","Poltergeist"];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
