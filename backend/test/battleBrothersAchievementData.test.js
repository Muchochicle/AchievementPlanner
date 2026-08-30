import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battle-brothers.json - 101 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 365360 (fetched through this app's own services/steamApi.js).
// None are hidden. Every achievement's description is Steam's own real text, quoted verbatim.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("battle-brothers");

test("getPlannerData('battle-brothers') returns real planner data with 101 curated achievements", () => {

    assert.ok(game, "expected real planner data for battle-brothers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 101);

});

test("every Battle Brothers achievement has a unique id from 1 to 101 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 101 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 101);
    assert.strictEqual(new Set(apinames).size, 101);

});

test("every Battle Brothers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 101 Battle Brothers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bitter End", "Retire and have your company go down fighting"],
        ["A Colorful Band", "Dye a shield in company colors"],
        ["A Full Company", "Have a company roster of 12 brothers"],
        ["A Knight's Tale", "Kill a Knight"],
        ["Anniversary", "Reach day 365 on veteran difficulty or higher"],
        ["Assassin", "Kill an enemy with the Deathblow skill of the Qatal Dagger"],
        ["Atheist", "Kill an Ancient Priest"],
        ["Back In Business", "Have a total of 5,000 crowns"],
        ["Back To The Grave", "Kill a Necrosavant"],
        ["Bag a Hag", "Kill a Hexe"],
        ["Bane Of The Undead", "Defeat the Undead Scourge at any difficulty level"],
        ["Barrage", "Hit 4 or more enemies with a single shot of the Handgonne"],
        ["Beast of Beasts", "Kill a Kraken"],
        ["Beastmode", "Kill an Orc Warlord in melee"],
        ["Bling Bling", "Acquire a named item"],
        ["Blood Money", "Complete a contract for a settlement"],
        ["Bloody Toll", "Lose your first mercenary in battle"],
        ["Broken Promises", "Fail a contract"],
        ["Bullseye", "Kill a Master Archer with a ranged weapon"],
        ["Burn Them All!", "Kill an enemy with a Fire Pot"],
        ["Campaigner", "Reach day 100 on veteran difficulty or higher"],
        ["Campfire Company", "Hire your first non-combat follower"],
        ["Chopping Wood", "Kill a Schrat"],
        ["Cultural Misunderstanding", "Win the holy war for either side"],
        ["Dance Off", "Defeat a Blade Dancer"],
        ["Deadeye", "Get a brother to 90 ranged skill"],
        ["Deserter", "Have a brother desert you"],
        ["Dragon's Hoard", "Have a total of 250,000 crowns"],
        ["Early Retirement", "Retire and have your company break apart"],
        ["Famed Explorer", "Find 10 legendary locations"],
        ["Field Hospital", "Have 5 or more brothers with a temporary injury at the same time"],
        ["First Aid", "Bandage a wound in combat"],
        ["Friend of the South", "Reach allied relations with a southern city state"],
        ["Friend Or Foe", "Have an Armored Unhold turn wild"],
        ["Full House", "Use all five of your slots for non-combat followers"],
        ["Give Me Back My Legions!", "Lose a game to barbarians"],
        ["Give Me That!", "Defeat an enemy champion"],
        ["Gladiator", "Win 10 arena matches in a single campaign"],
        ["Greenskin Slayer", "Defeat the Greenskin Invasion at any difficulty level"],
        ["Hard To Kill", "Have a brother with 3 permanent injuries"],
        ["Hey! This is Library!", "Defeat the Lorekeeper"],
        ["Hip Shooter", "Kill 2 enemies in one turn with a ranged weapon"],
        ["How To Berserk", "Kill an Orc Berserker in melee while high on mushrooms"],
        ["Human Wave", "Have a full roster of 25 men when playing as peasant militia"],
        ["I Made This!", "Craft an item"],
        ["King Of The Hill", "Defeat another mercenary company"],
        ["King Of The North", "Defeat a Barbarian King"],
        ["Kingmaker", "End the noble feud at any difficulty level"],
        ["Leaving A Legacy", "Retire from your legendary company"],
        ["Leaving A Mark", "Retire and have your company persist"],
        ["Lessons Learned", "Lose a game"],
        ["Making A Name", "Reach 1,000 renown"],
        ["Making Allies", "Get to allied relations with a noble house"],
        ["Making Friends", "Get to friendly relations with a settlement"],
        ["Man In Black", "Kill a Necromancer"],
        ["Man Of Iron", "Defeat a late game crisis on Ironman mode"],
        ["Man Of Renown", "Reach 3,000 renown"],
        ["Master Trader", "Sell 50 trading good stacks"],
        ["Meddling With Nobles", "Complete a contract for a noble house"],
        ["Memory Loss", "Use a Potion of Oblivion"],
        ["Moneymaker", "Have a total of 50,000 crowns"],
        ["Never Give Up", "Lose 10 campaigns on Ironman mode"],
        ["Never Trust A Mercenary", "Betray your employer"],
        ["Not So Noble", "Defeat a Noble House's unit"],
        ["Nothing Personal", "Kill one of your own men while mind-controlled by a Hexe"],
        ["Old And Wise", "Get a brother to level 11"],
        ["Outgunned", "Kill a Goblin Overseer with a ranged weapon"],
        ["Outnumbered, Never Outclassed", "Kill 24 or more enemies in one battle"],
        ["Overcoming Fear", "Kill a Geist"],
        ["Patched Up", "Have a temporary injury treated at the temple"],
        ["Power In Numbers", "Have a company roster of 20 brothers"],
        ["Power Of Music", "Knock out an enemy with a lute"],
        ["Putting Down A God", "Defeat the Ijirok"],
        ["Reproach Of The Old Gods", "Reassemble the legendary sword"],
        ["Rest In Pieces", "Destroy the Black Monolith and claim its treasures"],
        ["Restless Dead", "Kill a Fallen Hero"],
        ["Savior", "Defeat all four late game crises on Ironman mode"],
        ["Scars For Life", "Have a brother receive a permanent injury"],
        ["Scrambled Eggs", "Destroy Webknecht Eggs"],
        ["Sleep Tight", "Kill an Alp"],
        ["Stone Mason", "Defeat an Ifrit"],
        ["Stuff Of Legends", "Reach 8,000 renown"],
        ["Survivor", "Reach day 10 on veteran difficulty or higher"],
        ["Swingin'", "Kill 3 enemies with one AoE attack"],
        ["Swordmaster", "Get a brother to 90 melee skill"],
        ["Taste Your Own Medicine", "Kill a Bandit Marksman with a ranged weapon"],
        ["There Can Be Only One", "Kill a Swordmaster in melee"],
        ["Time To Rebuild", "Lose half or more of your company in one battle"],
        ["To Fight Another Day", "Flee from combat"],
        ["Too Stubborn To Die", "Have the Lone Wolf become level 11"],
        ["Tough Farewell", "Lose a level 11 or higher brother on Ironman mode"],
        ["Trader", "Sell 10 trading good stacks"],
        ["Trial By Fire", "Defeat Hoggart at any difficulty level"],
        ["Tricked Out", "Acquire 5 named items"],
        ["Ulfhednar", "Kill a Direwolf in melee"],
        ["Under New Management", "Conquer a holy site"],
        ["Voice of Davkul", "Have a Prophet while playing as a cult of Davkul"],
        ["Walking Statue", "Kill an Ancient Honor Guard"],
        ["Welcome Back", "Have a brother come back as undead"],
        ["Who Let The Dogs Out?", "Kill an enemy with a wardog"],
        ["Wildgrowth", "Kill a Goblin Shaman"],
    ];

    assert.strictEqual(officialAchievements.length, 101, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
