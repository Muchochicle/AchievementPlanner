import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/borderlands-2.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 49520 (fetched through this app's own services/steamApi.js).
// 54 of 75 ship a real, official Steam description; the
// 21 hidden achievements ship no Steam description and
// their conditions are curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const borderlands2 = getPlannerData("borderlands-2");

test("getPlannerData('borderlands-2') returns real planner data with 75 curated achievements", () => {

    assert.ok(borderlands2, "expected real planner data for borderlands-2");
    assert.ok(Array.isArray(borderlands2.achievements));
    assert.strictEqual(borderlands2.achievements.length, 75);

});

test("every Borderlands 2 achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = borderlands2.achievements.map(a => a.id);
    const apinames = borderlands2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Borderlands 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of borderlands2.achievements) {

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

test("every one of the 54 officially-described Borderlands 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 21 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Challenge Accepted", "Completed level 1 of all non-level-specific challenges with a single character."],
        ["Goliath, Meet David", "Allowed a goliath to level up four times before killing him."],
        ["Went Five Rounds", "Completed Round 5 of any Circle of Slaughter."],
        ["Not Quite Dead", "Reached level 5."],
        ["Better Than You Were", "Reached level 10."],
        ["Always Improving", "Reached level 25."],
        ["Capped Out... For Now", "Reached level 50."],
        ["Arctic Explorer", "Discovered all named locations in Three Horns, Tundra Express, and Frostburn Canyon."],
        ["Urban Explorer", "Discovered all named locations in Sanctuary, Opportunity, and Lynchwood."],
        ["Highlands Explorer", "Discovered all named locations in The Highlands, Thousand Cuts, and Wildlife Exploitation Preserve."],
        ["Blight Explorer", "Discovered all named locations in Eridium Blight, Arid Nexus, and Sawtooth Cauldron."],
        ["World Traveler", "Discovered all named locations."],
        ["Sugar Daddy", "Tipped Moxxi $10,000."],
        ["Decked Out", "Had Purple-rated gear or better equipped in every slot."],
        ["Sabre Rattler", "Killed 100 enemies with the Sabre turret."],
        ["Phased and Confused", "Phaselocked 100 enemies."],
        ["So Much Blood!", "Gunzerked continuously for 90 seconds."],
        ["Cute Loot", "Killed a Chubby."],
        ["Tribute To A Vault Hunter", "Got an item from Michael Mamaril."],
        ["Definitely An Italian Plumber", "Killed Donkey Mong."],
        ["High-Flying Hurler", "Killed a flying enemy with a thrown Tediore weapon."],
        ["Token Gesture", "Redeemed 25 tokens."],
        ["Unseen Predator", "Remained in Zero's Decepti0n mode for ten seconds straight."],
        ["Build Buster", "Killed a Constructor without it ever building another bot."],
        ["How Do I Look?", "Unlocked 10 customization items."],
        ["Friendship Rules", "Revived someone from \"Fight for Your Life!\" that is on your friends list."],
        ["Better Than Money", "Purchased 5 items from the black market."],
        ["Up High, Down Low", "Gave Claptrap a high five."],
        ["Bounty Hunter", "Completed 20 side missions."],
        ["Did It All", "Completed all side missions."],
        ["Treasure Hunter", "Completed the mission \"X Marks the Spot\"."],
        ["Gadabout", "Discovered all named locations in Oasis and the surrounding Pirate's Booty zones."],
        ["Completionist", "Completed all Pirate's Booty side missions."],
        ["Explosive", "Completed the mission \"Long Way To The Top\"."],
        ["Motorhead", "Completed all Campaign of Carnage side missions."],
        ["Obsessed", "Collected 10 pictures of Moxxi in Campaign of Carnage."],
        ["Face Off", "Completed the mission \"The Fall of Nakayama\"."],
        ["Done That", "Completed all Hammerlock's Hunt side missions."],
        ["Been There", "Discovered all named locations in Hammerlock's Hunt."],
        ["I Totes Planned That Boss", "Slew Mister Boney Pants Guy."],
        ["Yaaaaaay", "Introduced thyself to the White Knight."],
        ["Shorty, You So Best", "Completed thy quest by rescuing yonder queen."],
        ["Girl's Gotta Eat", "Fed thy noble queen 3 times during one visit to her quarters."],
        ["It's Like That One Video", "Showed thine worst enemy, the abomination known as \"The Darkness\", who is the nerdiest of them all."],
        ["They Was All \"Hey That's Mine\"", "Unsheathed 5 swords from Immortal Skeletaurs without leaving the area."],
        ["Dang Girl You Ace At This Game", "Won the most challenging round in Murderlin's Temple."],
        ["Hmmmmm", "Wielded the Mysterious Amulet."],
        ["Keep Rollin' Rollin' Rollin'", "Demonstrated your skill, or lack thereof, at rolling the magical treasure orb of many sides."],
        ["Make it Raaaaaid", "Vanquished the Ancient Dragons of Destruction."],
        ["Anyway, Here's \"Firewall\"", "Activate the Backburner's firewall."],
        ["Chocolate Chip Confirmed", "Allow Tiny Tina to arm the moonshot cannon."],
        ["Spicy Boy", "Defeat Haderax the Invincible."],
        ["Decrypted!", "Defeat the Dark Web."],
        ["3 or Bust", "Complete the mission \"Paradise Found\"."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Achievement_1",
        "Achievement_2",
        "Achievement_3",
        "Achievement_4",
        "Achievement_5",
        "Achievement_6",
        "Achievement_7",
        "Achievement_8",
        "Achievement_9",
        "Achievement_10",
        "Achievement_11",
        "Achievement_12",
        "Achievement_13",
        "Achievement_14",
        "Achievement_15",
        "Achievement_16",
        "Achievement_39",
        "Achievement_42",
        "Achievement_44",
        "Achievement_50",
        "Achievement_74",
    ]);

    assert.strictEqual(hiddenApinames.size, 21, "sanity check - Borderlands 2 has 21 hidden achievements");

    const dataPairs = borderlands2.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 21 hidden Borderlands 2 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Achievement_1", "First One's Free"],
        ["Achievement_2", "Dragon Slayer"],
        ["Achievement_3", "A Road Less Traveled"],
        ["Achievement_4", "New In Town"],
        ["Achievement_5", "An Old Flame"],
        ["Achievement_6", "No Man Left Behind"],
        ["Achievement_7", "Wilhelm Screamed"],
        ["Achievement_8", "Sky's The Limit"],
        ["Achievement_9", "Can See My House From Here"],
        ["Achievement_10", "Farewell, Old Girl"],
        ["Achievement_11", "Got The Band Back Together"],
        ["Achievement_12", "Identity Theft"],
        ["Achievement_13", "An Angel's Wish"],
        ["Achievement_14", "Bombs Away"],
        ["Achievement_15", "Knowing Is Half The Battle"],
        ["Achievement_16", "Cool Story, Bro"],
        ["Achievement_39", "What does it mean?"],
        ["Achievement_42", "Well, That Was Easy"],
        ["Achievement_44", "Thresher Thrashed"],
        ["Achievement_50", "Feels Like The First Time"],
        ["Achievement_74", "Painbow Connection"],
    ];

    assert.strictEqual(names.length, 21, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = borderlands2.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
