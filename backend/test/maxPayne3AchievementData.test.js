import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/max-payne-3.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 204100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("max-payne-3");

test("getPlannerData('max-payne-3') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for max-payne-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Max Payne 3 achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Max Payne 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Max Payne 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3 Blind Mice", "Blind 3 players simultaneously with the pepper spray"],
        ["60 Seconds of Intimidation", "Grind 60 Seconds of Intimidation on enemy players"],
        ["A Few Hundred Bullets Back", "Use Every Weapon In The Game"],
        ["A License To Kill", "Collect All Golden Guns"],
        ["A New York Minute", "Finish In A New York Minute"],
        ["Air Ace", "Get 2 kills in a single Shootdodge in the Departure Lounge"],
        ["All Of The Above", "Finish All Single Player Grinds"],
        ["Along For The Ride", "Trigger A Bullet Cam On The Zipline [FREE AIM]"],
        ["Amidst The Wreckage", "Destroy All The Models In The Boardroom"],
        ["An Echo Of The Past", "Find All Clues"],
        ["Bar Brawler", "Kill someone with a melee strike in the Bar area of Hoboken Bar"],
        ["Betty Confetti", "Kill a player with the Bouncing Betty"],
        ["Breaking and Entering", "Open 15 Containers or Doors in a single game of Dead Men Walking"],
        ["Breaking the 4th", "Earn a x4 multiplier in Challenge Mode"],
        ["Colder Than The Devil's Heart", "Kill 30 Enemies In 2 Minutes"],
        ["Dearest Of All My Friends", "Kill Someone On Your Friends List"],
        ["Deathmatch Challenge", "Winner In Any Public Deathmatch"],
        ["Drinker's Revenge", "Kill the sniper who broke your Hip Flask in the same life"],
        ["Early Adopter", "In a single game, kill the same player with both the M24 and the IA2 AR"],
        ["Express Checkout", "Kill 4 players within 3 seconds in the Imperial Palace"],
        ["Feel The Payne", "Story Complete [MEDIUM]"],
        ["Full Monty", "Complete One Of Each Game Mode Including All Gang Wars"],
        ["Grave Robber ", "Looted A Body"],
        ["It Looked Easy Enough", "Complete the Challenge Mode"],
        ["It Was Chaos And Luck", "Get 6 Kills While Riding The Push Cart [FREE AIM]"],
        ["It's Fear That Gives Men Wings", "10 Bullet Time® Kills In A Row "],
        ["Keep Your Nose Clean", "Get 100 Kills as a member of the SPP"],
        ["Long Arm of the Law", "Win 20 Vendettas in the 55th Battalion HQ"],
        ["Long Arm of the Lawless", "Kill Max Payne in Panama as the De Marcos"],
        ["M4 Murder", "Level up your M4 Assault all the way to level 10"],
        ["Man Of Many Faces", "Unlock All Faction Characters"],
        ["Man Of Many Weapons", "Unlock All Weapons"],
        ["Max Payne Invitational", "Invite someone to play through the in-game contact list"],
        ["Maximum Payne", "Story Complete [OLD SCHOOL]"],
        ["Old School Moves", "Perform a 720 spin while prone in Nightclub"],
        ["One Bullet At A Time", "300 Headshots"],
        ["Ouch My Head", "Headshot someone with a Hangover"],
        ["Out The Window", "Get 6 Kills While Diving Through The VIP Window [FREE AIM]"],
        ["Part I Complete", "Complete Part I Of The Story"],
        ["Part II Complete", "Complete Part II Of The Story"],
        ["Part III Complete", "Complete Part III Of The Story"],
        ["Past The Point Of No Return ", "Take 100 Painkillers"],
        ["Payne Bringer", "Kill 100 Other Players"],
        ["Payne In The Ass", "Story Complete [HARDCORE]"],
        ["Resisting Arrest", "Stun 10 players with either the cattle prod or stun gun"],
        ["Serious Payne", "Story Complete [HARD]"],
        ["So Much For Being Subtle", "Get 9 Kills While Being Pulled By A Chain [FREE AIM]"],
        ["Something Wicked This Way Comes", "Get 7 Kills While Jumping From The Rickety Boat [FREE AIM]"],
        ["Sometimes You Get Lucky", "Get A Headshot During The Rooftop Tremors"],
        ["Sure Know How To Pick A Place", "Discover All Tourist Locations"],
        ["Sweaty Betty", "Trigger and avoid a Bouncing Betty by Shootdodging"],
        ["Sweep", "Flawless Team Gang Wars Victory"],
        ["That Old Familiar Feeling", "Clear The Hallway Of Lasers"],
        ["The Fear Of Losing It", "Survive A Level Without Painkillers"],
        ["The Gambler", "Won A Wager"],
        ["The One Eyed Man Is King", "Cover Passos With Perfect Aim"],
        ["The Only Choice Given", "Get 8 Kills While Dangling From A Chain [FREE AIM]"],
        ["The Road-Kill Behind Me", "Total Everything On The Runway"],
        ["The Shadows Rushed Me", "Unlock And Complete New York Minute Hardcore"],
        ["Training Complete", "Achieve Level Rank 50"],
        ["Trouble Had Come To Me", "Clear Everyone On The Bus Ride"],
        ["Welcome Ashore", "Kill a player on the yacht from the observation platform of the Panama Canal"],
        ["With Practiced Bravado", "100 Kills During Shootdodge"],
        ["WMD", "Get 3 kills from a single use of the level 3 explosives burst"],
        ["You Might Hurt Someone With That", "Shoot 10 Airborne Grenades"],
        ["You Play, You Pay, You Bastard", "100 Kills With Melee "],
        ["You Push A Man Too Far", "Don't Shoot The Dis-Armed Man"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
