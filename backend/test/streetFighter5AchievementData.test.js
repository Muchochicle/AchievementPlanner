import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/street-fighter-5.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 310950 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("street-fighter-5");

test("getPlannerData('street-fighter-5') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for street-fighter-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Street Fighter V achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Street Fighter V achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Street Fighter V achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fiendish Trap", "Impossible! You fought in 300 network battles? Well then, the time for you to witness my Psycho Power draws near. Mwahaha! (Excludes Battle Lounge)"],
        ["A True Warrior's Spirit", "A warrior's soul is ri...ripened in Survival Mode. Emerge victorious on hard difficulty and you'll be ready for me to co...consume."],
        ["Addicted To Winning", "It seems you've won 10 Ranked Matches. Never forget how it feels to win, or your future will soon be eclipsed by defeat."],
        ["All Going To Plan!", "Master Zangief! I fought in 50 network battles! The ring came to life with the clash of burning spirits! (Excludes Battle Lounge)"],
        ["All In A Name", "You'll never stand out without an original title. Try choosing an appropriate title for me."],
        ["Always Someone Stronger", "Why not try fighting someone stronger than you in a Ranked Match? There's a lot you can gain from fighting stronger opponents. Beat 10 of 'em and you'll understand."],
        ["Back From Hell", "Feel like taking the plunge into Survival Mode on extreme? Come back alive, and I'll grant you an audience with none other than me, the great Lord Bison!"],
        ["Bam, Bam, Win!", "Winning 300 matches will put the word out for Matsuda Jiu-Jitsu! It'll be like, \"the succesor or Matsuda Jiu-Jitsu, Laura Matsuda is right here!\""],
        ["Bodybuilding Is Life", "Go try out Training Mode for 30 minutes! \"Bodybuilding never let man down.\" I borrowed that one from Master Zangief!"],
        ["Burning Spirit", "Your player level is a reflection of your passion! Aim for the stars, and reach level 100!"],
        ["Ceaseless Effort", "Ah, your 100th Ranked Match victory. That look in your eyes tells me it was a fulfilling battle. Go forward one step at a time, and never forget this feeling."],
        ["Critical Beauty", "300 Critical Art finishes... It would seem a crimson rose that blooms within an ugly heart can still be beautiful..."],
        ["Enlightenment", "There is a power that resides deep within you. If you wish to know what that power is, trigger a V-Skill 100 times. Do so, and that power will belong to you."],
        ["Failing To Prepare Is Preparing To Fail", "Collect 30 replays, kid. Once you've done your prep and know your opponent's weaknesses, you'll be in control of the fight. Don't risk your life by rushing in blind."],
        ["Fighting On The Internet", "Alright, time you fought 10 network battles! The Internet is like my backyard - not a place I tend to lose! (Excludes Battle Lounge)"],
        ["First Promotion!", "Master Zangief sent me flowers to celebrate me moving up a league for the first time! I can't read the card with all these tears!"],
        ["Global Network", "I have the direct lines for all the world's leaders recorded in my pocketbook. You should have 30 names in your Favorites at the very least."],
        ["Go Out With A Bang", "\"Finishing with an EX Special Move sure feels good, old man!\" \"You finally understand then, young one? How about you try doing it 300 times?\" \"Wha?! You know how many years that'll take?!\""],
        ["I Know Kung Fu!", "Congratulations on your first win! Keep practicing your Kung Fu in those Ranked Matches and I know you'll only get better and better!"],
        ["Let's fight someone strong!", "Finally, Golden League! There are so many potential rivals! Now the fun really begins!"],
        ["Lucky We Met!", "Whoa, I'm really mixing it with the celebrities here! C'mon, Rashid, you're the Raging Storm! Get out there and finish 5 Character Stories!"],
        ["Make A Name For Yourself", "Why don't you see if you can collect 10 titles? There's nothin' like a good title! Even Mel said they make me look cool!"],
        ["Mastering The Basics", "Why don't you try finishing up the tutorial? You might've mastered the first step, but nailing down the fundamentals is what's important."],
        ["Muscles Bring Victory!", "Did you make it to Silver League?! Horosho! You have very good muscle! You can get much stronger from now!"],
        ["No Rest For The Wicked", "Your stats are as pitiful as your strength, maggot! Come back when you've raised all characters to level 5."],
        ["Not Over 'Til It's Over", "When you get that feeling like \"I can't let it end like this!\", that's when you should use a V-Reversal. Practice it 100 times, and then you'll be able to pull it off in your sleep!"],
        ["Not-So-Secret Admirer", "When someone sets their sights on you, don't you just wanna try even harder? Add someone to your Favorites and see what happens!"],
        ["Number 2 Is The New Number 1", "Niiihehe! 2, 20, 200! Such a glorious sound, I could say it twice more! 200! Raise you player level to 200! I already have, niiihehe!"],
        ["One Step Forward", "If you're at a loss for what to do, why not raise a character to level 5? It should help you realize what you're missing."],
        ["Playing Favorites", "You must set a character as your favorite! Can't decide who to choose? Niiihehehe! Well, you can't go wrong with Lord Bison!"],
        ["Priceless", "You managed to get 1,000,000 FM. That's pretty good! The real value, however, is in the path you walked to earn that much."],
        ["Quantity Over Quality", "Level up 5 characters! Up to level 5 should do the trick. When it comes to food and fightin', it's quantity over quality, mate."],
        ["Savoring The Win Streak", "Achieved three consecutive victories in Ranked Matches, have you? It appears you are getting a handle on your power. Maintain your modesty, and focus on your training; the path ahead is long."],
        ["See You In My Dreams!", "Visualization is a crucial skill, so try watching 50 replays! I watched so many, I started seeing Master Zangief in my dreams!"],
        ["Slow But Steady Wins The Race", "Your objective should be to raise a single character to level 30. There is great meaning in accomplishing what is difficult. To find your answer, you must set your sights high."],
        ["Sudden Reversal", "You know, the V-Trigger is pretty handy for shifting the flow of battle. You'll know just how effective it is once you've triggered it 100 times."],
        ["Sultan Of Titles", "I am Rashid of the Turbulent Wind! You can change how you feel, just with a title! If you had 30 of them, you'd be set for the rest of your life!"],
        ["The 16 Trials", "So you wish to learn Yoga? If that is truly the case, then first you must complete the Character Story with all characters. There is great merit in walking each of their individual paths."],
        ["The Never-Ending Path", "\"Sweet! You got all the achievements! You're really somethin'. Isn't that right, Ryu?\" \"You have done well to reach the end of this one journey. The path to becoming a true fighter still lies ahead, but let us take time to share the joy of your accomplishment.\""],
        ["The outfit is the highlight of battle", "The true creme de la creme know how to give spectators a good show. Now go and gain new colors for your outfit."],
        ["Vindicated Honor", "Raise your player level to 50. Level up that much and you'll be about ready to exact you revenge."],
        ["Waiting Is Half The Fun", "Patience is key to any warrior's training. Fight in network battles 30 times using the standby function. The longer you wait, the greater the joy will be when you finally get picked."],
        ["Win Or Die Tryin'", "It's about time you cleared Survival Mode on normal difficulty. You know what happens if you refuse, don't you? Let's just say the only way you live is if you keep on winning!"],
        ["Working Up An Appetite!", "30 Ranked Matches already? Lemme go catch up to that! Dinner always tastes better after you've pummeled a bunch of chumps!"],
        ["Your Story Starts Here", "Your first goal for Story Mode is just to clear it once. You can probably guess, but I cleared it with Master Zangief first!"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
