import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/house-flipper.json - 96 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 613100 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("house-flipper");

test("getPlannerData('house-flipper') returns real planner data with 96 curated achievements", () => {

    assert.ok(game, "expected real planner data for house-flipper");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 96);

});

test("every House Flipper achievement has a unique id from 1 to 96 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 96 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 96);
    assert.strictEqual(new Set(apinames).size, 96);

});

test("every House Flipper achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 96 House Flipper achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["5 Flipper stars", "Cook a set of dishes using the restaurant's universal cooker."],
        ["A journey full of fluffiness", "Morgan is proud of you."],
        ["A long day in the countryside", "Hard work pays off!"],
        ["According to the rules.", "Blue flower, red thorns…"],
        ["All the possibilities!", "On the other hand…"],
        ["Alpha Male", "What happens in the cave stays in the cave."],
        ["Appetite comes with eating", "Complete your first Dine Out DLC job."],
        ["Artistic soul", "Every child is an artist. The challenge lies in remaining an artist throughout one's adult life."],
        ["Beach please", "Move your main office to a beachfront property, such as the Stilt House (Coastal DLC)."],
        ["Beginner gardener", "It's time to broaden my qualifications!"],
        ["Call me Edward.", "You can't hide from my mover!"],
        ["Captain Hook", "Hope you're not afraid of heights!"],
        ["Car mechanic", "You'll need a car mechanic."],
        ["Caretaker", "Feels like the beginning of something special."],
        ["Chimney sweeper", "Can you hear it?"],
        ["Competitor", "Look at my garden, it's amazing!"],
        ["Do it ASAP", "Complete a job in less than 1 minute."],
        ["Don Quixote", "Is this hammer even real?"],
        ["Don’t hold your horses", "Ride like the wind!"],
        ["Don't judge a restaurant by its sign", "Buy, place, and label a restaurant sign."],
        ["Doomsday Prepper", "Better to prep 10 years too early than 10 minutes too late!"],
        ["Down to the last penny", "Care to do something more with all that's left?"],
        ["Drone master", "Making photos, watering, spraying… Everything on the fly!"],
        ["Estate agent", "Sell 20 houses."],
        ["Family man", "Family isn't just an important thing, it's everything."],
        ["First money", "Complete first job!"],
        ["Flavours Hunter", "Find all 11 Dine Out DLC recipes."],
        ["Free spirit", "Finally, nothing limits your imagination!"],
        ["Fresh, clean, and dry", "Now your pup can get all dirty again."],
        ["Fully equipped.", "Haven't you forgotten about a place for a few flowers between this sofa and the carousel?"],
        ["Game over", "Finish the game."],
        ["Gardener", "I feel this gardener aura inside of me…"],
        ["Geek", "I'm not a genius, but I am smarter than you are."],
        ["Give it some fresh air", "Don't forget to take it out of the rain!"],
        ["Greta's touch", "This place could use a woman's touch!"],
        ["Hardworking farmer", "Your efforts have yielded a harvest."],
        ["Homer's house", "I will not click on the map."],
        ["I am rich", "Purchase one of the houses from Luxury DLC"],
        ["I fixed it!", "All it takes is a good smack with a hammer"],
        ["I hope there's no cellar", "Now, who’s in for a pool party?"],
        ["I'm a Belieber", "Fashion is my armor against the realities of everyday life."],
        ["It's playtime!", "The best part of the day."],
        ["Junior estate agent", "Sell 10 houses."],
        ["Just don't get lost!", "Fancy an afternoon snack with a Minotaur?"],
        ["Just enough", "Age is just a number. Live life fully, no matter how old you are."],
        ["Knock, knock", "I am the one who knocks."],
        ["Land in hot water", "During the 'Wine and Dine' job, build an entresol upstairs and fall through it while confirming the changes."],
        ["Let's go swimming.", "Bath time?"],
        ["Luxury is always in style", "Finish all jobs in Moonrise Bay"],
        ["Millionaire", "Earn your first million euro."],
        ["Modern solutions", "Can't have a leak when there are no pipes!"],
        ["Mr. Mystery", "Bra off, party on!"],
        ["Music to my ears", "Your house, your rules, your radio."],
        ["Negotiator", "Successfully negotiate a sale earning no less than 50,000 Euro."],
        ["Old McDonald", "Is there an animal you haven’t got?"],
        ["Oliver's way", "Now we're talking!"],
        ["Panorama", "Take a picture of the city from the Cliff House"],
        ["Perfect Layout", "Feel Shi… Fence Shi… Well, I tried."],
        ["Perfectionist", "Complete every job all the way."],
        ["Picture perfect", "It's hard to get a good photo when they move around so quickly."],
        ["Pro-creative", "You know, when you're in love, you can't get any sleep… because of your kids screaming around the clock!"],
        ["Property manager", "Rent out 5 houses using the rental system."],
        ["Real estate agent", "Sell 50 houses."],
        ["Renovator", "Fix them all!"],
        ["Step up your game", "Did someone call a stair specialist?"],
        ["Strongman", "Do you even lift?"],
        ["Table, Deck Yourself!", "Deck 10 restaurant tables with cutlery and glassware."],
        ["Talented roofer", "Show your true colors!"],
        ["Tap-tap-tap...", "Can you hear those little paws behind you?"],
        ["Teamwork", "A helping paw is never a bad thing, eh?"],
        ["The bigger the better", "House extensions are just too much fun!"],
        ["The cherry on top", "Complete all 10 Dine Out DLC jobs."],
        ["The choice is yours", "Will you follow your client's dream?"],
        ["The floor is your canvas", "Now, that's not a happy little accident."],
        ["The furnisher", "One man’s trash is another man’s treasure"],
        ["The Survivalist", "Remember: when disaster strikes, the time to prepare has passed."],
        ["The Tactical Prepper", "Always be prepared for the unknown."],
        ["The way to one's heart…", "Complete any 5 Dine Out DLC jobs."],
        ["The Wi-Fi password, anyone?", "The next step is to hire a butler"],
        ["They grow up so fast...", "It feels like we've met yesterday!"],
        ["They're all in one basket", "Still looking for a golden egg?"],
        ["This belongs in a museum", "Careful now, it’s obviously a family heirloom!"],
        ["Time warp", "Let's do the time warp again!"],
        ["Truly open space", "Must-have: lots of space."],
        ["Vegan", "Tell the meatatarians my last word is… Carrot…"],
        ["Versatile caretaker", "You're not gonna stop here, are you?"],
        ["Wall Street Shark", "It's business. Leave your feelings at the door."],
        ["Welcome to Cozy Village", "Hope you enjoy the countryside."],
        ["Whack-A-Mole", "Your time has come, Mr. Mole…"],
        ["What's in the box?", "Tons of cuteness to say the least!"],
        ["Whole family", "Must-have: room for family gatherings."],
        ["Why live on bread and water?", "Earn roughly 10,000-15,000 in total rental income."],
        ["Windows update", "Replace 10 windows"],
        ["Worth every penny", "Mind over matter. Money over all."],
        ["You are too creative!", "If we allowed you to do this, the game would crash"],
        ["You're doing it wrong.", "Kill a cockroach with a hammer."],
    ];

    assert.strictEqual(officialAchievements.length, 96, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
