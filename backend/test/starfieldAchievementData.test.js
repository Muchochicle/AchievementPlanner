import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/starfield.json - 82 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1716740 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("starfield");

test("getPlannerData('starfield') returns real planner data with 82 curated achievements", () => {

    assert.ok(game, "expected real planner data for starfield");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 82);

});

test("every Starfield achievement has a unique id from 1 to 82 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 82 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 82);
    assert.strictEqual(new Set(apinames).size, 82);

});

test("every Starfield achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 82 Starfield achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Legacy Forged", "Complete \"A Legacy Forged\""],
        ["All That Money Can Buy", "Complete \"All That Money Can Buy\""],
        ["Another Bug Hunt", "Eliminate 300 Creatures"],
        ["Back to the Grind", "Join Ryujin Industries"],
        ["Battle of the Unifier", "Complete “Battle of the Unifier”"],
        ["Boots on the Ground", "Land on 100 Planets"],
        ["Chief Engineer", "Modify a Ship"],
        ["Conflict in Conviction", "Complete \"Conflict in Conviction\""],
        ["Contract Killer", "Kill 10 targets for the Arbitrator"],
        ["Cyber Jockey", "Bypass 50 Digital Locks"],
        ["Dark Matter", "Eliminate 300 Human Enemies"],
        ["Deputized", "Join the Freestar Rangers"],
        ["Dust Off", "Reach Level 5"],
        ["Elite", "Reach Level 25"],
        ["Entangled", "Complete \"Entangled\""],
        ["Executive Level", "Complete \"Executive Level\""],
        ["Exhuming the Past", "Complete \"Exhuming the Past\""],
        ["Facing Your Fears", "Defeat 25 Vortex Horrors"],
        ["Five of a Kind", "Craft one of each type of Vortex Grenade"],
        ["Fixer", "Complete 30 Activities"],
        ["Fleet Commander", "Collect 10 Ships"],
        ["For All, Into the Starfield", "Enter Space for the First Time"],
        ["Fully Equipped", "Find a spaceship equipment module schematic and install an equipment module on your ship"],
        ["Further Into the Unknown", "Complete \"Further Into the Unknown\""],
        ["Greater Than", "Convince Delta that you are worthy of the title Captain"],
        ["Guilty Parties", "Complete \"Guilty Parties\""],
        ["Half the Battle", "Let Sarah Morgan know about her action figure"],
        ["High Price to Pay", "Complete \"High Price to Pay\""],
        ["Home Sweet Home", "Build an Outpost"],
        ["I Use Them For Smuggling", "Successfully Smuggle Contraband"],
        ["In Their Footsteps", "Complete \"In Their Footsteps\""],
        ["Incursion Eliminator", "Clear out 30 Incursions"],
        ["Incursion Exterminator", "Clear out 15 Incursions"],
        ["Incursion Fighter", "Clear out 5 Incursions"],
        ["Industrialist", "Produce 500 Total Resources from Outposts"],
        ["Into the Unknown", "Complete \"Into the Unknown\""],
        ["Into the VOID", "Complete “Into the VOID”"],
        ["Jacked In", "Access 50 Computers"],
        ["Just Like Grandma Used to Make", "Eat the questionable food offered by a spacefaring Old Woman"],
        ["Legacy's End", "Complete \"Legacy's End\""],
        ["Less Than", "Prove the superiority of artificial life"],
        ["Life Begets Life", "Gather 500 Organic Resources"],
        ["Lost Luxury", "Complete “Lost Luxury”"],
        ["Master of Magnetism", "Use a magnet to destroy the robot for Ivica in New Babylon"],
        ["One Giant Leap", "Complete \"One Giant Leap\""],
        ["One Small Step", "Join Constellation"],
        ["Overclocked", "Fully upgrade Delta"],
        ["Privateer", "Complete 30 Terminal or Misc. Missions"],
        ["Quantum Hoarder", "Retrieve your inventory from another universe"],
        ["Reach for the Stars", "Reach Level 100"],
        ["Redemption Arc", "Defeat 10 Redeemed"],
        ["Replicator", "Craft 100 Items"],
        ["Riddle Management", "Prevent any deaths by answering riddles"],
        ["Rock Collection", "Gather 500 Inorganic Resources"],
        ["Rook Meets King", "Join the Crimson Fleet"],
        ["Savior of the Promised", "Aid the People of Va’ruun’kai"],
        ["Shipping Magnate", "Connect 5 Outposts with Cargo Links"],
        ["Soldier of Fortune", "Mod 50 Weapons"],
        ["Space Opera", "Reach Level 50"],
        ["Starcrossed", "Reach Maximum Relationship Level with a Companion"],
        ["Stay of Execution", "Stop Bernhard from killing Caruso"],
        ["Stellar Cartography", "Visit 20 Star Systems"],
        ["Supra et Ultra", "Join the UC Vanguard"],
        ["Surgical Strike", "Complete \"Surgical Strike\""],
        ["The Best There Is", "Complete \"The Best There Is\""],
        ["The Devils You Know", "Complete \"The Devils You Know\""],
        ["The Family You Choose", "Recruit 10 Separate Companions"],
        ["The Great Unknown", "Discover 50 Locations on Va’ruun’kai"],
        ["The Hammer Falls", "Complete \"The Hammer Falls\""],
        ["The Other Side", "Complete “The Other Side”"],
        ["The Promised, Broken", "Complete “The Promised, Broken”"],
        ["The Scaled Citadel", "Complete \"The Scaled Citadel\""],
        ["The Stars My Destination", "Visit all Star Systems"],
        ["They’re Not Toys!", "Collect all Action Figures"],
        ["Thirst for Knowledge", "Read 20 Skill Magazines"],
        ["This for That", "Build out and hand over an outpost to a faction"],
        ["Top Tier", "Apply a Rank 4 Legendary Effect to a piece of your equipment"],
        ["Traveler", "Reach Level 10"],
        ["Unearthed", "Complete \"Unearthed\""],
        ["War of Angels", "Collect 20 Quantum Essence"],
        ["What Remains", "Complete “What Remains”"],
        ["Zealous Overreach", "Complete \"Zealous Overreach\""],
    ];

    assert.strictEqual(officialAchievements.length, 82, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
