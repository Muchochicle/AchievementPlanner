import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/blasphemous-2.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2114740 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("blasphemous-2");

test("getPlannerData('blasphemous-2') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for blasphemous-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Blasphemous 2 achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Blasphemous 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Blasphemous 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Heart of Gold", "Defeat Devotion Incarnate (the final boss)."],
        ["A Leap of Faith", "Lift the Curse of the Unforgiven."],
        ["A Sharp Rendezvous", "Reach the room of the Sentinel of the Emery in under 30 minutes."],
        ["A Thousand Years Later", "Defeat the Faceless One, Chisel of Oblivion (the first boss)."],
        ["Acquired Taste", "Unlock all Bile Flasks."],
        ["Acta, Non Verba", "Find all of the Prayers in the base game."],
        ["At the Mercy of the Grievous Miracle", "(DLC) Restore the Mea Culpa sword."],
        ["Atonement of Sins", "(DLC) Defeat Crescencia, Duchess of the Sleeping Face."],
        ["Blessed Incense", "Unlock the true power of Veredicto."],
        ["Blood and Dust", "Defeat Radames (one of the three guardians)."],
        ["Blood and Gold", "Defeat Orospina of the Confraternity of Embroiderers."],
        ["Blood and Iron", "Defeat Lesmes and Infanta."],
        ["Canvas of Light and Time", "Unlock Ending A."],
        ["Chorus of the Servants", "(DLC) Collect all four servant fragments and consecrate them at the chalice in the Usurped Halls."],
        ["Consummate Collector", "Collect all items on an Ascended playthrough."],
        ["Cruel Compassion", "(DLC) Find the prisoner after releasing him."],
        ["Dedicated Explorer", "Reveal the entire map, including new areas."],
        ["Edge of Orison", "Unlock the true power of Ruego Al Alba."],
        ["Embrujo of the Flames", "(DLC) Unlock the full power of Embrujo using all 19 Marks."],
        ["Empty Handed", "Purchase all available items in the shop in the City of the Blessed Name."],
        ["Fermosa Fembra", "Defeat Svsona, Fermosa Fembra."],
        ["Flawless Penance", "After the first fight, defeat any boss without receiving damage."],
        ["Forged in Fire", "Defeat Sinodo, Hymn of a Thousand Voices."],
        ["Full Devotion", "Find all of the Rosary Beads in the base game."],
        ["Happy New Year!", "Attack any bell 12 times using Veredicto."],
        ["Hide and Seek", "Find all the hidden Cobijadas."],
        ["House of Grief and Hatred", "Complete all the battle challenges."],
        ["In Repose", "(DLC) Defeat Sor Cautiva del Silencio."],
        ["Legacy of the Twisted One", "(DLC) Unlock the true power of Mea Culpa by obtaining all 9 Weapon Memories."],
        ["Martyrdom", "Complete 100% of the game."],
        ["Mind Your Head", "(DLC) Raise the Guillotine above the prisoner in the Icebound Mausoleum."],
        ["No Cherub Left Behind", "Free Próximo’s brothers."],
        ["Nobody Expects the Spanish Inquisition!", "Kill every type of enemy in the base game."],
        ["Omnis Facies Poenitentiae", "(DLC) Get all 8 skins for The Penitent One."],
        ["Post-Mortem", "Unlock Ending C."],
        ["Prisoner of the Holy Return", "(DLC) Defeat Brother Asterion."],
        ["Second Pilgrimage", "Reveal the entire base game's map."],
        ["Second Psalm", "Unlock Ending B."],
        ["Soledad", "Unlock all of the Rosary Bead slots."],
        ["Still Among Us", "Find all of the hidden symbols."],
        ["Storm of Death", "Unlock the true power of Sarmiento & Centella."],
        ["The Anointed One", "Kill 300 enemies using Veredicto."],
        ["The Finest Craftmanship", "Unlock all slots in the Altarpiece of Favours."],
        ["The Last Ascension", "Defeat Benedicta of the Confraternity of Endless Orison."],
        ["The Merciless One", "Execute 50 different enemies."],
        ["The Penitent Two", "Unlock all the Achievements."],
        ["The Punished One", "Kill 300 enemies using Ruego Al Alba."],
        ["The Sea dies on the Shore", "Defeat Odon of the Confraternity of Salt."],
        ["The Sharpest Tool in the Shed", "Defeat Afilaor, Sentinel of the Emery."],
        ["The Veteran One", "Kill 300 enemies using Sarmiento & Centella."],
        ["The Wait is Over", "Defeat Eviterno, Father of the Penitents."],
        ["The Work of a Master", "Bring every Remembrance to an artisan and turn them into Figures."],
        ["This is Blasphemy", "Deal more than 250 damage with a single strike."],
        ["Twisted is the Path of the Miracle", "Hear the echoes of the past."],
        ["Two Old Ones Eating Soup", "Complete the Castula and Trifon quest (obtain both Remembrances and equip the matching Altarpieces together)."],
        ["Ultima Ratio", "Unlock all four movement abilities: Wall Climbing, Double Jump, Air Dash and the Angel Rings (Scion's Protection)."],
        ["Unbreakable Bond", "(DLC) Reach Level 4 on all Servants."],
        ["Warrior of the Silent Sorrow", "Unlock all Weapon Memories."],
        ["Weight of Penance", "Find all of the Figures in the base game."],
        ["Welcome Back!", "Fall into spikes and survive."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
