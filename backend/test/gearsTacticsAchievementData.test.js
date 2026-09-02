import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gears-tactics.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1184050 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("gears-tactics");

test("getPlannerData('gears-tactics') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for gears-tactics");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Gears Tactics achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Gears Tactics achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Gears Tactics achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…dary!", "Upgrade each Hero's primary weapon with all Legendary mods."],
        ["Ain't no one like me, 'cept me!", "Complete a mission on Insane difficulty with a single soldier."],
        ["All For One!", "Apply three or more stacks of Wingman on a single ally (Jacked game mode only)."],
        ["Aw man, I shot Marvin in the face", "Down a Gear with friendly fire."],
        ["Backdoor Man", "Kill 6 targets with a single Rampage, after coming out of Cloak."],
        ["BOGO", "Kill an enemy, AND an enemy behind it, with a single burst of bullets."],
        ["Boom!", "Kill 100 enemies with Ticker explosions."],
        ["Broken hand, broken heart", "Story progress marker - unlocks on a key late-campaign encounter, described spoiler-free."],
        ["Champion of Vasgar", "Complete all Campaign Acts (any difficulty)."],
        ["Check out the big brain on Brett!", "Kill 5 enemies with a single Overwatch action."],
        ["Dead men tell no tales", "Story progress marker - unlocks on the final campaign encounter, described spoiler-free."],
        ["Demolition Expert", "Close an Emergence Hole before any enemies have emerged."],
        ["Everyone stay cool, this is a robbery!", "Complete a Control side mission."],
        ["For he is truly his brother's keeper...", "Use Jack to rescue both soldiers from torture pods on a Rescue mission (Jacked game mode only)."],
        ["Fortuna Audaces Sequitur", "Complete a Scavenger Run side mission."],
        ["God-like", "Complete 20 missions without any of your units dying or being downed."],
        ["Great vengeance and furious anger...", "In one turn, Breach 3 enemies; kill one of each with Precision Shot, Reckless Shot and Double Shot."],
        ["Grubpocalypse", "Kill 10000 enemies."],
        ["Grubslaughter", "Kill 1000 enemies."],
        ["Grubslayer", "Kill 10 enemies."],
        ["Happy Killmore", "Close an Emergence Hole by kicking a Ticker into it."],
        ["Hell of a shot", "Story progress marker - unlocks on a key campaign encounter, described spoiler-free."],
        ["Hero of Vasgar", "Complete all Campaign Acts on Experienced or Insane difficulty."],
        ["High Noon", "Complete a mission by only dealing damage with Snub Pistols."],
        ["I am Ironman", "Complete the Campaign on any difficulty with Ironman mode enabled."],
        ["I could do this all day", "Complete 20 Veteran Missions."],
        ["I never miss", "Hit a target with 10% or less chance to hit."],
        ["I've done the whole mind control thing...", "Use Jack to HiJack each non-boss enemy at least once (Jacked game mode only)."],
        ["I've got your 'BOOM' right here!", "Kill a Boomer with a boomshot."],
        ["Immortal", "Complete 100 missions without any of your units dying or being downed."],
        ["Immortal Legion", "Complete the campaign on Insane difficulty without a single unit dying."],
        ["Jack and the Beanstalk", "Defeat the Brumak in Act 1 Chapter 6 without Jack taking damage (Jacked game mode only)."],
        ["Legen (wait for it)…", "Upgrade one primary weapon with all Legendary mods."],
        ["Maybe too much spine...", "Story progress marker - unlocks on a key campaign encounter, described spoiler-free."],
        ["Midnight Hour", "Gain AP from the Avenger skill, then use a Rage shot to kill the unit that caused your AP gain."],
        ["Number 5 is alive!", "Complete a mission with Jack (Jacked game mode only)."],
        ["Oh I'm sorry did I break your concentration?", "Interrupt an enemy Overwatch with a Disabling Shot from the Snub Pistol."],
        ["One For All!", "Have four squad members with the Jacked status effect at the same time (Jacked game mode only)."],
        ["Piñata", "Kill a single unit that has taken damage from each Gear on the mission."],
        ["Savior of Vasgar", "Complete all Campaign Acts on Insane difficulty."],
        ["Seriously Jacked", "Earn all \"Jacked game mode\" achievements."],
        ["Seriously Tactical", "Earn Grubpocalypse, Immortal Legion, I Could Do This All Day and Boom!"],
        ["Smash!", "Complete a Sabotage side mission."],
        ["Snafu", "Heal an enemy unit with a Stim Grenade."],
        ["Stronger Together", "Complete a Rescue side mission."],
        ["Suit Up!", "Equip at least one weapon with all Supreme Weapon Mods (Jacked game mode only)."],
        ["Tactics!", "Perform a chainsaw execution."],
        ["The Big Ending", "Revive a Scout with Stim ability and then use that Scout to kill at least 5 enemies with Rampage."],
        ["The bigger they are, the harder they fall", "Story progress marker - unlocks on a key campaign boss encounter, described spoiler-free."],
        ["The path of the righteous man", "Complete a mission without any of your units dying or being downed."],
        ["Three Count", "Hit with 3 Explosive Shots while having maximum Anchored bonus in a single turn."],
        ["Tick Tick Tick...", "Kill an enemy with a Ticker explosion."],
        ["Trick Shot", "Get 4 kills with a single Torque Bow shot."],
        ["Trouble in Paradise", "Empower a Teamworked unit and gain 3 AP from their kills."],
        ["Untouchable", "Win a Veteran Mission without taking a point of damage (Jacked game mode only)."],
        ["Up Up Down Down", "Use Alpha and Omega twice each in the same turn."],
        ["We should have shotguns for this...", "Complete a Veteran Mission with all Scout units."],
        ["We’re in the endgame now", "Complete a Veteran side mission."],
        ["World on Fire", "Story progress marker - unlocks on a key campaign encounter, described spoiler-free."],
        ["You can't see me!", "Gain a Supply with a Hidden Jack and no other allies in the Supply Point (Jacked game mode only)."],
        ["Zed's dead, baby.", "Kill one or more of each Deviant enemy (Jacked game mode only)."],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
