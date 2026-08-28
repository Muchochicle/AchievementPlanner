import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/satisfactory.json - 44 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 526870 (fetched through this app's own services/steamApi.js) -
// 40 of 44 ship a real, official Steam description. The four hidden
// achievements (Are you sure that's coffee?, No refunds, Wait, you can
// pet it?, That was a close one) are described publicly nowhere; their
// descriptions here are curatorial, cross-checked against The Gamer and
// Destructoid guides. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field.
const satisfactory = getPlannerData("satisfactory");

test("getPlannerData('satisfactory') returns real planner data with 44 curated achievements", () => {

    assert.ok(satisfactory, "expected real planner data for satisfactory");
    assert.ok(Array.isArray(satisfactory.achievements));
    assert.strictEqual(satisfactory.achievements.length, 44);

});

test("every Satisfactory achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = satisfactory.achievements.map(a => a.id);
    const apinames = satisfactory.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Satisfactory achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of satisfactory.achievements) {

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

test("every one of the 40 officially-described Satisfactory achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 4 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["A Concrete Example", "Build 5000 Foundations."],
        ["Commencing Project Assembly", "Build the Space Elevator."],
        ["Bigger. Better. FICSIT.", "Build your first Manufacturer."],
        ["...Satisfactory brought it back", "Complete all MAM research trees."],
        ["Curiosity killed the cat...", "Complete a MAM research tree."],
        ["Mediocre pioneering", "Complete Phase 1 of the Space Elevator."],
        ["Adequate pioneering", "Complete Phase 2 of the Space Elevator."],
        ["Pretty good pioneering", "Complete Phase 3 of the Space Elevator."],
        ["Efficient pioneering", "Complete Phase 4 of the Space Elevator."],
        ["Saved the Day, probably", "Complete Phase 5 of the Space Elevator and finish the game."],
        ["Do you want a medal?", "Complete the Onboarding process."],
        ["The floor is lava", "Avoid touching the ground for 30 minutes."],
        ["New fear unlocked", "Fix blown fuse."],
        ["Caught them all", "Gather all three Power Slug types."],
        ["Data driven", "Gather 100 Hard Drives from Crash Sites."],
        ["Wheeeee!", "Bounce on a Space Giraffe Tick Penguin Thing."],
        ["Establish dominance", "Hit a creature with a vehicle."],
        ["Spaghetti master", "Build 5 km of Conveyor Belts."],
        ["Pipe dream", "Build 5 km of Pipelines."],
        ["Railroad tycoon", "Build 5 km of Railway."],
        ["Thank you for the music", "Find and gather a Boombox tape in the world."],
        ["Look both ways next time", "Get knocked over by a vehicle."],
        ["Varied diet", "Gather all three types of edible flora."],
        ["I'm sure these play a Critical Role", "Gather a Mercer Sphere."],
        ["Oddly familiar", "Gather a Somersloop."],
        ["Consume", "Gather 150 Mercer Spheres."],
        ["My skin feels itchy all of a sudden...", "Gather 50 Somersloops."],
        ["Rock and stone!", "Place down a Portable Miner."],
        ["Now where to spend it...", "Print out your first Coupon."],
        ["Do you need that?", "Buy the Golden Nut Statue from the AWESOME Shop."],
        ["Peak gameplay", "Reach the highest cliff in the world."],
        ["All aboard!", "Set up a train schedule."],
        ["Pioneer's best friend", "Tame a Lizard Doggo."],
        ["Too fast, Too factory", "Move faster than 140 km/h."],
        ["Master Chef", "Unlock your first alternate recipe."],
        ["Yoink!", "Gather a Power Slug."],
        ["What a thrill", "Reach the maximum world height."],
        ["Efficiency first", "Unlock all Milestones."],
        ["Heal this, nature!", "Destroy 1000 foliage."],
        ["Let's see what's out there", "Visit each starting area biome once."]
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "DRINK_COFFEE",
        "ENTERED_CYBERWAGON",
        "PETTED_MANTA",
        "SURVIVED_FALL_1HP"
    ]);

    assert.strictEqual(hiddenApinames.size, 4, "sanity check - Satisfactory has 4 hidden achievements");

    const dataPairs = satisfactory.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the four hidden Satisfactory achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["DRINK_COFFEE", "Are you sure that's coffee?"],
        ["ENTERED_CYBERWAGON", "No refunds"],
        ["PETTED_MANTA", "Wait, you can pet it?"],
        ["SURVIVED_FALL_1HP", "That was a close one"]
    ];

    assert.strictEqual(names.length, 4, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = satisfactory.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
