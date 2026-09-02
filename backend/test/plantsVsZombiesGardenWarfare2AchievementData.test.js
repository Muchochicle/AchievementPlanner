import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/plants-vs-zombies-garden-warfare-2.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1922560 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("plants-vs-zombies-garden-warfare-2");

test("getPlannerData('plants-vs-zombies-garden-warfare-2') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for plants-vs-zombies-garden-warfare-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Plants vs. Zombies: Garden Warfare 2 achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Plants vs. Zombies: Garden Warfare 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Plants vs. Zombies: Garden Warfare 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alright Meow", "Enter the Mystery Portal and Complete a Full Game of Cats vs Dinos as a Cat"],
        ["Always IMProvising", "Apply a weapon skin to a Zombie's weapon."],
        ["Aww Shucks!", "As Kernel Corn, vanquish 25 Zombies with the Shuck Shot."],
        ["Behind Enemy Vines", "Enter the Plant Stats room as a Zombie."],
        ["Boss Battle", "Enter the Mystery Portal and Defeat a Boss Hunt on Normal Difficulty"],
        ["Boss Battle Boss", "Enter the Mystery Portal and Defeat a Boss Hunt on Craaazy Difficulty"],
        ["Boss Battle Specialist", "Enter the Mystery Portal and Defeat a Boss Hunt on Hard Difficulty"],
        ["Catching Waves", "Complete 100 waves in Ops."],
        ["Corn Identity", "Enter the Zombie Stats room as a Plant."],
        ["Curseproof", "Complete 'Captain Smasher's Curse'."],
        ["Gnome Man's Land", "Enter the Chamber of Gnomes."],
        ["Gnomore!", "Find all hidden Garden Gnomes."],
        ["Goat Any Last Words?", "As a Goat, vanquish a Plant."],
        ["Goatmeal", "As the Chomper, swallow a Goat."],
        ["Got Golden", "Complete 'Gold Rush'."],
        ["Gramma Z Says...", "Vanquish 5000 Plants."],
        ["Hawkguy", "Earn a S-Rank in the Crazy Targets Range."],
        ["Her Majesty", "Complete 'Well That Escalated Quickly'."],
        ["Hero to Zero", "Vanquish an opponent using a Potted Plant or Zombot Turret."],
        ["Insanity", "Complete an Ops game on CRRRRRAAAZY Difficulty."],
        ["It's My Island", "Reach the boss wave using the Flag of Power in the Backyard Battleground."],
        ["It's Not a Door...it's a Portal!", "Complete 3 Mystery Portal Matches"],
        ["Just Peachy!", "Stun 50 Z-Mechs using Citron's EMPeach."],
        ["Just Sprouted", "Complete 'Boom Tombs'."],
        ["King of Autumn", "Defeat Red Gnome King."],
        ["King of Spring", "Defeat Green Gnome King."],
        ["King of Summer", "Defeat Yellow Gnome King."],
        ["King of Winter", "Defeat Blue Gnome King."],
        ["Lawn Care", "Customize your Backyard with an Epic Item."],
        ["Mango Tango", "Complete 'Showdown'."],
        ["More Secrets?", "New Faces from Craazy Places"],
        ["My Favourite Z-Mech on the Citadel", "As a Plant, vanquish the Z7 Imp."],
        ["My Place or Yours", "Vanquish 25 Plants with the Scurvy Scattershot, and 25 Plants with the Spyglass Shot."],
        ["Not the Boss of Me", "Defeat 3 Super Boss Waves in Ops."],
        ["On the Cob", "Complete 'Zero Bark Thirty'."],
        ["Open the Door Get on the Floor", "Enter the Mystery Portal and Complete a Full Game of Cats vs Dinos as a Dino"],
        ["Playdate", "Visit a friend's Backyard Battleground, or have a friend visit your Backyard Battleground."],
        ["Prance vs Samba", "Gesture immediately after vanquishing a player."],
        ["Really Epic!", "Complete 10 Epic Quests."],
        ["RGBY", "Vanquish Gnomus, the Gnome King!"],
        ["Rinsed 'Em", "Vanquish 5000 Zombies."],
        ["Simply Super", "As Super Brainz, vanquish 25 Plants with Heroic Fists, and 25 Plants with the Heroic Beam."],
        ["Skinchanger", "In solo ops, swap to another character."],
        ["Somewhere Over the Rainbow", "Collect 25 Rainbow Stars from the Mystery Portal"],
        ["Specialist", "Promote a character for the first time."],
        ["Star Crazy", "Spend your first star."],
        ["Stomp the Yard", "Vanquish 50 Plants with the Z-Mech's Robo Stomp."],
        ["String Theory", "Enter Infinity as a Zombie."],
        ["Team Player", "Meet the Contribution Requirement for 3 Community Challenges"],
        ["The Bean Situation", "Complete 'The Bean Situation'."],
        ["The Boss is Watching", "Max out your XP Multiplier on the quest board."],
        ["The Secret of Secrets", "Discover the Secret Area…What can it be?"],
        ["This is Craaazy!", "Enter the Mystery Portal and Complete a Super Mix Event!"],
        ["Time to Go Outside", "Promote a single character 5 times."],
        ["Together we Win", "Open 5 Community Challenge Reward Chests."],
        ["VIPs Only!", "Play a private match with your own custom rules."],
        ["Warp Tour", "Complete 'Steve-cation'."],
        ["West Indian Lilac", "Enter Infinity as a Plant."],
        ["What a Trip", "Complete 'Strong Coffee'."],
        ["What's the Catch?", "Train with the Mysterious Fish."],
        ["Who Can You Trust?", "Vanquish a friend in their Backyard Battleground."],
        ["You've Goat to Be Kidding Me!", "As Rose, Goatify 100 Zombies."],
        ["Yuck!", "Complete 'Yuck!'."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
