import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/going-medieval.json - 94 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1029780 (fetched through this app's own services/steamApi.js).
// 1 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("going-medieval");

test("getPlannerData('going-medieval') returns real planner data with 94 curated achievements", () => {

    assert.ok(game, "expected real planner data for going-medieval");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 94);

});

test("every Going Medieval achievement has a unique id from 1 to 94 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 94 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 94);
    assert.strictEqual(new Set(apinames).size, 94);

});

test("every Going Medieval achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 94 Going Medieval achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...And Don’t Come Back!", "Survive the First Raid"],
        ["A Party Now", "Gather 10x Settlers"],
        ["Absolute Villainy", "Reach 100% Infamy"],
        ["Adept Researcher", "Unlock 10x Research Items"],
        ["All Year Round", "Survive a Full Year"],
        ["Beam Me Up", "Build a Wooden Beam"],
        ["Bear With Me", "Tame a bear"],
        ["Beyond Our Borders", "Send out 10x caravans"],
        ["Blessed Be", "Have a Unforgettable Ritual"],
        ["Boar and Peace", "Hunt 20x Boar"],
        ["Bridge Too Far", "Kill an enemy with a Drawbridge"],
        ["Bury the Hatchet", "Recruit a Prisoner"],
        ["Casting Call", "Fish x5 Fish"],
        ["Conversion", "Recruit 5x Prisoners"],
        ["Deerly Departed", "Hunt 20x Deer"],
        ["Den of Thieves", "Defeat a Bandit camp"],
        ["Disassembled", "Dismantle 5x Items"],
        ["Don't Cry Wolf", "Hunt 5x Wolves"],
        ["Duck, Duck, Juice", "Hunt 5x Mallard"],
        ["Eureka!", "Have a Unforgettable Study Group Event"],
        ["Experiential", "Level up your settlers 100 times"],
        ["Feast Mode", "Have a Unforgettable Feast"],
        ["Feast or Famine", "Store 10,000 Nutrition"],
        ["Feathered Friend", "Tame a pheasant"],
        ["Fifty Shades of Bait", "Fish x50 Fish"],
        ["Finders Keepers", "Explore a Loot stash"],
        ["Fine Art", "Craft x5 works of art"],
        ["Fit For A King", "Store 20,000 Nutrition"],
        ["Food Chain", "Hunt 5x Hares"],
        ["For Deer Life", "Tame a deer"],
        ["Forging Ahead", "Craft x10 weapons"],
        ["Fowl Play", "Hunt 5x Pheasant"],
        ["Full House", "Have x5 settlers with roles in one settlement"],
        ["Gate Expectations", "Kill an enemy with a Portcullis "],
        ["Get A Room", "Build an Enclosed Room"],
        ["Go Forth", "Send out a caravan"],
        ["Good Hare Day", "Tame a hare"],
        ["Green Thumb", "Harvest 200 Crops"],
        ["Hammer Time", "Construct a Workshop"],
        ["Having A Field Day", "Harvest 5 Crops"],
        ["Heating Up", "Survive Until the First Summer"],
        ["Heavy Artillery", "Kill an enemy with a trebuchet"],
        ["Holey Voleys", "Hunt 5x Water vole"],
        ["Home Cooked Meal", "Produce a Meal at a Campfire"],
        ["House of the Holy", "Construct a Restitutionist Chapel"],
        ["In Hog Heaven", "Hunt 5x Boar"],
        ["Jailhouse Rock", "Take 5x prisoners"],
        ["Kitchen Impossible", "Construct a Kitchen"],
        ["Know Thy Enemy", "Have a Unforgettable Martial Training Event "],
        ["Lucky Duck", "Tame a mallard"],
        ["Luminary Researcher", "Unlock 25x Research Items"],
        ["Man's Best Friend", "Tame a wolf"],
        ["Market Mastery", "Complete Charter Fair"],
        ["Memento Mori", "Produce Human Trophy"],
        ["Mind Over Matter", "Complete New University"],
        ["Most Unpheasant", "Hunt 20x Pheasant"],
        ["Natural Order", "Complete Pagan Sanctuary"],
        ["No Rest for the Wicked", "Complete the \"Tyrant Overlord\" Grand Objective - the Infamy-track counterpart to the game's five visible Grand Objectives (Centre Of Pilgrimage, Pagan Sanctuary, New University, Charter Fair, Protector of the Realm). It runs alongside building up your settlement's Infamy stat rather than a virtuous or neutral path."],
        ["Not Today", "Fend off an ambush"],
        ["Nothing Wasted", "Dismantle 50x items"],
        ["Novice Researcher", "Unlock First Research Item"],
        ["Oh Deer!", "Hunt 5x Deer"],
        ["Onward", "Unlock 3x Research Items"],
        ["Orange Crush", "Tame a fox"],
        ["Outfoxed", "Hunt 5x Fox"],
        ["Praise Be", "Have a Unforgettable Eucharist Event"],
        ["Putting Food on the Table", "Store 5000 Nutrition"],
        ["Quacktical Strike", "Hunt 20x Mallard"],
        ["Rat-astrophe", "Hunt 20x Rat"],
        ["Reap What You Sow ", "Harvest 50 Crops"],
        ["Redemption", "Complete Centre Of Pilgrimage"],
        ["Reel Skills", "Fish x20 Fish"],
        ["Retribution", "Kill a Raider"],
        ["Shhh...", "Construct a Library"],
        ["Squeak & Destroy", "Hunt 5x Rat"],
        ["Studious Researcher", "Unlock 5x Research Items"],
        ["Swine & Dine", "Tame a boar"],
        ["Temple of Timber", "Construct a Oak Brethren Chapel"],
        ["The Art of War", "Complete Protector of the Realm"],
        ["The First Day", "Survive the First Day"],
        ["The First Week", "Survive for Seven Days"],
        ["The Greatest", "Construct a Great Hall"],
        ["The Rat Pack", "Tame a rat"],
        ["Throw Away the Key", "Take a Prisoner"],
        ["Tiny Treaty", "Tame a polecat"],
        ["Varmint Violence", "Hunt 20x Water vole"],
        ["Victorious!", "Defeat an Enemy settlement"],
        ["Vole in One", "Tame a water vole"],
        ["Wabbit Season", "Hunt 20x Hares"],
        ["What's Up, Doc?", "Construct a Medical Room"],
        ["Where Wolf?", "Hunt 20x Wolves"],
        ["Winter Is Coming", "Survive Until the First Autumn"],
        ["Winter Is Here", "Survive Until the First Winter"],
        ["Zero Fox Given", "Hunt 20x Fox"],
    ];

    assert.strictEqual(officialAchievements.length, 94, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Going Medieval achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["No Rest for the Wicked"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
