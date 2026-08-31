import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/attack-on-titan-2.js";

test("the Attack on Titan 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "attack-on-titan-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "attack-on-titan-2");

});

test("the Attack on Titan 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode & Prologue",
            "Scout Missions, Battle Ratings & Dire Eliminations",
            "Gallery, Levelling & ODM-Gear Combat Feats",
            "Town Life, Bonds & Facility Upgrades",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Attack on Titan 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We'll make a breakthrough eventually... And see what truth these Walls are hiding.", "Don't worry... Just keep training.", "This first step will be a big one for the human race.", "What is it that you see?", "What do you expect? The world is a cruel place.", "Live a life that you can be proud of.", "I'll wrap that around you as many times as you want.", "He was a soldier who fought to the very end.", "There's still so much I need to find out about the world.", "What must be done.", "I'll be the one to hunt those Titans to extinction!", "We've got a talented one here.", "If you don't fight, you can't win.", "It's huge! What the heck is it?", "I'm gonna destroy them! Every last one that's on this earth!", "We're always at an information disadvantage against the Titans.", "If you don't know about something, you just have to learn it.", "The outside world must be a hundred times bigger than inside the Walls!", "Hmm... Not bad...", "Sorry, buddy, but I'm just a natural.", "Devote your heart!", "This attack will be the final blow!", "I'm the deliverer of death! ", "I know we can win this if we work together!", "I'm just glad it didn't turn out any worse...", "I was able to control myself perfectly.", "More... Must kill more...", "My specialty is tearing through flesh.", "This is a true salute!", "This world has always been a living hell.", "It's great to have something you could put your life on the line for...", "Avoid unfavorable battles.", "No need to hold back.", "Don't be stupid. I've always been talkative.", "It's not so bad, being a goddess and all.", "You mind if I take that?", "As long as we keep fighting, we've still got a chance.", "Just shut your mouths and invest everything in me!", "No matter what you train in, it will serve humanity some day.", "Well, you see... It's just seething with rage!"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
