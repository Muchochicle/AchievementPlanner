import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nba-2k25.js";

test("the NBA 2K25 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nba-2k25-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nba-2k25");

});

test("the NBA 2K25 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","MyNBA & Dynasty","The W (WNBA)","MyTEAM","Streetball, Showdown & Park","All-Time & ERAs Teams","Suggested Order"]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official NBA 2K25 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Dunes","The Sideline","The Temple","Streetball Co-Op","Origin Story","Making Mends","Full Potential","Goal Setter","Dynasty Gold","Trash Talker","Jersey Swap","Team Chemistry","The G.O.A.T.","Back-to-Back","Three-peat","A Dynasty Begins","The Ultimate Dynasty","It's All About the W","Watch Me Work","She Got Game","Bet On Woman","Come With Me…","Tycoon","It's a Season Thing","Top of the World","Streaker","Qualified","5 in a Row","Showing Off","Holo","Crown Me","Ultimate POWAH!","World Tour","100K Club","Going Once...Going Twice...","SOLD!","Winning","Keep Your Distance","Spreading The Love","Time Traveler","Big Timer","All-Timer","Timeless","Well-Traveled","Old-School Pro","Baaaaaaah!"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
