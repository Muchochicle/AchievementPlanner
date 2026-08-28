import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-warhammer-3.json - 138 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1142710 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 138 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("total-war-warhammer-3");

test("getPlannerData('total-war-warhammer-3') returns real planner data with 138 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-warhammer-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 138);

});

test("every Total War: WARHAMMER III achievement has a unique id from 1 to 138 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 138 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 138);
    assert.strictEqual(new Set(apinames).size, 138);

});

test("every Total War: WARHAMMER III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 138 Total War: WARHAMMER III achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Mortal Wound Inflicted", "During the Prologue, win your first battle in the Chaos Wastes."],
        ["A Steady Stream", "Have a gross income of 5,000 per turn."],
        ["A Tale will be Told", "Playing as a Vampire Coast, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Age of Chivalry", "Playing as Bretonnia, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Age of Reckoning", "Playing as Dwarfs, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Age of the Eternal Oak", "Playing as Wood Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Ailment Accumulator", "Playing as Nurgle, collect 5000 Infections."],
        ["All Souls Slain", "Playing as the Daemon Prince, win a singleplayer campaign."],
        ["Angel of Disease", "Playing as Nurgle, spread a Plague."],
        ["Animated Adversary", "Play a multiplayer battle."],
        ["Arms Appropriated", "Borrow an army from a military ally."],
        ["Asur Prince", "Playing as the High Elves, win a singleplayer campaign."],
        ["Bear With Me", "Playing as Kislev, recruit an Elemental Bear to one of your armies."],
        ["Benisons of the Capricious", "Playing as the Daemon Prince, unlock 15 Daemonic Gifts."],
        ["Bilious Builder", "Playing as the Ogre Kingdoms, deploy 5 camps in a single campaign."],
        ["Black Fire Mastermind", "Achieve a score of 50000 in the Black Fire Pass Trial."],
        ["Black Fire Schemer", "Achieve a score of 15000 in the Black Fire Pass Trial."],
        ["Blazing Besieger", "Win 25 siege attack battles during a single campaign."],
        ["Blood God", "Playing as Khorne, win a singleplayer campaign."],
        ["Blood-Grounds, Everywhere!", "Playing as the Beastmen, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Blood-Soaked Victor", "Playing as Khorne, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Boons of the Mercurial", "Playing as the Daemon Prince, unlock 5 Daemonic Gifts."],
        ["Burn the World", "Raze 30 settlements during a single campaign."],
        ["Celestial City Secured", "Playing as Cathay, occupy Wei-Jin."],
        ["Centres of Excellence", "Have 2 level 20 Heroes at the same time."],
        ["Change Up", "Playing as Tzeentch, replace a Herald of Tzeentch with an Exalted Lord of Change."],
        ["Changer of Ways", "Playing as Tzeentch, win a singleplayer campaign."],
        ["Commercial Comforts", "Have a trade agreement with 5 other factions at the same time."],
        ["Common Cause", "Have a military alliance with 5 other factions at the same time."],
        ["Da Best Waaagh!", "Playing as Greenskins, win a singleplayer campaign."],
        ["Da Greatest Waaagh! Ever!", "Playing as Greenskins, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Dark Master", "Playing as the Daemon Prince, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Dark Mastermind", "Achieve a score of 50000 in the Altar of Ultimate Darkness Trial."],
        ["Dark Schemer", "Achieve a score of 15000 in the Altar of Ultimate Darkness Trial."],
        ["Dawi Dominance", "Playing as Dwarfs, win a singleplayer campaign."],
        ["Decrepit Defeater", "Playing as Nurgle, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Dominating Force", "Have a level 20 Lord."],
        ["Dragon Emperor", "Playing as Cathay, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Dreadlord", "Playing as the Dark Elves, win a singleplayer campaign."],
        ["Eastern Emperor", "Playing as Cathay, win a singleplayer campaign."],
        ["Elements of Decay", "Playing as Nurgle, use each Plague Symptom at least once."],
        ["Elevated Excellence", "Have 3 special mounts."],
        ["Enchanted Arsenal", "During the Prologue, equip Yuri with every type of magic item."],
        ["Engines of Ruin", "Playing as the Chaos Dwarfs, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Establish & Advance", "During the Prologue, construct 5 buildings."],
        ["Face the Strange", "Playing as Tzeentch, unlock all Changing of the Ways actions."],
        ["Fallen Mastermind", "Achieve a score of 50000 in the Fallen Gates Trial."],
        ["Fallen Schemer", "Achieve a score of 15000 in the Fallen Gates Trial."],
        ["Favoured Son of Chaos", "Playing as Warriors of Chaos, win a singleplayer campaign."],
        ["Feaster on Fear", "Playing as Slaanesh, recruit a Keeper of Secrets to one of your armies."],
        ["Forward Position", "Construct an allied outpost in a military ally's settlement."],
        ["Godly Might Given", "Playing as the Daemon Prince, ascend to the Undivided path."],
        ["Heavens Above", "Playing as Cathay, construct the Grand Observatory of Xing Po."],
        ["Heirs of Breton", "Playing as Bretonnia, win a singleplayer campaign."],
        ["Hel Fenn Mastermind", "Achieve a score of 50000 in the Hel Fenn Trial."],
        ["Hel Fenn Schemer", "Achieve a score of 15000 in the Hel Fenn Trial."],
        ["Immortal Marauders", "Playing as Norsca, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Imperials of Excellence", "Playing as the Empire, win a singleplayer campaign."],
        ["Into the Aethyr", "Enter the Realm of Chaos using a Rift."],
        ["Intravenous Injection", "Playing as Khorne, replace a Herald of Khorne with an Exalted Bloodthirster."],
        ["King of Kings", "Playing as the Tomb Kings, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Lambs to the Slaughter", "Playing as the Vampire Counts, win a singleplayer campaign."],
        ["League of Nations", "Have a military alliance with 10 other factions at the same time."],
        ["Legendary Strategist", "Win a singleplayer campaign on Legendary difficulty."],
        ["Legends Amongst Men", "Playing as the Empire, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Lord of Decay", "Playing as Nurgle, win a singleplayer campaign."],
        ["Man the Wall", "Playing as Cathay, occupy the entirety of the Great Bastion."],
        ["Master of the Seas", "Playing as a Vampire Coast, win a singleplayer campaign."],
        ["Matriarchal Power", "Playing as Kislev, invoke each type of Motherland in a single campaign."],
        ["Most Constant Votary", "Playing as the Daemon Prince, ascend to a Chaos God's path."],
        ["Municipal Manipulator", "Playing as Tzeentch, take control of a settlement via the Changing of the Ways."],
        ["Necromantic Dominance", "Playing as the Vampire Counts, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Northern Nicator", "Playing as Kislev, win a singleplayer campaign."],
        ["Oblast Overlord", "Playing as Kislev, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Obliterate the Odds", "Win a campaign battle in which you are outnumbered 10-to-1."],
        ["Odious Overtyrant", "Playing as the Ogre Kingdoms, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Old One", "Playing as the Lizardmen, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Opus Eternal", "Playing as Slaanesh, construct the Pandemournium."],
        ["Partners in Conquest", "Play a multiplayer campaign."],
        ["Peak Nobility", "Have a level 30 Lord."],
        ["Phoenix King", "Playing as the High Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Prince of Excess", "Playing as Slaanesh, win a singleplayer campaign."],
        ["Professional Tactician", "Win 50 battles during a single campaign."],
        ["Purveyor of Perversion", "Playing as Slaanesh, spread a Gift of Slaanesh."],
        ["Pustulent Promotion", "Playing as Nurgle, replace a Herald of Nurgle with an Exalted Great Unclean One."],
        ["Quest for Success", "Fight a quest battle."],
        ["Realm of the Ruinous", "Playing as the Beastmen, win a singleplayer campaign."],
        ["Reclaim Your Place", "Playing as Kislev, occupy Kislev, Erengrad and Praag."],
        ["Revelry in Riddles", "Playing as Tzeentch, construct the Symposium of Change."],
        ["Reverser of Ruin", "During the Prologue, capture a settlement in the Chaos Wastes."],
        ["Rising Power", "Have a level 10 Lord."],
        ["Royal Ranks Ramped", "During the Prologue, fill Yuri's army with units."],
        ["Season of Supremacy", "Playing as Wood Elves, win a singleplayer campaign."],
        ["Self-Improvement", "During the Prologue, spend 10 skill points."],
        ["Sensational Steed", "Have a special mount."],
        ["Shoulders of Giants", "Playing as Cathay, recruit a Terracotta Sentinel to one of your armies."],
        ["Slann Mage-Priest", "Playing as the Lizardmen, win a singleplayer campaign."],
        ["Sons of Hashut", "Playing as the Chaos Dwarfs, win a singleplayer campaign."],
        ["Spires to the Sky", "During the Prologue, fully upgrade a settlement."],
        ["Succulence Selected", "Playing as Slaanesh, replace a Herald of Slaanesh with an Exalted Keeper of Secrets."],
        ["Talented Amateur", "Win 10 battles during a single campaign."],
        ["Tear Down the Walls", "Raze 1 settlement."],
        ["Temptation's Troops", "Playing as Slaanesh, summon a Disciple Army."],
        ["Terror Transmogrified", "Playing as Tzeentch, recruit a Lord of Change to one of your armies."],
        ["The Art of Surprise", "Win 5 ambush battles during a single campaign."],
        ["The Battle for Bokha", "Playing as Kislev, win the quest battle to free Boris Ursus."],
        ["The Blood is the Life", "Playing as Khorne, recruit a Bloodthirster to one of your armies."],
        ["The Blood Must Flow", "Playing as Khorne, reach the highest level of Bloodletting with an army."],
        ["The Collector", "Playing as Khorne, collect 10,000 Skulls."],
        ["The Courtesan", "Defeat the Daemon Prince at the Palace of Slaanesh in the realm of Slaanesh."],
        ["The Dark Gods' Playthings", "Playing as Norsca, win a singleplayer campaign."],
        ["The End of the Beginning", "Complete the Prologue."],
        ["The End Times Approach", "Playing as Warriors of Chaos, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["The Fly Master Cometh", "Playing as Nurgle, recruit a Great Unclean One to one of your armies."],
        ["The Gardener", "Defeat the Daemon Prince at the Mansion of the Plaguelord in the realm of Nurgle."],
        ["The Gatekeeper", "Defeat the Daemon Prince at the Brass Citadel in the realm of Khorne."],
        ["The Height of Valour", "Have 3 level 30 Heroes at the same time."],
        ["The Librarian", "Defeat the Daemon Prince at the Impossible Fortress in the realm of Tzeentch."],
        ["The Road to Riches", "Playing as Cathay, complete a Caravan's journey."],
        ["Trader Raider", "Playing as the Ogre Kingdoms, destroy a Caravan belonging to Cathay."],
        ["Trading Nation", "Have a trade agreement with 10 other factions at the same time."],
        ["Twisted Vanquisher", "Playing as Slaanesh, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Two Noble Heads", "During the Prologue, recruit a second Lord."],
        ["Tyrant Over All", "Playing as the Ogre Kingdoms, win a singleplayer campaign."],
        ["Tzeentchian Mastermind", "Achieve a score of 50000 in the Realm of Tzeentch Trial."],
        ["Tzeentchian Schemer", "Achieve a score of 15000 in the Realm of Tzeentch Trial."],
        ["Ultimate Mastermind", "Achieve a score of 100000 in all Trials of Fate."],
        ["Unmaker of Magick", "Playing as Khorne, construct the Khadeium Paradox."],
        ["Verminlord", "Playing as the Skaven, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Volcanic Vehemence", "Playing as the Ogre Kingdoms, construct the Fire Mouth."],
        ["Votive Victuals", "Playing as the Ogre Kingdoms, offer a tribute of Meat to the Great Maw."],
        ["Walk Like a Nehekharan", "Playing as the Tomb Kings, win a singleplayer campaign."],
        ["Warlord", "Playing as the Skaven, win a singleplayer campaign."],
        ["Well-Heeled", "Have a gross income of 20,000 per turn."],
        ["White Hat", "Have 1 level 10 Hero."],
        ["Winged Warlord", "Playing as Tzeentch, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Witch King", "Playing as the Dark Elves, win a singleplayer campaign on Very Hard or Legendary difficulty."],
        ["Your Coffers Overfloweth", "Have a gross income of 60,000 per turn."],
    ];

    assert.strictEqual(officialAchievements.length, 138, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
