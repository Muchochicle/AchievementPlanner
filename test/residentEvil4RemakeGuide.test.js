import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-4-remake.js";

test("the Resident Evil 4 (2023) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-4-remake-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-4-remake");

});

test("the Resident Evil 4 (2023) guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Bosses",
            "Combat & the Merchant",
            "Challenge Runs & Ranks",
            "Treasures, Weapons & the Shooting Range",
            "Separate Ways",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Resident Evil 4 (2023) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Knife Basics", "My Preferred Piece", "A Masterpiece", "Nice One, Stranger!", "Talk About Near-Death Experience!",
        "Revolt Against the Revolting", "Harpoon Hurler", "Grilled Big Cheese", "Wave Goodbye, Right Hand", "No Thanks, Bro!",
        "You Used to Be a Good Guy", "You're Small Time!", "Shield Your Eyes", "Never Heard It Coming", "Two Bugs, One Stone",
        "You Talk Too Much!", "Overkill", "Hope You Like Thrill Rides!", "Capacity Compliance", "Smooth Escape",
        "Astute Appraiser", "Bandit", "Burglar", "Raider", "Gun Fanatic",
        "Jack of All Trades", "Revolution Wind-up", "Promising Agent", "Mission Accomplished S+", "Proficient Agent",
        "S+ Rank Investigator", "Peerless Agent", "Sprinter", "Frugalist", "Minimalist",
        "Silent Stranger", "Amateur Shooter", "Real Deadeye", "Trick Shot", "Giant Slayer",
        "\"It\" Kept You Busy", "Had Enough of Preachers", "Capable Operative", "Skilled Agent", "The Perfect Mission",
        "Ada the \"S+\"py"
    ];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
