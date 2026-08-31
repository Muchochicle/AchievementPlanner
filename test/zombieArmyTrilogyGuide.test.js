import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/zombie-army-trilogy.js";

test("the Zombie Army Trilogy guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "zombie-army-trilogy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "zombie-army-trilogy");

});

test("the Zombie Army Trilogy guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Chapters",
            "Combat Feats & Secrets",
            "Horde Mode & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 68-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /68 Steam achievements/);

});

test("every one of the 68 official Zombie Army Trilogy achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Don't mention the Z word!", "Resurrection Day", "Play it Thule", "The pen is mightier than the sidearm", "No more room in Hell", "Hell on earth, that's it", "Into the fire", "Descent into Hell", "This is going to be a bumpy ride", "Code Red", "I think we'll start with a reign of terror", "You got rid of those stiffs yet?", "There's something in the mist!", "Broadsword calling Danny Boy", "Taste some of Mama's home cookin', Adolf!", "This calls for divine intervention!", "Don't get all stingy with your bullets", "The head bone's connected to the...oh, wait", "Naughty little boys get what they deserve", "We don't need a stretcher. We need a mop!", "Good, bad, I'm the guy with the gun", "Snuff them out", "Headache relief", "You want me to salute that pile of..?", "Explosive personality!", "I kick arse for the Lord!", "Every bullet counts", "We got this by the ass!", "It's just a flesh wound!", "Leave the limbs you've lost", "Elite pickpocket", "Burning a hole in your pocket", "Give me something to shoot", "We all go a little mad sometimes", "Like a drunk who's lost a bet", "Got you, didn't I, you little sucker!", "Somebody's got to survive!", "My family's always been in meat", "Come and get it! It's a running buffet!", "Your blood pressure is zero over zero", "Headshots are the very best", "And stay down!", "Resurrect this!", "I will not negotiate with the Undead!", "Scourge of zombiekind", "You've got red on you", "Nine tenths of the law", "Answer the Devil's call", "We can still fix him", "Merciful death", "Don't worry, they're evil!", "Zombies, man, they creep me out!", "You're going to meet Death now...", "You're going to have to work for your meal", "I'll teach ya how to shoot!", "Guts and glory", "Got your back", "A friend in need", "Got the killshot!", "You're so dead, you don't even know it", "Down but not out", "Man, you sure know a lot about monsters", "We have a Judas in our midst!", "Gratuitous violence from the lot of you", "Just in case we make it", "They must be destroyed on sight!", "You have...death around you", "They're coming to get you, Barbra!"];

    assert.strictEqual(officialAchievementNames.length, 68, "sanity check on this test's own reference list");

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
