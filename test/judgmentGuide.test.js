import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/judgment.js";

test("the Judgment guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "judgment-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "judgment");

});

test("the Judgment guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story","Side Cases, Friends & Skills","KamuroGo & Shopping","Minigames & Completion","Suggested Order"]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Judgment achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Greatest Detective","The Game is Afoot","Trust Issues","I'll Make it Double","Skeletons in the Closet","Way Too Thorough!","The Kansai Factor","The Art of Conversation","Blowing the Lid Off","Professional Password Presenter","Enemies of My Enemies","Hung Jury","Politics of Justice","The Final Nail","Thank You!","Detective of Legend","On the Case","Local Detective","Got to the Bottom of It","A Friendly Guy","A Popular Guy","A Guy Everybody Knows","Going Steady","Ladies, Please","Now You're Just Bragging","Skill Dabbler","Skill Pro","Skill Master","KamuroGo Shopper","KamuroGo Trendsetter","KamuroGo Socialite","KamuroGo Tourist","KamuroGo Local","KamuroGo Guide","Pawn Star","Retail Therapy","The Bird's the Word","Electronic Perspective","Oh Look, a Cat!","Zombie Apocalypse Survivor","Drone Champion","Drone Enthusiast","Yagami Party","The Gamer Life","He Just Doesn't Quit","Pay Your Rent, Yagami","KamuroGo Master"];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
