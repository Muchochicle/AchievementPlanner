import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-come-deliverance-ii.json - 83 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1771300 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kingdom-come-deliverance-ii");

test("getPlannerData('kingdom-come-deliverance-ii') returns real planner data with 83 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-come-deliverance-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 83);

});

test("every Kingdom Come: Deliverance II achievement has a unique id from 1 to 83 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 83 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 83);
    assert.strictEqual(new Set(apinames).size, 83);

});

test("every Kingdom Come: Deliverance II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 83 Kingdom Come: Deliverance II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bird in the Hand", "Save Capon from execution (the For Whom the Bell Tolls quest)."],
        ["A Knight's Word", "You rewarded the herbwoman for her help as promised."],
        ["Against All Odds", "You finished the game in Hardcore mode with all negative perks enabled."],
        ["All Fun and Games", "(Brushes with Death) Teach Stihlau there are things you shouldn't joke about."],
        ["An Old Friend", "You found Pebbles."],
        ["Been There Done That", "Complete most of the game's content (around 90% of quests)."],
        ["Better Safe Than Sorry", "You made yourself a plague mask."],
        ["Bohemian Graffitti", "You painted every type of shield."],
        ["Bohemian Sniper", "You killed an enemy with a crossbow shot to the head at long range."],
        ["Bohemians Rise Up!", "You were ahead of your time and created the foundations for the state emblem of Bohemia."],
        ["Boneworks", "Help the gravedigger, the knacker and the ossuary guardian (the Forbidden Fruit, Thou art but dust..., and The Executioner's Pride side quests)."],
        ["Canny Shooter", "You won the miners' competition on the highest difficulty."],
        ["Confessor", "(Brushes with Death) The painter tells you everything."],
        ["Curiosity Killed the Cat", "(Brushes with Death) If you hadn't poked around, Libor wouldn't have hanged."],
        ["Déjà Vu", "You defeated Capon during practice. Again."],
        ["Die Another Day", "As Godwin, save your brother during the Feast quest."],
        ["Do Good to All People", "You helped the people of the monastery."],
        ["Face to Face", "Finally meet Markvart von Aulitz (the Reckoning quest)."],
        ["Fancy Fighting", "You killed an enemy with a combo."],
        ["Feline Affection", "(Mysteria Ecclesiae) Interact with the library cat several times across the DLC."],
        ["Flagellum Dei", "You scored 150 points in the mounted archery competition."],
        ["Fresh Air", "You finished DLC3."],
        ["Groschen Must Flow", "You spent ten thousand groschen."],
        ["Hardcore Henry II", "You finished the story in Hardcore mode."],
        ["Henry the Bruiser", "You beat the best brawler around."],
        ["Henry the Matchmaker", "Bring Victoria her sweetheart by force (the Hush, My Darling quest)."],
        ["Hic-Hic-Boom", "Make gunpowder while drunk and get the process wrong."],
        ["High Noon", "Shoot a gun-wielding enemy with a firearm."],
        ["Holy Relic", "(Mysteria Ecclesiae) Find the relic of Knight Boleslav (the Seek and You Shall Find quest)."],
        ["Home Sweet Home!", "You completed the reconstruction of your smithy."],
        ["Innovator", "You've acquired all the new weapons and armour from your journeymen."],
        ["Jack of All Trades", "You have successfully completed every mini-game."],
        ["Lent", "Complete the game without eating meat or killing an animal."],
        ["Lights Out", "You slit the throat of an enemy who was looking for you."],
        ["Man's Best Friend", "Find and save Mutt (the dog)."],
        ["Martin’s Legacy", "You’ve completed the restoration of the Kuttenberg astronomical clock."],
        ["Martyr", "Help the legate achieve martyrdom (the Oratores quest)."],
        ["Master of Masters", "Defeat Zavish in all three disciplines."],
        ["Master of the Blacksmiths’ Guild", "You passed the Trial and became a Master blacksmith.  "],
        ["Masterpiece", "(Brushes with Death) Finish the Brushes with Death DLC."],
        ["My Shoes!", "Wake up drunk without your shoes."],
        ["Nevermore", "(Legacy of the Forge) Acquire a clever raven - buy the Raven chamber upgrade for your smithy (needs Prestige level 25)."],
        ["New Horizons", "Reach the Kuttenberg region."],
        ["Nimble Fingers", "Pick the hardest (Very Hard) lock."],
        ["No Good Deed", "Save Maleshov without being detected (the Dancing with the Devil quest)."],
        ["Nothing But the Best", "You gave the painter medicine of the highest quality."],
        ["Old Raven", "Locate the true Lord of Nebakov."],
        ["Original Gunslinger", "Have four loaded hand cannons ready at once."],
        ["Ostraconophobia", "(Mysteria Ecclesiae) Get killed by crayfish while collecting them (the Our Old Bread quest)."],
        ["Overkill", "Shoot a rabbit with a firearm."],
        ["Painted", "(Brushes with Death) Obtain a painting, but not by paying for it."],
        ["Penitent One", "You made the penitential pilgrimage."],
        ["Poet's Gut", "(Brushes with Death) Every strophe is a work of art."],
        ["Quiet as a Church Mouse", "The knights never had to escort you to the infirmary."],
        ["Racing the Leech", "(Legacy of the Forge) Win a horse race against the guard Leech (Martin's Dream quest)."],
        ["Reforged", "Reforge the sword you had been searching for."],
        ["Remember Remember…", "Detonate a gunpowder barrel in the mine (the Spark quest)."],
        ["Rest in One Piece", "The skull finally reached its final resting place."],
        ["Rock and Stone!", "You killed an enemy with a boulder dropped from the battlements. Karl would be proud!"],
        ["Shiny", "You won a gold badge in a game of dice."],
        ["Silence is Golden", "Thanks to you, the raid on Semine didn't happen (the Silence Is Golden quest)."],
        ["Silent Partner", "(Legacy of the Forge) Obtain evidence for Klaus Eichner without killing anyone."],
        ["Slip the Noose", "Talk your way out of an execution."],
        ["Stop Licking That!", "(Mysteria Ecclesiae) Inspect a burned body's hair and taste the powder residue (the To Dust You Shan't Return quest)."],
        ["Survivor", "(Mysteria Ecclesiae) Exhaust all of Brother Vojtiech's jokes in the hidden cellar room during Anamnesis."],
        ["Tales of Kuttenberg", "You helped Rosa finish her book."],
        ["The Dirty Seven", "Find all of Dry Devil's comrades (the Devil's Pack quest)."],
        ["The End", "Complete the story."],
        ["The Hydra's Heads", "Kill all three commanders and destroy the powder magazine (the Lion's Den quest)."],
        ["The Lord Taketh Away", "Pay fines totalling a large amount of groschen."],
        ["The Ragman’s Dream", "You helped the Ragman save his dream."],
        ["This Won't End Well", "Story achievement after the Laboratores quest."],
        ["Truce", "Help two quarrelling villages reconcile."],
        ["True Cardinal", "Get through the church council without raising suspicion (the Italian Job quest)."],
        ["Two Brothers", "(Legacy of the Forge) Resolve things with Koniash without a fight (the Kuttenberg Sharpshooters activity - consult the bailiff first)."],
        ["Under a Brown Flag", "Hang used underwear on a tavern (Vlach's side quest)."],
        ["Under Pressure", "You won three skirmishes while bleeding."],
        ["Vengeance", "Story achievement - Istvan is dead (the Storm quest)."],
        ["Vengeance Solves Nothing", "(Brushes with Death) Let Burkhard live."],
        ["Voice of the Bell", "(Legacy of the Forge) Donate 2,000 groschen to the Old Kutna bell repairs, then witness the bell ring."],
        ["Warlock’s Riddle  ", "(Legacy of the Forge) Solve the alchemist's riddle in Bushek the Elder's Investigation."],
        ["Weapon of Choice", "You've defeated an enemy with every type of weapon."],
        ["Without Protection", "Break an enemy's shield."],
    ];

    assert.strictEqual(officialAchievements.length, 83, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
