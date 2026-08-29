import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvel-rivals.json - // 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2767030 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 49 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("marvel-rivals");

test("getPlannerData('marvel-rivals') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvel-rivals");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Marvel Rivals achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Marvel Rivals achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 officially-described Marvel Rivals achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["\"Ahhh, those tiny claws!\"", "As Squirrel Girl, land 3 KOs with a single use of Unbeatable Squirrel Tsunami."],
        ["Aquatic Assault", "As Namor, summon Monstro Spawn to land 10 KOs in a single game."],
        ["Arm Race", "As Winter Soldier, land 3 KOs with a single use of Kraken Impact."],
        ["Assemble!", "Team up with a friend for a match."],
        ["Bouncing Ideas", "As Mister Fantastic, bounce 5 times with a single use of Brainiac Bounce."],
        ["Deadly Bites", "As Black Widow, land 3 KOs with critical hits in a single match."],
        ["Demon's Roar", "As Magik, land 3 KOs within a single transformation into Darkchild."],
        ["Divine Justice", "As Thor, strike down 4 enemies with a single use of God of Thunder."],
        ["Family Ties", "As Adam Warlock, forge a soul bond with 3 allies from the Guardians of the Galaxy."],
        ["Flawless Design", "As Iron Man, hit 4 enemies with a single use of Invincible Pulse Cannon."],
        ["Go Get 'Em, Guardians! ", "As Rocket Raccoon, revive the Guardians of the Galaxy members 5 times."],
        ["God of Treachery", "As Loki, land one KO by stabbing from behind."],
        ["Grip of Hunger", "As Venom, snare 4 enemies with a single use of Cellular Corrosion."],
        ["Hand of Heven", "As Angela, snare 4 enemies with a single use of Heven's Retribution."],
        ["Homo Superior", "As Magneto, assist Mutant allies 10 times."],
        ["Hot & Trending", "As Human Torch, land 3 KOs with a single use of Supernova."],
        ["Inevitable！", "Win 100 matches."],
        ["Justice for All! ", "As Captain America, land 3 KOs with a single use of Freedom Charge."],
        ["King of the Dead", "As Black Panther, land a 3-player KO streak in the Intergalactic Empire of Wakanda: Hall of Djalia."],
        ["Lady of the House", "As Invisible Woman, assist the Fantastic Four members 10 times."],
        ["Master of Modes", "Complete 1 Arcade match."],
        ["Might of Fuxi", "As Iron Fist, land 3 KOs with a single use of Living Chi."],
        ["Multiverse Tour", "As Luna Snow, complete a match on 5 maps with different themes."],
        ["No More Mutants", "As Scarlet Witch, take down Mutant enemies 10 times."],
        ["No More Strings", "As Ultron, take down Avengers members 10 times."],
        ["Old Haunts", "As Blade, land a 3-player KO streak in Empire of Eternal Night: Central Park."],
        ["Onslaught!", "Land a 3-player KO streak."],
        ["Perilous Portal", "As Doctor Strange, land 1 terrain KO with the portal."],
        ["Punishment of the Moon", "As Moon Knight, hit 4 enemies with a single use of Hand of Khonshu."],
        ["Rage Uncaged", "As Wolverine, land 3 KOs with a single use of Last Stand."],
        ["Rising Star", "Reach level 20."],
        ["Schism from Within", "As Emma Frost, force mutants to move 10 times with Psionic Seduction."],
        ["Smart Is New Smash", "As Bruce Banner, land 1 KO within 3 seconds of calming down from the Hulk to Banner."],
        ["Smoke Screen", "As the Punisher, land 3 KOs amidst the smoke of Scourge Grenade in a single game."],
        ["Snack Attack!", "As Jeff the Land Shark, swallow 4 enemies with a single use of It's Jeff!"],
        ["Spider-Sense Tingling!", "As Spider-Man, detect an enemy with Spider-Sense and land a winning counterattack."],
        ["Symphony of Light and Dark", "As Cloak & Dagger, assist allies in achieving a team wipe."],
        ["Terror of the Ten Realms", "As Hela, land a 3-player KO streak in Yggsgard: Yggdrasill Path."],
        ["Thumbs Up", "Upvote 1 player."],
        ["To Me, My X-Men!", "As Storm, assist X-Men members 10 times."],
        ["Vengeance for the Milano!", "As Star-Lord, land 10 KOs with assists from the Guardians of the Galaxy."],
        ["Vicious Vines", "As Groot, imprison 4 enemies with a single use of Strangling Prison."],
        ["Victory in Bloom", "As Mantis, assist allies in achieving a team wipe."],
        ["Watch Your Step!", "As Peni Parker, blast 3 enemies with a single use of Arachno-Mine."],
        ["Way of the Butterfly", "As Psylocke, contest the mission area for 60 seconds in a single match."],
        ["West Coast, Best Coast", "As Hawkeye, partner with the Avengers to land 10 KOs."],
        ["What Time Is It?", "As the Thing, knock up 4 enemies with a single use of Clobberin' Time."],
        ["Wish Upon a Phoenix", "As Phoenix, strike 4 enemies with a single Endsong Inferno landing."],
        ["You Do You", "Use the customizable wheel once."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
