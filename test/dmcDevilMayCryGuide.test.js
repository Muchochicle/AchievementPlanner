import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dmc-devil-may-cry.js";

test("the DmC: Devil May Cry guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dmc-devil-may-cry-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dmc-devil-may-cry");

});

test("the DmC: Devil May Cry guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Weapons & Bosses",
            "Combat & Style Challenges",
            "Upgrades, Collectibles & Completion",
            "Difficulty Clears & Secret Missions",
            "Vergil's Downfall DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official DmC: Devil May Cry achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Time to go to work guys!", "Come on Puppy. Let's go!", "It's got to stay in the family", "Thing drives me crazy", "Only kind of gift worth giving", "Flock off, feather-face!", "This baby sure can pack a punch", "He's a demon too", "You are not a Human, are you?", "No talking!", "More than just a few sparks", "Whatever, Lady", "You're not going to shoot me", "It's time to finish this! ", "Cleaning up his Dad's mess", "The end? Don't bet on it", "Looks like it's your lucky day", "Every hero has a weakness", "It's only the rain", "A man with guts and honor", "Now my coat's all charred", "Where does the time go?", "For Tony Redgrave", "In the name of my father", "You'll never have her fire", "Impressive", "Bring it on!", "Looks like we have a winner", "Sensational!", "It's showtime. Come on!", "This is my kind of rain", "Absolutely crazy about it", "Let's rock, baby!", "You can't handle it", "Power... Give me more power!", "Dude, the show's over!", "Let's welcome chaos!", "And you are set free", "Fill your dark soul with light", "Keeps getting better and better", "Stylish!", "Too easy!", "Devils never cry", "This is what I live for!", "And welcome to Hell!", "Jackpot!", "This party's just getting crazy!", "One hell of a party!", "We have an uninvited guest", "You don't belong here", "Our souls are at odds brother", "I've come to retrieve my power", "Might controls everything", "I'll try it your way for once", "I need more power!", "This is the power of Sparda!", "Now I'm a little motivated!", "You're not worthy as my opponent"];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
