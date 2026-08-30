import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metal-gear-rising-revengeance.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 235460 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("metal-gear-rising-revengeance");

test("getPlannerData('metal-gear-rising-revengeance') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for metal-gear-rising-revengeance");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Metal Gear Rising: Revengeance achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Metal Gear Rising: Revengeance achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Metal Gear Rising: Revengeance achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Big Fan of Lefties", "Acquire all enemy officers' left arms."],
        ["A Lover, Not a Fighter", "Successfully complete 10 No Kill battles during story mode."],
        ["A Walk in the Dark", "Complete the abandoned railroad sequence in File R-03 without using AR Mode."],
        ["Amateur Radio Operator", "Listen to most of the codec conversations."],
        ["Analysis Complete", "Unlock every VR Mission."],
        ["Anti-Cyborg Sentiment", "Destroy a total of 100 Cyborgs during story mode."],
        ["Assassin Behind Closed Doors", "Successfully complete 30 Ninja Kills during story mode."],
        ["Assault with a Deadly Weapon", "Dismember three enemies during Blade Mode with a single attack."],
        ["Chosen by History", "Defeat Samuel without taking any damage on Hard difficulty or above."],
        ["Data Mining", "Acquire all data storage devices."],
        ["Datsu Right", "Successfully complete 50 Zandatsus during story mode."],
        ["Demilitarized Zone", "Destroy a total of 100 Heavily Armed Cyborgs during story mode."],
        ["DL-Story-01: Status - Closed", "Complete DL-Story-01: Brazilian Wind"],
        ["DL-Story-02: Status - Closed", "Complete DL-Story-02: Blade Wolf."],
        ["DL-VR Master", "Complete every DL-VR Mission."],
        ["Draw, Pardner!", "Defeat 100 enemies in DL-Story-01: Brazilian Wind's Story Mode using Quick Draw."],
        ["Dwarf Raiden", "Incapacitate all the soldiers in File R-02 using a Dwarf Gekko."],
        ["Extinction Level Event", "Destroy a total of 10 Raptors during story mode."],
        ["Fangs of Fury", "Complete DL-Story-02: Blade Wolf on Revengeance difficulty in one hour or less. "],
        ["File R-00: Status - Closed", "Complete File R-00: Guard Duty."],
        ["File R-01: Status - Closed", "Complete File R-01: Coup d'État."],
        ["File R-02: Status - Closed", "Complete File R-02: Research Facility."],
        ["File R-03: Status - Closed", "Complete File R-03: Mile High."],
        ["File R-04: Status - Closed", "Complete File R-04: Hostile Takeover."],
        ["File R-05: Status - Closed", "Complete File R-05: Escape From Denver."],
        ["File R-06: Status - Closed", "Complete File R-06: Badlands Showdown."],
        ["File R-07: Status - Closed", "Complete File R-07: Assassination Attempt."],
        ["Genius Destroyer", "Defeat Monsoon without taking any damage on Hard difficulty or above."],
        ["Great Escape", "Complete File R-05 in less than 7 minutes."],
        ["Hero of the Metaverse", "Set the highest score on every DL-VR Mission."],
        ["Herpetophobia", "Destroy a total of 10 Gekkos during story mode."],
        ["Humanitarian Assistance", "Rescue all the civilians."],
        ["Ich Liebe Kapitalismus!", "Acquire all customization items."],
        ["Jetstream", "Complete DL-Story-01: Brazilian Wind on Revengeance difficulty in one hour or less. "],
        ["Jumping the Shark", "Destroy a total of 10 Hammerheads during story mode."],
        ["Looking Out for the Little Guys", "Destroy a total of 30 Dwarf Gekkos during story mode."],
        ["Love at First Sight", "While remotely operating a Dwarf Gekko in story mode, find and communicate with all Dwarf Gekkos."],
        ["Menace to Society", "Cut off the finial at the top of the pagoda in File R-04."],
        ["No Flash Photography!", "Destroy all the Gun Cameras in File R-01."],
        ["Peekaboo", "Discover all of the soldiers hidden in cardboard boxes."],
        ["Pond Scum", "Destroy a total of 5 Vodomjerka during story mode."],
        ["Predatory Instincts", "Defeat 30 enemies in DL-Story-02: Blade Wolf via Hunt Kills."],
        ["Prodigal Murderer", "Defeat Mistral without taking any damage on Hard difficulty or above."],
        ["Rip 'Em Apart!", "In story mode, kill 100 enemies by cutting them."],
        ["Silverback", "Destroy a total of 10 Mastiffs during story mode."],
        ["Slider Strike", "Destroy a total of 10 Sliders during story mode."],
        ["Steel Tail", "Cut off Metal Gear RAY's metal tail during File R-00."],
        ["Stormbringer", "Complete story mode on Revengeance difficulty with all S rankings."],
        ["Surprise Attack!", "Arrive at the objective in File R-07 without being spotted."],
        ["Tearing Away the Disguise", "Destroy all of the humanoid Dwarf Gekkos during story mode."],
        ["The Bigger They Are...", "Destroy a total of 100 Custom Cyborgs during story mode."],
        ["The Politics of Silencing Foes", "Defeat Sen. Armstrong without taking any damage on Hard difficulty or above."],
        ["Truly Human", "Defeat Sundowner without taking any damage on Hard difficulty or above."],
        ["Virtually Flawless", "Set the highest score on every VR Mission."],
        ["VR Master", "Complete every VR Mission."],
        ["What Doesn't Kill You...", "In story mode, successfully parry 10 attacks in a row in one minute or less."],
        ["Wolf Hunter", "Destroy a total of 10 Fenrirs during story mode."],
        ["Wolf's Pride", "Defeat Khamsin without taking any damage on Hard difficulty or above."],
        ["You Don't Run from Chance", "Successfully complete 50 Executions during story mode."],
        ["You're Hired", "Defeat Sen. Armstrong without taking any damage on Hard difficulty or above."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
