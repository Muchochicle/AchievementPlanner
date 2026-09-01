import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/blasphemous.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 774361 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("blasphemous");

test("getPlannerData('blasphemous') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for blasphemous");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Blasphemous achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Blasphemous achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Blasphemous achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Long Path Ahead", "Beat the Warden of the Silent Sorrow (the first boss)."],
        ["Ashes to Ashes", "Beat Quirce of the Eternal Pyre."],
        ["Baptism of Faith", "Achieve maximum fervor."],
        ["Bestiary", "Defeat the 51 original types of enemies."],
        ["Blind Innocence", "Beat Exposito, Scion of Abjuration."],
        ["Blood and Tears", "Unlock all the abilities on the Mea Culpa altars."],
        ["Bronze Medal", "Pass through the bronze door on the Bridge of Calvary in less than 3 hours."],
        ["Crossing Souls", "Provoke the meeting between Redento and Cleofás."],
        ["Cvstodia's Pilgrim", "Discover the main areas of Cvstodia."],
        ["Danse Macabre", "Beat the Tres Angustias."],
        ["Detestatio Sacrorum", "Beat all of the arena challenges."],
        ["Duel of Faith", "Beat Crisanta of the Anointed Blade."],
        ["Dying Breath", "Witness the dying moments of Viridiana."],
        ["Engracia", "Achieve the maximum number of rosary bead slots."],
        ["Flea Market", "Buy all of the items from the Candelaria shops."],
        ["Heartbreaker", "Get the 9 original sword hearts."],
        ["In the name of the High Wills", "Bring all of the offerings to the Blessed Lord of Salty Shores."],
        ["Inquisition", "Execute 5 different enemies."],
        ["Last Words", "Talk with all of the corpses."],
        ["Look Her In The Eye", "Beat Our Lady of the Charred Visage."],
        ["Mea Culpa", "Achieve the maximum level of the sword Mea Culpa."],
        ["Mediterranean Diet", "Save all of the Kissers of Wounds."],
        ["Mysteria Lucis", "Get the 30 original rosary beads."],
        ["No Mercy", "Beat Ten Piedad."],
        ["Power Unleashed", "Use a Righteous Riposte 5 times."],
        ["Rebirth", "Help Cleofas in his path of redemption."],
        ["Requiem Aeternam", "Defeat the original bosses without consuming any bile flasks."],
        ["Six Stinging Pains", "Achieve maximum health."],
        ["Skin and Bones", "Get the 7 original relics."],
        ["Summa Blasphemia", "Beat His Holiness Escribar (the final boss)."],
        ["The Bejeweled Saint", "Beat Melquiades, The Exhumed Archbishop."],
        ["The Brother", "Beat Esdras, of the Anointed Legion."],
        ["The Bull and the Moon", "Release all of the cherubs."],
        ["The Desire of the Corrupted", "Visit the tomb of The Lady of the Tailed Gown."],
        ["The Fountain of Life", "Achieve maximum flask capacity."],
        ["The Number of the Beasts", "Kill 666 enemies."],
        ["The Path of the Believer", "Unlock ending A."],
        ["The Path of the Unworthy", "Unlock ending B."],
        ["The Sister", "Beat Perpetua."],
        ["True Shrine", "Bring all of the offerings to Lvdovico."],
        ["Ultreia Et Suseia", "Help the Pilgrim reach his final destination."],
        ["Unwavering Devotion", "Get the 13 original prayers."],
        ["Warden of the Ossuary", "Get the 44 original collectibles."],
        ["Warm and Soft", "Hatch the Egg of Deformity."],
        ["Witness of The Miracle", "Beat 100% of the game."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
