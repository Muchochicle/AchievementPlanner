import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/megabonk.js";

test("the Megabonk guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "megabonk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "megabonk");

});

test("the Megabonk guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Unlocks & Tome Levels",
            "Damage Types, Characters & Stages",
            "Tomes, Weapons & Shrines",
            "Quests, Slots & Hidden",
            "Challenges & the Graveyard",
            "Hats & Cosmetics",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 139-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /139 Steam achievements/);

});

test("every one of the 139 official Megabonk achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Battery", "Boss Buster", "Cactus", "Cursed Doll", "Forbidden Juice", "Brass Knuckles", "Bob (Dead)", "Anvil", "Ghost", "Ice Crystal", "Key", "Skuleg", "Tactical Glasses", "Turbo Socks", "Demonic Blade", "Demonic Blood", "Echo Shard", "Golden Sneakers", "Idle Juice", "Kevin", "Leeching Crystal", "Poison Gloves", "Cursed Gloves", "Demonic Soul", "Eagle Claw", "Gamer Goggles", "Gas Mask", "Grandma's Secret Tonic", "Shattered Knowledge", "Cannon", "Toxic Barrel", "Turbo Skates", "Bloody Cleaver", "Chonkplate", "Dragonfire", "Energy Core", "Holy Book", "Joe's Dagger", "Lightning Orb", "Soul Harvester", "Speedboi", "Sucky Magnet", "Amog", "Athena", "Bandit", "Birdo", "Bush", "Calcium", "Sir Chadwell", "CL4NK", "Dicehead", "Megachad", "Monke", "Ninja", "Noelle", "Ogre", "Robinette", "Spaceman", "Tony McZoom", "Vlad", "Armor Tome", "Attraction Tome", "Blood Tome", "Chaos Tome", "Cursed Tome", "Duration Tome", "Luck Tome", "Quantity Tome", "Thorns Tome", "XP Tome", "Aegis", "Aura", "Axe", "Bananarang", "Black Hole", "Blood Magic", "Corrupted Sword", "Dexecutioner", "Dice", "Dragon's Breath", "Frostwalker", "Hero Sword", "Katana", "Mines", "Poison Flask", "Revolver", "Shotgun", "Rockets", "Sniper", "Space Noodle", "Tornado", "Wireless Dagger", "Banish", "Boombox", "Desert", "Refresh", "Skip", "Toggler", "Tome Slots", "Weapon Slots", "Weapon Slots 2", "Tome Slots 2", "Quin's Mask", "Wallhugger", "Challenges1", "Challenges2", "Challenges3", "Challenges4", "Graveyard", "Scythe", "Roberto", "Old Mask", "Pumpkin", "Bob's Light", "Snek", "Pot (stainless steel)", "Wizard's Hat", "Santa Hat", "Cheesy Hat", "Clown", "Crown", "Green Frog", "Blue Frog", "Red Frog", "Headset", "Kevin Hat", "Magic hat", "Iron Helm", "Microwave", "Pilot Helm", "Head Pot", "Shady Hat (black)", "Shady Hat (blue)", "Shady Hat (pink)", "Shady Hat (gold)", "Sheriff's Hat", "Sunglasses", "Top Hat", "Looooong Top Hat"];

    assert.strictEqual(officialAchievementNames.length, 139, "sanity check on this test's own reference list");

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
