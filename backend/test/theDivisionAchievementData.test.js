import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-division.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 365590 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-division");

test("getPlannerData('the-division') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-division");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Tom Clancy's The Division achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Tom Clancy's The Division achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Tom Clancy's The Division achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Activated", "Get to Manhattan."],
        ["Agent Diaries", "Extract 130 phone recordings from phones found in Manhattan."],
        ["Begin with a BANG", "Access the Tactical Operations Centre"],
        ["Bling! Bling!", "Equip all Equipment slots with Superior or High end Items."],
        ["Born Survivor", "Successfully survive and escape in Survival Mode."],
        ["Can't Stand the Heat!", "Eliminate the leader of the Cleaners and escape the Napalm Production Site."],
        ["Crime and Punishment", "Eliminate the leader of the Rikers gang and her bodyguards in Lexington Event Center."],
        ["Deconstructive Criticism", "Deconstruct 100 items."],
        ["Droning on...", "Extract 16 aerial photos from crashed drones."],
        ["Fixer Upper", "Completely upgrade any two wings of the Base of Operations."],
        ["Fly on the Wall ", "Restore the JTF comm relay."],
        ["For Justice!", "Kill a player who has gone Rogue."],
        ["For the Hoarder…", "Successfully extract 100 items from the Survival Dark Zone."],
        ["Gain a Foothold", "Regroup with Faye Lau in the Base of Operations."],
        ["Gone Spelunking", "Retrieve all 55 Audio Logs and 25 UrbEx Diaries in Underground"],
        ["Good With My Hands", "Craft 10 items."],
        ["Hardened Combatant", "Complete a mission in Challenge mode."],
        ["Headhunter", "Kill a named Elite in the Dark Zone."],
        ["I am the LAW!", "Kill 20 Rogue Agents."],
        ["I've Got the Power", "Secure the power plant."],
        ["Incident Reports", "Extract 40 audio incident reports from JTF laptops."],
        ["Know No Fear", "Finish all of the missions at Level 30 on the Hard difficulty."],
        ["Last Man Standing", "Eliminate the leader of the Last Man Battalion."],
        ["Lean On Me", "Heal or buff 100 times whilst in a group."],
        ["Looking for Group", "Join or create a group."],
        ["Marathon", "Discover ALL of the Safe Houses in Manhattan."],
        ["Mass Extraction", "Extract an item at all 8 Extraction Zones."],
        ["Master Craftsman", "Craft a High end item."],
        ["Medic!", "Revive a team mate 20 times in co-op."],
        ["Natural Talent", "Be attributed with a kill whilst having a talent active."],
        ["Networking", "Complete 20 Missions as part of a group."],
        ["Objectively Experienced", "Complete each of the 6 different mission objectives in the Underground"],
        ["On the Level", "Reach Level 30 with an Agent."],
        ["One Down, Two to Go!", "Completely upgrade any one wing of the Base of Operations."],
        ["Outbreak", "Secure a sample of the original virus strain."],
        ["Plundered!", "Extract a Superior or High end Item from the Dark Zone"],
        ["Raid the Arsenal", "Kill 1 enemy with each of the 6 Gun classes."],
        ["Shadows of the past", "Activate 63 ECHO scenes."],
        ["Shut that door", "Close a car door whilst in cover."],
        ["Skill Kill", "Finish off 50 enemies using Skills."],
        ["Skillz", "Equip 10 different skill mods."],
        ["State of the Art", "Fully Upgrade the Base of Operations."],
        ["Subzero Hero", "Obtain clothing to get a survivable temperature rating of -22°C / -7°F."],
        ["Survival Instincts", "Achieve Master Rank rank in Survival Mode."],
        ["Survivalist", "Recover 24 Survival Guide pages."],
        ["The Beast Below", "Reach Underground Rank 40"],
        ["The Captain", "Rescue Captain Roy Benitez."],
        ["The Doctor", "Rescue and extract Dr. Jessica Kandel."],
        ["The Engineer", "Rescue Paul Rhodes."],
        ["The Final Curtain", "Uncover the fates of Gordon Amherst and Aaron Keener."],
        ["The Finder", "Retrieve 20 missing first wave Division agent profiles."],
        ["The Humanitarian", "Purchase the Canine Unit and Pediatric Care Base of Operations Upgrade."],
        ["Those Signature Moves", "Activate any of the Signature Skills 100 times."],
        ["Tier One", "In a group of 4 finish an Operation on Challenge with 5 Directives Enabled"],
        ["Tools of the Trade", "Craft the Virus Filter and Flare Gun in Survival mode."],
        ["United We Stand", "At lvl 30 start and complete a Co-op Mission without anyone being Downed or Dying."],
        ["What Needs To Be Done", "Recover Charles Bliss' propaganda tape."],
        ["Worth the Wait", "Successfully Extract a contaminated item from the Dark Zone."],
        ["You Just Made the List...", "Kill 10 Named Enemies in the Dark Zone."],
        ["You Win Some, You Lose Some", "Recover Tchernenko's research data from the Russian Consulate."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
