import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-shogun-2.json - 106 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 34330 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 106 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-shogun-2");

test("getPlannerData('total-war-shogun-2') returns real planner data with 106 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-shogun-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 106);

});

test("every Total War: Shogun 2 achievement has a unique id from 1 to 106 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 106 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 106);
    assert.strictEqual(new Set(apinames).size, 106);

});

test("every Total War: Shogun 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 106 Total War: Shogun 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Blow to the Temple", "Win the Battle of Ueno without capturing any of the key temple buildings. [Fall of the Samurai only]"],
        ["A Journey Begins", "Play a historical battle. [Fall of the Samurai only]"],
        ["A Promising Beginning", "Win a campaign on easy difficulty."],
        ["A Respectable Rule", "Win a campaign on normal difficulty."],
        ["A Warrior's Bane", "Sink  an HMS Warrior-class ship. [Fall of the Samurai only]"],
        ["Advanced Firearms", "Be the first clan in the campaign to obtain gunpowder mastery."],
        ["Against All Odds", "Win a campaign on legendary difficulty."],
        ["Agent of the Stealthy Blade", "Obtain a maximum level ninja in the campaign."],
        ["Agent Provocateur", "Playing as the Choshu, incite 3 rebellions in the same campaign using an ishin shishi. [Fall of the Samurai only]"],
        ["All Aboard!", "Construct a railway between 2 provinces. [Fall of the Samurai only]"],
        ["Balanced Attacker", "Win a battle using an army composed of at least one of every class of unit (sword infantry, cavalry, archer, matchlock, spear, naginata)."],
        ["Battlefield Dominance", "On maps with more than one key building, your alliance shows its dominance by holding all of them simultaneously."],
        ["Belligerent Admiral", "Sink a nanban trade ship or the flagship vessel the Nihon Maru during a naval battle."],
        ["Berserk Charge", "Win a multiplayer battle using no ranged units in your army."],
        ["Bringer of Death", "Win 50 matchmade battles in multiplayer."],
        ["Carve a Path", "Capture 15 provinces on the avatar campaign map."],
        ["Castle-stormer", "Win 10 siege battles as the attacker."],
        ["Chosokabe Victory", "Win a campaign as the Chosokabe clan."],
        ["Claw of the Tiger", "Win 25 matchmade battles in multiplayer."],
        ["Commander of Commoners", "Keep at least 4 ashigaru units for a whole battle without routing once."],
        ["Damn the Torpedoes", "Sink an enemy ship by ramming. [Fall of the Samurai only]"],
        ["Date Victory", "Win a campaign as the Date clan."],
        ["Dishonoured Foe", "Win a multiplayer head to head campaign despite giving the other player 10,000 koku."],
        ["Divine Right", "Achieve the ultimate goal and become Shogun in the grand campaign."],
        ["Double Dragons", "Create a second avatar for use in avatar conquest mode."],
        ["Elusive Strike force", "Have all your army, except the general, hidden simultaneously for more than 30 seconds."],
        ["Embrace the New", "Attain the maximum level of clan development. [Fall of the Samurai only]"],
        ["Eradicate the Hattori", "Wipe out the Hattori clan in the campaign."],
        ["Eradicate the Ikko-Ikki", "Wipe out the Ikko-Ikki in the campaign."],
        ["Exceptional Warriors", "Through the avatar system, get a veteran unit to level 4."],
        ["Experienced Taisho", "Play 10 multiplayer battles of any type."],
        ["Ezo Republic", "Declare your independence and complete a campaign. [Fall of the Samurai only]"],
        ["Famed Shogun", "Win a campaign on hard difficulty."],
        ["Father of the Imperial Navy", "Playing as the Tosa, carry out 5 naval bombardments in the same campaign. [Fall of the Samurai only]"],
        ["Fear No Horseman", "Win a multiplayer battle using no spear units in your army."],
        ["Fearsome Commander of Men", "Obtain a maximum level general in the campaign."],
        ["Forged in the Hottest Flame", "Win your first multiplayer battle."],
        ["Gateway to the West", "Playing as the Satsuma, construct a trade district and trade with a foreign power within the same campaign. [Fall of the Samurai only]"],
        ["Gift-wrapped", "Gift your co-op partner an army or navy."],
        ["Glittering Grand Cities", "Be the first clan in the campaign to master the art of epic architecture."],
        ["Hard Pounding", "Call in naval fire support during a land battle. [Fall of the Samurai only]"],
        ["Head-Hunter", "Collect 10,000 heads of enemy soldiers."],
        ["Hereditary Honour", "Playing as the Jozai, win 3 ambush battles in the same campaign. [Fall of the Samurai only]"],
        ["Hero of the Empire", "Win a campaign on legendary difficulty playing as either the Satsuma, the Tosa or the Choshu. [Fall of the Samurai only]"],
        ["Hero of the Shogunate", "Win a campaign on legendary difficulty playing as either the Aizu, the Jozai or the Nagaoka. [Fall of the Samurai only]"],
        ["Heroic Warriors", "Through the avatar system, get a veteran unit to level 9."],
        ["Hojo Victory", "Win a campaign as the Hojo clan."],
        ["Holder of Kyushu", "Control all the provinces on the island of Kyushu in the campaign."],
        ["Holder of Shikoku", "Control all the provinces on the island of Shikoku in the campaign."],
        ["Inspiring Counterattack", "Successfully rally 5 units at once with one use of the general's rally ability."],
        ["Japan Torn Asunder", "Win a multiplayer head to head campaign."],
        ["Journey's End", "Complete all historical battles. [Fall of the Samurai only]"],
        ["Keeping to Traditions", "Defeat a Fall of the Samurai army with a Shogun 2 army."],
        ["L'Ocean is Mine!", "Carry out a bombardment with a French ironclad in your navy. [Fall of the Samurai only]  "],
        ["Legendary Force", "Win a battle using an army composed entirely of hero units and your general."],
        ["Legendary Sohei", "Obtain a maximum level monk."],
        ["Living for Battle", "Obtain a unit of maximum rank in the grand campaign."],
        ["Loyal to the Clan", "Personally earn 20 clan tokens."],
        ["Man the Defences", "Win 10 siege battles as the defender."],
        ["Master Interrogator", "Obtain a maximum level metsuke."],
        ["Master of the Waves", "Win 20 naval battles in multiplayer."],
        ["Military Might", "Be the first clan in the campaign to master the art of Shih."],
        ["Modernisation", "Defeat a Shogun 2 army with a Fall of the Samurai army. [Fall of the Samurai only]"],
        ["Mori Victory", "Win a campaign as the Mori clan."],
        ["Not On My Watch", "Chase down and rout an enemy unit as it tries to escape the Battle of Toba-Fushimi. [Fall of the Samurai only]"],
        ["Oda Victory", "Win a campaign as the Oda clan."],
        ["One Hundred Sacks of Rice", "Playing as the Nagaoka, research any eighth tier technology. [Fall of the Samurai only]"],
        ["One Rule Under God", "Win a campaign as a Christian daimyo."],
        ["Onna-Bugeisha", "Win a defensive siege battle with the lady of the house, the Onna Bushi, as your general. (Single Player Only)"],
        ["Path of the Leader", "Spend the maximum number of points in your avatar's skill tree."],
        ["Perfect Ten", "Complete the Battle of Hakodate without any Imperial units being routed. [Fall of the Samurai only]"],
        ["Redoubtable", "As the defender, recapture a tower."],
        ["Requiem of the Dead", "Win a defensive siege battle with your daimyo during any winter turn."],
        ["Rule, Britannia!", "Win a battle with British ships in your navy. [Fall of the Samurai only]"],
        ["Semper Fi", "Win a battle with United States Marines in your army. [Fall of the Samurai only]"],
        ["Servant of God", "Obtain a maximum level missionary."],
        ["Serve with Honour", "Join a multiplayer clan in Shogun 2."],
        ["Shimazu Victory", "Win a campaign as the Shimazu clan."],
        ["Skilled Warrior", "Max out any [Fall of the Samurai] avatar skill tree, by spending a skill point in each skill within a single skill tree."],
        ["Soaring Fame", "Obtain 100 fame within 50 turns."],
        ["Spreading Like Wildfire", "Defeat a Creative Assembly staff member in battle, or anyone else who has gained this achievement."],
        ["Stranglehold", "Your clan holds 5 provinces simultaneously on the multiplayer clan campaign map."],
        ["Stubborn Pursuer of Victory", "Win a campaign on very hard difficulty."],
        ["Summer Son ", "Your daimyo wins 3 consecutive land battles during the summer season."],
        ["Swathed in Fire", "Win a multiplayer battle where more than 50% of your army is made up of matchlock units."],
        ["Swift and Deadly", "Win a multiplayer battle losing less than 15% of your starting troops."],
        ["Takeda Victory", "Win a campaign as the Takeda clan."],
        ["The Army on the March", "Win 25 land battles."],
        ["The Dragon of Japan", "Win 100 matchmade battles in multiplayer."],
        ["The Duellist", "Fight a drop-in battle."],
        ["The Gathering Storm", "Win a multiplayer battle using no cavalry units (excluding the general) in your army."],
        ["The Iron Lady", "Complete the Battle of Miyako Bay with the Kotetsu having taken less than 25% damage. [Fall of the Samurai only]"],
        ["There Can Be Only One", "Achieve the ultimate accolade and obtain rank 1 on the multiplayer Shogun Ladder."],
        ["Thy Will Be Done", "Obtain a maximum level agent of each type. [Fall of the Samurai only]"],
        ["Tokugawa Victory", "Win a campaign as the Tokugawa clan."],
        ["Towering Inferno", "As the attacker, burn a castle's gates, towers and tenshu to the ground using fire arrows and win the battle."],
        ["Trade Route Monopoly", "Control all the trade posts on the campaign map at the same time."],
        ["Uesugi Victory", "Win a campaign as the Uesugi clan."],
        ["United in Conquest", "Win a multiplayer co-op campaign."],
        ["Uniter of Japan", "Capture all provinces on the avatar campaign map."],
        ["Unnecessary Force", "Completely wipe out an enemy unit."],
        ["Uphill Struggle", "Win the Battle of Osaka after both bridges get blown up by the defenders. [Fall of the Samurai only]"],
        ["Warhead", "Sink an enemy ship with torpedoes. [Fall of the Samurai only]"],
        ["Wolves of Mibu", "Playing as the Aizu, carry out 3 successful assassinations of generals in the same campaign using a shinsengumi. [Fall of the Samurai only]"],
        ["Wrecking Ball", "Win the Battle of Aizu after provoking all four hidden armies at once. [Fall of the Samurai only]"],
        ["Zen-like Dedication", "Win 200 multiplayer battles of any type."],
    ];

    assert.strictEqual(officialAchievements.length, 106, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
