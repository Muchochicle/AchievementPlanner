import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/jurassic-world-evolution-2.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1244460 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("jurassic-world-evolution-2");

test("getPlannerData('jurassic-world-evolution-2') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for jurassic-world-evolution-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Jurassic World Evolution 2 achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Jurassic World Evolution 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Jurassic World Evolution 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Done", "Complete Challenge 4 (Any difficulty)"],
        ["As Light as a Feather", "Keep a vehicle airborne for five seconds."],
        ["Blue is alive!", "Complete Return to Isla Nublar (Chaos Theory)"],
        ["Brave New World", "Complete the first Story Location"],
        ["Breakthrough Genetics", "Complete the Biosyn Dominion Campaign"],
        ["Cabot Finch's dream", "Reach 5 stars on all Malta Campaign islands"],
        ["Challenge Your Limits", "Complete Challenge 4 (Jurassic difficulty)"],
        ["Clever Girl", "Tranquilise a dinosaur with the Intelligent trait"],
        ["Count Backwards from 5, 4, 3...", "Manually Tranquillise a Dinosaur or reptile"],
        ["Dinosaur whisperer", "Rehabilitate 5 dinosaurs with Psychological Trauma"],
        ["Do-you-think-he-saurus?", "Complete California Challenge"],
        ["Down in the Laboratory", "Complete a Research Task"],
        ["Engineer 1st Class", "Reach Engineering level 10."],
        ["Entered a New Era", "Complete the fifth Story Location"],
        ["Flapped", "Release a Pteranodon."],
        ["Glad That's Over", "Complete Challenge 5 (Any difficulty)"],
        ["Good Aim", "Manually Tranquillise an escaped Flying Reptile"],
        ["Good Job", "Complete Challenge 2 (Any difficulty)"],
        ["Head 'em up, move 'em out", "Wrangle 30 dinosaurs at once"],
        ["Hold Onto Your Butts", "Complete Jurassic Park (Chaos Theory)"],
        ["I Can See Everything", "Complete 100% of the Jurassic World Database."],
        ["I'm a Doctor", "Manually cure a Dinosaur or reptile of a disease"],
        ["Insurance Claim", "Destroy a ranger vehicle by driving into it."],
        ["Jurassic Showdown", "Release the following dinosaurs on a single map: Raptor, T. rex, Indominus Rex"],
        ["Life Finds a Way", "Release a dinosaur"],
        ["Not Making the Same Mistakes Again", "Complete Jurassic Park: San Diego (Chaos Theory)"],
        ["On the Road to Success", "Have at least 2000 guests in a park"],
        ["One More for the Sticker Book", "Release at least one of every dinosaur genus in the game"],
        ["Open Paddock 9!", "Complete Jurassic World (Chaos Theory)\t"],
        ["Oregon Out", "Complete the fourth Story Location"],
        ["Pennsylvania Done", "Complete the third Story Location\t"],
        ["PHD in the Field", "Reach Science level 10."],
        ["Pleasure doing business with you", "Buy a dinosaur from the Dinosaur Exchange"],
        ["Prehistoric Perfection", "Complete a dinosaur's genome to 100%."],
        ["Quite the Challenge", "Complete Challenge 1 (Any difficulty)"],
        ["Scram!", "Chase away a Rustler"],
        ["So Many Teeth", "Release a Tyrannosaurus rex."],
        ["Starting a Collection", "Complete 50% of the Jurassic World Database."],
        ["That Wasn't Luck", "Hit a dinosaur or reptile with a tranquiliser dart from a distance of at least 125m"],
        ["That, that was a Challenge", "Complete Challenge 1 (Jurassic difficulty)"],
        ["That'll do", "Wrangle a goat with the transport team."],
        ["That's a lot of Dinosaurs", "House at least 50 live dinosaurs on a single map"],
        ["That's No Tadpole", "Release a Mosasaurus."],
        ["This is a Modern Prehistoric Marvel", "Bioengineer either of the following Hybrids: Indominus Rex, Indoraptor"],
        ["This One is Special", "Release a genetically modified dinosaur (excluding cosmetics)"],
        ["Veterinary Wonder", "Reach Welfare level 10."],
        ["Was That Tough?", "Complete Challenge 3 (Jurassic difficulty)"],
        ["Washington Complete", "Complete the second Story Location"],
        ["What do we Have Here?", "Manually Scan a Dinosaur or reptile"],
        ["Where's the Phone?", "Complete Isla Sorna: Site B (Chaos Theory)"],
        ["You Call That a Challenge?", "Complete Challenge 5 (Jurassic difficulty)"],
        ["You can't engineer loyalty", "Reach max trust with Authorities and Underground"],
        ["You Did That?", "Complete Challenge 3 (Any difficulty)"],
        ["You've Done Well", "Complete Challenge 2 (Jurassic difficulty)"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
