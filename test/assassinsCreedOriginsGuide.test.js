import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-origins.js";

test("the Assassin's Creed Origins guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-origins-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-origins");

});

test("the Assassin's Creed Origins guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Combat & Arena","Exploration & Egypt's Secrets","Progression & Hunts","The Hidden Ones DLC","Discovery Tour & The Curse of the Pharaohs DLC","Suggested Order"]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Assassin's Creed Origins achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Steps","I'm Just Getting Started","The Sea","The Scarab","The Hyena","The Crocodile","The Lizard","The Siege","Wake Up!","Almost There","The End","I'm a Legend","I'm Done Learning","Overheating","For Those About to Die…","Fatality!","Ben-Hur","Road Rage","The Harder They Fall","Slasher","The Arrow Whisperer","Words of Wisdom","Circle of Life","Seven Farmers","The Festival","Shadow of Egypt","Smash!","I Know My Land","Raider of the Lost Tomb","I Can See My House From Here!","Set-up Date","Where's My Black Flag?","Reporter","Overdesign","Free as a Bird","Triathlete","Archer of the Month","BOOM!","Rider's Licence","Old Habits","Run For Your Life!","Elementary, My Dear Bayek","Reduce, Reuse, Recycle","Namaste","You still need 8880...","Stargazer","Master Diver","Defy Authority","Handy Man","Roooaaarrrrr!","What Time is It?","Zip it Off","Prison Break","Team Play","Walls of the Ruler","Surgical Strikes","New Recruits","The Greater Good","First Visit","Archeologist","Polymorph","Lift the Curse","Higher Power","Dark Horse","Sting in the Tale","Project Comet","Pyromaniac"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
