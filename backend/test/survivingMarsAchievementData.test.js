import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/surviving-mars.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 464920 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 80 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("surviving-mars");

test("getPlannerData('surviving-mars') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for surviving-mars");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Surviving Mars achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Surviving Mars achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Surviving Mars achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Better Planet", "Have an Earthsick Colonist who decided to stay on Mars"],
        ["A Shooting Star", "Shoot down a meteorite"],
        ["Alpha Scientist", "Build the Omega Telescope"],
        ["Aren't they Cute?", "Play as SpaceY and control 200 Drones before Sol 100"],
        ["Assisted Self-Improvement", "Treat 50 Colonists in a Sanatorium"],
        ["Asteroid Hopping", "Have a single Asteroid Lander visit 10 asteroids before returning to Mars"],
        ["Because we Care", "Play as Europe and research 5 Breakthrough Technologies before Sol 100"],
        ["Bubble Wrap", "Build a Dome"],
        ["Building a Better Future", "Play as Blue Sun Corporation and export 500 units of Rare Metals to Earth before Sol 100"],
        ["Bushido", "Play as Japan and train 200 specialists before Sol 100"],
        ["Can't Stop the Signal", "Scan all Sectors"],
        ["Capital Achievement", "Construct a Capital City"],
        ["Cast in Concrete", "Build the Excavator"],
        ["Creator of Worlds ", "Max all Terraforming Parameters"],
        ["Cubism", "Complete The Power of Three Mystery"],
        ["Detox", "Endure the Toxic Rains"],
        ["Do Androids Dream of Electric Sheep?", "Have a Dome populated by at least 50 Biorobot Colonists"],
        ["Dream of a Green Mars", "Reach 200 Vegans"],
        ["Europa Universalis", "Play as Europe and reach daily production of 10,000 Research before Sol 100"],
        ["Fear my Botany Powers!", "Plant a tree"],
        ["For the Benefit of All", "Play as USA and research all technologies in the Engineering tech-tree before Sol 100"],
        ["Gagarin's Legacy", "Play as Russia and extract 10000 resource units from Deposits before Sol 100"],
        ["Gold Rush", "Play as Brazil and convert 2000 Waste Rock to Rare Metals before Sol 100"],
        ["Good News, Everyone!", "Pass the Colony Approval stage"],
        ["How Much is a Googol?", "Reach $100,000 M"],
        ["Immortality of a Kind", "Have a citizen that was reconstructed by Project Phoenix"],
        ["In the High Tower", "Build a Dome Spire"],
        ["In the Service of Humankind", "Play as India and have 5 Domes before Sol 100"],
        ["Interesting Times", "Play as China and reach a population of 200 before Sol 100"],
        ["Into the Unknown", "Go game over as your last colonists leaves Mars behind to take a trip into the great unknown"],
        ["It's Always Sunny on Mars", "Build the Artificial Sun"],
        ["Job’s done", "Fully develop all buried wonders in the underground, before sol 100"],
        ["Marsopolis", "Reach 100 Colonists living in a single Dome"],
        ["Marvin the Martian", "First child on Mars"],
        ["Mirror, mirror...", "Complete the Spheres mystery"],
        ["Mission Success", "Successfully return from an asteroid"],
        ["Move this Mountain!", "Have a RC Dozer complete a landscaping project"],
        ["Multiplanet Species", "Reach 1000 Colonists"],
        ["Multitasking", "Visit 3 asteroids simultaneously"],
        ["Mysteries of Mars", "Fully develop a buried wonder to benefit your colony"],
        ["No Pain, No Gain", "Play as Russia and have 500 colonists on challenge rating 500% or higher"],
        ["Now we need ducks", "Have a lake with liquid water"],
        ["Open the Pod Bay Doors", "Build a Shuttle Hub"],
        ["Perfect Moment", "Have a Colonist with all four stats at maximum"],
        ["Posthuman", "Have a Colonist with 2 Rare traits"],
        ["Red Button", "Nuke the Polar Caps"],
        ["S.P.E.C.I.A.L.", "Have a Colonist with 5 Perks"],
        ["Seeds of Life", "Harvest Seeds on Mars"],
        ["Sentience 2.0", "Complete the Artificial Intelligence mystery"],
        ["Skies of Blue", "Create blue skies by terraforming"],
        ["Snow Globe", "Build the Geoscape Dome"],
        ["Space Capitalism", "Play as Blue Sun Corporation and produce $100,000 M Funding before Sol 100"],
        ["Space Communism", "Reach 250 Colonists"],
        ["Space Dwarves", "All your colonists live underground (at least 200 colonists)"],
        ["Space Explorer", "Complete all techs in the recon & expansion tech tree"],
        ["Space Invaders", "Complete the Dredgers mystery"],
        ["Space Shopping", "Play as USA and have a Geoscape Dome with a Megamall before Sol 100"],
        ["Spacey Food", "Harvest Food on Mars"],
        ["Swan Song", "Complete the Inner Light mystery"],
        ["Tao", "Play as China and have Tai-chi Gardens in 10 Domes before Sol 100"],
        ["Tears of Joy", "Have water rain on Mars"],
        ["The Beanstalk", "Build the Space Elevator"],
        ["The Boundaries of Knowledge", "Research all non-Breakthrough Technologies"],
        ["The Final Frontier", "Deep scan all Sectors"],
        ["The Garden of Eden", "Play as Church of the new Ark and have 250 Colonists at 70+ Comfort before Sol 100"],
        ["The New Ark", "Play as the Church of the New Ark and have 100 people born on Mars before Sol 100"],
        ["The New Wonders of the World", "Construct 5 different Wonders in a single playthrough"],
        ["The Pace of Progress", "Play as SpaceY and complete all Sponsor Goals on challenge rating 500% or higher"],
        ["The Perfect Run", "Retrieve all resources from an asteroid & leave nothing behind"],
        ["The Positronic Man", "Have a Biorobot Colonist"],
        ["The Rabbit Hole", "Build the Mohole Mine"],
        ["The Watney Challenge", "Pass the Colony Approval stage with a single Founder"],
        ["There and Back Again", "Refuel a Rocket"],
        ["Waste Not, Want Not", "Play as India and convert 3000 Waste Rock to useful materials before Sol 100"],
        ["What is Real?", "Build Project Morpheus"],
        ["Where No Man has Gone Before", "Analyze an Anomaly"],
        ["Whistleblower", "Complete the Marsgate mystery"],
        ["Will they hold?", "Prevent 100 Cave-ins in total from Underground Marsquakes"],
        ["Wubba, lubba, dub, dub!", "Build 1000 buildings"],
        ["You can't take the Sky from Me!", "Land 50 Rockets on Mars in a single playthrough"],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
