import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/peak.json - 64 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3527290 (fetched through this app's own services/steamApi.js).
// 1 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("peak");

test("getPlannerData('peak') returns real planner data with 64 curated achievements", () => {

    assert.ok(game, "expected real planner data for peak");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 64);

});

test("every PEAK achievement has a unique id from 1 to 64 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 64 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 64);
    assert.strictEqual(new Set(apinames).size, 64);

});

test("every PEAK achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 64 PEAK achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["24 Karat Badge", "Offer The Kiln a worthy sacrifice."],
        ["Advanced Mycology Badge", "Try all 5 types of Shroomberry in a single expedition."],
        ["Aeronautics Badge", "Achieve flight."],
        ["Alpinist Badge", "Climb past the ALPINE."],
        ["Animal Serenading Badge", "Play the bugle for a capybara."],
        ["Applied Esoterica Badge", "Resurrect a friend using unholy means."],
        ["Arborist Badge", "Reach the top of a really big tree."],
        ["Archery Badge", "Remove 10 arrows from yourself in a single expedition."],
        ["Astronomy Badge", "Look a little too closely at the blazing sun."],
        ["Balloon Badge", "Escape the island without taking fall damage."],
        ["Beachcomber Badge", "Climb past the SHORE."],
        ["Bellringer Badge", "Ring 5 Belltowers in the GLOOM in a single expedition."],
        ["Bing Bong Badge", "Help Bing Bong escape the island."],
        ["Bookworm Badge", "Read the Scoutmaster’s final journal entry."],
        ["Bouldering Badge", "Place 10 pitons."],
        ["Bundled Up Badge", "Climb past the ALPINE without ever having more than 20% Cold."],
        ["Calcium Intake Badge", "Block 100 total damage with the Fortified Milk."],
        ["Clutch Badge", "Resurrect 3 scouts in a single expedition."],
        ["Competitive Eating Badge", "Eat 3 Hot Dogs in 5 seconds or less."],
        ["Cooking Badge", "Cook 20 meals at campfires."],
        ["Cool Cucumber Badge", "Climb past the MESA without ever having more than 10% Heat."],
        ["Cryptogastronomy Badge", "Cook and eat a Mandrake."],
        ["Daredevil Badge", "Shoot across the MESA canyon in a Scout Cannon."],
        ["Disaster Response Badge", "Pull an unconscious friend 30m with the Rescue Claw."],
        ["Emergency Preparedness Badge", "Heal an unconscious friend with an item to save them from death."],
        ["Endurance Badge", "Climb 50m upwards without touching the ground."],
        ["Esoterica Badge", "Obtain a mystical item."],
        ["Exorcist Badge", "Burn up the Ghost."],
        ["First Aid Badge", "Heal your friends for 100 points of injury in a single expedition."],
        ["Foraging Badge", "Eat 5 different berries in a single expedition."],
        ["Forestry Badge", "Climb past the ROOTS."],
        ["Gourmand Badge", "Escape the island after cooking and eating a coconut half, a honeycomb, a yellow winterberry, and an egg."],
        ["Hang Gliding Badge", "Fly 100m with the Glider without touching the ground."],
        ["Happy Camper Badge", "Receive 5 Morale Boosts from campfires."],
        ["Hasty Badge", "Escape the island in under an hour."],
        ["High Altitude Badge", "Climb 5000m total."],
        ["Jester Badge", "Open 2 Clown Luggage in a single expedition."],
        ["Knot Tying Badge", "Place 100m of rope in a single expedition."],
        ["Last Resort Badge", "Heal over 75% damage at once by using the Ritual Dagger."],
        ["Leave No Trace Badge", "Escape the island without placing anything on the mountain."],
        ["Lone Wolf Badge", "Escape the island in a solo expedition."],
        ["Medieval History Badge", "Climb past THE CITADEL without being hit by any traps."],
        ["Megaentomology Badge", "Survive an Antlion attack."],
        ["Mentorship Badge", "Have a 1-on-1 with the Scoutmaster."],
        ["Mycoacrobatics Badge", "Bounce up 40m off a mushroom."],
        ["Mycology Badge", "Eat four different non-toxic mushrooms in a single expedition."],
        ["Naturalist Badge", "Escape the island without eating any packaged food."],
        ["Needlepoint Badge", "Have a lot of cactuses stuck to you."],
        ["Nomad Badge", "Climb past the MESA."],
        ["Participation Badge", "Have a friend escape the island without you."],
        ["Peak Badge", "Reach the PEAK."],
        ["Plunderer Badge", "Open 15 luggages in a single expedition."],
        ["Resourcefulness Badge", "Give in to your hunger."],
        ["Rule Zero Badge", "PEAK's secret-ending achievement. In a single expedition, collect all four Scout Gems across the biomes (Tenacity in SHORE, Initiative in ROOTS, Generosity in ALPINE, Ambition in GLOOM) and carry every one of them, without dropping any, all the way to THE PEAK. Bestow them on the Stone Scout to create Scout's Honor, commune with it, then climb down through NADIR and back up through the hidden gate to THE PEAK. Completing that sequence frees Scoutmaster Myers's soul and unlocks the badge."],
        ["Survivalist Badge", "Escape the island without ever losing consciousness."],
        ["Toxicology Badge", "Restore 200 total poison by using items."],
        ["Trailblazer Badge", "Climb past the TROPICS."],
        ["Tread Lightly Badge", "Climb past the ROOTS without ever having more than 25% spores."],
        ["Ultimate Badge", "Catch a Flying Disc from 100m away."],
        ["Undead Encounter Badge", "Cure yourself from a zombie bite."],
        ["Volcanology Badge", "Climb past the CALDERA."],
        ["Wanderer Badge", "Climb past the GLOOM."],
        ["Web Security Badge", "Escape a spider's web and survive."],
        ["Well Rested Badge", "Consume The Early Worm."],
    ];

    assert.strictEqual(officialAchievements.length, 64, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden PEAK achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Rule Zero Badge"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
