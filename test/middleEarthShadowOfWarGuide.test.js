import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/middle-earth-shadow-of-war.js";

test("the Shadow of War guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "middle-earth-shadow-of-war-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "middle-earth-shadow-of-war");

});

test("the Shadow of War guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Nemesis, War & Gear",
            "Story & Questlines",
            "Nemesis-System Feats",
            "DLC Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 72-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /72 Steam achievements/);

});

test("every one of the 72 official Shadow of War achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Forger", "Rule of Three", "Best Defense", "Fit for War", "Hostile Takeover", "Vandal", "Speak Friend and Enter", "Bound by Blood", "Avenged", "Master Forger", "Promise Keeper", "Death is not the End", "Dismantled", "Banished", "Brought to Heel", "Lord of Horror", "Finished Tales", "The Web Revealed", "What Once Was Lost", "First Steps", "Peace in Death", "Undeath Defeats Undeath", "Fall and Rise", "No Orc Lives Forever", "Forged by War", "Purge", "Stalemate is Victory", "The Operative", "Such Great Heights", "No Orc Left Behind", "Better Luck Next Time", "It Came From Within", "Power Couple", "Everything is Permitted", "Life of the Party\t", "If You Can't Beat Them", "I Like to Watch", "Second Age Warrior", "Rough Rider", "Wild Things", "Trolling", "Vertical Mobility", "Blood on Blood", "Nemesis", "Feed the Beasts", "Bad Boss", "The Stuff of Legend", "Follower Perks", "Overkill", "Headhunter", "For Gondor", "Banish the Darkness", "Flash Mob", "Banished Ambition", "Scorched Earth", "Holding the Line", "Problem Solved", "The Time has Come", "Elven Conquest", "I See the Light", "Complete in Defeat", "Unlikely Alliances", "No Way Out", "Belly of the Beast", "Festival of Blood", "Point of No Return", "Reap What You Sow", "Baranor the Conqueror", "Gauntlet", "Bombardier", "Eastern Front", "Shadows of the Sand"];

    assert.strictEqual(officialAchievementNames.length, 72, "sanity check on this test's own reference list");

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
