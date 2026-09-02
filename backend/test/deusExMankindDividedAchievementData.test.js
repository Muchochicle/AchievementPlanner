import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deus-ex-mankind-divided.json - 81 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 337000 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("deus-ex-mankind-divided");

test("getPlannerData('deus-ex-mankind-divided') returns real planner data with 81 curated achievements", () => {

    assert.ok(game, "expected real planner data for deus-ex-mankind-divided");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 81);

});

test("every Deus Ex: Mankind Divided achievement has a unique id from 1 to 81 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 81 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 81);
    assert.strictEqual(new Set(apinames).size, 81);

});

test("every Deus Ex: Mankind Divided achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 81 Deus Ex: Mankind Divided achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["****! Taser Fist!", "Lock-On and deploy the Quad Arc upgrade of the Tesla Knuckle on four enemies at once."],
        ["01011000", "Piece together the mysterious contact and help Helle remember who she really is."],
        ["A Criminal Past", "Complete A Criminal Past."],
        ["A Heated Combination", "Enter a classic numerical code in the game's first keypad."],
        ["A Heist of Olympic Proportions", "Breach: Complete 5 PICUS Servers."],
        ["A Just Cause", "Reach a just outcome for the framed inmate (A Criminal Past DLC)."],
        ["Adept of the Metaverse", "Engage in all Tutorials in Adam's first mission in Dubai."],
        ["All in the Family", "Complete the Cult of the Machine God side-mission chain (family-secret outcome)."],
        ["And Embrace What You've Become", "Install at least one experimental augmentation."],
        ["Ashes to Ashes", "Breach: Complete the Santeau Darknet File."],
        ["Bad Sector", "Breach: Complete 5 Ghost Servers."],
        ["Ballsy", "Get a basketball through a hoop."],
        ["Between Technology and the Divine", "Complete & win the debate with Talos Rucker."],
        ["Burning Neodymium", "Breach: Eliminate a Prime Unit while the Titan.aug is active."],
        ["Camera, Action, Red-Handed", "Breach: Complete the PICUS Darknet File."],
        ["Clean Sweep", "Complete the System Rift Jensen Story without killing anyone."],
        ["Code of Conduct", "Complete A Criminal Past without killing anyone."],
        ["Core Driller", "Use the Ice Drill to bypass a large section of the GARM facility."],
        ["Cult of Personality", "Uncover the key to Richard's persuasive powers and free his followers."],
        ["Data Detective", "Breach: Complete a Darknet file."],
        ["Data Disciple", "Breach: Complete all Versalife, Steiner-Bisley and Tarvos servers in Tier 1 Network."],
        ["Data Emperor", "Breach: Complete 5 Tier 4 Network servers."],
        ["Data Expert", "Breach: Complete all Versalife, Steiner-Bisley and Tarvos servers in Tier 2 Network."],
        ["Data Master", "Breach: Complete all Versalife, Steiner-Bisley and Tarvos servers in Tier 3 Network."],
        ["Don't Reach, Kid", "Find the basketball and put it in the hoop."],
        ["Dressed for the Occasion", "Blend in by wearing the proper prisoner jumpsuit (A Criminal Past DLC)."],
        ["Excess Baggage Fees", "Breach: Complete a server using 6 Expansion Items at once."],
        ["Expose the Truth!", "Expose the truth hidden in the extracted data (System Rift DLC)."],
        ["Express Elevator to Hell, Going Down", "Land an Icarus Landing & Strike on foes and clear out the pack with the Typhoon. Just to make sure."],
        ["Extract the Data…", "Extract the data from the Palisade Blade server (System Rift DLC)."],
        ["Fire Sale", "Breach: Destroy 2 enemies at once using a Red Unstable Cube."],
        ["Foxiest of the Hounds", "You triggered zero alarms during an entire playthrough."],
        ["Fresh Out of the Package", "With Koller's help and the Neuroplasticity Calibrator, eliminate overclocking for experimental augs."],
        ["Ghost", "Cross enemy territory like a ghost, raising no hostile reaction from anyone."],
        ["Go Figure", "Unlock naturally early in the System Rift DLC."],
        ["God Killer", "Complete the debate with Allison Stanek."],
        ["Ground Mail Was a Better Option", "Flawlessly disable a Drone via Remote Hacking."],
        ["Handle with Care", "Help Olivie Devos escape Prague during 'Fade to Black' or 'K is for Kazdy'."],
        ["He's [Not] Dead, Jim", "Use the Antidote to save the life of Jim Miller."],
        ["Help Desk", "Correctly identify the desk receptionist in the Blade lobby (System Rift DLC)."],
        ["Honor Holds Us All Together", "Win the debate with Otar Botkoveli during your first visit to Prague."],
        ["Hourglass", "Breach: Complete 10 Santeau servers."],
        ["Humanity +", "Fully upgrade a branch of your Augmentation Tree."],
        ["I Can Only Fight Enemies I Can See", "Complete one Hacking Challenge with Fog Security without using a Reveal Software."],
        ["I Never Asked For This", "Complete the game on the hardest difficulty."],
        ["Invisible War", "Incapacitate a cloaked enemy while still remaining cloaked yourself."],
        ["K is for Kazdy", "Free K and Bones from the prison cell and escort them to safety."],
        ["Knock Knock", "Get Slaw to open the security door within the Palisade Blade (System Rift DLC)."],
        ["Laputan Machine", "Use Marchenko's Kill Switch to defeat him."],
        ["Murder He Wrote", "Collect all four pieces of evidence about Simona Saridakis' murder in the Palisade Blade (System Rift DLC)."],
        ["Neon Nights", "Halt the production of the Neon drug in the city."],
        ["Not The Rippers You Are Looking For", "Breach: Use the Alarm_Cancel.pkg in a server."],
        ["Now I'm Feeling A Little Motivated", "Breach: Win 3 Challenges."],
        ["Objection!", "Get Hector Guerrero to confess to the murder of Wilburg (A Criminal Past DLC)."],
        ["Pacifist", "You completed Deus Ex: Mankind Divided without killing a single soul. Bosses are people, too."],
        ["Quid Pro Quo", "Help out a fellow inmate by making a trade."],
        ["Ramming Speed!!", "Ram Dash into an enemy NPC with a fully charged Icarus Dash."],
        ["Ruthless Efficiency", "Fully upgrade a weapon of your choice."],
        ["Samizdat", "Work with the Samizdat group and spread their news through the Picus media streams."],
        ["Singh No Swan Song", "Have Singh's back when it matters most."],
        ["Slow & Sharp", "Land an Explosive Nanoblade Shot on three enemies at once while the Focus Augmentation is active."],
        ["Smooth Like Soap", "Find Mejia in Cell Block B without raising an alarm."],
        ["So Many Cucumbers", "Deus Ex Is All About Cucumbers…"],
        ["Spokes in Two Wheels", "Stop both the train-station bombing and the Orchid poisoning."],
        ["Tablet Collector", "Collect and read every unique eBook."],
        ["The 40-Yard Digital Dash", "Breach: Succeed 3 Data Sphere deliveries."],
        ["The Golden Rookery", "Find the missing Gold Penguin and return him back to his colony."],
        ["The Golden Ticket", "Decide whether Irenka Bauer or Edward Brod gets to stay in Prague."],
        ["The Harvester", "Convince Detective Montag that neither Gunn nor Radko is the murderer."],
        ["The Invincible Body, Fighting an Iron Devil", "Block an incoming enemy explosive with the Titan Shield."],
        ["The Jack of All Augments", "Invest in at least one augmentation in every branch of the Aug Tree."],
        ["The Last Harvest", "Use the CASIE aug and Dr. Cipra's keyword to convince Daria she isn't who she thinks she is."],
        ["The Net Is Vast and Infinite", "Use Jim's keycard to infiltrate the NSN and view a recording without triggering any alarm."],
        ["The Supreme Enlightened", "Watch a bonus cutscene during the ending credits."],
        ["This is Great for Spring Cleaning", "Use both Knockback & Precision functions of the P.E.P.S. Arm Cannon at least once."],
        ["Time Traveler", "You managed to bring Koller the Neuroplasticity Calibrator before he even asked you for it."],
        ["Too Hot to Handle", "Complete the server chamber area without being detected by any HeatEye cameras or enemies."],
        ["Umlauts or no Umlauts", "Decide the Fixer's fate (A Criminal Past DLC)."],
        ["We Are Human Beings", "You completed Deus Ex: Mankind Divided on any difficulty."],
        ["Winners Don't Use Drugs (or Biocells)", "Complete A Criminal Past without using any Praxis Kits or Biocells (A Criminal Past DLC)."],
        ["You're Not Worthy As My Opponent", "Breach: Send 3 Challenges."],
    ];

    assert.strictEqual(officialAchievements.length, 81, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
