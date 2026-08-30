import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-3.json - 77 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 238090 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sniper-elite-3");

test("getPlannerData('sniper-elite-3') returns real planner data with 77 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 77);

});

test("every Sniper Elite 3 achievement has a unique id from 1 to 77 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 77 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 77);
    assert.strictEqual(new Set(apinames).size, 77);

});

test("every Sniper Elite 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 77 Sniper Elite 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["… And stay dead!", "Kill the target in 7 different ways"],
        ["1200 Rounds of Awesome!", "Find and set up the MG42."],
        ["A few of my favourite things", "Get a kill with each offensive item"],
        ["A shot in the dark", "Complete all the long shots"],
        ["Advantage: Sniper", "Get 30 kills from sniper nests"],
        ["An ode to Rube Goldberg", "Get 20 chain reaction explosive kills"],
        ["Archivist", "Find all the war diaries"],
        ["Blood and thunder", "Kill the Teufelsfeuer soldiers in the coliseum."],
        ["Bring it Down", "Take out two of the AA gun crews with special explosive events."],
        ["Casual Reader", "Find half of the war diaries"],
        ["Charlie's Challenge", "Get a testicle-shot from over 100m away"],
        ["Coast to Coast", "Snipe the soldier in the tower far, far away."],
        ["Competitive streak", "Play 10 competitive multiplayer matches"],
        ["Conserving oxygen", "Hold breath for one hour"],
        ["Convenience is key", "Kill the target by shooting nearby explosive barrels"],
        ["Crouching Tiger, Hidden Ratte", "Complete Mission 6"],
        ["Dedicated soldier", "Complete 100% of the campaign on any difficulty"],
        ["Definitely no \"90-day wonder\"", "Attain a rank of Sergeant (level 11)"],
        ["Demolition Man", "Complete Mission 7"],
        ["Double tap", "Incapacitate 2 vehicles in Kasserine Pass within 5 seconds (Mission 6)"],
        ["Double the distance", "Snipe enemies over a cumulative distance of a double marathon"],
        ["Dry bone valley", "Complete 'Confrontation'."],
        ["Elite fan", "Own Sniper Elite, Sniper Elite V2 and Sniper Elite 3"],
        ["End of the 'lein'", "Find and kill the visiting General (Mission 3)"],
        ["Explosive Hunter", "Find and shoot the 10 hidden explosives (Shooting Range)."],
        ["Fast-moving target", "Shoot the target in his car"],
        ["Feast your eyes", "Spot and destroy 4 enemy traps without triggering them."],
        ["Ghost of Tobruk", "Clear the mountain pass without alerting the enemy (Mission 1)"],
        ["Grenadier", "Kill the target with a grenade"],
        ["Hard as nails", "Complete the game on Sniper Elite difficulty"],
        ["Herr Charles", "Kill the officer at the meeting with a testicle shot"],
        ["Hidden and dangerous", "Complete a campaign mission without being seen (excluding Tobruk)"],
        ["Highly decorated", "Earn 1 of every ribbon in competitive multiplayer"],
        ["I Fort this would be difficult", "Get to the informant without being spotted (Mission 4)"],
        ["I Siwa you did there", "Make the target officer's death look like an accident (Mission 5)"],
        ["In the middle", "Kill the target with a chain reaction"],
        ["In the nick of time", "Complete Mission 5"],
        ["Indestructible", "Complete a mission after losing over 500 units of health"],
        ["Living in the shadows", "Get to the command tent unseen and without killing"],
        ["Long way down", "Throw an enemy off one of the bridges (Mission 8)"],
        ["Make it go boom", "Kill 20 enemies by shooting explosives"],
        ["Meltdown", "Complete 'Belly of the beast'."],
        ["Nesting instinct", "Find all the Sniper nests"],
        ["No escape", "Kill the target in the vehicle by shooting its weakspot"],
        ["No refuge", "Complete Mission 4"],
        ["Nothing is optional", "Complete all the optional objectives"],
        ["Nothing to lose", "Complete the mission without using any healing items"],
        ["Officer material", "Attain a rank of Second Lieutenant (level 31)"],
        ["Oscar Mike", "Relocate 100 times"],
        ["Pest Control Specialist", "Complete Mission 8"],
        ["Prepared for any eventuality", "Create and save 4 loadouts"],
        ["Regular soldier", "Complete the game on Marksman difficulty"],
        ["Saved by the bell", "Crush the target with a bell"],
        ["Shoot to thrill", "Hit all the targets on the shooting range."],
        ["Sniping with friends", "Complete the campaign in co-op"],
        ["Specialist", "Earn Gold on all ranges (Shooting Range)."],
        ["Surprise, surprise", "Complete 'In Shadows'"],
        ["Sweating bullets", "Shoot and kill the target"],
        ["T.N.T.", "Destroy all the Teufelsfeuer shipments in the truck depot."],
        ["Tactical distractor", "Distract 20 enemies with flint or rocks"],
        ["Tagged", "Tag 100 enemies or vehicles"],
        ["The Everyman", "Complete all the challenge missions"],
        ["The gathering", "Find all the collectible cards"],
        ["The Gazala Gallop", "Complete Mission 1"],
        ["The Hunter", "Eliminate a sniper with a stealth takedown."],
        ["This is my rifle…", "Customize 1 rifle"],
        ["Threat assessment", "Observe the target and correctly choose to leave or kill"],
        ["Three birds, one stone", "Destroy all 3 bomb dumps at the same time (Mission 7)"],
        ["Through the fire…", "Complete Mission 3"],
        ["Through the looking glass", "Kill 10 snipers before they see/shoot you"],
        ["Time to reload", "Complete the game on Cadet difficulty"],
        ["True sniper", "Complete the game on Authentic difficulty"],
        ["Wait for it…", "Kill 10 enemies with flint-triggered detonations"],
        ["Well, well, well", "Hide a body in each of the wells in Gaberoun (Mission 2)"],
        ["Wonderwall", "Complete Mission 2"],
        ["You may fire when ready...", "Blow up the soldier in the distant tower using heavy artillery."],
        ["You'll try anything once", "Play 1 mission in each mode (campaign, challenges, competitive multiplayer)"],
    ];

    assert.strictEqual(officialAchievements.length, 77, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
