import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/beat-hazard.js";

test("the Beat Hazard guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "beat-hazard-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "beat-hazard");

});

test("the Beat Hazard guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Score, Streak & Boss Feats",
            "Ranks, Playtime & Score Milestones",
            "Perks, Difficulty & Power-Up Kills",
            "Modes & Boss Rush",
            "Shadow Mission DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Beat Hazard achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Perfect", "Don't Panic", "x100", "Boss Slayer", "Brutal Boss Kill", "Pwnage", "A Real Dare Devil", "Go Platinum", "1st Track Cleared", "25!", "50!", "100!", "The First Step", "Half Way There", "Elite!", "The First Hour", "High 5", "Veteran", "Millionare", "Muti Millionare", "Dude of Hazard", "I'm Just Starting", "Don't Stop Me Now", "Coming Through!", "Survival Champion!", "Perks!", "Perk MAXED", "Mad MAXED", "Cash Grab", "Completely Insane", "Tough Guy", "Death By A Thousand Cuts", "Death Star", "Untouchable", "Ultra Beam of Death", "Reflection", "Cool Tracks!", "Music Tour", "A Real Mine Sweeper", "Tug of War", "Boss Dance", "Boss King", "Striptease", "Survive Christmas 5", "Survive Christmas 10", "Survive Christmas 15", "Survive Christmas 20", "Razorburn Shadow Mission", "Dragon Fire Shadow Mission", "The Collector Shadow Mission", "Speedy Shadow Mission", "Slick Shadow Mission", "Mosquito Shadow Mission", "Death Blossom Shadow Mission", "Juggernaut Shadow Mission", "Star Runner Shadow Mission", "Shadow Rank Rookie", "Shadow Rank Operative", "Shadow Rank Covert Agent", "Shadow Rank Shadow Officer", "Shadow Rank Shadow Captain", "Shadow Rank Shadow Commander", "Shadow Rank Shadow Force Elite"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
