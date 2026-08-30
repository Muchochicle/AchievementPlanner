import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/days-gone.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1259420 (fetched through this app's own services/steamApi.js). 18 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("days-gone");

test("getPlannerData('days-gone') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for days-gone");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Days Gone achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Days Gone achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Days Gone achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 Days 2 Done", "Complete the story of Days Gone on Hard II or Survival II in New Game+"],
        ["Ambush Camp Hunter", "Complete the Ambush Camp Hunter storyline"],
        ["Best Friends Forever", "Receive the Allied Trust status with an Encampment"],
        ["Best Friends Forever (For Life)", "Gain the Allied Trust status with three different Encampments"],
        ["Better Living through Chemistry", "Upgrade either your Health, Stamina, or Focus for the first time"],
        ["Brothers in Arm", "Complete the mission 'I Could Use a Hand' in the 'He's My Brother' storyline."],
        ["Burnout Apocalypse", "Use nitro and drift at the same time on your bike for at least 5 seconds"],
        ["D.I.Y. Oregonian", "Craft 50 items"],
        ["Days Done", "Complete the story of Days Gone"],
        ["Days Gone in 60 Seconds", "Defeat a Horde in under 1 minute in Survival Mode"],
        ["Dead Don’t Ride", "Complete the story of Days Gone in Permadeath mode on any difficulty."],
        ["Dolla Dolla Bills, Y'all", "Spend 3000 credits on your Loadout"],
        ["Don't Stop Me Now", "Unlock your first skill"],
        ["Farewell Drift", "Accumulate 10 minutes of drifting while on your bike"],
        ["Farewell Original", "Purchase an upgrade under the Performance, Visual, and Paint Categories for your bike"],
        ["Finders Keepers", "Unlock your first collectible"],
        ["First Time Buyer", "Upgrade your bike for the first time"],
        ["Freakshow", "Survive for 15 minutes in a single Horde Assault run."],
        ["Ghost of Farewell", "Get 100 stealth kills"],
        ["Go Kick Rocks", "Knock down 12 Anarchist Cairns"],
        ["Gold Team Rules", "Earn a Gold Medal in all Challenges"],
        ["Golden Boy", "Earn your first Gold Medal in a Challenge"],
        ["Gotta Patch 'Em All", "Unlock all Patches"],
        ["Hold on Tight", "Complete the mission 'A War We Can Win' in the 'I Remember' storyline."],
        ["I Make This Look Good", "Earn a Gold Medal in a Challenge with a Character Skin and Custom Accent equipped"],
        ["I'm On Top of the World", "Beat the target score on every level of the Horde Assault mode."],
        ["I'm Out of Control", "Unlock 15 skills"],
        ["I've Been Waiting for This", "Complete the mission 'For An Outlaw Biker'."],
        ["Infestation Exterminator", "Complete the Infestation Exterminator storyline"],
        ["It's Getting Cold Outside", "Complete the mission 'We Couldn't Take the Risk' in the 'I'm Never Giving Up' storyline."],
        ["Just a Flesh Wound", "Complete the mission 'You Got A Death Wish' in the 'He's My Brother' storyline."],
        ["Kitchen Courier", "Sell Animal Meat or Plants to any Encampment"],
        ["Lend Me Your Ears", "Collect 989 Freaker Ears"],
        ["Logan's Shadow", "Kill an enemy with every type of ammo from a mysterious weapon earned in New Game+"],
        ["Lost & Damned", "Reach the Founder Rank"],
        ["Lost and Found", "Complete the mission 'No One Saw It Coming' in the 'He's My Brother' storyline."],
        ["Make it Rain", "Spend 20,000 credits at one Encampment"],
        ["Marauder Camp Hunter", "Complete the Marauder Camp Hunter storyline"],
        ["More Freakers, More Problems", "Defeat an increased-size horde in the Horde Assault mode added by the Broken Road update."],
        ["Morior Invictus", "Complete the mission 'Ascending from the Underworld' in the 'Race Against Time' storyline."],
        ["Mr. Fahrenheit", "Unlock 45 skills"],
        ["Old Reliable", "Kill 200 Enemies with a Crafted Weapon"],
        ["One Down", "Defeat your first Horde"],
        ["One More Ride", "Complete the story of Days Gone in New Game+"],
        ["One Percenter", "Go above and BEYOND, unlocking every trophy in Days Gone"],
        ["Participation Award", "Earn your first Bronze Medal in a Challenge"],
        ["Performance Enhanced", "Max out either your Health, Stamina, or Focus"],
        ["Riding NOMAD", "Complete the mission 'Riding Nomad Again' in the 'We've All Done Things' storyline."],
        ["Sarah's Gift", "Beat the target score on all four Horde Assault maps (Cascade, Belknap, Lost Lake, and Crater Lake), recovering something of Sarah's that was thought lost."],
        ["Second (the) Best", "Earn your first Silver Medal in a Challenge"],
        ["Special Delivery", "Complete the 'Chasing Leon' storyline."],
        ["Surviving is Living", "Complete the story of Days Gone in Survival Mode"],
        ["Surviving isn't Living", "Rescue 10 survivors"],
        ["Survivor", "Reach the maximum player level in the Horde Assault mode."],
        ["Take Back Your Name", "Complete the mission 'Should Have Seen It Coming' in the 'Ripped Apart' storyline."],
        ["The Art of Bike Repair", "Apply 100 scrap to your bike"],
        ["The Broken Roadshow", "Unlock over 75% of collectibles"],
        ["The Ends and the Means", "Complete the mission 'They're Not Sleeping' in the 'Finding Nero' storyline."],
        ["There's No Stopping Me", "Unlock 30 skills"],
        ["This is a Knife", "Kill a Breaker, Reacher, or Rager Freaker with a melee knife attack."],
        ["Variety is the Spice of Life", "Kill an enemy with every type of crossbow bolt"],
        ["Wannabe Fortune Hunter", "Unlock over 50% of the collectibles"],
        ["Welcome to the Party, Pal", "Clear all Ambush Camps, Infestations, and NERO Checkpoints in a single region"],
        ["World's End", "Complete the World's End storyline"],
        ["Worthy", "Fully upgrade any Ring"],
        ["You Done Good, Kid", "Earn a Medal in all Sub-Challenges"],
        ["You've Got Red on You", "Collect 541 Items from corpses"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
