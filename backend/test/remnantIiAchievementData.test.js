import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/remnant-ii.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1282100 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("remnant-ii");

test("getPlannerData('remnant-ii') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for remnant-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every Remnant II achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every Remnant II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 65 Remnant II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Foul Feast", "(The Awakened King) Bring the Feast Master's food to the sewer NPC for his ring."],
        ["All These Traits...", "Obtain 10 Traits"],
        ["Almost There", "Upgrade a Boss Weapon to +5"],
        ["Am I Seeing This?", "Defeat 10 Aberrations."],
        ["B.O.T.", "(The Dark Horizon) Repair the B.O.T. with all four Prototype parts, activating the Memory Core's light mechanism first."],
        ["Bad Moon Rising", "Craft an item at a Blood Moon Altar during a full blood moon."],
        ["Blue Goddess", "Meet Nimue in Nimue's Retreat (Losomn)."],
        ["Boss'n Up", "Craft a Boss Weapon"],
        ["Carnage in C-Minor", "Play the secret song on the Water Harp after defeating the Ravager."],
        ["Chaos", "Defeat the Corrupted Ravager in Yaesha (solve the Water Harp and kill the doe)."],
        ["Crafty", "Craft 15 Weapon Mods"],
        ["Cutting Edge", "Acquire 20 Melee Weapons"],
        ["Dark Designs", "Defeat the Nightweaver in the Tormented Asylum (Losomn)."],
        ["Duality", "Slot a Second Archetype"],
        ["Edgelord", "Acquire 10 Melee Weapons"],
        ["Equal Measures", "Receive an alignment reading from Meidra in Yaesha."],
        ["Expanding Horizons", "Craft a Non-Starter Weapon Mod"],
        ["Familiar Face", "Meet the Flautist in Yaesha."],
        ["First of Many", "Choose Your First Archetype"],
        ["Forever is a Long Time Coming", "Defeat Annihilation, the final boss."],
        ["Ghost in the Machine", "Defeat 25 Aberrations."],
        ["Gleaming the Cube", "Defeat the Labyrinth Sentinel (after defeating your first World Boss)."],
        ["Good, but Could be Better!", "Upgrade a Standard Weapon to +10"],
        ["Madman's Paradise", "Defeat Tal'Ratha in the Forgotten Prison (N'Erud)."],
        ["Make Some Room", "Upgrade Relic Capacity"],
        ["Master of Elements", "(The Forgotten Kingdom) Acquire the Invoker Archetype."],
        ["Master of Technology", "(The Dark Horizon) Retrieve the Weathered Mechanism engram past the Custodian's glider in the Withered Necropolis and bring it to Wallace."],
        ["Master of the Dark Arts", "(The Awakened King) Acquire the Ritualist Archetype."],
        ["Maxed Out!", "Reach the maximum trait points (65 in the base game)."],
        ["No One Should Have All That Power", "Upgrade a Standard Weapon to +20"],
        ["Not a Janitor", "Meet the Custodian in the Ascension Spire (N'Erud)."],
        ["Not so special now", "Defeat 100 Special Enemies"],
        ["Not Your Average Trait", "Obtain a Non-Starter Trait"],
        ["Only Human", "Defeat a Boss in Single-Player Without Taking Any Damage"],
        ["Power Surge", "Defeat the Guardian of N'Erud in Sentinel's Keep (after collecting three Seeker's Keys)."],
        ["Proving Grounds", "Acquire 20 traits"],
        ["Quest for Survival", "Defeat a World Boss"],
        ["Red Room", "Discover the Blood Moon Room in Yaesha during a full blood moon."],
        ["Regicide", "(The Awakened King) Defeat the One True King."],
        ["Requiem of the Forgotten Kingdom", "(The Forgotten Kingdom) Complete the DLC story (defeat Lydusa)."],
        ["Scrap Collector", "Acquire 50,000 Scrap"],
        ["Scrap Hoarder", "Acquire 100,000 Scrap"],
        ["Shhh...It's a Secret", "Obtain a secret Archetype through its hidden questline (e.g. the Archon)."],
        ["Still Not a Janitor", "(The Dark Horizon) After defeating Alepsis-Taura, exhaust the Custodian's dialogue and choose the right options to receive the Custodian's Bastion ring."],
        ["Strapped", "Acquire 15 Guns"],
        ["Succession", "(The Awakened King) Discover the One True Ending."],
        ["Tall Tales", "Listen to all of Mudtooth's stories at Ward 13."],
        ["Thank You For Being a Friend", "(The Forgotten Kingdom) Forge a friendship with Walt."],
        ["The Agenda", "Discover Leto's Lab in Ward 13's hidden chamber (via the Biome Portal Key)."],
        ["The Burden Hardest to Bear", "(The Forgotten Kingdom) Return the Trinity amulet to Dwell after collecting a Trinity Memento."],
        ["The Collector", "Acquire 10 Relics"],
        ["The God Gambit", "Defeat the Corruptor (Many Faces) in The Great Bole (Yaesha)."],
        ["The Killing Jar", "Defeat the Root Mantis at the end of the tutorial."],
        ["The Master Builder", "(The Dark Horizon) Buy nine unique items from Spark's shop (excluding consumables and concoctions) to earn the Redeemer."],
        ["The Trigger", "Acquire 30 Guns"],
        ["The Ultimate Doom", "Complete The Dark Horizon Story"],
        ["The Ultimate Weapon", "Upgrade a Boss Weapon to +10"],
        ["The Web", "Obtain an item from the Nightweaver's Web (place the Nightweaver Stone Doll into the web in the Tormented Asylum)."],
        ["Top Performer", "Reach Level 10 on Any Archetype"],
        ["Trait Chaser", "Upgrade Any Trait to 10"],
        ["Traitor", "Defeat the Fae Imposter in Malefic Palace (Losomn)."],
        ["Transmutate", "Upgrade a weapon Mutator to level +10."],
        ["Triple Takeover", "(The Forgotten Kingdom) Acquire the Trinity Crossbow."],
        ["Was This Supposed To Happen?", "Acquire a World Boss's Alternate Reward"],
        ["You Shall Pass", "(The Awakened King) Get the bridge guard's ring by talking to him while shrouded from view."],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
