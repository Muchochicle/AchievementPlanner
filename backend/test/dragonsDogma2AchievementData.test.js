import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragons-dogma-2.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2054970 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dragons-dogma-2");

test("getPlannerData('dragons-dogma-2') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragons-dogma-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Dragon's Dogma 2 achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Dragon's Dogma 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Dragon's Dogma 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Badge of Honor", "Acquired a pawn badge."],
        ["A House? In This Economy?", "Purchased a dwelling of your own."],
        ["A Pawn of Many Talents", "Taught your pawn a specialization."],
        ["Across the Border", "Passed through the gate at the border."],
        ["Affinity and Beyond", "Raised a person's affinity to the maximum."],
        ["An Eye for an Eye", "Petrified a medusa."],
        ["An In-Tents Adventure", "Went camping."],
        ["Are We There Yet?", "Board the phantom oxcart."],
        ["Arisen", "Regained your memories of receiving the Arisen's charge."],
        ["Arrows and Incantations", "Changed your vocation to magick archer."],
        ["Back Where It All Began", "Returned to Agamen Volcanic Island."],
        ["Before Dawn Breaks", "Defeated the headless horseman."],
        ["Closure", "Experienced the end of the cycle. (Not available in Casual Mode)"],
        ["Cyclops Abridged", "Crossed a cyclopean bridge."],
        ["Dragon Forged", "Strengthened a weapon in wyrmfire."],
        ["Dragon's Dogma", "Obtained Dragon's Dogma."],
        ["Dragon's Dogma 2", "At the end of the game, ride the dragon and use the Empowered Godsbane Blade on the orange heart at its neck to enter the Unmoored World (the true path)."],
        ["Duo Destinies", "Changed your vocation to mystic spearhand."],
        ["First Taste of Freedom", "Escaped the bonds of slavery."],
        ["Full Marks", "Found a solution to every conundrum posed by the goddess of riddles."],
        ["Getting a Head", "Acquired a preserved medusa head."],
        ["Gigantus, I Hardly Knew Ye", "Defeated the gigantus in a short span of time."],
        ["Harpy Joyride", "Summoned a harpy, grabbed hold, and took flight."],
        ["Hope You Brought a Lantern", "Reached Drabnir's Grotto."],
        ["I, Talos", "In the Unmoored World, approach the Gigantus statue north of the Volcanic Island Camp to reactivate it."],
        ["I'm In", "Pass through the border gate by illicit means rather than the checkpoint."],
        ["Jack of All Trades, Master of...All Trades", "Changed your vocation to warfarer."],
        ["Just a Stone's Throw Away", "Used a Ferrystone."],
        ["Master of the Maisters", "Acquired every maister's teaching."],
        ["Myrmecoleon Delights", "Entered the rose chateau."],
        ["Nobles' Night Out", "Attended a palace masquerade in formal raiment."],
        ["Off with Its Head!", "Decapitated a medusa."],
        ["One Speed Only", "Boarded an oxcart."],
        ["Peace", "Became Sovran of Vernworth."],
        ["Plenty Arisen to Go Round", "Raise your affinity with multiple NPCs so they compete for the right to live with you in your dwelling."],
        ["Quit Playing Dead", "Revived two pawns simultaneously."],
        ["Reaper's Scorn", "Accomplished a miracle for several people all at once."],
        ["Roost of the Dragon", "Reached Dragonsbreath Tower."],
        ["Seat of the Proxy", "Arrived in Vernworth."],
        ["The Barbecue-Maister", "Grilled every type of meat during the night and day."],
        ["The Collector", "Collected 80 Seeker's Tokens."],
        ["The Guardian", "After earning 'The Hero', help evacuate the residents of Vernworth, Sacred Arbor and Bakbattahl to safety in the Unmoored World."],
        ["The Hero", "In the Unmoored World, complete all four trials within four in-game days."],
        ["The Philanthropist", "Earned the affections of 50 people."],
        ["The Regriffining", "Took flight on griffin wing a second time."],
        ["The Savior", "Used a Wakestone to restore the dead to life."],
        ["The Specialist", "Reached the maximum rank in a vocation."],
        ["The Tourist", "Discovered 50 dungeons."],
        ["This'll Cure What Ails Ye", "Soaked in the hot spring."],
        ["Thought I'd Lost You", "Restored the dead to life at a morgue or charnel house."],
        ["To the Victor Go the Spoils", "Reclaimed your items from the scavenger who stole them from you."],
        ["Trickster of the Trade", "Changed your vocation to trickster."],
        ["Versatile", "Changed your vocation."],
        ["Wish upon the Rift", "Set a pawn quest."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
