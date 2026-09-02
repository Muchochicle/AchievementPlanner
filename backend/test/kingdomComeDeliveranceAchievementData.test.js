import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kingdom-come-deliverance.json - 82 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 379430 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kingdom-come-deliverance");

test("getPlannerData('kingdom-come-deliverance') returns real planner data with 82 curated achievements", () => {

    assert.ok(game, "expected real planner data for kingdom-come-deliverance");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 82);

});

test("every Kingdom Come: Deliverance achievement has a unique id from 1 to 82 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 82 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 82);
    assert.strictEqual(new Set(apinames).size, 82);

});

test("every Kingdom Come: Deliverance achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 82 Kingdom Come: Deliverance achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["'Tis but a scratch", "Finish the game in Hardcore Mode with all negative perks."],
        ["Alcoholic", "Become addicted to alcohol."],
        ["Angel of Mercy", "Successfully defend Johanka against the heresy charge in The Madonna of Sasau trial."],
        ["Anorectic", "Starve for three days."],
        ["Arena Master", "Get a complete set of armour from the Rattay tourney."],
        ["Awakening", "Join Sir Radzig's garrison."],
        ["Bad Girl", "Fail all 5 morning chores in the Ordinary Routine quest, playing as Theresa."],
        ["Bad Trip ", "Join the ritual during the Playing with the Devil quest."],
        ["Bailiff", "Ensure the renewal of Pribyslavitz."],
        ["Bard", "Level up Speech to maximum."],
        ["Bastard", "Find out who your real father is."],
        ["Blacksmith's Son", "Complete the first quest."],
        ["Bookworm", "Read twenty books."],
        ["Buddy", "Save Lord Capon from the Cumans."],
        ["Casanova", "Court Lady Stephanie in the At Your Service, My Lady side quest."],
        ["Cavalier", "Save Theresa from the Cumans during the escape from Skalitz."],
        ["Chivalrous Soul", "Persuade Kuno to attack the mill right away in the Uninvited Guests quest."],
        ["Christian Burial", "Bury the charcoal-burner Lev's remains in Rattay during the No Rest for the Wicked quest."],
        ["Cleric's Pet", "Report every wrongdoing in the province to the Inquisitor after completing the Wicket Gate quest."],
        ["Completionist", "Complete all quests."],
        ["Conqueror", "Conquer the enemy camp at Vranik."],
        ["Convict", "Spend three days in prison."],
        ["David Horak", "Collect 10,000 herbs."],
        ["Death by Splinter", "Beat Henry in the friendly sparring match during the Ordinary Routine quest, playing as Theresa."],
        ["Edward Kelly", "Brew fifteen types of potion"],
        ["Fatso", "Be stuffed to bursting for two days."],
        ["Fighter", "Carry out 100 combos in combat."],
        ["Firestarter", "Get jailed in Skalitz during the game's very first quest."],
        ["Freud", "Find out about Erik's past."],
        ["Friends without Benefits", "Invite Fritz and Matthew to live in Pribyslavitz."],
        ["Full House Sinner", "Have on your conscience every sin Johanka can think of."],
        ["Gambler", "Win 1,000 Groschen in the dice minigame."],
        ["Game Over", "Return the Ring of Bacchus to Kuno in the Ring of Bacchus activity."],
        ["Ginger", "Save Ginger from the bandits."],
        ["Haggler", "Save 2000 Groschen by haggling."],
        ["Hardcore Henry", "Finish the game in Hardcore Mode."],
        ["Hunter", "Bag fifty game animals."],
        ["I Can Quit Anytime", "Win the dice tournament in the Game of Throws quest."],
        ["Infernal Justice", "The punishment fits the crime."],
        ["Insomniac", "Don't sleep for two days and nights."],
        ["Judas", "Betray your friends in the Gallows Brothers quest."],
        ["King Charming", "Be popular in every town and village."],
        ["Kingdom Did Not Come", "Die for the first time while playing in Hardcore Mode."],
        ["Knightrider", "Win the Talmberg horse race."],
        ["Ledetchko Revenant", "Complete the main objectives, the rotten-egg prank, and the itinerant-haunting in the No Rest for the Wicked quest."],
        ["Level Cap", "Reach maximum level."],
        ["Like a Ghost", "Recover Pavel's treasure without being discovered."],
        ["Lord Capon's Ghost", "Steal the necklace in the Game of Throws quest without winning the tournament."],
        ["Lost Trinket", "Let the Ring of Bacchus be stolen from you in your sleep instead of handing it to a player."],
        ["Master Huntsman", "Become the Talmberg Huntsman."],
        ["McLovin", "Court Theresa by completing the Courtship side quest."],
        ["Mercenary's Honour", "Remind Kuno of his promise in the What Price Honour? quest (after freeing Jakey and warning him about the bribe), or pass a high Speech check instead."],
        ["Merciful", "Complete the main quest line without killing anyone, except for Runt."],
        ["Monk", "Become a monk."],
        ["Not-so-Christian Burial", "Bury the charcoal-burner Lev's remains near Ledetchko during the No Rest for the Wicked quest."],
        ["Perfectionist", "Make 2,000 Groschen a day from Pribyslavitz."],
        ["Pilgrim", "Find all wayside shrines and conciliatory crosses."],
        ["Pinky Promise", "Untie Jakey and let him leave during the Thirty Pieces quest."],
        ["Plague Doctor", "Heal every sick person in Merhojed during the Pestilence quest."],
        ["Ranger", "Walk more than 50 Km."],
        ["Robber Baron", "Complete the Robber Baron side quest."],
        ["Runt", "Kill Runt."],
        ["Saviour", "Rescue all 5 survivors during the Angel of Mercy quest."],
        ["Scrooge", "Hoard 5,000 Groschen."],
        ["Serial Killer", "Kill 200 people."],
        ["Sinner", "Get drunk with Father Godwin at the Uzhitz tavern."],
        ["Sniper", "Kill 50 enemies with headshots. "],
        ["Spoilsport", "Sabotage all three executions in the Money for Old Rope quest."],
        ["Stealth Killer", "Kill twenty enemies by stealth"],
        ["Talmberger", "Complete every optional objective in the Siege quest."],
        ["The End", "Complete the main story line."],
        ["Thief", "Steal things with a total value of 30,000 Groschen."],
        ["Torturer", "Leave Jakey tied up for 12 hours during the Thirty Pieces quest."],
        ["Tracker", "Complete the 'try and find traces of the attackers' objective in the Bad Blood quest."],
        ["Traveller", "Discover all locations on the map."],
        ["Trial-and-Error", "Renew the whole of Pribyslavitz without Henry ever having learned to read."],
        ["True Friend", "Help Sir Hans Capon succeed in the Honeyed Words quest."],
        ["Virgin", "Stay celibate and complete the entire game without any romantic or sexual encounter."],
        ["Voyeur", "See what Henslin has in his braies without being observed."],
        ["Wingman", "Ensure Capon's success in the Honeyed Words quest without him getting caught."],
        ["Woman's Lot", "Complete Theresa's story."],
        ["You had one job!", "Pass out from drinking with Tailor Ambrose during their conversation, playing as Theresa."],
    ];

    assert.strictEqual(officialAchievements.length, 82, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
