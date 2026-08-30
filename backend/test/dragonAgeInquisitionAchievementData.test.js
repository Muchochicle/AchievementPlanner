import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dragon-age-inquisition.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1222690 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 69 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dragon-age-inquisition");

test("getPlannerData('dragon-age-inquisition') returns real planner data with 69 curated achievements", () => {

    assert.ok(game, "expected real planner data for dragon-age-inquisition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 69);

});

test("every Dragon Age: Inquisition achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every Dragon Age: Inquisition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 69 Dragon Age: Inquisition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Belle of the Ball", "Gain the full approval of the Orlesian court."],
        ["Beloved and Precious", "Commit to a romantic relationship."],
        ["Botanist", "Harvest 50 herbs from Skyhold's garden in a single playthrough."],
        ["Cavalier", "Secure a mount."],
        ["Commander", "Complete a timed mission on the war table."],
        ["Coroner", "Find all of the wearable items that make up the Taken Shape."],
        ["Customized", "Enchant or upgrade a piece of equipment in single-player mode."],
        ["Decorator", "Purchase any new decoration element for Skyhold."],
        ["Deep Roads Commander", "Complete a mission at the expedition table in the Legion of the Dead camp."],
        ["Demonslayer", "Defeat 1,000 demons in single-player mode."],
        ["Doom upon All the World", "End the threat once and for all."],
        ["Dragons' Bane", "Slay 10 high dragons in single-player mode."],
        ["Fact Finder", "Help Shaper Valta discover secret dwarven history."],
        ["Firestarter", "Destroy all the Winter Shards and light all the fires in the Old Temple."],
        ["Focused", "Spend 10 points in a single ability tree with any one single-player character."],
        ["Forever Marked", "Progress the story to unlock."],
        ["Giant Slayer", "Defeat an ogre alpha."],
        ["Hard Hitter", "Land a single blow in excess of 1,000 damage in single-player mode."],
        ["Herald", "Finish the single-player campaign on at least Hard without lowering the difficulty."],
        ["Here Lies the Abyss", "Face your fears in the Fade."],
        ["High Commander", "Complete 50 missions or operations in a single playthrough."],
        ["Historian", "Uncover the secrets of a legendary figure."],
        ["In Your Heart Shall Burn", "Survive an attack on the Inquisition."],
        ["Inquisitor", "Finish the single-player campaign on Nightmare without lowering the difficulty."],
        ["Invincible", "Defeat 2,500 enemies in single-player mode."],
        ["Keymaster", "Enter the heart of the Solasan temple."],
        ["Lateral Thinker", "Unlock all caches watched over by ancient statues."],
        ["Legend-Marked", "Impress the Avvar of Stone-Bear Hold and gain their friendship."],
        ["Liberator", "Liberate three keeps in a single playthrough."],
        ["Loremaster", "Collect 250 codex entries in a single playthrough."],
        ["Marked for Greatness", "Seal 75 rifts in a single playthrough."],
        ["Master Alchemist", "Upgrade your alchemic potions, grenades, or tonics 30 times in a single playthrough."],
        ["Master Builder", "Craft an item from Tier 4 materials in all non-masterwork slots in single-player mode."],
        ["On Burning Wings", "Recruit a powerful ally to even the score."],
        ["Opposition in All Things", "Close the Breach."],
        ["Pathfinder", "Discover a campsite and establish at least one Inquisition camp in 10 wilderness areas."],
        ["Peerless", "Level up the Inquisition to rank 10."],
        ["People Person", "Become friends with at least three of your inner circle in one playthrough."],
        ["Persuasive", "Acquire 10 Inquisition agents in a single playthrough."],
        ["Quartermaster", "Complete 20 requisition requests in a single playthrough."],
        ["Regal", "Completely upgrade one throne."],
        ["Saddled Up", "Purchase or secure five different mounts of any kind."],
        ["Shaper of Stone", "End the earthquakes threatening the surface."],
        ["Sharp-Eyed", "Find and recover a shard identified by an ocularum."],
        ["Skilled", "Upgrade any ability once in single-player mode."],
        ["Speak Only the Word", "Gain access to a major city for the Inquisition."],
        ["Specialized", "Choose a specialization class."],
        ["Stargazer", "Unlock 15 astrariums in a single playthrough."],
        ["Synergized", "Trigger a cross-class combo with a character you control in single-player mode."],
        ["The Brightest of Their Age", "Recruit all possible companions in a single playthrough."],
        ["The Wrath of Heaven", "Finish the prologue."],
        ["They Who Stand", "Recruit a new companion."],
        ["Trailblazer", "Discover a campsite and establish an Inquisition camp in any wilderness area."],
        ["Trial of Temperance", "Rest Easy trial always on in Emprise du Lion: claim Suledin Keep."],
        ["Trial of the Emperor", "Defeat 20 foes promoted by Walk Softly."],
        ["Trial of the Empress", "Even Ground on: slay a level 16 or higher Fereldan Frostback."],
        ["Trial of the Fool", "Take It Slow on: reach Skyhold at level 5 or less."],
        ["Trial of the Hermit", "Slay 10 great bears promoted by Grizzly End."],
        ["Trial of the Lovers", "Fair-Weather Friends always on: enter Halamshiral with all followers."],
        ["Trial of the Magician", "Travel Light on for \"In Hushed Whispers\": finish the quest."],
        ["Trial of the Tower", "Rub Some Dirt on It on: slay the Hivernal high dragon."],
        ["Veteran", "Reach level 20 in single-player mode."],
        ["Well-Funded", "Earn 50,000 or more gold across all single-player playthroughs."],
        ["Well-Prepared", "Craft a weapon or piece of armor in single-player mode."],
        ["Well-Read", "Discover a veilfire rune."],
        ["What Pride Had Wrought", "Reach an ancient ruin before your enemies."],
        ["Wicked Eyes and Wicked Hearts", "Make an impression on the Orlesian court."],
        ["Winter's End", "Dispel a myth of ancient days."],
        ["Wyrmslayer", "Kill a high dragon in single-player mode."],
    ];

    assert.strictEqual(officialAchievements.length, 69, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
