import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/alien-swarm.js";

test("the Alien Swarm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "alien-swarm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "alien-swarm");

});

test("the Alien Swarm guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Tactical Feats",
            "Per-Weapon Kill Counts",
            "Campaign, Kill Grinds & Speed Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 66-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /66 Steam achievements/);

});

test("every one of the 66 official Alien Swarm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Clear Firing", "Short Controlled Bursts", "Shield Down", "Blast Radius", "Sharpshooter", "Perfect", "Scrambled Eggs", "Bug Stomper", "Parasite Puncher", "Close Encounters", "Smoking Barrels", "Infestation Savior", "Circuit Breaker", "Security Expert", "Group Heal", "Damage Amped", "Gunslinger", "Quick Load", "Peace Medic", "Protect the Tech", "Technician Secured", "Electro-Stunned", "Seal of Quality", "Under the Gun", "Quick and Dead", "Stay Frosty", "Ammo Technician", "Static Defender", "Assault Specialist", "Prototype Professional", "Autogun Expert", "Shotgun Specialist", "Vindicator Veteran", "Pistols Expert", "Small Arms Specialist", "High Voltage Expert", "Railgun Specialist", "Pyrotechnician", "Slaughter Soldier", "Minigun Master", "Professional Marksman", "Grenadier Expert", "Hornet Barrage Expert", "Tactical Explosives Expert", "Firewall Specialist", "Armory Access", "Easy Campaign", "Normal Campaign", "Hard Campaign", "Insane Campaign", "On the Ready Line", "Another Bughunt", "Kill Them All", "Nuke From Orbit", "Landing Bay Speed Run", "Cargo Elevator Speed Run", "Deima Surface Bridge Speed Run", "Rydberg Reactor Speed Run", "SynTek Residential Speed Run", "Sewer Junction Speed Run", "Timor Station Speed Run", "Outstanding Execution", "Zero Mortality", "Hat Trick", "Brutal Campaign", "Hardcore"];

    assert.strictEqual(officialAchievementNames.length, 66, "sanity check on this test's own reference list");

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
