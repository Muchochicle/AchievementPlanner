import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/max-payne-3.js";

test("the Max Payne 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "max-payne-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "max-payne-3");

});

test("the Max Payne 3 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Difficulty & Single-Player Feats",
            "Multiplayer, Collectibles & New York Minute",
            "DLC Map Packs & Dead Men Walking",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 67-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /67 Steam achievements/);

});

test("every one of the 67 official Max Payne 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Payne", "Maximum Payne", "Feel The Payne", "Payne In The Ass", "You Might Hurt Someone With That", "The Fear Of Losing It", "You Play, You Pay, You Bastard", "Past The Point Of No Return ", "A Few Hundred Bullets Back", "Part I Complete", "Part II Complete", "Part III Complete", "Along For The Ride", "Out The Window", "The One Eyed Man Is King", "That Old Familiar Feeling", "Amidst The Wreckage", "So Much For Being Subtle", "The Only Choice Given", "It Was Chaos And Luck", "It's Fear That Gives Men Wings", "Sometimes You Get Lucky", "The Road-Kill Behind Me", "Trouble Had Come To Me", "Something Wicked This Way Comes", "All Of The Above", "A License To Kill", "One Bullet At A Time", "With Practiced Bravado", "Colder Than The Devil's Heart", "A New York Minute", "Full Monty", "Payne Bringer", "Grave Robber ", "The Gambler", "Sweep", "Training Complete", "Deathmatch Challenge", "Man Of Many Faces", "Man Of Many Weapons", "Max Payne Invitational", "The Shadows Rushed Me", "You Push A Man Too Far", "An Echo Of The Past", "Sure Know How To Pick A Place", "Dearest Of All My Friends", "Air Ace", "Express Checkout", "Long Arm of the Law", "M4 Murder", "Keep Your Nose Clean", "Old School Moves", "Early Adopter", "WMD", "60 Seconds of Intimidation", "Long Arm of the Lawless", "Bar Brawler", "Ouch My Head", "Welcome Ashore", "Drinker's Revenge", "3 Blind Mice", "Sweaty Betty", "Betty Confetti", "Resisting Arrest", "Breaking and Entering", "It Looked Easy Enough", "Breaking the 4th"];

    assert.strictEqual(officialAchievementNames.length, 67, "sanity check on this test's own reference list");

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
