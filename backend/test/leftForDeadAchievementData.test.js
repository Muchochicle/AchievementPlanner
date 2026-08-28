import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/left-4-dead.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 500 (fetched through this app's own services/steamApi.js) - all 73 ship a real, official Steam description. Left 4 Dead has
// no Steam-hidden achievements; the total includes the free Crash
// Course and The Sacrifice add-on campaigns.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const leftForDead = getPlannerData("left-4-dead");

test("getPlannerData('left-4-dead') returns real planner data with 73 curated achievements", () => {

    assert.ok(leftForDead, "expected real planner data for left-4-dead");
    assert.ok(Array.isArray(leftForDead.achievements));
    assert.strictEqual(leftForDead.achievements.length, 73);

});

test("every Left 4 Dead achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = leftForDead.achievements.map(a => a.id);
    const apinames = leftForDead.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Left 4 Dead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of leftForDead.achievements) {

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

test("every one of the 73 official Left 4 Dead achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["DEAD STOP", "Punch a Hunter as he is pouncing."],
        ["DRAG AND DROP", "Rescue a Survivor from a Smoker's tongue before he takes damage."],
        ["CR0WND", "Kill a Witch with a single headshot."],
        ["UNTOUCHABLES", "No Survivors take damage after contacting the rescue vehicle."],
        ["BLIND LUCK", "You or another Survivor take no damage after being vomited on by a Boomer."],
        ["MY BODYGUARD", "Protect any Survivor from an attacking Infected 50 times."],
        ["AKIMBO ASSASSIN", "Survive an entire campaign using only pistols."],
        ["FIELD MEDIC", "Heal 25 Survivors with a first aid kit."],
        ["PHARM-ASSIST", "Give pain pills to 10 Survivors."],
        ["HELPING HAND", "Revive 50 incapacitated Survivors."],
        ["HERO CLOSET", "Rescue a Survivor trapped in a closet."],
        ["HUNTER PUNTER", "Shove a Hunter off of a pinned and helpless Survivor."],
        ["TONGUE TWISTER", "Kill a Smoker who has grabbed you with his tongue."],
        ["NO SMOKING SECTION", "Kill 10 Smokers as they are pulling helpless Survivors."],
        ["101 CREMATIONS", "Set 101 Infected on fire."],
        ["DO NOT DISTURB", "Sneak past all Witches in a campaign without disturbing one."],
        ["MAN VS TANK", "Single-handedly kill a Tank."],
        ["TANKBUSTERS", "Kill a Tank without it dealing any damage to a Survivor."],
        ["SAFETY FIRST", "Play an entire campaign with no Survivors taking friendly fire damage."],
        ["NO-ONE LEFT BEHIND", "Beat a campaign with all 4 Survivors."],
        ["UNBREAKABLE", "Finish a campaign without ever using a first aid kit on yourself."],
        ["WITCH HUNTER", "Kill a Witch without any Survivor taking damage from her."],
        ["RED MIST", "Kill 1000 Infected with a mounted machine gun."],
        ["PYROTECHNICIAN", "Blow up 20 Infected in a single explosion."],
        ["ZOMBIE GENOCIDEST", "Kill 53,595 Infected."],
        ["DEAD GIVEAWAY", "Heal a fellow Survivor when your own health is below 10."],
        ["GROUND COVER", "Save another Survivor from a Special Infected while on the ground."],
        ["CLEAN KILL", "Shove a Boomer and then kill him without him splashing on anyone."],
        ["STAND TALL", "Survive a campaign without being incapacitated."],
        ["BACK 2 HELP", "Leave a safe room to save an incapped teammate and bring them back safely."],
        ["ZOMBICIDAL MANIAC", "Survive any campaign on Expert."],
        ["WHAT ARE YOU TRYING TO PROVE?", "Survive all campaigns on Expert."],
        ["NOTHING SPECIAL", "Survive a campaign with no Survivors taking damage from Special Infected."],
        ["BURN THE WITCH", "Light a Witch with a Molotov."],
        ["TOWERING INFERNO", "Light a Tank with a Molotov."],
        ["SPINAL TAP", "Kill an Infected with a single blow from behind."],
        ["STOMACH UPSET", "All Survivors complete a campaign without being vomited on."],
        ["BRAIN SALAD", "Make 100 headshot kills."],
        ["JUMP SHOT", "Headshot a Hunter while he's leaping."],
        ["MERCY KILLER", "Survive the No Mercy campaign."],
        ["TOLL COLLECTOR", "Survive the Death Toll campaign."],
        ["DEAD BARON", "Survive the Dead Air campaign."],
        ["GRIM REAPER", "Survive the Blood Harvest campaign."],
        ["BARF BAGGED", "Cover four Survivors with Boomer bile at once."],
        ["BIG DRAG", "Drag a Survivor 100 feet with your tongue as a Smoker."],
        ["CHAIN SMOKER", "Constrict two Survivors on one life as a Smoker."],
        ["DOUBLE JUMP", "Pounce two different Survivors on one life as a Hunter."],
        ["All 4 Dead", "Kill all four Survivors on one life as a Tank."],
        ["DEAD WRECKENING", "Dole out 5000 total Survivor damage as a Special Infected."],
        ["LAMB 2 SLAUGHTER", "As an Infected, incap a Survivor who has entered and left a safe room."],
        ["OUTBREAK", "Catch a rare strain of infection, then pass it on to someone else."],
        ["LAST STAND", "Complete one round of Survival on The Last Stand."],
        ["BRONZE METTLE", "Earn a Bronze medal in Survival mode on any official level."],
        ["SILVER BULLETS", "Earn a Silver medal in Survival mode on any official level."],
        ["VIOLENCE IS GOLDEN", "Earn a Gold medal in Survival mode on any official level."],
        ["DISTINGUISHED SURVIVOR", "Earn at least a Bronze medal on every official Survival level."],
        ["HEROIC SURVIVOR", "Earn at least a Silver medal on every official Survival level."],
        ["LEGENDARY SURVIVOR", "Earn a Gold medal on every official Survival level."],
        ["CRASH-PROOF", "Survive the Crash Course Campaign."],
        ["QUICK POWER", "Restart the generator within 30 seconds of it shutting off."],
        ["THE LITTLEST GENOCIDE", "Kill 5,359 Infected in the Crash Course campaign."],
        ["SMASH HIT", "Win a Versus campaign of Crash Course."],
        ["TRUCK STOP", "Your team wipes all Survivors after the escape vehicle has opened in Crash Course."],
        ["20 CAR PILE-UP", "As A Tank hit 20 Survivors with a car in the Crash Course campaign."],
        ["JUMPIN' JACK SMASH", "Pounce a Survivor for 25 points of damage in the Crash Course campaign."],
        ["SLIPPERY PULL", "Smoker pull a bile-covered Survivor until you hold him during Crash Course."],
        ["TANK STUMBLE", "Stun a Tank with an explosion in the Crash Course campaign."],
        ["WIPEFEST", "Your team incapacitates three Survivors within five seconds."],
        ["Supreme Sacrifice", "Complete \"The Sacrifice\"."],
        ["Kill Bill", "Have Bill sacrifice himself for the team."],
        ["Barrel Rolled", "Kill a Special Infected with an exploding barrel."],
        ["Chaos Generator", "Have all 3 generators running at once in \"The Sacrifice\" finale."],
        ["Sacrifizzle", "As a Special Infected, incap someone who is trying to sacrifice themselves."]
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = leftForDead.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
