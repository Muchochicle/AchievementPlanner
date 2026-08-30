import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/f1-2020.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1080110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("f1-2020");

test("getPlannerData('f1-2020') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for f1-2020");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every F1 2020 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every F1 2020 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 F1 2020 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Become One with the Car", "Complete a race using Elite Driver Proficiency (Standard Race Style)"],
        ["Big Name Signing", "Successfully hire an acclaim level 15 or higher Driver in My Team mode"],
        ["Bragging Rights", "Win any online race"],
        ["Busy Body", "Successfully completed 50 activities in My Team mode"],
        ["Chicken Dinner", "Win any Championship Event"],
        ["Dat Reaction Speed (DRS)", "Activate DRS perfectly on all zones of any track"],
        ["Data Gatherer", "Complete 10 Practice Programmes in F1 during My Team or Driver Career"],
        ["Ditch the Downforce", "Complete a clean Time Trial lap using the 'Maximum Top Speed' car set up preset"],
        ["Enthusiast", "Read information on any car in the showroom"],
        ["Finding your Feet", "Complete 10 Online Races"],
        ["First Outing", "Drive your team's car out on track for the first time in My Team mode"],
        ["Front of the Grid", "Achieve pole position"],
        ["Full Potential", "Fully upgrade any facility area in My Team"],
        ["Get Shifty", "Win a race whilst using manual transmission"],
        ["Glove at First Sight", "Equip a new pair of gloves from the Podium Pass or Item Shop"],
        ["Grab the Popcorn", "Spectate an online race"],
        ["Half Centurion", "Complete 50 Online Races"],
        ["Hats Off", "Get on the F1 podium for the first time"],
        ["Here Comes the Money", "Complete 2 or more Secondary Sponsor Goals in one race weekend"],
        ["Its Time for the Perk-olator", "Purchase all available Perks in Driver Career or My Team"],
        ["Legend Status Achieved", "Win the F1 Drivers Championship"],
        ["Look at you go!", "Play a captured highlight"],
        ["Mad Tash for the Finish Line", "Win a race in the 1992 Williams FW14B at Silverstone"],
        ["Make it Yours", "Edit a Driver, Car and Badge in Customisation"],
        ["Making Paper", "Reach $100,000,000 lifetime earnings in My Team mode"],
        ["Maxing Out", "Apply all vehicle upgrades from one R&D department"],
        ["My Precious", "Set a favourite trophy"],
        ["New Kids on the Block", "Set up your own F1 team and show your car to the world at the pre-season car reveal"],
        ["Ohh Friends", "Join a League"],
        ["One for the 'gram", "Make an adjustment within photo mode"],
        ["Phoenix from the Ashes", "Win a race after starting in last position on the grid"],
        ["Promising Start", "Complete your first race weekend in My Team mode"],
        ["Red River Racer", "Complete a 25% or above race at Hanoi"],
        ["Remember the Name", "Reach a Team Acclaim level of 20 in My Team mode"],
        ["Represent", "Fill every sponsor slot with sponsors on a Car livery"],
        ["Show Off!", "Complete 5 Invitational events during My Team or Driver Career"],
        ["Sign on the Dotted Line", "Successfully complete a Driver/Team Negotiation during a season in Driver Career or My Team"],
        ["So it Begins", "Complete Ranked Placement races and achieve a Rank."],
        ["Squeaky Clean", "Complete 10 Clean Online races"],
        ["Started from the Bottom", "Win the Constructors Championship with your team in My Team mode"],
        ["Team Building", "Purchase any upgrade for a Facility in My Team"],
        ["The Camera Loves You", "Answer 100 press interview questions in My Team or Driver Career"],
        ["The Orange Army", "Win a race at Zandvoort as Max Verstappen"],
        ["The Perfect Weekend", "Set the fastest time in all 3 Practice sessions, take Pole Position and win the Grand Prix"],
        ["We Are the Champions", "Gain 9 positions during a wet race at Brazil in the Brawn BGP 001"],
        ["Well on Your Way", "Complete 25 Online Races"],
        ["What do you want, a medal?", "Get a League Medal"],
        ["Who are you!?", "Change your driver head part way through a My Team or Driver Career playthrough."],
        ["Who You Gonna Call!?", "Beat a Personal Best Ghost and Rival Ghost in Time Trial"],
        ["You Didn't See Anything", "Activate a Flashback"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
