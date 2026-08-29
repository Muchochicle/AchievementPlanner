import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/oxygen-not-included.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 457140 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 51 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("oxygen-not-included");

test("getPlannerData('oxygen-not-included') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for oxygen-not-included");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Oxygen Not Included achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Oxygen Not Included achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Oxygen Not Included achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["And Nowhere to Go", "Have 8 Duplicants wear non-default clothing simultaneously."],
        ["Art Underground", "Have a Duplicant with the Masterworks skill paint a Masterpiece quality painting."],
        ["Better Together", "Recruit the only freediver Duplicant in the universe to your colony."],
        ["Blast Line of Defense", "Escape extinction by fulfilling the requirements of the Defense Imperative."],
        ["Carnivore", "Have Duplicants eat 400,000kcal of critter meat before the 100th cycle."],
        ["Cluster Conquest", "Land dupes or rovers on all worlds in the cluster."],
        ["Cosmic Archaeology", "Uncover the past to secure your future by fulfilling the requirements of the Exploration Imperative."],
        ["Critter Whisperer", "Find and tame one of every critter species in the world. Default morphs only."],
        ["Data Driven", "Produce a Data Bank using a Data Miner operating at maximum efficiency."],
        ["Down the Hatch", "Produce 10 t of refined metal by ranching Smooth Hatches."],
        ["Easy Livin'", "Have Auto Sweepers complete more deliveries to machines than Duplicants over 5 cycles."],
        ["First Teleport of Call", "Teleport a Duplicant and defrost a Friend on another world."],
        ["Full Steam Ahead", "Secure your colony's industrial future by fulfilling the Power Imperative."],
        ["Get a Room", "Build at least one of each of the following rooms in a single colony: A Nature Reserve, a Hospital, a Recreation Room, a Great Hall, a Bedroom, a Washroom, a Greenhouse and a Stable."],
        ["Ghosts of Gravitas", "Recover a Database entry by inspecting facility ruins."],
        ["GMO A-OK", "Successfully analyze at least one seed of all mutatable plants."],
        ["Good Egg", "Hatch a new critter morph from an egg."],
        ["Home Sweet Home", "Establish your permanent home by fulfilling the requirements of the Colonize Imperative."],
        ["Honorary Doctorate", "Unlock every item in the Research Tree."],
        ["Immovable Object", "Block a meteor from hitting your base using a Bunker Door."],
        ["It's Not Raw", "Have a Duplicant eat any cooked meal prepared at an Electrical Grill or Gas Range."],
        ["Job Suitability", "For 10 cycles in a row, have every Duplicant in the colony complete at least one chore while wearing an Exosuit."],
        ["Locavore", "Have Duplicants consume 400,000kcal of food without planting any seeds in Planter Boxes, Farm Tiles, or Hydroponic Farms."],
        ["Mine the Gap", "Mine 1,000,000kg from space POIs."],
        ["Moovin' On Up", "Find and tame a Gassy Moo."],
        ["Morale High Ground", "Have all Duplicants in a rocket survive in space for 10 cycles in a row with a morale of 25 or higher."],
        ["Most Valuable Bionic", "Install 8 boosters in a single Bionic Duplicant."],
        ["No Place Like Clone", "Have at least 20 living Duplicants living in the colony at one time."],
        ["Not 0K, But Pretty Cool", "Reduce the temperature of a building to 6 Kelvin."],
        ["One Bed One Bath", "Have at least one bed and one toilet for each Duplicant in the colony."],
        ["One Year, to be Exact", "Reach cycle 365.25 with a single colony."],
        ["Outdoor Renovations", "Construct a building outside the initial starting biome."],
        ["Oxygen Not Occluded", "Distribute 1000kg of Oxygen using gas vents."],
        ["Pulling Back The Veil", "Reveal 80% of map by exploring outside the starting biome."],
        ["Radical Trip", "Have radbolts travel a cumulative 10 km."],
        ["Red Light, Green Light", "Automate a building using sensors or switches from the Automation tab in the Build Menu."],
        ["Royal Flush", "Replace all the Outhouses and Wash Basins in your colony with Lavatories and Sinks."],
        ["Slick", "Enter an oil biome for the first time."],
        ["Soft Launch", "Build a launchpad on a world without a teleporter."],
        ["Some Reservations", "Improve Duplicant Morale by designating 4 areas as Nature Reserves."],
        ["Space Race", "Launch your first rocket into space."],
        ["Super Sustainable", "Generate 240,000kJ of power without using coal, methane, petrol or wood generators."],
        ["Sweeter Than Honey", "Extract Uranium from a Beeta hive without getting stung."],
        ["That's Rad!", "Run a Research Reactor at full capacity for 5 cycles."],
        ["The Great Escape", "Ensure your colony's legacy by fulfilling the requirements of the Escape Imperative."],
        ["The Lab: Life Found A Way", "Survive 100 cycles after Demolior collides with your colony."],
        ["They Got Better", "Cure a sick Duplicant of disease."],
        ["To Pay the Bills", "Use a Duplicant's Skill Points to buy out an entire branch of the Skill Tree."],
        ["Totally Tubular", "Have Duplicants travel 10,000m by Transit Tube."],
        ["Tune Up For What?", "Perform 100 Tune Ups on power generators."],
        ["Turn of the Century", "Reach cycle 100 with at least one living Duplicant."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
