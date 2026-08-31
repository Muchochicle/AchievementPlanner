import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/zombie-army-trilogy.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 301640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("zombie-army-trilogy");

test("getPlannerData('zombie-army-trilogy') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for zombie-army-trilogy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Zombie Army Trilogy achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Zombie Army Trilogy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Zombie Army Trilogy achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A friend in need", "Revive other players 50 times"],
        ["And stay down!", "Kick 50 enemies down"],
        ["Answer the Devil's call", "Pick up a phone"],
        ["Broadsword calling Danny Boy", "Successfully complete The Keep"],
        ["Burning a hole in your pocket", "Loot a Chainsaw Elite's corpse"],
        ["Code Red", "Successfully complete Tower of Hellfire"],
        ["Come and get it! It's a running buffet!", "Get at least 20 for 1 with an explosive kill"],
        ["Descent into Hell", "Successfully complete Crucible of Evil"],
        ["Don't get all stingy with your bullets", "Kill 5,000 enemies of any kind"],
        ["Don't mention the Z word!", "Successfully complete Village of the Dead"],
        ["Don't worry, they're evil!", "Shoot the 3 Zombie Ravens outside the Folterschloss"],
        ["Down but not out", "Kill a total of 20 enemies while incapacitated"],
        ["Elite pickpocket", "Loot a Super Elite's corpse"],
        ["Every bullet counts", "Get a 5-for-1 kill with any sniper rifle"],
        ["Explosive personality!", "Pick up a Panzerfaust"],
        ["Give me something to shoot", "Kill a Zombie Sniper in mid-air"],
        ["Good, bad, I'm the guy with the gun", "Kill 50 Super Elites"],
        ["Got the killshot!", "Kill 20 Elites in co-op"],
        ["Got you, didn't I, you little sucker!", "Kill a Suicide Zombie by hitting his grenade"],
        ["Got your back", "Kill 50 enemies that are actively attacking other players"],
        ["Gratuitous violence from the lot of you", "Complete levels as every playable character"],
        ["Guts and glory", "Reach at least Wave 10 with more gold medals than your companions"],
        ["Headache relief", "Kill 25 Summoners"],
        ["Headshots are the very best", "Defeat 500 enemies with headshots"],
        ["Hell on earth, that's it", "Successfully complete Purgatory"],
        ["I kick arse for the Lord!", "Pick up the Preacher"],
        ["I think we'll start with a reign of terror", "Successfully complete City of Ashes"],
        ["I will not negotiate with the Undead!", "Reach a Chain Count of 10"],
        ["I'll teach ya how to shoot!", "Reach at least Wave 10 with the highest score in any Horde Mode map"],
        ["Into the fire", "Successfully complete Gateway to Hell"],
        ["It's just a flesh wound!", "Sever 1,000 limbs"],
        ["Just in case we make it", "Collect every Gold Bar"],
        ["Leave the limbs you've lost", "Sever 10,000 limbs"],
        ["Like a drunk who's lost a bet", "Kill 20 enemies as they revive"],
        ["Man, you sure know a lot about monsters", "Complete every Survivor sidequest"],
        ["Merciful death", "Put the tortured souls in the Forest out of their misery"],
        ["My family's always been in meat", "Get at least 15 for 1 with an explosive kill"],
        ["Naughty little boys get what they deserve", "Kill 100 Zombie Snipers"],
        ["Nine tenths of the law", "Become possessed"],
        ["No more room in Hell", "Successfully complete Subway to Hell"],
        ["Play it Thule", "Successfully complete Labyrinth of Death"],
        ["Resurrect this!", "Score 5,000 with a  single sniper round"],
        ["Resurrection Day", "Successfully complete Cathedral of Resurrection"],
        ["Scourge of zombiekind", "Reach a Chain Count of 20"],
        ["Snuff them out", "Kill 25 Fire Demons"],
        ["Somebody's got to survive!", "Get at least 10 for 1 with an explosive kill"],
        ["Taste some of Mama's home cookin', Adolf!", "Successfully complete Army of Darkness"],
        ["The head bone's connected to the...oh, wait", "Kill 500 Skeletons"],
        ["The pen is mightier than the sidearm", "Successfully complete Library of Evil"],
        ["There's something in the mist!", "Successfully complete Forest of Corpses"],
        ["They must be destroyed on sight!", "Find and shoot every Bottle of Blood"],
        ["They're coming to get you, Barbra!", "Reach Wave 10 in Horde Mode – Dead Man's Bluff"],
        ["This calls for divine intervention!", "Successfully complete all Chapters on Sniper Elite difficulty"],
        ["This is going to be a bumpy ride", "Successfully complete Terminal"],
        ["We all go a little mad sometimes", "Get an unbroken 10-headshot streak"],
        ["We can still fix him", "Save the man in the hospital"],
        ["We don't need a stretcher. We need a mop!", "Kill 50 Suicide Zombies"],
        ["We got this by the ass!", "Reach a total shot distance of 50km"],
        ["We have a Judas in our midst!", "Kill a Survivor"],
        ["You got rid of those stiffs yet?", "Successfully complete Freight Train of Fear"],
        ["You have...death around you", "Reach Wave 10 in Horde Mode – Dead End"],
        ["You want me to salute that pile of..?", "Kill an Occult General"],
        ["You're going to have to work for your meal", "Reach at least Wave 10 in Horde Mode – Flood of Tears"],
        ["You're going to meet Death now...", "Reach at least Wave 10 in Horde Mode – No Sanctuary"],
        ["You're so dead, you don't even know it", "Complete any Campaign chapter in 4-player co-op at any difficulty level"],
        ["You've got red on you", "Reach a Chain Count of 30"],
        ["Your blood pressure is zero over zero", "Headshot a Heavy Armour Zombie without removing his helmet"],
        ["Zombies, man, they creep me out!", "Reach at least Wave 10 in Horde Mode – Waves of Despair"],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
