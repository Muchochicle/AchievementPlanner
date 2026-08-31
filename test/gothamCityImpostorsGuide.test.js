import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gotham-city-impostors.js";

test("the Gotham City Impostors guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gotham-city-impostors-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gotham-city-impostors");

});

test("the Gotham City Impostors guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Onboarding & Challenge Mode",
            "Weapon & Gadget Feats (Part 1)",
            "Weapon & Gadget Feats (Part 2)",
            "Weapon & Gadget Feats (Part 3)",
            "Mastery: Complete All Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 412-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /412 Steam achievements/);

});

test("every one of the 412 official Gotham City Impostors achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Initiated", "Shower of Gold", "Prestigious", "Fear the Nemesaurus", "Thanks for Playing!", "Customizer", "Total Victory", "Turning the Tide", "Bogey Down ", "Dive Bomber", "Target Hunter", "Target Painter", "Frequent Flier", "Strung Along", "Grapple Gunned", "Insoles to Injury", "Insole Addict", "Cross-Country Cloaker", "Thrustasaurus", "Sky is Falling", "Jetpack Attackaroo", "Roller Patroller", "Death on Wheels", "Rampicide", "Ramp It Up", "Spring Boot Squash", "Springs Have Sprung", "Invisible Ambusher", "All Hooked Up", "Unplugger", "Battery Collector", "Carrier Killer", "Feverish Fumigator", "Gas Guardian", "Gas Master", "Fumigation's Most Wanted", "When Bats Attack", "Laughter is the Worst Medicine", "Shooting Fish in a Barrel", "Slap Happy", "Panic Survivor", "Propaganda Minister", "Propaganda Posterboy", "Time Well Spent", "Where's the 'I' in 'Team'?", "Photogenic", "Team Oriented", "Head Hunter", "Bountiful Harvest", "Enemy Bounty ", "Friendly Bounty", "Bounty Winner", "Assists Awarded", "Damage Dealt", "Distance Traveled", "MVP Finishes", "Lineup Finishes", "Headshots", "Team Damage Healed", "Enemies Killed", "Matches Completed", "Time Played", "Headshots Survived", "Experience Earned", "Matches Won", "Hardy Hedgehog", "Angry Hedgehog", "Death Racer Rally", "Death Racer", "Eagle Eye", "Gun Runner Marathon", "Bloody Rampage", "Kill Crazy", "Powder Keg Vengeance", "Powder Keg", "Tough Enough", "Tough as Nails", "Wolf Pack", "Gun Runner", "Burly Hunter", "Anti-Armor Specialist", "Pop a Squat", "Daze of Glory", "Dive Bomb Denial", "Mighty Hunter", "Equalogist", "Sweet Revenge", "Nimble Hunter", "No Man Left Behind", "Speedy Hunter", "Where's the Fire?", "Cut 'Em Down", "Second Sight", "Flyswatter", "Skeet Shooting", "Tough Hunter", "Antisocial", "Anxious", "Bipolar", "Body Dysmorphic", "Codependent", "Histrionic", "Kleptomaniacal", "Masochistic", "Narcissistic", "Paranoid", "Passive Aggresive", "Sadistic", "Tyrannical", "Sensor Dispenser", "Motion Tracker", "Gnome Fly Zone", "Gnome Syndrome", "Mercy Killer", "Ankle Biter", "Bullet Sponge", "Dizzy Beyond Death", "Boomerwrangler", "Felt That Welt", "Party Daze", "Opportunist", "Dare to Care", "Effusive Enabler", "Conch Honker", "Blow Hard", "Blow Me Down", "Sugar Rush", "Second Wind", "Lasting Impact", "Major Impact", "Multiple Impacts", "Postmortem Piper", "Pipe Bomb Bonk", "Timed to Die", "Pipe Bomb Multi-Kill", "Final Surprise", "Pop Goes Your Face", "Surprise Party", "Fading Star", "Star Struck", "Axe You Later", "Just Axein'", "Cleaned Up My Axe", "Plausible Deniability", "Skunk Ninja", "Buccaneer Headshot Pro", "Buccaneer Pro", "Dawn Patrol Headshot Pro", "Dawn Patrol Pro", "Chaperone Close Kills Pro", "Chaperone Pro", "Shredder Headshot Pro", "Shredder Pro", "Thunder Dragon Pro", "Thunder Dragon Multi-Kill Pro", "Boarding Party Damage Pro", "Boarding Party Kills Pro", "Partisan Headshot Pro", "Partisan Pro", "Desperado Headshot Pro", "Desperado Pro", "Witch Doctor Damage Pro", "Witch Doctor Kills Pro", "Deep Freezer Pro", "Ice and Dice", "Motivatory Motivation", "Jackhammer Headshot Pro", "Bear-Stalker Headshot Pro", "Bear-Stalker Pro", "Falcon Blade Block Pro", "Falcon Blade Kill Pro", "Knife Backstab Pro", "Knife Kill Pro", "Kingmaker Headshot Pro", "Kingmaker Kill Pro", "Persuader Close Kills Pro", "Persuader Pro", "The Marshal Headshot Pro", "The Marshal Pro", "Bombardier Pro", "Bombardier Multi Pro", "Gatekeeper Headshot Pro", "Gatekeeper Pro", "Huntsman Headshot Pro", "Huntsman Pro", "Death-Dealer (Burly)", "Cutthroat (Burly)", "Death-Dealer (Mighty)", "Cutthroat (Mighty)", "Death-Dealer (Nimble)", "Cutthroat (Nimble)", "Death-Dealer (Speedy)", "Cutthroat (Speedy)", "Death-Dealer (Tough)", "Cutthroat (Tough)", "Nary a Nemesis", "Jackhammer Pro", "Damage Eater (Burly)", "Survivalist (Burly)", "Damage Eater (Mighty)", "Survivalist (Mighty)", "Damage Eater (Nimble)", "Survivalist (Nimble)", "Damage Eater (Speedy)", "Survivalist (Speedy)", "Damage Eater (Tough)", "Survivalist (Tough)", "Let It Glide", "Hang-Time Hero", "All Gassed Up", "Gas Guzzler", "Hero of the Hour", "Close Call", "Eat My Dust", "Psychological Shutout", "Glory Hog", "Yay Me!", "The Pwny Express", "Just Try to Stop Me", "Unstoppable", "Invincible", "Earthquake", "Radiology", "Avalanche!", "Gone Grappling", "Home Run", "Psychotic", "Surprise!", "Crackshot", "Timber!", "Bunnyhop Boycott", "Rush Hour", "Nemesaurus", "Nemesaurus Rex", "Nemesaurus Prime", "Buccaneer - Rainbow Attack!", "Dawn Patrol - Rainbow Attack!", "Chaperone - Rainbow Attack!", "Thunder Dragon - Rainbow Attack!", "Shredder - Rainbow Attack!", "Boarding Party - Rainbow Attack!", "BFF", "Rodent Removal", "Who's Laughing Now?", "Partisan - Rainbow Attack!", "Desperado - Rainbow Attack!", "Witch Doctor - Rainbow Attack!", "Deep Freezer - Rainbow Attack!", "Motivator - Rainbow Attack!", "Jackhammer - Rainbow Attack!", "Bear-Stalker - Rainbow Attack!", "Falcon Blade - Rainbow Attack!", "Kingmaker - Rainbow Attack!", "Persuader - Rainbow Attack!", "The Marshal - Rainbow Attack!", "Bombardier - Rainbow Attack!", "Gatekeeper - Rainbow Attack!", "Huntsman - Rainbow Attack!", "Star Shower", "Star Struck Multi", "Buccaneer 4x Scope Lens Pro", "Buccaneer B.O. Sniffer Pro", "Buccaneer Silencer Pro", "Buccaneer Muzzle Break Pro", "Dawn Patrol Extended Magazines Pro", "Dawn Patrol Penetrator Pro", "Dawn Patrol Red Dot Sight Pro", "Dawn Patrol Reflex Sight Pro", "Dawn Patrol B.O. Sniffer Pro", "Dawn Patrol Silencer Pro", "Dawn Patrol Muzzle Break Pro", "Chaperone Expanded Drum Pro", "Chaperone Penetrator Pro", "Chaperone Reflex Sight Pro", "Chaperone B.O. Sniffer Pro", "Chaperone Muzzle Break Pro", "Thunder Dragon Missiles Pro", "Shredder Extended Magazines Pro", "Shredder Penetrator Pro", "Shredder Red Dot Sight Pro", "Shredder Reflex Sight Pro", "Shredder B.O. Sniffer Pro", "Shredder Muzzle Break Pro", "Partisan Extended Magazines Pro", "Partisan Penetrator Pro", "Partisan Red Dot Sight Pro", "Partisan Reflex Sight Pro", "Partisan B.O. Sniffer Pro", "Partisan Silencer Pro", "Partisan Muzzle Break Pro", "Desperado Extended Magazines Pro", "Desperado Penetrator Pro", "Desperado Red Dot Sight Pro", "Desperado Reflex Sight Pro", "Desperado B.O. Sniffer Pro", "Desperado Silencer Pro", "Desperado Muzzle Break Pro", "Witch Doctor Deflective Charge Pro", "Deep Freezer B.O. Sniffer Pro ", "Motivation Elation", "Motivation Celebration", "Motivation Sensation", "Jackhammer Extended Magazines Pro", "Jackhammer Penetrator Pro", "Jackhammer Red Dot Sight Pro", "Jackhammer Reflex Sight Pro", "Jackhammer B.O. Sniffer Pro", "Jackhammer Muzzle Break Pro", "Bear-Stalker B.O. Sniffer Pro", "Buzzsaw", "Kingmaker Extended Magazines Pro", "Kingmaker Full Auto Pro", "Kingmaker Jacketed Hollow Point Pro", "Kingmaker Penetrator Pro", "Kingmaker Reflex Sight Pro", "Kingmaker Silencer Pro", "Kingmaker Muzzle Break Pro", "Persuader Extended Magazines Pro", "Persuader Penetrator Pro", "Persuader Reflex Sight Pro", "Persuader B.O. Sniffer Pro", "Persuader Muzzle Break Pro", "The Marshal Extended Magazines Pro", "The Marshal 4x Scope Lens Pro", "The Marshal B.O. Sniffer Pro", "The Marshal Silencer Pro", "The Marshal Muzzle Break Pro", "Bombardier Mortar Pro", "Gatekeeper Extended Magazines Pro", "Gatekeeper Penetrator Pro", "Gatekeeper Red Dot Sight Pro", "Gatekeeper Reflex Sight Pro", "Gatekeeper B.O. Sniffer Pro", "Gatekeeper Silencer Pro", "Gatekeeper Muzzle Break Pro", "Huntsman Extended Magazines Pro", "Huntsman Penetrator Pro", "Huntsman Red Dot Sight Pro", "Huntsman Reflex Sight Pro", "Huntsman B.O. Sniffer Pro", "Huntsman Silencer Pro", "Huntsman Muzzle Break Pro", "Deep Freezer Extended Magazines Pro ", "Burly Elite", "Mighty Elite", "Nimble Elite", "Speedy Elite", "Tough Elite", "Targeting Goggles Expert", "Glider Rig Expert", "Grapple Gun Expert", "Inflated Insoles Expert", "Ninja Smoke Bomb Expert", "Jetpack Expert", "Rollerskates Expert", "Spring Boots Expert", "Fumigator of the Year", "Smog Alert", "Propagandist", "Spreading the Word", "Delighted with Deathmatch ", "Urban Unrest", "Bounty Hunter", "Wide and Far", "Legendary Master", "Hedgehog Hero", "Ultimate Death Racer", "Gun Runner Supreme", "Ready to Blow", "Very Tough Stuff", "Lambs to the Slaughter", "No Body Left Behind", "Gadget Phobia", "Shuck and Jive", "Your Worst Nightmare", "Motion Sensor Expert", "Airspace Denier Expert", "Bear Trap Expert", "Body Armor Expert", "Boomerang Expert", "Care Package Expert", "Conch Shell Expert", "Energy Drink Expert", "Impact Grenade Expert", "Pipe Bomb Expert", "Trap-in-the-Box Expert", "Shuriken Expert", "Hatchet Expert", "Toxic Gas Expert", "Buccaneer Master", "Dawn Patrol Master", "Chaperone Master", "Shredder Master", "Thunder Dragon Master", "Boarding Party Master", "Partisan Master", "Desperado Master", "Witch Doctor Master", "Deep Freezer Master", "Motivator Master", "Jackhammer Master", "Bear-Stalker Master", "Falcon Blade Master", "Knife Master", "Kingmaker Master", "Persuader Master", "The Marshal Master", "Bombardier Master", "Gatekeeper Master", "Huntsman Master", "Doctor Knows Best", "Rampage is all the Rage"];

    assert.strictEqual(officialAchievementNames.length, 412, "sanity check on this test's own reference list");

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
