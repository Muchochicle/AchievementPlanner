import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/master-of-orion.js";

test("the Master of Orion guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "master-of-orion-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "master-of-orion");

});

test("the Master of Orion guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early & Mid-Game Feats",
            "Endgame Feats & Race-Specific Victories",
            "Lifetime Grinds & Race Masteries",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 102-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /102 Steam achievements/);

});

test("every one of the 102 official Master of Orion achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One Small Step", "Royal Navy", "Scavenger", "Duty Calls", "Classified", "Crunch Time", "In a Hurry", "Real Time Commander", "Business is Business", "Populous", "You Shall not Pass", "Hungry Game", "War Never Changes", "Rush", "eXplore", "Dinner’s ready!", "Area 51", "Right in the Heart", "Resource Maniac", "No Vacancy", "Megalomaniac", "Peronism", "Get Smart", "Collector", "The More the Merrier", "Iran-Contra", "Get Off My Lawn", "Off With Their Heads", "Exodus", "Turns are Relative", "eXpand", "Monster Hunter", "Old Grudge", "First Among Equals", "I Am Become Death", "Unscathed", "Master of The Universe", "Curious George", "Dangerous Minds", "That's no star", "Terror from the Deep", "None Like It Hot", "Wild, Wild West", "Conqueror", "Trade Winds", "Secrets of the Earth", "Unseen Blade", "Manifest Destiny", "Marxist Dystopia", "It is me, Your Brother! ", "Itch to Scratch", "The Nash Ultimatum", "Rule of the Many", "Group Therapy", "Reptilians!", "I Like it Small", "Jumper", "Science!", "\"007\"", "Where we're going, we don't need Starlanes.", "Warren Buffet", "Alien Roommate", "Homeless", "The Creator", "Your Neutrality", "This Ain't Cheap", "Flower Power", "Terminus", "A Rose By Any Other Name", "Attila", "Moby Dick", "Galactus", "So Say We All", "Can't Make Up Your Mind", "Shopaholic", "Backstabber", "Where Credit is Due", "Hell-O", "Brazil", "Cave-dweller", "Feline Paradise", "One more turn!", "Still here", "Obsession", "This Is Just the Beginning", "Top of the Class", "Kill many, and you're a conqueror", "Transcendental", "Wolf of the Galaxy", "With Quill and Word", "Alkari Mastery", "Bulrathi Mastery", "Darlok Mastery", "Human Mastery", "Klackon Mastery", "Meklar Mastery", "Mrrshan Mastery", "Psilon Mastery", "Master of Orion", "Ironman", "Sakkra Mastery", "Silicoid Mastery"];

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
