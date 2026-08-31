import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/call-of-duty-black-ops.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 42700 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("call-of-duty-black-ops");

test("getPlannerData('call-of-duty-black-ops') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for call-of-duty-black-ops");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Call of Duty: Black Ops achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Call of Duty: Black Ops achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Call of Duty: Black Ops achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Insert Coin\"", "Access the terminal and battle the forces of the Cosmic Silverback in Dead Ops Arcade."],
        ["A safer place", "Sabotage the Soviet space program."],
        ["Big Bang Theory ", "In Moon, gain sweet, sweet, revenge."],
        ["BLACK OP MASTER", "Complete the campaign on Hardened or Veteran difficulty."],
        ["Blinded By the Fright", "In Shangri-La, kill a Shrieker zombie while blinded by it."],
        ["Broken English", "Escape Kowloon."],
        ["Burn Notice", "Complete \"Rebirth\" and \"Redemption\" on Veteran difficulty."],
        ["Chimp on the barbie", "In Ascension, kill a space monkey with a fire trap."],
        ["Clarity", "Crack the code."],
        ["Closer Analysis", "Find all the hidden intel."],
        ["Cold Warrior", "Complete \"Operation 40,\" \"Vorkuta,\" and \"Executive Order\" on Veteran difficulty."],
        ["Cryogenic Slumber Party", "In Moon, complete Richtofen's grand scheme."],
        ["Death to Dictators", "Take down Castro with a headshot."],
        ["Double Trouble", "Use only dual wield weapons to escape Kowloon."],
        ["Double Whammy", "Destroy both helicopters with one Valkyrie missile from the deck of the ship."],
        ["Down and Dirty", "Complete \"SOG\" and \"The Defector\" on Veteran difficulty."],
        ["Easy Rhino", "In Dead Ops Arcade, use a Speed Boost to blast through 20 or more enemies at one time."],
        ["Eaten by a Grue", "Play the hidden text adventure Zork on the main-menu terminal (type 'zork')."],
        ["Ensemble Cast", "In Call of the Dead, send the crew to Paradise in co-op"],
        ["Frag Master", "Kill 5 enemies with a single frag grenade in the campaign."],
        ["Fully Armed and Operational ", "In Moon, acquire 3 pack-a-punched weapons at the same time."],
        ["Give me liberty, or give me death", "Escape Vorkuta."],
        ["Ground Control ", "In Moon, prevent each excavator from breaching the base in one game."],
        ["Hands Off the Merchandise", "Kill the Pentagon thief before it can steal your load-out."],
        ["Heavy Hand", "Use the Grim Reaper to destroy the MG emplacement."],
        ["I hate monkeys", "Kill 7 monkeys in under 10 seconds in the Rebirth labs."],
        ["It's your funeral", "Complete \"Numbers,\" \"Project Nova,\" and \"Victor Charlie\" on Veteran difficulty."],
        ["Just ask me nicely", "Break free from the interrogation chair in the main menu."],
        ["Light Foot", "Escape the ship with 2:15 left on the timer in Veteran."],
        ["Looks don't count", "Break the siege in the battle of Khe Sanh."],
        ["Lord Nelson", "Destroy all targets and structures while making your way up the river."],
        ["Monkey See, Monkey Don't", "In Shangri-La, get something from the monkeys."],
        ["Mr. Black OP", "Enter the Soviet relay station undetected."],
        ["Never get off the boat", "Find the Soviet connection in Laos."],
        ["No Leaks", "Make it through the NOVA 6 gas without dying on Rebirth Island."],
        ["Not Today", "Complete \"Crash Site,\" \"WMD,\" and \"Payback\" on Veteran difficulty."],
        ["One Giant Leap ", "In Moon, become trapped in the Receiving Area and free yourself through resurrection in co-op."],
        ["One Small Hack for a Man... ", "In Moon, hack something."],
        ["Pathfinder", "Guide the squad through the Soviet outpost without them getting killed."],
        ["Perks in Spaaaaace! ", "In Moon, purchase every perk in one game."],
        ["Quiet on the Set", "In Call of the Dead, cut the lights on the Director"],
        ["Raining Pain", "Rack up a body count of 20 NVA using air support in Hue City."],
        ["Russian bar-b-q", "Incinerate 10 enemies with the flamethrower attachment in the POW compound."],
        ["Sacrifice ", "Ensure your squad escapes safely from Cuba."],
        ["Sacrificial Lamb", "Kill 6 zombies after getting shot by a Pack-a-Punched Crossbow bolt."],
        ["Sally Likes Blood", "Demonstrate killer economic sensibilities by taking down 3 enemies with a single bullet"],
        ["See Me, Stab Me, Heal Me", "In Zombies, fire a Pack-a-Punched Ballistic Knife at a downed ally to revive them from a distance."],
        ["Shooting on Location", "In Call of the Dead, kill 10 zombies with one Scavenger shot from over 100 feet away"],
        ["Slingshot Kid ", "Destroy all slingshot targets in 3 attempts."],
        ["Small Consolation", "In Shangri-La, use the 31-79 JGb215 on each type of zombie."],
        ["SOG Rules", "Retrieve the dossier and the defector from Hue City."],
        ["Some wounds never heal", "Escape the past."],
        ["Space Race", "In Ascension, Pack-a-Punch a weapon by round 8."],
        ["Stand Down", "Complete the campaign on any difficulty."],
        ["Stand-in", "In Call of the Dead, send the crew to Paradise in solo or co-op."],
        ["Stuntman", "In Call of the Dead, make a zombie explode using the V-R11"],
        ["The Collector", "Buy every weapon off the walls in a single Zombies game."],
        ["The Dragon Within", "Kill 10 NVA with Dragon's Breath rounds."],
        ["The eagle has landers", "In Ascension, escape on all 3 lunar landers."],
        ["They are going THROUGH!", "In Ascension, kill at least 5 zombies with 1 Gersh Device."],
        ["Time Travel Will Tell", "In Shangri-La, acquire the focusing stone."],
        ["Tough Economy", "Use no more than 6 TOW guided missiles to destroy the tanks in the defense of Khe Sanh."],
        ["Unconventional Warfare", "Use the explosive bolts to kill 30 enemies in the campaign."],
        ["Up close and personal", "Silently take out 3 VC."],
        ["Vehicular Slaughter", "Destroy all enemies on vehicles during the prison break."],
        ["VIP", "Receive orders from Lancer."],
        ["With extreme prejudice", "Get to the POW compound in the Hind using only rockets."],
        ["Zomb Disposal", "In Shangri-La, dispose of a Napalm zombie without it harming any players."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
