import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/quake-live.js";

test("the Quake Live guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "quake-live-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "quake-live");

});

test("the Quake Live guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Training & First Steps",
            "Frag Feats & Weapon Kills",
            "Medals & Mode Feats",
            "CTF, Match Milestones & Grand Totals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Quake Live achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Testing One..Two..", "Victory", "Hall Monitor", "Crash Test", "Elevate Beginner", "Elevate Adept", "Elevate Expert", "Accelerate Beginner", "Accelerate Adept", "Accelerate Expert", "Raptor", "Speed Kills", "Psychic", "First Frag", "Hat Trick", "Aim Bot", "Plus One", "First Taste", "Camper", "Overkill", "Bandit", "Killjoy", "Brawler", "Jesse James", "Air Hammer", "Here Goes Nothing", "Nade Spam", "Full House", "Hooked", "Last Hope", "Punch Out", "Smack Down", "Assassin", "Guardian", "Evil Eye", "Missed Opportunity", "Rocket Man", "Fear Me", "Pull", "Big Time", "Point Denied", "Resource Hog", "Trifecta", "Head Hunter", "Sucker Punch", "WTF Was That", "Miracle Maker", "2 in 2", "Fight Club", "Midair", "Wicked", "Clutch", "Ninja Cap", "Prize Fighter", "MVP", "Color Guard", "Sidekick", "Vadri'gar"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
