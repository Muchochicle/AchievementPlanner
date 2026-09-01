import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hi-fi-rush.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1817230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hi-fi-rush");

test("getPlannerData('hi-fi-rush') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for hi-fi-rush");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every Hi-Fi Rush achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every Hi-Fi Rush achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 71 Hi-Fi Rush achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alright, that felt AWESOME!", "Defeated your first enemy with a Rhythm Parry Attack."],
        ["And the crowd goes wild!", "Finish the game and complete every level on the Very Hard difficulty."],
        ["Beat-hit mania", "Land 500 beat-hit attacks on enemies."],
        ["Call me Turbo Chai", "Finish a BPM RUSH run without dying, on Easy or Normal difficulty, across all 6 waves."],
        ["Check out my moves!", "Purchase every combo and partner attack."],
        ["Chip-tuned", "Increase your chip slots to the maximum capacity."],
        ["Choose your own adventure", "Complete all 25 floors of the Power Up! Tower Up! mode."],
        ["Cream of the Crop", "Defeat Rekka, the Head of Production, in Track 2."],
        ["Didn't skip a beat!", "Finish the game and complete every level on the Rhythm Master difficulty."],
        ["Does that say weakpoint?", "Destroy QA-1MIL's face, revealing its shame."],
        ["Easy Listening", "Finish the game completing every level on the Easy difficulty."],
        ["Feeling the beat!", "Land 20 beat-hit attacks on enemies."],
        ["First we parry, then we counter", "Perform 20 parry counters using any partner."],
        ["Fully Powered Up!", "Fully upgrade your Reverb Gauge to the maximum."],
        ["Have we met before?", "Find Vandelay HR's investigator and hear all of its monologues."],
        ["Headliner", "Defeat the Head of Marketing."],
        ["I am a good person who likes to help", "Help out 3 Vandelay robots with their pressing issues."],
        ["I can't see this ever being a problem again", "Solve the SPECTRA mystery once and for all in an epic battle."],
        ["I have to read ALL of these things?", "Find and read every Vandelay Vlog on the campus."],
        ["I have to read these things?", "Find and read half of the Vandelay Vlogs on the campus."],
        ["I hit things with a guitar really well.", "Finish a stage with a S rank for every Chorus. (Any difficulty.)"],
        ["I look cool. But I can look COOLER.", "Equip any costume."],
        ["I play my own way!", "Purchase and equip your first Special Attack."],
        ["I saw all those hits coming a measure away!", "Perfectly parry every non-boss enemy's Rhythm Parry attack. (Only for enemies in the main game.)"],
        ["I think I deserve some praise, here!", "Finish the game and complete every level on the Hard difficulty."],
        ["I think I found your calling, Macaron", "Shatter 50 enemy shields by calling in Macaron."],
        ["I think that's enough health for now", "Fully upgrade your health bar by collecting all Life Gauges."],
        ["I told you I'd be fine, Peppermint!", "Complete the ride through production on the transit rail without taking damage."],
        ["I'm not done with you yet", "Overkill 20 enemies."],
        ["I'm trying to FOCUS HERE!", "Find and shoot down every hovering announcement drone."],
        ["I'm untouchable!", "Finish a stage without taking any damage. (Any difficulty.)"],
        ["It was all for this", "Collect the gift basket in the secret room, unlocked after clearing 40 arcade challenges."],
        ["It'll do, CNMN", "Unlock the CNMANIAC special attack through arcade points, then use it in combat."],
        ["Kissing the sky!", "Perform 50 Aerial Raves."],
        ["Low budget finish", "Defeat the final boss while Chai and 808 are both wearing their Low Budget costumes."],
        ["My Ultimate Setlist", "Complete all the floors in the Rhythm Tower."],
        ["New bad guys? No problem!", "Execute perfect rhythm parries against both of the Arcade Update's new enemies, KEM-N0 and DM-ET1L."],
        ["Now this is how you fight like a team!", "Perform 100 parry counters using any partner."],
        ["NOW we got a kickass hideout!", "Interact with the arcade machine after completing the main story."],
        ["OK, I THINK I know what I'm doing now", "Successfully pull off every combo and attack in the Training Room."],
        ["OK, well THEY came after ME!", "Destroy 1000 Vandelay security robots."],
        ["Out in a puff of smoke", "Put out 10 fires in battle with Korsica."],
        ["Perfect Parry", "Sucessfully parry with perfect timing 15 times."],
        ["Perfecter Parry-er!", "Sucessfully parry with perfect timing 200 times."],
        ["Please don't make this awkward", "Obtain the My Hero! special attack via arcade points and deploy it in battle."],
        ["Problem solved... wait, what?", "Discover the deeper mystery behind the SPECTRA doors scattered across the campus."],
        ["Start with a bang!", "Defeat QA-1MIL, the last line of defense in Quality Assurance, in Track 1."],
        ["Thanks for the free chip, Peppermint!", "Purchase and equip your first upgrade chip."],
        ["That was just EVIL", "Clear a run of BPM RUSH in EX Mode (unlocked by earning an S rank on Easy or Normal)."],
        ["That's a lot of junk metal…", "Destroy 500 Vandelay security robots."],
        ["The Negotiator", "Defeat Korsica, the Head of Security."],
        ["There's such a thing as TOO helpful", "Find and engage with every Smidge, while completing all of his practice tips."],
        ["This is a breeze!", "Put out 50 fires in battle with Korsica."],
        ["This was... not what I expected.", "Have \"The Artist\" decorate your hideout."],
        ["This will cost you big time", "Remove the Head of Development's creative control by defeating them."],
        ["Time to pay up!", "Settle the bill with the Head of Finance by defeating them."],
        ["Uh, they were broken when I got here", "Destroy 200 Vandelay security robots."],
        ["Voices from within", "Read every developer message scattered throughout the secret room."],
        ["Wanna hear my playlist?", "Change the background music in the hideout."],
        ["We're Jammin'", "Successfully pull off 20 Jam Combos"],
        ["Well that was a rush!", "Finish the game and complete every level on the Normal difficulty."],
        ["What a journey it was...", "Complete the Wall of Fame in the hideout."],
        ["Who put gears in there?", "Destroyed your first golden statue of Kale."],
        ["Who's the boss now?", "Defeat the CEO, Kale Vandelay."],
        ["Whoa! There's ANOTHER health bar!?", "Increase your health to where you unlock a second tier."],
        ["With our powers combined…and to the rhythm…", "Perfectly time your take down of your largest foe yet in a musical finale."],
        ["You can pet the cat!", "Play with 808 in the hideout."],
        ["You ever parry a volcano?", "Successfully parry a volcanic rock outside of research and development."],
        ["You got this, Peppermint?", "Destroy 10 barriers by calling in Peppermint."],
        ["You must like calling me in, Chai", "Destroy 50 barriers by calling in Peppermint."],
        ["Z-shielding's got nothing on us!", "Shatter 10 enemy shields by calling in Macaron."],
    ];

    assert.strictEqual(officialAchievements.length, 71, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
