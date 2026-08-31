import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/orion-prelude.json - 251 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 104900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("orion-prelude");

test("getPlannerData('orion-prelude') returns real planner data with 251 curated achievements", () => {

    assert.ok(game, "expected real planner data for orion-prelude");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 251);

});

test("every ORION: Prelude achievement has a unique id from 1 to 251 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 251 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 251);
    assert.strictEqual(new Set(apinames).size, 251);

});

test("every ORION: Prelude achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 251 ORION: Prelude achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3 Birds, 1 Stone!", "Kill three raptors with one grenade"],
        ["Alpha Male!", "Kill the first and last dino in a wave"],
        ["Angry Birds", "Stasis Fury kill 100 Rhams"],
        ["Apprentice of C-9", "Kill 100 enemies with the C-9 Revolver"],
        ["Apprentice of Cryo", "Kill 100 enemies with the TREK Cryo Knife"],
        ["Apprentice of CV-10", "Kill 100 enemies with the CV-10 Pistol"],
        ["Apprentice of CV-10S", "Kill 100 enemies with the CV-10 Silenced Pistol"],
        ["Apprentice of Egg", "Kill 100 enemies with the T-Rex Egg"],
        ["Apprentice of Energy Carbine", "Kill 100 enemies with the TREK Energy Carbine"],
        ["Apprentice of Flamethrower", "Kill 100 enemies with the TREK Flamethrower"],
        ["Apprentice of FNC-30", "Kill 100 enemies with the FNC-30 Burst Rifle"],
        ["Apprentice of Gatling Gun", "Kill 100 enemies with the TREK Gatling Gun"],
        ["Apprentice of Grenade Launcher", "Kill 100 enemies with the TREK Grenade Launcher"],
        ["Apprentice of Laser Rifle", "Kill 100 enemies with the TREK Laser Rifle"],
        ["Apprentice of Longbow", "Kill 100 enemies with the TREK Longbow"],
        ["Apprentice of Longshot", "Kill 100 enemies with the TREK Longshot Bolt-Action Sniper Rifle"],
        ["Apprentice of M-40", "Kill 100 enemies with the M-40 Magnum"],
        ["Apprentice of MX-4", "Kill 100 enemies with the MX-4"],
        ["Apprentice of Revival", "Revive 100 downed teammates with the Revital Kit"],
        ["Apprentice of RNC-44", "Kill 100 enemies with the RNC-44 SMG"],
        ["Apprentice of RNC-9", "Kill 100 enemies with the RNC-9 Automatic Pistol"],
        ["Apprentice of Rocket Launcher", "Kill 100 enemies with the TREK Rocket Launcher"],
        ["Apprentice of T-99", "kill 100 enemies with the T-99 Dual Pistols"],
        ["Apprentice of Teleportation", "Teleport 100 times"],
        ["Apprentice of The Blade", "Kill 100 enemies with the TREK Ion Blade"],
        ["Apprentice of TREK-12", "Kill 100 enemies with the TREK-12 Shotgun"],
        ["Apprentice of TREK-13", "Kill 100 enemies with the TREK-13  Automatic Shotgun"],
        ["Apprentice of TREK-22", "Kill 100 enemies with the TREK-22 Semi-Automatic Sniper Rifle"],
        ["Apprentice of TREK-47", "Kill 100 enemies with the TREK-47 Automatic Rifle"],
        ["Apprentice of TREK-79", "Kill 100 enemies with the TREK-79 LMG"],
        ["Apprentice of Utility", "Repair a broken generator with the Utility Gun 100 times"],
        ["Apprentice of X-R8", "Kill 100 enemies with the X-R8 Tactical Carbine"],
        ["Are You Crazy?", "Complete Wave 1 on Insane"],
        ["Are You Insane?", "Complete Wave 5 on Insane"],
        ["Aridication", "Beat Arid on Hard"],
        ["Back in Business", "Turn on or heal 50 generators"],
        ["Bank of Orion", "Hand out $100,000 in Spiral Credits"],
        ["Best Teammate Ever!", "Earn 200 assists in a single match"],
        ["Bill Gates!", "Spend 10,000,000 Credits"],
        ["Bravo!", "Complete 10 Mission Objectives"],
        ["Bring It On!", "Get 100 Second-Winds"],
        ["Bullet Sponge!", "Take 5,000 damage in a single life"],
        ["BulletSpit", "Obtain 100 Gatling Sentry Turret Kills"],
        ["Call of Raptors", "Knife-kill 100 Raptors"],
        ["Captain Hook", "Kill the Deinosuchus 100 times"],
        ["Carpool to Hell!", "Kill a dinosaur with every vehicle"],
        ["Caveman", "Kill 25 dinosaurs"],
        ["Chompy Bomb Bomb", "Obtain 100 Compy-Bomb Kills in Rampage"],
        ["Climbing The Ladder", "Reach Level 30"],
        ["Conquest Birthday", "Spend 1 Game Year in the Arctic"],
        ["Constantly Evolving", "Reach Level 40"],
        ["Curb Stomping!", "Stomp 100 Raptors in the Cobra Mech"],
        ["Dino Beatdown!", "Punch 100 dinosaurs to death"],
        ["Dino Bomber", "Kill 50 dinosaurs"],
        ["Dino Dexter", "Kill 250 dinosaurs"],
        ["Dino Whisperer!", "Ride a dino for 10 seconds"],
        ["Dive Bomin'", "Obtain 100 Rham-Bomb Kills in Rampage"],
        ["Do You Need a Therapist", "Kill 500 dinosaurs"],
        ["Dude Huge 1.0", "Play 10 King of the Hill Matches"],
        ["Dude Huge 2.0", "Play 25 King of the Hill Matches"],
        ["Dude Huge 3.0", "Play 50 King of the Hill Matches"],
        ["Duel Master", "Win 10 Team Duel Matches"],
        ["Dueler", "Play 5 Duel Matches"],
        ["Duelist", "Play 10 Duel Matches"],
        ["Endurance", "Spend 6 Game Months in the Arctic"],
        ["Even More Loot!", "Find 100 Loot Crates"],
        ["Excuse Me - Have You Met My Sword?", "Obtain 1,000 Melee Kills in any Duel Game Mode"],
        ["Expert of C-9", "Kill 1000 enemies with the C-9 Revolver"],
        ["Expert of Cryo", "Kill 1000 enemies with the TREK Cryo Knife"],
        ["Expert of CV-10", "Kill 1000 enemies with the CV-10 Pistol"],
        ["Expert of CV-10S", "Kill 1000 enemies with the CV-10 Silenced Pistol"],
        ["Expert of Egg", "Kill 1000 enemies with the T-Rex Egg"],
        ["Expert of Energy Carbine", "Kill 1000 enemies with the TREK Energy Carbine"],
        ["Expert of Flamethrower", "Kill 1000 enemies with the TREK FlameThrower"],
        ["Expert of FNC-30", "Kill 1000 enemies with the FNC-30 Burst Rifle"],
        ["Expert of Gatling Gun", "Kill 1000 enemies with the TREK Gatling Gun"],
        ["Expert of Grenade Launcher", "Kill 1000 enemies with the TREK Grenade Launcher"],
        ["Expert of Laser Rifle", "Kill 1000 enemies with the TREK Laser Rifle"],
        ["Expert of Longbow", "Kill 1000 enemies with the TREK Longbow"],
        ["Expert of Longshot", "Kill 1000 enemies with the TREK Longshot Bolt-action Sniper Rilfe"],
        ["Expert of M-40", "Kill 1000 enemies with the M-40 Magnum"],
        ["Expert of MX-4", "Kill 1000 enemies with the MX-4 Silenced SMG"],
        ["Expert of Revival", "Revive 1000 downed teammates with the Revital Kit"],
        ["Expert of RNC-44", "Kill 1000 enemies with the RNC-44 SMG"],
        ["Expert of RNC-9", "Kill 1000 enemies with the RNC-9 Automatic Pistol"],
        ["Expert of Rocket Launcher", "Kill 1000 enemies with the TREK Rocket Launcher"],
        ["Expert of T-99", "Kill 1000 enemies with the T-99 Dual Pistols"],
        ["Expert of Teleportation", "Teleport 1000 times"],
        ["Expert of The Blade", "Kill 1000 enemies with the TREK Ion Blade"],
        ["Expert of TREK-12", "Kill 1000 enemies with the TREK-12 Shotgun"],
        ["Expert of TREK-13", "Kill 1000 enemies with the TREK-13 Automatic Shotgun"],
        ["Expert of TREK-22", "Kill 1000 enemies with the TREK-22 Semi-Automatic Sniper Rifle"],
        ["Expert of TREK-47", "Kill 1000 enemies with the TREK-47 Automatic Rifle"],
        ["Expert of TREK-79", "Kill 1000 enemies with the TREK-79 LMG"],
        ["Expert of Utility", "Repair a broken generator 1000 times with a Utility Gun"],
        ["Expert of X-R8", "Kill 1000 enemies with the X-R8 Tactial Carbine"],
        ["Fancy Dance Moves", "Use 100 Sabre Combos"],
        ["Fear and Loathing in Cretaceous", "Run over 1,000 Raptors"],
        ["For the love of the game!", "Complete a map on hard mode"],
        ["Full Round", "Earn 10,000 Total Assists"],
        ["Get to the Choppa!", "Pilot a VTOL for 1 hour"],
        ["Gibber", "Play 10 Instagib Matches"],
        ["Gibbest", "Play 25 Instagib Matches"],
        ["Gibby", "Play 5 Instagib Matches"],
        ["Glass Ceiling!", "Reach the top of the world"],
        ["Got the Moves Like Jagger!", "Roll out of a T-Rex chomp"],
        ["Hang Glider!", "Get picked up 1,000 times"],
        ["Hello, Iguana", "Purchase the Iguana APC"],
        ["Helping Hand", "Earn 5,000 Total Assists"],
        ["Here to Stay", "Spend 1 Game Month in the Arctic"],
        ["Hold Me", "Complete Wave 3 on Insane"],
        ["How Do I Look?", "Activate a Dinosaur Skin in the 'Loadout'"],
        ["I Am Annoying", "Taunt 100 times"],
        ["I Am Fancy", "Reach Level 25"],
        ["I Am Your Father", "Kill 100 people in Duels"],
        ["I'll Be on the Roof Pooping in the Chimney", "Complete Wave 9 on Insane"],
        ["I'm a Dinosaur", "Play as all 10 Dinosaurs in Rampage"],
        ["I'm a Ninja", "Cloak-kill 100 Dinosaurs"],
        ["I'm Holding Them Back", "Get revived 100 times"],
        ["I've Got Your Back", "Revive 100 Teammates"],
        ["Ice Age", "Kill 25,000 dinosaurs"],
        ["It Puts the Lotion", "Complete Wave 4 on Insane"],
        ["Just Beginning", "Spend 1 Game Day in the Arctic"],
        ["Keen Eye", "Find All Active Loot Crates in the Arctic"],
        ["Kick Them While They're Down!", "Punch a dinosaur to death when you have 10 or less health"],
        ["Legend", "Beat Conquest Without Dying From the Start"],
        ["Let's Get Fired Up", "Obtain 100 Flamethrower Sentry Turret Kills"],
        ["Like Shooting Raptors in a Barrel!", "Kill 1,000 Raptors with the buggy turret"],
        ["LOOT!", "Find a Loot Crate"],
        ["Lunatic", "Complete Wave 6 on Insane"],
        ["MacGuyver", "Get a kill with every weapon"],
        ["Make it Rain!", "Spend 5,000,000 Credits"],
        ["Manly Man", "Kill 100 dinosaurs"],
        ["Master Duelie", "Play 25 Duel Matches"],
        ["Master of C-9", "Kill 500 enemies with the C-9 Revolver"],
        ["Master of Cryo", "Kill 500 enemies with the TREK Cryo Knife"],
        ["Master of CV-10", "Kill 500 enemies with the CV-10 Pistol"],
        ["Master of CV-10S", "Kill 500 enemies with the CV-10 Silenced Pistol"],
        ["Master of Egg", "Kill 500 enemies with the T-Rex Egg"],
        ["Master of Energy Carbine", "Kill 500 enemies with the TREK Energy Carbine"],
        ["Master of Flamerthrower", "Kill 500 enemies with the TREK Flamethrower"],
        ["Master of FNC-30", "Kill 500 enemies with the FNC-30 Burst Rifle"],
        ["Master of Gatling Gun", "Kill 500 enemies with the TREK Gatling Gun"],
        ["Master of Grenade Launcher", "Kill 500 enemies with the TREK Grenade Launcher"],
        ["Master of Laser Rifle", "Kill 500 enemies with the TREK Laser Rifle"],
        ["Master of Longbow", "Kill 500 enemies with the TREK Longbow"],
        ["Master of Longshot", "Kill 500 enemies with the TREK Longshot"],
        ["Master of M-40", "Kill 500 enemies with the M-40 Magnum"],
        ["Master of MX-4", "Kill 500 enemies with the MX-4 Silenced SMG"],
        ["Master of Revival", "Revive 500 downed teammates with the Revital Kit"],
        ["Master of RNC-44", "Kill 500 enemies with the RNC-44 SMG"],
        ["Master of RNC-9", "Kill 500 enemies with the RNC-9 Automatic Pistol"],
        ["Master of Rocket Launcher", "Kill 500 enemies with the TREK Rocket Launcher"],
        ["Master of T-99", "Kill 500 enemies with the T-99 Dual Pistols"],
        ["Master of Teleportation", "Teleport 500 times"],
        ["Master of The Blade", "Kill 500 enemies with the TREK Ion Blade"],
        ["Master of TREK-12", "Kill 500 enemies with the TREK-12 Shotgun"],
        ["Master of TREK-13", "Kill 500 enemies with the TREK-13 Auto Shotgun"],
        ["Master of TREK-22", "Kill 500 enemies with the TREK-22 Semi-Automatic Sniper Rifle"],
        ["Master of TREK-47", "Kill 500 enemies with the TREK-47 Automatic Rifle"],
        ["Master of TREK-79", "Kill 500 enemies with the TREK-79 LMG"],
        ["Master of Utility", "Repair 500 broken generators with the Utility Gun"],
        ["Master of X-R8", "Kill 500 enemies with the X-R8 Tactical Carbine"],
        ["Maximum Awesome", "Reach Level 50"],
        ["Maximum Huge", "Play 100 King of the Hill Matches"],
        ["Maximum Jump", "Power jump 500 times"],
        ["Maximum Ninja", "Play 100 Team Elimination Matches"],
        ["Maximum Rampage", "Play 100 Rampage Matches"],
        ["Maximum Rocket-Man", "Play 100 Free-For-All Matches"],
        ["Maximum Survival", "Play 100 Survival Matches"],
        ["Maybe You Can After All", "Spend 1 Game Week in the Arctic"],
        ["Meteor Shower", "Kill 1000 dinosaurs"],
        ["Mistress of Mystery", "Spend 1 hour cloaked"],
        ["Money Grabber!", "Spend 100,000 Credits"],
        ["Money Maker", "Spend 1,000,000 Credits"],
        ["More Loot!", "Find 25 Loot Crates"],
        ["More Power!", "Heal 50 Generators back to 100% health"],
        ["More Room", "Reach Level 15"],
        ["Most Impressive!", "Complete 50 Mission Objectives"],
        ["MVP", "Top the scoreboard 10 times on teams of 4 or more players and win the round"],
        ["New Toy", "Reach Level 10"],
        ["Ninja 1.0", "Play 10 Team Elimination Matches"],
        ["Ninja 2.0", "Play 25 Team Elimination Matches"],
        ["Ninja 3.0", "Play 50 Team Elimination Matches"],
        ["No Place Like Home!", "Capture, secure and complete a total of 100 bases"],
        ["Not Bad!", "Complete 25 Mission Objectives"],
        ["Party Bus", "Ride in a 5-Person Iguana APC"],
        ["Peaktastic", "Beat Peak on Hard"],
        ["Pirate's Treasure", "Find 1,000 Loot Crates"],
        ["Rampage 1.0", "Play 10 Rampage Matches"],
        ["Rampage 2.0", "Play 25 Rampage Matches"],
        ["Rampage 3.0", "Play 50 Rampage Matches"],
        ["Rampage Master", "Collect 2 Eggs in one Match"],
        ["Raptor Hood", "Pop 100 Raptor heads with the TREK Longbow"],
        ["Raupi Begone", "Beat Raupi on Hard"],
        ["Rebel Scum", "Kill 100 Ion Blade wielding opponents with a gun"],
        ["Riding Along In My Automobile", "Spend 10 hours in vehicles"],
        ["Rocket-Man 1.0", "Play 10 Free-For-All Matches"],
        ["Rocket-Man 2.0", "Play 25 Free-For-All Matches"],
        ["Rocket-Man 3.0", "Play 50 Free-For-All Matches"],
        ["Rocketeer", "Spend 5 hours Jetpacking"],
        ["Round 2", "Spend 2 Game Days in the Arctic"],
        ["Sally Slapper!", "Punch a T-Rex in the face 100 times"],
        ["Say Hello To My Little Friends", "Obtain 100 Rocket Sentry Turret Kills"],
        ["Shop-a-Holic", "Purchase every weapon"],
        ["Slaughter Master", "Survive for over 10 Minutes on Slaughter"],
        ["Slippery Slopes", "Beat Slopes on Hard"],
        ["Spiral Buddy", "Win a game with a Developer or someone who already has this achievement"],
        ["Spiral Troll!", "Kill a developer or someone who has killed a developer"],
        ["Strike Me Down", "Beat Strike on Hard"],
        ["Survival 1.0", "Play 10 Survival Matches"],
        ["Survival 2.0", "Play 25 Survival Matches"],
        ["Survival 3.0", "Play 50 Survival Matches"],
        ["Survival Master", "Get 500 Kills in One Match"],
        ["Survivalist!", "Kill 100 dinosaurs without dying"],
        ["Tank. Beats. Everything!", "Kill 100 Dinosaurs with the Cobra Tank"],
        ["Teammate From Hell!", "Drive a vehicle full of buddies to their deaths"],
        ["That's All She Wrote", "Complete Wave 10 on Insane"],
        ["That's Disgusting", "Feed on 100 dead Raptors with the Vampire Augmentation"],
        ["The Dude on the Toilet", "Get eaten by a T-Rex"],
        ["The Vampire", "Purchase the Vampire Augmentation 10 times"],
        ["The Wanderer", "Be 1,000 meters from the current base during a wave"],
        ["The Wolverine", "Purchase the Wolverine Augmentation 10 times"],
        ["This Is Fancy", "Reach Level 20"],
        ["This Isn't Too Bad", "Complete Wave 2 on Insane"],
        ["Tight Pennies!", "Start at wave 1, win, and spend less than 5,000 Credits"],
        ["Toon Town Master", "Play All Toon Based Maps"],
        ["Turok, Dinosaur Hunter!", "kill 50,000 dinosaurs"],
        ["Tyson!", "Punch a T-Rex, Raptor and Rham to death"],
        ["Upgrade Complete", "Reach Level 5"],
        ["Useless Teammate!", "Kill 1 or less dinos in 3 consecutive waves"],
        ["Volcanic Eruption", "Kill 10,000 dinosaurs"],
        ["Wade!", "Spend 1 hour healing"],
        ["Welcome to Arid", "Win a round on Arid (any difficulty)"],
        ["Welcome to Covan", "Win a match on Covan"],
        ["Welcome to Depth", "Win a match on Depth"],
        ["Welcome to Eden", "Win a match on Eden"],
        ["Welcome to Nanko", "Play 10 matches on Nanko"],
        ["Welcome to Peak", "Win a round on Peak(any difficulty)"],
        ["Welcome to Persistence", "Reach Level 1"],
        ["Welcome to Raupi", "Win a round on Raupi (any difficulty)"],
        ["Welcome to Trine", "Play 10 matches on Trine"],
        ["Welcome to Your Padded Cell", "Complete Wave 7 on Insane"],
        ["What's For Dinner?", "Eat 100 Humans in Rampage"],
        ["When's Lunch?", "Kill 100 Player-Controlled Dinosaurs in Rampage"],
        ["Where Are My Pills?", "Complete Wave 8 on Insane"],
        ["Where's Waldo?", "Find a hidden vehicle"],
        ["Who Needs Teammates!", "Kill a T-Rex by yourself"],
        ["Wild Boar", "Kill a Wild DInosaur in the Arctic"],
        ["You Are The One", "Kill 5 dinosaurs while in slow motion"],
        ["You're Redikulous", "Beat Redikulous Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 251, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
