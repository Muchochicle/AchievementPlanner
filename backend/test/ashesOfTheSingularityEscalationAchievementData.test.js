import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ashes-of-the-singularity-escalation.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 507490 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ashes-of-the-singularity-escalation");

test("getPlannerData('ashes-of-the-singularity-escalation') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for ashes-of-the-singularity-escalation");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Ashes of the Singularity: Escalation achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Ashes of the Singularity: Escalation achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Ashes of the Singularity: Escalation achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Help Down Here?", "Called in orbital support"],
        ["A Quality All Its Own", "Fielded 1,000 Logistics worth of units"],
        ["Alas, Poor (Space) Yorick", "Win a match after a teammate has lost. Thanks a bunch, pal."],
        ["All I Do is Win", "Conquered Silgul"],
        ["Artillery! Artillery! Uber Alles", "Completed the fifth Imminent Crisis mission"],
        ["Band of Tactically Compatible Networked Intelligences", "Stomped the comp with human teammates"],
        ["Basically Like Worf And Chewbacca Fighting Back To Back", "Defeated an unfair-teams skirmish against Insane AIs with a fellow human fighting at your side"],
        ["Beat The Turinium Test", "Conquered Roceda"],
        ["Betelgeuse, Betelgeuse, Betelgeuse!", "Completed the second Escalation mission"],
        ["Big Brother", "Watch a game as an Observer"],
        ["Biting the hand that fed you", "Completed the ninth Escalation mission"],
        ["Brainwhale!", "Completed the fourth Imminent Crisis mission"],
        ["Can I Play Now, Daddy?", "Completed the Tutorial"],
        ["Come Get Some", "Won a skirmish against unfair teams"],
        ["Divided and conquered", "Completed the seventh Escalation mission"],
        ["Don't Hurt Me", "Joined a ranked match"],
        ["Fight the Future", "Won a six-player match in the Ascendancy Wars"],
        ["Fitter. Happier. More Productive", "Won a match without wasting a single resource"],
        ["For Humanity!", "Won the Ascendancy Wars for the Post-Humans"],
        ["Glowing Green", "Own 10,000 radioactives"],
        ["Good Sport", "Stuck around to the bitter end in a multiplayer loss"],
        ["Harbinger of Doom", "Completed the fourth Escalation mission"],
        ["Hell from Above", "Completed the first Imminent Crisis mission"],
        ["Hitting it where it hurts", "Completed the third Escalation mission"],
        ["I Dread Very Little Indeed", "Completed the ninth Imminent Crisis mission"],
        ["Infinitely Improbable", "Won a game after your Nexus was dealt critical damage"],
        ["It's a mad, mad world", "Completed the eigth Escalation mission"],
        ["It's new and improved!", "Upgrade a building"],
        ["Look at all of the wonderful toys", "Completed the sixth Escalation mission"],
        ["Loot Crate", "Completed the first Memories mission"],
        ["Love and Hate", "Completed the third Memories mission"],
        ["Master of the Singularity", "Defeated an unfair-teams skirmish against Insane AIs with no human help"],
        ["Mo' Metal, Mo' Problems", "Didn't even sweat wasting 3,000 metal in a single match"],
        ["My Constructs Blot Out the Sun", "Completed the eighth Imminent Crisis mission"],
        ["My Kingdom For A Suitably Entangled Set of Subatomic Particles", "Lost a skirmish game"],
        ["No Further, Expansionist Pig-Dogs", "Won a skirmish game as the Substrate"],
        ["Not Too Proud", "Won a skirmish with a handicap"],
        ["Over ten thousand!", "Own 10,000 metal"],
        ["Paranoid Android", "Won a 3+ player free-for-all game as Substrate"],
        ["Probably Send These At The Other Guy's Nexus", "Fielded 30 units of bombers at once"],
        ["Real Ultimate Power", "Won a match by destroying all opposition"],
        ["Renegade Rumble", "Completed the second Memories mission"],
        ["Seeing Stars", "Reached rank 5 in ranked multiplayer"],
        ["She's Really Incurred My Wrath", "Conquered Artorius"],
        ["Six on one, sounds fair to me", "Completed the fifth Escalation mission"],
        ["Strike Force Omega", "Conquered Falnass"],
        ["Sword and shield", "Completed the first Escalation mission"],
        ["The Final Countdown", "Reached Legendary status in multiplayer. #respect"],
        ["There Are Many Like It, But This One Is Mine", "Reached level 5 with a Dreadnought"],
        ["This Splinter is No Master", "Complete the third Imminent Crisis mission"],
        ["This World is Mine", "Won a skirmish game as the Post-Humans"],
        ["Total Conversion", "Won a match on victory points"],
        ["Total Recall", "Reached level 10 in any global upgrade"],
        ["Wait, Don't They Eat People There?", "Completed the final Imminent Crisis mission"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
