import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-mirage.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3035570 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("assassins-creed-mirage");

test("getPlannerData('assassins-creed-mirage') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-mirage");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Assassin's Creed Mirage achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Assassin's Creed Mirage achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Assassin's Creed Mirage achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A True Hidden One", "Assassinate 10 guards in a row without triggering open conflict"],
        ["Ambush", "Have 10 guards trigger traps"],
        ["Attention Seeker", "Attract 10 guards with noisemakers"],
        ["Bal kullun mumkin", "Discover Basim's past (finish the game)."],
        ["Bird of Prey", "Tag 100 guards using Enkidu"],
        ["Blade in the Crowd", "Assassinate 10 guards while blending with the crowd"],
        ["Crossing Paths", "Complete a Tale from Baghdad"],
        ["Curio Collector", "Pickpocket all 18 artifacts and bring them to Dervis."],
        ["Cutting Edge", "Fully upgrade a weapon"],
        ["Dawn and Dusk", "Use benches to pass time 5 times"],
        ["Defender of the People", "Complete 10 faction contracts"],
        ["Eagle's Eye", "Kill 75 guards with throwing knives"],
        ["Eagle's Will", "Survive 10 minutes in open conflict"],
        ["Explorer", "Explore all the Baghdad region territories"],
        ["Fashion Statement", "Apply dye to an outfit"],
        ["Fearless", "Synchronize all Viewpoints in the Baghdad region"],
        ["Gifted Escapist", "Collapse 20 scaffolding structures"],
        ["Give it the Slip", "Escape the AlUla prison undetected"],
        ["Headhunter", "Headshot 20 guards with throwing knives"],
        ["Hoarder", "Save up 2007 dirhams"],
        ["If I Recall Correctly", "Replay an Animus Sequence"],
        ["La shay'a waqi'un mutlaq", "Become an Initiate of the Hidden Ones."],
        ["Like a Local", "Complete all the AlUla territories"],
        ["Lost and Found", "Return all stolen goods to Hind"],
        ["Make a Break", "Escape the AlUla prison"],
        ["Masquerader", "Obtain the two disguises in Baghdad"],
        ["Notorious", "Stay at maximum notoriety for 10 minutes"],
        ["Once Upon a Time", "Listen to all folktales"],
        ["Patron of Industry", "Pay merchant groups 5 times"],
        ["Patron of Sell-Swords", "Pay mercenaries 5 times"],
        ["Patron of the Arts", "Pay musicians 5 times"],
        ["Perfect Memory", "Complete all challenges of an Animus Sequence"],
        ["Playback", "Unlock all Animus Sequence rewards"],
        ["Poster Boy", "Lower maximum notoriety by ripping wanted posters only"],
        ["Potion Collector", "Purchase 10 elixirs"],
        ["Pro Musician", "Collect all Oud melodies"],
        ["Riddle Me This", "Obtain a treasure by solving an enigma"],
        ["Sage", "Collect all lost books"],
        ["Self-Improvement", "Unlock 23 Skills"],
        ["Serving the Light", "Reach the maximum Hidden One Rank"],
        ["Silencer", "Destroy a Horn Bearer's horn with a throwing knife."],
        ["Sleep Tight", "Put 10 guards to sleep with blowdarts"],
        ["Spread the News", "Use the services of a Munadi 3 times"],
        ["Street Cleaner", "Hide 5 bodies in bales of hay"],
        ["Surprise!", "Assassinate 10 guards from hiding spots"],
        ["Taste Your Own Medicine", "Poison a Poisoner"],
        ["The Blood of a Demon", "Eliminate Al-Rabisu."],
        ["The Blood of a Ghoul", "Eliminate Al-Ghul."],
        ["The Blood of a Spymaster", "Eliminate Al-Mardikhwar."],
        ["The Blood of an Enchantress", "Eliminate Al-Pairika."],
        ["The Hands of a Thief", "Pickpocket 50 people"],
        ["The Head of the Snake", "Eliminate the Head of the Order."],
        ["The Master Thief of Anbar", "Complete the prologue."],
        ["The Shadow and the Flame", "Defeat a Shakiriyya in combat (they appear at maximum notoriety)."],
        ["Thick Skin", "Fully upgrade an outfit"],
        ["Tools of the Trade", "Fully upgrade all tools"],
        ["Treasure Seeker", "Open a token chest"],
        ["Turn the Page", "Say goodbye to Is'haq"],
        ["Unstoppable", "Kill 5 guards with one use of Assassin's Focus."],
        ["Up in Smoke", "Affect 20 guards with smoke bombs"],
        ["You Snooze, You Lose", "Pickpocket a guard affected by a blowdart"],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
