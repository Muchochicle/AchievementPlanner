import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/horizon-zero-dawn-remastered.json - 79 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2561580 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("horizon-zero-dawn-remastered");

test("getPlannerData('horizon-zero-dawn-remastered') returns real planner data with 79 curated achievements", () => {

    assert.ok(game, "expected real planner data for horizon-zero-dawn-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 79);

});

test("every Horizon Zero Dawn Remastered achievement has a unique id from 1 to 79 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 79 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 79);
    assert.strictEqual(new Set(apinames).size, 79);

});

test("every Horizon Zero Dawn Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 79 Horizon Zero Dawn Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Vulnerable machine kills", "Killed 10 machines weak to Fire while burning, or weak to Freeze while frozen."],
        ["3 Strikes From Above", "Killed 3 enemies using the Strike from Above skill."],
        ["5 Dismount Strikes", "Killed 5 enemies using the Dismount Strike skill."],
        ["5 Machine Types Repaired", "Used the Machine Repair or Mount Repair skill on 5 different types of machine."],
        ["7 types of machine overridden", "Override 7 different types of machine."],
        ["Aided the defectors", "Aid the escape of Uthid and child king Itamen from the Shadow Carja ('Traitor's Bounty' and 'Queen's Gambit')."],
        ["All Achievements Obtained", "Obtained all Horizon Zero Dawn™ Remastered achievements."],
        ["All Acquisition machines killed", "Kill at least one of every Acquisition-class machine."],
        ["All Activities completed", "Completed the Tallneck, Bandit Camp and Hunting Ground in the Cut."],
        ["All allies joined", "Complete the side quests that convince every optional ally to join the final defense."],
        ["All Ancient Vessels found", "Find every Ancient Vessel."],
        ["All Animal Figurines found", "Found all of the Animal Figurines in the Cut."],
        ["All Banuk Figures found", "Find every Banuk Figure."],
        ["All Combat machines killed", "Kill at least one of every Combat-class machine."],
        ["All Control Towers disabled", "Disabled all Control Towers by overriding or destroying them."],
        ["All Cores Overridden", "Reach the Core of every Cauldron and override it."],
        ["All Corrupted Zones cleared", "Clear every Corrupted Zone of corrupted machines."],
        ["All Frozen Wilds Skills", "Learned all of the new skills in the Frozen Wilds."],
        ["All machines catalogued", "Encounter and scan every machine type to complete the Notebook."],
        ["All Metal Flowers found", "Find every Metal Flower."],
        ["All Pigments found", "Found all of the Pigments in the Cut."],
        ["All Quests completed", "Completed all side quests and errands in the Frozen Wilds."],
        ["All Recon machines killed", "Kill at least one of every Recon-class machine."],
        ["All Skills learned", "Learned all available skills."],
        ["All Suns at all Grounds", "Earn at least a Half Sun mark in every trial at every Hunting Ground."],
        ["All Suns at one Ground", "Earn at least a Half Sun mark in every trial at one Hunting Ground."],
        ["All Tallnecks Overridden", "Scale and override every Tallneck in the world."],
        ["All Transport machines killed", "Kill at least one of every Transport-class machine."],
        ["All Vantages found", "Find every Vantage."],
        ["Blazing Suns at all Grounds", "Earn a Blazing Sun mark in every trial at every Hunting Ground."],
        ["Blazing Suns at one Ground", "Earn a Blazing Sun mark in every trial at one Hunting Ground."],
        ["Broke the siege of All-Mother", "Defeat the invaders and venture inside the sacred mountain during the main quest 'The Terror of the Sun'."],
        ["Cleared all the Bandit Camps", "Take back every settlement from the bandit clans."],
        ["Completed the Second Expedition", "Successfully assault Thunder's Drum (The Frozen Wilds)."],
        ["Conquered the Mountain", "Drive out the threat within the mountain - complete The Frozen Wilds story."],
        ["Crashed the Eclipse network", "Infiltrate the Eclipse camp and crash their network during the main quest 'To Curse the Darkness'."],
        ["Defeated the Sawtooth", "Kill the Sawtooth during the main quest 'The Point of the Spear'."],
        ["Discovered the truth", "Discover the truth of Zero Dawn during the main quest 'The Grave-Hoard' / 'Deep Secrets of the Earth'."],
        ["Downed 23 Grazer dummies", "Found and knocked over all of the Grazer training dummies in the Nora region."],
        ["Drained the Flood", "Completely drain the floodwater from inside Greycatch (The Frozen Wilds)."],
        ["Ended the war machine threat", "End the threat of the ancient war machines during the final quest 'The Face of Extinction'."],
        ["First Ancient Vessel found", "Find your first Ancient Vessel."],
        ["First Bandit Camp cleared", "Take back your first settlement from a bandit clan."],
        ["First Banuk Figure found", "Find your first Banuk Figure."],
        ["First Bluegleam Trade", "Traded Bluegleam for a special weapon or outfit."],
        ["First Core Overridden", "Reach the Core of your first Cauldron and override it."],
        ["First Corrupted Zone cleared", "Kill all the corrupted machines in your first Corrupted Zone."],
        ["First Metal Flower found", "Find your first Metal Flower."],
        ["First Modification", "Used a Weapon Coil or Outfit Weave on a modifiable weapon or outfit."],
        ["First Spear Modification", "Applied a modification to your spear."],
        ["First Tallneck Overridden", "Scale and override your first Tallneck."],
        ["First Vantage found", "Find your first Vantage."],
        ["Followed Rost's teachings", "Complete the tutorial section and learn everything Rost has to teach."],
        ["Fought back the corruption", "Destroy the Corrupter during the main quest 'The Womb of the Mountain'."],
        ["Fully Improved Weapons", "Fully improve a weapon at the workbench (The Frozen Wilds)."],
        ["Got the Shield-Weaver outfit", "Locate all five Power Cells, then use them to unlock the Shield-Weaver outfit in the Ancient Armory."],
        ["Headshot 30 human enemies", "Killed 30 human enemies by landing headshots on them."],
        ["Hunted Redmaw with Talanah", "Play through the Hunters Lodge side quests and help Talanah defeat Redmaw the Thunderjaw."],
        ["Killed 10 Frostclaws", "Killed 10 Frostclaw machines."],
        ["Killed 15 Scorchers", "Killed 15 Scorcher machines."],
        ["Killed 6 Fireclaws", "Killed 6 Fireclaw machines."],
        ["Learned of the ancient past", "Learn the ancient past at Maker's End during the main quest 'The City of the Sun'."],
        ["New Game+ Completed", "Completed a New Game+ playthrough on any difficulty."],
        ["Reached level 10", "Reached player level 10."],
        ["Reached level 25", "Reached player level 25."],
        ["Reached level 40", "Reached player level 40."],
        ["Reached level 50", "Reached player level 50."],
        ["Reached Level 60", "Reached player level 60."],
        ["Recovered a powerful weapon", "Explore the Mountain That Fell and recover a powerful new weapon."],
        ["Saved Meridian from its foe", "Help Erend investigate his sister's fate and foil a plot against Meridian ('Field of the Fallen')."],
        ["Stealth killed 10 machines", "Performed a stealth kill on 10 machines."],
        ["Took the Shaman's Path", "Survive the Shaman's Path and find Ourea's Retreat (The Frozen Wilds)."],
        ["Tore off 10 components", "Detached 10 components from machines during combat."],
        ["Tore off 5 heavy weapons", "Detached 5 heavy weapons from machines during combat."],
        ["Triumphed in the Proving", "Place first in the main quest 'The Proving'."],
        ["Ultra Hard Completed", "Completed a New Game+ playthrough on Ultra Hard difficulty."],
        ["Victorious with the War-Chief", "Find the Nora War-Chief and defeat the killers in the Ring of Metal ('Revenge of the Nora')."],
        ["Won Ikrie's Challenge", "Meet Ikrie again at the Snowchants Hunting Ground and take first place in her challenge (The Frozen Wilds)."],
        ["Won the Werak Challenge", "Challenge Aratak at the Frostfigures and win (The Frozen Wilds)."],
    ];

    assert.strictEqual(officialAchievements.length, 79, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
