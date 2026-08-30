import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dawn-of-war-2.js";

test("the Warhammer 40,000: Dawn of War II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dawn-of-war-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dawn-of-war-2");

});

test("the Warhammer 40,000: Dawn of War II guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dawn of War II Campaign & Combat",
            "Dawn of War II Multiplayer & The Last Stand",
            "Chaos Rising Expansion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Warhammer 40,000: Dawn of War II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["There Is Only War", "Death from Above", "Sweeping Advance", "Emperor's Champion", "Lightning Assassin", "Welcome to Calderis", "Rant All You Will", "The Cleansing Begins", "Astronomical", "Even In Death I Still Serve", "Heroes of Angel Gate", "Fight to Survive", "Hold back the Xenos", "Win the War", "Allies to the Cause", "Allies to the Chapter", "Battle Brothers", "Dug In", "Massacre", "Not one inch", "That's Close Enough", "Rush 'em", "Purge the Xenos", "Feel No Pain", "Fleet of Foot", "The Book of Honor", "Fast Attack", "Tireless warrior", "Hero of the Imperium", "Legend", "In the name of the Emperor", "Elite", "Heavy Support", "Elite Strike Force", "Gladiator", "Wisdom of the Ancients", "Veteran Victor", "Aspect Warrior", "Angel of Death", "A proper Waaagh!", "Great Devourer", "Hail the Champion", "Master of the Apothecarion", "Winning rush", "Flawless victory", "Red Ones Go Fastah!", "Crush the Enemy", "The Warboss", "The Avatar of Khaine", "Chaos Lord", "Blood God", "Plague Father", "Bringer of Change", "Chaos Undivided", "King of the Hill", "Manipulator", "Overlord", "Usurper", "The Emperor's Justice", "The Enemy Exposed", "The Challenge Answered", "Enemy of Chaos", "Conqueror of Chaos", "Bane of Chaos", "End of Chaos", "Common Foe", "Duty is its own Reward", "Bad Example", "Relentless", "Forbidden Knowledge", "Purist", "Domination", "Taint Your Wagon"];

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
