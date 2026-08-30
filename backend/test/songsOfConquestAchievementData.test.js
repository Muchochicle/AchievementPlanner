import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/songs-of-conquest.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 867210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("songs-of-conquest");

test("getPlannerData('songs-of-conquest') returns real planner data with 75 curated achievements", () => {

    assert.ok(game, "expected real planner data for songs-of-conquest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 75);

});

test("every Songs of Conquest achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Songs of Conquest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 75 Songs of Conquest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Life's Worth", "Complete the last Barya campaign map on Overwhelming difficulty"],
        ["Adept", "Reach level 8 with a wielder"],
        ["An Empress's Hope", "Complete the last Loth campaign map on Overwhelming difficulty"],
        ["Attack Bonanza", "Have troop perform six attacks on its turn"],
        ["Barbecue", "Kill three enemies with one flame attack"],
        ["Boycott", "Win a game without ever purchasing a troop"],
        ["Bringer of Ruin", "Cast five Apocalypse spells on the same troop turn"],
        ["Cleave", "Kill three enemies with one sweeping attack"],
        ["Coming Through!", "Trigger three Attacks of Opportunity in a single Bull Rush"],
        ["Contractually Obligated to Win", "Win 25 times on non-campaign maps with Barya"],
        ["Core Kernel of Essence", "As a Roots player, purchase all available essence research"],
        ["Critical Hit", "Deal 500 damage or more in one attack"],
        ["Death From Above", "Kill three enemies using Breath of the Phoenix"],
        ["Death To Diplomacy", "Complete the last Arleon campaign map on Overwhelming difficulty"],
        ["Deepstrike", "Use Dimensional Door to position your troop in three or more Zones of Control"],
        ["Die by the Bow", "Kill 100 000 enemies using ranged attacks"],
        ["Die by the Staff", "Kill 100 000 enemies using magic damage"],
        ["Die by the Sword", "Kill 100 000 enemies using melee attacks"],
        ["Don't Touch My Stuff", "Reclaim your town or settlement that is being occupied/razed/converted by the enemy"],
        ["Double Kill", "Win two battles on the same turn with the same wielder"],
        ["Dressed For Success", "Have a wielder equipped with artifacts in all slots"],
        ["Expert Essence Employment", "Win a battle without making an attack"],
        ["From the Ashes", "Complete all Rana campaign maps (on any difficulty)"],
        ["Full House", "Win a battle using each of the official wielders"],
        ["Fully Charged", "Have ten or more Charged buffs on a troop"],
        ["Get Over Here!", "Swap enemy troop into Acid Cloud"],
        ["Grand Master", "Reach level 32 with a wielder"],
        ["Great Deeds Done", "Win 25 times on non-campaign maps with Vanir"],
        ["Grisfest", "Have 540 Serimnaans return to be drafted"],
        ["Heart to Heart", "Win a beam duel"],
        ["Hello There", "Burrow up next to three or more ranged enemy troops"],
        ["Here be Dragons", "Win 25 times on non-campaign maps with Rana"],
        ["Humiliation", "Win a battle before the enemy gets a turn"],
        ["I Like It A Loth", "Win 25 times on non-campaign maps with Loth"],
        ["In The Thick Of It", "Have three or more Front Line Fighter buffs on a troop"],
        ["Infernal Influence", "Make enemy kill his friend using Blind Hatred"],
        ["Killing Spree", "Win six battles in a row on the same turn"],
        ["Kneel, peasant!", "Win 25 times on non-campaign maps with Arleon"],
        ["Landlord Extraordinaire", "Max out a town in a non-campaign game (tier 5, walls, upgraded buildings on all build sites) "],
        ["Master", "Reach level 24 with a wielder"],
        ["Multi Kill", "Win three battles on the same turn with the same wielder"],
        ["No Challenge At All", "Challenge an enemy and have it die before it gets a chance to attack"],
        ["No Free Lunge", "Use Lunge ability to finish off an enemy after it was Repelled away"],
        ["Once Divided Now United", "Win 25 times on non-campaign maps with Yulan"],
        ["Oops!", "Have enemy kill one of your own troops when you cast Blind Hatred"],
        ["Personal Growth", "Win 25 times on non-campaign maps with Roots"],
        ["Proof That Luck Can Be Consistent", "Win 25 multiplayer (online or hotseat) games"],
        ["Pyrrhic Victory", "Win a battle with only a single one unit left"],
        ["Ready, Set, Go", "Complete an artifact set containing at least four pieces in a non-campaign game"],
        ["Restoration of Grey Tor", "Restore all that the Faey have destroyed around Grey Tor"],
        ["Rise Eternal", "Complete all Rise Eternal campaign maps (on any difficulty)"],
        ["Sheng Happens", "Win a non-campaign game using only house Sheng wielders and troops"],
        ["Smothered", "Absorb 1,000 damage using the Mother's Embrace trait"],
        ["So Long, and Thanks for All the Fish", "Win a battle using a fish"],
        ["Sorcerous Spree", "Cast five spells on the same troop turn"],
        ["Steadfast", "As Vanir, win a game without ever purchasing a Vildra troop"],
        ["Such A Fungi", "Use Repel to push an enemy troop into three Explosive Fungi"],
        ["The Houses United", "Complete the last Yulan campaign map on Overwhelming difficulty"],
        ["The Marsh Expands", "Complete the last Rana campaign map on Overwhelming difficulty"],
        ["The Price of Freedom", "Complete all Barya campaign maps (on any difficulty)"],
        ["The Song of Stoutheart", "Complete all Arleon campaign maps (on any difficulty)"],
        ["There Can Be Only Xuan", "Win a non-campaign game using only house Xuan wielders and troops"],
        ["This Spot's Taken", "Block an enemy troop from burrowing up"],
        ["Three Houses", "Complete all Yulan campaign maps (on any difficulty)"],
        ["Together For Her", "Complete all Loth campaign maps (on any difficulty)"],
        ["Trojan Horse", "Use a teleport spell to get on top of or behind the walls in a town siege"],
        ["Ultra Kill", "Win four battles on the same turn with the same wielder"],
        ["Unlimited Power!", "Kill three enemies using Chain Lightning"],
        ["Veni, Vidi, Vici", "Win a battle against a walled town"],
        ["Venisti, Vidisti, Perdidisti", "Defend a walled town in battle"],
        ["Versatile Wielder", "Cast each spell (over any number of games)"],
        ["Veteran", "Reach level 16 with a wielder"],
        ["Whoops!", "Have your troop die from a Quick retaliation"],
        ["Winning Is Like Li", "Win a non-campaign game using only house Li wielders and troops"],
        ["Zounds like a Loth", "Have 1000 Risen in Kastus Maal's army"],
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
