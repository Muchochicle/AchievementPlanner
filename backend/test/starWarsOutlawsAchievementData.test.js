import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-outlaws.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2842040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("star-wars-outlaws");

test("getPlannerData('star-wars-outlaws') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-outlaws");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Star Wars Outlaws achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Star Wars Outlaws achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Star Wars Outlaws achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A moon in your hand", "Retrieve the map to Okala V"],
        ["Adventure and excitement", "Discover all planet areas"],
        ["Against all odds", "Win your first fixed fathier race"],
        ["All in", "Find the Morenia"],
        ["All out", "Escape the Morenia"],
        ["Best of the best", "Complete all main quests on Akiva"],
        ["Calling in some favors", "Destroy the Revelator"],
        ["Cloak and dagger", "Reach maximum reputation with Crimson Dawn"],
        ["Cut-throat politics", "Reach maximum reputation with the Pyke Syndicate"],
        ["Don't get cocky", "Defeat 5 enemies with Adrenaline Rush on the speeder simultaneously"],
        ["Easy pickings", "Pickpocket a customer in a cantina on each planet"],
        ["Experience outranks everything", "Complete all Expert quests"],
        ["Eye on the score", "Complete all main quests in Canto Bight"],
        ["First Voyage", "Complete a contract with a Refractor"],
        ["Galactic gourmet", "Sample all galactic street food"],
        ["Galaxy drift", "Perform a 30 second powerslide drift"],
        ["Get rhythm", "Pick 20 locks with the data spike"],
        ["Give me the good stuff", "Buy an item from a merchant's VIP stock"],
        ["Good listener", "Listen to the longest sob story in the galaxy"],
        ["Got you something", "Collect all Nix treasures"],
        ["Honest work", "Complete 40 contracts"],
        ["How rude!", "Blind 30 enemies with Nix attacks"],
        ["I'll bet you have", "Defeat 20 enemies distracted by Fast-Talk"],
        ["Into darkness", "Destroy 10 enemy ships inside the Kijimi nebula"],
        ["Into the main frame", "Slice 10 advanced terminals"],
        ["It wasn't me", "Bribe an Imperial Officer to clear Wanted Level 5"],
        ["It's mine now", "Acquire the scoundrel gear set"],
        ["Like a bantha", "Perform a perfect landing with the speeder"],
        ["Made it somehow", "Acquire a blaster, a starship, and a speeder"],
        ["Making friends", "Escape from Jabba's palace"],
        ["Might want to buckle up", "Fly into space in a fully upgraded Trailblazer"],
        ["Never tell me the odds", "Defeat an enemy ship without dealing the finishing blow with lasers or missiles"],
        ["No match for a good blaster", "Fully upgrade a blaster module configuration"],
        ["No such thing as luck", "Cheat and win a Sabacc game against Lando"],
        ["Now you see me, now you don't", "Disable an alarm using a security terminal while the alarm is active"],
        ["Old school cool", "Acquire the Disruptor gear set"],
        ["One job at a time", "Complete all main quests on Kijimi"],
        ["Pirate's Honor", "Steal a Rokana Raider ship"],
        ["Price of Loyalty", "Get the Khepi scepter hilt"],
        ["Punching up", "Defeat each syndicate's capital ship without taking hull damage"],
        ["Rare friends", "Complete all main quests on Tatooine"],
        ["Right back at you", "Defeat 20 enemies using items fetched by Nix"],
        ["Shoot first", "Defeat 6 enemies simultaneously using Adrenaline Rush"],
        ["Slice like you", "Slice 20 terminals"],
        ["Sometimes I amaze even myself", "Defeat an enemy ship after doing a loop maneuver"],
        ["Spiked", "Liberate the original Super Viper Droid"],
        ["Stay on target", "Complete your first Intel chain"],
        ["Stranger Tides", "Escape from the Khepi Tomb"],
        ["Take your own advice", "Save Aksali Noll"],
        ["The Director", "Learn Sliro's secret"],
        ["The heavier they fall", "Defeat a Raider to clear Wanted status"],
        ["The Queen's word is law", "Reach maximum reputation with the Ashiga Clan"],
        ["There is no try", "Get a high score in an arcade game"],
        ["They live up to the name", "Clear Wanted status by completing a death trooper confrontation event"],
        ["Think I had a choice?", "Reach the lowest possible reputation with a faction"],
        ["Tip the scales", "Complete all main quests on Toshara"],
        ["Together", "Discover the secrets of the Khepi"],
        ["What you see is what you get", "Reach maximum reputation with the Hutt Cartel"],
        ["Wordsmith", "Help compose a pirate's poem"],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
