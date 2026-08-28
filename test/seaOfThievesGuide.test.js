import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sea-of-thieves.js";

test("the Sea of Thieves guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sea-of-thieves-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sea-of-thieves");

});

test("the Sea of Thieves guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Pirate Skills",
            "The Trading Companies",
            "Tall Tales",
            "World Events & Foes",
            "Seasonal & Update Content",
            "Captaincy, Guilds & Milestones",
            "Hidden Achievement",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 293-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /293 Steam achievements/);

});

test("every one of the 293 official Sea of Thieves achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/sea-of-thieves.json).
    const officialAchievementNames = [
        "Bone-Cronch", "A Titanic Ensemble", "Dead Pirates DO Tell Tales", "Hold My Grog!", "I Don’t See Your Ship",
        "Laden With Treasure", "I'm On A Whole New Adventure", "You Can Always Trust The Untrustworthy", "When You're A Professional Pirate", "Tactical Chunder",
        "Now Bring Me That Horizon", "Full Billow", "Handbrake Turn", "I Wanna Be A Pirate!", "Shopping for a Promotion",
        "I'll Drink To That", "What Shall We Do with a Drunken Sailor? ", "#BeMorePirate", "Aye of Reach", "Blundarrrrbuss",
        "Colourful Sails", "You Fight Like A Merchant", "How Appropriate! You Fight Like A Chicken", "But You Have Heard Of Me?", "Self Entitled",
        "In Good Company", "Did Everyone See That?", "Become Pirate Legend", "Ignoring The Rules Of Engagement", "Kraken Good Job",
        "Perfect Dark", "Friends Not Foe", "Legends - \"Cronch\"", "Legends - \"The Greatest Race of All Time!\"", "Legends - \"This is Unacceptable!\"",
        "Legends - \"The Skullduggers\"", "It's A Pirates Life For Me", "Master Gold Hoarder", "Taking Orders", "Master of the Order",
        "I Am Not Obsessed With Treasure", "Master Merchant", "Seeker of Lost Maps", "Golden Voyager", "Sailor of the Gold Horizon",
        "Hoarder of Barnacled Gold", "Keeper of a Glittering Hoard", "Hoarder of the Captain’s Gold", "Merchant Adventurer", "Merchant Voyager",
        "Sailor of the Merchant Alliance", "Black Powder Merchant", "Merchant Forager", "Gilded Merchant", "Seeker of Lost Souls",
        "Voyager of Lost Souls", "Sailor of the Whispering Bones", "Hunter of Cursed Captains", "Mercenary of the Ancient Order", "Master Hunter Of Villainous Skulls",
        "Dining With the Stars", "Well Done!", "Not So Well Done", "Five a Day", "Another Pirate's Treasure",
        "Night Bite", "A Rare Delicacy", "Meat and Greet", "Hunter of Trophy Fish", "Hook, Line and Sinker",
        "Legendary Hunter of the Sea of Thieves", "Master of the Hunters", "The Shroudbreaker", "The Cursed Rogue", "The Legendary Storyteller",
        "Stars of a Thief", "Wild Rose", "The Art of the Trickster", "The Fate of the Morningstar", "Revenge of the Morningstar",
        "The Shores of Gold", "A Sunken Legacy", "Fateful Memories", "Sea of Dreams", "The Stolen Sky",
        "Always Yours", "The Trickster's Folly", "The Unbroken Bond", "The Morningstar Rises", "Seeker of Grand Adventure",
        "Smile, you son of a…", "A Spectrum of Shadows", "Summoning the Damned", "Defeating the Damned", "Banishing the Damned",
        "The Seabound Soul", "Fire and Ash", "Tome of Curses I ", "Tome of Curses II", "Tome of Curses III",
        "Tome of Curses IV", "Tome of Curses V", "Tome of Curses Collector", "Tome of Power I", "Tome of Power II",
        "Tome of Power III", "Tome of Power IV", "Tome of Power V", "Tome of Power Collector", "Unto the Horizon",
        "Tome of Fire I", "Tome of Fire II", "Tome of Fire III", "Tome of Fire IV", "Tome of Fire V",
        "Tome of Fire Collector", "Tome of Resurrection I", "Tome of Resurrection II", "Tome of Resurrection III", "Tome of Resurrection IV",
        "Tome of Resurrection V", "Tome of Resurrection Collector", "Heart of Fire", "The Blackwyche Reborn", "Collector of Legendary Treasures",
        "Golden Ticket", "Ship of Souls", "Trade Ambassador", "For Athena", "The Reaping Begins",
        "So… Many… Chests!", "Taking Heads", "Deliverance", "Legen… Wait for it… Dary!", "You Reap What You See",
        "Gold Hoarder Incarnate", "The Order's Finest", "Employee of the Month", "Athena's Greatest", "Feeding the Flame",
        "Banisher of the Spectral Flame", "Scourge of the Damned", "Hunter of Captain Grimm", "Hunter of Red Ruth", "Hunter of Old Horatio",
        "Hunter of Warden Chi", "We Don't Need Maps", "Golden Retriever", "No Mound Left Behind", "Wreckless Pursuit",
        "Get Wrecked", "Many, Many Manifests", "The Legend of Glitterbeard", "Convenient Stores", "A Pirate's Life",
        "Mist and Memory", "The Sunken Pearl", "Pearl in the Dark", "Captains of the Damned", "Captain of Haunted Waters",
        "Dark Brethren", "Fortress of Sorrow", "Lords of the Sea", "An Eternal Pirate Life", "A Pirate's Life for Me",
        "Mystery of Hungering", "Mystery of Flooded Embrace", "Mystery of Ocean's Fortune", "Mystery of the Coral Tomb", "Mystery of Ancient Tears",
        "Mystery of Tribute", "Sunken Kingdom Marauder", "Seeker of the Sea", "Legend of the Sunken Kingdom", "Stolen Secrets",
        "Who Needs A Bigger Boat?", "Night-Time Spectacular", "Tribute Seat", "Sleepover", "Critical Roll",
        "Hider of Secret Treasures", "Master Cartographer", "Seeker of Pirate Plunder", "Beholder of Buried Treasures", "What's Yours Is Mine",
        "Master Burglar", "From Whence They Came", "Veil Seeker", "Legendary Loot Seller", "True Legend",
        "O Captain!", "The Quartermaster", "A Crewed Wisdom", "The Art Collector", "Ready for Next Time",
        "Chasing the Horizon", "A Veteran Voyager", "A Touch of Class", "That's 'Captain', Mate...", "Spared No Expense",
        "A Professional Pirate", "A Seasoned Ship", "A Fleeting Fancy", "You Gotta Fight", "A Sunken Century",
        "Nigh Unsinkable!", "Blessing of Athena's Fortune", "Ritual of the Flame", "Getting A Head", "Hot-Headed",
        "Fortune-ate Outcome", "A Favour for the Flame", "Favour the Bold", "The Journey to Mêlée Island", "Mêlée Island Investigator",
        "The Quest for Guybrush", "Legendary Trial Master", "The Lair of LeChuck", "Do the Monkey!", "Legend of Monkey Island",
        "Guild Initiate", "Sworn Guild Captain", "Emissary of Guilds", "Distinguished Guild Member", "Legendary Guild Chef",
        "Legendary Guild Cannoneer", "Legendary Guild Navigator", "Legendary Guild Helm", "Distinguished Guild Legend", "Master of Siren Song",
        "Liberator of Siren Song", "Sacrifice of Siren Song", "Novice of Siren Song", "Guardian of Siren Song", "Seeking Sanctuary",
        "Port of Call", "The Wonder of Plunder", "Be In-Spired", "A Wild Excursion", "Pay Your Respects",
        "Pirate of Distinction", "Just Getting Started", "Voyager of Gold", "Voyager of the Soul", "Voyager for the Alliance",
        "Legendary Plunge", "Rib Roast", "Title Fight", "Krack Shot", "A Clash of Bones",
        "Smooth Landing", "Walk the Line", "This One's To Go", "Crew of the Burning Blade", "Burning Vengeance",
        "Sweltering Sword", "Hot Shot", "Sizzling Sinker", "Playing the Part", "Astral Protection",
        "Defender of the Pirate's Life", "Loyalist of the Flame", "Pressgang Grappler", "Enticing Explosion", "Revenge at Last",
        "The Power of Three", "Comfortable Sneaker", "Hidden in Plain Sight", "Hung Out to Dry", "Red Alert Raider",
        "Hunter of the Noble Voyage", "You're Going to Need a Bigger Bucket!", "Eel-ectric Tide", "Sea Beast Spear Hunter", "Voyager of Bones",
        "Bony Bodyguard", "Mobile Cannoneer", "Crew of Bone and Blade", "Devious Dinghy", "Shady Smuggler",
        "Marked Smuggler", "Smugglers' Riches", "Smuggler at Sea", "Vanquisher of the Eternal", "Explorer of Sacred Places ",
        "Broker of Banishment", "Violet Violence", "Are You Even Trying?!", "Don't Make Me Turn This Ship Around!", "Oh Wow, Kegs...",
        "Welcome to Custom Seas!", "So. Much. Silver!", "Tentacled Tribute"
    ];

    assert.strictEqual(officialAchievementNames.length, 293, "sanity check on this test's own reference list");

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
