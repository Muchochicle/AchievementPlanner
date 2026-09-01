import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/frostpunk-2.json - 79 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1601580 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("frostpunk-2");

test("getPlannerData('frostpunk-2') returns real planner data with 79 curated achievements", () => {

    assert.ok(game, "expected real planner data for frostpunk-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 79);

});

test("every Frostpunk 2 achievement has a unique id from 1 to 79 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 79 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 79);
    assert.strictEqual(new Set(apinames).size, 79);

});

test("every Frostpunk 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 79 Frostpunk 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["… and fill the earth", "Reach over 50,000 population outside of your main city"],
        ["A Small Step...", "Unlock a Utopia Tree Node"],
        ["Adapted to Weather", "Have Disease Absent and Cold Absent for 20 weeks, when there is at least -100 Celsius degrees"],
        ["Ambitious", "Complete all Ambitions in Utopia Builder mode"],
        ["Anger management", "Complete a playthrough without letting any faction's Fervour reach its maximum level."],
        ["Another day in paradise", "Complete a playthrough in Utopia Builder mode"],
        ["Apex Predator", "Survive until week 500 without building a single Extraction District (Icebloods' Utopia)"],
        ["Apocalypse Nah", "Complete the ‘Apocalyptic Whiteout’ Tale"],
        ["Art in Ruins", "Survive 100 weeks with 50% Wear in at least 20 Districts (Bohemians' Utopia)"],
        ["Bonfire", "Don't let Civil War spread over 5 or more districts"],
        ["Born Ready", "Complete three Tales in a single playthrough on at least Steward difficulty"],
        ["Bring it on!", "Complete the 'Defeat the Frost' or 'Embrace the Frost' research path before the Whiteout arrives."],
        ["Can't stop progress", "Have Squalor Absent despite having at least 1000 Material Demand"],
        ["Chancellor of the Exchequer", "Have at least 50 income of heatstamps"],
        ["Checks and balances", "Complete the Story without passing any Rule laws on at least Captain difficulty"],
        ["Comeback Kid", "Have 'Reviled' level of Trust and then win the next First Citizen Election"],
        ["Consistency", "Never research a building or pass a law of the opposite affinity to the one you already have"],
        ["Coredigger", "In the New London story (Winterhome chapter), salvage all core deposits in Winterhome before toxic gases engulf the city."],
        ["Don't starve", "Have no Hunger in New London for the entire duration of the Whiteout."],
        ["Firm, But Civil", "No deaths caused by Civil War during the whole game"],
        ["Flawless Victory", "In the 'Breach of Trust' scenario, conquer Aurora without losing a single battle."],
        ["FrostCity", "Have at least 5 different area effects applied to the district"],
        ["Fully Deployed", "Reach week 500 without ever Frostbreaking or demolishing a Deployment Base (Legionnaires' Utopia)"],
        ["Got Milk?", "Survive until week 500 without building a single Food District (Menders' Utopia)"],
        ["Gotta Go Fast", "Complete the ‘Depleted Cores’ Tale under 200 weeks on at least Steward difficulty"],
        ["Green Power", "Fulfil at least 300 Heat demand using Steam and have absent Squalor"],
        ["Guiding Light", "Complete the ‘Beacon of Hope’ Tale"],
        ["Healer", "Complete the 'Plague' Tale"],
        ["I love democracy", "Have no votes against Captain's Authority policy"],
        ["I Remember", "Display 130 Mementos (Overseers' Utopia)"],
        ["Idle Hands are the Devil's Playthings", "Have at least 90% of the population be active workers in your city"],
        ["Isolationist", "Complete a playthrough without gathering any resources from the frostland or colonies"],
        ["Law and Order", "Have Crime and Tension Absent in the City with at least 30k population"],
        ["Lawmaker", "Pass at least 20 new laws in a single playthrough"],
        ["Likeable", "Never have relations worse than Sceptical with any community or faction."],
        ["Megalopolis", "Reach over 60,000 population in your main city"],
        ["Miracle Worker", "Complete the 'Plague' Tale without suffering any death from the plague"],
        ["Mixed Signals", "Have rallies and protests in the City at the same time"],
        ["Moving out", "Have a banished faction leave New London of their own accord (give them a colony with basic provisions rather than forcing them out)."],
        ["New Oxbridge", "Double starting Research speed"],
        ["No lesser evil", "In the prologue, ensure the Wanderers survive by saving the seals and without driving away the elders (no Seal Colony food extraction, no expelling elders)."],
        ["No One Left Behind", "Complete the ‘Beacon of Hope’ Tale without any deaths on at least Steward difficulty"],
        ["No-brainer", "Have 100% of delegates vote in favour of any law"],
        ["Not on my watch", "Complete a playthrough without any avoidable deaths"],
        ["Optimist", "Complete the 'Doomsayers' Tale"],
        ["Paradise City", "Have all problems absent for 50 weeks in the City with at least 15k population"],
        ["Peacemaker", "End the civil war through the Path of Reconciliation (negotiate peace with both sides)."],
        ["People person", "Have maximum trust"],
        ["Plumber", "In the New London story (Winterhome chapter, Settle Winterhome path), clog all gas sources before the first rise of toxicity, on at least Steward difficulty."],
        ["Pork Barrel", "Fulfil at least 1 promise to 5 different communities and factions in one playthrough"],
        ["Power Overwhelming 2.0", "Have twice as much heat abundance as heat demand across the city."],
        ["Prepper", "In the 'Breach of Trust' scenario, ensure no one dies during the tremors in New Edinburgh up until the first eruption."],
        ["Primus inter pares", "Never be in danger of losing your position due to low Trust or high Tension"],
        ["Protean Shake", "Have a Workforce 2x your Population size without any Automaton Factory (Proteans' Utopia)"],
        ["Prove Them Wrong", "Complete the 'Doomsayers' Tale without ever triggering the Tension or Trust crises."],
        ["Pure Dead Brilliant", "Finish the 'Breach of Trust' scenario without any deaths (on at least Steward difficulty)"],
        ["Quiet Backwater", "Have no problem higher than Minor in a colony for 300 consecutive weeks."],
        ["Raiders of the Lost Cores", "Complete the ‘Depleted Cores’ Tale"],
        ["Revered Leader", "Have \"Devoted\" relations with all communities and factions"],
        ["Seen Worse", "Complete ‘Apocalyptic Whiteout’ without Hunger and Disease over Minor on at least Steward difficulty"],
        ["Settler", "Set up 3 colonies"],
        ["Sneak a Peek", "See 10 different situations near a district hub (zoom into a district and let situations appear before resolving them)."],
        ["Steward Little", "Have negative relations with every community and faction at once."],
        ["Thank you for your feedback", "Disregard a community's requested solution to a situation 5 times in one playthrough."],
        ["The Ambitions of New London", "Complete the Story on any difficulty"],
        ["The Demons of New London", "Complete the Story on Captain difficulty"],
        ["The End is Just the Beginning", "In the prologue, make sure the Wanderers survive the Whiteout."],
        ["The Temptations of New London", "Complete the Story on at least Steward difficulty"],
        ["There is No Final Design", "Enact a law, replace it with another from the same category, then pass the original law again."],
        ["To each according to his needs", "Have at least 20k heatstamps and over 200k Goods stockpile"],
        ["Trickle-Down Economics", "Generate at least 1 Heatstamp Income per 100 Citizens (Venturers' Utopia)"],
        ["Urban Planner", "Have 10 districts affected by hubs"],
        ["Visionary", "Research 60 different ideas under 600 weeks"],
        ["Way Ahead of You", "In the 'Breach of Trust' scenario, evacuate everybody and everything valuable before the final eruption."],
        ["We Are Not The Same", "Meet all factions in Utopia Builder mode"],
        ["We're So Back", "In the 'Breach of Trust' scenario, regain access to Aurora."],
        ["What Dreams May Come", "Finish the 'Breach of Trust' scenario"],
        ["Who Saw That Coming?", "In the 'Breach of Trust' scenario, remain in power in New Edinburgh until the mountain awakes."],
        ["π not?", "Generate exactly 314 Compute (Technocrats' Utopia)"],
    ];

    assert.strictEqual(officialAchievements.length, 79, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
