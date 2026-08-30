import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/doom-3.json - 65 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 208200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("doom-3");

test("getPlannerData('doom-3') returns real planner data with 65 curated achievements", () => {

    assert.ok(game, "expected real planner data for doom-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 65);

});

test("every DOOM 3 achievement has a unique id from 1 to 65 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 65 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 65);
    assert.strictEqual(new Set(apinames).size, 65);

});

test("every DOOM 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 65 DOOM 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 Deaths - 1 Gun", "Kill two enemies in the same room with a rocket in DOOM 3 Multiplayer"],
        ["All of Us", "Find the id logo secret room in DOOM 3"],
        ["Berserked!", "Use Berserk to kill a player in DOOM 3 Multiplayer"],
        ["Big Boy", "Defeat Cyberdemon boss in DOOM 3"],
        ["Boomtastic", "Blow up 50 barrels in the DOOM 3, RoE, or Lost Mission campaigns"],
        ["Bot Buddy", "Keep a Sentry Bot alive to its destination in DOOM 3, RoE, or Lost Mission (except Mars City)"],
        ["Clean Sheet", "Complete a DOOM 3 Multiplayer match without dying"],
        ["Cookie Stealer", "Defeat Guardian boss in DOOM 3"],
        ["Crushed!", "Catch an enemy player in the Reactor of Frag Chamber in DOOM 3 Multiplayer"],
        ["DOOM II: A Really Big Gun", "Find a BFG in DOOM II single player"],
        ["DOOM II: An Important Looking Door", "Find a secret area of a DOOM II level in single player"],
        ["DOOM II: And Back Again", "Complete all levels in 'DOOM II: No Rest for the Living' in single player"],
        ["DOOM II: Burning Out of Control", "Complete any DOOM II level with 100% kills, items, and secrets in single player"],
        ["DOOM II: From Earth to Hell", "Complete all levels in 'DOOM II: Hell on Earth' in single player"],
        ["DOOM II: Just Getting Started", "Complete any DOOM II level in single player"],
        ["DOOM II: Superior Firepower", "Complete all 'DOOM II: Hell on Earth' levels on 'Ultra-Violence' or higher in single player"],
        ["DOOM: Burning Out of Control", "Complete any DOOM level with 100% kills, items, and secrets in single player"],
        ["DOOM: Episode 1", "Complete DOOM Episode 1 on 'Hurt Me Plenty' or higher in single player"],
        ["DOOM: Episode 2", "Complete DOOM Episode 2 on 'Hurt Me Plenty' or higher in single player"],
        ["DOOM: Episode 3", "Complete DOOM Episode 3 on 'Hurt Me Plenty' or higher in single player"],
        ["DOOM: Episode 4", "Complete DOOM Episode 4 on 'Hurt Me Plenty' or higher in single player"],
        ["DOOM: Nightmare", "Complete any DOOM level on 'Nightmare' in single player"],
        ["DOOM: Rampage", "Complete all DOOM levels on 'Ultra-Violence' or higher in single player"],
        ["DOOMed Collector", "Collect every PDA in DOOM 3"],
        ["DOOMed Marine", "Complete the DOOM 3 single player campaign on Marine"],
        ["DOOMed Nightmare", "Complete the DOOM 3 single player campaign on Nightmare"],
        ["DOOMed Recruit", "Complete the DOOM 3 single player campaign on Recruit"],
        ["DOOMed Veteran", "Complete the DOOM 3 single player campaign on Veteran"],
        ["Double the Fun!", "Kill 2 Imps with one shotgun blast in DOOM 3, RoE, or Lost Mission"],
        ["Eat This!", "Defeat the Maledict boss in RoE"],
        ["Evil Collector", "Collect every PDA in the RoE campaign"],
        ["Evil Marine", "Complete the RoE campaign on Marine"],
        ["Evil Nightmare", "Complete the RoE campaign on Nightmare"],
        ["Evil Recruit", "Complete the RoE campaign on Recruit"],
        ["Evil Veteran", "Complete the RoE campaign on Veteran"],
        ["Fists of Fury", "Use the Artifact with Berserk ability to punch out 20 enemies in RoE"],
        ["Gimme Power!", "Defeat the Berserk Hunter in RoE"],
        ["Gimme Time!", "Defeat the Helltime Hunter in RoE"],
        ["Goody Finder", "Open all storage lockers in DOOM 3"],
        ["I Like to Watch", "Find all video logs in DOOM 3"],
        ["Killing time", "Score 25000 on Super Turbo Turkey Puncher 3 in DOOM 3 or RoE"],
        ["Lost Collector", "Collect every PDA in the Lost Mission campaign"],
        ["Lost Marine", "Complete the Lost Mission campaign on Marine"],
        ["Lost Nightmare", "Complete the Lost Mission campaign on Nightmare"],
        ["Lost Recruit", "Complete the Lost Mission campaign on Recruit"],
        ["Lost Veteran", "Complete the Lost Mission campaign on Veteran"],
        ["Neophyte", "Complete any level in Ultimate DOOM in singleplayer"],
        ["Ninja Killer", "Kill 5 enemy players while using Invisibility in DOOM 3 Multiplayer"],
        ["Not a Scratch", "Complete a level without taking any damage in DOOM 3, RoE, or Lost Mission (except Mars City)"],
        ["Play Catch", "Kill 20 enemies with projectiles launched from the Grabber in RoE"],
        ["RAGE", "Find the RAGE logo in the Lost Mission"],
        ["Ready for Action!", "Get the BFG-9000 from Security Chief's office in DOOM 3"],
        ["Ripped!", "Use the chainsaw to kill 20 enemies in DOOM 3"],
        ["Shocking!", "Defeat the Invulnerability Hunter in RoE"],
        ["Soulfood", "Use the Soul Cube to defeat 20 enemies in DOOM 3"],
        ["Speed Run", "Complete the DOOM 3 single player campaign in 10 hours or less"],
        ["Sticky Situation", "Defeat the Vagary boss in DOOM 3"],
        ["Telefragged!", "Kill an enemy player by jumping into a teleporter after them in DOOM 3 Multiplayer"],
        ["That was Close!", "Kill an enemy with 1 health remaining in DOOM 3, RoE, or Lost Mission"],
        ["To Be or Not to Be", "Kill the scientist trapped next to the Reactor Control Room in DOOM 3"],
        ["Too Slow, Fool!", "Kill 5 enemies at once while in Hell Time in RoE"],
        ["Turncoat", "Get 2 demons to fight each other in DOOM 3, RoE, or Lost Mission"],
        ["Unarmed Badass", "Kill 20 enemies with the fists/melee hands in DOOM 3"],
        ["You Laugh, It Works", "Find the bloody handiwork of Betruger (in Delta 4 Hallway) in DOOM 3"],
        ["You're Not My Boss!", "Defeat Sabaoth boss in DOOM 3"],
    ];

    assert.strictEqual(officialAchievements.length, 65, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
