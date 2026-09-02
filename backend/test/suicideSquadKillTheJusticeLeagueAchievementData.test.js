import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/suicide-squad-kill-the-justice-league.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 315210 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("suicide-squad-kill-the-justice-league");

test("getPlannerData('suicide-squad-kill-the-justice-league') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for suicide-squad-kill-the-justice-league");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Suicide Squad: Kill the Justice League achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Suicide Squad: Kill the Justice League achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Suicide Squad: Kill the Justice League achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abandon All Hope", "Kill The Man of Steel"],
        ["Act of War", "Complete your first Incursion Mission"],
        ["All Sorts of Fun", "Equip 3 pieces of the Tier 2 Bane Infamy Set"],
        ["Allies", "Complete 50 Support Squad Contracts"],
        ["Battle Lines", "Complete an Incursion Mission at Mastery level 5"],
        ["Blackest Night", "Kill The Green Lantern"],
        ["Blaze of Glory", "Achieve 39 Stars in Riddler AR Challenges"],
        ["Blitzkrieg Bop", "Destroy the Behemoth"],
        ["Captain Boomerang! Agent of Oz", "Reach Max Level with Captain Boomerang"],
        ["Choice of Evils", "Unlock a Villain Synergy by equipping a Notorious Villain item together with a matching Infamy Set piece."],
        ["Choices", "Get Penguin to overhaul a piece of gear"],
        ["Cleaning Out the Closet", "Steal something useful from the Hall of Justice"],
        ["Combine and Conquer", "Complete the final Toyman Support Squad Mission"],
        ["Death Blooms", "Recruit your second Support Squad member"],
        ["Endgame", "Kill The World's Greatest Detective"],
        ["Forces In Motion", "Get Poison Ivy to Supercharge the Affliction on a piece of gear - available once all of Ivy's Squad missions are done."],
        ["Fowl Play", "Recruit your first Support Squad member"],
        ["Grand Experiment", "Get Toyman to Elite a piece of gear"],
        ["Harleen the Queen", "Reach Max Level with Harley Quinn"],
        ["Hell and Back", "Story progress marker - rescue Lex Luthor. Described here spoiler-free."],
        ["History Repeats", "Begin the Batman Experience"],
        ["Hitting The Fan", "Story progress marker - survive the Batman Experience early in the campaign. Described here spoiler-free."],
        ["Into the Angry Planet", "Complete an Incursion Mission at Mastery level 15."],
        ["Killin' Time", "Complete an Incursion Mission at Mastery level 10"],
        ["King For A Day", "Reach Max Level with King Shark"],
        ["Lawton's Last Stand", "Reach Max Level with Deadshot"],
        ["Level Up", "Reach Level 10 with any Squad Member"],
        ["Managing People", "Complete the final Rick Flag Support Squad Mission"],
        ["Need to Know", "Complete 100 Support Squad Contracts"],
        ["No One Defeats Brainiac!", "Kill The Collector of Worlds"],
        ["Number the Dead", "Defeat 10 Raising Hell Hit Squads"],
        ["Shock Treatment", "Complete the final Hack Support Squad Mission"],
        ["Stop Me If You've Heard This One", "Collect 10 Riddler Trophies"],
        ["The Chosen One", "Fully complete the Combat Flair checklist 5 times (Single Player Sessions Only)"],
        ["The Final Frontier", "Complete an Incursion Mission at Mastery level 20"],
        ["The Oldest One in the Book!", "Collect 40 Riddler Trophies"],
        ["The Real Deal", "Solve 21 of Riddler's Riddles"],
        ["The Reaper", "Equip 3 pieces of the Tier 3 Bane Infamy Set"],
        ["The Right Question", "Solve 5 of Riddler's Riddles"],
        ["The Venom Connection", "Equip 3 pieces of the Tier 1 Bane Infamy Set"],
        ["Their Dark Designs", "Achieve 26 Stars in Riddler AR Challenges"],
        ["Thunderstruck!", "Kill The Fastest Man Alive"],
        ["Trial by Blood", "Reach Squad Level 50"],
        ["Trial By Fire", "What the hell just happened?"],
        ["Turn and Turn Again", "Achieve 13 Stars in Riddler AR Challenges"],
        ["Walled In", "Story progress marker - reached during the mid-campaign hunt for Poison Ivy. Described here spoiler-free."],
        ["War Machine", "Complete the final Gizmo Support Squad Mission"],
        ["Welcome to the Jungle!", "Complete the final Poison Ivy Support Squad mission."],
        ["Winged Vengeance", "Complete the final Penguin Support Squad Mission"],
        ["Your World is Mine!", "Complete the final Lex Luthor Support Squad mission."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
