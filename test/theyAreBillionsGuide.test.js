import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/they-are-billions.js";

test("the They Are Billions guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "they-are-billions-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "they-are-billions");

});

test("the They Are Billions guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill & Population Milestones",
            "Survival & Campaign Wins",
            "Challenge Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official They Are Billions achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Infected Killer Level 1", "Infected Killer Level 2", "Infected Killer Level 3", "Infected Killer Level 4", "Infected Killer Level 5",
        "Infected Killer Level 6", "Infected Killer Level 7", "Infected Killer Level 8", "Infected Killer Level 9", "Infected Killer Level 10",
        "Colony Mayor Level 1", "Colony Mayor Level 2", "Colony Mayor Level 3", "Colony Mayor Level 4", "Survivor Level 1",
        "Survivor Level 2", "Survivor Level 3", "Survivor Level 4", "Giant Slayer Level 1", "Giant Slayer Level 2",
        "Giant Slayer Level 3", "The Most Wonderful Colony", "Open Mind", "Soldier Wrath", "Ranger Revenge",
        "Sniper Slaughter", "No Towers Needed", "Peaceful", "Unstoppable ", "Best General",
        "For Quintus! Level 1", "For Quintus! Level 2", "For Quintus! Level 3", "For Quintus! Level 4",
    ];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
