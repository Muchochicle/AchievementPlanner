import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/borderlands-game-of-the-year.js";

test("the Borderlands GOTY guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "borderlands-game-of-the-year-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "borderlands-game-of-the-year");

});

test("the Borderlands GOTY guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Bosses",
            "Leveling, Exploration & Combat",
            "Co-op, Weapons & Class",
            "Zombie Island of Dr. Ned",
            "Mad Moxxi's Underdome Riot",
            "The Secret Armory of General Knoxx",
            "Claptrap's New Robot Revolution",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Borderlands GOTY achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Paid in Fyrestone", "Made in Fyrestone", "Paid in New Haven", "Made in New Haven", "My Brother is an Italian Plumber", "12 Days of Pandora", "Wanted: Sledge", "Wanted: Krom", "Wanted: Flynt", "Destroyed the Hive", "Destroyed the Destroyer", "Speedy McSpeederton", "You call this archaeology?", "Ding! Newbie", "Ding! Novice", "Ding! Expert", "Ding! Hardcore", "Ding! Sleepless", "Discovered Skag Gully", "Discovered Sledge's Safe House", "Discovered Headstone Mine", "Discovered Trash Coast", "Discovered The Scrapyard", "Discovered Krom's Canyon", "Discovered Crimson Lance Enclave", "Discovered Eridian Promontory", "Ding! Champion", "Get A Little Blood on the Tires", "Rootinest, Tootinest, Shootinest", "Pandora-dog Millionaire", "Fence", "Can't We Get BEYOND Thunderdome?", "Duel-icious", "Group LF Healer", "There's No \"I\" In \"Team\"", "United We Stand", "And They'll Tell Two Friends", "Weapon Aficionado", "You're on a boat!", "Duelinator", "Facemelter", "1.21 Gigawatts", "Pyro", "Master Exploder", "There are some who call me...Tim", "Fully Loaded", "Truly Outrageous", "Careful, He Bites", "Reckless Abandon", "Down in Front!", "House of the Ned", "Jakobs Fodder", "Night of the Living Ned", "Ned's Undead, Baby", "Braaaaaaaaaaaaains!", "Small Tournament", "Hell-Burbia", "The Angelic Ruins", "The Gully", "Big Tournament", "Making a Monster", "Athena, Out", "Depot Demolition", "Vincible", "Sneaky Little Buggers", "Speed Kills", "Ding! Overleveled", "Ding! Overleveled to 11", "Completionist", "Sucker born every minute", "Tourist", "Knoxx-Trap", "Steele-Trap", "Ned-Trap", "Muerte la robo-lución", "The Collector", "It's so realistic!", "The Lubricator", "Bobble-trap", "What a party!"];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
