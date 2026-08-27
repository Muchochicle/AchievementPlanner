import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/darkest-dungeon.json - 126 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 262060 (fetched through this app's own services/steamApi.js) -
// 77 of 126 ship a real, official Steam description. The other
// 49 are hidden achievements Steam never describes publicly
// (confirmed via the same API call) - their descriptions here are
// curatorial, cross-checked against the official Darkest Dungeon wiki
// and independent Steam Community guides (see the guide's own sourcing
// comment for the handful with lower-confidence community consensus).
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const darkestDungeon = getPlannerData("darkest-dungeon");

test("getPlannerData('darkest-dungeon') returns real planner data with 126 curated achievements", () => {

    assert.ok(darkestDungeon, "expected real planner data for darkest-dungeon");
    assert.ok(Array.isArray(darkestDungeon.achievements));
    assert.strictEqual(darkestDungeon.achievements.length, 126);

});

test("every Darkest Dungeon achievement has a unique id from 1 to 126 and a unique apiname", () => {

    const ids = darkestDungeon.achievements.map(a => a.id);
    const apinames = darkestDungeon.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 126 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 126);
    assert.strictEqual(new Set(apinames).size, 126);

});

test("every Darkest Dungeon achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of darkestDungeon.achievements) {

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

test("every one of the 77 officially-described Darkest Dungeon achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 49 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Welcome home...", "Reach the Estate"],
        ["The first of many victories...", "Complete a quest"],
        ["Our victories are mounting...", "Complete 10 quests"],
        ["We are victorious, but at what cost...", "Complete 25 quests"],
        ["Discretion, my old friend...", "Abandon a quest"],
        ["The first evil to fall...", "Slay your first boss"],
        ["A strenuous adventure comes to a close...", "Complete a medium quest"],
        ["A grueling adventure comes to a close...", "Complete a long quest"],
        ["A team of hardened veterans...", "Start a quest with all four heroes of Resolve Level 6"],
        ["Like lambs to the slaughter...", "Start a Darkest Dungeon quest with four heroes of resolve level 0"],
        ["I've seen every corner of this ruined land...", "Complete a quest in all four regions"],
        ["Twisted and about to break", "Complete a dungeon with all 4 heroes afflicted"],
        ["And our training begins...", "Upgrade a Combat skill"],
        ["It takes more than brawn...", "Learn a new Camping skill"],
        ["A drink, a hand, and a companion...", "Treat a hero in the Tavern"],
        ["A rumination, a prayer, and a confession...", "Treat a hero in the Abbey"],
        ["Weeding out the weak...", "Dismiss your first hero"],
        ["A veritable crowd...", "Have one of each class on your roster"],
        ["The price we pay for sanity...", "Remove a Quirk in the Sanitarium"],
        ["Encouragement...", "Lock a positive Quirk in the Sanitarium"],
        ["Our equipment polished to a mirror finish...", "Fully upgrade the Blacksmith"],
        ["Our techniques sharpened to a razor's edge...", "Fully upgrade the Guild"],
        ["The tavern my Ancestor once saw...", "Fully upgrade the Tavern"],
        ["The abbey my Ancestor once knew...", "Fully upgrade the Abbey"],
        ["Only the finest equipment will endure this torment...", "Fully upgrade a hero's weapons and armor"],
        ["Only masterful technique will suffice in battle...", "Fully upgrade at least four of a hero's skills"],
        ["Restored to its former glory...", "Fully upgrade the Town"],
        ["A sobering visit with the departed...", "Visit the Graveyard"],
        ["A true champion emerges...", "Raise a hero to Resolve Level 6"],
        ["Darkest sentinels...", "Raise 4 heroes to Resolve Level 6"],
        ["And we slew the evils that lurketh...", "Defeat 100 Eldritch enemies"],
        ["And we slew the abominations that haunteth...", "Defeat 100 Unholy enemies"],
        ["And we slew the beasts that creepeth...", "Defeat 100 Beast enemies"],
        ["And we slew the men who were wicked...", "Defeat 100 Human enemies"],
        ["The fiends must be driven back...", "Slay 1000 enemies"],
        ["The end of the first year...", "Reach week 52"],
        ["Two years of this...", "Reach week 104"],
        ["Greater riches were never witnessed...", "Collect at least 20,000 gold from a single quest"],
        ["A collection of treasured antiques...", "Collect at least 30 heirlooms from a single quest"],
        ["A killer of striking force and wit...", "Kill 50 enemies with one hero"],
        ["More than a weary traveler...", "Walk 500 steps with one hero"],
        ["The first of many has fallen...", "Lose your first hero"],
        ["The stresses were unbearable...", "Lose your first hero to heart attack"],
        ["Gnawing hunger sets in...", "Lose a hero to hunger"],
        ["No retreat, no quarter...", "First party wipe"],
        ["We all return to dust...", "Lose a Legendary (Level 6) hero"],
        ["What is already Dead Cannot Die", "Have a character survive 5 attacks at Death's Door in a single combat"],
        ["More blood soaks the soil...", "Party wipe on a boss"],
        ["Sentimental relics from our forefathers...", "Acquire all your Ancestor's Trinkets"],
        ["Strict Mode", "Complete the game with default difficulty options"],
        ["Driven from this land...", "Kill all bosses"],
        ["Caretaker", "Complete all Caretaker Goals"],
        ["Victory, such as it is...", "Complete the game"],
        ["In such haste...", "Complete the game within 99 Weeks"],
        ["Lone survivor", "Kill any boss with only one hero remaining"],
        ["Dysfunction", "Kill any boss with a party of four afflicted heroes"],
        ["World End", "Complete the game on Stygian"],
        ["On the old road, we found redemption.", "Dismas and Reynauld Made it to the final Darkest Dungeon Quest"],
        ["In Sheep's Clothing", "Defeat the brigand Vvulf"],
        ["Entry Level", "Complete the game on Radiant"],
        ["Four on the Floor", "Kill Squiffy Ghast, Swine Skiver, Bone Bearer and Hateful Virago"],
        ["Fresh Meat", "Play your first match in the Butcher's Circus"],
        ["Scare Tactics", "Cause an enemy hero to have a heart attack"],
        ["Taking All Challengers", "Kill each hero class in the Butcher's Circus"],
        ["Mono et Mono", "Win a match in the dueling grounds"],
        ["Bright Lights", "Daze 10 enemies in the Butcher's Circus"],
        ["Shouting Match", "Win a match using ONLY stress against your enemies"],
        ["Devil's Luck", "Have a hero survive 5 death's door checks in a single match"],
        ["MVP", "Have a single hero deal deathblows to 4 enemies in a single match"],
        ["One and Done", "Kill an enemy hero in the first round of a match"],
        ["Pacemaker", "Have a single hero survive 4 heart attacks in a single match"],
        ["Naked and Unafraid", "Win a match without using any trinkets"],
        ["Blood Soaks the Sand", "Win 100 matches in the Butcher's Circus"],
        ["Be Still My Heart!", "Cause 150 heart attacks in the Butcher's Circus"],
        ["Blood Flood", "Kill 600 enemies in the Butcher's Circus"],
        ["Crowd Pleaser", "Reach the max Prestige level in the Butcher's Circus"],
        ["Flawless Execution", "Win any 10 matches without losing any heroes"]
    ];

    assert.strictEqual(officialAchievements.length, 77, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "death_to_wilbur",
        "death_to_maggot",
        "first_trap_death",
        "first_obstacle_death",
        "darkest_dungeon_party_wipe",
        "slay_a_shambler",
        "slay_a_crow",
        "slay_a_squiffy_with_jester",
        "slay_the_baron",
        "slay_the_viscount",
        "slay_the_countess",
        "get_crimson_curse",
        "collect_trinket_set",
        "build_a_district_building",
        "build_the_red_hook",
        "recruit_a_flagellant",
        "collect_the_invitation",
        "lose_a_cursed_hero",
        "kill_an_ally_through_curse",
        "get_crimson_curse_via_contagion",
        "slay_the_fanatic",
        "rescue_a_prisoner",
        "entire_roster_has_curse",
        "plowshares_to_swords",
        "lost_in_dust",
        "taste_of_madness",
        "merciful_act",
        "defeat_sleeper",
        "shards_well_spent",
        "build_windmill",
        "this_is_nothing",
        "hollow_reckoning",
        "ashes_to_ashes",
        "mouth_of_madness",
        "blinders_lifted",
        "rogues_gallery",
        "defeat_thing_from_stars",
        "revenant_riposte",
        "blue_skies_ahead",
        "four_hero_dodge_miller",
        "lining_pocket",
        "rainbows_end",
        "pipe_dream",
        "burnout",
        "faced_worse",
        "dueling_duo",
        "the_perfection",
        "pavlovian",
        "cooked_to_perfection"
    ]);

    const dataPairs = darkestDungeon.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 49 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hiddenPairs = [
    ["death_to_wilbur", "That'll do, pig..."],
    ["death_to_maggot", "We return to the worms of the earth..."],
    ["first_trap_death", "Watch your step..."],
    ["first_obstacle_death", "Blocked from life..."],
    ["darkest_dungeon_party_wipe", "Valiant sacrifice..."],
    ["slay_a_shambler", "A terrifying figure emerged from the darkness..."],
    ["slay_a_crow", "Murder of Crows"],
    ["slay_a_squiffy_with_jester", "Mine Goes to 11"],
    ["slay_the_baron", "Les Jeux Sont Faits"],
    ["slay_the_viscount", "Just the Cheque"],
    ["slay_the_countess", "Her Last Dance"],
    ["get_crimson_curse", "Symptoms"],
    ["collect_trinket_set", "Happy Together"],
    ["build_a_district_building", "From Rubble to Rabble"],
    ["build_the_red_hook", "The Red Hook"],
    ["recruit_a_flagellant", "The Flesh is Willing"],
    ["collect_the_invitation", "An Unexpected Party"],
    ["lose_a_cursed_hero", "Expired"],
    ["kill_an_ally_through_curse", "Shadows Blur Together"],
    ["get_crimson_curse_via_contagion", "What Strange Bedfellows"],
    ["slay_the_fanatic", "Zealous Accusation"],
    ["rescue_a_prisoner", "Jailbreak"],
    ["entire_roster_has_curse", "Blood Cult"],
    ["plowshares_to_swords", "Plowshares To Swords"],
    ["lost_in_dust", "Tears Lost In The Dust"],
    ["taste_of_madness", "A Taste Of Madness"],
    ["merciful_act", "A Merciful Act"],
    ["defeat_sleeper", "Beyond The Infinite"],
    ["shards_well_spent", "Shards Well Spent"],
    ["build_windmill", "A Memory Of Better Times (And Spaces)"],
    ["this_is_nothing", "This Is Nothing"],
    ["hollow_reckoning", "A Hollow Reckoning"],
    ["ashes_to_ashes", "Ashes To Ashes"],
    ["mouth_of_madness", "In The Mouth of Madness"],
    ["blinders_lifted", "The Blinders Are Lifted"],
    ["rogues_gallery", "Rogues Gallery"],
    ["defeat_thing_from_stars", "There Are No Words"],
    ["revenant_riposte", "Time Is A Flat Circle"],
    ["blue_skies_ahead", "Blue Skies Ahead"],
    ["four_hero_dodge_miller", "A Poor Harvest"],
    ["lining_pocket", "Lining the Jeweller's Pockets"],
    ["rainbows_end", "Rainbow's End"],
    ["pipe_dream", "Pipe Dream"],
    ["burnout", "Burnout"],
    ["faced_worse", "Faced Worse"],
    ["dueling_duo", "Dueling Duo"],
    ["the_perfection", "The Perfection"],
    ["pavlovian", "Pavlovian"],
    ["cooked_to_perfection", "Cooked to Perfection"]
    ];

    assert.strictEqual(hiddenPairs.length, 49, "sanity check on this test's own reference list");

    for (const [apiname, name] of hiddenPairs) {

        const achievement = darkestDungeon.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
