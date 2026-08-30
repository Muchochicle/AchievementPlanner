import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dirt-rally.js";

test("the DiRT Rally guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dirt-rally-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dirt-rally");

});

test("the DiRT Rally guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Team, Career & Progression",
            "Hillclimb & Pikes Peak",
            "Rally Stage Delta Times: Greece, Wales & Germany",
            "Rallycross & PvP",
            "Rally Stage Delta Times: Finland, Sweden & Monte Carlo",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 170-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /170 Steam achievements/);

});

test("every one of the 170 official DiRT Rally achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I've Signed the DiRT Charter", "Obviously", "Kick the Tyres", "How You Like Me Now?", "It's Gonna Cost Ya", "You Can Call Me Chief", "Hot Coffee", "WWGFD?", "Full House", "Genius at Play", "I Am the 5%", "Visceral...but in the Correct Meaning of the Word", "Percolated", "Toolbox", "Garage Space", "Business at the Front...", "...Party at the Back", "Moar Wheel Drive", "Swingin' 60s", "Does Your Mother Know?", "Homologation", "So Last Year", "When Jon Met Paul", "The Traveller", "Maximum Attack", "#ThrowbackThursday", "Local Hero", "National Treasure", "King of the World", "Happy Trails", "First Time's the Charm", "Spirit of the Rally", "Born to Run", "Nobody Knows I’m Famous", "4", "Mondays Be Like…", "Absolutely Brilliant", "Nailed It!", "DiRTy Love", "Faster Chief", "Little Light", "On the Limit", "Boss", "Gotta Get Me One of These", "Any Given Sunday", "Dependable", "Easier Said than Done", "Fire Spitting Monsters", "Pass the Sauce Ari", "Child of the 80's", "Going up in the World", "DiRTy Dancer", "Propane & Propane Accessories", "Ain't No Mountain High Enough", "Take Your Pick", "The Feeling of Traction as You Launch", "The Twists and Turns of the Tarmac", "The Sun Bursting through the Trees", "The Sheer Drop Back down the Mountain", "The Dance of the Car through the Hairpins", "The Curls of Dust Swirling in the Breeze", "The Unnerving Loss of Traction as You Hit the Gravel", "The Blinding Sun Piercing the Cockpit", "The Searing Heat of the Desert", "Cut Corners as Much as You Dare", "The Condition of the Road You're on Is Heavily Influenced by How Many Cars Went before You", "The Pressure Comes from the Intangible, but Weighty Passage of Time", "The Relation and Trust between Driver and Co-Driver Is Unsurpassed", "The Sound of Engines Grumbling in the Distance", "The Slight Breeze", "The Haze of Falling Kick Up", "The Quiet & Anticipation", "The Camera Drones Hovering Overhead", "The Clouds of Gravel & Dust Launched from the Rear Wheels", "The Euphoria of Reaching the Summit", "The Cold, Biting Chill of the Mountain", "How Late Can You Brake When You Don't Know How Much Grip There Will Be?", "Constant Sound of Gravel Hitting Metal", "Driving Sideways Is Good", "The Sense of Lightness as You Drive over a Crest", "The Buzz of the Service Areas", "The Sense of Flow into and out of a Corner", "The Bounce as the Car Enters a Rut on the Way into a Corner", "The Change of Engine Note When the Anti-Lag Switch Is Flicked On", "Threading the Car between Trees, Banks and Ditches", "The Noticeable Difference between Braking into a Downhill Corner Compared to an Uphill Corner", "The Absolute Explosion of Noise, Roughness and Power as the Car Leaves the Line", "The Damp, Mugginess of the Forest", "The Sound of the Anti-Lag", "The Sound of Gravel", "The Sound of Turbo Chirps", "The Sound of Dirt Thrown from under the Passing Racer...sideways", "The Clumping of Mud in the Arches", "Don't Make Your pace Notes Too Cautious or You Won't Be Fast", "Whatever It Takes to Get to the End of a Stage/Leg/Rally/Championship. Perseverance", "The Throaty Roar of the Engines", "It's about Wilderness Rather than Track", "Roads Carved through Forests and Mountains", "The Robustness of Cars Built to Be Able to Cope with the Attrition of off Road Racing", "Once the Rally Starts the Clock Is Ticking until the End, Even between Stages", "Driving Flat out into the Unknown Is about Confidence in Your Car and in Yourself", "The Cars Are Brutal and Savage but a Car That Is Being Driven Well Feels so Balletic", "Once You're on the Start Line It's Just You, Your Co-Driver, Your Car and the Road", "A Driver Who Is Confident in Their Co-Driver Will Often Follow Instructions Blindly", "It's All about Weight Transfer", "It's Not about Fame and Fortune", "The Fine Spray of Mud That Covers Much of the Car", "Improvising Fixes in the Service Area before the next Stage", "Understeer Is Bad", "Unpredictable Surface & Grip Level", "The Pockets of Expectant Fans Waiting throughout the Stage", "We the Terrors", "Here's One I Made Earlier", "Mr. Smooth", "Monster Energy Supercharge Award", "Good Spot", "It's a Bold Strategy", "JUST LIKE THE REAL THING!", "Playing with the Big Boys", "Damn This Kid Is Good", "Clean Sweep", "Racing Stripes", "Circuit Trained", "Show Boat", "Pedal to the Mettle", "The Fun Starts Here", "MVP", "Investment Vehicle", "I Made This!", "Whose House?", "Mr. Steady", "So Serious", "There's No Pulse...", "#HappyStreet", "Moosing Around", "Friends-Rivals-Champions-Legends", "My Ball, My Rules", "Room for a Small One?", "GG", "Self Made Millionaire", "The Spice of Life", "That's a Lot of Lakes", "Many Jumps, Many over Crest Corners, Many High Speed Corners", "Everybody knows it’s very fast with very wide roads", "There Are Some Narrow and Rough Sections", "The Average Speed Is Very High", "There's No Fun in Driving Slowly", "It's a Really Big Challenge to Go Fast without Making a Mistake", "The Sensations Are Extreme on These Stages", "The Roads Are so Fast, They're Always Going up and down like a Rollercoaster", "You Feel like Your Heart Is Going up and down with the Road Sometimes", "You'll Need Bravery, Precision and Complete Confidence", "Your Heart Will Be in Your Throat over Some of These Jumps", "Hello? Is It Me You R Looking 4?", "The Only Way Is Up", "Turtley Awesome", "Owned", "A Whole Lot of Cheddar", "It's Hugely Different to an Asphalt Rally", "It's Almost Easier When the Conditions Stay Icy so the Grip Levels Are Consistent", "Experience of Driving on Snow Is Crucial", "There Are a Lot of Long Straights", "It Takes a Special Driver to Win", "Your Tyres Are Built to Really Dig into the Ice", "The Gravel Can Wear Away the Studs on Your Snow Tyres", "The Snow Banks Can Give You Safety and Can Keep You on the Roads", "Hitting a Snow Bank Too Fast Can Cause You a Lot of Trouble", "Keep Calm and Drive a Clean Line", "It's All down to Strategy", "There Can Be a Lot of Gravel amongst the Snow and Ice Runs"];

    assert.strictEqual(officialAchievementNames.length, 170, "sanity check on this test's own reference list");

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
