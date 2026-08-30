import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/titan-quest.json - 115 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 475150 (fetched through this app's own services/steamApi.js). 7 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("titan-quest");

test("getPlannerData('titan-quest') returns real planner data with 115 curated achievements", () => {

    assert.ok(game, "expected real planner data for titan-quest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 115);

});

test("every Titan Quest Anniversary Edition achievement has a unique id from 1 to 115 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 115 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 115);
    assert.strictEqual(new Set(apinames).size, 115);

});

test("every Titan Quest Anniversary Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 115 Titan Quest Anniversary Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A matter of principle", "Find and defeat Talos"],
        ["Achilles' Equal", "Beat Legendary difficulty as a Warfare character"],
        ["Agreeable pursuit", "Find and defeat the Boar Snatcher"],
        ["Altoholic", "Have ten different class characters of at least level ten"],
        ["Amusing Mudcrab", "Defeat Dimonoider"],
        ["Archeologist", "Assemble 50 relics"],
        ["Artisan", "Craft a Lesser Artefact"],
        ["Avatar of Thanatos", "Kill half a million monsters"],
        ["Bao", "Buy a monster item from Bao"],
        ["BAO", "Buy an infrequent monster item from Bao"],
        ["Be a man!", "Defend the Great Wall"],
        ["Beast of Beliar", "Find and defeat the Dragon Lich"],
        ["Beginner's Luck", "Defeat Tartarus on Normal difficulty"],
        ["Best served cold", "Defeat Barmanu"],
        ["Bloody Roots", "Have 10 enemies immobilized at the same time"],
        ["Breaker of Chains", "Free 500 imprisoned shades by opening the soul cages found throughout Act IV, beginning in the Stygian Marsh."],
        ["Brewmaster", "Beat Legendary difficulty as a Neidan character"],
        ["Call of Nature", "Travel with three Wolves and a Nymph"],
        ["Can't always use more", "Find Medea"],
        ["Circe", "Mind control six enemies at the same time"],
        ["Clawsome!", "Defeat The Ancient One"],
        ["Connoisseur", "Drink every new potion"],
        ["Daemon ex machina", "Summon a level 20 Outsider"],
        ["Danger Noodle", "Defeat Feiyi"],
        ["Dark corners of the map", "Defeat Shadowmaw on Normal before leaving Greece"],
        ["Dear diary...", "Defeat King Arganthonios"],
        ["Delayed until further notice", "Finish the main storyline"],
        ["Delirium", "Have 10 enemies running around confused"],
        ["Detective", "Defeat the Vengeful Ghost in the Salt Mines (Ragnarok, Act V), take the Ornate Seal Ring it drops, and return it to Elise in Heuneburg."],
        ["Discount mercenary", "Defeat the Chimera"],
        ["Don't Pay the Ferryman", "Cross the Styx"],
        ["Double or Nothing", "Defeat Tartarus on Epic difficulty"],
        ["Double Standard", "Have two Battle Standards up at the same time"],
        ["Down to the 'core", "Find and defeat the Manticore"],
        ["Echoes in Eternity", "Walk the fields of Elysion"],
        ["Emperor's New Clothes", "Equip a complete Eternal Embers set"],
        ["Epidemic", "Have 14 enemies afflicted by Plague at once"],
        ["Fifty Shades", "Free 50 imprisoned shades by opening soul cages in Act IV, beginning in the Stygian Marsh."],
        ["Fight in the shade", "Defeat Aktaios"],
        ["Force of Nature", "Beat Legendary difficulty as a Nature character."],
        ["Found a bug", "Cleanse the library"],
        ["Give me your Lupines", "Solve the 'Giesel' side quest the alternative way - craft a Lupine Necklace from the recipe rewarded by 'The Craftsman's Passion' and hand it over instead of the sheep."],
        ["Good point", "Puncture four enemies with one arrow"],
        ["Greece Lightning", "Finish all 3 difficulties in less than 20 hours play time"],
        ["Hardcore Legend", "Finish Legendary difficulty with zero deaths"],
        ["Hardcore Master", "Finish Epic difficulty with zero deaths"],
        ["Hardcore Player", "Finish Normal difficulty with zero deaths"],
        ["Hearts of Stone", "Defeat the Gorgons"],
        ["Hercules", "Kill 100.000 monsters with a single character"],
        ["High Roller", "Defeat Tartarus on Legendary difficulty"],
        ["I am the Storm", "Beat Legendary difficulty as a Storm character."],
        ["I AM TITAN SLAYER", "Defeat Lyktos"],
        ["I don't like sand", "Defeat the Exhumed Medjai"],
        ["I have minions for that", "Finish Normal with a personal kill count of less than 100"],
        ["I O U", "Defeat the Graeae"],
        ["Imperial summit", "Meet the Yellow Emperor"],
        ["It's dangerous to go alone.", "Form a party with other heroes"],
        ["K.O.", "Stun an enemy for 10 seconds in one hit"],
        ["Living the Dream", "Beat Legendary difficulty as a Dream character."],
        ["Magebreaker", "Burn an enemy's mana for 2500 damage"],
        ["Marduked", "Defeat Tiamat"],
        ["Master Artificer", "Craft a Greater Artefact"],
        ["Master of Shadows", "Beat Legendary difficulty as a Rogue character."],
        ["Masterful start", "Reach level 2 without taking any damage"],
        ["Medic!", "Heal other players for a total of 200 000 health."],
        ["Mission Accomplished", "Find new friends"],
        ["Morpheus", "Have 12 enemies sleeping simultaneously"],
        ["Nesting Doll", "Defeat the Terracotta General"],
        ["New lands", "Journey north of the Alps"],
        ["No burned village?", "Save Helos"],
        ["No more sequels", "Defeat Nehebkau"],
        ["No Stone Unturned", "Complete all Eternal Embers quests"],
        ["Nobody did this", "Defeat Polyphemus"],
        ["Odysseus' 11", "Loot Hades' treasure vault"],
        ["Old Friend", "Talk with the Yellow Emperor"],
        ["One Man Phalanx", "Beat Legendary difficulty as a Defense character"],
        ["Out there on the dunes", "Find and defeat the Sandwing queen"],
        ["Peach of Immortality", "Finish Eternal Embers with zero deaths"],
        ["Pharaoh's curse", "Take poison damage from Act II's cursed sarcophagi by opening them and lingering in the toxic cloud they release."],
        ["Precision Dvergan Engineering", "Improve a legendary item"],
        ["Recycling", "Retrieve a relic from an item"],
        ["Revenge", "Defeat all the developers"],
        ["Rheingold", "Find Andvari's lost treasure"],
        ["Rock beats scissors", "Defeat ten enemies over the course of one Stoneform spell"],
        ["Sick lewt", "Obtain and equip the Adamantine Sickle of Kronos, a rare drop from the third Telkine at the end of Act III."],
        ["Sisyphus go home!", "Have a character reach level 80"],
        ["Someone your size", "Beat Polyphemus while in Colossus Form"],
        ["Son of Hephaestus", "Craft a Divine Artefact"],
        ["Specialist", "Finish Normal difficulty without selecting a second mastery"],
        ["Strength of Atlas", "Hit an enemy for 100.000 damage"],
        ["Surprise!", "Phantom Strike six enemies at once"],
        ["Survivalist", "Complete 50 charms"],
        ["Target immobilized", "Keep an enemy ensnared for 30 seconds"],
        ["Taste the beast!", "Defeat the Minotaur Lord"],
        ["The Dragon King", "Defeat Sihai Longwang"],
        ["The first threshold", "Pass the Spartans' test"],
        ["The Forgotten King", "Defeat Akhenaten"],
        ["The Fourth Peril", "Defeat Qiong Qi"],
        ["The Line of Epic Heroes", "Defeat Mr. Fae"],
        ["The one she forgot", "Acquire the mistletoe"],
        ["The power of Osiris", "Beat Legendary difficulty as a Spirit character."],
        ["The power of Set", "Wear five matching set items"],
        ["The Setting Sun", "Defeat the Suns"],
        ["Titanic Game Hunter", "Beat Legendary difficulty as a Hunting character."],
        ["Together we stand", "Cast Rally on yourself and 3 other players"],
        ["Tough crowd", "Defeat the Honor Guard "],
        ["Trail of Ashes", "Beat Legendary difficulty as an Earth character."],
        ["Turtle Power", "Open the hidden secret passage in Coastal Asomata (Act IV), past Rhodes, using a special item - a nod to a certain team of turtles."],
        ["Weedkiller", "Defeat Ladon"],
        ["What it says on the tin", "Find and defeat the Hydra"],
        ["What lies below", "Open the ancient gate"],
        ["When Gods Fall", "Finish the Hades storyline"],
        ["Wodan's Knowledge", "Beat Legendary difficulty as a Rune Mastery character"],
        ["Worthy of song", "Slay a titan"],
        ["You must not read from the book!", "Defeat Prosoro"],
    ];

    assert.strictEqual(officialAchievements.length, 115, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
