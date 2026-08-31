import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/verdun.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("verdun");

test("getPlannerData('verdun') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for verdun");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Verdun achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Verdun achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Verdun achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["#1", "Receive the gold medal \"Best player\" 10 times"],
        ["Advance Australia", "Unlock all specializations for the ANZACs"],
        ["Aimbot", "Receive the gold medal \"Most shots & none missed\" 10 times"],
        ["Anker wirf!", "Unlock all specializations for the Pioniere"],
        ["Blast fishing", "Make a triple kill with explosives/grenades"],
        ["Blood Brother", "Play together with the same friend 250 times"],
        ["Bronze x100", "Receive a total of 100 bronze medals"],
        ["Buddy", "Play together with the same friend 50 times"],
        ["Comrade", "Play together with the same friend 100 times"],
        ["Corpseman I", "Reach 500 kills"],
        ["Corpseman II", "Reach 5,000 kills"],
        ["Corpseman III", "Reach 10,000 kills"],
        ["Developers, Developers, Developers", "Check out the credits screen"],
        ["Do You Even Die?", "Survive a full Frontlines match without dying."],
        ["Eagle Eye", "Kill an enemy from over 100 meters"],
        ["Extreme Headhunter", "In a Frontlines match headshot 5 enemies in a row without dying."],
        ["For King and Country", "Unlock all specializations for the Tommies"],
        ["Furchtlos und Treu", "Unlock all specializations for the Schutzen"],
        ["Gold Collector", "Receive all gold medals"],
        ["Gold Hoarder", "Receive all gold medals 10x"],
        ["Gold x100", "Receive a total of 100 gold medals"],
        ["Golden Headhunter", "Receive the gold medal \"Most headshots\" 10 times"],
        ["Gott Mit Uns", "Unlock all specializations for the Landsers"],
        ["Headhunter", "Make 100 headshots"],
        ["Headhunter II", "Make 1,000 headshots"],
        ["Headhunter III", "Make 5,000 headshots"],
        ["Honneur et Patrie", "Unlock all specializations for the Poilus"],
        ["Hunting the Hun", "Receive the gold medal \"Best Kill/Death ratio over 10 kills\" 10 times"],
        ["Impavidum Ferient Bella!", "Unlock all specializations for the Tirailleurs"],
        ["In My Defens God Me Defend", "Unlock all specializations for the Highlanders"],
        ["In Treue Fest", "Unlock all specializations for the Alpenjäger"],
        ["Let them, come to us", "Receive the gold medal \"Best defence squad\" 10 times"],
        ["Level 100", "Reach personal level 100"],
        ["Level 25", "Reach personal level 25"],
        ["Level 50", "Reach personal level 50"],
        ["Level 75", "Reach personal level 75"],
        ["Manual Labour I", "Make 10 melee kills"],
        ["Manual Labour II", "Make 100 melee kills"],
        ["Manual Labour III", "Make 500 melee kills"],
        ["Not alone", "Join a friend"],
        ["Offense is the best defence", "Receive the gold medal \"Best advancing squad\" 10 times"],
        ["Providentiae Memor", "Unlock all specializations for the Stoßtrupp"],
        ["Semper Fidelis!", "Unlock all specializations for the Marines"],
        ["Setting an example", "Kill 10 enemies as a squad NCO in 1 match"],
        ["Shoot, Cover, Reload, Repeat", "Receive the gold medal \"Most kills\" 10 times"],
        ["Sidi Brahim", "Unlock all specializations for the Chasseurs"],
        ["Silver Collector", "Receive all silver medals"],
        ["Silver Hoarder", "Receive all silver medals 10x"],
        ["Silver x100", "Receive a total of 100 silver medals"],
        ["That's another one down!", "Receive the gold medal \"Longest killstreak\" 10 times"],
        ["There is no I in team", "Receive the gold medal \"Best squad of match\" 10 times"],
        ["This We'll Defend!", "Unlock all specializations for the Doughboys"],
        ["Voor De Koning", "Unlock all specializations for the Belgians"],
        ["War is better with friends I", "Gain 10k co-op XP with a player"],
        ["War is better with friends II", "Gain 50k co-op XP with a player"],
        ["War is better with friends III", "Gain 100k co-op XP with a player"],
        ["War is better with friends IV", "Gain 250k co-op XP with a player"],
        ["We Stand on Guard", "Unlock all specializations for the Canadians"],
        ["Worth It", "Kill an enemy player while you are dead"],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
