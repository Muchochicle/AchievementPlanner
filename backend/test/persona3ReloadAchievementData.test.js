import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/persona-3-reload.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2161700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("persona-3-reload");

test("getPlannerData('persona-3-reload') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for persona-3-reload");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Persona 3 Reload achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Persona 3 Reload achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 Persona 3 Reload achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Legacy of Friendships", "Maxed out all Social Links."],
        ["A Newfound Strength", "Awaken all teammates' ultimate Personas (by 12/30)."],
        ["A Sense of Finality", "Defeat the Hanged Man on the 11/3 full moon."],
        ["Armor Disarmed", "Defeat the Chariot and Justice on the 8/6 full moon."],
        ["Awakened Power", "Obtain Orpheus - an automatic story event."],
        ["Back on Track", "Defeat the Priestess on the 5/9 full moon."],
        ["Benevolent Purr-tector", "Nursed a cat back to full health."],
        ["Beyond the Darkness", "Unlocked access to the remaining Major Arcana.(Persona 3 Reload main story mode only)"],
        ["Birthday Present", "Obtained an item from a Persona Conception.(Persona 3 Reload main story mode only)"],
        ["Briefcase Burglar", "Opened 50 treasure chests.(Persona 3 Reload main story mode only)"],
        ["Distinguished Visitor", "Invited Elizabeth to your room."],
        ["Dodging Lightning", "Defeat the Hermit on the 9/5 full moon."],
        ["Dorm Life", "Spent an evening in the dorm with a teammate."],
        ["Eagle Eye", "Acquired every Twilight Fragment in town.(Persona 3 Reload main story mode only)"],
        ["Eat Your Veggies, Peas!", "Harvested a crop that you grew with a teammate."],
        ["Empowered Protector", "Defeat the Emperor and Empress on the 6/8 full moon."],
        ["Extracurricular Excellence", "Rescued a missing person."],
        ["From Shadows into Light", "Watch the good ending - spare Ryoji on 12/31."],
        ["Fusion Artisan", "Performed a fusion with three or more Personas.(Persona 3 Reload main story mode only)"],
        ["Get a Load of Those Numbers!", "Dealt over 999 damage in a single attack (All-Out Attacks excluded).(Persona 3 Reload main story mode only)"],
        ["Glimpse of the Depths", "Discovered and conquered 10 Monad doors.(Persona 3 Reload main story mode only)"],
        ["Gourmand", "Ordered from a secret menu at the Iwatodai strip mall at night."],
        ["In High Demand", "Accepted an invitation to hang out five times."],
        ["Making the Dream Work", "Performed 50 All-Out Attacks.(Persona 3 Reload main story mode only)"],
        ["Never Toy with Matters of the Heart", "Defeat the Hierophant and the Lovers on the 7/7 full moon."],
        ["Path to Salvation", "Fused Messiah.(Persona 3 Reload main story mode only)"],
        ["Peak Performance", "Maxed out all Social Stats."],
        ["People Person", "Unlocked all Social Links."],
        ["Realized Power", "Awakened to the power of the wild card."],
        ["Reaper Reaped", "Defeated the Reaper.(Persona 3 Reload main story mode only)"],
        ["SEES the Day", "Join SEES - an automatic story event."],
        ["Shattered Plumes", "Used a total of 50 Twilight Fragments.(Persona 3 Reload main story mode only)"],
        ["Shrouded Assassin", "Initiated 50 Chance Encounters.(Persona 3 Reload main story mode only)"],
        ["Specialist", "Maxed out one Social Stat."],
        ["Tempting Fate", "Triggered a skill change during fusion.(Persona 3 Reload main story mode only)"],
        ["That Special Someone", "Nurtured a romance."],
        ["The Determined One", "Episode Aigis: The Answer - witness Akihiko Sanada's past."],
        ["The Disillusioned One", "Episode Aigis: The Answer - witness Junpei Iori's past (clearing the Antenora door)."],
        ["The First of Many", "Performed a Dyad Fusion.(Persona 3 Reload main story mode only)"],
        ["The Fool's Journey", "Obtained 10 Major Arcana during Shuffle Time.(Persona 3 Reload main story mode only)"],
        ["The Great Seal", "Seal Nyx - the final boss on 1/31."],
        ["The Grindset Mindset", "Earned over 50,000 yen total from part-time jobs."],
        ["The Horror of the Shade", "Encountered a Dark Zone in Tartarus."],
        ["The One Who Dreamt", "Episode Aigis: The Answer - witness Aigis's past."],
        ["The Power of Choice", "Obtained 10 Personas during Shuffle Time.(Persona 3 Reload main story mode only)"],
        ["The Selfless One", "Episode Aigis: The Answer - witness Mitsuru Kirijo's past."],
        ["The Steadfast One", "Episode Aigis: The Answer - witness Yukari Takeba's past."],
        ["The Strength of Our Hearts", "Used all teammates' Theurgy.(Persona 3 Reload main story mode only)"],
        ["The Thrill of the Hunt", "Defeated a rare, golden enemy.(Persona 3 Reload main story mode only)"],
        ["The Vengeful One", "Episode Aigis: The Answer - witness Ken Amada's past."],
        ["There's No \"I\" in \"Team\"", "Performed a Shift.(Persona 3 Reload main story mode only)"],
        ["Through Thick and Thin", "Unlocked a teammate's Combat Characteristic.(Persona 3 Reload main story mode only)"],
        ["Together, Into Tomorrow", "Episode Aigis: The Answer - complete the episode (after the credits roll)."],
        ["Top of the Class", "Aced an exam."],
        ["Twist of Fate", "Defeat Fortune and Strength on the 10/4 full moon."],
        ["Unbreakable Link", "Maxed out one Social Link."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
