import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rivals-of-aether-ii.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2217000 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rivals-of-aether-ii");

test("getPlannerData('rivals-of-aether-ii') returns real planner data with 75 curated achievements", () => {

    assert.ok(game, "expected real planner data for rivals-of-aether-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 75);

});

test("every Rivals of Aether II achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Rivals of Aether II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 75 Rivals of Aether II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" Vainglory ", "Win a match using a skin or palette"],
        ["A Thousand words", "Equip a Player Icon"],
        ["Achievemint", "Play a match with a mint palette"],
        ["Alley Goop", "KO an opponent while they are grabbed by the Mire"],
        ["Bootyful", "As Slade, have all four treasures equipped at the same time"],
        ["Double Terminated ", "As Olympia, crystalize the opponent while they're already crystalized"],
        ["Earth's Bastion", "Reach character level 20 as Kragg"],
        ["Flash In The Pan", "As Zetterburn hit an opponent with 3 Neutral Specials in 1 second"],
        ["Friendly Symbiosis", "Play a 2v2 online match with a friend"],
        ["Future Foreseer", "As Clairen, hit 2 or more players at once with fully charged Neutral Special"],
        ["Gone Fishing", "KO an opponent with Slade's Ledge Special"],
        ["Heavenly Polarity Piledriver", "Pile Drive an opponent with Up Special after falling 16 meters"],
        ["Hero of Julesvale", "Reach character level 20 as Fleet"],
        ["Ice is Right!", "As Etalus break an opponent's frozen shield."],
        ["Julesvale Juggle", "As Fleet hit an opponent with 3 Up Strongs in a row."],
        ["King's Court", "Hit a single Molten Boulder 5 times"],
        ["Long Con", "As Forsburn keep a clone alive for 10 seconds"],
        ["Maypals!", "As Maypul have Lily, Poppy and Terry out at the same time"],
        ["Pacifist Punching Bag", "As Ranno deal over 50 damage to a bubbled opponent"],
        ["Path Of Conquest", "Complete arcade on hard difficulty as Zetterburn"],
        ["Path of Deliverance", "Complete arcade on hard difficulty as Gouie"],
        ["Path Of Deputation", "Complete arcade on hard difficulty as Wrastor"],
        ["Path of Ferocity", "Complete arcade on hard difficulty as Galvan"],
        ["Path of Grandiosity", "Complete arcade on hard difficulty as La Reina"],
        ["Path of Inception", "Complete arcade on hard difficulty as Absa"],
        ["Path Of Peace", "Complete arcade on hard difficulty as Ranno"],
        ["Path of Plunder", "Complete arcade on hard difficulty as Slade"],
        ["Path of Refinement", "Complete arcade on hard difficulty as Olympia"],
        ["Path Of Restoration", "Complete arcade on hard difficulty as Orcane"],
        ["Path Of Revelation", "Complete arcade on hard difficulty as Fleet"],
        ["Path of Solitude", "Complete arcade on hard difficulty as Etalus"],
        ["Path Of Tenacity", "Complete arcade on hard difficulty as Kragg"],
        ["Path Of Tyranny", "Complete arcade on hard difficulty as Loxodont"],
        ["Path Of Vengence", "Complete arcade on hard difficulty as Clairen"],
        ["Path Of Vigilance", "Complete arcade on hard difficulty as Maypul"],
        ["Path Of Vindication", "Complete arcade on hard difficulty as Forsburn"],
        ["Power Down", "Defeat a cpu opponent in any mode"],
        ["Quick To Listen", "Emote to your opponent before a match "],
        ["Rock The Block", "As Kragg, hit an opponent with a rock 3 times in a row"],
        ["Sedimentary Stomp", "KO an opponent with Galvan's Aerial Down Special"],
        ["Slime Time", "Hit an opponent with 5 aerials before landing or grabbing the ledge"],
        ["Still Skeptical", "View hitboxes in training mode"],
        ["Stuck and Struck", "KO an opponent with a cloud after sticking it to them with Special Pummel."],
        ["The Amethyst Fist", "Reach character level 20 as Olympia"],
        ["The Boulder Barrage", "Get a KO with Kragg's rock shards"],
        ["The Bubble Butt", "Get a KO with Orcane's Forward Aerial"],
        ["The Crowd Magnet", "Reach character level 20 as La Reina"],
        ["The Daring Orca Hop", "Grab ledge after combining Orcane's Up Special with a jump deep below the stage."],
        ["The Deadly Deception", "Get a KO with Forsburn's Clone"],
        ["The Drills Are Alive", "Launch an opponent into 3 drills consecutively "],
        ["The Elegant Electrocution", "Get a KO with Absa's fully-charged Down Special."],
        ["The Exiled Flame", "Reach character level 20 as Forsburn"],
        ["The Ferrous Fossil", "Reach character level 20 as Galvan"],
        ["The Fire's Roar", "Reach character level 20 as Zetterburn"],
        ["The Flame's Salvation", "Reach character level 20 as Clairen"],
        ["The Furnishing Flux", "KO an opponent with La Reina's Neutral Special"],
        ["The Glacier's Might", "Reach character level 20 as Etalus"],
        ["The Icy Plummet", "Get a KO with Etalus' Up Special."],
        ["The Igneous Axe", "Get a Spike KO with Loxodont's Up Special"],
        ["The Lost Mireling", "Reach character level 20 as Gouie"],
        ["The Molten Emperor", "Reach character level 20 as Loxodont"],
        ["The Poisonous Pacifist", "Reach character level 20 as Ranno"],
        ["The Poisonous Storm", "Get a KO with Ranno's Up Special"],
        ["The Puddle Jumper", "Reach character level 20 as Orcane"],
        ["The Reckless Flame", "Get a KO with Zetterburn's Aerial Down Special "],
        ["The Rising Arrow", "Get a KO off the top with Fleet's Up Special"],
        ["The Shimmering Somersault", "Get a spike KO with Olympia's Up air."],
        ["The Storm Architect", "Reach character level 20 as Absa"],
        ["The Swagger of the Sea", "Reach character level 20 as Slade"],
        ["The Sylvan Watcher", "Reach character level 20 as Maypul"],
        ["The Terrible Tempest", "Get a KO with Wrastor's Neutral Special off the top."],
        ["The Towering Tornado", "As Wrastor, land a special pummel while standing on a tornado platform."],
        ["The Unlimited Sight", "Get a KO with Clairen's Down Special"],
        ["The Vicious Vine", "Get a KO with Maypul's tether into an aerial"],
        ["The Wind's Fury", "Reach character level 20 as Wrastor"],
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
