import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lego-star-wars-the-force-awakens.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 438640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("lego-star-wars-the-force-awakens");

test("getPlannerData('lego-star-wars-the-force-awakens') returns real planner data with 69 curated achievements", () => {

    assert.ok(game, "expected real planner data for lego-star-wars-the-force-awakens");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 69);

});

test("every LEGO Star Wars: The Force Awakens achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every LEGO Star Wars: The Force Awakens achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 69 LEGO Star Wars: The Force Awakens achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...But At A Terrible Cost", "Achieve ''True Jedi'' in ''The Phantom Limb''"],
        ["...What Was The Second Time?", "Complete TFA Chapter 4 - The Eravana"],
        ["60 Portions!", "Complete all Scavenger Missions"],
        ["A Bag Full Of Explosives", "Complete TFA Chapter 9 - Destroy Starkiller Base"],
        ["A Big Deal In The Resistance", "Complete all Resistance Missions"],
        ["A Long Time Ago....", "Complete The Battle of Endor"],
        ["A Use For Scrap...", "Collect all Minikits within ''Poe's Quest for Survival''"],
        ["Another Textbook Landing", "Make a leap of faith to escape the First Order"],
        ["Anything Else?", "Destroy all computer terminals in Starkiller Shield Room as Kylo Ren"],
        ["Bow To The First Order!", "Complete all First Order missions"],
        ["Chewie, We're Home", "Play as Han Solo (Classic) and Chewbacca on the Millennium Falcon"],
        ["Classified? Me Too.", "Complete TFA Chapter 2 - Escape From The Finalizer"],
        ["Crush The First Order", "During the Blaster Battle, crush the First Order by any means necessary"],
        ["Cryptosurgeon", "Create a custom character"],
        ["Don't Get Cocky!", "Defeat 100 TIE Fighters"],
        ["Don't Let These Dogs Scare You", "Complete TFA Chapter 6 - Battle of Takodana"],
        ["Eyes Of A Man Who Wants To Run", "Complete TFA Chapter 5 - Maz's Castle"],
        ["Family Reunion", "Have Kylo Ren and Han Solo in the same party"],
        ["Force Is Strong With This One", "Achieve 100% Completion"],
        ["Greatest Pilot I've Ever Met", "Avoid all of the Strus Clan speeder traps"],
        ["He's No Good To Me Dead", "Complete all Bounty Hunts"],
        ["Hello! Were You Looking For Me?", "Complete Trouble Over Taul"],
        ["Hey! That's Miiiiiiine!", "Play as Unkar Plutt on the Millennium Falcon"],
        ["Hey! That's Not Yours!", "Complete ''Escape from Starkiller Base''"],
        ["I Can Fly Anything", "Collect all Minikits in the game"],
        ["I Like That Wookiee...", "Complete a Free Play level playing as Maz Kanata and Chewbacca"],
        ["I Loosened The Lid", "Collect all Minikits within ''Escape from Starkiller Base''"],
        ["I Retrieved The Information...", "Collect all Minikits within ''The Phantom Limb''"],
        ["I Shall Deal With Her On My Own", "Capture Rey whilst deflecting all her blaster bolts"],
        ["I'll Come Back For You!", "Complete TFA Chapter 1 - Assault On Jakku"],
        ["I'll Remedy That Immediately Sir", "Achieve ''True Jedi'' in ''First Order Siege of Takodana''"],
        ["I'm Getting Pretty Good At This!", "Complete a Blaster Battle without dying"],
        ["Is There A Garbage Chute?", "Complete TFA Chapter 8 - Starkiller Sabotage"],
        ["It Belongs To Me!", "Complete TFA Chapter 10 - The Finale"],
        ["It's A Trap!", "Complete Ottegan Assault"],
        ["It's True. All of it...", "Complete New STAR WARS Adventure Levels"],
        ["Just A Scavenger", "Collect all Minikits in any level"],
        ["Kinda Like To Get Back To Work", "Complete ''Poe's Quest for Survival''"],
        ["Less Than 12 Parsecs", "Complete All Races"],
        ["Little Short For A Stormtrooper?", "Use a hat dispenser to put a stormtrooper helmet on a small Minifigure"],
        ["Never Tell Me The Odds", "Complete Poe To The Rescue"],
        ["Not The Droid You're Looking For", "Use the wrong type of droid on an access panel"],
        ["On Your Wing, Epsilon Six", "Collect all Minikits within ''First Order Siege of Takodana''"],
        ["Quick On The Draw", "In a blaster battle, have Han Solo defeat a character who is preparing an attack."],
        ["Quite The Marksman!", "Dispatch the Strus Clan using the smelliest means necessary"],
        ["Red Leader", "Purchase All Red Bricks"],
        ["Show Me, Grandfather", "Defeat Kylo Ren playing as Darth Vader"],
        ["Speechless", "Complete Luke's Island"],
        ["STOP.....Kylo Time", "As Kylo Ren, Force Freeze another character"],
        ["Stormtrooper Syndrome", "Miss your target 10 times in a blaster battle"],
        ["The Crimson Corsair", "Complete The Crimson Corsair"],
        ["The Force, It's Calling To You.", "Obtain ''True Jedi'' in any level"],
        ["The Garbage Will Do", "Complete TFA Chapter 3 - Niima Outpost"],
        ["The New Jedi Will Rise", "Collect ''True Jedi'' on all levels"],
        ["There Has Been An Awakening...", "Complete The Force Awakens"],
        ["They're Shooting At Both Of Us!", "Complete a Blaster Battle"],
        ["Those Beasts!", "Destroy Takodana Castle"],
        ["Thought We'd Never Find You", "Play in a Free Play party with Poe Dameron (Flight Suit) and BB-8"],
        ["Time To Earn Your Passage R3", "Achieve ''True Jedi'' in ''Escape from Starkiller Base''"],
        ["Traitor!", "Defeat Finn using FN-2199"],
        ["Travelled Too Far. Seen Too Much", "Complete Lor San Tekka's Return"],
        ["Unlearn What You Have Learned.", "Re-build a Multi-build object"],
        ["Used To Have A Bigger Crew", "Complete Rathtar Hunting"],
        ["We Are In Quite A Predicament", "Complete ''The Phantom Limb''"],
        ["We Must Have The Girl", "Complete ''First Order Siege of Takodana''"],
        ["We Need More Troops!", "Defeat 50 Stormtroopers"],
        ["What He Was Programmed To", "Defeat all the Taul Swarmers as PZ-99 in Story"],
        ["Who's Gonna Pick That Stuff Up?", "Achieve ''True Jedi'' in ''Poe's Quest for Survival''"],
        ["You Wouldn't Like It", "Complete TFA Chapter 7 - The Resistance"],
    ];

    assert.strictEqual(officialAchievements.length, 69, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
