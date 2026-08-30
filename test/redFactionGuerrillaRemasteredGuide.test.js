import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/red-faction-guerrilla-remastered.js";

test("the Red Faction Guerrilla Re-Mars-tered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "red-faction-guerrilla-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "red-faction-guerrilla-remastered");

});

test("the Red Faction Guerrilla Re-Mars-tered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Guerrilla Actions",
            "Multiplayer & Wrecking Crew",
            "Demons of the Badlands DLC & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Red Faction Guerrilla Re-Mars-tered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Red Faction Guerrilla Re-Mars-tered", "Welcoming Committee", "Martian Tea Party", "Spread the Word", "Death From Above", "Friendly Skies", "Don't Tread On Me", "Coup D'etat", "Red Dawn", "Insurgent", "Guerrilla", "Freedom Fighter", "Revolutionary", "Clean and Righteous!", "Warp Speed", "Got Any Fingers Left?", "Lost Memories", "Working the Land", "Free Your Mind", "One Man Army", "Disaster Area", "Broken Supply Line", "Power to the People", "Tank Buster", "Best Friends Forever", "Coming Down!", "Freed Space", "Just the Beginning", "Start of Something Special", "Doing Your Part", "Juggernaut", "Doozer", "Grab Some Popcorn", "Try Anything Once", "Check Your Map", "Tools of the Trade", "Field Tested", "Battle Scarred", "Topher Would Be Proud", "Experimenter", "Detective", "Mad Genius", "Jack of all Trades", "The High and Mighty", "Party Time", "Can't Get Enough", "Wrecking Ball", "Bound By Blood", "Family Vengeance", "A Greater Purpose", "Deliverance Defender", "Tumbling Down", "Mobile Bombs", "Structural Integrity", "Purge the Valley", "Ares' Bloodlust", "The Power of One"];

    assert.strictEqual(officialAchievementNames.length, 57, "sanity check on this test's own reference list");

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
