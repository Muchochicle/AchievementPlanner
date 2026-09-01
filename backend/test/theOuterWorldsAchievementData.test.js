import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-outer-worlds.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 578650 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-outer-worlds");

test("getPlannerData('the-outer-worlds') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-outer-worlds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every The Outer Worlds achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every The Outer Worlds achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 The Outer Worlds achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Star is Born", "Star in an Odeon Pictures movie (complete 'At Central')."],
        ["Alive And Kicking (And Shooting Too!)", "(Murder on Eridanos) Discover the biggest secret in the aetherwave industry (during 'Naked Hunch')."],
        ["All for One", "Completed all companion quests."],
        ["Anything for a Friend", "Finished a companion's quest line."],
        ["Best Friend", "Recruited a companion."],
        ["Dentastic", "Save the diet toothpaste recipe (return the toothpaste to the scientist during 'The Doom That Came to Roseway')."],
        ["Destroyer of Worlds", "Had 75% or higher negative reputation with 3 factions."],
        ["Elemental Maelstrom", "Killed an enemy that was hit with all 5 damage types."],
        ["Everybody Likes Me", "Had 75% or higher positive reputation with 3 factions."],
        ["Everything Must Go", "Sold 10,000 bits worth of items to vendors."],
        ["Family Reunion", "(Peril on Gorgon) Broker a compromise between Olivia and Minnie Ambrose."],
        ["Flawed Hero", "Acquired 3 flaws."],
        ["Good Listener", "Found 20 Portable Phonographs."],
        ["Got Your Back", "Killed 50 enemies with companion abilities."],
        ["Greenlight Protocol", "(Peril on Gorgon) Power the reactor."],
        ["Hard", "Completed The Outer Worlds on hard difficulty."],
        ["Hard Time", "Land on Tartarus (a point of no return)."],
        ["Health Insurance", "Used the medical inhaler 300 times."],
        ["Impossible Mission", "Succeeded at 3 dialog conversation checks with a single disguise."],
        ["Interrogo Totus", "(Murder on Eridanos) Investigate every suspect and report to Administrator Ludovico before accusing anyone."],
        ["Jack of All Trades", "Killed an enemy with a science weapon sneak attack during TTD, with a weakspot critical hit."],
        ["Level 30", "Character level 30 reached."],
        ["Lost and Found", "Reach the bridge of the Hope, then skip it to Phineas' lab."],
        ["Lucky Stiff", "(Peril on Gorgon) Find Lucky Montoya's body."],
        ["Ludwig was Right", "Bring robo-destruction to Edgewater (kill Reed, then complete the 'Foundation' quest for Sophia)."],
        ["Mad Scientist", "Killed an enemy under the effects of 4 science weapons."],
        ["Mightier than the Sword", "Save Edgewater permanently (divert power to Edgewater, leave Reed in charge, and side with Sophia)."],
        ["Monarch Abides", "Defeat one faction's leader on Monarch after acquiring the targeting module."],
        ["Murder on Eridanos", "Completed Murder on Eridanos on any difficulty."],
        ["Mutt And Jeff", "(Murder on Eridanos) Ask a companion to be the Bad Inspector (during 'Prince of Tossball')."],
        ["NDA Protocol", "(Peril on Gorgon) Destroy the Synthesizer."],
        ["Never Seen", "Killed 50 enemies with sneak attacks."],
        ["No Longer Clueless", "(Murder on Eridanos) Use the Discrepancy Amplifier."],
        ["Not the Best Choice", "Simultaneously equipped Spacer's Choice brand clothing, headgear, and 4 weapons."],
        ["One for All", "Recruited all of the companions."],
        ["Paradise Found", "First land in Byzantium."],
        ["Patient N", "Killed 20 enemies that were infected by spreading N-rays."],
        ["Peace in Our Time", "Broker peace between the Iconoclasts and MSI at the OSI church."],
        ["Peril at Hand", "(Peril on Gorgon) Listen to Lucky Montoya's message."],
        ["Peril on Gorgon", "Completed Peril on Gorgon on any difficulty."],
        ["Pirate Radio", "Convince both Sanjar and Graham to stop broadcasting."],
        ["Poor Sportsmanship", "Hit 30 enemies in the groin during tactical time dilation."],
        ["Put Out of Their Happiness", "(Murder on Eridanos) Kill 50 Infected Humans or Parasites."],
        ["Short Circuit", "Killed 30 automechanicals with shock damage."],
        ["Silver Tongue", "Used dialog skills 30 times in conversations."],
        ["Skilled", "Raised a skill to 100."],
        ["Something's Fishy", "Obtain a Navkey and travel to Stellar Bay on Monarch."],
        ["Special P.E.T. Benefits", "Acquired Special Delivery, P.E.T., and Employee Benefits."],
        ["Spectrum Needler Buddy", "Acquired Spectrum Gatling, The Needler, and Udder Buddy."],
        ["SubLight to the End", "Complete all three of Lilya's missions: Space-Crime Continuum, The Ice Palace, and The Chimerist's Last Experiment."],
        ["Sunburn", "Skip the Hope into the sun (a low-Intelligence dialogue option)."],
        ["Supernova", "Completed The Outer Worlds on supernova difficulty."],
        ["Synthesize This", "(Peril on Gorgon) Find Olivia Ambrose's journal."],
        ["The Audience Gasps", "Learn the truth about the colony (via Minister Clarke's office computer, or from Sophia)."],
        ["The Cartographer", "Deal with the cartographer (complete 'The Demolished Woman')."],
        ["The Harder They Fall", "Killed a mega creature."],
        ["The Mystery's Afoot", "Received an invitation to Eridanos."],
        ["The Outer Worlds", "Completed The Outer Worlds on any difficulty."],
        ["The Postman", "(Peril on Gorgon) Deliver the journal to Lucien."],
        ["The Rock Or The Hard Place", "(Murder on Eridanos) Choose to either infect or cure Eridanos."],
        ["Ticket to Anywhere", "During 'Stranger in a Strange Land', slot the power regulator into your ship's engine."],
        ["Tossball All Star", "Killed 50 enemies with a tossball stick or tossball blocker."],
        ["Upgrades Available", "Improved your gear 30 times through tinkering and mods."],
        ["We All Fall Down", "Turned 100 enemies to ash with plasma damage."],
        ["Welcome to Halcyon!", "Land on Halcyon and gain control of your character for the first time (after character creation)."],
        ["Well Balanced Breakfast", "Simultaneously had bonuses for meat, carbohydrates, sugary drink, caffeine, and alcohol."],
        ["Well Dressed", "Wore 'A Nice Hat' and 'Chimaera' at the same time."],
        ["You Have Selected Regicide!", "(Murder on Eridanos) Kill the Slug Queen."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
