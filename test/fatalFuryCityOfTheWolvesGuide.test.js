import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fatal-fury-city-of-the-wolves.js";

test("the FATAL FURY: City of the Wolves guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fatal-fury-city-of-the-wolves-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fatal-fury-city-of-the-wolves");

});

test("the FATAL FURY: City of the Wolves guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Meta & Core Modes",
            "Survival, Online & Extras",
            "Hidden Mastery & South Town+ DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official FATAL FURY: City of the Wolves achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["City of the Wolves", "Gonna take you for a ride!", "Well done! I commend you!", "Keep up the good work, partner!", "I'm the one who decides my fate!", "Let's make it a clean fight.", "I am invincible!", "You're really something!", "Not bad for a rookie.", "Can you comprehend that?", "Heh heh! The hard work's paying off!", "Here we go! I'm jumping in!", "Hnnnn...", "Okay... I can do this. Yeah.", "Gaahahaha! How do ya like THAT?!", "Okay! Time to get busy!", "I'll rip you to shreds!", "YEEAAAAAAH!", "Just stick with me!", "Try to keep up, all right!", "Hey, you there!", "Hmph... Good work.", "Viva the Lilien Knights!", "My turn, huh? I'm ready for action!", "Hey, come on!", "Anchors up?", "I know all the cool spots.", "It's a bad day to be you.", "It's not enough... I need more!", "Farewell.", "The ladies are gonna love this!", "Well, aren't you a cutie!", "I'll keep this to remind me of you!", "I must ask... Will you remain by my side?", "Thank you.", "Begone, weakling!", "[EOST] King of South Town", "[EOST] South Town Specialist", "[EOST] Instructor of Kyokugen Karate", "[EOST] Yearning for Supremacy", "[EOST] Yearning for Secrets", "[EOST] Yearning for Strength"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
