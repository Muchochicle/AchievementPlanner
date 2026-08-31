import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dino-d-day.json - 77 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 70000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dino-d-day");

test("getPlannerData('dino-d-day') returns real planner data with 77 curated achievements", () => {

    assert.ok(game, "expected real planner data for dino-d-day");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 77);

});

test("every Dino D-Day achievement has a unique id from 1 to 77 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 77 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 77);
    assert.strictEqual(new Set(apinames).size, 77);

});

test("every Dino D-Day achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 77 Dino D-Day achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...the harder they fall.", "Land the killing blow on a Styracosaur."],
        ["Achilles Meal", "As the Raptor, finish eating a jackrabbit."],
        ["Adding Insult to Injury", "As Microraptor, kill an enemy with your claws after spitting in their face."],
        ["Avenge me!", "Score a pterosaur kill after you've died."],
        ["Bad Hare Day", "Kill two raptors with the same rabbit."],
        ["Bad Medicine", "Score 7 kills in a single life using the MP-44."],
        ["Bandage a Trois", "As Camille, heal yourself and three others with a thrown healthkit."],
        ["Bite the Hand that Feeds You", "Kill a developer in online play."],
        ["Cap'd", "Headshot an enemy that is capturing a point."],
        ["Clever Girl", "As a Raptor, kill Ilona after she's deployed a rabbit."],
        ["Cloudy with a chance of Death!", "As Joe, get 3 kills with a single artillery strike."],
        ["Combat Vet(erinarian)", "As von Graff, heal a dinosaur teammate."],
        ["Combo Meal", "As T-Rex, eat 3 enemy players in one life."],
        ["Divine Wind", "Use a pterosaur to kill an enemy capturing a point."],
        ["Exercise your options", "Kill an enemy with an alternate weapon."],
        ["Frankenhurter", "As Jakob, use your fists to kill two enemies in a single life."],
        ["French Persistence", "Score 7 kills in a single life with the Sten gun."],
        ["German Efficiency", "As Hissman kill two enemies with two consecutive bullets."],
        ["Give 'Em the Bird", "Make your first kill as the Microraptor."],
        ["Griefosaurus", "Pounce the same player twice in one life."],
        ["Griefosaurus Rex", "Pounce 5 different enemy players in the same life."],
        ["He who controls the points...", "Be on the winning team in a Capture Point game."],
        ["Helmet Trick", "Kill 3 Hardgraves in one life."],
        ["Hock a Luger", "As Microraptor, hit an enemy in the head with your poison spit."],
        ["Horned Devil", "As the Stygimoloch, kill 7 enemies with your MG34."],
        ["I choose you!", "Equip an alternate weapon."],
        ["I Regret Everything", "As Compy, get 3 claw kills but fail to kill anyone with your suicide detonation."],
        ["I regret nothing!", "As the Compy, kill an enemy with a suicide detonation."],
        ["If it bleeds we can kill it...", "Kill a Hardgrave while he's in berserk mode."],
        ["Is this a bad time?", "As the Compy, kill an enemy that is capturing a point."],
        ["It ain't easy being greasy...", "As Joe, get 7 kills in one life with the grease gun."],
        ["It DOES burn when you pee!", "As Nigel, burn a dinosaur that is peeing."],
        ["It's the Rapture!", "Capture a point with only raptors."],
        ["Keep Calm and Carry One", "Score a kill with every PIAT round in a single life."],
        ["Kelly's Heroes", "Get one kill as each Allied class in a single round."],
        ["Kiss the Cook", "As Microraptor, spit in Nigel's face while you are on fire."],
        ["Let's Ragnaroooooook!", "Get 3 kills while in berserk mode as Hardgrave."],
        ["More like \"Stompson\"", "Score 7 kills in a single life with the Thompson SMG."],
        ["Mourning Breath", "As T-Rex, knock 3 enemies down with one roar."],
        ["Nazis...I hate these guys.", "Kill one of each Nazi class in the same life."],
        ["Open BAR, dude", "Score 7 kills in a single life with the BAR."],
        ["Operation Torch", "As Nigel, kill 7 enemies with the Flamethrower in a single life."],
        ["Out, but not down", "Kill an enemy with a melee attack while out of bullets."],
        ["Paint the town red", "Kill an enemy player by throwing him into a wall."],
        ["Paint the Town Yellow", "Pee on a downed enemy, then kill them."],
        ["Party Fowl", "Capture a two-man control point with Microraptors."],
        ["Primal Purge", "As T-Rex, get 7 MG kills in one life."],
        ["Pull!", "Shoot and kill a leaping raptor."],
        ["Reich Rolled", "As Axis, get the Styracosaur to his goal without taking any damage."],
        ["Rest for the Unwary", "Use a pterosaur to kill 3 or more enemies simultaneously."],
        ["Santa's Little Helper", "In one match, collect 15 of Santa's lost presents."],
        ["Shoot her!", "Save a teammate by killing a raptor that has pounced them."],
        ["Snack Attack", "As T-Rex, eat an enemy player."],
        ["Sneaky Snacker", "Finish eating 3 jackrabbits in the same life."],
        ["Spit Us Out The Bomb", "As T-Rex, kill an enemy player with a 500lb bomb."],
        ["Star Spangled Hammer", "Get five fist-kills in Berserk mode."],
        ["Stricken by the Streicher", "Score 7 kills in a single life using the MP-40."],
        ["Struck by the Streicher", "Score 7 kills in a single life using the k98."],
        ["Tanks a lot", "Kill 7 enemies in a single life as the Desmatosuchus."],
        ["Thankskilling", "As the Microraptor, kill 7 enemies in a single life."],
        ["THAT WAS FREAKING AMAZING!", "In Hardgrave's berserk mode, punch a T-Rex to death."],
        ["That's just Garand", "Score 7 kills in a single life with the M1 Garand."],
        ["The bigger they are...", "Land the killing blow on a T-Rex."],
        ["The Silence of the Lambs", "Save a teammate or yourself from a thrown goat."],
        ["There Can Be Only One", "Stay alive for an entire round and score at least 5 points."],
        ["There's no 'I' in plane", "Help capture the Ju-52 in Troina."],
        ["This is my BOOM stick(y)!", "As Joe, kill an enemy with your sticky bomb."],
        ["Threepeat", "As the Compy, kill three enemies with one suicide detonation."],
        ["ThrOWNAGE", "Score a double-kill with a bite victim."],
        ["Tonight, you dine in Hell!", "Kill a raptor while she's feeding."],
        ["Trigger Time", "As Trigger, kill 7 enemies with your .30 cal."],
        ["Turkey Dinner", "As Nigel, kill a Microraptor with your flamethrower."],
        ["Two for One Special", "As the Compy, kill two enemies with one suicide detonation."],
        ["Uz Prieksu!", "Score 7 kills in a single life with the Mosin-Nagant."],
        ["Wall Art", "As the Microraptor, kill an enemy while clinging to the wall."],
        ["What's gonna happen to the goat?", "Use a goat to kill an enemy player."],
        ["You Can't Go Home Again", "As an Axis player, kill the 2 German defectors in one life (Trigger and Jakob)."],
    ];

    assert.strictEqual(officialAchievements.length, 77, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
