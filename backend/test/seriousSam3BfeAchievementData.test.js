import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/serious-sam-3-bfe.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 41070 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("serious-sam-3-bfe");

test("getPlannerData('serious-sam-3-bfe') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for serious-sam-3-bfe");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Serious Sam 3: BFE achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Serious Sam 3: BFE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Serious Sam 3: BFE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Your Base Are Belong To Us!", "In the level 'Under the Iron Cloud', bring down the giant alien dropship by destroying the blue orbs on its underside."],
        ["Apprentice Egyptologist", "Decipher an Egyptian text."],
        ["Arachnophobia", "Rip 10 Juvenile spiders apart."],
        ["Are You Serious!?", "Complete the game in single player on unmodified serious difficulty."],
        ["Beast Hunter", "Complete a Beast Hunt match"],
        ["Berserker", "Kill 3 enemies in one sprint with the Sledgehammer."],
        ["Bone Crusher", "Smash 20 Kleers with the Sledgehammer."],
        ["Bug Hunt", "Squash 10 Hatchling spiders."],
        ["Cardiac Surgeon", "Rip out 10 Rocketeer hearts."],
        ["Chain Explosion", "Kill at least 5 headless kamikazes in one explosion."],
        ["Chiropractor", "Break 10 Soldier necks."],
        ["Christmas In Cairo", "During the in-game Christmas event (December 10 to January 5), decorate the Christmas tree."],
        ["Circle of death", "Kill at least 3 enemies in one spinning Sledgehammer attack."],
        ["Classic Outfit", "Find Sam's classic outfit"],
        ["Clay Pigeons", "Kill 5 Cave Demons while they're in air."],
        ["Co-op Beginner", "Complete any level in cooperative with at least 2 players."],
        ["Co-op Master", "Complete the campaign in cooperative with at least 2 players."],
        ["Coin-op Co-op", "Complete a Coin-op cooperative game on normal or higher difficulty."],
        ["Deathmatch Beginner", "Complete a deathmatch game with at least 1 frag."],
        ["Deathmatch Master", "Win 10 deathmatch games."],
        ["Detroit Steel", "At the end of the eleventh level, 'The Last Man on Earth', start the car."],
        ["Flag Thief", "Score a total of 10 points in CTF matches."],
        ["Get the hell off my ride!", "Secure the bird."],
        ["Gold Rush", "Pick up 100 gold coins."],
        ["Golden Survivor", "Earn a gold medal in Survival."],
        ["Hammer Time", "Frag 20 players with the Sledgehammer."],
        ["Headsman", "Decapitate a Khnum."],
        ["Heavy Weight Champion", "Win one My Burden match with at least 3 players."],
        ["Instant Killer", "Make at least 3 kills in one Instant Kill match."],
        ["Jewel of the Nile", "Complete the Jewel of The Nile single player campaign."],
        ["Killer Jewelry", "Kill an enemy using the Mutilator."],
        ["Kleer Wrestler", "Tear off 10 Kleer heads."],
        ["Kung-fu Fighter", "Perform all possible finishing moves in the game."],
        ["Last Man Standing", "Win one round in Last Man Standing game with at least 4 players."],
        ["Life Saver", "Pick up at least 10 extra life items."],
        ["Load of Scrap", "Rip Scrapjack's head off."],
        ["Look Ma, I won!", "Win a versus match."],
        ["Look, it's a secret", "Find at least 50 secrets in single player."],
        ["Maintenance time", "Blow a Major Biomechanoid into pieces."],
        ["Master Egyptologist", "Decipher all Egyptian texts."],
        ["Mission completed", "Power up the Timelock."],
        ["Old School", "Complete the game in single player without manually reloading, aiming or sprinting."],
        ["Ophthalmologist", "Remove 10 Gnaar eyes."],
        ["Painful Divorce", "Kill a Witch-Bride of Achriman."],
        ["Problem solver", "Solve the riddle of the Sphynx."],
        ["Queen Hatshepsut", "Complete The Guardian of Time in single player on serious difficulty without dying or loading."],
        ["Reindeer Hunter", "During the Christmas event, decorate the Christmas tree on every level to unlock the Rodolfo player model."],
        ["Rodeo Surfer", "Use the Mutilator to surf after a Werebull."],
        ["Scorpion Slayer", "Break 5 Arachnoid necks."],
        ["Serious Beginner", "Complete any level in single player."],
        ["Serious Run", "Complete the game in single player in half the estimated time on each level."],
        ["Serious Sam", "Complete the single player campaign."],
        ["Skewer", "Pierce 5 enemies with one Devastator round."],
        ["Survivor", "Earn a medal in Survival."],
        ["The doorman should wear a suit", "Awake the Guardian of Time."],
        ["Top Secret", "Find all secrets in single player."],
        ["Trick Shot", "Kill the kicked enemy while it is still in the air."],
        ["Up Close and Personal", "Gib 20 enemies from close range with a shotgun."],
        ["Useful Trophy", "Kill an enemy with a gib torn from another enemy."],
        ["Vista", "Find the Vista secret."],
        ["Wall of Bullets", "Kill 20 enemies with the Minigun without releasing the trigger."],
        ["Wanted Dead or Alive", "Rescue professor Stein. So to say."],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
