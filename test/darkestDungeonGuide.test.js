import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/darkest-dungeon.js";

test("the Darkest Dungeon guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "darkest-dungeon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "darkest-dungeon");

});

test("the Darkest Dungeon guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Quest Milestones",
            "Town & Roster Management",
            "Combat Milestones",
            "Death, Loss & Dark Fates",
            "Completing the Game",
            "The Crimson Court",
            "The Color of Madness",
            "The Butcher's Circus",
            "Rare & Secret Feats",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 126-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /126 Steam achievements/);

});

test("every one of the 126 official Darkest Dungeon achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/darkest-dungeon.json).
    const officialAchievementNames = [
        "Welcome home...", "The first of many victories...", "Our victories are mounting...", "We are victorious, but at what cost...", "Discretion, my old friend...",
        "The first evil to fall...", "A strenuous adventure comes to a close...", "A grueling adventure comes to a close...", "A team of hardened veterans...", "Like lambs to the slaughter...",
        "I've seen every corner of this ruined land...", "Twisted and about to break", "And our training begins...", "It takes more than brawn...", "A drink, a hand, and a companion...",
        "A rumination, a prayer, and a confession...", "Weeding out the weak...", "A veritable crowd...", "The price we pay for sanity...", "Encouragement...",
        "Our equipment polished to a mirror finish...", "Our techniques sharpened to a razor's edge...", "The tavern my Ancestor once saw...", "The abbey my Ancestor once knew...", "Only the finest equipment will endure this torment...",
        "Only masterful technique will suffice in battle...", "Restored to its former glory...", "A sobering visit with the departed...", "A true champion emerges...", "Darkest sentinels...",
        "And we slew the evils that lurketh...", "And we slew the abominations that haunteth...", "And we slew the beasts that creepeth...", "And we slew the men who were wicked...", "The fiends must be driven back...",
        "The end of the first year...", "Two years of this...", "Greater riches were never witnessed...", "A collection of treasured antiques...", "A killer of striking force and wit...",
        "More than a weary traveler...", "The first of many has fallen...", "The stresses were unbearable...", "Gnawing hunger sets in...", "That'll do, pig...",
        "We return to the worms of the earth...", "Watch your step...", "Blocked from life...", "Valiant sacrifice...", "No retreat, no quarter...",
        "We all return to dust...", "What is already Dead Cannot Die", "More blood soaks the soil...", "Sentimental relics from our forefathers...", "A terrifying figure emerged from the darkness...",
        "Strict Mode", "Driven from this land...", "Caretaker", "Victory, such as it is...", "In such haste...",
        "Lone survivor", "Dysfunction", "World End", "On the old road, we found redemption.", "In Sheep's Clothing",
        "Entry Level", "Murder of Crows", "Four on the Floor", "Mine Goes to 11", "Les Jeux Sont Faits",
        "Just the Cheque", "Her Last Dance", "Symptoms", "Happy Together", "From Rubble to Rabble",
        "The Red Hook", "The Flesh is Willing", "An Unexpected Party", "Expired", "Shadows Blur Together",
        "What Strange Bedfellows", "Zealous Accusation", "Jailbreak", "Blood Cult", "Plowshares To Swords",
        "Tears Lost In The Dust", "A Taste Of Madness", "A Merciful Act", "Beyond The Infinite", "Shards Well Spent",
        "A Memory Of Better Times (And Spaces)", "This Is Nothing", "A Hollow Reckoning", "Ashes To Ashes", "In The Mouth of Madness",
        "The Blinders Are Lifted", "Rogues Gallery", "There Are No Words", "Time Is A Flat Circle", "Blue Skies Ahead",
        "A Poor Harvest", "Lining the Jeweller's Pockets", "Rainbow's End", "Pipe Dream", "Fresh Meat",
        "Scare Tactics", "Taking All Challengers", "Mono et Mono", "Bright Lights", "Shouting Match",
        "Devil's Luck", "MVP", "One and Done", "Pacemaker", "Naked and Unafraid",
        "Blood Soaks the Sand", "Be Still My Heart!", "Blood Flood", "Crowd Pleaser", "Flawless Execution",
        "Burnout", "Faced Worse", "Dueling Duo", "The Perfection", "Pavlovian",
        "Cooked to Perfection"
    ];

    assert.strictEqual(officialAchievementNames.length, 126, "sanity check on this test's own reference list");

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
