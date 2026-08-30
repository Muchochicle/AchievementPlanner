import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-4.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 298110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("far-cry-4");

test("getPlannerData('far-cry-4') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Far Cry 4 achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Far Cry 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Far Cry 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Clear", "Liberate all Outposts (Campaign only)."],
        ["Awakened!", "Complete The Valley Of The Yetis Campaign (Valley Of The Yetis)."],
        ["Brother In Arms", "Liberate 1 Outpost playing as Hurk (Campaign Co-op only)."],
        ["Builder", "Complete One Relay Station Upgrade Quest (Valley Of The Yetis, Single Player Only)."],
        ["Caretaker Of Memory", "Find 10 Lost Letters (Campaign only)."],
        ["Changing Lanes", "Perform a Vehicle Takedown from the passenger seat of a vehicle (Campaign Co-op only)."],
        ["Community Surprise", "Play a Top Rated map in the Map Browser (Map Browser only)."],
        ["Custom-Fitted", "Buy all attachments and paint schemes for a single weapon (Campaign only)."],
        ["Defender", "Repel 3 Outpost Retaliation Parties (Campaign only)."],
        ["Defuser", "Complete 3 Bomb Defusal quests (Campaign only)."],
        ["Deliver Us From Evil", "Liberate 12 Outposts (Campaign only)."],
        ["Display Of Fortitude", "Conquer 2 Fortresses (Campaign only)."],
        ["Dr. Feelgood", "Craft 15 syringes (Campaign only)."],
        ["Drive-By", "Kill 25 enemies while shooting and driving (Campaign only)."],
        ["End Transmission", "Liberate 8 Bell Towers (Campaign only)."],
        ["Exorcist", "Destroy 15 Masks of Yalung (Campaign only)."],
        ["Fixer-Upper", "Purchase 3 items for the Ghale Homestead (Campaign only)."],
        ["Flame On!", "Kill 50 enemies with fire (Campaign only)."],
        ["From A Distance", "Kill a target from 60m or more with an arrow or bolt (Campaign only)."],
        ["Fully Loaded", "Learn all skills (Campaign only)."],
        ["Gearhead", "Complete 3 Kyrati Films: Racing or Kyrati Films: Survival activities (Campaign only)."],
        ["Hand Of Justice", "Eliminate 3 Pagan's Wrath convoys (Campaign only)."],
        ["Hat-Trick", "Decide Yuma's fate (Campaign only)."],
        ["Home Sweet Home", "Occupy The Relay Station (Valley Of The Yetis)."],
        ["Like A Bird", "Fly 5000m total in the Wingsuit (Campaign only)."],
        ["Make It Rain", "Spend 500,000 rupees total at Trading Posts (Campaign only)."],
        ["Master Builder", "Complete All Relay Station Upgrade Quests (Valley Of The Yetis, Single Player Only)."],
        ["Master of the Awakened", "Kill 5 Yetis (Valley Of The Yetis, Single Player Only)."],
        ["Misdirection", "Distract 15 enemies with rocks (Campaign only)."],
        ["Night Survivor", "Defend The Relay Station And Survive The First Night (Valley Of The Yetis)."],
        ["No One Left Behind", "Rescue 15 hostages in Hostage Rescue quests (Campaign only)."],
        ["One Down", "Decide De Pleur's fate (Campaign only)."],
        ["Overdose", "Discover Shangri-La (Campaign only)."],
        ["Quad Kill", "Kill 4 enemies simultaneously with a single explosion (Campaign only)."],
        ["Quick Learner", "Learn 10 skills (Campaign only)."],
        ["Reign Of Death", "Kill 30 enemies with Mortar rounds (Campaign only)."],
        ["Renaissance Man", "Finish a public match of each game type in the Battles of Kyrat game mode (Battles of Kyrat only)."],
        ["Rewriting History", "Remove 30 Propaganda Posters (Campaign only)."],
        ["Right Tributes", "Spin 10 Mani Wheels (Campaign only)."],
        ["Roadkill", "Run over 25 people (Campaign only)."],
        ["Robin Hood", "Hijack 3 Royal Cargo Trucks and return them to a liberated Outpost (Campaign only)."],
        ["Shutterbug", "Tag 25 enemies using the camera (Campaign only)."],
        ["Spiritual Hunter", "Kill A Yeti (Valley Of The Yetis, Single Player Only)."],
        ["The Good Fight", "Reach Karma Level 2, and purchase any Guns For Hire upgrade (Campaign only)."],
        ["The King Is Dead", "Decide Pagan Min's fate (Campaign only)."],
        ["The People's Champ", "Reach Arena Rank 5 (Campaign Arena only)."],
        ["The Rarest Game", "Complete 3 Kyrat Fashion Week quests (Campaign only)."],
        ["The Sky Is Falling", "Perform a takedown from a Buzzer (Campaign only)."],
        ["Tread Lightly", "Liberate any Outpost without triggering an alarm in any mode (Campaign only)."],
        ["Tricked Out", "Craft 5 upgrades for your equipment (Campaign only)."],
        ["Trigger-Man", "Complete 3 Assassination or Eye for an Eye quests (Campaign only)."],
        ["Tusker", "Kill 30 enemies with an elephant (Campaign only)."],
        ["Two Birds", "Using a sniper rifle, kill 2 targets with a single shot (Campaign only)."],
        ["Two Down", "Decide Noore's fate (Campaign only)."],
        ["Welcome to Kyrat", "Join the Golden Path (Campaign only)."],
        ["Well Read", "Read 10 notes (Campaign only)."],
        ["Well-Rounded", "Complete any 6 Hunting quests (Supplies, Control, Survival) (Campaign only)."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
