import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mullet-madjack.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2111190 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mullet-madjack");

test("getPlannerData('mullet-madjack') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for mullet-madjack");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every MULLET MADJACK achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every MULLET MADJACK achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 MULLET MADJACK achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["90’S EXPERIENCE", "Meet your old VR pet friend."],
        ["ANTI MATERIAL SCHARFSCHÜTZENGEWEHR", "get the Sniper rifle!"],
        ["BACK TO FLOOR ONE!", "meet death for the first time."],
        ["BALLS OF STEEL!", "Shot 200 robots in the..."],
        ["BANDIT", "get the Submachine gun!"],
        ["BEHOLD!", "BAN (defeat) the first Abomination boss."],
        ["BLUE SNEAKERS!", "Beat all chapters on CHALLENGE MODE!"],
        ["BOOMSTICK", "buy the double barrel Shotgun upgrade (LVL 2)"],
        ["CAT PERSON", "BAN a Hunter!!!"],
        ["CHECKPOINT!", "complete the first chapter!"],
        ["D-FENS", "BAN a Defender!!!"],
        ["ENVIRONMENTALIST", "Destroy someone using the environment!"],
        ["GANGSTA STYLE", "fully upgrade your Submachine gun (LVL 3)"],
        ["GOLDEN BOY", "BAN the Golden Zombie."],
        ["GOODBYE MR. DOPAMINE", "Take part in a JAN-KEN-PO (rock-paper-scissors) battle."],
        ["GREEN SNEAKERS!", "Beat all chapters on NO TIMER MODE!"],
        ["HEADHUNTER", "BAN the second Abomination boss."],
        ["HEADSHOT!", "Meet Mr. Bullet."],
        ["I SEE YOU!!!", "BAN the Invisible Samurai."],
        ["INVISIBLE!", "BAN an Invisible Robot!!!"],
        ["IS THAT A KATANA?!?!", "get the Sword!"],
        ["IS THIS A MECHA ANIME?", "BAN the final big robot boss."],
        ["IT'S KIND OF MAGIC!", "THROW your katana like a boomerang!!!"],
        ["KAMIKAZE", "get the Shotgun!"],
        ["KICK THEM ALL!", "KICK 1000 Rich Robots!"],
        ["LET’S KICK SOME ICE!", "kick a frozen Robot"],
        ["NANI? ナニ？", "Finish 100 enemies!"],
        ["NO RELOAD!", "buy one of the infinite ammo upgrades"],
        ["NUTJOB", "shoot someone in the..."],
        ["OBEY AND CONSUME", "Finish the EPILOGUE and get your SNEAKERS!!!"],
        ["PEW PEW!", "get the Joke weapon!"],
        ["PHANTER", "switch back to the Revolver..."],
        ["PURPLE SNEAKERS!", "Beat all chapters on HARD MODE!"],
        ["REST IN PIECES!!!", "explode 100 rich RobotS!"],
        ["RIOTER", "kick or destroy the shield of a Defender Robot!"],
        ["S-rank", "Get an S-RANK in any chapter"],
        ["SLIDER", "launch a Robot to the air when Sliding"],
        ["SNIPER!", "Kill 10 snipers in the battle of CHAPTER 3! "],
        ["SPACE MARINE", "fully upgrade your Railgun (LVL 3)"],
        ["SUGAR BOMB!", "use a Soda can as a GRENADE!"],
        ["SUNFIRE", "get the Railgun!"],
        ["SURVIVOR", "Enter the ENDLESS MODE via MAIN MENU"],
        ["SY... ONARA!!!", "slice a Rich Robot in half!"],
        ["THE MANGA IS BETTER!", "introduce your favorite Manga to some poor guy"],
        ["UNBOXING", "Try our VIRTUAL UNBOXING experience"],
        ["WANDERER", "BAN a Zombie!!!"],
        ["WELCOME TO PEACE CORP!", "conclude the tutorial."],
        ["YELLOW SNEAKERS!", "Reach the 30th FLOOR on ENDLESS MODE!"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
