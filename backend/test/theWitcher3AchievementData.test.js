import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-witcher-3.json - 78 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 292030 (fetched through this app's own services/steamApi.js) -
// 52 of 78 ship a real, official Steam description. NOTE the achievement
// "That Is the Evilest Thing\u0085" really does end with a U+0085 in
// Steam's own schema (a stray control character, preserved byte-for-byte
// the same way as Void Bastards' trailing-comma name). The 26 hidden
// achievements are described publicly nowhere; their descriptions here
// are curatorial, cross-checked against the Witcher wiki, Ten Ton
// Hammer, and per-expansion trophy guides. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const theWitcher3 = getPlannerData("the-witcher-3");

test("getPlannerData('the-witcher-3') returns real planner data with 78 curated achievements", () => {

    assert.ok(theWitcher3, "expected real planner data for the-witcher-3");
    assert.ok(Array.isArray(theWitcher3.achievements));
    assert.strictEqual(theWitcher3.achievements.length, 78);

});

test("every The Witcher 3: Wild Hunt achievement has a unique id from 1 to 78 and a unique apiname", () => {

    const ids = theWitcher3.achievements.map(a => a.id);
    const apinames = theWitcher3.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 78 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 78);
    assert.strictEqual(new Set(apinames).size, 78);

});

test("every The Witcher 3: Wild Hunt achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of theWitcher3.achievements) {

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

test("every one of the 52 officially-described The Witcher 3: Wild Hunt achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 26 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Passed the Trial", "Finish the game on any difficulty."],
        ["Ran the Gauntlet", "Finish the game on the \"Blood and Broken Bones!\" or \"Death March!\" difficulty levels."],
        ["Walked the Path", "Finish the game on the \"Death March!\" difficulty level."],
        ["Dendrologist", "Acquire all the Abilities in one tree."],
        ["The Enemy of My Enemy", "Use the Axii Sign to force one opponent to kill another. Do this 20 times."],
        ["Humpty Dumpty", "Kill 10 opponents by knocking them off somewhere high with the Aard Sign."],
        ["Environmentally Unfriendly", "Kill 50 opponents using the environment (e.g. swamp gas, insects or objects)."],
        ["Kaer Morhen Trained", "Perform 10 effective counterattacks in a row without getting hit or parrying."],
        ["Can't Touch This!", "Kill 5 foes in a fight without taking damage (except for Toxicity) and without using the Quen Sign."],
        ["That Is the Evilest Thing", "Ignite the gas produced by a Dragon's Dream bomb using a burning opponent. Do this 10 times."],
        ["Mutant", "Fill all mutagen slots."],
        ["Butcher of Blaviken", "Kill at least 5 opponents in under 10 seconds."],
        ["Brawler", "Defeat Olaf, the Skellige champion of unarmed combat."],
        ["Overkill", "Make an opponent suffer from bleeding, poisoning and burning simultaneously. Do this 10 times."],
        ["Master Marksman", "Kill 50 human and nonhuman opponents by striking them in the head with a crossbow bolt."],
        ["Even Odds", "Kill 2 monsters you have a contract on without using Signs, potions, mutagens, oils or bombs."],
        ["Globetrotter", "Discover 100 fast travel points."],
        ["Pest Control", "Destroy all monster nests in the Velen / Novigrad region, or in Skellige."],
        ["Card Collector", "Acquire all gwent cards available in the base version of the game."],
        ["Gwent Master", "Defeat Tybalt and win the gwent tournament held at the Passiflora."],
        ["Let's Cook!", "Learn 12 potion formulae."],
        ["Bombardier", "Collect the formulae for 6 different bomb types."],
        ["Bookworm", "Read 30 books, journals or other documents."],
        ["Armed and Dangerous", "Find and equip all the elements of one set of witcher gear."],
        ["Power Overwhelming", "Have all possible Place of Power bonuses active at the same time."],
        ["Brawl Master", "Complete all fistfighting quests in Velen, Skellige and Novigrad."],
        ["Fast and Furious", "Win all the horse races in the game."],
        ["Munchkin", "Reach character development level 35."],
        ["Fire in the Hole", "Destroy 10 monster nests using bombs."],
        ["Fist of the South Star", "Defeat an opponent in a fistfight without taking any damage."],
        ["Geralt and Friends", "Win a round of gwent using only neutral cards."],
        ["All In", "Play three hero cards in one round of gwent and win the match."],
        ["Shrieker", "Complete the contract on the shrieker."],
        ["Fearless Vampire Slayer", "Complete the contract on Sarasti."],
        ["Woodland Spirit", "Complete the contract on the Woodland Spirit."],
        ["Fiend or Foe?", "Complete the contract on Morvudd."],
        ["Ashes to Ashes", "Complete the contract on Therazane."],
        ["The Doppler Effect", "Resolve the doppler problem in Novigrad."],
        ["Return to Sender", "Kill 3 opponents with their own arrows."],
        ["Can Quit Anytime I Want", "Be under the influence of seven potions or decoctions at the same time."],
        ["I Wore Ofieri Before It Was Cool", "Collect all available Ofieri armor and horse gear, and at least one Ofieri sword."],
        ["Killed It", "Win a round of gwent with a total strength of at least 187."],
        ["The Witcher's Gone South", "Travel to the Duchy of Toussaint."],
        ["Last Action Hero", "Be decorated with the Order of Vitis Vinifera."],
        ["Kling of the Clink", "Serve time in Toussaint."],
        ["A Knight to Remember", "Obtain a flawless victory in all the competitions during the knights' tourney."],
        ["Embodiment of the Five Virtues", "Be given Aerondight by the Lady of the Lake."],
        ["Playing House", "Use all available options for developing Corvo Bianco."],
        ["Turned Every Stone", "Find all grandmaster diagrams for each witcher school."],
        ["I Have a Gwent Problem", "Collect all the cards in the Skellige deck."],
        ["Dressed to Kill", "Unlock the bonus for equipping all the witcher gear elements from one School."],
        ["Weapon \"W\"", "Develop a mutation."]
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "LILAC",
        "FRIEND_IN_NEED",
        "NECROMANCER",
        "FAMILY_COUNSELOR",
        "SOMETHING_MORE",
        "XENONAUT",
        "THE_KING",
        "THE_PROFESSIONAL",
        "MAKER",
        "ASSASSIN",
        "FRIENDS_WITH_BENEFITS",
        "FULL_CREW",
        "TRIPLE_THREAT",
        "WHAT_WAS_THAT",
        "EP1_1",
        "EP1_2",
        "EP1_3",
        "EP1_4",
        "EP1_5",
        "EP1_6",
        "EP1_9",
        "EP1_11",
        "EP1_12",
        "EP2_9",
        "EP2_12",
        "EP2_13"
    ]);

    assert.strictEqual(hiddenApinames.size, 26, "sanity check - The Witcher 3: Wild Hunt has 26 hidden achievements");

    const dataPairs = theWitcher3.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 26 hidden The Witcher 3 achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["LILAC", "Lilac and Gooseberries"],
        ["FRIEND_IN_NEED", "A Friend in Need"],
        ["NECROMANCER", "Necromancer"],
        ["FAMILY_COUNSELOR", "Family Counselor"],
        ["SOMETHING_MORE", "Something More"],
        ["XENONAUT", "Xenonaut"],
        ["THE_KING", "The King is Dead"],
        ["THE_PROFESSIONAL", "Geralt: The Professional"],
        ["MAKER", "Kingmaker"],
        ["ASSASSIN", "Assassin of Kings"],
        ["FRIENDS_WITH_BENEFITS", "Friends With Benefits"],
        ["FULL_CREW", "Full Crew"],
        ["TRIPLE_THREAT", "Triple Threat"],
        ["WHAT_WAS_THAT", "What Was That?"],
        ["EP1_1", "I'm Not Kissing That"],
        ["EP1_2", "Let the Good Times Roll!"],
        ["EP1_3", "Shopaholic"],
        ["EP1_4", "Curator of Nightmares"],
        ["EP1_5", "Pacta Sunt Servanda"],
        ["EP1_6", "When It's Many Against One…"],
        ["EP1_9", "Wild Rose Dethorned"],
        ["EP1_11", "Moo-rderer"],
        ["EP1_12", "Rad Steez, Bro!"],
        ["EP2_9", "The Grapes of Wrath Stomped"],
        ["EP2_12", "Hasta la Vista™"],
        ["EP2_13", "David and Golyat"]
    ];

    assert.strictEqual(names.length, 26, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = theWitcher3.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
