import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/jurassic-world-evolution.js";

test("the Jurassic World Evolution guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "jurassic-world-evolution-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "jurassic-world-evolution");

});

test("the Jurassic World Evolution guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Islands, Reputation & Story Missions",
            "Dinosaurs, Skill Feats & Photography",
            "Challenge Mode & DLC Campaigns",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 73-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /73 Steam achievements/);

});

test("every one of the 73 official Jurassic World Evolution achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Not alone on this island", "Going to make a fortune with this place", "On this island there's no such thing as safe", "Thank God for Site B", "Spared no expense", "How did you do this?", "I don't understand this Luddite attitude", "Instinct that we can program", "Bigger. Louder. More Teeth.", "Using sophisticated techniques", "You got them eating out of your hand", "An aim not devoid of merit", "Shoot her!", "Tenacious", "It's all about control with you", "I think we're back in business", "You're the top minds", "Fill in the holes and complete the code", "I read your book", "You think that kind of automation is easy?", "Get a clear shot", "War is a part of nature", "Nobody move a muscle", "Shoooot heeer!", "I thought you failed your driver's test", "Must go faster", "Accept you are never actually in control", "Hold on to your butts!", "Life finds a way", "Nothing in Jurassic World is natural", "Now you're John Hammond", "Mommy's very angry", "Follow the screams!", "Clever girl", "My favorite when I was a kid", "A beautiful, but deadly addition", "A super-predator", "Is this even possible?", "Flocking this way", "Veggiesaurus", "That's no dinosaur", "Creation is an act of sheer will", "This is very dangerous territory", "Learning where she fits in the food chain", "Whatever you study, you also change", "A kind of biological preserve", "Look how it eats!", "Smarter than primates", "Where's the goat?", "Who's hungry?", "I hate being right all the time", "The essence of chaos", "Clocked at 32 mph", "Jurassic measures", "The Next Step", "Wounding tooth", "Shoot her...?", "We're just used to being the cat", "It can camouflage!", "You'll never look at birds the same way!", "Fast for a biped?", "Ratings Master", "A new home", "John Hammond's dream", "Green thumb", "Executive treatment", "Sharp focus", "OBJECTS IN MIRROR CLOSER THAN THEY APPEAR", "Ooh, aah, that's how it always starts", "It's a birdcage", "Return to Jurassic Park", "Ranger Danger", "You do plan to have dinosaurs, right?"];

    assert.strictEqual(officialAchievementNames.length, 73, "sanity check on this test's own reference list");

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
