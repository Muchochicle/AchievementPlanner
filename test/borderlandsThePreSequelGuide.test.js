import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/borderlands-the-pre-sequel.js";

test("the Borderlands: The Pre-Sequel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "borderlands-the-pre-sequel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "borderlands-the-pre-sequel");

});

test("the Borderlands: The Pre-Sequel guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story Missions",
            "Bosses, Levels & Loot",
            "Exploration, Feats & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Borderlands: The Pre-Sequel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Invaders Must Die", "Welcome To The Rock", "Dejamminated", "I Shot The Meriff", "Drakensburg, Schmakensburg", "Who Constructs The Constructor?", "Helios Rising", "Brain Drain", "The Guts Of Helios", "A House Divided", "Vault Hunter Superior", "Multi Face-eted", "Once More With Feeling", "Do Shoot the Messenger", "The Gun In The Stone", "Who You Gonna Call?", "Guardian Guardian", "Modern Fart", "Side Quest Student", "Moon Mission Meister", "Grind 'n' Bear It", "The Bigger They Are", "Mouth To Mouth", "Rocketeer", "Super Secret Stash", "Air Supremacy", "No, I'm Athena!", "That Helped, Right?", "Executioner", "That Tasted Purple!", "Challenger", "Space Rookie", "Lunar Lieutenant", "Moon Master", "Space Lord", "Moxxi's Sampler", "Lunar Looter", "I Come From The Land Up Over", "Beam Me Up", "Eridian Explorer", "Cosmic Completionist", "High Fashion", "The Duelist", "Collateral Damage", "360 No Scope", "Expensive Taste", "Ice To Meet You", "Elementalist", "Pancake Parlor", "Who Needs Air?", "Smash the System", "Stronger! Smarter!", "I Welcome Your Attack, Fool", "Digitize Me!", "Smash and Not Grab", "Totally Recalled", "Shadow Play", "Shadow of Your Former Self", "Wheely Fast", "Sociopathic Networker", "The Gift that Keeps on Giving", "It's Raining Cats and Hotdogs", "No Photographs, Please!"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
