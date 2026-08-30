import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/insurgency.json - 100 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 222880 (fetched through this app's own services/steamApi.js).
// 1 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("insurgency");

test("getPlannerData('insurgency') returns real planner data with 100 curated achievements", () => {

    assert.ok(game, "expected real planner data for insurgency");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 100);

});

test("every Insurgency achievement has a unique id from 1 to 100 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 100);
    assert.strictEqual(new Set(apinames).size, 100);

});

test("every Insurgency achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 100 Insurgency achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aced It!", "Complete the training course in less than 16 minutes without dying"],
        ["Air Tight", "Successfully defend all caches in Strike"],
        ["All In", "Capture an objective with your entire team"],
        ["All In (Coop)", "Capture an objective with your entire team while playing in cooperative mode"],
        ["Bodycount I", "Kill 100 players of the opposing team"],
        ["Bodycount I (Coop)", "Kill 100 players of the opposing team while playing in cooperative mode"],
        ["Bodycount II", "Kill 250 players of the opposing team"],
        ["Bodycount II (Coop)", "Kill 250 players of the opposing team while playing in cooperative mode"],
        ["Bodycount III", "Kill 500 players of the opposing team"],
        ["Bodycount III (Coop)", "Kill 500 players of the opposing team while playing in cooperative mode"],
        ["Bodycount IV", "Kill 1,000 players of the opposing team"],
        ["Bodycount IV (Coop)", "Kill 1,000 players of the opposing team while playing in cooperative mode"],
        ["Bodycount IX", "Kill 50,000 players of the opposing team"],
        ["Bodycount IX (Coop)", "Kill 50,000 players of the opposing team while playing in cooperative mode"],
        ["Bodycount V", "Kill 2,500 players of the opposing team"],
        ["Bodycount V (Coop)", "Kill 2,500 players of the opposing team while playing in cooperative mode"],
        ["Bodycount VI", "Kill 5,000 players of the opposing team"],
        ["Bodycount VI (Coop)", "Kill 5,000 players of the opposing team while playing in cooperative mode"],
        ["Bodycount VII", "Kill 10,000 players of the opposing team"],
        ["Bodycount VII (Coop)", "Kill 10,000 players of the opposing team while playing in cooperative mode"],
        ["Bodycount VIII", "Kill 25,000 players of the opposing team"],
        ["Bodycount VIII (Coop)", "Kill 25,000 players of the opposing team while playing in cooperative mode"],
        ["Bodycount X", "Kill 100,000 players of the opposing team"],
        ["Bodycount X (Coop)", "Kill 100,000 players of the opposing team while playing in cooperative mode"],
        ["Clean Sweep: Buhriz", "Successfully complete the cooperative hunt mission of Buhriz"],
        ["Clean Sweep: Complete", "Successfully complete all cooperative hunt missions"],
        ["Clean Sweep: Contact", "Successfully complete the cooperative hunt mission of Contact"],
        ["Clean Sweep: District", "Successfully complete the cooperative hunt mission of District"],
        ["Clean Sweep: Dry Canal", "Successfully complete the cooperative hunt mission of Dry Canal"],
        ["Clean Sweep: Embassy", "Successfully complete the cooperative hunt mission of Embassy"],
        ["Clean Sweep: Heights", "Successfully complete the cooperative hunt mission of Heights"],
        ["Clean Sweep: Kandagal", "Successfully complete the cooperative hunt mission of Kandagal"],
        ["Clean Sweep: Market", "Successfully complete the cooperative hunt mission of Market"],
        ["Clean Sweep: Ministry", "Successfully complete the cooperative hunt mission of Ministry"],
        ["Clean Sweep: Panj", "Successfully complete the cooperative hunt mission of Panj"],
        ["Clean Sweep: Peak", "Successfully complete the cooperative hunt mission of Peak"],
        ["Clean Sweep: Revolt", "Successfully complete the cooperative hunt mission of Revolt"],
        ["Clean Sweep: Siege", "Successfully complete the cooperative hunt mission of Siege"],
        ["Clean Sweep: Sinjar", "Successfully complete the cooperative hunt mission of Sinjar"],
        ["Clean Sweep: Station", "Successfully complete the cooperative hunt mission of Station"],
        ["Clean Sweep: Tell", "Successfully complete the cooperative hunt mission of Tell"],
        ["Clean Sweep: Uprising", "Successfully complete the cooperative hunt mission of Uprising"],
        ["Clean Sweep: Verticality", "Successfully complete the cooperative hunt mission of Verticality"],
        ["Decisive Victory: Buhriz", "Successfully complete the cooperative checkpoint mission of Buhriz"],
        ["Decisive Victory: Complete", "Successfully complete all cooperative checkpoint missions"],
        ["Decisive Victory: Contact", "Successfully complete the cooperative checkpoint mission of Contact"],
        ["Decisive Victory: District", "Successfully complete the cooperative checkpoint mission of District"],
        ["Decisive Victory: Dry Canal", "Successfully complete the cooperative checkpoint mission of Dry Canal"],
        ["Decisive Victory: Embassy", "Successfully complete the cooperative checkpoint mission of Embassy"],
        ["Decisive Victory: Heights", "Successfully complete the cooperative checkpoint mission of Heights"],
        ["Decisive Victory: Market", "Successfully complete the cooperative checkpoint mission of Market"],
        ["Decisive Victory: Ministry", "Successfully complete the cooperative checkpoint mission of Ministry"],
        ["Decisive Victory: Revolt", "Successfully complete the cooperative checkpoint mission of Revolt"],
        ["Decisive Victory: Siege", "Successfully complete the cooperative checkpoint mission of Siege"],
        ["Decisive Victory: Sinjar", "Successfully complete the cooperative checkpoint mission of Sinjar"],
        ["Decisive Victory: Tell", "Successfully complete the cooperative checkpoint mission of Tell"],
        ["Decisive Victory: Verticality", "Successfully complete the cooperative checkpoint mission of Verticality"],
        ["First Blood ", "Get the first kill in a round"],
        ["First Blood (Coop)", "Get the first kill in a round while playing in cooperative mode"],
        ["First Blood 2: Blade Reckoning", "Get the first kill in a round with a knife"],
        ["First Blood 2: Blade Reckoning (Coop)", "Get the first kill in a round with a knife while playing in cooperative mode"],
        ["Ground Control I", "Capture one control point"],
        ["Ground Control I (Coop)", "Capture one control point while playing in cooperative mode"],
        ["Ground Control II", "Capture 10 control points"],
        ["Ground Control II (Coop)", "Capture 10 control points while playing in cooperative mode"],
        ["Ground Control III", "Capture 50 control points"],
        ["Ground Control III (Coop)", "Capture 50 control points while playing in cooperative mode"],
        ["Ground Control IV", "Capture 100 control points"],
        ["Ground Control IV (Coop)", "Capture 100 control points while playing in cooperative mode"],
        ["Ground Control V", "Capture 500 control points"],
        ["Ground Control V (Coop)", "Capture 500 control points while playing in cooperative mode"],
        ["Ground Control VI", "Capture 1,000 control points"],
        ["Ground Control VI (Coop)", "Capture 1,000 control points while playing in cooperative mode"],
        ["Head Hunter", "Get 5 headshots in a row"],
        ["Head Hunter (Coop)", "Get 5 headshots in a row while playing in cooperative mode"],
        ["Hero Cap I", "Secure an objective to revive your team if you are the last person alive"],
        ["Hero Cap II", "Secure an objective to revive your team if you are the last person alive 5 times"],
        ["Hero Cap III", "Secure an objective to revive your team if you are the last person alive 10 times"],
        ["Hero Cap IV", "Secure an objective to revive your team if you are the last person alive 25 times"],
        ["Humble Bundle", "Play Kandagal and Contact on any mode, Conquer on any map, gear up with the Galil, SLR, Sterling, .38 revolver, use the new grenade launchers with sights and hook up a drum magazine attachment to receive this humble achievement."],
        ["Hurt Locker", "Survive a C4 blast"],
        ["Hurt Locker (Coop)", "Survive a C4 blast while playing in cooperative mode"],
        ["ODA 420", "Needs 3+ players on a PVE server running the \"Panj Night\" map (panj_night) in Hunt mode. Enter the small building behind spawn in the map's northeast corner and find the radio on the table inside; each of the 3 players turns it on (do not interact a second time or it switches off). A long radio negotiation between Agent Spooner and Abdul plays out over 5 minutes while you fight off the enemies hunting your squad - when it ends, the achievement unlocks. Its real description, once unlocked in-game, is the joke line \"Successfully get an enemy combatant ripping baked.\""],
        ["Recruited", "Complete the training course"],
        ["Silent But Deadly", "Knife 5 enemies in 1 round "],
        ["Silent But Deadly (Coop)", "Knife 5 enemies in 1 round while playing in cooperative mode"],
        ["Stronghold I", "Reach wave 1 in a single round of Outpost"],
        ["Stronghold II", "Reach wave 5 in a single round of Outpost"],
        ["Stronghold III", "Reach wave 10 in a single round of Outpost"],
        ["Stronghold IV", "Reach wave 15 in a single round of Outpost"],
        ["Stronghold V", "Reach wave 20 in a single round of Outpost"],
        ["Survivalist I", "Reach level 5 in one survival round"],
        ["Survivalist II", "Reach level 10 in one survival round"],
        ["Survivalist III", "Reach level 20 in one survival round"],
        ["Survivalist IV", "Reach level 30 in one survival round"],
        ["Survivalist V", "Reach level 50 in one survival round"],
        ["War Hero I", "Be the Most Valuable Player"],
        ["War Hero II", "Become the MVP 10 times"],
        ["War Hero III", "Become the MVP 25 times"],
        ["War Hero IV", "Become the MVP 50 times"],
    ];

    assert.strictEqual(officialAchievements.length, 100, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Insurgency achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["ODA 420"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
