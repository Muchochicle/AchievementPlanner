import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/red-faction-guerrilla-remastered.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 667720 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("red-faction-guerrilla-remastered");

test("getPlannerData('red-faction-guerrilla-remastered') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for red-faction-guerrilla-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Red Faction Guerrilla Re-Mars-tered achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Red Faction Guerrilla Re-Mars-tered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Red Faction Guerrilla Re-Mars-tered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Greater Purpose", "Complete Redemption."],
        ["Ares' Bloodlust", "Destroy the 4 Marauder War Totems."],
        ["Battle Scarred", "Earn 10,000 XP in Multiplayer."],
        ["Best Friends Forever", "Kill 100 EDF with the sledgehammer during the Campaign."],
        ["Bound By Blood", "Complete Rescue."],
        ["Broken Supply Line", "Destroy 250 EDF supply crates."],
        ["Can't Get Enough", "Play every mode on all maps in Wrecking Crew."],
        ["Check Your Map", "Finish a match on every map in Multiplayer."],
        ["Clean and Righteous!", "Destroy 5 High Importance targets."],
        ["Coming Down!", "Destroy 50 EDF owned buildings."],
        ["Coup D'etat", "Liberate Eos Sector."],
        ["Death From Above", "Liberate Dust Sector."],
        ["Deliverance Defender", "Complete Marauder Actions."],
        ["Detective", "Complete 8 hidden challenges in Multiplayer."],
        ["Disaster Area", "Destroy 1 billion credits worth of EDF property."],
        ["Doing Your Part", "Kill 10 enemies in a Matchmaking Match."],
        ["Don't Tread On Me", "Liberate Oasis Sector."],
        ["Doozer", "Reconstruct a Damage Control target."],
        ["Experimenter", "Complete 4 hidden challenges in Multiplayer."],
        ["Family Vengeance", "Complete Retribution."],
        ["Field Tested", "Earn 1,000 XP in Multiplayer."],
        ["Free Your Mind", "Destroy all instances of propaganda."],
        ["Freed Space", "Destroy 50 EDF flyers."],
        ["Freedom Fighter", "Complete 50 Guerrilla Actions."],
        ["Friendly Skies", "Liberate Badlands Sector."],
        ["Got Any Fingers Left?", "Beat all Pro times in Demolitions Master."],
        ["Grab Some Popcorn", "Enter Spectator mode and enjoy the show!"],
        ["Guerrilla", "Complete 25 Guerrilla Actions."],
        ["Insurgent", "Complete 5 Guerrilla Actions."],
        ["Jack of all Trades", "Score 10 kills while wearing each backpack."],
        ["Juggernaut", "Destroy a Siege target."],
        ["Just the Beginning", "Win a Matchmaking match."],
        ["Lost Memories", "Locate all missing radio tags."],
        ["Mad Genius", "Complete 16 hidden challenges in Multiplayer."],
        ["Martian Tea Party", "Complete 2 missions for the Red Faction."],
        ["Mobile Bombs", "Destroy 100 EDF vehicles."],
        ["One Man Army", "Complete 25 killing sprees during the Campaign."],
        ["Party Time", "Play all Wrecking Crew modes once."],
        ["Power to the People", "Raise the Morale of 3 sectors to 100%."],
        ["Purge the Valley", "Break the EDF Control of the Mariner Valley."],
        ["Red Dawn", "Liberate Mars."],
        ["Red Faction Guerrilla Re-Mars-tered", "Unlock all Achievements in Red Faction Guerrilla Re-Mars-tered"],
        ["Revolutionary", "Complete all Guerrilla Actions."],
        ["Spread the Word", "Liberate Parker Sector."],
        ["Start of Something Special", "Play 5 Matchmaking matches."],
        ["Structural Integrity", "Destroy all Medium and High Priority Targets in Mariner Valley."],
        ["Tank Buster", "Blow up 100 small hydrogen tanks."],
        ["The High and Mighty", "Kill a flying opponent using a remote charge stuck to them."],
        ["The Power of One", "Collect 75 Marauder Power Cells."],
        ["Tools of the Trade", "Score a kill with every weapon in Multiplayer."],
        ["Topher Would Be Proud", "Play 250 matchmaking games."],
        ["Try Anything Once", "Finish a match in every mode."],
        ["Tumbling Down", "Beat all Pro times in Mariner Valley Demo Masters and Transporters."],
        ["Warp Speed", "Beat all Transporter Pro times."],
        ["Welcoming Committee", "Complete the Tutorial mission."],
        ["Working the Land", "Mine all ore locations."],
        ["Wrecking Ball", "Score 25 million points worth of destruction in Wrecking Crew."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
