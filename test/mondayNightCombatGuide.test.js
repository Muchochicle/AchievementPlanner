import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monday-night-combat.js";

test("the Monday Night Combat guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monday-night-combat-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monday-night-combat");

});

test("the Monday Night Combat guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Blitz Mode & Crossfire Feats",
            "Weapon Mastery, Highlights & Cumulative",
            "Turret & Bot Kill Counts",
            "Tutorial & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Monday Night Combat achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Exhibitor", "Sacker", "Hot Streak", "Seasoned Veteran", "All Star", "Outta My House!", "Grappler", "Flapjack Master", "MVP", "Elusive", "Caught 'em Nappin'", "3-fer", "Ground Zero", "All Time Great", "Uber Streak", "Center of Attention", "The Draw", "Keep 'Em Down", "Red Hot", "Drop The Boom", "Ninja", "Bacon Hunter", "Over 9000", "Team Leader", "Team Player", "Strike It XL", "Head Crab", "Humiliation", "Spin N Juice", "I Got Candy!", "Overdose", "Ringouts", "Get Out Of Here", "Pew Pew", "Stand N Deliver", "Speed Kills", "Into The Breach", "Break The Armor", "Hell Mary", "Global Warming", "Big Break", "House Wins", "Bzzz", "Thrown Out", "Lich", "G's", "Ground Rule", "Grand Prize", "Rookie", "All Star Sacker", "Bayheimer"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
