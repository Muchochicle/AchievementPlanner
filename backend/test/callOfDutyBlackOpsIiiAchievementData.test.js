import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/call-of-duty-black-ops-iii.json - 98 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 311210 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("call-of-duty-black-ops-iii");

test("getPlannerData('call-of-duty-black-ops-iii') returns real planner data with 98 curated achievements", () => {

    assert.ok(game, "expected real planner data for call-of-duty-black-ops-iii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 98);

});

test("every Call of Duty: Black Ops III achievement has a unique id from 1 to 98 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 98 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 98);
    assert.strictEqual(new Set(apinames).size, 98);

});

test("every Call of Duty: Black Ops III achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 98 Call of Duty: Black Ops III achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["200 Stories of Sheer Adventure!", "Complete Lotus Towers on Hardened, Veteran, or Realistic."],
        ["A Better Tomorrow", "Complete the Easter eggs on Der Eisendrache, Zetsubou No Shima, Gorod Krovi and Revelations, lighting all five Gateworm icons ('A Better Tomorrow')."],
        ["A Second Chance", "Complete New World on Hardened, Veteran, or Realistic."],
        ["Acted Alone", "In Verrückt, headshot 20 zombies in the courtyard from the second floor of the Asylum."],
        ["Another Side of the Story", "Complete the Campaign on any difficulty."],
        ["Assault With Battery", "In Zetsubou No Shima, electrocute a zombie with a shield. "],
        ["Battle Tested", "Reach Commander (Level 55) in Multiplayer while playing online."],
        ["Beat CoP", "In Shadows of Evil, summon the Civil Protector in every district in a single game."],
        ["Belly of the Beast", "Complete Provocation on Hardened, Veteran, or Realistic."],
        ["Biff! Bap! KaPow!", "Kill three enemies in a melee combo."],
        ["Blood for Blood", "Complete Vengeance on Hardened, Veteran, or Realistic."],
        ["Blown Away", "In Gorod Krovi, kill 10 zombies at once with the Guard of Fafnir."],
        ["Can't Hide", "Can't Hide\tIn Campaign, kill an enemy through a wall or obstruction.  "],
        ["Chimp on the Barbie", "In Ascension, kill a space monkey with a fire trap."],
        ["Controlled Chaos", "In Revelations, override all of the Corruption Engines before round 6."],
        ["Crackshot", "In Campaign, kill 5 enemies from over 100m away. "],
        ["Crop Duster", "In Zetsubou No Shima, kill 10 zombies with a single shot of the KT-4."],
        ["Cryogenic Slumber Party", "In Moon, complete Richtofen's Grand Scheme."],
        ["Curator", "Discover all of the collectibles in the Campaign."],
        ["Deadly Specialist", "Get a Specialist-based medal that requires 3 or more rapid kills while using any Specialist Weapon. "],
        ["Death From Above", "In Der Eisendrache, kill a zombie while being flung by a Wundersphere."],
        ["Death Ray", "In Revelations, kill 40 enemies with a single activation of a Corruption Turret."],
        ["Decimator", "In Campaign, kill 10 enemies in under 3 seconds. "],
        ["Der Meisterbogenschuetze", "In Der Eisendrache, obtain all of the ancient bows."],
        ["Disavowed", "Complete Black Ops on Hardened, Veteran, or Realistic."],
        ["Doing Camo Right", "In Campaign, unlock all camos for any weapon. "],
        ["Fire Mission", "In Gorod Krovi, kill 8 zombies with a single Dragon Strike."],
        ["Fling Me to the Moon", "In Der Eisendrache, use every Wundersphere twice."],
        ["Fly, Swim, Shoot", "Complete Sand Castle on Hardened, Veteran, or Realistic."],
        ["Foe To Friend", "Use an enemy combat robot to kill 10 enemies."],
        ["For real this time", "Earn a Gold Rating in the training simulator."],
        ["For The Good Of All", "Complete the main Easter-egg quest on Revelations ('For The Good Of All')."],
        ["Friends and Foes", "Complete Rise and Fall on Hardened, Veteran, or Realistic."],
        ["From the Shadows", "In Shadows of Evil, spot the Shadowman fives times in one game."],
        ["Full Circle", "Complete Campaign on Hardened, Veteran, or Realistic."],
        ["Ground Control", "In Moon, prevent each excavator from breaching the base in one game."],
        ["Gun Game", "In Campaign, kill 5 enemies with 5 different guns in under 30 seconds. "],
        ["Herbal Remedy", "In Zetsubou No Shima, use a plant to return to life."],
        ["High Tide", "Complete In Darkness on Hardened, Veteran, or Realistic."],
        ["Hold Still!", "Kill 6 enemies affected by one Blinding Swarm or Firefly Swarm."],
        ["I said we’re CLOSED!", "In Nacht Der Untoten, do not let any zombies enter the building during the first 3 rounds."],
        ["I’ve seen some things…", "In Kino Der Toten, visit every location the teleporter can take you to."],
        ["In the Belly of the Beast", "In Zetsubou No Shima, survive getting consumed. "],
        ["In Their Sleep", "In Campaign, kill 5 stunned enemies in under 3 seconds.   "],
        ["Inertial Distance", "In Campaign, wall run over 250 meters.  "],
        ["Into the Abyss", "Complete Hypocenter on Hardened, Veteran, or Realistic."],
        ["Iron Lung", "In Zetsubou No Shima, stay underwater for one minute. "],
        ["It's a Trap!", "In Shi No Numa, kill at least one zombie with three different traps in a single round."],
        ["Keep Close", "In Revelations, assist a Keeper in defeating every type of enemy."],
        ["Little Lost Girl", "In Origins, release Samantha."],
        ["Lock, Stock, And Then Some", "In Campaign, unlock all attachments for any weapon. "],
        ["Love And War", "Complete the main Easter-egg quest on Gorod Krovi ('Love And War')."],
        ["Margwa Party", "In Shadows of Evil, kill 2 Margwas in a single round."],
        ["Maximum Firepower", "Take control of an ASP."],
        ["My Brother’s Keeper", "Complete the main Easter-egg quest on Der Eisendrache ('My Brother's Keeper')."],
        ["No One Will Believe You", "Complete the Campaign on Realistic difficulty."],
        ["None Left Standing", "In Der Eisendrache, kill every type of zombie using a minigun."],
        ["Not Big Enough", "In Der Eisendrache, trap and kill a Panzer Soldat using the Ragnarok DG-4."],
        ["Not One Inch", "In Gorod Krovi, complete a Lockdown Event."],
        ["Not out of Gobblegum!", "In Shadows of Evil, purchase and chew every type of GobbleGum in your Pack."],
        ["One Too Many", "In Zetsubou No Shima, throw up. "],
        ["Overachiever", "In Origins, complete all 4 Challenges in one game."],
        ["Pack-A-Punch-ectomy", "In Revelations, recover the Pack-a-Punch machine from its abductor."],
        ["Parasite-Seeing", "In Shadows of Evil, kill 5 Parasites while riding on the train."],
        ["Personal Decorator", "Earn all Decorations."],
        ["Quick Off Your Feet", "In Der Eisendrache, wallbuy the BRM."],
        ["Rolling Heavy", "Kill 5 enemies using one burst of Unstoppable Force."],
        ["Sanguine Serum", "In Zetsubou No Shima, drink fresh Widow's Wine."],
        ["Seeds of Doubt ", "Complete the main Easter-egg quest on Zetsubou No Shima ('Seeds of Doubt')."],
        ["Silverback In Black", "Unlock Dead Ops Arcade 2 (by completing the Campaign)."],
        ["Small Consolation ", "In Shangri-La, use the 31-79 JGb215 on each type of zombie."],
        ["Sorry, we’re DEAD", "In Shadows of Evil, kill 10 zombies that are inside of a store in one game."],
        ["Sting like a Talon", "In Campaign, kill 20 enemies while flying the same Talon.  "],
        ["Strike!", "In Shadows of Evil, use the rocket shield attack to kill at least 10 zombies in one burst."],
        ["Tactical Specialist", "Get 5 Medals based on a Specialist Ability in a single game. "],
        ["Take a Bow", "In Der Eisendrache, upgrade the Wrath of the Ancients."],
        ["Taking Flight", "In Gorod Krovi, ride a Dragon."],
        ["That’s a lot of Jigawatts!", "In Der Eisendrache, electrocute 121 zombies."],
        ["The Beginning of the End", "In Shadows of Evil, complete all Rituals."],
        ["The Eagle has Landers", "In Ascension, escape on all three lunar landers."],
        ["The Grand Tour", "In Revelations, visit every unique location within 2 minutes."],
        ["The Spider and the Fly", "In Shadows of Evil, kill 10 zombies ensnared by a Widow’s Wine grenade."],
        ["The Ultimate Sacrifice ", "In Zetsubou No Shima, retrieve the Skull of Nan Sapwe."],
        ["Throwing Flak", "Kill 3 Talons with a single mid-air grenade detonation."],
        ["Time Attack", "In Gorod Krovi, complete Time Attack: Round 20."],
        ["Time to Slam", "In Der Eisendrache, revive two players protected by the Ragnarok DG-4."],
        ["Time Travel Will Tell", "In Shangri-La, acquire the Focusing Stone."],
        ["Understanding Madness", "Complete Demon Within on Hardened, Veteran, or Realistic."],
        ["Unlocked Potential", "Fully upgrade a Cybernetics Core."],
        ["Vaporeyezed", "In Gorod Krovi, use the Gigant Beam to kill 20 Zombies in one activation."],
        ["Viktorious Revenge", "In Gorod Krovi, complete all solo Trials in one Zombies game."],
        ["Walking Encyclopedia", "Discover all of the collectibles in any Mission."],
        ["Wardrobe Change", "In Revelations, wear three different hats."],
        ["Web of Defeat", "In Zetsubou No Shima, remove webs in every possible way in one game. "],
        ["Welcome to the Club", "Reach Sergeant (Level 10) in Multiplayer while playing online."],
        ["Wield a Fist of Iron", "In Gorod Krovi, wield the Gauntlet of Siegfried."],
        ["Wonderful", "In Revelations, kill 10 enemies in one shot with each wonder weapon."],
        ["Zombiepult", "In Gorod Krovi, launch 10 zombies into the air at the same time."],
    ];

    assert.strictEqual(officialAchievements.length, 98, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
