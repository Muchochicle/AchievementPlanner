import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fields-of-mistria.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2142790 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 69 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fields-of-mistria");

test("getPlannerData('fields-of-mistria') returns real planner data with 69 curated achievements", () => {

    assert.ok(game, "expected real planner data for fields-of-mistria");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 69);

});

test("every Fields of Mistria achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every Fields of Mistria achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 69 Fields of Mistria achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Bridge For Terithia", "Repair the Beach Bridge."],
        ["Acquaintance", "Reach Two Hearts with any villager. "],
        ["Barnyard Bounty", "Upgrade Hayden's Barn and Coop."],
        ["Becoming a Familiar Face", "Meet all your neighbors."],
        ["Best Friend", "Reach Eight Hearts with any villager and choose to become best friends."],
        ["Bread Winner", "Earn a total of 1,000,000 tesserae. "],
        ["Bridge Builder", "Repair the bridge on the Eastern Road."],
        ["Celebrated Curator ", "Complete the Museum."],
        ["Close Call", "Go to sleep after 1:50 am but before 2:00 am."],
        ["Copper Star Rank", "Reach Copper Star Town Rank."],
        ["Diamond Star Rank", "Reach Diamond Star Town Rank."],
        ["Don’t You Love That Sense of Achievement?", "Repair Caldarus’ Shrine."],
        ["Emerald Star Rank", "Reach Emerald Star Town Rank."],
        ["Entomologist", "Complete the Legendary Insect Set in the Museum."],
        ["Essential Essence", "Earn a total of 10,000 essence."],
        ["Fine Grained", "Upgrade the Carpenter's Shop."],
        ["First Place", "Take first place in a festival. "],
        ["Fish Fanatic", "Complete the Legendary Fish Set in the Museum."],
        ["For the General Good", "Upgrade the General Store."],
        ["Friend", "Reach Four Hearts with any villager. "],
        ["From a House to a Home", "Fully upgrade your house."],
        ["Gifted", "Give 100 Liked and/or Loved gifts."],
        ["Go To Sleep Already", "Faint from staying up too late. "],
        ["Gold Star Rank", "Reach Gold Star Town Rank."],
        ["Good Friend", "Reach Six Hearts with any villager."],
        ["Good Marketing", "Add two new vendors to the Saturday Market."],
        ["Happy Birthday", "Give every villager a liked or loved gift on their birthday."],
        ["Hero", "Complete all of Stillwell’s Mission Quests."],
        ["Hold Your A Plaza", "Add two more new vendors to the Saturday Market"],
        ["Horse-Hearted", "Befriend the Mistmare."],
        ["I do! ", "Get married."],
        ["Inn Good Company", "Upgrade the Sleeping Dragon Inn."],
        ["Iron Star Rank", "Reach Iron Star Rank."],
        ["Jack Of All Trades", "Reach the maximum level in all skills. "],
        ["Love Is In The Air", "Attend the Shooting Star Festival with a date."],
        ["Market Regular", "Greet the first 4 Saturday Market vendors."],
        ["Master Blacksmith", "Reach Lvl 60 in the Blacksmithing Skill."],
        ["Master Chef", "Reach Lvl 60 in the Cooking Skill."],
        ["Master Farmer", "Reach Lvl 60 in the Farming Skill."],
        ["Master Rancher", "Breed your first Tier 5 Animal."],
        ["Master Woodcrafter", "Reach Lvl 60 in the Woodcrafting Skill."],
        ["Mistril Star Rank", "Reach Mistril Star Town Rank. "],
        ["New Friend", "Adopt a ranching animal."],
        ["New Pet Owner", "Welcome your new pet home."],
        ["Novice Farmer", "Complete Restocking Mistria’s Food Reserves."],
        ["Novice Rancher", "Complete Restocking Mistria’s Food Reserves 2."],
        ["On That Grind", "Repair the Mill in town."],
        ["Opened The Earth Seal", "Break the Earth Seal"],
        ["Opened The Final Seal", "Break the Final Seal"],
        ["Opened The Fire Seal", "Break the Fire Seal"],
        ["Opened The Ruins Seal", "Break the Ruins Seal"],
        ["Opened The Water Seal", "Break the Water Seal"],
        ["Parent", "Have a child. "],
        ["Patron Of The Arts", "Complete your first Museum set."],
        ["Perk Procurer", "Acquire a Tier 5 perk in each skill. "],
        ["Refined ", "Build the Stone Refinery."],
        ["Ringing Ovation", "Repair the Bell Tower. "],
        ["Romantic", "Reach Eight Hearts with a romanceable villager and choose to start dating them. "],
        ["Ruby Star Rank", "Reach Ruby Star Town Rank."],
        ["Sapphire Star Rank", "Reach Sapphire Star Town Rank."],
        ["Silver Star Rank", "Reach Silver Star Town Rank."],
        ["Stone Star Rank", " Stone Star Rank Reach Stone Star Town Rank."],
        ["Summit Scaler", "Repair the stairs to the Summit."],
        ["The Found Woods", " Unlock the Deep Woods."],
        ["Thoughtful Gifter", "Gift all of one villager's Liked and Loved gifts. "],
        ["Time Flies", "Reach your child's first birthday. "],
        ["True Love", "Reach ten hearts with a romanceable villager that you are dating."],
        ["Used The Magic Key", "Use the Magic Key in the Priestess Quarters"],
        ["Welcome to Mistria", "Finish the prologue scene."],
    ];

    assert.strictEqual(officialAchievements.length, 69, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
