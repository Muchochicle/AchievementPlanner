import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hi-fi-rush.js";

test("the Hi-Fi Rush guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hi-fi-rush-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hi-fi-rush");

});

test("the Hi-Fi Rush guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Bosses & Difficulty Runs",
            "SPECTRA Mystery & Upgrades",
            "Combat Mastery & Hideout Secrets",
            "Training & Arcade Update",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 71-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /71 Steam achievements/);

});

test("every one of the 71 official Hi-Fi Rush achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Start with a bang!", "Cream of the Crop", "This will cost you big time", "The Negotiator", "Headliner", "Time to pay up!", "Who's the boss now?", "Easy Listening", "Well that was a rush!", "I think I deserve some praise, here!", "And the crowd goes wild!", "Didn't skip a beat!", "Problem solved... wait, what?", "I can't see this ever being a problem again", "Thanks for the free chip, Peppermint!", "Chip-tuned", "I play my own way!", "Whoa! There's ANOTHER health bar!?", "I think that's enough health for now", "Fully Powered Up!", "I have to read these things?", "I have to read ALL of these things?", "Feeling the beat!", "Beat-hit mania", "You got this, Peppermint?", "You must like calling me in, Chai", "Z-shielding's got nothing on us!", "I think I found your calling, Macaron", "Out in a puff of smoke", "This is a breeze!", "Perfect Parry", "Perfecter Parry-er!", "Uh, they were broken when I got here", "That's a lot of junk metal…", "OK, well THEY came after ME!", "Kissing the sky!", "We're Jammin'", "I'm not done with you yet", "First we parry, then we counter", "Now this is how you fight like a team!", "My Ultimate Setlist", "I look cool. But I can look COOLER.", "What a journey it was...", "This was... not what I expected.", "There's such a thing as TOO helpful", "Have we met before?", "Who put gears in there?", "Alright, that felt AWESOME!", "I hit things with a guitar really well.", "I'm untouchable!", "You can pet the cat!", "Wanna hear my playlist?", "Does that say weakpoint?", "I told you I'd be fine, Peppermint!", "You ever parry a volcano?", "I am a good person who likes to help", "I'm trying to FOCUS HERE!", "With our powers combined…and to the rhythm…", "I saw all those hits coming a measure away!", "Check out my moves!", "OK, I THINK I know what I'm doing now", "NOW we got a kickass hideout!", "Call me Turbo Chai", "Choose your own adventure", "It'll do, CNMN", "Please don't make this awkward", "That was just EVIL", "New bad guys? No problem!", "It was all for this", "Voices from within", "Low budget finish"];

    assert.strictEqual(officialAchievementNames.length, 71, "sanity check on this test's own reference list");

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
