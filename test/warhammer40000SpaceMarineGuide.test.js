import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-40000-space-marine.js";

test("the Warhammer 40,000: Space Marine guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-40000-space-marine-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-40000-space-marine");

});

test("the Warhammer 40,000: Space Marine guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Combat Volume",
            "Restrictions, Story Beats & Collectibles",
            "Multiplayer",
            "Exterminatus & Chaos Invasion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Warhammer 40,000: Space Marine achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Might of the Righteous", "Success is Measured in Blood", "Angel of Death", "Visible, Violent Death", "Firepower", "The Bigger They Are...", "Not So Tough", "Die, Heretics", "Glorious Slaughter", "Into the Breach", "Put Them Down", "Master of the Clean Kill", "Shock & Awe", "Death from Above", "The Emperor's Marksman", "Feel My Wrath", "The Emperor Protects", "None Can Stand Before You", "Nob Down", "Armored in Glory", "Blast Radius", "Precision Killer", "Chain of Death", "Master of Sword and Gun", "Burn Them All", "Brute Force...Unleashed  ", "Finesse and Fury", "Command Squad", "Silence the Cannon", "You Must Carry It", "We Take Our Chances", "But I Am Finished With You", "Hammer of the Imperium", "Here, At the End of All Things", "Lexicanum", "Librarian of Macragge", "Battle Brother", "Veteran", "Captain", "Chapter Master", "Warrior of Darkness and Light", "Shapeshifter", "Jack of All Trades", "Master of Arms", "Keeper of the Armory", "Defender", "Devastation!", "Master Crafted", "Down to Earth", "True Son of the Emperor", "Death to the False Emperor", "Blood for the Blood God", "Skulls for the Skull Throne", "Let the Galaxy Burn", "Let the Heavens Bleed", "Frugal Spenders", "Kill, for the Sake of Killing", "Glory to the Dark Gods!", "Heretic", "Sector Cleared"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
