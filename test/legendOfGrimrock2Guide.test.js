import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/legend-of-grimrock-2.js";

test("the Legend of Grimrock 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "legend-of-grimrock-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "legend-of-grimrock-2");

});

test("the Legend of Grimrock 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion, Difficulty & Combat",
            "Secrets, Treasures & Items",
            "Bosses & Areas",
            "Challenge Feats & Ironman",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Legend of Grimrock 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Island Master", "Hard Boiled", "Doin’ It Old School", "Backstabber", "Monster Killer", "Swordsman", "Marksman", "Specialist", "Go the Extra Mile", "Holy Diver", "Apprentice Wizard", "Master Wizard", "Archmage", "Sage", "Apprentice Alchemist", "Master Alchemist", "Identity Crisis", "Secret Spotter", "Secret Sniffer", "Secret Searcher", "Seeker of Secrets", "Booty Addict", "Treasure Hunter", "Skull Snatcher", "Elementary", "Master of the Elements", "Chop Chop", "Piece of the Pie", "Watcher of the Skies", "Rodman", "Golden Boy", "Expert", "Guru", "Explorer", "Cartographer", "I Have the Power!", "Like a Shadow", "Shiniest Knight of Them All", "Hard as a Rock", "Extreme Gardening", "Having a Gneiss Time", "Pest Control", "Fumigation", "Rest in Peace", "Dragon Slayer", "Enlightenment", "Code Cracker", "Snake Charmer", "Hallowed Ground", "Castle Crasher", "Mine Sweeper", "Gotta Go Fast", "Full Monty", "Gluttony", "Unstoppable", "Turn off the Heat", "Relic", "Fist Fighter", "Telefragged", "Insane Ironman"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
