import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-finals.js";

test("the THE FINALS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-finals-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-finals");

});

test("the THE FINALS guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Steps & Progression",
            "Challenges",
            "Trick Shots & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official THE FINALS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Participation Ribbon", "Initial Deposit", "Med Student", "Returning Contestant", "Green Light", "Mass Medium", "Play The Heavy", "Rising Star", "Life Of The Party", "Savings Specialist", "Lesson Learner", "Attending Physician", "Demolition Expert", "Dead Shot", "Strong Arm", "Gadget Guru", "Defense Devotee", "Resident Doctor", "Light Years", "Medium Rare", "Heavy Hand", "Deep Pockets", "Show Stopper", "Stop Payment", "Asset Protection", "Last-minute Gift", "Buzzer Beater", "Highway Patrol", "Hot Shot", "Just Like Scotty", "Bombouncer", "Pressure Prize", "Dodgeball Champion", "Clip And Slide", "Multitasker", "Busy Body", "Crowd Pleaser", "Pyro Prodigy", "Toxic Tact", "Golden Bullet", "Fatal Florist", "Charitable Donation", "Field Goal", "Showboaster", "Butter Fingers", "Sky Bridge Saboteur", "Artful Expressionist", "Space Rock Skipper", "Speed Run", "Blast Caster"];

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
