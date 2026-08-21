import { test } from "node:test";
import assert from "node:assert";

import {
    classifyAchievementAvailability,
    ACHIEVEMENT_AVAILABILITY_LABELS
} from "../src/utils/planner/achievement/availability.js";

test("classifies a failed schema fetch as 'schema-unavailable', even if hasAchievements/playerDataStatus look otherwise fine", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "unavailable", hasAchievements: true, playerDataStatus: "available", hasPlanner: true }),
        "schema-unavailable"
    );

});

test("classifies a successful schema fetch with zero achievements as 'no-achievements'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: false }),
        "no-achievements"
    );

});

test("a confirmed-zero schema takes priority over a missing planner - never reads as 'planner-unavailable'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: false, hasPlanner: false }),
        "no-achievements"
    );

});

test("classifies Steam having achievements but unavailable player data as 'player-data-unavailable'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: true, playerDataStatus: "unavailable" }),
        "player-data-unavailable"
    );

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: true, playerDataStatus: "transient" }),
        "player-data-unavailable"
    );

});

test("classifies Steam having achievements, real player data, but no curated planner as 'planner-unavailable'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: true, playerDataStatus: "available", hasPlanner: false }),
        "planner-unavailable"
    );

});

test("a null/omitted playerDataStatus (never fetched, e.g. the catalog listing) does not trigger 'player-data-unavailable'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: true, playerDataStatus: null, hasPlanner: false }),
        "planner-unavailable"
    );

});

test("classifies the fully-normal case (achievements, player data, curated planner) as 'planner-available'", () => {

    assert.strictEqual(
        classifyAchievementAvailability({ schemaStatus: "available", hasAchievements: true, playerDataStatus: "available", hasPlanner: true }),
        "planner-available"
    );

});

test("defaults to the fully-normal path when called with no arguments at all", () => {

    assert.strictEqual(classifyAchievementAvailability(), "no-achievements");

});

test("every non-normal state maps to one of the 3 documented display strings; 'planner-available' maps to null (nothing to show)", () => {

    assert.strictEqual(ACHIEVEMENT_AVAILABILITY_LABELS["no-achievements"], "No Steam achievements");
    assert.strictEqual(ACHIEVEMENT_AVAILABILITY_LABELS["schema-unavailable"], "Steam achievement data unavailable");
    assert.strictEqual(ACHIEVEMENT_AVAILABILITY_LABELS["player-data-unavailable"], "Steam achievement data unavailable");
    assert.strictEqual(ACHIEVEMENT_AVAILABILITY_LABELS["planner-unavailable"], "Planner not available yet");
    assert.strictEqual(ACHIEVEMENT_AVAILABILITY_LABELS["planner-available"], null);

});
