import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rage-2.js";

test("the RAGE 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rage-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rage-2");

});

test("the RAGE 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapons & Abilities",
            "Vehicles & Driving",
            "World & Exploration",
            "Rise of the Ghosts (DLC)",
            "TerrorMania (DLC)",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 64-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /64 Steam achievements/);

});

test("every one of the 64 official RAGE 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Efficiency", "Unloaded", "Skeet Shooting", "Hyper-Express", "Postmodern Picasso",
        "Overly driven", "THIS IS RAGE", "Come on and Slam!", "Pseudo Post-Mortem", "Off With Their Heads",
        "Explosive Ending", "Zipper", "The Bigger They Are...", "Hot Potato", "Goon De-leet",
        "Peek-a-boo", "The Enemy Of My Enemy", "Bytesize Takedown", "Gonevoy", "Crushed",
        "On The Limit", "Over 9000", "Hangtime", "Acid House", "Off Balance",
        "Dozing", "Goon Fire", "The Ranger", "Blackout", "The Signal",
        "Wasteland Celebrity", "Beneath the Surface", "Ground Control", "Double Cross", "Project Dagger",
        "A Noah Lot", "Can't Stop Pop", "Mata Hari Manners", "The Bowels of a Rust Giant", "Forlorn Watcher",
        "Sunken Hope", "Reaching out to the Past", "Wasteland Vagabond", "Nightmare", "I am Death Incarnate!",
        "Heavy Boots", "Captive", "Within the Walls", "Slaughter to the Lamb", "Means to an End",
        "EcoLocation", "Recondite", "Ringbender", "Friend of Ford", "Air Drop Down",
        "Questionable Sanctity", "Hellspring Bonetower", "Sensus Bonetower", "Veritas Bonetower", "Tristitia Bonetower",
        "Furorem Bonetower", "TerrorMania", "Striking Skulls", "Flying Skulls",
    ];

    assert.strictEqual(officialAchievementNames.length, 64, "sanity check on this test's own reference list");

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
