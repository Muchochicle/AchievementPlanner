import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/helldivers-dive-harder.js";

test("the Helldivers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "helldivers-dive-harder-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "helldivers-dive-harder");

});

test("the Helldivers guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Feats & Kill Counts",
            "Mission Challenges & Difficulty Feats",
            "Secrets, Enemy Feats & Grinds",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Helldivers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hell dive", "Making mountains out of molehills", "Peace and prosperity reigns again", "Royal Roadkill", "A shining inspiration to us all!", "The element of Supplies", "Defender of Humanity", "Now that is what I would call a multi-kill!", "No man left behind", "Never give up, never surrender", "Back in time for dinner", "A molehill of corpses", "Next time we meet, I'll probably have to salute you", "Spreading Managed Democracy", "Liberating the countryside", "Solid Stealth Execution", "Don't you just hate escort missions?", "They call me Mr. Danmaku", "It's raining Hell, hallelujah!", "80% of the time, I hit every time", "Brothers in Arms", "Which seat can I take?", "You're it until you die or I find someone better", "The Helldiver's new clothes", "Join the Army they said", "Meet interesting people they said", "See the Galaxy they said", "That which doesn't kill you, scars you for life", "Dancing Queen", "When the wrong tools do the job, are they still wrong?", "Why wasn't this standard issue?", "Make Frank kill a Tank!", "I'm no Zoologist, but how do you classify a 20 foot tentacle?", "Stick it to the Man!", "Nothing is hotter than a cup of Liber-Tea", "Knock-knock, who's there? DEMOCRACY!", "Add that one to the fossil record!", "Resisting democracy is futile!", "It didn't SEE that coming!"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
