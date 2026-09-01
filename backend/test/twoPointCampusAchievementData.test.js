import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/two-point-campus.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1649080 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("two-point-campus");

test("getPlannerData('two-point-campus') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for two-point-campus");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Two Point Campus achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Two Point Campus achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Two Point Campus achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Wiser", "Train a staff member"],
        ["A Lot Wiser", "Train a staff member to level 10 in a single course-specific qualification"],
        ["All Aboard", "Unlock all rockets and reach maximum student transport capacity"],
        ["Bachelor of Smarts", "Earn 12 stars across your career"],
        ["Best Friends", "Have students become best friends"],
        ["Bookworm Collector", "Capture a bookworm"],
        ["Bookworm Fanatic", "Capture 50 bookworms"],
        ["Campus Management 101", "Earn 1 star in Freshleigh Meadows"],
        ["Cap & Crown", "Have 1,000 students graduate"],
        ["Club Dub", "Have a club reach level 10"],
        ["Club Sandwich", "Have a club with 5 members"],
        ["Curing Spree!", "Cure 15 patients in a row"],
        ["Do Your Homework", "Complete 50 research projects"],
        ["Dropped on OUR Floor", "Clean up 1,000 bits of litter"],
        ["Enough Experts", "Train a staff member to level 5 in each course-specific qualification"],
        ["Finishing School", "Earn 1 star in TPU"],
        ["Galactic Domination", "Win 10 Space Battle competitions"],
        ["Haunted Housework", "Capture 300 ghosts"],
        ["Huzzah!", "Defeat Lord Blaggard in The Grand Joust"],
        ["Jumbo Mega Team", "Win a cheeseball match against the Jumbo Mega Team"],
        ["Like a Millionaire", "Have 50 students drop out"],
        ["Magic Staff", "Train a staff member to level 5 in the Wizardry qualification"],
        ["Masters Minded", "Earn 24 stars across your career"],
        ["One Wise Cure-All", "Successfully treat every patient illness"],
        ["PhDarn Good", "Earn 36 stars across your career"],
        ["R.I.P & Quiet", "Unlock all plots on Lifeless Estate"],
        ["Recurring Conditions", "Treat 1 case of each illness from Two Point Hospital"],
        ["Say, Cheese?", "Mine 100 space rocks"],
        ["Schools 'n Ghosts", "Earn 1 star on Lifeless Estate"],
        ["Smart Money", "Earn 100,000 from research projects"],
        ["Soul Mates", "Develop 50 soul mates"],
        ["Space Cadet", "Earn 1 star on Cheesy Heap: Delta-Rye"],
        ["Spanner That Works", "Upgrade 100 machines"],
        ["Staff Boom", "Hire 100 staff members"],
        ["Super Group of Friends", "Develop 500 friendships"],
        ["Take a Scroll", "Have a student graduate"],
        ["The Academic Rainbow", "Have a student graduate in each course"],
        ["The Good Stuff", "Space Academy DLC: run 50 A-Grade Cheese-Moongery classes."],
        ["The Old Gold Standard", "Earn 1 star on Pointy Peak"],
        ["The Populous Kids", "Have 100 members in a single club"],
        ["There's Always a Hospital", "Treat 100 medical issues"],
        ["Track-a-Mole", "Expose a mole in Blundergrad"],
        ["Unlocked & Loaded", "Earn 1,000 kudosh"],
        ["We're Listening", "Resolve 100 pastoral issues"],
        ["Wham & Blast", "Medical School DLC: have a treatment machine explode (let its maintenance fall to 0% by removing your janitors)."],
        ["You Lose Some", "Lose 5 cheeseball matches"],
        ["You Win Some", "Win 15 cheeseball matches"],
        ["Your Own Medicine", "Complete 10 patient research projects"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
