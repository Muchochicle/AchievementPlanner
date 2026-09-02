import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/suicide-squad-kill-the-justice-league.js";

test("the Suicide Squad: Kill the Justice League guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "suicide-squad-kill-the-justice-league-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "suicide-squad-kill-the-justice-league");

});

test("the Suicide Squad: Kill the Justice League guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Campaign","Incursions & Support Squad","Riddler Challenges","Progression & Gear","Suggested Order"]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Suicide Squad: Kill the Justice League achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cleaning Out the Closet","Hitting The Fan","Fowl Play","Walled In","Death Blooms","Blitzkrieg Bop","Thunderstruck!","Hell and Back","Blackest Night","Endgame","Abandon All Hope","No One Defeats Brainiac!","Act of War","Battle Lines","Killin' Time","Into the Angry Planet","The Final Frontier","Winged Vengeance","War Machine","Welcome to the Jungle!","Managing People","Your World is Mine!","Shock Treatment","Combine and Conquer","Turn and Turn Again","Their Dark Designs","Blaze of Glory","The Right Question","The Real Deal","Stop Me If You've Heard This One","The Oldest One in the Book!","Level Up","Harleen the Queen","King For A Day","Captain Boomerang! Agent of Oz","Lawton's Last Stand","The Chosen One","Trial by Blood","Choices","The Venom Connection","All Sorts of Fun","The Reaper","Trial By Fire","Choice of Evils","Grand Experiment","Forces In Motion","Allies","Number the Dead","Need to Know","History Repeats"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
