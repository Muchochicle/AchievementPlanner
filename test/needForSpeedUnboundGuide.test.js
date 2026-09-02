import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/need-for-speed-unbound.js";

test("the Need for Speed Unbound guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "need-for-speed-unbound-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "need-for-speed-unbound");

});

test("the Need for Speed Unbound guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story Campaign","Collectibles & Activities","Lakeshore Online","Suggested Order"]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official Need for Speed Unbound achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Bear Champ","Most Wanted","New Crew","Oh, It's On","Lake Better Watch Out","Found Family","Hey Lakeshore","Adbusting","Heaven Spot","In The Zone","Frequent Flyer","Catch My Drift","Caught On Camera","Cleaning Up","Serious Guap","Cash Money Millionaire","Flow Master","In the Flow","Rebel Without a Pause","Style it Out","Rydell's Rydes","Escape Artist","Public Enemy","Untouchable","Access All Areas","Full House","B for My Name","Bring Your A Game","Teacher's Pet","Superstar","Top Billin'","Mixtape","#Blessed","The Collector","Hey Speedie!","100 Miles and Runnin'","Throwing up Tags","Fashion Killa","Cool Whip","Kick it","Drop the Beat"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
