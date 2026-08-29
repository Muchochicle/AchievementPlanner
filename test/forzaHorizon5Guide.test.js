import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/forza-horizon-5.js";

test("the Forza Horizon 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "forza-horizon-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "forza-horizon-5");

});

test("the Forza Horizon 5 guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Festival & Horizon Adventure",
            "Exploration & Collectibles",
            "Challenges, Playlist & Photos",
            "Hot Wheels Expansion",
            "Horizon Stories & Update Events",
            "Rally Adventure",
            "Donut Media, Icons of Speed & Test Track",
            "Hide and Seek",
            "Horizon Realms",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 164-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /164 Steam achievements/);

});

test("every one of the 164 official Forza Horizon 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Welcome to México", "Race into Action", "Adaptable", "Icebreaker", "Mi Casa",
        "First Love", "This Is The Way", "Viva Horizon!", "Putting on a Show", "AWDyssey",
        "Ask Any Racer, Any Real Racer", "Far from the Mudding Crowd", "There’s Always Money in the Baja Stand", "Adrenaline Rush", "Hall of Famer",
        "How to Race Friends and Influence People", "Cover to Cover", "Tourist Attraction", "Show Me Your Moves!", "Good Carma",
        "Album Cover", "Fit to Print", "A Forza Edition to my Collection", "Manufacturer Affinity ", "You Could Say I'm a Fan",
        "An Item Of Extreme Value", "No Stone Unturned", "Chicken Dinner", "Jackpot", "Seasoned Veteran",
        "Racing and Pacing and Plotting the Course", "Unbeatable Triumph", "Living Legend", "I Have the High Ground ", "Unlimited Prowess!",
        "Ride and Seek ", "Min, Meet Max", "Better Than New ", "Complete Collection", "Ford of the Wings ",
        "Mogul ", "Long Gone", "Gotta Smash 'Em All", "Cactus Makes Perfect", "A Royal Affair",
        "Dust in the Lens", "Stunning Photography", "A Heart of Gold", "Water Performance", "You're the Champion",
        "Treasure Hunter", "Front Runner", "New Tune", "No One Expects the Hot Wheels Expedition", "The Rookie",
        "Pros, No Cons", "I'm an Expert Now", "WORT, WORT, WORT!", "Hot Wheels Legend", "Missions!",
        "More Missions!", "Missions Complete!", "Over-Qualified", "Altitude Quickness", "Soared and Board",
        "Gotta Pop 'Em All", "Fresh Pressed Orange Routes", "Lessons in Hot Wheels History", "Major in Hot Wheels History", "Professor of Hot Wheels History",
        "Competition, Experimentation, and Creativity", "Beach Bomb", "Aquanaut", "Icy Roads Ahead", "Shaken Not Third",
        "Attracted to Victory", "Supersonic", "Points Mean Prizes", "Hot Wheels, Hot Laps", "High Roller",
        "Hot Wheels All Star", "Badge of Honour", "Hoonigan Impressionist", "The Grand Opening", "Another One Bites the Dust",
        "One for All", "Back in the Saddle", "Join the Club", "Drift Club Mexico", "Welcome to Mexico 2.0",
        "Smash Happy", "Blast From the Past", "Memory Lane", "I'll Just Take This Now", "Nighthawk",
        "Made in Mexico", "V.U.H.L", "Welcome to Sierra Nueva", "Rouen", "Better Together",
        "It's Rally Time!", "Road Rally", "In The Still Of The Night", "Pink Slip", "Picking Up The Tab",
        "Horizon Badlands Champion", "Keep Calm And Rally On", "Course Connoisseur", "Backwards, At Night, In The Rain", "Follow My Lead",
        "I Ain't Gonna Change", "Completed It Mate", "Smashlicious", "Generating Alternate Smash Flows", "Smashtastic",
        "Put it on my Smash Drive", "Road Book", "Canyon Master", "That Time of Year", "Unlimited Rally",
        "Living up to the Rep", "Just Reppin'", "Cash and Rally", "Life Skills", "On the Road Again",
        "Hi Five", "Low Five", "Give it the Beans!", "Get My Good Side", "Juuuuust Right",
        "Timeless", "Give Me Five!", "Leaving Tracks", "Maxing Out", "Back To School",
        "A New Era", "A True Icon", "Hider and Seeker", "Bounty Hunter", "The Hidden",
        "Dedicated to the Cause", "Never Back Down", "Lay of The Land", "Blending In", "The Big Reveal",
        "Covering Ground", "Catching a Break", "Enter the Realm", "Master of Realms", "Stunt-tacular",
        "You're On Thin Ice", "Tidy Little Bow", "Party Like It's 1987", "Right At Home", "Driving in a...",
        "Winging It", "As The Clock Strikes Midnight", "You Might Need a Map", "Time-Wyrm", "Free Bird",
        "Keep That Camera Rolling", "Drifting, Drifting, Drifting", "Spanning Generations", "Demolisher",
    ];

    assert.strictEqual(officialAchievementNames.length, 164, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
