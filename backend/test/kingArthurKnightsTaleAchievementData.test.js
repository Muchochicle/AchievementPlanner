import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/king-arthur-knights-tale.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1157390 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("king-arthur-knights-tale");

test("getPlannerData('king-arthur-knights-tale') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for king-arthur-knights-tale");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every King Arthur: Knight's Tale achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every King Arthur: Knight's Tale achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 King Arthur: Knight's Tale achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["'Tis but a Scratch!", "Apply Burning, Poison, Chill, Slow and Bleeding effects on one enemy."],
        ["A Person of Principle", "Reach maximum points in one of the four Moralities."],
        ["A Powerful Trinket", "Purchase a Relic item at the Enchanted Tower."],
        ["A Second Chance ", "Resurrect a Hero from the Crypt."],
        ["Alright… We'll Call It a Draw", "Finish a mission with the Black Knight with Vitality loss and at least 2 permanent injuries."],
        ["AvaLAN Party", "Finish a PvP match."],
        ["Back from the Dead", "Complete the tutorial - Sir Mordred is brought back from the dead."],
        ["Bloodbath", "Inflict bleeding on 5 enemies in the same round."],
        ["Bully King", "Kill an enemy which received damage from all of your Heroes in the same turn (with at least Level 2 Heroes)."],
        ["Cleave It To Me", "Kill 3 enemies at once with the Cleave skill."],
        ["Conqueror of Avalon", "Kill 1,000 enemies in Avalon"],
        ["Crypt? What Crypt?", "Complete the main story with less than 3 heroes in the Crypt."],
        ["Dawn Before Midnight", "Complete Act 1 on any difficulty."],
        ["Decisions, Decisions", "Complete 30 events"],
        ["Demon Slayer", "Defeat Balor - a story boss, described here spoiler-free."],
        ["Disciples of the Four Branches", "Complete a mission with 4 different classes."],
        ["Explorer of Avalon", "Complete 10 side missions"],
        ["Field Day", "Complete a mission without any of your heroes losing HP or Vitality (except tutorial missions)."],
        ["Fire Walk With Me", "Kill at least 5 enemies at the same time with a fire-based Arcanist spell."],
        ["Floor Sweep", "Knockdown 3 enemies in one turn."],
        ["Forever a Trainee", "Level up a Hero three consecutive times in the Training Ground."],
        ["Fortune Favors Fools", "Miss 3 attacks in a single turn."],
        ["Frugal Knights", "Complete a mission without using Potions, Shrines, Scrolls or Campfires (except tutorial missions)."],
        ["Get Lost!", "Finish an encounter with at least 4 Lost enemies awaiting resurrection."],
        ["His Final Despair", "Complete Act 3 on any difficulty."],
        ["I Shall Bere Your Noble Fame ", "Reach level 25 with 6 Heroes."],
        ["It's a Trap!", "Kill 5 enemies in their own round with traps in a single encounter."],
        ["It's Only a Model ", "Build all available buildings in Camelot."],
        ["Just a Flesh Wound", "Complete a mission with 4 injured Heroes."],
        ["Just a Rotting Corpse", "Defeat Sir Tewelyn - a story boss, described here spoiler-free."],
        ["Knights of the Cresenct Table", "Find and Recruit 6 Hero Companions."],
        ["Knights of the Round Table ", "Find and Recruit  12 Hero Companions."],
        ["Master Builder", "Unlock all upgrades for a building in Camelot."],
        ["Master of the Elements", "Kill a frozen enemy with fire-based skills or attacks."],
        ["My Life for Camelot", "Bring 3 injured heroes to a mission."],
        ["None Shall Pass", "Win duels with 4 different heroes."],
        ["One Brick at a Time", "Acquire 5,000 building resources."],
        ["One Step Ahead", "Kill an enemy performing a surprise attack with an overwatch attack."],
        ["Out of My Way!", "Deal at least 100 damage with one attack."],
        ["Overwatcher", "Kill 5 enemies with Overwatch attacks in a single encounter."],
        ["Painted Devils", "Achieve 35 Skirmish Score during the Painted Devils skirmish missions. (DLC required)"],
        ["Pray for my Soul", "Resolve Uther Pendragon's storyline - described here spoiler-free."],
        ["Ready to Fight", "Equip a character with Relic items in every slot (except potions)."],
        ["Rogues and Renegades", "Achieve 35 Skirmish Score during the Rogues and Renegades skirmish missions. (DLC required)"],
        ["Savior of Avalon", "Complete 25 side missions."],
        ["See the Consequences", "Complete the main story in Roguelite mode."],
        ["Silver Twilight", "Achieve 35 Skirmish Score during the Silver Twilight skirmish missions."],
        ["Surprise Party", "Apply 4 backstab attacks in a single turn."],
        ["Team Arrowhead", "Complete a mission with only Marksmen in the party."],
        ["The Dark Lord of Camelot", "Complete Act 4 on any difficulty."],
        ["The Penny Knight", "Sell items worth 10,000 gold at the Merchant."],
        ["The Trials of Sir Tewelyn", "Achieve 35 Skirmish Score during the Trials of Sir Tewelyn skirmish missions."],
        ["The Very Purpose of a Knight", "Reach level 25 with one Hero."],
        ["The Wounded King", "Complete Act 2 on any difficulty."],
        ["Treasure Hunter", "Find a hidden treasure."],
        ["Tristan & Isolde", "Resolve the Tristan and Isolde questline - described here spoiler-free."],
        ["Ultra-Heavy", "Reach 150 HP with Sir Mordred."],
        ["Valiant Defender", "Don't let the Guardian Spirit lose any HP on the Forbidden Keep mission."],
        ["Wisdom is Better", "Acquire 10,000 gold."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
