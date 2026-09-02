import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lonely-mountains-downhill.json - 84 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 711540 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lonely-mountains-downhill");

test("getPlannerData('lonely-mountains-downhill') returns real planner data with 84 curated achievements", () => {

    assert.ok(game, "expected real planner data for lonely-mountains-downhill");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 84);

});

test("every Lonely Mountains: Downhill achievement has a unique id from 1 to 84 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 84 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 84);
    assert.strictEqual(new Set(apinames).size, 84);

});

test("every Lonely Mountains: Downhill achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 84 Lonely Mountains: Downhill achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1621", "Find all hidden Backer messages"],
        ["4WD", "Unlock a fourth bike"],
        ["All Riders are grey in the dark", "Complete all challenges during night-time on Whispering Lake."],
        ["Bikeopath", "Complete all expert challenges"],
        ["Born to ride!", "Complete all challenges on Graterhorn"],
        ["Can you ever have enough bikes?", "Unlock a sixth bike"],
        ["Child's Play", "Complete all beginner challenges on Whispering Lake."],
        ["Do it like Jason!", "Jump 15 Meters"],
        ["Drop it like it's rock!", "Complete all challenges on Sierra Rivera"],
        ["Easy as ABC", "Complete all beginner challenges on Carnelian Cavern."],
        ["Easy peasy, Lemon squeezy", "Complete all beginner challenges on Phantom Heights"],
        ["Easy Rider", "Complete all beginner challenges on Lostman's Grove"],
        ["Eat. Sleep. Bike. Repeat", "Complete all challenges during daytime on Lostman's Grove"],
        ["Falling is like flying 99% of the time", "Fall 20 Meters"],
        ["Fashion Victim", "Unlock all outfits"],
        ["Free Rider", "Cross all finish lines on Free Ride"],
        ["From Rock to Rock", "Unlock Mount Riley"],
        ["Gravity", "Cross all finish lines with Geronimo"],
        ["Highlander", "Crash against a rock, a tree, a cactus and into the water"],
        ["I hope the bike is okay!", "Hit 1 tree and go swimming afterwards"],
        ["Indian Summer Ride", "Unlock Redmoor Peaks"],
        ["Into The Wild", "Find all resting places on Lostman's Grove"],
        ["It's all Downhill from here", "Cross your first finish line"],
        ["It's Groundhog Day", "Cross the finish line of Whispering Lake with all bikes."],
        ["It's hot in here", "Fall into lava 20 times on Eldfjall"],
        ["Jack of all Trails", "Cross all finish lines with Grasshopper"],
        ["Just a One Night Ride", "Complete all challenge during night-time on Phantom Heights"],
        ["Just keep riding", "Cross the finish line of Lostman's Grove with all bikes."],
        ["Just Trailing", "Complete all beginner challenges"],
        ["King of Bikes and Master of Mountains", "Cross all finish lines with all bikes"],
        ["Life's simple Pleasures", "Find all resting places on Phantom Heights"],
        ["Like a Gazelle", "Cross all finish lines with Pacebraker"],
        ["Lonely Places", "Find all resting places on Mount Riley"],
        ["Lord of the Rides", "Complete all expert challenges on Phantom Heights"],
        ["Lycra Runner", "Cross all finish lines with Javelin"],
        ["Mamma mia, here I go again", "Cross the finish line of Phantom Heights with all bikes."],
        ["Maybe try a boat?", "Go swimming 50 times"],
        ["Message in a tree", "Find your first Backer message"],
        ["Moments > Segments", "Find all resting places on Sierra Rivera"],
        ["My Happy Place", "Find all resting places on Whispering Lake."],
        ["My private island", "Find all resting places on Eldfjall"],
        ["n+1", "Unlock a second bike"],
        ["Natural Born Rider", "Complete all expert challenges on Whispering Lake."],
        ["Night Rider", "Complete all challenge during night-time on Eldfjall"],
        ["No brakes, high stakes!", "Ride 1000 meters without braking"],
        ["No ride like a night ride", "Unlock a night ride"],
        ["No Risk, No Ride", "Complete all expert challenges on Lostman's Grove"],
        ["Nothing like a good days ride", "Complete all challenges during daytime on Phantom Heights"],
        ["Now we're a familiy!", "Unlock a third bike"],
        ["Off the beaten tracks", "Cross all finish lines with Trailblazer"],
        ["Offroad King", "Cross all finish lines with Boar"],
        ["On Fire!", "Complete all expert challenges during daytime on Eldfall"],
        ["One with the mountain", "Complete all challenges during daytime on Eldfjall"],
        ["Oops, I did it again!", "Cross the finish line of Carnelian Cavern with all bikes."],
        ["Peace and Quiet", "Find all resting places on Redmoor Peaks"],
        ["Places in the Sun", "Find all resting places on Carnelian Cavern."],
        ["Ride Forest! Ride!", "Ride a trail without crashing"],
        ["Ride Hard or Ride Home", "Complete all expert challenges on Carnelian Cavern."],
        ["Ride it like you stole it", "Reach a Top Speed of 100 Km/H or 62 M/h"],
        ["Ride the Night Away", "Complete all challenge during night-time on Lostman's Grove"],
        ["Riding High", "Unlock Sierra Rivera"],
        ["Riding in Style", "Unlock all paint jobs"],
        ["Rolling, Rolling, Rolling!", "Ride 750 meters without pedaling"],
        ["Spikey Bikey!", "Hit cactuses 100 times"],
        ["Sticks and Stones do break your bones!", "Hit 1 tree and 1 rock in one crash"],
        ["Stop and Smell the Brakes", "Find one resting place"],
        ["That needs a bandage", "Hit 3 rocks in one crash"],
        ["That was easy, wasn't it?", "Complete all beginner challenges during daytime on Eldfjall"],
        ["The Legend of the Fall", "Complete all challenges on Redmoor Peaks"],
        ["The Ride is Dark and Full of Terrors", "Cross all finish lines on the free night mode"],
        ["The Rider is dead, long live the Rider", "Complete all challenges during the daytime on Whispering Lake."],
        ["The Rocky Mountain Rider Show", "Complete all challenges on Mount Riley"],
        ["Top of the World", "Find all resting places on Graterhorn"],
        ["Tree Hugger", "Hit trees 500 times"],
        ["Unstoppable", "Complete all challenges during the daytime on Carnelian Cavern."],
        ["Wanna Rock And Ride All Night", "Complete all challenges during night-time on Carnelian Cavern."],
        ["Welcome to Eldfjall", "Cross your first finish line on Eldfjall"],
        ["Welcome to Lostman's Grove!", "Cross your first finish line on Lostman's Grove"],
        ["Welcome to Phantom Heights!", "Cross your first finish line on Phantom Heights"],
        ["Welcome to the Carnelian Cavern!", "Cross your first finish line on Carnelian Cavern."],
        ["Welcome to the Ride Club", "Unlock a fifth bike"],
        ["Welcome to Whispering Lake!", "Cross your first finish line on Whispering Lake."],
        ["Who pays all the hospital bills?", "Hit 2 trees in one crash"],
        ["You Rock!", "Hit rocks 1000 times"],
    ];

    assert.strictEqual(officialAchievements.length, 84, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
