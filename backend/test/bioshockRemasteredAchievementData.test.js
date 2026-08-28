import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bioshock-remastered.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 409710 (fetched through this app's own services/steamApi.js).
// 52 of 65 ship a real, official Steam description, quoted
// verbatim below. The 13 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bioshock-remastered");

test("getPlannerData('bioshock-remastered') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for bioshock-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every BioShock Remastered achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every BioShock Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 officially-described BioShock Remastered achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_20",
        "ACHIEVEMENT_22",
        "ACHIEVEMENT_55",
        "ACHIEVEMENT_24",
        "ACHIEVEMENT_26",
        "ACHIEVEMENT_28",
        "ACHIEVEMENT_30",
        "ACHIEVEMENT_135",
        "ACHIEVEMENT_137",
        "ACHIEVEMENT_138",
        "ACHIEVEMENT_141",
        "ACHIEVEMENT_142",
        "ACHIEVEMENT_200",
    ]);

    assert.strictEqual(hiddenApinames.size, 13, "sanity check - BioShock Remastered has 13 hidden achievements");

    const officialAchievements = [
        ["\"A Shocking Turn of Events\" - Rescuer", "Rescued the Little Sister in “A Shocking Turn of Events”"],
        ["“A Shocking Turn of Events” – Collector", "Found all collectable Roses in “A Shocking Turn of Events”"],
        ["“A Shocking Turn of Events” – Expert", "The player has rescued the Little Sister in “A Shocking Turn of Events” in under 4:00"],
        ["“A Shocking Turn of Events” – Master Electrician", "Charged up the Ferris Wheel 9 different times in “A Shocking Turn of Events”"],
        ["“The ‘I’ in Team” - Rescuer", "Rescued the Little Sister in “The ‘I’ in Team”"],
        ["“The ‘I’ in Team” – Collector", "Found all collectable Roses in “The ‘I’ in Team”"],
        ["“The ‘I’ in Team” – Expert", "Rescued the Little Sister in “The ‘I’ in Team” in under 3:00"],
        ["“The ‘I’ in Team” – Pacifist", "Rescued the Little Sister in “The ‘I’ in Team” without destroying any Machine Gun Turrets"],
        ["“Worlds of Hurt” - Rescuer", "Rescued the Little Sister in “Worlds of Hurt”"],
        ["“Worlds of Hurt” – Collector", "Found all collectable Roses in “Worlds of Hurt”"],
        ["“Worlds of Hurt” – Expert", "Rescued the Little Sister in “Worlds of Hurt” in under 15:00, on Medium or higher difficulty"],
        ["“Worlds of Hurt” – Tough Guy", "Rescued the Little Sister in “Worlds of Hurt” using only plasmids, tonics, the wrench, and the research camera, on Medium or higher difficulty"],
        ["Ammo Inventor", "Invent all possible ammunication types"],
        ["Avid Inventor", "Successfully invent at least 100 items"],
        ["Basic Inventer", "Invent at least one item"],
        ["Bought One Slot", "Purchase a Plasmid Slot or Tonic Slot in any track"],
        ["Completed Welcome to Rapture", "Successfully complete the Welcome To Rapture Level"],
        ["Dealt with every Little Sister", "Either Harvest or Rescue every Little Sister in the game"],
        ["Five Fully Upgraded Weapons", "Fully upgrade five weapons"],
        ["Four Fully Upgraded Weapons", "Fully upgrade four weapons"],
        ["Fully Researched a Bouncer", "Fully research the Bouncer"],
        ["Fully Researched a Houdini Splicer", "Fully research the Houdini Splicer"],
        ["Fully Researched a Leadhead Splicer", "Fully research the Leadhead Splicer"],
        ["Fully Researched a Little Sister", "Fully research the Little Sister"],
        ["Fully Researched a Nitro Splicer", "Fully research the Nitro Splicer"],
        ["Fully Researched a Rosie", "Fully research the Rosie"],
        ["Fully Researched a Spider Splicer", "Fully research the Spider Splicer"],
        ["Fully Researched a Thuggish Splicer", "Fully research the Thuggish Splicer"],
        ["Hacked a Safe", "Successfully hack a safe"],
        ["Hacked a Security Bot", "Successfully hack a security bot"],
        ["Hacked a Security Camera", "Successfully hack a Security Camera"],
        ["Hacked a Turret", "Successfully hack a Turret"],
        ["Hacked a Vending Machine", "Successfully hack a Vending Machine"],
        ["Historian", "Find every audio diary"],
        ["Little Sister Savior", "Complete the game without harvesting any Little Sisters"],
        ["Lucky Winner", "Hit the jackpot at a slot machine"],
        ["Maxed All Tracks", "Purchase every slot in all four Plasmid and Tonic tracks"],
        ["Maxed One Track", "Purchased every slot in one of the Plasmid or Tonic tracks"],
        ["One Fully Upgraded Weapon", "Fully upgrade one weapon"],
        ["One Successful Hack", "Perform at least one successful hack"],
        ["Prolific Photographer", "Take at least one photo in every research group"],
        ["Quality Research Photo", "Take a Research Photo of the highest grade"],
        ["Research PhD", "Max out all possible research"],
        ["Researched a Splicer", "Take at least one Research Photo of a Splicer"],
        ["Seriously Good at This", "Complete the game on the hardest difficulty setting"],
        ["Skilled Hacker", "Successfully complete 50 hacks"],
        ["Three Fully Upgraded Weapons", "Fully upgrade three weapons"],
        ["Toaster in the Tub", "Shock an enemy in the water"],
        ["Tonic Collector", "Collect or Invent 53 Tonics in the Physical, Engineering and Combat tracks"],
        ["Two Fully Upgraded Weapons", "Fully upgrade two weapons"],
        ["Upgraded a Weapon", "Acquire at least one weapon upgrade"],
        ["Weapon Specialist", "Acquire all upgrades for all weapons"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 13 hidden BioShock Remastered achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_20", "Defeated Dr. Steinman"],
        ["ACHIEVEMENT_22", "Defeated Peach Wilkins"],
        ["ACHIEVEMENT_55", "Defeated Atlas"],
        ["ACHIEVEMENT_24", "Restored the Forest"],
        ["ACHIEVEMENT_26", "Completed Cohen's Masterpiece"],
        ["ACHIEVEMENT_28", "Defeated Andrew Ryan"],
        ["ACHIEVEMENT_30", "Broke Fontaine's Mind Control"],
        ["ACHIEVEMENT_135", "Became a Big Daddy"],
        ["ACHIEVEMENT_137", "Irony"],
        ["ACHIEVEMENT_138", "Found Cohen's Room"],
        ["ACHIEVEMENT_141", "Brass Balls"],
        ["ACHIEVEMENT_142", "I Chose the Impossible"],
        ["ACHIEVEMENT_200", "A Man Chooses"],
    ];

    assert.strictEqual(names.length, 13, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
