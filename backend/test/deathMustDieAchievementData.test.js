import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/death-must-die.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2334730 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("death-must-die");

test("getPlannerData('death-must-die') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for death-must-die");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Death Must Die achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Death Must Die achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Death Must Die achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Black Heart", "Win an attempt at 10 Difficulty"],
        ["A Stake For A Vampire", "Defeat the Baron"],
        ["A Thousand Bones", "Defeat 6000 Skeletons"],
        ["Arms Still Strong", "Deal a critical of 400 damage with Kront"],
        ["Bastion of Knowledge", "Win an attempt with Avoron using the Grand Archon talent."],
        ["Bearly a Scratch", "Win an attempt as Leaf using the Bear form"],
        ["Blessed By Fate", "Win an attempt as Nixi using the Serendipity blessing from the Fates"],
        ["Breaking The Rules ", "Win an attempt as Leaf with 3 different Dash blessings"],
        ["Bruised Ego", "Lose an attempt as Lorien"],
        ["By the Holy Light!", "Win an attempt as Avoron using the Light Rays blessing from Lady Justice"],
        ["Catnip", "Win an attempt as Leaf using the Panther form"],
        ["Cut The Traitors", "Defeat 50 Treefolk as Leaf"],
        ["Deadly Precision", "Deal a total of 2000 Critical Damage with Nixi"],
        ["Electrifying Presence", "Win an attempt as Merris using the Charged Field talent"],
        ["Enter The Darkmoor", "Go through the waypoint to The Darkmoor"],
        ["Face Yourself", "Defeat your shadow self as Leaf"],
        ["Ghost Matter", "Win an attempt without taking damage"],
        ["Good Boys", "Win an attempt as Skadi using the wolves"],
        ["Grasshopper", "Get 4 Dashes with Nixi"],
        ["I Can Do This!", "Win an attempt as Skadi with Darkness"],
        ["I Just Need One Arrow", "Win an attempt as Lorien using the Whistling Arrow talent"],
        ["I Warned You!", "Win an attempt as Kront using the Rampage talent"],
        ["Jack of All Trades", "Apply 5 different statuses in an attempt with Skadi"],
        ["Jelly", "Defeat 4000 Oozes"],
        ["Killer Queen", "Defeat The Insect Queen as Lorien"],
        ["Legend vs Legend", "Defeat The Djinn as Kront"],
        ["No Backtalk", "Defeat the chatty skeleton 33 times with Merris"],
        ["No Handouts", "Win an attempt without using any locations as Leaf"],
        ["Nocturnal", "Win an attempt as Nixi using the Endless Night talent"],
        ["Nothing But A Scratch!", "Heal 999 life with Skadi"],
        ["Obsidian", "Win an attempt at 5 Difficulty"],
        ["Out Of Wishes", "Defeat the Djinn"],
        ["Pest Control", "Kill 25 Summoners with Skadi"],
        ["Pilgrim", "Travel to 40 different locations in an attempt as Avoron."],
        ["Pocket Change", "Collect 1000 gold in an attempt as Nixi"],
        ["Rocks to the Face", "Win an attempt as Kront using the Rock Shield blessing from Ninh"],
        ["Satiated", "Win an attempt as Leaf using the Vampirism blessing from Mort"],
        ["Saving The Day", "Kill 1000 Skeletons as Lorien"],
        ["Scrap Metal", "Defeat 50 Shielders with Kront"],
        ["Shieldbreaker", "Destroy an elite enemy's barrier with a single strike with Kront"],
        ["Showoff", "Win an attempt as Lorien using the Bask in Greatness talent"],
        ["Start a Party!", "Get 40 summons with Merris"],
        ["The Apprentice", "Level up to 30 with Skadi"],
        ["The Hourglass of Time", "Lose 9 times as Avoron"],
        ["The Lady Bows Her Head", "Defeat the Lady"],
        ["The Sign Of Excellence", "Level up to 40 as Lorien"],
        ["The Sign of Fire", "Deal 100000 Damage with Merris"],
        ["The Sign of The Assassin", "Defeat The Gargoyles under 20 Seconds with Nixi"],
        ["The Sign of The Hero", "Kill 500 Skeletons with Avoron"],
        ["The Sign of The Quest", "Traverse 30000 distance with Skadi"],
        ["The Sign of The Tornado", " Kill 25 enemies with a single strike with Kront"],
        ["The Summoner", "Defeat 50 Summoners"],
        ["There Is No Fork", "Win an attempt as Merris using the Telekinesis talent"],
        ["Toxic!", "Win an attempt as Nixi using the Mind Reaper talent"],
        ["Training a Dragon", "Win an attempt as Merris using the Pet Dragon talent."],
        ["Vampire Slayer", "Defeat The Baron with Avoron"],
        ["Well Travelled", "Traverse 50000 distance as Lorien"],
        ["What Have You Done To My Pets?", "Defeat The Gargoyles with Avoron"],
        ["What Sorcery is This?", "Get 4 different Cast Blessings as Merris"],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
