import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/devil-may-cry-hd-collection.json - 99 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 631510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("devil-may-cry-hd-collection");

test("getPlannerData('devil-may-cry-hd-collection') returns real planner data with 99 curated achievements", () => {

    assert.ok(game, "expected real planner data for devil-may-cry-hd-collection");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 99);

});

test("every Devil May Cry HD Collection achievement has a unique id from 1 to 99 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 99 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 99);
    assert.strictEqual(new Set(apinames).size, 99);

});

test("every Devil May Cry HD Collection achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 99 Devil May Cry HD Collection achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Secret Revealed ", "DMC2: Complete a Secret Mission"],
        ["Am I My Brother's Keeper", "DMC3: Finish the game on any difficulty as Vergil."],
        ["Arachnophobia", "DMC: Survive an encounter with Phantom"],
        ["Armed and Dangerous", "DMC2: Reach Level 3 on any Sword with Lucia"],
        ["Arms Race", "DMC2: Reach Level 3 on any Gun with Dante"],
        ["Asylum", "DMC3: Defeat Arkham."],
        ["Ball 'n Chain", "DMC2: Defeat Plutonian"],
        ["Barehand Beauty", "DMC2: Finish the game on any difficulty with Trish"],
        ["Big Spender", "DMC3: Purchase all Devil Arm skills with Dante."],
        ["Bird of Prey", "DMC: Survive an encounter with Griffon"],
        ["Blood Donor", "DMC3: Pass 5000 levels in Bloody Palace Mode."],
        ["Blood Flows Red", "DMC: Collect 25,000 Red Orbs"],
        ["Blood Letting", "DMC2: Pass 5000 floors in Bloody Palace Mode"],
        ["Blood, Sweat, and Tears", "DMC3: Pass 666 levels in Bloody Palace Mode."],
        ["Bloody Hell", "DMC3: Complete Bloody Palace Mode."],
        ["Blue Demon", "DMC: Complete a Blue Orb"],
        ["Blue Devil", "DMC: Max out the Health Bar"],
        ["Boiling!!", "DMC: Finish the Game on Hard Mode"],
        ["Bookworm", "DMC: Unlock 50% of all entries for every enemy file in the status menu"],
        ["Broken Halo", "DMC: Fight Nelo Angelo a second time and prevail"],
        ["Brotherly Love", "DMC3: Fight Vergil a second time and prevail."],
        ["Caeruleus Diabolus", "DMC2: Collect 12 Blue Orb fragments (Dante/Lucia)"],
        ["Can You Keep A Secret?", "DMC: Complete a Secret Mission"],
        ["Check Out My Collection", "DMC2: Collect all Arsenals with Lucia"],
        ["Cold Turkey", "DMC: Fight Griffon a second time and prevail"],
        ["Combustible!!!", "DMC: Finish the game on Dante Must Die Mode"],
        ["Deep One", "DMC2: Defeat Tateobesu"],
        ["Devilish Deed", "DMC3: Achieve an S Rank on any mission with any character."],
        ["Double Trouble", "DMC3: Defeat Agni and Rudra."],
        ["En Vogue", "DMC2: Perform an S Rank Combo using Lucia"],
        ["Every Head Will Bow", "DMC2: Finish the game on Hard Mode with any character"],
        ["Every Knee Will Bend", "DMC2: Finish the game on Normal Mode with any character"],
        ["Every Tongue Will Confess", "DMC2: Finish the game on Must Die Mode with any character"],
        ["Extinguished", "DMC2: Defeat the final boss with either Dante or Lucia"],
        ["Fallen Angel", "DMC: Defeat Nelo Angelo"],
        ["First Blood", "DMC2: Pass 1000 levels in Bloody Palace Mode"],
        ["Full Armory", "DMC2: Collect all Swords with Dante"],
        ["Give 'em Hell", "DMC3: Max out the Devil Trigger Gauge with Dante."],
        ["Gone To Hell", "DMC3: Finish the game on Hard Mode with any character."],
        ["Good Night", "DMC: Fight Nightmare a second time and prevail"],
        ["Gun Collector", "DMC: Collect all Guns"],
        ["Heaven Can Wait", "DMC3: Finish the game on Heaven or Hell Mode with any character."],
        ["Hell Hath No Fury…", "DMC3: Finish the game on Dante Must Die Mode with any character."],
        ["Hell of a Start", "DMC3: Finish the game on Normal Mode with any character."],
        ["Hellish Honor", "DMC3: Achieve an S Rank on all missions (any difficulty or character)."],
        ["Highest Honor", "DMC2: Achieve an S Rank on any Mission with Dante"],
        ["Hot As Hell", "DMC: Perform an S Rank Combo using Ifrit"],
        ["Hungry Like the Wolves", "DMC2: Defeat Bolverk"],
        ["I Read You Like A Book", "DMC: Unlock all the entries for every enemy file in the status menu"],
        ["Inside Out", "DMC3: Defeat the Heart of Leviathan."],
        ["Left No Stone Unturned", "DMC3: Complete all Secret Missions with any Character."],
        ["Lightning In A Bottle", "DMC3: Defeat Nevan."],
        ["Lights Out", "DMC3: Defeat Beowulf."],
        ["Like A Hot Knife Through Butter", "DMC2: Reach Level 3 on all Swords with Dante"],
        ["Locked 'n Loaded", "DMC3: Reach the highest level for any gun with Dante."],
        ["Magica Maxima", "DMC2: Max out Devil Trigger Gauge with any character"],
        ["Man's Best Friend", "DMC3: Defeat Cerberus."],
        ["Maximize Your Health", "DMC3: Max out the Health Bar with Dante."],
        ["Monkeying Around", "DMC2: Defeat Orangguerra"],
        ["Never Forget a Face", "DMC2: Defeat Trismagia"],
        ["Night Terrors", "DMC: Survive an encounter with Nightmare"],
        ["No Joke", "DMC2: Defeat Jokatgulm"],
        ["Not Just Any Ordinary Human", "DMC2: Defeat Phantom"],
        ["Over 9000!", "DMC2: Pass 9000 floors in Bloody Palace Mode"],
        ["Pest Control", "DMC3: Defeat Gigapede."],
        ["Plucked", "DMC: Defeat Griffon"],
        ["Redemption", "DMC: Collect 50,000 Red Orbs"],
        ["Rough Rider", "DMC3: Defeat Geryon."],
        ["Seeing Red", "DMC: Collect 10,000 Red Orbs"],
        ["Sibling Rivalry", "DMC3: Survive an encounter with Vergil."],
        ["Sin City", "DMC2: Defeat Nefasturris"],
        ["Smashing  Sensation", "DMC: Achieve an S Rank on any Mission"],
        ["Squashed Like A Bug", "DMC: Defeat Phantom"],
        ["Step Into The Light", "DMC3: Defeat Doppelganger."],
        ["Stylish!", "DMC2: Perform an S Rank Combo using Dante"],
        ["Table Of Contents", "DMC: Unlock every enemy file in the status menu"],
        ["Take Heart, Lucia", "DMC2: Collect all Devil Hearts with Lucia"],
        ["That's A Big Mother...", "DMC2: Defeat Noctpteran"],
        ["That's Not Lady-Like", "DMC3: Defeat Lady."],
        ["The Devil Made Me Do It", "DMC: Finish the game without using any Yellow Orbs"],
        ["The Devil Went Down To...", "DMC: Defeat Mundus"],
        ["The Devil's In The Details", "DMC: Purchase all of Dante's Skills"],
        ["The Nightmare is Over", "DMC: Defeat Nightmare"],
        ["The Path Less Travelled", "DMC3: Clear every mission in Yellow Orb Mode."],
        ["The Secret Six", "DMC: Complete six Secret Missions"],
        ["The Secret's Out", "DMC: Complete all Secret Missions"],
        ["The Sky's The Limit", "DMC2: Achieve an S Rank on any Mission with Lucia"],
        ["Thunderstruck", "DMC: Perform an S Rank Combo using Alastor"],
        ["To Hell And Back", "DMC3: Finish the game on Very Hard Mode with any character."],
        ["To Hell With That", "DMC3: Kill 100 enemies during the credits."],
        ["To The Max", "DMC2: Reach Level 3 on all Arsenals with Lucia"],
        ["Trend Setter", "DMC3: Reach the highest level in all Styles with Dante."],
        ["Two Heads are Better Than One", "DMC2: Defeat Tartarussian"],
        ["Untouchable", "DMC: Clear a mission without taking damage"],
        ["Vita Maxima", "DMC2: Max out Health Bar with any character"],
        ["Warming Up!", "DMC: Finish the game on Normal Mode"],
        ["Who's Laughing Now?", "DMC3: Defeat Jester in all of his forms."],
        ["Worst Kept Secret", "DMC3: Complete a Secret Mission with any character."],
        ["You're No Angel", "DMC: Survive an encounter with Nelo Angelo"],
    ];

    assert.strictEqual(officialAchievements.length, 99, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
