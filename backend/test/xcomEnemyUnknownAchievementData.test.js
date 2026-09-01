import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/xcom-enemy-unknown.json - 85 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 200510 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("xcom-enemy-unknown");

test("getPlannerData('xcom-enemy-unknown') returns real planner data with 85 curated achievements", () => {

    assert.ok(game, "expected real planner data for xcom-enemy-unknown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 85);

});

test("every XCOM: Enemy Unknown achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every XCOM: Enemy Unknown achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 85 XCOM: Enemy Unknown achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...and Practice.", "Build a Workshop."],
        ["A Continental Fellow", "Win the game from each of the 5 starting locations."],
        ["A Little Bit Alien", "Modify a soldier in single player"],
        ["Ain't No Cavalry Comin'", "Have a soldier survive every mission in a full game."],
        ["All Aboard", "(Slingshot DLC) Complete 'Confounding Light' with 4 or more turns left on the timer."],
        ["All Employees Must Wash Hands…", "In a single game, complete every Autopsy."],
        ["All Hands on Deck", "Get at least 4 kills with XCOM Base Security personnel"],
        ["All Together Now", "Get satellite coverage over every country on one continent."],
        ["An Army Of Four", "Beat the game without buying a Squad Size upgrade (Classic+ difficulty)"],
        ["And Hell's Coming With Me", "Successfully assault an Overseer UFO."],
        ["And So It Begins…", "Complete the tutorial mission."],
        ["Angel of Death", "Kill an alien while flying. Single player only."],
        ["Anger Management", "Proc Combat Rush on the entire squad (min. 4)"],
        ["Apotheosis Denied", "Deal with the newest global threat"],
        ["As A Scalpel", "Earn the \"Excellent\" rating in every performance category on a terror mission."],
        ["Bada Boom", "Kill 50 aliens with explosive weapons."],
        ["Bait the Hook", "(Slingshot DLC) Complete the mission 'Confounding Light'."],
        ["Beyond the Veil", "Find a soldier with the Gift (psionic potential)."],
        ["Bubonic", "Play a multiplayer match against someone with this achievement."],
        ["By Our Powers Combined", "Field a squad with 4 augmented soldiers, each with a different base ability and win the mission"],
        ["Combat Ready", "Build an item."],
        ["Drums in the Deep", "Gain access to the lowest level in your base."],
        ["Earth First", "Beat the game on Classic difficulty."],
        ["Edison", "In a single game, complete every Research Project."],
        ["Elite Defense", "Beat a new special mission without losing any assets"],
        ["Enemy Within", "Get a Soldier to have 5 modifications in single player"],
        ["Eye in the Sky", "Launch a Satellite."],
        ["Flight of the Valkyries", "Win a mission with an all-female squad. Single player only."],
        ["G’day", "Kill an elite enemy Sniper with one of your own snipers in single player"],
        ["Guardian of Earth", "Designate a highly decorated soldier as the Volunteer"],
        ["Happy to Oblige", "Fulfill a Council request."],
        ["Humanity's Savior", "Beat the game on any difficulty."],
        ["Hunter/Killer", "In a single game, shoot down one of each alien craft."],
        ["Lone Wolf", "Clear a UFO crash site with one soldier on Classic or Impossible difficulty."],
        ["Man No More", "Build a suit of powered armor."],
        ["Meet New People. Then Kill Them.", "Win a multiplayer match."],
        ["Mental Minefield", "Kill an enemy as it is psionically attacking you in single player"],
        ["Mind the Step", "Jump two stories in one move in single player"],
        ["Mutatis Mutandis", "Field a squad where all members have at least two modifications (min. 4) and win the mission"],
        ["New Friend", "(Slingshot DLC) Complete the mission 'Friends in Low Places'."],
        ["Nice Cover", "Use Collateral Damage to blow up a car in single player"],
        ["No Looking Back", "Beat the game in Ironman mode on Classic or Impossible Difficulty."],
        ["Off My Planet", "Recover the Hyperwave Beacon."],
        ["On the Shoulders of Giants", "Build the Gollop Chamber."],
        ["One Gun at a Time", "Staff the Engineering Department with 80 engineers."],
        ["Oppenheimer", "Staff the Research Labs with 80 scientists."],
        ["Our Finest Hour", "Beat the game on Impossible difficulty."],
        ["Ours are the Furies", "Complete Furies"],
        ["Pain in the Neck", "Cause an enemy to suicide"],
        ["Pale Horse", "Kill 500 aliens."],
        ["Prisoner of War", "Capture a live alien."],
        ["Regenerate This", "Kill an elite enemy Medic with explosive damage in single player"],
        ["Remington… Max Remington", "Have your special-duty soldier kill three enemies in the same mission"],
        ["Ride the Lightning", "Build a Firestorm."],
        ["Rise of the Machines", "Field a squad consisting entirely of augmented soldiers and SHIVs (min. 4) and win the mission"],
        ["Rising Dragon", "(Slingshot DLC) Bring Shaojie Zhang into the final Temple Ship mission."],
        ["See All, Know All", "Build the Hyperwave Relay."],
        ["Shieldbuster", "Eliminate an enemy's shield and kill it on the same turn in single player"],
        ["Shooting Stars", "Shoot down 40 UFOs."],
        ["Skunkworks", "In a single game, complete every Foundry project."],
        ["Solid Prospect", "Complete Deluge"],
        ["Someone Your Own Size", "Kill a Muton Berserker in melee combat in single player"],
        ["Steel Martyr", "Deploy three tactical subsystems on a single soldier in single player"],
        ["Tables Turned", "Shoot down a UFO."],
        ["Taking A Load Off", "Stop a squad member from suffocating in single player"],
        ["The Bigger They Are", "(Slingshot DLC) Complete the mission 'Gangplank'."],
        ["The Gatekeeper", "Stun an Outsider."],
        ["The Hardest Road", "Advance one of your soldiers to Colonel rank."],
        ["The Meld Squad", "Field a fully enhanced squad and win the mission"],
        ["The Volunteer", "Make contact with the Ethereal hive mind (use the Gollop Chamber with a psi-soldier)."],
        ["Theory...", "Build a Laboratory."],
        ["They Shall Not Pass", "Eliminate all alien waves"],
        ["Tingling Sensation", "Kill an unseen enemy detected by a specially modified soldier in single player"],
        ["Up and Running", "Build a base facility."],
        ["We Happy Few ", "Complete a mission without losing a soldier."],
        ["Welcoming Committee", "Kill 150 aliens."],
        ["Wet Work", "Complete a Very Hard abduction mission in five turns or less on Classic or Impossible difficulty."],
        ["What Wonders Await", "Complete a Research Project."],
        ["Where in the World", "Make certain of the new threat's location"],
        ["Who Needs Limbs?", "Augment a soldier in single player"],
        ["Worth Every Penny", "Acquire 1000 credits in one month."],
        ["X Marks the Spot", "Uncover the alien base's location."],
        ["Xavier", "Mind Control an Ethereal. Single player only."],
        ["You Have 5 Seconds to Comply", "Build a S.H.I.V."],
        ["Zom-B-Gone", "Eradicate the infestation"],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
