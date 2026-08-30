import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shovel-knight.json - 138 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 250760 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 138 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("shovel-knight");

test("getPlannerData('shovel-knight') returns real planner data with 138 curated achievements", () => {

    assert.ok(game, "expected real planner data for shovel-knight");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 138);

});

test("every Shovel Knight achievement has a unique id from 1 to 138 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 138 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 138);
    assert.strictEqual(new Set(apinames).size, 138);

});

test("every Shovel Knight achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 138 Shovel Knight achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        [" \tJump Economy", "Finish a stage and jump fewer than 10 times. (King Knight)"],
        ["Aerial Ace", "As Propeller Knight, defeat 2 or more foes without touching the ground. (Showdown)"],
        ["Again!", "Finish New Game Plus. (Shovel Knight)"],
        ["Again!", "Finish New Game Plus. (Plague Knight)"],
        ["Again!", "Finish New Game Plus. (Specter Knight)"],
        ["Again!", "Finish New Game Plus. (King Knight)"],
        ["Another Dimension", "Collect 2000 worth of gold lying on spikes, while using the Phase Locket. (Shovel Knight)"],
        ["Arc of Iron", "Defeat 3 enemies with one Throwing Anchor. (Shovel Knight)"],
        ["Beeline", "Complete the game in fewer than 25 stages. (King Knight)"],
        ["Bomb Economy", "Finish any order of no quarter stage using 15 bombs or fewer. (Plague Knight)"],
        ["Bomb Jump Blitz", "Defeat an Order Knight using only bomb jump explosions. (Plague Knight)"],
        ["Boom!", "Defeat 5 foes at once using the Booming Horn. (Shovel Knight)"],
        ["Card Completionist", "Obtain all Joustus cards. (King Knight)"],
        ["Cartography King", "Find and complete all stages and stage paths, and defeat all wandering travelers. (King Knight)"],
        ["Chain Reaction", "As Treasure Knight, win the match by defeating a foe with a bouncing diamond that you popped. (Showdown)"],
        ["Checkpointless", "Destroy every possible checkpoint in the game. (Shovel Knight)"],
        ["Checkpointless", "Destroy every possible checkpoint in the game.  (Plague Knight)"],
        ["Checkpointless", "Destroy every possible checkpoint in the game. (Specter Knight)"],
        ["Chester's Chum", "See 20 different modes in Chester's Choice. (Showdown)"],
        ["Clearing a Path", "Run over 5 enemies using the same Mobile Gear. (Shovel Knight)"],
        ["Clutch!", "Win Sudden Death 5 times. (Showdown)"],
        ["Creep", "Watch all of Mona's dance. (Plague Knight)"],
        ["Curio Conquest", "Use only curios to defeat any Boss Specter Knight is trying to recruit! (Specter Knight)"],
        ["Dark Dunk", "As Specter Knight, use a Dash Slash to win by dunking a foe into lava or a pit that you would've fallen into. (Showdown)"],
        ["Darkslide", "Land all 3 rail tricks in a single grind. (Specter Knight)"],
        ["Decked Out", "Purchase or unlock all relics, equipment, and upgrades. (Shovel Knight)"],
        ["Decked Out", "Acquire all armor, heirlooms, fancy things, and upgrades. (King Knight)"],
        ["Defend the Lab!", "Retake the Explodatorium without breaking any grey blocks during the boss fight.  (Plague Knight)"],
        ["Destruction Dominoes", "As Plague Knight, defeat multiple foes by hurtling through them with a single Spin Burst. (Showdown)"],
        ["Dirt Poor", "Don't collect any gold for an entire Order of No Quarter stage. (Shovel Knight)"],
        ["Done In One", "Finish Story Mode without using a continue. (Showdown)"],
        ["Elementary!", "As Mona, win a match by knocking a charged hazardous potion at a foe. (Showdown)"],
        ["Eliminator", "KO 100 total opponents. (Showdown)"],
        ["Fancy Feet", "As King Knight, reach the winning gem while still spinning after bashing into a foe. (Showdown)"],
        ["Fearless Champ", "Clear all 4 houses of Joustus without buying or reclaiming cards from Chester. (Not in New Game+) (King Knight)"],
        ["First Purchase", "Buy your first item. (Shovel Knight)"],
        ["Flare Wander", "Defeat an enemy with the Flare Wand from more than 25 blocks away. (Shovel Knight)"],
        ["Flying Feat", "Defeat 3 enemies using the Propeller Dagger without touching the ground. (Shovel Knight)"],
        ["From Nowhere", "As Dark Reize, defeat 3 foes as you exit your teleport in a single match. (Showdown)"],
        ["From Shadow!", "As Black Knight, win the match by dodging a player and hitting them with a Dark Wave. (Showdown)"],
        ["Gem Sweep", "In a Joustus match with more than one gem, win by claiming every gem. (King Knight)"],
        ["Get Out Of My Room!", "Find Plague Knight's secret room. (Plague Knight)"],
        ["Get Out Of My Room!", "Find Specter Knight's secret room! (Specter Knight)"],
        ["Get Out Of My Room!", "Find King Knight's secret room! (King Knight)"],
        ["Get the Point", "Destroy all checkpoints in a single stage. (Shovel Knight)"],
        ["Halfway", "Defeat 4 of the Order of No Quarter. (Shovel Knight)"],
        ["Hall Champion", "Solve the woes of the Hall of Champions. (Shovel Knight)"],
        ["Hall Villain", "Clear the the Hall of Champions in 3 minutes and 30 seconds or less.  (Plague Knight)"],
        ["Hang Time", "Stay in the air for 10 seconds without landing on anything. (Plague Knight)"],
        ["Harvest of Heights", "Chain together multiple targets with dash slashes 500 times. (Specter Knight)"],
        ["Hat Trick", "As Mr. Hat, get a KO with each of your 3 hats in a single match. (Showdown)"],
        ["Heartless", "Finish a Joustus Judge stage without dying or collecting any food or health hearts. (King Knight)"],
        ["Heirlooms Only!", "Use only heirlooms to defeat any boss! (King Knight)"],
        ["Hey Big Spender", "Spend a combined 25000 gold at the shop. (Shovel Knight)"],
        ["Hooper", "Bounce on the Hoop Kid's hoop for 5 seconds. (Shovel Knight)"],
        ["Hops and Dreams", "As Goldarmor, win the match by down thrusting off of the Throwing Anchor to reach the winning gem. (Showdown)"],
        ["House Champ", "Clear all 4 houses of Joustus, and win the final battle... (King Knight)"],
        ["Hover Queenie", "As The Enchantress, remain in the air for 30 seconds without touching the ground. (Showdown)"],
        ["Hurry Up!", "Beat the game within 1 hour and 30 minutes.  (Plague Knight)"],
        ["Hurry Up!", "Beat the game within 1 hour and 30 minutes. (Specter Knight)"],
        ["Hurry Up!", "Beat the game within 1 hour and 30 minutes. (King Knight)"],
        ["HurryUp!", "Beat the game within 1 hour and 30 minutes. (Shovel Knight)"],
        ["I Scream For Ichor", "Sample each of the Troupple King's ichors. (Shovel Knight)"],
        ["I'm a Cheater!", "Use each one of Chester's Cheat Cards. (King Knight)"],
        ["I'm Alive!", "Finish any stage without dying. (Shovel Knight)"],
        ["Impossible!", "Finish the game without dying. (Shovel Knight)"],
        ["Inhuman Resources", "Speak with every recruit within the Tower. (Specter Knight)"],
        ["Item Lord", "Use each of the items once. (Showdown)"],
        ["Juggler", "Impress Mona with your skills. (Shovel Knight)"],
        ["King of Cards", "Defeat every possible Joustus opponent. (King Knight)"],
        ["Knuckle Down", "Hang in the air for more than 4 seconds using the Dust Knuckles. (Shovel Knight)"],
        ["Liquid Assets", "As Liquid Samurai, win a match by collecting 3 gems without breaking your run stride. (Showdown)"],
        ["Magma Day", "Knock opponents into lava 50 times. (Showdown)"],
        ["Make A Killing", "Without replaying any stage or minigame, finish the game while holding 60000 gold or more. (Specter Knight)"],
        ["Master Angler", "Successfully fish 5 sparkling fishing spots. (Shovel Knight)"],
        ["Master Shoveler", "Purchase all available Shovel Blade upgrades. (Shovel Knight)"],
        ["Maxed Out", "Purchase or unlock all relics equipment and upgrades.  (Plague Knight)"],
        ["Melancholy", "Reminisce and remain still on the Tower's rooftop for 30 seconds. (Specter Knight)"],
        ["Merit Badge", "Collect all Merit Medals. (King Knight)"],
        ["Mint Condition", "Collect all Cipher Coins.  (Plague Knight)"],
        ["Music Lover", "Obtain all song scrolls. (Shovel Knight)"],
        ["Naked King", "Finish the game without acquiring any heirlooms, health upgrades, or vigor upgrades. Armors are ok! (King Knight)"],
        ["Naked Plague", "Finish the game without collecting any arcana, bomb parts, or armors.  (Plague Knight)"],
        ["Naked Specter", "Finish the game without acquiring any Will or Darkness upgrades. (Specter Knight)"],
        ["Nice Hat...", "Help out all the moochers in the fancy shop. (Shovel Knight)"],
        ["No Damage!", "Finish any Stage without taking damage. (Shovel Knight)"],
        ["No Damage!", "Finish any Stage without taking damage.  (Plague Knight)"],
        ["No Damage!", "Finish any main stage without taking damage. (Specter Knight)"],
        ["On a Diet", "Finish a level without eating any food. (Shovel Knight)"],
        ["Only You", "Use caution and common sense around campfires. (Shovel Knight)"],
        ["Order of Hoarders", "Have 50000 gold on hand. (Shovel Knight)"],
        ["Order of Thwarters", "Successfully parry 10 times during one match. (Showdown)"],
        ["Patron of the Arts", "Commission a finished portrait! (King Knight)"],
        ["Penny Pincher", "Finish the game without spending any money. (Shovel Knight)"],
        ["Penny Pincher", "Finish the game without spending any money... including Cipher Coins!  (Plague Knight)"],
        ["Percy's Pal", "Attain a score of 100,000 in Targets. (Showdown)"],
        ["Perfect Platformer", "Finish the game without falling into a bottomless pit. (Shovel Knight)"],
        ["Plower Power", "As Polar Knight, defeat multiple foes with a single use of the Polar Plow. (Showdown)"],
        ["Poor Oolong", "Give Oolong a sample of every explosion. (Plague Knight)"],
        ["Pungent", "Listen to all of Croaker's puns. (Shovel Knight)"],
        ["Reflect Lord", "Hit enemies with a reflected projectile 30 times. (Shovel Knight)"],
        ["Reflected Riches", "Bounce the same Alchemical Coin 5 times in a row. (Shovel Knight)"],
        ["Reize for the Sky", "As Reize, win the match by Dive Kicking an enemy to propel yourself to the winning gem. (Showdown)"],
        ["Relic Roundtable", "Defeat an enemy by using each relic. (Shovel Knight)"],
        ["Scythe Economy", "Complete any Order of No Quarter recruit stage using your standing slash 10 times or fewer. Dash Slashes are ok! (Specter Knight)"],
        ["Shatterer", "Complete Story Mode on Hard difficulty. (Showdown)"],
        ["Shovel Economy", "Finish a level and swing the Shovel Blade fewer than 20 times. (Shovel Knight)"],
        ["Shrouded Strike", "As Phantom Striker, use the Strike Step to reach the winning gem while donning the Phantom Shroud. (Showdown)"],
        ["Skull Seeker", "Find and return all Red Skulls. (Specter Knight)"],
        ["Smack Back", "As Shovel Knight, win the match with a reflected projectile. (Showdown)"],
        ["Sparker", "Finish off any boss using the Ground Spark technique. (Shovel Knight)"],
        ["Spec'd Out", "Acquire all armor, curios, and upgrades. (Specter Knight)"],
        ["Spirit of Giving", "Fill both of the tower's mysterious jars. (Specter Knight)"],
        ["Stay Where You Are!", "As Shield Knight, use a single Shield Rush to both block a projectile and win the match. (Showdown)"],
        ["Stomped!", "Win a stock match of 3 or more without losing a single stock. (Showdown)"],
        ["Super Sphere", "Destroy 5 enemies within 5 seconds using the Chaos Spheres. (Shovel Knight)"],
        ["Sure-Footed", "Finish 10 matches in any stage with lava or a pit without falling in. (Showdown)"],
        ["Teetotaler", "Finish the game without drinking any tonics. (Plague Knight)"],
        ["That's Mine!", "Lose a unique card, then win it back! (King Knight)"],
        ["The Storm Is Coming!", "As Baz, stun multiple foes using one use of Electrify, then hit them before they recover. (Showdown)"],
        ["Trading Up", "Trade each of the useless relics to Chester. (Plague Knight)"],
        ["Troupple Acolyte", "Discover the secrets of the Troupple King. (Shovel Knight)"],
        ["Troupple Tango", "Defeat 50 Troupples during an encounter with the Troupple King. (Showdown)"],
        ["True Shovelry", "Beat the game without collecting any relics. (Shovel Knight)"],
        ["Undermined", "As Mole Knight, absorb 10 hits while submerged in a single match. (Showdown)"],
        ["Untouched", "Emerge unscathed from a battle with any Knight of the Order of No Quarter. (Shovel Knight)"],
        ["Untouched", "Emerge unscathed from a battle with any Knight of the Order of No Quarter... except for King Knight!  (Plague Knight)"],
        ["Untouched", "Emerge unscathed from a battle with any boss besides Black Knight! (Specter Knight)"],
        ["Vector Victor", "Reach the top of the climbing mini game. (Specter Knight)"],
        ["Victory!", "Finish the game. (Shovel Knight)"],
        ["Victory!", "Finish the game. (Plague Knight)"],
        ["Victory!", "Finish the game. (Specter Knight)"],
        ["Victory!", "Finish the game. (King Knight)"],
        ["Warp Walker", "Fall through the warp floor 50 times. (Showdown)"],
        ["Well Met", "Defeat all of the wandering travelers. (Shovel Knight)"],
        ["Whoops!", "As Tinker Knight, win the match by knocking an enemy into lava or a pit with the Definitely Intentional Trip. (Showdown)"],
        ["Wisp Whisperer", "Obtain all Darkness and Will Upgrades from within the stages. (Specter Knight)"],
        ["You're Fired", "Finish off the Black Knight with a reflected shot. (Shovel Knight)"],
    ];

    assert.strictEqual(officialAchievements.length, 138, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
