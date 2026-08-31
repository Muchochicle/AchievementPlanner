import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-6.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 221040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-6");

test("getPlannerData('resident-evil-6') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Resident Evil 6 achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Resident Evil 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Resident Evil 6 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Revolting Development", "Complete Chapter 2 in Jake's campaign."],
        ["Ada's Demise", "Complete Chapter 4 in Ada's campaign."],
        ["After Her!", "Complete Chapter 3 in Chris' campaign."],
        ["B.O.W.s Are Ugly", "Defeat 100 enemies that have come out of a chrysalid."],
        ["Back in My Day", "Complete the entire game on Veteran."],
        ["Big Trouble in China", "Complete Chapter 4 in Leon's campaign."],
        ["Bob and Weave", "Counter an enemy's attack three times in row."],
        ["Bring the Heat", "Take down an enemy from 50 meters away with a headshot using the thermal scope."],
        ["Buried Secrets", "Complete Chapter 2 in Leon's campaign."],
        ["Check Out My Dogs", "Customize your dog tags."],
        ["Civilian Casualties", "Defeat the BSAA 100 times."],
        ["Counterintelligence", "Complete Chapter 2 in Ada's campaign."],
        ["Covered in Brass", "Earn 150 different medals."],
        ["Down, Not Out", "Defeat an enemy while dying, then recover without any help."],
        ["Duty Calls", "Complete Chapter 5 in Chris' campaign."],
        ["Easy Pickings", "Eliminate all players as Ustanak in less than a minute."],
        ["Everybody Dies", "Defeat 100 player-controlled agents and 100 player-controlled creatures."],
        ["Finish What You Start", "Perform a coup de grâce on ten enemies."],
        ["Flying Ace", "Pilot the VTOL without getting a scratch on it."],
        ["Get on the Plane", "Complete Chapter 3 in Leon's campaign."],
        ["Give a Little Push", "Knock ten enemies off a high place."],
        ["Gone to Hell", "Complete Chapter 1 in Leon's campaign."],
        ["Green around the Ears", "Complete the entire game on Amateur."],
        ["Hard Choice", "Shoot the helicopter pilot with a Magnum at point-blank range."],
        ["Heirlooms", "Collect all the serpent emblems."],
        ["Held Captive", "Defeat Ustanak with only one Agent remaining."],
        ["High Voltage", "Defeat ten enemies with a stun rod charge attack."],
        ["I Prefer Them Alive", "Rescue two female survivors at the cathedral."],
        ["I Spy", "Complete Chapter 1 in Ada's campaign."],
        ["Invincible", "Defeat Ustanak without anyone on your team being captured."],
        ["J'avo Genocide", "Defeat 500 J'avo."],
        ["Kill or Be Killed", "Win while in the dying state."],
        ["Killer Combo", "Achieve a 30-combo chain."],
        ["Kung Fu Fighting", "Survive to the end only using physical attacks."],
        ["Last Man Standing--Again", "Win five times in a row."],
        ["Leave It to the Pro", "Complete the entire game on Professional."],
        ["Let's Blow This Joint", "Complete Chapter 3 in Jake's campaign."],
        ["Lifesaver", "Help or rescue your partner ten times."],
        ["Mad Skillz", "Max out all the skills that allow you to level up."],
        ["Money Talks", "Complete Chapter 1 in Jake's campaign."],
        ["Murder Spree", "Defeat the BSAA as a creature without dying once."],
        ["Normal Is Good", "Complete the entire game on Normal."],
        ["Not without a Fight", "Defeat Ustanak 20 times."],
        ["One Is Better Than None", "Purchase one skill."],
        ["One Is Never Enough", "As Ustanak, capture a total of 50 humans."],
        ["Protect and Serve", "Protect the BSAA without any of them getting hurt."],
        ["Rescue the Hostages", "Complete Chapter 1 in Chris' campaign."],
        ["Rising Up", "Earn a level-four title."],
        ["See You Around", "Complete Chapter 5 in Jake's campaign."],
        ["Silent Killer", "Use a stealth attack to take down five enemies."],
        ["Sneaking Around", "Get through the aircraft carrier's bridge area without being noticed."],
        ["Staying Alive", "Return to the game as a human character."],
        ["Still on the Run", "Complete Chapter 4 in Jake's campaign."],
        ["Stuntman", "Defeat 20 enemies with the Hydra using a quick shot."],
        ["Surrounded on All Sides", "Send 2,000 enemies to your opponent's map."],
        ["Take 'Em All Down", "Defeat 100 agents."],
        ["Take the Stage", "Defeat your opponent and achieve victory in 3 stages."],
        ["Team Effort", "Win without any members of your team being killed."],
        ["The Longest Night", "Complete the tutorial."],
        ["The Trouble with Women", "Complete Chapter 5 in Leon's campaign."],
        ["There's Always Hope", "Complete Chapter 4 in Chris' campaign."],
        ["They're ACTION Figures!", "Collect 3 figures."],
        ["This Takes Me Back", "Complete Chapter 3 in Ada's campaign."],
        ["Titular Achievement", "Earn 10 different titles."],
        ["Tragedy in Europe", "Complete Chapter 2 in Chris' campaign."],
        ["Two Sides of the Same Coin", "Win 10 times."],
        ["Weapons Master", "Use all the weapons in the game and kill ten enemies with each of them."],
        ["What's Next?", "Complete Chapter 5 in Ada's campaign."],
        ["You Are S.O.L.", "Defeat your opponent 10 times with enemies you sent."],
        ["Zombie Massacre", "Defeat 500 zombies."],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
