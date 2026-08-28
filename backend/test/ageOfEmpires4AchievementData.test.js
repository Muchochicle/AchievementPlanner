import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-empires-4.json - 175 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1466860 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 175 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("age-of-empires-4");

test("getPlannerData('age-of-empires-4') returns real planner data with 175 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-empires-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 175);

});

test("every Age of Empires IV achievement has a unique id from 1 to 175 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 175 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 175);
    assert.strictEqual(new Set(apinames).size, 175);

});

test("every Age of Empires IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 175 Age of Empires IV achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["'Tis But a Scratch", "Heal allied units by 500 health with the Hospitaller Knight."],
        ["A First for the Emperor", "Win a match as the Japanese."],
        ["A Golden Age", "Achieve the third tier of the Golden Age as the Abbasid Dynasty."],
        ["A Heraldic Achievement", "Customize your coat of arms."],
        ["A New Age Is Upon Us", "Complete the Introductory Tutorial."],
        ["A Rose for the Fallen", "Survive the Aftermath of Towton."],
        ["A Wonderful Cannon", "Destroy a Wonder with a Great Bombard as the Ottomans."],
        ["Accurate Likeness", "Equip your first portrait."],
        ["Aerial Poisoned Attacks", "Defeat 500 units with Poisoned Arrow as the Malians."],
        ["Against All Odds", "Defeat the French army at Agincourt."],
        ["Age of Empires IV Campaign", "Complete the Age of Empires IV campaigns"],
        ["All Creek, No Paddle", "Sink an enemy Transport Ship that is garrisoned to max capacity."],
        ["All in the Ranch", "Garrison 20 Cattle in Ranches at the same time as the Malians."],
        ["All Mine", "Gather Gold 1,000 times from Open Pit Mines as the Malians."],
        ["All the World's Knowledge", "During a match, research everything in the wings of the Abbasid House of Wisdom."],
        ["An Offer They Couldn’t Refuse", "Bribe 10 enemies in a single match."],
        ["Ancient Tower Defense", "Kill 50 enemies with Wooden Fortresses during the Great Stand on the Ugra River."],
        ["Battle Royal", "Field a Royal siege unit with all the brothers' bonuses during Retake Normandy."],
        ["Be Subtle", "Reveal 300 Villagers with a single use of Imperial Spies as the Chinese."],
        ["Big Game Hunter", "Earn 500 Gold from bounties in a match as the Rus."],
        ["Big Shot", "Destroy 1,000 enemy units with gunpowder siege engines as the French."],
        ["Blot out the Sun", "As the House of Lancaster, hit 500 times using the Yeoman's Synchronized Shot."],
        ["Bombard Barrage", "Destroy 150 buildings with Early Ozutsu."],
        ["Boom Boom Pao", "Don't lose any Huihui Pao during the Fall of Xiangyang."],
        ["Bulwark", "Defeat 200 enemies with Limitanei while Shield Wall is active as the Byzantines."],
        ["By Faith", "Achieve a Sacred Victory."],
        ["By Force", "Achieve a Landmarks Victory."],
        ["By Fortune", "Achieve a Wonder Victory."],
        ["By Odin's Beard", "Gain 500 free units from the Varangian Warcamp."],
        ["Careful Cannons", "Win the Battle of Formigny without losing any cannons."],
        ["Castle Crasher", "Destroy an enemy building with the Trebuchet Emplacement."],
        ["Challenge Taker", "Earn your first Gold Medal in an Art of War challenge."],
        ["Chivalry", "Enlist the aid of 45 Knights during the Battle of Tinchebray."],
        ["Classic Conquest", "Destroy all enemy units and production buildings during the Siege of Kazan."],
        ["Coast Is Clear", "Win a match during which fishing was your only source of gathered Food."],
        ["Conqueror of History", "Complete all Historical Battles in Conqueror Mode."],
        ["Counter-Raider", "Loot the Danish war camp during the North to York mission."],
        ["Daimyo Dance-Off", "Defeat 50 Elephants with Kanabo Samurai."],
        ["Daimyo Mastery", "Spend Stone to research all Town Center upgrades as the Japanese."],
        ["Deforestation", "Gather Wood 1,000 times as the Rus."],
        ["Do You Deliver?", "Accrue 1,000 Food from Traders in a single match as the French."],
        ["Dread Fort", "Kill 100 enemies with Keeps as the English."],
        ["Du Bois Are Back in Town", "Win in the arena without losing more than 10 units during the Combat of the Thirty."],
        ["Elevated Theology", "Have Healer Elephants heal 100 melee infantry units in a single match."],
        ["Empires Will Rise", "Construct your first Landmark."],
        ["Established Lands", "Win 20 matches as the Japanese."],
        ["Exchange Rates", "Convert Stone to Gold at a Forge 250 times in a single match as the Japanese."],
        ["Explore, Expand, Exploit", "Accrue 10,000 Stone in a single match as the Mongols."],
        ["Feeding the Rich", "Generate 2000 Gold with the Pilgrim Loan at the market."],
        ["Field Construction", "Build a Stone Wall, Gate, and Tower using infantry as the Delhi Sultanate."],
        ["Fill the Coffers", "Collect every treasure chest during the Battle of Patay."],
        ["Forgot a Batu", "Kill double the enemies as Batu when assaulting the bridge in the Battle of Mohi."],
        ["Four Histories", "Establish all of the Dynasties in a single match as the Chinese."],
        ["From the Shadows", "Attack 100 enemies with invisible Musofadi Warriors or Gunners in a single match as the Malians."],
        ["Get Off My Bailey!", "Stop the Mongols from entering the outer city during Hold Against the Horde."],
        ["Get Off My Lawn", "Destroy the army besieging Safed."],
        ["Getting Some Help", "Recruit 60 mercenaries from a Mercenary House in a single match as the Byzantines."],
        ["Giddy Up!", "Field 50 units using Grassland horses."],
        ["Gingko’s Grandeur", "Earn a Gold Medal on Daimyo Dynamics in the Crucible."],
        ["Good Karma", "Achieve the Mountain Gate’s blessing 3 times in a single match."],
        ["Great Things", "Win a Multiplayer or Skirmish match with Macedonian Dynasty."],
        ["Great Walls", "Construct 1,000 Stone Walls as the Chinese."],
        ["Gunpowder Mastery", "Defeat 50 siege units using Ozutsu units as the Japanese."],
        ["Having a Blast", "Destroy 5 enemies with a single Demolition Ship detonation."],
        ["Hell of a Beat", "Defeat 500 enemies with units affected by Mehteran as the Ottomans."],
        ["Herd You Like Elephants", "Destroy 100 enemy buildings with your elephants as the Delhi Sultanate."],
        ["High-Human Hero", "Win a 1v1 match against the Hard A.I."],
        ["Higher Education", "Have 20 Scholars garrisoned in a Madrasa as the Delhi Sultanate."],
        ["Hope Is Kindled", "Extend the Network of Castles alarm across 12 buildings simultaneously as the English."],
        ["In Memory of Kulikovo", "Enhance 10 units with a single Saint's Blessing strike as the Rus."],
        ["In the Lead by a Quarter Nile", "Capture all Control Points during Into Egypt."],
        ["Inspired Economics", "Have at least 60 simultaneously inspired Villagers as the Holy Roman Empire."],
        ["Itadakimasu!", "Completely fill a Matsuri festival with Yatai carts."],
        ["Jagutu-iin Darga", "Enhance 100 units with a single Khan Signal Arrow as the Mongols."],
        ["Jerusalem Has Come", "Capture all Sacred Sites and drive the Ayyubids out of Montgisard."],
        ["Journey to the Sacred Land", "Have 50 Knights Templar Pilgrims reach a sacred site."],
        ["Just a Prick", "Defeat a Heavy Cavalry unit with a Poisoned Arrow as the Malians."],
        ["Just Like Batu Khan", "Win a Multiplayer or Skirmish match with Golden Horde."],
        ["Keep the Change", "Pay off the Mongols within 3 minutes during the Tribute mission."],
        ["Kingdoms Will Fall", "Defeat 20 enemy units."],
        ["Knife to Meet You", "Kill 50 units with Earl's Guards after researching Throwing Dagger Drills."],
        ["Lancerlot", "Charge an enemy with 50 Royal Knights simultaneously as the French."],
        ["Lead the Charge", "Empower at least 30 units with all 4 Lords of Lancaster at once."],
        ["Let It Flow", "Accrue 2,000 Olive Oil in a single match as the Byzantines."],
        ["Let There Be Fire", "Destroy 50 buildings with Cheirosiphons as the Byzantines."],
        ["Let’s Goooooooooo!", "Gain 250 free Kharash from the Kharash Golden Tent Edict."],
        ["Long Live the Khan", "Win a match without your Khan being killed as the Mongols."],
        ["Lords of the Forest", "Earn a Gold Medal on Forest Lords in the Crucible."],
        ["Make It Quick", "Achieve a Landmarks Victory in the Dark Age (I)."],
        ["Malian Rise", "Win a match as the Malians."],
        ["Master Naval Trader", "Have 20 Trade Ships trading simultaneously during the Raiders of the Red Sea."],
        ["Master Negotiator", "Subdue Zhang Yong without breaching his walls in the Southern Rebels mission."],
        ["Master of the Abbasid Dynasty", "Complete the Abbasid Dynasty Mastery."],
        ["Master of the Ages", "Complete all Civilization Masteries."],
        ["Master of the Chinese", "Complete the Chinese Mastery."],
        ["Master of the Delhi Sultanate", "Complete the Delhi Sultanate Mastery."],
        ["Master of the English", "Complete the English Mastery."],
        ["Master of the French", "Complete the French Mastery."],
        ["Master of the Holy Roman Empire", "Complete the Holy Roman Empire Mastery."],
        ["Master of the Jin Dynasty", "Complete the Jin Dynasty Mastery."],
        ["Master of the Malians", "Complete the Malian Mastery."],
        ["Master of the Mongols", "Complete the Mongol Mastery."],
        ["Master of the Ottomans", "Complete the Ottoman Mastery."],
        ["Master of the Rus", "Complete the Rus Mastery."],
        ["Mobile Strikes", "Defeat 100 ranged units with a Sipahi unit as the Ottomans."],
        ["More Cuman than Cuman", "Have 50 Torguud die in place of a Khan."],
        ["Move Like Wind, Attack Like Fire", "Defeat 1,000 enemy units with the Nest of Bees as the Chinese."],
        ["My House is Richer Than Yours", "Generate 4000 Gold with Manors in one match."],
        ["No Luck Needed", "Win a Multiplayer or Skirmish match with Tughlaq Dynasty."],
        ["Ottoman Expansion", "Win a match as the Ottomans."],
        ["Overflow", "Build 10 Cisterns in a single match as the Byzantines."],
        ["Pantomath", "Research all technologies in a match as the Delhi Sultanate."],
        ["Par-Human Potentate", "Win a 1v1 match against the Intermediate A.I."],
        ["Pass the Marshmallows", "Use the Setup Camp ability 20 times as the English."],
        ["Precious Medals", "Earn a Medal in 3 Art of War challenges."],
        ["Protecting Constantinople", "Win 20 matches as the Byzantines."],
        ["Protecting Us", "Heal 20 units using Shinto Priest units in a single match as the Japanese."],
        ["Quick Study", "Complete your first Civilization Mastery task."],
        ["Quit Touching Me!", "Stop any of the city's walls being destroyed during the Siege of Wallingford."],
        ["Raiding Party", "Raid an enemy building in the Dark Age (I) as the Mongols."],
        ["Ready and Waiting", "Defeat 50 enemies using Meng’an Mouke Defenders."],
        ["Ready, Aim, Fire!", "Kill 50 enemy units with flaming Springald bolts in a single match."],
        ["Record Breaker", "Earn a Gold Medal in 5 Art of War challenges."],
        ["Recorded History", "View a replay."],
        ["Regimented Training", "Have 5 Military Schools active at the same time as the Ottomans."],
        ["Rescue", "Rescue all the prisoners during the Invasion of Cyprus."],
        ["Resourceful Raider", "Complete the Central Plains mission without your supplies falling below 50%."],
        ["Saving the Day Early", "Eliminate all 3 enemy leaders within 30 seconds of each other during the Battle of Mansurah."],
        ["Servants of the Land", "Kill 10,000 enemies with Landsknechte."],
        ["Serve the Country with Perfect Loyalty", "Complete the Yue Fei campaign."],
        ["Shifting Winds", "Defeat 1,000 enemy cavalry units with your Camel Riders as the Abbasid Dynasty."],
        ["Shinobi Mastermind", "Use Sabotage to disable 50 buildings with Shinobi units as the Japanese."],
        ["Siegebreaker", "Defeat the siege before the Keep takes damage during the First Battle of Lincoln."],
        ["Sound Advice", "Unlock 7 Imperial Council upgrades in a single match as the Ottomans."],
        ["Sub-Human Subduer", "Win a 1v1 match against the Easy A.I."],
        ["Successful Gatherer", "Enhance 10 resource drop-off buildings by depositing a Yorishiro as the Japanese."],
        ["Super-Human Subjugator", "Win a 1v1 match against the Hardest A.I."],
        ["Swift Site", "Begin capturing a Sacred Site immediately upon entering Age III as the Holy Roman Empire."],
        ["Tax Collector", "Generate tax from 5 Toll Outposts on a single trip as the Malians."],
        ["The Faithful", "Convert 30 enemies without holding a Relic as the Abbasid Dynasty."],
        ["The Fundamentals", "Complete the Training Mastery."],
        ["The Great Unifier", "Win a Multiplayer or Skirmish match with Sengoku Daimyo."],
        ["The Greatest Khan", "Earn a Gold Medal on Watch Your Steppe in the Crucible."],
        ["The Hundred Years War", "Complete The Hundred Years War campaign."],
        ["The Malian Arts", "Earn a gold medal in the Malian Art of War challenge."],
        ["The Mongol Empire", "Complete The Mongol Empire campaign."],
        ["The Normans", "Complete The Normans campaign."],
        ["The Ottoman Arts", "Earn a gold medal in the Ottoman Art of War challenge."],
        ["The Red Rose Flourishes", "Win a Multiplayer or Skirmish match with the House of Lancaster."],
        ["The Rise of Moscow", "Complete The Rise of Moscow campaign."],
        ["The Sultans", "Complete The Sultans Ascend campaign."],
        ["There is no Escape", "Do not let a single Jin ship escape during the Battle of Huangtiandang."],
        ["Through the Ages", "Advance to the next Age 500 times."],
        ["Thunder and Trumpets", "Trample with 25 Raider Elephants at the same time. "],
        ["To Remind, To Advise, To Warn", "Equip your first monument."],
        ["Toomai's Dance", "Gain Worker Elephant bonus resources 1000 times in a match."],
        ["Trans-Saharan Empire", "Win 20 matches as the Malians."],
        ["Transcontinental Empire", "Win 20 matches as the Ottomans."],
        ["Trojan Horses", "Garrison units into 3 Trebuchets as the Ottomans."],
        ["Twinkle Hooves", "Don't lose any Mangudai during the Battle of the Kalka River."],
        ["Uncontested", "Earn a Gold Medal on Contested Coastline in the Crucible."],
        ["Under Cover of Night", "Destroy an enemy siege camp during the night in the Siege of De’an."],
        ["Unsinkable", "Construct a Transport Ship with a Varangian Guard and garrison it to maximum capacity as the Byzantines."],
        ["Var-Aegean", "Research 15 technologies from the Varangian Arsenal in a single match."],
        ["Victory Through Cross and Sword", "Win a Multiplayer or Skirmish match with Knights Templar."],
        ["Walk the Earth", "Achieve a Sacred Victory without losing a religious unit."],
        ["We Charge Extra for That", "Shutdown a Cavalry Charge with Palings as the English."],
        ["Well Stocked", "Produce 10,000 food from Stockyards in a single match."],
        ["Who Needs Cavalry?", "Win a match without producing cavalry as the Holy Roman Empire."],
        ["Who Needs Infantry?", "Win a match without producing infantry as the French."],
        ["Wild's Bounty", "Accrue 2,000 Gold with Hunting Cabins in a single match as the Rus."],
        ["Win for the Empire", "Win a match as the Byzantines."],
        ["Wololottery", "Assume control of 25 units in a single conversion."],
        ["Wonderstruck", "Achieve a Wonder Victory without constructing walls."],
        ["Yeah, Well, You Should See the Other Guy", "Lose a unit to the Front Gate of Zhangjiakou during the Great Wall mission."],
    ];

    assert.strictEqual(officialAchievements.length, 175, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
