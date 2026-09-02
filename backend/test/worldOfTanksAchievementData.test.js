import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/world-of-tanks.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1407200 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("world-of-tanks");

test("getPlannerData('world-of-tanks') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for world-of-tanks");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every World of Tanks achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every World of Tanks achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 World of Tanks achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...And That's How You Do It", "Complete all Tank Academy missions."],
        ["A Real Stunner", "Stun enemy vehicles for a total of 500 seconds in Random Battles when fighting in SPGs. Potential stun duration is counted."],
        ["A Tough Nut to Crack", "Cause, receive, and block a total of 3,000 HP of damage in one Random Battle when playing in a heavy tank."],
        ["A Whole New Level", "Earn the Top Gun award."],
        ["Above and Beyond", "Research and purchase a Tier XI vehicle."],
        ["According to Plan", "Research and purchase a Tier V vehicle."],
        ["Acing It", "Receive the Ace Tanker Mastery Badge."],
        ["All Your Base", "Earn a total of 1,000 base defence or capture points in Random Battles. Points for resetting base capture and/or successfully capturing the enemy base are counted."],
        ["An All-Purpose Resource", "Earn a total of 2,500 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance)."],
        ["Battle-Hardened", "Earn 50,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)."],
        ["Boy Scout", "Use a type of consumables at least three times in a Random Battle. Repair Kits, First Aid Kits, and Fire Extinguishers of the same type are counted."],
        ["David and Goliath", "Destroy an enemy vehicle two tiers higher than yours in a Random Battle."],
        ["Decorated War Hero", "Earn 10 awards in the Battle Heroes category."],
        ["Dodge This", "Destroy at least one enemy vehicle by ramming in a Random Battle."],
        ["Earning Your Stripes", "Complete one Personal Mission."],
        ["End of the Line", "Destroy the tracks of 100 different enemy vehicles in Random Battles."],
        ["Experience Is the Best Teacher", "Earn 100,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)."],
        ["Far-Reaching Support", "Enable your allies to cause 500 HP of damage in one Random Battle by stunning or immobilizing enemy vehicles when playing in an SPG."],
        ["Finding a Happy Medium", "Cause a total of 25,000 HP of damage to enemy vehicles in Random Battles when playing in medium tanks."],
        ["Found You!", "Spot 100 enemy vehicles in Random Battles."],
        ["Heavy-Duty", "Block a total of 15,000 HP of damage in Random Battles when fighting in heavy tanks."],
        ["High Five", "Receive five Ace Tanker Mastery Badges."],
        ["Hunter", "Cause a total of 25,000 HP of damage to enemy vehicles in Random Battles when playing in tank destroyers."],
        ["I Am Invincible!", "Block twice as much damage as the number of hit points of your vehicle in one Random Battle."],
        ["I Shall Be Your Eyes", "Enable your allies to cause twice as much damage as the number of hit points of your own vehicle to enemy vehicles spotted by you in one Random Battle."],
        ["Is That Adamantium?", "Earn the Steel Wall award."],
        ["It Ain't Much, but It's Honest Work", "Destroy 50 enemy vehicles in Random Battles."],
        ["King Midas", "Earn 15,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)."],
        ["Knowledge Is Power!", "Earn a total of 5,000 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance)."],
        ["Last Man Standing", "Be the last player on your team to be destroyed by the enemy."],
        ["Left Click to Shoot", "Cause twice as much damage as the number of hit points of your vehicle in one Random Battle."],
        ["Main Gun", "Cause damage that equals at least 25% of the total HP of enemy vehicles in a Random Battle."],
        ["Masterclass", "Cause 2,000 HP of damage to enemy vehicles in one Random Battle when playing in a medium tank."],
        ["Nine Out of Ten", "Research and purchase a Tier IX vehicle."],
        ["Not Great, Not Terrible", "Receive the Mastery Badge Class I or higher."],
        ["Nothing Personal", "Destroy 250 enemy vehicles in Random Battles."],
        ["On the March", "Cover a total distance of 500,000 meters in Random Battles."],
        ["On the Right Track", "Complete all Personal Missions in a set."],
        ["On the Road to Perfection", "Research and purchase a Tier VI vehicle."],
        ["One-Two Punch", "Destroy two enemy vehicles using different types of shells in a Random Battle."],
        ["Penetration!", "Score a total of 1,000 armor-penetrating hits on enemy vehicles in Random Battles."],
        ["Pocket Money", "Earn 1,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)."],
        ["Precise Hit", "Earn the Bruiser award."],
        ["Quick Learner", "Earn 10,000 experience in Random Battles. Experience received for Standard Account is counted (including experience received for courageous resistance)."],
        ["Save It for Later", "Earn a total of 1,000 Free Experience in Random Battles. Free Experience received for Standard Account is counted (including Free Experience received for courageous resistance)."],
        ["Small but Smart", "Cause and/or enable your allies to cause at least 2,000 HP of damage in one Random Battle when playing in a light tank."],
        ["Smooth Operation", "Complete all Personal Missions in the same operation."],
        ["Superiority Distance", "Destroy an enemy vehicle in a Random Battle while remaining unspotted."],
        ["Sweet Spot", "Enable your allies to cause 15,000 HP of damage to vehicles spotted by you in Random Battles when fighting in light tanks."],
        ["Tank Hunter", "Cause 1,500 HP of damage and destroy two enemy vehicles in one Random Battle when playing in a tank destroyer."],
        ["This Is Just the Beginning", "Destroy 500 enemy vehicles in Random Battles."],
        ["Three Cheers", "Receive three Ace Tanker Mastery Badges."],
        ["Top League", "Win and be the top player on your team by experience earned in a Random Battle five times while playing in Tier X vehicles."],
        ["Top Shelf", "Research and purchase a Tier X vehicle."],
        ["Toss a Coin", "Earn 5,000,000 credits in Random Battles. Credits received for Standard Account are counted (including credits received for courageous resistance)."],
        ["Trial by Fire", "Fight in a Random Battle."],
        ["Tyger Tyger, burning bright", "Complete the opening Tiger Hunter stories"],
        ["We're Gonna Need Bigger Guns!", "Research and purchase a Tier VII vehicle."],
        ["Works Like a Dream", "Research and purchase a Tier VIII vehicle."],
        ["You Can't See Me", "Destroy two Tier IV–X enemy light tanks in a Random Battle."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
