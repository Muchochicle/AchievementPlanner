import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/my-summer-car.js";

test("the My Summer Car guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "my-summer-car-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "my-summer-car");

});

test("the My Summer Car guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Satsuma & Core Progression",
            "Distance, Death & Rally Feats",
            "Minigames, Milestones & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 77-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /77 Steam achievements/);

});

test("every one of the 77 official My Summer Car achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Party time", "Finnish wedding", "Rusting fast", "Full of crap", "Case solved", "Working man's Saturday", "Golden steam", "Dakar rally", "Poor people go away", "Thank you government", "You have a new friend!", "Pimped!", "Responsible citizen", "Money well spent", "Flying Finn", "First loser", "Sliding Swede", "Welcome to Finland", "A true hillbilly", "An idiot", "Jackpot!", "Magic portal", "It runs!", "Grand Theft Teimo", "Ultimate survivor", "And it is gone!", "I am coward", "Proud to be mortal", "Don't answer that call", "Jonne!", "Finnish Summer", "Yeast festival", "Total idiot & full idiot", "Greased rust", "Mr. Kilju", "Feel alive", "Finnish sisu!", "100 km", "1000 km", "Hannes Kolehmainen", "Can't stop smoking now...", "Smoking kills", "Darwin Award", "Methanol Man", "Philosophy Master", "Waving for victory", "PTSD", "Seek and you shall find", "Full stash", "You are the wall", "Wow, look at that Chopin there", "A cure for illness", "Gauntlet survivor", "Aiming like a pro", "Catch-A-Fish", "Grill master", "My finger slipped", "I am Santa Claus", "You reached 100 kg", "10000 km ", "Granny's little helper", "Thank you for playing!", "You have a computer!", "Too much power, too little skill", "Satsuma GT", "True Peräjärvi Dalton!", "Kahen kilon siika!", "Kiddy champ", "Reetipokeri Master", "Bad Guy", "Lottery winner", "Engine started!", "Kela-Taxi", "What a shock!", "1000 Strawberries!", "King of Tuning", "Heaven"];

    assert.strictEqual(officialAchievementNames.length, 77, "sanity check on this test's own reference list");

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
