import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lies-of-p.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1627720 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lies-of-p");

test("getPlannerData('lies-of-p') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for lies-of-p");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Lies of P achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Lies of P achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Lies of P achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Anguished Guardian", "Lies of P: Overture - defeat the Anguished Guardian of the Ruins."],
        ["Bear Gold Coin Fruit", "Meet Giangio, defeat the Eldest of the Black Rabbit Brotherhood, then interact with him to reveal the Gold Coin Tree."],
        ["Beyond Limitless Potential", "Further upgrade the abilities of the P-Organ."],
        ["Corrupted Parade Master", "Defeat the Corrupted Parade Master."],
        ["End of Riddles", "Discover all Trinity Sanctums."],
        ["Enduring Resolve", "Lies of P: Overture - after the final battle, follow the white butterfly to Lea's Recollection and listen to it in full."],
        ["Exploring Possibilities", "Try to assemble a weapon."],
        ["Extreme Potential", "Activate P-Organ to Phase 5."],
        ["Fallen Archbishop", "Defeat Fallen Archbishop Andreus."],
        ["Fatal Blow", "Deliver a successful Fatal Attack."],
        ["First Lie", "Tell a lie in front of the Hotel Krat entrance (a mandatory story choice)."],
        ["Free from the puppet string", "Reach minimum Humanity, let Sophia live, refuse Geppetto the heart, then defeat the Nameless Puppet - the 'Free from the Puppet String' ending."],
        ["From Across the Rift", "Kill all types of Dimensional Butterflies."],
        ["Golden Melody", "Collect and play all records."],
        ["Honor and Revenge", "Lies of P: Overture - defeat the Leader of the Bastards and the Leader of the Sweepers."],
        ["King of Puppets", "Defeat Romeo, King of Puppets."],
        ["King's Flame", "Defeat King's Flame, Fuoco."],
        ["Learning about Emotions", "Learn all gestures."],
        ["Legion Arm Collector", "Collect all Legion Arms."],
        ["Memory's Melody", "Collect and listen to all records from the Forgotten Time."],
        ["Normal Weapon Collector", "Collect all normal weapons."],
        ["Parade Master", "Defeat the Parade Master."],
        ["Pianist of Krat", "Play a perfect tune on the piano at Hotel Krat."],
        ["Puppet-Devouring Green Monster", "Defeat the Puppet-Devouring Green Monster."],
        ["Puppeteer of Death", "Lies of P: Overture - defeat Markiona, the Puppeteer of Death."],
        ["Real boy : They all lived happily ever after", "Give Geppetto the heart when prompted at the end of the game - the 'Real Boy' ending."],
        ["Revenge of Black", "Defeat the Black Rabbit Brotherhood."],
        ["Rise of P", "Reach maximum Humanity, give Sophia peace, refuse Geppetto the heart, then defeat the Nameless Puppet - the 'Rise of P' ending."],
        ["Scrapped Watchman", "Defeat the Scrapped Watchman."],
        ["Special Weapon Collector", "Collect all special weapons."],
        ["Stargazer’s Guide", "Repair a Stargazer."],
        ["Strongest Legion Arm", "Modify a Legion Arm to its max level."],
        ["Strongest Normal Weapon", "Strengthen a normal weapon to its max level."],
        ["Strongest Special Weapon", "Strengthen a special weapon to its max level."],
        ["The Awakened God", "Defeat Awakened God Simon Manus."],
        ["The Bastards and the Sweepers", "Kill a Stalker."],
        ["The Blood Artist", "Lies of P: Overture - defeat the Blood Artist."],
        ["The Champion of Evolution", "Defeat Champion Victor."],
        ["The Complete One", "Defeat Laxasia the Complete."],
        ["The Delayed Match", "Defeat the Eldest of the Black Rabbit Brotherhood."],
        ["The First Puppet", "Defeat the Nameless Puppet, the secret final boss."],
        ["The Rose's Memory", "Lies of P: Overture - reach the DLC's ending."],
        ["The Story of a Stranger Girl", "Find out about the last story of Eugénie."],
        ["The Story of One Father", "Find out about the last story of Geppetto."],
        ["The Story of the Blue Butterfly", "Find out about the last story of Sophia."],
        ["The Story of the One Who Dreamed", "Find out the last story of the One Who Dreamed (unlocks on defeating Awakened God Simon Manus)."],
        ["The Story of the Prince", "Find out about the last story of Venigni."],
        ["The Story of the Refined Old Lady", "Find out about the last story of Antonia."],
        ["The Ultimate Defense Technique", "Destroy an enemy’s weapon with a perfect guard."],
        ["To Be Human", "Learn all gestures from the Forgotten Time."],
        ["Tracker of Dark Secrets", "Decrypt all clues hidden inside the cipher machines and claim the rewards."],
        ["True Combat Gear Collector", "Collect all weapons and Legion Arms in the Forgotten Time."],
        ["Veteran Explorer", "Decipher all cryptic vessels and claim the rewards."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
