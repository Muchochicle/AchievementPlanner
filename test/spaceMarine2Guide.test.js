import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/space-marine-2.js";

test("the Space Marine 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "space-marine-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "space-marine-2");

});

test("the Space Marine 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Progression & Kill Milestones",
            "Operations: Class Mastery & Combat Challenges",
            "Eternal War (PvP) & Final Trophy",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Space Marine 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Die Is Cast", "Unleash the Cannon", "Crude but Effective", "Chaos All Along", "Target Acquired", "Vital Asset", "Sic Semper Tyrannis", "Voice in the Dark", "Enemy Revealed", "Douse the Flames", "Resurrection", "My Face Is My Shield", "Break of Dawn", "Into the Abyss", "I'll Be Watching You", "Purge Them All", "The Art of Dismemberment", "Data Mining", "Furious Retribution", "Outbound Payload", "Valour Crest", "Strategic Specialty", "Sharpest Edge", "Strongest Shot", "Bespoke", "Principia Imperialis", "A Blight to Be Purged", "Why Is It Always You Three?", "Master of Arsenal", "Dead Center", "Immovable Object", "Thunderous Impact", "Guardian's Might", "Lightning Strike", "Unhand My Brother!", "One Ugly Xenos", "An End to Heresy", "Know No Fear", "Field of Battle", "Silence", "Xenos Exterminator", "The Thousand Dead Sons", "Still a True Son of the Emperor", "Glorious Victory", "Tactical Genius", "War Machine", "Unwavering Faith", "Dominator", "Merciless", "Defender of Humanity"];

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
