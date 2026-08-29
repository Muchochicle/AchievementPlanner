import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-riftbreaker.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 780310 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 54 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-riftbreaker");

test("getPlannerData('the-riftbreaker') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-riftbreaker");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every The Riftbreaker achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every The Riftbreaker achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 The Riftbreaker achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["AI driven ", "Simultaneously own over 100 AI cores. "],
        ["All Seeing Eye ", "Nothing gets by you. Cover at least 75% of any map with radar coverage. "],
        ["All that Glitters ", "Simultaneously mine every resource type in the game. "],
        ["Are we the bad guys now?", "Destroy 1000 enemies with HCM."],
        ["Ashley Phone Home ", "Build your first Communications Hub in the campaign or the survival mode. "],
        ["Ask AI, it won't lie. ", "Use the \"Search\" option in Research or Inventory. "],
        ["Beam Me Up ", "No need for Scotty here. Make 101 rift jumps. "],
        ["Book Worm ", "Read at least 75% of entries in the encyclopedia/bestiary "],
        ["Brittle", "Kill 100 enemies with the crystal walls' explosion."],
        ["But is it better than mine? ", "Find 50 weapons or upgrades. "],
        ["Death Metal", "Finish survival or story on metallic biome."],
        ["Decimation", "Kill 500 Flurians."],
        ["Dig or Die", "Kill 30 Drillgors."],
        ["Enter the Exit", "Finish survival mode in the Crystal Caverns biome or the Into The Dark story campaign."],
        ["Excalibur ", "Build an Extreme Quality Sword and fully mod it with 3 Extreme mods. "],
        ["Excavation Site", "Dig through or destroy 1000 cavern walls."],
        ["Final Form ", "Equip every single weapon slot for Mr. Riggs with extreme variant gear. "],
        ["For profit! ", "Dismantle 10 items at once. "],
        ["For science!", "Extract resources from Poogret’s poo – 10 times"],
        ["Forbidden Knowledge ", "Complete all research in one tech tree. "],
        ["Get off my Lawn ", "You really want to keep it clean. Destroy 10 000 destructibles. "],
        ["Get out of my swamp!", "Finish survival mode in the Fungal Swamp biome or the Swamp story campaign."],
        ["Going Green ", "Complete any Survival by building only Solar, Wind, Biomass or Geothermal powerplants."],
        ["Gold Digger", "Open 10 metallic bioanomalies."],
        ["Home alone", "Set up 250 traps."],
        ["Horrible Person ", "You are a horrible person! Exterminate 1000 neutral creatures. "],
        ["I am a Superhero now.", "Open 5 Power Wells."],
        ["I know Kung-Fu ", "Use skills 500 times. "],
        ["I'll do it myself... ", "Get your hands dirty! Kill 500 aliens with Mr Riggs' bare hands."],
        ["I'm SIGMA ", "Kill 30 OMEGA Class Creatures. "],
        ["Indecisive ", "Explore at least 50% of a mission area before setting up your HQ in survival. "],
        ["Inspector Gadget ", "Have all the available upgrade, consumable and weapon slots filled. "],
        ["Investing in Liquid Assets ", "Build 1500 pipe segments. "],
        ["It's bigger than I thought ", "Build the first Megastructure. "],
        ["Kaboom! ", "Make a big bang. Place a Nuclear Mine. "],
        ["Leaving Empty Handed ", "Mr. Riggs \"dies\" and drops the last weapon he was holding. "],
        ["Looking for a Perfect House ", "Build an outpost on 4 different biomes in campaign mode. "],
        ["Mighty Morphin' Tower Rangers", "Build 50 Morphium Towers."],
        ["Next planet, please ", "Achieve your final goal and save Galatea 37 "],
        ["No Water? No Problem!", "Transfer 5000 of any liquid through compressor/decompressor."],
        ["Not enough space ", "Scan for a new location on Galatea 37. "],
        ["Overkill? ", "Fire 2 miniguns at the same time nonstop for 15 seconds. "],
        ["Queen Bee ", "I am the swarm. Have 50 drones of any kind active at the same time. "],
        ["Run Robot Run! ", "Run 21 097 meters. "],
        ["Scientist? ", "Kill 50 000 hostile creatures. "],
        ["Something Useful ", "Use 250 consumables "],
        ["Strip mining ", "Leave nothing behind. Extract at least 75% of resource veins in any map. "],
        ["Swiss Bank Account ", "Create enough storage for 50 000 carbonium. "],
        ["The Great Wall of Galatea 37 ", "Build 21 196 meters worth of walls. "],
        ["The Treasure Hunter ", "No stone unturned. Find at least 75% of hidden underground treasures on any map. "],
        ["They aren’t that tough.", "Kill 20 canceroths."],
        ["Tornado season", "Shred 250 destructible props with a tornado skill."],
        ["Underground Glow", "Open 10 bioanomalies in the Crystal Caverns biome."],
        ["Walk in the Park ", "Vacation on Galatea 37 complete! Finish the campaign or the survival mode. "],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
