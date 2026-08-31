import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/forced-showdown.json - 81 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 265000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("forced-showdown");

test("getPlannerData('forced-showdown') returns real planner data with 81 curated achievements", () => {

    assert.ok(game, "expected real planner data for forced-showdown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 81);

});

test("every FORCED SHOWDOWN achievement has a unique id from 1 to 81 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 81 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 81);
    assert.strictEqual(new Set(apinames).size, 81);

});

test("every FORCED SHOWDOWN achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 81 FORCED SHOWDOWN achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["¡Toro! ¡Toro!", "Win 3 battles with Denver as companion, without getting hit by him."],
        ["/ignore", "Win a battle without killing any summoned enemies."],
        ["All Spent", "Win a battle with no cards or mana left."],
        ["All Yours", "Beat 5 arenas with Stormy getting all kills."],
        ["Anti-Mage", "Win a battle without playing any spells."],
        ["Assembly Line", "Use 30 zapperbots."],
        ["Bend it Like Beckham", "Play a kicker-effect with 8+ extra mana."],
        ["Best Pals", "Beat 15 arenas with your companion surviving."],
        ["Beware of Companion", "Kill 100 enemies with your companion."],
        ["Big Spender", "Spend 20 mana in one card phase."],
        ["Blazing Through", "Beat The Mentor's Maze with Volco."],
        ["Brace for Impact", "Hit 6 enemies with one Jetpack Jump."],
        ["Bubble Pop", "Burst 5 plasma balls in 10 seconds."],
        ["Burned", "Beat a boss with Volco without taking damage."],
        ["Caaareful", "Win a battle without personally destroying any barrels."],
        ["Calcium Deficiency", "Defeat Mordar in Frontline."],
        ["Can't Touch This", "Clear 3 arenas in a row without taking damage."],
        ["Carnage Complete", "Beat The Grand Return with Ravager."],
        ["Champion", "Win 100 battles."],
        ["Cheater", "Play 8 cards in one turn."],
        ["Close One", "Prevent 100 damage with a single Guardian Light."],
        ["Contender", "Win 10 battles."],
        ["Critical Mass", "Reach 100% crit chance."],
        ["Crowd Pleaser", "Reach 300 Points."],
        ["Dat Mana Curve Tho'", "Win a battle with no mana unspent (all arenas)."],
        ["Daylight Robbery", "Play a card that costs more than 8 mana."],
        ["Dismantler", "Dismantle 30 cards."],
        ["Don't Need 'em", "Win a battle without picking up any health globes. Globes sent to you by companion pickup or arena completion are allowed."],
        ["Eat It!", "Defeat Graw in Frontline."],
        ["Every Nook And Cranny", "Reach 1000 Points in The Mentor's Maze."],
        ["Fit as a Fiddle", "Reach 400 health."],
        ["Flawless Victory", "Beat a boss without taking damage."],
        ["Float Like a Butterfly", "Reach 85% block chance."],
        ["Getting Miffed", "Gain 1000 frenzy."],
        ["Gotta Go Fast", "Take no more than 20 seconds in any one arena in a battle."],
        ["Greased Lightning", "Beat a boss with Stormbringer without taking damage."],
        ["Guardian Light On Cooldown", "Beat a boss with Squire of Light without taking damage."],
        ["In Charge", "Beat The Mentor's Maze with Stormbringer."],
        ["Instant Karma", "Knock 30 enemies down with Magma Shield."],
        ["Just In Case", "Have 10 consumables in your consumable inventory at the same time."],
        ["Just Supplements", "Play 350 upgrade cards."],
        ["Keep 'em Coming", "Kill 400 enemies."],
        ["Light At The End", "Beat The Mentor's Maze with Squire of Light."],
        ["Lighting the Way", "Beat The Grand Return with Squire of Light."],
        ["Line 'em up", "Kill 4 enemies with one Pulse Rifle piercing shot."],
        ["Locked and Loaded", "Have consumables in all 4 slots."],
        ["Loot Ninja", "Collect 300 points."],
        ["MacGyverism", "Play a Spell, an Upgrade and a Consumable card in one turn."],
        ["Mana Surplus", "Win a battle with no cards left in hand."],
        ["Maze Mission Accomplished", "Beat The Mentor's Maze with Settsu."],
        ["Maze Runner", "Complete The Mentor's Maze in 12 battles or less (bonus battles don't count)."],
        ["Not a Scratch", "Beat a boss with Ravager without taking damage."],
        ["Pacifist Pet", "Win a battle without your companion killing any enemies."],
        ["Pinball Master", "Kill 10 enemies with the Pinball."],
        ["Points Of The Maze", "Collect 5000 points in The Mentor's Maze."],
        ["PokéMaster", "Beat Frontline or higher with 3 different companions."],
        ["Punching Bag", "Win a battle, having taken 1000+ damage."],
        ["Putting the Magic in MTG", "Play 150 spell cards."],
        ["R3-KT Got Wrecked", "Complete The Mentor's Maze in 9 battles or less (bonus battles don't count)."],
        ["Reaper Man", "Kill 1500 enemies."],
        ["Record Breaker", "Clear 5 arenas in less than 12 seconds each."],
        ["Show Off", "Win a battle without using your basic attack."],
        ["Showmanship", "Collect 100 points."],
        ["Spare The Rod", "Win a battle with the Raff's Son modifier without ever letting him survive."],
        ["Straight", "Win a battle, having played cards of mana cost 0, 1, 2, 3, 4, 5, 6, 7."],
        ["Strike!", "Kill 6 enemies with 1 Volcanic Strike."],
        ["Surpassing The Mentor", "Complete The Mentor's Maze."],
        ["Take A Bow", "Finish your first Campaign (win or lose)."],
        ["Tamagochi Master", "Win a battle without letting your companion die."],
        ["Tanks For Nothing", "Defeat Ruby von Wouthingtonne IV in Frontline."],
        ["The Revolver", "Kill 6 enemies in 6 seconds."],
        ["The Spice of Life", "Beat Frontline or higher with 2 different contestants."],
        ["Thunderous Applause", "Beat The Grand Return with Stormbringer."],
        ["Too Much Coffee", "Perform 5 strafes within 8 seconds."],
        ["Tough Enough", "Win a battle without playing more than 2 upgrades."],
        ["Trailblazer", "Beat The Grand Return with Volco."],
        ["Trinkets 'r' Me", "Play 150 consumable cards."],
        ["Uncaged", "Beat The Mentor's Maze with Ravager."],
        ["Where are my Rupees?", "Destroy 14 barrels within 2 seconds."],
        ["You are The One", "Win a battle with the Heat Wave rule without getting hit by the fireballs."],
        ["You're Fired!", "Complete The Crucible."],
    ];

    assert.strictEqual(officialAchievements.length, 81, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
