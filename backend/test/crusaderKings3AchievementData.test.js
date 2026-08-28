import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crusader-kings-3.json - 188 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1158310 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 188 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("crusader-kings-3");

test("getPlannerData('crusader-kings-3') returns real planner data with 188 curated achievements", () => {

    assert.ok(game, "expected real planner data for crusader-kings-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 188);

});

test("every Crusader Kings III achievement has a unique id from 1 to 188 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 188 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 188);
    assert.strictEqual(new Set(apinames).size, 188);

});

test("every Crusader Kings III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 188 Crusader Kings III achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Dangerous Business", "As a dwarf, win a Varangian Adventurer war anywhere outside of Europe"],
        ["A House of My Own", "Create a Cadet Branch of your Dynasty"],
        ["A Knight's Tale", "Have one of your Lowborn Knights win a Grand Tournament Joust, then land them"],
        ["A Legacy to Last the Ages", "Complete an entire Dynasty Legacy"],
        ["A Living God on Earth", "As a Mandala ruler, have a Godlike level of piety, rule an empire, and have 100 radiance"],
        ["A Name Known Throughout the World", "Have your dynasty reach the highest possible Level of Splendor"],
        ["A Perfect Circle", "Have only two distinct parents, grandparents, and great grandparents"],
        ["A Thousand and One Night", "Orchestrate a Grand Wedding where the Spouses become Soulmates"],
        ["A True and Perfect Knight", "Have a max rank Acclaimed Knight with the Warrior of the Faith Trait"],
        ["A.E.I.O.U. and Me", "Starting as the Habsburgs, rule the Archduchy of Austria, plan 5+ Grand Weddings and don't wage War"],
        ["Abbasid Might", "Take the Renew Caliphate ending in the Iranian Intermezzo Struggle"],
        ["Above God", "Have a strong hook on your Head of Faith"],
        ["Against the Odds", "Starting in 1178, Re-Establish the Theodosian Borders"],
        ["Ahab", "Succeed at a Legendary Hunt"],
        ["Al-Andalus", "Starting as an Iberian Muslim, control Iberia and take the Avenge the Battle of Tours decision"],
        ["All Your Caliphate Are Belong To Us", "Take the 'Dominate the Caliph' foundation as part of the Abbasid Humiliation ending in the Iranian Intermezzo Struggle"],
        ["Álmost There", "As Álmos Árpád, form Hungary and convert to Christianity"],
        ["An Unfortunate Accident", "Inherit a title from someone you murdered"],
        ["Bad Blood", "Go to war with one of your siblings over a Claim"],
        ["Band of Brothers", "Have every camp followers temperament be positive and have at least 10 camp followers"],
        ["Basque In My Glory", "Embrace the Basque paganism faith during the Iberian struggle"],
        ["Beacon of Progress", "Have your culture unlock all innovations, excluding regional and culture-specific innovations"],
        ["Beta Israel", "Starting and staying as a Jewish ruler in East Africa, rule a Kingdom and diverge your culture"],
        ["Birthright", "As a Legitimist Adventurer, win a claim war for a Kingdom or Empire"],
        ["Black Dinner", "Successfully host a Murder Feast or Bloody Wedding"],
        ["Bloc Politics", "Have max cohesion in your Bloc"],
        ["Blood Eagle", "Starting as any child of Ragnarr Lothbrok, conquer all of the British Isles"],
        ["Blood of my Blood", "Become Blood Brothers"],
        ["Bod Chen Po", "As a member of the Pugyel Dynasty, re-create the Empire of Tibet"],
        ["Brave and Bold", "As the Piasts in 867, rule a Feudal Poland and own a Famed+ regalia, crown, weapon, and armor"],
        ["Byzywork", "Have five simultaneous House members as Theme governors (not including you) while not being the Emperor"],
        ["Can't Touch This", "Have an infected Barony at the maximum Epidemic Resistance"],
        ["Canonized", "Manage to make your Legend Protagonist a Saint"],
        ["Canute the Greater", "As an unreformed tribal, form the North Sea Empire"],
        ["Carolingian Consolidation", "Starting as a Karling, be the only independent Karling to hold a landed title"],
        ["Celebrity", "Reach the highest possible Prestige Level"],
        ["Changing Course", "Create a Divergent Culture"],
        ["Chaos is a Ladder", "Become a Dominant Family within Byzantium"],
        ["Con-fed-up", "Form a Confederation"],
        ["Confucian Scholar", "Finish the Confucian Education track and have 5 disciples"],
        ["Converging Paths", "Create a Hybrid Culture"],
        ["Crème de la Crème", "Reach the maximum amount of Court Grandeur"],
        ["Cut off the Head... and the Body will Follow", "Successfully use the Eradicate Casus Belli against a House that you have a Feuding Relation with"],
        ["Daits How You Do It", "Found the Dai Viet Empire"],
        ["Darius' Revenge", "As a character of Iranian Heritage, hold the Empire of Persia, Kingdom of Thessalonika, and Kingdom of Hellas"],
        ["Death Did Us Part", "Murder your spouse"],
        ["Delusions of Grandeur", "Be at least 6 levels above your expected Court Grandeur"],
        ["Despoiler of Byzantium", "Become the Emperor of a newly-formed Latin Empire through a Crusade"],
        ["Despotic", "As Co-Emperor, rule a Despotate"],
        ["Devaraja", "Max out your mandala Aspect and have a Grand Temple Complex"],
        ["Divine Right", "Reach the maximum level of Legitimacy"],
        ["Dreadful Ruler", "Have the maximum amount of dread"],
        ["End of an Era", "Play until 1453"],
        ["Epic Paperwork", "Adopt the Administrative Government via Decision"],
        ["Far from Home", "As a Norse-Asatru ruler, have your capital on any island in the Indian Ocean"],
        ["Faster than the Fox", "As a Norse tribal, control the entirety of Sicily"],
        ["Fine Print", "Use a hook to modify a feudal contract"],
        ["First of the Crusader Kings", "As a Christian North Germanic, participate in the very first crusade from the start"],
        ["Fiscal Responsibility", "Fill Five Tax Collector slots with excellent Aptitude characters"],
        ["Fishing in China", "Starting as Jarl Hæsteinn in 867, become Hegemon of China"],
        ["Fly, My Pretty!", "Finish the Falconer track in the Hunter Trait"],
        ["Flying Colors", "Pass all Exams with one character"],
        ["Followed by Shadows", "Know ten secrets simultaneously"],
        ["For the Faith!", "Take part in a successful Great Holy War, on either side"],
        ["Frankokratia", "As a French Catholic, hold the Kingdom of Thessalonika without being vassalised to Byzantium"],
        ["Friendship Is Magic", "Use a friendship hook on a different-faith ruler involved in the Iberian struggle"],
        ["From Rags to Riches", "Starting as a Count, lead your line to rule an Empire"],
        ["Give a Dog a Bone", "Starting as Matilda di Canossa in 1066, rule Italy, have 50 Dynasty members, and found a Holy Order"],
        ["Going Places", "As Haesteinn of Montaigu in 867, hold any Kingdom tier title"],
        ["Grand Governor", "Starting as landless, work your way up to becoming a Minister in China"],
        ["High Stakes", "Bet a title on a strategy game match against another ruler"],
        ["Highway of Ideas", "Starting as a ruler of a culture with no Silk Road Innovations, discover a Silk Road Innovation"],
        ["Historically Inaccurate", "Choose to set out on an Adventure as a spawned Historical Character"],
        ["History's Best Friends", "Sleep with your best friend while having the \"Ritualized Friendship\" cultural tradition"],
        ["Hoarder", "Have an artifact in every slot in the Inventory and Court"],
        ["Holidaying in Iberia", "Start as an uninvolved character, become involved and end the Iberian struggle"],
        ["How it's done, done, done", "Take the Unite the Husamguk decision"],
        ["Humble Beginnings", "As a Wanua ruler, adopt Mandala government through your Suzerain, and build a Capital Complex"],
        ["Hunting Accident", "Succeed with the Murder Intent while on a Hunt"],
        ["I Made This", "Loot an artifact you do not have a claim on and pass it down to your heir"],
        ["I'm in my Element(s)", "Pass through every Terrain, including naval, whilst on the same Travel"],
        ["Iberia or Iberia?", "As an Iberian culture character, control all of the Caucasian Iberia region"],
        ["Iberian Compromise", "End the Iberian struggle through compromise"],
        ["Iberian Conciliation", "End the Iberian struggle by setting your differences aside"],
        ["Iberian Hostilities", "End the Iberian struggle through means of force"],
        ["Imperial March", "As an Emperor, go on an Intimidation Tour visiting all of your Powerful Vassals"],
        ["In Good Estate", "Upgrade your Estate with a lvl 5 Villa and fill all external slots"],
        ["In Xanadu", "Build a Pleasure Dome"],
        ["Inspirational", "Sponsor 30 successful inspirations in one game"],
        ["Iranian Revival", "Take the Iranian Resurgence ending in the Iranian Intermezzo Struggle"],
        ["It's not a Cult!", "Create a Faith"],
        ["It's OK, I Got a Permit", "As a non-Powerful family, buy a Remit and successfully Raid the Estate of a Powerful Family"],
        ["Keeping it in the Family", "Have a child with the Inbred trait"],
        ["King of all the Isles", "As a North Germanic Asatru, control all islands in the Atlantic and the Mediterranean, whilst keeping your realm size below a certain threshold"],
        ["Kingdom of Heaven", "As Baudouin of Jerusalem in 1178, defeat Saladin in a war"],
        ["Kings to the Seventh Generation", "Starting as Count Eudes of Anjou in 867, lead your Dynasty to rule the Kingdom of France"],
        ["Know Your Place", "Defeat a faction in a war"],
        ["Land of the Rus", "Starting as Rurik the Troublemaker in 867, lead your dynasty to rule the Empire of Russia"],
        ["Last Count, First King", "Starting as Duke Nuño of Portucale in 1066, form Portugal"],
        ["Legacy of The Campeadores", "Create and rule the kingdom of Valencia as an heir to El Cid"],
        ["Legendary!", "Complete a Legend"],
        ["Like No One Ever Was", "Finish all tracks in the Hastiluder Trait"],
        ["Lingua Franca", "Have every Royal Court speak your Court Language"],
        ["Lions and Tigers and Bears, Oh My!", "Capture a large wild animal while on a Hunt"],
        ["Little William Marshal", "Win every Contest at a Grand Tournament with at least three Contests"],
        ["Local Legend", "As a Count, complete a Mythical Legend"],
        ["Mandate of Heaven", "Claim the Hegemony of China and choose a name for your new Imperial Dynasty"],
        ["Miklagarðaríki", "As an Asatru, hold all of the original Thessalonika, and any empire title other than Byzantium"],
        ["Mio Cid", "Complete El Cid's unique content with the 'An Honorable Man' ending"],
        ["Monumental", "Fully upgrade a duchy capital building anywhere in your personal domain"],
        ["Mother of us All", "Starting as Daurama Daura, have your line reform an African faith, and convert all of Africa to it"],
        ["Moving up in the World", "Increase your Rank"],
        ["Mulct Them Dry", "Loot four Illustrious-Tier Vizier Extravagance Modifiers from your Vizier"],
        ["Neverending Story", "Complete your ancestor's Legend after their death"],
        ["New Management, same as the Old Management", "As an Islamic Sultanate of Rum, adopt Administrative Government while owning Constantinople"],
        ["Nobody Comes to Fika", "With the County of Fika as your primary title, diverge your culture and spread it to 30 Counties"],
        ["Nobody's Business", "Use Overrun Realm CB and settle your people outside the Steppe"],
        ["Non Nobis Domine", "Found a Holy Order"],
        ["Norman Yoke", "Starting as William in 1066, win the Invasion, become English, and have only English vassals"],
        ["Not Content to Serve", "In 1178, start as the Palaiologos and become Emperors of Byzantium"],
        ["Not So Feudal System", "Use the Claim Throne scheme successfully"],
        ["Not Today", "Contract, and recover from, the Bubonic Plague"],
        ["One of a Kind", "Obtain a mythological rarity artifact from an Adventurer Inspiration"],
        ["Paragon of Virtue", "Have three or more virtuous traits"],
        ["Pathway to Heaven", "With one Character, go on Pilgrimages to all of your Holy Sites"],
        ["Patronage", "Fund an Inspired character's Project, and receive the end result"],
        ["Pay Respects", "Host a Funeral for your Legend Protagonist"],
        ["Polyglot", "Personally know 10 languages"],
        ["Prolific", "Have one hundred living dynasty members"],
        ["Promised Land", "Permit a group of religious exiles to settle in your realm"],
        ["Quantum Leap", "Choose a New Destiny 5 times in the same campaign"],
        ["Rags to Riches to Rags to Riches", "Starting as a Count, rule an Empire, become an Adventurer, then rule an Empire again"],
        ["Reconquista", "Starting as an Iberian Christian, convert all of Iberia to Christianity"],
        ["Rich in Diversity", "As a character of a Faith with Jizya or Tax Nonbelievers Doctrines, have ten Vassals of other faiths"],
        ["Rise from the Ashes", "Restore the Roman Empire"],
        ["Rise of the Ghurids", "Starting as the Duke of Ghur in 867 or 1066, conquer the borders of the historical Ghurid Empire"],
        ["Royal Dignity", "Starting as Vratislav Přemyslid in 1066, lead your Dynasty to rule Bohemia and the Holy Roman Empire"],
        ["Royal Flush", "As a character of a faith with the Fadaeyeen Doctrine, dispose of a Lowborn, a King and an Emperor"],
        ["Saga in Stone", "As any one dynasty, commission a hundred rune stones"],
        ["Saint", "Reach the highest possible Piety Level"],
        ["Seductive", "As any one character, successfully seduce ten people"],
        ["Settling In", "Settle in the Steppe"],
        ["Seven Holy Cities", "As a Hindu ruler, hold all seven Hindu Holy Sites at the same time"],
        ["Shia Reborn", "Take the 'Found a New Caliphate' foundation as part of the Abbassid Humiliation ending in the Iranian Intermezzo Struggle"],
        ["Shōgun", "Become Shōgun, holding the Empire of Japan, as Minamoto no Yoritomo in 1178"],
        ["Shut Up, Nerge", "Host an Excellent Nerge"],
        ["Sibling Rivalry", "Starting as any of the Jimena siblings in 1066, become Emperor of Spain"],
        ["Sir Lance-a-Lot", "Participate in a Joust with a maxed out Horse track for the Hastiluder Trait"],
        ["Stamp of Approval", "Starting as a character that has not passed any Exam, pass an Exam in China"],
        ["Started from the Bottom now we're ERE", "As an Adventurer, buy an Estate in Byzantium and lead your line to become Emperors"],
        ["Steppe by Steppe", "Migrate from the eastern Steppe to the western Steppe"],
        ["Stressful Situation", "Suffer from a Mental Break"],
        ["Sword of Japan", "Starting as the Chrysanthemum Throne, restore direct imperial rule"],
        ["Tamar Mepe", "As Princess Tamar, rule all of Georgia and fully Conquer Armenia and Daylam"],
        ["The Andalusian Inquisition", "Convert all of Iberia to the Mozarabic faith"],
        ["The Emerald Isle", "Starting as an Irish ruler, hold the Kingdom of Ireland"],
        ["The Emperor's New Clothes", "While holding any empire title, be naked"],
        ["The Grandest Tour", "Visit ten Kingdom Tier Vassals on a Grand Tour"],
        ["The Heavenly Kingdom", "Claim the Mandate of Heaven as the Head of Faith of a Christian faith"],
        ["The Iron and Golden King", "Have a capital Barony with 60+ income, a stationed 500+ Heavy Cavalry Regiment and a mine"],
        ["The old man of the mountain", "Complete Hassan-i Sabahs unique content by destroying an Empire"],
        ["The Pharaoh Islands", "As a Scottish character, complete a Legend claiming your descent from Ancient Egypt"],
        ["The Stallion that Mounts the World", "Starting as Temüjin, conquer the world"],
        ["The Succession is Safe", "Have ten living children"],
        ["The Things Love Does for Us", "Have a lover save you from a murder attempt"],
        ["The Things We Do for Love", "Murder your lover's spouse"],
        ["The True Royal Court", "As a vassal king to an emperor, have a higher court grandeur than they do"],
        ["The Ummayad Strikes Back", "Starting as a member of the Umayyad Dynasty, hold the Empire of Arabia and the Sunni Caliphate"],
        ["The Very Best", "Finish any track in the Hastiluder Trait"],
        ["There and Back Again", "Finish both tracks of the Traveler Trait"],
        ["They Belong in a Museum", "Appoint a character with a completed Adventure inspiration as your Antiquarian"],
        ["This Chinggis Everything", "Become the Greatest of Khans"],
        ["Trapped in the Web", "Have strong hooks on three direct vassals"],
        ["Tribute Band", "Have 30 Tributaries"],
        ["True Tolerance", "Rule a realm containing at least 10 cultures with 95% or more acceptance of your culture"],
        ["Turkish Eagle", "As the Seljuk Count in Samosata, form Rum and create a Hybrid Culture between Oghuz and Greek"],
        ["Turning to Diamonds", "Reach the highest possible Stress level"],
        ["Until Death Do Us Part", "Marry another character"],
        ["Upper-upper", "Reach the highest level of Merit"],
        ["Upward Mobility", "Successfully claim your Liege's title while having a higher Legitimacy Level than them"],
        ["Vladimir's Second Choice", "As a North Germanic or Russian Asatruan of any kind, convert to any Islamic faith & convert all of Russia."],
        ["Völva", "Starting and staying as a North Germanic Asatru of any kind, take the Found Witch Coven Decision"],
        ["Way of Life", "Complete an entire Lifestyle (all three trees)"],
        ["What Nepotism?", "Have your Dynasty rule ten independent realms of at least Kingdom tier simultaneously"],
        ["Wily as the Fox", "Starting as Robert the Fox in 1066, rule Sicily, hold a Greek Kingdom, and convert it to Catholicism"],
        ["Yes I need, I need my Samurai", "Adopt Sōryō government as a Ritsuryō ruler"],
        ["You'll Never Take Me Alive!", "Travel to a safe holding while your Capital is infected by a Epidemic"],
        ["Your Eternal Reward", "As a Regent, sucessfully coup your liege to take their Realm without War or Schemes"],
    ];

    assert.strictEqual(officialAchievements.length, 188, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
