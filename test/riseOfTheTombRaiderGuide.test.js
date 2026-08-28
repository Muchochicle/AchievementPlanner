import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rise-of-the-tomb-raider.js";

test("the Rise of the Tomb Raider guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rise-of-the-tomb-raider-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rise-of-the-tomb-raider");

});

test("the Rise of the Tomb Raider guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game: Combat & Skill Feats",
            "Base Game: Exploration, Collectibles & Completion",
            "Endurance & Co-op Challenges",
            "Story DLCs (Baba Yaga, Cold Darkness, Blood Ties, Lara's Nightmare)",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 143-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /143 Steam achievements/);

});

test("every one of the 143 official Rise of the Tomb Raider achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Bar Brawl", "Blade of Justice", "One-Sided Conversation", "Chemical Warfare", "Craftswoman",
        "English Pedigree", "Master Fletcher", "Fluent", "Glub Glub Glub", "Keen Eye",
        "Laying Down The Law", "Reading the Past", "Renegade", "A Trusty Old Friend", "Fall Guys",
        "Triple Threat", "Firestarter", "Was That Really Necessary?", "Weaponsmith", "Trick Shot",
        "Rotisserie", "My Own Worst Enemy", "Iron Will", "That All You Got?", "The Chosen Few",
        "Avid Shopper", "Following in Father's Footsteps", "Tougher Than She Looks", "Strange Acquaintance", "Taking the High Road",
        "A Helping Hand", "The Key To It All", "Whatever It Takes", "The Road Less Travelled", "The Price of Truth",
        "Ultimate Survivor", "Paying Respects", "For My Next Trick...", "Quiet Time", "Untouchable",
        "Bacon!", "Huntress", "Siberian Ranger", "Challenging", "No Stone Unturned",
        "Golden Child", "Zipper", "No Guts, No Glory", "Rapid Recovery", "Fearless",
        "Dead Ringer", "Quick and Painless", "Tomb Raider", "Good Samaritan", "Woman of the People",
        "Looking for Trouble", "Compulsive", "Truth Seeker", "Voices of the Past", "Self-Improvement Junkie",
        "Quite A Tumble", "Quite the Collector", "These Belong in A Museum", "Well Begun Is Half Done", "Gilded",
        "Way to Go", "Fond Farewell", "Master Archaeologist", "Raider", "Skillful Raider",
        "Fast Reflexes", "Well Done", "Still Tastes Good", "Nope", "Vacation",
        "Great Haul", "Happy Camper", "Nature Retreat", "Great Outdoors", "One Way to Do It",
        "Who Needs a Map?", "Hide and Seek", "Abandon All Hope", "A Moment of Clarity", "Amateur Chemist",
        "Last Ride of the Witch House", "Truth Behind the Myth", "Vasilisa's Lanterns", "The Witch Bottles", "Season of the Witch",
        "Complete History of Witchcraft", "Witch-Hunt", "Witch Trials", "Witchcraft for Beginners", "Witch's Wardrobe",
        "Servant of the Witch", "Persuasive Argument", "Bravo's Legacy", "Demon in the Dark", "The Wraith of Siberia",
        "Henny Penny", "Archaeologist", "Why the Chicken Crossed the Vale", "Uncovering the Truth", "Give a Man a Fire",
        "Armed For Bear", "Spinning Leaf", "Legendary Gunsmith", "To the Rescue", "Perfectionist",
        "Epidemiologist", "An Ocean in Storm", "Combat Specialist", "Complete Family History", "Enter the Nightmare",
        "Fight the Fear", "Home Raider", "Key to the Past", "Legacy", "Master Detective",
        "Meet the Crofts", "Relic Hunter", "Sweet Dreams", "A Feast for Two", "A Dinner for Two",
        "A Snack for Two", "Adventure Friends", "Adventure Besties", "Sisters of Artemis", "Sisters of Athena",
        "Team Survival", "Pick-Me-Up", "No One Left Behind", "Get Away from Her!", "Bonding Time",
        "Alone Time", "Communication Skills", "Master and Apprentice", "For the Night is Dark", "Teamwork",
        "\"Teamwork\"", "Say \"Aaah\"", "Extreme Survivor"
    ];

    assert.strictEqual(officialAchievementNames.length, 143, "sanity check on this test's own reference list");

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
