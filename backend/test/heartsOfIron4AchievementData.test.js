import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hearts-of-iron-4.json - 293 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 394360 (fetched through this app's own services/steamApi.js).
// 292 of 293 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ships no
// Steam description; its condition here is curatorial, cross-checked
// against the Hearts of Iron 4 Wiki and TrueAchievements.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("hearts-of-iron-4");

test("getPlannerData('hearts-of-iron-4') returns real planner data with 293 curated achievements", () => {

    assert.ok(game, "expected real planner data for hearts-of-iron-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 293);

});

test("every Hearts of Iron IV achievement has a unique id from 1 to 293 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 293 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 293);
    assert.strictEqual(new Set(apinames).size, 293);

});

test("every Hearts of Iron IV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 292 officially-described Hearts of Iron IV achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "vojtek_commander",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Hearts of Iron IV has 1 hidden achievement");

    const officialAchievements = [
        ["...and you get a canton, everybody gets a canton!", "As Switzerland, have 24 states"],
        ["30 Minutes of Hel", "As Poland in the 1939 “Blitzkrieg” scenario start, inflict over 1,800,000 casualties to Germany to beat the 2018 PDXCON HOI4 challenge. Extra bragging rights if you do it in 30 minutes or less!"],
        ["A Bridge too Far", "As the UK, liberate Brabant, and have Bernard Montgomery liberate Friesland while maintaining a force in Arnhem."],
        ["A Fullmetal Brotherhood", "As Fascist China, control 300 Steel, Tungsten and Chromium."],
        ["A Great Hunger", "As Hungary proclaim Greater Hungary and control all of your historical state"],
        ["A Land of Fire", "Tierra del Fuego means \"The Land of Fire\""],
        ["A Succulent Chinese Meal", "As Australia annex and own one province in China."],
        ["Ain't like that now", "As fascist Czechoslovakia, complete \"Return to Democracy\"."],
        ["America Decolonized!", "As Mapuche Chile liberate all native people in North and South America"],
        ["American Prometheus", "As the USA have Robert Oppenheimer complete the Manhattan Project."],
        ["An Equivalent Exchange", "As Democratic Japan, complete the focus Foreign Exchange Allocation Policy and capitulate Fascist Germany."],
        ["And the snake smoked", "As Brazil, in the allies, capitulate Germany while controlling Berlin."],
        ["Antischluss", "As Austria, control all German starting states."],
        ["ANZAC", "As Australia or New Zealand, have an Army HQ in Greece and ensure that Greece doesn't capitulate until 1945."],
        ["Around Eurasia in 80 days", "Make a railroad from Gibraltar to Singapore."],
        ["Arsenal of Democracy", "As the U.S.A., have more than 300 military factories."],
        ["Assuming Direct Control", "Starting as a minor power, assume faction leadership of the Allies, the Axis, or the Comintern."],
        ["At least they run on time!", "As fascist Italy, have max level railways in all your core states"],
        ["Australia-Hungary", "As Australia, own all core territory of Hungary."],
        ["Avenging the Sack of Baghdad", "As Iraq, control the capital of Mongolia"],
        ["Awake and Angry", "As China, reconquer all of China and Manchuria and force a Japanese surrender."],
        ["Backfire", "As the United Kingdom complete the Special Project for Medium Range Ballistic Missiles, have a rocket site, and be at war with Germany"],
        ["Bad Ending - The whole world is now Brazil", "Control every state in the world"],
        ["Bad Romeance", "Restore Byzantium and have Italy, Romania, and Russia as subjects."],
        ["Balkan Problem Solved", "As Communist Bulgaria, form the United Balkan Federation and own all Balkan states as cores."],
        ["Battle Royale", "As Communist China, fight both China and Japan before 1940 within 90 days of being at war with the other, and capitulate them both."],
        ["Battlecry", "As a warlord, conquer all of China and Japan."],
        ["Better than the Szent István", "As Hungary, have Miklos Horthy as a Naval commander and build a battleship."],
        ["Bevrijding", "As the Netherlands, liberate the continental Netherlands after relocating the government to the East Indies."],
        ["BFFs", "As Portugal, join the same faction as Great Britain."],
        ["Big Entente", "As France, complete the “Little Entente” National Focus, and have all German cores owned by you or someone in your faction."],
        ["Braaaaains!", "As Canada, complete the Send in the Zombies focus."],
        ["Brentry", "As Austria, Belgium or the Netherlands be the leader of the EU and have the United Kingdom join your faction."],
        ["Brexit", "As communist Iceland, make Wales, Scotland and Northern Ireland rise up against the United Kingdom"],
        ["Britzkrieg", "As the United Kingdom, put Edward VIII in power, ally Germany, and fully control Paris."],
        ["Bullseye", "Successfully launch a raid on a Landmark"],
        ["By Beer Alone", "As Germany, control Budweis, Tsingtao, and Guinness directly or through a faction member"],
        ["By merit alone", "Promote a Unit Commander to a general, and reach max level"],
        ["Canada First", "Join Axis as Canada ."],
        ["Caramelldansen", "As Sweden puppet Japan"],
        ["Cheese your fighter.", "As Norway, with Peder Jarlsberg as country leader, own Telemark, Glouchestershire, Normandy, Lombardia and Holland."],
        ["Chilean Empire", "Control all mainland states that border the pacific in South America, North America and Asia"],
        ["Cisplatine War 2, Electric Boogaloo", "As either Brazil or Argentina, be in a faction with Uruguay while at war with Brazil/Argentina"],
        ["Cobalt Sea", "As the Philippines, launch nuclear missiles from a nuclear submarine."],
        ["Cod wars", "As Iceland capitulate the UK"],
        ["Collect all the Romes", "As Italy, continue holding onto the First Rome, and gain the second and third Rome"],
        ["Congolese Belgium", "As Congo break free from the shackles of your old overlord and take control of all of their starting states."],
        ["Cradle of Civilization", "As Iraq, build the maximum infrastructure level in all core states and achieve 100% stability"],
        ["Crusader Kings", "As South Africa, finish the A King for our People focus and take Jerusalem."],
        ["Crusader Kings 2", "As South Africa, finish the Anti-Colonialist Crusade focus, release all European colonies via the focus, and take London."],
        ["Crusader Kings III", "As Poland, crown a King (or Queen) and capture Jerusalem."],
        ["Crusader Kings IV", "Take Jerusalem as Ethiopia and move the capital there"],
        ["Crush the Dream", "As a Communist United Kingdom, crush the American Dream by puppeting the U.S.A."],
        ["Cut The Strings", "Break free from your overlord as a puppet."],
        ["Czechmate", "As Czechoslovakia, occupy Canberra while at war with the Allies."],
        ["Czechoslovaustrohungarian Union", "As communist Czechoslovakia, complete \"Expand the Union\" and have Austria and Hungary in that union."],
        ["Dam It!", "Successfully execute a Dam Busting Raid"],
        ["Danzig queen", "As Sweden, own and control Danzig"],
        ["Death or Dishonor or Cake", "As Romania, own a slice of all your starting neighbors."],
        ["Declare Military Emergency", "Have a Military Emergency declared in the Philippines."],
        ["Destroyer of Worlds", "Deploy a nuke."],
        ["Die, Perfidious Albion!", "As Fascist France or Vichy France, occupy all of Great Britain."],
        ["District 9", "As South Africa, have 9 civilian factories in Transvaal."],
        ["Do You Mined?", "Lay at least 1,000 mines on the coastline of an enemy nation."],
        ["Doctrine of Choice", "Complete three subdoctrines in the same track."],
        ["Don’t Die for Your Country", "As Germany in a 1939 start, occupy all of Poland and France without taking more than 475 casualties."],
        ["Dracula’s Revenge", "As Yugoslavia, establish the autonomous region of Transylvania and have it own all Romanian cores."],
        ["Duce Nuked'em", "Nuke Los Angeles as fascist Italy."],
        ["Edelweiss Seedelweiss", "As Austria have a coastline, at least 10 Battleships and have Georg von Trapp as an Admiral"],
        ["En Svensk Tiger", "As Sweden, acquire a production license for a Tiger or Tiger II tank from Germany."],
        ["Esti is Scandi", "As Estonia Secure Scandinavia."],
        ["Et tu, Paulus?", "Capture a field Marshal."],
        ["Everything is awesome.", "As Denmark, get Maximum Welfare Spending after January 1st 1941 without being puppeted or capitulating."],
        ["Finnish Him!", "As Finland, defeat the Soviet Union without joining a faction."],
        ["First train home", "As Czechoslovakia, own any state of the Trans-Siberian Railway."],
        ["Forge of Victory", "Have 50 factories as Belgium."],
        ["Freedom or Death", "As Greece, liberate Albania while being at war with Italy."],
        ["Freegypt", "As Egypt, go from puppet to a free nation using the autonomy system."],
        ["Friend in Need", "Join a faction."],
        ["From Rags to Admiral Stripes", "Promote a Ship Captains to Admiral."],
        ["From Tehran with Love", "As Iran, guarantee Poland's independence and ensure it does not capitulate by 1945."],
        ["Genghis Khan't", "As any Chinese country or Manchukuo, own and control all Mongolian core states."],
        ["Georgia On My Mind", "As the U.S.A., own and fully control all three Georgias."],
        ["Go Ahead, Macau My Day", "As Portugal, create a collaboration government in Macau and have it own all Chinese states."],
        ["Grand Siam", " As Siam, capitulate 4 nations within one year."],
        ["Graveyard of Empires", "As Afghanistan, Iran, Iraq or the Raj, control all of the other three nations' cores"],
        ["Habsburgs. Habsburgs everywhere", "As Poland, install a Habsburg monarch and be in a faction with another Habsburg monarch."],
        ["Hail to the King", "As Siam, form Greater Thailand before King Ananda is 15 years old."],
        ["Hail to the Qing", "As Manchukuo, restore the Qing dynasty."],
        ["Hardly Anything Sèvres", "As the Ottoman Empire, hold the capitals of France, the United Kingdom, Italy, and Japan."],
        ["Hellenic Civility", "Win the Greek Civil War before 1937."],
        ["Hispanics of the world unite!", "As Chile, form the Hispanic Alliance and have at least 8 \"Hispanic\" nations in your faction"],
        ["History Repeated Itself", "As the U.S.A., win against the Confederate States. Again."],
        ["Holy, Roman, and an Empire", "As the Pope, restore Rome."],
        ["Hoofin’ It", "Unite Arabia with thirty camelry divisions."],
        ["House of Kurds", "As Kurdistan, hold all of your cores."],
        ["Huge-oslavia", "As Yugoslavia, occupy all your neighbouring countries (Austria, Hungary, Romania, Bulgaria, Albania, Italy and Greece)."],
        ["Hunt for the Desert Fox", "Capture Erwin Rommel."],
        ["I Am the Tong Master", "As South Africa, break free from the UK and puppet another nation."],
        ["I Captured the Bosporus and All I Got Was This Lousy Achievement", "As Greece or Bulgaria, own both sides of the Bosporus. As Turkey, subjugate both Greece & Bulgaria."],
        ["I didn't hear no bell", "As democratic Czechoslovakia, become the 2nd republic by losing the Sudetenland and then granting autonomy to Slovakia, before capitulating Germany."],
        ["I Have Avenged You, Father!", "As Zhang Xueliang, reclaim Mukden and revive the Beiyang government."],
        ["I have the high ground", "As Afghanistan, control all Himalyan states"],
        ["I SEE EVERYTHING", "Get over 90% intel in each category on a major without using code cracking."],
        ["I shall either find a way or make one", "Control Rome and have an elephant unit in the state."],
        ["I Swear I’m Not a Byzantophile", "As Greece, Form Byzantine Empire."],
        ["I'm Home!", "As Brazil occupy every core of Portugal"],
        ["I'm just passing by", "Own a state on each continent while being at peace"],
        ["I’m not locked in here with you…", "As Switzerland, declare war on Germany and win."],
        ["I'm playing both sides, so I always come out on top", "Sell weapons to both sides of a civil war."],
        ["Islas Malvinas", "As Argentina, hold the Falkland islands and South Georgia for 73 days consecutively"],
        ["Istanbul is Constantinople. Again.", "As Greece, capture Istanbul and rename it to Constantinople."],
        ["It has my name on it", "As any Baltic State, conquer the entire shoreline of the Baltic Sea."],
        ["It's 1812 All Over Again", "As Canada, take and hold Washington D.C."],
        ["It's Just Good Business", "As the East India Company, own Suez and Panama"],
        ["Its all coming together", "As China, fully control all core states alone or with subjects."],
        ["Java-Script", "As the Dutch East Indies (or Indonesia), research the Advanced Computing Machine and fully upgrade the Cryptology Department (while your capital is on the island of Java)."],
        ["Just proper gander", "As the Soviet Union, activate 30 propaganda campaigns before 1945."],
        ["King of What?", "Have Jaque Antoine Bernard as King of Chile and control Paris"],
        ["Kuťáci", "As Czechoslovakia, build every facility type."],
        ["Lamento Boliviano", "As Argentina, own all of Latin America except Bolivia"],
        ["Last for a Thousand Years", "As the United Kingdom, accomplish the federation of the entire British Empire."],
        ["Lethal Straight", "Have a production license from at least 5 of the 7 major powers."],
        ["Listen Very Carefully, I Shall Say This...", "Have a French and British spy work together on the same Operation."],
        ["Lone Wolf", "As Finland, form Greater Finland and own every core and claim without having ever joined a faction"],
        ["Made in China", "As Communist China, have over 100 military factories."],
        ["Make a Man Out Of You", "As a warlord, have at least 1.000.000 manpower queued up for deployment."],
        ["Man of a Thousand Faces, Every One the Same", "Have the same spy get captured twice."],
        ["Manifesting a Better Tomorrow", "Reach 100% faction manifest fulfilment."],
        ["Maphilindia", "As Indonesia or the Philippines, form Maphilindo and control all Indian core states."],
        ["Master Infiltrator", "As PRC, don't expand beyond Yan'an, and infiltrate at least 5 Chinese states and flip them to your control when attacking the rest of China."],
        ["Master of War", "Fully research a land, air and naval doctrine tree."],
        ["Master Puppeteer", "As Bulgaria, complete the focus The Fate of the Balkans while having 5 or more Balkan puppets."],
        ["Med plutonium 2.", "As Denmark nuke Sweden."],
        ["Med plutonium...", "Nuke Denmark as Sweden."],
        ["Media Mughal", "As the Mughal Empire, complete Agency Upgrade Psychological Warfare, become Spy Master and have at least 8 operatives"],
        ["Mi Casa es tu Casa", "As Mexico, host a government-in-exile."],
        ["Miklos Horthy and the Habsburg Prince", "As Hungary, restore Austria-Hungary."],
        ["Mine is bigger than yours", "Lead a faction with at least 20 members."],
        ["Monarchy is Back In Fashion", "As Germany, bring back the Kaiser and ensure that Italy is controlled by Victor Emmanuel by killing Mussolini."],
        ["My Ships Don't Lie", "As Colombia, form Gran Colombia and have 10 Carriers and 10 Battleships."],
        ["Naval Arms Race", "As Germany led by an Admiral capitulate the United Kingdom."],
        ["Neither Death nor Dishonor", "As Romania, make it to 1942 with all the states you started it with and control either Moscow or Berlin."],
        ["New World Order", "Make all nations fascist."],
        ["No country for old men", "Reach 0 manpower with Scraping the Barrel as Conscription Law."],
        ["No Friends, Only Family", "As Austria or Hungary led by a Habsburg Monarch, Control the Swiss Plateau and have at least three other countries be led by a member of the Habsburg family."],
        ["No more Partitions", "As Poland, be independent and ensure that both Germany and the USSR are either in your faction or don’t exist."],
        ["No one crosses the finnish line", "As non-aligned Finland, survive the Soviet Union until September 19th 1944 without losing control of a single core ever."],
        ["Nobody expects...", "As Nationalist Spain in Axis manage to take Paris before the Germans."],
        ["Nobody’s Business but the Turks", "Restore the Ottoman Sultanate."],
        ["Noone Will Notice the Difference", "As Indonesia, station Gustav Adolf Ilgen in Stockholm."],
        ["Northern Light", "As a Scandinavian country form your own faction, and have Denmark, Sweden, Norway and Finland in it."],
        ["Norway Jose", "As Norway, own and control every Mexican core."],
        ["Not a step back!", "As the Soviet Union never lose 1 core territory to anyone before 1945."],
        ["Not much fun in Stalingrad", "As Germany, capitulate the Soviet Union without taking Stalingrad."],
        ["Not today", "As communist Italy, save Gramsci from the brink of death, make him the leader of Italy and form the Italian National Union."],
        ["Nothing personal, Adolf", "As Italy, take Austria before the Anschluss and never enter a faction with a fascist Germany"],
        ["Nothing Wrong with our Bloody Ships", "As the United Kingdom, have at least 9 battlecruisers."],
        ["Now This is Getting Childish", "As Yugoslavia or Bulgaria, be at war while both countries are ruled by a child."],
        ["Oh, how the turntables", "As India puppet the UK with Churchill as it's leader"],
        ["Oil Sheiks", "As Iraq, have 500 oil production"],
        ["Old Zealand", "As New Zealand, control and own the states of Brabant (Zeeland) and Sjaelland (Zealand)."],
        ["Once More Mate", "Occupy Gallipoli as Australia."],
        ["One Empire", "Unite the entire world under the British Empire."],
        ["One King, Two Crowns", "As Bourbon Spain, hold all Spanish and French core states."],
        ["One Nation Under Atatürk, Indivisible", "As non-aligned Turkey, have zero negative state modifiers."],
        ["One Step Forward", "As Soviet Union declare a war on Poland and Germany before Germany attacks Poland."],
        ["Operation Sea Lion", "Control British mainland as Germany."],
        ["Otto-man", "As Austria or Hungary, led by Otto von Habsburg, control the starting states of Austria, Hungary, Czechoslovakia, Romania, Bulgaria, Greece and Turkey as well as the states in Polish Galicia, Slovenia and Croatia."],
        ["Our Chief Weapon is Surprise...", "As Spain, have at least 5 spies and stage 5 coups against other nations."],
        ["Our Other Place in the Sun", "As Imperial Germany, conquer a Caribbean island."],
        ["Our Words Are Backed With Nuclear Weapons", "As India, develop and deploy a nuke. You must have the Quit India Movement national spirit."],
        ["Panda-monium", "As a warlord, be at war with all chinese nations simultaneously."],
        ["Paradisus Paradoxum", "As Japan, proclaim the creation of a Pure Buddhist Land."],
        ["Party like it's 1520", "Occupy Stockholm as communist Denmark."],
        ["Pesky Greeks", "As Iran, become the owner of all Greek core states "],
        ["Peter’s Pride", "As Peter II of Yugoslavia, overthrow your uncle and become King."],
        ["Pinot Noirway", "As Norway, own and control the state of Bourgogne."],
        ["Pizza Time!", "As Italy, occupy New York, Chicago and Hawaii"],
        ["Play It, Sam", "Have a spy network of at least 50% strength in Casablanca."],
        ["Poland can into space", "Has completed the Special Project Rocket Interceptor."],
        ["Poland Peasant Revolution", "As Poland, have the Peasant’s Strike overthrow the government."],
        ["Premyslid's Dream", "As monarchist Czechoslovakia, integrate both Austria and former Bohemian lands."],
        ["Pride and Extreme Prejudice", "Sink the British Pride of the Fleet."],
        ["Proactive Defense", "As any communist South or Central American country, occupy Washington D.C"],
        ["Prussia of the Balkans", "As Bulgaria capitulate Turkey while also controlling the rest of the Balkans, including Greece."],
        ["Putting the Raid on the Medway to Shame", "As the Netherlands, ensure the United Kingdom has no capital ships (carriers, battleships, battlecruisers, or heavy cruisers)."],
        ["Race for Germany", "As the Soviet union, capitulate Germany after the fall of France before the allies control one German core state."],
        ["Reconquistadors", "As Argentina or Chile, have a Conquistadors national spirit active while holding all Spanish cores"],
        ["Red Hot Chile Peppers", "As Communist Chile, control California"],
        ["Revenge for 1925", "As Iraq, form the Hashemite Arab Federation and defeat Saudi Arabia"],
        ["Revenge for the triple alliance", "As Paraguay, declare war on Argentina, Brazil and Uruguay within the same month"],
        ["Romance of the Three Kingdoms", "As China, puppet and then annex Yunnan and Guangxi Clique."],
        ["Rule Britannia", "As any British Subject state, conquer all of Britain."],
        ["Rumble in the Jungle", "Own all amazon states as any South American nation."],
        ["Sapmi united by the fire", "As Sami, own and control every Sami core."],
        ["Satisfactory", "Have at least one MIO per category at level 10+"],
        ["Saving Private Bryansk", "Capture a General in the state of Bryansk."],
        ["Savior of the holy lands", "As Afghanistan, become the owner of Palestine and Mecca"],
        ["Second Time’s the Charm", "As France, occupy Moscow while Napoleon VI is your country leader."],
        ["Shaken, Not Stirred", "Successfully stage a coup in any nation using a spy with the Seducer trait."],
        ["Siberian Tiger", "As Tannu Tuva, form Siberia."],
        ["Snakes on a plane", "As Brazil, capture Rome with paratroopers."],
        ["Somehow He Has Returned", "As Argentina, have Senor Hitler become country leader"],
        ["Spaak of Genius", "As Belgium, with Paul-Henri Spaak as country leader, research at least 10 different Special Projects."],
        ["Spies Trade", "As India, become the spymaster for the Allies."],
        ["Stalin, how many guns does he have? ", "As the pope, capitulate the USSR"],
        ["Steiner", "As Germany, get over 30% surrender progress after 1941.6.22 while being at war with Soviet Union, France and England and controlling Moscow, Paris and London."],
        ["Sun Tzu Reborn", "As Any Chinese Nation, have a level 9 field marshal."],
        ["Sunrise Invasion", "As Japan, conquer Mexico then Europe before 1945."],
        ["Sunset Invasion", "Occupy a coastal province in Europe as Mexico, and if in a faction have it contain only South American members or puppets."],
        ["Super Heavy Metal", "Complete the Special Projects for Intercontinental Bombers, Land Cruisers, and Super Heavy Battleships."],
        ["Swiss Cheese", "As Switzerland annex 5 states that are not contiguous with each other or Switzerland."],
        ["Team America", "As the U.S.A., drop a nuclear bomb on Paris."],
        ["Thai fighters", "As Siam, have 10 aces."],
        ["ThaiTanic", "As any nation, sink Siam's pride of the fleet."],
        ["That's SIkh!", "As Khalistan, control all of the starting Raj states"],
        ["The 501st Legion", "As Belgium, have the National Spirit “Rexist Legion” and be in control of all of your starting neighbors’ Capitals "],
        ["The 7th State", "As Australia, own and fully control New Zealand."],
        ["The Balkan Powder Keg", "As Yugoslavia, start the Second World War (i.e. be part of either the Axis or the Allies and at war with the other faction in a war you started)."],
        ["The bell tolls for us", "Win Spanish Civil War as Republican Spain."],
        ["The Coast is Clear", "As China, never lose a starting coastal state before 1945.9.2."],
        ["The Danelaw", "As Denmark, conquer England."],
        ["The Dragon Rises", "As \"Welsh Argentina\", control Wales"],
        ["The Dragon Swallowed the Sun", "As Manchukuo, break free from Japan and annex your former Overlord without being in a faction."],
        ["The Empire Strikes Back", "As Britain, declare war on one of your former subjects."],
        ["The Good, the Bad and the Weird", "As Manchukuo, have max level infrastructure in every owned state and generate at least 15 units of oil."],
        ["The Juannines", "As the Philippines, have cores and control all of Spain."],
        ["The Legacy of Cyrus the Great", "As Iran, become the owner of former Achaemenid Empire's states"],
        ["The Lenin Boys are Back in Town", "As Communist Hungary bring back the Lenin-fiúk and take control over Leningrad"],
        ["The Lion King", "As Haile Selassie, declare yourself “King of Kings” and control Kenya and Tanzania."],
        ["The Lion that Roared", "As Ethiopia, without being in a faction, force the Italians to make peace. Again."],
        ["The Magic School Bus", "With the Per Albin Bus, drive to Cape Town."],
        ["The Man of Medan", "Sink 100 convoys as Indonesia."],
        ["The Merry Band", "As communist brazil ruled by Lampião, occupy Nottingham"],
        ["The Munich Disagreement", "As Czechoslovakia, occupy Munich while at war with Germany."],
        ["The Neverending Story", "As a Warlord, proclaim a new Chinese Empire."],
        ["The New Home of the Revolution", "As Mexico, put Trotsky in power and puppet the Soviet Union."],
        ["The People Have Stood Up!", "With Mao as your leader, win the Chinese Civil War."],
        ["The Pope? How many Divisions does he have?", "As the USSR take Rome."],
        ["The Puppetmaster", "Have at least 51 subjects."],
        ["The Red Sea", "As Ethiopia, go communist and take all the states that border the Red Sea"],
        ["The return of the king", "As the exiled King of Gotland, retake mainland Sweden"],
        ["The Revenge of Montezuma", "Restore the old borders with USA as Mexico."],
        ["The Revolution Triumphant", "Have Germany as a puppet of Soviet."],
        ["The rightside up", "As Australia, own and fully control Jan Mayen."],
        ["The Romanovs laugh last", "Restore the Romanovs to the throne and conquer Germany, Hungary, Austria, Czechoslovakia,Turkey, and Bulgaria."],
        ["The Sands of Time", "As Iran, own the entire Middle East"],
        ["The Soviet Onion", "As the Soviet Union, have only puppets as neighbors."],
        ["The Sun Will Never Set", "As Japan, proclaim the Eternal Empire and control all of your core states."],
        ["The True Successor", "As Luxembourg led by Charles Marx control both Brussels and Trier."],
        ["The weapons of the Third Emu War", "As Australia, use a nuclear bomb on core Australian territory."],
        ["The Winner takes it all", "As PRC owns and controls all starting Chinese core states."],
        ["This Achievement is Cheesy", "As Latvia, form Ostland and occupy Vasterbotten."],
        ["This achievement is dedicated to the brave soldiers of... ", "As Afghanistan, capitulate the Soviet Union"],
        ["This is going to be LIT", "As Lithuania, hold the capitals of all of your neighbours."],
        ["This is Madness!", "As Greece, fulfill the Megali Idea and then form Greater Greece. "],
        ["This time for Africa", "As Ethiopia, found the African Union and have it encompass at least 13 different countries with capitals in Africa."],
        ["This time it will stick", "As any Allied Nation (in faction with a democratic Britain), enforce a peacedeal on Germany that disarms the Rhineland and makes it a demilitarized zone."],
        ["Time is on our side", "Reach 1948."],
        ["To Arms in Dixie!", "As the U.S.A., start a new civil war as the South."],
        ["Tojo Shot First", "As Japan, nuke a core territory of the US before the US develops nuclear weapons."],
        ["Totally Not Cool, Bromania", "As Romania, change sides in the war and capitulate a former ally."],
        ["Tour de France", "Occupy all of mainland France while having at least 20 fully equipped Bicycle regiments."],
        ["Transport Tycoon", "Have at least 1000 convoys."],
        ["Treading the Narrow Path", "As the Netherlands, do not cave to the Germans, continue the Zuiderzee works, and do not lose control of any of your continental European states until 1945."],
        ["True Blitzkrieg", "As Germany have both Poland and France surrender before January 1st 1940."],
        ["True Condor Legion", "As CHL, BOL, PRU, ECU, VEN, COL - sent volunteers to Germany"],
        ["Tsar Bomba", "As Tsarist Russia complete the Special Project for thermonuclear bombs."],
        ["Turing Complete!", "Fully decrypt all nations in the Axis. "],
        ["Two Arms Against Tyranny.", "As Finland, capitulate the Soviet Union while having a 2 country faction with another Nordic"],
        ["Underpaid, Undersexed, and Under Eisenhower", "As the U.S.A., assume faction leadership of the Allies, and have over 50 expeditionary divisions from the United Kingdom."],
        ["United Netherlands", "Conquer Belgium and Luxembourg as Netherlands ."],
        ["Uralic brothers united", "As Finland, have Hungary, Estonia, Sapmi, Karelia, Mari El, Udmurtia, Komi, Ostyak-Vogulia, Yamalia and Nenetsia as subjects"],
        ["URSAL", "Be communist and own all of South America"],
        ["Vinland", "As Iceland, conquer Newfoundland"],
        ["Vive la France", "Reach 1948 as France without capitulating or surrendering."],
        ["Vive la Jeune Ecole", "As France, have at least 150 Destroyers and research the maximum torpedo launcher technology, before 1945."],
        ["Waltzing Matilda", "Deploy 25 Heavy Tank Battalions as Australia."],
        ["Warszawo, Walcz!", "Stage the Warsaw uprising and succeed."],
        ["We don’t really like statistics", "As the Soviet Union under Stalin, conquer Germany while suffering less than 1 million casualties total."],
        ["We Will Rock You", "As Spain, own Gibraltar."],
        ["We'll build it in a day", "Research Construction V."],
        ["We’re Putting the Band Back Together", "As Turkey, be in a faction with Germany and Austria-Hungary."],
        ["Well, I Didn’t Vote for You", "Win the Spanish Civil War as the Anarchists."],
        ["Weltpolitik", "As Germany take control of all of your former colonies"],
        ["Why Die For Danzig?", "As Germany, turn France fascist and occupy Danzig without going to war with France."],
        ["William Wallis", "As the United Kingdom, put Edward VIII in power, enforce an American monarchy, and have both it and Scotland as subjects."],
        ["Woman in a High Castle", "As Germany with a female leader either annex the USA, including Alaska and Hawaii or have an American puppet that owns all the American starting states, including Alaska and Hawaii."],
        ["Wunderwaffen", "Has completed the Special Projects Nuclear Fission Bomb, Rocket Interceptor and Jet Engines."],
        ["You Shall Not Pass", "As Switzerland win a defensive war without ever losing Western Swiss Alps, Eastern Swiss Alps or Ticino"],
        ["You Will Never Kill Me Alive", "Have one of your spies take a Suicide Pill."],
    ];

    assert.strictEqual(officialAchievements.length, 292, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 1 hidden Hearts of Iron IV achievement keeps its real name and a non-empty curatorial description", () => {

    const names = [
        ["vojtek_commander", "Bearer of Artillery"],
    ];

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
