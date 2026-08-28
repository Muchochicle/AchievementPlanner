import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/half-life-2.js";

test("the Half-Life 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "half-life-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "half-life-2");

});

test("the Half-Life 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Half-Life 2: Base Game",
            "Episode One",
            "Episode Two",
            "Shared Physics & Weapon Feats",
            "The Secret Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official Half-Life 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/half-life-2.json).
    const officialAchievementNames = [
        "Defiant", "Submissive", "Malcontent", "What cat?", "Trusty Hardware",
        "Barnacle Bowling", "Anchor's Aweigh!", "Heavy Weapons", "Vorticough", "Revenge!",
        "Blast from the Past", "Zero-Point Energy", "Two Points", "Zombie Chopper", "Hallowed Ground",
        "OSHA Violation", "Targetted Advertising", "Where Cubbage Fears to Tread", "One Man Army", "Keep Off the Sand!",
        "Bug Hunt", "Flushed", "Warden Freeman", "Follow Freeman", "Radiation Levels Detected",
        "Plaza Defender", "Counter-Sniper", "Fight the Power", "Giant Killer", "Atomizer",
        "Singularity Collapse", "Lambda Locator", "Hack Attack!", "Watch Your Head!", "Containment",
        "Pacifist", "Car Crusher", "Elevator Action", "Live Bait", "Attica!",
        "Citizen Escort", "Escape From City 17", "The One Free Bullet", "Conservationist", "Think Fast!",
        "Zombie-que", "Acid Reflex", "Get Some Grub", "Piñata Party", "Into the Breach",
        "Twofer", "Hit and Run", "Meet the Hunters", "Puttin' On a Clinic", "Gunishment!",
        "Cache Checker", "Pedal to the Metal", "Gordon Propelled Rocket", "Quiet Mountain Getaway", "Little Rocket Man",
        "Secondary Silo Secured", "Neighborhood Watch", "Defense of the Armament", "Payback", "Bone Breaker",
        "Deadly Harvest", "Hot Potat0wned", "Grave Robber", "Gnome Alone"
    ];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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
