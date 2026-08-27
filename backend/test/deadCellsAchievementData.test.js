import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-cells.json - 121 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 588650 (fetched through this app's own services/steamApi.js) - 84 of
// 121 ship a real, official Steam description. The remaining 37 are
// hidden achievements Steam never describes publicly (confirmed via the
// same API call) - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions (cross-checked
// against multiple independent, cross-agreeing sources: TrueAchievements,
// XboxAchievements, PSNProfiles, Steam Community discussions).
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const deadCells = getPlannerData("dead-cells");

test("getPlannerData('dead-cells') returns real planner data with 121 curated achievements", () => {

    assert.ok(deadCells, "expected real planner data for dead-cells");
    assert.ok(Array.isArray(deadCells.achievements));
    assert.strictEqual(deadCells.achievements.length, 121);

});

test("every Dead Cells achievement has a unique id from 1 to 121 and a unique apiname", () => {

    const ids = deadCells.achievements.map(a => a.id);
    const apinames = deadCells.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 121 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 121);
    assert.strictEqual(new Set(apinames).size, 121);

});

test("every Dead Cells achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of deadCells.achievements) {

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

test("every one of the 84 officially-described Dead Cells achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 37 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Love the serenity...", "Reach the Promenade of the Condemned for the first time."],
        ["A room with a view!", "Reach the Ramparts for the first time."],
        ["Finally, a moment of rest...", "Reach the Black Bridge for the first time."],
        ["Smells like burned flesh", "Reach the Ossuary for the first time."],
        ["What's that funky smell?", "Reach the Toxic Sewers for the first time."],
        ["Who needs an Italian plumber?", "Reach the Ancient Sewers for the first time."],
        ["My fish is fresh!", "Reach the Stilt Village for the first time."],
        ["The dead center of the island...", "Reach the Graveyard for the first time."],
        ["It rubs the lotion on its skin!", "Reach the Prison Depths for the first time."],
        ["Quit tickling!", "Absorb the Vine Rune."],
        ["What are you rubbing at anyway?", "Absorb the Teleportation rune."],
        ["Going down!", "Kill an enemy with an elevator."],
        ["YOLO! Or not?", "Cheat Death…"],
        ["The Fat and The Furious", "You beat \"The Concierge\"!"],
        ["Is there something in your eye?", "You beat \"Conjunctivius\"!"],
        ["Not so tough", "You slayed 100 elites. Badman."],
        ["Slash! Slash! Roll!", "Unlock 10 weapons."],
        ["Pimp my ride.", "Unlock 10 skills."],
        ["Afraid of the dark?", "Reach the Forgotten Sepulcher for the first time!"],
        ["Absolution", "Be cursed... Survive."],
        ["¡Arriba, arriba! ¡Ándale, ándale!", "Open your first timed door."],
        ["See, that wasn't so hard now, was it?", "Successfully complete a Challenge Rift."],
        ["Shrewd sleuth", "Find your first secret zone."],
        ["Faster than light!", "You finished a daily challenge. Well done!"],
        ["Here comes a new challenger!", "Absorb the Challenger Rune!"],
        ["Blade Master", "You have beaten the \"Time Keeper\"!"],
        ["Tic… Toc…", "Reach the Clock Tower for the first time!"],
        ["High drama", "Reach the Clock Room for the first time!"],
        ["Fortune and glory, kid. Fortune and Glory...", "Reach the Slumbering Sanctuary for the first time!"],
        ["Incy Wincy…", "Absorb the Spider's Rune!"],
        ["La Brute", "Absorb the Ram's Rune."],
        ["The last rampart falls...", "Beat the Hand of the King."],
        ["Please leave your shoes at the entrance.", "Reach the Castle for the first time."],
        ["Bend the knee? I think not…", "Reach the Throne Room for the first time."],
        ["Even the rats avoid the place...", "Reach the Insufferable Crypt for the first time."],
        ["Size doesn't matter", "You beat the Giant!"],
        ["You dig", "Reach the Cavern for the first time."],
        ["Hot and cold", "Reach the Guardian's Haven for the first time."],
        ["Who's a good boi?", "Finish the game without sacrificing the Mushroom Boi!"],
        ["Go play outside!", "Reach the Arboretum for the first time."],
        ["The mud is getting warm, so you might as well swim.", "Reach the Morass of the Banished for the first time."],
        ["Knee deep in mud...", "Reach the Nest for the first time."],
        ["Don't. Touch. Anything!", "Reach the Corrupted Prison for the first time."],
        ["Cheers!", "Reach the Derelict Distillery for the first time!"],
        ["Born sapper", "You completed the Derelict Distillery without using the Barrel Launcher!"],
        ["Return to sender", "You killed an Infected Worker with his own barrel!"],
        ["Blades N' Roses", "Reach the Mausoleum for the first time."],
        ["Beware the step!", "Reach the Undying Shores for the first time."],
        ["Sky Fall", "Reach the Fractured Shrines for the first time."],
        ["In mushroom, we trust.", "Defeat the Scarecrow without bouncing on any mushrooms."],
        ["Watering Time!", "You beat the Scarecrow!"],
        ["Green thumbs", "You beat the Scarecrow without taking a single hit!"],
        ["First aid", "Let an Apostate revive at least 3 souls."],
        ["Pool Party", "Electrify an enemy with the Lightning Rods while they are in water."],
        ["A cut above", "Defeat at least 5 enemies in a row with the Scarecrow's Sickles."],
        ["Trapped Trapper", "Trap an enemy using the Fractured Shrines environment!"],
        ["Iceberg right ahead!", "Reach the Shipwreck for the first time!"],
        ["8th wonder", "Reach the Lighthouse for the first time!"],
        ["A sparkle in the night", "Reach the Crown for the first time!"],
        ["Her Majesty", "You beat the Queen!"],
        ["Lilibet", "You beat the Queen without taking a single hit!"],
        ["Long live the Queen", "Beat the Queen by pushing her into the void"],
        ["Full house", "Beat the Queen with the Killing Deck"],
        ["On Her Majesty's Secret Service", "Beat the Queen with a Queen outfit"],
        ["Oh how fast they grow!", "Get the Leghugger to evolve"],
        ["Black flag", "Kill a Pirate Captain with the Scavenged Bombard"],
        ["Spare!", "Kill five enemies with a single throw and recall of the Wrecking Ball"],
        ["Plank walk", "Throw an enemy into spikes using the Hand Hook"],
        ["Put that thing back where it came from or so help me", "Help the shark get back to the water"],
        ["Infiltration", "Finish the Lighthouse while wearing a Servant outfit"],
        ["Herder", "Have 2 pets active at the same time"],
        ["You're not my family", "Get the Leghugger to kill an Armored Shrimp"],
        ["Firefighter", "You finished the Lighthouse!"],
        ["The Bank always wins in the end", "Reach the Bank for the first time."],
        ["Up to the eyeball in debt", "Beat the game with the maximum debt remaining."],
        ["Am I still on the island?", "Reach the Castle's Outskirts for the first time."],
        ["Into the vampire's den", "Reach Dracula's Castle for the first time."],
        ["Don't fear the Reaper", "Reach the Defiled Necropolis for the first time."],
        ["What is a man?", "Reach the Master's Keep for the first time."],
        ["Death comes for us all... but not you!", "You beat Death!"],
        ["You don't belong in this world!", "You beat Dracula!"],
        ["I still have 8 lives", "Have Maria's Cat deal the last hit to Death."],
        ["Can you stop moving please?!", "Kill a Werewolf with a Throwing Axe"],
        ["Knowledge is power", "Hit the same enemy with 5 orbiting Bibles in short succession."],
    ];

    assert.strictEqual(officialAchievements.length, 84, "sanity check on this test's own reference list");

    const hiddenApinames = new Set(["FEAT_KILLYOURSELF_ELEVATOR","FEAT_DEATH_LOST_100_CELLS","FIGHT_BEAT_BEHEMOTH_NODAMAGE","FIGHT_BEAT_BEHOLDER_NODAMAGE","FEAT_DIVE_SPIKES","FEAT_ENDGAME_STARTWEAPON","FIGHT_BEAT_BERSERK_NODAMAGE","EQUIP_ENDGAME_YOLO","EQUIP_ENDGAME_CURSEDSWORD","EXPLO_GETBOSSRUNE_FIRST","EXPLO_GETBOSSRUNE_SECOND","EXPLO_GETBOSSRUNE_THIRD","FEAT_ENDGAME_BOSSRUNE_1","FEAT_ENDGAME_BOSSRUNE_2","FEAT_ENDGAME_BOSSRUNE_3","FIGHT_BEAT_KINGSHAND_NODAMAGE","EXPLO_GETBOSSRUNE_FOURTH","FEAT_ENDGAME_BOSSRUNE_4","EXPLO_GETBOSSRUNE_FIFTH","FIGHT_BEAT_COLLECTOR","BIOME_REACHED_ASTROLAB","BIOME_REACHED_OBSERVATORY","FIGHT_BEAT_GIANT_NODAMAGE","FIGHT_BEAT_COLLECTOR_NODAMAGE","FIGHT_BEAT_MAMATICK","FIGHT_BEAT_MAMATICK_NODAMAGE","FEAT_EXPLODE_MUSHROOM_BOI","FEAT_SACRIFICE_MUSHROOM_BOI","FEAT_PRISON_NOBREAK_DOOR","FEAT_FLYINGSWORD_JEALOUSY","FEAT_COSTUME_REQUIRED","FIGHT_BEAT_AMAZONS_NODAMAGE","FIGHT_BEAT_MIMIC","FIGHT_BEAT_DEATH_NODAMAGE","FIGHT_BEAT_DOOKU_BEAST","FIGHT_BEAT_DOOKU_NODAMAGE","FEAT_VKILLER_KILL_DOOKU"]);

    const dataPairs = deadCells.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 37 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden0 = deadCells.achievements.find(a => a.apiname === "FEAT_KILLYOURSELF_ELEVATOR");
    const hidden1 = deadCells.achievements.find(a => a.apiname === "FEAT_DEATH_LOST_100_CELLS");
    const hidden2 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_BEHEMOTH_NODAMAGE");
    const hidden3 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_BEHOLDER_NODAMAGE");
    const hidden4 = deadCells.achievements.find(a => a.apiname === "FEAT_DIVE_SPIKES");
    const hidden5 = deadCells.achievements.find(a => a.apiname === "FEAT_ENDGAME_STARTWEAPON");
    const hidden6 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_BERSERK_NODAMAGE");
    const hidden7 = deadCells.achievements.find(a => a.apiname === "EQUIP_ENDGAME_YOLO");
    const hidden8 = deadCells.achievements.find(a => a.apiname === "EQUIP_ENDGAME_CURSEDSWORD");
    const hidden9 = deadCells.achievements.find(a => a.apiname === "EXPLO_GETBOSSRUNE_FIRST");
    const hidden10 = deadCells.achievements.find(a => a.apiname === "EXPLO_GETBOSSRUNE_SECOND");
    const hidden11 = deadCells.achievements.find(a => a.apiname === "EXPLO_GETBOSSRUNE_THIRD");
    const hidden12 = deadCells.achievements.find(a => a.apiname === "FEAT_ENDGAME_BOSSRUNE_1");
    const hidden13 = deadCells.achievements.find(a => a.apiname === "FEAT_ENDGAME_BOSSRUNE_2");
    const hidden14 = deadCells.achievements.find(a => a.apiname === "FEAT_ENDGAME_BOSSRUNE_3");
    const hidden15 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_KINGSHAND_NODAMAGE");
    const hidden16 = deadCells.achievements.find(a => a.apiname === "EXPLO_GETBOSSRUNE_FOURTH");
    const hidden17 = deadCells.achievements.find(a => a.apiname === "FEAT_ENDGAME_BOSSRUNE_4");
    const hidden18 = deadCells.achievements.find(a => a.apiname === "EXPLO_GETBOSSRUNE_FIFTH");
    const hidden19 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_COLLECTOR");
    const hidden20 = deadCells.achievements.find(a => a.apiname === "BIOME_REACHED_ASTROLAB");
    const hidden21 = deadCells.achievements.find(a => a.apiname === "BIOME_REACHED_OBSERVATORY");
    const hidden22 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_GIANT_NODAMAGE");
    const hidden23 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_COLLECTOR_NODAMAGE");
    const hidden24 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_MAMATICK");
    const hidden25 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_MAMATICK_NODAMAGE");
    const hidden26 = deadCells.achievements.find(a => a.apiname === "FEAT_EXPLODE_MUSHROOM_BOI");
    const hidden27 = deadCells.achievements.find(a => a.apiname === "FEAT_SACRIFICE_MUSHROOM_BOI");
    const hidden28 = deadCells.achievements.find(a => a.apiname === "FEAT_PRISON_NOBREAK_DOOR");
    const hidden29 = deadCells.achievements.find(a => a.apiname === "FEAT_FLYINGSWORD_JEALOUSY");
    const hidden30 = deadCells.achievements.find(a => a.apiname === "FEAT_COSTUME_REQUIRED");
    const hidden31 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_AMAZONS_NODAMAGE");
    const hidden32 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_MIMIC");
    const hidden33 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_DEATH_NODAMAGE");
    const hidden34 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_DOOKU_BEAST");
    const hidden35 = deadCells.achievements.find(a => a.apiname === "FIGHT_BEAT_DOOKU_NODAMAGE");
    const hidden36 = deadCells.achievements.find(a => a.apiname === "FEAT_VKILLER_KILL_DOOKU");

    assert.ok(hidden0 && hidden0.name === "They came from behind!" && hidden0.description.length > 0);
    assert.ok(hidden1 && hidden1.name === "Ohhhhhh! That hurt!" && hidden1.description.length > 0);
    assert.ok(hidden2 && hidden2.name === "Steam rolled." && hidden2.description.length > 0);
    assert.ok(hidden3 && hidden3.name === "Flawless victory." && hidden3.description.length > 0);
    assert.ok(hidden4 && hidden4.name === "We've all been there before..." && hidden4.description.length > 0);
    assert.ok(hidden5 && hidden5.name === "What? There's nothing wrong with these..." && hidden5.description.length > 0);
    assert.ok(hidden6 && hidden6.name === "The Dance" && hidden6.description.length > 0);
    assert.ok(hidden7 && hidden7.name === "Never fallen" && hidden7.description.length > 0);
    assert.ok(hidden8 && hidden8.name === "I like to live dangerously…" && hidden8.description.length > 0);
    assert.ok(hidden9 && hidden9.name === "Surgical extraction" && hidden9.description.length > 0);
    assert.ok(hidden10 && hidden10.name === "Masterful extraction" && hidden10.description.length > 0);
    assert.ok(hidden11 && hidden11.name === "Artful extraction" && hidden11.description.length > 0);
    assert.ok(hidden12 && hidden12.name === "Up, Guards, and at them again!" && hidden12.description.length > 0);
    assert.ok(hidden13 && hidden13.name === "Finished, without fear." && hidden13.description.length > 0);
    assert.ok(hidden14 && hidden14.name === "Harder Better Faster Stronger" && hidden14.description.length > 0);
    assert.ok(hidden15 && hidden15.name === "Do you need... A hand?? Bahaha!" && hidden15.description.length > 0);
    assert.ok(hidden16 && hidden16.name === "Deft extraction" && hidden16.description.length > 0);
    assert.ok(hidden17 && hidden17.name === "Let's get down to the nitty gritty..." && hidden17.description.length > 0);
    assert.ok(hidden18 && hidden18.name === "Perfect extraction" && hidden18.description.length > 0);
    assert.ok(hidden19 && hidden19.name === "I don't step on toes..." && hidden19.description.length > 0);
    assert.ok(hidden20 && hidden20.name === "Life on the edge" && hidden20.description.length > 0);
    assert.ok(hidden21 && hidden21.name === "Stargazing" && hidden21.description.length > 0);
    assert.ok(hidden22 && hidden22.name === "David and Goliath..." && hidden22.description.length > 0);
    assert.ok(hidden23 && hidden23.name === "Nothing left to... collect." && hidden23.description.length > 0);
    assert.ok(hidden24 && hidden24.name === "I've got my eyes on you..." && hidden24.description.length > 0);
    assert.ok(hidden25 && hidden25.name === "Take that, sucker!" && hidden25.description.length > 0);
    assert.ok(hidden26 && hidden26.name === "Bound for Hell" && hidden26.description.length > 0);
    assert.ok(hidden27 && hidden27.name === "Pact with the devil" && hidden27.description.length > 0);
    assert.ok(hidden28 && hidden28.name === "Gentleman" && hidden28.description.length > 0);
    assert.ok(hidden29 && hidden29.name === "Me, jealous?" && hidden29.description.length > 0);
    assert.ok(hidden30 && hidden30.name === "The cowl does not make the monk" && hidden30.description.length > 0);
    assert.ok(hidden31 && hidden31.name === "Unwavering loyalty" && hidden31.description.length > 0);
    assert.ok(hidden32 && hidden32.name === "Bag of Tricks" && hidden32.description.length > 0);
    assert.ok(hidden33 && hidden33.name === "Dodge Death!" && hidden33.description.length > 0);
    assert.ok(hidden34 && hidden34.name === "See you in 100 years" && hidden34.description.length > 0);
    assert.ok(hidden35 && hidden35.name === "Honorary Belmont" && hidden35.description.length > 0);
    assert.ok(hidden36 && hidden36.name === "Does what it says on the tin" && hidden36.description.length > 0);

});
