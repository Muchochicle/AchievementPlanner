import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ashes-of-the-singularity-escalation.js";

test("the Ashes of the Singularity: Escalation guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ashes-of-the-singularity-escalation-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ashes-of-the-singularity-escalation");

});

test("the Ashes of the Singularity: Escalation guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Multiplayer & Skirmish Feats",
            "Campaigns & Core Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Ashes of the Singularity: Escalation achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fight the Future", "For Humanity!", "Real Ultimate Power", "Total Conversion", "This World is Mine", "No Further, Expansionist Pig-Dogs", "Come Get Some", "Alas, Poor (Space) Yorick", "Band of Tactically Compatible Networked Intelligences", "My Kingdom For A Suitably Entangled Set of Subatomic Particles", "Don't Hurt Me", "Good Sport", "Seeing Stars", "The Final Countdown", "Mo' Metal, Mo' Problems", "Fitter. Happier. More Productive", "Paranoid Android", "Infinitely Improbable", "A Quality All Its Own", "There Are Many Like It, But This One Is Mine", "Probably Send These At The Other Guy's Nexus", "A Little Help Down Here?", "Total Recall", "Not Too Proud", "Basically Like Worf And Chewbacca Fighting Back To Back", "Master of the Singularity", "Hell from Above", "This Splinter is No Master", "Brainwhale!", "Artillery! Artillery! Uber Alles", "My Constructs Blot Out the Sun", "I Dread Very Little Indeed", "She's Really Incurred My Wrath", "Wait, Don't They Eat People There?", "Can I Play Now, Daddy?", "Beat The Turinium Test", "All I Do is Win", "Strike Force Omega", "Big Brother", "Loot Crate", "Renegade Rumble", "Love and Hate", "Sword and shield", "Betelgeuse, Betelgeuse, Betelgeuse!", "Hitting it where it hurts", "Harbinger of Doom", "Six on one, sounds fair to me", "Look at all of the wonderful toys", "Divided and conquered", "It's a mad, mad world", "Biting the hand that fed you", "It's new and improved!", "Over ten thousand!", "Glowing Green"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
