import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hitman-world-of-assassination.json - 83 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1659040 (fetched through this app's own services/steamApi.js).
// 71 of 83 ship a real, official Steam description, quoted
// verbatim below. The 12 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// PowerPyx / XboxAchievements and the Hitman Wiki, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hitman-world-of-assassination");

test("getPlannerData('hitman-world-of-assassination') returns real planner data with 83 curated achievements", () => {

    assert.ok(game, "expected real planner data for hitman-world-of-assassination");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 83);

});

test("every HITMAN World of Assassination achievement has a unique id from 1 to 83 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 83 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 83);
    assert.strictEqual(new Set(apinames).size, 83);

});

test("every HITMAN World of Assassination achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 71 officially-described HITMAN World of Assassination achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACH_15",
        "ACH_16",
        "ACH_21",
        "ACH_22",
        "ACH_27",
        "ACH_28",
        "ACH_33",
        "ACH_34",
        "ACH_39",
        "ACH_40",
        "ACH_44",
        "ACH_45",
    ]);

    assert.strictEqual(hiddenApinames.size, 12, "sanity check - HITMAN World of Assassination has 12 hidden achievements");

    const officialAchievements = [
        ["A Long Time Coming", "Complete Situs Inversus."],
        ["A New Profile", "Complete a Featured Contract."],
        ["Amalfi Pearl", "Reach Sapienza Mastery Level 20."],
        ["Ancient Marrakesh", "Reach Marrakesh Mastery Level 20."],
        ["Break the Bank", "Complete Golden Handshake."],
        ["Capital Punishment", "Complete all Crime and Punishment Challenges."],
        ["City of Light", "Reach Paris Mastery Level 20."],
        ["Cleared for Field Duty", "Complete The Final Test in the Prologue."],
        ["Damage Control", "Complete The Finish Line."],
        ["Dark Tourist", "Reach Santa Fortuna Mastery Level 20."],
        ["Death From Above", "Complete On Top Of The World."],
        ["Death of the Party", "Complete Apex Predator."],
        ["Die By the Sword", "Complete World of Tomorrow."],
        ["Dune Raider", "Reveal all undiscovered areas in Dubai."],
        ["Followed the Trails", "Reveal all undiscovered areas in Berlin."],
        ["Full House", "Complete all Mission Stories in Death In The Family."],
        ["Guerrilla Warfare", "Complete Freedom Fighters."],
        ["Hack the Planet", "Reach Chongqing Mastery Level 20."],
        ["Hawkeye", "Complete The Pen and the Sword as Silent Assassin."],
        ["Honorary Member", "Reach Isle of Sgàil Mastery Level 20."],
        ["Icebreaker", "Complete all Mission Stories in End Of An Era."],
        ["In a League of Their Own", "Get a score above 1,000,000 points on Crime and Punishment."],
        ["Infiltrator", "Complete Nightcall."],
        ["Island and Chill", "Complete The Last Resort."],
        ["Keys to the City", "Reach Mumbai Mastery Level 20."],
        ["Last Call", "Become the club owner, and have a sit down with the ICA."],
        ["Last Stop", "Reach Carpathian Mountains Mastery Level 5."],
        ["Local Knowledge", "Reach Hawke's Bay Mastery Level 5."],
        ["Long Shot", "Complete Another Life."],
        ["Master of the Household", "Complete Death In The Family."],
        ["Master the Terroir", "Reveal all undiscovered areas in Mendoza."],
        ["Miami Wise", "Reach Miami Mastery Level 20."],
        ["Mission Complete", "Reach Colorado Mastery Level 20."],
        ["Never Knew What Hit Them", "Complete Crime and Punishment as Silent Assassin."],
        ["NEXUS-47", "Complete End Of An Era."],
        ["Nightmare Fuel", "Complete Untouchable."],
        ["No Stone Unturned", "Reveal all undiscovered areas in Dartmoor."],
        ["Null and Void", "Reach Haven Island Mastery Level 20."],
        ["One Night in Bangkok", "Reach Bangkok Mastery Level 20."],
        ["Perfectionist", "Complete Suit Only and Silent Assassin Challenges on The Icon, A House Built on Sand or Landslide."],
        ["Pillar of the Community", "Reach Whittleton Creek Mastery Level 20."],
        ["Pirate Hunter", "Complete Chasing a Ghost."],
        ["Pure Poetry", "Complete all The Pen and the Sword Challenges."],
        ["Rich Harvest", "Complete all Mission Stories in The Farewell."],
        ["Rise Up", "Complete all Mission Stories in On Top Of The World."],
        ["Sayōnara", "Reach Hokkaido Mastery Level 20."],
        ["Seizing the Opportunity", "Complete any Mission Story in The Final Test."],
        ["Seven Figures", "Get a score above 1,000,000 points on The Pen and the Sword."],
        ["Shining Bright", "Complete Club 27."],
        ["Shortcut Killer", "Find and unlock 15 Shortcuts."],
        ["Silent Assassin", "Complete The Final Test unspotted. Kill only Jasper Knight, ensuring his body is not found."],
        ["Silent Sniper", "Complete The Last Yardbird as Silent Assassin."],
        ["Stair Master", "Reach Dubai Mastery Level 20."],
        ["Stylish Assassin", "Get 10 different Playstyles."],
        ["Surveillance Master", "Reveal all undiscovered areas in Chongqing."],
        ["Tactical Strike", "Complete Three-Headed Serpent."],
        ["The Creative Assassin", "Complete the Contract Creation Tutorial."],
        ["The Great Outdoors", "Reach Dartmoor Mastery Level 20."],
        ["The Last Tango", "Complete The Farewell."],
        ["The Result of Previous Training", "Complete Freeform Training in the Prologue."],
        ["This is Maintenance", "Complete The Ark Society."],
        ["Too Big to Fail", "Complete A Gilded Cage."],
        ["Tools of the Trade", "Assassinate Targets with Ballistic, Accident and Explosion Kills."],
        ["Top of the Class", "Beat the highest leaderboard score on a Contract."],
        ["Top of the Heap", "Reach New York Mastery Level 20."],
        ["Train Surfing", "Complete all Untouchable Challenges."],
        ["Training Escalated", "Complete Level 5 of an Escalation Contract set in the ICA Facility."],
        ["Unseen Assassin", "Assassinate a Target without getting spotted."],
        ["Vineyard Virtuoso", "Reach Mendoza Mastery Level 20."],
        ["Warehouse Veteran", "Reach Berlin Mastery Level 20."],
        ["When No One Else Dares", "Complete The Showstopper."],
    ];

    assert.strictEqual(officialAchievements.length, 71, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 12 hidden HITMAN World of Assassination achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_15", "Treacherous Architecture"],
        ["ACH_16", "Keep Your Eyes Peeled"],
        ["ACH_21", "Upstairs, Downstairs"],
        ["ACH_22", "Family Feud"],
        ["ACH_27", "Partied Out"],
        ["ACH_28", "Bird Art"],
        ["ACH_33", "Future Shock"],
        ["ACH_34", "Console Cowboy"],
        ["ACH_39", "Ripe for the Picking"],
        ["ACH_40", "Evil Wine Club"],
        ["ACH_44", "Bullet Train"],
        ["ACH_45", "Count Down From 47"],
    ];

    assert.strictEqual(names.length, 12, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
