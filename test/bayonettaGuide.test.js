import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bayonetta.js";

test("the Bayonetta guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bayonetta-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bayonetta");

});

test("the Bayonetta guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Difficulty",
            "Combat Techniques",
            "Collectibles & Set-Pieces",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Bayonetta achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Primer In The Magical Arts", "Fortitudo, Bringer Of Flame", "Temperantia, Manipulator Of Wind", "Iustitia, Giver Of Life", "Sapientia, Controller Of Seas", "Master Of The Heavens", "Taste Of The Witching Hour", "Chapters 1-4 (Normal)", "Chapters 5-7 (Normal)", "Chapters 8-11 (Normal)", "Chapters 12-13 (Normal)", "Chapters 14-Epilogue (Normal)", "Umbra Witch", "New Testament: Ch. 1-4 (Hard)", "New Testament: Ch. 5-7 (Hard)", "New Testament: Ch. 8-11 (Hard)", "New Testament: Ch. 12-13 (Hard)", "New Testament: Close The Book", "Umbra Elder", "Legendary Dark Witch", "I'm A Bit... I Mean Witch.", "Feels Good, Doesn't It?", "You Want To Touch Me?", "Nice Try", "Platinum!", "Double, Double, Toil And Trouble", "Tread Not So Softly", "Nice And Relaxed", "Touch And It Will Hurt", "Touch And It Will REALLY Hurt", "Come Here, Little Boy", "Wicked Weaver", "Wicked Weave Master", "The Deepest Cut", "Higher And Higher", "The Ice Witch", "Seeker Of Magic", "Commander Of Magic", "Record Collector", "Record Fanatic", "Treasure Collector", "Treasure Fanatic", "The Path To The Heavens", "Angel May Cry", "Angel Slayer", "Truth In Its Purest Form", "Naughty Tentacles", "A Mother's Love", "Fire The Afterburners", "Just In The Nick Of Time"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
