import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deus-ex-human-revolution-directors-cut.js";

test("the Deus Ex: Human Revolution - Director's Cut guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deus-ex-human-revolution-directors-cut-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deus-ex-human-revolution-directors-cut");

});

test("the Deus Ex: Human Revolution - Director's Cut guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Core Playthrough & Skill Feats","Side Quests","Boss Fights & Story Secrets","The Missing Link DLC","Suggested Order"]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Deus Ex: Human Revolution - Director's Cut achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Takedown","Opportunist","First Hack","Hax0r1!","Transhumanist","Consciousness is Over-rated","Up the Ante!","Trooper","Legend","Deus Ex Machina","Pacifist","Foxiest of the Hounds","Doctorate","Lesser Evil","Motherly Ties","Cloak & Daggers","Smash the State","Acquaintances Forgotten","Bar Tab","Rotten Business","Shanghai Justice","Corporate Warfare","Talion A.D.","Gun Nut","The Bull","The Mantis","The Snake","The End","Old School Gamer","Unforeseen Consequence","The Desk Job","Yes Boss","Darker Shades","The Throwdown","The Last Straw","The Final Countdown","The D Project","Good Soul","Hangar 18","Sentimental Value","The Take","Guardian Angel","Lucky Guess","Kevorkian Complex","The Fall","Super Sleuth","Ladies Man","Balls","Ghost","Factory Zero","Never Stop Looking","Good Samaritan","Never Forget","Out of the Frying Pan","The learn'd Scholar","All of the Above","Back Stage Pass","Apex Predator","That Old Adage"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
