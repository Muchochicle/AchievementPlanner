import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/football-manager-2023.json - 100 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1904540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("football-manager-2023");

test("getPlannerData('football-manager-2023') returns real planner data with 100 curated achievements", () => {

    assert.ok(game, "expected real planner data for football-manager-2023");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 100);

});

test("every Football Manager 2023 achievement has a unique id from 1 to 100 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 100 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 100);
    assert.strictEqual(new Set(apinames).size, 100);

});

test("every Football Manager 2023 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 100 Football Manager 2023 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"I Would Love It If We Beat Them\"", "You beat a rival team"],
        ["#DoneDeal", "You signed your first player"],
        ["200 Club", "You gained 200 Match Points in Fantasy Draft"],
        ["A Game of Two Halves", "You won a competitive match after being two or more goals down at half-time"],
        ["Beat your Mates", "You won your Fantasy Draft competition against your friends"],
        ["Beating Expectations", "You gained 90% board confidence in overall competition performance"],
        ["Best In The Business", "You have won the Manager of the Month award 10 times"],
        ["Best In The World", "Your player won the World Player Of The Year award"],
        ["Bragging Rights", "You beat another Network player in a league match"],
        ["Cash To Burn", "You sold a player for £50 million or more"],
        ["Clean Sheet", "You played a competitive match without conceding a goal"],
        ["Clean Sheet Network", "You achieved your first clean sheet in a network save"],
        ["Clean Sheet Versus", "You achieved your first clean sheet in Versus Mode"],
        ["Cup Glory!", "You won a top domestic cup"],
        ["Cupset Between Friends", "You knocked another Network player out of a cup"],
        ["Do The Double", "You won a nation's top league and cup competition in the same season"],
        ["Domination", "You won three consecutive top division league titles"],
        ["Draft Dominator", "You won 25 Fantasy Draft matches online"],
        ["Draft Value", "You beat four players in the draft while spending the least online"],
        ["Drilling Down", "You requested a visualisation graph from your data analyst"],
        ["First Goal Network", "Your team scored their first goal in a competitive match in a network save"],
        ["First Goal Versus", "Your team scored your first Versus Mode goal"],
        ["First Victory", "You guided your team to victory in a competitive fixture"],
        ["First Win Network", "You won your first competitive match in a network save"],
        ["First Win Versus", "You won your first match in Versus Mode"],
        ["Flavour Of The Month", "You won a Manager of the Month award"],
        ["Freedom Of The Country", "You won a major continental international tournament"],
        ["Full Faith", "You gained 90% overall board confidence"],
        ["Goal Machine", "Your player was the top league goalscorer over an entire season"],
        ["Goal Rush", "Your team scored in 20 consecutive competitive matches"],
        ["GOAT", "You unlocked all achievements"],
        ["Hat-trick", "Your player scored a hat-trick in a competitive match"],
        ["Immortality", "You won 20 Manager of the Year awards"],
        ["Immovable Object", "Your team conceded the fewest league goals over an entire season"],
        ["Import To Victory", "You won a match with your imported career team"],
        ["Invincible!", "Your team played the entire season without losing a league game"],
        ["Invitational", "You invited a friend to play a Network Game"],
        ["Irresistible Force", "Your team scored in 30 consecutive competitive matches"],
        ["Legend", "You won five Manager of the Year awards"],
        ["Mini League Champion", "You finished above another Network player in the league"],
        ["Money, Money, Money", "You earned more than £10m in your career as a manager"],
        ["Motivational Speaker", "Your team talk had a positive effect on the team "],
        ["National Hero", "You won promotion from the bottom to the top division in a nation"],
        ["National Service", "You were offered a job in senior international management"],
        ["New Kids On The Block", "You won a Versus Mode match only using newgens from your imported team"],
        ["Off the Books", "You sold a player"],
        ["On A Roll", "Your team went undefeated for 20 matches"],
        ["On Top Of The World", "You won the World Cup"],
        ["One Of Our Own", "You gave a player under the age of 23 their league debut"],
        ["One of Us, One of Us!", "You hired a new member of staff"],
        ["Online Rivalry", "You played 10 Head to Head competitions"],
        ["Online Streak", "You won all matches in a Fantasy Draft tournament"],
        ["Outstanding Defence", "Your team went 20 consecutive competitive matches without conceding a goal"],
        ["Parked The Bus", "Your team went five consecutive matches without conceding a goal"],
        ["Parked The Tank", "Your team went 10 consecutive competitive matches without conceding a goal"],
        ["Part Of The Furniture", "You stayed at one club for 10 seasons"],
        ["People Pleaser", "You have a happy squad"],
        ["Perfect Host", "You hosted a fantasy draft game and remained unbeaten"],
        ["Planned Signing", "You signed a player who was scouted from your recruitment focus"],
        ["Record Sale", "You broke your club's record transfer fee received for a player"],
        ["Record Signing", "You broke your club's record transfer fee spent on a player"],
        ["Red Hot Newgen", "A newgen you imported into Versus Mode finished top scorer in a tournament"],
        ["Scoring Streak", "Your team scored in 10 consecutive competitive matches"],
        ["Second Hand Signing", "You signed a player who previously played for another Network player"],
        ["Shots For Days", "You accumulated more than 5 xG in a match"],
        ["Splashing The Cash", "You bought a player for £50 million or more"],
        ["Squad Goals", "You attained a high level of team cohesion"],
        ["Star Player", "You had a player selected in the Team Of The Year"],
        ["Super-Sub", "Your player scored after being brought on"],
        ["Superb Strike", "Your player won the goal of the season award"],
        ["Team Performance", "You had five players named in Team of the Week"],
        ["Tête-à-tête", "Your team won a Head to Head competition"],
        ["The Greatest", "You became the greatest manager of all-time!"],
        ["The Only Stat That Matters", "You won a game with at least a total of one xG lower than your opponent"],
        ["The People's Champion", "You gained high supporter confidence"],
        ["The Player Whisperer", "You received a positive reaction from a team meeting"],
        ["The Rich Get Richer", "You earned more than £100m in your career as a manager"],
        ["The Special One", "You won the Manager Of The Year award"],
        ["The Unstoppables", "You won five consecutive Versus Mode matches"],
        ["They're a Natural", "You retrained a player to be a natural in a new position"],
        ["Thumping", "Your team won a competitive match by at least five goals"],
        ["Top Form", "Your team went 30 matches unbeaten"],
        ["Total Support", "You have superb support from your players"],
        ["Tremendous Trio", "You had three players selected in the Team Of The Year"],
        ["Trophy Hoarder", "You won 20 cup competitions"],
        ["Unbeatable!", "Your team went 10 competitive matches unbeaten"],
        ["Unstoppable Force", "Your team scored the most league goals over an entire season"],
        ["Value For Money", "Congratulations! You played Football Manager for 30 seasons"],
        ["Versus Anyone", "You won a match in Versus Mode using only the quick start setting"],
        ["Versus Champ", "You won a tournament in Versus Mode"],
        ["We Go Again", "You won five consecutive matches against your friends in a network save"],
        ["What A Goal!", "Your player won a goal of the month award"],
        ["Wheeler Dealer", "You successfully negotiated a higher fee for a player"],
        ["Window Shopping", "You visited the in-game store"],
        ["World Beaters", "You won the Club World Cup"],
        ["World Renowned", "You made it into the worldwide hall of fame"],
        ["You Can Buy Happiness", "You made a transfer the supporters are extremely happy with"],
        ["You Shall Not Pass", "Your team hasn't conceded a goal in 30 consecutive competitive matches"],
        ["You're On Fire", "You won 10 consecutive competitive matches"],
        ["You're Up!", "You guided your team to promotion in a domestic league"],
    ];

    assert.strictEqual(officialAchievements.length, 100, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
