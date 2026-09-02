import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/horizon-forbidden-west-complete-edition.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2420110 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("horizon-forbidden-west-complete-edition");

test("getPlannerData('horizon-forbidden-west-complete-edition') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for horizon-forbidden-west-complete-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Horizon Forbidden West Complete Edition achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Horizon Forbidden West Complete Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Horizon Forbidden West Complete Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Types of Machine Overridden", "Unlocked and used the overrides for 10 different types of machine."],
        ["Aided Kotallo", "Help Kotallo build and test a mechanized arm."],
        ["Aided the Quen", "Help the Quen of Fleet's End recover priceless knowledge and free those held captive (Burning Shores)."],
        ["All Achievements Obtained", "Obtained all Horizon Forbidden West Achievements."],
        ["All Acquisition Machines Killed", "Killed at least one of every type of Acquisition machine."],
        ["All Combat Machines Killed", "Killed at least one of every type of Combat machine."],
        ["All Cores Overridden", "Reach and override every Cauldron core."],
        ["All Machine Types Scanned", "Encountered and Focus scanned every type of machine."],
        ["All New Machines Scanned", "Encountered and Focus scanned every new machine in the Burning Shores."],
        ["All New Skills Learned", "Learn all the new skills added in Burning Shores."],
        ["All Quests Completed", "Complete every main quest, side quest and errand."],
        ["All Recon Machines Killed", "Killed at least one of every type of Reconnaissance machine."],
        ["All Tallnecks Overridden", "Scale and override every Tallneck."],
        ["All Transport Machines Killed", "Killed at least one of every type of Transport machine."],
        ["Attended the Embassy", "Survive the ambush at the Embassy and reach the Forbidden West."],
        ["Cauldron THETA Core Overridden", "Reach and override the core of Cauldron THETA (Burning Shores)."],
        ["Chose a Desert Commander", "Help both Drakka and Yarra, then select the better candidate for Desert Commander."],
        ["Completed 2 Flying Mount Quests", "Complete 2 quests that use a flying mount."],
        ["Completed 3 Relic Ruins", "Solve 3 Relic Ruins puzzles."],
        ["Completed 4 Rebel Outposts", "Complete 4 Rebel Outposts."],
        ["Completed a Long Glide", "Complete a long, uninterrupted glide with the Shieldwing."],
        ["Completed a Set of Salvage Contracts", "Complete a full set of Salvage Contracts."],
        ["Completed Arena Challenge Set", "Complete a full set of Arena challenges."],
        ["Completed New Game+", "Completed a New Game+ playthrough on any difficulty."],
        ["Completed the Dino Digits Quiz", "Complete the Dino Digits quiz (Burning Shores)."],
        ["Completed Ultra Hard", "Completed a new or New Game+ playthrough on Ultra Hard difficulty."],
        ["Confronted Londra", "Uncover the truth of Londra's plans for the Quen and rescue Seyka's sister (Burning Shores)."],
        ["Defeated Asera", "Clear every Rebel Camp and help Erend take down Asera."],
        ["Defeated Londra and His Horus", "Defeat the awakened Horus and put a stop to Londra's plans (Burning Shores)."],
        ["Defeated Machine Strike Challengers", "Beat all the roaming Machine Strike challengers."],
        ["Defeated the Enduring", "Defeat the Tenakth melee master known as the Enduring."],
        ["Discovered Faro's Fate", "Push through Thebes and learn the fate of Ted Faro."],
        ["Discovered Nemesis", "Put an end to the Zenith threat and discover Nemesis."],
        ["Discovered the Ascension", "Locate the missing Quen and discover Londra's plan to leave Earth (Burning Shores)."],
        ["Enhanced Weapon with Coils", "Equipped a weapon of any tier with 2 coils."],
        ["Equipped an Elite Coil or Weave", "Equipped an elite coil on a weapon or an elite weave on an outfit."],
        ["Established the Base", "Acquire a safe operations base and reboot GAIA."],
        ["First Core Overridden", "Reach and override your first Cauldron core."],
        ["First Rebel Camp Completed", "Complete your first Rebel Camp."],
        ["First Tallneck Overridden", "Scale and override your first Tallneck."],
        ["Flew on the Wings of the Ten", "Fly into battle on a Sunwing and destroy Regalla."],
        ["Fully Upgraded a Valor Surge", "Fully upgrade a Valor Surge."],
        ["Healed the Land-gods", "Help Zo reboot the land-gods to save Plainsong."],
        ["Killed Bileguts and Stingspawn", "Killed 5 Bileguts and 50 Stingspawn."],
        ["Killed Machines While Gliding", "Killed 5 machines with the Specter Gauntlet while gliding."],
        ["Obtained 3 Stripes at a Hunting Ground", "Obtain 3 Stripes at one Hunting Ground."],
        ["Obtained 3 Stripes at All Hunting Grounds", "Obtain 3 Stripes at every Hunting Ground."],
        ["Obtained All New Game+ Rewards", "Obtained all New Game+ weapons, dyes, and face paints."],
        ["Obtained All Weapon Classes", "Obtained 1 weapon from every weapon class."],
        ["Performed 3 Melee Combos", "Successfully performed 3 different unlockable melee combos."],
        ["Picked up 5 Heavy Weapons", "Picked up 5 different heavy weapons."],
        ["Reached Level 20", "Reached player level 20."],
        ["Reached Level 30", "Reached player level 30."],
        ["Reached Level 50", "Reached player level 50."],
        ["Reached Level 60", "Reached player level 60."],
        ["Reached the Daunt", "Reach the frontier town of the Daunt at the start of the journey west."],
        ["Recovered 5 Different Collectables", "Recover 5 different types of collectible."],
        ["Recovered AETHER", "Defend the Kulrut and recover AETHER."],
        ["Recovered All Aerial Captures", "Discovered and completed all Aerial Captures."],
        ["Recovered Alva's Data", "Help Alva acquire the data she needs for the Quen."],
        ["Recovered Beta", "Follow Beta's distress signal, retrieve her and bring her to the base."],
        ["Recovered DEMETER", "Confront the Quen and recover DEMETER."],
        ["Recovered POSEIDON", "Clear out Las Vegas and recover POSEIDON."],
        ["Recovered the Delvers' Trove", "Recover the Delvers' Trove (Burning Shores)."],
        ["Rode All Regular Mounts", "Ride every type of regular mount."],
        ["Saved the Daunt", "Fix all of the problems troubling the Daunt."],
        ["Secured Passage to the Embassy", "Clear the path to the Embassy and reopen the Daunt."],
        ["Skill Tree Learned", "Learned all available skills on one tree."],
        ["Specter Gauntlet Upgraded", "Fully upgrade the Specter Gauntlet (Burning Shores)."],
        ["Stealth Killed 10 Machines", "Performed a stealth kill on 10 machines."],
        ["Tore off 100 Components", "Detached 100 components from machines."],
        ["Unlocked 3 Weapon Techniques", "Unlock 3 Weapon Techniques from Weapon Stalls."],
        ["Upgraded 3 Outfits", "Fully upgraded 3 different outfits."],
        ["Upgraded 3 Weapons", "Fully upgraded 3 weapons."],
        ["Upgraded Every Pouch Type", "Upgraded the Food Pouch, Potion Pouch, Resource Pouch, Trap Pouch, and any ammo pouch at least once."],
        ["Used all Elemental States", "Inflicted every elemental state on an enemy at least once."],
        ["Used Brimshine", "Used Brimshine to purchase 1 outfit and 1 weapon."],
        ["Used Dye Flowers", "Use Dye Flowers to recolour an outfit."],
        ["Used Grapple Strike on Machines", "Used Grapple Strike on 5 unique machines."],
        ["Won 2 Gauntlet Runs", "Win 2 Gauntlet Run races."],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
