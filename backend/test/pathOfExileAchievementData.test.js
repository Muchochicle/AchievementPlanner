import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/path-of-exile.json - 127 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 238960 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 127 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("path-of-exile");

test("getPlannerData('path-of-exile') returns real planner data with 127 curated achievements", () => {

    assert.ok(game, "expected real planner data for path-of-exile");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 127);

});

test("every Path of Exile achievement has a unique id from 1 to 127 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 127 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 127);
    assert.strictEqual(new Set(apinames).size, 127);

});

test("every Path of Exile achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 127 Path of Exile achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Dawn", "Vanquish the Vaal Oversoul."],
        ["Alchemist's Stone", "Craft a Jewel with four mods using an Orb of Alchemy."],
        ["All Ears", "Listen to all optional NPC dialogue as one character."],
        ["All in a Day's Work", "Complete a Master's Atlas Mission."],
        ["Ancestral Power", "Have 3 Totems alive at one time."],
        ["Apprentice Cartographer", "Have a Voidstone socketed in your Atlas."],
        ["Ascendancy", "Choose an Ascendancy class."],
        ["Assassin", "Kill Dominus as the Shadow."],
        ["Atlas of Worlds", "Complete every map on the Atlas."],
        ["Augmentation", "Use an orb to change the mods of a Strongbox."],
        ["Band Together", "Join a public party."],
        ["Beginner's Luck", "Have a Unique Item drop in the Twilight Strand in Act 1."],
        ["Beginning of the End", "Reach level 60 as a non-Hardcore character."],
        ["Behold My Army", "Have 60 Minions at the same time."],
        ["Beyond Death", "Kill Beidat, Archangel of Death."],
        ["Breachlord", "Kill It That Was Esh and It That Was Tul."],
        ["Bringer of Pain", "Kill Maligaro, The Inquisitor."],
        ["Capture the Flag", "Capture a Flag in PvP."],
        ["Challenger", "Complete the Labyrinth in a non-Hardcore league."],
        ["Champion", "Kill Dominus as the Duelist."],
        ["Cleanser", "Fully clear The Harvest."],
        ["Conqueror", "Kill Dominus as the Marauder."],
        ["Cryomancer", "Shatter 5 monsters with a single action."],
        ["Cut-throat", "Kill another player in any mode or league."],
        ["Dauntless", "Complete the Cruel Labyrinth in a Hardcore League."],
        ["Deadly Sins", "Obtain every Pantheon power."],
        ["Decimation", "Complete a map area that is affected by 10 or more modifiers."],
        ["Defeat The Maven", "Accept The Maven's Invitation and defeat The Maven."],
        ["Defence Against the Darkness", "Land the killing blow on the Vaal Oversoul while you have the Fortify Buff active."],
        ["Deicide", "Kill a god and obtain their power."],
        ["Diminishing Returns", "Reach level 90 as a non-Hardcore character."],
        ["Dispelling the Curse", "Kill Doedre Darktongue."],
        ["Dream Corruption", "Corrupt a map into a Vaal Temple map."],
        ["Dream Enrichment", "Enhance a map with a Vaal fragment."],
        ["Dream within a Dream", "Have a Unique Map drop within a Unique Map."],
        ["Elemental Aegis", "Have at least 75% resistance to Fire, Cold, and Lightning."],
        ["Elemental Trinity", "Slay an enemy that is simultaneously Ignited, Shocked, and Frozen."],
        ["Emperor", "Complete the Eternal Labyrinth in a non-Hardcore league."],
        ["End of the Nightmare", "Kill Malachai, The Nightmare."],
        ["Engulfed in Flames", "Land the killing blow on the Burning Man while you are burning."],
        ["Essence Corruption", "Corrupt an Essence monster with a Vaal Orb."],
        ["Eternal", "Reach level 90 as a Hardcore character."],
        ["Eternal Eclipse", "Kill both Lunaris and Solaris in the same encounter."],
        ["Explorer", "Fully clear an end-game Map area."],
        ["Fall of Oriath", "Complete Part 1."],
        ["Fearless", "Complete the Labyrinth in a Hardcore League."],
        ["Foot of the Mountain", "Reach level 70 as a non-Hardcore character."],
        ["Freedom", "Free the Scion."],
        ["Full Clear: Apex of Sacrifice", "Kill Atziri in the Apex of Sacrifice."],
        ["Full Clear: Archives", "Fully clear the Archives."],
        ["Full Clear: Catacombs", "Fully clear the Catacombs."],
        ["Full Clear: Dread Thicket", "Fully clear the Dread Thicket."],
        ["Full Clear: Ship Graveyard Cave", "Fully clear the Ship Graveyard Cave."],
        ["Full Spectrum", "Corrupt an item to have a white socket."],
        ["Geared Up", "Equip a Rare or Unique item in every non-Flask slot."],
        ["Gemling", "Have a Skill Gem reach level 20."],
        ["Gladiator", "Fully clear the Colosseum or Pit end-game Map."],
        ["Golden Touch", "Open a Large Chest."],
        ["Grandmaster", "Complete the Hall of Grandmasters."],
        ["Heretic", "Kill High Templar Dominus."],
        ["Hostile Territory", "Corrupt a map to have eight mods."],
        ["Hunter", "Kill Dominus as the Ranger."],
        ["Identity Corruption", "Corrupt an item to have a new implicit mod."],
        ["Immortal", "Reach level 80 as a Hardcore character."],
        ["Imperfections", "Corrupt a Unique Jewel into a different Unique Jewel."],
        ["Indomitable", "Complete the Merciless Labyrinth in a Hardcore League."],
        ["Invested with Blood", "Reserve 95% or more of your Life."],
        ["Journeyman Cartographer", "Have two Voidstones socketed in your Atlas."],
        ["King Cartographer", "Have four Voidstones socketed in your Atlas."],
        ["King Tide", "Kill Tsoagoth, the Brine King."],
        ["Leader", "Complete the Cruel Labyrinth in a non-Hardcore league."],
        ["Left to Chance", "Create a Unique item using an Orb of Chance."],
        ["Locomancer", "Tag every waypoint as one character."],
        ["Lord", "Complete the Merciless Labyrinth in a non-Hardcore league."],
        ["Loyal to the End", "Kill Argus."],
        ["Maraketh Steel", "Equip each Maraketh Weapon type."],
        ["Master Cartographer", "Have three Voidstones socketed in your Atlas."],
        ["Mercy Killing", "Kill Brutus, Warden of Axiom Prison."],
        ["New World Order", "Complete a Tier 11 or higher Map with a Horned Scarab applied."],
        ["No Loose Ends", "Complete every side-quest as one character."],
        ["No Stone Unturned", "Discover all environmental lore as one character."],
        ["Omnipotent", "Fully upgrade every god power."],
        ["One of a Kind", "Equip a Unique item."],
        ["One Small Step", "Open a map in the map device and step through its portal."],
        ["Out of the Gate", "Reach level 8 in any Race Event."],
        ["Overcharged", "Have 15 combined Endurance, Frenzy, and Power Charges active simultaneously."],
        ["Paradigm Shift", "Allocate a Keystone Passive Skill."],
        ["Purifier", "Kill Voll, Emperor of Purity."],
        ["Quintessence", "Kill a monster that is under the influence of five Essence mods."],
        ["Raise the Bar", "Have 90% resistance to any Element."],
        ["Releaser of Souls", "Kill the Eater of Souls in the Core end-game Map."],
        ["Rest for the Wicked", "Defeat Piety in her laboratory."],
        ["Rule of Three", "Kill the Depraved Trinity."],
        ["Ruler of the Court", "Complete the Vinktar Square."],
        ["Sacrifice of the Vaal", "Kill Atziri in the Alluring Abyss."],
        ["Saviour", "Kill Dominus as the Templar."],
        ["Scaling the Ladder", "Reach level 80 as a non-Hardcore character."],
        ["Seeker", "Kill Dominus as the Scion."],
        ["Shaper of Worlds", "Defeat the Shaper."],
        ["Sin and Salvation", "Complete Part 2."],
        ["Sirus, Awakener of Worlds", "Defeat Sirus, Awakener of Worlds."],
        ["Soothsaying", "Hand in a full set of Divination Cards."],
        ["Specialist", "Allocate a character's fourth Keystone Passive."],
        ["Stranger in a Strange Land", "Kill a Rogue Exile in Kaom's Stronghold."],
        ["Survivor", "Reach level 60 as a Hardcore character."],
        ["The Forsaken Masters", "Defeat each Master's most dangerous foe."],
        ["The Ravenous Maw", "Defeat The Eater of Worlds."],
        ["The Scintillating Flame", "Defeat The Searing Exarch."],
        ["The Star of Wraeclast", "Kill Merveil, the Siren."],
        ["The Star-Strewn Abyss", "Defeat The Black Star."],
        ["The Unearthly Devourer", "Defeat The Infinite Hunger."],
        ["Time Capsule", "Open a Vaal Vessel in a corrupted zone."],
        ["Traitor", "Help all three Bandit Lords."],
        ["Treasure Hunter", "Kill Izaro and have him drop 3 treasure keys."],
        ["Two of a Kind", "Equip two unique items with the same name."],
        ["Umbra Slayer", "Kill Shavronne of Umbra."],
        ["Undying", "Reach level 70 as a Hardcore character."],
        ["Unforgettable", "Defeat The Elder."],
        ["Unique Influence", "Equip a Unique Jewel with a radius."],
        ["Untouchable", "Complete the Eternal Labyrinth in a Hardcore League."],
        ["Usurper", "Kill Dominus as the Witch."],
        ["Vaal Gemling", "Have a Vaal Skill Gem reach level 20."],
        ["Virtue Corruption", "Corrupt a skill gem into a Vaal skill gem."],
        ["Warlord", "Kill all Warbands leaders."],
        ["Well-Connected", "Create an item with six linked sockets using an Orb of Fusing."],
        ["Widow's Lament", "Kill Arakaali, Spinner of Shadows."],
        ["Zombie Horde", "Have 9 Raised Zombies at the same time."],
    ];

    assert.strictEqual(officialAchievements.length, 127, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
