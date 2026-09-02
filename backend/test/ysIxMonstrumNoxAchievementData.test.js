import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ys-ix-monstrum-nox.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1351630 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ys-ix-monstrum-nox");

test("getPlannerData('ys-ix-monstrum-nox') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for ys-ix-monstrum-nox");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Ys IX: Monstrum Nox achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Ys IX: Monstrum Nox achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Ys IX: Monstrum Nox achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adol, the Fugitive", "Story progress marker - reached at a specific point in the story, described here spoiler-free."],
        ["Ambassador of the Dandelion", "Attain 100% of Affinity with all characters."],
        ["Apex Predator", "Reach level 99 with any character."],
        ["Art Critic", "Attain 100% of graffiti discovered."],
        ["Banisher of Dawn", "Defeat the ultimate Lemures, Vakh Medios, outside of Time Attack."],
        ["Capriccio of the Prison", "Story progress marker - reached late in the story, described here spoiler-free."],
        ["Cartographer", "Complete the map of Balduq."],
        ["Conqueror of the Nox", "Clear all Grimwald Nox."],
        ["Crimson King, the Radiant", "Explore Balduq for a total of 5 hours with the Crimson King (Adol) as the party leader."],
        ["Culling the Herd", "Defeat 2,000 monsters."],
        ["Debonair Socialite", "Attain 100% of all \"People\" entries in your Journal."],
        ["Doll, the Resplendent", "Explore Balduq for a total of 5 hours with the Doll as the party leader."],
        ["Dressed to Kill", "Forge an Ultimate Armor."],
        ["Errant Millionaire", "Have 1,000,000 Gold in possession."],
        ["Fields of Blue", "Attain 100% of Azure Petals found."],
        ["Fleeting Mirage", "In Time Attack, defeat a boss without taking damage."],
        ["Golden Anvil", "Forge Ultimate Weapons for all Monstrums (6 in total)."],
        ["Good Samaritan", "Attain 100% of all quests."],
        ["Greased Lightning", "In Time Attack, defeat a boss in 30 seconds or less."],
        ["Haute Cuisine", "Unlock all 13 recipes at the Dandelion."],
        ["Hawk, the Peerless", "Explore Balduq for a total of 5 hours with the Hawk as the party leader."],
        ["Heartbreaker", "Inflict Break 1,000 times."],
        ["Hermetic Bastion", "Attain 100% of Ritual Relics enhanced."],
        ["I Would Walk 300 Krimelye", "Travel a total distance of 300 krimelye."],
        ["Impervious", "Use Flash Guard 100 times."],
        ["Indomitable Champion", "Complete Boss Rush without retrying."],
        ["Intrepid Tourist", "Attain 100% of landmarks discovered."],
        ["King of the Monstrums", "Finish \"Balduq Prison\" by Adol Christin in its entirety by earning all achievements."],
        ["Lemures Exterminator", "Defeat 1,000 Lemures."],
        ["Material Girl", "Attain 100% of all \"Materials\" entries in your Journal."],
        ["Monster Zoologist", "Attain 100% of all \"Monsters\" entries in your Journal."],
        ["Monstrum Nox", "Story progress marker - reached at a specific point in the story, described here spoiler-free."],
        ["Monstrum Nox", "Story progress marker - completed the final chapter, described here spoiler-free."],
        ["Nightmare Survivor", "Clear the game on Nightmare difficulty or above."],
        ["Overdrive", "Use Boost Mode 100 times."],
        ["Paragon", "Complete Boss Rush mode."],
        ["Raging Bull, the Unyielding", "Explore Balduq for a total of 5 hours with the Raging Bull as the party leader."],
        ["Renegade, the Cunning", "Explore Balduq for a total of 5 hours with the Renegade as the party leader."],
        ["Seeker of Fortune", "Attain 100% of all treasure chests."],
        ["Shopaholic", "Attain 100% of shops discovered."],
        ["Showstopper", "Use Extra Skills 100 times."],
        ["The Doll's Search", "Complete the Doll's character side-story, described here spoiler-free."],
        ["The Feral Hawk's Fury", "Complete the Hawk's character side-story, described here spoiler-free."],
        ["The Raging Bull's Treasure", "Complete the Raging Bull's character side-story, described here spoiler-free."],
        ["The Renegade's Secret", "Complete the Renegade's character side-story, described here spoiler-free."],
        ["The White Cat's Melancholy", "Complete the White Cat's character side-story, described here spoiler-free."],
        ["Thus Spoke the Alchemist", "Story progress marker - reached near the end of the story, described here spoiler-free."],
        ["To Freedom", "Story progress marker - reached at a specific point in the story, described here spoiler-free."],
        ["Twilight Guardian", "Have obtained a total of 2,000 NOX points."],
        ["Untouchable", "Use Flash Move 100 times."],
        ["Vanquisher of the Nox", "Achieve an S on all Grimwald Nox."],
        ["Virtuoso", "Reach max level with all skills."],
        ["White Cat, the Nimble", "Explore Balduq for a total of 5 hours with the White Cat as the party leader."],
        ["Zenith of the Grimwald", "Achieve an S in a Grimwald Nox."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
