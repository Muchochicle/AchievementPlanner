import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-vii-rebirth.js";

test("the FINAL FANTASY VII REBIRTH guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-vii-rebirth-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-vii-rebirth");

});

test("the FINAL FANTASY VII REBIRTH guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story: The 14 Chapters","Combat Fundamentals","Growth, Materia & Open-World Intel","Protorelics & Gilgamesh","Gold Saucer & Minigames","Endgame Completion","Suggested Order"]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official FINAL FANTASY VII REBIRTH achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Planet's Hope","Never Meet Your Heroes","Swampy Situation","Make Mine Black","The President's Commendation","Cryptic Cameo","Fun in the Sun","The Price of Progress","Worth the Weight?","Crying Out","Stars Fell from My Eyes","You're Not Murasaki","Hearts Out, Dukes Up","I'm Here for You","Confluence of Worlds","I Got This","Exploitative Practices","Unfettered Friendship","Staggered Learning","Break It Down","Fledgling Summoner","Team Player","No \"I\" in \"Synergy\"","Entering New Markets","Weapons 101","A Materia World","New Blood","Caching In","I Brake for Chocobos","Expert Ex-kweh-vator","You Work for Me Now","Intelligence Aide","Intelligence Specialist","Director of Regional Intelligence","Founder's Bonus","Fort Condor Commander","Cactuar Crusher","Honorary Turk","The Gambit Paid Off","Professional Handler","Bladesman of Legend","Moogle Lover","Materia Completionist","7th, Assemble!","Stealing the Show","Card Royalty","Critically Acclaimed","1-Star Startup","3-Star Hotel","5-Star Hotel","7-Star Hotel","Polygonal Prizefighter","Piano Virtuoso","Are You Not Entertained?","Hall of Famer","My Job Here Is Done","Grind It Out","Staggering Success","Well-Rounded","Of Hardy Stock","Virtually Renowned"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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
