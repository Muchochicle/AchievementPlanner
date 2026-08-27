import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/disco-elysium.json - 45 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 632470 (fetched through this app's own services/steamApi.js) -
// 41 of 45 ship a real, official Steam description. Recruit Detective
// Kuuno de Ruyter, Gluten-Free Topping Pie, Palerunner, and Real Musor
// are hidden achievements Steam never describes publicly (confirmed via
// the same API call) - their descriptions here are curatorial summaries
// of their real, community-documented unlock conditions (cross-checked
// against TrueAchievements and PlayStationTrophies' independent
// documentation). difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const discoElysium = getPlannerData("disco-elysium");

test("getPlannerData('disco-elysium') returns real planner data with 45 curated achievements", () => {

    assert.ok(discoElysium, "expected real planner data for disco-elysium");
    assert.ok(Array.isArray(discoElysium.achievements));
    assert.strictEqual(discoElysium.achievements.length, 45);

});

test("every Disco Elysium achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = discoElysium.achievements.map(a => a.id);
    const apinames = discoElysium.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Disco Elysium achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of discoElysium.achievements) {

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

test("every one of the 41 officially-described Disco Elysium achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 4 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Unbelievably Boring F**k", "Say 7 incredibly boring things"],
        ["Hyperstellar Law Official", "Say 7 deranged superstar lines"],
        ["The Opener Of The Eighth Seal", "Warn them of the coming end 8 times"],
        ["Literally The Sorriest Cop On Earth", "Apologize 10 (!!!) times"],
        ["Biggest Communism Builder", "Employ critical theory 9 times"],
        ["Truly Rabid \"Traditionalist\"", "Say 10 \"traditionalist\" things"],
        ["The World's Most Laughable Centrist", "Defend the political centre 7 times"],
        ["Baddest Hustler In The Neoliberal Hood", "Preach free market for 9 times"],
        ["Expert Advanced Remote Viewer", "See beyond the veil 6 times"],
        ["Massive Torque Dork", "Yack about machines 4 times"],
        ["Il Coppo Del'Arte!", "Say 5 Art Cop lines"],
        ["The Most Honourable Cop in The Land", "Gather 11 honour points"],
        ["Enemy Of The Physical Realm", "Bang up 5 inanimate objects"],
        ["The Lawbringer", "Say you're the law 7 times"],
        ["Baddest Of the Bad Cops", "Hit an all time low with Kim"],
        ["Goodest Of The Good Cops", "Really get Kim to trust you"],
        ["Recruit Detective Kim Kitsuragi", "Precinct 57's finest"],
        ["The Figurines Won't Win Her Back", "They do nothing"],
        ["Fairweather t-500 Vitreous Enamel", "Suit up. Head to toe."],
        ["Venture into the HARDCORE", "Godspeed"],
        ["True Detective", "Finish the game in HARDCORE mode"],
        ["Avowed Inframaterialist", "Don't call it a book club."],
        ["The Icebreaker", "You can still move your face with your fingers."],
        ["Networthy Individual", "Every day you're husslin'..."],
        ["Committee of la Responsabilité", "Someone should do something about this."],
        ["What body?", "Solve the case without even inspecting the body."],
        ["Medal dispenser", "Here, just have one, they're free."],
        ["Hardie's Heroes", "Pour one out for social democracy"],
        ["Cause a Shitstorm", "You brought this on yourself"],
        ["Leopard Mindset", "*This* is the kind of animal you want to be"],
        ["Wheel of Pleasure and Light", "Reconstruct a vision from the past"],
        ["Modus: Mullen", "It's black-and-white out there"],
        ["Bother Kim After Hours", "He probably won't mind"],
        ["Baddest Brow in Town", "Force Kim to reveal his secrets"],
        ["Gurdi-Ball Is Lit", "Get your pinball on"],
        ["Get Kim to Wear *The Jacket*", "You know which one"],
        ["Spectres of Hope", "Glimpse it while you can"],
        ["Old Flame", "Surely, it can be killed with fire"],
        ["Looks Like Progress", "Spinning its wheels"],
        ["Priceless Facade", "Money-smooth streets of gentrification"],
        ["Now For A Difficult Provenance", "Restore all of the hidden photos"]
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Recruit Detective Kuuno de Ruyter", "Gluten-Free Topping Pie", "Palerunner", "Real Musor"
    ]);

    const dataPairs = discoElysium.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 4 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const cuno = discoElysium.achievements.find(a => a.apiname === "ACH_CUNO");
    const gluten = discoElysium.achievements.find(a => a.apiname === "ACH_GLUTEN");
    const palerunner = discoElysium.achievements.find(a => a.apiname === "ACH_PALERUNNER");
    const realMusor = discoElysium.achievements.find(a => a.apiname === "ACH_REAL_MUSOR");

    assert.ok(cuno && cuno.name === "Recruit Detective Kuuno de Ruyter" && cuno.description.length > 0);
    assert.ok(gluten && gluten.name === "Gluten-Free Topping Pie" && gluten.description.length > 0);
    assert.ok(palerunner && palerunner.name === "Palerunner" && palerunner.description.length > 0);
    assert.ok(realMusor && realMusor.name === "Real Musor" && realMusor.description.length > 0);

});
