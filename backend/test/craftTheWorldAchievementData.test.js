import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/craft-the-world.json - 94 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 248390 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 94 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("craft-the-world");

test("getPlannerData('craft-the-world') returns real planner data with 94 curated achievements", () => {

    assert.ok(game, "expected real planner data for craft-the-world");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 94);

});

test("every Craft The World achievement has a unique id from 1 to 94 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 94 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 94);
    assert.strictEqual(new Set(apinames).size, 94);

});

test("every Craft The World achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 94 Craft The World achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alpha Dwarf", "Win 20 PvP multiplayer battles"],
        ["Armageddon", "Reach for 5 simultaneously open monsters portals"],
        ["Bad day", "Giant mite killed a dwarf"],
        ["Blameless", "Avoid of damage main stockpile during multiplayer game"],
        ["Blood lust", "Kill 10 monsters in 2 seconds"],
        ["Bookworm", "Read 100 books"],
        ["Bra-a-a-ins!", "Collect 100 zombie's brains"],
        ["Burst of greed", "Bring back from biome at least 1000 resources"],
        ["Castle Defender", "Help to defend dwarves’ shelter during 12 hours in multiplayer game"],
        ["Chicken exterminator", "Kill 10 chickens"],
        ["Collector", "Collect 999 resources"],
        ["Collector", "Collect maximum amount of resources for multiplayer victory"],
        ["Creator of the public world", "Create multiplayer server"],
        ["Defeat the animal within yourself", "Heal a dwarf from the lycanthropy curse."],
        ["Disinsector", "Destroy 10 nests of giant ants at one level"],
        ["Don't even try to shout!", "Kill 10 banshee"],
        ["Dungeon Keeper", "Complete 4th level of campaign"],
        ["Dwarfgineer", "Build up portal at your own server"],
        ["Epic defeat!", "Lost multiplayer battle"],
        ["Even alone is a warrior!", "One dwarf killed 100 foes"],
        ["Flying assistants", "Cast imps"],
        ["Foreman", "Improve all dwarf's skills"],
        ["Fortress Defender", "Help to defend dwarves’ shelter during 3 hours in multiplayer game"],
        ["Free Builders", "Play 5 hours in Creative mode"],
        ["Galaxian", "Destroy 10 alien bases."],
        ["Get strong together", "Win 10 cooperative multiplayer battles"],
        ["Get your own skeleton in the cupboard", "Collect 100 bones"],
        ["Goblinator", "Kill 10 Goblins"],
        ["God Hand", "Kill 100 monsters with your spells"],
        ["Gourmet", "Cook all dishes"],
        ["Great Explorer", "Win 50 battles at biomes"],
        ["Great World Keeper", "Keep server online during 12 hours"],
        ["Guardian of the Mountain", "Equip the dwarf in the full Guardian of the Mountain set."],
        ["Hardcore man", "Reach 12 level in hardcore mode"],
        ["Hird of Dwarves", "Level up one of the battle skills for 5 dwarves to maximum in multiplayer game"],
        ["I am a pharaoh", "Build shelter inside a pyramid"],
        ["Invulnerable", "All dwarves should survive at a level"],
        ["Land holder", "Complete 1st level of campaign"],
        ["Liberator", "Free 20 yetis from captivity"],
        ["Lonely Loner", "Complete the world of Lonely Mountain."],
        ["Long way begin", "Craft 1st item"],
        ["Long-playing", "Above 100 hours in the game"],
        ["Lord of the Rings", "Forge the Great Ring."],
        ["Made It!", "Restore a broken item."],
        ["Major Defender", "Inflict maximum amount of damage to monsters for victory"],
        ["Major Supplier", "Share 1000 resources with other players"],
        ["Manufacturer", "Build 10 machine-tools for items crafting at one level"],
        ["Megacrafter", "Craft 200 items at a time"],
        ["Mercenaries exploiter", "Use at least 50 mercenaries during 1 battle at the biome"],
        ["Military Engineer", "Build up portal at your own server at high level of difficulty "],
        ["Military Researcher", "Open all technologies during one session in survival mode"],
        ["Monster from the Depths", "Defeat the Kraken in The Land of Dangerous Caves."],
        ["More snails!", "Convert 50 monsters into snails"],
        ["Multidwarf", "Play 10 multiplayer battles"],
        ["Nasty Things", "Destroy 25 clouds of midges."],
        ["Naturalist", "Study more than 50 creatures"],
        ["No one will help the green-skins!", "Defeat the Goblin Chief from the back of a wyvern."],
        ["Oktoberfest", "Give beer to all dwarves"],
        ["Out of the Woods!", "Complete the world of Wonderwood."],
        ["Overboost", "Grab at least a half boost rooms at the biome"],
        ["Overpopulation", "Create server with maximum number of active players"],
        ["Palace", "Build shelter with 100% comfort"],
        ["Persistence", "Break 10 pyramid's blocks"],
        ["Professional Miner", "Extract all minerals at one level"],
        ["Railwayman", "Build a railway 100 blocks long"],
        ["Reviver", "Revive a dwarf from soul keeper"],
        ["Right to the Heart!", "Complete the world of Heart of Evil."],
        ["Sand master", "Complete 3rd level of campaign"],
        ["Sapper", "Use Magic Explosion spell 10 times"],
        ["Shopping", "Spend 200 gold coins"],
        ["Sinbad the pedestrian", "One dwarf passed 1000 blocks"],
        ["Sliders", "Travel to any biome"],
        ["Supplier", "Share resources with other players"],
        ["Survival", "Survive in monsters wave"],
        ["The Power of the Forest", "Equip the dwarf with a full set of elven wood armor."],
        ["The Sphinx’s Riddle", "Defeat the Sphinx in the Land of Dry Winds."],
        ["The War of the Worlds", "Destroy the alien base."],
        ["The worst that could happen", "Kill 10 giant skeletons"],
        ["Their Name is Legion!", "Kill 50 dark elves."],
        ["Thief", "Steal at least 100 items during 1 battle at the biome"],
        ["Those born to dig can also fly", "Raise a riding wyvern and equip a dwarf with it."],
        ["Tomb rider", "Break the pyramid's sarcophagi"],
        ["Total annihilation", "Kill 50 Goblins"],
        ["Total crafter", "Craft all tech tree recipes"],
        ["True dwarf!", "Collect 200 gold ore"],
        ["Two heads are better than none!", "Defeat the captain of the ghost ship."],
        ["UFO", "Destroy the alien shuttle."],
        ["Underground king", "Reach 14 level"],
        ["Warrior of the Future", "Equip the gnome with a full set of alien armor."],
        ["Who needs elves!", "Archers killed 100 foes"],
        ["Winter master", "Complete 2nd level of campaign"],
        ["World Keeper", "Keep server online during 3 hours"],
        ["Worm hunter", "Kill giant worm"],
        ["You've been digested!", "Your dwarf have died inside the Crookshanks"],
    ];

    assert.strictEqual(officialAchievements.length, 94, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
