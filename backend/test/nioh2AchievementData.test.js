import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nioh-2.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1325200 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 88 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nioh-2");

test("getPlannerData('nioh-2') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for nioh-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Nioh 2 achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Nioh 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 88 Nioh 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Dream of Peace", "Completed \"A Distant Dream\"."],
        ["A Friend Indeed", "Saved all the Mujina in \"A Distant Dream\"."],
        ["A Kindred Light", "Completed \"A Song to Calm the Storm\"."],
        ["A Weapon's Mind", "Listened to the innermost thoughts of a Yokai Weapon."],
        ["All Things Begin", "Completed \"Dawn of the Demon\"."],
        ["An Electrifying Triumph", "Defeated Imagawa Yoshimoto and was made a samurai."],
        ["Axe Master", "Acquired mystic art for the axe."],
        ["Behind the Bamboo Blinds", "Caused Oboroguruma to release Amrita from its carriage at least 10 times."],
        ["Bold Wrangler", "Defeated Gozuki in \"The Village of Cursed Blossoms\"."],
        ["Burst Breaker", "Used the Brute, Feral, and Phantom Burst Counters five times each to counter a Burst Attack."],
        ["Casting Out the Shadows", "Completed \"Shadows Creep in Kurama\"."],
        ["Clean Sweep", "Destroyed every Amrita shard in \"The High-spirited Demon\"."],
        ["Cleansing Caskmaster", "Used a cask of holy water in \"Dawn of the Demon\" to damage an enemy's Ki."],
        ["Core Score", "Obtained your first Soul Core."],
        ["Dawn of a Dream", "Befriended Tokichiro."],
        ["Demonic Parade-Goer", "Completed picture scroll missions 10 times."],
        ["Devout Believer", "Defeated the boss of \"The Viper's Sanctum\" without breaking the statue of Shirohami. "],
        ["Dream Within a Dream", "Saw Tokichiro off on his final departure."],
        ["Dream's Toll", "Defeated Tokichiro."],
        ["Dual Sword Master", "Acquired mystic art for the dual swords."],
        ["Dungball Roller", "Became Ryunojo the Dung Lover's best friend and received the Coiled Snake Helmet smithing text."],
        ["Feather Buster", "Drove back every Tatarimokke along the journey in \"A Way Out\"."],
        ["Fist Master", "Acquired mystic art for the fists."],
        ["Friend of Guardians", "Collected all Guardian Spirits."],
        ["Friend to the Kodama", "Obtained a Kodama's Soul Core."],
        ["Full-fledged Samurai", "Reached level 100."],
        ["Fuse It or Lose It", "Fused any Soul Core until it reached rank 9."],
        ["Grazer Eraser", "Defeated Mezuki and Gozuki in the same mission. "],
        ["Guardian of the Gate", "Completed \"The Blighted Gate\"."],
        ["Hatchet Master", "Acquired mystic art for the hatchets."],
        ["Help Wanted", "Summoned an Acolyte from a Benevolent Grave 10 times."],
        ["Heretical Glow", "Destroyed 150 of the golden Amrita shards found in the gold mine in \"Eternal Rivals\"."],
        ["Hidden Hopes", "Encountered all the Usura-Hicho in \"The Frenzied Blaze\"."],
        ["Hideyoshi", "Decided to share a name with Tokichiro."],
        ["Honoring the Dead", "Collected all of Kukai's brushes in \"Words of Respite\"."],
        ["Kodama General", "Collected all Kodama in \"The Tengu's Disciple\"."],
        ["Kodama Leader", "Collected all Kodama."],
        ["Kodama Pathfinder", "Collected all Kodama in \"Darkness in the Capital\"."],
        ["Kusarigama Master", "Acquired mystic art for the kusarigama."],
        ["Latest Masterpiece", "Forged an item."],
        ["Let There Be Light", "Dispelled every instance of the Dark Realm in the main missions."],
        ["Lover of Letters", "Displayed a calligraphy scroll in your hut."],
        ["Match Made in Heaven", "Performed a Soul Match."],
        ["Mother and Child", "Reunited with your mother in the Interim."],
        ["Ninjutsu Master", "Acquired mystic art for Ninjutsu."],
        ["Odachi Master", "Acquired mystic art for the odachi."],
        ["Onmyo Magic Master", "Acquired mystic art for Onmyo Magic."],
        ["Peal of Ten Thousand Bells", "Rang all the bells in \"Ruin Draws Near\"."],
        ["Poetry in Motion", "Collected all of Saigyo's poetry cards."],
        ["Remodeling Novice", "Remodeled a piece of equipment."],
        ["Scent of Danger", "Completed \"The Alluring Ancient\"."],
        ["Schemer", "Got Gyuki to attack the dam in \"Pervading Waters\"."],
        ["Seasoned Traveler", "Discovered 10 hidden items on the map."],
        ["Seven Wonders", "Defeated each of the Seven Spears in \"Cherry Blossom Viewing in Daigo\"."],
        ["Soul Searcher", "Obtained all Soul Cores."],
        ["Spa Addict", "Bathed in every hot spring found in \"The Tengu's Disciple\"."],
        ["Spa Connoisseur", "Bathed in every hot spring found in \"The First Samurai\"."],
        ["Spa Fanatic", "Bathed in every hot spring found in \"Darkness in the Capital\"."],
        ["Spa Healer", "Bathed in first hot spring."],
        ["Spa Lover", "Bathed in every hot spring."],
        ["Spear Master", "Acquired mystic art for the spear."],
        ["Spirit Guide", "Collected all Kodama in \"The First Samurai\"."],
        ["Splitstaff Master", "Acquired mystic art for the splitstaff."],
        ["Sudama Swapper", "Exchanged gifts with a Sudama for the first time."],
        ["Sundering Arrows", "Used all the giant bows in \"A Song to Calm the Storm\"."],
        ["Switchglaive Master", "Acquired mystic art for the switchglaive."],
        ["Sword Master", "Acquired mystic art for the sword."],
        ["Tea Connoisseur", "Appraised your tea utensils 50 times."],
        ["Teamwork", "Completed 10 missions with NPCs or as Expeditions with other users. (Does not include Acolytes.)"],
        ["Tengu Crusher", "Used an attack to knock Yoshitsune off his perch on the bridge in \"Eternal Rivals\"."],
        ["The Beginning of a Samurai", "Reached level 10."],
        ["The Demon and the Phoenix", "Completed \"Suzune in the Flames\"."],
        ["The Demons' Den", "Defeated the four demons in \"A Distant Dream\"."],
        ["The Flame That Lights the Darkness", "Lit all fire altars in \"Palace of the Damned\"."],
        ["The Path We've Taken", "Obtained the aid of Tokichiro, Minamoto no Yoshitsune, and Minamoto no Yorimitsu from a Benevolent Grave in \"A Familiar Glow\"."],
        ["The Paths We Tread", "Parted ways with Tokichiro."],
        ["The Ultimate Recognition", "Completed \"The Dragon's Kin\"."],
        ["The Will to Fight", "Completed \"Eternal Rivals\"."],
        ["Tonfa Master", "Acquired mystic art for the tonfa."],
        ["Trinket Triumph", "Used the Kodama Bazaar."],
        ["True Atonement", "Attained 100% Penitence on a Stone of Penance."],
        ["Tsuchigumo Exterminated", "Defeated Tsuchigumo while equipped with at least one piece of gear with the special effect \"Dragon Ninja\"."],
        ["Twilight Walker", "Completed your first Twilight mission."],
        ["Way of the Vanquisher", "Completed \"Against All Comers\" on Dream of the Demon or higher."],
        ["What is Written", "Fulfilled your ultimate destiny."],
        ["What Must Be Done", "Completed \"Palace of the Damned\"."],
        ["Yokai Quelling Master", "Defeated all types of yokai."],
        ["You Are Nioh", "You have unlocked all achievements!"],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
