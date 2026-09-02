import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragon-quest-treasures.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2021210 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dragon-quest-treasures");

test("getPlannerData('dragon-quest-treasures') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragon-quest-treasures");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every DRAGON QUEST TREASURES achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every DRAGON QUEST TREASURES achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 DRAGON QUEST TREASURES achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Accessory Accumulators", "Awarded for recruiting 10 monsters with accessories."],
        ["Antique Dealers", "Awarded for having 30 different iconic treasures appraised."],
        ["Assistant Professors", "Awarded for completing Princess Anemone's Adventure Quest."],
        ["Back Stabbers", "Awarded for successfully performing 100 sneak attacks."],
        ["Bad Smellers", "Awarded for having 3 different treasures of a certain deposit appraised."],
        ["Bank Rollers", "Awarded for acquiring 99,999,999 gold coins."],
        ["Banner Raisers", "Awarded for changing the banner at the base."],
        ["Base Builders", "Awarded for raising the company banner at the base."],
        ["Bitter Rivals", "Awarded for completing Bonnie's Adventure Quest."],
        ["Bossy Booters", "Awarded for defeating the heartless hunter."],
        ["Bubble Bursters", "Awarded for completing Shady and Shambles's Adventure Quest."],
        ["Combat Specialists", "Awarded for defeating 1000 monsters."],
        ["Competitive Streakers", "Awarded for completing Admiral Mogsworth's Adventure Quest."],
        ["Crazed Completionists", "Awarded for having all 777 treasures appraised."],
        ["Dispatch Dons", "Awarded for completing 100 super successful dispatch missions."],
        ["Dragon Wranglers", "Awarded for Unleashing the Dragon 100 times."],
        ["Emerging Victors", "Awarded for teaming up with your sibling and emerging victorious from the final fight."],
        ["Forte Fanatics", "Awarded for using Fortes 1000 times."],
        ["Fortune Finders", "Awarded for using the Fortune Finder for the first time."],
        ["Friendly Competitors", "Awarded for completing Gayle's Adventure Quest."],
        ["Future Hopers", "Awarded for speaking to the voice from the mirror."],
        ["Gang Stars", "Awarded for raising your gang rank to 20."],
        ["Gold Medallists", "Awarded for acquiring your first medal."],
        ["Gullible Gatherers", "Awarded for having 10 knock-off treasures appraised."],
        ["Heroic Figures", "Awarded for displaying 7 adventurer statues in the treasure vault."],
        ["Hot Steppers", "Awarded for defeating Proudmane, Sentinel of the Cinders."],
        ["Ice Screamers", "Awarded for defeating Rimeblood, Sentinel of the Snows."],
        ["Iconic Treasurers", "Awarded for having all iconic treasures appraised."],
        ["Impulsive Vandals", "Awarded for destroying 100 crates and pots."],
        ["Initial Icons", "Awarded for having your first iconic treasure appraised."],
        ["Legendary Treasure Hunters", "Awarded for earning all other achievements."],
        ["Master Mechanics", "Awarded for completing the heartless hunter's Adventure Quest."],
        ["Metal Scrappers", "Awarded for defeating 10 metal monsters."],
        ["Monster Jewellers", "Awarded for having all varieties of monster jewel appraised."],
        ["Mystery Unravellers", "Awarded for reaching the 50th level of the Snarl."],
        ["New Recruiters", "Awarded for recruiting 100 monsters."],
        ["Party Monsters", "Awarded for attending the grand jamboree at the base."],
        ["Pit Bullies", "Awarded for defeating Hornbull, Sentinel of the Sands."],
        ["Pocket Pickers", "Awarded for successfully pinching 100 times."],
        ["Reluctant Returners", "Awarded for viewing the ending sequence."],
        ["Robbin' Robbers", "Awarded for fending off the Merry Men 10 times."],
        ["Sibling Adventurers", "Awarded for setting out on the sibling adventure of a lifetime."],
        ["Sparkly Spotters", "Awarded for recruiting all 8 varieties of bejewelled monster."],
        ["Super Conductors", "Awarded for completing all the Railway Quests."],
        ["Symbolic Valuers", "Awarded for having 10 different iconic treasures appraised."],
        ["Teacher's Pets", "Awarded for completing Captain Levanter's Adventure Quest."],
        ["Tummy Fillers", "Awarded for feeding an ally monster for the first time."],
        ["Ultimate Adversaries", "Awarded for completing Long John Silverbones's Adventure Quest."],
        ["Unwary Accomplices", "Awarded for completing Gustav's Adventure Quest."],
        ["Veteran Adventurers", "Awarded for raising your character level to 50."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
