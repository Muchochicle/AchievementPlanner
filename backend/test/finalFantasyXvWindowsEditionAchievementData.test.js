import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-xv-windows-edition.json - 97 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 637650 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("final-fantasy-xv-windows-edition");

test("getPlannerData('final-fantasy-xv-windows-edition') returns real planner data with 97 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-xv-windows-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 97);

});

test("every FINAL FANTASY XV WINDOWS EDITION achievement has a unique id from 1 to 97 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 97 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 97);
    assert.strictEqual(new Set(apinames).size, 97);

});

test("every FINAL FANTASY XV WINDOWS EDITION achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 97 FINAL FANTASY XV WINDOWS EDITION achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Blademaster", "Scored 1,000,000 or more points in Score Attack."],
        ["A New Protagonist", "Win the Friendly Match against Noctis in Episode Ignis (DLC)."],
        ["A Noble Sacrifice", "Complete Episode Ignis on Normal difficulty (DLC)."],
        ["A Way Forward", "Complete Chapter 6."],
        ["Altissian Ambassador", "Collected all documents."],
        ["An Emperor Deposed", "Defeated the kaiser behemoth."],
        ["Angling Expert", "Reached maximum fishing level."],
        ["Angling Rookie", "Improved fishing level for the first time."],
        ["Another Path", "Defeat Ardyn in Chapter 3, Verse 2 of Episode Ignis - the alternate route (DLC)."],
        ["Beacon of Hope", "Powered up all facilities in Lestallum."],
        ["Beacons of Hope", "Completed the Comrades quest with all four characters."],
        ["Black Mage", "Used magic for the first time."],
        ["Blessed by All", "Collected all the Royal Sigils."],
        ["Blind Spot", "Performed first blindside link."],
        ["Brother-in-Arms", "Issued first ally command."],
        ["Callings", "Complete Chapter 9."],
        ["Chocobo Jockey", "Rode a Chocobo."],
        ["Chocobreeder", "Raised a chocobo to Level 99."],
        ["Chosen King", "Defeat Ifrit on Normal difficulty during the final mission."],
        ["Cleaving a Path", "Witness the awakening of King Noctis in Episode Ignis (DLC)."],
        ["Column Colossus", "Uprooted all columns."],
        ["Come Back, Kenny!", "Met the owner of the Crow's Nest Diner."],
        ["Cooking Expert", "Reached maximum cooking level."],
        ["Cooking Rookie", "Improved cooking level for the first time."],
        ["Dark Clouds", "Complete Chapter 5."],
        ["Departure", "Complete Chapter 1."],
        ["Divine Intervention", "Summoned one of the Six for the first time."],
        ["Dogged Rider", "Earned the top ranking on all three Time Trial courses."],
        ["End of Days", "Complete Chapter 12."],
        ["Faithful Heir", "Collect all thirteen Royal Arms."],
        ["Fallen Savior", "Use Royal Retribution ten times in Episode Ardyn (DLC)."],
        ["Field Photographer", "Took 10 photos mid-battle using Selfie Shot."],
        ["Hidden Power", "Took down 10 enemies using the spelldaggers."],
        ["High Five for Justice!", "Played JUSTICE MONSTERS FIVE for the first time."],
        ["Homecoming", "Complete Chapter 14 (defeat the final boss)."],
        ["Immortal Photobomb", "Have Prompto catch an image of Gentiana in a photo (a random event in Lucis regions after Chapter 5)."],
        ["In the Dark", "Complete Chapter 11."],
        ["Insomnia Insurgence", "Overtake all seven amplifiers in Insomnia in Episode Ardyn (DLC)."],
        ["Insomnia's Waking Nightmare", "Complete the Prologue."],
        ["Just Hangin' Around", "Performed first point-warp suspension."],
        ["King of the Daemons", "Daemonify 100 enemies in Episode Ardyn (DLC)."],
        ["Kingly Blessing", "Received a Royal Sigil."],
        ["Learner's Permit", "Drove the Regalia."],
        ["Let There Be Light", "Reach an output of 999,999 kW in Episode Ignis (DLC)."],
        ["Living Legend", "Complete Chapter 4."],
        ["Love Turned Tragic", "Defeat Melusine during the 'O Partner, My Partner' sidequest (Royal Edition)."],
        ["Magical Worker", "Crafted a spell for the first time."],
        ["Maiden Voyage", "Captain the Royal Vessel from the docks (Royal Edition)."],
        ["Master and Pupil", "Performed 5 link-strikes with Cor."],
        ["Master of the Elements", "Took down 100 enemies using Total Clarity."],
        ["Mastering the Darkness", "Unlock all of Ardyn's abilities in Episode Ardyn (DLC)."],
        ["My First Hunt", "Completed first hunt."],
        ["Narwhal Watching", "Encounter Bismarck via the 'Finding Bismarck' sidequest (Royal Edition)."],
        ["New Power", "Learned first ability."],
        ["No Pain, No Gain", "Scored 500,000 or more points in Score Attack."],
        ["No Turning Back", "Complete Chapter 2."],
        ["Noct You Like a Hurricane", "Initiated first link-strike after parrying an attack."],
        ["One with Your Blade", "Crafted a weapon of Level 30 or higher."],
        ["Party of Three", "Complete Chapter 7."],
        ["Photo Expert", "Reached maximum photography level."],
        ["Photo Rookie", "Improved photography level for the first time."],
        ["Picker-Upper", "Picked up all items."],
        ["Pursuit of Knowledge", "Filled 80% of the Datalog."],
        ["Quadruple Threat", "Equipped four weapon slots."],
        ["Redemption", "Complete Chapter 13."],
        ["Regalia Pilot", "Fly the Regalia Type-F, after beating the story and acquiring all three engine parts."],
        ["Return of the Founder King", "Achieve an A+ ranking across all parameters in Episode Ardyn (DLC)."],
        ["Royal Retinue Rumble", "Best the Chosen King's companions in Episode Ignis (DLC)."],
        ["Seaworthy", "Complete Chapter 8."],
        ["Seize the Moment", "Performed 10 full-hit cross chains."],
        ["Self-Improved", "Activated 20 ability nodes."],
        ["Self-Mastered", "Activated 50 ability nodes."],
        ["Sharp Shooting", "Took down 30 enemies with crackshots."],
        ["Shield of the Chosen King", "Completed the trials on Normal."],
        ["Speed Daemon", "Posted excellent times in all cross-country test drives."],
        ["Spinning a Yarn I", "Completed first sidequest."],
        ["Spinning a Yarn II", "Completed 5 sidequests."],
        ["Spinning a Yarn III", "Completed 10 sidequests."],
        ["Spinning a Yarn IV", "Completed 20 sidequests."],
        ["Spinning a Yarn V", "Completed 40 sidequests."],
        ["Survival Expert", "Reached maximum survival level."],
        ["Survival Rookie", "Improved survival level for the first time."],
        ["Swift Retaliation", "Took down 10 enemies with counterstrikes."],
        ["The Dragoonslayer", "Defeat Aranea after completing Episode Prompto (DLC)."],
        ["The Heart of a King", "Complete Chapter 10."],
        ["The Nightmare Ends", "Complete Episode Ardyn on Normal difficulty (DLC)."],
        ["The Open World", "Complete Chapter 3."],
        ["The Power of Kings", "Called forth the Armiger for the first time."],
        ["The Power Within", "Upgrade the Armiger by collecting all 13 Royal Arms (Royal Edition)."],
        ["The Pyreburner's Keeper", "Use Ifrit's techniques ten times in Episode Ardyn (DLC)."],
        ["Through the Dimensional Rift", "Defeat Omega, the superboss reached via a portal (Royal Edition)."],
        ["Tortoise Toppler", "Defeat the Adamantoise, the level-99 post-game megaboss in Leide."],
        ["Transcendence", "Defeat Cor in the Episode Gladiolus boss fight (DLC)."],
        ["Tri-Headed Triumph", "Defeat Cerberus during the Chapter 14 events (Royal Edition)."],
        ["Unbreakable Bonds", "Completed EPISODE PROMPTO on Normal."],
        ["Unseen Assassin", "Stealth-killed 3 enemies."],
        ["Weaving a Tapestry", "Completed 80 sidequests."],
    ];

    assert.strictEqual(officialAchievements.length, 97, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
