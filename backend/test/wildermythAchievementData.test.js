import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wildermyth.json - 94 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 763890 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wildermyth");

test("getPlannerData('wildermyth') returns real planner data with 94 curated achievements", () => {

    assert.ok(game, "expected real planner data for wildermyth");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 94);

});

test("every Wildermyth achievement has a unique id from 1 to 94 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 94 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 94);
    assert.strictEqual(new Set(apinames).size, 94);

});

test("every Wildermyth achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 94 Wildermyth achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Hunger, Sated", "Complete The Sunswallower's Wake Campaign"],
        ["A Lowly Crust of Beef", "Complete a campaign on Walking Lunch difficulty"],
        ["A Mythic Menagerie", "Get 5 different pets across all campaigns"],
        ["A Story of Heroes", "Complete a Generic Campaign (Three or Five chapter)"],
        ["A Temperamental Shrub", "Poison 50 enemies with Botanical Thorn Lash"],
        ["Admiral of the Air", "Defeat the Admiral of the Air"],
        ["All My Birds, Safely Home", "Acquire all five plot characters, and have them survive to the end (Eluna and the Moth)"],
        ["Another Tale to Tell", "Complete a Legacy Campaign (Three or Five chapter)"],
        ["Astrology", "Kill 20 Enemies using Celestial Falling Stars"],
        ["Back into the Sea", "Kill 1000 Gorgons (Across all campaigns)"],
        ["Bears are Scary", "Kill 2 enemies simultaneously with Bear Swipes"],
        ["Bogmother", "Defeat the Bogmother"],
        ["Bonebreakers", "Kill 1000 Morthagi (Across all campaigns)"],
        ["Chain Reaction", "Use three reaction strikes (guardian/sentinel) in a single turn"],
        ["Completing the Look", "Get the head and all four limbs for a transformation"],
        ["Core Failure", "Destroy the Morthagi Cores"],
        ["Cutthroat Competitors", "Trigger Rival ability \"Oh yeah? Watch this!\" 5 times in a single fight"],
        ["Daybreak", "Complete Age of Ulstryx Campaign"],
        ["Drauvenslayers", "Kill 1000 Drauven (Across all campaigns)"],
        ["Echoes Die", "Complete Monarchs Under the Mountain Campaign"],
        ["Empty the Caves", "Kill 1000 Deepists (Across all campaigns)"],
        ["Everfading", "Complete Eluna and the Moth Campaign"],
        ["Fight Like a Bird", "Blind 20 enemies with Crow Scratch or Crow Peck"],
        ["Gotta Ca... Must Collect All of Them", "Catch All 4 elemental spirit types"],
        ["Gracnaw's Dragon", "Defeat Gracnaw's Dragon"],
        ["Granny Gloomfire", "Defeat Granny Gloomfire"],
        ["Grillmaster", "Hit 5 enemies simultaneously with a Cone of Fire"],
        ["Head Chef", "Defeat the Head Chef"],
        ["How Romantic!", "Kill 10 enemies with an attack that uses Lover's Vengeance"],
        ["I'm Not Smiling", "Terrify 10 enemies with Inscrutable Stare"],
        ["In Soil, In Smoke", "Complete All the Bones of Summer Campaign"],
        ["Into Mulch", "Kill three targets in a single use of Witherbolt"],
        ["King Carrion", "Defeat King Carrion"],
        ["Legends Never Die", "Promote a Legacy Hero to the rank of Mythwalker"],
        ["Let Me Get My Chisel", "Complete a Carved in Stone campaign"],
        ["Lochias's Hunger", "Kill an enemy of every monster group with Wolf Bite"],
        ["Luthin the Mirrormaster", "Defeat Luthin the Mirrormaster"],
        ["Making Tracks", "Win an Omenroad challenge run at Peril 10"],
        ["Malthides, Brute Toxinist", "Defeat Malthides, Brute Toxinist"],
        ["Me and My Familiar", "Get a pet"],
        ["Neverbefore", "Complete A Walk in the Unlight Campaign"],
        ["No More Nightmares", "Kill 1000 Thrixl (Across all campaigns)"],
        ["No Time for Clawmonsters", "Kill Calabyne in one turn"],
        ["Ollend the Abductor", "Defeat Ollend the Abductor"],
        ["Outset", "Win an Omenroad challenge run at Peril 1"],
        ["Overwhelming Monstrosity", "Receive 150 calamities in a campaign"],
        ["Party Wagon", "Defeat the Party Wagon"],
        ["Passing Shadow", "Have a hero end 5 consecutive turns in grayplane"],
        ["Pathbeater", "Win an Omenroad challenge run at Peril 5"],
        ["Peacemaker", "Kill 1000 monsters with a hero"],
        ["Plague Doctor", "Kill three enemies with poison in a single turn"],
        ["Pyrrhic Victory", "Win a battle after losing three heroes to either maiming or death"],
        ["Seasoned Traveler", "Win an Omenroad challenge run at Peril 15"],
        ["Solid as the Hills", "With Child of the Hills Theme, take no damage from an enemy attack 20 times"],
        ["Some Say I'm Too Flashy", "With Gem Theme, stunt on 100 attacks"],
        ["Starwing", "Defeat Starwing"],
        ["Storied Past", "Resolve all three hook quests with a hero"],
        ["Symbiosis", "Recover 30 health with Harvest or Dread Harvest"],
        ["Symbiotic Advisor", "Defeat the Symbiotic Advisor"],
        ["Tempest", "Kill three targets in a single use of Chain Lightning"],
        ["The Artist", "Stunt 75 times with a single hero in an Omenroad challenge run"],
        ["The Bulwark", "Take (and survive) 300 damage with a single hero in an Omenroad challenge run"],
        ["The Collector", "Pick up 15 rewards with a single hero in an Omenroad challenge run"],
        ["The Cost of Heroism", "Have a hero withdraw after being maimed"],
        ["The Doorman", "Defeat the Doorman"],
        ["The Gardener", "Defeat the Gardener"],
        ["The Glorysword Clayn", "Defeat the Glorysword Clayn"],
        ["The Hardy", "Have 20 temporary HP on a single hero at one time in an Omenroad challenge run"],
        ["The Horn Grownup", "Defeat the Horn Grownup"],
        ["The Hurricane", "Kill 8 enemies in a single hero's turn in an Omenroad challenge run"],
        ["The Lethal", "Deal 30 single-target damage with one attack during an Omenroad challenge run"],
        ["The Monstrous", "Deal 500 damage with a single hero's transformation abilities in an Omenroad challenge run"],
        ["The Power of Friendship", "Have friendship ability \"Got your back!\" occur 20 times"],
        ["The Relentless", "Deal 1000 damage with a single hero in an Omenroad challenge run"],
        ["The Riftspore Apostle", "Defeat the Riftspore Apostle"],
        ["The Shredder", "Shred 100 armor with a single hero in an Omenroad challenge run"],
        ["The Survivor", "Have a single hero end 6 fights with 1 health in an Omenroad challenge run"],
        ["The Twins", "Defeat the Twins, Wrune and Wrax"],
        ["The Umbercryst Martyr", "Defeat the Umbercryst Martyr"],
        ["The Unscathed", "Dodge or block at least 40 attacks with a single hero in an Omenroad challenge run"],
        ["The Virulent", "Poison 80 enemies with a single hero in an Omenroad challenge run"],
        ["Thematic Divergence", "Gain limbs from two different themes on a single hero"],
        ["This Too Shall Pass", "Be defeated in a battle"],
        ["Thwack!", "Use Tree Bash to knock back enemies 50 tiles"],
        ["Turncoat", "Accept the Deepking's offer"],
        ["Uur, Ancient Amalgam", "Deafeat Uur, Ancient Amalgam"],
        ["War Endured", "Complete The Enduring War Campaign"],
        ["War-Ender", "Destroy the last of the Enduring"],
        ["Waymaster", "Win an Omenroad challenge run at Peril 20"],
        ["We Call That Mortificient!", "Kill an enemy with Mortificial Hammer and Wrist Bolt in the same turn"],
        ["We Emerge Changed", "Get transformed limbs from 10 different themes"],
        ["Who's Counting?", "Kill 100 monsters with a hero"],
        ["Wingknight's Prowess", "Finish Chapter 3 intro mission without losing any units (All the Bones of Summer)"],
        ["Worldwalker", "Complete all five story campaigns"],
    ];

    assert.strictEqual(officialAchievements.length, 94, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
