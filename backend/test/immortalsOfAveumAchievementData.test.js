import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/immortals-of-aveum.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2009100 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("immortals-of-aveum");

test("getPlannerData('immortals-of-aveum') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for immortals-of-aveum");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Immortals of Aveum achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Immortals of Aveum achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Immortals of Aveum achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Familiar Nest", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["A Perfect Cycle", "Story progress marker - reached at the end of the campaign, described here spoiler-free."],
        ["All the Major Food Groups", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Armaments Azure", "Obtained 3 Legendary Blue Sigils"],
        ["Armaments Gules", "Obtained 3 Legendary Red Sigils"],
        ["Armaments Vert", "Obtained 3 Legendary Green Sigils"],
        ["Armsman", "Fully Upgraded 1 Legendary Sigil"],
        ["Backtracker", "While searching for Thaddeus, travelled all the way back from Kalthus to the Palathon."],
        ["Battlefields Have Memories", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Beggars Would Ride", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Best Dressed", "Fully Upgraded 1 Legendary Bracer"],
        ["Control is an Illusion", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Diplomat", "Spoke to Ambassador Damolie about every topic"],
        ["Enlisted", "Defeated 100 Enemies"],
        ["Family Business", "Spoke to Silas Mede about every topic"],
        ["Fowl Play", "Found the hidden bird in the Palathon hub."],
        ["Geas Aristeya", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Good Boy", "Pet the Veki - a dog-like creature found among the survivors during the Chapter 16 Glaivegate mission."],
        ["Grand Magnus", "Completed the game on Immortal difficulty"],
        ["Gravity-Challenged Rocks", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Initiate", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Kitted Out", "Fully Upgraded 1 Legendary Totem"],
        ["Lights Army", "Completed the game on Magnus difficulty"],
        ["Master of Carmine", "Unlocked all Talents in Red Magic branch"],
        ["Master of Malachite", "Unlocked all Talents in Green Magic branch"],
        ["Master of Ultramarine", "Unlocked all Talents in Blue Magic branch"],
        ["Maybe Engage a Little", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["No More Names", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Out of Time", "Spoke to Orphe about every topic"],
        ["Periapt Alizarin", "Obtained 1 Legendary Red Totem"],
        ["Periapt Cerulean", "Obtained 1 Legendary Blue Totem"],
        ["Periapt Viridian", "Obtained 1 Legendary Green Totem"],
        ["Petite Bourgeoisie", "Spoke to Magister Belming about every topic"],
        ["Recruit", "Completed the game on Apprentice difficulty"],
        ["Resilience to Sin", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Scholar", "Collected 50 Lore Texts"],
        ["Shroudfane Explorer", "Completed 10 Shroudfanes"],
        ["Shroudfane Surveyor", "Completed all Shroudfanes"],
        ["Socialite", "Spoke to everyone at the party"],
        ["Soldier", "Defeated 500 Enemies"],
        ["The Means to Save It", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Thrada-Kul", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Tip of the Spear", "Defeated All of The Six"],
        ["Treasure Hunter", "Opened all Golden Chests in the main story"],
        ["Unforeseen", "Story progress marker - reached at a specific point in the campaign, described here spoiler-free."],
        ["Veteran", "Defeated 1300 Enemies"],
        ["Witch-Taker", "Spoke to Hauser about every topic"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
