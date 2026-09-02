import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-rome-remastered.json - 192 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 885970 (fetched through this app's own services/steamApi.js).
// None of the achievements are hidden - every description is Steam's own
// verbatim text. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("total-war-rome-remastered");

test("getPlannerData('total-war-rome-remastered') returns real planner data with 192 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-rome-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 192);

});

test("every Total War: ROME REMASTERED achievement has a unique id from 1 to 192 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 192 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 192);
    assert.strictEqual(new Set(apinames).size, 192);

});

test("every Total War: ROME REMASTERED achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 192 Total War: ROME REMASTERED achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Sprint, Not a Marathon", "Achieve victory in the Greek short campaign"],
        ["A Very Large Oxhide in Very Thin Strips", "Achieve victory in the Carthaginian long campaign"],
        ["About Thrace", "Defeat Thrace"],
        ["Afri-carnage", "Achieve victory in the Scipii short campaign"],
        ["Ain't it Grand to be Blooming Well Dead!", "Defeat the Romano British"],
        ["Alexander the Great Struck Fear into the Heart of Persia", "Capture all the Persian port settlements in Alexander"],
        ["Alexander the Great, a God Among Men", "Achieve victory in the Alexander campaign on very hard mode"],
        ["Alexander the Great, He Died of Fever in Babylon", "Defeated due to Alexander dying of plague"],
        ["Alexander Turning in His Grave", "Defeat Macedon"],
        ["Alexander, a Legend Among Men", "Achieve victory in the Alexander campaign"],
        ["And Without Those Anti-Elephant Wagons, Too...", "Achieve victory in the battle of Asculum"],
        ["Any Time, Any Place", "Win a Quick Battle"],
        ["Arching for Victory", "Win as Dahae in a multiplayer match"],
        ["Back to Bornholm", "Defeat the Burgundii"],
        ["Battle Tanks in an Age of Spears", "Achieve victory in the Armenia long campaign"],
        ["Benevolent Dictator", "Occupy a settlement"],
        ["Berber-ian Invasion", "Achieve victory in the Berber campaign"],
        ["Beside The Black Seaside", "Defeat Pontus"],
        ["Better Luck in the Fifteenth Century", "Defeat Spain"],
        ["Better luck next millenium", "Defeat Britannia"],
        ["Between the Hammer and the Anvil", "Achieve victory in the Macedon short campaign"],
        ["Blessed Victory", "Complete all historical battles in Alexander"],
        ["Bloodlust", "Continue a battle after you have already won"],
        ["Blue Meanies", "Achieve victory in the Celts campaign"],
        ["Bringing the Sass", "Achieve victory in the Sassanids campaign"],
        ["Brutal Defeat", "Defeat the Brutii Faction"],
        ["Brutal Victory", "Achieve victory in the Brutii long campaign"],
        ["Bu-But I Do Want to Play as Pontus!", "Achieve victory in the Pontus short campaign"],
        ["By The Book", "Play as Macedon in a multiplayer match"],
        ["Bye-Byzantium", "Achieve victory in the Eastern Roman Empire campaign"],
        ["C'mon Baby Light my Fire", "Make Zoroastrianism the majority religion"],
        ["Carry Death Out of the Village", "Spread plague to other settlements through one of your agents"],
        ["Carthago delenda est", "Defeat Carthage"],
        ["Caught Scipii-ing", "Defeat the Scipii Faction"],
        ["Celtic brothers", "Achieve victory in the battle of Telamon"],
        ["Charlemagne-ia", "Achieve victory in the Franks campaign"],
        ["Choose Your Own Adventure", "Set up and play a Custom Battle"],
        ["Civilisation Halted", "Defeat the Sassanids"],
        ["Clash of the Titans", "Capture Statue of Zeus at Olympia"],
        ["Cleitus the Black Seals His Fate", "Achieve victory at the Battle of Granicus River"],
        ["Coffin Fodder", "Defeat the Goths"],
        ["Comfortably Numidia", "Defeat Numidia"],
        ["Commodus in the Arena", "Win a Custom Battle"],
        ["Conqueror", "Defeat the Senate as a non-Roman faction"],
        ["Constanti-nope-le", "Defeat the Eastern Roman Empire"],
        ["Crossing the Rubicon", "Defeat one other Roman Faction as a Roman faction"],
        ["Cultural Conquest", "Defeat the Illyrian faction"],
        ["Cultural Monopoly", "Hold all the wonders in the game"],
        ["Cutting the Gordian Knot Again", "Achieve victory in the Seleucid short campaign"],
        ["Dahae Hard", "Defeat the Dahae faction"],
        ["Darius III's Revenge", "Win as Persians in a multiplayer match"],
        ["Darius' First Stand", "Achieve victory in the Battle of Issus"],
        ["Darius' Last Stand", "Achieve victory at the Battle of Gaugamela"],
        ["Diadochi Underdog", "Achieve victory in the Pontus long campaign"],
        ["Divided They Fall", "Defeat the Western Roman Empire"],
        ["Do You Even Lift?", "Declared Strongest faction"],
        ["Ecstasy and Danger", "Achieve victory in the Ostrogoth campaign"],
        ["Enduring Wonder", "Capture The Great Pyramid and Sphinx of Giza"],
        ["Even That Little Armorican Village...", "Defeat Gaul"],
        ["Every Day is Halloween", "Achieve victory in the Goths campaign"],
        ["Everything's Better With Elephants", "Play as India in a multiplayer match"],
        ["Falxes are Overpowered in d20", "Achieve victory in the Dacia long campaign"],
        ["Father and Son", "Achieve victory at the Battle of Chaeronea"],
        ["Feminist Wave", "Achieve victory in the Scythia long campaign"],
        ["Fight 'til you Drop", "Play a defender in a Multiplayer siege match"],
        ["Flawless Victory!", "Achieve a clear victory in a battle"],
        ["Fog on the Rhine", "Defeat Germania"],
        ["Frankly my dear...", "Defeat the Franks"],
        ["Frater, Can You Spare a Dime?", "Go bankrupt"],
        ["Fresh Mint", "In Barbarian invasion, fix the debased currency of the late Roman Empire"],
        ["Full Octavian", "Achieve victory in the Western Roman Empire campaign"],
        ["Get Your Hands Dirty", "Complete a campaign without auto-resolving a single battle"],
        ["Global Monopoly", "Use merchants to control every node on the map of one resource type"],
        ["Go Light or Go Home", "Achieve victory in the Numidia short campaign"],
        ["Gold Rush", "Achieve victory in the battle of Carrhae"],
        ["Gotta Catch 'Em All", "Control every resource in one region"],
        ["Grand Cru", "Achieve victory in the Burgundii campaign"],
        ["Hail Caesar!", "Achieve victory in the Julii long campaign"],
        ["Hannibal riding high", "Achieve victory in the battle of Lake Trasimene"],
        ["Having a Ba'al", "Achieve victory in the Carthaginian short campaign"],
        ["He Founded a City, and Called it Alexandria", "Capture Rhacotis"],
        ["He Wept For There Were No More Worlds to Conquer", "Conquer every region on the campaign map"],
        ["He's Not the Messiah, He's a Very Naughty Boy", "Make Christianity the majority religion"],
        ["Heavy Metal Thunder", "Achieve victory in the Saxons campaign"],
        ["Hell(enistic) of a Showdown", "Achieve victory in the battle of Raphia"],
        ["Hellenism's End", "Defeat the Seleucid Empire"],
        ["Hellenistic Civilisation", "Win as Macedon in a multiplayer match"],
        ["Here Comes the Hot Stepper", "Achieve victory in the Scythia short campaign"],
        ["Historical Rematch", "Play as Persians in a multiplayer match"],
        ["Histria repeating", "Defeat Dacia"],
        ["Horses for Courses", "Defeat the Sarmatians"],
        ["Hun and Gun", "Achieve victory in the Huns campaign"],
        ["Huns on the Run", "Defeat the Huns"],
        ["I Am the God of Hellfire...", "Achieve victory in the Sarmatians campaign"],
        ["I Don't Like Sand", "Defeat the Berbers"],
        ["I Shed Saxon Blood!", "Defeat the Saxons"],
        ["Iberian Adventures", "Achieve victory in the Spain long campaign"],
        ["Iberian Holiday", "Achieve victory in the Spain short campaign"],
        ["Ich bin ein Berliner!", "Achieve victory in the German long campaign"],
        ["In Cahoots with the Mahouts", "Send a unit of elephants into battle"],
        ["In the Footsteps of Alexander", "Achieve victory in the Seleucid long campaign"],
        ["Islands in the Stream", "Achieve victory in the Scipii long campaign"],
        ["It's A Trap!", "Achieve victory in the battle of the River Trebia"],
        ["It's All Greek", "Achieve victory in the Greek long campaign"],
        ["Keep Your Hands Clean", "Complete a campaign and auto-resolve all battles"],
        ["Let Slip the Dogs of War", "Use a Wardog unit"],
        ["Life in the Great Outdoors", "Abandon a settlement and return to a Horde"],
        ["Light The Way", "Capture Pharos of Alexandria"],
        ["Lights Out", "Defeat the Roxolani"],
        ["Like a Boss-phoran", "Achieve victory in the Roxolani campaign"],
        ["Little Caesar", "Achieve victory in the Julii short campaign"],
        ["Live To Win", "Achieve victory in a Multiplayer match"],
        ["Lombarded", "Defeat the Lombardi"],
        ["Make it Rain", "Declared Richest faction"],
        ["Maximum Efficiency", "Achieve victory in the German short campaign"],
        ["My Trade Goods Bring all the Boys to the Yard", "Have three or more foreign merchants in a region you control"],
        ["Mysterious Melee", "Play as Dahae in a multiplayer match"],
        ["Nasty, Brutish and Short", "Achieve victory in the Brutii short campaign"],
        ["Nobody's Vassal", "Achieve victory in the Armenia short campaign"],
        ["Not Just a Pretty Thrace", "Achieve victory in the Thrace short campaign"],
        ["Not-so-mindless Vandalism", "Achieve victory in the Vandals campaign"],
        ["Now Go Play The Expansion!", "Achieve victory in the Macedon long campaign"],
        ["Ostracised", "Defeat the Ostrogoths"],
        ["Own it!", "Have merchants on every resource type on the map"],
        ["Parthe gone", "Defeat the Greek Cities"],
        ["Parthian Shot", "Defeat Parthia"],
        ["Parthing the Time", "Achieve victory in the Parthian long campaign"],
        ["Patrician Realness", "Have a merchant from a large town trade purple dye"],
        ["Personal Vendetta", "Defeat the Scythia faction"],
        ["Phalanx for the Memories", "Achieve victory in the battle of Cynoscephalae"],
        ["Pict On", "Defeat the Celts"],
        ["Poor Suebi", "Defeat the Alemanni"],
        ["Porus Defence", "Achieve victory at the Battle of the Hydaspes"],
        ["Proud Member of the Midnight Crew", "Play a Night Battle for the first time"],
        ["Ptolemnity", "Defeat Egypt"],
        ["Quintili Vare, Legiones Redde!", "Achieve victory in the battle of Teutoburg Forest"],
        ["Raze-ing Hell", "Exterminate a settlement"],
        ["Rebel Rebel", "Defeat the Western Roman Rebels"],
        ["Rebel Yell", "Defeat the Eastern Roman Rebels"],
        ["Rock Me, Marius", "Reach the Marius Event"],
        ["Rock, Paper, Scissors?", "Draw in a battle"],
        ["Romanes Eunt Domus", "Defeat the Julii Faction"],
        ["Romano-Britain's Got Talent", "Achieve victory in the Romano-British campaign"],
        ["Rome Takes Notes", "Complete all historical battles in Alexander on very hard mode"],
        ["Rule Britannia", "Achieve victory in the Britannia long campaign"],
        ["Scorched Earth Tactics", "Achieve victory at the Siege of Halicarnassus"],
        ["Shadow of the Colossus", "Capture Colossus of Rhodes"],
        ["Short-lived Alliance", "Achieve victory in the battle of Chalons"],
        ["Sikandar", "Win as India in a multiplayer match"],
        ["Skin of Your Teeth", "Achieve a close victory in battle"],
        ["Slavish Devotion", "Defeat the Slavs"],
        ["Slavs to the Rhythm", "Achieve victory in the Slavic campaign"],
        ["Spartacus Would be Proud", "Achieve victory in the Thrace long campaign"],
        ["Start as You Mean to Go On", "Achieve victory in your first campaign battle without auto-resolving"],
        ["Steppe Down", "Defeat Scythia"],
        ["Stonehenge, 'Tis a Magic Place", "Make Paganism the majority religion"],
        ["Suebi Got Back", "Achieve victory in the Alemanni campaign"],
        ["Superior Tactics", "Defeat the Persia faction"],
        ["Take It All", "Play an attacker in a Multiplayer siege match"],
        ["Take These Chains", "Enslave a settlement"],
        ["Talk the Torc", "Achieve victory in the Britannia short campaign"],
        ["The British Museum Strikes Again", "Capture the Mausoleum of Halicarnassus wonder"],
        ["The Darker the Night, the Brighter the Stars", "Win a Night Battle without using Auto-resolve"],
        ["The Empire Strikes Back", "Achieve victory in the siege of Gergovia"],
        ["The Hardest Route", "Achieve victory in the Numidia long campaign"],
        ["The Hunter and the Hunted", "Capture Temple of Artemis at Ephesus"],
        ["The Iron Crown", "Achieve victory in the Lombardi campaign"],
        ["The Quickest Parth", "Achieve victory in the Parthian short campaign"],
        ["The Sheer Gaul", "Achieve victory in the Gaul long campaign"],
        ["The Student Becomes the Master", "Complete the Tutorial"],
        ["The Sun Never Sets...", "Declared Largest faction"],
        ["This is Sparta!", "Achieve victory in the siege of Sparta"],
        ["This Little Piggy...", "Use an Incendiary Pig unit"],
        ["Thrace the Truth", "Defeat the Thrace faction"],
        ["Tigranes the not-so-Great", "Defeat Armenia"],
        ["Time Commanders Participation Award", "Achieve victory in all Historical Battles"],
        ["Tinker, Tailor, Soldier, Spy...", "Recruit every type of agent in the game"],
        ["Top of the Pile", "Defeat two other Roman Factions as a Roman faction"],
        ["Transylvanian Hunger", "Achieve victory in the Dacia short campaign"],
        ["Trip to Giza", "Achieve victory in the Egyptian short campaign"],
        ["Ultimate Sacrifice", "Achieve victory in a battle where your general dies"],
        ["Usurper", "Defeat the Senate as a Roman faction"],
        ["Vandemonium", "Defeat the Vandals"],
        ["Veni, Vidi, Vici", "Win every land battle in the campaign"],
        ["Walk Like an Egyptian", "Achieve victory in the Egyptian long campaign"],
        ["We Can Still Do This Without Him, Right?", "Defeated due to Alexander dying in battle"],
        ["We Demand... A Shrubbery!", "Capture Hanging Gardens of Babylon"],
        ["Who Are You, Who Are So Wise in the Ways of Science?", "Declared Most Advanced faction"],
        ["Whosever Pulleth Out This Sword...", "Achieve victory in the battle of Badon Hill"],
        ["With a Little Help From My Friends", "Fight a battle with reinforcements"],
        ["You Big Brained Barbarian You", "Achieve victory in all Historical Battles"],
        ["Your Place or Rhine?", "Achieve victory in the Gaul short campaign"],
    ];

    assert.strictEqual(officialAchievements.length, 192, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
