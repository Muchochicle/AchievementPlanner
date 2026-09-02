import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/risk-of-rain-returns.js";

test("the Risk of Rain Returns guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "risk-of-rain-returns-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "risk-of-rain-returns");

});

test("the Risk of Rain Returns guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survivor Ability Feats & Early Unlocks",
            "More Survivor Unlocks & Early Providence Trials",
            "Endgame Unlocks & Providence Trials I",
            "Providence Trials II",
            "Artifacts",
            "Survivors' Second Skins",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 155-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /155 Steam achievements/);

});

test("every one of the 155 official Risk of Rain Returns achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Lizard Bait", "Never Look Back", "Pre-Alpha", "The Grind", "Gold Medalist", "Close Calls", "Thread the Needle", "Rapidfire", "Sixth Sense", "Still Standing", "Mechanized Militia", "\"Is This Bugged?\"", "Warrior", "Junk Collector", "The Lone Survivor", "A Dime A Dozen", "Desperado", "Classic Man", "In the Soup", "Zero Sum", "Before Titans", "Tank", "Activated", "Turtle", "Handy", "Hydraulic Press", "Like New", "Seasoned Wanderer", "Mechanic", "Controlled Demolition", "Optimal", "Excavation", "Blazing Victory", "Hot Streak", "Washed Away", "High Caliber", "Iron Sights", "The Experiment", "Dissolved", "Catchy", "Sole Survivor", "Last Wish", "Vampire", "In Good Health", "Special Delivery", "Strength of Will", "Macho", "Watery Grave", "War Bonds", "Endless Voyager", "Insurance Fraud", "Lucky Devil", "Mastery", "No Flukes", "Flash of Light", "Gourmet", "Cracking Claws", "Catch and Release", "Itemized", "Bionic", "Snuffed Out", "Untouchable", "Broken Continuity", "Sagitta Aurum", "Deforestation", "Empty Pockets", "Siiick", "\"...Ask Questions Later\"", "Big Red Button", "Aerodynamic", "The Hunt", "Massacre", "Yoink", "Anywhere, Everywhere", "Recycled", "All Purpose", "First Place", "Only the Beginning", "Selfless", "Natural Competition", "A Sweet Smell", "Higher Ground", "Chasing Shadows", "Matricide", "Where You Want To Be", "Rope Burn", "Retrograde", "Gassed Up", "Trigger Finger", "Aquarium", "High Magnitude", "Amplified", "Field Testing", "Nucleation", "Aposematic", "Altered Genome", "Anti-Virus", "Divebomb", "Live Wire", "Riposte", "Tsuchinoko", "Infinite Potential", "Commander", "Thank You", "A Little Extra Push", "Free-Range", "Grease Fire", "Well-Seasoned", "\"...Or Your Money Back\"", "Full Circuit", "Terminal Velocity", "Solar Power", "Chance of Showers", "Campsite", "Thermal Vision", "By Design", "Trash Compactor", "Biodegradable", "New Record", "Hot-Blooded Vengeance", "Burning Out", "Hivemind", "Paratrooper", "Steady Grip", "Keep It Up", "Divine Intervention", "In the Forest", "Somewhere Dry", "Among the Mushrooms", "In the Meadow", "Below the Bridge", "Drowned Below", "Near the Core", "In the Hive", "Beneath the Temple", "Kaleidoscope", "Carrying Weight", "Sight-Seeing", "Entropy", "Seeing Ghosts", "Artificer's Hope", "Drifter's Spirit", "Acrid's Hunger", "Huntress's Agility", "Commando's Bravery", "Enforcer's Will", "Bandit's Cunning", "HAN-D's Directive", "Engineer's Intellect", "Sniper's Reflex", "Miner's Determination", "Chef's Recipe", "Mercenary's Technique", "Loader's Strength", "Pilot's Focus"];

    assert.strictEqual(officialAchievementNames.length, 155, "sanity check on this test's own reference list");

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
