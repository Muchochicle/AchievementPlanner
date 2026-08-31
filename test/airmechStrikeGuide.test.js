import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/airmech-strike.js";

test("the AirMech Strike guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "airmech-strike-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "airmech-strike");

});

test("the AirMech Strike guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Onboarding & Core Feats",
            "AirMech Mastery & Unit Feats",
            "Progression, Factions & Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 91-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /91 Steam achievements/);

});

test("every one of the 91 official AirMech Strike achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Getting Started", "Getting Started (part 2)", "Destroy 10 Tanks", "Destroy 1000 Tanks", "Destroy 20 Tanks", "Destroy 50 Tanks", "Win online Match", "Win 10 online Matches", "Win 1v2 Match", "Win 1v3 Match", "Fast Win 1v3 Match", "Replicators Down! (part 1)", "Replicators Down! (part 2)", "Close Encounter (part 1)", "Close Encounter (part 2)", "Helix Superiority (part 1)", "Helix Superiority (part 2)", "Bomber Superiority (part 1)", "Bomber Superiority (part 2)", "Striker Superiority (part 1)", "Striker Superiority (part 2)", "Striker Superiority (part 3)", "Striker Samurai", "Osprey Debut", "Osprey - Combat Support", "Mine Layer (part 1)", "Mine Layer (part 2)", "Mine Sweeper (part 1)", "Mine Sweeper (part 2)", "Mine Sweeper (part 3)", "High Level", "Max Level", "Miser", "A Win without Tanks", "A Win without Turrets", "Replicators Failing!", "My hands are clean...", "Gladiator", "AirMech Phalanx", "Destroy 1000 Creeps", "Death from Above", "Kicking Tires", "Blood Thirsty", "Can't Touch This", "Turret Breaker", "Boosted", "Mince Meat", "Project Lehman", "Map Control (part 1)", "Map Control (part 2)", "Map Control (part 3)", "Fortress Assault (part 1)", "Fortress Assault (part 2)", "Nerves of Steel", "Damage Inc.", "Master Thief", "Hellfire", "Kill 250 Tanks", "Moving on Up", "Going Pro", "King of the Mountain", "On a Roll", "Rock you like a Hurricane!", "Interceptor", "Finish Him!", "Called to Duty", "New Pair of Shoes", "Costume Quest", "Masquerade Ball", "Valedictorian", "Tank Killer", "Creep Killer", "Guns Blazin'", "From Below", "Let's do this", "Coming back for more!", "Match made in heaven", "Serious Competitor", "So good!", "Can't stop eating!", "I put on my robe and Santa hat.", "Deck the halls!", "FA LA LA LA LA, LA LA LA LA!", "Functional and Stylish", "20% Cooler", "Do a barrel roll!", "United in Combat", "Power Play +2", "Challenger: 12 Stars", "Challenger: 24 Stars", "Challenger: 36 Stars"];

    assert.strictEqual(officialAchievementNames.length, 91, "sanity check on this test's own reference list");

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
