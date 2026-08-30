import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/watch-dogs.js";

test("the Watch Dogs guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "watch-dogs-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "watch-dogs");

});

test("the Watch Dogs guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Acts & Chicago Activities",
            "Combat, Chase & Skill Feats",
            "Investigations, Collectibles & Online",
            "Bad Blood (T-Bone DLC)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Watch Dogs achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hello World", "End of Line", "Basest Base", "They Call Him The Vigilante", "Peephole", "Road Rage", "Enforcer", "Family Man", "Who Is Raymond Kenney?", "One Down, One to Go", "Vengeance", "Log Off", "Hard Crash", "Communication Fail", "Bookmarked", "Power Cycle", "Magic Smoke", "Escape Loop", "Free Radical", "White Rabbit Object", "Scanproof", "Hardware Fail", "Black Hat Trick", "Revoking Client Privileges", "Saturday Night Special", "Sanity Check", "Read-only", "Darkness Looms", "Geolocated", "Disk Space Full", "Social Lubricant", "Hackification", "Piggyback", "Superhighway", "System Mangler", "Stealth Cookie", "Freeware", "Traced", "Clear Signals", "T-Bone: Friends in Need", "T-Bone: No Easy Fix", "T-Bone: Pest Control", "T-Bone: Mob Ruled", "T-Bone: Second Amendment", "T-Bone: Unfixable", "T-Bone: Full Circuit", "T-Bone: Tag Team", "T-Bone: Looking For Trouble", "T-Bone: Negative Eugenics"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
