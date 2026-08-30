import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sanctum-2.js";

test("the Sanctum 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sanctum-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sanctum-2");

});

test("the Sanctum 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression, Ranks & Map Completion",
            "Skill Feats & Secret Areas",
            "Later Maps & Character Build Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Sanctum 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Humble Beginnings", "The Bas(e)ics", "The Best Defense is Offense", "Growing Stronger", "Halfway Awesome", "Hope Rides Alone", "Full-time Ass-kicker", "Hercules", "Total Badass", "Final Destination", "Team Player", "Game in a game", "Six Pack", "Coffee Stained", "McBirger's", "Balboa", "Norwegian Wood", "Moist", "Pliskeblaske", "Fiskeplaske", "Mr. Perfect", "One shot, one kill.", "Come at me bro!", "Honey Badger don't care", "Gibbs, gibbs everywhere", "Lab Rat", "Loekrise Kingdom", "Dark Secrets", "Titan", "Above and Beyond", "We don't go to Brightholme", "Slumdog Medicine", "Titan Slayer", "BOOM! Headshot", "Clean Kill", "Not the Bees!", "Freedom!", "The Last Stand", "Heavy Artillery", "LOOK MOM, IM FLYING", "I am SUPER ANGRY", "Sniper Skye", "ROBOTS, ROBOTS EVERYWHERE", "MLG noscope maximum skill", "Street Justice", "Angry working class", "Legolaser aimed shots", "Swedish police can't track this one", "Leaving Loek III", "Better late than never"];

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
