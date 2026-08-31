import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/underrail.js";

test("the UnderRail guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "underrail-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "underrail");

});

test("the UnderRail guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Counts by Weapon & Ability",
            "Skills, Consumables & Status Effects",
            "One-Off Combat Feats",
            "Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official UnderRail achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Blood!", "Somebody Called For an Exterminator?", "It's Buggy", "Terminator Exterminator", "Antisocial Tendencies", "Backalley Pugilism", "Mr. Stabby", "It's Hammer Time!", "Run and Gun", "Phasers Set to Kill", "Acid Trip", "Fire in the Hole!", "Put this Apple on Your Head", "Fire and Ice", "Look Into My Eyes", "Reach Out and Touch Somebody", "Mine, All Mine!", "Manual Override", "Skeleton Key", "It's Always the Blue Wire", "Snoop Dog", "Universal Recipient", "The Other Side", "Thrill Junkie", "Pain Free", "Kleptomaniac", "Shroomhead", "Someone Need A Chill Pill?", "Mr. Freeze", "Look At All The Pretty Stars", "What Does This Button Do?", "Resisted Arrest", "Pyromaniac", "Back To The Shooting Range...", "Rat Meat Gourmand", "Hitman", "Chuck Attack", "Tactical Retreat", "Do You Feel Lucky, Punk?", "It's Super Effective!", "Just a Flesh Wound", "I'm Afraid I Can't Let You Do That", "Now You See Me...", "One Shot - One Kill", "Can't Touch This!", "Rest In Pieces", "There Can Be Only One", "You Throw Like a Girl", "Within The Budget", "Spray And Pray", "Your Time is Up!", "Die by the Sword", "Impaler", "Biodeicide", "Mutated Happily Ever After"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
