import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/immortals-fenyx-rising.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2221920 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("immortals-fenyx-rising");

test("getPlannerData('immortals-fenyx-rising') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for immortals-fenyx-rising");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Immortals Fenyx Rising achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Immortals Fenyx Rising achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Immortals Fenyx Rising achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Among the Stars", "Solve a Constellation Myth Challenge."],
        ["Armed and Dangerous", "Fully upgrade everything at the Forge of Hephaistos."],
        ["Ash the Leech", "Gain 10 health chunks using Heroic Gifts"],
        ["Balanced", "Defeat Tao Wu"],
        ["Beauty's in the Eye", "Change your appearance at the Hall of the Gods."],
        ["Better Luck Next Time", "Fail the Initiation trial"],
        ["Big Chicken", "Meet Ares."],
        ["Bird's-Eye View", "Unfog the whole map."],
        ["Brother Battle", "Defeat Ligyron."],
        ["C-C-C-Combo", "Reach the final Combo stage."],
        ["Divine", "Complete all Ruins of Heaven"],
        ["Don't Shoot the Messenger", "Meet Hermes."],
        ["Down in Flames", "Complete Phosphor's questline."],
        ["Fenyx the Horseman", "Tame all mounts."],
        ["From the Ashes", "Find Phosphor."],
        ["Full House", "Fully upgrade your Gear"],
        ["Fully Charged", "Fully upgrade your Stamina."],
        ["God of the Forge", "Complete Hephaistos's Questline."],
        ["God of War", "Complete Ares's Questline."],
        ["Goddess of Love", "Complete Aphrodite's Questline."],
        ["Goddess of Wisdom", "Complete Athena's Questline."],
        ["Hades's New Neighbor", "Complete 25 Vaults of Tartaros."],
        ["It's A Bird!", "Perform a 25 hit combo while in air."],
        ["Join the Creed", "Perform 10 Stealth Attacks."],
        ["Last Hero Standing", "Achieve hero status."],
        ["Lighter Than Air", "Use Air Rings 20 times or more without touching the ground"],
        ["Logs and Monsters", "Chop down 100 large trees."],
        ["Look, No Hands!", "Defeat 10 enemies using traps inside the Vaults of Tartaros."],
        ["Masochist", "Lose 20 health chunks from using Heroic Gifts"],
        ["Messenger of the Gods", "Complete Hermes's Questline."],
        ["Mission Complete", "Defeat Typhon."],
        ["Moonlight Treasure", "Open a Night Chest."],
        ["More than Twelve Labours", "Complete all 36 tasks from Hermes's Heroic Tasks Board."],
        ["Not Too Close to the Sun", "Equip new Wings."],
        ["Oceancookie", "Tame an Epic mount."],
        ["One Chore Down", "Complete a task from Hermes's Heroic Tasks Board at the Hall of the Gods."],
        ["Opportunist", "Unlock all Heroic Gifts"],
        ["Ornithology", "Acquire all Phoenix skins."],
        ["Overblessed", "Acquire all blessings"],
        ["Photobomb", "Take a photo."],
        ["Potion Professional", "Fully upgrade the Potion tree."],
        ["Powered Up", "Fully upgrade the Godly Powers tree."],
        ["Projectile Pro", "Defeat a flying enemy with any thrown object."],
        ["Putting in Overtime", "Complete the secret trial"],
        ["Sassy, Lost Child", "Meet Athena."],
        ["Servant to the Gods", "Complete the gods' side questlines."],
        ["Shard Miner", "Destroy 10 Shards Clusters."],
        ["Show Your Moves", "Fully upgrade the Skills tree."],
        ["Stomp-A-Mole", "Eject 10 Abas from the ground"],
        ["Stuff of Legends", "Complete all Myth Challenges"],
        ["Tested and Approved", "Earn your promotion"],
        ["The Floor is Lava", "Glide a total of 1,000 meters in one go."],
        ["The Giving Tree", "Meet Aphrodite."],
        ["The Goddess of Creation", "Complete Nuwa's Questline"],
        ["The Iron Giant", "Meet Hephaistos."],
        ["The Last Warlord", "Complete Gong Gong's Questline"],
        ["The Ultimate Price", "Make the Ultimate Offering"],
        ["Tippy-Top", "Reach the highest point on the island."],
        ["To Good Health", "Fully upgrade your Health."],
        ["Toil and Trouble", "Craft your first Potion."],
        ["Toot or Boot?", "Equip a matching helmet and armor."],
        ["Wardrobe Warrior", "Find every piece of gear"],
        ["Weapon Master", "Fully upgrade one weapon to its final tier."],
        ["Who's the Boss?", "Defeat the Mythical Monster bosses."],
        ["Wing Nut", "Acquire all Wings."],
        ["Wraithless in Battle", "Defeat a Wraith."],
        ["Your Own Medicine", "Defeat an enemy with their own projectile."],
        ["Zoomies", "Master the art of fast transportation"],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
