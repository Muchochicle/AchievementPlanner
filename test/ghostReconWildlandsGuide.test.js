import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ghost-recon-wildlands.js";

test("the Ghost Recon Wildlands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ghost-recon-wildlands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ghost-recon-wildlands");

});

test("the Ghost Recon Wildlands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Bosses & Buchon Operations",
            "Combat Feats, Collectibles & Upgrades",
            "Narco Road & Fallen Ghosts DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 57-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /57 Steam achievements/);

});

test("every one of the 57 official Ghost Recon Wildlands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fearless", "Pull!", "Road Warrior", "Deadly Curious", "Serious Collector", "The Whole Story", "Beat the Boss", "The End", "Smuggler's Blues", "Shut Down", "Broken Locks", "Bad Reputation", "Mission Master", "With a Pistol!", "Teamwork!", "A Good Start", "Eye in the Sky", "Eagle-Eyed", "Cluster Bomber", "A Better Mousetrap", "Legend Hunter", "Legendary Hunter", "Spice of Life", "Highway Bandit", "Ultimate Skill", "Only the Best", "Top Drone", "Heavy Medals", "Rebel Sympathizer", "Real Rebel", "No Better Rebel", "Shotguns Fanatic", "Handgun Fanatic", "The Champion", "Long Shot", "Death in the Dark", "Finished the Job", "Death from Above", "Black-out Boomer", "Submachine-Gun Fanatic", "Light Machine-Gun Fanatic", "Sniper Rifle Fanatic", "Assault Rifle Fanatic", "Gang Leader", "El Visible", "More Followers than Escobar", "Scenic Route", "Cristina", "Mal Rodilla-Ternera", "Brake a leg", "Kill list", "A hero once, a hero twice", "Thorough supporter", "Rebel leader", "Tactical genius", "Nondescript jungle hero", "Artisanal SAM"];

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
