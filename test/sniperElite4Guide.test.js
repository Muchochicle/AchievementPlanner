import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-4.js";

test("the Sniper Elite 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-4");

});

test("the Sniper Elite 4 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions & Overwatch",
            "Weapon Mastery & Kill Milestones",
            "Difficulty Clears & Marksmanship Feats",
            "Secondary Objectives, Collectibles & Ranks",
            "DLC: Target Fuhrer",
            "DLC: Deathstorm (Inception, Infiltration, Obliteration)",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official Sniper Elite 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The end of the beginning", "We shall fight on the beaches", "No compromise is possible", "Set Europe ablaze!", "We shall not fail or falter", "Never, never, never give up", "Plans are nothing; planning is everything", "Success is not final", "Compounding Your Success", "Train, Set and Match", "A Most Singular Expert", "The Pistol Pro", "The Secondary Specialist", "Rockin' the Rifle", "I See You!", "Everything by Halves", "Following Orders", "Keeping your Distance", "Ambush King", "Are You Insane?", "The Real Deal", "The Masterful Marksman", "Mission Possible", "The Nutcracker - Sweet!", "The Organ Grinder", "Dirty Tactics", "Demolition Fan", "Fire and Brimstone", "Sniper Interrupted", "The Path of Most Resistance", "Mother knows best", "Weaver's Warrior", "Challenge Accepted", "Variety is the Spice of Death", "Silent But Deadly", "Still Ain't Got Time to Bleed", "On Yer Head, Son", "My Rifle is My Best Friend", "The Collector", "Master-At-Arms", "A Bird in the Hand...", "Greatest Hits", "Dogface", "Jarhead", "Veteran", "Gotta Cap 'em All", "Survival of the Fittest", "Competitive Nature", "Channel Changer", "The Best of the Best of the Best", "Albert Hall", "Hot Pot", "Minesweeper", "STRIKE!!", "The Eagle Has Landed", "Total War", "Down Periscope", "0 Days Without Incident", "Silent but Violent", "Base Desires", "Final Reckoning", "Deja View to a Kill", "Shore Leave", "All Inclusive", "Karl Shot First", "Save Keys to Open Doors", "Knife to a Gun Fight", "Heads Up", "King of the World", "Cipher Elite", "Full Marks", "Faust of Fury", "Debriefed", "Fish-in-a-Barrel", "Read This!", "Untouchable", "Storm Chaser", "Atomic", "Ghost Town", "I Love Science", "Saving Private Reiner", "Fingers off Triggers", "Overkill", "You know you're REALLY insane, right?", "Better than the Best"];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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
