import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/scp-secret-laboratory.js";

test("the SCP: Secret Laboratory guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "scp-secret-laboratory-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "scp-secret-laboratory");

});

test("the SCP: Secret Laboratory guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "SCP Roleplay Kills & Feats",
            "Team Roles & Objectives",
            "Combat & Survival Feats",
            "Advanced Techniques & Special Items",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official SCP: Secret Laboratory achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "My Cure Is Most Effective...", "Pacified", "Melancholy of Decay", "Don’t Blink", "Lights Out",
        "It's Always Left, Brothers!", "Access Granted", "We of Delta Command...", "Proceed With Caution", "Friendship",
        "For Science!", "Is This Thing On?", "Fire In The Hole!", "He’ll Be Back...", "Be Polite. Be Efficient.",
        "Executive Access", "Secure. Contain. Protect.", "T-Minus 90 seconds...", "Change in Command", "... You Thinking What I'm Thinking?",
        "They Are Just Resources...", "That was... close.", "If you want something done right...", "Walk It Off", "Anomalously Efficient",
        "Microwave Meal", "Happy Halloween!", "Merry Christmas!", "Escape Artist", "High on the Wings of Caffeine",
        "Crisis Averted", "Ha! I didn't even feel that!", "I'll Pass, Thanks", "Overcurrent", "Property of the Chaos Insurgency",
        "Overtime", "Rule Breaker", "Complete the Mission", "Army of One", "LMGG",
        "On Speaking Terms", "Hats Off to You!", "Amnestic Ambush", "Afterlife Communicator", "Signal Lost",
        "Hawkeye", "Think Fast!", "Trilateral Termination", "Mutually-Assured Destruction", "Undead Space Program",
        "Arizona Ranger", "Tooth and Nail",
    ];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
