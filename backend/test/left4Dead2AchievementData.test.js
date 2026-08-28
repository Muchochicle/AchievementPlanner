import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/left-4-dead-2.json - 101 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 550 (fetched through this app's own services/steamApi.js) - all
// 101 ship a real, official Steam description. Left 4 Dead 2 has no
// Steam-hidden achievements; the total includes every DLC campaign (The
// Passing, The Sacrifice, Cold Stream, The Last Stand). Valve stores the
// names in ALL CAPS - preserved byte-for-byte. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field.
const left4Dead2 = getPlannerData("left-4-dead-2");

test("getPlannerData('left-4-dead-2') returns real planner data with 101 curated achievements", () => {

    assert.ok(left4Dead2, "expected real planner data for left-4-dead-2");
    assert.ok(Array.isArray(left4Dead2.achievements));
    assert.strictEqual(left4Dead2.achievements.length, 101);

});

test("every Left 4 Dead 2 achievement has a unique id from 1 to 101 and a unique apiname", () => {

    const ids = left4Dead2.achievements.map(a => a.id);
    const apinames = left4Dead2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 101 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 101);
    assert.strictEqual(new Set(apinames).size, 101);

});

test("every Left 4 Dead 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of left4Dead2.achievements) {

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

test("every one of the 101 official Left 4 Dead 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["CL0WND", "Honk the noses of 10 Clowns."],
        ["FRIED PIPER", "Using a Molotov, burn a Clown leading at least 10 Common Infected. "],
        ["LEVEL A CHARGE", "Kill a Charger with a melee weapon while they are charging."],
        ["ACID REFLEX", "Kill a Spitter before she is able to spit."],
        ["CONFEDERACY OF CRUNCHES", "Finish a campaign using only melee weapons."],
        ["CRASS MENAGERIE", "Kill one of each Uncommon Infected."],
        ["A RIDE DENIED", "Kill a Jockey within 2 seconds of it jumping on a Survivor."],
        ["HEAD HONCHO", "Decapitate 200 Infected with a melee weapon."],
        ["HEARTWARMER", "In a Versus round, leave the saferoom to defibrillate a dead teammate."],
        ["STILL SOMETHING TO PROVE", "Survive all campaigns on Expert."],
        ["THE REAL DEAL", "Survive a campaign on Expert skill with Realism mode enabled."],
        ["STRENGTH IN NUMBERS", "Form a team and beat an enemy team in 4v4 Versus or Scavenge."],
        ["DEAD IN THE WATER", "Kill 10 swampy Mudmen while they are in the water."],
        ["ROBBED ZOMBIE", "Collect 10 vials of Boomer vomit from infected CEDA agents you have killed."],
        ["DISMEMBERMENT PLAN", "Kill 15 Infected with a single grenade launcher blast."],
        ["BURNING SENSATION", "Ignite 50 Common Infected with incendiary ammo."],
        ["ARMORY OF ONE", "Deploy an ammo upgrade and have your team use it."],
        ["SHOCK JOCK", "Revive 10 dead Survivors with the defibrillator."],
        ["THE QUICK AND THE DEAD", "Revive 10 incapacitated Survivors while under the speed-boosting effects of adrenaline."],
        ["CHAIN OF COMMAND", "Kill 100 Common Infected with the chainsaw."],
        ["SEPTIC TANK", "Use a bile bomb on a Tank."],
        ["CLUB DEAD", "Use every melee weapon to kill Common Infected."],
        ["TANK BURGER", "Kill a Tank with melee weapons."],
        ["BRIDGE OVER TREBLED SLAUGHTER", "Cross the bridge finale in less than three minutes."],
        ["PRICE CHOPPER", "Survive the Dead Center campaign."],
        ["MIDNIGHT RIDER", "Survive the Dark Carnival campaign."],
        ["RAGIN' CAJUN", "Survive the Swamp Fever campaign."],
        ["WEATHERMAN", "Survive the Hard Rain campaign."],
        ["BRIDGE BURNER", "Survive the Parish campaign."],
        ["VIOLENCE IN SILENCE", "Navigate the impound lot and reach the cemetery safe room without tripping any alarms."],
        ["GUARDIN' GNOME", "Rescue Gnome Chompski from the Carnival."],
        ["SOB STORY", "Navigate the sugar mill and reach the safe room without killing any Witches."],
        ["WING AND A PRAYER", "Defend yourself at the crashed airliner without taking damage."],
        ["QUALIFIED RIDE", "As the Jockey, ride a Survivor for more than 12 seconds."],
        ["BACK IN THE SADDLE", "As the Jockey, ride the Survivors twice in a single life."],
        ["RODE HARD, PUT AWAY WET", "As the Jockey, ride a Survivor and steer them into a Spitter's acid patch."],
        ["GREAT EXPECTORATIONS", "As the Spitter, hit every Survivor with a single acid patch."],
        ["A SPITTLE HELP FROM MY FRIENDS", "As the Spitter, spit on a Survivor being choked by a Smoker."],
        ["SCATTERING RAM", "As the Charger, bowl through the entire enemy team in a single charge."],
        ["MEAT TENDERIZER", "As the Charger, grab a Survivor and smash them into the ground for a solid 15 seconds."],
        ["LONG DISTANCE CARRIER", "As the Charger, grab a Survivor and carry them over 80 feet."],
        ["BEAT THE RUSH", "In a Survival round, get a medal only using melee weapons."],
        ["HUNTING PARTY", "Win a game of Scavenge."],
        ["GAS GUZZLER", "Collect 100 gas cans in Scavenge."],
        ["CACHE AND CARRY", "Collect 15 gas cans in a single Scavenge round."],
        ["SCAVENGE HUNT", "Stop the enemy team from collecting any gas cans during a Scavenge round."],
        ["GONG SHOW", "Prove you are stronger than Moustachio."],
        ["FUEL CRISIS", "Make a Survivor drop a gas can during overtime."],
        ["GAS SHORTAGE", "Cause 25 gas can drops as a Special Infected."],
        ["STACHE WHACKER", "Prove you are faster than Moustachio."],
        ["TORCH BEARER", "Survive The Passing Campaign."],
        ["WEDDING CRASHER", "As the Charger, grab a Survivor and crash them through 8 chairs at the wedding."],
        ["TIL IT GOES CLICK", "Using the M60, kill 25 infected without letting go of the trigger."],
        ["GRAVE ROBBER", "Collect 10 items dropped by a Fallen Survivor."],
        ["MUTANT OVERLORD", "Play 6 Mutations."],
        ["FORE!", "Knock off the heads of 18 infected with the golf club."],
        ["KILLING THEM SWIFTLY TO THIS SONG", "Play the new Midnight Riders song on a jukebox."],
        ["KITE LIKE A MAN", "Kill a Tank only with damage from the original Survivors."],
        ["CACHE GRAB", "Open 5 foot lockers."],
        ["PORT OF SCAVENGE", "Play 5 full games of Scavenge on The Port."],
        ["SUPREME SACRIFICE", "Complete \"The Sacrifice\"."],
        ["KILL BILL", "Have Bill sacrifice himself for the team."],
        ["BARREL ROLLED", "Kill a Special Infected with an exploding barrel."],
        ["CHAOS GENERATOR", "Have all 3 generators running at once in \"The Sacrifice\" finale."],
        ["SACRIFIZZLE", "As a Special Infected, incap someone who is trying to sacrifice themselves."],
        ["STREAM CROSSER", "Survive the Cold Stream campaign on any difficulty."],
        ["CONNECTING FIGHTS", "Play a Versus game on Dead Air from start to finish."],
        ["Valve Gift Grab 2011 – L4D2", "Collect three gifts dropped by Special Infected in Versus Mode."],
        ["GOOD GUY NICK", "Plays games with free weekend players and helps them survive a campaign."],
        ["GHOST OF CHRISTMAS PRESENT", "Spread cheer by helping a free holiday player survive a campaign."],
        ["GETTING STARTED", "Earn a bronze medal on any official Survival map."],
        ["ON OUR WAY", "Earn a silver medal on any official survival map."],
        ["THIS IS WHERE THE FUN BEGINS", "Earn a gold medal on any official survival map."],
        ["STILL STANDING", "Survive The Last Stand campaign on any difficulty."],
        ["THE LAST FRONTIER", "Survive The Last Stand campaign on Expert Realism."],
        ["GOLDEN FREEMAN", "Find the golden crowbars hidden in the Left 4 Dead 1 survival maps."],
        ["ELEPHANT IN THE ROOM", "Revive an incapacitated teammate while a Tank is nearby."],
        ["I SPIT ON YOUR GRAVE", "As the Spitter, spit on a Survivor who is pinned by a Charger."],
        ["ACID BATH", "As the Spitter, spit on a Survivor who is pinned by a Hunter."],
        ["SPITFIRE", "Destroy 20 gascans as the Spitter."],
        ["FLIGHT DECK", "Instantly kill a Survivor as the Charger."],
        ["FAT NINJA", "As the Boomer, vomit on a Survivor without having direct line of sight with them."],
        ["THREE’S A CROWD", "Rescue three Survivors from a single rescue closet."],
        ["LICKETY-SPLIT", "With a sharp melee weapon, cut a Smoker's tongue before he ensnares you."],
        ["GET SKEETED ON", "Kill a pouncing Hunter with a shotgun."],
        ["ROCKY HORROR PICTURE THROW", "Destroy a Tank's rock in mid-air."],
        ["SHOTGUN WEDDING", "Kill the Witch bride with a single shotgun blast on expert difficulty."],
        ["ONE HIT WONDER", "As the Hunter, land a 25 damage pounce."],
        ["PURE SATISFACTION", "Kill 20 Jockeys with the shovel or pitchfork."],
        ["THE BIG TEN", "Survive for 10 minutes on any official map in Versus Survival."],
        ["Z-GENOCIDEST 2: EPISODE 2", "Kill 53,599 infected. You made sure the dead won't rise anymore!"],
        ["POLE POSITION", "Escape Liberty Mall's Atrium before the first Tank appears"],
        ["HOUSEHOLD NAMES", "Discover the hidden room in the Last Stand campaign"],
        ["A LITTLE HACK AND SLASH", "Earn a bronze medal on every official survival map"],
        ["LIKE LAMBS TO THE SLAUGHTER", "Earn a silver medal on every official survival map."],
        ["KILLING SPREE", "Earn a gold medal on every official survival map."],
        ["SUPREME SURVIVALIST", "Survive for 30 minutes on any official survival map."],
        ["NEW HAIRCUT", "Kill a Witch using only a sharp melee weapon, without anyone getting incapacitated or killed."],
        ["THE MAIN ATTRACTION", "On the concert finale, survive until the helicopter arrives without leaving the stage"],
        ["THE LAST DASH", "Complete The Last Stand campaign in 13 minutes or less, without any Survivors dying."],
        ["GNOME ALONE", "If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space."]
    ];

    assert.strictEqual(officialAchievements.length, 101, "sanity check on this test's own reference list");

    const dataPairs = left4Dead2.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
