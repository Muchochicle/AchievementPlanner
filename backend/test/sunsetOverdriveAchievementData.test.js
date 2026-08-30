import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sunset-overdrive.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 847370 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sunset-overdrive");

test("getPlannerData('sunset-overdrive') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for sunset-overdrive");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Sunset Overdrive achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Sunset Overdrive achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Sunset Overdrive achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Boy's Best Friend is his Mother", "Build the 'Feel the Burn' weapon for a guy who is stir-crazy... or just crazy"],
        ["A Challenger Appears", "Complete 10 challenges with at least a bronze rating"],
        ["Amped Up", "Equip 5 Amps on your character at the same time"],
        ["Appreciation", "Watch the credits all the way through"],
        ["Badge", "Earn a Badge"],
        ["Ballin'", "Reroute the power inside the factory in the weirdest way possible"],
        ["Big Break", "Anybody can be a movie producer, because nobody knows what they do"],
        ["Big Brother", "Destroy all 150 Fizzco security cameras"],
        ["Big Tobacco", "Smoking causes lung cancer, heart disease, and instant death"],
        ["Bounce Kills", "Kill 100 enemies while bouncing or while in the air"],
        ["Buck National", "Become a reality TV star"],
        ["Calamari", "Defeat the DL-sea monster"],
        ["Can't Commit", "Equip one piece of clothing from each Faction at the same time"],
        ["Cosplay", "Put on a robot costume and collect the kill codes"],
        ["Crash Landing", "Destroy 25 Fizzco Blimps just because you can"],
        ["Crude Oil", "Arrive at the Mooil Rig"],
        ["Dawwwwww", "Find all 12 of Ainsley's drawings scribbled on city walls"],
        ["Defender of the Realm", "Clear Fargarthia of a hidden evil"],
        ["Dusk 'til Dawn", "Survive one night at your Fort"],
        ["Equal Opportunity", "Complete a quest from every Faction"],
        ["Excalibro", "You forged the mythical Excalamune"],
        ["Explorer", "Find all 20 secret sightseeing locations in Sunset City"],
        ["Favorite", "Upgrade one of your guns to Level 5"],
        ["Fizzie Says April Fools", "Ha, ha! I can't believe you fell for that! (Acquire Worst Job in the Kingdom)"],
        ["Flung to Safety", "Kill 100 enemies by flinging them into danger using the Springboard Trap"],
        ["Going to Need a Bigger Closet", "Collect 250 fashion items"],
        ["Grind Kills", "Kill 100 enemies while grinding"],
        ["Grind Melee", "Melee 50 enemies while grinding"],
        ["Hardcore Buck National vs The Apocalypse", "Beat the score of 400,000 on the Challenge 'Buck National vs The Apocalypse'"],
        ["Hardcore Buck Stops Here", "Beat the score of 600,000 on the Challenge 'Buck Stops Here'"],
        ["Hardcore Buck Strikes Back", "Beat the score of 500,000 on the Challenge 'Buck Strikes Back'"],
        ["Hot Air", "Collect all 150 Fizzie balloons"],
        ["I Like Them All", "Upgrade 20 guns to Level 5"],
        ["I Should Get Paid for This", "Beat Insomniac QA's high score of 534,080 on the Challenge 'Buck's Revenge'"],
        ["Intel", "Collect all 40 Smartphones"],
        ["It's Art Ok", "Deface 40 billboards with graffiti"],
        ["It's Full of Stars", "Light fires big enough to see from space"],
        ["Language Lessons", "Work with Buck and Sam to create a new weapon"],
        ["Let me Count the Ways", "Burn, Shock, Freeze, or Enrage 1,000 enemies"],
        ["Litter", "Collect all 150 scraps of toilet paper"],
        ["Lost and Found", "Find Bryllcream... again"],
        ["Many Favorites", "Upgrade 10 guns to Level 5"],
        ["Mixology 101", "Collect 20 Amps from Floyd"],
        ["More Overdrive", "Unlock at least one Rank 4 Overdrive"],
        ["Not so Secret Ingredient", "Get to the bottom of Fizzco's corporate secrets"],
        ["Not the Boss of Me", "Replay the final mission and defeat the boss under par"],
        ["Oh the Horror!", "Survive Horror Night"],
        ["Orange Soda", "5,000 OD Massacred"],
        ["Orange Soda II", "15,000 OD massacred"],
        ["Out of Stock", "Destroy 250 Overcharge XT vending machines"],
        ["Overachiever", "You earned an achievement"],
        ["Overdrive", "Unlock an Overdrive"],
        ["Perfection", "Complete an optional Night Defense without losing any of your overcharge"],
        ["Plan B", "Survive the glider crash and look for another way out of the city"],
        ["Replay", "Replay any Mission and complete it under par"],
        ["Revolutionary", "Take back Sunset City for the misfit survivors"],
        ["Roleplay While Rolepaying", "Reach Level 99 in Ignatius' epic RPG campaign"],
        ["Save Everyone", "Save Sunset City from Fizzco's second-most powerful robot"],
        ["Saved", "Find Fiona and Lou, then help them escape by fixing Snackwrap"],
        ["Scouts Honor", "Become an honorary Troop Member by finding Bryllcream and defeating Norton"],
        ["Seas the Day", "Protect the boat from bombs, mortars, and OD"],
        ["Second Place", "Complete 30 challenges with at least a silver rating"],
        ["Shoe Closet", "Collect all 150 shoes hanging from wires"],
        ["Special Delivery", "Ride a cargo container into the factory"],
        ["Stylish Kills", "Kill 500 enemies while at Style Level 3"],
        ["That Balloon", "You killed a balloon"],
        ["The .1%", "Spend at least 25,000 Overcharge"],
        ["The Champion", "Complete 50 challenges with a gold rating"],
        ["The Floor is Lava", "Chain together 100 traversal moves without stopping or touching the ground"],
        ["The Most Punchable Face", "Defeat Brandon. Like, for real"],
        ["The Pitch", "Weapons design is a tough business"],
        ["This is my City Now", "You beat the final Fizzco corporate machine"],
        ["Trap Kills", "Kill 500 enemies with traps"],
        ["Ultimate Collection", "Liberate all the comic books for the comic book collector"],
        ["Ultra Mega Kill", "That was a lot of pigeons"],
        ["Vat Pack Rat", "Upgrade the Overcharge vats at every fort"],
        ["What's Your Sign?", "Collect all 150 Overcharge hologram signs"],
        ["Who is Sending These?", "Loot 25 emergency supply drops"],
        ["Wire Tapping", "Eavesdrop on nine conversations by hacking into satellites"],
        ["Worst Job in the Kingdom", "Replay the Floating Garbage mission and beat the score of 50,000"],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
