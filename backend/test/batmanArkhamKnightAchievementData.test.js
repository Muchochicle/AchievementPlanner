import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/batman-arkham-knight.json - 113 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 208650 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("batman-arkham-knight");

test("getPlannerData('batman-arkham-knight') returns real planner data with 113 curated achievements", () => {

    assert.ok(game, "expected real planner data for batman-arkham-knight");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 113);

});

test("every Batman: Arkham Knight achievement has a unique id from 1 to 113 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 113 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 113);
    assert.strictEqual(new Set(apinames).size, 113);

});

test("every Batman: Arkham Knight achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 113 Batman: Arkham Knight achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Battle Within", "Fight for your sanity - a main-story marker."],
        ["A Blade of Memory", "Destroy all the Teeth, Balloons and Jack-in-the-Boxes (Batgirl DLC: A Matter of Family)."],
        ["A Courtship of Razors", "Defeat the Joker in the Batgirl DLC 'A Matter of Family'."],
        ["A Fire in the Heavens", "Rescue the hostages at the Ferris wheel (Batgirl DLC)."],
        ["A Heart Broken in Two", "Secure the secret base - a main-story marker."],
        ["A House Made of Spun Glass", "Rescue the hostages at the merry-go-round (Batgirl DLC)."],
        ["A Leap of Faith", "Complete 8 different jumps over 100 meters."],
        ["Absolution", "Achieve 69 Stars in AR Challenges."],
        ["Acts of Violence", "Achieve 21 Stars in AR Challenges playing as Nightwing."],
        ["All Snug in Their Beds", "Find all the hidden audio tapes revealing the park's history (Batgirl DLC)."],
        ["Ambush", "Defeat the thug who ambushes you during a Scarecrow hack sequence (Batgirl DLC)."],
        ["Angel in the Dark", "Complete Man-Bat's trials and prove you are a worthy successor (Most Wanted)."],
        ["As the Crow Flies", "Escape from ACE Chemicals - a main-story marker."],
        ["Ashes to Ashes", "End the League of Assassins' war."],
        ["Be Not Afraid", "Win the war for Gotham - a main-story marker."],
        ["Beautiful Boy", "Destroy the second weapons cache in Gotham City."],
        ["Blind Love", "Destroy the third weapons cache in Gotham City."],
        ["Blunt Trauma", "Perform every type of predator takedown."],
        ["Breaking the Skin", "Gain access to the high security area."],
        ["Brotherhood of the Fist", "Return of the Dynamic Duo - a main-story marker."],
        ["Brutality 101", "Perform 15 different combat moves in one FreeFlow."],
        ["Choice of Weapons", "Use all five Batmobile weapons successfully in one tank battle."],
        ["City of Fear", "Defend the assault on your ally's fortress."],
        ["Cold Case", "Interrogate the Militia Lieutenant."],
        ["Cold World", "Destroy the first weapons cache in Gotham City."],
        ["Creature of the Night", "Freedom of the city."],
        ["Cuckoo for Incarceration", "Defeat Nightwing in the Harley Quinn story DLC."],
        ["Cycle of Violence", "Use 100 Quick Gadgets while in free flow combat."],
        ["Dark Allegiances", "Apprehend Scarecrow's senior commander (Most Wanted: Occupy Gotham)."],
        ["Dark Wings Fly Away in Fear", "Learn what the Cloudburst is - a main-story marker."],
        ["Daughter Of The Demon!", "Discover the Lazarus pit."],
        ["Days of Fire", "Extinguish all the fires in Gotham City (Most Wanted: Firefly)."],
        ["Death and Glory", "Perform 20 fear takedowns."],
        ["Death by Design", "Obtain a key by completing the seventh Riddler trial."],
        ["Death of Innocents", "Rescue station 17 fire crew."],
        ["Dirty Tricks", "Achieve 3 minutes of drifting time in the Batmobile."],
        ["Double Jeopardy", "Face off with an old friend - Deacon Blackfire's cult (Most Wanted)."],
        ["Eternal", "Complete the Endless Knight AR Challenge, taking out 50 Enemies as Batman."],
        ["Evolution", "Lockup Killer Croc in GCPD."],
        ["Fear of Faith", "Rescue the ACE Chemical workers."],
        ["Fear of Success", "Survive Scarecrow's ambush - a main-story marker."],
        ["Fortunate Son", "Achieve 46 Stars in AR Challenges."],
        ["Gangland Express", "Achieve 33 Stars in AR Challenges using the 2008 Tumbler Batmobile."],
        ["Gates of Gotham", "Destroy all of the militia watchtowers."],
        ["Gotham After Midnight", "Glide for 400 meters while less than 20 meters from the ground."],
        ["Gotham Underground", "Defuse all of the militia explosive ordinance in Gotham City."],
        ["Head Games", "Rescue Mad Hatter's second hostage."],
        ["Higher Learning", "Achieve 21 Stars in AR Challenges playing as Red Hood."],
        ["In Storybook Endings", "Lock up Mad Hatter in GCPD."],
        ["Jekyll & Hyde", "Stop the bank heist on Miagani Island and lock up the master mind in GCPD."],
        ["Journey into Knight", "Even The Odds."],
        ["Joy Ride", "Achieve 33 Stars in AR Challenges using the 1960's TV Series Batmobile."],
        ["Judgment Day", "Win the rumble down under."],
        ["Knightfall", "Initiate the Knightfall Protocol (requires 100% completion)."],
        ["Lethal Pursuits", "Obtain a key by completing the ninth Riddler trial."],
        ["Life After Death", "Achieve 21 Stars in AR Challenges using the Original Arkham Batmobile."],
        ["Living Hell", "Interrogate the Militia APC Driver."],
        ["Master of Fear", "Wayne vs Crane - complete the main story."],
        ["Motherlode", "Achieve 21 Stars in AR Challenges playing as Batgirl."],
        ["Nine Lives", "Obtain a key by completing the last Riddler trial."],
        ["No Man's Land", "Restore power to the bridges of Gotham City."],
        ["Out in the Cold", "Track down the cryopod."],
        ["Pieces of the Puzzle", "Obtain a key by completing the second Riddler trial."],
        ["Point of Impact", "Perform 5 perfect shots in a row with the Vulcan Gun without taking damage."],
        ["Practice Run", "Destroy the fourth weapons cache in Gotham City."],
        ["Relentless", "Achieve 21 Stars in AR Challenges playing as Catwoman."],
        ["Requiem for a Killer", "Defeat an old adversary in the Iceberg Lounge AR Challenge, playing as Batman."],
        ["Riddle Me That", "Lock up the Riddler in GCPD (complete all Riddler challenges and races)."],
        ["Riddler on the Rampage", "Obtain a key by completing the fourth Riddler trial."],
        ["Rough Justice", "Stop Penguin's escape from GCPD."],
        ["Run Through the Jungle", "Fly under 3 main bridges between the islands in one continuous glide."],
        ["Savage Metal", "Smash 10 militia transport vehicles off the road without using the immobilizer."],
        ["Scar of the Bat", "Cure the doctor (Most Wanted: The Perfect Crime)."],
        ["Secrets of the Batcave", "Complete the Batcave AR Challenge unharmed as Batman and Nightwing, using only Beat Downs."],
        ["Seduction of the Gun", "Achieve 50 critical shots on light tanks."],
        ["Shock and Awe", "Achieve 21 Stars in AR Challenges playing as Azrael."],
        ["Silent Night, Deadly Night", "Complete the Silent Knight AR Challenge unharmed as Batman and Robin, using only Knockout Smashes."],
        ["Sins of Youth", "Achieve 23 Stars in AR Challenges."],
        ["Strange Deadfellows", "Deploy the Cloudburst countermeasures - a main-story marker."],
        ["Street Demonz", "Achieve 33 Stars in AR Challenges using the 1989 Movie Batmobile."],
        ["Streets of Gotham", "Destroy all of the militia checkpoints."],
        ["Succession Plans", "Break into Hell's Gate HQ and apprehend Two-Face."],
        ["The Beast Beneath", "Defeat the prisoners."],
        ["The Big Leagues", "Achieve 21 Stars in AR Challenges playing as Robin."],
        ["The Burning Question", "Obtain a key by completing the fifth Riddler trial."],
        ["The Cat and the Bat", "Obtain a key by completing the third Riddler trial."],
        ["The Cat Came Back", "Break into Riddler's secret hideout and exact your revenge."],
        ["The Chill in the Air", "Complete the Crime Alley AR Challenge unharmed as Batman, Robin and Nightwing."],
        ["The Cult", "Save the sacrificial victim and lock up the executioner in GCPD (Most Wanted: The Line of Duty)."],
        ["The Curtain Falls", "Flawless FreeFlow in every round of the Monarch Theatre as Batman, Robin, Nightwing and Catwoman."],
        ["The Demon Lives Again!", "Follow the assassin's trail."],
        ["The Frequency of Fear", "Scan Gotham City to pinpoint Scarecrow's location."],
        ["The Laughing Fish!", "Rescue the hostages on the ghost ship (Batgirl DLC)."],
        ["The Long Halloween", "Wayne vs Crane on New Story+ - complete the story a second time."],
        ["The Monster Machine", "Track down and apprehend the serial killer (Most Wanted: Professor Pyg)."],
        ["The Primal Riddle", "Obtain a key by completing the sixth Riddler trial."],
        ["The Real Deal", "Takedown 20 moving cars without using the Batmobile."],
        ["The Resurrection and the Life", "Survive the Militia onslaught."],
        ["The Riddle Factory", "Obtain a key by completing the eighth Riddler trial."],
        ["The Road Home", "Destroy all of the militia APC's."],
        ["The Road to Hell", "Successfully complete the first Riddler trial."],
        ["The Scene of the Crime", "Rescue Mad Hatter's first hostage."],
        ["The World's Finest", "Achieve 21 Stars in AR Challenges using the 2016 Batman v Superman Batmobile."],
        ["Touch of Death", "Apprehend the weapons dealer and lock him up in GCPD."],
        ["Trail of Fear", "Lock up your first Supervillain in GCPD."],
        ["Two Faces of Fear!", "Stop the bank heist on Bleake Island."],
        ["Two Sides of the Same Coin!", "Stop the bank heist on Founders' Island."],
        ["Under The Red Hood", "Defeat Black Mask in the Red Hood story DLC."],
        ["Vengeance Unlimited", "Achieve 21 Stars in AR Challenges playing as Harley Quinn."],
        ["Weird War Tales", "Defeat the hacking thug (Batgirl DLC)."],
        ["What the Butler Saw", "Complete the Wayne Manor AR Challenge as Batman without using any gadgets or taking any damage."],
        ["Who Rules The Night", "Batman vs the Arkham Knight - a main-story marker."],
        ["With a Vengeance!", "Take on the heavy artillery reinforcements."],
    ];

    assert.strictEqual(officialAchievements.length, 113, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
