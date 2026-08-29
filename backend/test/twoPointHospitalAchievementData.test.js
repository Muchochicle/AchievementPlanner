import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/two-point-hospital.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 535930 (fetched through this app's own services/steamApi.js).
// 54 of 61 ship a real, official Steam description, quoted
// verbatim below. The 7 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's wiki
// plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("two-point-hospital");

test("getPlannerData('two-point-hospital') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for two-point-hospital");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Two Point Hospital achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Two Point Hospital achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 officially-described Two Point Hospital achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_MONOBROW_SHOT",
        "ACHIEVEMENT_MONOBROW_SHOT_LARGE",
        "ACHIEVEMENT_EXPLOSION_INJURY",
        "ACHIEVEMENT_RESEARCH_CHEESY_GUBBINS",
        "ACHIEVEMENT_LEVEL_5_DELUX_SUITE",
        "ACHIEVEMENT_TOP_REVIEW_YETI",
        "ACHIEVEMENT_CURING_SPREE",
    ]);

    assert.strictEqual(hiddenApinames.size, 7, "sanity check - Two Point Hospital has 7 hidden achievements");

    const officialAchievements = [
        ["Always Be Curing", "Run 50 Marketing Campaigns"],
        ["Animation & Sanitation", "Activate every Robo-Janitor prototype in Chasm 24"],
        ["Arts & Plaster Casts", "Earn 1 Star at each hospital in Culture Shock"],
        ["Bells & Whistles", "Conduct 25 Machine Upgrades"],
        ["Besterizer", "Send 100 cured patients through the Yesterizer in Clockwise-above-Thyme"],
        ["Busman's Holiday", "Earn 1 Star at each hospital on Pebberley Island"],
        ["Character Development", "Train Roderick Cushion to Level 5 at Plywood Studios"],
        ["County-Wide", "Earn 15 Gold Stars"],
        ["Cut Above", "Train a World-Class Surgeon"],
        ["Days of Suture Past", "Earn 1 Star at each hospital in A Stitch In Time"],
        ["De-Light Saving Time", "Cure a patient with Lightheadedness, Beheadedness, Hotheadedness, and Byteheadedness in Clockwise-above-Thyme"],
        ["Diversified Portaloo", "Have at least one of each type of ambulance fully upgraded in the same hospital."],
        ["Double Digits", "Have a Level 10 Hospital"],
        ["Double Double", "Have a Level 20 Hospital"],
        ["Dr Know", "Train a World-Class Researcher"],
        ["Environmentally Friendliest", "Receive the highest possible Eco Rating"],
        ["First Catch Your Plant", "Cure a patient in the Herb Garden"],
        ["Give a Man a Hospital...", "Cure 1 Patient"],
        ["Good VIBErations", "Achieve a high VIBE rating at Fitzpocket Academy"],
        ["Greener Grass", "Maximise your Green Energy capacity in Windsock"],
        ["High Altitude Health Service", "Earn 1 Star at each hospital in the Pointy Mountains"],
        ["I. See. You.", "Capture 100 Ghosts"],
        ["I'd Like To Thank My Mother", "Win every award in a single hospital"],
        ["Icebreaker", "Complete Superbug Project \"Hair Removal\""],
        ["Intensive Car Unit", "Earn 1 Star at each hospital in Speedy Recovery"],
        ["Inter-Countinental", "Earn 30 Gold Stars"],
        ["It's a Wind-up", "Collect 20 patients in one trip with a Pantomobile."],
        ["JUMBO", "Reach $50,000,000 Organisation Value"],
        ["Jung at Heart", "Train a World-Class Psychiatrist"],
        ["Kissed by a Nurse", "Cure a patient with Frogborne"],
        ["Life, the Universe and Everything", "Complete Wave 42 on Topless Mountain"],
        ["Peer-Reviewed", "Complete a Multiplayer Challenge"],
        ["Pointy Mountain G.O.A.T", "Earn 45 Gold Stars"],
        ["Rose Amongst The Pigeons", "Expose 50 Alien Infiltrators"],
        ["Serial Collaborator", "Complete 50 Research Nodes"],
        ["Sick-in-the-Mud", "Complete Wave 18 at Mudbury Festival"],
        ["Stealthily Healthily", "Earn 1 Star at each hospital in Close Encounters"],
        ["Strength in Numbers", "Complete Superbug Project \"Learning Machine Learning\""],
        ["Swiss Cheese Hospital", "Cure 100 patients from time portals in a single year"],
        ["Symbiosis", "Unlock every plot in Overgrowth"],
        ["Teach a Man to Hospital...", "Cure 1000 Patients"],
        ["The (Fifth) New Gold Standard", "Earn 90 Gold Stars"],
        ["The (Fourth) New Gold Standard", "Earn 81 Gold Stars"],
        ["The (Second) New Gold Standard", "Earn 63 Gold Stars"],
        ["The (Seventh) New Gold Standard", "Earn 108 Gold Stars"],
        ["The (Sixth) New Gold Standard", "Earn 99 Gold Stars"],
        ["The (Third) New Gold Standard", "Earn 72 Gold Stars"],
        ["The New Gold Standard", "Earn 54 Gold Stars"],
        ["Two Point Bounty", "Earn 10,000 Kudosh"],
        ["Vote Windsock", "Earn 1 Star at each hospital in Off The Grid"],
        ["Well-Informed", "Complete 50 Research Projects"],
        ["World 1", "Complete R.E.M.I. X versions of Hogsport, Lower Bullocks & Flottering"],
        ["World 2", "Complete R.E.M.I. X versions of Mitton University, Tumble & Flemington"],
        ["You Got All The Best Lines", "Reach the top of every league table at once for 3 months"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 7 hidden Two Point Hospital achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_MONOBROW_SHOT", "Low Brow"],
        ["ACHIEVEMENT_MONOBROW_SHOT_LARGE", "High Brow"],
        ["ACHIEVEMENT_EXPLOSION_INJURY", "Generating Business"],
        ["ACHIEVEMENT_RESEARCH_CHEESY_GUBBINS", "Now Even Cheesier"],
        ["ACHIEVEMENT_LEVEL_5_DELUX_SUITE", "De-Lux Suite"],
        ["ACHIEVEMENT_TOP_REVIEW_YETI", "Furry Good Review"],
        ["ACHIEVEMENT_CURING_SPREE", "Curing Spree"],
    ];

    assert.strictEqual(names.length, 7, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
