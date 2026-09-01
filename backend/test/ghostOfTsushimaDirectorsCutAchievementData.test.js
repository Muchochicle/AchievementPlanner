import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ghost-of-tsushima-directors-cut.json - 77 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2215430 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ghost-of-tsushima-directors-cut");

test("getPlannerData('ghost-of-tsushima-directors-cut') returns real planner data with 77 curated achievements", () => {

    assert.ok(game, "expected real planner data for ghost-of-tsushima-directors-cut");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 77);

});

test("every Ghost of Tsushima achievement has a unique id from 1 to 77 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 77 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 77);
    assert.strictEqual(new Set(apinames).size, 77);

});

test("every Ghost of Tsushima achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 77 Ghost of Tsushima achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Charming Man", "Equip a charm in all 6 slots."],
        ["A Few Splinters", "Complete all bokken duels at the Hidden Cove Tournament."],
        ["A Fight For The Isle….", "Liberate all occupied areas in Izuhara."],
        ["A Legend for All Time", "Complete Jin's Journey in New Game+."],
        ["A Moment in Time", "Personalize a scene in Photo Mode."],
        ["A New Safe Haven", "Liberate all occupied areas in Kamiagata."],
        ["A Painful Blockage", "Summon five Shades in a single Rivals match."],
        ["All in the Wrist", "Defeat the maximum amount of enemies within a single Standoff."],
        ["Avid Reader", "Collect 20 Records."],
        ["Birthright", "Complete the Act 2 tale 'Ghosts from the Past'."],
        ["Blood on Your Hands", "(Iki Island) Buy an item from the Crimson Dye Merchant."],
        ["Body, Mind, and Spirit", "Complete all Hot Springs, Haiku, Inari Shrines, and Bamboo Strikes."],
        ["Champion of the Kami", "Win a Legends Rivals match."],
        ["Chiyoko's Song", "(Iki Island) Complete all Animal Sanctuaries."],
        ["Common Courtesy", "Discover and complete all unwritten tales on Iki Island."],
        ["Company of Wolves", "Complete the Act 1 tale 'The Tale of Ryuzo'."],
        ["Cooper Clan Cosplayer", "Acquire the Legendary Thief outfit (a Sly Cooper reference)."],
        ["Cursed No More", "Purify a Cursed piece of gear."],
        ["Den of Thieves", "Unlocks in Act 2 on starting the tale 'A Message in Fire'."],
        ["Dirge of the Fallen Forge", "Play 'Lament of the Storm' on the flute at Taka's grave (after collecting five singing crickets)."],
        ["Dying Embers", "Complete the Act 2 tale 'A Reckoning in Blood'."],
        ["Elegy for Kazumasa", "(Iki Island) Experience all five Memories of Your Father."],
        ["Every Trick in the Book", "Acquire all the throwable Ghost Weapon techniques."],
        ["Family Reunion", "Complete the Act 1 tale 'Shadow of the Samurai'."],
        ["Favor of the Kami", "Find and honor all of the Shinto Shrines on Tsushima."],
        ["Flash of Steel", "Defeat 20 enemies with a counterattack after a Perfect Parry."],
        ["Friend to All Raiders", "Complete all Tales of Iki."],
        ["Gathering Storm", "Recover the katana of Clan Sakai (in the prologue, after choosing your horse)."],
        ["Gifted", "Collect 10 gifts."],
        ["Good Riddance", "Liberate 8 occupied areas in Toyotama."],
        ["Grand Opening", "Purchase something from Baku the Voiceless in New Game+."],
        ["Haunting Precision", "Kill 20 enemies with Ghost Stance strikes."],
        ["Have a Nice Fall", "Kill an enemy by knocking them off a ledge with a Shoulder Charge or Typhoon Kick."],
        ["Helping Sword Hand", "Complete all Tales of Tsushima."],
        ["Hero of the People", "Liberate 12 occupied areas in Izuhara."],
        ["Honor Bound", "Bind a piece of gear to a class."],
        ["Honor the Unseen", "Bow at 10 hidden altars across Tsushima."],
        ["Know Your Enemy", "Collect 20 Mongol artifacts."],
        ["Leader of the People", "Complete the Act 2 tale 'The Ghost of Yarikawa'."],
        ["Light the Way", "Rekindle all the lighthouses of Tsushima."],
        ["Living Legend", "Obtain all base game achievements."],
        ["Lost and Found", "Find a Pillar of Honor and collect its sword kit."],
        ["Mass Eviction", "Liberate 7 occupied areas in Kamiagata."],
        ["Master Liberator", "Liberate the entirety of Tsushima Island."],
        ["Monkey See", "(Iki Island) Interact with the three hidden Monkey Statues at Saruiwa."],
        ["Mono No Aware", "Finish the story (complete 'The Tale of Lord Shimura')."],
        ["Monochrome Masters", "Buy an item from the Black or White Dye Merchant."],
        ["Open for Business", "Successfully Stagger enemies 50 times."],
        ["Out of the Past", "(Iki Island) Survive the Eagle's medicine and bid farewell to a new friend."],
        ["Point of No Return", "Complete the Act 1 tale 'The Warrior's Code'."],
        ["Pride of Ishikawa", "(Iki Island) Achieve bronze or higher on all Archery Challenges."],
        ["Promising Start", "Complete a Legends Mode story."],
        ["Quick Study", "Learn the Stone, Water, Wind, and Moon combat stances."],
        ["Securing Sanctuary….", "Liberate all occupied areas in Toyotama."],
        ["Self-Actualized", "Reach rank 20 in any role."],
        ["Slay", "Acquire 30 pieces of Vanity Gear."],
        ["Sovereign End", "Complete the Act 3 tale 'Eternal Blue Sky'."],
        ["Stoking the Flame", "Complete the Act 1 tale 'The Broken Blacksmith'."],
        ["Teller of Tales", "Complete all of the Mythic Tales."],
        ["The Benefit of All Beings", "Build your Legend on Iki Island to earn the title Legacy Redeemer."],
        ["The Butcher Redeemed", "Liberate Iki Island by defeating the Eagle and driving the invaders from Mongol territory."],
        ["The Exiled Alliance", "Complete the Act 3 tale 'Wolves at the Gates'."],
        ["The Ghost", "Complete the Act 2 tale 'From the Darkness'."],
        ["The Ghost of Legend", "Build your Legend to earn the title Ghost of Tsushima."],
        ["The Headstrong Thief", "Unlocks while completing all Tales of Tsushima (Yuna's tale line)."],
        ["The Perfect Storm", "Fully upgrade your sword."],
        ["The Unbending Archer", "Unlocks while completing all Tales of Tsushima (Sensei Ishikawa's tale line)."],
        ["The Vengeful Warrior", "Unlocks while completing all Tales of Tsushima (Lady Masako's tale line)."],
        ["The Warrior Monk", "Unlocks while completing all Tales of Tsushima (Norio's tale line)."],
        ["There Can Be Only One", "Successfully complete every duel."],
        ["Transcendence", "Complete all 3 Raid chapters."],
        ["Treasures of the Past", "(Iki Island) Complete all Mythic Tales on Iki Island."],
        ["True Understanding", "Complete all Legends Mode stories on a single difficulty."],
        ["Ultimate Truth", "Complete the final wave in a gold Survival."],
        ["Ultimate Warrior", "Reach rank 20 with all roles."],
        ["Well-Rounded Warrior", "Complete all Haiku, Onsen, Shinto Shrines, and Bamboo Strikes on Iki Island."],
        ["Witness Protection", "Shoot a terrified, fleeing enemy with an arrow."],
    ];

    assert.strictEqual(officialAchievements.length, 77, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
