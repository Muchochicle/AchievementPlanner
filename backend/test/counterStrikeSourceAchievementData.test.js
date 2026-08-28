import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/counter-strike-source.json - 147 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 240 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 147 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("counter-strike-source");

test("getPlannerData('counter-strike-source') returns real planner data with 147 curated achievements", () => {

    assert.ok(game, "expected real planner data for counter-strike-source");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 147);

});

test("every Counter-Strike: Source achievement has a unique id from 1 to 147 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 147 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 147);
    assert.strictEqual(new Set(apinames).size, 147);

});

test("every Counter-Strike: Source achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 147 Counter-Strike: Source achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        [".40 Dual Elites Expert", "Kill 100 enemy players with the .40 Dual Elites"],
        ["228 Compact Expert", "Kill 200 enemy players with the 228 Compact"],
        ["9x19 Sidearm Expert", "Kill 200 enemy players with the 9x19 Sidearm"],
        ["A Million Points of Blight", "Inflict 1,000,000 total points of damage to enemy players"],
        ["A World of Pane", "Shoot out 14 windows in a single round on cs_office"],
        ["Aerial Necrobatics", "Kill an airborne enemy while you are also airborne"],
        ["Akimbo King", "Use Dual Elites to kill an enemy player that also has Dual Elites equipped"],
        ["Ammo Conservation", "Kill two enemy players with a single bullet"],
        ["Assault Map Veteran", "Win 100 rounds on the CS_Assault map"],
        ["Avenging Angel", "Kill an enemy player in the same round as they kill a player on your friends list"],
        ["Aztec Map Veteran", "Win 100 rounds on the DE_Aztec map"],
        ["Ballistic", "Kill 5 enemy players within 15 seconds"],
        ["Battle Sight Zero", "Kill 250 enemy players with headshots"],
        ["Black Bag Operation", "Win a round while making no footstep noise and killing at least one enemy"],
        ["Blast Will and Testament", "Win a round by picking up the bomb from a fallen comrade and successfully planting it"],
        ["Blind Ambition", "Kill a total of 25 enemy players blinded by flashbangs"],
        ["Blind Fury", "Kill an enemy player while you are blinded from a flashbang"],
        ["Blitzkrieg", "Win a round in less than 30 seconds (against at least 5 enemy players)"],
        ["Blood Money", "Earn $50,000,000 total cash"],
        ["Body Bagger", "Kill 25 enemies"],
        ["Boomala Boomala", "Plant 100 bombs"],
        ["Bullpup Expert", "Kill 500 enemy players with the Bullpup"],
        ["Bunny Hunt", "Kill an airborne enemy"],
        ["Can't Keep a Good Man Down", "Kill a total of 20 enemy players that are dominating you"],
        ["Chateau Map Veteran", "Win 100 rounds on the DE_Chateau map"],
        ["Clan Warfare", "Win a match of at least 10 players where the entirety of each team is composed of a single clan."],
        ["Clarion 5.56 Expert", "Kill 500 enemy players with the Clarion 5.56"],
        ["Clean Sweep", "Kill the entire opposing team without any members of your team taking any damage"],
        ["Clusterstruck", "Kill 5 players in a C4 blast"],
        ["Cobblestone Map Veteran", "Win 100 rounds on the DE_Cbble map"],
        ["Cold War", "Win a round without your team killing any enemy players"],
        ["Combat Ready", "Defuse a bomb with a kit when it would have failed without one"],
        ["Command and Control", "Get a total of 100 kills on enemy players you are dominating"],
        ["Compound Map Veteran", "Win 100 rounds on the CS_Compound map"],
        ["Corpseman", "Kill 500 enemies"],
        ["Counter-Counter-Terrorist", "Kill a CT while he is defusing the bomb"],
        ["Cowboy Diplomacy", "Rescue 100 hostages"],
        ["CV-47 Expert", "Kill 1,000 enemy players with the CV-47"],
        ["D3/AU-1 Expert", "Kill 500 enemy players with the D3/AU-1"],
        ["Dead Man Stalking", "Kill an enemy while at 1 health"],
        ["Dead of Night", "Do 5,000 damage with nightvision active"],
        ["Dead Shepherd", "Kill an enemy player who is leading the hostages without injuring any hostages"],
        ["Death From Above", "Kill an enemy player while you are airborne"],
        ["Decimator", "Dominate a total of 10 enemy players"],
        ["Defuse This!", "Kill the defuser with an HE grenade"],
        ["Defusus Interruptus", "Stop defusing to kill a terrorist and then successfully finish defusing the bomb"],
        ["Dressed to Kill", "Start a round with all players on your team wearing the same uniform (at least 5 players)"],
        ["Dust Map Veteran", "Win 100 rounds on the DE_Dust map"],
        ["Dust2 Map Veteran", "Win 100 rounds on the DE_Dust2 map"],
        ["ES C90 Expert", "Kill 1,000 enemy players with the ES C90"],
        ["ES Five-Seven Expert", "Kill 100 enemy players with the ES Five-Seven"],
        ["Excessive Brutality", "Kill an enemy player 4 additional times while you are dominating them"],
        ["Expert Marksman", "Get a kill with every weapon"],
        ["Eye to Eye", "Kill a zoomed-in enemy sniper with a sniper rifle of your own"],
        ["Finishing Schooled", "Kill an enemy player who has been reduced to less than 5% health by other players"],
        ["Freed With Speed", "Rescue all hostages within 90 seconds"],
        ["Friendly Attire", "Start a round on the same team as 4 of your friends, with all of you wearing the same outfit"],
        ["Friendly Firearms", "Kill 100 enemy players with enemy weapons"],
        ["Gift Grab", "Collect three gifts dropped by opponents."],
        ["Give Piece a Chance", "Win 25 Pistol Rounds"],
        ["God of War", "Kill 10,000 enemies"],
        ["Good Shepherd", "Rescue all hostages in a single round"],
        ["Happy Camper", "Get two kills standing in the same spot with a zoomed sniper rifle."],
        ["Hat Trick", "Dominate three enemy players simultaneously"],
        ["Havana Map Veteran", "Win 100 rounds on the CS_Havana map"],
        ["HE Grenade Expert", "Kill 500 enemy players with the HE grenade"],
        ["Head Shred Redemption", "Kill 5 enemy players with headshots in a single round"],
        ["Hip Shot", "Kill an enemy with an un-zoomed sniper rifle"],
        ["IDF Defender Expert", "Kill 500 enemy players with the IDF Defender"],
        ["Inferno Map Veteran", "Win 100 rounds on the DE_Inferno map"],
        ["Ingram Mac-10 Expert", "Kill 500 enemy players with the Ingram Mac-10"],
        ["Insurgent", "Kill an enemy player that is dominating you"],
        ["Italy Map Veteran", "Win 100 rounds on the CS_Italy map"],
        ["Kill One, Get One Spree", "Kill an enemy player who is on a killing spree"],
        ["Killanthropist", "Donate 100 weapons to your teammates"],
        ["KM Sub-Machine Gun Expert", "Kill 1,000 enemy players with the KM Sub-Machine Gun"],
        ["KM Tactical .45 Expert", "Kill 200 enemy players with the KM Tactical .45"],
        ["KM UMP45 Expert", "Kill 1,000 enemy players with the KM UMP45"],
        ["Knife Expert", "Kill 100 enemy players with the knife"],
        ["Krieg 550 Commando Expert", "Kill 500 enemy players with the Krieg 550 Commando"],
        ["Krieg 552 Expert", "Kill 500 enemy players with the Krieg 552"],
        ["Leet-er of Men", "Win 5000 rounds"],
        ["Leone 12 Gauge Super Expert", "Kill 200 enemy players with the Leone 12 Gauge Super"],
        ["Leone YG1265 Auto Shotgun Expert", "Kill 200 enemy players with the Leone YG1265 Auto Shotgun"],
        ["Lost and F0wnd", "KIll an enemy player with a gun they dropped that round"],
        ["M249 Expert", "Kill 500 enemy players with the M249"],
        ["Mad Props", "Break 15 props in a single round"],
        ["Magic Bullet", "Kill an enemy with the last bullet in your magazine (excluding sniper rifles)"],
        ["Magnum Sniper Rifle Expert", "Kill 1,000 enemy players with the Magnum Sniper Rifle"],
        ["Make the Cut", "Win a knife fight"],
        ["Master At Arms", "Unlock every weapon kill achievement"],
        ["Maverick M4A1 Carbine Expert", "Kill 1,000 enemy players with the Maverick M4A1 Carbine"],
        ["Mercy Rule", "Kill the entire opposing team without any members of your team dying"],
        ["Militia Map Veteran", "Win 100 rounds on the CS_Militia map"],
        ["Newb World Order", "Win 10 rounds"],
        ["Night Hawk .50c Expert", "Kill 200 enemy players with the Night Hawk .50c"],
        ["Nuke Map Veteran", "Win 100 rounds on the DE_Nuke map"],
        ["Office Map Veteran", "Win 100 rounds on the CS_Office map"],
        ["Overkill", "Kill an opponent you are already dominating"],
        ["Participation Award", "Kill an enemy player within 3 seconds of them recovering a dropped bomb"],
        ["Piece Initiative", "Win 5 Pistol Rounds"],
        ["Piece Treaty", "Win 250 Pistol Rounds"],
        ["Piranesi Map Veteran", "Win 100 rounds on the DE_Piranesi map"],
        ["Pistol Master", "Unlock all 6 Pistol kill achievements"],
        ["Points in Your Favor", "Inflict 2,500 total points of damage to enemy players"],
        ["Port Map Veteran", "Win 100 rounds on the DE_Port map"],
        ["Premature Burial", "Kill an enemy with a grenade after you've died"],
        ["Primer", "Do at least 95% damage to an enemy who is then killed by a another player"],
        ["Pro-moted", "Win 200 rounds"],
        ["Prodigy Map Veteran", "Win 100 rounds on the DE_Prodigy map"],
        ["Repeat Offender", "Dominate an enemy player"],
        ["Rifle Master", "Unlock all 10 rifle kill achievements"],
        ["Rite of First Defusal", "Win a round by defusing a bomb"],
        ["Safety First", "Survive a shot to the head because you had the good sense to wear a helmet"],
        ["SAR Czar", "Rescue 500 hostages"],
        ["Schmidt Machine Pistol Expert", "Kill 500 enemy players with the Schmidt Machine Pistol"],
        ["Schmidt Scout Expert", "Kill 1,000 enemy players with the Schmidt Scout"],
        ["Second to None", "Successfully defuse a bomb with less than one second remaining"],
        ["Short Fuse", "Plant a bomb within 25 seconds"],
        ["Shot With Their Pants Down", "Kill an enemy player while they are reloading"],
        ["Shotgun Master", "Unlock both shotgun kill achievements"],
        ["Shrapnelproof", "Take 80 points of damage from enemy grenades and still survive the round"],
        ["Sknifed", "Kill a zoomed-in enemy sniper with a knife"],
        ["Snipe Hunter", "Kill 100 zoomed-in enemy snipers"],
        ["Someone Set Up Us The Bomb", "Win a round by planting a bomb"],
        ["Spoils of War", "Earn $2,500,000 total cash"],
        ["Spray and Pray", "Kill two enemy players while you are blinded from a flashbang"],
        ["Street Fighter", "Kill an enemy player with a knife during the pistol round"],
        ["Sub-Machine Gun Master", "Unlock all 5 sub-machine gun kill achievements"],
        ["Target-Hardened", "Survive damage from 5 different players within a round"],
        ["Ten Angry Men", "Get 10 kills on enemy players you are already dominating during a single match"],
        ["The Art of War", "Spray 100 decals"],
        ["The Bleeding Edge", "Win 100 knife fights"],
        ["The Cleaner", "Kill the entire enemy team (with at least 5 players) in a single round"],
        ["The Frugal Beret", "Win 10 rounds without dying and not spending any cash"],
        ["The Hurt Blocker", "Defuse 100 bombs"],
        ["The Immovable Object", "Kill an enemy player who has just killed 10 of your teammates in a single round"],
        ["The Road to Hell", "Blind an enemy player who then kills a teammate"],
        ["The Unstoppable Force", "Kill 10 enemy players in a single round"],
        ["Three the Hard Way", "Kill 3 enemy players with a single HE grenade"],
        ["Tides Map Veteran", "Win 100 rounds on the DE_Tides map"],
        ["Train Map Veteran", "Win 100 rounds on the DE_Train map"],
        ["Variety Hour", "Get kills with 5 different guns in a round"],
        ["War Bonds", "Earn $125,000 total cash"],
        ["War of Attrition", "Be the last player alive in a round (with at least 5 players on your team)"],
        ["Wild Gooseman Chase", "As the last living terrorist, distract a defuser long enough for the bomb to explode"],
        ["You've Made Your Points", "Inflict 50,000 total points of damage to enemy players"],
    ];

    assert.strictEqual(officialAchievements.length, 147, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
