import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deadly-premonition-directors-cut.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 247660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("deadly-premonition-directors-cut");

test("getPlannerData('deadly-premonition-directors-cut') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for deadly-premonition-directors-cut");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Deadly Premonition: The Director's Cut achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Deadly Premonition: The Director's Cut achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Deadly Premonition: The Director's Cut achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["7 Bones", "A dog took seven [Bones] from the graveyard. Retrieve them for Brian."],
        ["A Return to Better Things", "Olivia asked you to deliver a letter about her true feelings. Deliver [Letter from Olivia] to Nick."],
        ["All Achievements Unlocked", "Zach, it's over, all finished. It's time for you to leave town.  Are you ready to go?"],
        ["Amateur Collector", "Find 16 hidden trading cards in  Greenvale."],
        ["Anna's Dairy", "Use [Anna's Key] to go into her room and find [Anna's Diary]."],
        ["Another Nice Try Cooking", "Emily needs some \"Vegetables that become sweet when fried\" for her cooking. Find some and give them to her."],
        ["Beginner Collector", "Wesley is a trading card collector. He's asked you to find some cards.  Find eight cards and show them to Wesley. "],
        ["Benjamin Franklin", "Give Jack a [$100 Bribe]. He'll give some valuable info when the total  reaches over $1000."],
        ["Big Bag", "Use the key to the back door of the Diner to get into the kitchen and search the place."],
        ["Cold Pot 1", "Sigourney is worried that her pot will get cold.  You must take her home quickly."],
        ["Cold Pot 2", "Sigourney is worried that her pot will get cold.  You must take her home quickly."],
        ["Cold Pot 3", "Sigourney is worried that her pot will get cold.  You must take her home quickly."],
        ["Cold Pot 4", "Sigourney is worried that her pot will get cold.  You must take her home quickly."],
        ["Cold Pot 5", "Sigourney is worried that her pot will get cold.  You must take her home quickly."],
        ["Delivery Man Q", "Show Becky the Diary found in Anna's room and tell her that \"Delivery Man Q is in trouble\". Then sneak into Quint's  trailer to find proof that he is acting  as a delivery man."],
        ["Engagement Ring", "Quint knows something but isn't  talking. Get him to talk by handing him Becky's [Engagement Ring]."],
        ["Episode 1 CLEARED", "George, the perpetrator is just like  you. He's passionate about women. He's a passionate kisser. This was a \"kiss of death\"."],
        ["Episode 2 (part 1) CLEARED", "So Becky is Miss Stiletto Heel. And she gave the locket to the twins... Must be the \"special secret\" Lilly told  us about, Zach."],
        ["Episode 2 (part 2) CLEARED", "Zach, Diane has become the third  victim of our killer. And nada from questioning Nick... Nothing. Got no new leads from questioning Nick."],
        ["Episode 3 CLEARED", "Zach, OK. So it's not bonus footage, it's still part of the main feature. The perpetrator is exactly who  I thought it was."],
        ["Episode 4 CLEARED", "Ah, right, he doesn't have a \"tattoo\"  on his back. But there is a \"pattern\" there."],
        ["Episode 5 CLEARED", "Zach, I need you to pray with me. Pray that things have not gone too far. All we can do is go to the location written in Kaysen's letter."],
        ["Episode 6 CLEARED", "My name is York. Me and you,  we'll always be together. OK, Zach? I'm you, and you are me. Now, give me your hand."],
        ["Episode 7 CLEARED", "Then this is goodbye, Zach. Thank you for everything. "],
        ["Gas Tank Parts", "Find the [Gas Tank Parts] in the Junk Yard. The General will use them to increase the performance of your car."],
        ["Ghost House Treasure", "Use the key you received from Brian and search his house."],
        ["Great Collector", "Find 48 hidden trading cards in Greenvale."],
        ["Greenvale Trivia", "Harry will ask you mulitple choice questions regarding Greenvale. Answer three in a row correctly."],
        ["Guardian of the Art Gallery", "Find the [The Girl in the Woods] painting hidden in the gallery and deliver it to Diane. "],
        ["High Gear Parts", "Find the [High Gear Parts] in the Junk Yard. The General will use them to increase the performance of your car."],
        ["Incomplete Treasure", "Michael lost a very important item that he received from Harry.  Find it and hand it back to him."],
        ["Legendary Tabatha", "Borrow the [Rod of Legends] from Jim and catch the legendary fish named Tabitha."],
        ["Lost Arnold", "George lost his favorite dumbbell named [Arnold].  Find it and give it to him."],
        ["Low Gear Parts", "Find the [Low Gear Parts] in the Junk Yard. The General will use them to increase the performance of your car."],
        ["Map to Psychic Spot A", "Go to the psychic point on the map you bought at the Milk Barn."],
        ["Map to Psychic Spot B", "Go to the psychic point on the map  you bought at the Milk Barn"],
        ["Map to Psychic Spot C", "Go to the psychic point on the map  you bought at the Milk Barn."],
        ["Medical Studies", "Fiona will ask you multiple choice  questions regarding medicine. Answer three in a row correctly."],
        ["Memorable Cooking", "Emily needs: \"Salty and Crunchy items\" \"2 colored and soft items\" \"Yellow Sauce\" for her cooking.  Find these items and give them to her."],
        ["Memories of Anna", "Find Carol in Anna's Woods and give her the [Out of Focus Picture] received from Isaach and Isaiah."],
        ["Nameless Flower", "George wants to give his sick mother flowers; a special flower that only blossoms when it rains.  Find this [Flower with No Name] and give it to him."],
        ["Nice Try Cooking", "Emily needs some \"Fermented Dairy  Products\" for her cooking. Find some and give it to her."],
        ["Nick's Letter", "Nick asked you to deliver a letter he wrote while in jail. Deliver [Letter from Nick] to Olivia."],
        ["Normal Collector", "Find 32 hidden trading cards in Greenvale."],
        ["Part Time Job 1", "You are asked to clean the Milk Barn Storage Room by pushing the boxes around."],
        ["Part Time Job 2", "You are asked to clean the Milk Barn Storage Room by pushing the boxes around."],
        ["Part Time Job 3", "You are asked to clean the Milk Barn Storage Room by pushing the boxes around."],
        ["Periodic Riddle", "Ushah has no idea what the answer is to Fiona's riddle. Figure it out and tell Ushah what the answer is."],
        ["Prologue CLEARED", "FBI Special Agent  Francis York Morgan. Please, just call me York."],
        ["Pure and Beautiful", "Find the old picture of Polly and hand it to her."],
        ["Snack for Willie", "Willie took some bones that were supposed to be delivered to Brian. Go get them back from Willie."],
        ["Someone in the Forest", "From time to time, someone is entering the woods.  That person may be the murderer.  Hide behind Anna's Tree to find out, then go tell the twins who it is."],
        ["Special Service", "Get your car washed repeatedly until Gina offers some special service, then accept it."],
        ["The Bond Between Men", "Give the Legendary Guitar you received from Lilly back to Keith."],
        ["The Legendary Guitar", "Use the key to the closet to open the closet in Keith's Garage."],
        ["Top Collector", "Find 64 hidden trading cards in Greenvale."],
        ["Top Rank", "Break Richard's record in a game of Count Up."],
        ["Unwanted Customer", "Jack, who usually shows up after 9, gives Carol a hard time and this troubles Thomas. Make Jack go home when he shows up at the bar. "],
        ["Where's the Dress?", "Anna's mother Sallie is looking for [Anna's Dress]. Find it and give it to her."],
        ["York's Car", "According to Jack, the General has your old car in his junkyard. Ask him to fix it up for you."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
