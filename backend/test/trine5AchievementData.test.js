import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trine-5.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1436700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trine-5");

test("getPlannerData('trine-5') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for trine-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every Trine 5 achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every Trine 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 Trine 5 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ace Boom-Boom", "When a defeated Clockwork Mosquito is exploding, use the blast to destroy another Clockwork Mosquito"],
        ["As Luck Would Have It", "Complete a level without taking any damage"],
        ["Barbara! We're coming!", "Complete The Astral Observatory"],
        ["Better than Fireballs", "Use Amadeus to destroy a Clockwork Mosquito with a conjured item"],
        ["Boreal Bowling", "Use Amadeus's Spinning Ball to destroy a chilled enemy"],
        ["Cake and betrayal", "Complete The Astral Academy Gardens"],
        ["Casting the Hook", "Collect all experience in Smuggler's Way"],
        ["Checking out Everything", "Collect all experience in The Town Library"],
        ["Combing Through the Castle", "Collect all experience in The Royal Castle"],
        ["Driving Out the Evil", "Charge the Church Bell in the Garden of Eternal Shade"],
        ["Escaping, yet exploring", "Collect all experience in Dungeons and Sewer Rats"],
        ["Experienced Heroes", "Collect all experience throughout Acts I-V"],
        ["Ferocious Flora", "Destroy an enemy using a projectile from a Wall Spitter Plant"],
        ["Flimflam Doppelgangers", "Defeat the Clockwork Knights posing as the Heroes of Trine in the Red Rose Inn"],
        ["Floating Bounty", "Collect all experience in The Floating Archipelago"],
        ["Fragile: Handle with Care", "Complete a level without breaking any of the Wooden Boxes"],
        ["Friends in High Places, literally", "Meet all the three Astral Observatory Wizards"],
        ["Frolicking Fungi", "Find the Dancing Mushrooms in the Autumn Woods"],
        ["Gazing Stars", "Collect all experience in The Astral Observatory"],
        ["Go Out for a Spin", "During a single fight, make a Clockwork Guardian use the Spin Attack five times"],
        ["Goodbye, Sweet Gems", "Complete Gemstone Caverns"],
        ["Knight's Quest", "Collect all experience in The Bastion of Hope"],
        ["Lampaca Lands", "Complete The Floating Archipelago"],
        ["Leaving No Stone Unturned", "Collect all experience in Gemstone Caverns"],
        ["Looking High and Low", "Collect all experience in Brackenridge Path"],
        ["Made of Sugar", "Cross all the rivers in the Long Way to Town without touching the water"],
        ["Means to an end", "Complete The Long Way to Town"],
        ["Memoirs of a squire", "Complete The Bastion of Hope"],
        ["More than Soap Bubbles", "Collect all experience in The Well of Tranquility"],
        ["My Humble House", "Complete The Clockwork Palace"],
        ["One Fell Swoop", "Destroy two enemies with a single arrow"],
        ["Palace Pursuit", "Collect all experience in The Clockwork Palace"],
        ["Quiet as a mouse", "Complete The Town Library"],
        ["Scouting the Swamp", "Collect all experience in Petrified Marshes"],
        ["See-through Fisticuffs", "Destroy an enemy using an unarmed Pontius Clone"],
        ["Shady shortcut of a thief", "Complete Sinister Back Alleys"],
        ["Shipwide Search", "Collect all experience in The Magnificent Airship"],
        ["Sledding Stretch", "How far can you go with Pontius's Shield Sliding?"],
        ["Solitary spa time", "Complete The Well of Tranquility"],
        ["Some climbing to do", "Complete Brackenridge Path"],
        ["Stone into sand", "Complete The Garden of Eternal Shade"],
        ["Tentacle Tag", "Don't let Kraken's tentacles hit you in the Smuggler's Way"],
        ["The Autumn Light", "Complete Autumn Woods"],
        ["The Clockwork Conspiracy", "Thwart Sunny's and Goderic's plans"],
        ["The Empty Throne", "Complete The Dethroning"],
        ["The Famous Box Wizard", "Conjure a box to comply with the Shopkeeper's request in The Tallest Tower"],
        ["The Fashionmonger", "Collect all Bags and Hats throughout Acts I-V"],
        ["The Gossip", "Collect all Tidbits throughout Acts I-V"],
        ["The Great Council", "Complete The Royal Castle"],
        ["The Haunted Hunt", "Collect all experience in The Garden of Eternal Shade"],
        ["The Juiciest Fruits", "Collect all experience in The Astral Academy Gardens"],
        ["The Postmaster", "Collect all Letters throughout Acts I-V"],
        ["The Red Rose Inn Takeout", "Deliver the Pie from the Red Rose Inn to the end of the level"],
        ["The Shady Spoils", "Collect all experience in Sinister Back Alleys"],
        ["The shameful Villains of Trine", "Complete The Tallest Tower"],
        ["The Swamp Witch", "Complete Petrified Marshes"],
        ["The Thoroughfare Tracking", "Collect all experience in The Long Way to Town"],
        ["Trapped and forgotten", "Complete Dungeons and Sewer Rats"],
        ["Treasures from the Tower", "Collect all experience in The Tallest Tower"],
        ["Watery Woes", "Complete Smuggler's Way"],
        ["Wings and Metal and Hot Air", "Complete The Magnificent Airship"],
        ["Woodsy Wisdom", "Collect all experience in Autumn Woods"],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
