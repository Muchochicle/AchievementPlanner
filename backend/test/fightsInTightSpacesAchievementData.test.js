import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fights-in-tight-spaces.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1265820 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fights-in-tight-spaces");

test("getPlannerData('fights-in-tight-spaces') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for fights-in-tight-spaces");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Fights in Tight Spaces achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Fights in Tight Spaces achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Fights in Tight Spaces achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Close Shave", "Defeat the Carlton Boys with the K-9 Handler deck"],
        ["A Cut Above", "Defeat the Carlton Boys with the K-9 Support deck"],
        ["All the Things", "Unlock all cards and help screens in the compendium"],
        ["Almighty", "Deal 100 damage in a single attack"],
        ["Ambassador's Commendation", "Rescue the Ambassador from the Occultists"],
        ["Antique Horror Show", "Destroy all four Relic types"],
        ["Bag of Tricks", "Win a run with at least 50 cards in your deck at the end of the run"],
        ["Basic B", "Win a run without upgrading any cards"],
        ["Bestest Friends", "Deal 1000 Damage with Support Attacks"],
        ["Binders of Power", "Unlock all cards in the compendium"],
        ["Bullseye", "Hit an enemy with a Stun Dart card in front of the dartboard in the bar, during the Death's Head Biker Gang mission."],
        ["Can't Touch This", "Complete a run without Agent K being downed"],
        ["Carpe Kill'em", "Complete a Daily Play"],
        ["Cheap Jumpscare", "End a turn with 5 or more Combo after being jumpscared in the Crypt"],
        ["Combo Master", "Get a 20 combo"],
        ["Crown Jewels", "Use Testekill on 100 enemies"],
        ["Death by Diplomat", "Push a heavily damaged enemy (under 4 HP) into a killing blow using your Informant or Ambassador partner - a push, not a taunt or redirect."],
        ["Death to Death's Head", "Encounter and defeat all 3 lieutenants in the Death's Head Biker Gang mission"],
        ["Divide and Conquer", "Complete a fight with Cultists without triggering any support attacks"],
        ["Double Crossed Out", "Encounter and defeat both lieutenants in the Renegade Agents mission."],
        ["Flawless Aim", "Complete a Weapon of Choice campaign on Purist"],
        ["Hair Trigger", "Play 6 gun cards in a single turn"],
        ["He Protecc", "Complete a run without losing an Informant or Ambassador"],
        ["Hook, Line, and Sinker", "Kill an enemy by using Lure before pushing them into a void"],
        ["I Wasn't Aiming At You", "Kill a Boss using Near Miss"],
        ["Immovable Object", "Win a fight without using any movement cards"],
        ["Inside Out", "Complete the Insiders mission"],
        ["Into the Void", "Throw 100 enemies out of the board"],
        ["Lemmings", "Push 3 enemies off the board at once using Come-Bye"],
        ["Line 'em Up, Knock 'em Down", "Kill 3 enemies with a single bullet using Piercing Shot"],
        ["Mission Accomplished", "Complete a full run (all missions)"],
        ["Ninja! Go!", "Complete the Jade Staff mission"],
        ["Off With Their Head", "Complete the Death's Head Biker Gang mission"],
        ["Overfeeding", "Have 5 Treat cards in your deck at one time"],
        ["Overpowered", "Deal 50 damage in a single hit"],
        ["Pacifist", "Win a fight without playing an Attack card"],
        ["Panik!", "Panic 4 enemies on the board during the same turn"],
        ["Parole Denied", "Encounter and defeat all 3 lieutenants in The Insiders mission"],
        ["Part of the Job", "Complete Frights in Tight Spaces"],
        ["Pawfection", "Complete a run on Purist with a K-9 deck"],
        ["Peripheral Punishment", "Kill 25 enemies by countering their support attacks"],
        ["Pistol Pooch", "Complete a run with both gun and dog cards in your deck"],
        ["Pocket Change", "Have £1,000 at any stage in the game"],
        ["Primal Rage", "Deal 50 Damage with a single dog attack"],
        ["Purification Ritual", "Complete Frights in Tight Spaces on Purist difficulty"],
        ["Purity", "Complete a full run on Purist difficulty"],
        ["Rookie", "Complete the Section 11 Training"],
        ["Sand Blasted", "Kill an enemy using the Pocket Sand card."],
        ["Shur-You-Can", "Encounter and defeat all 3 lieutenants in the Jade Staff mission"],
        ["Specialist", "Win a run with 16 or fewer cards in your deck at the end of the run"],
        ["Speed Run", "Win a run in under an hour"],
        ["Stay", "Win a fight without using any dog movement cards"],
        ["Stepping on Toes", "Complete the iCompleti mission"],
        ["That'll Do", "Push 100 enemies with Come-Bye"],
        ["The All-Rounder", "Win a run using the Balanced deck"],
        ["The Defender", "Win a run using the Counter deck"],
        ["The Fighter", "Win a run using the Aggressive deck"],
        ["The Slasher", "Win a run using the Slasher deck"],
        ["The Trickster", "Win a run using the Trickster deck"],
        ["The Wrestler", "Win a run using the Grappler deck"],
        ["These should be in a museum", "Win 5 fights in which Relics are present, without them taking any damage"],
        ["Three Gs", "Encounter and defeat all 3 lieutenants in the i Completi mission"],
        ["Tis But a Scratch", "Win a fight with 1 HP remaining"],
        ["Trapaholic", "Have 50 enemies killed by Traps"],
        ["Unfriendly Fire", "Get 100 enemies killed by other enemies"],
        ["Untouchable", "Win a boss fight without taking any damage"],
        ["What's Updog?", "Distract 100 enemies"],
        ["Wild West", "Change stances 4 times in a single turn"],
        ["Woulda gotten away with it, too...", "Complete a run in which all three bosses are killed by traps"],
        ["Yeet", "Win a fight by throwing ALL enemies into the void"],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
