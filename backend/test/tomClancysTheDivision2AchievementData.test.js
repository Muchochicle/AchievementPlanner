import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tom-clancys-the-division-2.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2221490 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tom-clancys-the-division-2");

test("getPlannerData('tom-clancys-the-division-2') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for tom-clancys-the-division-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Tom Clancy's The Division 2 achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Tom Clancy's The Division 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Tom Clancy's The Division 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend in Need", "Respond to a call for help and revive the agent."],
        ["Almost a band", "Complete a Main Mission in New York with at least one directive active."],
        ["Arrow to the Knee", "Shoot 10 enemies in the leg with a crossbow."],
        ["Autograph Hunter", "Kill one enemy with each of the signature weapons (crossbow, sniper rifle & grenade launcher)."],
        ["Best of the Best", "Invest in each type of upgrade available for a specialization."],
        ["Big Game Hunter", "Complete a bounty from each safe house."],
        ["Boiling Point", "Shutdown the Cleaners' oil refinery and defeat Vivian Conley."],
        ["Brooklyn Backup", "Respond to a call for help and revive a fellow agent in Brooklyn."],
        ["Brooklyn Bounty Hunter", "Complete a bounty from each Safe House in Brooklyn."],
        ["Brooklyn Brains", "Unlock and use the Smart Cover skill."],
        ["Brooklyn Buddies", "Put out a call for backup in Brooklyn."],
        ["Brooklyn Controller", "Discover 4 Control Points in Brooklyn."],
        ["Brooklyn Local", "Access a Safe House in Brooklyn."],
        ["Bunker Buster", "Recover essential SHD Network equipment from the Federal Emergency Bunker."],
        ["Caged Animal", "Put an end to Emeline Shaw at the Manning National Zoo."],
        ["Checking In", "Rescue Eleanor Sawyer from the Hyenas in the Grand Washington Hotel."],
        ["Clan War", "With your clan, face off against another clan in conflict."],
        ["Command and Control", "Discover 20 control points in DC."],
        ["Country Retreat", "Take part in the operation at Camp White Oak."],
        ["Crafty Collector", "Collect 20 blueprints."],
        ["Dark Zone: Extraction", "Extract an item from each dark zone."],
        ["Dark Zone: Occupied Hijack", "Hijack an extraction in any occupied dark zone."],
        ["Dark Zone: Safe House", "Access a Safe House in a Dark Zone."],
        ["Dark Zone: Takedown", "Eliminate a rogue agent in each Dark Zone."],
        ["Deep Underground", "Shut down the Cleaners' drill and eliminate Javier Kajika."],
        ["Dress to Impress", "Equip high-end gear (or above) in each slot."],
        ["Drilling Down", "Discover the Black Tusk's purpose at the Pentagon and thwart it."],
        ["Extreme Manhunt", "Complete a Seasonal Manhunt mission on Challenge difficulty or above."],
        ["First Among Equals", "Win a match of skirmish or domination."],
        ["For Posterity", "Photo mode: take a photo of a group of 4 agents."],
        ["Getting the Word Out", "Seize control of the ViewPoint Museum from the True Sons."],
        ["Global Communications", "Reestablish the SHD Satellite Network at the Space Administration HQ."],
        ["Group Therapy", "Take over a control point in a group without anyone being downed."],
        ["Hard as Nails", "Finish all missions on hard difficulty or above."],
        ["Help Me!", "Put out a call for backup."],
        ["Hometown Hero", "Liberate all of Brooklyn's Main and Secondary locations."],
        ["Into the Wilderness", "Take down the Outcast stronghold on Roosevelt Island."],
        ["Iron Breakers", "Complete the full Operation Iron Horse raid in a group of eight players."],
        ["Jail Break", "Survive all of Theo Parnell's traps and defeat him."],
        ["Jailbreak", "Recover interrogation data from the American History Museum."],
        ["King of the Skill", "Equip and use each skill."],
        ["Liberation", "Prevent the missile launch and defeat Aaron Keener."],
        ["Negative Ramos!", "Shock enemy medics by shooting their defibrillator."],
        ["Next Level Operative", "Reach Level 30."],
        ["Opening the Vault", "Discover what the Hyenas stole from Air Force One."],
        ["Over The Hill", "Reach Level 40 with an agent."],
        ["Patchwork", "Get 10 patches from commendations."],
        ["Plummeting Stock", "Defeat James Dragov at the NYC Stock Exchange."],
        ["Project Management", "Complete a project for both the Theater and Campus settlements."],
        ["Reactor Heist", "Secure the perfusion bioreactor from the DARPA labs below the Pentagon."],
        ["Rebuilding DC", "Fully upgrade all settlements."],
        ["Resourceful Agent", "Help friendlies in resource gathering."],
        ["Season Ticket", "Eliminate the Hyena council in the District Union Arena."],
        ["Shut that door (again)", "Shut two car doors while in cover."],
        ["Sick Note", "Shut down Outcast activity at the DCD Headquarters."],
        ["Specialized", "Equip your first specialization."],
        ["State of the Union", "Drive the True Sons out of the Capitol building."],
        ["Strategic Extraction", "Capture the Outcasts' Chief Strategist at the Potomac Event Center."],
        ["Strength in Numbers", "Create or join a clan."],
        ["Suits You, Sir!", "Collect any suit of cards in the open world."],
        ["Taste of the Exotic", "Craft an exotic weapon or item."],
        ["To Sum It All Up", "Successfully extract Tchernenko after confronting and defeating Elijah Sumner."],
        ["TV Cop", "Perform a slide across the hood of a car."],
        ["Under Lady Liberty's Gaze", "Complete the manhunt and eliminate Aaron Keener."],
        ["Undressed to Kill", "Destroy every piece of a tank's armor, then eliminate the tank."],
        ["Washington Raiders", "Complete the full Operation Dark Hours raid in a group of eight players."],
        ["You Can't Have Him", "Prevent Dolores Jones from capturing or killing the rogue Division agent Aaron Keener."],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
