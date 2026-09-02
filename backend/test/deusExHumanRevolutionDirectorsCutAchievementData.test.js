import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deus-ex-human-revolution-directors-cut.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 238010 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("deus-ex-human-revolution-directors-cut");

test("getPlannerData('deus-ex-human-revolution-directors-cut') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for deus-ex-human-revolution-directors-cut");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Deus Ex: Human Revolution - Director's Cut achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Deus Ex: Human Revolution - Director's Cut achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Deus Ex: Human Revolution - Director's Cut achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acquaintances Forgotten", "Follow Pritchard's lead to uncover the truth."],
        ["All of the Above", "Rescue every prisoner from the detention area (The Missing Link DLC)."],
        ["Apex Predator", "Perform a takedown on Burke without being detected (The Missing Link DLC)."],
        ["Back Stage Pass", "Find Quinn's secret room (The Missing Link DLC)."],
        ["Balls", "Play with the arcade basketballs easter egg."],
        ["Bar Tab", "Help the Hive Bartender settle a tab."],
        ["Cloak & Daggers", "Deal with the man in the shadows."],
        ["Consciousness is Over-rated", "Knock out at least 100 enemies in a single playthrough."],
        ["Corporate Warfare", "Protect a client's interests by performing a less-than-hostile takeover."],
        ["Darker Shades", "Convince a fast-talking bartender to let you see Tong Si Hung."],
        ["Deus Ex Machina", "Experience all the different endings that Deus Ex: Human Revolution - Director's Cut has to offer."],
        ["Doctorate", "Read all 29 XP books within a single playthrough."],
        ["Factory Zero", "Survive The Missing Link using no Praxis kits, weapons, or explosives (The Missing Link DLC)."],
        ["First Hack", "Perform your first Hack successfully."],
        ["First Takedown", "Perform your first Takedown. Civilians don't count, so be nice."],
        ["Foxiest of the Hounds", "Complete Deus Ex: Human Revolution - Director's Cut without setting off any alarms."],
        ["Ghost", "Get through an entire hostile area without being spotted."],
        ["Good Samaritan", "Repair the malfunctioning life-support pod to save the stowaways (The Missing Link DLC)."],
        ["Good Soul", "Against all odds, save Faridah Malik's life."],
        ["Guardian Angel", "Pay poor Jaya's debt in full."],
        ["Gun Nut", "Fully upgrade one of your weapons."],
        ["Hangar 18", "Find and read the secret message."],
        ["Hax0r1!", "Successfully hack at least 50 devices within the same playthrough."],
        ["Kevorkian Complex", "Grant a dying man his final request."],
        ["Ladies Man", "Convince Mengyao to reveal information about the Hyron Project."],
        ["Legend", "Complete Deus Ex: Human Revolution - Director's Cut at its hardest setting without ever changing the difficulty."],
        ["Lesser Evil", "Deal with Mr. Carella's indiscretion."],
        ["Lucky Guess", "Correctly guess the code to disarm Jacob's bombs."],
        ["Motherly Ties", "Put a grieving mother's doubts to rest."],
        ["Never Forget", "Return to and revisit your own stasis pod (The Missing Link DLC)."],
        ["Never Stop Looking", "Escape Rifleman Bank Station (The Missing Link DLC)."],
        ["Old School Gamer", "Find all the hidden story items in Megan's office."],
        ["Opportunist", "Perform 50 takedowns within the same playthrough. (Civilians don't count)."],
        ["Out of the Frying Pan", "Reach Rifleman Bank Station (The Missing Link DLC)."],
        ["Pacifist", "Complete Deus Ex: Human Revolution - Director's Cut without anyone dying by your hand. (Boss fights don't count)."],
        ["Rotten Business", "Help a lady in the oldest of professions clean house."],
        ["Sentimental Value", "Keep Megan's bracelet for yourself."],
        ["Shanghai Justice", "It may take some sleuthing, but justice must be served."],
        ["Smash the State", "Help Officer Nicholas take out the trash."],
        ["Super Sleuth", "Nail your case against Lee Hong."],
        ["Talion A.D.", "Descend into the bowels of an urban jungle and confront a warrior-priest."],
        ["That Old Adage", "Discover that your CASIE social augmentation does not work on everyone (The Missing Link DLC)."],
        ["The Bull", "Defeat Lawrence Barrett, elite member of a secret mercenary hit squad."],
        ["The D Project", "Watch the entire credits and see the surprise at the end."],
        ["The Desk Job", "Convince Wayne Haas to let you into the morgue."],
        ["The End", "Defeat Zhao Yun Ru and destroy the Hyron Project."],
        ["The Fall", "Send Diamond Chan on the trip of a lifetime."],
        ["The Final Countdown", "Convince Hugh Darrow to give you the code."],
        ["The Last Straw", "Talk Doctor Isaias Sandoval out of suicide."],
        ["The learn'd Scholar", "Use every hypnotic Smart Puck in one playthrough (The Missing Link DLC)."],
        ["The Mantis", "Defeat Yelena Fedorova, elite member of a secret mercenary hit squad."],
        ["The Snake", "Defeat Jaron Namir, leader of Belltower's elite special operations unit."],
        ["The Take", "Accept O'Malley's blood money and let him go."],
        ["The Throwdown", "Convince politician Bill Taggart to tell the truth in public."],
        ["Transhumanist", "Fully upgrade your first augmentation of choice."],
        ["Trooper", "Complete Deus Ex: Human Revolution - Director's Cut."],
        ["Unforeseen Consequence", "Convince Zeke Sanders to let his hostage go."],
        ["Up the Ante!", "Upgrade your first weapon of choice."],
        ["Yes Boss", "Have an argument with your boss, David Sarif - and win it."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
