import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fallout-76.json - 72 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1151340 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fallout-76");

test("getPlannerData('fallout-76') returns real planner data with 72 curated achievements", () => {

    assert.ok(game, "expected real planner data for fallout-76");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 72);

});

test("every Fallout 76 achievement has a unique id from 1 to 72 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 72 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 72);
    assert.strictEqual(new Set(apinames).size, 72);

});

test("every Fallout 76 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 72 Fallout 76 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fighting Chance", "Craft a Weapon"],
        ["A Golden Future", "Complete \"All That Glitters\""],
        ["A Real Challenger", "Complete 20 Challenges"],
        ["A Solid Foundation", "Become allies with Foundation"],
        ["Ain't He the Cutest?", "Collect a Bobblehead"],
        ["America’s Playground", "Lead and complete “Tax Evasion” and “The Most Sensational Game”"],
        ["American Hero", "Reach Level 50"],
        ["Appalachian HOA", "Build 100 C.A.M.P. Items"],
        ["Appalachian Trailblazer", "Reach Level 25"],
        ["Behind the Curtain", "Complete Beckett's story"],
        ["Bounty Hunter", "Kill a Wanted Player"],
        ["Breach and Clear", "Win the \"Breach and Clear\" Event"],
        ["Bunker Buster", "Complete \"Bunker Buster\""],
        ["Code Cruncher", "Hack 50 Terminals"],
        ["Coming to Fruition", "Complete \"Coming to Fruition\""],
        ["Community Service", "Lead and Complete \"The Human Condition\""],
        ["Devil's Bargain", "Complete \"Sins of the Father\""],
        ["Fallout Forever", "Reach Level 100"],
        ["Field Medic", "Revive 20 Fallen Players"],
        ["Final Departure", "Complete \"Final Departure\""],
        ["First Contact", "Complete \"First Contact\""],
        ["Friends in Low Places", "Become allies with Crater"],
        ["Giant Slayer", "Kill 5 Giant Creatures"],
        ["Gimme Gimme!", "Pick 50 Locks"],
        ["Go for the Gold", "Complete \"Buried Treasure\""],
        ["Gold Rush", "Gain 300 gold bullion"],
        ["Gold Star Crafter", "Craft a 1 star legendary mod, a 2 star legendary mod, and a 3 star legendary mod"],
        ["Good Grief!", "Kill 20 Players"],
        ["Ground Zero", "Be at Ground Zero of a Nuclear Blast"],
        ["Happy C.A.M.P.er", "Build a C.A.M.P."],
        ["Heart of the Enemy", "Complete \"Heart of the Enemy\""],
        ["I Am Become Death", "Complete \"I Am Become Death\""],
        ["Into the Fire", "Complete \"Into the Fire\""],
        ["Junker Funk", "Gather 200 Pieces of Junk"],
        ["Key to the Past", "Complete \"Key to the Past\""],
        ["Kill or Be Killed", "Kill Another Player"],
        ["LITerally", "Read 20 Magazines"],
        ["Mistress of Mystery", "Complete \"Mistress of Mystery\""],
        ["Monet of Murder", "Mod 50 Weapons"],
        ["Moneybags", "Possess 10,000 Caps"],
        ["Monster Mash", "Complete the \"Monster Mash\" Event"],
        ["Never Go it Alone!", "Join 20 Teams"],
        ["Officer on Deck", "Complete \"Officer on Deck\""],
        ["One of Us", "Complete \"One of Us\""],
        ["Overdue Reunions", "Find the Overseer"],
        ["Perked Up", "Fully Rank Up one Perk"],
        ["Personal Matters", "Complete \"Personal Matters\""],
        ["Pest Control", "Kill 300 Creatures"],
        ["Photo Bomber", "Take 20 Photos"],
        ["Pioneer Scout", "Discover 100 Locations"],
        ["Queen of the Hunt", "Complete \"Queen of the Hunt\""],
        ["Reclamation Day!", "Leave Vault 76"],
        ["Recruitment Blues", "Complete \"Recruitment Blues\""],
        ["Retro Now", "Play a Holotape Game"],
        ["Rip and Tear", "Kill 10 Lesser Devils with a melee weapon"],
        ["Scorched Earth", "Win the \"Scorched Earth' Event"],
        ["Second Helpings", "Complete \"Second Helpings\""],
        ["Second Skin", "Craft 5 Pieces of Armor"],
        ["Seeking Refuge", "Complete 10 Favors for people in The Whitespring Refuge"],
        ["Shwag", "Collect 10 Bobbleheads"],
        ["Smooth Operator", "Earn Elder Rewards from a Daily Op"],
        ["Steel Brethren", "Complete “The Catalyst”"],
        ["Tested Mettle", "Complete 5 Challenges"],
        ["The House Always Wins", "Build 5 casino games in your CAMP"],
        ["The New Fort Knox", "Gain 1500 gold bullion"],
        ["Troglodiced", "Kill 100 Trogs with an Auto Axe"],
        ["Wayward Child", "Complete \"The Elusive Crane\""],
        ["We Must Rebuild", "Build 20 C.A.M.P. Items"],
        ["Weed Killer", "Kill 100 Overgrown with fire"],
        ["Welcome To The Pitt", "Lead and complete \"Union Dues\" and \"From Ashes to Fire\""],
        ["Wild West Virginian", "Reach Level 10"],
        ["Wish Upon A Star", "Complete Sofia's story"],
    ];

    assert.strictEqual(officialAchievements.length, 72, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
