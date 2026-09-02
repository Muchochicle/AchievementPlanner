import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ghostwire-tokyo.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1475810 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ghostwire-tokyo");

test("getPlannerData('ghostwire-tokyo') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for ghostwire-tokyo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every Ghostwire: Tokyo achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every Ghostwire: Tokyo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 66 Ghostwire: Tokyo achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Shrubbery!", "Defeat a total of 3 Visitors with Quick Purge while hiding in bushes created by a Thicket Talisman."],
        ["Amateur Photographer", "Use Photo Mode for the first time."],
        ["Animal Lover", "Pet an animal (a cat or dog) somewhere in Shibuya."],
        ["Beginnings", "Complete Chapter 1."],
        ["Better Together", "Fuse back with KK after being hit by a Visitor's severance attack."],
        ["Big Spender", "Spend a total of 1,000,000 meika."],
        ["Binding", "Complete Chapter 6."],
        ["Boundless Spirit", "Acquire the maximum number of katashiro."],
        ["Catalog Conqueror", "STU: Complete all nekomata jobs in \"The Spider's Thread\" mode."],
        ["Collector", "Acquire all relics."],
        ["Conclusions", "Complete the main storyline - the finale, described here spoiler-free."],
        ["Connection", "Complete Chapter 3."],
        ["Contortion", "Complete Chapter 4."],
        ["Couldn't Take the Heat", "Defeat at least 3 Visitors simultaneously by detonating a red ether crystal."],
        ["DJ Akito", "Acquire all music tracks (excluding update content)."],
        ["Don't Worry About It", "Pull a 'Daikyo' (worst-luck) fortune from an omikuji fortune stand."],
        ["Echoes of the Past", "Acquire a voice log."],
        ["Figure Aficionado", "STU: Try your luck at capsule machines at least 50 times."],
        ["Freeze, Scumbag", "Defeat a total of 10 Visitors with Quick Purge while they are held by a Stun Talisman."],
        ["Further Liberation", "STU: Cleanse all newly-added torii gates."],
        ["Go For the Eyes", "Defeat a total of 20 Visitors with headshots."],
        ["Gourmand", "Acquire all types of food and drink."],
        ["Heartbreaker", "Defeat a Visitor by pulling out its core."],
        ["Helping Hand", "Transfer 25% of the spirits in the city."],
        ["Hero of Shibuya", "Complete the main story after transferring at least 100% of the spirits in the city."],
        ["In Sync", "Wire In a total of 10 times."],
        ["It's All Thanks to Yokai", "Acquire a magatama."],
        ["Left Yourself Open", "Defeat a total of 10 Visitors by exposing their cores with Exposure Talismans and ripping them out."],
        ["Liberator", "Cleanse all torii gates (excluding update content)."],
        ["Lonely Tsukimi", "Spend at least 30 seconds looking up at the moon."],
        ["Master of Blocking", "Perform a total of 30 Perfect Blocks."],
        ["Mind and Body", "Unlock all Spirit Skills (excluding update content)."],
        ["On the Same Wavelength", "Raise your synergy level to 50 or higher."],
        ["On-The-Job Training", "STU: Unlock all newly-added Spirit Skills."],
        ["One Fell Swoop", "Defeat at least 5 Visitors simultaneously by pulling out their cores."],
        ["Opening a Path", "Cleanse a torii gate."],
        ["Pilgrim", "Pray to all Jizo statues."],
        ["Pious", "Put a total of 10,000 meika into offering boxes."],
        ["Power Overwhelming", "Acquire all sets of prayer beads (excluding update content)."],
        ["Problem Solver", "Complete a side mission."],
        ["Roadside Spirituality", "Pray to a Jizo statue."],
        ["Salvation of All", "Transfer at least 100% of the spirits in the city."],
        ["Savior", "Transfer 50% of the spirits in the city."],
        ["Scary Stories to Tell at School", "The Spider's Thread update: complete all newly-added side missions set at the school."],
        ["Severance", "Complete Chapter 5."],
        ["Shibuya Is My Back Yard", "Find all landmarks."],
        ["Silent Kill", "Defeat a total of 200 Visitors using Quick Purge."],
        ["Sniper", "Defeat a Visitor with a headshot from at least 40 metres away."],
        ["Soul Breaker", "Defeat 50 Visitors by pulling out their cores."],
        ["Spirit Photographer", "The Spider's Thread update: complete all newly-added spirit-photograph side missions."],
        ["Take a Bow", "Defeat a total of 50 Visitors using the bow."],
        ["Talismania", "Acquire all talismans (excluding update content)."],
        ["The Whole Truth", "Acquire all voice logs."],
        ["Treasure Hunter", "Acquire a relic."],
        ["Trendsetter", "Acquire all items for the Outfit menu (excluding bonus and update content)."],
        ["Trouble", "Complete Chapter 2."],
        ["Unexpected Visitors", "STU: Defeat at least one of every newly-added type of Visitor."],
        ["Unparalleled Talismaniac", "STU: Acquire all newly-added talismans."],
        ["Views From the Abyss", "STU: Complete \"The Spider's Thread\" mode."],
        ["Visiting Hours Are Over", "Defeat at least one of every type of Visitor (excluding update content)."],
        ["Walking on Air", "Grapple to a Tengu and glide to stay airborne for at least 10 seconds."],
        ["Welcome to Shibuya", "The Spider's Thread update: acquire at least one SHIBUYA HACHI stamp."],
        ["Wishmaker", "Complete all side missions (excluding update content)."],
        ["With Their Powers Combined", "Acquire 40 or more different magatama."],
        ["You Wouldn't Steal a Spirit", "Successfully protect at least 3 Containment Cubes in a single battle."],
        ["Your Tail's Showing", "Find all of the missing tanuki."],
    ];

    assert.strictEqual(officialAchievements.length, 66, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
