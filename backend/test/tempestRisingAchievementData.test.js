import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tempest-rising.json - 98 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1486920 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tempest-rising");

test("getPlannerData('tempest-rising') returns real planner data with 98 curated achievements", () => {

    assert.ok(game, "expected real planner data for tempest-rising");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 98);

});

test("every Tempest Rising achievement has a unique id from 1 to 98 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 98 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 98);
    assert.strictEqual(new Set(apinames).size, 98);

});

test("every Tempest Rising achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 98 Tempest Rising achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Academy of War", "Beat the Skirmish AI on \"Hard\" while playing as Dynasty"],
        ["Air Traffic Controller", "Construct 12 Air Pads in one mission or match"],
        ["Ancient Power", "Complete the ninth mission of the GDF Campaign on any difficulty level"],
        ["Ancient Power +", "Complete the ninth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Around the block", "Play 25 Multiplayer Matches"],
        ["Base-Builder’s Fiesta", "Produce 5 MCVs in one mission or match"],
        ["Boot Camp", "Beat the Skirmish AI on \"Normal\" while playing as GDF"],
        ["Bug Zapper", "Use the Voltaic Reaction Perk to Kill 100 Units affected with Tempest Overflow"],
        ["Buried", "Complete the eighth mission of the Dynasty Campaign on any difficulty level"],
        ["Buried +", "Complete the eighth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Clay Pigeons", "Destroy 100 Combat Drones with Missile Troopers in one mission or match"],
        ["Cloudy with a Chance of Explosions", "Use the Commando's Airstrike ability 10 times in one mission or match"],
        ["Conscription", "Beat the Skirmish AI on \"Easy\" while playing as Dynasty"],
        ["Deprived", "Complete any Campaign without putting any points into the Doctrine and Armory systems"],
        ["Doctor's Visit", "Deploy the Riot Medic's 'Healing Turret' 10 times in one mission or match"],
        ["Drive By Mechanic", "Deploy the Shieldmaiden's 'Repair Turret' 20 times in one mission or match"],
        ["Dude! Where's my car?", "Flatten 50 Vehicles"],
        ["Dynasty Conscript", "Complete the Dynasty Campaign on Easy Difficulty"],
        ["Dynasty Field Officer", "Complete the Dynasty Campaign on Normal Difficulty"],
        ["Dynasty Major", "Complete the Dynasty Campaign on Hard Difficulty"],
        ["Dynasty Minister of War", "Complete the Dynasty Campaign on Insane Difficulty"],
        ["Fire Of The Gods", "Complete the eleventh and final mission of the Dynasty Campaign on any difficulty level"],
        ["Fire Of The Gods +", "Complete the eleventh mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Firewatch", "Use the Engineer to deploy 10 Guard Towers in one mission or match"],
        ["Fortress of Solitude", "Construct 50 Concrete Walls in one mission or match"],
        ["GDF Colonel", "Complete the GDF Campaign on Hard Difficulty"],
        ["GDF General", "Complete the GDF Campaign on Insane Difficulty"],
        ["GDF Recruit", "Complete the GDF Campaign on Easy Difficulty"],
        ["GDF Sergeant", "Complete the GDF Campaign on Normal Difficulty"],
        ["Going Commando", "Win a Skirmish Match only using Infantry Units"],
        ["Harvest The Tempest", "Complete the first mission of the Dynasty Campaign on any difficulty level"],
        ["Harvest The Tempest +", "Complete the first mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Harvesting Duty", "Complete the sixth mission of the Dynasty Campaign on any difficulty level"],
        ["Harvesting Duty +", "Complete the sixth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Heart of Glass", "Complete the eleventh and final mission of the GDF Campaign on any difficulty level"],
        ["Heart of Glass +", "Complete the eleventh mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Hidden in Plain Sight", "Make the Sniper go into Stealth mode 100 times"],
        ["High Voltage!", "Activate Distribution Mode from two Dynasty Power Plants on one building"],
        ["Hovering Hammer of Doom", "Use the Leveler's 'Barrage' ability 30 times in one mission or match"],
        ["I'm a mechanical man", "Disarm 200 mines"],
        ["Keep rollin', rollin'", "Activate the 'Tempest Engines' ability on the Tempest Sphere 50 times"],
        ["Last Man Standing", "Win a Skirmish Match against 3 AI Players that are on the same team"],
        ["Live Fire Exercise", "Beat the Skirmish AI on \"Hard\" while playing as GDF"],
        ["Making Bacon Pancakes", "Crush 50 infantry units by running them over with vehicles in one mission or match"],
        ["Marked for Death", "Kill 50 Intel Marked enemy units with 'Networked' units in one mission or match"],
        ["Marked for life", "Intel Mark 98 units over one mission or match"],
        ["Multitasker", "Have 10 Construction Sites active at one time"],
        ["Not a step back!", "'Inspire' 25 units with the Line Officer at once in one mission or match"],
        ["Obstacle Course", "Beat the Skirmish AI on \"Easy\" while playing as GDF"],
        ["Paradropped", "Complete the third mission of the GDF Campaign on any difficulty level"],
        ["Paradropped +", "Complete the third mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Participation Trophy", "Lose your first ranked/multiplayer match."],
        ["Partying like its 1998", "Win 1 Multiplayer Match"],
        ["Pinata Party", "Blow up a Hammerhead or Skycrane Carrier filled up with units"],
        ["Plowing the Fields", "Harvest 200,000$ worth of tempest in one mission or match"],
        ["Power of the Tempest", "Complete the ninth mission of the Dynasty Campaign on any difficulty level"],
        ["Power of the Tempest +", "Complete the ninth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Public Relations", "Complete the seventh mission of the GDF Campaign on any difficulty level"],
        ["Public Relations +", "Complete the seventh mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Pull That Base Apart", "Complete the sixth mission of the GDF Campaign on any difficulty level"],
        ["Pull That Base Apart +", "Complete the sixth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Rambo", "Kill 60 units using the Assault Gunner's 'Tempest Dynamos' Ability"],
        ["Rat Catcher", "Complete the fifth mission of the Dynasty Campaign on any difficulty level"],
        ["Rat Catcher +", "Complete the fifth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Redirection", "Complete the third mission of the Dynasty Campaign on any difficulty level"],
        ["Redirection +", "Complete the third mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Reduce, Reuse, Recycle!", "Salvage' 25 vehicles from the Salvage Center in one mission or match"],
        ["Retaliation", "Complete the fourth mission of the GDF Campaign on any difficulty level"],
        ["Retaliation +", "Complete the fourth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Road paved with bad intentions", "Use Technicians to lay down 200 Mines"],
        ["Same-Day Delivery", "Use 150 support powers"],
        ["Signal Lost", "Complete the first mission of the GDF Campaign on any difficulty level"],
        ["Signal Lost +", "Complete the first mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Sins of the Son", "Complete the seventh mission of the Dynasty Campaign on any difficulty level"],
        ["Sins of the Son +", "Complete the seventh mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["Squatters Rights", "Capture 15 enemy buildings with either Engineers or Technicians in one mission or match"],
        ["Tempest Hoarder", "Produce 15 Tempest Rigs in one mission or match"],
        ["The Ancient Basin", "Complete the eighth mission of the GDF Campaign on any difficulty level"],
        ["The Ancient Basin +", "Complete the eighth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Fall of a Dynasty", "Complete the tenth mission of the Dynasty Campaign on any difficulty level"],
        ["The Fall of a Dynasty +", "Complete the tenth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Fall of Alexandria", "Complete the tenth mission of the GDF Campaign on any difficulty level"],
        ["The Fall of Alexandria +", "Complete the tenth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Great Explosive Barrel Massacre", "Blow up 999 Explosive Barrels"],
        ["The Hornet's Nest", "Complete the second mission of the GDF Campaign on any difficulty level"],
        ["The Hornet's Nest +", "Complete the second mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Informant", "Complete the second mission of the Dynasty Campaign on any difficulty level"],
        ["The Informant +", "Complete the second mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Midas Touch", "Win 5 Multiplayer Matches"],
        ["The Pass", "Complete the fifth mission of the GDF Campaign on any difficulty level"],
        ["The Pass +", "Complete the fifth mission of the GDF Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["The Ultimate Silo-fest", "Construct 10 Silos in one mission or match"],
        ["Training Grounds", "Beat the Skirmish AI on \"Normal\" while playing as Dynasty"],
        ["Western BBQ", "Kill 25 Field Scout units with Ignitor units in one mission or match"],
        ["What's mine is mine, what's yours is now mine too", "Use the Hijacker's 'Override' ability 5 times over the course of a mission or match"],
        ["Where it Hurts", "Complete the fourth mission of the Dynasty Campaign on any difficulty level"],
        ["Where it Hurts +", "Complete the fourth mission of the Dynasty Campaign, alongside all of its secondary objectives on any difficulty level"],
        ["You Can't See Me", "Have 25 Units be Invisible at one time"],
    ];

    assert.strictEqual(officialAchievements.length, 98, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
