import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-new-dawn.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 939960 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("far-cry-new-dawn");

test("getPlannerData('far-cry-new-dawn') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-new-dawn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Far Cry New Dawn achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Far Cry New Dawn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Far Cry New Dawn achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Graceful Return", "Recover Grace's prototype gun and welcome her back to Prosperity for good. Host only."],
        ["All Your Bases", "Liberate all Outposts at least once on Rank III."],
        ["Anger Management", "Eliminate 10 enemies within a single activation of Wrath."],
        ["Archery Expert", "Kill an enemy more than 100m away with a basic arrow."],
        ["Audiophile", "Rediscover some sweet tunes for the new world. Find all hidden MP3 players. Host only."],
        ["Before", "Find all the Dear Photograph locations and see Hope County as it used to be. Host only."],
        ["Bring a Knife to a Gun Fight", "Kill 25 enemies using any type of takedown. Put that railroad spike to good use!"],
        ["Buzzkill", "Kill 10 brawlers with any saw launcher. They never saw it coming."],
        ["Captain's Courageous", "Kill your first Enforcer. I'm sure this will send the Highwaymen a good message."],
        ["Closed for Applications", "Recruit all Guns For Hire. Host only."],
        ["Coming Up With the Goods", "Return Selene's valuable stash. Host only."],
        ["Expeditious Retreat", "Complete your first Expedition to force the Highwaymen out of a stronghold."],
        ["Finders Keepers", "Complete 3 Treasure Hunt missions. Host only."],
        ["Fly, You Fools!", "No wings means less drag, right? Take a short flight in the wingless plane."],
        ["Forager", "Gather 15 plants growing in Hope County. It's the closest thing to a pharmacy we have nowadays."],
        ["Get to the Point", "Finish off an Enforcer with a bayonet."],
        ["Good Job, Cap", "Kill 5 enemies by throwing a shield at them."],
        ["Have Buddy, Will Travel", "Complete 3 Expeditions with a co-op partner."],
        ["Hey Father, Watch This", "Perform an Aerial Takedown after using Leap of Faith."],
        ["Hit the Road", "Complete 7 unique Expeditions on the Rank III difficulty."],
        ["Home is Where the Part Is", "Upgrade Prosperity's infrastructure for the first time by investing in the right parts. Host only."],
        ["Honorary Scout", "Gather intel 10 times by talking to Wiki-Bean-ia scouts. Host only."],
        ["How's it Look, Doc?", "Craft 10 Medkits. They'll definitely come in handy."],
        ["It's Super Effective!", "Headshot an Enforcer with Piercing Ammo."],
        ["Kill or Be Killed", "Kill a Monstrous animal. It'd do the same to you given half the chance."],
        ["Legend Has It", "Craft your first Legendary Weapon or Vehicle and start a legend of your own."],
        ["Master Skinner", "Collect at least one skin from every type of animal in Hope County. Not creepy at all."],
        ["My Little Fortress", "Make Prosperity better than ever! Build all Infrastructure upgrades available. Host only."],
        ["Paladin’s Secret", "Find Sam Fisher’s outfit in the Government Plane Wreck expedition"],
        ["Perk-olate", "Unlock the first level for all Perks."],
        ["Poof!", "Use 3 smoke grenades."],
        ["Problem Solver", "Solve the biggest problem in Hope County by defeating the Twins. Host only."],
        ["Prospering", "Upgrade and secure Prosperity. Host only."],
        ["Pure Ninja", "Liberate a Rank III Outpost while staying undetected."],
        ["Reduce, Reuse, Recycle", "Scavenge an Outpost. You can always reclaim it. Host only."],
        ["Return to Eden", "Bring the Father back to New Eden. Host only."],
        ["Safekeeping", "Picklock 5 safes. With no more banks, it's the closest thing you'll get to experiencing a heist."],
        ["Save Your Bacon", "Recruit Horatio. Don't mind his temper, he can be pig-headed sometimes. Host only."],
        ["Sidecar Sidekick", "Drive with Timber for a total of 5 minutes. Just don't take him to the vet."],
        ["Springboard", "Survive a 30m fall using only Leap of Faith to nullify the impact."],
        ["Stack 'em Up", "Purchase the 5th tier of a stackable perk. You can never have enough."],
        ["The End of Eden", "Decide the fate of the Father. Host only."],
        ["The Meaning of Prosperity", "Help Carmina get back to her mother in Prosperity. Host only."],
        ["The Ryeunion", "Reunite Nick Rye with Carmina and Kim. Host only."],
        ["Tip o' the Hat", "Knock an enemy's helmet off with a charged melee attack."],
        ["Weaponsmith", "Craft 3 weapons. They don't need to look good, they just need to get the job done!"],
        ["White Gold", "Commandeer an Ethanol tanker and bring it back to one of your outposts."],
        ["Wiki-Bean-ia in Business", "Help Bean get back his business plan so he can set up his intel network in Prosperity. Host only."],
        ["Yoink", "Loot a Highwaymen Supply Drop. Be careful, it won't be unguarded!"],
        ["You're a Catch", "Successfully catch one of every type of fish in Hope County. Get those omega-3s."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
