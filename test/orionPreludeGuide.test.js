import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/orion-prelude.js";

test("the ORION: Prelude guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "orion-prelude-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "orion-prelude");

});

test("the ORION: Prelude guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Onboarding, Dino Kills & Playtime",
            "Objectives & Per-Weapon Mastery (Part 1)",
            "Per-Weapon Mastery (Part 2)",
            "Per-Weapon Mastery (Part 3) & Hard Modes",
            "Mastery & Mode Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 251-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /251 Steam achievements/);

});

test("every one of the 251 official ORION: Prelude achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Spiral Buddy", "Welcome to Depth", "Welcome to Covan", "Welcome to Eden", "MacGuyver", "The Dude on the Toilet", "Caveman", "Dino Bomber", "Manly Man", "Dino Dexter", "Do You Need a Therapist", "Meteor Shower", "Volcanic Eruption", "Ice Age", "Turok, Dinosaur Hunter!", "Rocketeer", "Mistress of Mystery", "Wade!", "Tyson!", "Who Needs Teammates!", "Back in Business", "More Power!", "Fear and Loathing in Cretaceous", "Riding Along In My Automobile", "Money Grabber!", "Money Maker", "Make it Rain!", "Bill Gates!", "For the love of the game!", "Bullet Sponge!", "3 Birds, 1 Stone!", "Got the Moves Like Jagger!", "Carpool to Hell!", "Teammate From Hell!", "Survivalist!", "Spiral Troll!", "Tight Pennies!", "Best Teammate Ever!", "Where's Waldo?", "MVP", "Bravo!", "Not Bad!", "Most Impressive!", "Dino Whisperer!", "Alpha Male!", "Glass Ceiling!", "The Wanderer", "Useless Teammate!", "Curb Stomping!", "Dino Beatdown!", "Hang Glider!", "Kick Them While They're Down!", "Sally Slapper!", "Get to the Choppa!", "Like Shooting Raptors in a Barrel!", "No Place Like Home!", "Helping Hand", "Full Round", "You Are The One", "Survival 1.0", "Survival 2.0", "Survival 3.0", "Maximum Survival", "Rampage 1.0", "Rampage 2.0", "Rampage 3.0", "Maximum Rampage", "Ninja 1.0", "Ninja 2.0", "Ninja 3.0", "Maximum Ninja", "Rocket-Man 1.0", "Rocket-Man 2.0", "Rocket-Man 3.0", "Maximum Rocket-Man", "Dude Huge 1.0", "Dude Huge 2.0", "Dude Huge 3.0", "Maximum Huge", "Aridication", "Peaktastic", "Slippery Slopes", "Raupi Begone", "Welcome to Peak", "Welcome to Arid", "Welcome to Raupi", "The Wolverine", "The Vampire", "Call of Raptors", "Angry Birds", "I'm a Ninja", "Bring It On!", "I'm Holding Them Back", "I've Got Your Back", "Bank of Orion", "Tank. Beats. Everything!", "Shop-a-Holic", "I Am Annoying", "Maximum Jump", "That's Disgusting", "Are You Crazy?", "This Isn't Too Bad", "Hold Me", "It Puts the Lotion", "Are You Insane?", "Lunatic", "Welcome to Your Padded Cell", "Where Are My Pills?", "I'll Be on the Roof Pooping in the Chimney", "That's All She Wrote", "Apprentice of CV-10", "Apprentice of M-40", "Apprentice of CV-10S", "Apprentice of RNC-9", "Apprentice of C-9", "Apprentice of T-99", "Apprentice of MX-4", "Apprentice of RNC-44", "Apprentice of TREK-12", "Apprentice of TREK-13", "Apprentice of FNC-30", "Apprentice of TREK-47", "Apprentice of TREK-79", "Apprentice of X-R8", "Apprentice of TREK-22", "Apprentice of Longshot", "Apprentice of Grenade Launcher", "Apprentice of Rocket Launcher", "Apprentice of Flamethrower", "Apprentice of Gatling Gun", "Apprentice of Energy Carbine", "Apprentice of Laser Rifle", "Apprentice of Longbow", "Apprentice of The Blade", "Apprentice of Teleportation", "Apprentice of Revival", "Apprentice of Cryo", "Apprentice of Utility", "Apprentice of Egg", "Master of CV-10", "Master of M-40", "Master of CV-10S", "Master of RNC-9", "Master of C-9", "Master of T-99", "Master of MX-4", "Master of RNC-44", "Master of TREK-12", "Master of TREK-13", "Master of FNC-30", "Master of TREK-47", "Master of TREK-79", "Master of X-R8", "Master of TREK-22", "Master of Longshot", "Master of Grenade Launcher", "Master of Rocket Launcher", "Master of Flamerthrower", "Master of Gatling Gun", "Master of Energy Carbine", "Master of Laser Rifle", "Master of Longbow", "Master of The Blade", "Master of Teleportation", "Master of Revival", "Master of Cryo", "Master of Egg", "Expert of CV-10", "Expert of M-40", "Expert of CV-10S", "Expert of RNC-9", "Expert of C-9", "Expert of T-99", "Expert of MX-4", "Expert of TREK-12", "Expert of TREK-13", "Expert of FNC-30", "Expert of TREK-47", "Expert of TREK-79", "Expert of X-R8", "Expert of TREK-22", "Expert of Longshot", "Expert of Grenade Launcher", "Expert of Rocket Launcher", "Expert of Flamethrower", "Expert of Gatling Gun", "Expert of Energy Carbine", "Expert of Laser Rifle", "Expert of Longbow", "Expert of The Blade", "Expert of Teleportation", "Expert of Revival", "Expert of Cryo", "Expert of Utility", "Expert of Egg", "Strike Me Down", "I Am Your Father", "Rebel Scum", "Fancy Dance Moves", "Captain Hook", "Raptor Hood", "Dueler", "Duelist", "Master Duelie", "Welcome to Nanko", "Welcome to Trine", "Welcome to Persistence", "Upgrade Complete", "New Toy", "More Room", "This Is Fancy", "I Am Fancy", "Climbing The Ladder", "Constantly Evolving", "Maximum Awesome", "Gibby", "Gibber", "Gibbest", "Master of Utility", "Expert of RNC-44", "Just Beginning", "Round 2", "Maybe You Can After All", "Here to Stay", "Endurance", "Conquest Birthday", "I'm a Dinosaur", "Chompy Bomb Bomb", "Dive Bomin'", "What's For Dinner?", "When's Lunch?", "BulletSpit", "Let's Get Fired Up", "Say Hello To My Little Friends", "Excuse Me - Have You Met My Sword?", "LOOT!", "More Loot!", "Even More Loot!", "Pirate's Treasure", "Keen Eye", "Hello, Iguana", "Party Bus", "Wild Boar", "How Do I Look?", "Rampage Master", "Slaughter Master", "Survival Master", "Duel Master", "Toon Town Master", "Legend", "You're Redikulous"];

    assert.strictEqual(officialAchievementNames.length, 251, "sanity check on this test's own reference list");

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
