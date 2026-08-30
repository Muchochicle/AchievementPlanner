import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/jurassic-world-evolution.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 648350 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("jurassic-world-evolution");

test("getPlannerData('jurassic-world-evolution') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for jurassic-world-evolution");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Jurassic World Evolution achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Jurassic World Evolution achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Jurassic World Evolution achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A beautiful, but deadly addition", "Release a Dilophosaurus"],
        ["A kind of biological preserve", "Take a Photograph worth more than $100000"],
        ["A new home", "Complete challenge mode on Sanctuary in under 8.5 hours (hard difficulty or above)"],
        ["A super-predator", "Release a Spinosaurus"],
        ["Accept you are never actually in control", "Power slide with the Ranger Team's vehicle for 3 seconds (within a 5-second window)"],
        ["An aim not devoid of merit", "Complete All Missions: Entertainment"],
        ["Bigger. Louder. More Teeth.", "Reach maximum Entertainment Reputation on an island"],
        ["Clever girl", "Release a Velociraptor"],
        ["Clocked at 32 mph", "Reach 5 stars in Challenge mode in under 3 hours (medium difficulty or above)"],
        ["Creation is an act of sheer will", "Release at least one of every dinosaur genus in the game"],
        ["Executive treatment", "Eliminate all disease on Nublar North using a manually controlled Ranger Team"],
        ["Fast for a biped?", "Reach 5 stars in Challenge mode in under 4 hours (hard difficulty or above)"],
        ["Fill in the holes and complete the code", "Complete a genome to 100%"],
        ["Flocking this way", "Release a Gallimimus"],
        ["Follow the screams!", "Release a T. rex"],
        ["Get a clear shot", "Manually perform a headshot with the ACU helicopter"],
        ["Going to make a fortune with this place", "Unlock Isla Tacano"],
        ["Green thumb", "Reach 1500 paleobotany welfare bonus on a single island"],
        ["Hold on to your butts!", "Get 5 seconds of air time with the Ranger Team's vehicle (within a 20-second window)"],
        ["How did you do this?", "Achieve a 5-Star Island Rating on every island in Las Cinco Muertes"],
        ["I don't understand this Luddite attitude", "Reach maximum Science Reputation on an island"],
        ["I hate being right all the time", "Photograph a herbivore attacking visitors"],
        ["I read your book", "Unlock all InGen Database entries in the game"],
        ["I think we're back in business", "Manually repair a building with the Ranger Team"],
        ["I thought you failed your driver's test", "Manually drive a total distance of 25km in the Ranger Team's vehicle"],
        ["Instinct that we can program", "Reach maximum Security Reputation on an island"],
        ["Is this even possible?", "Release a Stegosaurus"],
        ["It can camouflage!", "Release an Indominus Rex with the Adaptive Camouflage Gene"],
        ["It's a birdcage", "Build an Aviary and fill it with Pteranodons"],
        ["It's all about control with you", "Add a task for an ACU or Ranger Team"],
        ["John Hammond's dream", "Reach 5 stars on Sanctuary"],
        ["Jurassic measures", "Reach 5 stars on Jurassic difficulty challenge mode"],
        ["Learning where she fits in the food chain", "Photograph an Indominus Rex fighting a T. rex"],
        ["Life finds a way", "Release a dinosaur"],
        ["Look how it eats!", "Photograph a T. rex hunting a Gallimimus"],
        ["Mommy's very angry", "Release a modified dinosaur that has over 150 Attack"],
        ["Must go faster", "Drive the Ranger Team's vehicle at top speed for 5 consecutive seconds"],
        ["My favorite when I was a kid", "Release a Triceratops"],
        ["Nobody move a muscle", "Manually tranquillize a dinosaur while it is running"],
        ["Not alone on this island", "Unlock Isla Muerta"],
        ["Nothing in Jurassic World is natural", "Release a genetically modified dinosaur"],
        ["Now you're John Hammond", "House at least 50 live dinosaurs on a single island"],
        ["OBJECTS IN MIRROR CLOSER THAN THEY APPEAR", "Have a manually controlled Jurassic Park Ranger Team survive for 3 minutes after a T. rex attack"],
        ["On this island there's no such thing as safe", "Unlock Isla Pena"],
        ["Ooh, aah, that's how it always starts", "Take a photograph of a Stegosaurus with a '97 Cosmetic Variant as it attacks a Ranger Team"],
        ["Ranger Danger", "Complete the 'Facility Recovery' mission without any dinosaur damage to Ranger Teams"],
        ["Ratings Master", "Get a dinosaur to reach 5000 or more rating"],
        ["Return to Jurassic Park", "Build a 5 star park on Isla Nublar during the 'Return to Jurassic Park' campaign"],
        ["Sharp focus", "Complete the photography contract on Nublar North"],
        ["Shoooot heeer!", "Tranquillize a dinosaur from a distance of at least 125m"],
        ["Shoot her!", "Manually tranquillize a dinosaur with the ACU helicopter"],
        ["Shoot her...?", "Subdue Dr. Wu's rampaging Spinoraptor"],
        ["Smarter than primates", "Photograph two Velociraptors socializing"],
        ["Spared no expense", "Unlock Isla Nublar"],
        ["Tenacious", "Manually medicate a diseased dinosaur with the Ranger Team"],
        ["Thank God for Site B", "Unlock Isla Sorna"],
        ["That's no dinosaur", "Release an Indominus rex"],
        ["The essence of chaos", "Reach 5 stars in challenge mode (any difficulty)"],
        ["The Next Step", "Complete all of Dr. Wu's missions"],
        ["This is very dangerous territory", "Photograph a Spinosaurus fighting a T. rex"],
        ["Using sophisticated techniques", "Complete All Missions: Science"],
        ["Veggiesaurus", "Release a Brachiosaurus"],
        ["War is a part of nature", "Manually tranquillize a dinosaur while it is fighting another dinosaur"],
        ["We're just used to being the cat", "Using Comfort Genes, create a dinosaur that is impossible to keep calm"],
        ["Whatever you study, you also change", "Take a Photograph worth more than $30000"],
        ["Where's the goat?", "Photograph a T. rex eating 'live bait'"],
        ["Who's hungry?", "Photograph a carnivore attacking a visitor"],
        ["Wounding tooth", "Photograph a Troodon as it poisons its victim"],
        ["You do plan to have dinosaurs, right?", "Construct a tour that can see at least 18 species in Jurassic Park Campaign or Challenge mode"],
        ["You got them eating out of your hand", "Complete All Missions: Security"],
        ["You think that kind of automation is easy?", "Add an upgrade to a building"],
        ["You'll never look at birds the same way!", "Complete challenge mode on Pena by only releasing carnivores (medium difficulty or above)"],
        ["You're the top minds", "Research an item"],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
