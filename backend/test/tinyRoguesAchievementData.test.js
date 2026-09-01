import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tiny-rogues.json - 86 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2088570 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tiny-rogues");

test("getPlannerData('tiny-rogues') returns real planner data with 86 curated achievements", () => {

    assert.ok(game, "expected real planner data for tiny-rogues");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 86);

});

test("every Tiny Rogues achievement has a unique id from 1 to 86 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 86 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 86);
    assert.strictEqual(new Set(apinames).size, 86);

});

test("every Tiny Rogues achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 86 Tiny Rogues achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["(Don't fear) The Reaper", "Defeat Death."],
        ["A Secret Place", "Find and uncover 3 secret rooms."],
        ["All Star", "Defeat Eden, Amon and Primal Death as Doppelganger."],
        ["Angel of Death", "Defeat Primal Death."],
        ["Another Brick in the Wall", "Defeat all the world 2 floor 6 bosses."],
        ["Around the World", "Complete the world objective \"A New Dawn\"."],
        ["Back In Black", "Complete the world objective \"The End\"."],
        ["Born To Be Wild", "Unlock all 16 Doppelganger forms."],
        ["Born To Lose", "Defeat all world 1 floor 1 bosses."],
        ["Breaking the Law", "Defeat Death with a weapon that has at least upgrade level 7."],
        ["Bring Me to Life", "Complete the world objective \"Echoes of the Forgotten\"."],
        ["Can't Stop", "Level up to Mastery Level 20."],
        ["Cherry Bomb", "Trigger more than 10 damaging effects within 1 second."],
        ["Crazy Train", "Play as Chaos and have 2 strength traits, 2 dexterity traits and 2 intelligence traits."],
        ["Dancing in the Dark", "Enter the Shadow Planes."],
        ["Danger Zone", "Defeat Death at Cinder 12."],
        ["Don't Stop Believin'", "Activate a total of 10 different set bonuses."],
        ["Don't You (Forget About Me)", "Defeat Death with every class."],
        ["Down Under", "Defeat all world 1 floor 9 bosses."],
        ["Drink", "Take a sip from your health flask."],
        ["Edge Of Seventeen", "Defeat Death at Cinder 16."],
        ["Everybody Wants to Rule the World", "Complete the world objective \"The Pact\"."],
        ["For Whom The Bell Tolls", "Defeat Death with 5 different classes."],
        ["Gimme chocolate!!", "Defeat Death while having at least 50 Intelligence."],
        ["Gonna Fly Now", "Defeat Death while having at least 50 Strength."],
        ["Have a Drink on Me", "Defeat Death while having at least 5 different booze buffs active."],
        ["Have You Ever Seen The Rain", "Defeat all world 1 floor 5 bosses."],
        ["Heaven Is a Place on Earth", "Enter the High Heavens Level 2."],
        ["Hells Bells", "Complete the world objective \"Whispers of Brimstone\"."],
        ["Here I Go Again", "Complete the world objective \"Beyond Tomorrow\"."],
        ["Highway to Hell", "Enter the Burning Hells."],
        ["Hit Me With Your Best Shot", "Defeat Death while having over 500% critical hit damage."],
        ["Holding Out For A Hero", "Fully repair the Broken Hero Sword."],
        ["Hotel California", "Stay over night at the tavern."],
        ["House Of The Rising Sun", "Defeat Death as the Gunslinger."],
        ["I'm a Believer", "Receive at least 20 blessings from Shrines or Cursed Shrines. "],
        ["I'm Still Standing", "Survive a fight against Death at 1 heart or less."],
        ["If You Want Blood (You've Got It)", "Sacrifice a total of 10 hearts."],
        ["In Too Deep", "Level up to Paragon Level 25."],
        ["Iron Man", "Defeat Death as the Deprived while having at least 10 curse."],
        ["It’s a Long Way to the Top", "Ascend the Primordial Throne."],
        ["It's My Life", "Level up to Mastery Level 30."],
        ["Karma Chameleon", "Enter the Shadow Planes Level 2."],
        ["Knockin' On Heaven's Door", "Complete the world objective \"Visions of Starlight\"."],
        ["Livin' on a Prayer", "Defeat Eden on at least Cinder 14 as the Super Hero."],
        ["Losing My Religion", "Defeat all world 1 floor 8 bosses."],
        ["Magical Mystery Tour", "Defeat all world 2 floor 1 bosses."],
        ["Maneater", "Defeat all world 2 floor 3 bosses."],
        ["Maniac", "Level up to Paragon Level 50."],
        ["Master Of Puppets", "Defeat all world 1 floor 2 bosses."],
        ["Material Girl", "Open a Treasure Chest while having at least +5 Magic Find."],
        ["Money For Nothing", "Sell a combined total worth of 500G to the pawn shop."],
        ["Never Too Much", "Defeat Death while having at least 10 Luck."],
        ["No Easy Way Out", "Defeat Death at Cinder 4."],
        ["Otherside", "Defeat all the world 2 floor 9 bosses."],
        ["Paradise City", "Ascend the Celestial Throne."],
        ["Rainbow in the Dark", "Defeat Death while having at least 3 auras."],
        ["Running up that Hill", "Level up to Mastery Level 10."],
        ["Smoke On The Water", "Defeat all world 1 floor 6 bosses."],
        ["Stairway to Heaven", "Enter the High Heavens."],
        ["Stand On Your Own", "Defeat Death without using any Mastery Perks."],
        ["Sympathy For The Devil", "Ascend the Infernal Throne."],
        ["T.N.T", "Defeat all world 2 floor 2 bosses."],
        ["Take On Me", "Progress to and defeat Death while never attacking an enemy with a weapon. (Tip: Turn off auto equip.)"],
        ["The Alchemist", "Defeat Death while having at least 9 different potion buffs active."],
        ["The Bad Touch", "Defeat Death while having at least 4 different infusion buffs active."],
        ["The Chain", "Reach a Cinder sum streak of 32 or higher."],
        ["The Gambler", "Use 50 or more dice."],
        ["The Heat Is On", "Defeat Death at Cinder 8."],
        ["The Trooper", "Defeat all world 2 floor 5 bosses."],
        ["Thriller", "Defeat all world 1 floor 4 bosses."],
        ["Through The Fire And Flames", "Defeat all world 1 floor 7 bosses."],
        ["Thunderstruck", "Defeat Death in under 25 minutes."],
        ["Total Eclipse of the Heart", "Enter the Burning Hells Level 2."],
        ["Toxicity", "Defeat all world 2 floor 4 bosses."],
        ["Trapped Under Ice", "Defeat all the world 2 floor 7 bosses."],
        ["U Can't Touch This", "Defeat Death while having at least 50 Dexterity."],
        ["Wanted Dead or Alive", "Defeat Primal Death on at least Cinder 14 as the Super Hero."],
        ["War Pigs", "Defeat all the world 2 floor 8 bosses."],
        ["We Are The Champions", "Unlock all character classes."],
        ["Welcome To The Jungle", "Defeat all world 1 floor 3 bosses."],
        ["Whats Up", "Complete the world objective \"Brave the Unknown\"."],
        ["Where Is My Mind?", "Defeat Death as the Doppelganger while having completed every floor with a different form. (10 Total Forms)"],
        ["With A Little Help From My Friends", "Defeat Death while having at least 10 active companions at the same time."],
        ["With or Without You", "Defeat Death with 17 different classes."],
        ["You Give Love a Bad Name", "Defeat Amon on at least Cinder 14 as the Super Hero."],
    ];

    assert.strictEqual(officialAchievements.length, 86, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
