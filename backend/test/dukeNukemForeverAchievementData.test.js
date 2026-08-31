import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/duke-nukem-forever.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 57900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("duke-nukem-forever");

test("getPlannerData('duke-nukem-forever') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for duke-nukem-forever");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Duke Nukem Forever achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Duke Nukem Forever achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Duke Nukem Forever achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Good Dam Fight", "Defeat the Battlelord on the Hoover Dam"],
        ["Air-Duke", "Win air hockey with a score of 7-0 in the strip club"],
        ["Annihilation", "Kill 100 aliens"],
        ["Another Piece of Cake", "Complete 'The Doctor Who Cloned Me' DLC on Easy."],
        ["Balls of Steel", "Earn a 1,000,000 pinball score in SP"],
        ["Baron von Nukem", "Shoot down 20 alien fighters"],
        ["Beating the One-Eyed Worm", "Defeat the Energy Leech"],
        ["Big Guns, Big Ships", "Blow up 5 enemy gunships or dropships"],
        ["Bloody Red Rover", "Kill 30 enemies with the moon rover (The Doctor Who Cloned Me DLC)."],
        ["Bubble Buster", "Kill 10 expanded (bubble-trapped) enemies with melee attacks."],
        ["Bucket Head", "Find all 3 helmets in the SP campaign"],
        ["Call Waiting", "Listen to all phone messages"],
        ["Come Get a Little More", "Complete the DLC on Hard."],
        ["Come Get Some", "Complete the SP campaign on Hard Difficulty"],
        ["Companion Barrel", "Unlock the secret closet at the end of the Forkstop"],
        ["Damn, I'm Good", "Complete the SP campaign on Insane Difficulty"],
        ["Damn, I'm REALLY Good", "Complete the DLC on Insane."],
        ["Dead Useful", "Kill 10 aliens with environmental explosives"],
        ["Drawrings", "Doodle something on the whiteboard in SP"],
        ["Duke Angry, Duke Smash!", "Kill 15 aliens with melee attacks while on steroids"],
        ["Extermination", "Kill 50 aliens"],
        ["Flagon of Chuckles", "Drink a beer in SP"],
        ["Fork the Pork", "Kill 6 aliens with the forklift"],
        ["Freeze Well!", "Kill 15 frozen aliens"],
        ["Full Body Tourettes", "Get knocked down 10 times"],
        ["Gunslinger", "Carry the gold pistol through the whole SP campaign"],
        ["He's Got a Hologram!", "Use a Holoduke in SP"],
        ["Heart to Heart", "Defeat Dr. Proton, the final boss of The Doctor Who Cloned Me DLC."],
        ["Hedonist, not Misogynist", "In the DLC, discover the arcade game that lets you slap women, and reject it."],
        ["Hippy-Stomper", "Foot stomp 12 aliens"],
        ["I Am All That Is Man", "Discover all ego cap rewards"],
        ["I Am All That Is Man - Again!", "Discover all ego cap rewards in the DLC."],
        ["I Need a Date", "Look at every page of a calendar in SP"],
        ["I Need a Towel", "Get hit by 10 Pregnator bombs"],
        ["Judge, Jury, Executioner", "Execute 20 aliens"],
        ["Juiced", "Take steroids in SP"],
        ["Let's Rock", "Complete the SP campaign on Normal Difficulty"],
        ["Let's Rock Out", "Complete the DLC on Normal."],
        ["Lots of Whacking", "Win a game of Alien Abortion in the strip club"],
        ["Natural Disaster 3x", "Kill 3 aliens at once"],
        ["Nobody Likes a Whiner", "Knock out the talent at the talk show"],
        ["Noms", "Eat 10 pieces of food during the SP campaign"],
        ["Not Bad for a Human", "Defeat the Alien Queen"],
        ["Nuclear Devastation", "Kill 250 aliens"],
        ["Octacide", "Defeat the Octaking"],
        ["On the Noggin'", "Kill 30 aliens with headshots"],
        ["One-Eyed Freak", "Defeat the Cycloid"],
        ["Party Animal", "Drink all of the beers in the strip club"],
        ["Passive Aggressive", "Let 20 enemies die by someone else's hand."],
        ["Pescaphobe", "Kill all of the catfish in the underwater level"],
        ["Piece of Cake", "Complete the SP campaign on Easy Difficulty"],
        ["Pit Champion", "Defeat the Battlelord in Las Vegas"],
        ["Road Rage", "Kill 15 aliens with the monster truck"],
        ["Scientits", "Earn a 1,000,000 pinball score on the Scientits pinball machine (DLC)."],
        ["Special Thanks", "Watch the credits all the way through"],
        ["Sticky Bomb Like You!", "Put a Trip Mine on a live alien"],
        ["Substance Abuser", "Drink beer while on steroids or vice-versa in SP"],
        ["Sunday, Black Sunday", "Shoot down the blimp above the stadium"],
        ["Threesome", "Kill 3 enemies within 3 seconds with the Impregnader."],
        ["Tosser... in the Literal Sense", "Kill 10 aliens with tossed objects"],
        ["Trapper", "Kill 10 aliens with Trip Mines"],
        ["Turd Burglar", "Find and steal a piece of poo"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
