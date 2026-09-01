import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/severed-steel.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1227690 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("severed-steel");

test("getPlannerData('severed-steel') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for severed-steel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Severed Steel achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Severed Steel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Severed Steel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 RUNS", "COMPLETED 10 ROGUE STEEL RUNS."],
        ["100 KILLS", "GOT 100 KILLS"],
        ["1000 KILLS", "GOT 1000 KILLS"],
        ["20 RUNS", "COMPLETED 20 ROGUE STEEL RUNS."],
        ["200 HEADSHOTS", "GOT 200 HEADSHOTS"],
        ["5 RUNS", "COMPLETED 5 ROGUE STEEL RUNS."],
        ["50 HEADSHOTS", "GOT 50 HEADSHOTS"],
        ["BUT WHY?", "KILL ALL ENEMIES IN PRODUCTION LAB BEFORE DESTROYING ANY OBJECTIVES."],
        ["CATHARTIC ESCAPISM", "BEAT THE ESCAPISM CAMPAIGN LEVEL"],
        ["CHALET", "COMPLETE THE CHALET BONUS CAMPAIGN"],
        ["CHURCH", "COMPLETE THE CHURCH BONUS CAMPAIGN"],
        ["COMMAND - [EXIST]", "COMPELTED THE COMMAND - [ EXIST ] BONUS CAMPAIGN"],
        ["COMPLIMENTS TO THE CHEF", "BEAT THE CAFETERIA CAMPAIGN LEVEL IN NEW GAME + MODE WITH THE WARRIOR MONK MUTATOR"],
        ["FINISH CHAPTER 5", "FINISH CHAPTER 5"],
        ["FINISH CHAPTER 6", "FINISH CHAPTER 6"],
        ["FINISHED CHAPTER 1", "FINISHED CHAPTER 1"],
        ["FINISHED CHAPTER 2", "FINISHED CHAPTER 2"],
        ["FINISHED CHAPTER 3", "FINISHED CHAPTER 3"],
        ["FINISHED CHAPTER 4", "FINISHED CHAPTER 4"],
        ["FIRE IN THE HOLE", "BEAT THE GREENS CAMPAIGN LEVEL WITH THE FLOOR IS LAVA MUTATOR"],
        ["FIREFIGHT LEVEL 10", "FIREFIGHT LEVEL 10"],
        ["FIREFIGHT LEVEL 20", "FIREFIGHT LEVEL 20"],
        ["FIREFIGHT LEVEL 30", "FIREFIGHT LEVEL 30"],
        ["FIREFIGHT LEVEL 40", "FIREFIGHT LEVEL 40"],
        ["FIREFIGHT LEVEL 50", "FIREFIGHT LEVEL 50"],
        ["FIREFIGHT LEVEL 60", "FIREFIGHT LEVEL 60"],
        ["FIREFIGHT LEVEL 70", "FIREFIGHT LEVEL 70"],
        ["FIREFIGHT LEVEL 80", "FIREFIGHT LEVEL 80"],
        ["FIRST BLOOD", "FINISH YOUR FIRST ROGUE STEEL RUN."],
        ["FRESH", "COLLECTED ALL ROGUE STEEL JACKETS."],
        ["HEY THATS CHEATING", "BEAT THE ADMIN VENTS CAMPAIGN LEVEL WITHOUT ACTIVATING ANY OF THE FAN SWITCHES."],
        ["HOLOGRAM SUMMER", "COMPLETE THE CITY LEVEL IN CAMPAIGN MODE WITH META CANNON EQUIPPED."],
        ["HUGE SUCCESS", "BEAT THE PORTAL LABS CAMPAIGN LEVEL WITH THE ONE IN THE CHAMBER MUTATOR"],
        ["ICARUS", "COMPLETE THE ICARUS BONUS CAMPAIGN"],
        ["INPUT - [QUERY]", "COMPLETE THE INPUT - [QUERY] BONUS CAMPAIGN"],
        ["KITTED OUT", "COLLECTED ALL ROGUE STEEL CANNON SKINS."],
        ["MIRRORED", "COMPLETE A MIRRORED LEVEL IN FIREFIGHT 2.0"],
        ["NEW GAME PLUS", "COMPLETED A NEW GAME PLUS CAMPAIGN"],
        ["OFF THE HINGES", "BEAT THE CORRIDOR CAMPAIGN LEVEL WHILE EQUIPPED WITH THE GRAVITY ARM CANNON."],
        ["ON THE EDGE", "COMPLETED A ROGUE STEEL RUN WITH THE \"PERMA-DEATH\" ADVANCED RULE ON."],
        ["OUT OF ORDER", "BEAT THE MIDDLE ADMIN CAMPAIGN LEVEL WITHOUT USING THE STAIRS."],
        ["OVERCLOCKED", "BEAT THE SERVER ROOM CAMPAIGN LEVEL WITH THE FLOOR IS LAVA MUTATOR"],
        ["PACEMAKER", "DESTROY THE HEART WITHIN 60 SECONDS OF BRINGING ITS SHIELD DOWN."],
        ["PAIN TRAIN", "BEAT THE TRAIN STATION CAMPAIGN LEVEL DEFEATING EVERY ENEMY BEFORE BOARDING THE TRAIN."],
        ["PARTY HARD", "COMPLETE THE PARTY MANSION CAMPAIGN LEVEL IN NEW GAME PLUS MODE"],
        ["REMEMBER THE ARMORY", "BEAT THE ARMORY CAMPAIGN LEVEL IN NEW GAME + MODE DEFEATING EVERY ENEMY BEFORE LEAVING THE LEVEL"],
        ["S RANK", "GOT YOUR FIRST S RANK IN FIREFIGHT 2.0"],
        ["S RANK X 15", "GOT 15 S RANKS IN FIREFIGHT 2.0."],
        ["S RANK X 30", "GOT 30 S RANKS IN FIREFIGHT 2.0"],
        ["S RANK X 5", "GOT 5 S RANKS IN FIREFIGHT 2.0"],
        ["SAVOR THE MOMENT", "BEAT THE MUSEUM CAMPAIGN LEVEL WITH THE LIMITED SLOW-MO MUTATOR"],
        ["SCIENCE AND INDUSTRY", "COMPLETE THE R&D AND PRODUCTION LAB LEVELS IN CAMPAIGN MODE CHAPTER 1"],
        ["SOUL - HORIZONS", "COMPLETED THE SOUL - HORIZONS BONUS CAMPAIGN"],
        ["THE COLLECTOR", "COLLECTED ALL ROGUE STEEL PERK CARDS."],
        ["THE GAMBLER", "COMPLETED A ROGUE STEEL RUN WITH THE \"RANDOM SELECT\" ADVANCED RULE ON."],
        ["TIME PARADOX", "COMPLETE CYBERMEDICINE CAMPAIGN LEVEL WITH AN ARM CANNON EQUIPPED."],
        ["WARRIOR IN A GARDEN", "BEAT THE GARDENS CAMPAIGN LEVEL WITH THE WARRIOR MONK MUTATOR AND DEFEATING EVERY ENEMY"],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
