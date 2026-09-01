import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nier-replicant-ver-1-22474487139.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1113560 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nier-replicant-ver-1-22474487139");

test("getPlannerData('nier-replicant-ver-1-22474487139') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for nier-replicant-ver-1-22474487139");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every NieR Replicant ver.1.22 achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every NieR Replicant ver.1.22 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 NieR Replicant ver.1.22 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Dirge for the Hero", "You defeated Goose within two minutes."],
        ["A Round by the Pond", "Catch one of every type of fish."],
        ["A True Friend", "You stopped the berserk Kainé within one minute."],
        ["A World in Flux", "Defeat the Shadowlord."],
        ["All Aboared!", "Ride a boar for at least five minutes."],
        ["Book Burner", "You defeated Grimoire Noir within one and a half minutes."],
        ["Boss of the Junk Heap", "You defeated P-33 within four and a half minutes."],
        ["Call Her Back", "View Ending A."],
        ["Combo Fanatic", "You pulled off a 50-hit combo."],
        ["Combo Master", "You pulled off a 100-hit combo."],
        ["Daredevil", "Risk life and limb 10 times to discover someone's secret - when controlling Kaine on the path to Ending E, look up her lingerie 10 times until you get a Game Over."],
        ["Dear Diary", "Complete the 'World of the Recycled Vessel' activity (all three sets, unlocked after Ending A)."],
        ["e8 a8 98 e6 86 b6 e3 82 b5 e3 83 bc e3 83 90 e3 83 bc", "View Ending E - after Ending D, replay to the Aerie's Hook fight and take control of Kaine (the ending added in the remaster)."],
        ["Educated Warrior", "You read all novel segments about your friends' pasts."],
        ["Fish of Legend", "Reel in a Legendary Fish."],
        ["Forging Master", "Upgrade every weapon to the maximum level."],
        ["Go-To Guy", "You completed 30 quests."],
        ["Gratitude", "Give Louise's letter to the postman."],
        ["Jack of All Trades", "You completed 20 quests."],
        ["Key Collector", "Complete the key to the Shadowlord's castle - collect all five key fragments (Junk Heap, Lost Shrine, Desert, Forest of Myth, the Aerie)."],
        ["King of the Lost Shrine", "You defeated Gretel within three minutes and twenty seconds."],
        ["Legendary Gardener", "Cultivate the Legendary Flower (the Lunar Tear) in your garden."],
        ["Lightspeed Fighter", "Complete the game within 15 hours."],
        ["Lingering Memories", "View Ending B."],
        ["Man of Means", "You accumulated 1,000,000 pieces of gold."],
        ["Material Hunter", "Obtain every type of material."],
        ["Permission Granted", "You drove off Devola and Popola within three minutes."],
        ["Protector of Facade", "You defeated Roc within three and a half minutes."],
        ["Reform Specialist", "Upgrade 10 weapons."],
        ["Release", "Free Kaine from her petrification."],
        ["Scourge of The Aerie", "You defeated Wendy within eight and a half minutes."],
        ["Something Very Special", "View Ending D."],
        ["Soul Crusher", "You defeated Devola and Popola within three and a half minutes."],
        ["Thank You", "View Ending C."],
        ["The Book of Legend", "Grimoire Weiss joins your party."],
        ["The Final Verse", "Congratulations! Thank you for playing!"],
        ["The Little Mermaid", "Defeat Louise within five minutes."],
        ["The Magic Man", "You learned every type of magic."],
        ["The Mellow Companion", "Emil joins your party."],
        ["The Once and Final King", "You defeated the Shadowlord within four minutes and twenty seconds."],
        ["The Sheep Whisperer", "Kill 100 sheep."],
        ["The Strongest Bond", "You defeated the berserk Kainé within three and a half minutes."],
        ["The Wild Companion", "Kaine joins your party (after the Hook fight at the Aerie)."],
        ["Upgrade Apprentice", "Upgrade a weapon for the first time."],
        ["Village Handyman", "You completed 10 quests."],
        ["Weapons Collector", "You found every weapon."],
        ["Wordsmith", "You collected 50 percent of all words."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
