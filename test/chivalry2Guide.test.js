import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chivalry-2.js";

test("the Chivalry 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chivalry-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chivalry-2");

});

test("the Chivalry 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Support & Team Play",
            "Faction & Map Wins",
            "Combat Feats",
            "Class Mastery",
            "Kill-Count Tiers",
            "Signature Techniques",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official Chivalry 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Things I Do For Love", "I got better!", "Field Medic", "Win as Agatha 10 times", "Win as Mason 10 times",
        "Win Dark Forest 5 times", "Win Dark Forest 10 times", "Win Dark Forest 25 times", "Win Coxwell 5 times", "Win Coxwell 10 times",
        "Win Coxwell 25 times", "Win Lionspire 5 times", "Win Lionspire 10 times", "Win Lionspire 25 times", "Win Rudhelm Siege 5 times",
        "Win Rudhelm Siege 10 times", "Win Rudhelm Siege 25 times", "Battle Of The Bastards", "Bring Out The Big Guns", "Brave Brave Sir Robin",
        "Long Range Menace", "Avant-Garde", "Feet on the Ground", "Playing the wrong game", "Deus Vult",
        "Kill 10 Enemies", "Kill 50 Enemies", "Kill 100 Enemies", "Kill 250 Enemies", "Kill 500 Enemies",
        "Kill 1000 Enemies", "Kill 1500 Enemies", "Kill 2000 Enemies", "Baker's Dozen", "Night Knight",
        "Seeing Red", "Fight In The Shade", "This Is Fine", "The Count", "Yadome",
        "What Do We Say To the God of Death?",
    ];

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
