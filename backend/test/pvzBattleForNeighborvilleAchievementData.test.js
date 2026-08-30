import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pvz-battle-for-neighborville.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1262240 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("pvz-battle-for-neighborville");

test("getPlannerData('pvz-battle-for-neighborville') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for pvz-battle-for-neighborville");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every PvZ: Battle for Neighborville achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every PvZ: Battle for Neighborville achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 PvZ: Battle for Neighborville achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aye Spy with My Little Aye", "Earn 200 Vanquishes as a Captain Deadbeard"],
        ["Barbecue, Anyone?", "Earn 200 vanquishes as a Snapdragon"],
        ["Beans-Eye", "Destroy 20 targets at target range"],
        ["Blast From the Past", "Earn 200 vanquishes as an 80s Action Hero"],
        ["Brainz Unattained", "Vanquish 100 zombies in PvP"],
        ["Broken Ice", "Use 25 expressions"],
        ["Build-A-Buddy", "Spawn 25 bots"],
        ["Cactus Makes Perfect", "Earn 200 vanquishes as a Cactus"],
        ["Chums and Chainz", "Complete \"I Treasure You\" quest in Sundrop Hills"],
        ["Classical Pea-anist", "Play PvZ theme on piano (G# A G# A F D)"],
        ["Clearing the Dance Floor", "Earn 200 vanquishes as an Electric Slide"],
        ["Comin' up Roses", "Earn 200 vanquishes as a Rose"],
        ["Cool It!", "Defeat Major Problem"],
        ["DE-FENCE! CLAP-CLAP! DE-FENCE!", "Block 1,000 damage with a Dummy Shield as an All-Star"],
        ["dniweR ,dniK eB", "Complete \"Be Kind, Rewind!\" quest in Weirding Woods"],
        ["Get Back out There!", "Revive 10 allies"],
        ["Giddy Up", "Earn 20 vanquishes using Rocket Ride as an 80s Action Hero"],
        ["Going Totally Nuts", "Earn 200 vanquishes as an Acorn"],
        ["Gone Camping!", "Complete \"Zombie Prepared\" quest in Weirding Woods"],
        ["Good to Grow", "Spawn 25 pots"],
        ["Hat's All Folks!", "Complete \"Baron-Palooza\" quest in Sundrop Hills"],
        ["Impossibly Impressive", "Earn 200 vanquishes as an Imp"],
        ["Job Well Done", "Earn 200 vanquishes as an Engineer"],
        ["Medical Miracle", "Give 1,000 overhealth as a Scientist"],
        ["Midnight Jog", "Use Shadow Sneak for 1,000 feet as a Night Cap"],
        ["Mind the Cap", "Earn 200 vanquishes as a Night Cap"],
        ["Myth Maker", "Vanquish 35 gnomes"],
        ["Natural Twenty", "Earn 20 multi-vanquishes using Roll for Damage as an Oak"],
        ["New Sheriff in Town", "Complete \"Will You Be My Posse?\" quest in Mount Steep"],
        ["Nighty Night Club", "Defeat Olds Cool"],
        ["One BIG Step for Zombies", "Earn 200 vanquishes as a Space Cadet"],
        ["One-Boot Camp", "Earn 200 vanquishes as a Foot Soldier"],
        ["Open-Minded", "Complete \"Becoming One With The Dumb\" quest in Weirding Woods"],
        ["Overgrowth", "Dish out 1,000 overhealth as a Sunflower"],
        ["Paradise Paver", "Vanquish 100 plants in PvP"],
        ["Peaskeeper", "Earn 200 vanquishes as a Peashooter"],
        ["Podcast Subscriber", "Complete \"Treasure Hunt\" quest in Mount Steep"],
        ["Popped!", "Earn 200 vanquishes as a Kernel Corn"],
        ["Sawing Logs", "Defeat Dreadwood"],
        ["Science Friction", "Earn 20 vanquishes using Crater Maker as a Space Station"],
        ["Snack Time", "Earn 200 vanquishes as a Chomper"],
        ["SuperB", "Earn 200 vanquishes as a Super Brainz"],
        ["The Medal's Medal!", "Collect 75 medals"],
        ["Time to Seriously Go Outside", "Promote 20 characters to the rank of Master"],
        ["Tornado Fandango", "Earn 20 vanquishes using Disco Tornado as an Electric Slide"],
        ["Truest Grit", "Complete \"The Genuine Article\" quest in Mount Steep"],
        ["Urban Brawl", "Complete \"Fight Zentrificiation\" quest in Sundrop Hills"],
        ["Weeee!", "Vanquish 25 enemies while on a Giddy Park ride."],
        ["Zest of the Best", "Block 1,000 damage with Peel Shield as a Citron"],
        ["Zombie See Zombie Do", "Get a score of 25 or higher in the Dance Hall of Obedience"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
