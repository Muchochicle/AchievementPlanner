import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nioh-complete-edition.json - 79 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 485510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nioh-complete-edition");

test("getPlannerData('nioh-complete-edition') returns real planner data with 79 curated achievements", () => {

    assert.ok(game, "expected real planner data for nioh-complete-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 79);

});

test("every Nioh: Complete Edition achievement has a unique id from 1 to 79 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 79 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 79);
    assert.strictEqual(new Set(apinames).size, 79);

});

test("every Nioh: Complete Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 79 Nioh: Complete Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Long Journey Begins", "Completed \"The Man with the Guardian Spirit\"."],
        ["A Question of Intentions", "Met with Tokugawa Ieyasu."],
        ["A Reunion with Hanzo", "Completed \"Yokai Country.\""],
        ["A True Samurai", "Completed \"The Samurai from Sawayama.\""],
        ["An Agreement Forged", "Completed \"The Ocean Roars Again.\""],
        ["Awakened Ambition", "Completed \"The One-Eyed Dragon's Castle.\""],
        ["Axe Master", "Acquired mystic art for the axe."],
        ["Battle-Hardened Veteran", "Completed \"The Grand Tournament\" on Way of the Strong or higher."],
        ["Battle's End", "Completed \"The Queen's Eyes.\""],
        ["Battlefield Guide", "Collected all Kodama in the \"Siege of Osaka (Winter)\" chapter."],
        ["British Militarism", "Used all the culverins in the mission \"The Siege of Osaka (Winter).\""],
        ["Cannon Fodder", "Destroyed all the destructible cannons in \"The Sanada's Resolve.\""],
        ["Cleanliness is Next to Godliness", "Bathed in every hot spring in the \"Siege of Osaka (Winter)\" chapter."],
        ["Conqueror of Aoba Castle", "Seized all of Aoba Castle's three-storied keeps in \"The One-Eyed Dragon's Castle.\""],
        ["Disguiser", "Used a disguise."],
        ["Divine Obtainer", "Obtained first divine item."],
        ["Dual Sword Master", "Acquired mystic art for the dual swords."],
        ["Dungball Roller", "Became Ryunoshin the dung lover's best friend."],
        ["Eluding the Dragon", "Completed \"Hands of the Dragon.\""],
        ["End Times", "Defeated Derrick the Executioner."],
        ["Fashionista", "Changed your hair style or beard."],
        ["Female Impersonator", "Completed any mission while transformed into a woman."],
        ["Freedom Restored", "Completed \"The Demon King Revealed.\""],
        ["Friend of Guardians", "Collected all Guardian Spirits."],
        ["From Heaven on High", "Completed \"The Sparrow Flies Again.\""],
        ["Full-fledged Samurai", "Reached level 100."],
        ["Gesture Master", "Acquired 40 gestures."],
        ["Gesture of Reconciliation", "Completed \"Scion of Virtue.\""],
        ["Good Listener", "Listened to Katakura Shigenaga's entire introduction in \"The One-Eyed Dragon's Castle.\""],
        ["Holy Trinity", "Equipped the Kusanagi Tsurugi, Yasakani Magatama, and Yata Mirror."],
        ["Hot Spring Enthusiast", "Bathed in every hot spring in the Tohoku region."],
        ["Infiltrating Sanada Maru", "Completed the mission \"The Siege of Osaka (Winter).\""],
        ["Journey into The Abyss", "Completed the 20th plane in The Abyss."],
        ["Keeper of the Flame", "Lit all three evil-warding bonfires in Itsukushima."],
        ["Kodama Leader", "Collected all Kodama from the Kyushu Region to the Omi Region."],
        ["Kusarigama Master", "Acquired mystic art for the kusarigama."],
        ["Latest Masterpiece", "Forged an item."],
        ["Legendary Swordsmith", "Found Muramasa and brought him in."],
        ["Making Rounds", "Made two circuits around Japan."],
        ["Master of Chaos", "Confused an enemy for the first time."],
        ["Master of Quality", "Collected all the best materials."],
        ["Master of the Twin Sticks", "Defeated Ganryu's Sasaki Kojiro using only Dual Wooden Swords. (Cannot use a Visitor/Companion.)"],
        ["Ninjutsu Master", "Acquired mystic art for Ninjutsu."],
        ["Nue Slayer", "Defeated the Nue of Mount Hiei."],
        ["Odachi Master", "Acquired mystic art for the odachi."],
        ["Onmyo Magic Master", "Acquired mystic art for Onmyo Magic."],
        ["Onward to a Decisive Battle", "Witnessed Tokugawa's forces head toward a decisive battle."],
        ["Ornithicide", "Defeated the Onmoraki during \"Resentment Unleashed.\""],
        ["Oshu Guide", "Collected all Kodama in the Tohoku region."],
        ["Refashion", "Changed the appearance of an item."],
        ["Regular Smith Customer", "Made a total of 60 requests at the blacksmith."],
        ["Ressurector of the Hiragumo", "Collected all fragments of the Hiragumo teakettle from Shigisan."],
        ["Spa Healer", "Bathed in first hot spring."],
        ["Spa Lover", "Bathed in every hot spring from the Kyushu Region to the Omi Region."],
        ["Spear Master", "Acquired mystic art for the spear."],
        ["Spirit Stones Run Amok", "Completed \"The Sanada's Resolve.\""],
        ["Sword Master", "Acquired mystic art for the sword."],
        ["Teamwork", "Completed 10 missions with NPC or in the “Yokai Realm with a companion” with other users."],
        ["The Battle Ends", "Completed \"The Source of Evil.\""],
        ["The Beginning of a Samurai", "Reached level 10."],
        ["The Chosen One", "Equipped +15 divine equipment in all slots. (Excludes accessories.)"],
        ["The Master's Master", "Completed \"The Master Ninja\" on Way of the Strong or higher."],
        ["The Sinister Arts", "Destroyed all the Revenant contraptions on \"The Last Samurai.\""],
        ["The Smoldering Flames of War", "Completed \"Spirit Stone Huntress.\""],
        ["The Ultimate Guide", "Collected all Kodama in the \"Siege of Osaka (Summer)\" chapter."],
        ["They Call Him Anjin", "Completed \"Deep in the Shadows.\""],
        ["To Yodogimi's Side", "Completed \"Resentment Unleashed.\""],
        ["Tonfa Master", "Acquired mystic art for the tonfa."],
        ["Tonfa Triumph", "Defeated Sarutobi Sasuke in the mission \"The Siege of Osaka (Winter)\" using only tonfa. (Cannot use a Visitor/Companion.)"],
        ["Turmoil's End", "Completed \"The Last Samurai.\""],
        ["Twilight Walker", "Completed your first Twilight mission."],
        ["Ugly Fellow", "Used the mask of an ugly fellow to defeat an enemy."],
        ["Ultimate Pro", "Reached maximum proficiency with your first weapon."],
        ["Wandering Spirit", "Completed \"The Demon of Mount Hiei.\""],
        ["Will of the Sanada", "Defeated all of Sanada's Ten Braves in \"Scion of Virtue.\""],
        ["Wrinkly Soaker", "Bathed in every hot spring in the \"Siege of Osaka (Summer)\" chapter."],
        ["Yokai Quelling Master", "Defeated all types of yokai."],
        ["Yokai Telepathy", "Communicated with a yokai 10 times. "],
        ["You Are Nioh", "You have unlocked all achievements!"],
    ];

    assert.strictEqual(officialAchievements.length, 79, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
