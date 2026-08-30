import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/imperator-rome.json - 72 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 859580 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("imperator-rome");

test("getPlannerData('imperator-rome') returns real planner data with 72 curated achievements", () => {

    assert.ok(game, "expected real planner data for imperator-rome");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 72);

});

test("every Imperator: Rome achievement has a unique id from 1 to 72 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 72 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 72);
    assert.strictEqual(new Set(apinames).size, 72);

});

test("every Imperator: Rome achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 72 Imperator: Rome achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Home", "Settle a new territory as a Migratory Tribe."],
        ["Alea Iacta Est", "Have an appointed Dictator refuse to give up power."],
        ["An Unexpected Turn", "As Grania, Raumaricia, Suionia, Leuonia, Guthonia, Dania or Burgundia, build an Ivory Tower in Uppakra with all effects upgraded to Tier 4."],
        ["Antipater's Dream", "As Macedonia, own the region of Greece."],
        ["Ashoka's Pillars", "As the Mauryas, conquer all of India, convert to Buddhism, and have at least 80% Religious Unity."],
        ["Brennus' Revenge", "As a Gallic Tribe, desecrate all Hellenic Holy Sites in Greece before 480 AUC."],
        ["Carthago Delenda Est", "As Rome, own and sack the city of Carthage."],
        ["Catch them All", "As a Polytheistic country, have a State Pantheon composed entirely of deified rulers."],
        ["Cincinnatus", "Appoint a Dictator, and have the same Dictator voluntarily stand down."],
        ["City of the World's Desire", "Have 15 Trade Routes in Byzantium."],
        ["Do Not Disturb My Circles", "Research 40 inventions."],
        ["Envy of the World", "Have any owned city with 100 or more Civilization Value."],
        ["Eumenes' Footsteps", "As Cappadocia, keeping Macedonian primary culture, become independent and conquer Alexandria and Babylon."],
        ["Garum Nobile", "In any owned city, produce a surplus of at least 10 fish."],
        ["Gazophylax This!", "As Thrace, kill the ruler of the Antigonid Kingdom, by completing the “Poetic Justice” mission task."],
        ["Germania Magna", "As a Germanic nation, own every city in the regions of Germania, Germania Superior, Vistulia, and Boiohaemum."],
        ["Hall of the Mountain King", "As Armenia, construct a level XV Fortress."],
        ["Heraclea Persica", "Starting as Heraclea Pontica, form Persia whilist your ruler belongs to the Achaemenid dynasty."],
        ["Hispania Universalis", "Form Greater Iberia"],
        ["Holy Fire", "Desecrate Holy Sites for at least 10 different religions."],
        ["Holy Pilgrim", "As a Jewish country, own and control all original Jewish Holy Sites: Ekbatana, Oros Chorib, Apologos, Jerusalem, Ephraim, Sousa, Kadasa and Aqola."],
        ["Imperial Ambition", "Adopt the Empire government form."],
        ["International Relations", "With your current ruler, acquire two other ruler-level friends."],
        ["King of the Blind", "As the Antigonid Kingdom, enact the decision “Secure Antigonid Position”."],
        ["Kingdom of David", "Starting as a Jewish nation, own the regions of Palestine and Syria, as well as the areas of Sinai, Eastern Delta, Central Delta, Memphis, Euphrates, Niniveh, Mespotamia Superior, Tigris, Babylonia, Asoristan, and Veh Kavad."],
        ["Ktistes", "Starting as Kios, form Pontus."],
        ["Laconic If", "As Sparta, conquer and sack Pella before 480 AUC."],
        ["Land of the Rising Sun", "As a country in the Anatolian Culture Group, own, or have a subject own, the regions of Asia, Phrygia, Cilicia, Bithynia et Paphlagonia, Cappadocia Taurica and Armenia."],
        ["Legacy of Aristotle", "Have four Researchers with at least 11 finesse each."],
        ["Legio Augusta", "Own a Legion with X honors."],
        ["Mare Nostrum", "As Rome, own every city adjacent to the Mediterranean Sea."],
        ["Megalopolis", "As the nation of Megalopolis, have at least 80 pops in the city of Megalopolis."],
        ["Molon Labe!", "As Sparta, conquer and sack the city of Persepolis."],
        ["Mystery Solved", "As a Megalithic country, own at least 20 cities producing Stone, and the city of Cunetio."],
        ["New Kingdom", "Form Egypt, enact the Egyptian Succession law, and conquer the regions of Nubia and Syria."],
        ["Nikator", "As the Seleucid Empire, conquer Pella before the death of Seleucus Nikator."],
        ["No More Worlds Left to Conquer", "Reform Alexander's Empire as a successor state."],
        ["On the Measure of the Earth", "As any Greek nation, build Towers in Omboi and Alexandria."],
        ["Over 9000!", "Have at least 9000 pops."],
        ["Pan-Hellenic League", "As any Greek Republic, own the entire region of Greece."],
        ["Panem Et Circenses", "Compete in the Olympic Games on at least 10 occasions."],
        ["Pax Aeterna", "Conquer the world."],
        ["Pentecontaetia", "As Athens, be independent and own Delos, Naxos, Kassandreia, Thaso, Chalkis, Samos, Sestos, Kition, Salamis, and Oreos before 500 AUC."],
        ["Perfidious Albion", "Form Albion before the year AUC 500."],
        ["Periplus of the Seas", "As Egypt, own or have a subject own the Aegean Islands, Rhodes, Sicily, Sardinia, Cyprus, Alalaiou (Dahkla), Devada, Diouscourides (Socotra), Tylos (Bahrain), Sri Lanka, Mliet/Malta, Yermena, Corsica, Gymnaesia (Baleares), Korkyra and Qarkna."],
        ["Potter to King", "As Syracuse, conquer all of Sicily by the death of your ruler, Agathocles."],
        ["Proclamation of Tyre", "As a Greek Republic, have Macedon, Egypt, the Seleucid Empire, Thrace or the Antigonid Empire as a subject."],
        ["Punic Ascendance", "As Carthage, own or have a subject own all of Hispania."],
        ["Pyrrhic Victory", "As Epirus, own Rome."],
        ["Pytheas' Legacy", "As Massalia, own at least one territory in Dumnonia and Cantiacia, as well as one territory in the Scandia region, and the territory of Orcades, before 550."],
        ["rednaxelA", "Starting as a Hindu, Buddhist, or Jain nation, which is not the Mauryas, conquer Pataliputra, Babylon, Memphis, and Athens."],
        ["Render Unto Caesar", "Conquer a city."],
        ["Soldier of Fortune", "Send a disloyal pretender away to be a Mercenary."],
        ["Soter", "As Egypt, own all of the historical wonders of the world, through conquest or construction."],
        ["Strategic Reserve", "Import at least one of each Strategic resource to your capital province."],
        ["The Besieger", "As the Antigonids, sack the territories of Babylon, Alexandria, Lysimacheia, and Pella."],
        ["The Bois Are Back in Town", "As Boi, conquer or colonize the entire region of Boiohaemum."],
        ["The Corners of the World", "As any nation, build Great Wonders in Safim, Orcades, Sadiya, Odoka and Agawe."],
        ["The Great Destroyer", "Playing as any nation from the Veneti, Germanic, Pretani, Gaelic, Gallic, Celt-Iberian, Iberian or Pre-Indo-European culture groups, conquer and destroy 10 Great Wonders."],
        ["The Man who would be King", "As Bactria, become independent, and conquer the regions of Ariana, Bactria, and Gandhara."],
        ["The Romans are Crazy", "Form Gaul."],
        ["The Spice Must Flow", "As Mosylon, own every Spice producing city in the world."],
        ["Three Great Fires", "Form Persia, and own Ganzak, Nevshapur, and Gur."],
        ["Times New Roman", "As Rome, conquer the cities of Cariala, Italica, and Aquae Helveticae."],
        ["To the End of the World", "As the Seleucid Empire or Bactria, conquer the regions of Gandhara, Mahdyadesa, Pracya, Maru, and Avanti."],
        ["Tribal Assembly", "As a Tribe, enact the decision to become a Republic."],
        ["Tribal Concord", "Whilst you have a tribal government form, change a Law."],
        ["Triumvir", "Survive a Civil War."],
        ["True Vandal", "As a Vandal nation, own any territory in the regions of Mauretania, Numidia, Africa, or Cyrenaica, and occupy Rome in a war."],
        ["Tyrian Purple", "Form Phoenicia, own at least 500 ships, and produce a surplus of at least 5 dyes in Tyrus."],
        ["What have the Romans ever done for us?", "As Rome, own at least one City with 70 or more Civilization Value in each Province within the Palestine region."],
        ["Wonder Builder", "Build a Great Wonder."],
    ];

    assert.strictEqual(officialAchievements.length, 72, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
