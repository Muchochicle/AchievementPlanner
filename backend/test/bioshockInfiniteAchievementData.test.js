import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bioshock-infinite.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 8870 (fetched through this app's own services/steamApi.js).
// 59 of 80 ship a real, official Steam description, quoted
// verbatim below. The 21 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bioshock-infinite");

test("getPlannerData('bioshock-infinite') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for bioshock-infinite");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every BioShock Infinite achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every BioShock Infinite achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 officially-described BioShock Infinite achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Achievement_1",
        "Achievement_2",
        "Achievement_3",
        "Achievement_4",
        "Achievement_5",
        "Achievement_6",
        "Achievement_7",
        "Achievement_8",
        "Achievement_9",
        "Achievement_10",
        "Achievement_11",
        "Achievement_12",
        "Achievement_13",
        "Achievement_14",
        "ACHIEVEMENT_61",
        "ACHIEVEMENT_62",
        "ACHIEVEMENT_70",
        "ACHIEVEMENT_71",
        "ACHIEVEMENT_72",
        "ACHIEVEMENT_73",
        "ACHIEVEMENT_75",
    ]);

    assert.strictEqual(hiddenApinames.size, 21, "sanity check - BioShock Infinite has 21 hidden achievements");

    const officialAchievements = [
        ["A Real Pistol", "Killed 25 enemies with the Broadsider Pistol."],
        ["Aerial Assassin", "Killed 20 enemies with a Sky-Line Strike."],
        ["Audio Enthusiast", "Collected all Audio Diaries in Burial at Sea - Episode 1."],
        ["Big Game Hunter", "Killed 100 enemies with the Founder Huntsman Carbine or Vox Burstgun."],
        ["Blue Ribbon Champ", "In CitC, completed all Blue Ribbon Challenges."],
        ["Bolt From the Blue", "Killed 5 enemies with a headshot while riding a Sky-Line."],
        ["Bon Voyage", "Killed 20 enemies by knocking them off Columbia."],
        ["Break the Ice", "Shattered 5 enemies who had been frozen with Old Man Winter."],
        ["Chain Reaction", "Damaged fifteen foes with an exploding enemy, using the Radar Range in Burial at Sea - Episode 1."],
        ["Coins in the Cushion", "Looted 200 containers."],
        ["Combination Shock", "Performed all 8 of the Vigor combinations."],
        ["Confirmed Luddite", "Destroyed ten Turrets in Burial at Sea - Episode 1."],
        ["Cook and Serve", "Made 5 enemies explode with the Radar Range in Burial at Sea - Episode 1."],
        ["David & Goliath", "Killed 20 \"Heavy Hitter\" enemies."],
        ["Dead Drop", "On three occasions, knocked out an enemy after silently dropping off a Freight Hook.  "],
        ["Dress for Success", "Equipped a piece of Gear in all four slots."],
        ["Duke or Dimwit?", "Defeated all waves in Duke and Dimwit Theater."],
        ["Eavesdropper", "Collected every Voxophone."],
        ["Friendly Skies", "Defeated all waves in The OPS Zeal."],
        ["Fully Equipped", "Purchased any two upgrades for Old Man Winter or Radar Range in Burial at Sea - Episode 1."],
        ["Glutton for Punishment", "Used Ironsides to collect 20 rounds of ammo or more in Burial at Sea - Episode 2. "],
        ["Grand Largesse", "Spent $10,000 at the vending machines of Columbia."],
        ["Hand of the Prophet", "Defeated all waves in Emporia Arcade."],
        ["Hazard Pay", "Killed 10 enemies by utilizing environmental hazards."],
        ["Heartbreaker", "Killed a Handyman by only shooting his heart."],
        ["Here Little Piggy", "Killed 30 enemies with the Founder Pig Volley Gun or Vox Hail Fire."],
        ["Industrial Accident", "Killed 20 enemies with a Sky-Hook Execution."],
        ["Infused with Greatness", "Collected every Infusion upgrade in a single game."],
        ["Kitted Out", "Fully upgraded one weapon and one Vigor."],
        ["Loose Cannon", "Killed 25 enemies with the Paddywhacker Hand Cannon."],
        ["Lost Weekend", "Killed 5 enemies while you are drunk."],
        ["Making Some Noise", "Gained five noisemakers through lockpicking."],
        ["Master of Pyrotechnics", "Killed 20 enemies with the Barnstormer RPG."],
        ["Mind Over Matter", "Killed 20 enemies using Possessed machines."],
        ["Missile Defense System", "In CitC, killed an enemy with splash damage by shooting a rocket out of the air."],
        ["More for Your Money", "Lured 3 enemies into a single Vigor trap 5 times."],
        ["Museum Curator", "In CitC, unlocked all Gallery items."],
        ["Never Saw It Coming", "While invisible, used Peeping Tom to knock out 15 enemies with a melee attack. "],
        ["On a Clear Day...", "Killed 30 enemies with the Bird's Eye Sniper Rifle."],
        ["On the Fly", "Killed 30 enemies while riding a Sky-Line."],
        ["Passionately Reciprocated", "Killed 150 enemies with the Founder Triple R Machine Gun or Vox Repeater."],
        ["Raising the Bar", "Upgraded one attribute (Health, Shield, or Salts) to its maximum level."],
        ["Rooftop Ruffian", "Defeated all waves in Raven's Dome."],
        ["Rope-a-Dope", "In CitC, knocked an enemy off the city with Undertow, then rescued him, then knocked him off again."],
        ["Scavenger Hunt", "Complete the game in 1999 Mode without purchasing anything from a Dollar Bill vending machine."],
        ["Seasoned to Taste", "Killed 30 enemies with the Peppermill Crank Gun."],
        ["Sergeant-at-Arms", "In CitC, got a kill with each weapon and vigor (except Bucking Bronco)."],
        ["Sightseer", "Used all telescopes and Kinetoscopes in the game."],
        ["Skeet Shoot", "Killed 5 enemies while they are falling."],
        ["Snowball Effect", "Froze 2 enemies with the same Old Man Winter trap."],
        ["Strange Bedfellows", "Killed 20 enemies using allies brought in through a Tear."],
        ["Street Sweeper", "Killed 50 enemies with the Founder China Broom Shotgun or Vox Heater."],
        ["Tear 'em a New One", "Opened 30 Tears."],
        ["The Ol' One-Two", "In CitC, used all eight different vigor combos to deliver the killing blow on an enemy."],
        ["The Roguish Type", "Used Elizabeth to pick 30 locks."],
        ["The Whole Story", "Collected all Audio Diaries and Voxophones in Burial at Sea - Episode 2. "],
        ["Twofer", "Knocked out two or more enemies using the same Gas Bolt. "],
        ["Vigorous Opposition", "Killed 75 enemies either with a Vigor or while the enemy is under the effects of a Vigor."],
        ["Well Rounded", "Used all 8 Vigors against enemies."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 21 hidden BioShock Infinite achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement_1", "Written in the Clouds"],
        ["Achievement_2", "Welcome to Monument Island"],
        ["Achievement_3", "Shock Tactics"],
        ["Achievement_4", "First Class Ticket"],
        ["Achievement_5", "Armed Revolt"],
        ["Achievement_6", "Working Class Hero"],
        ["Achievement_7", "Blood in the Streets"],
        ["Achievement_8", "Higher Learning"],
        ["Achievement_9", "The Bird or The Cage"],
        ["Achievement_10", "Tin Soldier"],
        ["Achievement_11", "Saw the Elephant"],
        ["Achievement_12", "Stone Cold Pinkerton"],
        ["Achievement_13", "Auld Lang Syne"],
        ["Achievement_14", "Should Auld Acquaintance..."],
        ["ACHIEVEMENT_61", "Down in the Briney"],
        ["ACHIEVEMENT_62", "Burial at Sea"],
        ["ACHIEVEMENT_70", "Going Places"],
        ["ACHIEVEMENT_71", "Up and Running"],
        ["ACHIEVEMENT_72", "Mein Hair"],
        ["ACHIEVEMENT_73", "Paid in Full"],
        ["ACHIEVEMENT_75", "Taffer's Delight"],
    ];

    assert.strictEqual(names.length, 21, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
