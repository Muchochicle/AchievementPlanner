import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/human-fall-flat.json - 151 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 477160 (fetched through this app's own services/steamApi.js).
// 149 of 151 ship a real, official Steam description, quoted
// verbatim below. The 2 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("human-fall-flat");

test("getPlannerData('human-fall-flat') returns real planner data with 151 curated achievements", () => {

    assert.ok(game, "expected real planner data for human-fall-flat");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 151);

});

test("every Human: Fall Flat achievement has a unique id from 1 to 151 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 151 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 151);
    assert.strictEqual(new Set(apinames).size, 151);

});

test("every Human: Fall Flat achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 149 officially-described Human: Fall Flat achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Achievement1134",
        "Achievement1144",
    ]);

    assert.strictEqual(hiddenApinames.size, 2, "sanity check - Human: Fall Flat has 2 hidden achievements");

    const officialAchievements = [
        ["A call for aid", "Light the beacons in \"Port\""],
        ["A fjord-midable adventure", "Complete \"Viking\""],
        ["A Leisurely Stroll", "Complete \"Hike\""],
        ["Adventurer", "Travel 25km"],
        ["After Hours", "Complete the first half of “Factory” without turning any lights on"],
        ["AH, EO, EO, EO, EO, OOOOO!", "Use the rope to go above the abyss in the level \"Mountain\""],
        ["Amped!", "Attach all electrical cables in 35 seconds or less in \"Thermal\""],
        ["Avalanche", "Complete \"Ice\""],
        ["Bah, Humbug!", "Shoot the Christmas angel off the tree top in \"Christmas\""],
        ["Barrel of laughs", "Complete \"Port\""],
        ["Beacon", "Light up the lighthouse in \"Water\""],
        ["Bedwetter", "Wet the bed in Lumber"],
        ["Bellhop", "Ring the bell in \"Steampunk Party\""],
        ["Bird's eye view", "Climb to the top of the tree with the birds nest in “Aztec”"],
        ["Birdie", "Using ONLY the golf club, putt the ball in 3 strokes or less"],
        ["Bogey (1 Over Par)", "Take the alternate route above the cave"],
        ["Breathing exercise", "In \"Water\", get out of the water in 100ms to avoid drowning"],
        ["Brute Force", "Complete \"Demolition\""],
        ["Buckshot", "Destroy the wall by firing all 5 cannon balls at once in \"Museum\""],
        ["Bullseye", "Hit all targets without missing a single shot"],
        ["Candy Rush", "Zip line down from the mountain in \"Christmas\" using a candy cane"],
        ["Cast it into the fire", "Throw an orb into the lava"],
        ["Cheaters never prosper", "Destroy the cheat sheet rune in \"Viking\""],
        ["Choo Choo!", "Complete \"Train\""],
        ["Climber", "Climb 100m"],
        ["Clockwork", "Pass the pendulum obstacle course in 60 seconds in “Aztec”"],
        ["Convertible ride", "Ride 50m in a dumpster"],
        ["Cove-r up!", "Go above the cave in \"Underwater\""],
        ["Cu later", "Complete \"Copper World\""],
        ["Currently Attractive", "Complete \"Red Rock\""],
        ["Deck the Halls", "Land in the snow fort in \"Christmas\" on a snowboard"],
        ["Delivery boy", "Deliver 10 pieces of coal to the main island in \"Power Plant\""],
        ["Dodgeball", "Avoid all of the rolling balls in \"Candyland\""],
        ["Don’t blame it on the sunshine", "Turn on the jukebox in \"Red Rock\""],
        ["Don't Get a Splinter!", "Complete \"Carry\""],
        ["Electricity 101", "Short-circuit the wires in \"Power Plant\""],
        ["Exclusive Tour", "Complete \"Museum\""],
        ["Explorer of the Deep", "Complete \"Underwater\""],
        ["Eye Spy", "Find the three hidden eye symbols in \"Museum\""],
        ["Feet First", "Complete \"Water\" diving feet-first"],
        ["Foot in the door", "Find a shorter route for moving the batteries in \"Tower\""],
        ["For whom the bell tolls", "Ring the castle bell in \"Castle\""],
        ["Fortune Tree", "Collect the Golden Sycees from the fortune tree"],
        ["Fry Me to the Moon", "Hold on to the EXIT lid after you flick the switch in \"Dark\""],
        ["Full steam ahead", "Complete \"Steampunk Party\""],
        ["Get Dizzy", "Ride 3 complete revolutions of the big wheel in \"Steam\""],
        ["Go with the flow", "Reach the island on the river in \"Viking\""],
        ["Half-baked puzzle", "Find the cake in \"Test Chamber\""],
        ["Head First", "Complete \"Water\" diving head-first"],
        ["Heavy lifting", "Carry objects for a total of 1000m"],
        ["Hitchhiker", "Ride one of the vehicles for 10 seconds"],
        ["Hole in One", "Complete \"Golf\""],
        ["Hook, Line and Jumper", "Enter the compound in \"Thermal\" without passing through the main gate"],
        ["Hope that wasn't important", "Recycle the cube blueprints in \"Test Chamber\""],
        ["How to get Fired!", "Throw one of each item in the final room into the fire in “Factory”"],
        ["Human Thawed Flat", "Free the cardboard cutout in \"Hike\""],
        ["Improvised Ammo", "Launch yourself with the catapult in \"Castle\""],
        ["Improvised Exploration Device", "Use the spring boards to get across the chasm in \"Underwater\""],
        ["It's Alive!", "Complete \"Dark\""],
        ["It's stuck", "Jam a door and go through it in \"Carry\""],
        ["Just walked in", "Complete \"Tower\""],
        ["KABOOM!", "Complete “Laboratory”"],
        ["Laojun’s Furnace", "Craft 3 different magical item in the golden furnace"],
        ["Laser Accurate", "Avoid all security lasers in \"Museum\""],
        ["Leap of Fail", "Complete \"Mansion\""],
        ["Learn to swim", "Drown 10 times"],
        ["Let it rain", "Respawn 100 times"],
        ["Let off some steam", "Find and turn the hidden valves in \"Steampunk Party\""],
        ["Lights out", "Throw the lanterns off the map"],
        ["Loose change", "Throw all four hidden coins off the level in \"Copper World\""],
        ["Lucky Carp", "Walk through the gates of the heavenly palace"],
        ["Mind the gap!", "Take a big shortcut in the level \"Mansion\""],
        ["Mulligan", "Drive the golf cart off the edge of the level"],
        ["My treasure", "Collect all gems into a pile in \"Mountain\""],
        ["Need to vent", "Go through all the ventilation shafts in \"Test Chamber\""],
        ["No escape", "Fall and respawn once"],
        ["No Ice Ice Baby", "Complete the seesaw puzzle in \"Ice\" without using an ice cube"],
        ["Olympic Grandeur", "In \"Dockyard\", use the chains to swing directly to the window"],
        ["On Thin Ice", "Don't let the ice block melt"],
        ["Out of the orbinary", "Go fishing in \"Tower\""],
        ["Overachiever", "Reach the exit door whilst holding an orb in the launch pad room"],
        ["Party Animal", "Start the party in \"Steampunk Party\""],
        ["Pay Day", "Complete \"Thermal\" while holding a gold bar"],
        ["Perfectionist", "Align a flipped bench with a wall"],
        ["Petrolhead", "Use any of the ground vehicles to travel 1km"],
        ["Pigeon Simulator", "Stand on the head of the statue in the intro"],
        ["Pipe dream", "Use the sewer to escape the junkyard on \"Redrock\""],
        ["Planks? No Thanks!", "Complete \"Dark\" without moving any planks that are barring doors"],
        ["Practice makes perfect", "Hit all dummies with a sword in \"Viking\""],
        ["Prepared for winter", "Roll the barrel inside the cellar in \"Hike\""],
        ["Pretty fly for a cacti", "Place the hat on the cactus in \"Red Rock\""],
        ["Primal", "Break 4 walls without using any gadgets in \"Demolition\""],
        ["Public service", "Place 5 pieces of debris in a dumpster"],
        ["Radio Silence", "Throw all four radios off the level in “Factory”"],
        ["Reverse gear", "Enter the dock with the ship backwards in \"Water\""],
        ["Rollin'", "Walk on the rolling ball to bypass a puzzle in “Aztec”"],
        ["Route Canal", "Avoid hitting any donuts in chocolate river in \"Candyland\""],
        ["Row, row, row your boat", "Use the row boat to get to the cargo ship in \"Water\""],
        ["Safety first", "Use two hooks when crossing the chasm in Lumber"],
        ["Sail away!", "Use any of the boats to travel 1km"],
        ["Seas the day", "Reach the hidden boat in \"Dockyard\""],
        ["Shattered Dreams", "Smash all the glass in \"Dockyard\""],
        ["Ship it", "Complete \"Dockyard\""],
        ["Silent hours (Noisy neighbours)", "Get rid of the speaker set in \"Mountain\""],
        ["Small fish, big pond", "Complete \"Miniature\""],
        ["Smooth moves", "Parkour fluidly from the alley to the blacksmith in \"Castle\" without touching the ground."],
        ["Speed Skating", "Complete three laps around the glacier in 60 seconds in \"Hike\""],
        ["Speedrun ", "Complete the game start-to-end in one run"],
        ["Sports Fan", "Complete \"City\" level"],
        ["Spotless clean", "Get rid of the ash in \"Miniature\""],
        ["Spring cleaning", "Clear out the room directly after the zipline in \"Port\""],
        ["Square peg in a round hole", "Attempt to use an improvised battery in \"Copper World\""],
        ["Stay Puft", "Get a marshmallow from the tree in \"Candyland\""],
        ["Storm the Gate!", "Complete \"Castle\""],
        ["Subpar parking job", "Find the speed boat in \"Underwater\""],
        ["Surfer", "Don't get wet while surfing down the mountain in \"Water\""],
        ["Surprise! (Avalanche!)", "Unleash the boulder gate in \"Demolition\""],
        ["Sweet Dreams", "Complete \"Candyland\""],
        ["Temper Tantrum", "Knock all 3 rag dolls off the level"],
        ["Test Complete", "Complete \"Test Chamber\""],
        ["The End", "Complete \"Aztec\""],
        ["The End?", "Complete \"Power Plant\""],
        ["The floor is lava", "Starting from the bag of soil, reach the top of the crate without touching the red tiles in \"Miniature\""],
        ["The Foreman", "Complete \"Factory\""],
        ["The Great Outdoors", "Complete Lumber"],
        ["Thief", "Steal the battery from the statue in \"Power Plant\""],
        ["Tick Tock", "Climb the Clock Tower in 40 seconds in \"Dark\""],
        ["Time saver", "Use the pipe to cross the lava in \"Tower\""],
        ["Tip-Top Ten Pin", "Complete all 4 bowling lanes"],
        ["To beach their own", "Reach the hidden island in \"Port\""],
        ["Toasty", "Light the marshmallows over the bonfire"],
        ["Top Shelf", "Reach the highest platform above the power drill in \"Miniature\" "],
        ["Top the Hat", "Stand atop the large snowman's hat in \"Christmas\""],
        ["Tourist", "Travel 1km"],
        ["Tower", "Stack all 4 boxes in the level \"Carry\""],
        ["Trampoline", "Jump 1000 times"],
        ["Traveler", "Travel 10km"],
        ["Tricky", "Complete the slope jump in \"Ice\" with 2 snowboards strapped to your feet"],
        ["Under Pressure", "Complete \"Steam\""],
        ["Unlimited Power!", "Form an independent laser loop in \"Copper World\""],
        ["Walk the Plank", "Reach the big wheel in \"Steam\" without using the crane controls"],
        ["What Goes Up", "Complete \"Mountain\""],
        ["Will it fry?", "Feed an appliance with power from 3 batteries in \"Power Plant\""],
        ["Wrapped Up", "Complete \"Thermal\""],
        ["Wrecking Crew", "Destroy the statue"],
        ["Wrong direction", "Use the window on your left instead of smashing the wall in \"Demolition\""],
        ["Wrong Turn", "Complete \"Forest\""],
        ["Zipline", "Zipline from the church tower in \"Castle\""],
        ["Zodiac", "Unite all 12 Zodiac heads"],
    ];

    assert.strictEqual(officialAchievements.length, 149, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 2 hidden Human: Fall Flat achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement1134", "Whoops!"],
        ["Achievement1144", "Taking the Piste"],
    ];

    assert.strictEqual(names.length, 2, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
