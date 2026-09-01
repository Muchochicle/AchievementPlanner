import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-wars-jedi-survivor.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1774580 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-wars-jedi-survivor");

test("getPlannerData('star-wars-jedi-survivor') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-wars-jedi-survivor");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Jedi: Survivor achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Jedi: Survivor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Jedi: Survivor achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Place You Could Call Home", "Complete the story (after the credits)."],
        ["A Presence I've Not Felt Since...", "Defeat the Spawn of Oggdo, then equip the Poncho."],
        ["Among the Masters", "Find the Jedi Archive on Jedha (story)."],
        ["At the Precipice", "Return to the Mantis on Nova Garon (story)."],
        ["Blood, Sweat, and Tears", "Complete all Force Tears"],
        ["Caij Match", "Defeat all 17 bounty targets (the Caij bounty hunts)."],
        ["Can You Pet the Bogling?", "Pet the boglings at the stables."],
        ["Catch!", "Hit 3 enemies with a single roller mine"],
        ["Cleaning Up", "Interact with the toilet in the cantina bathroom."],
        ["Cobra Cal", "Train with your weapons while wearing a headband"],
        ["For Saw Gerrera", "Leave Coruscant and fly the Mantis for the first time (story)."],
        ["For the Path", "Defeat the giant machine on Jedha (story)."],
        ["Gambler", "Win all holotactics matches"],
        ["Get Down From There", "Attack 20 Lifted enemies"],
        ["Grab Some Seat", "Meet Greez, the cantina owner, on Koboh (story cutscene)."],
        ["Greezy Money", "Trade 25 collected items"],
        ["Growth Spurt", "Find space for a full garden"],
        ["Han Slowlo", "Defeat 50 enemies under the effect of Slow"],
        ["Hey, Luke At Us", "Equip a new cosmetic in every Cal slot"],
        ["I'm a Living Legend", "Defeat all legendary adversaries"],
        ["Intergalactic Geographic", "Scan every type of enemy to fill out the Tactical Guide"],
        ["Into the Abyss", "Watch the cutscene at the Control Center on Koboh (story)."],
        ["It's a Trap", "Explore the Phon'Qi Caverns on Koboh and slice the terminal."],
        ["King of the World", "Reach the highest point of Harvest Ridge"],
        ["Kitted Out", "Customize BD-1, the blaster, and Cal's lightsaber with new parts"],
        ["Max Capacity", "Recruit all 11 cantina recruits."],
        ["Mirror Match", "A Confused enemy defeats an enemy of the same type"],
        ["Now, This Isn't Podracing", "Travel 500m of distance while riding creatures"],
        ["One With the Force", "Avoid 50 attacks using Focus Sight"],
        ["Out of Bedlam", "Rescue your friend from the Bedlam Raiders in Chapter 4 on Koboh (story)."],
        ["Perk of the Job", "Equip Perks in all slots"],
        ["Pinpoint", "Execute 10 perfectly timed Precision Releases"],
        ["Reconnaissance", "Use BD-1 to investigate a target in the distance"],
        ["Riposte", "Parry a Force Pull resisting enemy"],
        ["Road House", "Dropkick an enemy while wearing a mullet"],
        ["Rooftop Duel", "Defeat an Inquisitor in the rooftop duel on Coruscant (story)."],
        ["Skoova Diving", "Collect all 12 fish for Skoova's aquarium."],
        ["Skywalker", "Keep your feet off the ground and walls for 60 seconds"],
        ["Slam Dunk", "Slam 5 enemies with a single use of Slam"],
        ["So Uncivilized", "Defeat 10 enemies with shots using the Point Blank skill"],
        ["Splurgle", "Purchase all of Doma's merchandise (100 Priorite Shards total)."],
        ["Star Tours", "Discover and complete all Jedi Chambers"],
        ["Survivors, We Adapt", "Meet the Nightsister ally on Jedha (story)."],
        ["Tanalorr Bound", "Defeat the boss at the Grand Oculus in Chapter 5 (story)."],
        ["The Jedi Path", "Fully upgrade 3 skill trees"],
        ["The Past Made Present", "Defeat the boss at the Forest Array on Koboh (story)."],
        ["There Is No Try", "Help lift a ship out of the tar pits"],
        ["They Never Saw It Coming", "Kill an unaware enemy 20 times"],
        ["They're Probably Fine", "Drop a mounted creature off a cliff."],
        ["This Is Canon", "Push an enemy into the Shattered Moon mining cannon"],
        ["Tragedy", "Watch the Chapter 5 cutscenes aboard the Mantis (story)."],
        ["Who Gives a Puck", "Defeat the first bounty hunter, Korej Lim."],
        ["You've Got A Friend", "Direct your companions to assist in combat 10 times each"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
