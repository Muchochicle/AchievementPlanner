import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bloons-td-6.json - 156 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 960090 (fetched through this app's own services/steamApi.js).
// 144 of 156 ship a real, official Steam description, quoted
// verbatim below. The 12 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bloons-td-6");

test("getPlannerData('bloons-td-6') returns real planner data with 156 curated achievements", () => {

    assert.ok(game, "expected real planner data for bloons-td-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 156);

});

test("every Bloons TD 6 achievement has a unique id from 1 to 156 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 156 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 156);
    assert.strictEqual(new Set(apinames).size, 156);

});

test("every Bloons TD 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 144 officially-described Bloons TD 6 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "64",
        "65",
        "83",
        "84",
        "92",
        "101",
        "102",
        "116",
        "133",
        "138",
        "154",
        "155",
    ]);

    assert.strictEqual(hiddenApinames.size, 12, "sanity check - Bloons TD 6 has 12 hidden achievements");

    const officialAchievements = [
        ["12 Tasks of Monk-ules", "Complete 12 different Odysseys"],
        ["2 MegaPops", "Complete a game of CHIMPS with more than 2 million damage dealt by one tower"],
        ["25 to Life", "Defeat 5 unique Bosses at Tier 5 (Can be in Boss Event or Challenge Mode)"],
        ["2TC", "Complete a game in CHIMPS Difficulty with only 2 towers"],
        ["A Crate Time", "Open a Diamond Crate in any Collection Event"],
        ["A La Code", "Submit a Challenge to the Challenge Browser"],
        ["A year in the making", "Open the Daily Chest 365 times"],
        ["Abracadabmonkey", "Win 10 games using only Magic monkeys"],
        ["Achievement of Achievements", "Collect 35 achievements"],
        ["Acolyte", "Win games on 5 different Intermediate maps"],
        ["Advanced Player", "Win 1 game on an Advanced map "],
        ["Adventurer", "Complete an Odyssey"],
        ["All About That Bling", "Purchase a Trophy Store item"],
        ["All for one and one for one", "Win a game with only 1 Monkey on screen at any one time in any Hard Difficulty game"],
        ["Apotheosis", "Upgrade to a Monkey Paragon Tower"],
        ["Axis of Havoc", "Have one of each T5 sniper in one game of CHIMPS"],
        ["BFB Brawler", "Destroy 10,000 BFBs"],
        ["Big Monkey", "Deploy a tier 4 monkey tower"],
        ["Big Spender", "Spend 1,000,000 cash in one round"],
        ["Bigger, Badder", "Use any Hero Level 10 Ability"],
        ["Bill Greates", "Send $500,000 to an ally in co-op in one go"],
        ["Bloon Master Populous", "Deal 1 billion damage with the Bloon Master Alchemist"],
        ["Bloons Master", "Beat 1 map in CHIMPS mode"],
        ["Bloontona 500", "Gain entry to 500 Races"],
        ["Bloonzilla!", "Win 25 games against Double HP MOABs"],
        ["Challenge Apprentice", "Win 10 Daily Challenges"],
        ["Challenge Master", "Win 100 Daily Challenges"],
        ["Challenger", "Win 1 Daily Challenge"],
        ["Co-op Popper", "Pop 10,000,000 Bloons in Co-op mode"],
        ["Co-operation", "Beat 1 map in Co-op mode"],
        ["Collaborate!", "Have 4 Heroes on screen at once"],
        ["Community Connoisseur", "Win 100 different community submissions (Challenges, Odysseys, Maps)"],
        ["Conquested Territory", "Capture 5 tiles off other players"],
        ["Coupon Crazy", "Spend at least 50 Trophies in the Trophy Store"],
        ["Crash of the Titans", "Strip the fortifications from Fortified DDTs 3000 times"],
        ["Davids vs Goliath", "Win a boss battle without using a Hero"],
        ["Decorated Hero", "Get 36 medals on Beginner maps"],
        ["Dr. Monkey", "Spend 106 Monkey Knowledge points"],
        ["Empowered", "Use Powers 100 times"],
        ["Epic Hero", "Level any Hero to level 20"],
        ["First Monkeys First", "Win 10 games using only Primary monkeys"],
        ["First Steps", "Complete the First Time Tutorial Quest"],
        ["First Win", "1 Non-Tutorial Beginner map Win"],
        ["Four times the fun", "Beat 1 map in 4-player Co-op mode"],
        ["Freaky Friday", "Use the Alchemist's Transforming Tonic abilities 100 times"],
        ["Full Speed Ahead!", "Complete an Odyssey in under 1 hour"],
        ["Generous Benefactor", "Give 50,000 Cash in Co-op mode"],
        ["Glittering Gold", "Pop 100 Golden Bloons"],
        ["Glorious Gold", "Pop 500 Golden Bloons"],
        ["Grasshopper", "Wins on 9 different Beginner maps"],
        ["Heavy Investment", "Invest at least $401,626 extra when creating any Paragon"],
        ["Hero Powers Activate", "Use any Hero Level 3 Ability"],
        ["Hero Time", "Deploy a Hero on a non-tutorial map"],
        ["Hook, Line, and Sinker", "Rope in 3,000 MOAB-Class Bloons using the MOAB takedown ability"],
        ["I see you", "Reveal 10,000 Bloons using Shimmer"],
        ["I'll Be Back", "Spend 1,000 MM on Continues or Checkpoints"],
        ["I'm the Boss", "Defeat a Tier 5 Elite Boss"],
        ["Impoppable", "Pop 100,000,000 bloons"],
        ["Indie", "Win 25 games with Alternate Bloon Rounds"],
        ["Inflated", "Beat round 100 in Deflation mode"],
        ["Infrared", "Pop 250,000 Camo bloons"],
        ["Insta Century", "Use 100 Insta Monkeys"],
        ["Insta-defense", "Use 5 Insta-Monkeys in Co-op mode"],
        ["Instant Gratification", "Use a Tier 5 Insta Monkey. NOTE: even after being used, Instas still count toward your collection!"],
        ["Invigoration", "Have 75 buffs active on your Monkeys at once"],
        ["Kali Maaaaaaaa", "Gain 10 levels for Adora in one round"],
        ["Kind Benefactor", "Give 10,000 Cash in Co-op mode"],
        ["Knowledgeable Primate", "Unlock all Monkey Knowledge in one branch"],
        ["Life Experience", "Earn 5,368,709 experience for any tower"],
        ["Like a Boss", "Pop 50 Boss Bloons"],
        ["Limited Run", "Purchase at least 1 new Limited Time item in the Trophy Store"],
        ["Living on the Edge", "Win any non-CHIMPS/Impoppable game with only 1 life remaining"],
        ["Lookin fab", "Win 100 games using a skin of any Hero"],
        ["Magical Gold", "Pop 50 Golden Bloons in Magic Monkeys only mode"],
        ["Master of Life", "Have 1000 lives at once in a single game"],
        ["Me Did A Job On DDT", "Destroy 5,000 DDTs"],
        ["Medal Winner", "Get all medals for a map"],
        ["Mega Monkey", "Deploy a tier 5 monkey tower"],
        ["Mid Season", "Earn 7,500 Stars in any Social Season"],
        ["MOAB Assassin", "Destroy 25,000 MOABs"],
        ["Modysseus Forever", "Complete 100 Odysseys"],
        ["Modysseus Rises", "Complete 50 Odysseys"],
        ["Monkey Avenger League", "Win a game for 4 different Heroes"],
        ["Monkey Contributor", "Give 100,000 Cash in Co-op mode"],
        ["Monkey Fan Club", "Create or Login to your Ninja Kiwi account to cloud save your progress"],
        ["Monkey Philanthropist", "Give 1,000,000 Cash in Co-op mode"],
        ["Moving House", "Redeploy 1,000 monkey towers using the Support Chinook"],
        ["Next Level", "Win 1 game on an Intermediate map "],
        ["No Harvest", "Beat Cornfield on CHIMPs without removing any corn"],
        ["No Stone Left Unturned", "Complete all 3 difficulties of a single Odyssey"],
        ["Oathbreakers", "Reanimate 250,000 bloons to fight on your side using the Necromancer Wizard"],
        ["Our Powers Combined", "Collect at least 12 different Powers"],
        ["Perfect Week", "Complete all Daily Challenges in a week"],
        ["Poppable", "Win 25 games on Impoppable Difficulty"],
        ["Power overwhelming!", "Use 100 Powers in Co-op mode"],
        ["Power User", "Use Powers 25 times"],
        ["Powershare", "Use 10 Powers in Co-op mode"],
        ["Rainbow is Magic", "Pop 20,000 Rainbow Bloons with Magic Monkeys"],
        ["Ready Player One?", "Host and win 10 Co-op games"],
        ["Red And Blue Makes...", "Pop 100,000 Purple bloons"],
        ["Regifted", "Pop 1,000,000 Bloons with Dartling Gunners"],
        ["Rising star", "Complete a Race in under 5 minutes"],
        ["Role Reverser", "Win a game in Reverse mode"],
        ["Rookie of the year", "Complete a Race in under 10 minutes"],
        ["Sapper", "Pop 5,000,000 Fortified bloons"],
        ["Scholar", "Apply 10 Monkey Knowledge points"],
        ["Season Champion", "Earn a perfect 15,000 Stars in any Social Season"],
        ["Season Starts", "Achieve Tier 1 in any Stage in a Social Season"],
        ["Seasoned Adventurer", "Complete a Hard Odyssey"],
        ["Side Quest", "Complete a Quest"],
        ["Snap of your fingers", "Finish a game with exactly half your starting lives and half your starting cash"],
        ["So Shiny!", "Pop 20 Golden Bloons"],
        ["So Spiiicey Ninja Kiwi", "Beat Spice Islands on Alternate Bloon Rounds with only land towers"],
        ["Social Butterfly", "Use emotes 100 times in co-op games"],
        ["Stage of Empires", "Capture 50 tiles"],
        ["Sticky Situation", "Glue 500,000 Bloons"],
        ["Student", "Apply your first Monkey Knowledge point"],
        ["Student Loans", "4 x 10^5 (Go into $400,000 of debt)"],
        ["Super BAD", "Destroy 1,000 BADs"],
        ["Superior Bloons Master", "Beat 5 maps in CHIMPS mode"],
        ["Survivor", "Beat round 100 in Apopalypse mode"],
        ["Team Captain", "Win 50 times with Monkey Teams"],
        ["Team Player", "Win 25 times with Monkey Teams"],
        ["Territory Sampler", "Capture 1 of each: Boss, Time Attack, Least Tiers and Least Cash tiles"],
        ["Tetrimino", "Place 50 Monkeys on a map at once"],
        ["The Daily Reid", "Win 365 unique daily challenges"],
        ["The greatest challenge", "Create or Play 200 Challenges"],
        ["Therpopylae", "Pop 200,000 Bloons on Peninsula"],
        ["Thrifty", "Win 10 games in Half Cash mode"],
        ["Tools to Darwin", "Upgrade towers 20,000 times"],
        ["Top of your game", "Complete any Race in under 3 minutes"],
        ["Tower Keeper", "Have 200 insta-monkeys in your inventory at one time"],
        ["Triple threat", "Beat 1 map in 3-player Co-op mode"],
        ["Ultimate Bloons Master", "Beat 15 maps in CHIMPS mode"],
        ["Ultimate Team-up", "Win 100 times with Monkey Teams"],
        ["Unsung Monkeys", "Win 10 games using only Support monkeys"],
        ["War Monkeys", "Win 10 games using only Military monkeys"],
        ["What did it cost? - Everything:", "Sacrifice every tower type in the game to the Temple"],
        ["What is this new Bloonery?", "Defeat a Tier 1 Boss"],
        ["When the going gets tough...", "Win 10 games on Hard difficulty in Co-op mode"],
        ["Who's the Boss?", "Defeat a Tier 5 Boss"],
        ["World League Training", "Acquire 150,000 Beast Handler XP"],
        ["You've Got The Power", "Use Powers for the first time"],
        ["ZOMGinator", "Destroy 5,000 ZOMGs"],
    ];

    assert.strictEqual(officialAchievements.length, 144, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 hidden Bloons TD 6 achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["64", "Big Bloons"],
        ["65", "Alchermistman and Bloonacleboy"],
        ["83", "Strangely Adorable"],
        ["84", "Josh's Constant"],
        ["92", "Golden Ticket"],
        ["101", "Mo Heroes, Mo Problems"],
        ["102", "Chunky Monkeys"],
        ["116", "Stubborn Strategy"],
        ["133", "Perfect Paragon"],
        ["138", "Not Lacking Critical Information"],
        ["154", "Nah, I'd Win"],
        ["155", "They call me Cave Monkey!"],
    ];

    assert.strictEqual(names.length, 12, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
