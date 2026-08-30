import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wingspan.json - 64 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1054490 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 64 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wingspan");

test("getPlannerData('wingspan') returns real planner data with 64 curated achievements", () => {

    assert.ok(game, "expected real planner data for wingspan");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 64);

});

test("every Wingspan achievement has a unique id from 1 to 64 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 64 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 64);
    assert.strictEqual(new Set(apinames).size, 64);

});

test("every Wingspan achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 64 Wingspan achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bird in the Hand", "Have one bird in your hand and two in your forest at the end of your turn."],
        ["A Bird’s Best Subject? Owl-jay-bra", "Have more than 30 points worth of bonus points in one game."],
        ["A Real Know-it-owl", "Unlock all birds in the bird atlas. (By playing each of them at least once)"],
        ["A Real Know-it-owl: Asia", "Play at least once all the new birds of the Wingspan: Asia Expansion."],
        ["A Real Know-it-owl: Europe", "Play at least once all the new birds of the Wingspan: European Expansion"],
        ["A Real Know-it-owl: Oceania", "Play at least once all the new birds of the Wingspan: Oceania Expansion."],
        ["All Birds, Aligned!", "Play 5 birds in one habitat with beaks pointing in the same direction."],
        ["Attempted Murder", "Play 3 ravens and/or crows in the same habitat."],
        ["Beak Performance", "Score 120 points or more in a single game."],
        ["Better Luck Nest Time", "Score at least 80 points in a game when one of your opponents has a raven in the same habitat as a Franklin's Gull or Killdeer."],
        ["Bird Brained", "Win a game against the AI."],
        ["Birdnado", "Score over 180 points in a single game."],
        ["Birds of a Feather", "Play 3 birds worth 5 or more VPs in the same habitat."],
        ["Build Two Birds with One Stone", "Play two birds in one turn."],
        ["By Our Powers Combined", "Play 5 birds with different power types/colors in one habitat."],
        ["By the Pricking of My Thumbs, Something Winged This Way Comes", "Finish your first game of Wingspan."],
        ["Clutch Performance", "Win a game with at least 35 eggs in your preserve."],
        ["Devoted to Duet", "Place more than 15 Tokens on the Duet Map in one game."],
        ["Doomsday Prepper", "Cache 15 food on birds using only the predator powers."],
        ["Double Agent", "Copy another player's bird power to move a bird to another player's preserve."],
        ["Early Bird Gets the Worm", "Be the first player to play a bird that eats worms."],
        ["Egg-streme Measures", "Have all eggs slots filled at the end of the game."],
        ["Eggs-istential crisis", "End the game with 0 eggs."],
        ["European Union", "Have five European birds in one habitat."],
        ["Fair-feather Friends", "Move a bird between habitats five times in a game."],
        ["Fly Like an Eagle", "Play 5 predators in a game."],
        ["Fly me to the Moor", "Send the Tui or Superb Lyrebird to the grassland habitat by copying a migratory bird power."],
        ["Flying International", "Send 3 birds to an opponent's preserve."],
        ["Free-for-owl", "Win a 5-player match."],
        ["Full Tuck!", "Get at least a 70 of tucked cards in your final score."],
        ["Fully Fledged", "Play 15 birds in a single game."],
        ["Global Analyst", "Score all 3 Analyst bonus cards (Forest, Grassland, and Wetland) in one game."],
        ["Here's My Number, so Caw Me Maybe", "Play one bird of each point value (0-9) in a game."],
        ["ILL EAGLE", "Succeed in 10 or more predator hunts in one game."],
        ["Investing in the Stork Market", "Score points with the Fishery Manager and Wetland Scientist cards in the same game."],
        ["Jackpot Cache", "Use a push-your-luck bird to cache 15+ food on it."],
        ["Like Your Birds, But Better", "Score an opponent’s bonus card to earn more points from it than them."],
        ["Mellow Yellow", "Win a game with 5 or more GAME END powers."],
        ["Money for Nothin' and Chicks for Free", "Lay at least 10 eggs using pink powers in a single game."],
        ["Nectar Jackpot", "End the game with EXACTLY seven nectar spent in each habitat (777)."],
        ["Nectar of Life", "Win 1st place in all 3 habitats when scoring points for nectar spent."],
        ["Once Bittern, Twice Shy", "Win a game with a score of at least 90 points with no more than 1 bird in your Wetland."],
        ["Owl Hands On Deck", "Activate 5 predator powers at the end of a single round using the Oriental Bay-Owl."],
        ["Owl of a Sudden", "Play three or more birds in a single turn."],
        ["Passenger 57", "Play 16 birds in a single game."],
        ["Pheasant Diversion", "Win against the Automa on Hard difficulty."],
        ["Quacking under Pressure", "Finish a game having a lower point total than during the game."],
        ["Rat Bird", "Use three cards to pay for bird rather than rats and tuck all three."],
        ["Robin Crow", "Steal 10 food from your opponents' supplies in a single game."],
        ["Swan Song, Solo", "In Duet Mode, place no tokens on bonus spaces and win the game."],
        ["Sweet Tooth", "Play five nectar-eating birds in a single habitat."],
        ["Tailored Fit", "Lay 15 eggs at once with the Common Tailorbird."],
        ["The Eagle Has Landed", "Finish the Tutorial"],
        ["The Tuckinator", "Tuck at least 50 cards under one bird."],
        ["There's always a bigger bird!", "Play a bird on top of another bird whose wingspan is larger than the previous one. "],
        ["This Present Caw-st a Fortune", "Have at least 60 points worth of birds at the end of one game."],
        ["To Egg-Finity and Beyond!", "End the game with at least 3 of your birds having gone over their egg nest limit."],
        ["Toucan of My Appreciation", "Give other players food tokens on at least 5 turns in one game."],
        ["Unflappable", "Play 3 flightless birds in one game."],
        ["Wait, one more thing!", "Trigger three or more end of round powers in one round."],
        ["Wake Me up Before You Dodo", "Play 5 bonus card birds in the same game. (Birds whose powers grant bonus cards are generally threatened/vulnerable/endangered species, or at least have a subspecies that is.)"],
        ["We're SO Back", "Win a game while scoring 21 points or more on the \"Endangered Species Protector\" bonus card."],
        ["What the Flock", "Have more than 25 cards tucked under one bird in a single game."],
        ["Wild Goose Chase", "Score at least 16 points from the Omnivore bonus card."],
    ];

    assert.strictEqual(officialAchievements.length, 64, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
