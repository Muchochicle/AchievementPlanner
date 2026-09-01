import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fights-in-tight-spaces.js";

test("the Fights in Tight Spaces guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fights-in-tight-spaces-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fights-in-tight-spaces");

});

test("the Fights in Tight Spaces guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game Missions & Decks",
            "Lieutenants & Combat Styles",
            "K-9 DLC",
            "Weapon of Choice & Frights DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Fights in Tight Spaces achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rookie", "Off With Their Head", "Inside Out", "Ninja! Go!", "Stepping on Toes", "Mission Accomplished", "Purity", "Carpe Kill'em", "The All-Rounder", "The Defender", "The Fighter", "The Slasher", "The Wrestler", "The Trickster", "Specialist", "Bag of Tricks", "Speed Run", "Basic B", "He Protecc", "Death to Death's Head", "Parole Denied", "Shur-You-Can", "Three Gs", "Double Crossed Out", "Pacifist", "Immovable Object", "Yeet", "Tis But a Scratch", "Untouchable", "Combo Master", "Overpowered", "Almighty", "Unfriendly Fire", "Into the Void", "Death by Diplomat", "Sand Blasted", "Bullseye", "Pocket Change", "Binders of Power", "All the Things", "A Close Shave", "A Cut Above", "Pawfection", "That'll Do", "What's Updog?", "Bestest Friends", "Crown Jewels", "Can't Touch This", "Stay", "Panik!", "Hook, Line, and Sinker", "Lemmings", "Primal Rage", "Overfeeding", "Hair Trigger", "Wild West", "Flawless Aim", "I Wasn't Aiming At You", "Line 'em Up, Knock 'em Down", "Pistol Pooch", "Divide and Conquer", "Peripheral Punishment", "Cheap Jumpscare", "Trapaholic", "Woulda gotten away with it, too...", "These should be in a museum", "Antique Horror Show", "Part of the Job", "Purification Ritual", "Ambassador's Commendation"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
