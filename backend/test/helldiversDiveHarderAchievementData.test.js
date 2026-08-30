import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/helldivers-dive-harder.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 394510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("helldivers-dive-harder");

test("getPlannerData('helldivers-dive-harder') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for helldivers-dive-harder");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Helldivers achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Helldivers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Helldivers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["80% of the time, I hit every time", "Complete a mission with over 300 shots fired and 80% accuracy or better."],
        ["A molehill of corpses", "Kill 10,000 enemies."],
        ["A shining inspiration to us all!", "Achieve the rank of Grand Lord (Rank 25)."],
        ["Add that one to the fossil record!", "Defeat a Bug Hive Lord."],
        ["Back in time for dinner", "Complete a difficulty 4 or higher mission in 5 minutes or less."],
        ["Brothers in Arms", "Join another game through the matchmaking system."],
        ["Dancing Queen", "Do 25 capespins in a row, without moving, while on the ship bridge."],
        ["Defender of Humanity", "Take part in a successful defense of a capital city by completing at least one mission."],
        ["Don't you just hate escort missions?", "Successfully complete an escort objective where all 4 NPCs survive."],
        ["Hell dive", "Complete a difficulty 10 or higher mission without a single death."],
        ["I'm no Zoologist, but how do you classify a 20 foot tentacle?", "Face each new enemy once."],
        ["It didn't SEE that coming!", "Defeat an Illuminate Great Eye."],
        ["It's raining Hell, hallelujah!", "Complete a mission using only Stratagems."],
        ["Join the Army they said", "Complete a mission."],
        ["Knock-knock, who's there? DEMOCRACY!", "Kill an Illuminate Obelisk while it is closed."],
        ["Liberating the countryside", "Complete all missions on a planet with difficulty 10 or higher."],
        ["Make Frank kill a Tank!", "Kill a Bug Tank, Bug Behemoth, or Cyborg IFV by having the extraction shuttle land on it."],
        ["Making mountains out of molehills", "Kill 100,000 enemies."],
        ["Meet interesting people they said", "Play at least once against all enemy races."],
        ["Never give up, never surrender", "Use the Reinforce Stratagem while downed and the last Helldiver alive on a difficulty 8 or higher mission with 4 players."],
        ["Next time we meet, I'll probably have to salute you", "Achieve the rank of Captain (Rank 13)."],
        ["No man left behind", "Extract from a difficulty 8 or higher mission with 4 players where all 4 get on the shuttle."],
        ["Nothing is hotter than a cup of Liber-Tea", "Complete a volcanic type planet of difficulty 5 or more."],
        ["Now that is what I would call a multi-kill!", "Kill 7 enemies within a very short time using only your primary weapon."],
        ["Peace and prosperity reigns again", "Complete at least one planet in a successful Galactic Campaign."],
        ["Resisting democracy is futile!", "Defeat a Cyborg Siegemech."],
        ["Royal Roadkill", "Kill a Bug or Illuminate assassination target by running it over with the APC or HAV."],
        ["See the Galaxy they said", "Play at least once on a desert, a forest, and a snow planet."],
        ["Solid Stealth Execution", "Complete a difficulty 7 or higher mission without triggering any alarms."],
        ["Spreading Managed Democracy", "Take part in a successful final assault on an enemy's home planet by completing at least one mission."],
        ["Stick it to the Man!", "While in melee range from a Cyborg Warlord, use the \"NO\" communication command."],
        ["That which doesn't kill you, scars you for life", "Finish the Training."],
        ["The element of Supplies", "Kill a Bug Tank with a Resupply Stratagem Hellpod."],
        ["The Helldiver's new clothes", "Customize your character."],
        ["They call me Mr. Danmaku", "Complete a difficulty 7 or higher mission against the Cyborgs without taking damage from any enemy."],
        ["When the wrong tools do the job, are they still wrong?", "Destroy a Bug Nest, Cyborg AA, or Illuminate Beacon with anything but the NUX-223 Hellbomb."],
        ["Which seat can I take?", "In a 4 player game, on a Friday, have all players sitting in an APC or HAV at the same time."],
        ["Why wasn't this standard issue?", "Fully upgrade all non DLC Weapons and Stratagems."],
        ["You're it until you die or I find someone better", "Achieve the rank of Sergeant (Rank 7)."],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
