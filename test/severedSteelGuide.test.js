import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/severed-steel.js";

test("the Severed Steel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "severed-steel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "severed-steel");

});

test("the Severed Steel guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Firefight",
            "Campaign Challenges",
            "Bonus Campaigns, Rogue Steel & Firefight 2.0",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Severed Steel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["50 HEADSHOTS", "100 KILLS", "FINISHED CHAPTER 1", "FINISHED CHAPTER 2", "FINISHED CHAPTER 3", "FINISHED CHAPTER 4", "FINISH CHAPTER 5", "FINISH CHAPTER 6", "FIREFIGHT LEVEL 10", "FIREFIGHT LEVEL 20", "FIREFIGHT LEVEL 30", "FIREFIGHT LEVEL 40", "FIREFIGHT LEVEL 50", "TIME PARADOX", "COMPLIMENTS TO THE CHEF", "PAIN TRAIN", "OFF THE HINGES", "OVERCLOCKED", "REMEMBER THE ARMORY", "HEY THATS CHEATING", "FIRE IN THE HOLE", "HUGE SUCCESS", "WARRIOR IN A GARDEN", "SAVOR THE MOMENT", "NEW GAME PLUS", "FIREFIGHT LEVEL 60", "FIREFIGHT LEVEL 70", "FIREFIGHT LEVEL 80", "OUT OF ORDER", "CATHARTIC ESCAPISM", "PACEMAKER", "BUT WHY?", "SCIENCE AND INDUSTRY", "HOLOGRAM SUMMER", "1000 KILLS", "200 HEADSHOTS", "COMMAND - [EXIST]", "SOUL - HORIZONS", "CHURCH", "INPUT - [QUERY]", "ICARUS", "CHALET", "PARTY HARD", "FIRST BLOOD", "FRESH", "KITTED OUT", "THE COLLECTOR", "THE GAMBLER", "ON THE EDGE", "5 RUNS", "10 RUNS", "20 RUNS", "S RANK", "S RANK X 5", "S RANK X 15", "S RANK X 30", "MIRRORED"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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
