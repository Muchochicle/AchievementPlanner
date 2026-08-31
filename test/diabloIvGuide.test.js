import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/diablo-iv.js";

test("the Diablo IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "diablo-iv-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "diablo-iv");

});

test("the Diablo IV guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaigns, Exploration & Slayers",
            "Bosses, Classes & Expansions",
            "Endgame Grind & Collections",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Diablo IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Tortured Souls", "Hammer Down", "Emancipation", "Curious Collector", "Convenient Crafts", "Legion Killer", "Turned", "Shifty Swipes", "Estuar Sightseer", "Undead Undone", "Turning the Tides", "Dedicated Protector", "True Perseverance", "Devoted Protector", "Army of Bones", "Living Nightmares", "First Aid", "Master Combatant", "In and Out", "Exterminator", "Master of the Elements", "End of the First Mother", "Potent Alterations", "Chaotic Whispers", "Worldly Slayer", "Hatred Subdued", "Bane of the Khazra", "Nahantu Sightseer", "Infernal Jungle", "Hireling Commander", "Wildland Warrior", "Devout Champion", "Spirited Sparring", "Tormented Massacre", "Kurast Cleanser", "Tormented Slaughter", "Skovos Sojourner", "Echoing Elites", "Demonic Dispute", "Hatred Banished", "Adept Angler", "Skovos Slayer", "Wholly Horadric", "Effective Equipment", "Prepared to Fight"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
