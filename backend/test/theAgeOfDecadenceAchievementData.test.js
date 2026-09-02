import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-age-of-decadence.json - 109 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 230070 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-age-of-decadence");

test("getPlannerData('the-age-of-decadence') returns real planner data with 109 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-age-of-decadence");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 109);

});

test("every The Age of Decadence achievement has a unique id from 1 to 109 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 109 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 109);
    assert.strictEqual(new Set(apinames).size, 109);

});

test("every The Age of Decadence achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 109 The Age of Decadence achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Good Morrow To You, Magistrate!\"", "Outmaneuver your opponents and make Strabos the new magistratus of Maadoran."],
        ["\"Is Life Always This Hard?\"", "Died in the first fight."],
        ["300!", "Defeat the Ordu army at a narrow mountain pass and live to tell the tale."],
        ["A Magus!", "Acquire powerful artefacts and learn how to use them."],
        ["A Trip Into The Past", "Explore the Tower of Zamedi."],
        ["Aggressive Negotiations", "Complete the Thieves Guild's questline in Ganezzar, double-crossing Glabrio."],
        ["Airworthy!", "Take the flying fortress for a spin."],
        ["Antiquities Expert", "Acquire ten different artefacts to start a collection."],
        ["Anyone Can Be Killed", "Complete the Thieves Guild's questline in Maadoran."],
        ["Arch of the Covenant", "Visit an ancient arch - a site of many miracles."],
        ["Assassin", "Complete the first quest as an assassin."],
        ["Beware of Greeks Bearing Gifts", "Complete the Praetor of House Daratan's questline in Maadoran."],
        ["Burn it", "Some Men Just Want to Watch the World Burn."],
        ["Centurion (Imperial Guards)", "Get promoted to the rank of Centurion."],
        ["Champion of the Arena", "Fight your way to the top and become the new Champion of the Arena."],
        ["Checks and Balances", "Help Lord Darganus keep the rabble at bay."],
        ["Collector of Rarities", "Acquire five different relics of the past, without having any idea what most of them are for."],
        ["Computer Literate", "Learn how to use the ancient consoles."],
        ["Corporate Interests", "Complete the Merchants Guild's questline in Ganezzar as per Strabos' orders."],
        ["Dead River", "Visit Dead River settlement."],
        ["Deal with the Devil", "Make a deal with Legatus Carbo, promising him a worthy enemy and a war he's always dreamt of."],
        ["Delenda Est", "Complete the Praetor of House Aurelian's questline in Ganezzar."],
        ["Demonbane", "Enter a wizard's tower and slay the demon that dwells within it, cleansing the tower from evil."],
        ["Desperate Times", "You know what you have to do."],
        ["Diplomat", "Broker an alliance between House Daratan and the Imperial Guards."],
        ["Drifter", "Complete the first quest as a drifter."],
        ["Explosion Expert", "Use an improvised explosive device to ambush the shipment and steal the gold."],
        ["Extremely Persuasive", "Convince Lord Antidas to have Commander Carrinas killed without producing any proof."],
        ["Fire in the Hole!", "Destroy Al-Akia."],
        ["Friends on the Other Side", "Make new friends and learn how to influence people."],
        ["Gazed Into The Abyss", "Explore the very heart of the Abyss."],
        ["Godless World", "Kill Agathoth to protect mankind."],
        ["Godslayer", "Put a 'god' out of its misery, releasing it from the horror of its existence and ending the magic that haunted the Abyss for centuries."],
        ["Great Vengeance and Furious Anger", "\"And I will strike down upon thee with great vengeance and furious anger... And you will know I am the Lord when I lay My vengeance upon you.\""],
        ["Grifter", "You completed the first quest as a grifter."],
        ["Grim Reaper", "Kill 200 people in the course of one game."],
        ["Hellgate", "Visit Hellgate and live to tell the tale."],
        ["Hero of Harran's Pass", "Complete the Imperial Guards' questline in Maadoran."],
        ["Hidden from the World", "Visit a monastery up in the mountains."],
        ["Infiltrator", "Infiltrate House Daratan's compound and discuss employment opportunities with Lord Antidas."],
        ["Interrogator", "Have a heart to heart conversation with loremaster Sohrab and make him tell you everything he knows."],
        ["Iron Man", "Acquire Power Armor and fully charge it."],
        ["It's a Thing of Honor...", "Complete the Assassins Guild's questline in Teron."],
        ["It's Just Business. Nothing Personal...", "Complete the Assassins Guild's questline in Maadoran, double-crossing your Guildmaster."],
        ["Killed More People Than Malaria", "Kill a hundred people in the course of one game."],
        ["Killer of Men", "Fight your way out of Teron, leaving nothing but corpses behind."],
        ["Kingdom of God", "Bring God's Kingdom to Earth."],
        ["Kingmaker", "Broker an alliance between House Daratan and the Imperial Guards, and convince Commander Carrinas to proclaim Antidas an Emperor."],
        ["Kingslayer", "Provoke Lord Antidas to attack the Imperial Guards delegation and kill him."],
        ["Knights of the Temple", "Complete the Imperial Guards' questline in Ganezzar, siding with House Crassus."],
        ["Legatus (Imperial Guards)", "Get promoted to the rank of Legatus."],
        ["Legionary (Imperial Guards)", "Join the Imperial Guards to be All You Can Be."],
        ["Liegeman (House Aurelian)", "Pledge your fealty to House Aurelian, swearing to serve Lord Gaelius."],
        ["Liegeman (House Daratan)", "Pledge your fealty to House Daratan, swearing to serve Lord Antidas."],
        ["Loremaster", "Complete the first quest as a loremaster."],
        ["Mage-Killer", "Kill Faelan the Thrice Blessed."],
        ["Manipulator", "Talk the raiders into attacking the Aurelian outpost for you to kill two birds with one stone."],
        ["Matters of Faith", "Complete the Praetor of House Daratan's questline in Ganezzar."],
        ["Mercenary", "Complete the first quest as a mercenary."],
        ["Merchant", "Complete the first quest as a merchant."],
        ["MR. FIXIT", "Fix the machines in the buried tower."],
        ["My Precious...", "Recover Darius' helmet but keep such a valuable relic for yourself."],
        ["My Vision is augmented", "Improve your eyesight with a fashionable mechanical eye."],
        ["Never Felt Better", "Take a ride in an ancient healing machine."],
        ["Novus Ordo Seclorum", "Bring a new world order."],
        ["On His Lordship's Secret Service", "Complete the Praetor's questline in Teron."],
        ["Once a Traitor...", "You have a dangerous habit of betraying your masters."],
        ["Ordu New Champion", "Kill Belgutai to impress the Ordu with your martial prowess."],
        ["Patriot Militia Sponsor", "Make a generous contribution to Regulus' campaign, funding a new militia to keep the city 'safe'."],
        ["Peacemaker", "Convince Belgutai to join Khan Thorgul and unite the Ordu tribe."],
        ["Personal Magnetism", "Convince Centurion Flavius to introduce you to Lord Antidas."],
        ["Power to the People", "Help Hector achieve his goals."],
        ["Praetor", "Complete the first quest as a praetor."],
        ["Pulling the Strings", "Complete the Merchants Guild's questline in Teron."],
        ["Rough Men Standing Ready To Do Violence", "Complete the Praetor of House Aurelian's questline in Maadoran."],
        ["Silver-Tongued Devil", "Fast-talk your way out of Teron, getting past every obstacle standing between you and the open road."],
        ["Sleeping Dogs", "Let sleeping dogs lie."],
        ["Stone-Cold Killer", "Kill the Guildmaster of the Assassins Guild and Lord Gaelius during an audience at his own palace."],
        ["Take Heed And Bear Witness", "Discover and read the ancient tablets - the warning of the Magi."],
        ["Terminator", "Deal with the raiders and the Aurelian outpost by killing everyone. Not very subtle, but extremely effective."],
        ["The Birthplace of the Gods", "Visit the ruins of Al-Akia."],
        ["The Chosen One", "Convince a preacher from Ganezzar that you're the Chosen One, sent by the gods to lead mankind out of darkness."],
        ["The City in the Sky", "Hey, did you see that?"],
        ["The City of All Cities", "Visit Maadoran - the largest city in the known world."],
        ["The Eye of the Desert", "Visit Inferiae."],
        ["The First Sword", "Complete the Imperial Guards' questline in Ganezzar with the help of Commander Carrinas."],
        ["The Game of Thrones", "Complete the Merchants Guild's questline in Maadoran."],
        ["The Gods Shalt Walk Among Us", "Complete the Praetor of House Crassus' questline in Ganezzar."],
        ["The Great Cart Robbery", "Complete the Thieves Guild's questline in Teron."],
        ["The Guildsman", "Complete the Assassins' Guild's questline in Ganezzar, staying true to the guild."],
        ["The Highest Peak", "Visit Harran's Pass."],
        ["The Holy City", "Visit Ganezzar."],
        ["The House of Wisdom", "Visit the Library of Saross."],
        ["The Imperial Army", "Complete the Imperial Guards' questline in Ganezzar, siding with House Aurelian."],
        ["The Inquisitor", "Complete the Assassins Guild's questline in Ganezzar, siding with Varro."],
        ["The Lich", "Acquire a rare extract of Amaranthus, use to make an elixir and drink it."],
        ["The Lord of Lowtown", "Complete the Thieves Guild's questline in Ganezzar, siding with Glabrio."],
        ["The Men of the Plains", "Visit an Ordu camp beyond the mountains."],
        ["The Nameless One", "Die a hundred times and live again."],
        ["The One God", "Ascend."],
        ["The Opium of the People", "Complete the Merchants Guild's questline in Ganezzar, embracing Meru's Creed."],
        ["The Pax Imperium", "Discover a long forgotten underground hangar."],
        ["The Right Thing", "Do the right thing. You'll know what it is."],
        ["Thief", "Complete the first quest as a thief."],
        ["To Serve and Protect", "Complete the Assassins Guild's questline in Maadoran, serving Lord Gaelius and killing his enemies."],
        ["Under New Management", "Complete the Imperial Guards' questline in Teron."],
        ["Unto the Breach", "Charge into the breach during the siege of Ganezzar."],
        ["Urban Explorer", "Find a way into Maadoran's sewers."],
        ["Well-Trained", "Receive training from five different people in the course of one game."],
    ];

    assert.strictEqual(officialAchievements.length, 109, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
