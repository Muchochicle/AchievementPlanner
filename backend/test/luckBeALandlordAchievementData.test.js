import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/luck-be-a-landlord.json - 186 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1404850 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 186 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("luck-be-a-landlord");

test("getPlannerData('luck-be-a-landlord') returns real planner data with 186 curated achievements", () => {

    assert.ok(game, "expected real planner data for luck-be-a-landlord");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 186);

});

test("every Luck be a Landlord achievement has a unique id from 1 to 186 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 186 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 186);
    assert.strictEqual(new Set(apinames).size, 186);

});

test("every Luck be a Landlord achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 186 Luck be a Landlord achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["10 Wins", "Win 10 games."],
        ["100 Wins", "Win 100 games."],
        ["25 Wins", "Win 25 games."],
        ["250 Wins", "Win 250 games."],
        ["5 Wins", "Win 5 games."],
        ["50 Wins", "Win 50 games."],
        ["500 Wins", "Win 500 games."],
        ["777 Wins", "Win 777 games."],
        ["Amethyst", "Increase an Amethyst's value 20 or more times before rent payment #12 is due."],
        ["Anchor", "Have a Diver and Pirate share an Anchor."],
        ["Apartment Floor 1", "Win a game on floor 1."],
        ["Apartment Floor 10", "Win a game on floor 10."],
        ["Apartment Floor 11", "Win a game on floor 11."],
        ["Apartment Floor 12", "Win a game on floor 12."],
        ["Apartment Floor 13", "Win a game on floor 13."],
        ["Apartment Floor 14", "Win a game on floor 14."],
        ["Apartment Floor 15", "Win a game on floor 15."],
        ["Apartment Floor 16", "Win a game on floor 16."],
        ["Apartment Floor 17", "Win a game on floor 17."],
        ["Apartment Floor 18", "Win a game on floor 18."],
        ["Apartment Floor 19", "Win a game on floor 19."],
        ["Apartment Floor 2", "Win a game on floor 2."],
        ["Apartment Floor 20", "Win a game on floor 20."],
        ["Apartment Floor 3", "Win a game on floor 3."],
        ["Apartment Floor 4", "Win a game on floor 4."],
        ["Apartment Floor 5", "Win a game on floor 5."],
        ["Apartment Floor 6", "Win a game on floor 6."],
        ["Apartment Floor 7", "Win a game on floor 7."],
        ["Apartment Floor 8", "Win a game on floor 8."],
        ["Apartment Floor 9", "Win a game on floor 9."],
        ["Apple", "Have 2 Seeds grow into 2 Apples during a spin."],
        ["Banana", "Have a Banana add a Banana Peel that destroys a Thief during a spin."],
        ["Banana Peel", "Have a Banana Peel destroy 2 or more Thieves during a spin."],
        ["Bar of Soap", "Have a Bar of Soap add 4 or more Bubbles before being destroyed."],
        ["Bartender", "Have a Bartender add a Martini."],
        ["Bear", "Have 3 or more Bears destroy the same Honey."],
        ["Beastmaster", "Have a Beastmaster increase the value of 5 or more symbols during a spin."],
        ["Bee", "Have a Bee give 6 or more coins."],
        ["Beehive", "Have a Beehive add a Honey that is destroyed by a Bear during the same spin."],
        ["Beer", "Have a Dwarf and a Pirate share a Beer."],
        ["Big Ore", "Have a Big Ore add 2 Rare symbols (without the help of X-ray Machine)."],
        ["Big Urn", "Destroy 2 or more Big Urns during a spin."],
        ["Billionaire", "Guillotine 500 Billionaires across all games."],
        ["Bounty Hunter", "Have a Bounty Hunter destroy 2 or more Thieves during a spin."],
        ["Breakfast", "Have 2 or more Pool Ball Essences."],
        ["Bronze Arrow", "Have 3 or more Bronze Arrows point to 0 symbols during a spin."],
        ["Bubble", "Have 3 or more Bubbles be destroyed during a spin."],
        ["Buffing Capsule", "Have a Buffing Capsule adjacent to 2 or more Amethysts or Pears during a spin."],
        ["Candy", "Have 8 or more Candy."],
        ["Card Shark", "Have a Card Shark make 5 or more symbols Wildcards during a spin."],
        ["Cat", "Have a Cat give 999,999,999 coins or more."],
        ["Cheese", "Have a Cheese adjacent to Milk, Omelette, and Egg during a spin."],
        ["Chef", "Have a Chef increase the value of 5 or more symbols during a spin."],
        ["Chemical Seven", "Destroy 3 or more Chemical Sevens during a spin."],
        ["Cherry", "Have 3 or more Cherries adjacent to each other."],
        ["Chick", "Have a Chick not grow into a Chicken for 12 or more spins."],
        ["Chicken", "Have a Chicken add an Egg and Golden Egg during a spin."],
        ["Clubs", "Have 5 or more Clubs."],
        ["Coal", "Have 2 Coal transform into a Diamond before rent payment #4 is due (without the help of Time Machine Essence)."],
        ["Coconut", "Have a Monkey destroy a Coconut and destroy 2 Coconut Halves during a spin."],
        ["Coconut Half", "Have Mrs. Fruit and a Monkey share a Coconut Half."],
        ["Coin", "Have a Coin give 20 or more coins."],
        ["Comedian", "Have a Comedian be destroyed by General Zaroff."],
        ["Cow", "Have a Cow add a Milk that is destroyed by a Cat during the same spin."],
        ["Crab", "Have 5 Crabs in a row."],
        ["Credits", "Visit the Credits page."],
        ["Crow", "Remove a Crow 1 spin before it would give -3 coins."],
        ["Cultist", "Have 6 or more Cultists."],
        ["Dame", "Have a Dame destroy a Martini while adjacent to a Diamond."],
        ["Diamond", "Have 5 or more Diamonds."],
        ["Diamonds", "Have 5 or more Diamonds (not the gem)."],
        ["Diver", "Have a Diver remove 20 or more symbols before rent payment #12 is due."],
        ["Dog", "Pet the Dog for 1 minute or more."],
        ["Dove", "Have a Dove prevent 20 or more destructions before rent payment #12 is due."],
        ["Dwarf", "Have a Dwarf destroy a symbol that has its value increased afterwards."],
        ["Egg", "Have an Egg transform into a Chick, grow into a Chicken, and lay an Egg during a spin."],
        ["Eldritch Creature", "Add a symbol then immediately remove it to increase the value of an Eldritch Creature."],
        ["Emerald", "Add 2 or more Emeralds during a spin."],
        ["Essence Capsule", "Lose the game during a spin where an Essence Capsule is destroyed."],
        ["Essences", "Unlock Essences."],
        ["Farmer", "Have a Farmer adjacent to a Seed that grows into a Rare symbol."],
        ["Five-Sided Die", "Have a Five-Sided Die destroy 2 or more Gamblers during a spin."],
        ["Flower", "Have a Flower give 19,073,486,328,125 or more coins."],
        ["Frozen Fossil", "Remove a symbol to make a Frozen Fossil be destroyed faster."],
        ["Gambler", "Have a Gambler give 200 or more coins when destroyed before rent payment #12 is due."],
        ["General Zaroff", "Have General Zaroff destroy 1924 humans across all games."],
        ["Geologist", "Have a Geologist destroy 20 or more symbols before rent payment #12 is due."],
        ["Golden Arrow", "Have 3 or more Golden Arrows point to 0 symbols during a spin."],
        ["Golden Egg", "Have a Golden Egg adjacent to an Egg."],
        ["Goldfish", "Have a Goldfish and Toddler share a Bubble."],
        ["Golem", "Have a Golem add a Spirit."],
        ["Goose", "Have a Goose lay a Golden Egg before rent payment #1 is due."],
        ["Guillotine Essence", "Be destroyed by Guillotine Essence."],
        ["Guillotine Essence (10)", "Be destroyed by Guillotine Essence 10 times."],
        ["Guillotine Essence (2)", "Be destroyed by Guillotine Essence 2 times."],
        ["Guillotine Essence (25)", "Be destroyed by Guillotine Essence 25 times."],
        ["Guillotine Essence (3)", "Be destroyed by Guillotine Essence 3 times."],
        ["Guillotine Essence (4)", "Be destroyed by Guillotine Essence 4 times."],
        ["Guillotine Essence (5)", "Be destroyed by Guillotine Essence 5 times."],
        ["Guillotine Essence (50)", "Be destroyed by Guillotine Essence 50 times."],
        ["Guillotine Essence (77)", "Be destroyed by Guillotine Essence 77 times."],
        ["Hearts", "Have 5 or more Hearts."],
        ["Hex of Destruction", "Have a Hex of Destruction trigger 3 spins in a row."],
        ["Hex of Draining", "Have a Hex of Draining increase the value of a symbol."],
        ["Hex of Emptiness", "Have a Hex of Emptiness trigger 3 spins in a row."],
        ["Hex of Hoarding", "Have a Hex of Hoarding trigger 3 spins in a row."],
        ["Hex of Midas", "Have a Hex of Midas trigger 3 spins in a row."],
        ["Hex of Tedium", "Add a Hex of Tedium from the choice after destroying a Tedium Capsule."],
        ["Hex of Thievery", "Have a Hex of Thievery trigger 3 spins in a row."],
        ["Highlander", "Add 10 tooltips from the same Highlander."],
        ["Honey", "Have a Honey give 20 or more coins."],
        ["Hooligan", "Have a Hooligan destroy 3 or more symbols during a spin."],
        ["Hustling Capsule", "Lose the game during a spin where a Hustling Capsule is destroyed."],
        ["Item Capsule", "Have an Item Capsule add a Pool Ball."],
        ["Jellyfish", "Remove a Jellyfish with a Removal Token."],
        ["Joker", "Have a Joker increase the value of 5 or more symbols during a spin."],
        ["Key", "Have a Key destroy 2 or more symbols during a spin."],
        ["King Midas", "Have King Midas adjacent to a Golden Egg."],
        ["Landlord Defeated", "Defeat your Landlord."],
        ["Light Bulb", "Have a Light Bulb increase the value of 5 or more symbols during a spin."],
        ["Lockbox", "Destroy 5 Lockboxes before rent payment #12 is due."],
        ["Lucky Capsule", "Add a Common symbol from the choice after destroying a Lucky Capsule."],
        ["Magic Key", "Have a Magic Key increase the value of a symbol that is destroyed by a Key."],
        ["Magpie", "Be 1 coin short of affording rent during a spin where a Magpie gives less than 0 coins."],
        ["Martini", "Have a Martini be destroyed while adjacent to a Dwarf."],
        ["Matryoshka Doll", "Destroy a Matryoshka Doll before it destroys itself."],
        ["Mega Chest", "Destroy 2 Mega Chests before rent payment #12 is due."],
        ["Midas Bomb", "Have a Midas Bomb destroy more than 18 symbols during a spin."],
        ["Milk", "Have 2 or more Cats share a Milk."],
        ["Mine", "Have 2 or more Mining Picks before rent payment #12 is due."],
        ["Miner", "Have a Beer be destroyed while adjacent to a Miner."],
        ["Monkey", "Have a Monkey destroy a symbol that has its value increased afterwards."],
        ["Moon", "Destroy a Moon."],
        ["Mouse", "Have a Mouse destroy a Cheese while adjacent to a Ninja."],
        ["Mrs. Fruit", "Have Mrs. Fruit destroy 20 or more symbols before rent payment #12 is due."],
        ["Ninja", "Have a Ninja in your inventory but not appear for 3 spins in a row."],
        ["Omelette", "Have an Omelette give 20 or more coins."],
        ["Orange", "Have Mrs. Fruit and a Pirate share an Orange."],
        ["Ore", "Have an Ore add a Diamond (without the help of X-ray Machine Essence)."],
        ["Owl", "Have an Owl give 12 or more coins."],
        ["Oyster", "Have an Oyster add 2 Pearls during a spin."],
        ["Peach", "Have Mrs. Fruit destroy a Peach that adds a Seed that grows into a Peach."],
        ["Pear", "Increase a Pear's value 20 or more times before rent payment #12 is due."],
        ["Pearl", "Have a Diver and a Geologist share a Pearl."],
        ["Piñata", "Destroy a Piñata before rent payment #2 is due."],
        ["Pirate", "Have a Pirate destroy 20 or more symbols before rent payment #12 is due."],
        ["Present", "Have a Present be destroyed 1 spin before the holidays."],
        ["Pufferfish", "Have a Pufferfish adjacent to a Bubble that is destroyed during a spin."],
        ["Rabbit", "Have Rabbits do 1,000 binkies across all games."],
        ["Rabbit Fluff", "Shed 3 pounds (1.37kg) of Rabbit Fluff across all games."],
        ["Rain", "Have a Rain adjacent to a Seed that grows into a Flower."],
        ["Removal Capsule", "Have a Removal Capsule not be destroyed 3 or more spins after adding it."],
        ["Reroll Capsule", "Have a Reroll Capsule not be destroyed 3 or more spins after adding it."],
        ["Robin Hood", "Have Robin Hood destroy an Apple while it's directly above a Toddler."],
        ["Ruby", "Add 2 or more Rubies during a spin."],
        ["Safe", "Destroy 4 Safes before rent payment #12 is due."],
        ["Sand Dollar", "Have a Sand Dollar give 40 or more coins when removed with a Removal Token."],
        ["Sapphire", "Have a Big Ore add 2 Sapphires during a spin."],
        ["Seed", "Have a Seed grow into a Watermelon (without the help of Fertilizer Essence)."],
        ["Shiny Pebble", "Have a Big Ore add 2 Shiny Pebbles during a spin."],
        ["Silver Arrow", "Have 3 or more Silver Arrows point to 0 symbols during a spin."],
        ["Sloth", "Have a Sloth adjacent to a Snail and Turtle."],
        ["Snail", "Have a Snail give 20 coins or more."],
        ["Spades", "Have 5 or more Spades."],
        ["Spirit", "Have 10 or more Spirits."],
        ["Strawberry", "Have 2 Seeds grow into 2 Strawberries during a spin."],
        ["Sun", "Have 3 or more Suns adjacent to the same Flower."],
        ["Target", "Have a Target be destroyed by a symbol that isn't adjacent to it."],
        ["Tedium Capsule", "Have a Tedium Capsule and Lucky Capsule be destroyed during a spin."],
        ["Thief", "Have a Thief give 500 or more coins when destroyed before rent payment #12 is due."],
        ["Three-Sided Die", "Have a Three-Sided Die destroy 2 or more Gamblers during a spin."],
        ["Time Capsule", "Have a Time Capsule add a different capsule."],
        ["Toddler", "Have a Toddler destroy 6 or more symbols during a spin."],
        ["Tomb", "Have a Tomb add 5 or more Spirits during a spin (without the help of Grave Robber Essence)."],
        ["Treasure Chest", "Destroy 3 Treasure Chests before rent payment #12 is due."],
        ["Turtle", "Have a Turtle appear in the leftmost column during a spin, then appear in the rightmost column during the next spin."],
        ["Urn", "Destroy 2 or more Urns during a spin."],
        ["Void Creature", "Have a Beastmaster adjacent to a Void Creature that adds a Spirit."],
        ["Void Fruit", "Have a Seed grow into a Void Fruit that isn't destroyed during the same spin."],
        ["Void Stone", "Have a Void Stone give 50 coins or more."],
        ["Watermelon", "Have 5 or more Watermelons."],
        ["Wealthy Capsule", "Have a Wealthy Capsule not be destroyed 3 or more spins after adding it."],
        ["Wildcard", "Have 3 Wildcards each give 1,000,000 coins or more."],
        ["Wine", "Have 50 gallons (189.3 litres) of Beer and Wine be consumed."],
        ["Witch", "Have an Eldritch Creature destroy a Witch."],
        ["Wolf", "Have 3 or more Wolves adjacent to the same Moon."],
    ];

    assert.strictEqual(officialAchievements.length, 186, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
