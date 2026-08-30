import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-ix.json - 85 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 377840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-ix");

test("getPlannerData('final-fantasy-ix') returns real planner data with 85 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-ix");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 85);

});

test("every FINAL FANTASY IX achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every FINAL FANTASY IX achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 85 FINAL FANTASY IX achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Clean Bill of Health", "Have a single character affected by all status ailments. (both beneficial and detrimental)."],
        ["A Healing Touch", "Use White Magic spells 200 times."],
        ["A Pillar of Support", "Acquire all available support abilities."],
        ["A Round of Applause", "Have the nobles demand an encore."],
        ["A-Hunting We Will Go", "Win with Vivi during the Festival of the Hunt."],
        ["All Washed Up", "Defeat Kraken, the Guardian of Water."],
        ["All's Well That Ends Well", "Complete FINAL FANTASY IX."],
        ["Another Man's Treasure", "Receive certification as a Rank S Treasure Hunter."],
        ["Auctioneer", "Win 10 items at the Treno Auction House."],
        ["Back Online", "Repair the machine at Mognet Central."],
        ["Backstabber", "Receive 30 back attacks."],
        ["Beach Bum", "Visit every beach in Gaia."],
        ["Beating the Ragtime Blues", "Correctly answer all the questions in Ragtime Mouse's pop quiz."],
        ["Bring on the Thunder", "Summon the eidolon Ramuh."],
        ["Bringing Down the House", "Summon the eidolon Atomos."],
        ["Close But No Cigar", "Obtain the Tower."],
        ["Coming Together I", "Synthesize 10 items."],
        ["Coming Together II", "Synthesize 30 items."],
        ["Cracking the Code", "Uncover the secret of the Eidolon Wall."],
        ["Diggin' It", "Locate all hidden treasures on the world map."],
        ["Dragon Lady", "Defeat Behemoth in the Treno weapon shop using Dagger."],
        ["Driving the Hard Bargain", "Purchase all items available from Stiltzkin."],
        ["Earning the Queen's Favor", "Receive 10 rewards from Queen Stella."],
        ["End of the Road", "Attain level 99 with at least one character."],
        ["Femme Fatales?", "Form a party with Quina Quen and three female characters."],
        ["Firin' Mah Lazer", "Summon the eidolon Ark."],
        ["Follow Your Nose", "Raise your chocobo's beak level to 99."],
        ["Found in the Shuffle", "Beat the Nero Brothers' shuffling game nine times in a row."],
        ["Frog Wrangler", "Successfully catch 99 frogs."],
        ["Getting Emotional", "Enter Trance for the first time."],
        ["Going for the Gold", "Successfully catch a golden frog."],
        ["Gone with the Winds", "Defeat Tiamat, the Guardian of Wind."],
        ["Hail to the King", "Jump rope 1000 times without tripping and obtain King of Jump Rope."],
        ["Heat of the Moment", "Summon the eidolon Ifrit."],
        ["Here to Help", "Summon the eidolon Carbuncle."],
        ["Hitting Rock Bottom", "Defeat Lich, the Guardian of Earth."],
        ["I'm So Blue", "Use Blue Magic spells 100 times."],
        ["It's All in the Cards I", "Win a Tetra Master match."],
        ["It's All in the Cards II", "Win 10 Tetra Master matches.(Certain NPCs can be re-challenged to increase your win count after progressing through the game.)"],
        ["It's All in the Cards III", "Win 100 Tetra Master matches. (Certain NPCs can be re-challenged to increase your win count after progressing through the game.)"],
        ["Kain's Legacy", "Obtain Kain's Lance."],
        ["King of Dragons", "Summon the eidolon Bahamut."],
        ["Let the Bodies Hit the Floor I", "Defeat 100 enemies."],
        ["Let the Bodies Hit the Floor II", "Defeat 1000 enemies."],
        ["Let the Bodies Hit the Floor III", "Defeat 10000 enemies."],
        ["Mister Nice Guy", "Gain the favor of all friendly enemies."],
        ["Movie Critic", "View 79 Active Time Events."],
        ["My Little Airship", "Obtain a miniature copy of the Prima Vista."],
        ["One Nag Too Many", "Cause Moguo to have a tantrum."],
        ["Out of Harm's Way", "Guide all the residents of Cleyra to safety."],
        ["Over the Moon", "Obtain 4 moonstones."],
        ["Overly Emotional", "Enter trance 50 times."],
        ["Path of the Samurai", "Obtain the complete set of Genji armor."],
        ["Peek-A-Boo", "Free Kuppo from a wall in Fossil Roo."],
        ["Putting Out the Fire", "Defeat Maliris, the Guardian of Fire."],
        ["Rise from the Ashes", "Summon the eidolon Phoenix."],
        ["Skip to My Lou", "Jump rope 100 times without tripping."],
        ["Sticky Fingers", "Use the Steal command 50 times."],
        ["Still I Rise", "Activate the Rebirth Flame ability when all party members are incapacitated."],
        ["Surf's Up", "Summon the eidolon Leviathan."],
        ["Sword of Kings", "Obtain the sacred blade Excalibur."],
        ["Take to the Skies", "Obtain an airship."],
        ["Taking the Black", "Play the blackjack minigame."],
        ["That Old Black Magic", "Use Black Magic spells 100 times."],
        ["The B-Team", "Form a party with four male characters."],
        ["The Best Offense", "Use the Defend command 50 times."],
        ["The Dim Mak", "Summon the eidolon Odin."],
        ["The One Ring", "Obtain Madain's Ring via mining."],
        ["The Ultimate Claws", "Obtain the Rune Claws."],
        ["The Ultimate Dual Blade", "Obtain the Ultima Weapon."],
        ["The Ultimate Flute", "Obtain the Angel Flute."],
        ["The Ultimate Fork", "Obtain the Gastro Fork."],
        ["The Ultimate Mace", "Obtain the Mace of Zeus."],
        ["The Ultimate Racket", "Obtain the Tiger Racket."],
        ["The Ultimate Rod", "Obtain the Whale Whisker."],
        ["The Ultimate Sword", "Obtain Excalibur II."],
        ["To Ozma and Back", "Defeat Ozma."],
        ["Track Star", "Obtain Athlete Queen."],
        ["Well Lubricated", "Obtain a bottle of Superslick."],
        ["What's Your Sign?", "Obtain the Hammer."],
        ["Wolf in Mog's Clothing", "Summon the eidolon Madeen."],
        ["Wolf Insanity", "Summon the eidolon Fenrir."],
        ["You Called?", "Summon Eidolons 50 times."],
        ["You're Cold as Ice", "Summon the eidolon Shiva."],
        ["Your Lucky Day", "Receive a Very Good Omen from a color fortune."],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
