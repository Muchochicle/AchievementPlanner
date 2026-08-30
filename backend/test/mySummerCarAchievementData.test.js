import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/my-summer-car.json - 77 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 516750 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("my-summer-car");

test("getPlannerData('my-summer-car') returns real planner data with 77 curated achievements", () => {

    assert.ok(game, "expected real planner data for my-summer-car");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 77);

});

test("every My Summer Car achievement has a unique id from 1 to 77 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 77 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 77);
    assert.strictEqual(new Set(apinames).size, 77);

});

test("every My Summer Car achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 77 My Summer Car achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 km", "100 km driven with Satsuma."],
        ["1000 km", "1000 km driven with Satsuma."],
        ["1000 Strawberries!", "Time well spent, huh?"],
        ["10000 km ", "10000 km driven with Satsuma."],
        ["A cure for illness", "You helped Mr. Rapula to get through the day."],
        ["A true hillbilly", "Shopping groceries with style!"],
        ["Aiming like a pro", "Maybe find a woman next time."],
        ["An idiot", "An idiot is definition of you."],
        ["And it is gone!", "Say goodbye to your saves."],
        ["Bad Guy", "You've done your time."],
        ["Can't stop smoking now...", "You are so deeply addicted to smoking that it is just better keep on going."],
        ["Case solved", "24 bottles of beer consumed!"],
        ["Catch-A-Fish", "You caught the rarest fish in the pond."],
        ["Dakar rally", "You just keep on going."],
        ["Darwin Award", "Get a police breath analyzer test score of 3.5 per mil or more."],
        ["Don't answer that call", "Thunder called you and you got killed."],
        ["Engine started!", "You beat the menu. And that's it. "],
        ["Feel alive", "Travelling over 90 km/h as a passenger of a drunk driver."],
        ["Finnish sisu!", "Finish rally with major suspension damage."],
        ["Finnish Summer", "This is it. This is everything you ever need."],
        ["Finnish wedding", "Your traditional wedding condition."],
        ["First loser", "Coming second is just a first loser."],
        ["Flying Finn", "Top breed of racing drivers."],
        ["Full of crap", "10 000 litres worth of crap. Good job!"],
        ["Full stash", "Successful crawl from the ditch to the store and back 14 times."],
        ["Gauntlet survivor", "Survived the Gauntlet for 20 days."],
        ["Golden steam", "Enjoy the smell."],
        ["Grand Theft Teimo", "You little punk!"],
        ["Granny's little helper", "You are such a good boy!"],
        ["Greased rust", "Drag Race time under 17 secs with Satsuma."],
        ["Grill master", "Serve at least 20 dish."],
        ["Hannes Kolehmainen", "Suvi-Sprint rally done on foot."],
        ["Heaven", "Got drunk enough and found the key."],
        ["I am coward", "No permanent death for you."],
        ["I am Santa Claus", "Beat all 4 levels of Joulupukin Joulustressi."],
        ["It runs!", "Your car actually started, good job!"],
        ["Jackpot!", "Maybe you should do Lotto too?"],
        ["Jonne!", "You are real Finnish Jonne."],
        ["Kahen kilon siika!", "Common whitefish worth of 2 kilograms."],
        ["Kela-Taxi", "You served elderly person with style."],
        ["Kiddy champ", "You won in a junior class!"],
        ["King of Tuning", "You just purchased everything from the Tuning shop!"],
        ["Lottery winner", "You won in a lottery. Rare treat for sure!"],
        ["Magic portal", "Somehow you don't remember anything."],
        ["Methanol Man", "You gained a new super power: Blindness!"],
        ["Money well spent", "Better luck next time."],
        ["Mr. Kilju", "Good batch of commercial deer piss."],
        ["My finger slipped", "Achieve a time of 0.12 or under."],
        ["Party time", "Bottle of booze drank quickly."],
        ["Philosophy Master", "Sometimes being a banker is enough."],
        ["Pimped!", "That really does it."],
        ["Poor people go away", "A real money man."],
        ["Proud to be mortal", "When I die, I die for good"],
        ["PTSD", "Survived the Massacre with your pal Agent Orange."],
        ["Reetipokeri Master", "Too bad this is not Las Vegas."],
        ["Responsible citizen", "You got your car through inspection."],
        ["Rusting fast", "Over 200km/h with Satsuma!"],
        ["Satsuma GT", "You just restored the Satsuma into optional GT trim."],
        ["Seek and you shall find", "Found the Truth in Man of the World - World's Man."],
        ["Sliding Swede", "Coming after Flying Finns!"],
        ["Smoking kills", "Do not smoke. At least while refueling..."],
        ["Thank you for playing!", "Seems like it is over now. "],
        ["Thank you government", "Crime is for poor people only."],
        ["Too much power, too little skill", "Jerk in daddy's car."],
        ["Total idiot & full idiot", "Flipping off to a drunk driver."],
        ["True Peräjärvi Dalton!", "Robbing a slot machine with style. "],
        ["Ultimate survivor", "Drinking your own piss like a pro."],
        ["Waving for victory", "They failed to stop Johnny."],
        ["Welcome to Finland", "You just experienced a Sauna."],
        ["What a shock!", "Too long walk to the toilet perhaps?"],
        ["Working man's Saturday", "Time to relax."],
        ["Wow, look at that Chopin there", "Played the first 13 notes of Ukko Nooa starting from C."],
        ["Yeast festival", "Enjoy your home brew... delicious."],
        ["You are the wall", "You defeated the ultimate Pasi and ended the invasion."],
        ["You have a computer!", "Now play some games."],
        ["You have a new friend!", "He is drunk, so he must be a friend."],
        ["You reached 100 kg", "Less than 100 kg person is weighed at maternity clinic."],
    ];

    assert.strictEqual(officialAchievements.length, 77, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
