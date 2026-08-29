import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/powerwash-simulator.json - // 100 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1290000 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 100 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("powerwash-simulator");

test("getPlannerData('powerwash-simulator') returns real planner data with 100 curated achievements", () => {

    assert.ok(game, "expected real planner data for powerwash-simulator");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 100);

});

test("every PowerWash Simulator achievement has a unique id from 1 to 100 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 100);
    assert.strictEqual(new Set(apinames).size, 100);

});

test("every PowerWash Simulator achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 100 officially-described PowerWash Simulator achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["2015? You Mean We're in the Future?", "Complete the Holomax Theater job"],
        ["88 Miles Per Hour!", "Watch the Time Machine reappear"],
        ["A Mad Tea-Party", "Complete the Mad Tea Party job"],
        ["A Sacrifice I am Willing to Make", "Complete the Duloc job"],
        ["Advice from a Caterpillar", "Complete the Caterpillar's Mushroom job"],
        ["All aboard!", "In the Wallace & Gromit's Dining Room & Kitchen job, activate the Toy Train"],
        ["All Hands on Deck", "Complete the Fishing Boat bow, steps and main deck first"],
        ["All knitted up!", "Complete the Knit-O-Matic job"],
        ["Are We There Yet?", "In the Hansel's Honeymoon Hideaway job, wait in the Onion Carriage for 30 seconds"],
        ["As It Was Foretold...", "Complete Career Mode"],
        ["Astra Militarum's Secret Weapon", "In the Rogal Dorn Battle Tank job, complete the Stowed Shovel first"],
        ["Baaath time!", "In the Knit-O-Matic job, activate the Auto-Wash"],
        ["Back to the Theater", "In the Holomax Theater job, clean the Grid Wall first"],
        ["Best Buds", "Ride around the Big Wheel with a gnome"],
        ["Big Business", "Earn 100 Stars in Career Mode"],
        ["Blast from the Past", "In the Subway Platform, complete the advertising boards first"],
        ["Bucket List", "At the Ancient Statue, knock over four buckets"],
        ["Bucket Sweet Bucket", "In the Krusty Krab job, complete the Chum Bucket first"],
        ["Bus is here!", "Complete the Bikini Bottom Bus job"],
        ["Cadia Stands!", "Complete the Rogal Dorn Battle Tank job"],
        ["Coconut Dodge", "At the Fairground, knock over all of the coconuts"],
        ["Courage and Honor!", "Complete the Land Raider job"],
        ["Degrees of Redemption", "Completely clean the Redemptor Dreadnought using only the yellow nozzle"],
        ["Delaying the Inevitable", "In the Washroom, complete the toilets, toilet seats and toilet lids last"],
        ["Delicate Excavation", "Completely clean the Ancient Monument using only the white nozzle"],
        ["Descend into Shadow, Rise into Light", "In the Thunderhawk Job, complete the Retro Thrusters first"],
        ["Down the Rabbit-Hole", "Complete the Wonderland Entrance Hall job"],
        ["Employee of the Month", "Complete the Krusty Krab job"],
        ["Eternal Service", "Complete the Redemptor Dreadnought job"],
        ["Fashionista", "Equip a new outfit, gloves and washer modification at the same time"],
        ["Feast Your Eyes…", "Complete the Patty Wagon job"],
        ["First Steps", "In the Back Garden, complete all 12 stepping stones first"],
        ["Fully Equipped", "Own the Prime Vista 1500 and three of its attachments"],
        ["Get Out Of My Swamp!", "Complete the Shrek's Swamp job"],
        ["Gnome Sweet Gnome", "In the Temple, ensure the gnome is on the tower roof once the job is complete"],
        ["Going for Gold", "Get one gold medal in Challenge Mode"],
        ["Gold Standard", "Get five gold medals in Challenge Mode"],
        ["Good Dings to Come", "Clean 95% of any job without completing any tasks"],
        ["Great Scott!", "Complete the Doc Brown's Van job"],
        ["Gutted", "Complete the Bungalow gutters last"],
        ["Head First", "Complete the Drill head and tip first"],
        ["Heavy Hitter", "Own the Prime Vista 3000 and five of its attachments"],
        ["Home Sweet Home", "Complete the Wallace & Gromit's Dining Room & Kitchen job"],
        ["Honeymoon!? With Whom?", "Complete the Hansel's Honeymoon Hideaway job"],
        ["I Can See Clearly Now", "Complete the Fire Truck windows, windscreen and wing mirrors first"],
        ["I Really Must be Getting Home", "In the Wonderland Entrance Hall, attempt to climb out of the rabbit hole using a ladder"],
        ["I've Come for Your Pickle", "In the Patty Wagon job, complete the Pickles first"],
        ["Impeccable Balance", "Stand on the Penny Farthing for 10 seconds"],
        ["It's not a Boulder, It's a Rock!", "In the Conch Street job, complete Patrick's Rock, Rock Hinge and Rock Underside last"],
        ["It's Not My Wallet", "In the Mermalair job, complete Patrick's Identity Card first"],
        ["It's Supposed to be Invisible!", "Complete the Invisible Boatmobile job"],
        ["Lantern Hunter", "In the Treehouse, complete all of the lanterns first"],
        ["Like a Tea Tray in the Sky", "In the Mad Tea Party, balance on the Strawberry on the topmost cake on the Cake Stand for 10 seconds"],
        ["Like That's Ever Gonna Happen…", "In the Dragon's Lair job, clean the Gallery Tapestries last"],
        ["Live by the Blade", "Complete the Fire Helicopter blades first"],
        ["Look At Me Shrek, I'm Trotting", "In the Fairy Godmother's Potion Factory job, run on the Running Wheel for 20 seconds"],
        ["May it Stand for All Time!", "In the Clocktower job, ring the bell"],
        ["Mermaidman and Barnacleboy Unite!", "Complete the Mermalair job"],
        ["Merrily Go Round", "Completely clean the Carousel without turning it off"],
        ["Metamorphosis", "In the Caterpillar's Mushroom, clean the Caterpillar's Cocoon last"],
        ["Naughty Nautical Neighbors", "Complete the Conch Street job"],
        ["Now we’re motoring!", "Complete the Wallace & Gromit's Vehicles job"],
        ["Oh My Ears and Whiskers!", "In the White Rabbit's House, complete all Clocks on the Clocks Wall first"],
        ["OUTAGRIME", "Complete the Time Machine job"],
        ["Pave the Way", "In the Detached House, complete the Pathway, Driveway and Driveway Edges first"],
        ["Pond possession!", "In the Wallace & Gromit's House job, roll the football under the pond"],
        ["Powerful Pressure Purist", "Completely clean the Van using only the red nozzle"],
        ["Raking It In", "Earn 50 Stars Career Mode"],
        ["Right house proud", "Complete the Wallace & Gromit's House job"],
        ["Sacristan's Duty", "Complete the Imperial Knight Paladin job"],
        ["Sanguinius Would Be Proud", "Complete the Thunderhawk job"],
        ["Save the Clocktower!", "Complete the Clocktower job"],
        ["Shark Still Looks Fake", "In the Holomax Theater Job, activate the holographic shark "],
        ["Shine Bright", "On the Helter Skelter, complete the objects that have lightbulbs before anything else"],
        ["Side Hustle", "Complete a Bonus Job"],
        ["Soap Connoisseur", "Own all cleaning liquids at the same time"],
        ["Sole Task", "Complete the sole of the Shoe House last"],
        ["Somebody Once Told Me…", "In the Shrek's Swamp job, clean the Outhouse Door and Outhouse Door Handle first"],
        ["Squeaky-clean strides!", "In the Wallace & Gromit's Vehicles job, clean the Techno Trousers first"],
        ["Starting Out", "Earn 5 Stars in Career Mode"],
        ["StegoScore", "In the Playground, roll the football up the stegoslide"],
        ["Such a Curious Croquet-Ground", "In the Queen of Hearts' Court, roll the pink Croquet Ball onto the Croquet Finish Heart"],
        ["Super Star", "Earn 150 Stars in Career Mode"],
        ["Suspicious Modifications", "Complete the Private Jet laser and anti-gravity parts first"],
        ["Tall Order", "Completely clean the Fire Station job without standing on the scaffolding"],
        ["That'll do, Donkey", "Complete the Dragon's Lair job"],
        ["The Art of Cleaning", "In the Moon Rocket job, clean the paintings inside the rocket first"],
        ["The Emperor Protects", "In the Imperial Knight Paladin job, complete the Tilt Shield and Tilt Shield Purity Seals first"],
        ["The Rabbit Sends in a Little Bill", "Complete the White Rabbit's House job"],
        ["This is What Makes Time Travel Possible", "In the Doc's Time Train job, clean the Flux Capacitor and its Particle Colliders first"],
        ["Tyresome", "Complete the Monster Truck tyres first"],
        ["Unlimited Powerwash", "Own the Prime Vista PRO and six of its attachments"],
        ["Urban Xpert", "Own the UrbanX U2 and four of its attachments"],
        ["Watermelon Shot", "In the Skatepark, push the ball out of the bowl"],
        ["We have touchdown!", "Complete the Moon Rocket job"],
        ["We March for Macragge!", "In the Land Raider job, complete the \"Ultramarines II\" Plaque first"],
        ["Welcome to Duloc...", "In the Duloc job, interact with the Information Stand Lever"],
        ["Who Stole the Tarts?", "Complete the Queen of Hearts' Court job"],
        ["Working Hard or Hardly Working? ", "Complete the Fairy Godmother's Potion Factory job"],
        ["Your Future is Whatever You Make it", "Complete the Doc's Time Train job"],
    ];

    assert.strictEqual(officialAchievements.length, 100, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
