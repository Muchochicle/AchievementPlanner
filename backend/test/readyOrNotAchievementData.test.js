import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ready-or-not.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1144200 (fetched through this app's own services/steamApi.js).
// 60 of 66 ship a real, official Steam description, quoted
// verbatim below. The 6 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's wiki
// plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ready-or-not");

test("getPlannerData('ready-or-not') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for ready-or-not");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every Ready or Not achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every Ready or Not achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 officially-described Ready or Not achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_A32",
        "ACHIEVEMENT_A33",
        "ACHIEVEMENT_A43",
        "ACHIEVEMENT_A44",
        "ACHIEVEMENT_A65",
        "ACHIEVEMENT_A66",
    ]);

    assert.strictEqual(hiddenApinames.size, 6, "sanity check - Ready or Not has 6 hidden achievements");

    const officialAchievements = [
        ["A Rest For The Wicked", "Arrest 100 suspects or civilians"],
        ["After the Storm", "Complete all Home Invasion levels at S on 'Standard' difficulty or higher"],
        ["Arrest Warrant", "Arrest 50 suspects or civilians"],
        ["Back To School", "Complete ‘Dorms’ at C+ on 'Standard' difficulty or higher"],
        ["Beat Cop", "Complete ‘Narcos’ using only lethal pistols but without using grenades or launchers on 'Standard' difficulty or higher"],
        ["Big Shell Specialist", "During ‘Leviathan’, successfully hit two long-range headshots, on two different active Suspects, located over 30m away from you on 'Standard' difficulty or higher"],
        ["By the Book", "Complete a mission while only commanding your officers and not using anything from your loadout on 'Standard' difficulty or higher"],
        ["Click From 3, 4 Is Binding", "Unlock 20 doors using the 'Lockpick Gun'"],
        ["Cut To Pieces", "Complete ‘Narcos’ at C+ on 'Standard' difficulty or higher"],
        ["Door Kickers", "Have 2 officers with an active “Kicker” trait assigned to the roster and kick a door open in any mission"],
        ["Dress to Impress", "Unlock all base game customization items"],
        ["Due Process", "Incapacitate a suspect with a C2 charge"],
        ["Eye of Providence", "Find and use all major world interactables in every Boiling Point level."],
        ["First Arrest", "Arrest your first suspect or civilian"],
        ["From House to Home", "Get all Ready Or Not Home Invasion DLC achievements"],
        ["From Land to Sea", "Complete all Dark Waters levels at S on 'Standard' difficulty or higher"],
        ["Getting Your Sea Legs", "Get all Ready Or Not Dark Waters DLC achievements"],
        ["Here's Johnny", "Breach 20 locked doors with the 'Battering Ram'"],
        ["Hidden and Dangerous", "Restrain all civilians in ‘Lawmaker’ without neutralizing any suspects on 'Standard' difficulty or higher"],
        ["I'm Too Old For This…", "Complete all base game missions on 'Hard' difficulty in any game mode"],
        ["Mahogany Masochist", "Command your squad to breach a door, 50 times"],
        ["Medal of Valor", "Complete all base game missions at S on 'Standard' difficulty or higher"],
        ["Meldonin", "Complete all ‘Dorms’ main objectives in five minutes on 'Standard' difficulty or higher"],
        ["My Eyes, It Burns!", "During any Boiling Point mission, while you are actively taking damage from toxic gas, incapacitate three different active Suspects within 5 seconds of one another on ‘Standard’ or higher."],
        ["Nosce Te Ipsum", "Complete all Boiling Point levels at S on 'Standard' difficulty or higher"],
        ["Off Duty", "Complete ‘Thank You, Come Again’ without armor and a helmet on 'Standard' difficulty or higher"],
        ["Panic Room", "Complete ‘Lawmaker’ at C+ on 'Standard' difficulty or higher"],
        ["Party Crasher", "During ‘Mirage at Sea’, apprehend Sah’id before the order is given to murder civilians, and no civilians are killed on 'Standard' difficulty or higher"],
        ["Peeping Tom", "Use the 'Mirrorgun' 30 times under a door"],
        ["Practice Makes Perfect", "Complete 'Training'"],
        ["Programmed Psychosis", "Complete ‘A New America’, alone in a multiplayer lobby, on ‘Hard’ difficulty. "],
        ["Say Hello To My Little Friend", "Stun enemies with any 'M320' 30 times"],
        ["Silly String", "Disarm 10 tripwires"],
        ["Sleeper Agent", "During ‘3 Letter Triad’, apprehend or incapacitate 15 suspects consecutively, within 15 seconds of one another on 'Standard' difficulty or higher"],
        ["Temperance", "Drink one too many coffees"],
        ["The Abducted", "Complete ‘Buy Cheap, Buy Twice', ‘Hide and Seek', 'Ends of the Earth’, and 'Greased Palms’ at C+ on 'Standard' difficulty or higher"],
        ["The Decaying City", "Complete ‘Elephant’, ‘Relapse’ and ‘Neon Tomb’ at C+ on 'Standard' difficulty or higher"],
        ["The Devil", "Use the secret command for your SWAT team (kill me command)"],
        ["The Dogs Heads", "Complete ‘Mirage at Sea’ at C+ on 'Standard' difficulty or higher"],
        ["The Emperor", "Unlock each unique officer trait at least once"],
        ["The Exploited", "Complete ‘The Spider’, ‘Valley of the Dolls’, ‘Sinuous Trail’, and '23 Megabytes a Second' at C+ on 'Standard' difficulty or higher"],
        ["The False Idol", "Complete ‘All Gods Burn’ at C+ on 'Standard' difficulty or higher"],
        ["The Final Directive", "Complete ‘A New America’ at C+ on 'Standard' difficulty or higher"],
        ["The Flashpoint", "Complete ‘No Good Deed’ at C+ on 'Standard' difficulty or higher"],
        ["The Fool", "Be killed by a civilian"],
        ["The Hanged Man", "Complete ‘Hide and Seek' using only a taser, flashbangs, and bash on 'Standard' difficulty or higher"],
        ["The Heat is On", "Complete ‘All Gods Burn’ without Armor or a Shield equipped and without using grenades, on ‘Hard’ difficulty."],
        ["The Hermit", "Complete Ready or Not in ‘Ironman mode’ without losing a single officer on 'Standard' difficulty or higher"],
        ["The Left Behind", "Complete ‘Carriers of the Vine’, ‘Sins of the Father’, ‘Ides of March’, and ‘A Lethal Obsession’ at C+ on 'Standard' difficulty or higher"],
        ["The Magician", "Arrest a downed suspect only to find out they were faking it"],
        ["The Margay", "Complete ‘3 Letter Triad’ at C+ on 'Standard' difficulty or higher"],
        ["The Meek & The Earth", "Complete ‘Leviathan’ at C+ on 'Standard' difficulty or higher"],
        ["The Tactician", "Complete a mission without using a weapon and only relying on deployables, tactical gear, and bash on 'Standard' difficulty or higher"],
        ["The War", "Complete ‘Thank You, Come Again’, ‘Rust Belt’ and ‘Twisted Nerve’ at C+ on 'Standard' difficulty or higher"],
        ["The World", "Complete Ready or Not in ‘Ironman mode’ on 'Standard' difficulty or higher"],
        ["Toxic Fumes", "Complete 'Twisted Nerve' using only VPL-25, cs gas, gasmasks, and bash on 'Standard' difficulty or higher"],
        ["Walnut Warrior", "Command your squad to breach a door, 20 times"],
        ["Way Out West", "Complete ‘Rust Belt’ using only the .357 Magnum as a weapon on 'Standard' difficulty or higher"],
        ["What's In The Box?!", "Inspect any evidence item from the 'Evidence locker' in the 'Headquarters'"],
        ["Who is Pepe Silvia?", "On 'A Lethal Obsession' play all of the audiotapes that can be found in the mission"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 6 hidden Ready or Not achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_A32", "Smile, You’re On Camera!"],
        ["ACHIEVEMENT_A33", "Justice Uncovers Depths Ghosts in Elysium"],
        ["ACHIEVEMENT_A43", "Fool Me Once"],
        ["ACHIEVEMENT_A44", "Fool Me Twice"],
        ["ACHIEVEMENT_A65", "All Secrets Safe"],
        ["ACHIEVEMENT_A66", "Targeted Manipulation"],
    ];

    assert.strictEqual(names.length, 6, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
