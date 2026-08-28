import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-rome-2.json - 188 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 214950 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 188 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-rome-2");

test("getPlannerData('total-war-rome-2') returns real planner data with 188 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-rome-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 188);

});

test("every Total War: ROME II achievement has a unique id from 1 to 188 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 188 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 188);
    assert.strictEqual(new Set(apinames).size, 188);

});

test("every Total War: ROME II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 188 Total War: ROME II achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["“No, I’m Spartacus!”", "Complete a campaign as Cimmeria."],
        ["A Colchis Goodbye", "Complete a campaign as Colchis."],
        ["A League of Their Own", "As Macedon, establish Athens, Epirus and Sparta as client states."],
        ["A Plain, Blunt Man", "Complete the Imperator Augustus campaign as Antony's Rome."],
        ["A Relic of the Past", "Declare war on a faction in Single player or Multiplayer Campaign during MWNL2,  between 00:01GMT on 12/02/2015 to 23:59 GMT on 15/02/2015."],
        ["A Trip Around the Earth", "Complete a campaign as Massilia."],
        ["Africanus", "Complete the Hannibal at the Gates campaign as Rome."],
        ["Alae", "Win a campaign battle, using only cavalry units, without auto-resolving."],
        ["Alexander's Legacy", "Complete a campaign as Macedon."],
        ["Almost Famous", "Win a campaign without ever reforming to the Empire government type."],
        ["Ambush!", "Successfully ambush and defeat an enemy army in a campaign battle."],
        ["Anatolia Not to Come", "Complete a campaign as the Galatians."],
        ["Andraste's Way or the Highway!", "Complete the Imperator Augustus campaign as Iceni."],
        ["Antagonist", "Start at least 5 multiplayer campaigns."],
        ["Arevaci Ascendant", "Complete the Hannibal at the Gates campaign as the Arevaci."],
        ["Asking for Trouble", "Survive 100 banditry events in the Empire Divided campaign."],
        ["Augustus!", "Complete 500 hours of gameplay."],
        ["Auxilia", "Complete 1 hour of gameplay."],
        ["Ba'al-Hammon Be Praised", "Complete the Hannibal at the Gates campaign as Carthage."],
        ["Baktria to the Future", "Complete a campaign as Baktria."],
        ["Balanced Force", "Win a campaign battle using one of every class of land unit: melee infantry, missile infantry, missile cavalry, melee cavalry, siege weapons."],
        ["Bello Gallico", "Complete the entire Caesar in Gaul campaign."],
        ["Bellum Germanicum", "Complete the Imperator Augustus campaign as the Marcomanni."],
        ["Beyond the Dreams of Avarice", "Win a campaign by economic victory."],
        ["Bloodthirsty", "Kill 10,000 men in battle."],
        ["Bloody Murder", "Kill or wound 300 characters with Champion actions."],
        ["British Empire", "Complete a campaign as the Iceni."],
        ["Butcher", "Kill 100,000 men in battle."],
        ["Carthage Must Be Destroyed", "Win the Siege of Carthage on normal difficulty or higher."],
        ["Carthago Delenda Est", "As Rome, destroy the Carthaginian faction."],
        ["Celtiberia Victorious", "Complete a campaign as the Arevaci."],
        ["Censor", "Accumulate 1,000,000 talents in your treasury during a single campaign."],
        ["Centurion", "Fight 100 battles in a single campaign without auto-resolving."],
        ["Champion of the Gods", "Attain the maximum rank with a champion-type agent during a campaign."],
        ["Champions of Zalmoxis", "Complete the Imperator Augustus campaign as Dacia."],
        ["Close but No Amphora", "Complete an entire campaign, winning every battle except one, without auto-resolving."],
        ["Comontorios Eternal", "Complete a campaign as Tylis."],
        ["Company of Zeroes, more like…", "Win a single battle during MWNL2 (any battle type in single player campaign, or multiplayer campaign), between 00:01GMT on 12/02/2015 to 23:59 GMT on 15/02/2015."],
        ["Conquer Fear", "Win a battle with nightmare mode enabled"],
        ["Conquered Carthage Before it was Cool", "Capture the city of Carthage in the Rise of the Republic Campaign."],
        ["Conqueror", "Capture 30 settlements."],
        ["Consul", "Play 100 campaign turns."],
        ["Crown of the Preserver", "Win 25 siege defence battles during campaign play."],
        ["Decurion", "Fight 10 battles in a single campaign without auto-resolving."],
        ["Disaster Averted", "Recover at least one legionary eagle from Teutoburg Forest on normal difficulty or higher."],
        ["Dock of the Bay", "Fight a combined land and naval siege battle during a campaign."],
        ["Empire-builder", "Capture 3 settlements."],
        ["Et tu…?", "Successfully assassinate a member of your own family faction."],
        ["Etruscan Megapolis", "Develop all buildings in the Etruscan capital to level 6."],
        ["Every Day I'm not Auto-resolving", "Complete an entire campaign, with 10 or fewer defeats, without auto-resolving."],
        ["Evocatus", "Complete 100 hours of gameplay."],
        ["Executioner", "Execute 1000 battle captives."],
        ["Fast & Lusitani", "Complete a campaign as the Lusitani."],
        ["Field Commander", "Win a quickmatch land multiplayer battle."],
        ["First Time Lucky", "Use at least 1 special ability during a campaign battle."],
        ["Furor Germanicus", "Complete a campaign as the Suebi."],
        ["Gallia Italiana", "Complete the Rise of the Republic campaign as the Senones."],
        ["Get Heiro, Baby", "Complete the Hannibal at the Gates campaign as Syracuse."],
        ["Getae In!", "Complete a campaign as the Getae."],
        ["Glory of the Father", "Complete the Imperator Augustus campaign as Egypt."],
        ["God of War!", "Complete 1000 hours of gameplay."],
        ["Gore-drenched", "Kill 1,000,000 men in battle."],
        ["Grand Tour", "Successfully capture all of the great cities of the ancient world, Rome, Athens, Carthage and Alexandria, in battle during a single campaign game."],
        ["Great Balls of Fire", "Field a ballista or large onager artillery unit in a siege battle during a campaign game."],
        ["Great Dynasty", "Expand your family to include 100 characters."],
        ["Greatest Armenia", "Complete the Grand Campaign as Armenia."],
        ["Heart & Soul", "Complete the Wrath of Sparta campaign as Korinthos."],
        ["Heir of Mithridates", "Complete a campaign as Pontus."],
        ["Heir of Pyrrhus ", "Complete a campaign as Epirus."],
        ["Hoist the Colours!", "Complete a campaign as the Ardiaei."],
        ["Hold Your Ground!", "Successfully defend an encampment, during a campaign, without losing more than 10% of your starting force."],
        ["Horse Called 'War'", "Complete the Empire Divided campaign as the Alani."],
        ["I Came, I Saw, I Conquered", "Win a campaign by military victory."],
        ["I Will Find a Way or Make One", "As Carthage, recruit a unit of elephants."],
        ["Impenetrable Wall", "Successfully defend a city without losing a single victory point during a campaign battle."],
        ["Imperator", "Win a campaign on legendary difficulty."],
        ["In the Footsteps of Great Men", "Complete a campaign chapter’s primary objective and all associated historical objectives."],
        ["In The Name Of Cariociecus", "Complete the Hannibal at the Gates campaign as the Lusitani."],
        ["In the Navy!", "Fight a battle with naval units in any campaign."],
        ["Insubredinaton", "Complete the Rise of the Republic campaign as the Insubres."],
        ["King of All Kings", "Complete the Empire Divided campaign as the Sassanid Empire."],
        ["King of Kings", "Complete the Imperator Augustus campaign as Parthia."],
        ["Legatus Legionis", "Win 50 land battles during campaign play."],
        ["Legendary Commander", "Attain the maximum rank with a general / admiral during a campaign."],
        ["Legio Victrix", "Attain the maximum rank with an army or navy during a campaign game."],
        ["Liberator", "Release 1000 battle captives."],
        ["Linen Legionnaire", "Complete the Rise of the Republic campaign as the Samnites."],
        ["Look to the Defences", "Successfully defend an encampment, during a campaign, without losing more than 25% of your starting force."],
        ["Loremaster", "Complete the heroic event chains for all five heroic factions (Rome, Gallic Rome, Palmyra, the Gothi and the Sassanids)."],
        ["Make Syracuse Great Again", "Complete the Rise of the Republic campaign as Syracuse."],
        ["Make War, Not Love", "Win at least one battle (any battle type in single player campaign, or multiplayer campaign) on 14/02/2015, Valentine’s Day."],
        ["Mare Nostrum", "Win 25 or more naval battles in a single campaign game."],
        ["Master Strategist", "Complete a campaign on Very Hard difficulty."],
        ["Master Tactician", "Play at least 50 multiplayer battles."],
        ["Masters of Germania", "Recover all three legionary eagles from Teutoburg Forest on normal difficulty or higher."],
        ["Mater Patriae", "Complete a campaign with a female faction leader."],
        ["Megas Basileus", "Complete a campaign as the Seleucid Empire."],
        ["Mr. Super-Clean", "Complete the Empire Divided campaign without allowing an outbreak of Plague in one of the regions you control."],
        ["My Kingdom for a Horse", "Complete a campaign as Royal Scythia."],
        ["My Kingdom for a Horse", "Complete the Rise of the Republic campaign as the Veneti."],
        ["No More the Fool", "Complete the Imperator Augustus campaign as Lepidus's Rome."],
        ["Noble Master", "Attain the maximum rank with a dignitary-type agent during a campaign."],
        ["Of Gold and Gods", "Complete a campaign as Kush."],
        ["Old School Republic", "Have a general that has been both a consul and dictator."],
        ["On Land & Sea", "Fight a combined battle during a campaign using both land and naval forces."],
        ["Optio", "Fight a battle from the campaign map without auto-resolving."],
        ["Pergamon Champion", "Complete a campaign as Pergamon."],
        ["Phalanx But No Thanks", "Win the Battle of Pydna on normal difficulty or higher."],
        ["Pharaoh of the World", "Complete a campaign as Egypt."],
        ["Philosopher King", "Complete a campaign as Athens."],
        ["Pincer Movement", "Win the Battle of Cannae on normal difficulty or higher."],
        ["Polymath", "Complete the Rise of the Republic campaign as Taras."],
        ["Pompeius Magnus", "Complete the Imperator Augustus campaign as Pompey's Rome."],
        ["Pontifex Maximus", "Construct a Pantheon during a Roman campaign."],
        ["Praefectus Classis", "Win 50 naval battles during campaign play."],
        ["Praetor", "Issue 10 edicts in a single campaign."],
        ["Primus Inter Pares", "Win a multiplayer campaign."],
        ["Princeps Civitatis", "Complete the Imperator Augustus campaign as Octavian's Rome."],
        ["Put On Your Red Light", "Complete a campaign as the Roxolani."],
        ["Quaestor", "Complete the Prologue campaign."],
        ["Queen of the Orient", "Complete the Empire Divided campaign as Palmyra."],
        ["Reclaiming the Desert", "Win the Battle of Raphia on normal difficulty or higher."],
        ["Restitutor Orbis", "Complete the Empire Divided campaign as Rome."],
        ["Rise of Numidia", "Complete a campaign as Masaesyli."],
        ["Roma Invicta", "Complete a campaign as Rome."],
        ["Romanus Maximus", "Complete the Empire Divided campaign as the Gothi."],
        ["Rome in Flames", "Win both campaign battles in Rise of the Republic, and capture Rome as a non-Roman faction."],
        ["Rome Wasn't Built in a Day", "Fully expand and upgrade a province capital."],
        ["Rostra", "Sink more than 10 enemy ships in a single campaign battle."],
        ["Sacred Petra", "Complete a campaign as Nabatea."],
        ["Scythian Legend", "Acquire the \"Plough and Yoke\", \"Axe\", and \"Bowl\" skills with a single character."],
        ["Second Founder of Rome", "Complete the Rise of the Republic campaign as Rome."],
        ["Seize the Initiative!", "Attack an encampment and win without losing more than 15% of your starting force."],
        ["Siege!", "Successfully siege and capture a city by seizing its victory points during a campaign battle."],
        ["Sightseeing", "Successfully capture one of the great cities of the ancient world, Rome, Athens, Carthage or Alexandria, in battle."],
        ["Slave-driver", "Enslave 1000 battle captives."],
        ["Spartan Supremacy", "Complete the Wrath of Sparta campaign as Sparta."],
        ["Spymaster", "Attain the maximum rank with a spy-type agent during a campaign."],
        ["Status Quo", "Achieve victory with any faction without getting involved in a secession or a civil war."],
        ["Strategist", "Complete a campaign on Hard difficulty."],
        ["Struck a Nervii", "Complete a campaign as the Nervii."],
        ["Supremacy", "Destroy or subjugate a faction."],
        ["Surprise!", "Successfully defeat the enemy when ambushed during a campaign."],
        ["Tactician", "Play at least 10 multiplayer battles."],
        ["Tempus Fugit", "Play 20 campaign turns."],
        ["That’s my Boii", "Complete a campaign as the Boii."],
        ["The Alexandrine War", "Win the Battle of the Nile on normal difficulty or higher."],
        ["The Boat that Rocked", "Successfully breach a wall using naval artillery in any battle."],
        ["The Die is Cast", "Become involved in a civil war."],
        ["The Gallic War", "Win the Battle of Alesia on normal difficulty or higher."],
        ["The Golden Age", "Complete the Wrath of Sparta campaign as Athenai."],
        ["The Great Escape", "Successfully escape from a campaign ambush battle with at least 75% of your starting units."],
        ["The Great Library", "Research all available technologies in a single campaign."],
        ["The Great Pretender", "Complete the Empire Divided campaign as Gallic Rome."],
        ["The Lost Eagle", "Defeat someone who already has this achievement in any multiplayer battle."],
        ["The New Hannibal", "Complete a campaign as Carthage."],
        ["The New Xerxes", "Complete a campaign as Parthia."],
        ["The Power of Three", "Use at least 3 different special abilities during a campaign battle."],
        ["The Punic War", "Win the Battle of Zama on normal difficulty or higher."],
        ["The Spice Must Flow", "Complete a campaign as Saba."],
        ["The Tower of Power", "Complete the Rise of the Republic campaign as the Iolei."],
        ["Their Legacy Lives On", "Win a campaign whilst fielding an army or fleet that has existed continuously since the start of your campaign. "],
        ["There Can Be Only One", "Complete the Empire Divided campaign as the Caledoni."],
        ["This Army Will Fight On", "Recover at least two legionary eagles from Teutoburg Forest on normal difficulty or higher."],
        ["This is Sparta!", "Complete a campaign as Sparta."],
        ["This is Total War!", "Win the game having declared war on every faction the turn you encountered them, as well as never negotiating a peace treaty."],
        ["Thrace for Impact", "Complete a campaign as the Odrysian Kingdom."],
        ["Tigranes Magnus", "Complete the Imperator Augustus campaign as Armenia."],
        ["Tomb Maker", "Complete the Rise of the Republic campaign as Tarchuna."],
        ["Tyrannus", "Complete a campaign as Syracuse."],
        ["Unitas in Varitete", "Upgrade all three cults to their maximum level in a single region during the Empire Divided campaign."],
        ["Unite the Tribes", "Complete the Empire Divided campaign as the Marcomanni."],
        ["Unity is Power", "Complete the Empire Divided campaign as Armenia."],
        ["Unleash Hades!", "Kill 200 men with siege artillery in any single battle."],
        ["Vae Victis", "Sack the city of Rome as a barbarian tribe in the Grand Campaign"],
        ["Veni, Vidi, Vici!", "Complete an entire campaign, winning every battle, without auto-resolving."],
        ["Vercingetorix", "Complete a campaign as the Arverni."],
        ["Veteran", "Complete 10 hours of gameplay."],
        ["Veteranus", "Attain the maximum rank with any unit during a campaign."],
        ["Walled Crown", "Win 25 siege attack battles during campaign play."],
        ["Warring States", "Help either Sparta, Corinth, or Athens to win the war."],
        ["Warrior Queen of the Iceni", "Win a battle with Boudica."],
        ["We Can’t Axe for More", "Complete a campaign as the Massagetae."],
        ["Weapon of Mass Destruction", "Kill 5000 men in battle with siege artillery during the course of a campaign game."],
        ["When in Rome…", "Win a campaign by cultural victory."],
        ["Where Ares Dances", "Complete the Wrath of Sparta campaign as the Boiotian League."],
        ["Winds of Change", "Complete the Empire Divided campaign as the Saxoni."],
        ["Wipe Them Out… All of Them!", "Win a campaign battle having completely wiped out all enemy units, a minimum of 1000 men, before claiming victory."],
    ];

    assert.strictEqual(officialAchievements.length, 188, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
