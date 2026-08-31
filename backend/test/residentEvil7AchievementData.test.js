import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-7.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 418370 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-7");

test("getPlannerData('resident-evil-7') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-7");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Resident Evil 7 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Resident Evil 7 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Resident Evil 7 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1st Place at the Science Fair", "Create all items that contain Chem Fluid and Strong Chem Fluid."],
        ["A-ha!", "Obtain something by closely examining an item."],
        ["Arms in the Air", "Block an enemy attack by guarding."],
        ["Back Off, Mrs. B!", "Fight off Marguerite while she wanders the old house to make her run away."],
        ["Be Kind, Please Rewind", "Watch all the videotapes in a single playthrough."],
        ["Behind Closed Doors", "Close an open door by yourself."],
        ["Best Birthday Ever", "Get an S Rank or higher on all stages in Jack's 55th Birthday."],
        ["Butterfly Effect", "Get the bad ending in Daughters."],
        ["Can't Catch Me", "Complete the \"Mia\" videotape without being spotted by Marguerite."],
        ["Card Shark", "Complete Survival mode in 21."],
        ["Dead by Dawn?", "Complete Nightmare."],
        ["Don't Keep the Man Waiting", "Clear a stage with a 10 minute time bonus or higher in Jack's 55th Birthday."],
        ["Duck If You Love Life", "Avoid Jack's scissor attack by crouching."],
        ["End of the Night", "Get ending 1."],
        ["Ethan Never Dies", "Complete Ethan Must Die."],
        ["Eye in the Sky", "Complete 21."],
        ["Fastest Man in the Swamp", "Complete an Extreme Challenge in End of Zoe."],
        ["Fly Swatter", "Shoot and knock back Marguerite while she's leaping at you."],
        ["He's Here, There, Everywhere!", "Destroy a Mr. Everywhere statuette."],
        ["In the Bag", "Increase your item slots."],
        ["Into the Depths", "Escape from the ship."],
        ["Just A Memory Now", "Get ending 2."],
        ["Just Get Me Outta Here", "Complete the game within 4 hours."],
        ["King of the Swamp", "Complete End of Zoe on Joe Must Die."],
        ["Less is More", "Take down two or more enemies with one shot."],
        ["Like Mama Used to Make", "Complete Bedroom."],
        ["Mad Pelicans", "Obtain all of the Antique Coins in Madhouse difficulty."],
        ["Master of Unlocking", "Use a lock pick to open something."],
        ["Miracle Chef", "Feed Jack every type of food and drink in Jack's 55th Birthday."],
        ["Mission Accomplished", "Complete Not a Hero on Easy or Normal difficulty."],
        ["Mr. Nowhere", "Destroy all Mr. Everywhere statuettes."],
        ["Nice Try", "Put an unrelated object on a shadow plinth."],
        ["One Instinct: Survival", "Get the true ending in Daughters."],
        ["Open Your Eyes", "Use psychostimulants."],
        ["Out Before Dessert", "Complete the \"Happy Birthday\" videotape within 5 minutes."],
        ["Pelicans in Your Pocket", "Obtain all of the Antique Coins in Easy or Normal difficulty."],
        ["Playing it Safe", "Complete the game on Easy."],
        ["Promise Kept", "Complete End of Zoe on Easy or Normal."],
        ["Queensberry Rules", "Perform a 4-hit combo with your bare fists in End of Zoe."],
        ["Ratcatcher", "Find all the dead rats in Bedroom in a single play."],
        ["Resource Manager", "Complete the game without opening the Item Box more than 3 times."],
        ["She's Alive", "Travel to Louisiana."],
        ["Slash Slash, Slashity Slash!", "Clear insects off a door using a knife."],
        ["Sleepless in Dulvey", "Complete Night Terror."],
        ["Swamp Warfare", "Stealth kill 5 enemies in End of Zoe."],
        ["That's a Spicy Meat-a-ball", "Kill an enemy by attaching a Remote Bomb to them and detonating it."],
        ["The Devil Is in the Details", "Read all of the files in a single playthrough."],
        ["The Grave Will Out the Truth", "Uncover the secret in the old house."],
        ["The Nightmare's Finally Over", "Complete the game on Normal."],
        ["The Only Guns You Need", "Complete End of Zoe on Normal or Joe Must Die using no weapons."],
        ["Things Got Personal", "Finish off an enemy with the knife."],
        ["Walk it Off", "Complete the game using only 3 First Aid Meds or less."],
        ["Welcome to the Family, Son", "Escape from the guest house."],
        ["Who's Your Daddy Now?", "Complete the game on Madhouse."],
        ["You Ain't Gettin' Away", "Escape to the yard."],
        ["You Better Start Running", "Escape from the Baker family home."],
        ["You Gotta Know When To Hold 'Em", "Complete Survival+ mode in 21."],
        ["You're the Hero Now", "Complete Not a Hero on Professional difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
