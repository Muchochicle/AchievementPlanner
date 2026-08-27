import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/frostpunk.json - 115 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 323190 (fetched through this app's own services/steamApi.js) - 96 of
// 115 ship a real, official Steam description. The 19 hidden ones,
// each tied to a specific scenario's story branch, are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions, sourced via
// independent, cross-agreeing Steam Community/SteamAH/GameFAQs/
// TrueAchievements guides. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog. This file's official-pairs array was
// generated directly from the catalog JSON (not hand-typed a second
// time) to remove any transcription-drift risk at this volume.
const frostpunk = getPlannerData("frostpunk");

test("getPlannerData('frostpunk') returns real planner data with 115 curated achievements", () => {

    assert.ok(frostpunk, "expected real planner data for frostpunk");
    assert.ok(Array.isArray(frostpunk.achievements));
    assert.strictEqual(frostpunk.achievements.length, 115);

});

test("every Frostpunk achievement has a unique id from 1 to 115 and a unique apiname", () => {

    const ids = frostpunk.achievements.map(a => a.id);
    const apinames = frostpunk.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 115 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 115);
    assert.strictEqual(new Set(apinames).size, 115);

});

test("every Frostpunk achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of frostpunk.achievements) {

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

test("every one of the 96 officially-described Frostpunk achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 19 hidden achievements are excluded here - Steam never
    // exposes a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Built to Serve", "Build an automaton"],
        ["Advanced Designs", "Have an Advanced Coal Mine, Advanced Wall Drill and Advanced Steelworks at the same time"],
        ["Expats", "Set up 2 Outposts in one playthrough"],
        ["Oxbridge", "Have 4 Workshops doing research at the same time"],
        ["City of Steam", "Have 15 automatons at the same time"],
        ["City of Man", "Have more than 650 people in the city at the same time"],
        ["Unskilled Labour", "Finish any scenario without constructing Steam or Advanced buildings"],
        ["Urban Planner", "Have 300 people living in the heat zone of a single Steam Hub"],
        ["Power Overwhelming", "Have a fully upgraded Generator (power, range and overdrive)"],
        ["Vegetarian", "Having a choice, finish a scenario using only Hothouses"],
        ["Carnivore", "Having a choice, finish a scenario using only Hunters"],
        ["Worse than London", "Finish a playthrough without building a single House or Bunkhouse"],
        ["Better than London", "Finish a playthrough without building a single Tent"],
        ["Hyperefficient", "Have a workplace with efficiency greater than ... [200%]"],
        ["Tis but a Scratch", "Finish a playthrough without an Infirmary or House of Healing"],
        ["Charcoaled", "Finish a playthrough with Charcoal Kilns as the only buildings that provide Coal"],
        ["Satellites", "Finish a scenario never expanding the range of the Generator"],
        ["Central Heating", "Finish a scenario without building a single Steam Hub"],
        ["Autonomous City", "In a city of at least 200, have automatons working in more than half of workplaces"],
        ["Shai Hulud Summoner", "Have 4 Coal Thumpers working at the same time"],
        ["Once More unto the Breach", "Provide an amputee with a prosthesis"],
        ["Bread and Games", "In a city of at least 200 people, ensure everyone has access to the Public House and a Fighting Arena"],
        ["Promised Land", "Have maximum hope and no discontent"],
        ["Politician", "Stay in power after your people threatened to overthrow you"],
        ["Bad at Politics", "Keep every promise made during a playthrough"],
        ["Leader", "Finish the New Home scenario"],
        ["Iron Man (New Home)", "Finish the New Home scenario on Hard difficulty"],
        ["Compassionate", "In the New Home scenario, accept all groups of refugees"],
        ["United", "In the New Home scenario, don't let anyone leave for London"],
        ["Lost Souls", "In the New Home scenario, save every person in Frostland"],
        ["The Saviour", "Finish the New Home scenario with no deaths from cold, hunger, sickness or overwork"],
        ["The Iron Saviour", "Finish the New Home scenario with no deaths from cold, hunger, sickness or overwork on Hard difficulty"],
        ["Refugee", "Finish the Refugees scenario"],
        ["Iron Man (Refugees)", "Finish the Refugees scenario on Hard difficulty"],
        ["Search and Rescue", "Rescue all of your people coming to the City"],
        ["Technocrat", "Finish The Arks scenario"],
        ["Iron Man (The Arks)", "Finish The Arks scenario on Hard difficulty"],
        ["Conservationist", "Save all the Seedling Arks in The Arks scenario"],
        ["New Home Survivor", "Finish the New Home scenario in Survivor Mode."],
        ["Refugees Survivor", "Finish the Refugees scenario in Survivor Mode."],
        ["The Arks Survivor", "Finish The Arks scenario in Survivor Mode."],
        ["Winterhome", "Finish the Fall of Winterhome scenario."],
        ["The Winterhome Survivor", "Finish the Fall of Winterhome scenario in Survivor Mode."],
        ["Iron Man (Fall of Winterhome)", "Finish the Fall of Winterhome scenario on Hard difficulty."],
        ["Master Archivist", "Fill the Archives"],
        ["A Tomb for Memories", "Build the Archives"],
        ["Full House", "Have over 700 population"],
        ["Notting Hollow", "Have over 600 population living in Houses only"],
        ["Let There Be Light", "Build 10 Street Lamps"],
        ["Hyde Park Corner", "Have a Town Square of each size"],
        ["Walk on the Grass", "Have a Garden of each size"],
        ["Backup Plan", "Stockpile 35 000 Coal and 10 000 Food Rations"],
        ["Marathon Medium", "Survive 50 days of Endurance mode on Medium or higher difficulty"],
        ["Ultramarathon Medium", "Survive 100 days of Endurance mode on Medium or higher difficulty"],
        ["Marathon Hard", "Survive 50 days of Endurance mode on Hard or higher difficulty"],
        ["Ultramarathon Hard", "Survive 100 days of Endurance mode on Hard or higher difficulty"],
        ["Marathon Extreme", "Survive 50 days of Endurance mode on Extreme difficulty"],
        ["Ultramarathon Extreme", "Survive 100 days of Endurance mode on Extreme difficulty"],
        ["There was no Waldo", "Explore all Frostland sites between the storms"],
        ["Rise of the Machines", "Have 20 working automatons"],
        ["By the Sweat of their Brow", "Survive 75 days without having automatons"],
        ["Builder", "Build the Generator in The Last Autumn scenario"],
        ["The Last Autumn Survivor", "Build the Generator in The Last Autumn scenario in Survivor Mode."],
        ["Iron Man (The Last Autumn)", "Build the Generator in The Last Autumn scenario on Hard difficulty"],
        ["Perfectionist", "Build a Generator with all upgrades and no construction faults"],
        ["I'll Be Home for Christmas", "Build the Generator in The Last Autumn scenario before the last shipment"],
        ["On the Waterfront", "Have 4 Advanced Docks and 12 Reloading Stations working at the same time"],
        ["Fisher King", "Build the Generator in The Last Autumn scenario without setting up any Foragers' Camps"],
        ["Not great, not terrible", "Build the Generator in The Last Autumn scenario, employing people neither in Safe nor Deadly workplaces"],
        ["Messrs Gabriel", "Use Telegraph Station 20 or more times"],
        ["Emissions Reduction", "Build the Generator in The Last Autumn scenario using no Coal consuming buildings"],
        ["All Along the Watchtower", "Build the Generator in The Last Autumn scenario with only convicts and engineers left at the end"],
        ["Arise Ye Workers", "Build the Generator in The Last Autumn scenario with only workers left at the end"],
        ["Bonus Pater Familias", "Build the Generator in The Last Autumn scenario without anyone dying"],
        ["No Crunch", "Build the generator in The Last Autumn scenario using neither Two Shifts nor Extended Shifts"],
        ["Ducks in a Row", "Build the Generator in The Last Autumn scenario without pauses between construction of its parts longer than 24 hours"],
        ["Weathering the Storm", "Build the Generator with no damage from storms in Endless Mode"],
        ["Winter Ready", "Build the Generator before the weather changes in Endless Mode"],
        ["One More Day Syndrome", "Build the Generator and reach day 100 in Endless Mode"],
        ["A for Effort", "Build a Generator with all construction faults in Endless Mode"],
        ["It Was Me All Along", "Find generator parts meant for Winterhome and keep them"],
        ["This is New London, Over", "Contact New London"],
        ["Bald Mountain", "Cut down all the trees in Outpost 11"],
        ["Green Thumb", "Complete all improvements in Hot Springs"],
        ["Defender of the Oppressed", "Complete all improvements in Shipwreck Camp"],
        ["Guardian", "Complete all improvements in Children's Mine"],
        ["First Steps", "Build a safe route"],
        ["Contractor", "Develop all settlements to the highest level"],
        ["Frostland Explorer", "Explore all Frostland sites in On The Edge scenario"],
        ["Social Activist", "Make all other settlements loyal to you"],
        ["Slave Driver", "Make all other settlements distrustful towards you"],
        ["Iron Man (On The Edge)", "Finish On The Edge scenario on Hard difficulty"],
        ["On The Edge Survivor", "Finish On The Edge scenario in Survivor Mode"],
        ["Endless Social Activist", "Make all other settlements loyal to you in Endless Mode"],
        ["I See Friends Holding Hands", "Have an ally send Emergency Aid to another settlement"],
        ["Endless Slave Driver", "Make all other settlements distrustful towards you in Endless Mode"]
    ];

    assert.strictEqual(officialAchievements.length, 96, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["The Scientific Method, vol. 1","The Scientific Method, vol. 2","Please, Sir, I Want Some More","Golden Path","My Turn to Speak","Banksy","Negotiator","The Union","Unknown Ship","Everybody Lived for Once","Sprinter","All children on board","Full Dreadnought","Hi Marek!","You Had To Do It","I Feel Lucky","All Your Base Are Connect To Us","Unforgiven","We Are In This Together"]);

    const dataPairs = frostpunk.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 19 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden = [
        ["Society: The scientific method", "The Scientific Method, vol. 1"],
        ["Society: The scientific method, vol 2", "The Scientific Method, vol. 2"],
        ["Society: Consolation prize", "Please, Sir, I Want Some More"],
        ["New Home: Golden path", "Golden Path"],
        ["New Home: My turn to speak", "My Turn to Speak"],
        ["New Home: Banksy", "Banksy"],
        ["New Home: Negotiator", "Negotiator"],
        ["Refugee: The Union", "The Union"],
        ["Refugee: Uknown Ship", "Unknown Ship"],
        ["Tech Haven: Everybody lived for once", "Everybody Lived for Once"],
        ["Tech Haven: Sprinter", "Sprinter"],
        ["Winterhome: All children on board", "All children on board"],
        ["Winterhome: Full Dreadnought", "Full Dreadnought"],
        ["Endless: Hi Marek", "Hi Marek!"],
        ["Reconquest: You Had To Do It", "You Had To Do It"],
        ["Reconquest: I Feel Lucky", "I Feel Lucky"],
        ["Reconquest: All Your Base Are Connect To Us", "All Your Base Are Connect To Us"],
        ["Reconquest: Unforgiven", "Unforgiven"],
        ["Reconquest: We are In This Together", "We Are In This Together"]
    ];

    assert.strictEqual(hidden.length, 19, "sanity check on this test's own reference list");

    for (const [apiname, name] of hidden) {

        const achievement = frostpunk.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
