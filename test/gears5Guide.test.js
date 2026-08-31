import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gears-5.js";

test("the Gears 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gears-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gears-5");

});

test("the Gears 5 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign, Jack & Early Progression",
            "Campaign Clears, Relics, Escape & Horde",
            "Versus, Arcade & Modes",
            "Hivebusters DLC & Escape Hives",
            "Horde Frenzy, Versus Stats & Operations 4",
            "Operation 5 & Operation 8",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 181-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /181 Steam achievements/);

});

test("every one of the 181 official Gears 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Back Atcha", "I Was Born in a Crossfire Hurricane", "Back on Your Feet, Soldier!", "Shock and Awe", "Pennies from Heaven", "Pass the Soap", "Sire, Interrupted", "Perky's Revenge!", "BFFs", "You've Got a Friend in Me", "Did We Just Become Best Friends?", "Seriously 5.0 - Chapter 1", "Once More From the Top", "One, Two, Three Sorties", "I'm The Captain Now", "Corporal Punishment", "Generally Awesome", "LOOTenant", "Sergeant at Arms", "My Body is Ready", "Not There to Buy a Timeshare", "And… He's All Yours", "Now I Gotta Get Up Again", "A Mouthful of Boom", "It's Time We Fight Them Together", "Jameson Shipping Depot", "That Old COG Technology", "Let's Get You Some Answers", "We Need the Old Plan", "Safe and Sound", "Cutting it Close", "Throw a Switch, See What Happens", "Let's Keep Pissin it Off!", "Then We Watch Each Other's Back", "You Know I Ain't Going Out Like That", "Discovered the True Threat to Sera", "A Good Plan, Violently Executed", "An Enemy Among Us", "Jack of One Trade", "Jack of All Trades", "Seraninja", "JACKed Up!", "Gimme, Gimme, Gimme", "Relic Hunter", "Relics of the Past", "It Takes Three to Make a Thing Go Right", "Master Escape Artist", "Who's Your Escape Main?", "Master of My Domain", "Who You Gonna Call? Hivebusters!", "Brought a Knife to a Gun Fight", "The Three Musketeers", "On the Razor's Edge", "Compulsive Horder", "Who's Your Horde Main?", "Can't Stop, Won't Stop", "Reduce, Reuse, Recycle", "Withdrawal Symptoms", "And I'll Form the Head!", "Homegrown Hive", "I Made It All By Myself", "Beginning of a Beautiful Friendship", "One Sec, I'll Be Right Back", "Where's My Product Endorsement Deal?", "Grind Season", "My Place in the Machine", "It’s Not Hoarding if Your Stuff is Cool", "All Aboard the Crazy Train!", "Planned and Executed", "Dynamic Duo", "All of Allfathers", "Sampler", "Close Call", "Ring Leader", "Come From Behind", "Resourceful", "Line Them Up", "Paydirt", "Victory Seized", "Shutout", "Lay of the Land", "Optimal Armaments", "Proficiency", "Highly Capable", "In the Name of..", "A Very Particular Set of Skills", "The Path To Victory", "Go, Hunt In Packs", "Destroy Them, My Children", "Be Aggressive, Devious", "HordeBusters", "These New Recruits Got Grit", "Hi-Ho, Silverback", "Expanded Expertise", "Fresh Lineup", "New Hivebusters", "Destroy From Within", "Stop 'Em Cold", "Hives: Busted", "Buying Time", "Designation: Scorpio", "Out of the Frying Pan", "New Island, New Mission", "A Breath of Fresh Air", "The Spirit Walk", "Face the Creature", "The Awakening", "Electroblade", "Ready to Frontline", "Supplies for the Effort", "Enter Hivebusters", "Rite of Passage", "Renewed, Not Consumed", "Operation: Ride the Snatcher", "Searching for Answers", "Bah! Child's Play", "What's This Thing Doing Here?", "Payload Delivered", "Let's Try That One Again, Shall We?", "Year of the Scorpion", "Brothers in Arms", "Swift and Grimy", "Efficient Excellence", "Controlled Bursts", "Fresh Grubs", "Now We Understand Each Other", "Make 'em Bleed", "Absolute Carnage", "Yep, I'd say they're dead", "Nothin' But Bits!", "And Stay Down!", "Rest in Pieces", "Eyes on Target", "Covering Fire", "Destruction ", "Total Devastation", "A War That Will Be Won", "Illustrious", "Cool Off, Baby!", "I'm Rubber, You're Glue!", "You Better Run!", "Decorated Soldier", "A Nice Present For You", "Protect This House", "Take a Look Around", "Teamwork Makes the Dream Work", "A Challenger Emerges", "Ironed Out", "That’s Inconceivable!", "Showin’ a Little Skin", "Just Showing it Off", "Batista Bomb", "Class Act", "The Centaur Set", "Exterminating the Hollow", "Places to Go, Monsters to Kill", "So There's the Hero", "Didn't Want to Look Too Civilized", "Ben Would Have Loved This Thing", "Solid Gold", "Such Carnage", "Break Them. Brutalize Them.", "You've Got Character, Kid", "Gun Collector", "A Gear of Many Talents", "Legendary Operator", "A Real Gear", "Re-Up Mastery", "Seriously 5.0 - Chapter 2", "In Total Control", "Event Planner", "Back In Style", "Bernie is Back", "Trusted Advisor", "Grave Consequences", "Destroyed Beauty", "Last Rites", "Chamber of Horrors", "Take Command", "Breezing Through", "Total Annihilation"];

    assert.strictEqual(officialAchievementNames.length, 181, "sanity check on this test's own reference list");

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
