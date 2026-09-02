import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-squadrons.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1222730 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-wars-squadrons");

test("getPlannerData('star-wars-squadrons') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-squadrons");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every STAR WARS: Squadrons achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every STAR WARS: Squadrons achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 STAR WARS: Squadrons achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Idea", "Modified a starfighter's preset loadout in multiplayer."],
        ["A Promising Career", "Reached Pilot Level 10."],
        ["A Starfighter of Your Own", "Acquired your first starfighter component."],
        ["Across the Stars", "Won a Ranked Fleet Battles match on every map."],
        ["Against the Current", "Complete the campaign mission 'Against the Current'."],
        ["Asset Secured", "Complete the campaign mission 'Asset Secured'."],
        ["Back From the Brink", "Returned to the Hangar with less than 5% hull integrity."],
        ["Baited", "Complete the campaign mission 'Baited'."],
        ["Begin the Ceremony", "Earned your first Award."],
        ["Combat Pilot", "Destroyed 50 starfighters in Dogfight matches."],
        ["Denied", "Shot down 30 missiles, bombs, or mines in Ranked Fleet Battles."],
        ["Dressed for the Job You Want", "Equipped your pilot with their first Legendary cosmetic."],
        ["Fearless", "Destroyed an enemy while your hull integrity was 5% or lower."],
        ["Flames Over Mon Cala", "Complete the campaign mission 'Flames Over Mon Cala'."],
        ["Found Your Place", "Completed your Ranked placement matches."],
        ["Fracture at Fostar Haven", "Complete the campaign mission 'Fracture at Fostar Haven'."],
        ["Fully Decorated", "Earned all Story Medals on any difficulty."],
        ["Got 'Em", "Destroyed a disabled starfighter 10 times across multiple Dogfight matches."],
        ["Great Shot, Kid", "Dealt the final blow to the enemy's flagship in a Fleet Battle."],
        ["Heavy Hitter", "Dropped 50 bombs to damage Capital Ship hulls across multiple Ranked Fleet Battles."],
        ["I Have You Now", "Won 15 Dogfight matches."],
        ["I Know a Few Maneuvers", "Destroyed 10 starfighters while drifting in Dogfight."],
        ["Mission Accomplished", "Earned all Medals in a Story mission."],
        ["Punch It", "Complete the campaign mission 'Punch It' - finish the story."],
        ["Safety in the Storm", "Complete the campaign mission 'Safety in the Storm'."],
        ["Seasoned Star Pilot", "Reached Pilot Level 40."],
        ["Shallow Grave", "Used Tactical Shields or Supply Droids to rescue near-death allies 10 times in Ranked Fleet Battles."],
        ["Sound Strategy", "Destroyed your first subsystem."],
        ["Special Modifications", "Acquired 50 components for your starfighters."],
        ["Squadron Hunter", "Destroyed four of each starfighter class in Dogfight matches."],
        ["Stay on Target", "Won 15 Co-op Fleet Battles vs. AI."],
        ["Stomped", "Won a Fleet Battles vs. AI match with both Capital Ships and your Flagship intact."],
        ["Stronger Together", "Won any match while playing in a party."],
        ["Stun 'Em", "Disabled the same player five times in one match."],
        ["Temporary Guardian", "Complete the campaign mission 'Temporary Guardian'."],
        ["The Galaxy's Finest (Ace)", "Completed the campaign on Ace difficulty."],
        ["The Galaxy's Finest (Pilot)", "Completed the campaign on Pilot difficulty."],
        ["The Galaxy's Finest (Story Mode)", "Completed the campaign on Story Mode difficulty."],
        ["The Galaxy's Finest (Veteran)", "Completed the campaign on Veteran difficulty."],
        ["The Trap is Set", "Damaged 5 enemies with Seeker Mines in a single match."],
        ["Together, Vanguard", "Complete the campaign mission 'Together, Vanguard'."],
        ["Trigger Happy", "Dealt more than 50,000 laser damage in a single match."],
        ["Ultimate Weapon", "Destroyed 1000 starfighters in Dogfight matches."],
        ["Unkillable", "Evaded or countered 5 lock-ons in a row during a single match."],
        ["Unstoppable Ace", "Destroyed 250 starfighters in Dogfight matches."],
        ["Victory for the Empire", "Won 10 Ranked Fleet Battles as the Galactic Empire."],
        ["Victory for the New Republic", "Won 10 Ranked Fleet Battles as the New Republic."],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
