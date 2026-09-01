import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stronghold-crusader-definitive-edition.js";

test("the Stronghold: Crusader - Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stronghold-crusader-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stronghold-crusader-definitive-edition");

});

test("the Stronghold: Crusader - Definitive Edition guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Milestones & Lifetime Kills",
            "Historical Campaigns & Skirmish Trails",
            "Sands of Time",
            "Skirmish Challenges",
            "Later Additions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official Stronghold: Crusader - Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Top of the Class", "Meanie", "Bully", "Tyrant", "Lord v. Food", "No More Wood Needed", "Calm down, Rambo!", "The Midas Touch", "Sprawling Metropolis", "Banned from the Circus", "Muhammad al-Idrisi", "Rally the Troops!", "Iron Banner", "King of the Sandcastle", "Lounging About The Levant", "No Sleep 'til Ascalon", "A King's Ransom", "Right In The Childhood", "Perseverance Pays Off", "More Than Words", "Room for Improvement", "Almost There", "Nailed It!", "Sheep Farmer", "Goat Herder", "Falconer", "Zoo Keeper", "Wow. Like I'm Really Impressed!?", "Almost Impressive", "Genuinely Impressive", "New Kids On The Block", "Are you not entertained?!", "Up Close & Personal", "Stay Back!", "Subscribe to play as The Scribe", "Welcome, Lord Bessy!", "Mick Dundee", "Dog Breeder", "Snake Charmer", "Apex Predator", "Bone Collector"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
