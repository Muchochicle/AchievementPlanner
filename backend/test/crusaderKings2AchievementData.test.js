import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crusader-kings-2.json - 161 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 203770 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("crusader-kings-2");

test("getPlannerData('crusader-kings-2') returns real planner data with 161 curated achievements", () => {

    assert.ok(game, "expected real planner data for crusader-kings-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 161);

});

test("every Crusader Kings II achievement has a unique id from 1 to 161 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 161 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 161);
    assert.strictEqual(new Set(apinames).size, 161);

});

test("every Crusader Kings II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 161 Crusader Kings II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" I Got Better", "Recover from the Black Death."],
        ["\"Never start a Land War in Asia\"", "Start in Western Europe and completely conquer the region of Mongolia."],
        ["A Curious Trinket", "Send an invaluable artifact (Quality: 4 or 5) to the Emperor of China."],
        ["A Pope of My Own", "Set up an antipope"],
        ["A Servant No More", "As Mu’nis al-Muzaffar of Galilee in 867, become an Emperor and have at least 100 realm size."],
        ["Aladdin", "Starting and staying as a Han Chinese character, be an independent King or Emperor and rule all of North Africa (the Maghreb region)."],
        ["All Three Popes", "Play a game where there are two simultaneous antipopes"],
        ["Always Bet On Duke", "Work your way up from Count to Duke with a single character"],
        ["An Honest Mistake", "From Seclusion, kick someone out who did not have the plague."],
        ["And Stay Out!", "Throw the Aztec invaders back into the sea"],
        ["Aptly Named", "Die from the Black Death."],
        ["Baptism of Rus’", "As an East Slavic Pagan King or Emperor with your capital in the Eastern Europe region, successfully ask the ruler of Byzantium for a mass conversion."],
        ["Beyond the Indus", "As a ruler of non-Indian culture, conquer a King or Emperor title in India"],
        ["Birthright", "As the Anti-Christ/spawn of Satan, become Grandmaster of the Satanists."],
        ["Black Pope", "Have a priest you corrupted (as a Satanist) become Pope."],
        ["Black Widow", "As a woman, have three different husbands killed"],
        ["Bless my Reign down in Africa", "As a King or Emperor, have one of your domain Counties under the influence of a successful Rain Dance."],
        ["Bloody Line", "As a religion worshipping Bloodthirsty Gods, sacrifice enough people to found a Bloodline."],
        ["Bön Appétit!", "Eat a character of the Bön religion."],
        ["Bring it On", "Win 7 duels with one character"],
        ["By Jupiter!", "Reform the Hellenic faith."],
        ["By the Gods", "Gain the Theologian trait"],
        ["Casanova", "Successfully seduce 10 people by targeted seduction with one character"],
        ["Celebrity", "Amass more than 15,000 in prestige"],
        ["Child of the Dragon", "Request an Imperial Marriage from China."],
        ["Close Call", "From Seclusion, kick someone out who had the plague."],
        ["Crusader", "Fulfill the goal of a Crusade"],
        ["Crusader King", "Starting in the \"High Middle Ages\" bookmark, hold the Kingdom of Jerusalem"],
        ["Dark Lord", "Become Grandmaster of any devil-worshiper society."],
        ["Decadent Warrior", "As a Muslim, crush a Decadence revolt"],
        ["Defender of the Holy Sepulchre", "Starting as Eustache de Boulogne (the Count of Boulogne in France) in 1066, choose to play as your beneficiary after they are made King or Queen in Jerusalem after a Crusade."],
        ["Deus Vult", "Create the Empire of the Outremer."],
        ["Divine Blood", "Achieve a score of 100,000"],
        ["Dragon Blood", "Achieve a score of 50,000"],
        ["Dream Home", "As a Patrician dynasty, build every upgrade for your Family Palace"],
        ["Dwarf Fortress", "Have seven courtiers with the Dwarf trait"],
        ["Empire of the Sun", "Rule as Emperor with the Reformed Zun Faith"],
        ["Empressive", "Play as three consecutive generations of empresses"],
        ["Eternity Denied", "Kill a character with the Immortal trait."],
        ["Exalted Among Men", "Fulfill the Become Exalted ambition"],
        ["Family Bliss", "Have 6 close family members as friends"],
        ["Family First", "As a character with a religion that practice Divine Marriages, have one of your siblings, parents and children as spouses/consorts at the same time."],
        ["Follow Me", "Successfully intervene in a youth's development to force one of your own traits onto them."],
        ["From Servant to Saint", "Have a character you used to play be proclaimed a saint and have their Saintly Bloodline running in your veins."],
        ["From the Ashes", "Starting in a Shattered World, rule an Empire."],
        ["Full House", "Sire five children"],
        ["Go West Young Mongol", "As a steppe horde, have an independent tributary King or Emperor in the British Isles"],
        ["Got Land", "Start as the holder of Gotland and form the empire of Scandinavia."],
        ["Great Hunter", "Kill your prey in the Epic Hunt"],
        ["Great Indian Sultanate", "Rule the Empire of Rajastan and convert all its provinces to Islam"],
        ["Hard Ruler", "Starting in the \"High Middle Ages\" bookmark as Harald of Norway, become the King of England"],
        ["Headhunter", "Found a Bloodline as a particularly cunning, ruthless and skilled Duelist."],
        ["Heathenous Ways", "Starting as Erik the Heathen in 1066, rule the Kingdom of Sweden with the reformed Germanic Faith."],
        ["History is in my Blood", "Have 5 Historical Bloodlines on your character."],
        ["Holy and Roman", "Found the Holy Roman Empire in a game starting in 769"],
        ["Holy Smoke", "Sacrifice another religion's head as a Norse or Aztec pagan"],
        ["Hospitable", "Build a Hospital."],
        ["I am the Law", "As a vassal use a favor to change a law."],
        ["I can see its Stripes", "Kill a tiger by your own hand"],
        ["I Do Not Play Chess", "Have 100 kills in your Kill List."],
        ["I Shed Blood of Saxon Men", "As a Christian non-Saxon, completely conquer Saxony in a game starting in 769"],
        ["I'm Sorry, Desiderata", "Divorce a Lombard Princess as a Christian"],
        ["Iron Crown", "Hold any Emperor or King title as a Lombard after 1300"],
        ["It's Better to be the Emperor", "Work your way up from Count to Emperor with a single character"],
        ["It's Good to be the King", "Work your way up from Count to King with a single character"],
        ["Jihad Sultan", "As a Muslim King or higher, become Grandmaster of the Assassins."],
        ["Kali Maaa", "Sacrifice a King or Emperor tier character to Kali"],
        ["Keeping it in the Family", "Sire a child that has the Inbred trait"],
        ["Khan of Khans", "Conquer continental Western Europe as the Mongol Empire, starting in \"Age of the Mongols\" bookmark"],
        ["Kingdom of David", "As a Jew, create the Kingdom of Israel"],
        ["L'Eglise, c'est Moi!", "As an Emperor, grab the crown out of the Pope's hands and crown yourself."],
        ["Lech, Czech, and Rus", "Unite the Kingdoms of the three brothers, Lech, Czech and Rus, into one Slavic Union."],
        ["Legacy of Rome", "Restore the Roman Empire"],
        ["Legacy of the Indo-Norse", "Start as a Norse Character, hold a Kingdom in India as your primary title. Your capital must also be located in India and converted to Norse."],
        ["Let's go out into the Field", "Defeat a sibling in a war using the rival casus belli."],
        ["Let’s Play", "Gain the Hedonist trait through carousing"],
        ["Little Brother Rules!", "Become Emperor of Francia as Carloman, brother of Charlemagne"],
        ["Looking East and West", "Be Emperor of both Persia and Rajastan"],
        ["Lord of the Flies", "Start a Random World as a 0 year old Count, with the maximum character age set to 0, become King or Emperor within 16 years."],
        ["Love is a Battlefield", "Find love after a duel."],
        ["Medieval Schlieffen", "Be simultaneously at war with the Aztecs and the Mongols"],
        ["Merchant Prince", "Amass more than 20,000 in wealth"],
        ["Mercotransaction", "Create a mercenary band and have them bring in money for you."],
        ["Mr. Doge-Elect", "As a Patrician, win an election and become Doge"],
        ["Mudslinger", "Successfully slander 20 people with one character"],
        ["My Very Own Subcontinent", "Become Samrat Chakravartin"],
        ["New Ways for Old Gods", "Reform one of the Pagan religions"],
        ["No Solicitors", "Go into Seclusion."],
        ["Nobody's Business but the Turks", "Conquer Constantinople as a Turkic steppe horde."],
        ["Norse-East", "As a Norse character, become King of Mongolia."],
        ["Not a Tribe", "Play as a Tribal Ruler and Reform to Feudalism"],
        ["Not So Bad", "Survive the End Times."],
        ["Not so Great", "Starting in a Shattered World, defeat a Great Conqueror in a war."],
        ["Off with their heads!", "Execute 10 or more prisoners in a single action."],
        ["On English Neck a Norman Yoke", "Starting in the \"High Middle Ages\" bookmark as William the Bastard, become the King of England"],
        ["One Arrow Alone can be Easily Broken but Many Arrows are Indestructible", "As a steppe horde, have a population of 150 000."],
        ["One is not Amused", "As a ruler have a council that is not content."],
        ["Over Your Dead Body", "As a Tribal ruler, gain a title you have a claim on by duelling the holder."],
        ["Pagan Fury", "As a ruler with any Pagan religion, win a Christian Crusade targeting you."],
        ["Papal Mache", "Have elephants trample the Pope/Caliph."],
        ["Paragon of Virtue", "Fulfill the Paragon of Virtue ambition"],
        ["Pax Mongolica", "Build 3 fully upgraded silk road trade posts."],
        ["Pay to Win", "Win a war using Mercenaries."],
        ["Peace in Our Time", "Enforce peace for 6 or more vassals."],
        ["Pentarch", "As an Orthodox Christian, hold Rome, Constantinople, Alexandria, Antioch and Jerusalem"],
        ["Persistent Survivor", "Play a game all the way through from 867 to 1453"],
        ["Pilgrim", "Go on a Christian Pilgrimage"],
        ["Prester John", "As a Catholic, have a border with Miaphysite Abyssinia"],
        ["Prodigious Five", "Have at least one child with each of the five level four education traits."],
        ["Protector of the Holy Places", "Have Rome, Jerusalem, Mecca and Medina within your Realm"],
        ["Red Sea Resort", "Convert Mecca to Hinduism, Buddhism or Jainism"],
        ["Res Publica", "Play as a Tribal Ruler and Reform to Merchant Republic"],
        ["Rise of Civilization", "In a Shattered World with ‘Holding Types’ set to ‘Tribal’ or ‘Tribal & Nomadic’, adopt Feudalism or Republicanism."],
        ["Royal Blood", "Achieve a score of 10,000"],
        ["Run With the Wolf", "Play as a character with Wolf's Blood."],
        ["Russkaya Pravda", "As a character with the Russian Culture, hold the Empire of Russia"],
        ["S.P.Q.R.", "As the Roman Empire, reclaim the old imperial borders"],
        ["Saint", "Amass more than 10,000 in piety"],
        ["Saint Thomas's Dream", "Rule an Indian Kingdom or Empire as a Christian and convert all its provinces"],
        ["Sakya Trizin", "Starting as the Count of Sakya in 1066, rule as an independent Buddhist King or Emperor and control all Buddhist Holy Sites."],
        ["Saxons Everywhere, Unite!", "As an Anglo-Saxon or Saxon ruler, be king of both Saxony and England"],
        ["Scarrrrrred for Life", "Become One-Eyed, One-Legged and One-Handed."],
        ["Seven Centuries", "Play a game all the way through from 769 to 1453"],
        ["Shadow Prince", "Sit on the council and have every other council member as well as the ruler owing you a favor."],
        ["Smash the Patriarchy", "As female Messalian/Bogomilist/Cathar Ruler own all 5 baronies which make up the Orthodox Pentarchies and have a female temple holder control them. "],
        ["Snipped off to China", "Send a Eunuch to the Chinese Emperor."],
        ["Stargazer", "Build an Observatory"],
        ["Steppe by Steppe", "As a steppe horde, conquer the whole steppe region."],
        ["Survivor", "Play a game all the way through from 1066 to 1453"],
        ["Sword to Ploughshare", "Settle a steppe mercenary with more than 20 martial in your lands."],
        ["Ten Thrones", "Have your dynasty rule 10 independent Feudal/Iqta/Monastic Feudal Kingdoms or Empires with at least 25 realm size each. You must be one of them."],
        ["The Black Bishop", "Fund an immoral bishop and get him elected Pope"],
        ["The British Raj", "Rule the Empire of Britannia as a Hindu, Buddhist or Jain character"],
        ["The Caliphate Strikes Back", "Starting in the \"High Middle Ages\" bookmark as the Abbasid Caliph, become independent and hold an empire title"],
        ["The Conqueror", "Starting as a Norse character, rule the Kingdom of England (or the Empire of Britannia) as an English cultured character of a Christian religion."],
        ["The Frisian Coast is Long", "Be King of Frisia and hold the Atlantic coast from Léon in Brittany to Jylland"],
        ["The Good Old Days", "Have the kingdom of Frisia as your primary title and have the duchies of Flanders and Brabant be dejure part of it."],
        ["The Marriage Game", "Marry another character"],
        ["The One Who Brings Benefit", "As a Zoroastrian, become the prophesied Saoshyant"],
        ["The Outside Bet", "Starting in the \"High Middle Ages\" bookmark as Svend II of Denmark, become the King of England"],
        ["The Yes Men", "Have all members of your council be Loyalists."],
        ["There Can Be Only One", "Become immortal."],
        ["To Mecca!", "Go on a Hajj to Mecca"],
        ["Trade Empire", "Your Republic maintains trade posts in 80 provinces"],
        ["Turbulent Priest", "Assassinate a vassal bishop that likes the Pope better than you"],
        ["Typhoid Mary", "Contract three symptoms."],
        ["Under the Power of the Eternal Heaven", "As a member of the Ashina clan, solidify your divinity by ruling as Religious Head of the Reformed Tengri religion."],
        ["United the Kingdoms", "Hold the kingdoms of England, Scotland, Wales and Ireland"],
        ["Until Death Do Us Part", "Have your spouse assassinated"],
        ["Unwelcome Visitors", "As an assassin, assassinate a Crusader King in the Holy land."],
        ["Venetian Guile", "Win a Crusade targeting Byzantium."],
        ["Viking Raider", "As a Viking, return home with 1,000 worth of loot"],
        ["Viking Ummah", "Have a capital province with Norse culture and Muslim religion"],
        ["We’re In Business", "Successfully establish a trade route"],
        ["What Could Have Been", "Start a Random World with all possible settings set to ‘Random’ and play for 200 years."],
        ["What Schism?", "Convert both Rome and Constantinople to the same (Indian) religion"],
        ["White Hun", "Starting as the last remnant of the White Huns (the Count of Mohadavasaka in 769) restore the borders of the Hephthalite Empire."],
        ["Who Needs Vasco da Gama?", "Own all the silk route ports in india as a European merchant republic."],
        ["Wise Guy", "Gain the Legendary Wisdom modifier"],
        ["You Owe Me", "Have someone owe you a Favor"],
        ["Zero to Hero", "Found a Legendary Bloodline while part of a Warrior Lodge."],
    ];

    assert.strictEqual(officialAchievements.length, 161, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
