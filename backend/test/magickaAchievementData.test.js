import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/magicka.json - 88 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 42910 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("magicka");

test("getPlannerData('magicka') returns real planner data with 88 curated achievements", () => {

    assert.ok(game, "expected real planner data for magicka");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 88);

});

test("every Magicka achievement has a unique id from 1 to 88 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 88 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 88);
    assert.strictEqual(new Set(apinames).size, 88);

});

test("every Magicka achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 88 Magicka achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Oh gravity, thou art a heartless bitch\" ", "Die from falling damage. "],
        ["101st Airborne ", "Jump off a cliff and save yourself by teleporting. "],
        ["88mph ", "Get thrown back in time by Vlad. "],
        ["A Bridge too Near", "Defeat the second Guardian"],
        ["Amarth Faeg!", "Defeat the third Guardian"],
        ["An eye for an eye", "Defeat Behold, the watcher"],
        ["Bad Taste ", "Overkill 1000 enemies. "],
        ["Banisher of horrors", "Vanquish 1000 creatures of the Cthulhu mytos."],
        ["Basic Element ", "Use all basic elements at least once. "],
        ["Being the Tide", "Survive the entire onslaught at the end of Courtyard on hard difficulty."],
        ["Better you than me ", "Be invisible while one other player dies. "],
        ["Blue… No Yelloooow! ", "Have a hard time settling on a color. "],
        ["Breezed through", "Complete Chapter 1 in one sitting without dying."],
        ["City tour guide", "Finish Dungeons & Gargoyles without any player dying on hard difficulty."],
        ["Cooking by the book", "Cast a Magick successfully."],
        ["Deep Impact ", "Kill 5 enemies with a single Earth projectile. "],
        ["Don't fear the reaper ", "Defeat Death. "],
        ["Don't mach such a mess", "Defeat the Wurstmacher without destroying any spinning saws."],
        ["Dragon \"Slayer\" ", "Defeat Fafnir. "],
        ["Driven mad", "Complete Chapter 3 in one sitting without dying."],
        ["Enduring the Tide", "Survive the entire onslaught at the end of Courtyard."],
        ["Fhtagn once more!", "Put great Cthulhu to sleep once more."],
        ["Finders keepers ", "Steal your friends equipment after he has died. "],
        ["First Blood ", "Kill one enemy using the M60. "],
        ["Friendship is Magicka", "Find all the elven horses"],
        ["From whence you came...", "Get sucked into the portal to R'lyeh"],
        ["Good Company", "Accomplish all objectives in the Vietnam rescue mission"],
        ["Handling the frustration", "Complete Chapter 2 in one sitting without dying."],
        ["Hey, mach-arena!", "Finish the chapter on hard difficulty without any player dying."],
        ["Houdini ", "Break free from entanglement without using spells or magicks. "],
        ["Hurt me plenty", "Find and leave the brazier of Bizzlebob aflame."],
        ["I call it a Hawking Hole ", "Make 50 enemies get sucked into the same Vortex. "],
        ["I don't believe in Orcs", "Get to the Old Library without killing any Orcs."],
        ["I don't believe in Trolls", "Finish the bankrobbery encounter with all trolls still alive"],
        ["I put on my robe and wizard hat ", "Aquire all Magicks in adventure mode. "],
        ["I think Magicka is a pretty cool guy ", "Defeat Assatur. "],
        ["I'm the wizard king, I can do anything! ", "Create a spell that contains 5 different elements. "],
        ["Ice Age", "It's what killed the dinosaurs. Smash 100 frozen creatures to bits."],
        ["IMMA FIRIN' MAH LAZER!!!! ", "Successfully cross two beams into a more powerful one. "],
        ["Interred with the Vampire", "Finish The Other Side of the Coin"],
        ["Is that the wurst you can do?", "Defeat the Wurstmacher."],
        ["It's over nine thousand!!!! ", "Deal over 9000 damage to one enemy. "],
        ["It's raining (beast)men ", "Gib 5 beastmen in 5 seconds. "],
        ["Just a breeze of blue cheese", "Finish the chapter without any player dying."],
        ["KHAAAAAAAAN!", "Defeat Khan "],
        ["Khan't we all just get along?", "Finish Dungeons & Gargoyles on hard difficulty."],
        ["Killing your friends, you're doing it wrong ", "Heal a total of 100 000 hit points. "],
        ["King's Quest ", "Find all the moose. "],
        ["Lead farmer", "Kill 1000 enemies using firearms"],
        ["Let Me In", "Enter the house of Elwenhús"],
        ["Let off some steam ", "Create a spell containing Steam. "],
        ["Mission improbable ", "Complete Adventure in less than 4 hours. "],
        ["More like the Aristocats ", "Defeat the Aristocrats. "],
        ["MU-MU-MU-MULTIKILL! ", "Kill 20 enemies with one spell or magick. "],
        ["Never cross the beams ", "Cross opposite beams so that at least someone dies from it. "],
        ["No more trolling", "Defeat Ygg."],
        ["No Power = No Responsibility", "Defeat Parker."],
        ["Not what they signed up for", "Disrupt the service of 37 minions by the means of spinning saws."],
        ["Nothing but a man, who can never fail", "Win 20 versus matches in a row"],
        ["OMG! They killed Yellow! ", "Die with yellow robes. "],
        ["One in a million? ", "Get struck by a thunderbolt and survive. "],
        ["Play it again, Vlad ", "Defeat Vlad. "],
        ["RPG much? ", "Complete all side quests in the game. "],
        ["Saved by the king ", "Defeat the Warlock and Machine. "],
        ["Seven day cruise", "Play one game per day on the Lonely Island Cruise for seven consecutive days."],
        ["Sherlock Holmes ", "Find all secret areas in the game. "],
        ["Solid Snake", "Defeat Jormungandr."],
        ["State Alchemist ", "Create a spell that contains at least 3 different elements. "],
        ["Street smart", "Finish Dungeons & Gargoyles without any player dying on normal difficulty."],
        ["Stuff of legends ", "Defeat Fafnir by striking him with Gram. "],
        ["Swedish Summer Achievement", "Experience Rain and/or Blizzard 20 times during one Versus match to unlock a much needed treat."],
        ["Tenderized!", "Finish the chapter on hard difficulty."],
        ["That was a fairy fight", "Defeat the adventurers in Dungeons & Gargoyles by defeating the Champion last."],
        ["The clone wars", "Defeat the adventurers in Dungeons & Gargoyles by defeating the Magician last."],
        ["The Crusader Breakings", "Defeat the first Guardian"],
        ["The Enchanter", "Imbue your weapon with a spell. "],
        ["The others were dwarfed by you", "Defeat the adventurers in Dungeons & Gargoyles by defeating the Assassin last."],
        ["The perfect storm ", "All players survived a thunderstorm. "],
        ["The postwizard", "Read the entire letter from Meach in Dungeons & Gargoyles."],
        ["There can be only one ", "Kill MacLeod. "],
        ["There is no goat level ", "Defeat Jotunn. "],
        ["This is Magicka! ", "Push the soldier in battlefield down the hole. "],
        ["Too fancy for fireballs? ", "Complete one level using only magicks. "],
        ["Ultra-Violence", "Find and leave the radio of Bizzlepop in Dungeons & Gargoyles on."],
        ["Vanilla Ice ", "Create a spell containing only Ice. "],
        ["We are the champions ", "Survive all waves of a challenge. "],
        ["Wingardium Leviosa ", "Push someone off a cliff. "],
        ["Wiped Out", "Finish Dungeons & Gargoyles on normal difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 88, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
