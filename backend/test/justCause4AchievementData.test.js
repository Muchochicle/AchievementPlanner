import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/just-cause-4.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 517630 (fetched through this app's own services/steamApi.js).
// 52 of 61 ship a real, official Steam description, quoted
// verbatim below. The 9 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("just-cause-4");

test("getPlannerData('just-cause-4') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for just-cause-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Just Cause 4 achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Just Cause 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 officially-described Just Cause 4 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ach_b10",
        "ach_c1",
        "ach_c2",
        "ach_c3",
        "ach_c4",
        "ach_c5",
        "ach_c6",
        "ach_c7",
        "ach_c8",
    ]);

    assert.strictEqual(hiddenApinames.size, 9, "sanity check - Just Cause 4 has 9 hidden achievements");

    const officialAchievements = [
        ["...The Harder They Fall", "Destroy every Surveillance Airship"],
        ["A Game of Chicken", "Crash into a flying airplane with your own plane"],
        ["A Higher Love", "Use only the Air Lifter for 15 non-consecutive minutes -- Booster and Retract can't be active!"],
        ["A Nightmare On Kusi Street", "Purge the Infestation on the Mainland"],
        ["A Scorpion's Tale", "Secure Illapa"],
        ["A Whole Army of Chaos", "Reach Army of Chaos Level 14"],
        ["All the Right Moves", "Film every Wingsuit Stunt"],
        ["Allow Me to Introduce Myself", "Help Sargento with his ambush, meet the mysterious Javi Huerta, and visit Garland King on set"],
        ["Been Around the World", "Discover every Location in the game"],
        ["Bomb Disposal", "Remove all rigged vehicles from the harbors of Solís"],
        ["Bring It Down!", "Finish Operation Thunderbarge"],
        ["Chaos Milestone", "Increase your Army of Chaos Level by filling up the Chaos bar"],
        ["Che's Way", "Earn a B Rank in LNP's Isla Intensa Trial Run"],
        ["Classic Hits", "Use only the Retract for 15 non-consecutive minutes -- Booster and Air Lifter can't be active!"],
        ["Cow-Moo-Flage", "Turn 10 Black Hand into Cows using the Cow Gun in a single session"],
        ["Dare Devil of Destruction", "Earn a B Rank in the Trial of Triumph"],
        ["Demo Pro", "Destroy 25 vehicles during a single challenge"],
        ["Demons on a Plane", "Obliterate the Infestation at the Crash"],
        ["Don't Choke on My Smoke", "Beat someone's score while manually tracking the Feat"],
        ["Doña of Demolition", "Earn a B Rank in the Gearheads' Godsbowl Trial Rampage"],
        ["Fully Stocked", "Secure every Supply Drop Blueprint"],
        ["Here to Stay", "Secure every Region"],
        ["His name is Luis", "Help Sargento stop an invasion of Black Hand reinforcements"],
        ["I Feel the Need...", "Film every Speed Stunt"],
        ["I Like to Keep My Options Open", "Unlock every Grappling Hook Mod"],
        ["Know My Name", "Get on the Leaderboard for every Feat"],
        ["Knowledge is Power", "Uncover the mysteries of the Lost Tomb of Otorongo"],
        ["Last Action Hero", "Help Garland King finally finish her picture"],
        ["Lift Off", "Use only the Booster for 15 non-consecutive minutes -- Air Lifter and Retract can't be active!"],
        ["Never Speak of This Again", "Finish Extermination"],
        ["Now Who's the Idiot?", "Finish The Artifact"],
        ["Pinball Dreams", "Destroy a vehicle with the PBX Auto-Slug 4 shotgun's "],
        ["Rey Slayer", "Earn a B Rank in Los Artistas' La Ratonera Survival Trial"],
        ["Rico was Here", "Earn all Just Cause 4 Achievements"],
        ["Rico's Roughnecks", "Recruit every Pilot"],
        ["Rookie of the Year", "Earn a B Rank in the Trial of Initiation"],
        ["Rough Rider", "Destroy 15 vehicles during a single challenge"],
        ["Show Me the Way", "Uncover every Ancient Statue"],
        ["Silence of the Llamas", "Expel the Infestation at the Farm"],
        ["Solino Chainsaw Massacre", "Eradicate the Infestation at the Compound"],
        ["Solino Grand Prix", "Earn an S Rank in every course in the Solino Underground"],
        ["Stunt Driver", "Film every Vehicle Stunt"],
        ["The Flying Dead", "Abolish the Infestation on the Mountain"],
        ["The Power of Rico Compels You", "Exorcise the Infestation at the Church"],
        ["They Came From the Lake", "Liquidate the Infestation at the Lake"],
        ["Tiger Tamer", "Drive through all AR tiger images in the Solino Underground's challenges"],
        ["Wanderlust", "Discover 50% of all discoverable Locations"],
        ["We Put a Giant Gun on It", "Finish Operation Sandstinger"],
        ["We're in Business", "Secure every Factory"],
        ["Weapon Stash", "Secure all Small Arms and Heavy Weapons Blueprints"],
        ["What If I... Dive Down?", "Finish Operation Windwalker"],
        ["Where I Belong", "Stand on foot at the highest point in Solís"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 9 hidden Just Cause 4 achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ach_b10", "Moocifer"],
        ["ach_c1", "Interception"],
        ["ach_c2", "Not My First Rodeo"],
        ["ach_c3", "Drone Joust"],
        ["ach_c4", "Danger Drone"],
        ["ach_c5", "He Talked Too Much"],
        ["ach_c6", "Skitchin'"],
        ["ach_c7", "Long Board"],
        ["ach_c8", "Hover or Die"],
    ];

    assert.strictEqual(names.length, 9, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
