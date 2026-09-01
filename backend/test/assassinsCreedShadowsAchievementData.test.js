import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-shadows.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3159330 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("assassins-creed-shadows");

test("getPlannerData('assassins-creed-shadows') returns real planner data with 75 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-shadows");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 75);

});

test("every Assassin's Creed Shadows achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Assassin's Creed Shadows achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 75 Assassin's Creed Shadows achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New League Rises", "Complete Act 1 of the main story."],
        ["A Rare Occurrence", "Complete all legendary sumi-e"],
        ["Acrobatics", "Perform a leap of faith from a grappling hook swing"],
        ["Adept Samurai", "Perform your first Finisher as Yasuke"],
        ["Adept Shinobi", "Perform your first assassination"],
        ["Adventurer", "Shoot an enemy in the knee with an arrow"],
        ["Against Wood and Stone", "Fully upgrade a building in the Hideout"],
        ["All Clear", "Complete 5 Corrupted Castles"],
        ["An Oath Fulfilled", "Complete Act 2 of the main story."],
        ["Art of Kenjutsu", "Master the way of the samurai"],
        ["Art of Ninjutsu", "Master the way of the shinobi"],
        ["Assassin's Focus", "Eliminate 7 enemies through one single use of Windstep (Claws of Awaji)"],
        ["Backfire", "Kill an enemy with a Tezutsu that you dropped after being hit by that enemy (Claws of Awaji DLC)."],
        ["Better than a Bucket", "Equip Legendary gear in every equipment slot at once."],
        ["Boat Rocked", "Defeat the Old Ashigaru (Claws of Awaji DLC)."],
        ["Breathtaking!", "Complete all Landscape Sumi-e in Awaji (Claws of Awaji)"],
        ["Build Your League", "Recruit your first ally to the League."],
        ["Chase the Morning", "Add a sumi-e to the Hideout"],
        ["Clawless", "Eliminate all targets in Awaji (Claws of Awaji)"],
        ["Collector", "Complete a collection."],
        ["Critical Hit!", "Complete the 'Seta River Killers' quest (a Critical Role crossover event)."],
        ["Death Blossom", "Defeat all of the Shinbakufu (the main assassination targets)."],
        ["End of Order", "Defeat the Templars"],
        ["Enjoy the Ride", "Reach Level 80"],
        ["Epilogue", "Complete the Epilogue after finishing Act 3."],
        ["Everybody Benefits!", "Adopt a pet"],
        ["Fall of the Shinbakufu", "Complete Act 3 of the main story."],
        ["Final Hearing", "Sheath your weapon immediately after an enemy dies from Bleed"],
        ["Front of the Pack", "Fully train an ally."],
        ["Giant Slayer", "Assassinate a powerful guardian in one go"],
        ["Good Form", "Complete your first kata"],
        ["Happy Place", "Reach the highest point on the map"],
        ["Hook, Line, and Swinger", "Stay airborne by swinging from one grappling hook point to another"],
        ["Hunters Hunted", "Defeat all three of Yukari's taisho (Claws of Awaji DLC)."],
        ["In Case of Trouble", "Fully upgrade your tools and ammunition."],
        ["Infinite Introduction", "Activate an Exploit"],
        ["Just Your Shadow", "Distract the same enemy 3 times with shinobi bells"],
        ["Kofun Raider", "Complete your first kofun"],
        ["Leap of Fail", "Perform a Leap of Faith as Yasuke."],
        ["Limitless", "Find a Legendary piece of gear of each type."],
        ["Made You Look!", "Find the treasure hidden behind the waterfall at the Hideout."],
        ["Make it Personal", "Engrave your first weapon"],
        ["Master Builder", "Reach Hideout level 13"],
        ["Master Samurai", "Parry an incoming projectile"],
        ["Master Shinobi", "Assassinate an enemy through a shoji door"],
        ["MOD Runner", "Complete a Challenge Level 10 Domain"],
        ["Mortal Reminder", "Complete an Objective Board."],
        ["One, Two, Sweep", "Eliminate an enemy after using all three postures of the Bo in a single combat (Claws of Awaji)"],
        ["Overdesign III", "Perform a Finisher on an enemy that is both Poisoned and Dazed"],
        ["Pathfinder", "Visit every province on the map"],
        ["Prologue", "Complete the prologue."],
        ["Ran", "Escape Sumoto Castle (Claws of Awaji DLC)."],
        ["Reeding is Fundamental", "Escape conflict by using a breathing reed to hide in shallow water"],
        ["Scouting Mission", "Gather information using a scout"],
        ["Skill Swap", "Train Kinu and Kane"],
        ["Slice of Life", "Kill 5 enemies with one single Wind Slash strike (Claws of Awaji)"],
        ["Sole Sanctum", "Unlock the Hideout"],
        ["Sometimes", "Perform a landing roll"],
        ["Stars Unseen", "Reach Knowledge Rank 10"],
        ["Suture Self", "Fully upgrade your rations."],
        ["Test Your Might", "Defeat the final enemy in the tournament"],
        ["The Eager Assassin", "Meet Yagoro during the 'A Blade in the Dark' quest."],
        ["The Ronin", "Meet Ibuki during the 'Ambush Interrupted' quest."],
        ["The Sharpshooter", "Meet Katsuhime during the 'Against the Koga-ryu' quest."],
        ["The Stick of Truth", "Equip a Legendary Bo (Claws of Awaji)"],
        ["The Thief", "Meet Gennojo during the 'Missing Missive' quest."],
        ["The Toxin Master", "Meet Oni-Yuri during the 'Sweet Lies' side quest."],
        ["The Warrior Monk", "Meet Yaya during 'The Fatherless Monk' quest."],
        ["This is Japan, Actually", "Kick an enemy from a high place"],
        ["Unity", "Return the Regalia to the Emperor (Claws of Awaji DLC)."],
        ["Unseen", "Perform 5 assassinations in a row without being noticed or entering combat"],
        ["Unstoppable", "Use Samurai Stand before performing a Finisher on an enemy"],
        ["Worth Its Wait", "Obtain two golden katana"],
        ["Would You Kindly?", "Complete a contract in each province"],
        ["Zen Master", "Complete all Kuji-kiri"],
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
