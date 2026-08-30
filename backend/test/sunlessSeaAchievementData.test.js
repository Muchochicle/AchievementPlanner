import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sunless-sea.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 304650 (fetched through this app's own services/steamApi.js).
// 5 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sunless-sea");

test("getPlannerData('sunless-sea') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for sunless-sea");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Sunless Sea achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Sunless Sea achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Sunless Sea achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A buoyant escape", "Escape underwater combat by resurfacing"],
        ["A current under zee", "Use underwater currents to bear you on your way"],
        ["A Drownie devotee", "Collect all of Drownie Love-song, Drownie Counterpoint and Drownie Hymn"],
        ["A Past Wreathed in Shadows", "Complete the game without ever choosing a past"],
        ["A zee-change", "Accept a power of the deep zee"],
        ["Come Closer", "Trigger the \"An Old Friend\" random event by keeping your Terror above 75 while carrying a Tattoo, then accept the Lady in Lilac aboard your ship. She leaves if Terror drops below 26, so keep Terror elevated to retain her."],
        ["Consider Phlebas", "Be killed by an underwater creature"],
        ["Correspondent", "Take the Correspondent legacy"],
        ["Death By Water", "Die of suffocation"],
        ["Depth charge", "Use an oasis to increase your oxygen levels"],
        ["Five Years at Zee", "Spend five years out at zee in an unbroken lineage"],
        ["Frightful, sheer, no-man-fathomed", "Venture beneath the waves"],
        ["HE SUN THE SUN THE SUN T", "Find the Dawn Machine, a location hidden in the south-west corner of the map."],
        ["His bones in whispers", "Discover Scrimshander"],
        ["I am the Captain of my Soul", "Complete the game without saving manually"],
        ["Knife, Cup and Bone", "Discover Wrack"],
        ["Leviathan", "Discover Hideaway"],
        ["Lose your Mind", "Let your terror reach 100"],
        ["Never Stop Sinking...", "Die 10 times in an unbroken lineage"],
        ["No regrets", "Discover Aigul"],
        ["Ofermod", "Be killed by the Constant Companion"],
        ["Old Unhappy Far-Off Things", "Achieve Antiquarian 10"],
        ["One Year at Zee", "Spend one year out at zee in an unbroken lineage"],
        ["Open Your Ears", "Download new stories"],
        ["Pupil", "Take the Pupil legacy"],
        ["Rival", "Take the Rival legacy"],
        ["Roaring Rise", "Discover \"The Eye\" - a hidden location in a randomized 5-tile purple map area. The correct tile shows a \"Something forgotten is here\" message; visiting it reveals a massive closed eye beneath the waves that opens when found. The tile layout is randomized, so checking every tile in the area (and possibly reloading) may be necessary."],
        ["Romans 6:9", "Complete the Zubmariner ambition"],
        ["Rosewater sailor", "Discover Rosegate"],
        ["Rules the Waves", "Achieve Admiralty's Favour 10"],
        ["Salt's Curse", "Suffer Salt's Curse"],
        ["Salvager", "Take the Salvager legacy"],
        ["Shipmate", "Take the Shipmate legacy"],
        ["Sink Beneath the Waves", "Die for the first time"],
        ["Sink Beneath the Waves. Again.", "Die 5 times in an unbroken lineage"],
        ["Sound Mind?", "Create an ironclad will"],
        ["Stone's Curse", "Suffer Stone's Curse"],
        ["Storm's Curse", "Suffer Storm's Curse"],
        ["Sweet Sorrow", "Woo a sweetheart in London"],
        ["Ten Years at Zee", "Spend ten years out at zee in an unbroken lineage"],
        ["Thanks for all the fish", "Discover The Gant Pole"],
        ["The Ascent of Man", "Reach the surface by sailing the Cumaean Canal, which needs roughly 22 Fuel and 2 Supplies to attempt."],
        ["The beauty of the deep", "Discover Dahut"],
        ["The Bell Tolls", "Discover Low Barnet"],
        ["The dragon in the zee", "Discover Nook"],
        ["The Fall of the House", "See the conclusion of the Hunter's Keep storyline, a multi-stage quest chain that unfolds at that port."],
        ["The Lady's Parlour", "Perform an abyssal ritual to encounter Lady Black"],
        ["Those are pearls that were his eyes", "Discover Anthe"],
        ["Thou, All-Shaking Thunder", "Let your terror reach 90"],
        ["Under pressure", "Avoid being killed by the Unexploded Unclear Bomb"],
        ["Under the zee", "Discover Undercrow"],
        ["We're Gonna Need a Bigger Boat", "Acquire the Eschatologue-class Dreadnaught"],
        ["What lies beneath", "Come face to face with the Constant Companion"],
        ["Zee Fever", "Send your child to zee"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 5 hidden Sunless Sea achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["HE SUN THE SUN THE SUN T", "The Fall of the House", "Roaring Rise", "The Ascent of Man", "Come Closer"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
