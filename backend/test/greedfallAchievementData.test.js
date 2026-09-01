import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/greedfall.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 606880 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("greedfall");

test("getPlannerData('greedfall') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for greedfall");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every GreedFall achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every GreedFall achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 GreedFall achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A better world", "Reach the 'A better world' ending (reconcile all factions)."],
        ["A big step towards peace", "Reach the 'A big step towards peace' ending (kill Constantin, missing one or two alliances)."],
        ["A Dangerous Fiancée", "(De Vespe Conspiracy DLC) Bring the chest back to Aurelia De Vespe."],
        ["A passion for extreme", "Complete the game in extreme mode"],
        ["A preserved Alliance", "Save San Matheus during the coup attempt."],
        ["Alchemist", "Craft 10 alchemical elements"],
        ["All for one, one for all!", "Unite all of the factions against Constantin."],
        ["All sails set!", "Travel to Teer Fradee (finish the prologue)."],
        ["Another sip?", "Use 50 potions"],
        ["Arena Excellence", "Succeed in all the challenges of the arena"],
        ["Artisan", "Craft 10 equipment improvements"],
        ["Back to the roots", "Reach the 'Back to the roots' ending (the natives banish the others from the island)."],
        ["Betrayal in blood", "Kill the companion who betrays you during the Treason quest."],
        ["Cancelled Wedding", "(De Vespe Conspiracy DLC) Put an end to Aurelia De Vespe's schemes."],
        ["Carants", "Have a good reputation with the natives"],
        ["Cat burglar", "Pick 20 locks"],
        ["Coercive diplomacy", "Kill 300 humans"],
        ["Curiosity cabinet", "Collect ingredients 200 times"],
        ["De Vespe Secret Archives", "(De Vespe Conspiracy DLC) Collect all of the notes during the DLC quest."],
        ["Deceitful", "Do damage 200 times with traps"],
        ["En on míl frichtimen", "Enter the shrine and speak to En on mil frichtimen."],
        ["Expertise", "Unlock the 3 levels of a talent"],
        ["Explorer", "Find and set all camp fires"],
        ["Favoured with the Bridge Alliance", "Have a good reputation with the Bridge Alliance"],
        ["Friendship above all", "Finish all companion quests"],
        ["Full of talent", "Allocate a new talent point"],
        ["Full pockets", "Empty 100 containers"],
        ["Guardian of love", "Be in a relationship with Kurt"],
        ["Hunting with hounds", "Hunt 20 animals"],
        ["In search of perfection", "Unlock the 5 levels of an attribute"],
        ["In the footsteps of the masters", "Unlock a new skill"],
        ["In the name of the Enlightened", "Save Theleme during the coup attempt."],
        ["Incomparable technique", "Unlock all Technical skills"],
        ["Influence game", "Influence the election so your favoured candidate becomes high king."],
        ["Island for sale", "Reach the 'Island for sale' ending (favour the old world over the natives)."],
        ["King of the peaks", "Defeat the mountain region Guardian (a Nadaig superboss)."],
        ["Love and botany", "Be in a relationship with Aphra"],
        ["Love and the sea", "Be in a relationship with Vasco"],
        ["Magical perfection", "Unlock all Magic skills"],
        ["Master of the woods", "Defeat the forest region Guardian (a Nadaig superboss)."],
        ["Melee virtuoso", "Do damage 500 times with a melee weapon"],
        ["Minundhanem", "Be in a relationship with Siora"],
        ["Missed coup", "Prevent the Coin Guard from attempting a coup."],
        ["Musketeer", "Do damage 300 times with shots"],
        ["New gods", "Reach the 'New gods' ending (unite with Constantin)."],
        ["On the path to power", "Allocate a new attribute point"],
        ["Outside the stone prison", "Free Constantin from the claws of Vinbarr."],
        ["Poisoning artist", "Poison enemies 100 times"],
        ["Serve to convince", "Complete 20 secondary quests"],
        ["Shadow blade", "Use your assassination skills 30 times"],
        ["Something is rotten", "Discover Constantin's actions."],
        ["Swamp creature", "Defeat the swamp region Guardian (a Nadaig superboss)."],
        ["The art of war", "Unlock all the warrior skills"],
        ["The legend of the plains", "Defeat the plains region Guardian (a Nadaig superboss)."],
        ["The monsters' nightmare", "Kill 600 monsters"],
        ["The Prince's secrets", "Discover the secret of the Congregation and your origins."],
        ["The wrecker", "Defeat the coastal region Guardian (a Nadaig superboss)."],
        ["Thélème's chosen", "Have a good reputation with Thélème"],
        ["Unique Weapons", "Find all unique weapons hidden in the Aidág ol creidaw region"],
        ["War mage", "Do damage 500 times with an offensive spell"],
        ["Waterproof", "Pass Glendan's test."],
        ["Wildcat Hunter", "Kill 20 Egsregatts"],
        ["Worthy of legends", "Acquire a legendary item"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
