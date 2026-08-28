import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/total-war-three-kingdoms.json - 99 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 779340 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 99 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("total-war-three-kingdoms");

test("getPlannerData('total-war-three-kingdoms') returns real planner data with 99 curated achievements", () => {

    assert.ok(game, "expected real planner data for total-war-three-kingdoms");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 99);

});

test("every Total War: THREE KINGDOMS achievement has a unique id from 1 to 99 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 99 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 99);
    assert.strictEqual(new Set(apinames).size, 99);

});

test("every Total War: THREE KINGDOMS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 99 Total War: THREE KINGDOMS achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["...Controls the Universe!", "Playing as any faction, control all 3 spice resources on the map."],
        ["A Battle A Day Keeps The Doctor Away", "Playing as any faction, win 7 battles with a Healer-type Hero leading your army."],
        ["A Land of Milk & Honey", "Playing as any faction, make 8,888 income in a single turn."],
        ["A Sharp Point Sticks Out", "Playing as any faction, obtain the maximum level in any one character attribute."],
        ["Align of Duty", "Playing as any Eight Princes faction, obtain more than 225 in any alignment. "],
        ["Among Men, Lü Bu", "As Lü Bu Kill 25 characters from your kill list"],
        ["An Ambush That's Sure", "Playing as any faction, successfully ambush and defeat any opponent."],
        ["Bandit Emperor", "Win the game with a bandit faction"],
        ["Bandits of the Marsh", "Playing as Zheng Jiang, construct a bandit lair."],
        ["BFFs", "Playing as any faction, form an alliance."],
        ["Blood-drenched & Fancy Free", "Playing as any faction, win 100 battles launched from the campaign map."],
        ["Branching Out", "Playing as any faction, unlock an entire single element of the reforms tree."],
        ["Burning Down the House", "Playing as Dong Zhuo, raze an emperor seat."],
        ["Civil Service", "Playing as any Eight Princes faction, research all civic reforms."],
        ["Demolition Man", "Playing as any faction, breach a wall during a battle."],
        ["Diaochan's Revenge", "With Lü Bu in your party, defeat Dong Zhuo in battle."],
        ["Don't Cheat At The Games", "Playing as a Yellow Turban faction, construct at least 7 Communal Squares."],
        ["Double Happiness", "Playing as a Yellow Turban faction, construct at least 8 Prosperous Farming Estates."],
        ["Dù Zǐténg Will See You Now", "Playing as a Yellow Turban faction, construct a House of Compassion."],
        ["Eye of the Beholder", "Playing as any faction, attack Xiahou Dun with archers."],
        ["Fair-weather Friend", "Playing as any faction, turn a friend into a rival."],
        ["Fear the Tiger more than the government", "As Yan Baihu destroy Sun Ce faction"],
        ["Firestarter", "Playing as Dong Zhuo, raze 11 settlements."],
        ["First Blood", "As Lü Bu kill a character from your kill list"],
        ["First Steps", "Playing as any faction, capture a region."],
        ["First Taste", "Playing as any faction, control a single spice resource."],
        ["Fit For a Prince", "Playing as any Eight Princes faction, win the game by any means."],
        ["Forbidden City", "Playing as any faction, construct a faction palace."],
        ["Frenemies", "Playing as any faction, win 222 battles in multiplayer mode."],
        ["Friend of Winter", "Playing as any faction, unlock every reform in a single playthough."],
        ["GG No Re!", "Playing as any faction, win a ranked match in multiplayer mode."],
        ["Good Luck, Have Fun!", "Playing as any faction, win a multiplayer match."],
        ["Guangdong Coalition", "Playing as any faction, defeat Dong Zhuo."],
        ["Han Shot First", "Playing as any faction, someone else declares themselves emperor before you."],
        ["Here Comes the Sun (Jian)", "Playing as any faction, maintain 8 trade routes."],
        ["History Repeats Itself", "Playing as Dong Zhuo Raze Luoyang."],
        ["Honour Among Thieves", "Use \"Share the spoils\" when the army loot has reached max loot"],
        ["Horse Armour", "Playing as any Eight Princes faction, recruit 10 Cataphract units to your armies."],
        ["Huangdi", "Playing as any faction, declare yourself emperor."],
        ["Humble Beginnings", "Playing as one of the governor factions, become emperor."],
        ["I'm the Man", "During a Nanman campaign, have all Nanman fealties under your control"],
        ["If You Can't Die, Surrender", "Playing as any faction, capture 9413 enemies."],
        ["If You Can't Surrender, Die", "Playing as any faction, kill 92,413 enemies."],
        ["Ill Omen", "Playing as any faction, have a spy successfully complete an assassination."],
        ["Jade Empire", "Playing as any faction, control all jade resources on the map."],
        ["Like My Father Before Me", "Reach greatness like your father and achieve five of Sun Ce ambitions before the end of year 200"],
        ["Live & Let Spy", "Playing as any faction, make your spy become faction leader."],
        ["Lord of Heaven", "Playing as a Yellow Turban faction, unlock all Heaven reforms."],
        ["Lord of the Land", "Playing as a Yellow Turban faction, unlock all Land reforms."],
        ["Lord of the People", "Playing as a Yellow Turban faction, unlock all People reforms."],
        ["Lords of the South", "When playing as Shi Xie, have 4 vassals that are also members of your family at the start of a turn"],
        ["Mandate Regained", "Playing as a Yellow Turban faction, become the Yellow Sky Emperor."],
        ["Many Faces, Many Names", "Give out five titles to five different characters"],
        ["Multi-Kill", "As Lü Bu attack and win three battles in one turn"],
        ["Neighsayer", "Playing as any faction, control all northern horse resources on the map."],
        ["No Small Deed Left Undone", "Playing as Liu Bei, make 6 allies."],
        ["Now the Stuff of Dreams", "Playing as any faction, complete a campaign on legendary difficulty."],
        ["Oath of the Peach Garden", "Fight a battle with Liu Bei, Guan Yu, and Zhang Fei fighting on the same side."],
        ["One Arrow, Two Hawks", "Playing as any faction, win a multiplayer co-op campaign."],
        ["One Hundred Thousand Troops", "Playing as Yuan Shao, form 6 alliances."],
        ["Party of Five", "Playing as any faction, have all 5 Tiger Generals (Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, Huang Zhong) in your faction."],
        ["Point Break", "Playing as any faction, trigger a civil war in another faction."],
        ["Prince of War", "Playing as any Eight Princes faction, research all military reforms."],
        ["Restore the Empire", "Playing as the Han Dynasty win the campaign."],
        ["River Crab Pond", "Playing as a Yellow Turban faction, construct a Garden of Divine Peace."],
        ["Satisfaction Guaranteed", "Playing as any faction, win 66 duels."],
        ["Settlers of the Han", "Playing as any faction, capture 29 settlements."],
        ["Simply the Best", "Playing as any faction, progress a character to the maximum rank."],
        ["Son of the Tortoise", "Playing as the child of Cao Cao, proclaim yourself emperor."],
        ["Special Delivery", "Playing as any faction, kill a Hero with a special ability."],
        ["Spies On Me", "Playing as any Eight Princes, research all espionage reforms."],
        ["Store Some Ice", "Playing as a Yellow Turban faction, construct a Concealed Fort."],
        ["Sunny Side Up", "Playing as any Eight Princes faction, capture the settlement of Luoyang."],
        ["Take No Prisoners", "Playing as any faction, execute 24 captives."],
        ["That Still Only Counts as One", "Win a battle against an opponent fielding at least one elephant unit, or an opponent fielding a general that has an elephant as their mount"],
        ["The Barbarian Emperor", "Playing as a Nanman, become the emperor of the Han, or establish the Nanman kingdom"],
        ["The Empire, Long Divided, Must Unite", "Playing as any faction, declare yourself Emperor of the Three Kingdoms."],
        ["The Knights Who Say Qî", "Playing as a Yellow Turban faction, recruit at least 7 Youxia units."],
        ["The Librarian", "Playing as Lu Zhi, collect all books."],
        ["The Mandate of Heaven", "Playing as any faction, become emperor and win the game."],
        ["The Purist", "During a Nanman campaign, complete a tech tree where all major reforms are to one side"],
        ["The World's Protector", "Playing as any Eight Princes faction, become regent then win the game."],
        ["The Yellow Sky Has Come", "Playing as a Yellow Turban faction, complete a campaign."],
        ["There Will Be Fish Every Year", "Playing as a Yellow Turban faction, construct a Grand Fishing Port."],
        ["They Who Control The Spice...", "Playing as any faction, control two spice resources."],
        ["This is Total War!", "Playing as any faction, win a campaign having declared war on every faction as soon as you encounter them."],
        ["Though the Tortoise Lives Long", "Playing as Cao Cao, trigger a proxy war."],
        ["Tiger King", "Win a battle where an entire retinue was made up of tiger units"],
        ["To Dust", "Playing as any faction, destroy any other faction."],
        ["Trophy Hunter", "Playing as Prince Liu Chong, collect all trophies."],
        ["Upon Closer Inspection", "Playing as any Eight Princes faction, construct the Grand Inspector's Palace."],
        ["Usurp Expectations", "Playing as any Eight Princes faction, become the emperor then win the game."],
        ["Vase On A Table", "Playing as a Yellow Turban faction, construct a Yellow Turban Headquarters."],
        ["Way of the Tao", "Playing as any faction, win a single battle with one of each unit type (Melee Cavalry; Shock Cavalry; Melee Infantry; Glaive & Spear Infantry; Ranged)."],
        ["When the Sun Rises in the West", "Playing as any faction, win every battle (including auto-resolve battles)."],
        ["White Horse General", "Playing as Gongsun Zan, win 11 battles with White Horse Fellows."],
        ["White Tiger Burning Bright", "As Yan Baihu, achieve the highest level of the White Tiger Confederation pooled resource"],
        ["Yellow Sky", "Play as a Jiazi Rebellion faction and win the campaign."],
        ["You Killed My Father, Prepare To Die!", "As Sun Ce kill Huang Zu (In duel or battle)"],
    ];

    assert.strictEqual(officialAchievements.length, 99, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
