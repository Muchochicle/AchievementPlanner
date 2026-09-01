import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/halo-infinite.json - 144 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1240440 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("halo-infinite");

test("getPlannerData('halo-infinite') returns real planner data with 144 curated achievements", () => {

    assert.ok(game, "expected real planner data for halo-infinite");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 144);

});

test("every Halo Infinite achievement has a unique id from 1 to 144 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 144 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 144);
    assert.strictEqual(new Set(apinames).size, 144);

});

test("every Halo Infinite achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 144 Halo Infinite achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Need a Weapon?\"", "Try out a new weapon customization item."],
        ["A Fellow of Infinite Jest", "Kill three enemies with the ball in a matchmade Oddball game."],
        ["A True Test of Legends ", "Complete all main campaign missions on Legendary difficulty."],
        ["Aegis Fate", "Deploy the Drop Wall 50 times."],
        ["Air Raid", "In co-op, kill 100 enemies while all players are riding air vehicles."],
        ["All About the Grind", "Finished Ranked Placement Matches."],
        ["All-Seeing I ", "Use the Threat Sensor 50 times."],
        ["Armory Amore", "Access all 34 Mjolnir Armor Lockers."],
        ["Ascension", "Defeat the Banished warlord Tremonius."],
        ["Augmented", "Earn 3 stars in 5 Tier 3 Weapon Drills."],
        ["Back to the Chopper", "Earn \"Splatter\" with a Brute Chopper in a matchmade game."],
        ["Bare Your Fangs", "Complete the main campaign on Normal difficulty."],
        ["Battle Tested", "Complete a Battle Pass."],
        ["Big Brother", "Fully upgrade the Threat Sensor ability."],
        ["Bloodstars' Bane", "Eliminate all 15 Banished High-Value Targets."],
        ["Bomb Returned", "Repel an enemy grenade with the Repulsor in a matchmade game."],
        ["Bring Shiela Home Safely", "Get the Scorpion all the way to the \"House\" without it blowing up. "],
        ["Brothers Grim", "Take down the Spartan Killers Hyperius and Tovarus."],
        ["Brutality", "Kill an enemy with melee using a bladed weapon in a matchmade game."],
        ["Bunker Buster", "Complete all seven Banished outposts."],
        ["Canon Collector", "Unlock all UNSC Audio Logs."],
        ["Catacomb", "Discover all hidden Skulls."],
        ["Clocking In", "Complete a Daily Challenge."],
        ["Conservation of Momentum ", "Complete the Conservatory in less than 15 minutes."],
        ["Control Freak", "Assist in capturing all zones that lead to a score in a matchmade Total Control game."],
        ["Controlled Demolition", "In co-op, destroy four Fuel Silos within five seconds at either Ransom Keep or the Forge of Teash."],
        ["Cow Catcher", "In co-op, splatter 50 enemies while riding in a vehicle with another player."],
        ["Customary", "Play a custom game."],
        ["Deadeye", "Earn 3 stars in a Weapon Drill."],
        ["Dispatches From the Front", "Access your first UNSC Audio Log."],
        ["Do You Even Gift?", "Drop a Power Weapon for an ally in a matchmade game."],
        ["Doing Your Part", "Complete the Tutorial."],
        ["Eld Aficionado", "Scan a Forerunner Artifact."],
        ["Enemies Everywhere!", "Mark 3+ enemies at once in a matchmade game."],
        ["Evasive Maneuvers ", "Unlock the Thruster ability. "],
        ["Fallen", "Follow the UNSC signal to a Banished stronghold called the Tower. Find the source. Get out alive."],
        ["Fight Hard, Die Well ", "Complete all main campaign missions on Heroic difficulty."],
        ["First Contact", "\"Lost, and found.\" - complete the opening mission aboard the Warship Gbraakon."],
        ["First Responders", "In co-op, answer all UNSC distress calls on any difficulty."],
        ["Forza Veloce", "Complete all 14 main missions in under eight hours."],
        ["Gatecrasher", "Breach the Auditorium in under three minutes. "],
        ["Get the Popcorn", "View a clip in theater."],
        ["Getting Defensive", "Fully upgrade your Energy Shields. "],
        ["Getting Strong Now", "Launch into Training Mode for the first time."],
        ["Grab Some Cover", "Unlock the Drop Wall ability."],
        ["Greased Lightning", "In the Spartan Academy tutorial, complete the Movement Yard obstacle course in under 25 seconds."],
        ["Gruesome Twosome", "In co-op, kill 50 enemies while riding a Mongoose with another player."],
        ["Gun Runner", "Take down all three Banished AA guns."],
        ["Haruspis", "Scan all seven Forerunner Artifacts."],
        ["Headhunter", "Eliminate a Banished High-Value Target."],
        ["Headmaster", "Complete all main missions on Legendary with all Skulls active."],
        ["Headstrong", "Discover your first hidden Skull."],
        ["Hear These Words!", "Infiltrate the Command Spire and put an end to the Reformation."],
        ["Hidden Experience", "Locate and secure a Spartan Core."],
        ["Humble Beginnings", "Complete one level in a Battle Pass."],
        ["Hunter. Killer.", "Defeat the Hunter pair stationed at the base of the Spire."],
        ["Hunting Party", "In co-op, eliminate all Banished High-Value Targets on any difficulty."],
        ["I'm Ready, How 'Bout You?", "Change your Spartan's look in the Customize menu."],
        ["Impervious", "Fully upgrade the Drop Wall ability."],
        ["Infinity Down", "Access your first Spartan Audio Log."],
        ["Inseparable", "In co-op, kill a Hunter and its bond brother within three seconds of each other."],
        ["It Really Does Beat Everything", "Eliminate all enemies at the South Beacon with a Scorpion Tank."],
        ["Just the Two of Us", "Access your Personal AI."],
        ["Kebab", "Destroy an enemy vehicle with the Skewer in a matchmade game."],
        ["Keep It Steady", "Kill 5 enemies with a Sniper Rifle from a vehicle. All players aboard vehicle share progress."],
        ["Know Your Enemy", "Unlock all Banished Audio Logs."],
        ["Legends", "\"At the end he was just a soldier. Hoping he'd done the right thing.\""],
        ["Light the Way", "Reach the Beacons, assemble the Sequence, and gain access to the Command Spire."],
        ["Limited Addition", "Complete a Limited Time Challenge."],
        ["Make a Little More Noise", "Grab a power weapon from the Tutorial armory."],
        ["MEDIC!", "Revive 3 allies in an Attrition/Elimination round in a matchmade or custom game."],
        ["Mix Things Up", "Get at least one kill with every available weapon and grenade on the Banished ship. "],
        ["Mjolnir Master", "Acquire all Spartan Cores."],
        ["Money in the Bank", "Access your first Mjolnir Armor Locker."],
        ["More Than He Bargained For", "Defeat War Chief Escharum without ever fully losing your shields."],
        ["Multi-class Racer", "Drive 4 unique vehicles in a matchmade game."],
        ["Natural Formation Location Sensation", "Gain access to a loot cave in a matchmade game."],
        ["New Kid on the Block", "Earn \"Perfect\" with a VK78 Commando in a matchmade game."],
        ["No One Left Behind", "Answer all UNSC distress calls."],
        ["Nosebleed", "Check out the best possible view."],
        ["Off the Air", "Destroy 40 Banished Propaganda Towers."],
        ["One Down…", "Destroy a Banished anti-aircraft gun."],
        ["One Shot, Top Mid", "Mark an enemy located at \"Top Mid\" in a matchmade game."],
        ["Out with a Bang", "Kill the Tower commander with a Plasma grenade."],
        ["Outpost Discovery", "Complete a Banished outpost."],
        ["Party Bus", "Earn \"Mount Up\" in a Razorback in a matchmade game."],
        ["Passing the Gas", "Kill a Grunt that's been thrown by a Brute."],
        ["Passion for Fashion", "Wear a new armor customization item."],
        ["Peak Performance", "Earn 2,000 score in a matchmade game."],
        ["Peeker's Disadvantage", "\"Back Smack\" an enemy who is zoomed in with a scoped weapon in a matchmade game."],
        ["Pelican Down", "Shut down the first Spire and stop Zeta's Reformation before it's too late."],
        ["Please Shut Up", "Take out a Banished Propaganda Tower."],
        ["Rapid Unscheduled Disassembly", "Destroy both Phantoms before they leave Outpost Tremonius."],
        ["Reaching Out", "Fully upgrade the Grappleshot. "],
        ["Reckoning", "Storm the House of Reckoning."],
        ["Reclaimer", "Capture your first Forward Operating Base."],
        ["Reporting for Duty", "Change your Spartan Tag."],
        ["Resurgency", "Capture all available Forward Operating Bases."],
        ["Rolling Thunder", "Kill 5 enemies with a Gravity Hammer from a vehicle. All players aboard vehicle share progress."],
        ["Rubicon Protocol", "Unlock all Spartan Audio Logs."],
        ["Run Rabbit, Run", "Use the Thruster 50 times."],
        ["Running Laps", "Capture the flag twice in a matchmade Capture the Flag game."],
        ["Secret Stash", "Place an item in the Razorback's storage in a matchmade game."],
        ["Set a Fire in Your Heart", "Complete the main campaign."],
        ["Sharpshooter", "Complete a Weapon Drill."],
        ["Sick Burn", "Kill an enemy with the Ravager's charged shot in a matchmade game."],
        ["Skyhook Shot", "\"Grapplejack\" an enemy flying vehicle in a matchmade game."],
        ["Slaying with Style", "Earn a Mythic Medal in a matchmade game."],
        ["Sparring Partners", "Change any training mode option."],
        ["Spire Stalker", "Kill 40 enemies with the Stalker Rifle at the Command Spire."],
        ["Stick Around", "Defeat Tremonius with the Skewer."],
        ["Straight to the Bank", "Deposit 5 Power Seeds in a matchmade Stockpile game."],
        ["Takes One to Make One", "Splatter an enemy with a Ghost."],
        ["That Thing on the Left is the Brake", "Test drive a new vehicle customization."],
        ["They See Me Rollin'", "Spectate an ally that is driving a Warthog or Razorback in a matchmade game."],
        ["Those Wonderful Toys", "Successfully use the Grappleshot 50 times."],
        ["Thrusters On Full", "Fully upgrade the Thruster ability."],
        ["Together. Again?", "Explore the underbelly of Zeta Halo and retrieve a weapon to turn the tide of this conflict (complete Foundation)."],
        ["Together. Again.", "A friend is in danger and time is running out - face your past and save your future."],
        ["Too Many Goodbyes", "Defeat the Harbinger and confront the truth (finish the campaign)."],
        ["Turnabout is Fair Play", "Kill one Chieftain and use his turret to kill another in the Repository."],
        ["Two Sides to Every Story", "Access your first Banished Audio Log."],
        ["Unearthed", "Shut down the Banished mining laser and gain access to the Conservatory."],
        ["Vintage Fisticuffs", "In the Nexus, kill the Hunter pair with melee final blows. "],
        ["Visionary", "Unlock the Threat Sensor ability. "],
        ["Wait, I Can Throw Those?", "Throw 50 fusion coils."],
        ["Wanna Have a Catch?", "Stick 50 enemies with grenades. "],
        ["Wardens of Zeta", "In co-op, complete all seven Banished outposts on any difficulty."],
        ["Wars with Friends", "Bring some rescued UNSC Marines along for the ride into a main mission. "],
        ["Watt Say You?", "Earn \"Chain Reaction\" with a Shock Rifle in a matchmade game."],
        ["We Have a Job For You", "Complete a Weekly Challenge."],
        ["We're On Our Way", "Answer a UNSC distress call."],
        ["What Will It Take?", "Enter the Nexus and learn the secrets of the Spires."],
        ["What's Rightfully Ours", "In co-op, capture all Forward Operating Bases on any difficulty."],
        ["Which One of Us is the Machine?", "Get and equip a new AI."],
        ["Whip-Riding the Ghost", "Use the Grappleshot to board an enemy Ghost. "],
        ["Who is Max Valor?", "Complete all Valor-awarding activities."],
        ["Wolves at the Doors", "In co-op, lower all three gates within 15 seconds of each other at Riven Gate."],
        ["Working Remote", "Pick up a weapon using the Grappleshot in a matchmade game."],
        ["Workplace Safety Violation", "Kill an enemy with the Banished mining laser."],
        ["You, Me, Same Page", "In co-op, destroy all cooling towers at the Dig Site within 60 seconds of each other."],
        ["You're Up, Rook'", "Play a Ranked Match."],
        ["Zeta", "Fight your way through Outpost Tremonius and step out onto the surface of Zeta Halo."],
        ["Zone Ranger", "Secure 5 zones in a matchmade Strongholds game."],
    ];

    assert.strictEqual(officialAchievements.length, 144, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
