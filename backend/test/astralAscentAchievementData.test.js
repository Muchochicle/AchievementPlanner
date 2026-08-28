import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/astral-ascent.json - 89 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1280930 (fetched through this app's own services/steamApi.js) -
// 87 of 89 ship a real, official Steam description. The two hidden
// achievements (The Master, Defeat The Master) are described publicly
// nowhere; their apinames (zodiacs_defeat_ophiuchus,
// zodiacs_trueForm_ophiuchus) place them in the same defeat / "at
// Destiny Level 6+" pattern as the twelve visible Zodiac pairs, for the
// hidden thirteenth Zodiac, Ophiuchus. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const astralAscent = getPlannerData("astral-ascent");

test("getPlannerData('astral-ascent') returns real planner data with 89 curated achievements", () => {

    assert.ok(astralAscent, "expected real planner data for astral-ascent");
    assert.ok(Array.isArray(astralAscent.achievements));
    assert.strictEqual(astralAscent.achievements.length, 89);

});

test("every Astral Ascent achievement has a unique id from 1 to 89 and a unique apiname", () => {

    const ids = astralAscent.achievements.map(a => a.id);
    const apinames = astralAscent.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 89 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 89);
    assert.strictEqual(new Set(apinames).size, 89);

});

test("every Astral Ascent achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of astralAscent.achievements) {

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

test("every one of the 87 officially-described Astral Ascent achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 2 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Perseverance", "Start 30 escape attempts"],
        ["Scorching Heat", "Reach the Red Barrens"],
        ["Deep Water", "Reach the Coral Archipelago"],
        ["Magnetic Storm", "Reach the Crimson Highlands"],
        ["Almost out...", "Reach the Event Horizon"],
        ["Precious Belongings", "Upgrade a spell to level 10"],
        ["Optimal Affinity", "Equip 4 affinity gambits on a spell"],
        ["Astral Wish", "Equip an Astral Aura"],
        ["Astral Luck", "Equip an Astral Gambit"],
        ["Zodiac Strength", "Reach level 12"],
        ["Jackpot", "Buy all items from an Itinerant Peddler"],
        ["Impressed Zodiacs", "Succeed at a Zodiac Challenge"],
        ["Maximized Friendship", "Obtain 5 Echoes in a run"],
        ["Wealthy Prisoner", "Obtain 1000 Quartz in a run"],
        ["Galaxy Owner", "Use 200 Stars in a run"],
        ["Key Master", "Open 150 Key Chests"],
        ["Moon Testimony", "Equip a Zodiac Spell in The Moon Room"],
        ["Sun Testimony", "Change a Spell affinity in The Sun Room"],
        ["Sneaky Ally", "Meet Chamaeleon"],
        ["Guardian Angel", "Your Zodiac sign helps you 3 times"],
        ["Time for Oneself", "Trigger 12 dialogues on Benches"],
        ["Yalees Savior", "Save all Yalees from the Kingdom"],
        ["Multi-Classed", "8 stones of each type equipped simultaneously"],
        ["Lost Spirits", "Captured 5 Astral Spirits"],
        ["Celestial Support", "Summon a Zodiac to support you"],
        ["Slippery Hero", "Perfect 30 Fight Rooms"],
        ["A Ton of Damage", "Reach 1000 damage in one combo"],
        ["Practice makes perfect", "Use your Signature Spell 500 times"],
        ["Where it all started…", "Reach the Garden"],
        ["Smiley Face", "Unlock Zim-Zim"],
        ["Mysterious Face", "Unlock the Peddler"],
        ["Knightly Face", "Unlock Sire Bapy"],
        ["Stellar Face", "Unlock Barbecue"],
        ["Friendly Face", "Unlock Papa Yalee"],
        ["Stylized Face", "Unlock Oloon"],
        ["The Little Brother", "Unlock Octave"],
        ["The Gifted Artist", "Unlock Calie"],
        ["Plants Infused", "Unlock all Zim-Zim abilities"],
        ["From the Stars", "Unlock all Auras from Barbecue"],
        ["Arsenal", "Unlock all spells from the Peddler"],
        ["Synesthesia", "Unlock all Oloon colors"],
        ["Grand Library", "Collect all memory fragments for Papa Yalee"],
        ["Halfway Legend", "Complete 50% of Sire Bapy’s achievements"],
        ["Shhh…", "Find the hidden nest in the Garden"],
        ["Taurus", "Defeat Taurus"],
        ["Virgo", "Defeat Virgo"],
        ["Capricorn", "Defeat Capricorn"],
        ["Aries", "Defeat Aries"],
        ["Sagittarius", "Defeat Sagittarius"],
        ["Leo", "Defeat Leo"],
        ["Pisces", "Defeat Pisces"],
        ["Scorpio", "Defeat Scorpio"],
        ["Cancer", "Defeat Cancer"],
        ["Libra", "Defeat Libra"],
        ["Aquarius", "Defeat Aquarius"],
        ["Gemini", "Defeat Gemini"],
        ["Unleashed Taurus", "Defeat Taurus at Destiny Level 6+"],
        ["Unleashed Virgo", "Defeat Virgo at Destiny Level 6+"],
        ["Unleashed Capricorn", "Defeat Capricorn at Destiny Level 6+"],
        ["Unleashed Aries", "Defeat Aries at Destiny Level 6+"],
        ["Unleashed Sagittarius", "Defeat Sagittarius at Destiny Level 6+"],
        ["Unleashed Leo", "Defeat Leo at Destiny Level 6+"],
        ["Unleashed Pisces", "Defeat Pisces at Destiny Level 6+"],
        ["Unleashed Scorpio", "Defeat Scorpio at Destiny Level 6+"],
        ["Unleashed Cancer", "Defeat Cancer at Destiny Level 6+"],
        ["Unleashed Libra", "Defeat Libra at Destiny Level 6+"],
        ["Unleashed Aquarius", "Defeat Aquarius at Destiny Level 6+"],
        ["Unleashed Gemini", "Defeat Gemini at Destiny Level 6+"],
        ["Star Guardian Pegasus", "Defeat Pegasus"],
        ["Star Guardian Lupus", "Defeat Lupus"],
        ["Star Guardian Draco", "Defeat Draco"],
        ["Star Guardian Hydra", "Defeat Hydra"],
        ["Star Guardian Monoceros", "Defeat Monoceros"],
        ["Star Guardian Sculptor", "Defeat Sculptor"],
        ["Bane of the Star Guardians", "Defeat 30 Star Guardians"],
        ["Sova’s Secret Plan", "Unlock the Path of Destinies"],
        ["Bending Destiny", "Collect 100 Destiny Fragments"],
        ["Undecided Power", "Activate all abilities of the Void Catalyst at once"],
        ["Pushing Limits", "Upgrade a spell to level 15"],
        ["Beyond Horizon", "Succeed at an escape at Destiny Level 15+"],
        ["Making the Impossible", "Unlock Ayla’s ending"],
        ["The Silver Scout", "Unlock Kiran’s ending"],
        ["Escaping Destiny", "Unlock Octave’s ending"],
        ["Time for Prosperity", "Unlock Calie’s ending"],
        ["Star Guardian Bodyboulder", "Defeat Bodyboulder"],
        ["Star Guardian Praxis", "Defeat Praxis"],
        ["Star Guardian Tasmos", "Defeat Tasmos"]
    ];

    assert.strictEqual(officialAchievements.length, 87, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "zodiacs_defeat_ophiuchus",
        "zodiacs_trueForm_ophiuchus"
    ]);

    assert.strictEqual(hiddenApinames.size, 2, "sanity check - Astral Ascent has 2 hidden achievements");

    const dataPairs = astralAscent.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the two hidden Astral Ascent achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["zodiacs_defeat_ophiuchus", "The Master"],
        ["zodiacs_trueForm_ophiuchus", "Defeat The Master"]
    ];

    assert.strictEqual(names.length, 2, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = astralAscent.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
