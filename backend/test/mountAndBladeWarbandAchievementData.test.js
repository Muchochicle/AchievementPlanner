import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mount-and-blade-warband.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 48700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mount-and-blade-warband");

test("getPlannerData('mount-and-blade-warband') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for mount-and-blade-warband");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Mount & Blade: Warband achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Mount & Blade: Warband achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 80 Mount & Blade: Warband achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abundant Feast", "Eat 6 different types food concurrently."],
        ["Agile Warrior", "Get either two agility related skills to 5 or one to 7."],
        ["Art of War", "Have two of the following skills at a 5; Trainer, Tactics, Leadership, or Persuasion."],
        ["Autonomous Collective", "Be chosen as marshall."],
        ["Baron got back", "Win a battle against a lord or party who previously beat or captured you."],
        ["Best served cold", "Defeat 10 enemy parties in the snowy regions of Calradia."],
        ["Book Worm", "Finish reading one book through the camping screen."],
        ["Bring out your Dead", "Get one of your healing skills to 5."],
        ["Calradian Army Knife", "Kill 10 enemies with a throwing weapon's secondary function."],
        ["Calradian Tea Party", "Make your own faction."],
        ["Choppy Chop Chop", "(MP) Slay 50 foes with slashing weapons."],
        ["Community Service", "Install and play one mod."],
        ["Concilio Calradi", "As a ruler have 3 vassals."],
        ["Dexterous Dastard", "Make one of your ranged weapon skills 250."],
        ["Elite Warrior", "(MP) Win a round of deathmatch mode."],
        ["Empress", "As a female character, become queen of all Calradia."],
        ["Every breath you take", "(MP) In any multiplayer mode have more kills than deaths."],
        ["Force of Nature", "You and your army have killed or wounded 5,000 enemy troops."],
        ["Gambit", " Land a shot with a difficulty of 5 while using a throwing weapon."],
        ["Get up Stand up", "Cleanse the town of bandits in the opening mission."],
        ["Girl Power", "As a female character, help a female claimant reclaim her throne."],
        ["Glorious Mother Faction", "(MP) Win a round of team deathmatch mode."],
        ["Gold Farmer", "Amass a fortune of 100,000 denars."],
        ["Good Samaritan", "Help a lord or party win a fight."],
        ["Got Milk?", "Steal 3 cattle from a single village."],
        ["Happily ever after", "Get Married."],
        ["Harassing Horseman", "(MP) Kill 100 people with mounted projectiles."],
        ["Heart Breaker", "Get a character to elope."],
        ["Help Help I'm being Repressed", "Harass wandering peasants on the map."],
        ["Holy Diver", "Kill or wound at least 500 enemies."],
        ["I dub thee", "Promote one of your followers into a position of power."],
        ["Iron Bear", "You have completed the following achievements: Mace in yer Face!, Spoil the Charge, Agile Warrior, and This is our land."],
        ["Kassai Master", "You have completed the following achievements: Trick Shot, Khaaan!, Agile Warrior, and Harassing Horseman."],
        ["Khaaan!", "Kill 75 enemies with horse archery."],
        ["King Arthur", "You have completed the following achievements: Melee Master, Knights of the Round, Every breath you take, I dub thee/Good Samaritan."],
        ["Kingmaker", "Put a pretender on their rightful throne."],
        ["Knights of the Round", "Recruit 6 hero characters."],
        ["Lady of the Lake", "As a female character, give a companion character a great sword."],
        ["Last man standing", "(MP) Win one round in battle mode."],
        ["Legendary Rastam", "You have completed the following achievements: Abudant Feast, Mace in yer Face!, Sarranidian Nights, and Art of War/Melee Master."],
        ["Look at the Bones!", "Face off against 100 enemies using custom battle mode."],
        ["Mace in yer Face!", "(MP) Kill 25 foes with a blunt weapon."],
        ["Man Eater", "Kill 50 men as a female character."],
        ["Man Handler", "As a female character, Capture and sell three NPC lords. "],
        ["Manifest Destiny", "Assist your faction in conquering Calradia."],
        ["Medieval Emlak", "Become the owner of at least 5 fiefs."],
        ["Medieval Times", "Enter and win a tournament."],
        ["Melee Master", "Make one of your melee weapon skills 250."],
        ["Might makes Right", "Get either two strength related skills to 5 or one to 7."],
        ["Migrating Coconuts", "Visit every major town in Calradia."],
        ["Mind on the Money", "Have two of the following skills at a 5; Looting, Inventory Management, Trade, or Prisoner Management."],
        ["Morale Leader", "Raise your soldiers' morale from low to excellent."],
        ["Mountain Blade", "Kill 10 parties of Mountain Bandits."],
        ["None Shall Pass", "Successfully defend a castle."],
        ["Old dirty scoundrel", "Have a -50 relation with a lord, village, or faction."],
        ["Old school Sniper", " Land a shot with a difficulty of 6 while using a crossbow."],
        ["Pugnascious D", "Pick a fight with a lord by insulting him or by challenging him to a duel."],
        ["Queen", "As a female character, make your own faction."],
        ["Romantic Warrior", "Learn 3 poems from tavern bards."],
        ["Royality Payment", "Be granted your first fief."],
        ["Ruin the Raid", "(MP) Win in Conquest mode."],
        ["Sarranidian Nights", "Camp in the Sarranid region of the map."],
        ["Sassy!", "As a female character get into a duel with male lord by insulting him."],
        ["Shish Kebab", "(MP) Perform 25 lance kills while mounted."],
        ["Sold into Slavery", "Sell 5 people to the ransom broker."],
        ["Son of Odin", "You have completed the following achievements: Might makes Right, The Huscarl, Melee Master/Dexterous Dastard, and Holy Diver/Elite Warrior."],
        ["Spoil the charge", "(MP) Kill 50 cavalry while on foot, the enemy must be killed while mounted."],
        ["Svarog the Mighty", "You have completed the following achievements: Might Makes Right, Choppy Chop Chop, Glorious Mother Faction, and Old school Sniper."],
        ["Talk of the town", "As a female character, raise your renown to 50."],
        ["Talking helps", "Engage in a conversation with a hero character through the party screen."],
        ["The Bandit", "Raid 3 caravans and raid 3 villages."],
        ["The Golden Throne ", "Rule all of Calradia!"],
        ["The Holy Hand Grenade", "Kill 75 enemies with throwing weapons."],
        ["The Huscarl", "(MP) Kill 50 foes with throwing axes."],
        ["The Ranger", "Have a 7 in one of the following skills or a 5 in two; Tracking, Path-finding, or Spotting."],
        ["This is our land", "(MP) Your team successfully defended a castle in siege battle mode."],
        ["Throwing Star", "(MP) Kill 25 people with throwing weapons."],
        ["Trick Shot", "Land a shot with a difficulty of 10 while using a bow and arrow."],
        ["Trojan Bunny Maker", "Get the engineering skill up to 5."],
        ["Victum Sequens", "As a ruler conquer 10 towns or castles."],
    ];

    assert.strictEqual(officialAchievements.length, 80, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
