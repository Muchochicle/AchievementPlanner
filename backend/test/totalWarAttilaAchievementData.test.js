import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-attila.json - 118 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 325610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-attila");

test("getPlannerData('total-war-attila') returns real planner data with 118 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-attila");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 118);

});

test("every Total War: ATTILA achievement has a unique id from 1 to 118 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 118 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 118);
    assert.strictEqual(new Set(apinames).size, 118);

});

test("every Total War: ATTILA achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 118 Total War: ATTILA achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend to Emperors", "Complete the Grand Campaign as Himyar."],
        ["A Scourge is Born", "Ensure your faction survives until Attila the Hun is born."],
        ["A Second Force", "Complete the Grand Campaign as the Caledonians."],
        ["A Taste for Murder", "Assassinate 10 enemy characters."],
        ["Abject Vandalism", "Complete the Last Roman Campaign as the Vandals."],
        ["Access Denied!", "Fight and win a siege battle against 20 or more units without the enemy getting onto the walls or into the settlement."],
        ["Against All Odds", "Win a campaign battle in which you are outnumbered 10-to-1."],
        ["All men. Some swords", "Complete a campaign as the Alemanni."],
        ["All-Rounder", "Research at least 1 technology from each research category."],
        ["Arabia Felix", "Capture the historical province of Arabia Felix, consisting of the following regions: Eudaemon, Omana, and Zafar."],
        ["Arabia Magna", "Capture the historical province of Arabia Magna, consisting of the following regions: Dumatha, Hira, and Yathrib."],
        ["Arabia Petraea", "Capture the historical province of Arabia Petraea, consisting of the following regions: Aelia Capitolina, Aila, and Nova Trajana Bostra."],
        ["Attila the Dead", "Kill Attila the Hun by any means at your disposal."],
        ["Avar Go If You Think You're Hard Enough", "Complete the Age of Charlemagne Campaign as the Avars."],
        ["Barbaricum Trans Rhenum", "Complete the Last Roman Campaign as the Franks."],
        ["Beheading the Snake", "As the Vandals, sack the city of Roma."],
        ["Bloodthirsty", "Kill 10,000 enemy in battles"],
        ["Boarding Action", "Successfully board a ship during a naval battle."],
        ["Boatmen", "Play and win 1 campaign naval battle"],
        ["Burn Baby Burn", "Sack 10 Settlements as The Huns."],
        ["Burning Convictions ", "Burn down 75% of an enemy Settlement during a siege battle"],
        ["Burning Seas", "Use Greek Fire to destroy an enemy ship and its crew."],
        ["Butcher", "Kill 100,000 enemy in battles"],
        ["Caesar Reborn", "Complete the Grand Campaign on legendary difficulty by fighting and winning every battle."],
        ["Cloak & Dagger", "Ensure 1 of each agent type (priest, spy and veteran) attains the highest level at the same time."],
        ["Corona Ferrea", "Complete the Age of Charlemagne Campaign as the Kingdom of the Lombards."],
        ["Cost-effective Killer", "Fight and win a campaign land battle where you have spent half or less on units than the enemy."],
        ["Cupid's Arrow", "Arrange 20 Marriages"],
        ["Demagoguery", "Use a priest's Preach Intolerance ability on a settlement 3 times."],
        ["Don't Get Umayyad, Get Even", "Complete the Age of Charlemagne Campaign as the Emirate of Cordoba."],
        ["Eire & Back Again", "Complete the Grand Campaign as the Ebdanians."],
        ["Epic Westphalia", "Complete the Age of Charlemagne Campaign as Westphalia"],
        ["Eternal Eagle", "Complete the Grand Campaign as the Eastern Roman Empire."],
        ["Famous General", "Fight and win 6 different historical battles."],
        ["Franci, My Dear, I Couldn't Give a Damn!", "Complete the Grand Campaign as the Franks."],
        ["Fresh meat", "Play and win 1 multiplayer Quick Battle"],
        ["Furore Normannorum", "Complete the Age of Charlemagne Campaign as the Kingdom of the Danes."],
        ["Garamantes In Excelsis", "Complete the Grand Campaign as the Garamantians."],
        ["Godan's Chosen", "Complete a campaign as the Langobardi."],
        ["Gore-drenched", "Kill 1,000,000 enemy in battles"],
        ["Gothic War", "Complete the Grand Campaign as the Geats."],
        ["Governor", "Issue 10 edicts during a single campaign."],
        ["Grizzled Veterans", "Complete the Grand Campaign whilst fielding an army or fleet undefeated since the start."],
        ["Hammer & Anvil", "Attack an enemy unit in the rear whilst it is already engaged with another."],
        ["Head For Business", "Ransom 10,000 enemy soldiers."],
        ["Hephthalite Scourge", "Complete the Grand Campaign as the White Huns"],
        ["Heroic defense", "Play and win a campaign siege with only the garrison against 20 or more units of attackers"],
        ["I'm Still Standing", "Complete the Grand Campaign as the Western Roman Empire."],
        ["Imperator", "Win a campaign on legendary difficulty."],
        ["Inside Man", "Use a spy's Poison Stores ability on a settlement 3 times."],
        ["Iron Resolve", "Your infantry unit recovers from wavering 3 times during a single campaign battle."],
        ["It's a start…", "Sink 10 enemy ships during naval battles."],
        ["Jute a Minute!", "Complete the Grand Campaign as the Jutes."],
        ["Killing Mode", "Kill at least 1,000 enemy troops in a campaign battle with a single unit."],
        ["King of Italy", "Declare independence, completing the Last Roman Campaign as Belisarius."],
        ["Kingdom of Gallaecia", "Complete the Grand Campaign as the Suebi."],
        ["Legendary General", "Complete the Grand Campaign on legendary difficulty without auto-resolving any battles."],
        ["Nepotism", "Ensure that 3 successive generations of characters from the same family reach level 5."],
        ["Noctophilia", "Fight and win a battle at night."],
        ["Obelisks to Eternity", "Complete the Grand Campaign as Aksum."],
        ["Obey my command!", "Successfully rally troops 3 times in a campaign battle"],
        ["One Day in Al-Hirah", "Complete the Grand Campaign as the Lakhmids."],
        ["Ostrogothic Kingdom", "Complete the Grand Campaign as the Ostrogoths."],
        ["Pater Europae", "Complete the Age of Charlemagne Campaign as the Kingdom of Charlemagne."],
        ["Pict Apart", "Complete the Grand Campaign as the Picts."],
        ["Ram has touched the wall", "Play and win 1 campaign siege battle"],
        ["Ramming Speed!", "Destroy an enemy ship by ramming it."],
        ["Raw Recruit", "Fight and win a single campaign land battle."],
        ["Red Sky at Night? Admirals' Delight!", "Burn 10 enemy ships during a single campaign battle."],
        ["Regnum Asturorum", "Complete the Age of Charlemagne Campaign as the Kingdom of Asturias."],
        ["Regular solider", "Fight and win 5 campaign land battles."],
        ["Resting In My Account...", "Embezzle 10000 in funds."],
        ["Ride the Dragon's Breath", "Fight and win a battle in foggy conditions."],
        ["Saboteur", "Use a veteran's Sabotage ability on a settlement 3 times."],
        ["Sanctuary", "Control a province in which 70% of the population are refugees yet public order remains positive."],
        ["Sassanid Supremacy", "Complete the Grand Campaign as the Sassanid Empire."],
        ["Saxon Shores", "Complete the Grand Campaign as the Saxons."],
        ["Scholae Romanes", "Research all technologies available to the Western Roman Empire."],
        ["Scorched Earth Policy", "Completely destroy one of your own settlements to prevent it falling into enemy hands."],
        ["Scourge of Civilisation", "Complete the Grand Campaign as the Huns."],
        ["Seasoned Besieger", "Fight and win 5 campaign siege battles."],
        ["Seasoned Scrapper", "Fight and win 5 multiplayer quick battles."],
        ["Semper Fi", "Rout a land unit with a marine unit during a campaign battle."],
        ["Sheer Vandalism", "Complete the Grand Campaign as the Vandals."],
        ["Show No Mercy!", "Kill at least 1,000 enemy troops in a single campaign battle."],
        ["Siege Engineer ", "Field a ballista or onager unit during a campaign siege battle."],
        ["Siege? What Siege?", "Fight and win a siege battle without damaging the settlement in any way."],
        ["Slaughter at Sea", "Sink 1,000 enemy ships during naval battles."],
        ["Social Climber", "Arrange a promotion for a member of your family."],
        ["Steppe Survivors", "Complete the Grand Campaign as the Alani."],
        ["Tactical Genius", "Use 3 abilities during a single campaign battle."],
        ["Take No Prisoners", "Destroy an entire enemy army, killing everyone and taking no prisoners."],
        ["Tanukhid You Not", "Complete the Grand Campaign as the Tanukhids."],
        ["The Gothic War", "Complete the Prologue Campaign."],
        ["The House Red", "Complete a campaign as the Burgundii."],
        ["The Last Roman", "Remain loyal to the Empire, completing the Last Roman Campaign as the Roman Expedition."],
        ["The Mercian Supremacy", "Complete the Age of Charlemagne Campaign as the Kingdom of Mercia."],
        ["The More Things Change", "Change your state religion and convert 50% of your empire's population to it."],
        ["The Other Way", "Change your faction's state religion to minor religions."],
        ["The Power of Three", "Capture 3 settlements during the Grand Campaign."],
        ["The Sacred & Profane", "Complete the Last Roman Campaign as the Ostrogoths."],
        ["The Sons of Hyperborea", "Complete the Grand Campaign as the Schlavenians."],
        ["This is Total War!", "Win the game having declared war on every faction the turn you encountered them, as well as never negotiating a peace treaty."],
        ["To formation!", "Be in a formation while engaging an enemy"],
        ["Tolosanisches Reich", "Complete the Last Roman Campaign as the Visigoths."],
        ["Tribute", "As the Huns, obtain a state gift of 2,000 from the Romans."],
        ["Upping the Antes", "Complete the Grand Campaign as the Anteans."],
        ["Veni, Vedi, Vici!", "Complete an entire campaign, by playing and winning every battle"],
        ["Veni, Vedi, Vici!", "Complete the Grand Campaign by fighting and winning every battle."],
        ["Very Cheap Labour", "Control a province in which 5% of its income is derived from slaves."],
        ["Veteran Admiral", "Fight and win 25 campaign naval battles."],
        ["Veteran Besieger", "Fight and win 25 campaign siege battles."],
        ["Veteran General", "Fight and win 25 campaign land battles."],
        ["Veteran Scrapper", "Fight and win 25 multiplayer quick battles."],
        ["Viking Dawn", "Complete the Grand Campaign as the Danes."],
        ["Visigothic Kingdom", "Complete the Grand Campaign as the Visigoths."],
        ["Vistula Veneti", "Complete the Grand Campaign as the Venedians."],
        ["Watery Graves", "Sink 100 enemy ships during naval battles."],
    ];

    assert.strictEqual(officialAchievements.length, 118, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
