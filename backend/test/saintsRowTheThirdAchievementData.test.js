import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/saints-row-the-third.json - 83 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 55230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("saints-row-the-third");

test("getPlannerData('saints-row-the-third') returns real planner data with 83 curated achievements", () => {

    assert.ok(game, "expected real planner data for saints-row-the-third");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 83);

});

test("every Saints Row: The Third achievement has a unique id from 1 to 83 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 83 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 83);
    assert.strictEqual(new Set(apinames).size, 83);

});

test("every Saints Row: The Third achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 83 Saints Row: The Third achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Person", "Buy your first Upgrade from the Upgrade Store."],
        ["And Boom Goes the Dynamite", "Complete all instances of Heli Assault."],
        ["B.A.M.F.", "Hold Your Position at Technically Legal using only melee attacks."],
        ["Bo-Duke-En", "Hijack 50 vehicles - Dukes style."],
        ["Bright Lights, Big City", "Complete all City Takeover gameplay in the entire city of Steelport."],
        ["Bromance in the Row", "Play SR3 Co-op for 5 hours."],
        ["C-C-C-Combo Breaker", "Cause $150,000 worth of damage in a single Sexy Kitten Yarngasm combo."],
        ["C-List Celebrity", "Complete all missions for Gangstas in Space."],
        ["Cat on a Hot Tin Roof", "Kill all of the rooftop mascots (in a single instance of Sad Panda Skyblazing)."],
        ["Cooked To Perfection", "Roast 50 peds with the car’s flamethrower (in a single instance of Super Ethical PR Opportunity)."],
        ["Cowboy Up", "Fully upgrade one Weapon in each slot."],
        ["Crew of Two", "Complete all instances of Activities in Co-op."],
        ["Dead Presidents", "Complete 'When Good Heists...'."],
        ["Do a Barrel Roll!", "Perform all vehicle stunts with the Aegean."],
        ["Double Dose of Pimping", "Complete all instances of Snatch."],
        ["Everything is Permitted", "Kill all of the hitman Assassination targets."],
        ["Eye of the Bee-Holder", "Spray 25 rabid fans with the Swarmitron."],
        ["Feeding Time", "Throw 5 mascots into the water (in a single instance of Apocalypse Genki)."],
        ["Fence Killa 2011", "Complete all instances of Mayhem."],
        ["First Contact", "Destroy all enemy spacecraft during the chase scene."],
        ["Flame On", "Fly through all of the rings (in a single instance of Sad Panda Skyblazing)."],
        ["Flash the Pan", "Destroy all Gang Operations in Steelport."],
        ["Gangstas... In Space!", "Complete Act 3 in another way."],
        ["Gellin' Like Magellan", "Explore every hood in Steelport."],
        ["Gender Equality", "Play for at least 2 hours as a male character AND 2 hours as a female character."],
        ["Genki Bowl Champ", "Complete all activity instances in Genki Bowl VII."],
        ["Get Off My Back", "Destroy 5 chase vehicles (in a single instance of Super Ethical PR Opportunity)."],
        ["Getting the Goods", "Find 25% of all Collectibles."],
        ["Go Into the Light", "Complete all instances of Guardian Angel."],
        ["Gotta Break Em In", "Complete 'The Ho Boat'."],
        ["Hack the Planet", "Complete all City Takeover gameplay in the Stanfield district."],
        ["Hanging With Mr. Pierce", "Complete all City Takeover gameplay in the Downtown district."],
        ["Haters Gonna Hate", "Kill 1000 Gang Members."],
        ["Have A Reality Climax", "Complete all instances of Professor Genki's Super Ethical Reality Climax."],
        ["Hi-Jack It", "Steal and deliver all Vehicle Theft targets."],
        ["I Do My Own Stunts", "Land on the Parachute Target during the rescue scene."],
        ["I Heart Nyte Blayde", "Complete 'STAG Party'."],
        ["Jumped In", "Create and share a character online."],
        ["kill-deckers.exe", "Complete 'http://deckers.die'."],
        ["Kuh, Boom.", "Complete Act 1 in another way."],
        ["Life of the Party", "Find 100% of all Collectibles."],
        ["Lights! Camera! Action!", "Collect all 6 hidden clapboards."],
        ["Love/Hate Relationship", "Taunt AND/OR Compliment 50 gang members."],
        ["Mourning Stars", "Complete all City Takeover gameplay in the New Colvin district."],
        ["Murder in the Jungle", "Finish both instances of Apocalypse Genki."],
        ["Murderbrawl 31", "Complete 'Murderbrawl XXXI'."],
        ["My Pet, Monster", "Complete all missions for \"The Trouble With Clones\"."],
        ["Once Bitten... Braaaaaaains", "Complete 'Zombie Attack'."],
        ["Opulence, You Has It", "Complete 'Party Time'."],
        ["Ouch.", "Complete all instances of Insurance Fraud."],
        ["Ow My Balls!", "Do your first nutshot AND testicle assault."],
        ["Partners in Crime", "Beat all Missions in Co-op."],
        ["Pew! Pew! Pew!", "Kill 35 Space Amazons with the Laser Pistol."],
        ["Pimped Out Pad", "Upgrade one Stronghold to its full glory."],
        ["Porkchop Sandwiches", "Complete all instances of Trail Blazing."],
        ["Public Enemy #1", "Destroy 45 Police and Swat Vehicles while protecting Jimmy's car."],
        ["Revenge of the Navigator", "Destroy 10 enemy spacecraft with the Aegean while filming."],
        ["Send in the Clones", "Kill a Brute using only melee damage while under the influence of Saints Flow."],
        ["Shake and Bake", "Complete your first Challenge."],
        ["Stay Classy Steelport", "Kill 25 Gang Members each with 'the Penetrator' AND the Fart in a Jar."],
        ["Stick the Landing", "Land on Magarac Island (in Sad Panda Skyblazing)."],
        ["Sting Operation", "Destroy 5 Steelport Guard vehicles during mission 'Tour de Farce'."],
        ["Storm the Yarn", "Destroy a mouse ATV during Sexy Kitten Yarngasm."],
        ["Supaa-Excellent!", "Shoot down a helicopter with a Saints Flow fireball."],
        ["Tank You Very Much", "Complete all instances of Tank Mayhem."],
        ["The American Dream", "Customize 10 vehicles."],
        ["The Johnnyguard", "Prevent Johnny Tag from taking damage on the Magarac Bridge."],
        ["The Welcome Wagon", "Complete 'I'm Free - Free Falling'."],
        ["Third and 30", "Spend over 30 hours in Steelport."],
        ["Titanic Effort", "Complete Act 2."],
        ["Too Close to the Son", "Complete Act 3 in one way."],
        ["Tour de Farce", "Complete mission 'Tour de Farce'."],
        ["Tower Defense", "Complete Act 1 in one way."],
        ["Tune In, Drop Off", "Complete all instances of Trafficking."],
        ["Union Buster", "Kill 15 cameramen."],
        ["Warrior Princess", "Kill 7 Space Amazons with melee attacks."],
        ["We're Takin' Over", "Complete 'We've Only Just Begun'."],
        ["Weird Science", "Complete mission 'Weird Science'."],
        ["Who Loves Ya Baby", "Kill 50 brutes."],
        ["Xenaphobe", "Kill Space Brutina."],
        ["You're My Hero!", "Complete ALL Challenges."],
        ["You're the Best...", "Complete all City Takeover gameplay in the Carver Island district."],
        ["Your Backseat Smells Funny", "Complete all instances of Escort."],
    ];

    assert.strictEqual(officialAchievements.length, 83, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
