import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-ascent.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 979690 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-ascent");

test("getPlannerData('the-ascent') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-ascent");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every The Ascent achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every The Ascent achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 66 The Ascent achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A new friend", "Complete the main mission 'A new friend'."],
        ["Added extras", "Equip two augmentations and a module"],
        ["Aficionado", "Fully upgrade a weapon"],
        ["All the way", "Complete the Cyber Heist DLC mission 'Critical Resource'."],
        ["Anonymous withdrawal", "Hack an ATM"],
        ["Appreciation", "Receive praise from Kira in conversation."],
        ["Big leagues", "Kill 50 level 35 or higher enemies"],
        ["Black ICE", "Deploy black ICE against hacker enemy"],
        ["Bounty Hunter", "Claim a bounty"],
        ["Brave New World", "Discover the Dark Playground"],
        ["Bring a knife to a gunfight", "Obtain your first melee weapon"],
        ["Complete all Side Missions", "Completed all Cyber Heist Side Missions"],
        ["Completed All Missions", "Complete every Cyber Heist DLC mission - main and side."],
        ["Completed Main Mission", "Complete the Cyber Heist DLC main story."],
        ["Comprehensive", "Fill the Codex"],
        ["Curious consumer", "Read 10 datapads"],
        ["Data Digging", "Complete the main mission 'Data Digging'."],
        ["Do Over", "Reset your proficiencies once"],
        ["Drop your weapon!", "Make an enemy drop an exploding grenade"],
        ["Everyone's a smuggler", "Complete the main mission \"Everyone's a smuggler\"."],
        ["Explorer", "Discover all locations"],
        ["Extreme Overcharge", "Deliver 4000 amount of stasis damage on one target"],
        ["Fair trade", "Sell Something"],
        ["Fight smart", "Kill a robot with energy damage type"],
        ["First Melee Special Move Kill", "Kill an enemy using melee's special move"],
        ["Flatliner", "Unlock all enemy Codex entries"],
        ["For both our benefits", "Complete all side missions"],
        ["Free candy", "Get the goods by both hacking and destroying vending machines"],
        ["Fullchrome", "Equip augmentations and upgrade attributes resulting in the fullchrome appearance"],
        ["Getting out of the slums", "Collect 200'000 uCreds "],
        ["Getting things done", "Finish a side mission"],
        ["Hammering", "Perform your first Hammer kill"],
        ["Helping hand", "Revive a DBNO friend"],
        ["Hygiene", "Use the sink after flushing a toilet"],
        ["Karlan Engineering", "Destroy a Karlan controlled Siege Mech"],
        ["Love Kills", "Complete the Cyber Heist DLC side mission 'Love Kills'."],
        ["Magenta Power", "Complete the main mission 'Magenta Power'."],
        ["Making Concessions", "Completed Making Concessions"],
        ["Mnemonic Hunt", "Complete the main mission 'Mnemonic Hunt'."],
        ["Next level AI", "Upgrade your IMP companion drone."],
        ["Not so special", "Take down a member of Zells' guard"],
        ["Nothing personal", "Complete the main mission 'Nothing personal'."],
        ["Omnihacker", "Hack at least one of each hackable category"],
        ["One step forward", "Complete the Cyber Heist DLC mission 'Find & Replace'."],
        ["Open Sesame", "Find a secret route"],
        ["Opportunist", "Kill 10 enemies using exploding barrels"],
        ["Overkill", "Kill another enemy by overcharging an enemy while it's in stasis"],
        ["Party crashed", "Complete the main mission 'Party crashed'."],
        ["Power Hungry", "Complete the main mission 'Power Hungry'."],
        ["Protocol 61A", "Complete the main mission 'Protocol 61A'."],
        ["Sashimi", "Get killed by a katana"],
        ["Self improvement", "Allocate 3 proficiency points"],
        ["Severed Board", "Complete the main mission 'Severed Board'."],
        ["Snooze or lose", "Try Snooze"],
        ["Something out there", "Complete the main mission 'Something out there'."],
        ["Suicidal", "Die more than 100 times"],
        ["Teamwork", "Start your first co-op session"],
        ["Tenuous Grasp", "Find and then lose something valuable (Cyber Heist DLC)."],
        ["Tourist", "Ride the Interlink Express"],
        ["Unshackled", "Complete Unshackled"],
        ["Vice Express", "Take the Interlink train in the Cyber Heist DLC."],
        ["VIP no more", "Kill a level 35 bounty"],
        ["We're just getting started", "First enemy kill"],
        ["What just happened?", "Complete the main mission 'What just happened?'."],
        ["Win", "Complete the final main mission and finish the story."],
        ["Zell is dead", "Take down Zell"],
    ];

    assert.strictEqual(officialAchievements.length, 66, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
