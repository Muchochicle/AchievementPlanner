import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/saints-row-iv.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 206420 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("saints-row-iv");

test("getPlannerData('saints-row-iv') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for saints-row-iv");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Saints Row IV achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Saints Row IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Saints Row IV achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...A Saint Gets a Gun", "Ring all the bells in town in 'Miracle on 3rd Street'."],
        ["*BEEP* YOU, CLAWZ!", "Complete all three How the Saints Save Christmas missions (Miracle on 3rd Street, The Fight Before Christmas, The Santa Clawz)."],
        ["A Real Cluster....", "Find 100% of all Data Clusters."],
        ["A Very Genki Holiday", "Complete all instances of Genki Holiday."],
        ["A World Without Christmas", "Collect all 8 text-adventure pages across the three holiday missions, then play the holiday text adventure through to the end."],
        ["About Time!", "Complete 'Welcome Back'."],
        ["Actor-Turned-Politician", "Do everything you can for your Veep -- Quests, Loyalty Missions... everything."],
        ["All Too Easy", "Kill Zinyak in less than 5 minutes in 'Save the Planet'."],
        ["And I Ran...", "Super Sprint for 250,000 meters."],
        ["Back in the Day", "Spend 2 hours outside of missions with past Saints Row characters as your homies"],
        ["Benjamin [CENSORED] King", "Do everything you can for Ben -- Quests, Loyalty Missions... everything."],
        ["Betrayed", "Complete 'All Hands On Deck'."],
        ["Better This Way", "Customize the style of all the weapons on your radial."],
        ["Blast from the Past", "Complete 'A Game of Clones'."],
        ["Bouncin' with an Old Friend", "Do everything you can for Johnny Gat - romance him aboard the ship and complete all of his Quests and Loyalty Missions."],
        ["Bow to the Boss!", "Kill the Dominatrix in 'Escape the Dominatrix'."],
        ["Bringin' the Heat", "Kill 100 Aliens using the Fire Buff Super Power."],
        ["Chill Out", "Freeze and Shatter Kill 100 Aliens with the Freeze Blast Super Power."],
        ["Dear Santa", "Find all the letters to Santa in the holiday missions."],
        ["Destroyer-In-Chief", "Complete 'The Saints Wing'."],
        ["Didn't Need to See Him Naked", "Complete 'Matt's Back'."],
        ["Don't Look Down", "Be airborne during Super Jumps for a combined 10 minutes of gameplay."],
        ["Don't Panic", "Complete 'The Real World'."],
        ["Double Team", "Play Saints Row IV Co-op for 5 hours."],
        ["Elementary", "Choose a new element for all of your superpowers."],
        ["Epic Jump Quest", "Jump from the roof of 3 Count to the Nuke Plant, without touching the ground or other rooftops."],
        ["Experimental Tech", "Kill 25 Aliens with each: Dubstep, InflatoRay, Bounce Gun, Disintegrator, Abduction, and Black Hole."],
        ["First of Many", "Buy your first Upgrade from the Upgrade Store."],
        ["Fist Meet Ground", "Kill 100 Aliens with the Death From Above Super Power."],
        ["Fourth and Forty", "Spend over 40 hours in the Simulation."],
        ["Friend of the Raptors", "Complete all five missions."],
        ["Get that Kid to a Psychologist", "Find all the snowmen vignettes in the North Pole."],
        ["Ghost in the Machine", "Download a new ally into a robotic body."],
        ["Half Way Home", "Complete all open world gameplay in two districts of the Simulated city of Steelport."],
        ["He's Still on the Naughty List", "In 'The Santa Clawz', deliver a present to the Zinyak statue on Magarac Island."],
        ["Health Inspector", "Destroy all the green polyps inside Paul in 'Pop His Top'."],
        ["Hello Little Friend", "Get 250 kills with the Minigun."],
        ["Here! Catch!", "Kill 100 Aliens with the Telekinesis Super Power."],
        ["How It Should Be", "Complete all open world gameplay in the entire Simulated city of Steelport."],
        ["I Am Become Death", "Kill 1000 Aliens with any combination of Super Powers."],
        ["Imperator", "Complete 'Grand Finale'."],
        ["Indomitable", "Complete 'Meet the Dominatrix' without dying."],
        ["Keymaster", "Complete 'Batteries Not Included'."],
        ["Machine Man", "Do everything you can for CID -- Quests and... everything."],
        ["Make a List, Check it Twice", "Complete all instances of Naughty and Nice."],
        ["Maximum Stopping Power", "Upgrade one weapon to the max."],
        ["Minty Fresh!", "Lick the candy cane barricade all the way through in 'The Fight Before Christmas'."],
        ["OMGWTFBBQ", "Get 100 kills with the Flamethrower."],
        ["On Her Saint's Secret Service", "Do everything you can for Asha -- Quests, Loyalty Missions... everything."],
        ["Ooo A Piece of Candy!", "Find 100 Data Clusters."],
        ["Our Gift to You", "Find the hidden present in the first holiday mission, 'Miracle on 3rd Street' - it sits near the bells and shines at intervals."],
        ["Paranormal Bromance", "Do everything you can for Matt -- Quests, Loyalty Missions... everything."],
        ["Poodle Skirt", "Complete 'Hello Teacup'."],
        ["Pounding the Pavement", "Kill 150 Aliens with the Stomp Super Power."],
        ["Rigging the Race", "Destroy all the rival pony carts in 'At the Races'."],
        ["Saintified", "Create and share a character online."],
        ["Saints & Sensibility", "Complete 'Grand Finale' after completing all Homie missions."],
        ["Super Power Team Up!", "Beat all Missions and Loyalty Missions in Co-op."],
        ["Switch Hitter", "Play for at least 2 hours as a male character AND 2 hours as a female character."],
        ["The Challenge King", "Complete ALL of the Challenges."],
        ["The Face of the Saints", "Do everything you can for Pierce -- Quests, Loyalty Missions... everything."],
        ["The Full Kinzie", "Do everything you can for Kinzie -- Quests, Loyalty Missions... everything."],
        ["The Twin Saints", "Complete ten Quests together in Co-op."],
        ["The Two Shaundis", "Do everything you can for Shaundi -- Quests, Loyalty Missions... everything."],
        ["The Whole Story", "Find ALL Audio Logs."],
        ["There Is No Pancakes", "Complete 'A Pleasant Day'."],
        ["Ultimate Hot Potato", "Get 100 kills with the Grenade Launcher."],
        ["Walking the Dinosaur", "Spend 30 minutes with Raptor Ned as your Homie - he is unlocked after finishing the How the Saints Save Christmas story."],
        ["Where's My Cape?", "Purchase all Super Power upgrades."],
        ["Woah.", "Get your first Super Powers."],
        ["You Chose... Poorly", "During the mission 'Zero Cool', take the option to surrender (choose the red door) - a fake credits sequence rolls and the mission fails."],
        ["Zero Saints Thirty", "Complete the opening story mission 'Zero Saints Thirty'."],
        ["Zoo Keeper", "Kill 25 Wardens."],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
