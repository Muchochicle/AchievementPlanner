import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grand-theft-auto-san-andreas-the-definitive-edition.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1547000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("grand-theft-auto-san-andreas-the-definitive-edition");

test("getPlannerData('grand-theft-auto-san-andreas-the-definitive-edition') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for grand-theft-auto-san-andreas-the-definitive-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every GTA: San Andreas Definitive Edition achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every GTA: San Andreas Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 GTA: San Andreas Definitive Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Here we go again", "Start a new game after getting 100% on a save file."],
        ["A Legitimate Business", "Export all three car lists."],
        ["Ain’t Nothing But a G Thing", "Own all gang warfare turfs, properties and have $1,000,000."],
        ["All Dressed Up for San Fierro", "Complete \"The Green Sabre\"."],
        ["Assassin", "Stealth kill all enemies in the mission \"Madd Dogg's Rhymes\"."],
        ["Bike or Biker", "Complete BMX or NRG challenge."],
        ["Chick Magnet", "Achieve maximum sex appeal."],
        ["Double or Nothin'", "Put all your money or the maximum bet on red or black and win."],
        ["Getting Started", "Complete \"Big Smoke\"."],
        ["Hoopin' it Up", "Score at least 30 points in the basketball mini-game."],
        ["Horror of the Santa Maria", "Drown."],
        ["I Ain't No Buster", "Unlock all achievements."],
        ["I’ll Have Two Number 9s", "Reach maximum weight."],
        ["Liberty City State of Mind", "Complete the \"Saint Mark's Bistro\" mission."],
        ["Lucky Spinner", "Win at least $1,000 in a single spin of the Wheel of Fortune."],
        ["Not a Player", "Go on at least one date with every potential girlfriend."],
        ["Original Gangster", "Reach maximum respect."],
        ["Pay 'n' Spray", "Use a Pay 'n' Spray with wanted level."],
        ["Public Enemy No. 1", "Reach 6 wanted stars."],
        ["Remastered", "Earn 100% completion."],
        ["Rescue a Kitten Too?", "Complete 12 levels of Firefighter."],
        ["Saviour", "Complete 12 levels of Paramedic."],
        ["School's Out", "Fully complete a vehicle school."],
        ["Smooth Moves", "Perform a perfect dance routine."],
        ["Swiss Army Strife", "Max all weapon skills."],
        ["The American Dream", "Purchase any house."],
        ["The End of the Line", "Complete \"End of the Line\"."],
        ["They Can’t Stop All of Us", "During the mission 'Black Project', sneak into the underground base without setting off the surface alarm."],
        ["Today Was a Good Day", "Go through an entire in-game day without committing any crimes."],
        ["What are the Odds", "Win a race in Inside Track Betting."],
        ["What happens in Las Venturas...", "Complete \"Yay Ka-Boom-Boom\"."],
        ["What the City Needs", "Complete 12 levels of Vigilante."],
        ["Who Needs Directions?", "During the mission 'Mike Toreno', reach Toreno at Easter Basin Airport without following the referenced map locations."],
        ["With Extra Dip", "Buy 8 meals from Cluckin' Bell throughout the game."],
        ["Yes I Speak English", "Reach 50 fares in Taxi Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
