import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/football-manager-2021.json - 98 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1263850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("football-manager-2021");

test("getPlannerData('football-manager-2021') returns real planner data with 98 curated achievements", () => {

    assert.ok(game, "expected real planner data for football-manager-2021");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 98);

});

test("every Football Manager 2021 achievement has a unique id from 1 to 98 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 98 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 98);
    assert.strictEqual(new Set(apinames).size, 98);

});

test("every Football Manager 2021 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 98 Football Manager 2021 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 club", "Play 100 matches online in Fantasy Draft"],
        ["200 Club", "Earn 200 match points in Fantasy Draft online"],
        ["Armchair Expert", "You have watched match goals/highlights on the pop up viewer"],
        ["Attack!", "Your team scored a goal in 20 consecutive competitive matches"],
        ["Beat all the AI Managers", "Beat all of the AI Managers in Fantasy Draft mode"],
        ["Beat your Mates ", "You won a Fantasy Draft competition"],
        ["Beating Expectations", "You have gained 90% board confidence in overall competitions"],
        ["Best In Europe", "Your player won a European Player award"],
        ["Best In The Business", "You have won the Manager Of The Month award 10 times"],
        ["Best In The World", "Your player won the World Player Of The Year award"],
        ["Cash To Burn", "You sold a player for £50 million or more"],
        ["Childhood Dream", "Get offered the chance to manage your favourite team"],
        ["Clean Bill of Health", "No injuries for 2 months"],
        ["Clean Sheet", "You played a competitive match without conceding a goal"],
        ["Club Legend", "You have stayed at one club for 20 seasons"],
        ["Comeback King!", "You won a competitive match after being 2 or more goals down at half-time"],
        ["Cup Glory!", "You won a top domestic cup"],
        ["Do The Double", "You won a nation's top league and cup competitions in the same season"],
        ["Domination", "You have won 3 consecutive top division league titles"],
        ["Draft Dominator", "Win 25 draft matches online"],
        ["Draft Rivalry", "Win 10 competitive matches against another player online"],
        ["Draft Value", "Beat four players in the draft spending the least online"],
        ["Excellent Match Cohesion", "Reach excellent match cohesion in Dynamics"],
        ["Eyes and Ears", "Assign a scout to watch a particular match"],
        ["Fantastic Five", "5 of your players were selected in the Team Of The Year"],
        ["First Victory", "You guided your team to victory in a competitive fixture"],
        ["Freedom Of The Country", "You have won an international continental competition"],
        ["Full Faith", "You have gained 90% overall board confidence"],
        ["Goal Machine", "Your player was the top league goalscorer over an entire season"],
        ["Going Places", "Your board decide to build a new stadium"],
        ["Golden Boot", "Your player was the top scorer at a World Cup"],
        ["Hat-trick", "Your player scored a hat-trick in a competitive match"],
        ["He's a Natural", "Retrain a player to becoming natural into a new position"],
        ["He's Signed!", "You signed a player for your team"],
        ["He's Sold!", "You sold a player to another team"],
        ["Head-to-Head", "You have won a match against another person on a Network Game"],
        ["Headhunted", "You were offered a job by a larger team than you were managing"],
        ["I'm The Boss!", "You fined one of your clubs players"],
        ["Icon", "You have received 10 Manager Of The Year awards"],
        ["Immortality", "You have received 20 Manager Of The Year awards"],
        ["Immovable Object", "Your team hasn't conceded a goal in 30 consecutive competitive matches"],
        ["Impervious", "Win a competitive match with over 10 players out injured"],
        ["International Superstar", "One of your players was selected in the World Cup Best XI"],
        ["Invincible!", "Your team played the entire season without losing a league game"],
        ["Invitational", "You invited a friend to a Network Game"],
        ["Iron Curtain", "Your team conceded the least league goals over an entire season"],
        ["Irresistible Force", "Your team scored a goal in 30 consecutive competitive matches"],
        ["Knockout King", "Win 25 knockout cups online in Fantasy Draft"],
        ["Legend", "You have won the Manager Of The Year award 5 times"],
        ["Living the Dream", "You have played against an AI team in Fantasy Draft Mode"],
        ["Millionaire's Club", "Career earnings over 1 Million"],
        ["Money, Money, Money", "Career earnings over 10 Million"],
        ["Mr Delegator", "Delegate all staff responsibilities to another member of staff"],
        ["National Hero", "You have won promotion from the bottom to the top division in a nation"],
        ["National Service", "You were offered a job in senior international management"],
        ["On A Roll", "Your team hasn't lost in 20 matches"],
        ["On Top Of The World", "You have won the World Cup"],
        ["One more draft", "Continue a Fantasy Draft competition over into the next season"],
        ["Online Streak", "Win all matches in a Fantasy Draft tournament"],
        ["Outstanding Defence", "Your team didn't concede a goal in 20 consecutive competitive matches"],
        ["Overachiever!", "Your team was chosen as the league overachieving team"],
        ["Parked The Bus", "Your team didn't concede a goal in 5 consecutive competitive games"],
        ["Parked The Tank", "Your team didn't concede a goal in 10 consecutive competitive matches"],
        ["Part Of The Furniture", "You have stayed at one club for 10 seasons"],
        ["Perfect Host", "You hosted a Fantasy Draft game and remained unbeaten"],
        ["Record Sale", "You broke your club's record transfer fee received for a player"],
        ["Record Signing", "You broke your club's record transfer fee spent on a player"],
        ["Rushed signing", "Sign a player recommended by your scouting team from a short term focus assignment"],
        ["Scoring Streak", "Your team scored in 10 consecutive competitive matches"],
        ["Scout's Honour", "Attain extensive worldwide scouting knowledge"],
        ["Set Piece Specialist", "Save individual free kick routines for all 16 possible combinations."],
        ["Shoestring Budget", "Complete a Fantasy Draft competition on a shoestring budget"],
        ["Shrewd Spender", "You have gained 90% board confidence in controlling the club's wage bill"],
        ["Splashing The Cash", "You bought a player for £50 million or more"],
        ["Star Man", "One of your players was selected in the Team Of The Year"],
        ["Superb Dressing Room Atmosphere", "You have superb Dressing Room Atmosphere in Dynamics"],
        ["Superb Strike", "Your player collected a goal of the season award"],
        ["Team Performance", "Five of your players were named in a team of the week"],
        ["The Boss", "You won the Manager Of The Year award"],
        ["The Greatest", "You have become the greatest manager of all-time!"],
        ["The Rich Get Richer", "Career earnings over 100 Million"],
        ["There Is Always Plan B", "Using a pre-saved match plan during a match"],
        ["Thumping", "Your team won a competitive match by at least 5 goals"],
        ["Top Form", "Your team hasn't lost in 30 matches"],
        ["Top Of The Class", "You won a manager of the month award"],
        ["Total Support", "Your players have total Managerial Support for you in Dynamics"],
        ["Tremendous Trio", "3 of your players were selected in the Team Of The Year"],
        ["Trophy Hoarder", "You have won 20 cup competitions"],
        ["Unbeatable!", "Your team was unbeaten in 10 consecutive competitive matches"],
        ["Unstoppable Force", "Your team scored the most league goals over an entire season"],
        ["Value For Money", "Congratulations! You have played Football Manager for 30 seasons"],
        ["We Trust You", "You gained the trust of the board to select a feeder team"],
        ["What A Goal!", "Your player collected a goal of the month award"],
        ["Win the Club World Cup", "Win the Club World Cup"],
        ["Window Shopping", "You visited the in-game store"],
        ["World Renowned", "You have made it into the worldwide hall of fame"],
        ["You're On Fire", "You won 10 consecutive competitive matches"],
        ["You're Up!", "Guide your team to promotion in a domestic league"],
    ];

    assert.strictEqual(officialAchievements.length, 98, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
