import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/death-stranding-directors-cut.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1850570 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("death-stranding-directors-cut");

test("getPlannerData('death-stranding-directors-cut') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for death-stranding-directors-cut");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Death Stranding Director's Cut achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Death Stranding Director's Cut achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Death Stranding Director's Cut achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"BB\"", "Complete Episode 7: Clifford."],
        ["A Baby Blessing", "Get a Like from BB."],
        ["A Helping Hand", "Issue your first supply request."],
        ["A New Day for the UCA", "Connect your first new affiliate to the UCA."],
        ["A Shout in the Dark", "Send a shout out and have it returned for the first time."],
        ["A Thirst for Knowledge", "Restore a memory chip."],
        ["All Roads Lead to the UCA", "Complete your first road."],
        ["Any Porter in a Storm", "Trade with another porter for the first time."],
        ["Apprentice Builder", "Complete your first structure (signs, ladders, and climbing anchors also count.)"],
        ["BB...", "Complete Episode 4: Unger."],
        ["BBs: A Bridge Between This World and the One Beyond", "Complete Episode 6: Deadman."],
        ["Best Beloved", "Reach the maximum connection level with every facility."],
        ["Birth of a Legend", "Complete at least 10 unique premium deliveries in each order category with an evaluation of \"Legend,\" \"Legend of Legends,\" or \"Legend of Legends of Legends.\" "],
        ["Boots Are a Porter's Best Friend", "Change footwear for the first time."],
        ["Bring Back My Baby", "Complete Episode 11: Clifford Unger."],
        ["Building Bridges", "Reach Bridge Link Grade 1."],
        ["Catcher Crusher", "Defeat a Catcher."],
        ["Childminder", "Reach maximum connection level with BB."],
        ["Chiral Crafter", "Recycle chiral crystals for the first time."],
        ["Deliveries Done", "Complete 36 standard orders."],
        ["Delivering Is What I Do", "Complete the Prologue: Porter."],
        ["Everyday Delivery", "Complete a standard order."],
        ["Fount of Knowledge", "Restore every memory chip."],
        ["Giver of Gifts", "Make your first donation of weapons, equipment, etc."],
        ["God Particle Go-Getter", "Find Higgs's home."],
        ["Good Samaritan", "Deliver your first piece of lost cargo."],
        ["Great Deliverer", "Reach Grade 60 in every delivery evaluation category."],
        ["Greatest of Great Deliverers", "Obtained all Death Stranding achievements."],
        ["Growth of a Legend", "Complete at least 20 unique premium deliveries in each order category with an evaluation of \"Legend of Legends\" or \"Legend of Legends of Legends.\" "],
        ["Homo Faber", "Fabricate all available weapons and equipment."],
        ["Hooked on Delivering!?", "Deliver 700 items of cargo."],
        ["I Couldn't Hold it In!", "Go outside and relieve yourself."],
        ["I Won't Break", "Complete Episode 3: Fragile."],
        ["I'm Your Die-Hardman", "Complete Episode 10: Die-Hardman."],
        ["In Sam We Trust", "Connect every facility to the UCA / Chiral Network."],
        ["Like and Be Liked", "Give your first Like."],
        ["Master Builder", "Complete at least one of every type of structure (including signs, ladders, and climbing anchors.)"],
        ["Pathfinder", "Help porters through a MULE or terrorist area for the first time."],
        ["Prominent Porter", "Reach Grade 10 in any delivery evaluation category."],
        ["Public Service Porter", "Dispose of chiralium-contaminated cargo in the crater lake for the first time."],
        ["Pumped Porter", "Deliver 3,000 kg of cargo."],
        ["Rebuilding America", "Complete Episode 1: Bridget."],
        ["Rest In Pieces", "In a BT area, cut an umbilical cord for the first time without the BT noticing."],
        ["She's waiting for you on the Beach.", "Complete Episode 12: Bridges."],
        ["Sixty Deaths and Sixty Births in a Day", "Complete Episode 8: Heartman."],
        ["Sleep Tight, Little BB", "Soothe a crying BB and stop the crying for the first time."],
        ["Snooze 'n' Soothe", "Heal by sleeping for the first time."],
        ["Soak and Sigh", "Take a hot spring bath."],
        ["Soothing Sounds", "Use the in-game music player for the first time."],
        ["Thank You, Sam", "Complete Episode 13: Sam Strand."],
        ["Thanks for Everything", "Complete the final episode: Lou."],
        ["The Automation Revolution", "Complete a standard order with a delivery bot."],
        ["The Custom Kid", "Acquire your first piece of customization data."],
        ["The Particle of God", "Complete Episode 9: Higgs."],
        ["The Past Guides the Present", "Read 100 interviews."],
        ["The People's Porter", "Reach 2,400 Likes on a single delivery results screen."],
        ["The Post Guides the Present", "Read 100 mails."],
        ["The World's Most Popular Porter", "Reach 50,000 Likes on a single delivery results screen."],
        ["Trail-Blazer", "Upgrade all types of structure to the maximum level."],
        ["We Need You", "Complete Episode 2: Amelie."],
        ["We're Whole Again", "Complete Episode 5: Mama."],
        ["Well Connected", "Reach connection level three with a facility."],
        ["Well-Traveled", "Travel 80 km and complete an order."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
