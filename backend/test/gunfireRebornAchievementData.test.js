import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gunfire-reborn.json - 134 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1217060 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 134 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("gunfire-reborn");

test("getPlannerData('gunfire-reborn') returns real planner data with 134 curated achievements", () => {

    assert.ok(game, "expected real planner data for gunfire-reborn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 134);

});

test("every Gunfire Reborn achievement has a unique id from 1 to 134 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 134 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 134);
    assert.strictEqual(new Set(apinames).size, 134);

});

test("every Gunfire Reborn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 134 Gunfire Reborn achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["1 Life Clear", "Complete any difficulty without spending any soul essence to revive."],
        ["A Penny Left", "Unable to purchase any items at the Peddler in a BOSS Stage."],
        ["Absolute Defense", "With Qian Sui, block attacks 500 times in total with Tidal Aspis."],
        ["Abstracted Driver", "Be killed by a trap twice in a single game."],
        ["Accidental Explosion", "Killed by an Explosive/Corrosive Barrel."],
        ["Advanced Weapon", "Carry a weapon whose level is higher than 12."],
        ["Air Strike", "With Qing Yan, kill 5 or more enemies in a single Leap 50 times."],
        ["All for Nothing", "Die when the BOSS has 10% HP or less remaining."],
        ["An Eye for Detail", "Discover a Hidden Stage for the first time."],
        ["Arms Dealer", "Unlock all weapons."],
        ["Art of Explosion", "Kill 100 enemies by Explosive/Corrosive Barrels."],
        ["Back-to-Back", "Defeat the Pole Monarch and the Gluttony Sands in a single run of Endless Journey"],
        ["Battlefield Radar", "Kill Yoruhime-Maru without taking any damage from Elysian Artillery."],
        ["Best Equipment", "Have 5 Inscriptions on a Weapon."],
        ["Blacksmith's Apprentice", "Upgrade Weapon once at the Craftsman."],
        ["Blue Wave", "Obtain Qian Sui's exclusive level frame."],
        ["Born of Fire", "Win a game as Li."],
        ["Breaking Dawn", "Defeat Pole Monarch for the first time."],
        ["Burning City", "Defeat 1,000 Burning enemies."],
        ["Buzzer Beater", "Kill Corrupt Monk before the Exploding Lantern Spirits are summoned."],
        ["Chronic Disaster", "Be affected by Burning, Decay and Shock in a single game."],
        ["Combat Medic", "Revive Teammates 100 times."],
        ["Conqueror", "Complete Elite difficulty for the first time."],
        ["Crab Buffet", "Kill 30 Fiddler Crabs with Fire DMG in a battle."],
        ["Deadly Strike", "Defeat 500 enemies with Soul Strike."],
        ["Death of Yoruhime-Maru", "Kill Yoruhime-Maru for the first time."],
        ["Death Proof", "Die 100 times."],
        ["Deft Move", "Defeat any boss without taking any damage."],
        ["Destiny's Choice", "Using 200 times of [Falling Star] of [Legendary Astrohouses]."],
        ["Die After Revival", "Die within 10 seconds after Revival."],
        ["Diligence and Thrift", "Obtain a total of 10,000 copper by recycling items."],
        ["Drown Into Nightmare", "Complete Nightmare difficulty for the first time."],
        ["Dual-Wield Elite", "With Ao Bai, have a single Dual-Wield last for over 60 seconds."],
        ["Easy Win", "Revived after teammates complete the stages."],
        ["Efficient Utilization", "Recycle an item."],
        ["Electromagnetic Effect", "Defeat 1,000 Shocked enemies."],
        ["Elementary Upgrade", "Upgrade the first Talent."],
        ["Endless Journey", "The first time into the Endless Journey."],
        ["Energy Chain", "Obtain Crown Prince's exclusive level frame."],
        ["Energy Orb Master", "With Crown Prince, use Energy Orb to freeze enemies for over 1,000 seconds in total."],
        ["Enlightened Beast", "Defeat Lu Wu for the first time."],
        ["Erudition", "Encounter all elite monsters."],
        ["Everlasting Martyr", "Kill Golem for the first time."],
        ["Expert", "Equip 5 Legendary Occult Scrolls."],
        ["Eyes on Weakness", "Kill 50 Rogue Arsonists by breaking the oil barrels on their backs."],
        ["Field Proficiency", "Equip 15 Occult Scrolls."],
        ["First Blood", "Die for the first time."],
        ["Fresh Start", "Complete one Daily Challenge."],
        ["Frost Strike", "Obtain Lyn's exclusive level frame."],
        ["Full Force", "Obtain Ao Bai's exclusive level frame."],
        ["Fully in Control", "Complete any reincarnation difficulty without ever purchasing any spiritual blessing."],
        ["Gas Attack", "Inflict Miasma Effect on enemies 50 times in a single game."],
        ["Generous Boss", "Buy everything at the Peddler."],
        ["Greater Evil Exorcised", "Defeat Gluttony for the first time."],
        ["Grenade Master", "Defeat 1,000 enemies with Secondary Skill."],
        ["Hallucination Poison", "Inflict Manipulation Effect on enemies 50 times in a single game."],
        ["Happy-Go-Lucky", "Break 3,000 Jars."],
        ["Hard Fight", "Pass all stages with all teammates being knocked down 10 times or more in a single game."],
        ["Hell Hunter", "Defeat 30 enhanced Elite monster."],
        ["Hold Your Breath", "When the Polar Monarch attempts to shatter the spiritual jade, take it down within the last 3s before his charging process is finished."],
        ["Junior", "Equip 10 Occult Scrolls."],
        ["Just for Fun", "Reforge a weapon at the Craftsman."],
        ["Lava Hell", "Die from Burning."],
        ["Leaf Lord", "With Yoyo, summon 10,000 Leaf Spirit in total"],
        ["Legend of Crimson Fox", "Obtain Li's exclusive level frame."],
        ["Legendary Shot", "Deals more than 300,000 damage in a single hit."],
        ["Lethal Gas", "Die from Decay."],
        ["Lucky Draw", "Obtain a weapon with two or more exclusive inscriptions."],
        ["Mad Bomber", "Inflict Explosion Effect on enemies 50 times in a single game."],
        ["Master", "Equip 10 Legendary Occult Scrolls."],
        ["Master of Daily Challenge", "Complete five different Daily Challenges."],
        ["Money for Nothing", "Purchase items from 3 Peddlers without spending copper in a single game."],
        ["Never Defeated", "Obtain Nona's exclusive level frame."],
        ["New Beginning", "Equip 2 weapons."],
        ["No Place to Hide", "Be hooked 5 times by White Shark in a battle."],
        ["No Way to Escape", "Be killed by an Exploding Lantern Spirit."],
        ["Occultism Leader", "Unlock all Occult Scrolls."],
        ["One More Time", "Spend over 2,000 copper to Reforge at the same Craftsman."],
        ["Pacified Serpent", "Defeat Abyssal Serpent for the first time."],
        ["Painful Death", "Die with over 4,000 copper."],
        ["Painting Master", "Unlock all monsters in the logbook. "],
        ["Philanthropist", "Share 100 items in total."],
        ["Poised Brush", "Obtain Momo's exclusive level frame."],
        ["Poison Ivy", "Defeat 1,000 Decaying enemies."],
        ["Powerful Fire", "Defeat any boss within 10s."],
        ["Pragmatist", "Acquire 15 different effects of Spiritual Link."],
        ["Professional Athlete", "Complete Normal difficulty in 30 minutes."],
        ["Qian Sui's Win", "Win a game as Qian Sui."],
        ["Raging Winds", "Kill Wind God for the first time."],
        ["Rambo", "Fire 100,000 ammo."],
        ["Return to the Apex", "Finish Mysterious Jokul."],
        ["Rookie", "Equip 1 Occult Scroll."],
        ["Savage Butcher", "Kill 1,000 enemies within a distance of 4 meters."],
        ["Sharpshooter", "Deal 100 consecutive Crit hits."],
        ["Shelter From Storm", "Use [Mecha Drop] to taunt enemies 500 times."],
        ["Shopaholic", "Buy 100 items from the Peddler."],
        ["Slayer of Ichthyosaur", "Defeat Ichthyosaurus Offspring for the first time."],
        ["Soaring Eagle", "Obtain Qing Yan's exclusive level frame."],
        ["Soaring Shadow", "UseCang Jue, UseSecondary Skill to keep enemies airborne for a total of 500s"],
        ["Son of Thunder", "With Lei Luo, use Fatal Current for more than 1000 seconds in total."],
        ["Soul Taker", "Obtain Xing Zhe's exclusive level frame."],
        ["Spare No Effort", "Consume all energy to cast Spiritual Flame for 200 times."],
        ["Spirit and Shade", "Use Momo in Ink Shade or Ink Spirit status, accumulate duration 2000s"],
        ["Spiritual Jade", "Unlock 20 Spiritual Jade in [Spiritual Assault]."],
        ["Sports Car", "Complete Elite difficulty in 30 minutes."],
        ["Sword Dance", "Obtain Tao's exclusive level frame."],
        ["Sword Storm", "With Tao, summon more than 10,000 flying swords."],
        ["Tactical Sniper", "Kill 1,000 enemies at a distance of 30 meter or more."],
        ["Team Captain", "Pass a stage with all teammates being knocked down."],
        ["Temporary Close", "Complete all achievements of Gunfire Reborn base game."],
        ["The Most Slient Winter", "Use Lyn to [execute] enemies 50 times through Frost Burial"],
        ["The Sky is the Limit", "Complete Nightmare difficulty in 30 minutes."],
        ["Thrifty Expert", "Obtain 1,000 copper by recycling items in a single run."],
        ["Thunder Outrage", "Die from Shock."],
        ["Thunderous Growl", "Obtain Lei Luo's exclusive level frame."],
        ["Top Athlete", "Open all chests in the jumping level."],
        ["Ultimate Grinder", "Reach Level 100."],
        ["Unrivaled Wrath", "Obtain Cang Jue's exclusive level frame."],
        ["Unwavering Preference", "Obtain Zi Xiao's exclusive level frame."],
        ["Victory of Ao Bai", "Win a game as Ao Bai."],
        ["Victory of Cang Jue", "Win a game as Cang Jue."],
        ["Victory of Crown Prince", "Win a game as Crown Prince."],
        ["Victory of Lei Luo", "Win a game as Lei Luo."],
        ["Victory of Lyn", "Win a game as Lyn."],
        ["Victory of Momo", "Win a game as Momo."],
        ["Victory of Nona", "Win a game as Nona."],
        ["Victory of Qing Yan", "Win a game as Qing Yan."],
        ["Victory of Tao", "Win a game as Tao."],
        ["Victory of Xing Zhe", "Win a game as Xing Zhe."],
        ["Victory of Yoyo", "Use Yoyo to clear any difficulty"],
        ["Victory of Zi Xiao", "Win a game with Zi Xiao"],
        ["Wave-like Subtle Step", "Open all chests in the trap level without taking damage."],
        ["Wild Rite", "Obtain Yoyo's exclusive level frame."],
        ["Worm Hunter", "Kill 50 Desert worms without taking any damage."],
    ];

    assert.strictEqual(officialAchievements.length, 134, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
