import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/instruments-of-destruction.js";

test("the Instruments of Destruction guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "instruments-of-destruction-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "instruments-of-destruction");

});

test("the Instruments of Destruction guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign: Missions & Challenges",
            "Build & Destroy Mode",
            "3-Star Completion & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Instruments of Destruction achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["JADE ISLANDS Complete in Campaign", "THE WASTELANDS Complete in Campaign", "BOULDER BAY Complete in Campaign", "FROZEN FRONTIERS Complete in Campaign", "SANDY HAVEN Complete in Campaign", "INFERNAL ISLES Complete in Campaign", "PARADISE COVE Complete in Campaign", "THE HIGHLANDS Complete in Campaign", "ROCKY RIDGE Complete in Campaign", "NO MAN'S LAND Complete in Campaign", "OUTER TERRITORIES Complete in Campaign", "JADE ISLANDS Challenges Complete in Campaign", "THE WASTELANDS Challenges Complete in Campaign", "BOULDER BAY Challenges Complete in Campaign", "FROZEN FRONTIERS Challenges Complete in Campaign", "SANDY HAVEN Challenges Complete in Campaign", "INFERNAL ISLES Challenges Complete in Campaign", "PARADISE COVE Challenges Complete in Campaign", "THE HIGHLANDS Challenges Complete in Campaign", "ROCKY RIDGE Challenges Complete in Campaign", "NO MAN'S LAND Challenges Complete in Campaign", "OUTER TERRITORIES Challenges Complete in Campaign", "PARADISE COVE Complete in Build & Destroy", "BOULDER BAY Complete in Build & Destroy", "INFERNAL ISLES Complete in Build & Destroy", "THE WASTELANDS Complete in Build & Destroy", "SANDY HAVEN Complete in Build & Destroy", "FROZEN FRONTIERS Complete in Build & Destroy", "JADE ISLANDS Complete in Build & Destroy", "OUTER TERRITORIES Complete in Build & Destroy", "PARADISE COVE Challenges Complete in Build & Destroy", "BOULDER BAY Challenges Complete in Build & Destroy", "INFERNAL ISLES Challenges Complete in Build & Destroy", "THE WASTELANDS Challenges Complete in Build & Destroy", "SANDY HAVEN Challenges Complete in Build & Destroy", "FROZEN FRONTIERS Challenges Complete in Build & Destroy", "JADE ISLANDS Challenges Complete in Build & Destroy", "OUTER TERRITORIES Challenges Complete in Build & Destroy", "All Campaign Missions Complete", "Campaign Challenges Complete", "All Build & Destroy Missions Complete", "Build & Destroy Challenges Complete", "Driver", "Mad Max", "Crystal Collector", "Total Destruction", "Close Call", "Workshop", "Nature Lover", "100% Club"];

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
