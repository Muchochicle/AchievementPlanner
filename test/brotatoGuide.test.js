import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/brotato.js";

test("the Brotato guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "brotato-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "brotato");

});

test("the Brotato guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Counts, Danger Wins & Stat Feats",
            "Character Wins (Part 1)",
            "Character Wins (Part 2)",
            "Later Characters & Crash Zone Wins",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 179-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /179 Steam achievements/);

});

test("every one of the 179 official Brotato achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Survivor 1", "Survivor 2", "Survivor 3", "Survivor 4", "Survivor 5",
        "Danger 0", "Danger 1", "Danger 2", "Danger 3", "Danger 4",
        "Danger 5", "Gatherer 1", "Gatherer 2", "Gatherer 3", "Gatherer 4",
        "Gatherer 5", "Agriculture", "Dying", "Fast", "Hoarder",
        "Lumberjack", "Medicine", "Industrialization", "Hallucination", "Brawler - Crash Zone",
        "Bull - Crash Zone", "Chunky - Crash Zone", "Demon - Crash Zone", "Doctor - Crash Zone", "Engineer - Crash Zone",
        "Entrepreneur - Crash Zone", "Explorer - Crash Zone", "Farmer - Crash Zone", "Ghost - Crash Zone", "Gladiator - Crash Zone",
        "Knight - Crash Zone", "Loud - Crash Zone", "Lucky - Crash Zone", "Mage - Crash Zone", "Masochist - Crash Zone",
        "Multitasker - Crash Zone", "Mutant - Crash Zone", "Old - Crash Zone", "One-Armed - Crash Zone", "Pacifist - Crash Zone",
        "Ranger - Crash Zone", "Saver - Crash Zone", "Sick - Crash Zone", "Soldier - Crash Zone", "Speedy - Crash Zone",
        "Well-Rounded - Crash Zone", "Wildling - Crash Zone", "Rookie", "Crazy - Crash Zone", "Generalist - Crash Zone",
        "Artificer - Crash Zone", "Hunter - Crash Zone", "Fireworks", "Perfect Vision", "Recycling",
        "Slow", "Arms Dealer - Crash Zone", "Streamer - Crash Zone", "Advanced Technology", "Giant Slayer",
        "Hungry", "Robust", "Cyborg - Crash Zone", "Glutton - Crash Zone", "Jack - Crash Zone",
        "Lich - Crash Zone", "Baited", "Forest", "Bourgeoisie", "Student",
        "Reckless", "Scavenger", "Apprentice - Crash Zone", "Cryptid - Crash Zone", "Fisherman - Crash Zone",
        "Golem - Crash Zone", "King - Crash Zone", "Renegade - Crash Zone", "Vampire - Crash Zone", "Vagabond - Crash Zone",
        "Baby - Crash Zone", "Blood Drinker", "Experimentation", "Fast Learner", "Magic and Machinery",
        "Technomage - Crash Zone", "Barbecue", "Blind Greed", "Buccaneer - Crash Zone", "Builder - Crash Zone",
        "Captain - Crash Zone", "Cautious", "Chef - Crash Zone", "Creature - Crash Zone", "Curious - Crash Zone",
        "Diver - Crash Zone", "Druid - Crash Zone", "Dwarf - Crash Zone", "Gangster - Crash Zone", "Herbalist",
        "Hiker - Crash Zone", "Ogre - Crash Zone", "Overkill", "Romantic - Crash Zone", "Sailor - Crash Zone",
        "Smelly Feet", "Uncorrupted", "Unlucky", "Unstoppable Force", "Well-Rounded - The Abyss",
        "Brawler - The Abyss", "Crazy - The Abyss", "Ranger - The Abyss", "Mage - The Abyss", "Chunky - The Abyss",
        "Old - The Abyss", "Lucky - The Abyss", "Mutant - The Abyss", "Generalist - The Abyss", "Loud - The Abyss",
        "Multitasker - The Abyss", "Wildling - The Abyss", "Pacifist - The Abyss", "Gladiator - The Abyss", "Saver - The Abyss",
        "Sick - The Abyss", "Farmer - The Abyss", "Ghost - The Abyss", "Speedy - The Abyss", "Entrepreneur - The Abyss",
        "Engineer - The Abyss", "Explorer - The Abyss", "Doctor - The Abyss", "Hunter - The Abyss", "Artificer - The Abyss",
        "Arms Dealer - The Abyss", "Streamer - The Abyss", "Cyborg - The Abyss", "Glutton - The Abyss", "Jack - The Abyss",
        "Lich - The Abyss", "Apprentice - The Abyss", "Cryptid - The Abyss", "Fisherman - The Abyss", "Golem - The Abyss",
        "King - The Abyss", "Renegade - The Abyss", "One-Armed - The Abyss", "Bull - The Abyss", "Soldier - The Abyss",
        "Masochist - The Abyss", "Knight - The Abyss", "Demon - The Abyss", "Baby - The Abyss", "Vagabond - The Abyss",
        "Technomage - The Abyss", "Vampire - The Abyss", "Sailor - The Abyss", "Curious - The Abyss", "Builder - The Abyss",
        "Captain - The Abyss", "Creature - The Abyss", "Chef - The Abyss", "Druid - The Abyss", "Dwarf - The Abyss",
        "Gangster - The Abyss", "Diver - The Abyss", "Hiker - The Abyss", "Buccaneer - The Abyss", "Ogre - The Abyss",
        "Romantic - The Abyss", "Beast Master", "Nightmare", "Wounded"
    ];

    assert.strictEqual(officialAchievementNames.length, 179, "sanity check on this test's own reference list");

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
