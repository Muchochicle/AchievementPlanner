import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warframe.json - 193 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 230410 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 193 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("warframe");

test("getPlannerData('warframe') returns real planner data with 193 curated achievements", () => {

    assert.ok(game, "expected real planner data for warframe");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 193);

});

test("every Warframe achievement has a unique id from 1 to 193 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 193 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 193);
    assert.strictEqual(new Set(apinames).size, 193);

});

test("every Warframe achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 193 Warframe achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Watchful Eye", "Obtain a Sentinel."],
        ["Agent", "Solve a Cipher."],
        ["Airborne Exterminator", "Destroy 10 Raknoids in Orb Vallis while airborn"],
        ["Alchemist", "Complete 10 successful Mod Transmutes."],
        ["All for One", "Revive an ally."],
        ["Angel of Death", "Get 100 kills in a single mission."],
        ["Animal Lover", "Complete 10 perfect Conservation captures in Orb Vallis"],
        ["Behold the Possibilities", "Find 20 Mods."],
        ["Blade Mastery I", "Reach Rank 10 with any five Longsword or Dual Short Blades weapons."],
        ["Blade Mastery II", "Reach Rank 20 with any five Longsword or Dual Short Blades weapons."],
        ["Blade Mastery III", "Reach Rank 30 with any five Longsword or Dual Short Blades weapons."],
        ["Blade Proficiency I", "Reach Rank 10 with any Longsword or Dual Short Blades weapon."],
        ["Blade Proficiency II", "Reach Rank 20 with any Longsword or Dual Short Blades weapon."],
        ["Blade Proficiency III", "Reach Rank 30 with any Longsword or Dual Short Blades weapon."],
        ["Bounty Hunter", "Complete 6 Bounties within 60 minutes while in Orb Vallis"],
        ["Bow Mastery I", "Reach Rank 10 with any two Bow weapons."],
        ["Bow Mastery II", "Reach Rank 20 with any two Bow weapons."],
        ["Bow Mastery III", "Reach Rank 30 with any two Bow weapons."],
        ["Bow Proficiency I", "Reach Rank 10 with any Bow weapon."],
        ["Bow Proficiency II", "Reach Rank 20 with any Bow weapon."],
        ["Bow Proficiency III", "Reach Rank 30 with any Bow weapon."],
        ["Brawler Mastery I", "Reach Rank 10 with any three Gauntlets or Hand-to-Hand weapons."],
        ["Brawler Mastery II", "Reach Rank 20 with any three Gauntlets or Hand-to-Hand weapons."],
        ["Brawler Mastery III", "Reach Rank 30 with any three Gauntlets or Hand-to-Hand weapons."],
        ["Brawler Proficiency I", "Reach Rank 10 with any Gauntlets or Hand-to-Hand weapon."],
        ["Brawler Proficiency II", "Reach Rank 20 with any Gauntlets or Hand-to-Hand weapon."],
        ["Brawler Proficiency III", "Reach Rank 30 with any Gauntlets or Hand-to-Hand weapon."],
        ["Building a Stable", "Obtain 2 Warframes."],
        ["By the Dawn's Early Light", "Survive a night on the Plains of Eidolon."],
        ["Champion of the People", "Complete 10 bounties given by Ostron townspeople."],
        ["Cheater of Death", "Revive 1,000 allies."],
        ["Collector", "Find 100 Mods."],
        ["Combat Specialist", "Complete 3 Sorties."],
        ["Control Freak", "Complete an Interception node and extract with the enemy capturing 40% or less territory."],
        ["Counter Intelligence", "Solve a Cipher in under 5 seconds."],
        ["Cryptographer", "Solve 1,000 Ciphers."],
        ["Dagger Mastery I", "Reach Rank 10 with any three Dagger or Dual Daggers weapons."],
        ["Dagger Mastery II", "Reach Rank 20 with any three Dagger or Dual Daggers weapons."],
        ["Dagger Mastery III", "Reach Rank 30 with any three Dagger or Dual Daggers weapons."],
        ["Dagger Proficiency I", "Reach Rank 10 with any Dagger or Dual Daggers weapon."],
        ["Dagger Proficiency II", "Reach Rank 20 with any Dagger or Dual Daggers weapon."],
        ["Dagger Proficiency III", "Reach Rank 30 with any Dagger or Dual Daggers weapon."],
        ["Dark Sectors", "Complete 5 Dark Sector missions"],
        ["Disciple", "Achieve the rank of Disciple."],
        ["Dragon", "Achieve the rank of Dragon."],
        ["Each Tool with Its Own Purpose", "Obtain 10 Warframes."],
        ["Eagle", "Achieve the rank of Eagle."],
        ["Egg Timer", "Begin Genetic Lab Incubation for a Kubrow."],
        ["Entrepreneur", "Sell an item in the market."],
        ["Field Medic", "Revive 100 allies."],
        ["Forged in Fire", "Craft your first Zaw."],
        ["From on High", "Kill 100 grounded enemies while in Archwing Mode above the Plains of Eidolon."],
        ["From out of the Sun", "Shoot down 100 enemies while in a Railjack"],
        ["Gold Disciple", "Achieve the rank of Gold Disciple."],
        ["Gold Dragon", "Achieve the rank of Gold Dragon."],
        ["Gold Eagle", "Achieve the rank of Gold Eagle."],
        ["Gold Hunter", "Achieve the rank of Gold Hunter."],
        ["Gold Initiate", "Achieve the rank of Gold Initiate."],
        ["Gold Novice", "Achieve the rank of Gold Novice."],
        ["Gold Sage", "Achieve the rank of Gold Sage."],
        ["Gold Seeker", "Achieve the rank of Gold Seeker."],
        ["Gold Tiger", "Achieve the rank of Gold Tiger."],
        ["Gonna Need a Bigger Boat", "Enter the Dry Dock"],
        ["Greater Than the Sum", "Fuse mods together to create a more powerful mod."],
        ["Hang Tenno", "Make a 50 meter jump on a K-Drive"],
        ["Hats off to you!", "Destroy 200 Corpus Crewman helmets."],
        ["Healer", "Revive 10 allies."],
        ["Heavy Weapon Mastery I", "Reach Rank 10 with any two Heavy Axe, Heavy Hammer, or Heavy Sword weapons."],
        ["Heavy Weapon Mastery II", "Reach Rank 20 with any two Heavy Axe, Heavy Hammer, or Heavy Sword weapons."],
        ["Heavy Weapon Mastery III", "Reach Rank 30 with any two Heavy Axe, Heavy Hammer, or Heavy Sword weapons."],
        ["Heavy Weapon Proficiency I", "Reach Rank 10 with any Heavy Axe, Heavy Hammer, or Heavy Sword weapon."],
        ["Heavy Weapon Proficiency II", "Reach Rank 20 with any Heavy Axe, Heavy Hammer, or Heavy Sword weapon."],
        ["Heavy Weapon Proficiency III", "Reach Rank 30 with any Heavy Axe, Heavy Hammer, or Heavy Sword weapon."],
        ["Hive Five!", "Complete any 5 Hive Infestation missions."],
        ["Hooked", "Play for 2 hours in missions in total."],
        ["Hunter", "Achieve the rank of Hunter."],
        ["I'm the Captain Now", "Pilot a hijacked enemy crewship during a Railjack mission"],
        ["Initiate", "Achieve the rank of Initiate."],
        ["Into the Void", "Complete 10 Void Fissure missions."],
        ["Inventor", "Build 10 items in the Foundry."],
        ["It Keeps Getting Better", "Play for 10 hours in missions in total."],
        ["Joyride", "Travel over 10,000 meters on a stolen Dargyn across the Plains of Eidolon"],
        ["K-Driven", "Ride 1,000,000 meters on a K-Drive"],
        ["KABOOM!", "Kill 10 or more enemies with a single explosion (Tonkor, etc)."],
        ["Liberator", "Set 10 hostages free without triggering the execution timer."],
        ["Marathoner", "Travel 100,000 metres across the Plains of Eidolon."],
        ["Master", "Achieve the rank of Master."],
        ["Master Angler", "Catch 10 fish."],
        ["Mercenary", "Earn Battle Pay from 5 Unique Invasions."],
        ["Merchant", "Sell 10,000 credits' worth of items."],
        ["Middle Master", "Achieve the rank of Middle Master."],
        ["Moa Money, Moa Problems", "Acquire a Moa pet"],
        ["Money Can't Buy Happiness", "Reach top standing with Solaris United"],
        ["Money is Power", "Earn 1,000,000 Credits."],
        ["Nestegg", "Earn 10,000 Credits."],
        ["No Longer a Rookie", "Reach Rank 2 with any Warframe."],
        ["No Witnesses", "Successfully perform 100 stealth kills."],
        ["Novice", "Achieve the rank of Novice."],
        ["Operative", "Solve 100 Ciphers."],
        ["Our Tools Shape Us", "Apply 4 different Mods to a single weapon or Warframe."],
        ["Payday", "Earn 1,000 Credits."],
        ["Pest Control", "Kill 100 Plains Beasts."],
        ["Pistol Mastery I", "Reach Rank 10 with any five Pistol or Akimbo Pistols weapons."],
        ["Pistol Mastery II", "Reach Rank 20 with any five Pistol or Akimbo Pistols weapons."],
        ["Pistol Mastery III", "Reach Rank 30 with any five Pistol or Akimbo Pistols weapons."],
        ["Pistol Proficiency I", "Reach Rank 10 with any Pistol or Akimbo Pistols weapon."],
        ["Pistol Proficiency II", "Reach Rank 20 with any Pistol or Akimbo Pistols weapon."],
        ["Pistol Proficiency III", "Reach Rank 30 with any Pistol or Akimbo Pistols weapon."],
        ["Plains Prospector", "Unearth 100 Deposits from the Plains of Eidolon."],
        ["Polarize That", "Reach Rank 30 with a polarized Weapon, Companion, or Warframe."],
        ["Polarize This", "Polarize a Weapon, Companion, or Warframe."],
        ["Pole Weapon Mastery I", "Reach Rank 10 with any three Scythe, Polearm or Staff weapons."],
        ["Pole Weapon Mastery II", "Reach Rank 20 with any three Scythe, Polearm or Staff weapons."],
        ["Pole Weapon Mastery III", "Reach Rank 30 with any three Scythe, Polearm or Staff weapons."],
        ["Pole Weapon Proficiency I", "Reach Rank 10 with any Scythe, Polearm or Staff weapon."],
        ["Pole Weapon Proficiency II", "Reach Rank 20 with any Scythe, Polearm or Staff weapon."],
        ["Pole Weapon Proficiency III", "Reach Rank 30 with any Scythe, Polearm or Staff weapon."],
        ["Practice Makes Perfect", "Reach Rank 2 with any weapon."],
        ["Pride of The Lotus", "Play for 100 hours in missions in total."],
        ["Race Ace", "Complete all of the K-Drive races in Orb Vallis"],
        ["Ride or Die", "Reach top standing with Ventkids"],
        ["Ride the Wave", "Complete 20 waves of Defense and successfully extract."],
        ["Rifle Mastery I", "Reach Rank 10 with any five Rifle or Machine Gun weapons."],
        ["Rifle Mastery II", "Reach Rank 20 with any five Rifle or Machine Gun weapons."],
        ["Rifle Mastery III", "Reach Rank 30 with any five Rifle or Machine Gun weapons."],
        ["Rifle Proficiency I", "Reach Rank 10 with any Rifle or Machine Gun weapon."],
        ["Rifle Proficiency II", "Reach Rank 20 with any Rifle or Machine Gun weapon."],
        ["Rifle Proficiency III", "Reach Rank 30 with any Rifle or Machine Gun weapon."],
        ["Sage", "Achieve the rank of Sage."],
        ["Saviour of Mercury", "Kill the boss in the Mercury region and get to extraction."],
        ["Saviour of Sedna", "Kill the boss in the Sedna region and get to extraction."],
        ["Saviour of Uranus", "Kill the boss in the Uranus region and get to extraction."],
        ["Saviour of Venus", "Kill the boss in the Venus region and get to extraction."],
        ["Saya's Vigil", "Complete \"Saya's Vigil\" quest."],
        ["Scientist", "Build 20 items in the Foundry."],
        ["Secrets of the Orokin", "Find 1 Mod."],
        ["Seeker", "Achieve the rank of Seeker."],
        ["Sentinel Mastery I", "Reach Rank 10 with any three Sentinels."],
        ["Sentinel Mastery II", "Reach Rank 20 with any three Sentinels."],
        ["Sentinel Mastery III", "Reach Rank 30 with any three Sentinels."],
        ["Sentinel Proficiency I", "Reach Rank 10 with any Sentinel."],
        ["Sentinel Proficiency II", "Reach Rank 20 with any Sentinel."],
        ["Sentinel Proficiency III", "Reach Rank 30 with any Sentinel."],
        ["Sharp Shooter", "Kill an enemy from over 100 metres away across the Plains of Eidolon."],
        ["Shield Saver", "Deflect 1,000 projectiles with your melee weapon."],
        ["Shotgun Mastery I", "Reach Rank 10 with any two Shotgun weapons."],
        ["Shotgun Mastery II", "Reach Rank 20 with any two Shotgun weapons."],
        ["Shotgun Mastery III", "Reach Rank 30 with any two Shotgun weapons."],
        ["Shotgun Proficiency I", "Reach Rank 10 with any Shotgun weapon."],
        ["Shotgun Proficiency II", "Reach Rank 20 with any Shotgun weapon."],
        ["Shotgun Proficiency III", "Reach Rank 30 with any Shotgun weapon."],
        ["Shuriken Mastery I", "Reach Rank 10 with any three Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Shuriken Mastery II", "Reach Rank 20 with any three Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Shuriken Mastery III", "Reach Rank 30 with any three Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Shuriken Proficiency I", "Reach Rank 10 with any Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Shuriken Proficiency II", "Reach Rank 20 with any Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Shuriken Proficiency III", "Reach Rank 30 with any Boomerang, Throwing Discs or Throwing Daggers weapon."],
        ["Silver Disciple", "Achieve the rank of Silver Disciple."],
        ["Silver Dragon", "Achieve the rank of Silver Dragon."],
        ["Silver Eagle", "Achieve the rank of Silver Eagle."],
        ["Silver Hunter", "Achieve the rank of Silver Hunter."],
        ["Silver Initiate", "Achieve the rank of Silver Initiate."],
        ["Silver Novice", "Achieve the rank of Silver Novice."],
        ["Silver Sage", "Achieve the rank of Silver Sage."],
        ["Silver Seeker", "Achieve the rank of Silver Seeker."],
        ["Silver Tiger", "Achieve the rank of Silver Tiger."],
        ["Sleds of Sunshine", "Travel over 500 metres in a single slide across the Plains of Eidolon."],
        ["So Many Choices", "Find 1,000 Mods."],
        ["Some Assembly Required", "Collect and assemble all Railjack components"],
        ["Special Agent", "Solve 10 Ciphers."],
        ["Stay Frosty", "Fall in coolant on Orb Vallis from 275 meters while on a K-Drive"],
        ["Tailor Made", "Customize the color of a Warframe."],
        ["Tenno and Hooch", "Complete any 10 missions with a Kubrow equipped."],
        ["Tenno of all Trades", "Score a kill with your equipped primary, secondary and melee weapons in 5 seconds or less."],
        ["That Which Does Not Kill Us", "Vanquish a Rank 5 Kuva Lich."],
        ["The 8-fold Path", "Squad must survive 8 waves of Defense using only Melee Attacks."],
        ["The Abyss Gazes Into You", "Create a Kuva Lich"],
        ["The Camera Adds 10 Pounds", "Destroy 150 Security Cameras."],
        ["The Great Eidolon Hunt", "Defeat an Eidolon Teralyst."],
        ["The Right Tool for the Job", "Obtain 5 Warframes."],
        ["The Sacrifice", "Complete \"The Sacrifice\" quest."],
        ["The Sword Alone", "Complete 10 missions without any primary or secondary weapons equipped."],
        ["The War Within", "Complete \"The War Within\" quest."],
        ["This is What You Are", "Fully unlock a Focus skill tree."],
        ["Tiger", "Achieve the rank of Tiger."],
        ["Tomb Looter", "Explore all of the Eidolon Caves."],
        ["True Master", "Achieve the rank of True Master."],
        ["Vallis Spelunker", "Explore all of the caves in Orb Vallis"],
        ["We Shape Our Tools", "Apply a Mod to a weapon or Warframe."],
        ["Weaponsmith", "Build an item in the Foundry."],
        ["What a Nightmare", "Complete 10 Nightmare missions."],
        ["Where Credit is Due", "Earn 100,000 Credits."],
        ["Without a Hitch", "Complete a Hijack mission without allowing the payload to travel backwards."],
    ];

    assert.strictEqual(officialAchievements.length, 193, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
