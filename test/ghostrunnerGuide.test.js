import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ghostrunner.js";

test("the Ghostrunner guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ghostrunner-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ghostrunner");

});

test("the Ghostrunner guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Combat & Movement Feats",
            "Collectibles & Completion",
            "Project_Hel DLC & No-Restriction Levels",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Ghostrunner achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "About Adam", "Artificial Selection", "Back To Hell", "Can't Run Can't Hide", "Dead In The Air",
        "Fine Addition", "GR Project Complete", "Hit Me If You Can", "Homerunner", "I Call It Luck",
        "Improvise Adapt Overrun", "Junkrunner", "Longrunner", "More Than Human", "Control Freak",
        "One Man's Trash", "Out Of Order", "Perfection", "Preemptive Strike", "Push It To The Limit",
        "Running Out Of Breath", "Running Wild", "Strike", "Sword Runner", "Sword To A Gunfight",
        "Triple A", "Unstoppable Force", "Upgrades Not Mandatory", "Wallrunner", "Wave Of Mutilation",
        "Where Are My Keys", "Why Not Both", "R Is For Running", "Finish Line", "Where He Stood",
        "Scrapped", "Everyone Needs A Hobby", "Obedient Machine", "One Of Those Days", "Just A Man",
        "Strafing Run", "Legacy Drivers", "Up Close And Personal", "Sticks And Stones", "A Grade"
    ];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
