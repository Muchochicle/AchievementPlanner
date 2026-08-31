import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/middle-earth-shadow-of-war.json - 72 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 356190 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("middle-earth-shadow-of-war");

test("getPlannerData('middle-earth-shadow-of-war') returns real planner data with 72 curated achievements", () => {

    assert.ok(game, "expected real planner data for middle-earth-shadow-of-war");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 72);

});

test("every Shadow of War achievement has a unique id from 1 to 72 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 72 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 72);
    assert.strictEqual(new Set(apinames).size, 72);

});

test("every Shadow of War achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 72 Shadow of War achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Avenged", "Complete a Vendetta Mission."],
        ["Bad Boss", "Strike a Follower until he's had enough."],
        ["Banish the Darkness", "Complete all Eltariel quests (the Blade of Galadriel content)."],
        ["Banished", "Story: defeat Suladân."],
        ["Banished Ambition", "Defeat the Rogue Nazgûl."],
        ["Baranor the Conqueror", "Complete the Desolation of Mordor with a Gold Rating."],
        ["Belly of the Beast", "Leave your mark on the Overlord of Lithlad."],
        ["Best Defense", "Equip 3 Siege Upgrades on an Assault Team."],
        ["Better Luck Next Time", "Meet an Enemy or a Follower who has cheated death."],
        ["Blood on Blood", "Make a Captain kill his bloodbrother."],
        ["Bombardier", "Kill at least one enemy with each ammo type while gliding as Baranor."],
        ["Bound by Blood", "Complete an Online Vendetta."],
        ["Brought to Heel", "Story: defeat Helm Hammerhand."],
        ["Complete in Defeat", "Defeat the Lawless."],
        ["Death is not the End", "Resurrect a Follower Captain."],
        ["Dismantled", "Disable an Outpost."],
        ["Eastern Front", "Conquer the Fortress of Shindrâm as Talion."],
        ["Elven Conquest", "Complete an Online Conquest with an Eltariel skin."],
        ["Everything is Permitted", "Shame an Assassin until he becomes deranged."],
        ["Fall and Rise", "Complete all Brûz quests."],
        ["Feed the Beasts", "Attract every kind of beast using bait."],
        ["Festival of Blood", "Save Serka."],
        ["Finished Tales", "Recover all Gondorian artifacts."],
        ["First Steps", "Complete the first Brûz quest."],
        ["Fit for War", "Complete a challenge to upgrade a piece of gear."],
        ["Flash Mob", "Blind 100 Orcs."],
        ["Follower Perks", "Use a Training Order to give a Follower a gang."],
        ["For Gondor", "Complete all Gondor quests."],
        ["Forged by War", "Unlock all player skills."],
        ["Forger", "Forge a higher-quality Gem by combining three Gems of the same quality."],
        ["Gauntlet", "Collect all Númenórean artifacts and bring them to Torvin."],
        ["Headhunter", "Recruit a Follower of every Advanced Class."],
        ["Holding the Line", "Defend Cirith Ungol from a new threat."],
        ["Hostile Takeover", "Defeat a Warchief."],
        ["I Like to Watch", "Watch a Follower murder another Captain without helping him."],
        ["I See the Light", "Use Light Trap against 20 Orcs."],
        ["If You Can't Beat Them", "Recruit an Orc after he's killed you three or more times."],
        ["It Came From Within", "Start a Conquest with all Warchiefs as spies."],
        ["Life of the Party\t", "Send a Destroyer on a Vendetta Mission."],
        ["Lord of Horror", "Story: defeat the Balrog (Tar Goroth)."],
        ["Master Forger", "Forge a top tier Gem."],
        ["Nemesis", "Encounter the same Orc 3 times in nemesis missions without killing him."],
        ["No Orc Left Behind", "Rescue a Follower who's been captured."],
        ["No Orc Lives Forever", "Win all Fight Pit missions."],
        ["No Way Out", "Change the landscape of Lithlad."],
        ["Overkill", "Send a Follower to kill another Follower in a pit fight."],
        ["Peace in Death", "Complete the Shadow Wars endgame."],
        ["Point of No Return", "Defend the Oasis."],
        ["Power Couple", "Send a Follower to support another Follower in a Nemesis Mission."],
        ["Problem Solved", "Settle the Fixer’s score with the overlord of Núrn."],
        ["Promise Keeper", "Issue a Death Threat, and then successfully kill the target."],
        ["Purge", "Purify all the Haedir."],
        ["Reap What You Sow", "Conquer the Fortress of Shindrâm as Baranor."],
        ["Rough Rider", "Ride every type of beast and rare beast."],
        ["Rule of Three", "Unlock 3 Gem slots."],
        ["Scorched Earth", "Deny Sauron’s control of Seregost forever."],
        ["Second Age Warrior", "Complete all Shadow of the Past missions in one region."],
        ["Shadows of the Sand", "Achieve a Gold Rating on all Shadow of the Past missions in Lithlad."],
        ["Speak Friend and Enter", "Open one of the Ithildin Doors."],
        ["Stalemate is Victory", "Story: defeat the Witch-king and reclaim Minas Morgul."],
        ["Such Great Heights", "Reach the rank of Captain in Online Conquest."],
        ["The Operative", "Turn all of a Warchief's bodyguards (minimum 2) into spies, then confront him."],
        ["The Stuff of Legend", "Equip a full Legendary Gear set as Talion."],
        ["The Time has Come", "Witness the end of Eltariel’s path."],
        ["The Web Revealed", "Uncover the final Shelob memory and reveal the Web of Fate."],
        ["Trolling", "Kill a Captain while riding an Olog."],
        ["Undeath Defeats Undeath", "Complete all Carnán quests."],
        ["Unlikely Alliances", "Recruit your first follower as Eltariel."],
        ["Vandal", "Destroy a Monument."],
        ["Vertical Mobility", "Help a grunt become an Overlord."],
        ["What Once Was Lost", "Story: complete Act I."],
        ["Wild Things", "Kill a drake while riding a graug."],
    ];

    assert.strictEqual(officialAchievements.length, 72, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
