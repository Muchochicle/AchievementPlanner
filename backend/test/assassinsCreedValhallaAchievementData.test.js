import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-valhalla.json - 92 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2208920 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("assassins-creed-valhalla");

test("getPlannerData('assassins-creed-valhalla') returns real planner data with 92 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-valhalla");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 92);

});

test("every Assassin's Creed Valhalla achievement has a unique id from 1 to 92 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 92 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 92);
    assert.strictEqual(new Set(apinames).size, 92);

});

test("every Assassin's Creed Valhalla achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 92 Assassin's Creed Valhalla achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Favored Customer", "Buy all of Nar's Favors at least once (The Forgotten Saga)"],
        ["A Picture of Grace", "Run through 30 breakable objects."],
        ["A True Master", "Earn all Gold Medals available in Mastery Challenge (Part 1)"],
        ["Aesir Spelunker", "Discover all Shelters (Dawn of Ragnarök)"],
        ["All Roads Lead to Dublin", "Reach the max level of Dublin Renown (Wrath of the Druids)."],
        ["All That Glitters", "Get your first Gold Medal in Mastery Challenge (Part 1)"],
        ["Archaeologist", "Complete all Roman collector challenges"],
        ["As It Was Foretold", "Complete the Prophecy storyline."],
        ["Ashes of Svartalfheim", "Complete the Dawn of Ragnarök campaign (Dawn of Ragnarök)"],
        ["Bad Bull", "Defeat the Ghost Auroch Boss (The Siege of Paris)."],
        ["Builder", "Reach settlement level 3"],
        ["Caladfwlch", "Draw Excalibur from the stone (requires all 11 Treasures of Britain)."],
        ["Calling in a Favor", "Complete the Suthsexe arc."],
        ["Completionist All the Way!", "Complete all territories"],
        ["Crossing Dókkerland", "Complete all encounters in Dokkerland (Dawn of Ragnarok)."],
        ["Crypt-ologist", "Complete three Tombs of the Fallen"],
        ["Dawn of the Druids", "Collect all the amber shards for Deirdre (Wrath of the Druids)."],
        ["Decked Out", "Find the full Dublin Champion armour set (Wrath of the Druids)."],
        ["Disorder of the Ancients", "Eliminate all targets of the Order of the Ancients."],
        ["Do What Is Right", "Complete the Siege of Paris campaign (The Siege of Paris)."],
        ["Double Trouble", "Equip a sickle in each hand (Wrath of the Druids)."],
        ["Dreamcatcher", "Destroy 10 Curse Symbols (Base game only)"],
        ["England Subdued", "Complete the Hamtunscire arc."],
        ["Equilibrium", "Complete 3 Cairn challenges"],
        ["Equine Attack", "Assassinate an enemy from your horse"],
        ["Everyday Life", "Complete 10 World Events"],
        ["Expert Storyteller", "Tell Kara a tale with at least four Boasts (Dawn of Ragnarok)."],
        ["Face My Might!", "Equip 8 abilities"],
        ["Flying Eivor", "Get thrown 30 meters away by a destroyer or a housecarl"],
        ["Flying Fortress", "Reach a Muspelheim Monolith (Dawn of Ragnarök)"],
        ["Freedom Fighter", "Reunite the dead within Kaldstad, Døkkerland and Nidheim (The Forgotten Saga)"],
        ["Full Master", "Earn all Gold Medals available in Mastery Challenge"],
        ["Full Mastery", "Spend your first Mastery point"],
        ["Future Past", "Enter the Assassin Bureau in Francia (The Siege of Paris)."],
        ["Godly Reward", "Obtain Thor's Helmet (defeat all the Daughters of Lerion and the Zealots)."],
        ["Good Catch!", "Catch a fish of each type using the fishing line"],
        ["Hard Choices", "Complete the Grantebridgescire arc."],
        ["Heroes of Ancient Britain", "Complete all Tombs of the Fallen"],
        ["High Kick", "Knock 10 enemies off of ledges using the Kick of Tyr Ability (The Forgotten Saga)"],
        ["Home Decor", "Place an item on each settlement cosmetic spot (Base game only)"],
        ["Home Sweet Home", "Reach settlement level 6"],
        ["Hugr Incarnate", "Fully upgrade the Hugr-Rip (Dawn of Ragnarok)."],
        ["In the Footsteps of the Gods", "Complete the Asgard and Jotunheim quests."],
        ["Ireland's Deliverance", "Complete the Wrath of the Druids campaign."],
        ["Irish Legend", "Complete all territories of Ireland (Wrath of the Druids)."],
        ["Is There Anybody Out There?", "Light the unlit braziers on Hadrian's Wall"],
        ["It's Alive!", "Create a Jomsviking at the settlement barracks."],
        ["It's All in the Wrist", "Kill 30 enemies with an Atgeir (Dawn of Ragnarök)"],
        ["It's Not a Bug, It's a Feature!", "Complete your first Animus Anomaly platforming puzzle."],
        ["King’s Maker", "Complete 10 Royal Demands (Wrath of the Druids)."],
        ["Know What Is Right", "Complete all territories of Francia (The Siege of Paris)."],
        ["Lèse-majesté", "Complete 10 Rebel Missions (The Siege of Paris)."],
        ["Like a Druid", "Complete a Trial of the Morrigan (Wrath of the Druids)."],
        ["Master Hunter", "Defeat all Alpha animals (Base game only)"],
        ["Motsognir's Blessing", "Purify Hreidmar's Cursed Armour (Dawn of Ragnarok)."],
        ["Not the Norse You're Looking For", "Successfully pass close to a guard in a distrust area by blending with a group of monks"],
        ["Old School Treasure Hunt", "Collect 5 Treasure Hoard rewards (Base game only)"],
        ["Orlog Champion", "Beat all the Orlog players"],
        ["Over the Hills…", "Complete all territories of Svartalfheim (Dawn of Ragnarök)"],
        ["Overdesign II", "While on fire during a fight, kill 3 hard difficulty soldiers without breaking their shields"],
        ["Pat the Cats", "Pat all the cats in Evreux (The Siege of Paris)."],
        ["Pioneer", "Reach Vinland."],
        ["Pure of Heart", "Defeat Nidhogg without using an Elk Shrine (The Forgotten Saga)"],
        ["Rampage", "Complete your first raid in England."],
        ["Returning to the Roots", "Return to Odin's Camp for the first time (The Forgotten Saga)"],
        ["Row Rage", "Ram and destroy 5 boats in under 2 minutes with your longship (Base game only)"],
        ["Royal Treatment", "Find Hel's Majordomo (The Forgotten Saga)"],
        ["Sacrificial Victory", "Defeat Hel with the Draugr's Toll outfit equipped (The Forgotten Saga)."],
        ["Seahorse", "Swim a total of 3km on horseback."],
        ["See No Evil", "Teleport-Assassinate two enemies and fly away without being detected (Dawn of Ragnarök)"],
        ["Silent Viking", "Assassinate 10 enemies in a row without triggering a conflict"],
        ["Skadi's Hobby", "Perform a 150m slide in the snow"],
        ["Slam Master", "Complete all the flytings"],
        ["Spelunker", "Complete one Tomb of the Fallen"],
        ["Take My Hand", "Complete the Cent arc."],
        ["The Enemy of My Enemy", "Complete the Wincestre arc."],
        ["The Good Saxon", "Complete the East Anglia arc."],
        ["The Hidden Truth", "Obtain all video fragments and watch the Hidden Truth video."],
        ["The Legend of St. Patrick", "Kill the only snake in Ireland (Wrath of the Druids)."],
        ["The Order Is Revealed", "Complete the Lunden arc."],
        ["The Queen's Fall", "Defeat Hel, ruler of Niflheim (The Forgotten Saga)"],
        ["The Saga Begins", "Complete the Prologue."],
        ["To England!", "Leave Norway for England."],
        ["Tranquility", "Complete a Standing Stone puzzle"],
        ["Twinkle Twinkle", "Release a firefly in your settlement"],
        ["Ultimate Refinement", "Fully upgrade and enhance a piece of gear"],
        ["Vendange", "Kill an enemy with a scythe while wearing the full Reaper armor set (The Siege of Paris)."],
        ["Vive la Résistance", "Reach maximum Infamy in the Rebel Missions (The Siege of Paris)."],
        ["We Nobles Three", "Defeat all three Frankish Nobles (The Siege of Paris)."],
        ["We're in the End Game Now", "Reach Power 280"],
        ["Witch Hunter", "Defeat one Daughter of Lerion"],
        ["Worthy", "Wield Mjolnir (collect Thor's full armour set)."],
    ];

    assert.strictEqual(officialAchievements.length, 92, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
