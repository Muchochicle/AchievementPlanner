import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/project-winter.js";

test("the Project Winter guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "project-winter-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "project-winter");

});

test("the Project Winter guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Escapes & Gathering",
            "Restriction Runs & Crafting",
            "Survivor & Traitor Roles",
            "Special Roles, Events & Practice",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 78-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /78 Steam achievements/);

});

test("every one of the 78 official Project Winter achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Get to Da Choppa", "Gunsmith", "Leaving on a Jet Plane", "Jumping on the Bandwagon", "Red October", "One is the Loneliest Number", "Dynamic Duo", "Third Wheel", "The More the Merrier", "The Fallen Will Be Remembered", "No One Left Behind", "Lumberjack", "Miner", "Gatherer", "Hunter", "Health Freak", "Verticality", "You Go First", "Radio Silence", "Pacifist", "Close Quarters", "Meat is Murder", "Cooperation is Key", "Hands-Off Killer", "Brave New World", "Super Traitor", "Last One Standing", "Blacksmith", "Exquisite Chef", "Clear Your Cache", "Clandestine", "Saboteur", "Assassin", "Is There Anybody Out There?", "Tell Our Story", "Well Done", "Gold Star", "Over-Achiever", "I'm a Survivor", "Et tu, Brute?", "What's in the Box?", "Testing Physical Limits", "Tis' but a Flesh Wound", "Vigilante Justice", "Better Late than Never", "Tight Schedule", "Women and Children First", "Home Run", "Hypocritic Oaf", "Little Red Hen", "The Deceit is Real", "Double Agent", "Master of Disguise", "Poisoner", "Dark Chef", "Immune!", "In Pursuit of Truth", "Psychological Warfare", "The Truth Shall Set You Free", "Baby Steps", "The Possessed", "Hive Mind", "Ambusher", "Where Is Your God Now?", "Begone, Devil", "On the Straight and Narrow Path", "The Elusive Cryptid", "Picking a Side", "Gone to the Dark Side", "The Greatest Hunt", "Light in the Dark", "Fool Me Once...", "The Grey", "Bunker Buster", "Practice Makes Perfect", "Breaking New Ground", "Unlock and Load", "Take a Hike"];

    assert.strictEqual(officialAchievementNames.length, 78, "sanity check on this test's own reference list");

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
