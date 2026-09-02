import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yakuza-kiwami-2.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3717340 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("yakuza-kiwami-2");

test("getPlannerData('yakuza-kiwami-2') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for yakuza-kiwami-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Yakuza Kiwami 2 achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Yakuza Kiwami 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Yakuza Kiwami 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Contest of Kings", "Complete Chapter 4: A Contest of Kings."],
        ["A New Champion is Born!", "Won first league championship in the Cabaret Club Grand Prix."],
        ["A Taste for Japan", "Ate at all restaurants."],
        ["All Done", "Completed 100% of the Completion List."],
        ["Amon Defeated", "Defeat Jo Amon, the hidden superboss, in his substory."],
        ["An Eye for Talent", "Registered 30 hostesses."],
        ["Battle Skills Master", "Learned all Battle Skills."],
        ["Be True to Yourself", "Lent an ear to all the platinum hostesses."],
        ["Caught in the Act", "Complete Chapter 7: Caught in the Act."],
        ["Champion of the City", "Defeated all street bosses."],
        ["Coin Locker Conqueror", "Opened all coin lockers."],
        ["Creed of Hatred", "Complete Chapter 11: Creed of Hatred."],
        ["Demon, Killer, Father", "Complete Chapter 13: Demon, Killer, Father."],
        ["Dragon of Legend", "Completed the game in Legend mode."],
        ["Dragon's Blood", "Complete Chapter 15: Dragon's Blood - the finale, described here spoiler-free."],
        ["Enemies on All Sides", "Complete Chapter 3: Enemies on All Sides."],
        ["Fireworks", "Complete Chapter 2: Fireworks."],
        ["For the Children", "Donated 1,000,000 yen to Sunflower Orphanage."],
        ["Half Performance, Half Raw Power", "Win all the Coliseum's tournaments."],
        ["Heat Action Master", "Learned all Heat Actions."],
        ["Heat of the Dragon", "Raised the Heat Gauge to a natural 180."],
        ["Hero of the Story", "Completed 30 substories."],
        ["Honor and Betrayal", "Complete Chapter 9: Honor and Betrayal."],
        ["Just Getting Started", "Completed 10 items on the Completion List."],
        ["Legends of the Nightlife", "Completed the Four Shine storyline."],
        ["Let's Build Some Hills", "Completed the Clan Creator storyline."],
        ["Life of the Dragon", "Raised Health to a natural 180."],
        ["Life Skills Master", "Learned all Life Skills."],
        ["Limit Breaker", "Broke the limit on a base stat."],
        ["Majima Construction Benefits", "Recruited over 50 workers into Majima Construction."],
        ["Majima Construction Foreman", "Possessed over 200,000 points in Clan Creator."],
        ["Making Progress", "Completed 30 items on the Completion List."],
        ["Maybe You Can Do It", "Completed 50 items on the Completion List."],
        ["Movie Buff", "Watched all the videos."],
        ["My Boss is Crazy", "Became a Majima Construction employee."],
        ["Opening Up a Can", "Drank all drink types from vending machines."],
        ["Party Like it's 1988!", "Possessed over 10,000,000 yen."],
        ["Peak Kiryu", "Raised all base stats to maximum."],
        ["Prisoner of Shangri-La", "Complete Chapter 8: Prisoner of Shangri-La."],
        ["Repeat Offender", "Destroyed an establishment three times."],
        ["Secrets Long Buried", "Complete Chapter 5: Secrets Long Buried."],
        ["Shine, Shine, Four Shine", "Joined Club Four Shine."],
        ["Shots Fired", "Complete Chapter 6: Shots Fired."],
        ["Skill Master", "Learned all skills."],
        ["Sotenbori Lights", "Complete Chapter 10: Sotenbori Lights."],
        ["Story of My Life", "Complete all substories."],
        ["Strength of the Dragon", "Raised Attack to a natural 180."],
        ["Tell Me a Story", "Completed 10 substories."],
        ["Thank You!", "Complete the main story."],
        ["The Dojima Legacy", "Complete Chapter 1: The Dojima Legacy."],
        ["The Majima Factor", "Complete the entire 'The Majima Saga' side campaign."],
        ["There Can Only Be One Dragon", "Complete Chapter 14: There Can Only Be One Dragon."],
        ["Tiger Drop", "Complete Chapter 12: Tiger Drop."],
        ["Tourist Season", "Took 10 photographs."],
        ["Vitality of the Dragon", "Raised Defense to a natural 180."],
        ["Weapon Master", "Defeated 100 enemies using weapons."],
        ["What a Player", "Played all minigames."],
        ["YAKUZA KIWAMI 2", "Unlock every other achievement in the game."],
        ["You're Not Welcome", "Completed all bouncer missions."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
