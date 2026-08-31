import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/payday-the-heist.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 24240 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("payday-the-heist");

test("getPlannerData('payday-the-heist') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for payday-the-heist");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every PAYDAY: The Heist achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every PAYDAY: The Heist achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 PAYDAY: The Heist achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...or was it the blue one?", "In NO MERCY, cut the correct wire opening the ICU door security system. To complete this challenge, you will have to have played the heist from the start."],
        ["A bridge too far!", "Complete the GREEN BRIDGE on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Afraid of the dark", "Beat NO MERCY on hard or above, getting the power back up within 5 seconds of it being shut down. To complete this challenge, you will have to have played the heist from the start."],
        ["Are there more than two?", "Find ten money bundles in PANIC ROOM."],
        ["Are those the blue ones?", "Steal all the sapphires in DIAMOND HEIST on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Are you ready yet?", "In DIAMOND HEIST, get Bain to come back for you at least 7 times on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Bad code", "Beat DIAMOND HEIST on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Bank on me", "Beat FIRST WORLD BANK on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Beat the shield", "Beat GREEN BRIDGE on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Blood in, blood out", "Trade all the butchers in SLAUGHTERHOUSE. To complete this challenge, you will have to have played the heist from the start."],
        ["Blow-out", "Beat UNDERCOVER with everyone in the crew only using the GL40. To complete this challenge, everyone in your crew will have to have played the heist from the start. Using melee does not count towards this challenge!"],
        ["Bomb man", "In DIAMOND HEIST, defeat all twelve Patrol Guards using only trip mines. To complete this challenge, you will have to have played the heist from the start."],
        ["Brush with death", "Beat PANIC ROOM on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["But how?", "Get the armored car to drop without shooting at it in SLAUGHTERHOUSE. To complete this challenge, you will have to have played the heist from the start."],
        ["Cheney?", "Defeat a Bulldozer with a shotgun."],
        ["Civil disobedience", "Defeat 100 law enforcers in a single heist."],
        ["Crack-bang", "Gain a level in the Sharpshooter tree with your last kill being a Sniper."],
        ["Crowd control", "Beat COUNTERFEIT without letting any hostage escape or die. To complete this challenge, you will have to have played the heist from the start."],
        ["Darkness", "On GREEN BRIDGE, destroy all the lights in the main scaffolding tower. To complete this challenge, you will have to have played the heist from the start."],
        ["Detective Gadget", "Beat any heist using the STRYK Pistol, AK Rifle, GL40 Grenade Launcher, Toolkit upgrade, Sentry Gun equipment and Big Game Hunters crew bonus. To complete this challenge, you will have to have played the heist from the start."],
        ["Diplomatic", "Perform a hostage trade."],
        ["Dodge this!", "Beat a heist on normal difficulty or above, having killed a Bulldozer without taking damage from any Bulldozer. To complete this challenge, you will have to have played the heist from the start."],
        ["Don't lose face", "Beat all heists on OVERKILL difficulty without anyone getting traded from custody. To complete this challenge, you will have to have played the heist from the start."],
        ["Don't panic", "Complete NO MERCY on hard or OVERKILL without any civilian raising the alarm. To complete this challenge, you will have to have played the heist from the start."],
        ["Eagle eyes", "Point out a special enemy using the \"shout out\" command."],
        ["Easy street", "Beat HEAT STREET on OVERKILL difficulty, with your group accuracy being at 60% or higher. To complete this challenge, everyone in your crew will have to have played the heist from the start."],
        ["Federal crime", "Defeat 25 FBI agents in a row."],
        ["Four more years", "Reach level 145. This gives you the presidential masks for further campaigning."],
        ["Gold digger", "Beat SLAUGHTERHOUSE within 15 minutes, taking all the gold. To complete this challenge, you will have to have played the heist from the start."],
        ["Hills Street Blues", "Beat HEAT STREET on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Hot lava", "Don't let any law enforcers reach the graffiti on the center of the roof in PANIC ROOM from the SECURE THE ROOF objective until the ESCAPE objective on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["I ain't afraid no more", "Gain a level in the Assault tree during an assault."],
        ["I pushed the button and lived!", "In DIAMOND HEIST, get the big diamond and escape on OVERKILL difficulty with you and all your team mates alive. To complete this challenge, you will have to have played the heist from the start."],
        ["In for a dime, in for a dollar", "Complete UNDERCOVER on OVERKILL 145+ difficulty."],
        ["Intimidating", "Get a Heavy SWAT to give up."],
        ["Last Christmas", "In multiplayer, find a Christmas present in any heist."],
        ["Last man standing", "Beat a heist after having been the only one alive. (4 teammates)."],
        ["Lay on hands", "Gain a level in the Support tree while reviving a teammate."],
        ["Left for dead", "Finish a heist in custody while all your team mates are alive. (4 teammates)."],
        ["Lots of pigs, but no pigs", "Beat SLAUGHTERHOUSE on OVERKILL 145+ difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["No photos", "Destroy all the cameras in FIRST WORLD BANK within 10 seconds of drawing your weapons. To complete this challenge, you will have to have played the heist from the start."],
        ["Noob herder", "Beat any heist on OVERKILL difficulty with three other players who are all using the Noob Lube perk. To complete this challenge, you will have to have played the heist from the start."],
        ["One shot, one kill - repeat", "Get 30 kills using 30 shots, using only the M308 Rifle."],
        ["OVERDRILL", " Solve the PAYDAY SECRET on any difficulty with any mask and gain access to the OVERVAULT. To complete this challenge, you will have to have played the heist from the start."],
        ["Pacifist", "Beat COUNTERFEIT on hard difficulty or above without killing any law enforcers or civilians. To complete this challenge, everyone in your crew will have to have played the heist from the start."],
        ["PAYDAY", "Aquire one billion dollars in total cash. One. BILLION. Dollars."],
        ["Quick draw", "In PANIC ROOM, kill all armed thugs in and around the apartment building within 60 seconds of you and your crew drawing your weapons. To complete this challenge, you will have to have played the heist from the start."],
        ["Quick hands", "On COUNTERFEIT, manage to defuse all C4 charges."],
        ["Shinobi", "Bypassing all 3 consoles before raising the alarm, beat DIAMOND HEIST on hard or OVERKILL difficulty. To complete this challenge, you will have to have played the heist from the start."],
        ["Stand together", "Beat HEAT STREET on normal difficulty or above without anyone getting downed. To complete this challenge, you will have to have played the heist from the start."],
        ["That's the wrong door, again!", "Complete NO MERCY on OVERKILL difficulty, having sawed open all three ICU security doors. To complete this challenge, you will have to have played the heist from the start."],
        ["The Saviour", "On UNDERCOVER, place 20 planks by yourself on windows, vents or fences."],
        ["Under Pressure", "Complete COUNTERFEIT on OVERKILL 145+ difficulty."],
        ["Windowlicker", "Defeat a law enforcer planting C4 in FIRST WORLD BANK on hard difficulty or above. To complete this challenge, you will have to have played the heist from the start."],
        ["You are GOLDEN! OVERKILL salutes you!", "Beat all heists on OVERKILL 145+ difficulty and show them all you are on top! Completing this will make you golden!"],
        ["You can run but you can't hide", "In PANIC ROOM, take the key from Chavez within the first 45 seconds of starting the mission. To complete this challenge, you will have to have played the heist from the start."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
