import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/galactic-civilizations-3.js";

test("the Galactic Civilizations III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "galactic-civilizations-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "galactic-civilizations-3");

});

test("the Galactic Civilizations III guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Playtime, Campaign & Faction/Victory Wins",
            "Empire Milestones & Warfare",
            "DLC Campaigns & Crusade Expansion",
            "Intrigue & Retribution Expansions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 102-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /102 Steam achievements/);

});

test("every one of the 102 official Galactic Civilizations III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["New Recruit", "Space Emperor", "Honorary Stardockian", "For Arcea", "There is a crusade coming", "Enlightenment Attained", "Market Leader", "Drengin Supremacy", "From the Shadows", "There Is Only The Way", "From Earth to Distant Stars", "Another Dimension Ruled", "World Without Flesh", "Conquerer", "They Want To Be Us", "A Universe Without Enemies", "Beyond This Universe", "No More Secrets", "Crusher of Souls", "Trying to Prove Something", "Built From Nothing", "Under Pressure", "Our New Home", "Flying in Style", "Aliens?!?!", "Friends, for now...", "Worlds to Rule", "Revenge", "We Care For The Least of Us", "Results Outweigh Ideals", "Means To An End", "Boldly Go", "Danger Zone", "Merchant Empire", "Greedy", "Precursor Legacy", "All Your Base", "Exterminate", "Vengence", "I Assume You Were Talking Back", "Eco-Unfriendly", "Troublemaker", "Warrior", "Ships to Scrap", "Pirate Scum!", "Vigilant Victory", "Out of the Deep and to the Stars", "A Little Help From My Frenemies", "Revenge is Ours", "The Return of the True Face of Fear", "Whatever happened to those Xendar?", "Fulfilling the Prophecy", "Join the Resistance", "Rock Eater", "Gloriously Gelatinous", "Backup Plan", "Recruiter", "Human Resources", "Spy Master", "Crush the Resistance", "King Maker", "They Grow Up So Fast", "Together We Stand", "Regime Change", "Micro-Manager", "Trickle-Down Economics", "Tax the wealthy (and everyone else)", "Two-Bit Buyer", "Small-Time Seller", "Planetary Patron", "Stellar Seller", "Master Merchant", "Astral Agent", "Trial by Fire", "Cool Head(s)", "They Really Love You", "They Really REALLY Love You", "Crisis: Apophis", "Crisis: Rogue General", "Crisis: Secession", "Crisis: Space Monster", "Crisis: The Revolution", "Crisis: The Simulation", "Crisis: Brain Parasites", "Crisis: Brain Trust", "Squik!", "Thanks be to Jeff", "Overminds meet your Overlords", "So Sweaty to Beat You", "Feeling Powerful, eh?", "Power Hungry", "Hyper Hyper Hyper", "Hyperdiculous Speed", "No Limits", "You're a Bad Person", "Space Dragons!", "Shadow Masters", "Sticks and Stones", "One more dimension conquered ...", "Glorious Paperwork", "Imperial March", "Served for dinner"];

    assert.strictEqual(officialAchievementNames.length, 102, "sanity check on this test's own reference list");

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
