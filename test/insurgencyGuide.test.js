import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/insurgency.js";

test("the Insurgency guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "insurgency-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "insurgency");

});

test("the Insurgency guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Objective Basics",
            "Cooperative Mode Mirrors",
            "Training & Early Checkpoint Missions",
            "War Hero, Hero Cap & Hunt Missions",
            "Survival, Outpost & Endgame",
            "Remaining Hunt & Checkpoint Missions",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 100-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /100 Steam achievements/);

});

test("every one of the 100 official Insurgency achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Hurt Locker", "Bodycount I", "Bodycount II", "Bodycount X", "First Blood ",
        "First Blood 2: Blade Reckoning", "Silent But Deadly", "Air Tight", "All In", "Head Hunter",
        "Ground Control I", "Bodycount III", "Bodycount IV", "Bodycount V", "Bodycount VI",
        "Bodycount VII", "Bodycount VIII", "Bodycount IX", "Ground Control II", "Ground Control III",
        "Ground Control IV", "Ground Control V", "Ground Control VI", "Hurt Locker (Coop)", "First Blood (Coop)",
        "First Blood 2: Blade Reckoning (Coop)", "Silent But Deadly (Coop)", "All In (Coop)", "Head Hunter (Coop)", "Bodycount I (Coop)",
        "Bodycount II (Coop)", "Bodycount III (Coop)", "Bodycount IV (Coop)", "Bodycount V (Coop)", "Bodycount VI (Coop)",
        "Bodycount VII (Coop)", "Bodycount VIII (Coop)", "Bodycount IX (Coop)", "Bodycount X (Coop)", "Ground Control I (Coop)",
        "Ground Control II (Coop)", "Ground Control III (Coop)", "Ground Control IV (Coop)", "Ground Control V (Coop)", "Ground Control VI (Coop)",
        "Recruited", "Aced It!", "Decisive Victory: Buhriz", "Decisive Victory: Contact", "Decisive Victory: District",
        "Decisive Victory: Heights", "Decisive Victory: Ministry", "Decisive Victory: Siege", "Decisive Victory: Market", "Decisive Victory: Complete",
        "Decisive Victory: Revolt", "Decisive Victory: Sinjar", "War Hero I", "War Hero II", "War Hero III",
        "War Hero IV", "Hero Cap I", "Hero Cap II", "Hero Cap III", "Hero Cap IV",
        "Clean Sweep: Contact", "Clean Sweep: District", "Clean Sweep: Heights", "Clean Sweep: Ministry", "Clean Sweep: Uprising",
        "Clean Sweep: Complete", "Clean Sweep: Panj", "Survivalist I", "Survivalist II", "Survivalist III",
        "Survivalist IV", "Survivalist V", "ODA 420", "Stronghold I", "Stronghold II",
        "Stronghold III", "Stronghold IV", "Stronghold V", "Humble Bundle", "Clean Sweep: Buhriz",
        "Clean Sweep: Dry Canal", "Clean Sweep: Embassy", "Clean Sweep: Kandagal", "Clean Sweep: Market", "Clean Sweep: Peak",
        "Clean Sweep: Revolt", "Clean Sweep: Siege", "Clean Sweep: Sinjar", "Clean Sweep: Station", "Clean Sweep: Tell",
        "Clean Sweep: Verticality", "Decisive Victory: Dry Canal", "Decisive Victory: Embassy", "Decisive Victory: Tell", "Decisive Victory: Verticality",
    ];

    assert.strictEqual(officialAchievementNames.length, 100, "sanity check on this test's own reference list");

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
