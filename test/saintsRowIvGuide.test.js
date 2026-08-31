import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/saints-row-iv.js";

test("the Saints Row IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "saints-row-iv-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "saints-row-iv");

});

test("the Saints Row IV guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Open World, Loyalty & Homies",
            "Super Powers, Weapons & Combat",
            "Challenges, Collectibles & Co-op",
            "Enter the Dominatrix",
            "How the Saints Save Christmas",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Saints Row IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Zero Saints Thirty", "Destroyer-In-Chief", "There Is No Pancakes", "Woah.", "Don't Panic", "Ghost in the Machine", "Didn't Need to See Him Naked", "Blast from the Past", "About Time!", "Betrayed", "Poodle Skirt", "Keymaster", "Imperator", "Saints & Sensibility", "Half Way Home", "How It Should Be", "The Full Kinzie", "Paranormal Bromance", "The Face of the Saints", "The Two Shaundis", "Machine Man", "On Her Saint's Secret Service", "Benjamin [CENSORED] King", "Actor-Turned-Politician", "Bouncin' with an Old Friend", "And I Ran...", "Don't Look Down", "Chill Out", "Pounding the Pavement", "Here! Catch!", "Bringin' the Heat", "Fist Meet Ground", "Experimental Tech", "Maximum Stopping Power", "Where's My Cape?", "I Am Become Death", "The Challenge King", "The Whole Story", "Better This Way", "Back in the Day", "Switch Hitter", "First of Many", "Zoo Keeper", "You Chose... Poorly", "Ooo A Piece of Candy!", "A Real Cluster....", "Elementary", "Epic Jump Quest", "Fourth and Forty", "Saintified", "Double Team", "The Twin Saints", "Super Power Team Up!", "All Too Easy", "Indomitable", "Rigging the Race", "Health Inspector", "Bow to the Boss!", "Friend of the Raptors", "Hello Little Friend", "OMGWTFBBQ", "Ultimate Hot Potato", "Walking the Dinosaur", "...A Saint Gets a Gun", "Minty Fresh!", "Get that Kid to a Psychologist", "He's Still on the Naughty List", "*BEEP* YOU, CLAWZ!", "Our Gift to You", "Dear Santa", "A World Without Christmas", "A Very Genki Holiday", "Make a List, Check it Twice"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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
