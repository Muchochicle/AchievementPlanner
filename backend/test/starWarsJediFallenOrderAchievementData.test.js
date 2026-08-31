import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-jedi-fallen-order.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1172380 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-wars-jedi-fallen-order");

test("getPlannerData('star-wars-jedi-fallen-order') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-jedi-fallen-order");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Jedi: Fallen Order achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Jedi: Fallen Order achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Jedi: Fallen Order achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Galaxy Far, Far Away", "Complete all of BD-1's holomaps"],
        ["A Long Time Ago", "Reach the Ancient Vault on Bogano and scan the stone circle with BD-1."],
        ["Back At You", "Defeat 50 enemies with reflected blaster bolts"],
        ["Bank Shot", "Defeat an enemy by colliding them with another enemy"],
        ["Big Bang", "Defeat 20 enemies with explosives"],
        ["Blade Master", "Hit a single enemy with all three lightsaber types - single-bladed, dual-bladed and split saber."],
        ["Cal Got Your Tongue?", "Slice an oggdo's tongue"],
        ["Can't Touch This", "Precision Evade 100 attacks"],
        ["Collector", "Collect all chests and secrets"],
        ["Data Collector", "Scan all enemy types"],
        ["Data Disk", "Find all of BD-1's encrypted logs"],
        ["Don't Mess with BD-1", "Defeat an enemy with a hacked droid"],
        ["Echo Location", "Discover 75 Force Echoes"],
        ["Everything is Connected", "Solve the lantern puzzle in the Tomb of Miktrull on Zeffo and exit."],
        ["Feel the Force", "Unlock all Jedi skills"],
        ["For A More Civilized Age", "Solve the crystal puzzle in Ilum's ice caves and complete your lightsaber."],
        ["Full House", "Recruit all possible crew members for the Mantis"],
        ["Gorgara Falls", "Defeat Gorgara, the giant bat boss on Dathomir."],
        ["Green Thumb", "Have a fully grown terrarium"],
        ["Happy Go Wookiee", "Free the Wookiees on Kashyyyk and win the battle against the Stormtroopers and AT-ST."],
        ["Her Name Was Masana Tide", "Defeat the Ninth Sister atop the Origin Tree during the second Kashyyyk visit."],
        ["I Knew He Was No Good", "Defeat the fallen Jedi Master Taron Malicos at the Tomb of Kujet on Dathomir."],
        ["Kicking Back", "Kick a phillak that has kicked you"],
        ["Kickoff", "Defeat an enemy using only kicks"],
        ["Legendary Beasts", "Defeat four mysterious creatures"],
        ["Look Out Below", "Send 25 enemies over the edge"],
        ["Medical Droid", "Find all of BD-1's stim canisters"],
        ["Not So Fast", "Defeat 25 enemies while they are under the effect of Empowered Slow"],
        ["Perfect Timing", "Parry 100 enemies"],
        ["Sabersmith", "Fully customize your lightsaber"],
        ["Scum and Villainy", "Defeat all three Haxion Brood types: the Bounty Hunter, the Commando and the Bounty Droid."],
        ["The Full Glow-Up", "Customize the look of Cal, BD-1, and the Mantis"],
        ["The Holocron Awaits", "Return to Bogano's vault and place the Astrium in the stone circle."],
        ["The Mantis", "Finish the Bracca prologue and survive the first encounter with the Second Sister."],
        ["The Obstacle is the Way", "Complete the Tomb of Eilram on Zeffo."],
        ["Triple Take", "Defeat 3 enemies using a single lightsaber throw"],
        ["Trust Only In The Force", "Complete the story - reach the final cutscene after the last boss."],
        ["Visiting Alderaan Places", "Fully explore the crashed Venator wreckage on Zeffo and emerge."],
        ["What Goes Around...", "Defeat an enemy with their own Slowed blaster bolt"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
