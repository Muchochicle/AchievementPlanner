import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/victoria-3.json - 141 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 529340 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 141 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("victoria-3");

test("getPlannerData('victoria-3') returns real planner data with 141 curated achievements", () => {

    assert.ok(game, "expected real planner data for victoria-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 141);

});

test("every Victoria 3 achievement has a unique id from 1 to 141 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 141 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 141);
    assert.strictEqual(new Set(apinames).size, 141);

});

test("every Victoria 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 141 Victoria 3 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Las Barricadas!", "As Spain, switch to an Anarchist revolution or secession, and win the ensuing conflict"],
        ["Agitate Elsewhere", "Exile an Agitator with at least 100 Popularity"],
        ["All Quiet on the Western Front", "Have over a million casualties on a single front"],
        ["American Territory", "Starting as the Indian Territory, have the USA as a subject with no more than three states"],
        ["Amish Paradise", "As a Yankee nation, pass the Industry Banned Law before 1846 and have at least 20 average Standard of Living"],
        ["An Empire under the Pun", "Starting as the Sikh Empire, subjugate Great Britain"],
        ["An Offer You Can't Refuse", "Starting with at least two non-marginal Interest Groups opposing a law, remove all opposition to the law's enactment"],
        ["Anarchy in the UK", "As Great Britain, have an Anarchist form of government"],
        ["Authoritarian", "Pass the Single-Party State, Militarized Police, and Outlawed Dissent Laws"],
        ["Azadi", "As the Mughal Empire, complete the Prisoner of the Red Fort journal entry, expel the British, and bring all of India under your control"],
        ["Banana Republic", "As a Yankee or Dixie nation, achieve maximum prosperity with the United Fruit Company and have at least 75 Banana Plantations"],
        ["Barbary's Back", "Starting as Algeria, retake Algiers and become a Major Power"],
        ["Be Prepared!", "Be prepared and avert a famine during a high-intensity harvest condition"],
        ["Belle Époque", "Starting as France, have the highest GDP and Innovation generation in the world"],
        ["Biedermeier", "As Austria, be the number 1 producer of art and furniture"],
        ["Billionaire", "Have a national GDP of at least £1 billion"],
        ["Bootlicker", "As a subject, have the pro-overlord lobby at max appeasement"],
        ["Bourbon for everyone!", "As Spain, have an average standard of living of at least 20 while remaining a monarchy"],
        ["Breadbasket", "Pass the Homesteading Law and be the leading producer of Grain and Groceries"],
        ["Broken Promises", "As Italy join a diplomatic play against 2 or more of your allies"],
        ["Brotherhood and Unity", "Form the nation of Yugoslavia"],
        ["Can't Touch This", "As a country with at least 10% of your GDP owned by a foreign power, nationalize all buildings and prevent them from being privatized for 12 whole years"],
        ["Caretaker", "Complete the 'Egalitarian Society' objective"],
        ["Caste Away", "Enact Affirmative Action as a country with the British Indian caste system"],
        ["Champagne Socialist", "As a Council Republic, produce more than 100 units of Champagne"],
        ["Cosmopolitan", "Have 10 non-primary cultures present in your country, and have all their constituent pops be at Full Acceptance"],
        ["Crush the Commune", "As France, defeat the rebellion of the Paris Commune"],
        ["Cult of Reason", "Pass the State Atheism Law and be the leader of an ideological power bloc with at least 10 members"],
        ["David Slays Goliath", "Starting as Montenegro, exist whilst the Ottoman Empire does not"],
        ["Declaration of Independence", "Starting as a subject nation, break free from your overlord"],
        ["Deconquista", "As any Muslim country, convert Spain to Islam"],
        ["Deeds, not words!", "Pass the Women's Suffrage law"],
        ["Deșteaptă-te, Române!", "As a Romanian nation, form Romania and directly own all Romanian homeland states"],
        ["Devil's Railroad", "Complete the Exploiting the Amazon Journal Entry, own all Amazon states, and construct railways in them"],
        ["Diplomatic Victory", "As a Great Power, have a pro-country lobby for your country in every other Great Power"],
        ["Durran Durran", "As Herat, form Afghanistan, own all the historical states of the old Durrani Empire, and do not be a member of any power bloc led by any other country"],
        ["Educated", "Complete the 'Learn the Game' objective"],
        ["Emperor Norton", "As the USA, become a Monarchy with Joshua Norton as monarch"],
        ["Enlightened Despot", "Have electrical street lights in all states while being an Autocracy"],
        ["Estado Novo", "As Brazil, make Getulio Vargas the ruler of your nation, and complete the New Republic Journal Entry"],
        ["Euphoric", "Pass the State Atheism Law and have the Intelligentsia be Powerful"],
        ["Everyone Disliked That", "Have every Interest Group lose approval by promoting a Commander"],
        ["EXACTLY 100!!!", "As any independent country, have the fervor of any primary culture reach 100"],
        ["Federation Day", "Form the Federation of the Andes"],
        ["First flight", "Be the first nation in the world to fly aeroplanes"],
        ["Folkhemmet", "As Sweden, enact Corporate State and have level 5 Social Security, Health, and Workplace Safety institutions"],
        ["For Twelve Years You Have Been Asking", "Privatize all buildings and prevent them from being state or worker-owned for 12 whole years"],
        ["Fordlandia", "Have an automotive company establish a country via a colony and have a top 10 GDP"],
        ["Franchising", "Establish a Regional HQ and have it own at least 20 levels"],
        ["Full Circle", "Starting as Spain, win the Carlist Wars, and then elect the Carlist candidate after the Glorious Revolution"],
        ["Go West, Young Man", "As the USA, own California, Oregon and Washington with 250k or more population in each state"],
        ["Golden Spirit", "As a country with an Ainu primary culture, build 4 gold mines in Hokkaido"],
        ["Grander Colombia", "Form Grand Colombia and own all land in the Gran Colombia, Andes, and La Plata strategic regions"],
        ["Great Game no re", "Complete the Great Game Objective"],
        ["Habsburg Resurgence", "As Austria, own Silesia and Prussia must be Minor Power or lower rank"],
        ["Hegemon", "Complete the 'Hegemon' objective"],
        ["Hermit Kingdom", "As Korea, act on the Donghak movement's petitions"],
        ["Hexagon No More", "Complete the Natural Borders of France Journal Entry"],
        ["Honor and Life", "As Circassia, complete the Honor Before Life journal entry"],
        ["Huge Ego, Sorry", "Unite Germany and have Max Stirner rule your nation"],
        ["Hyperpeace", "As any country, have both Finland and Korea in your power bloc"],
        ["I am a Scandinavian", "Form the nation of Scandinavia"],
        ["I didn't vote for Pedro", "As Brazil, change government to Republic and implement Universal Suffrage"],
        ["I’m Feeling Hungary", "As Hungary, complete the Hungarian Revolution Journal Entry, and achieve independence"],
        ["I'm the Captain Now", "Look at me. As a member of a power bloc, win the struggle for power bloc leadership"],
        ["Institutional", "Have an institution at maximum investment level"],
        ["Inventive", "Research all technologies across all three categories"],
        ["Iranzamin", "As Persia, complete the Eastern Frontier Journal Entry, and have a literacy rating of 80%"],
        ["It Never Ends", "Cement the Bonaparte dynasty, become a Republic, and Stamp Out Monarchism"],
        ["It's a Blockade!", "Fully blockade a World Market Hub that is connected to at least 100 Trade Centers"],
        ["Knock Knock", "Threaten someone with gunboats to enact a treaty, and have them accept"],
        ["Kobu Gattai", "As Japan, achieve Union of Court and Shogunate"],
        ["L'Allemagne, c'est Rien", "As France, prevent Germany from unifiying until 1930"],
        ["Luxurious Luxembourg", "Starting as Luxembourg, be the leading producer of Luxury Clothes, Luxury Furniture, and Porcelain"],
        ["Magnanimous", "As Brazil, complete the Magnanimous Monarch Journal Entry and preserve the monarchy"],
        ["Manifest Mexico", "As Mexico, own the Pacific Coast, Great Plains & Texas, and have a higher Power Rank than the USA"],
        ["Martin Anward's Pirates!", "As an unrecognized nation, do piracy in the Baltic Sea for 1 year or more"],
        ["Meiji Restoration", "Complete the Restoration Journal Entries as Japan before 1912"],
        ["Mightier than the Sword", "Have the other side back down in a diplomatic play"],
        ["Mikasa es su Casa", "As Japan, sell a pre-dreadnought to a country with a Hispanophone culture"],
        ["Military Junta", "Have the Armed Forces coup the government"],
        ["Minors, not Miners", "Starting as Lanfang, incorporate all states in Borneo and have the 'Compulsory Primary School' law"],
        ["Muhammed Ali's Ambition", "Starting as Egypt, form Arabia and own East Thrace"],
        ["Nobody Did Their Duty", "As France or Spain, sink the British flagship in a naval battle"],
        ["Not Yet Lost", "As Krakow, form Poland-Lithuania and complete the Expanding the Commonwealth Journal Entry"],
        ["Nothing Personnel, Kid", "In a war, take an enemy capital state with Marines"],
        ["On the Edge", "As Punjab, have four rulers die during the Sikh Sovereignty Journal Entry, before successfully completing it"],
        ["One More Time", "As the Phillipines, rebuild the Manila Cathedral after an earthquake"],
        ["Our Words are Backed...", "Have Gandhi as your head of state, whilst having Infamy over 100"],
        ["Peccavi", "Starting as the British India Company, fully own the states of Sind and Punjab"],
        ["Perkeletankki", "Starting as Finland, produce at least 100 units of tanks every week"],
        ["Piratini, not Pira-tiny", "Starting as Piratini or Grão-Para, have a higher GDP than Brazil"],
        ["Poor, Huddled Masses", "Have a cultural migration target in one of your states"],
        ["Poppydock", "Have at least a level 8 port and export at least 2500 units of Opium to foreign markets"],
        ["Portugal is Not a Small Country!", "As Portugal, own at least 12 states in Africa, and establish a direct land connection between Angola and Mozambique"],
        ["ProleCorp", "As a council republic with command economy, have a company at max prosperity"],
        ["Prussia of the Balkans", "As Bulgaria, complete the Prussia of the Balkans Journal Entry, and have higher prestige than Prussia"],
        ["Quill and Bayonet", "As Austria, complete the Autocracy in the Age of Liberty Journal Entry"],
        ["Railroad Taikun", "As Japan, reform the Tokugawa Shogunate into the Taikunate, and build 50 levels of railway in Japan"],
        ["Reading Campaign", "As a nation starting with less than 20% literacy, get to 95% literacy"],
        ["Regeneration", "As Spain, complete the Economic Regeneration Journal Entry without reducing objectives or employing creative accounting"],
        ["Republic or Death!", "As Paraguay, complete the Expanding Paraguay and Populating the Americas Journal Entries"],
        ["Revolutionary", "Switch sides to the revolutionaries in a civil war and win the ensuing conflict"],
        ["Risorgimento", "Form the nation of Italy"],
        ["Serf’s up", "Starting as a nation with Serfdom, enact Worker’s Protections Labor Rights Law"],
        ["Shut the Door Behind You", "Have an invited Exile become the ruler of your nation and pass the Closed Borders Law"],
        ["Solomon's Quest", "Form the nation of Ethiopia"],
        ["Son of Värmland", "As Sweden, construct the first Monitor"],
        ["Sorbia is Serbia", "As Serbia, own Saxony"],
        ["SPQR", "As the Papal States, become the Roman Republic and then form Italy"],
        ["Standard Oil", "Own at least 30 levels of oil rigs in foreign countries"],
        ["Star-Swarmed Banner", "As the United States, have 100 incorporated states represented on your flag"],
        ["Stonks", "Have three companies at max prosperity at the same time"],
        ["Sugar Rush", "As Cuba, have a 25% share of global sugar exports, and a total export volume of over 2000 units"],
        ["Swiss Bank Account", "As Switzerland, make more than 10% of your GDP from money transfer through treaties"],
        ["Systembolaget", "As Sweden, have a Country Monopoly on Liquor"],
        ["Teamkiller", "As a member of the Balkan League, complete the Spoils of War Journal Entry"],
        ["Thanks, Obama", "As Japan, prior to abolishing Serfdom, have Hokushin'etsu side with you during a civil war"],
        ["The Berlin Conference", "Starting as Prussia, form Germany and fully own at least 10 states in Africa"],
        ["The Great Game", "As Russia, own the entire Central Asia region"],
        ["The Healthy Man of Europe", "As the Ottomans, be the Greatest Power while having max level Public Health Insurance"],
        ["The Man Who Would be King", "Unify Afghanistan as Kafiristan under Josiah Harlan"],
        ["The Most United Kingdom", "As Portugal, have a Personal Union with both Brazil and Spain"],
        ["The New Order", "Have a fully decked out power bloc"],
        ["The Paris Commune", "As France, become a Council Republic and have a Command Economy"],
        ["The Real Movement", "Have a Communist Movement with support over 50%"],
        ["The Spanish Lake", "As Spain, complete the Reconquista Journal Entry"],
        ["The Western Protectorate", "Starting as Great Qing, have a treaty port in France, Germany, the British Isles, Iberia and Italy"],
        ["Thing, Japan", "As Japan, produce three different prestige goods"],
        ["Three Hurrahs", "Form the nation of Germany"],
        ["Three Mountains", "As Ryukyu, win the Hidden Domain Journal Entry and own the entire Ryukyu Islands state"],
        ["Tycoon", "Complete the 'Economic Dominance' objective"],
        ["Venice, Vidi, Vici", "As Venice, have the most Trade Centers in the world"],
        ["Victorian Century", "Play a full campaign from 1836 to 1936"],
        ["Viribus Unitis", "As Austria, complete the Federal Solution Journal Entry, and form the United States of Greater Austria"],
        ["Viva la Confederación!", "As Bolivia, successfully form the Peru-Bolivian Confederation"],
        ["Vox Populi", "Pass a Law with the support of an Agitator"],
        ["Wall of Text", "Have 10 or more articles in a single treaty"],
        ["We are not amused", "As Great Britain, Expel French Diplomats while having Cordial or better relations"],
        ["Wealth, Fame, Power", "Have an admiral with a lifetime privateering amount of 1,000,000"],
        ["Yes, We Have Bananas!", "Produce prestige good Gros Michel Banana from United Fruit Company and get 25% share of total goods on World Market"],
    ];

    assert.strictEqual(officialAchievements.length, 141, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
