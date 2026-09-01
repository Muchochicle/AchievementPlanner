import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monster-train-2.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2742830 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("monster-train-2");

test("getPlannerData('monster-train-2') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for monster-train-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Monster Train 2 achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Monster Train 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Monster Train 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Pact in Blood", "Win a run at Covenant 4."],
        ["Back to Basics", "Win a run without upgrading any cards."],
        ["Candlelit Champions", "Reach clan level 10 with The Melting Remnant."],
        ["Commander At Arms", "Win a run without playing any spells."],
        ["Complete Chrysalis", "Reach clan level 10 with The Wurmkin."],
        ["Demonic Domination", "Reach clan level 10 with The Hellhorned (a returning clan from the first game)."],
        ["Divinity Restored", "Reach Level 10 on The Banished."],
        ["Echoes of Greatness", "Win a run with all covenants enabled on The Wurmkin."],
        ["Forged in Fire", "Win a run with all covenants enabled on The Railforged."],
        ["From the Stars", "Unlock The Luna Coven."],
        ["Fungus Among Us", "Unlock The Underlegion."],
        ["Get the Band Back Together", "Summon Lead Songbird, Deathmetal Hymnist, Punk Shredder and Upbeat Warbler on the same floor."],
        ["Gluttony Fulfilled", "Reach clan level 10 with The Umbra."],
        ["Golden Gods", "Win a run with all covenants enabled on The Pyreborne."],
        ["Hell's Finest", "Have a monster deal at least 100 damage in one hit."],
        ["Hive Minded", "Win a run with all covenants enabled on The Underlegion."],
        ["In Their Depth", "Reach clan level 10 with The Stygian Guard."],
        ["Key To My Heart", "Unlock another Pyre Heart."],
        ["Kinslayer", "Win a run with all covenants enabled on The Banished."],
        ["Mad Science", "Unlock The Lazarus League."],
        ["Magical Tsunami", "Win a run with all covenants enabled on The Stygian Guard."],
        ["Malicka's Sidekick", "Win the Entropic Agony Dimensional Challenge."],
        ["Master of Morsels", "Win a run with all covenants enabled on The Umbra."],
        ["Masterful Magician", "Win a run without summoning any units."],
        ["Monster Master", "Achieve max level on all clans."],
        ["Monster of a Train", "Play a room card on all floors in one battle."],
        ["Moving On Up", "Level up any clan."],
        ["Mushroom Mayhem", "Reach Level 10 on The Underlegion."],
        ["Natural Order", "Win a run with all covenants enabled on The Awoken."],
        ["Out With the Old", "Purge all Steward cards from your deck."],
        ["Overkill", "Have a spell deal at least 175 damage in one hit."],
        ["Professors of Pain", "Win a run with all covenants enabled on The Lazarus League."],
        ["Quartermaster", "Add equipment to six units in one battle."],
        ["Rightful Rulers", "Win a run with all covenants enabled on The Hellhorned."],
        ["Roots Run Deep", "Reach clan level 10 with The Awoken."],
        ["Rule Breaker", "Create a Custom Challenge."],
        ["Running Up the Score", "Score at least 50,000 points in a Daily Challenge."],
        ["Soul of Spring", "Win a Soul Savior run at Bloom difficulty."],
        ["Soul of the Briar", "Win a Soul Savior run at Tangle difficulty."],
        ["Soul of the Verdant End", "Win a Soul Savior run at Overgrowth difficulty."],
        ["Steel Resolve", "Reach Level 10 on The Railforged."],
        ["Swift Demise", "Defeat Seraph Aeternus before his combat phase."],
        ["Tell Me More", "Trigger an optional dialogue in the Covenant Outpost."],
        ["The Doctors Are In", "Reach Level 10 on The Lazarus League."],
        ["The First but Not the Last", "Win a Standard Run."],
        ["The Gang's All Here", "Unlock all six original Monster Train clans."],
        ["The Living World", "Unlock all Souls."],
        ["The Titan of Souls", "Level up all Souls to max level."],
        ["Throne of Gold", "Reach Level 10 on The Pyreborne."],
        ["Titans' Torment", "Win a run at Covenant 8."],
        ["Titanslayer", "Defeat the Titans."],
        ["Total Eclipse", "Reach Level 10 on The Luna Coven."],
        ["Travel In Style", "Customize your train."],
        ["Tyrant Overthrown", "Defeat Seraph Aeternus."],
        ["Wait, There's More", "Unlock the Titans battle (the true final boss)."],
        ["War of the Heavens", "Win a run with all covenants enabled on The Luna Coven."],
        ["Was That Always Here?", "Unlock Malicka's Dimensional Portal."],
        ["Waxen Warriors", "Win a run with all covenants enabled on The Melting Remnant."],
        ["Will It Ever End?", "Win three consecutive battles in Endless mode."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
