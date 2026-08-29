import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvels-midnight-suns.json - 72 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 368260 (fetched through this app's own services/steamApi.js).
// 67 of 72 ship a real, official Steam description, quoted
// verbatim below. The 5 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers/endings kept
// spoiler-light), and secret-boss feats cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("marvels-midnight-suns");

test("getPlannerData('marvels-midnight-suns') returns real planner data with 72 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvels-midnight-suns");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 72);

});

test("every Marvel's Midnight Suns achievement has a unique id from 1 to 72 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 72 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 72);
    assert.strictEqual(new Set(apinames).size, 72);

});

test("every Marvel's Midnight Suns achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 officially-described Marvel's Midnight Suns achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "CODA_ACHIEVEMENT_001",
        "CODA_ACHIEVEMENT_003",
        "CODA_ACHIEVEMENT_006",
        "CODA_ACHIEVEMENT_010",
        "CODA_ACHIEVEMENT_013",
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - Marvel's Midnight Suns has 5 hidden achievements");

    const officialAchievements = [
        ["A Coven Restored", "Solve the mystery of Hiram Shaw's church."],
        ["A Growing Darkness", "Reach maximum Dark Balance."],
        ["A Mother's Gift", "Solve the mystery of Lilith's Garden."],
        ["A Shining Light", "Reach maximum Light Balance."],
        ["And Look Good Doing It", "Spend 1500 Gloss on cosmetic options for the Hunter."],
        ["Are You On Superlink?", "Gain a Friendship Level with any hero."],
        ["Atum's Call", "Acquire the \"Reveal\" Word of Power."],
        ["Back in Time for Lunch", "Complete a general mission in 2 turns or less."],
        ["Beyond Biochemistry", "Complete all Morbius Research."],
        ["Big Game Hunter", "Obtain all other Midnight Suns Achievements"],
        ["Big Guns", "Use 3 different Legendary hero abilities in a single mission."],
        ["Blessings of the Goddess", "Complete Storm's Midnight Sun Challenge mission."],
        ["Blood Storm", "Complete all Storm story missions. "],
        ["Bond of Blood", "Complete Morbius' Midnight Sun Challenge mission."],
        ["Cape of Many Colors", "Apply a Suit palette to every Hero in a single campaign."],
        ["Challenge Accepted", "Complete 10 Mission Challenges."],
        ["Collateral Damage", "KO 4 enemies with a single environmental."],
        ["Comeback King", "Complete all Venom research."],
        ["Did We Just Become Best Friends?", "Reach the maximum Friendship Level with any hero."],
        ["Dr. Deadpool, MD, PhD, JD, RN, CPA", "Complete all Deadpool research."],
        ["Dracula's Tomb", "Complete the Dracula Tomb's mission."],
        ["Dream Team", "KO a villain with a Hero Combo."],
        ["Elemental Teachings", "Complete all Storm Research."],
        ["Elemental, My Dear Agatha", "Solve the mystery of Agatha's Altar."],
        ["Extracurricular Activities", "Attend all Abbey Club meetings in a single campaign."],
        ["Fire Burn and Cauldron Bubble", "Use Agatha's Cauldron to complete a Recipe."],
        ["Friendship is Magic", "Reach the maximum Team Friendship Level in the Abbey."],
        ["Fully Armed", "Acquire every Hunter ability."],
        ["Fully Operational", "Build every Abbey upgrade in a single campaign."],
        ["Hemophobic", "Complete a Vampyre mission without any hero gaining Bleed from a Vampyre Bite."],
        ["Hunter the Explorer", "Find every Haven on the Abbey Grounds in a single campaign."],
        ["Hyppus' Aid", "Acquire the \"Purify\" Word of Power."],
        ["It's All Connected", "Modify 5 general missions using the Whisper Web."],
        ["Kitchen Sink", "Use 5 environmentals in a single turn."],
        ["KKRRAKATHOOM", "Spend 10 Heroism with a single ability."],
        ["Lethal Protector", "Complete Venom's Midnight Sun Challenge mission."],
        ["Living Vampire", "Use Morbius' \"Bloodlust\" on the first turn, then retain Bloodlust for the rest of the mission."],
        ["Make a House a Home", "Purchase 10 different upgrades for the Hunter's Quarters."],
        ["Might Need Pockets", "Craft a combat item at the Item Bench."],
        ["Needful Things", "Use 25 combat items."],
        ["Never Been Satisfied", "Completely spend and then refill Venom's Ravenous meter in a single encounter."],
        ["Not a Scratch", "Complete a general mission where no hero takes Health damage."],
        ["Patience, Young One", "Play 3 Storm abilities with activated Next Turn bonuses on the same turn. "],
        ["Pinball Wizard", "KO multiple enemies with a single Knockback 25 times."],
        ["Quantity is Quality", "Use 8 hero abilities in a single turn."],
        ["Redemption", "Complete all Venom story missions."],
        ["Set's Favor", "Acquire the \"Break\" Word of Power."],
        ["Shocking Development", "Stun 4 enemies with Storm abilities in a single turn. "],
        ["Some Minor Adjustments", "Apply mods to 10 different hero abilities."],
        ["Speed Kills", "KO a villain with a Quick ability."],
        ["Spread the Pain", "Complete a Daily Sparring session with every hero."],
        ["T.H.R.E.A.T. Eliminated", "Survive 3 turns in the THREAT Room with every hero."],
        ["That Special Feeling", "Complete Deadpool's Midnight Sun Challenge mission."],
        ["The Best Girl", "Pet Charlie 15 days in a row."],
        ["The Good, the Bad, and the Undead", "Complete all Deadpool story missions."],
        ["The Hunger", "Complete all Morbius story missions."],
        ["The Keymaster", "Open 25 Arcane Chests."],
        ["Time to Make the Chimichangas!", "Reach maximum En Fuego with Deadpool."],
        ["Trading Up", "Redraw 75 cards."],
        ["Unrequited Love", "Pet Ebony on 4 different days."],
        ["We Have Ways", "Interrogate 5 enemies."],
        ["What's In This, Anyway?", "Apply stat modifications to 5 different heroes using the Laboratory."],
        ["Wilhelm Scream", "Knockback 2 enemies into Drops in a single turn."],
        ["Wisdom of the Woods", "Collect 10 of every Reagent."],
        ["With a Box of Scraps", "Craft a hero ability card in the Forge."],
        ["You Absolute Legend", "Complete a Midnight Sun Challenge in the Forge."],
        ["You Have the Lead", "Complete a general mission led by every hero."],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 5 hidden Marvel's Midnight Suns achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["CODA_ACHIEVEMENT_001", "Lilith Returns"],
        ["CODA_ACHIEVEMENT_003", "Oshtur's Gift"],
        ["CODA_ACHIEVEMENT_006", "A Light Extinguished"],
        ["CODA_ACHIEVEMENT_010", "Big Mad"],
        ["CODA_ACHIEVEMENT_013", "Family is Forever"],
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
