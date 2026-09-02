import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-hardline.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238880 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("battlefield-hardline");

test("getPlannerData('battlefield-hardline') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-hardline");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Battlefield Hardline achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Battlefield Hardline achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Battlefield Hardline achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Craftsman's Tools", "Find your weapons in Sovereign Land before instigating combat in the trailer park"],
        ["Almost an Expert", "Reach Expert Level 10 in single-player"],
        ["Bag of Tricks", "Get an RPG kill while carrying the bag in a Capture the Bag match"],
        ["Become Legend", "Reach Rank 150"],
        ["Bio-Beware!", "Kill 50 enemies with Inquisition Swords"],
        ["Blue Eagle", "Complete all single-player episodes on Hardline difficulty"],
        ["Bolt From the Blue", "Get a Gold Service Star with the M1903"],
        ["Bring 'em to Justice", "Capture all warrants alive in single-player"],
        ["Bumpy Ride", "Complete Ep. 2: Checking Out"],
        ["By the Book", "Do a Non-Lethal takedown on 10 criminals in single-player"],
        ["BYOB", "Use the BBQ to take out the chef in Ep. 7: Glass Houses"],
        ["Cape and Ears Not Included", "Climb a total of 10 meters with the grapple gun in single-player"],
        ["Case Closed", "Complete all single-player episodes on Officer difficulty"],
        ["Damn Thing Doesn't Work", "Disarm 2 alarm boxes in single-player"],
        ["Dare Devil", "Jump the dirt bike into the mansion grounds in Ep. 10: Legacy"],
        ["Dead or Alive", "Pick up 100 Bounties in the Bounty Hunter game mode"],
        ["Deal? What Deal?", "Complete Ep. 3: Gator Bait"],
        ["Dressed to the Sixteens", "Enter a match after customizing all 16 Class and Faction outfits"],
        ["Electric Company", "Take down 25 enemies with the T62 CEW in multiplayer"],
        ["Enforcing the Law", "Get 10,000 kills with the Enforcer class"],
        ["Fast Rope Expert", "Travel a total of 90 meters with the zipline crossbow in single-player"],
        ["From Their Cold, Dead Hands", "Complete Ep. 8: Sovereign Land"],
        ["Ghost Ride the Whip", "Get a Roadkill with the Hearse without being inside it"],
        ["Good Guys", "Complete Ep. 4: Case Closed"],
        ["Got Your Back", "Deny 100 Bounties in the Bounty Hunter game mode"],
        ["Graceful Exit", "Don't get spotted in the Ep. 5: Gauntlet"],
        ["Grandpa's Automatic", "Earn a Gold Service Star with the M1 Carbine"],
        ["Have Some Professionalism", "Get 10,000 kills with the Professional class"],
        ["Here's Johnny!", "Kill 75 enemies with the Fire Axe"],
        ["Hollyweird", "Complete Ep. 7: Glass Houses"],
        ["Hollywood Hideaway", "Find Roark's hidden room in Ep. 7: Glass Houses"],
        ["I'll Be Back!", "Earn a Gold Service Star with the 1887"],
        ["Keep Digging, Detective", "Complete any case file in single-player"],
        ["Knock Knock", "Blow up the meth lab in Ep. 5: Gauntlet"],
        ["Locked & Loaded, Good to Go", "Enter a match after crafting weapons in all five Gun Bench slots"],
        ["Mechanical Trigger Finger", "Get 10,000 kills with the Mechanic Class"],
        ["Menz in the Hood", "Kill 25 enemies with a MAC-10 and 25 with a Double-Barrel Shotgun in multiplayer"],
        ["Motley Crew", "Tag all criminals visible from the rooftop in Ep. 1: Back to School"],
        ["Nailed It!", "Get 100 kills with the Nail Gun"],
        ["On the Job", "Complete the Prologue in single-player"],
        ["One Good Cop", "Reach Expert Level 15 in single-player"],
        ["Operation Successful", "Get 10,000 kills with the Operator class"],
        ["Pressure Applied", "Complete Ep. 1: Back to School"],
        ["Real Action Hero", "Kill a criminal in Independence Day from mid-air after escaping the penthouse"],
        ["Served Cold", "Complete Ep. 10: Legacy"],
        ["Small Crew, Big Job!", "Win 10 Squad Heist matches"],
        ["Snow Blind", "Complete Ep. 6: Out of Business"],
        ["Social Climber", "Find the hidden access to the mansion grounds in Ep. 10: Legacy"],
        ["Some Damn Fine Fireworks", "Complete Ep. 9: Independence Day"],
        ["Super Cop", "Complete all single-player episodes on Veteran difficulty"],
        ["Test Your Mettle", "Complete 25 Competitive Matches"],
        ["That's Not a Knife!", "Kill 25 enemies with the Throwing Knife"],
        ["The Big Score", "Win 5 Heist and 5 Blood Money matches in multiplayer"],
        ["The Ultimate Betrayal", "Win a Heist match as a Cop and as a Criminal on each of the Betrayal maps"],
        ["Their Own Medicine", "Steal a T62 CEW from the back of a police cruiser in Ep. 5: Gauntlet"],
        ["Tommy's Favorite", "Earn a Gold Service Star with the M1A1"],
        ["True Detective", "Complete 3 case files in single-player"],
        ["Watched, Dawg", "Identify 10 warrants with the scanner in single-player"],
        ["World's Greatest Detective", "Complete all case files in single-player"],
        ["You Probably Have Questions", "Complete Ep. 5: Gauntlet"],
        ["You Tazed Him, Bro!", "Stun 5 criminals with the T62 CEW in single-player"],
        ["You're Getting Good at This", "Reach Expert Level 5 in single-player"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
