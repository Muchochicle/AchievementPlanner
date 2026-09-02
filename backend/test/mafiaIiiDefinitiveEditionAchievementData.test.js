import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mafia-iii-definitive-edition.json - 85 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 360430 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mafia-iii-definitive-edition");

test("getPlannerData('mafia-iii-definitive-edition') returns real planner data with 85 curated achievements", () => {

    assert.ok(game, "expected real planner data for mafia-iii-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 85);

});

test("every Mafia III: Definitive Edition achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every Mafia III: Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 85 Mafia III: Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…Worse Than Dying", "You killed Bonnie Harless"],
        [".45 in My Hand", "Completed all of Cassandra's side-missions"],
        ["A Little Closure", "You investigated the cult's activities at Sammy's"],
        ["Aid and Comfort", "Help Donovan end Connor Aldridge (Stones Unturned DLC)."],
        ["Ain't Nowhere Safer", "Capture Sheriff Slim Beaumont (Faster, Baby! DLC)."],
        ["Amateur Bouncer", "Protected Sammy's from the Dixie Mafia"],
        ["Another Brother Falls", "Survive the drive into Sinclair Parish (Faster, Baby! DLC)."],
        ["Baby, You're a Rich Man", "Earned $500,000"],
        ["Barkeep", "Began Sammy's Renovation"],
        ["Before They Bury You", "Decide Lincoln's fate - the ending marker."],
        ["Big Earner", "Received $10,000 in earn from one Underboss"],
        ["Big Fat Party Animal", "Killed 50 enemies using the Hartmann 7.62mm and wearing the Party Animal outfit"],
        ["Big Money", "Get a hot tip on a loose nuke (Stones Unturned DLC)."],
        ["Blade of Death", "Killed 20 enemies using Throwing Knives"],
        ["Bon Appétit!", "Fed a body to an alligator"],
        ["Burn Like Napalm", "Burn Tommy Marcano beyond recognition - a story marker."],
        ["Campaign Strategy", "Destroyed 10 of Slim's re-election billboards"],
        ["Can't Trust a Rat", "Killed 15 Racket Informants"],
        ["Cash in Hand", "Saved $150,000 between your wallet and the bank "],
        ["Certainly Was Exciting", "Leave Olivia Marcano to her fate - a story marker."],
        ["Closed Casket", "Performed 50 Brutal Takedowns"],
        ["Code 112", "Stole a Police car"],
        ["Combat Specialist", "Killed 300 enemies using Takedowns"],
        ["Concerned Citizens", "Help Irma, Jeremiah and Christian (Faster, Baby! DLC)."],
        ["Covered in Blood", "You met Bonnie Harless"],
        ["Creature of Habit", "Investigate the scene (Stones Unturned DLC)."],
        ["Custom 358", "Drove at 120 mph or faster for 20 seconds"],
        ["Cut & Run", "Burke agrees to help you kill Marcano - a story marker."],
        ["Danger Close", "Killed 30 enemies using Proximity Mines"],
        ["Devotchka", "Survive the trip to Boicherot's (Stones Unturned DLC)."],
        ["Did I Forget Something?", "Placed an unconscious person in the trunk of a car"],
        ["Everyone Will Notice", "Toss Derazio out his penthouse window - a story marker."],
        ["Family", "Reach loyal status with all three underbosses (missable)."],
        ["Fish Gotta Eat", "Help Vito capture Michael Grecco - a story marker."],
        ["Flambé", "Made 10 enemies kill themselves with their own Molotovs"],
        ["For Old Time's Sake", "Cassandra agrees to help you kill Marcano - a story marker."],
        ["Haunted Places", "Investigated the 3 \"Places of Darkness\""],
        ["Herbalist", "Reached the Max Herbalism level"],
        ["Hole in Your Pocket", "Spent at least $500,000"],
        ["I Need a Favor", "Completed all of Vito's side-missions"],
        ["I'm Goin' In!", "Attacked a Racket without killing any Enforcers"],
        ["Insurance Risk", "Escaped a Police Zone after being chased for 2 minutes"],
        ["IRA Don't Ask", "Completed all of Burke's side-missions"],
        ["It's a Brave New World", "Turn the Butcher over to Burke - a story marker."],
        ["Jesuit in New Mexico", "Help Alvarez escape - a Stones Unturned DLC marker."],
        ["Just You and Me", "Keep only one underboss alive by assigning all districts to one boss and skipping the others' side missions (missable)."],
        ["Kickin' Up Dust", "Help MJ and Roxy free the witnesses (Faster, Baby! DLC)."],
        ["Little Late for That", "Help Enzo escape - a story marker."],
        ["Live Another Day", "Recruited 15 Racket Informants"],
        ["Mr. Green Thumb", "Fully upgraded the Grow House"],
        ["My Name is Lincoln Clay", "Kill Santangelo - a story marker."],
        ["Never Saw it Coming", "Killed an enemy within 2 seconds of kicking open a door"],
        ["New Bordeaux Drifter", "While driving, drifted for at least 5 seconds"],
        ["Next Time Swim Faster", "Got eaten by an alligator"],
        ["No Loose Ends", "Killed all of the Racket Bosses"],
        ["One Good Turn", "Made a 180 degree turn at high speed without hitting anything"],
        ["Operation: Deep Sleep", "Knocked out 30 people with the Dart Gun"],
        ["Pop, Pop", "Killed 4 enemies using Slow-Mo Shooting 10 Times"],
        ["Pour Sammy!", "Fully renovated Sammy's"],
        ["Pray on the Way Up", "Hang Ritchie Doucet from a Ferris wheel - a story marker."],
        ["Racketeer", "Got the maximum earn from one of your Rackets"],
        ["Real Nice Time", "Gut Lou Marcano - a Mafia III story-DLC marker."],
        ["Recruited to 5th SFG", "Performed 5 headshots in 5 seconds"],
        ["Sending A Message", "Chained together 3 or more Brutal Takedowns"],
        ["Shh, shh", "Performed 100 Stealth Takedowns on enemies"],
        ["Skip Trace", "Completed all Bounty Hunting assignments"],
        ["Softened 'Em Up", "Completely weakened a Racket by killing all of its Enforcers"],
        ["Somethin' I've Gotta Do", "Collect your things from Sammy's - a story marker."],
        ["Spotter", "Killed 30 Enemies Using Sniper Support"],
        ["Standard Communication Grid", "Wiretapped the Delray Hollow Smack Racket"],
        ["Street Rocket", "Drove a distance of 50 km in the Samson Harrier "],
        ["Sure Thing, Boss", "Unlocked all Associates"],
        ["Testing the Shocks", "While driving, performed a 50-meter jump and landed on your wheels"],
        ["That Good Connect", "Sold a single batch of weed for $10,000 or more"],
        ["The Connection to Cuba", "Follow the lead to Cuba - a Stones Unturned DLC marker."],
        ["The New Boss", "Flipped 16 Racket Bosses"],
        ["The Poor Sumb****", "Kill Judge Holden - a story marker."],
        ["There Are No Dominos", "Secure the nuke (Stones Unturned DLC)."],
        ["There's a War Goin' On", "A war is going on - a Stones Unturned DLC marker."],
        ["Trap Game Strong", "Successfully triggered 10 Vehicle Traps"],
        ["Trust", "Reach loyal status with one underboss by completing their side missions (missable)."],
        ["We Partners Now", "Vito agrees to help you kill Marcano - a story marker."],
        ["We're in This Together", "Keep all three underbosses alive through 'Yet Here We Are' by distributing districts equally (missable)."],
        ["Wrecker", "Executed 10 Vehicle Takedowns"],
        ["Yet Here We Are", "Avenge Sammy and Ellis - a late-story marker."],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
