import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/triangle-strategy.json - 108 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1850510 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("triangle-strategy");

test("getPlannerData('triangle-strategy') returns real planner data with 108 curated achievements", () => {

    assert.ok(game, "expected real planner data for triangle-strategy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 108);

});

test("every TRIANGLE STRATEGY achievement has a unique id from 1 to 108 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 108 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 108);
    assert.strictEqual(new Set(apinames).size, 108);

});

test("every TRIANGLE STRATEGY achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 108 TRIANGLE STRATEGY achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Heavy Purse", "Accumulate 1,000,000 coins."],
        ["A Lord Worth Serving", "View all of Julio's character stories."],
        ["A Merchant's Joy", "View all of Lionel's character stories."],
        ["A Princess and Her People", "View all of Cordelia's character stories."],
        ["A Promise Fulfilled", "View all of Rudolph's character stories."],
        ["A Righteous Kingdom", "View all of Maxwell's character stories."],
        ["A Shield for the People", "View all of Flanagan's character stories."],
        ["A Spot of Sunshine", "View all of Hossabara's character stories."],
        ["A Toast to the Future", "View all of Benedict's character stories."],
        ["A Useful Poisonous Plant", "View all of Milo's character stories."],
        ["Allies of the Poor", "View all of Trish's character stories."],
        ["An Old Soldier's Regrets", "View all of Archibald's character stories."],
        ["As Lord", "Do not sacrifice the town of Wolffort during chapter 7."],
        ["Avid Reader", "Collect all notes."],
        ["Bandit Boss", "View all of Travis's character stories."],
        ["Believer of Liberty", "Reach a sufficient Liberty Conviction value."],
        ["Beneath the Starry Sky", "View all of Frederica's character stories."],
        ["Big Boss", "Reach the pinnacle of Travis's strength."],
        ["Birthright", "Receive the royal signet from Symon."],
        ["Blessed Rain", "View all of Ezana's character stories."],
        ["Bold Battler", "Accumulate 1,000 kudos."],
        ["Bow Master", "Reach the pinnacle of Rudolph's strength."],
        ["Careful!", "Deal damage with a mine cart."],
        ["Champion of a New Era", "Obtain every achievement."],
        ["Craft Master", "Reach the pinnacle of Jens's strength."],
        ["Cure Knight", "Reach the pinnacle of Hossabara's strength."],
        ["Defender of Morality", "Reach a sufficient Morality Conviction value."],
        ["Disciple of the Archmage", "View all of Narve's character stories."],
        ["Divine Bow", "Reach the pinnacle of Archibald's strength."],
        ["Divine Fist", "Reach the pinnacle of Groma's strength."],
        ["Divine Spear", "Reach the pinnacle of Maxwell's strength."],
        ["Dreaming of Mother", "View all of Quahaug's character stories."],
        ["Efficiency Is Key", "Exploit enemy weaknesses 100 times."],
        ["Elocutionist", "Reach the pinnacle of Lionel's strength."],
        ["Enfeebling Force", "Perform 100 support actions to put enemies at a disadvantage."],
        ["Every Corner of Norzelia", "View all of Giovanna's character stories."],
        ["Feline Fanatic", "Speak to all cats."],
        ["Few but Fierce", "Embark with half or less than the maximum units and claim victory."],
        ["Fire Master", "Reach the pinnacle of Frederica's strength."],
        ["First Campaign", "Win a battle for the first time."],
        ["For a Peaceful World", "View all of Avlora's character stories."],
        ["For an Eternity", "View all of Erador's character stories."],
        ["Forces Collide", "Deal collision damage 50 times."],
        ["From Above", "Deal fall damage 50 times."],
        ["From Behind", "Perform 100 back attacks."],
        ["Grand Finale", "Clear the game's Golden Route - the hidden fourth path - reached by a specific set of Chapter 7 and Chapter 17 choices, described here spoiler-free."],
        ["Great General", "Reach the pinnacle of Avlora's strength."],
        ["Groundbreaking Research", "View all of Corentin's character stories."],
        ["Healer", "Heal 100 times."],
        ["Ice Master", "Reach the pinnacle of Corentin's strength."],
        ["Item User", "Use items 100 times."],
        ["King and Friend", "View all of Roland's character stories."],
        ["Land Master", "Reach the pinnacle of Giovanna's strength."],
        ["Master Advisor", "Reach the pinnacle of Julio's strength."],
        ["Master Assassin", "Reach the pinnacle of Anna's strength."],
        ["Master Cavalryman", "Reach the pinnacle of Roland's strength."],
        ["Master Curist", "Reach the pinnacle of Geela's strength."],
        ["Master Dancer", "Reach the pinnacle of Milo's strength."],
        ["Master Flyer", "Reach the pinnacle of Hughette's strength."],
        ["Master Guardian", "Reach the pinnacle of Erador's strength."],
        ["Master Strategist", "Reach the pinnacle of Benedict's strength."],
        ["Medicine Master", "Reach the pinnacle of Medina's strength."],
        ["Negotiator", "Successfully persuade an ally."],
        ["Never-Ending Path", "Assent to Benedict's strategy."],
        ["Numerologist", "Reach the pinnacle of Decimal's strength."],
        ["Of Circuses and Smiles", "View all of Piccoletta's character stories."],
        ["On the Defensive", "Counter 50 times."],
        ["One and All", "Recruit all units."],
        ["One Fell Swoop", "Defeat 5 or more units at one time."],
        ["Playing with Fire", "Set the ground ablaze 50 times."],
        ["Playing with Ice", "Freeze the ground 50 times."],
        ["Playing with Lightning", "Electrocute units 50 times."],
        ["Playing with Water", "Create puddles 50 times."],
        ["Prayer Master", "Reach the pinnacle of Cordelia's strength."],
        ["Reaper of 100 Souls", "Complete the mental mock battle \"The Assassins.\""],
        ["Secret of the Continent", "Find the key in the Rosellan village."],
        ["Seeker of Utility", "Reach a sufficient Utility Conviction value."],
        ["Shrewd Strategist", "Use quietuses 50 times."],
        ["Silent Sea", "Place your faith in Frederica's ideals."],
        ["Smithy Regular", "Learn the Weapon Skill of all units."],
        ["Spell Master", "Reach the pinnacle of Narve's strength."],
        ["Spirit Master", "Reach the pinnacle of Ezana's strength."],
        ["Spoils of War", "Pick up 100 spoils."],
        ["Sundry Shop Regular", "Learn all quietuses and obtain the maximum amount of Quietus Points."],
        ["Supporter", "Perform 100 support actions to give allies an advantage."],
        ["Swordmaster", "Reach the pinnacle of Serenoa's strength."],
        ["Tavern Regular", "Complete all mental mock battles."],
        ["The Automaton's Master", "View all of Decimal's character stories."],
        ["The End of Sin", "Stand with Roland's idea."],
        ["The Enemy of an Enemy", "Reveal Roland's identity to Svarog."],
        ["The Perfect Weapon", "View all of Jens's character stories."],
        ["The Value of a Life", "View all of Medina's character stories."],
        ["Tiebreaker", "Cast the deciding vote when there is a tie."],
        ["Timespeaker", "Reach the pinnacle of Quahaug's strength."],
        ["To the Open Skies", "View all of Hughette's character stories."],
        ["Treasure Hunter", "Reach the pinnacle of Trish's strength."],
        ["Trick Master", "Reach the pinnacle of Piccoletta's strength."],
        ["True Parents", "View all of Anna's character stories."],
        ["Tutor", "View all of Geela's character stories."],
        ["Unanimous", "Successfully persuade everyone to vote the same way."],
        ["Unshakable Convictions", "Reach a sufficient Morality, Utility, and Liberty Conviction value."],
        ["Unwavering Fist", "View all of Groma's character stories."],
        ["Veteran Warrior", "Win 100 battles."],
        ["Weaver of Histories", "Travel all paths."],
        ["Winguard", "Reach the pinnacle of Flanagan's strength."],
        ["Wise Warrior", "Gather all information."],
        ["Working Together", "Perform 100 follow-up attacks."],
        ["Wrongdoing Exposed", "Successfully report Sorsley's misdeeds."],
    ];

    assert.strictEqual(officialAchievements.length, 108, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
