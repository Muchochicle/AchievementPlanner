import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/killing-floor.js";

test("the Killing Floor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "killing-floor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "killing-floor");

});

test("the Killing Floor guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Maps & Early Challenges",
            "Perk & Weapon Challenges",
            "Seasonal Event Maps I",
            "Seasonal Event Maps II",
            "Event Maps III",
            "Later Maps & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 285-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /285 Steam achievements/);

});

test("every one of the 285 official Killing Floor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Pub Crawl", "Lord of the Manor", "Lab Cleaner", "Chicken Farmer", "The Boss", "The Long War", "Experimenticenticide", "Fascist Dietitian", "Homer's Heroes", "Keep Those Sneakers Off the Floor!", "Random Axe of Kindness", "Bitter Irony", "Hot Cross Fun", "Dignity for the Dead", "Social Outburst", "Careful Spender", "It's Not Easy Being Greasy", "Too Close For Comfort", "Master Surgeon", "It's What's Inside That Counts", "Quarter Pounder With Ease", "Self Medicator", "Thin-Ice Pirouette", "Philanthropist", "I Like To Watch", "Mr. Perky", "Straight Rush", "The L.A.W. That Broke The Camel's Back", "Death To The Mad Scientist", "Experimentimillicide", "Experimentilottacide", "Hard Pub Crawl", "Duke of the Manor", "Cattle Farmer", "Hard Boss", "Lab Assistant", "The Hard War", "Suicidal Pub Crawl", "Emperor of the Manor", "Alligator Farmer", "Mad Boss", "Lab Professor", "The Completely Suicidal War", "Tin Man", "Steel Worker", "Man of Steel", "A Bit Barmy", "Gone Mental", "Complete Barking", "Squirrel King of the Dark Forest", "Raccoon King of the Dark Forest", "Bear King of the Dark Forest", "Long, Hot Summer", "Summer of 2009", "And Back to School", "Explosive Personality", "Flaming Hell, That was Close", "Merry Men", "Blooper Reel", "Dot of Doom", "SCAR'd", "Healing Touch", "Pound This", "Killer Junior", "Getting Chunky", "Hellish Pub Crawl", "Demonic King of the Manor", "Demon Farmer", "Boss from Hell", "Scientist from Hell", "Diablo Steel Man", "Commit-ed for life", "Wolf King of the Dark Forest", "Waste Disposal", "Waste Land", "Waste of Space", "Wasted", "Warehouse Janitor", "Warehouse Forklift Operator", "Warehouse Foreman", "Warehouse Manager", "Departure Gallery", "Departure Lounge", "Departure Gate", "Dear Departed", "Running Late", "Missed Connection", "Train Wreck", "Pile Up", "Gimme a Plaster!", "That Bloody Well Hurts!", "I'm Dying Here!", "Not Dead Yet!", "Ice Cube", "Crushed Ice", "Iceberg", "Comet", "Daytrip", "Gone Camping", "Mountaineer", "Park Ranger", "Neighborhood Watch", "Private Security", "Vigilante", "SWAT", "Slight Drip", "Burst Pipe", "Pressure Failure", "Floodgate to Hell", "Piece of Cake", "Pound Cake", "Fruit Cake", "Devil Cake", "Let Them Burn", "Walking in  A Winter Horror Land", "Silent Night, Evil Night", "I'm Dreaming of a Red Christmas", "Grandma got Eaten by a Reindeer", "Merry Friggin Christmas", "Cracked the Nutcracker!", "Can't Catch Me!", "Toasted Jack Frost", "That's not Santa!", "Rudolph, the Bloody Nosed Reindeer", "Not So Silent Night", "Fending off Mrs. Claws", "Who Brings a Gun to a Snow Ball Fight?", "Deck the Halls with Buckets o' Blood", "Tis Better to Give than to Receive", "Eggnog Anyone?", "Bad Santa", "Back to Work", "Uber Tuber", "Science Got Done", "Still Alive", "This is a Triumph", "I'm Making a Note Here, Huge Success", "Golden Potato", "Flea Circus", "Dog and Pony Show", "3 Ring Circus", "On Top of the Big Top", "Ringmaster", "Sparring with a Master", "Assistant Homicide", "Seeing Double", "Clearing Clown Alley", "The Big Hunt", "Lifting a Dumbell", "Small Hands", "Elephant Gun", "Juggling Act", "Windjammer Enthusiast", "Taking Down the Big Top", "Burning up the Midway", "Punk'd", "Sparkling in the Twilight", "Carving The Jack O' Lantern", "The Scene is Zed", "Zed October", "This is No Ordinary Rabbit!", "Trick, not Treat", "Rule The Roost", "Burning Irony", "Highlander", "Bloody Yanks", "Finish Him", "I love ze Healing not ze Hurting", "Italian Meat Pasta", "Feeling Lucky?", "We Have Ourselves a Cowboy", "Snow Cone", "Stay Frosty", "On the Rocks", "Anti Freeze", "A Bloody Christmas Carol", "Spec Ops ", "Combat Medic", "Fugly ", "British Superiority", "The Big One", "Highway to Heaven", "Stuck in Limbo", "Demonic Road", "Devil's Co-pilot", "Historical Remnants", "Nail'd!", "Explosion of Love", "Trench Warfare", "Third Cousins", "Second Cousins", "First Cousins (Once Removed)", "First Cousins", "Grim Reaper", "Soul Collector", "Meet Your Maker!", "Creepy Crawlies", "Rippin' It Up", "I Am Become Death", "Fiery Personality", "Have my axe", "One Small Step for Man", "But It's All Red!", "Game Over, Man!", "Here is to us", "Attempting Re-entry", "Amusing Death", "One Giant Leap (Back) for Mankind", "Gimli That Axe!", "Astro Buffer Afficiando", "Modified Psychoacceleration Achiever", "Fractional Neutron Activator", "Advanced Omega Wave Resonance Explorer", "Simplified Force Adhesion Afficianado", "Oscillating Hydrogen Transition Achiever", "Alpha Wave Osteooxidation Activator", "Tachyon Cytoneutralization Explorer", "Hide and go Puke", "Arcade Gamer", "Full Charge", "Extended Motion Protector", "Guardian Assault Protector", "Golden 3 Crown Note", "Single-shot Equalizer", "Assault Flayer Ordinance", "Single-Load Doom Bombardier", "Turbo Executioner", "Mrs. Punkd", "Longshoreman", "Gang Crew", "Stevedore", "Wharfinger", "Fork Lift Operator", "Truck Driver", "Crane Operator", "Shipping Magnate", "Claw Machine Master", "Ex-scientist", "777", "Blinding Big Brother", "Fire and Forget", "Under The Weather", "Most Bang for the Buck", "Death", "King Minos", "Cerberus", "Lucifer", "Brain Fart", "Agnosia", "Amnesia", "Dementia", "No Time for Love, Dr. Jones", "Home Brewer", "Micro Brewer", "Master Brewer", "Trappist Monk", "Oktoberfest Master", "Peasant", "Squire", "Prince", "King", "Rich Evil Uncle", "Cattle Class", "Economy Comfort", "Business Class", "First Class", "Day-trip", "Long weekend", "Serious vacation", "Moved to Paris!", "Nitro Boost!", "Totally Metal", "Multi-pass", "Science Hater", "Doctor WHO??", "Gone clubbing", "Rack 'em up", "Burned out", "Hangover from Hell", "Skull Cracker", "Cave of Wonder", "Cavern of Pain", "Grotto of Terror", "Hollow of Horror", "All shook up"];

    assert.strictEqual(officialAchievementNames.length, 285, "sanity check on this test's own reference list");

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
