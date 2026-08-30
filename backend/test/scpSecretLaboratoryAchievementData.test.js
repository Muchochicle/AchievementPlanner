import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/scp-secret-laboratory.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 700330 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 52 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("scp-secret-laboratory");

test("getPlannerData('scp-secret-laboratory') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for scp-secret-laboratory");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every SCP: Secret Laboratory achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every SCP: Secret Laboratory achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 SCP: Secret Laboratory achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["... You Thinking What I'm Thinking?", "Find any gun as a Class-D."],
        ["Access Granted", "As Class-D, kill a Scientist holding a keycard."],
        ["Afterlife Communicator", "Contact the dead using SCP-1576."],
        ["Amnestic Ambush", "As SCP-939, kill a player under the effects of your Amnestic Cloud using Lunge."],
        ["Anomalously Efficient", "As an SCP, get a kill within the first minute of the game."],
        ["Arizona Ranger", "Get a headshot kill with a Revolver from over 25 meters away."],
        ["Army of One", "In a single life, get 4 kills using 4 different weapons."],
        ["Be Polite. Be Efficient.", "Kill five enemies in less than 30 seconds."],
        ["Change in Command", "Disarm an MTF operative."],
        ["Complete the Mission", "Complete a round as the last surviving member of the winning team."],
        ["Crisis Averted", "Use SCP-500 when you're about to die."],
        ["Don’t Blink", "Successfully evade SCP-173."],
        ["Escape Artist", "Be the first to escape the Facility."],
        ["Executive Access", "Obtain a max-level keycard."],
        ["Fire In The Hole!", "Kill an enemy using a grenade."],
        ["For Science!", "Escape as a Scientist."],
        ["Friendship", "As a Scientist, successfully upgrade your keycard alongside any amount of Class-D."],
        ["Ha! I didn't even feel that!", "Use adrenaline to survive a hit that would otherwise kill you."],
        ["Happy Halloween!", "Play the Halloween version of the game."],
        ["Hats Off to You!", "Get a kill immediately after canceling the effects of SCP-268."],
        ["Hawkeye", "Reveal an enemy player under the effects of SCP-268 using SCP-1344."],
        ["He’ll Be Back...", "Successfully escape from the Pocket Dimension."],
        ["High on the Wings of Caffeine", "Escape while under the effects of SCP-207."],
        ["I'll Pass, Thanks", "As an SCP, kill someone who's charging or firing the Micro H.I.D."],
        ["If you want something done right...", "Kill an SCP as a Scientist."],
        ["Is This Thing On?", "Broadcast a 'helpful' message via the Intercom."],
        ["It's Always Left, Brothers!", "Escape as Class-D personnel."],
        ["Lights Out", "Respawn as Nine-Tailed Fox."],
        ["LMGG", "Using an LMG, get 3 kills without letting go of the trigger."],
        ["Melancholy of Decay", "As SCP-106, capture a player within five seconds of emerging from the ground."],
        ["Merry Christmas!", "Play the Christmas version of the game."],
        ["Microwave Meal", "Kill an SCP with the Micro H.I.D."],
        ["Mutually-Assured Destruction", "Kill someone with a grenade after your death."],
        ["My Cure Is Most Effective...", "As SCP-049, cure ten people in a single game."],
        ["On Speaking Terms", "As a Chaos Insurgent, use a radio to communicate with MTF."],
        ["Overcurrent", "Try to recharge the Micro H.I.D."],
        ["Overtime", "Survive an entire round without dying as a Facility Guard."],
        ["Pacified", "Kill SCP-096 while it’s entering rage."],
        ["Proceed With Caution", "Successfully pass through a Tesla gate that SCP-079 is monitoring."],
        ["Property of the Chaos Insurgency", "Liberate two or more SCP objects from the Facility, while escaping as a Class-D."],
        ["Rule Breaker", "Consume 3 candies from SCP-330 in a single life."],
        ["Secure. Contain. Protect.", "As MTF, kill the final SCP in a round."],
        ["Signal Lost", "Cut SCP-079’s connection using SCP-2176."],
        ["T-Minus 90 seconds...", "Survive a successful Alpha Warhead Detonation."],
        ["That was... close.", "Cancel the Alpha Warhead detonation within the last 15 seconds of the countdown."],
        ["They Are Just Resources...", "Detain or kill 50 Class-D as a Scientist."],
        ["Think Fast!", "Kill a player using SCP-018."],
        ["Tooth and Nail", "Reach a tier three bond with SCP-127."],
        ["Trilateral Termination", "In a single life, kill three enemy players with the 3-X Particle Disruptor."],
        ["Undead Space Program", "Kill an instance of 049-2 using a charged hit with the Jailbird."],
        ["Walk It Off", "Survive a fall with less than half of your health remaining."],
        ["We of Delta Command...", "Respawn as Chaos Insurgency."],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
