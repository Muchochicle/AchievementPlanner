import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mortal-kombat-x.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 307780 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mortal-kombat-x");

test("getPlannerData('mortal-kombat-x') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for mortal-kombat-x");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Mortal Kombat X achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Mortal Kombat X achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Mortal Kombat X achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Kontender", "Complete 1 Tower Battle"],
        ["A New Beginning", "Complete 50% of Story Mode"],
        ["All I Do Is Win", "Jump back and forth over your opponent 5 times during the Fatality sequence and perform a Fatality"],
        ["All the Pieces", "Equip a Background, Icon and Border set"],
        ["Almighty", "Complete a Test Your Might Tower"],
        ["Back It Up", "Equip a new Background image"],
        ["Bill of Goods", "Win 1 complete match in Survivor King of the Hill"],
        ["Blanche Advantage", "Hit someone with the old lady Level Interaction"],
        ["Bloody Good Time", "Perform a Fatality in a match with every character"],
        ["Brutal End", "Perform 1 Brutality"],
        ["BUDDY!!!", "Send a Tower Challenge to a friend"],
        ["Can't Stop This", "Win an Invasion 1v1 fight"],
        ["Challenge Accepted", "Win a single Tower Challenge"],
        ["Dance The Night Away", "Flip Stance 10 times with a Kombat Pack 2 character during a Fatality sequence in an Online match"],
        ["Dark Future", "Perform 50 Brutalities"],
        ["DIE WILL YOU", "Deal 1,000 total hits during Invasion Boss fights"],
        ["Disco", "Create a sun ray with Kotal Kahn and perform a flip stance 5 times while in the ray"],
        ["Dropping Fools", "Reach a 10 complete game win streak in Ranked 1v1 matches"],
        ["Elder God", "Reach personal level 65 in XP"],
        ["Faction Champion", "Reach level 50 in any faction"],
        ["FINISH HIM", "Perform 1 Fatality in a match"],
        ["Fox Finish", "Win the match with your opponent stepping on Caltrops"],
        ["Getting Tipsy", "Perform Bo' Rai Cho's Drinking special 10 times during a match in the Klassic Tower"],
        ["Giving Respect", "Give Respect points in a King of the hill match"],
        ["Going The Distance", "Complete the Klassic Tower with one of the Kombat Pack 2 characters"],
        ["Good to be King", "Win 1 complete Klassic King of the hill match"],
        ["Hara Kiri", "Kill yourself with Kotal Kahn for 1 round and win the match"],
        ["Hit the Dojo", "Enter Practice mode"],
        ["Hug It Out", "Throw 5 Face Huggers during a match with Alien in the Klassic Tower"],
        ["I'm number 1", "Win 1 Tower Battle"],
        ["Inner Strength", "Win 1 complete online match"],
        ["INVASION", "Complete an Invasion Tower"],
        ["It's a Gusher", "Spill 1,000 pints of blood"],
        ["Juggernaut", "Win 5 Tower Battles"],
        ["Jump Ship", "Become a member of every faction"],
        ["Jumping Bean", "Jump 30 times in 1 match"],
        ["Keep it Secret", "Find a secret fight in the Living Towers"],
        ["Knockout", "Perform a 10 hit combo with every character"],
        ["Lands-Down", "Don't perform a Kombo over 4 hits with Bo' Rai Cho and win a complete Online Ranked 1v1 match"],
        ["Luck be a Lady", "Play 7 complete Test Your Luck matches"],
        ["Master", "Win a single complete match with every character variation"],
        ["Moving Up", "Reach personal level 10 in XP"],
        ["Need a Doctor", "Perform every character's X-Ray"],
        ["No Loyalty", "Reach level 50 in all factions"],
        ["Not Dead Yet", "See all Test Your Might deaths"],
        ["Only a Real Master", "Beat an opponent while they still have 90% health and you have 10% or less health remaining"],
        ["Pledge Yourself", "Reach level 5 in any faction"],
        ["Real Icon", "Equip a new Icon"],
        ["Respected Fighter", "Earn 1,000 Respect points"],
        ["Return Kustomer", "Play 100 complete online matches"],
        ["Robots Rule", "Win 5 complete matches with each Robot Type"],
        ["Royalty", "Win 5 complete Klassic King of the hill matches"],
        ["So Bored", "Equip a new Border"],
        ["Statistical Advantage", "View Kombat Kard"],
        ["Stay Back", "Play an Invasion Boss fight"],
        ["Straight Power", "Perform 100 Fatalities in matches"],
        ["Terrifying Encounter", "Confront a beast within the Krypt"],
        ["That's How You Do It", "Complete Tutorial"],
        ["The Grinder", "Win a match after connecting all attacks from Leatherface's Berserker Stance in the Klassic Tower"],
        ["The Kollector", "Unlock 50 Kustom Kombat Modifiers"],
        ["The Kraken", "Perform the Kove Stage Fatality with Triborg in the Klassic Tower"],
        ["There is a Ruler", "Complete 100% of Story Mode"],
        ["Throwback", "Perform a Klassic Fatality in a Klassic skin"],
        ["Time Out", "Win a match by time out"],
        ["Tower God", "Complete 50 Living Towers"],
        ["Tower Kompetitor", "Complete a single Tower"],
        ["Tower Master", "Complete 10 Living Towers"],
        ["Tower Warrior", "Complete a Tower with every character"],
        ["Trolling", "Duck 30 times during Fatality sequence"],
        ["Unstoppable", "Play 200 complete online matches"],
        ["Well Rounded", "Play every character variation"],
        ["What Doesn't Kill You Makes You Still Alive", "Perform a Stage Brutality with Alien in the Klassic Tower"],
        ["Where It All Started", "Perform the Pit Stage Fatality with Leatherface in the Klassic Tower"],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
