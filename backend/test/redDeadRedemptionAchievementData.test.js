import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/red-dead-redemption.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2668510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("red-dead-redemption");

test("getPlannerData('red-dead-redemption') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for red-dead-redemption");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Red Dead Redemption achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Red Dead Redemption achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Red Dead Redemption achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Savage Soul", "Complete the story mission 'At Home with Dutch'."],
        ["All's Right With the World", "Undead Nightmare: complete 'On a Pale Horse' (finish the storyline)."],
        ["Austin Overpowered", "Complete Twin Rocks, Pike's Basin, and Gaptooth Breach Hideouts."],
        ["Axe Master", "Complete all Tomahawk challenges."],
        ["Bearly Legal", "Kill and skin 18 grizzly bears."],
        ["Buckin' Awesome", "Break the Kentucky Saddler, the American Standardbred, and the Hungarian Half-bred."],
        ["Bullseye", "Get 250 headshots in any game mode."],
        ["Chupathingy", "Find and kill a chupacabra."],
        ["Clemency Pays", "Capture a bounty alive."],
        ["Dastardly", "Place a hogtied woman on the train tracks and let a train kill her."],
        ["Evil Spirits", "Complete Tumbleweed and Tesoro Azul Hideouts."],
        ["Exquisite Taste", "Purchase a rare weapon from a gunsmith."],
        ["Fan Service", "Find and break a unicorn."],
        ["Fightin' Around the World", "Knock someone out in melee in every saloon in the game."],
        ["Friends in High Places", "Use a pardon letter with more than $5000 bounty."],
        ["Frontiersman", "Obtain Legendary rank in any Ambient Challenge."],
        ["Gold Medal", "Earn a Gold Medal Rank for a combat mission."],
        ["He Cleans Up Well!", "Obtain the Elegant Suit."],
        ["Heading South on a White Bronco", "Evade the US Marshals while riding the Hungarian Half-Bred horse in Single Player."],
        ["High Roller", "Win over 2000 chips in a hand of Poker."],
        ["In a Hail of Bullets", "Kill 500 enemies with any pistol or revolver in any game mode."],
        ["Instinto Asesino", "Complete Fort Mercer and Nosalida Hideouts."],
        ["Into the Sunset", "Complete the story mission 'The Last Enemy That Shall Be Destroyed'."],
        ["Judge A Man By The...", "Undead Nightmare: complete the 'Cure For Most of What Ails You' and 'Get Back in that Hole, Partner' Survivor Missions."],
        ["Land of Opportunity", "Complete the story mission 'The Assault on Fort Mercer'."],
        ["Long Arm of Marston", "Kill 500 enemies with any rifle, repeater, or shotgun in any game mode."],
        ["Mad Marston: The Trail Warrior", "Attain Rank 5 in all Undead Nightmare Challenges."],
        ["Man of Honor / Chivalry's Dead", "Attain highest Fame rank and either highest Honor rank or lowest Honor rank."],
        ["Manifest Destiny", "Kill the last buffalo in the Great Plains in Single Player."],
        ["Master Exploder", "Complete the Explosive Rifle Challenge."],
        ["More than a Fistful", "Earn $10,000."],
        ["Mowing Them Down", "Kill 500 enemies with a mounted weapon in any game mode."],
        ["No Dice", "Complete a game of Liar's Dice without losing a single die."],
        ["No More Fancy Words", "Complete the story mission 'An Appointed Time'."],
        ["Nurture or Nature?", "Complete the story mission 'Remember My Family'."],
        ["On the Trail of de Vaca", "Uncover every location on the map."],
        ["People are Still Strange", "Complete 15 tasks for Strangers."],
        ["Redeemed", "Attain 100% in the Game Completion stat."],
        ["Six Years In The Making", "Find and kill a sasquatch."],
        ["Sons of Mexico", "Complete the story mission 'The Gates of El Presidio'."],
        ["Spinning Plates", "Undead Nightmare: have every territory saved at the same time."],
        ["Spurred to Victory", "Complete 20 story missions without switching to a new horse at a hitching post."],
        ["Strange Things are Afoot", "Complete a task for a Stranger."],
        ["That Government Boy", "Complete the story mission 'Exodus in America'."],
        ["The Benefits of Civilization", "Complete the story mission 'And the Truth Will Set You Free'."],
        ["The Downward Spiral", "Undead Nightmare: complete the 'Curious Tales from Blackwater, USA' Survivor Mission."],
        ["The Gunslinger", "Score a headshot on any enemy using Expert targeting mode."],
        ["The Superior Dance", "Undead Nightmare: complete the 'Mother Superior Blues' Survivor Mission."],
        ["Unnatural Selection", "Kill one of every animal species in the game in any game mode."],
        ["What About Hand Grenades?", "Get a ringer in a game of Horseshoes."],
        ["Zed's Dead, Baby", "Attain 100% Game Completion statistic in Undead Nightmare."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
