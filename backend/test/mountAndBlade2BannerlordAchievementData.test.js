import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mount-and-blade-2-bannerlord.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 261550 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mount-and-blade-2-bannerlord");

test("getPlannerData('mount-and-blade-2-bannerlord') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for mount-and-blade-2-bannerlord");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Mount & Blade II: Bannerlord achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Mount & Blade II: Bannerlord achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Mount & Blade II: Bannerlord achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Against all odds", "Defeat a force that has 500 more troops than you"],
        ["Apple of my eye", "First born child."],
        ["Bannerlord", "Assemble Dragon Banner of Calradia."],
        ["Best served cold", "Execute a lord that has executed one of your clan members."],
        ["Butcher of Calradia", "Kill 10.000 other opponents in captain mode, with your troops."],
        ["Butterlord", "Have 100 butters in your inventory."],
        ["Catch", "Kill an enemy player with a boulder"],
        ["Crackshot", "Score a headshot from 200 meters away."],
        ["Crowdfunded", "Win 100 tournaments."],
        ["Crush your enemies", "Defeat 10.000 troops."],
        ["Duelist", "Defeat Radagos in a duel."],
        ["Dynasty", "Reach clan tier 6."],
        ["Entrepreneur", "Own a workshop and a caravan at the same time. "],
        ["Explorer", "Visit every settlement in the world in a game."],
        ["Fat Cat", "Make 1 million denars trade profit."],
        ["Freedom!", "Barbarian victory."],
        ["God of the Arena", "Become the leader of the tournament board."],
        ["Great Granny", "Become a great grandparent."],
        ["Headhunter", "Kill 100 enemy players with headshots with ranged weapons in multiplayer."],
        ["Heartbreaker", "Marry the widow of a lord or lady you personally executed."],
        ["Horde breaker", "Defeat an Army with your party alone."],
        ["I can do it", "Capture a town on your own. "],
        ["I spit on your grave", "Execute a lord that you have -100 relations with."],
        ["Jack of All Trades", "Get a kill with a melee weapon, mounted melee, ranged, mounted range, and cauch lance in one skirmish round. "],
        ["King Solomon", "Acquire 10000 denars a day."],
        ["Kingslayer", "Kill a faction King or Queen in battle."],
        ["Know your enemy", "Win 100 battles against enemy armies."],
        ["Lance-a-lot", "Kill 500 troops with a couched weapon while on horseback. "],
        ["Landlord", "Obtain your first fief."],
        ["Lawbringer", "Clear a hideout."],
        ["Lawmaker", "Propose and win a policy."],
        ["Long live the Empire!", "Imperial victory."],
        ["Mastery", "Increase any skill to 300."],
        ["Minor Clan", "Have your 7'th kid born."],
        ["Mounted Archery", "Kill 500 troops with range weapons while on horseback. "],
        ["My way", "Start your own Kingdom."],
        ["Real Estate ", "Assault and capture 100 fortifications."],
        ["Ride it like you stole it", "Spawning on foot, commandeer a mount and kill 5 enemy players without dying."],
        ["Roadkill", "Kill 100 enemies with charge damage in multiplayer."],
        ["Slice n dice", "Kill 10 enemies with a successful chain attack combo."],
        ["Strike!", "Kill 3 enemy players with a single mangonel shot."],
        ["Supreme Emperor", "Conquer all Calradia."],
        ["Swordbearer", "Craft a tier 6 sword."],
        ["The king is pleased", "Get 1.000 in tributes in a single day."],
        ["This Is Our Land", "Repel an attack on the walls."],
        ["This is Sparta!", "Kick an enemy player off a wall to death."],
        ["Trained", "Finish tutorial."],
        ["Undercover", "Complete an issue in a hostile town."],
        ["Veni vidi vici", "Become a king with 21 clans under your rule."],
        ["What have the Romans ever done for us?", "Complete all projects in a settlement."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
