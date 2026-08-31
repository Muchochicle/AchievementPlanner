import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/diablo-iv.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2344520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("diablo-iv");

test("getPlannerData('diablo-iv') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for diablo-iv");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Diablo IV achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Diablo IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Diablo IV achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adept Angler", "Collect all the fish in one region."],
        ["Army of Bones", "Summon 100 Skeleton Mages or Warriors as a Necromancer."],
        ["Bane of the Khazra", "Complete the Rise of the Khazra Dark Citadel."],
        ["Chaotic Whispers", "Acquire 10 Caches of Chaos from the Tree of Whispers."],
        ["Convenient Crafts", "Craft any Elixir and any Incense."],
        ["Curious Collector", "Imprint 10 items at the Occultist with an Aspect from the Codex of Power."],
        ["Dedicated Protector", "Reach Level 50 with any character. "],
        ["Demonic Dispute", "Kill 100 enemies with your Demonology skills."],
        ["Devoted Protector", "Reach Paragon Level 200 with any character. "],
        ["Devout Champion", "Reach Paragon 300 with any character."],
        ["Echoing Elites", "Kill 1000 Bosses/Elites in the Echoing Hatred."],
        ["Effective Equipment", "Equip a piece of Transfigured gear in every slot."],
        ["Emancipation", "Complete the campaign."],
        ["End of the First Mother", "Defeat the Echo of Lilith."],
        ["Estuar Sightseer", "Explore all of Estuar."],
        ["Exterminator", "Kill 666 Snakes or Spiders."],
        ["First Aid", "Use your Healing Potion 1,000 times. "],
        ["Hammer Down", "Kill 50 enemies while Berserking as a Barbarian."],
        ["Hatred Banished", "Complete the Lord of Hatred campaign."],
        ["Hatred Subdued", "Complete the Vessel of Hatred campaign."],
        ["Hireling Commander", "Reach level 10 with all Mercenaries."],
        ["In and Out", "Kill 50 enemies in melee range and 50 enemies out of melee range as a Rogue."],
        ["Infernal Jungle", "Collect 10,000 Aberrant Cinders in Nahantu Helltides."],
        ["Kurast Cleanser", "Complete 25 runs of the Kurast Undercity."],
        ["Legion Killer", "Kill 666 Demons, Fallen, or Goatmen."],
        ["Living Nightmares", "Complete a Nightmare Dungeon in Torment 2 or higher."],
        ["Master Combatant", "Get 5 PvP kills."],
        ["Master of the Elements", "Kill 100 enemies with Fire, Frost, or Lightning damage as a Sorcerer."],
        ["Nahantu Sightseer", "Explore all of Nahantu."],
        ["Potent Alterations", "Temper a piece of Armor, Jewelry, and a Weapon."],
        ["Prepared to Fight", "Complete 10 War Plans."],
        ["Shifty Swipes", "Kill 50 enemies in Werebear form and 50 enemies in Werewolf form as a Druid. "],
        ["Skovos Slayer", "Kill 666 Golems, Merfolk, or Morlu."],
        ["Skovos Sojourner", "Explore all of Skovos."],
        ["Spirited Sparring", "Kill 500 enemies with Ultimate Skills as a Spiritborn."],
        ["Tormented Massacre", "Defeat 1000 Elites on Torment IV."],
        ["Tormented Slaughter", "Kill 1000 Elites in Torment XII."],
        ["Tortured Souls", "Kill 666 Bandits, Cultists, or Knights."],
        ["True Perseverance", "Reach Level 50 with a Hardcore character."],
        ["Turned", "Kill 666 Drowned, Vampires, or Werewolves."],
        ["Turning the Tides", "Collect 1000 Aberrant Cinder in Helltide zones. "],
        ["Undead Undone", "Kill 666 Ghosts, Skeletons, or Zombies."],
        ["Wholly Horadric", "Activate a Charm Set's 5-piece bonus."],
        ["Wildland Warrior", "Kill 666 Dregs, Lacuni, or Hollows."],
        ["Worldly Slayer", "Kill any World Boss."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
