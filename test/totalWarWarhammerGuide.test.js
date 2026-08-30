import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-warhammer.js";

test("the Total War: Warhammer guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-warhammer-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-warhammer");

});

test("the Total War: Warhammer guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Settlement Construction",
            "Conquest: Occupying & Razing",
            "Economy, Characters & Diplomacy",
            "Units, Campaign Victories & Research",
            "Battle Challenges & Beastmen DLC",
            "Wood Elves, Bretonnia & Norsca DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 185-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /185 Steam achievements/);

});

test("every one of the 185 official Total War: Warhammer achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Scion of Volans", "Dark Academy", "Order of the Panther", "Ar-Ulric", "A Matter of Aim",
        "The Order of the Blazing Sun", "A Few Mild Impalings Amongst Friends", "A Nice Bit of Claret", "Queen of the Wasteland", "Sailor on the Sea of Claws",
        "Mine Castle; Mine Home", "Morr's Mate", "Shiny Fings!", "Swag 'n' Plunder!", "I'm Da Boss!",
        "Son of Grungni", "Brynduraz Excavator", "Take the Oath", "Ironclad", "The Most Enduring",
        "Imperial Architect", "Accessories by Kemmler", "We're Stayin' Put!", "We Are Legion", "Siggurd's Inheritance",
        "Sentinel of the North", "Swift Half of Bugman's XXXXXX?", "Vala-Azril-Ungol", "At the World's Edge", "Independence Lost",
        "Waaagh! on da North!", "Four Corners of the Old World", "Conqueror of the Southern Coasts", "Big Boss of All Da Boyz", "Unberogen Unearthed",
        "The Secret of the Grail", "Something Rotten in the State of Kislev", "Waaagh! on da Stunties!", "The Curse of Praag", "The Ultimate Grudge",
        "The Smell of Dinner, Burning...", "Lady Protect Thee!", "Waaagh! on Altdorf!", "Put Them to the Torch", "Bit of a Bonfire",
        "The Purifying Flames", "Pennypincher", "Skinflint", "Goldgatherer", "Raiderz",
        "Good Raiderz", "Da Best Raiderz", "Appraiser", "Factor", "Merchant",
        "The Industry of Drinking", "Champion", "Veteran", "Paragon", "Heroic Ideals",
        "Loyal Retainers", "Honour Guard", "Seeker of Power", "Keeper of the Royal Armoury", "Treasure Hunter",
        "Keeper of Relics", "Meddler in Magic", "Beast Keeper", "Beast Master", "Merchant Adventurer",
        "Merchant Prince", "Emissary", "Ambassador", "Get a Big Smelly Git", "Leonardo's Daemon",
        "Disciple of the Spider God", "This is Bat Country", "Herald of Famine, Undeath & War", "This is Troll Country", "Forged in Hell",
        "Reikscaptain", "Sigmar Reborn", "Emperor", "Elector Count", "High King of the Dwarfs",
        "Dwarf King", "Von Carstein's Return", "Vampire Count", "Da Greatest Warboss", "Da Big Warboss",
        "The Everchosen", "Archlord of Chaos", "A Quiet Man", "Master Engineer", "Inventor-General",
        "Dibna", "Skilled Engineer", "Non-Traditionalist", "Aspirant", "Necromancer",
        "Lichemaster", "Little Tinkerer", "More Luck Than Judgement", "Chief Spanna Whacka", "Damned Soul",
        "Slave to Darkness", "Approaching Daemonhood", "A Confrontational Nature", "First Among Equals", "Spells 'n' Skills 'n' Stuff",
        "Jack of All Trades, Master of Some", "Gatebreaker", "Embark Upon Adventure!", "Total Waaagh!", "A Time of War & Heroes",
        "Leadership Test", "Bloodthirsty", "The Journey's End", "Going Underground", "Lucky Streak",
        "Charnel Valley", "Down in the Underway at Midnight", "Grafs of the Empire", "Death from Above!", "Highly Unlikely",
        "Up For A Scrap", "Armchair General", "Armchair Emperor", "Outgunned & Outmatched", "Black Powder Pounder",
        "You vs. the Great Unclean Ones", "Master Tactician", "Taking the Initiative", "The Stuff of Legend", "None Shall Pass!",
        "Murder As Art", "Slaughter of the Anything-But Innocent", "Conqueror? God, More Like!", "Capture the Zoggin' Flag!", "Iron-Hard & Angry",
        "Fire Dragon", "The Meek Shall Inherit", "Arcane Spoils", "The Long War, the Endless Hunt", "Surprise! You're Dead...",
        "Neighbours of the Beast", "Through the Skin to the Soul", "The Unnatural Order", "Calling the Warherd", "Eye for a Ruinous Eye",
        "Take the Eye Test", "The Ravages of Gorthor", "Maze of Torment, Maze of Death", "Blessings from the Throne of Ruin", "Sap of the Beaming Sun",
        "The Undergrowth Advantage", "Warriors of Cythral", "Walk the Green Way", "Glade Lord", "King in the Woods",
        "The Hunt Rides Out", "Ariel's Champion", "Heart of the Forest", "Yn Edri Eternos", "Where Be Thy Treasure, There Be Thy Heart",
        "The Brotherhood of Seamen & Pilots", "Blessed Be The Lady", "The Secret of the Grail", "The Dream of What Could Be", "Knightly Misconduct",
        "For the Lady!", "Let Us Prey", "Master of the Hunt", "The Hunt Begins!", "Not All Crows Are Ravens",
        "Where Eagles Dare", "Every Dog Has Its Day", "A Nest of Vipers", "Tribal Chief", "Allegiance to the Gods",
        "Northern Powerhouse", "Marauding Hordes", "Pillagers of the Old World", "Troll Slayer", "Home Sweet Home",
    ];

    assert.strictEqual(officialAchievementNames.length, 185, "sanity check on this test's own reference list");

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
