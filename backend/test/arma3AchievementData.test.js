import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/arma-3.json - 123 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 107410 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("arma-3");

test("getPlannerData('arma-3') returns real planner data with 123 curated achievements", () => {

    assert.ok(game, "expected real planner data for arma-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 123);

});

test("every Arma 3 achievement has a unique id from 1 to 123 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 123 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 123);
    assert.strictEqual(new Set(apinames).size, 123);

});

test("every Arma 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 123 Arma 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced Virtual Pilot", "Completed all official VR helicopter courses while using the Advanced Flight Model."],
        ["Airbridge", "Transported 10 groups of soldiers into battle without being killed in official Support multiplayer."],
        ["Arma Invaders", "Won the main menu mini-game during a special event."],
        ["Arma'd", "Got Arma'd into the air while inside a ground vehicle."],
        ["Armed and Dangerous", "Customized any compatible vehicle's dynamic loadout in Eden Editor."],
        ["Art and Soul", "Visited the Lars Blanken Gallery in Amsterdam."],
        ["Aspiring Aid Supplier", "Earned the bronze medal in all official IDAP Time Trials."],
        ["Aspiring Kart Racer", "Earned the bronze medal in all official Karts Time Trials."],
        ["Aspiring Sharpshooter", "Earned the bronze medal in all official Firing Drills."],
        ["Aspiring Stunt Pilot", "Earned the bronze medal in all official Helicopter Time Trials."],
        ["Bad Omens", "Discovered the secret room in Showcase Firing From Vehicles."],
        ["Better With Friends", "Completed each mission of the Apex Protocol campaign with the help of your teammates."],
        ["Beyond Hope", "Completed the Beyond Hope operation."],
        ["Bomberman", "Destroyed a ground target with a bomb in Showcase Fighter Jets."],
        ["Bonus Targets", "Hit every bonus target in any official Firing Drill with bonus targets."],
        ["Carrier", "Became the Carrier in official End Game multiplayer for the first time."],
        ["Changing Places", "Completed each role of the Stepping Stone operation."],
        ["Changing the Balance", "Modified your difficulty options and saved the custom settings."],
        ["Clean Drill", "Finished any official Firing Drill without penalties (competitive rules)."],
        ["Clean Race", "Finished any official Karts Time Trial without damage."],
        ["Collateral Damage", "Completed the 3 VR simulations in Showcase Laws of War without any civilian collateral damage."],
        ["Commander", "Spent 3 hours as a tank commander."],
        ["Competitive Shooter", "Finished any official Firing Drill."],
        ["Connoisseur", "Inspected 20 labels in the Lars Blanken Gallery in Showcase Art of War."],
        ["Conservative Sharpshooter", "Finished any official Firing Drill by hitting all targets and spending no more than a single round per target."],
        ["Contributor", "Published a scenario to Steam Workshop."],
        ["Dead Letter", "Complete a hidden objective in the Art of War Showcase content."],
        ["Deadstick Landing", "Landed your damaged aircraft for repairs in Showcase Fighter Jets."],
        ["Deity for a Day", "Played as Zeus for a total of 24 hours."],
        ["Devil's Due", "Complete the Old Man scenario, giving the counteragent to the insurgents."],
        ["Different Perspective", "Completed each role of the Beyond Hope operation."],
        ["Dodge This", "Completed Showcase Marksmen without injury."],
        ["Dome Free", "Destroy CSAT's biogenetic weapons laboratory in the Old Man scenario."],
        ["Dressed to Impress", "Tried on the new Parade Uniform or Formal Suit."],
        ["Dressing Doll", "Configured a character loadout using the Arsenal in the Eden Editor."],
        ["Drill Instructor", "Guided your recruits through all Bootcamp Zeus training stages."],
        ["Dust-Off", "Completed 10 medevac tasks in official Support multiplayer."],
        ["Easy Money", "Destroyed more tanks than Zulu in Showcase Tank Destroyers."],
        ["Every Man for Himself", "Complete the campaign epilogue where you escape Altis on your own."],
        ["Explosive Treasure", "Found and triggered all hidden training mines in the IDAP faction Showcase."],
        ["Fast Aid", "Earned the gold medal in all official IDAP Time Trials."],
        ["Fast Extract", "Complete the Apex Protocol mission '05 Extraction' (rescuing Nikos) in under 20 minutes."],
        ["Firestarter", "Destroy all Syndikat stashes in the Apex Protocol mission '03 Firestarter'."],
        ["Firing Drills Champion", "Earned the gold medal in all official Firing Drills."],
        ["First Deployment", "Completed the Bootcamp campaign. Get ready for your next deployment!"],
        ["Formula Kart", "Earned the gold medal in all official Karts Time Trials."],
        ["Fortress of Fun", "Cleared the CoF: Gray Firing Drill in under 2:00."],
        ["Forward Observer", "Destroyed all APCs defending Orino by artillery strike in the Beyond Hope operation."],
        ["From Within", "Spent 3 hours inside an armored vehicle."],
        ["Game Plan", "Drew at least one line on the map."],
        ["Get Arrested", "Successfully completed your first carrier landing."],
        ["Godly Creations", "Placed a total of 200 objects as Zeus across all scenarios."],
        ["Golden Rotorhead", "Earned the gold medal in all official Helicopter Time Trials."],
        ["Guerilla Warfare", "Gain the trust of the FIA and prepare the way for a NATO invasion (complete 'Beyond Recognition')."],
        ["Hacker", "Downloaded Intel 5 times in official End Game multiplayer."],
        ["Hammer Time", "Earned the gold medal in all official Tanks Time Trials."],
        ["Hero's Journey", "Placed any objective for players as Zeus."],
        ["Hip Shooter", "Finished any official Marksmen Firing Drill without resting or deploying your weapon (competitive rules)."],
        ["Humanitarian", "Faced with difficult decisions in the Remnants of War campaign, you went for the more humane options."],
        ["In It Together", "Spent 24 hours in any tank with a full human crew in multiplayer."],
        ["K.I.A.", "Died in any Bootcamp campaign scenario. If you see the flash, it's already too late ..."],
        ["Lifeline", "Transported all injured soldiers to the LZ Blazer in the Breaking Through mission of the Steel Pegasus operation."],
        ["Lock and Load", "Saved a custom load-out in VR Arsenal."],
        ["Lone Wolf", "Completed each mission of the Apex Protocol campaign alone."],
        ["Lost and Found", "Found and marked the 5 famous lost works of art by Dutch masters in Showcase Cultural Property."],
        ["Loyalist", "Played Arma 3 for 200 hours."],
        ["Man of the People", "Complete the Old Man scenario, giving the counteragent to Dr. Drabek."],
        ["Marksmen Weapon Master", "Tried all 7 Marksmen DLC weapons."],
        ["Mass Virtual Destruction", "Disabled all target vehicles in VR Arsenal at the same time."],
        ["Meet and Greet", "Visited all official Faction Showcases to check out their weapons and vehicles on display."],
        ["Memories of Oreokastro", "Recalled all memories in Oreokastro during the Remnants of War campaign."],
        ["Merciful God", "Reacted to 5 player pings as a Zeus by using the control shortcut."],
        ["Mod Lover", "Started Arma 3 with at least 10 mods loaded - thanks to all modders for their splendid work!"],
        ["Model Student", "Completed all Eden Editor tutorials."],
        ["Mr. Anderson", "Equipped any variant of the ADR-97 submachine gun."],
        ["Nap of the Earth", "Flew under an average of 22 meters AGL in any official Helicopters Time Trial."],
        ["New Dimension", "Imported a 2D scenario into the Eden Editor."],
        ["No Requiem", "Finish the three Altis Requiem operations with minimal civilian casualties for the good ending."],
        ["None The Wiser", "Completed the 04 Heart of Darkness campaign mission without alerting the enemy."],
        ["Peacekeeper", "Complete the campaign epilogue where NATO accepts the AAF's capitulation."],
        ["Perfectionist", "Updated an existing Steam Workshop scenario to a newer version."],
        ["Picture Perfect", "Complete Showcase: Cultural Property without the hostage being killed or taking any casualties (Art of War)."],
        ["Punch Out", "Safely ejected from any compatible jet using an ejection seat."],
        ["Puppeteer", "Played a scenario as a non-player character in the Eden Editor."],
        ["Question of Loyalty", "Choose your side in the final hour of the invasion (complete 'Paradise Found')."],
        ["Ready for Duty", "Passed all Bootcamp Zeus training stages as a recruit."],
        ["Real Virtuality", "Completed all official VR training courses."],
        ["Relentless Creator", "Spent over 100 hours creating and testing in the scenario editor."],
        ["Remnants of War", "Cleared all explosives from Oreokastro and completed the Remnants of War campaign."],
        ["Renaissance Man", "Steal the binoculars and spot an unexpected surveillance agent in Showcase: Art of War."],
        ["Respectfully, Sir", "Kill Keystone in the Old Man scenario."],
        ["Rock Stable", "Deployed any weapon for the first time."],
        ["Savior", "Rescued both pilot and medic in the LZ Nowhere mission of the Steel Pegasus operation."],
        ["Scapegoat", "Killed by a player while remotely controlling a unit as Zeus."],
        ["Seasoned Warfighter", "Completed one mission of the Stepping Stone operation without dying."],
        ["Showcasing", "Completed all official Showcases."],
        ["Showtime", "Tried any 5 official showcases."],
        ["Size Doesn't Matter", "Spent 3 hours in the Nyx tankette."],
        ["Speed Demon", "Finished any official Karts Time Trial with an average speed of 85 kmph or more."],
        ["Star Recruit", "Completed the bootcamp combat training stage without hurting yourself or others."],
        ["Start Your Engines", "Finished any official Time Trial."],
        ["Status Quo", "Complete the Old Man scenario, giving the counteragent to Keystone."],
        ["Steel Pegasus", "Completed the Steel Pegasus operation."],
        ["Steel Sniper", "Hit a moving enemy tank with an APFSDS round at a distance of at least 3500 meters."],
        ["Stepping Stone", "Completed the Stepping Stone operation."],
        ["Still Life", "Published a composition to Steam Workshop."],
        ["Subscriber", "Subscribed to a scenario on Steam Workshop."],
        ["Tactical Withdrawal", "Survive the AAF attack and escape Stratis (complete 'Tipping Point' in the East Wind campaign)."],
        ["Tank Rally", "Earned the bronze medal in all official Tanks Time Trials."],
        ["The Bigger Picture", "Completed each mission of the Apex Protocol campaign chronologically."],
        ["This is War", "Started your first Arma 3 scenario - welcome!"],
        ["This is War 2.00", "Played Arma 3 after its 2.00 platform update."],
        ["Transport Service", "Loaded or unloaded 5 vehicles into any suitable transport vehicle."],
        ["Virtual Command", "Completed all official VR commanding courses."],
        ["Virtual NOE Flight", "Completed the Low Flight stage in the advanced VR helicopter course under 40 seconds."],
        ["Virtual Pilot", "Completed all official VR helicopter courses."],
        ["Virtual Reality", "Booted up the VR simulation for the first time."],
        ["Virtual Shooter", "Completed all official VR Weapon Handling courses."],
        ["Virtual Vehicle Inspection", "Visited the Garage in VR Arsenal for the first time."],
        ["Warlock Down", "Cripple Syndikat's chain of command in the Apex Protocol campaign."],
        ["Welcome to Tanoa", "Visited the crown jewel terrain of Arma 3 Apex for the first time."],
        ["With Mark of the Serpent", "Tried out Viper Special Purpose Suit."],
        ["Worshiper", "Pinged your Zeus."],
    ];

    assert.strictEqual(officialAchievements.length, 123, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
