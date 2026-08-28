import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rise-of-the-tomb-raider.json - 143 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 391220 (fetched through this app's own services/steamApi.js).
// 124 of 143 ship a real, official Steam description, quoted
// verbatim below. The 19 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rise-of-the-tomb-raider");

test("getPlannerData('rise-of-the-tomb-raider') returns real planner data with 143 curated achievements", () => {

    assert.ok(game, "expected real planner data for rise-of-the-tomb-raider");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 143);

});

test("every Rise of the Tomb Raider achievement has a unique id from 1 to 143 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 143 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 143);
    assert.strictEqual(new Set(apinames).size, 143);

});

test("every Rise of the Tomb Raider achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 124 officially-described Rise of the Tomb Raider achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "NEW_ACHIEVEMENT_17_2",
        "NEW_ACHIEVEMENT_17_5",
        "NEW_ACHIEVEMENT_17_6",
        "NEW_ACHIEVEMENT_17_7",
        "NEW_ACHIEVEMENT_17_8",
        "NEW_ACHIEVEMENT_17_9",
        "NEW_ACHIEVEMENT_17_10",
        "NEW_ACHIEVEMENT_17_11",
        "NEW_ACHIEVEMENT_17_12",
        "NEW_ACHIEVEMENT_18_13",
        "NEW_ACHIEVEMENT_21_27",
        "NEW_ACHIEVEMENT_21_28",
        "NEW_ACHIEVEMENT_21_29",
        "NEW_ACHIEVEMENT_21_30",
        "NEW_ACHIEVEMENT_21_31",
        "NEW_ACHIEVEMENT_30_1",
        "NEW_ACHIEVEMENT_30_2",
        "NEW_ACHIEVEMENT_30_3",
        "NEW_ACHIEVEMENT_30_4",
    ]);

    assert.strictEqual(hiddenApinames.size, 19, "sanity check - Rise of the Tomb Raider has 19 hidden achievements");

    const officialAchievements = [
        ["\"Teamwork\"", "Endurance Co-op Challenge: Collect an Artifact while your partner is down"],
        ["A Dinner for Two", "Endurance Co-op Challenge: Eat the meat of 3 wolves with your partner"],
        ["A Feast for Two", "Endurance Co-op Challenge: Eat the meat of 3 bears with your partner"],
        ["A Moment of Clarity", "Baba Yaga: Face the Witch and live"],
        ["A Snack for Two", "Endurance Co-op Challenge: Eat the meat of 5 rabbits or squirrels with your partner"],
        ["A Trusty Old Friend", "Kill 5 enemies within 10 seconds using any rifle"],
        ["Abandon All Hope", "Baba Yaga: Enter the Wicked Vale"],
        ["Adventure Besties", "Endurance Co-op Challenge: Escape the forest with 5 Medium and Large Artifacts"],
        ["Adventure Friends", "Endurance Co-op Challenge: Escape the forest with 5 Artifacts"],
        ["Alone Time", "Endurance Co-op Challenge: Spend at least one day more than 60 meters apart"],
        ["Amateur Chemist", "Baba Yaga: Craft the Antidote"],
        ["Archaeologist", "Endurance Challenge: Collect at least 5 Artifacts"],
        ["Avid Shopper", "Purchase all items from the Supply Shack"],
        ["Bacon!", "Kill a razorback boar using a Molotov cocktail"],
        ["Bar Brawl", "Melee kill an enemy using a bottle"],
        ["Blade of Justice", "Perform 25 special stealth kills with the knife"],
        ["Bonding Time", "Endurance Co-op Challenge: Escape the forest after surviving for 7 days with at least 10 Artifacts"],
        ["Bravo's Legacy", "Baba Yaga: Confuse 10 enemies with the Dreamstinger"],
        ["Challenging", "Complete any Challenge Tomb"],
        ["Chemical Warfare", "Kill 5 enemies with one Poison Arrow"],
        ["Communication Skills", "Endurance Co-op Challenge: Kill 5 enemies that have been marked by your partner"],
        ["Complete Family History", "Blood Ties: Collect all of the Documents in Croft Manor"],
        ["Complete History of Witchcraft", "Baba Yaga: Collect all of the Documents in the Wicked Vale"],
        ["Compulsive", "Complete every Challenge"],
        ["Craftswoman", "Craft 5 pieces of Equipment"],
        ["Dead Ringer", "Get 25 headshots using the Bolt-Action Rifle"],
        ["Demon in the Dark", "Baba Yaga: Kill 10 enemies while wearing the Wraithskin outfit"],
        ["English Pedigree", "Headshot an enemy with an arrow from a distance beyond 25m"],
        ["Enter the Nightmare", "Lara's Nightmare: Destroy a Skull of Rage"],
        ["Extreme Survivor", "Finish the game on Extreme Survivor difficulty"],
        ["Fall Guys", "Kill 10 enemies by shooting them in the leg"],
        ["Fast Reflexes", "Endurance Challenge: Destroy 3 ceiling spike traps after being caught in them"],
        ["Fearless", "Defeat a Deathless Swordsman using only melee attacks and a finisher"],
        ["Fight the Fear", "Lara's Nightmare: Defeat 100 enemies"],
        ["Firestarter", "Defeat two enemies or more using a single Molotov Cocktail"],
        ["Fluent", "Reach max proficiency in one language"],
        ["Fond Farewell", "Baba Yaga: Speak to Nadia again before leaving the Wicked Vale"],
        ["For My Next Trick...", "Dive into a well"],
        ["For the Night is Dark", "Endurance Co-op Challenge: Clear 3 Enemy Camps at night in a single expedition"],
        ["Get Away from Her!", "Endurance Co-op Challenge: Kill an enemy melee attacking your partner"],
        ["Gilded", "Complete a level in Score Attack with a gold score"],
        ["Glub Glub Glub", "Drown 3 enemies using a water finisher"],
        ["Golden Child", "Complete every level in Score Attack with a gold score"],
        ["Good Samaritan", "Complete 3 Missions"],
        ["Great Haul", "Endurance Challenge: Escape the forest after surviving 10 days, with at least 10 Artifacts"],
        ["Great Outdoors", "Endurance Challenge: Survive for 10 days"],
        ["Happy Camper", "Endurance Challenge: Survive for 5 days"],
        ["Henny Penny", "Baba Yaga: Fall to your death from the Lift"],
        ["Hide and Seek", "Baba Yaga: Rescue Nadia from Trinity"],
        ["Home Raider", "Blood Ties: Collect all of the Relics in Croft Manor"],
        ["Huntress", "Kill 50 animals while wearing the Huntress outfit"],
        ["Iron Will", "Complete a level in Score Attack using 5 cards"],
        ["Keen Eye", "Unearth 40 Survival Caches"],
        ["Key to the Past", "Blood Ties: Acquire the Master Key"],
        ["Last Ride of the Witch House", "Baba Yaga: Activate the Ancient Lift"],
        ["Laying Down The Law", "Kill 6 enemies with the Revolver without reloading"],
        ["Legacy", "Blood Ties: Find truth of Croft Manor"],
        ["Looking for Trouble", "Complete 5 Challenges"],
        ["Master and Apprentice", "Endurance Co-op Challenge: Escape the forest after surviving 10 days with at least 20 Artifacts"],
        ["Master Archaeologist", "Endurance Challenge: Collect at least 10 Artifacts"],
        ["Master Detective", "Blood Ties: Open Lord Croft's Safe"],
        ["Master Fletcher", "Craft 25 of each special arrow type (Fire, Grenade, Poison)"],
        ["Meet the Crofts", "Blood Ties: Collect 50% of the Documents in Croft Manor"],
        ["My Own Worst Enemy", "Complete a level in Score Attack with a card bonus of 200% or more"],
        ["Nature Retreat", "Endurance Challenge: Survive for 7 days"],
        ["No Guts, No Glory", "Perform a 2.5 second or longer swan dive"],
        ["No One Left Behind", "Endurance Co-op Challenge: Revive a player 3 times in a single expedition"],
        ["No Stone Unturned", "Achieve 100% game completion"],
        ["Nope", "Endurance Challenge: Escape the forest on day 1, without recovering any artifacts"],
        ["One Way to Do It", "Endurance Challenge: Warm up from freezing by standing in fire"],
        ["One-Sided Conversation", "Stealth kill an enemy while he is having a conversation"],
        ["Paying Respects", "Attend a funeral"],
        ["Persuasive Argument", "Baba Yaga: Confuse 3 enemies with one shot from the Dreamstinger"],
        ["Pick-Me-Up", "Endurance Co-op Challenge: Revive a player"],
        ["Quick and Painless", "Shoot 15 deer in the heart"],
        ["Quiet Time", "Find the best seat in the house"],
        ["Quite the Collector", "Collect 150 cards"],
        ["Raider", "Endurance Challenge: Open 5 Codices or Sarcophagi"],
        ["Rapid Recovery", "Heal yourself in combat 3 times"],
        ["Reading the Past", "Translate one Monolith"],
        ["Relic Hunter", "Blood Ties: Collect 50% of the Relics in Croft Manor"],
        ["Renegade", "Melee 5 enemies off a ledge"],
        ["Rotisserie", "Shoot a chicken out of the air with a fire arrow"],
        ["Say \"Aaah\"", "Endurance Co-op Challenge: Eat with your partner while at least one of you is starving"],
        ["Season of the Witch", "Baba Yaga: Collect 50% of the Documents in the Wicked Vale"],
        ["Self-Improvement Junkie", "Purchase all skills in one category"],
        ["Servant of the Witch", "Baba Yaga: Confuse an enemy with the Dreamstinger"],
        ["Siberian Ranger", "Beat 15 combat encounters after completing the game"],
        ["Sisters of Artemis", "Endurance Co-op Challenge: Kill a combined total of 10 dangerous animals in a single Expedition"],
        ["Sisters of Athena", "Endurance Co-op Challenge: Kill a combined total of 25 enemies in a single Expedition"],
        ["Skillful Raider", "Endurance Challenge: Open 5 Codices or Sarcophagi without getting caught in a trap"],
        ["Still Tastes Good", "Endurance Challenge: Eat the meat of 5 wolves that were killed with poison damage"],
        ["Sweet Dreams", "Lara's Nightmare: Defeat the Nightmare"],
        ["Team Survival", "Endurance Co-op Challenge: Escape the forest after 7 days without using a single revive"],
        ["Teamwork", "Endurance Co-op Challenge: Warm up from freezing by standing next to a campfire lit by your partner"],
        ["That All You Got?", "Complete 3 Replay Challenges in one Score Attack level"],
        ["The Price of Truth", "Finish the game on any difficulty"],
        ["The Witch Bottles", "Baba Yaga: Unearth all Survival Caches in the Wicked Vale"],
        ["The Wraith of Siberia", "Baba Yaga: Kill 50 enemies while wearing the Wraithskin outfit"],
        ["These Belong in A Museum", "Collect 300 cards"],
        ["To the Rescue", "Cold Darkness Challenge: Rescue 6 prisoners"],
        ["Tomb Raider", "Complete all Challenge Tombs in one playthrough"],
        ["Trick Shot", "Shoot a bottle out of the air"],
        ["Triple Threat", "Kill 3 enemies with 1 Shotgun blast"],
        ["Truth Behind the Myth", "Baba Yaga: Unmask Baba Yaga"],
        ["Truth Seeker", "Collect 25% of all narrative assets (relics, murals, and documents)"],
        ["Ultimate Survivor", "Finish the game on Survivor difficulty"],
        ["Untouchable", "Replay 5 different levels without taking any damage"],
        ["Vacation", "Endurance Challenge: Escape the forest after surviving for 7 days"],
        ["Vasilisa's Lanterns", "Baba Yaga: Complete the Challenge in the Wicked Vale"],
        ["Voices of the Past", "Collect 75% of all narrative assets (relics, murals, and documents)"],
        ["Was That Really Necessary?", "Kill any animal with an explosive"],
        ["Way to Go", "Complete every level in Score Attack with a bronze score or better"],
        ["Weaponsmith", "Fully upgrade one weapon"],
        ["Well Begun Is Half Done", "Complete 10 different levels in Score Attack with a gold score"],
        ["Well Done", "Endurance Challenge: Eat the meat of 5 birds, squirrels, or rabbits that were killed with fire"],
        ["Who Needs a Map?", "Endurance Challenge: Locate 5 crypts"],
        ["Why the Chicken Crossed the Vale", "Baba Yaga: Ride the Lift back to the other side"],
        ["Witch Trials", "Baba Yaga: Complete every Wicked Vale Score Attack with a gold score"],
        ["Witch-Hunt", "Baba Yaga: Complete a Wicked Vale Score Attack with a gold score"],
        ["Witch's Wardrobe", "Baba Yaga: Equip the Dreamstinger and Wraithskin outfit together"],
        ["Witchcraft for Beginners", "Baba Yaga: Attempt any Wicked Vale Score Attack"],
        ["Woman of the People", "Complete every Mission"],
        ["Zipper", "Perform a manual zip line transfer"],
    ];

    assert.strictEqual(officialAchievements.length, 124, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 19 hidden Rise of the Tomb Raider achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["NEW_ACHIEVEMENT_17_2", "The Chosen Few"],
        ["NEW_ACHIEVEMENT_17_5", "Following in Father's Footsteps"],
        ["NEW_ACHIEVEMENT_17_6", "Tougher Than She Looks"],
        ["NEW_ACHIEVEMENT_17_7", "Strange Acquaintance"],
        ["NEW_ACHIEVEMENT_17_8", "Taking the High Road"],
        ["NEW_ACHIEVEMENT_17_9", "A Helping Hand"],
        ["NEW_ACHIEVEMENT_17_10", "The Key To It All"],
        ["NEW_ACHIEVEMENT_17_11", "Whatever It Takes"],
        ["NEW_ACHIEVEMENT_17_12", "The Road Less Travelled"],
        ["NEW_ACHIEVEMENT_18_13", "Quite A Tumble"],
        ["NEW_ACHIEVEMENT_21_27", "Uncovering the Truth"],
        ["NEW_ACHIEVEMENT_21_28", "Give a Man a Fire"],
        ["NEW_ACHIEVEMENT_21_29", "Armed For Bear"],
        ["NEW_ACHIEVEMENT_21_30", "Spinning Leaf"],
        ["NEW_ACHIEVEMENT_21_31", "Legendary Gunsmith"],
        ["NEW_ACHIEVEMENT_30_1", "Perfectionist"],
        ["NEW_ACHIEVEMENT_30_2", "Epidemiologist"],
        ["NEW_ACHIEVEMENT_30_3", "An Ocean in Storm"],
        ["NEW_ACHIEVEMENT_30_4", "Combat Specialist"],
    ];

    assert.strictEqual(names.length, 19, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
