import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trials-fusion.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 245490 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trials-fusion");

test("getPlannerData('trials-fusion') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for trials-fusion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Trials Fusion achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Trials Fusion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Trials Fusion achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["-1", "Beat level -1 in 'The Magnetic 10' challenge on 'Junkyard Funk'"],
        ["A Wolf in Wolf's clothing", "Purchased the complete set of a fully upgraded outfit"],
        ["Abyssal Interference", "Complete the 'Awaken the Kraken' challenge on 'Deluge'"],
        ["All Your Game Are Belong to Us", "Acquire the Trials Trophy by beating the game"],
        ["Anger Management", "Reach the 5th Circle in the 'Circles of Hell' skill game"],
        ["Attack of the Clone", "Complete the 'Testing Ground' challenge whilst wearing the full level 3 BioTech outfit"],
        ["Brawlin' Squirrels", "Find all squirrels on the RedLynx vs All-Stars event"],
        ["Bright-Eyed & Bushy-Tailed", "Found all of the squirrels hidden within the tracks"],
        ["Curiosity Killed the Cat", "Clear the 'Hunter of Secrets' challenge on 'Deeper Underground'"],
        ["Dumbstruck", "Complete the 'Lightning Rod' challenge on 'Static Discharge'"],
        ["Elemental Triumph", "Pass the thunder storm in \"The Long Haul\" whilst on fire!"],
        ["Full Throttle III", "Complete all 'Full Throttle' Track Challenges"],
        ["Global Sizzling.", "Destroy all the ecosystems in \"Eden\" in a single run"],
        ["Gum Chewin' Squirrels", "Find all 3 squirrels on Welcome To The Abyss"],
        ["I Like What You've Done There", "Post a time on another player's created track"],
        ["Infernal Squirrels", "Find all 3 squirrels on Fire in the Deep"],
        ["Insights into the Past", "Finish all of the hidden Ancient Warp Zones"],
        ["Is There Anything You Can't Do?", "Completed every Track Challenge in the game"],
        ["Leaving a Fine Lookin' Fossil", "Hold a 'Proud Hero' pose to your demise, dressed in an Excavator outfit"],
        ["Lee Woz 'Ere", "Perform a zero fault run in Neo Bradford whilst wearing the Neo Hooligan outfit"],
        ["Let Sleeping Octopus Lie", "Pass all tracks on Welcome To The Abyss"],
        ["Level Up", "Reach floor 10 on 'The Tower'"],
        ["Lobster and Caviar", "Pass all tracks on Empire of the Sky"],
        ["Log Lady", "Find all of Commander Zudina's audio logs"],
        ["Lynx vs Machine", "Complete the 'Shutdown' challenge whilst wearing the new DarkLynx helmet"],
        ["Quadratic", "0-fault Fusion Factory with the Quad Bike"],
        ["Quantum Squirrels", "Find all 3 squirrels on Fault One Zero"],
        ["Rabbit One Zero", "Pass all the Trials tracks on Fault One Zero with the rabbit"],
        ["RedLynx to the Sword", "Beat all of the RedLynx times on Redlynx vs All-Stars"],
        ["Rhetoric & Romance", "Go on all 5 dates with SynDI on After the Incident"],
        ["Scrooging Around", "Earn 24 Gold medals."],
        ["Silver Spoon Squirrels", "Find all 3 squirrels on Empire of the Sky"],
        ["Speedcuber", "Reach the 40th side of the cube on Cubicle Space"],
        ["Squirrel Scavengers", "Find all 3 squirrels on Riders of the Rustlands"],
        ["Super Trials", "Gatecrash someone's apartment on 'Winter Getaway' and complete their 'Super Trials' arcade game"],
        ["Swallowed Whole", "Complete the 'Wormfood' challenge on 'Gone to Waste'"],
        ["That's Not Right!", "Get run over by your own bike"],
        ["The Bike is Your Hula Hoop", "Score 20,000 points from one jump on an FMX track"],
        ["The End?", "Pass all tracks on After the Incident"],
        ["The Fifth Key", "Use the Track Editor to find and pick up the 'Fifth Key' in the Fusion world"],
        ["The Full Cavity Treatment", "Complete all 3 Track Challenges on any track"],
        ["The Right Blueprints", "Pass all tracks on the Awesome Adventure event"],
        ["The Rising Phoenix", "Pass all tracks on Fire in the Deep"],
        ["Three Birds, One Stone", "Complete all 3 challenges on 'Stratosphere' in a single run, with less than 15 faults"],
        ["Through The Fires of Hell", "Completed Inferno IV"],
        ["Ticket Out of Here", "Complete the 'Slumdog Billionaire' challenge on 'Rags to Riches'"],
        ["Top Dog of the Turf", "Pass all tracks on Riders of the Rustlands"],
        ["Underdog", "Beat a score of 40,000 on 'Final Frontier' whilst riding the Roach with the Frontier BodyKit"],
        ["Unyielding III", "Complete all 'Unyeilding' Track Challenges"],
        ["Virtual Virtuoso", "Pass all tracks on Fault One Zero"],
        ["Wax On, Wax Off", "Completed training level 2"],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
