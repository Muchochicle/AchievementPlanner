import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/just-cause-3.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 225540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("just-cause-3");

test("getPlannerData('just-cause-3') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for just-cause-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every Just Cause 3 achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every Just Cause 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 66 Just Cause 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Without Bullets!", "Destroy every Chaos Object in a Military Base without weapons, grenades, or planted explosives."],
        ["(Just) Causin' Chaos", "Get 1,000 Chaos."],
        ["A Real Gear-Getter", "Earn at least 3 Gears in one Challenge of every type."],
        ["A True Master", "Earn 5 Gears in all Challenges of the Sky Fortress Expansion."],
        ["All the Gears", "Earn 5 Gears in every Challenge."],
        ["Anything You Can Do...", "Beat a score you were Called-Out on."],
        ["Baker's Dozen", "Liberate 13 settlements."],
        ["Bragging Rights", "Beat another player's score in a Challenge."],
        ["Break a Leg!", "Defeat the \"Old Friend\" (Boss at the end of \"Taking Control\")."],
        ["Can't Touch This", "Call-Out another player in a Feat."],
        ["Caught 'Em All!", "Collect every vehicle available by bringing them to Mario's Rebel Garages."],
        ["Certified eDEN Mech Operator", "Earn at least 1 Gear in all Challenges of the Mech Land Assault Expansion."],
        ["Chaos is My Middle Name", "Get 100,000 Chaos."],
        ["Chaos Millionaire", "Get 1,000,000 Chaos."],
        ["Consummate Daredevil", "Launch a land vehicle off of every Daredevil Jump in Medici."],
        ["Diary of the Madman", "Gather all of Di Ravello's tapes."],
        ["Earth, Wind and Sea", "Unlock Rebel Drops for at least one land vehicle, one air vehicle, and one sea vehicle."],
        ["eDEN Employee of the Year", "Earn 5 Gears in all Challenges of the Mech Land Assault Expansion."],
        ["Enjoy Your Homecoming", "Complete the story mission 'Welcome Home'."],
        ["F!#& YOU, MISSILE", "Complete the story mission 'Missile Cowboy'."],
        ["Feat Fetish", "Perform every Feat."],
        ["Finally on the Offensive", "Complete the story mission 'Tangled Up In Blue'."],
        ["First Encounter", "Complete an Encounter."],
        ["Forgive Me, Father...", "Take sanctuary in a monastery to clear Heat Level 5."],
        ["Free Birds", "Liberate 3 Detention Camps."],
        ["Getting it in Gear", "Earn at least 3 Gears in a Challenge."],
        ["Heart of Stone", "Completely liberate Insula Striate."],
        ["Hope Springs Eternal", "Completely liberate Insula Fonte."],
        ["I Should Buy A Boat", "Get the Rocket Boat, also known as \"The Loochador\"."],
        ["In the Heart of Darkness", "Beat the last mission of the Mech Land Assault Expansion and complete the story arc."],
        ["Lightning Bolt!", "Defeat 1 enemy helicopter using the eDEN Spark."],
        ["Like a Fish... in the Air!", "Use the Bavarium Wingsuit to take off from water."],
        ["Loochador Master", "Defeat 5 enemy helicopters with the Rocket Boat."],
        ["Look at the Sly Fox", "Use the Barrel Roll to evade 10 incoming missiles."],
        ["Mistakes and Triumphs", "Complete the story mission 'The Shatterer of Worlds'."],
        ["MOD Initiate", "Unlock your first Gear MOD, and then activate it."],
        ["MOD Specialist", "Unlock every Gear MOD in a single category."],
        ["MOD Tinkerer", "Have every Gear MOD active for at least 1 minute each."],
        ["My Little Rocket Man", "Tether an enemy to a launched gas cannister. Adeo, amico!"],
        ["My Name is Eden", "Beat the last mission of the Sky Fortress Expansion and complete the story arc."],
        ["No Stone Unturned", "Find every collectible strewn across Medici."],
        ["Old School Cool", "Find every vintage weapon and vehicle part."],
        ["One Last Score", "Beat the last mission of the Bavarium Sea Heist expansion and complete the story arc."],
        ["One Mech of a Ride", "Hijack your first Mech."],
        ["Quite the Connoisseur", "Earn at least 1 Gear in all Challenges of the Sky Fortress Expansion."],
        ["Remember the Fallen", "Light a candle at every Rebel Shrine."],
        ["Son of Medici", "Complete the final story mission, 'Son of Medici'."],
        ["Staying Power", "Defeat 10 enemies with the same eDEN Spark strike."],
        ["Stock-Keeping", "Defeat 1 of each Drone type."],
        ["Supply and Demand", "Unlock 10 Resupply Points by completing Encounters."],
        ["Take That, You Pipeline Jerks", "Disable the FOW in Insula Fonte."],
        ["Taming the Dracon", "Completely liberate Insula Dracon."],
        ["The Flying Medician", "Defeat 10 enemy vehicles while in the air with the Rocket Boat."],
        ["The Power of Bavarium", "Complete the story mission 'A Long and Dangerous Road'."],
        ["These Mines are the Pits", "Complete the story mission 'The Great Escape'."],
        ["This Is Not A Fireball", "Destroy 30 enemy vehicles using the Mech's Force Pulse."],
        ["This was Supposed to be a Western", "Destroy all Chaos Objects in a Base without leaving your vehicle."],
        ["Three Holy Hideaways", "Unlock 3 Heat-Clearing Priests by completing Encounters."],
        ["Tomb Raider", "Pay your respects at every Ancient Tomb."],
        ["Top of the World", "Stand on foot at the highest point of Medici."],
        ["Unlocked and Fully Loaded", "Unlock every weapon and vehicle available in the Rebel Drop menu."],
        ["Vive le Revolution", "Liberate a Province."],
        ["What a Disaster", "Complete the story mission 'A Terrible Reaction'."],
        ["Winner Takes All, Again", "100% Just Cause 3."],
        ["You're Outta Here!", "Plant a Booster Explosive on an enemy soldier. Then send them flying."],
        ["You've Got Gear", "Earn 5 Gears in a Challenge."],
    ];

    assert.strictEqual(officialAchievements.length, 66, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
