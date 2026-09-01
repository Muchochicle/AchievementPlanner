import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sniper-elite-resistance.js";

test("the Sniper Elite: Resistance guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sniper-elite-resistance-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sniper-elite-resistance");

});

test("the Sniper Elite: Resistance guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign",
            "Weapon Mastery & Kill Feats",
            "Collectibles & Mission Challenges",
            "Bonus Missions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Sniper Elite: Resistance achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Dam Buster", "Welcome to the Resistance", "Trainwreck", "Bomb Squad", "Industrial Action", "Blast from the Past", "Grapes of Wrath", "Whatever it Takes", "Climbing the Ranks", "Vive La Résistance", "Crème de la Crème", "Full English", "Hostile Takeover", "Hold the Line", "Brothers in Arms", "Just a Scratch", "Open Surgery", "Tactician", "Pistol Perfectionist", "Secondary Supremacy", "Revered with Rifles", "Master-at-arms", "Gunslinger", "Skirmisher", "Sharpshooter", "Going the Distance", "Blaze of Gory", "Eyes on the Prize", "Scoping Mechanism", "Set to Blow", "The Big Guns", "Three Birds, One Stone", "Jack of All Trades", "Das Nuts!", "Finders Keepers", "Le Fantôme", "Silent but Deadly", "Knives for a Pro", "Always Greener", "Pen Pal", "Top Secret", "Treasure Hunter", "Spread Your Wings", "Innovator", "Survivalist", "File O' Facts", "Sprung a Leak", "Stopping Traffic", "Lost its way Gnome", "Tanks for Nothing!", "Mastermind", "Propagandist", "Propaganda Machine", "Take 5, and... ACHTUNG!", "Fast and Fuhrer-less", "He did Nazi-it Coming", "In The Dead Of Reich", "Blockbuster", "That’s a Wrap!", "B-Movie", "Mein Juewel", "Mortar Combat", "Nein-a Blume", "Vercors' Vengeance", "Vergeltungswaffe", "Jailbreak", "Communication Breakdown", "Mis-guided-missile", "Lethal Love letter", "The Path of Most Resistance"];

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
