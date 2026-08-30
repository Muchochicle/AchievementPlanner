import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/risk-global-domination.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1128810 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 55 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("risk-global-domination");

test("getPlannerData('risk-global-domination') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for risk-global-domination");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every RISK: Global Domination achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every RISK: Global Domination achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 RISK: Global Domination achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1K Down", "Defeat 1,000 enemy troops"],
        ["All Four One, One For All", "Roll 4 ones in a row"],
        ["Anti-Victor", "Lose 50 games"],
        ["Army Assembler", "Draft 10,000 troops"],
        ["Army Of One", "Win 50 single player games"],
        ["Battalion Builder", "Draft 1,000 troops"],
        ["Better Luck Next Time", "Be eliminated before your first turn"],
        ["Card Collector", "Turn in 10 sets of Territory cards"],
        ["Card Connoisseur", "Turn in 50 sets of Territory cards"],
        ["Cashed Up", "Make an in-app purchase"],
        ["Corps Creator", "Draft 250 troops"],
        ["Cower Puny Humans", "Defeat 100 human players"],
        ["Familiar Ground", "Play the same map 10 times"],
        ["Fanatic", "Play 100 RISK games"],
        ["Fourth time's a Charm", "Lose 3 games in a row"],
        ["Friendship", "Form 1st alliance"],
        ["Full Deck", "Turn in 100 sets of Territory cards"],
        ["Global Gamer", "Win 25 \"Play Online\" multiplayer games"],
        ["Impenetrable", "Defend 15 attacks in a row"],
        ["International Champion", "Win 100 \"Play Online\" multiplayer games"],
        ["Land Baron", "Hold 9 Territory cards at once"],
        ["Loaded Dice", "Roll 4 sixes in a row"],
        ["Lone Wolf", "Win 100 single player games"],
        ["Long Engagement", "Compete in a game that lasts 15 turns or more"],
        ["Long Vacation", "Conquer 10 territories in a single turn"],
        ["Magnifique", "Defeat 5 expert computer players in a single game of the French Revolution map"],
        ["Make It On Your Own", "Win 25 single player games"],
        ["Making Connections", "Play an online multiplayer game"],
        ["Matchmaker", "Start a game using Automatch"],
        ["No Strings Attached", "Break 5 alliances"],
        ["Peacemaker", "Form 25 alliances"],
        ["Pen Pal", "Make one new global multiplayer friend"],
        ["Planetary Player", "Win 50 \"Play Online\" multiplayer games"],
        ["Private Eyes", "Click on privacy links"],
        ["Rising Star", "Defeat 25 computer or human players"],
        ["Shields Up", "Defend 5 attacks in a row"],
        ["Short Holiday", "Conquer 5 territories in a single turn"],
        ["Slippery Slope", "Lose 10 games"],
        ["Smiley Face", "Express yourself through 10 Emojis"],
        ["Socialite", "Form 50 alliances"],
        ["Solo Effort", "Win 1 single player game"],
        ["Spoils of War", "Claim 50 cards from defeated players"],
        ["Stonewall", "Defend 10 attacks in a row"],
        ["System Error", "Defeat 100 computer players"],
        ["Take No Prisoners", "Defeat 10,000 enemy troops"],
        ["The Big 5-0-0-0", "Defeat 5,000 enemy troops"],
        ["The Chameleon", "Play 5 games with different avatars"],
        ["The World is Yours", "Defeat 5 expert AIs in a single game of Classic World Domination Map"],
        ["Unlucky Streak", "Lose 3 games "],
        ["Unquenchable Thirst for Glory", "Defeat 50 computer or human players"],
        ["Veteran", "Achieve 200 victories"],
        ["Wanna Rumble?", "Agree to 10 \"let's attack\" requests"],
        ["Well Educated", "Tap on most of the help tooltips"],
        ["World Debut", "Win 1 \"Play Online\" multiplayer game"],
        ["World Tour", "Conquer 15 territories in a single turn"],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
