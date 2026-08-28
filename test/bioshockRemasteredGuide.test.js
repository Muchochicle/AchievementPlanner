import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bioshock-remastered.js";

test("the BioShock Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bioshock-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bioshock-remastered");

});

test("the BioShock Remastered guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapons & Upgrades",
            "Research",
            "Hacking & Inventing",
            "Plasmids, Tonics & Collectibles",
            "Museum of Orphaned Concepts (Challenge Rooms DLC)",
            "Story & Bosses (Hidden)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official BioShock Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Completed Welcome to Rapture", "Defeated Dr. Steinman", "Defeated Peach Wilkins", "Defeated Atlas", "Restored the Forest",
        "Completed Cohen's Masterpiece", "Defeated Andrew Ryan", "Weapon Specialist", "Upgraded a Weapon", "Fully Researched a Bouncer",
        "Prolific Photographer", "One Successful Hack", "Fully Researched a Thuggish Splicer", "Fully Researched a Spider Splicer", "Fully Researched a Houdini Splicer",
        "Fully Researched a Leadhead Splicer", "Fully Researched a Nitro Splicer", "Fully Researched a Rosie", "Fully Researched a Little Sister", "Quality Research Photo",
        "Hacked a Security Bot", "Hacked a Turret", "Hacked a Security Camera", "Hacked a Vending Machine", "Hacked a Safe",
        "Ammo Inventor", "Seriously Good at This", "Basic Inventer", "Broke Fontaine's Mind Control", "Bought One Slot",
        "Researched a Splicer", "Dealt with every Little Sister", "Maxed One Track", "Maxed All Tracks", "One Fully Upgraded Weapon",
        "Two Fully Upgraded Weapons", "Three Fully Upgraded Weapons", "Four Fully Upgraded Weapons", "Five Fully Upgraded Weapons", "Became a Big Daddy",
        "Lucky Winner", "Irony", "Found Cohen's Room", "Toaster in the Tub", "Historian",
        "Skilled Hacker", "Little Sister Savior", "Avid Inventor", "Tonic Collector", "Research PhD",
        "Brass Balls", "I Chose the Impossible", "“The ‘I’ in Team” - Rescuer", "“The ‘I’ in Team” – Expert", "“The ‘I’ in Team” – Collector",
        "“The ‘I’ in Team” – Pacifist", "\"A Shocking Turn of Events\" - Rescuer", "“A Shocking Turn of Events” – Expert", "“A Shocking Turn of Events” – Collector", "“A Shocking Turn of Events” – Master Electrician",
        "“Worlds of Hurt” - Rescuer", "“Worlds of Hurt” – Expert", "“Worlds of Hurt” – Collector", "“Worlds of Hurt” – Tough Guy", "A Man Chooses"
    ];

    assert.strictEqual(officialAchievementNames.length, 65, "sanity check on this test's own reference list");

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
